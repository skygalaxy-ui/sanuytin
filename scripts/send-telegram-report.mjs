import fs from 'fs';

// Tải Dotenv tương tự
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });
dotenv.config();

const tgBotToken = process.env.TELEGRAM_BOT_TOKEN;
const tgChatId = process.env.TELEGRAM_CHAT_ID;
const channelId = process.env.TELEGRAM_CHANNEL_ID;

if (!tgBotToken || !tgChatId) {
    console.log("Missing Telegram Bot Token or Chat ID. Skipping report.");
    process.exit(0);
}

if (!fs.existsSync('publish_report.json')) {
    console.log("No publish_report.json found. Skipping Telegram.");
    process.exit(0);
}

const reportData = JSON.parse(fs.readFileSync('publish_report.json', 'utf8'));

// 1. GỬI THÔNG BÁO CHO QUẢN TRỊ VIÊN (ADMIN CHAT)
async function sendAdminReport() {
    // Chỉ gửi nếu có bài mới xuất bản, hoăc có bài chuẩn bị xuất bản
    if (reportData.published.length === 0 && reportData.upcoming.length === 0) {
        console.log("Không có bài mới và không có bài chờ. Bỏ qua gửi tin rác.");
        return;
    }

    let msg = `✅ <b>SanUyTin Báo Cáo Xuất Bản</b>\n\n`;
    
    if (reportData.published.length > 0) {
        msg += `🚀 <b>Vừa đăng thành công (${reportData.published.length} bài):</b>\n`;
        reportData.published.forEach(p => {
            msg += `🔹 <a href="${p.url}">${p.title}</a>\n`;
            if (p.excerpt) {
                msg += `<i>${p.excerpt.slice(0, 150)}${p.excerpt.length > 150 ? '...' : ''}</i>\n`;
            }
        });
        msg += `\n`;
    } else {
        msg += `🚀 <b>Vừa đăng thành công:</b> 0 bài\n\n`;
    }

    if (reportData.upcoming && reportData.upcoming.length > 0) {
        msg += `⏳ <b>Chờ xuất bản hôm nay (${reportData.upcoming.length} bài):</b>\n`;
        reportData.upcoming.forEach(p => {
            const time = new Date(p.scheduled_at).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Ho_Chi_Minh' });
            msg += `▫️ ${time} - ${p.title}\n`;
        });
    } else {
        msg += `⏳ <b>Chờ xuất bản:</b> Đã hết bài cho hôm nay.\n`;
    }

    try {
        const res = await fetch(`https://api.telegram.org/bot${tgBotToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: tgChatId,
                text: msg,
                parse_mode: 'HTML',
                disable_web_page_preview: true
            })
        });
        if (res.ok) console.log("   ✅ Đã gửi báo cáo Admin thành công!");
        else console.error("   ❌ Lỗi gửi báo cáo Admin:", await res.text());
    } catch(e) {
        console.error("   ❌ Lỗi kết nối Telegram:", e.message);
    }
}

// 2. GỬI THÔNG BÁO SANG CHANNEL (BROADCAST)
async function sendChannelBroadcast() {
    if (!channelId || reportData.published.length === 0) return;
    
    for (const p of reportData.published) {
        try {
            const safeTitle = p.title.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
            const safePreview = (p.excerpt || '').replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
            const message = `🔥 *BÀI VIẾT MỚI:* *${safeTitle}*\n\n${safePreview ? safePreview + '\n\n' : ''}👉 [Đọc chi tiết tại đây](${p.url})`;
            
            const res = await fetch(`https://api.telegram.org/bot${tgBotToken}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: channelId,
                    text: message,
                    parse_mode: 'MarkdownV2',
                    link_preview_options: { is_disabled: false }
                })
            });
            if (res.ok) console.log(`   ✈️ Đã bắn bài sang Channel: ${p.title}`);
            else console.error(`   ⚠️ Lỗi bắn Channel:`, await res.text());
        } catch(e) {
            console.error(`   ❌ Lỗi Channel API:`, e.message);
        }
    }
}

async function run() {
    await sendAdminReport();
    await sendChannelBroadcast();
}

run();
