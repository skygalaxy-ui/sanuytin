import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });
dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const tgBotToken = process.env.TELEGRAM_BOT_TOKEN;
const tgChatId = process.env.TELEGRAM_CHAT_ID;

if (!supabaseUrl || !supabaseKey || !tgBotToken || !tgChatId) {
    console.log('Skip: Missing env variables.');
    process.exit(0);
}

const sb = createClient(supabaseUrl, supabaseKey);

async function run() {
    console.log("Fetching today's published posts for Evening Summary...");
    
    const now = new Date();
    const vnTime = new Date(now.getTime() + 7 * 60 * 60 * 1000);
    
    const year = vnTime.getUTCFullYear();
    const month = String(vnTime.getUTCMonth() + 1).padStart(2, '0');
    const date = String(vnTime.getUTCDate()).padStart(2, '0');
    
    const startOfDayStr = `${year}-${month}-${date}T00:00:00+07:00`;
    const endOfDayStr = `${year}-${month}-${date}T23:59:59+07:00`;

    // Fetch published today (using updated_at since auto-publish updates updated_at)
    const { data: publishedPosts } = await sb
        .from('posts')
        .select('title, updated_at')
        .eq('is_published', true)
        .gte('updated_at', startOfDayStr)
        .lte('updated_at', endOfDayStr)
        .order('updated_at', { ascending: true });

    let msg = `🌙 <b>Tổng Kết SanUyTin Hôm Nay (${date}/${month})</b>\n\n`;

    if (!publishedPosts || publishedPosts.length === 0) {
        msg += `Hôm nay móm, chưa xuất được bài nào lên mâm sếp ạ! 😅\n`;
    } else {
        msg += `Tổng hợp hôm nay hệ thống đã xuất thành công <b>${publishedPosts.length} bài</b>:\n\n`;
        publishedPosts.forEach(p => {
            const time = new Date(p.updated_at).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Ho_Chi_Minh' });
            msg += `✅ <b>${time}</b> - ${p.title}\n`;
        });
        msg += `\nTask hoàn thiện 100%. Anh em đội Content đi ngủ đây, chúc sếp ngủ ngon! 🥂`;
    }

    try {
        await fetch(`https://api.telegram.org/bot${tgBotToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: tgChatId,
                text: msg,
                parse_mode: 'HTML',
                disable_web_page_preview: true
            })
        });
        console.log("Evening report sent!");
    } catch(e) {
        console.error("Failed to send:", e.message);
    }
}
run();
