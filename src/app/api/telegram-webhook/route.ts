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

    const parts = text.split(' ');
    const command = parts[0].toLowerCase();
    
    // ============================================
    // 1. TẠO BÀI MỚI (/vietbai)
    // ============================================
    if (command === '/vietbai') {
      const keyword = text.replace('/vietbai', '').trim();
      if (!keyword) {
         await sendTelegramMsg(chatId, "⚠️ Sếp chưa nhập từ khoá. (VD: `/vietbai Cách chơi forex`)");
         return NextResponse.json({ ok: true });
      }

      await sendTelegramMsg(chatId, `⏳ Đang dùng Gemini AI tạo bài viết khoảng 2000 chữ cho từ khóa: *"${keyword}"*... \nSếp đợi chút nhé (tầm 15-20s).`);

      try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `Bạn là chuyên gia viết content chuẩn SEO mảng tài chính. Viết chi tiết (1500-2000 chữ) về: "${keyword}".
        Dùng thẻ <h2>, <h3>, <ul>, <li>. Bôi đậm từ khóa.
        Trả về ĐÚNG chuẩn JSON, KHÔNG wrap bằng \`\`\`json:
        {
          "title": "Tiêu đề hấp dẫn",
          "slug": "tieu-de-khong-dau-cach-ngang",
          "excerpt": "Mô tả 150 ký tự",
          "content": "Nội dung bài viết chứa mã HTML..."
        }`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text().replace(/```json/g, '').replace(/```/g, '').trim();
        const articleData = JSON.parse(responseText);

        const { error } = await supabase
          .from('posts')
          .insert([{
            title: articleData.title,
            slug: articleData.slug,
            excerpt: articleData.excerpt,
            content: articleData.content,
            category: 'kien-thuc-forex',
            is_published: false,
            meta_title: articleData.title,
            meta_description: articleData.excerpt,
          }]);

        if (error) throw error;
        
        const successMsg = `✅ **ĐÃ TẠO BẢN NHÁP THÀNH CÔNG!**
📝 Tiêu đề: ${articleData.title}
🔗 Slug: \`${articleData.slug}\`

*Các lệnh thao tác nhanh:*
👉 Sửa Tiêu Đề: \`/suatieude ${articleData.slug} Tiêu đề mới\`
👉 Sửa Mô Tả: \`/suamota ${articleData.slug} Mô tả mới\`
👉 Xuất Bản Ngay: \`/xuatban ${articleData.slug}\`
👉 Xoá Bài: \`/xoabai ${articleData.slug}\``;

        await sendTelegramMsg(chatId, successMsg);
      } catch (err: any) {
        await sendTelegramMsg(chatId, `❌ Lỗi rồi Sếp ơi: ${err.message}`);
      }
    }
    
    // ============================================
    // 2. SỬA TIÊU ĐỀ (/suatieude)
    // ============================================
    else if (command === '/suatieude') {
        const slug = parts[1];
        const newTitle = parts.slice(2).join(' ').trim();
        if(!slug || !newTitle) {
            await sendTelegramMsg(chatId, "⚠️ Sai cú pháp! VD: `/suatieude slug-bai-viet Tiêu đề siêu khét mới`");
            return NextResponse.json({ ok: true });
        }
        
        const { error } = await supabase.from('posts').update({ title: newTitle, meta_title: newTitle, updated_at: new Date().toISOString() }).eq('slug', slug);
        if(error) await sendTelegramMsg(chatId, `❌ Lỗi sửa tiêu đề: ${error.message}`);
        else await sendTelegramMsg(chatId, `✅ Đã đổi tiêu đề thành: *${newTitle}*`);
    }

    // ============================================
    // 3. SỬA MÔ TẢ (/suamota)
    // ============================================
    else if (command === '/suamota') {
        const slug = parts[1];
        const newExcerpt = parts.slice(2).join(' ').trim();
        if(!slug || !newExcerpt) {
            await sendTelegramMsg(chatId, "⚠️ Sai cú pháp! VD: `/suamota slug-bai-viet Đoạn tóm tắt mới`");
            return NextResponse.json({ ok: true });
        }
        const { error } = await supabase.from('posts').update({ excerpt: newExcerpt, meta_description: newExcerpt, updated_at: new Date().toISOString() }).eq('slug', slug);
        if(error) await sendTelegramMsg(chatId, `❌ Lỗi sửa mô tả: ${error.message}`);
        else await sendTelegramMsg(chatId, `✅ Đã đổi mô tả thành công!`);
    }

    // ============================================
    // 4. XUẤT BẢN NGAY (/xuatban)
    // ============================================
    else if (command === '/xuatban') {
        const slug = parts[1];
        if(!slug) return NextResponse.json({ ok: true });
        const { error } = await supabase.from('posts').update({ is_published: true, scheduled_at: null, updated_at: new Date().toISOString() }).eq('slug', slug);
        if(error) await sendTelegramMsg(chatId, `❌ Lỗi xuất bản: ${error.message}`);
        else await sendTelegramMsg(chatId, `🚀 Bài viết \`${slug}\` đã được đưa vào luồng Publish thành công!`);
    }

    // ============================================
    // 5. MÀI LẠI TRỌNG TÂM BÀI VIẾT BẰNG AI (/suanoidung)
    // ============================================
    else if (command === '/suanoidung') {
        const slug = parts[1];
        const instruction = parts.slice(2).join(' ').trim();
        if(!slug || !instruction) {
             await sendTelegramMsg(chatId, "⚠️ Cú pháp: `/suanoidung slug-bai-viet Yêu cầu AI sửa (ví dụ: Thêm phân tích chuyên môn phần nạp tiền)`");
             return NextResponse.json({ ok: true });
        }
        
        await sendTelegramMsg(chatId, `⏳ Đang đọc nội dung bài \`${slug}\` và gọi AI để mông má lại theo lệnh Sếp...`);
        
        // Fetch existing
        const { data: oldPost, error: errFetch } = await supabase.from('posts').select('content, title').eq('slug', slug).single();
        if(errFetch || !oldPost) {
            await sendTelegramMsg(chatId, "❌ Không tìm thấy bài viết này trong Database.");
            return NextResponse.json({ ok: true });
        }
        
        try {
            const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
            const prompt = `Hãy đóng vai biên tập viên. Dưới đây là bài viết "${oldPost.title}". YÊU CẦU SỬA CHỮA: ${instruction}\n\n Hãy viết lại nguyên bài với yêu cầu mới áp dụng vào nội dung này (Trả về hoàn toàn bằng mã HTML, KHÔNG cần Markdown bọc code):\n\n${oldPost.content}`;
            
            const result = await model.generateContent(prompt);
            const newContent = result.response.text().replace(/```html/g, '').replace(/```/g, '').trim();
            
            const { error: errUpdate } = await supabase.from('posts').update({ content: newContent, updated_at: new Date().toISOString() }).eq('slug', slug);
            if(errUpdate) throw errUpdate;
            
            await sendTelegramMsg(chatId, `✅ Đã sửa lại toàn bộ ruột Bài Viết \`${slug}\` theo ý đồ của Sếp!`);
        } catch(e: any) {
            await sendTelegramMsg(chatId, `❌ Lõi AI khi sửa nội dung: ${e.message}`);
        }
    }

    // ============================================
    // 6. XÓA BÀI (/xoabai)
    // ============================================
    else if (command === '/xoabai') {
        const slug = parts[1];
        if(!slug) return NextResponse.json({ ok: true });
        const { error } = await supabase.from('posts').delete().eq('slug', slug);
        if(error) await sendTelegramMsg(chatId, `❌ Xoá thất bại: ${error.message}`);
        else await sendTelegramMsg(chatId, `🗑 Đã diệt trừ tận gốc bài viết \`${slug}\`.`);
    }

    // MENU HƯỚNG DẪN MẶC ĐỊNH
    else {
       const helpText = `💎 **TRUNG TÂM ĐIỀU KHIỂN SANUYTIN** 💎
       
*Bạn có thể copy các lệnh này:*
👉 \`/vietbai [Tiêu đề/Từ khóa]\`: AI viết báo mới.
👉 \`/suatieude [slug] [Tiêu đề mới]\`: Đổi tiêu đề tích tắc.
👉 \`/suamota [slug] [Mô tả mới]\`: Sửa đoạn tóm tắt.
👉 \`/suanoidung [slug] [Yêu cầu sửa]\`: Ép AI viết lại nội dung theo ý đồ.
👉 \`/xuatban [slug]\`: Chốt sổ đẩy lên mạng.
👉 \`/xoabai [slug]\`: Xoá ngay bản nháp ngáo.

*(Lưu ý: "slug" là mã bài viết sinh ra lúc tạo bài, ví dụ: huong-dan-exness)*`;
       await sendTelegramMsg(chatId, helpText);
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
