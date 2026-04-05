/**
 * 📦 Telegram Notification Module — SanUyTin
 * ============================================
 * Module đóng gói hoàn chỉnh cho việc gửi thông báo Telegram.
 * KHÔNG chỉnh sửa file này trừ khi có yêu cầu bổ sung tính năng.
 * 
 * Sử dụng:
 *   import { sendTelegram, notifyFixComplete, notifyPublish } from '../lib/telegram.mjs';
 *   await sendTelegram('Nội dung tin nhắn');
 *   await notifyFixComplete('Mô tả fix', ['item 1', 'item 2']);
 *   await notifyPublish([{ title: '...', url: '...' }]);
 * 
 * Env vars cần có:
 *   TELEGRAM_BOT_TOKEN — Token từ @BotFather
 *   TELEGRAM_CHAT_ID   — Chat ID nhận tin (admin)
 */

import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const API_BASE = `https://api.telegram.org/bot${BOT_TOKEN}`;

/**
 * Gửi tin nhắn Telegram cơ bản
 * @param {string} text — Nội dung tin nhắn (hỗ trợ HTML)
 * @param {string} [chatId] — Chat ID (mặc định dùng TELEGRAM_CHAT_ID)
 * @returns {Promise<{ok: boolean, description?: string}>}
 */
export async function sendTelegram(text, chatId = CHAT_ID) {
  if (!BOT_TOKEN || !chatId) {
    console.error('❌ Telegram: Thiếu BOT_TOKEN hoặc CHAT_ID');
    return { ok: false, description: 'Missing credentials' };
  }

  try {
    const res = await fetch(`${API_BASE}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });
    const json = await res.json();
    if (!json.ok) console.error('❌ Telegram API:', json.description);
    return json;
  } catch (err) {
    console.error('❌ Telegram fetch error:', err.message);
    return { ok: false, description: err.message };
  }
}

/**
 * Thông báo hoàn thành fix/update
 * @param {string} summary — Tóm tắt việc đã làm
 * @param {string[]} items — Danh sách chi tiết
 */
export async function notifyFixComplete(summary, items = []) {
  const now = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
  const itemList = items.map(i => `  • ${i}`).join('\n');
  const msg = `✅ <b>SanUyTin — Fix Hoàn Tất</b>\n\n🔧 <b>${summary}</b>\n${itemList ? '\n' + itemList : ''}\n\n⏰ ${now}`;
  const result = await sendTelegram(msg);
  console.log(result.ok ? '✅ Đã gửi thông báo fix!' : '❌ Gửi thất bại');
  return result;
}

/**
 * Thông báo bài viết mới đã publish
 * @param {Array<{title: string, url?: string, excerpt?: string}>} articles
 */
export async function notifyPublish(articles) {
  if (!articles.length) return;
  const now = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
  const list = articles.map(a => {
    const link = a.url ? `<a href="${a.url}">${a.title}</a>` : a.title;
    return `🔹 ${link}${a.excerpt ? '\n  <i>' + a.excerpt + '</i>' : ''}`;
  }).join('\n');

  const msg = `📢 <b>SanUyTin — Bài Viết Mới</b>\n\n🚀 Vừa đăng ${articles.length} bài:\n${list}\n\n⏰ ${now}`;
  const result = await sendTelegram(msg);
  console.log(result.ok ? '✅ Đã gửi thông báo publish!' : '❌ Gửi thất bại');
  return result;
}

/**
 * Thông báo lỗi
 * @param {string} context — Bối cảnh lỗi
 * @param {string} errorMsg — Nội dung lỗi
 */
export async function notifyError(context, errorMsg) {
  const now = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
  const msg = `🚨 <b>SanUyTin — LỖI</b>\n\n❌ <b>${context}</b>\n<code>${errorMsg}</code>\n\n⏰ ${now}`;
  return sendTelegram(msg);
}

// Cho phép chạy trực tiếp: node lib/telegram.mjs "tin nhắn test"
if (process.argv[1]?.includes('telegram.mjs') && process.argv[2]) {
  sendTelegram(process.argv[2]).then(r => {
    console.log(r.ok ? '✅ Sent!' : '❌ Failed: ' + r.description);
    process.exit(r.ok ? 0 : 1);
  });
}
