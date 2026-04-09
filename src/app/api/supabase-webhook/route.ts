import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // Webhook payload từ Supabase (pg_net)
    const payload = await req.json();
    const { type, table, schema, record, old_record } = payload;

    // Chỉ theo dõi bảng 'posts'
    if (table !== 'posts') return NextResponse.json({ ok: true });

    let message = '';
    const TITLE = record?.title || old_record?.title || 'Không rõ tiêu đề';
    const SLUG = record?.slug || old_record?.slug || '';
    
    // Tạo link
    const KNOWLEDGE_CATEGORIES = ['kien-thuc', 'kien-thuc-forex', 'kien-thuc-dau-tu', 'huong-dan', 'kinh-nghiem', 'kien-thuc-nguoi-moi', 'phan-tich-ky-thuat', 'quan-ly-von', 'cong-cu-trading', 'dau-tu-quy'];
    const cat = record?.category || old_record?.category || 'tin-tuc';
    const folder = KNOWLEDGE_CATEGORIES.includes(cat) ? 'kien-thuc-forex' : 'tin-tuc';
    const url = `https://sanuytin.net/${folder}/${SLUG}`;

    if (type === 'INSERT') {
      message = `🟢 <b>[TẠO BÀI MỚI]</b>\nTiêu đề: <a href="${url}">${TITLE}</a>\nTrạng thái: ${record.is_published ? 'Đã xuất bản' : 'Bản nháp'}`;
    } else if (type === 'UPDATE') {
      // Phân tích loại Update: Lên lịch, Sửa bài, hay Đăng bài
      const oldPub = old_record.is_published;
      const newPub = record.is_published;
      const oldSched = old_record.scheduled_at;
      const newSched = record.scheduled_at;

      if (!oldPub && newPub) {
         message = `🚀 <b>[ĐĂNG BÀI XUẤT BẢN]</b>\nBài viết: <a href="${url}">${TITLE}</a>\nĐã chính thức hiển thị trên Website!`;
      } else if (oldSched !== newSched && newSched) {
         const time = new Date(newSched).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
         message = `⏰ <b>[LÊN LỊCH ĐĂNG]</b>\nBài viết: <a href="${url}">${TITLE}</a>\nSẽ lên sóng lúc: ${time}`;
      } else {
         message = `✏️ <b>[SỬA BÀI VIẾT]</b>\nBài viết: <a href="${url}">${TITLE}</a>\nVừa được cập nhật cấu trúc / nội dung.`;
      }
    } else if (type === 'DELETE') {
      message = `🗑 <b>[XÓA BÀI VIẾT]</b>\nBài viết: <b>${TITLE}</b> đã bị xoá khỏi Website!`;
    }

    if (!message) return NextResponse.json({ ok: true });

    // Gửi Telegram
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
    
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
       await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
           chat_id: TELEGRAM_CHAT_ID,
           text: message,
           parse_mode: 'HTML',
           disable_web_page_preview: true
         })
       });
    }

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error('Supabase Webhook Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
