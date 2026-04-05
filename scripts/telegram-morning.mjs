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
    console.log("Fetching today's schedule for Morning Plan...");
    
    // Get start and end of today in UTC corresponding to VN timezone
    const now = new Date();
    // Move to VN timezone internally by adding 7 hours to UTC
    const vnTime = new Date(now.getTime() + 7 * 60 * 60 * 1000);
    
    const year = vnTime.getUTCFullYear();
    const month = String(vnTime.getUTCMonth() + 1).padStart(2, '0');
    const date = String(vnTime.getUTCDate()).padStart(2, '0');
    
    const startOfDayStr = `${year}-${month}-${date}T00:00:00+07:00`;
    const endOfDayStr = `${year}-${month}-${date}T23:59:59+07:00`;

    const { data: upcomingPosts } = await sb
        .from('posts')
        .select('title, scheduled_at')
        .not('scheduled_at', 'is', null)
        .gte('scheduled_at', startOfDayStr)
        .lte('scheduled_at', endOfDayStr)
        .order('scheduled_at', { ascending: true });

    let msg = `🌅 <b>Kế Hoạch SanUyTin Hôm Nay (${date}/${month})</b>\n\n`;

    if (!upcomingPosts || upcomingPosts.length === 0) {
        msg += `Hôm nay không có bài viết nào được xếp lịch sếp nhé! Nghỉ ngơi thôii ☕️\n`;
    } else {
        msg += `Hôm nay anh em đội Content lên đạn <b>${upcomingPosts.length} bài</b>:\n\n`;
        upcomingPosts.forEach(p => {
            const time = new Date(p.scheduled_at).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Ho_Chi_Minh' });
            msg += `⏰ <b>${time}</b> - ${p.title}\n`;
        });
        msg += `\nChúc sếp ngày mới nổ nhiều Lot! 📈🚀`;
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
        console.log("Morning report sent!");
    } catch(e) {
        console.error("Failed to send:", e.message);
    }
}
run();
