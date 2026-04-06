import dotenv from 'dotenv';
import fetch from 'node-fetch';
import { createClient } from '@supabase/supabase-js';
import * as dateFns from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

dotenv.config({ path: '.env.local' });

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error("Missing TELEGRAM config in .env.local");
  process.exit(1);
}

const sb = createClient(NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
const VN_TIMEZONE = 'Asia/Ho_Chi_Minh';

async function sendTelegram(htmlMessage) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: htmlMessage,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      })
    });
    if (!res.ok) {
      console.error("Failed to send to Telegram:", await res.text());
    } else {
      console.log("Telegram message sent successfully!");
    }
  } catch (err) {
    console.error("Fetch error sending Telegram:", err);
  }
}

async function run() {
  const type = process.argv[2]; // 'morning' or 'evening'
  const now = new Date();
  
  // Tim tat ca cac bai viet co lich dang trong hom nay (theo gio VN)
  const todayStartStr = formatInTimeZone(now, VN_TIMEZONE, 'yyyy-MM-dd') + 'T00:00:00+07:00';
  const todayEndStr = formatInTimeZone(now, VN_TIMEZONE, 'yyyy-MM-dd') + 'T23:59:59+07:00';

  const { data: posts, error } = await sb
    .from('posts')
    .select('title, scheduled_at, is_published')
    .gte('scheduled_at', todayStartStr)
    .lte('scheduled_at', todayEndStr)
    .order('scheduled_at', { ascending: true });

  if (error) {
    console.error("DB Error:", error);
    process.exit(1);
  }

  const todayDateFormatted = formatInTimeZone(now, VN_TIMEZONE, 'dd/MM/yyyy');

  if (type === 'morning') {
    let msg = `🌅 <b>KẾ HOẠCH ĐĂNG BÀI HÔM NAY (${todayDateFormatted})</b>\n\n`;
    if (!posts || posts.length === 0) {
      msg += `<i>Không có bài viết nào được lên lịch cho hôm nay.</i>`;
    } else {
      msg += `Chuẩn bị lên sóng <b>${posts.length} bài viết</b>:\n`;
      posts.forEach((p, idx) => {
        const timeStr = formatInTimeZone(new Date(p.scheduled_at), VN_TIMEZONE, 'HH:mm');
        msg += `${idx + 1}. [${timeStr}] - ${p.title}\n`;
      });
      msg += `\n<i>Hệ thống sẽ tự động xuất bản đúng giờ. Sếp yên tâm công tác nhé! 🚀</i>`;
    }
    await sendTelegram(msg);

  } else if (type === 'evening') {
    let msg = `🌙 <b>TỔNG KẾT CUỐI NGÀY (${todayDateFormatted})</b>\n\n`;
    if (!posts || posts.length === 0) {
      msg += `<i>Hôm nay không có bài viết nào trong lịch trình.</i>`;
    } else {
      const published = posts.filter(p => p.is_published);
      const failed = posts.filter(p => !p.is_published);
      
      msg += `Tổng quan: Hoàn thành <b>${published.length}/${posts.length}</b> bài.\n\n`;
      
      if (published.length > 0) {
        msg += `✅ <b>Đã đăng thành công:</b>\n`;
        published.forEach(p => msg += `- ${p.title}\n`);
      }
      
      if (failed.length > 0) {
        msg += `\n❌ <b>Chưa đăng (Cần kiểm tra):</b>\n`;
        failed.forEach(p => msg += `- ${p.title}\n`);
      }
      msg += `\n<i>Chúc sếp một buổi tối vui vẻ! 🍻</i>`;
    }
    await sendTelegram(msg);
  } else {
    console.log("Truyen tham so 'morning' hoac 'evening'. VD: node script.mjs morning");
  }
}

run();
