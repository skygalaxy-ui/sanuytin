import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // ============================================
    // XỬ LÝ NÚT BẤM ẢO (CALLBACK QUERY)
    // ============================================
    if (data.callback_query) {
      const cb = data.callback_query;
      const chatId = cb.message.chat.id.toString();
      if (chatId !== process.env.TELEGRAM_ALLOWED_ID) return NextResponse.json({ ok: true });

      const dataStr = cb.data || ""; 
      const parts = dataStr.split('|');
      const action = parts[0];
      const truncSlug = parts[1]; // Cắt gọn để không bị lỗi 64byte Telegram

      if (action === 'pub') {
         const { error } = await supabase.from('posts').update({ is_published: true, scheduled_at: null, updated_at: new Date().toISOString() }).like('slug', `${truncSlug}%`);
         if(error) await sendTelegramMsg(chatId, `❌ Lỗi xuất bản từ Nút: ${error.message}`);
         else await sendTelegramMsg(chatId, `🚀 Giao dịch thành công! Bài viết đã CÔNG KHAI và Xóa Hàng Chờ.`);
      } else if (action === 'del') {
         const { error } = await supabase.from('posts').delete().like('slug', `${truncSlug}%`);
         if(error) await sendTelegramMsg(chatId, `❌ Lỗi xóa bài từ Nút: ${error.message}`);
         else await sendTelegramMsg(chatId, `🗑 Đã dọn dẹp sạch sẽ bản nháp rác!`);
      } else if (action === 'sched') {
         // Tính toán Lên lịch Tự Động Xếp Hàng
         const { data: maxSched } = await supabase.from('posts').select('scheduled_at').gte('scheduled_at', new Date().toISOString()).order('scheduled_at', { ascending: false }).limit(1);
         let nextDate = new Date();
         nextDate.setDate(nextDate.getDate() + 1); // Quăng sang ngày mai
         nextDate.setHours(9, 0, 0, 0); // 9h sáng Giờ máy chủ
         
         if (maxSched && maxSched.length > 0 && maxSched[0].scheduled_at) {
             const lastDate = new Date(maxSched[0].scheduled_at);
             nextDate = new Date(lastDate);
             nextDate.setDate(nextDate.getDate() + 1); // Xếp hàng phía sau bài xa nhất thêm 1 ngày
         }
         
         const { error } = await supabase.from('posts').update({ scheduled_at: nextDate.toISOString(), is_published: false, updated_at: new Date().toISOString() }).like('slug', `${truncSlug}%`);
         if(error) await sendTelegramMsg(chatId, `❌ Lỗi lên lịch: ${error.message}`);
         else await sendTelegramMsg(chatId, `⏰ Đã ném vào kho xả tự động! Bài viết sẽ tự bắn lên Web vào: *${nextDate.toLocaleDateString('vi-VN')}* mượt mà.`);
      }
      
      // Xoá trạng thái Loading của Nút Bấm
      await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/answerCallbackQuery`, {
        method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({ callback_query_id: cb.id })
      });
      return NextResponse.json({ ok: true });
    }

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
    // 1. LÊN DÀN BÀI TRƯỚC (/danbai)
    // ============================================
    if (command === '/danbai') {
        const keyword = text.replace('/danbai', '').trim();
        if (!keyword) {
             await sendTelegramMsg(chatId, "⚠️ Sếp chưa nhập từ khoá. (VD: `/danbai Đánh giá sàn Exness`)");
             return NextResponse.json({ ok: true });
        }
        await sendTelegramMsg(chatId, `🧠 Đang vắt óc suy nghĩ Dàn Bài SEO đỉnh nhất cho: *${keyword}*...`);
        try {
            const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
            const prompt = `Yêu cầu làm khung dàn bài SEO (Chỉ ghi ra danh sách Heading 2, Heading 3, không cần viết chữ chi tiết) cho từ khóa: "${keyword}". Trình bày dưới dạng bullet text đơn giản để người dùng copy được dễ dàng.`;
            const result = await model.generateContent(prompt);
            const responseText = result.response.text();
            await sendTelegramMsg(chatId, `🎯 **DÀN BÀI CHO: ${keyword}**\n\n${responseText}\n\n👉 Sếp copy phần trên, sửa lại ý theo ý sếp, rồi dán vào lệnh sau để Robot viết:\n\`/vietbai ${keyword} | Dán dàn bài vào đây\``);
        } catch(e: any) {
            await sendTelegramMsg(chatId, `❌ Lỗi lên dàn ý: ${e.message}`);
        }
        return NextResponse.json({ ok: true });
    }

    // ============================================
    // 2. TẠO BÀI MỚI (/vietbai)
    // ============================================
    else if (command === '/vietbai') {
      const rawText = text.replace('/vietbai', '').trim();
      if (!rawText) {
         await sendTelegramMsg(chatId, "⚠️ Sếp chưa nhập từ khoá. (VD: `/vietbai Cách chơi forex | 1. Giới thiệu 2. Hướng dẫn...`)");
         return NextResponse.json({ ok: true });
      }

      let keyword = rawText;
      let customOutline = "";
      if (rawText.includes('|')) {
          const parts = rawText.split('|');
          keyword = parts[0].trim();
          customOutline = parts[1].trim();
      }

      await sendTelegramMsg(chatId, `⏳ Đang dùng Gemini AI tạo bài viết khoảng 2000 chữ cho từ khóa: *"${keyword}"*... \nSếp đợi chút nhé (tầm 15-20s).`);

      try {
        // Tự động kéo Link nội bộ cho AI viết
        const { data: recentPosts } = await supabase.from('posts').select('title, slug, category').eq('is_published', true).order('created_at', { ascending: false }).limit(5);
        let linkInstructions = "";
        if (recentPosts && recentPosts.length > 0) {
           linkInstructions = "\n\nBẠN BẮT BUỘC TÌM CÁCH chèn khéo léo ít nhất 2 link tham khảo nội bộ sau vào trong bài viết để tối ưu SEO (dùng thẻ <a href='...'>):";
           recentPosts.forEach(post => {
              const route = ['kien-thuc', 'kien-thuc-forex', 'huong-dan'].includes(post.category || '') ? 'kien-thuc-forex' : 'tin-tuc';
              linkInstructions += `\n- Link: https://sanuytin.net/${route}/${post.slug}/ (Anchor text: ${post.title})`;
           });
        }

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        let promptText = `Bạn là chuyên gia viết content chuẩn SEO mảng tài chính. Viết chi tiết (1500-2000 chữ) về: "${keyword}".
        Dùng HTML, các thẻ <h2>, <h3>, <ul>, <li>. Bôi đậm từ khóa chính. Không cần thẻ <h1>.${linkInstructions}`;
        
        if(customOutline) {
            promptText += `\n\nBẠN BẮT BUỘC TUÂN THỦ NGHIÊM NGẶT DÀN BÀI (OUTLINE) SAU ĐÂY CỦA TÔI ĐỂ PHÁT TRIỂN NỘI DUNG:\n${customOutline}`;
        }

        const prompt = `${promptText}
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

    // ============================================
    // 7. XEM TRƯỚC BẢN NHÁP (/xemnhap)
    // ============================================
    else if (command === '/xemnhap') {
        const slug = parts[1];
        if(!slug) return NextResponse.json({ ok: true });
        
        const { data: post, error } = await supabase.from('posts').select('title, content').eq('slug', slug).single();
        if(error || !post) {
            await sendTelegramMsg(chatId, `❌ Không tìm thấy văn bản nháp của: \`${slug}\`. Sếp kiểm tra lại mã bài viết nhé.`);
            return NextResponse.json({ ok: true });
        }
        
        // Loại bỏ mã HTML để duyệt text dễ nhất trên Telegram
        const plainText = post.content
             // Thêm dấu xuống dòng sau các thẻ block
            .replace(/<\/(p|h1|h2|h3|h4|h5|h6|ul|li|div)>/gi, '\n\n')
            .replace(/<li[^>]*>/gi, '• ')
            // Xoá toàn bộ thẻ HTML còn lại
            .replace(/<[^>]+>/g, '')
            // Giải mã HTML Entities cơ bản
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/\n\s*\n\s*\n/g, '\n\n') // Xoá bớt khoảng trắng thừa
            .trim();
        
        await sendTelegramMsg(chatId, `📰 **[BẢN ĐỌC THỬ]: ${post.title}**\n\n*(Dưới đây là nội dung đã được tách mã HTML để Sếp đọc duyệt dễ dàng nhất. Nếu bài quá dài hệ thống sẽ tự động cắt làm nhiều tin nhắn)*`);
        
        // Chia nhỏ tin nhắn nếu vượt quá 4000 ký tự (Giới hạn của Telegram)
        for (let i = 0; i < plainText.length; i += 3800) {
            await sendTelegramMsg(chatId, plainText.substring(i, i + 3800));
        }
    }

    // ============================================
    // 8. DANH SÁCH BẢN NHÁP CÓ NÚT BẤM (/danhsach)
    // ============================================
    else if (command === '/danhsach' || command === '/nhap') {
         const { data: drafts, error } = await supabase.from('posts').select('title, slug').eq('is_published', false).order('created_at', { ascending: false }).limit(5);
         if(error || !drafts || drafts.length === 0) {
             await sendTelegramMsg(chatId, "📭 Mâm cỗ sạch trơn. Hiện tại không có bài nháp nào đang chờ duyệt.");
             return NextResponse.json({ ok: true });
         }
         
         await sendTelegramMsg(chatId, "🏆 **TOP 5 BẢN NHÁP MỚI NHẤT ĐANG CHỜ DUYỆT:**");
         for (const draft of drafts) {
             const shortSlug = draft.slug.substring(0, 45); // Limit 64 bytes
             const text = `📰 **${draft.title}**\n*(/xemnhap ${shortSlug})*`;
             
             // Gửi Nút bấm Ảo riêng (Ngoại vi)
             const token = process.env.TELEGRAM_BOT_TOKEN;
             await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify({
                     chat_id: chatId,
                     text: text,
                     parse_mode: 'Markdown',
                     reply_markup: {
                         inline_keyboard: [
                             [
                                 { text: "🚀 XUẤT BẢN NGAY", callback_data: `pub|${shortSlug}` },
                                 { text: "⏰ LÊN LỊCH CHỜ", callback_data: `sched|${shortSlug}` }
                             ],
                             [
                                 { text: "🗑 XOÁ BỎ", callback_data: `del|${shortSlug}` }
                             ]
                         ]
                     }
                 })
             });
         }
         return NextResponse.json({ ok: true });
    }

    // MENU HƯỚNG DẪN MẶC ĐỊNH
    else {
       const helpText = `🏛 **HỆ THỐNG QUẢN TRỊ NỘI DUNG SANUYTIN** 🏛
       
Để thao tác, hệ thống cung cấp các mã lệnh chuyên nghiệp dưới đây. Quý quản trị viên có thể bấm trực tiếp để kích hoạt:

**1. Khởi tạo & Xem danh sách:**
👉 \`/vietbai [Tiêu đề/Từ khóa]\`: Yêu cầu AI viết bản nháp mới trọn vẹn (Tự động gắn chéo Link Website).
👉 \`/danhsach\`: Hiển thị các bài đang Nháp kèm **NÚT BẤM (Xóa/Xuất Bản)** lướt chạm sướng tay.

**2. Tiền kiểm & Chỉnh sửa (Dành cho bản Nháp):**
👉 \`/xemnhap [mã-bài]\`: Hiển thị toàn bộ văn bản nháp để duyệt lỗi trước khi đăng.
👉 \`/suatieude [mã-bài] [Tiêu đề mới]\`: Thay thế Tiêu đề bài viết.
👉 \`/suamota [mã-bài] [Mô tả mới]\`: Cập nhật đoạn Meta Description tóm tắt.
👉 \`/suanoidung [mã-bài] [Chỉ thị mới]\`: Yêu cầu AI can thiệp mài giũa lại nội dung (VD: Thêm phân tích chuyên môn).

**3. Phê duyệt & Hủy bỏ:**
👉 \`/xuatban [mã-bài]\`: Kích hoạt xuất bản trang web. Đẩy bài lên hệ thống và báo cáo vào Kênh Channel Cộng Đồng.
👉 \`/xoabai [mã-bài]\`: Huỷ bỏ và xoá vĩnh viễn văn bản.

*(Ghi chú: Lệnh [mã-bài] chính là chuỗi "Slug" được hệ thống tự động cung cấp ngay sau khi dùng lệnh /vietbai)*`;
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
