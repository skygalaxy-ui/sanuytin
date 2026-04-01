import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const message = data.message;
    if (!message || !message.text) {
      return NextResponse.json({ ok: true });
    }

    const chatId = message.chat.id.toString();
    const text = message.text;

    // Bảo mật: Chỉ người có Chat ID này mới gọi được bot
    if (chatId !== process.env.TELEGRAM_ALLOWED_ID) {
      console.warn("Unauthorized Telegram ID:", chatId);
      return NextResponse.json({ ok: true });
    }

    if (text.startsWith('/vietbai')) {
      const keyword = text.replace('/vietbai', '').trim();
      
      if (!keyword) {
         await sendTelegramMsg(chatId, "Sếp quên nhập từ khoá rồi. Cách dùng: /vietbai [từ khóa]");
         return NextResponse.json({ ok: true });
      }

      // 1. Phản hồi để Sếp biết đã nhận lệnh (Không cần chờ)
      sendTelegramMsg(chatId, `⏳ Đang dùng Gemini AI tạo bài viết 2000 chữ cho từ khóa: *"${keyword}"*... \nSếp đợi chút nhé (tầm 15-20s).`);

      // 2. Viết bài bằng Google Gemini
      try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `Bạn là một chuyên gia viết content SEO về mảng tài chính (Forex, Sàn giao dịch).
        Viết một bài thật chi tiết, dài khoảng 1500 - 2000 chữ về chủ đề: "${keyword}".
        Yêu cầu:
        - Bài viết chuẩn SEO, sử dụng thẻ <h2>, <h3>, <ul>, <li> hợp lý. Bôi đậm các từ khóa quan trọng.
        - Giọng văn chuyên nghiệp, trung lập, phân tích khách quan.
        - Trả về ĐÚNG cấu trúc JSON, KHÔNG BỌC TRONG markdown \`\`\`json. Format bắt buộc:
        {
          "title": "Tiêu đề bài viết hấp dẫn (60-70 ký tự)",
          "slug": "tieu-de-khong-dau-cach-nhau-bang-dau-gach-ngang",
          "excerpt": "Đoạn mô tả ngắn gọn (meta description) 150 ký tự",
          "content": "Nội dung bài viết chứa mã HTML (như <h2>, <b>...)"
        }`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text().replace(/```json/g, '').replace(/```/g, '').trim();
        const articleData = JSON.parse(responseText);

        // 3. Đăng nháp vào Supabase
        const { data: insertedData, error } = await supabase
          .from('posts')
          .insert([{
            title: articleData.title,
            slug: articleData.slug,
            excerpt: articleData.excerpt,
            content: articleData.content,
            category: 'kien-thuc-forex',
            is_published: false, // Lưu Nháp
            tags: [],
            meta_title: articleData.title,
            meta_description: articleData.excerpt,
          }])
          .select()
          .single();

        if (error) throw error;

        // 4. Báo cáo thành công qua Telegram
        await sendTelegramMsg(chatId, `✅ **HOÀN THÀNH!**\n\n📝 Bài viết: ${articleData.title}\n🔹 Trạng thái: 🟡 BẢN NHÁP (Draft)\n\n👉 Sếp vào CMS để xem lại và Phát Hành nhé!`);

      } catch (err: any) {
        console.error("AI Generation Error:", err);
        await sendTelegramMsg(chatId, `❌ Lỗi rồi Sếp ơi: ${err.message}`);
      }
    } else {
       await sendTelegramMsg(chatId, "Để bắt đầu, hãy gõ lệnh:\n/vietbai [từ_khóa]");
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Webhook Error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

// Hàm phụ trợ gửi tin nhắn Telegram
async function sendTelegramMsg(chatId: string, text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  try {
     await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'Markdown' }),
    });
  } catch(e) {
     console.error("Lỗi gửi tin Telegram:", e);
  }
}
