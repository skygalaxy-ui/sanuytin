import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
// Hàm lấy API Groq
async function callGroqAI(prompt: string) {
    const key = process.env.GROQ_API_KEY;
    if (!key) throw new Error("Chưa cấu hình GROQ_API_KEY trong hệ thống Vercel.");
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${key}` },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
            response_format: { type: "json_object" }
        })
    });
    if (!res.ok) { const text = await res.text(); throw new Error(`Lỗi Groq API: ${text}`); }
    const data = await res.json();
    return data.choices[0].message.content;
}

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
         else await sendTelegramMsg(chatId, `✅ Cập nhật thành công. Bài viết đã được chuyển sang trạng thái: ĐÃ XUẤT BẢN.`);
      } else if (action === 'del') {
         const { error } = await supabase.from('posts').delete().like('slug', `${truncSlug}%`);
         if(error) await sendTelegramMsg(chatId, `❌ Lỗi xóa bài từ Nút: ${error.message}`);
         else await sendTelegramMsg(chatId, `✅ Đã xoá bản nháp khỏi hệ thống.`);
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
         if(error) await sendTelegramMsg(chatId, `❌ Lỗi thiết lập lên lịch: ${error.message}`);
         else await sendTelegramMsg(chatId, `✅ Lên lịch thành công. Bài viết sẽ tự động xuất bản vào lúc: *09:00, ${nextDate.toLocaleDateString('vi-VN')}*.`);
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
             await sendTelegramMsg(chatId, "⚠️ Vui lòng nhập từ khoá. (Cú pháp: `/danbai [Từ khóa]`)");
             return NextResponse.json({ ok: true });
        }
        await sendTelegramMsg(chatId, `⏳ Đang thiết lập cấu trúc bài viết SEO cho từ khóa: *${keyword}*...`);
        try {
            const prompt = `Yêu cầu làm khung dàn bài SEO (Chỉ ghi ra danh sách Heading 2, Heading 3, không cần viết chữ chi tiết) cho từ khóa: "${keyword}". Trình bày dưới dạng bullet text đơn giản để người dùng copy được dễ dàng.`;
            const responseText = await callGroqAI(prompt);
            await sendTelegramMsg(chatId, `🎯 **CẤU TRÚC BÀI VIẾT: ${keyword}**\n\n${responseText}\n\n👉 Vui lòng sử dụng cấu trúc trên để hiệu chỉnh (nếu cần), sau đó yêu cầu viết bài bằng lệnh:\n\`/vietbai ${keyword} | [Cấu trúc tùy chỉnh]\``);
        } catch(e: any) {
            await sendTelegramMsg(chatId, `❌ Quá trình tạo cấu trúc thất bại: ${e.message}`);
        }
        return NextResponse.json({ ok: true });
    }

    // ============================================
    // 2. TẠO BÀI MỚI (/vietbai)
    // ============================================
    else if (command === '/vietbai') {
      const rawText = text.replace('/vietbai', '').trim();
      if (!rawText) {
         await sendTelegramMsg(chatId, "⚠️ Vui lòng nhập từ khoá. Cú pháp: `/vietbai [Từ khóa]`");
         return NextResponse.json({ ok: true });
      }

      let keyword = rawText;
      let customOutline = "";
      if (rawText.includes('|')) {
          const parts = rawText.split('|');
          keyword = parts[0].trim();
          customOutline = parts[1].trim();
      }

      await sendTelegramMsg(chatId, `⏳ Đang xử lý nội dung chuyên sâu (ước tính 900-1200 từ) cho từ khóa: *"${keyword}"*... Vui lòng đợi trong giây lát.`);

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

        // Đã gỡ bỏ Gemini SDK
        // ==========================================
        // 💎 NƠI SẾP SET SẴN DÀN BÀI (OUTLINE) 💎
        // Sếp sửa dàn bài mặc định ở ngay biến dưới đây
        // ==========================================
        const DAN_BAI_MAC_DINH = `
          1. Giới thiệu tổng quan (H2)
          2. Đánh giá tính pháp lý và uy tín (H2)
          3. Đánh giá các loại tài khoản và phí giao dịch (H2)
          4. Hướng dẫn nạp rút và đánh giá tốc độ (H2)
          5. Kết luận (H2)
        `;

        let promptText = `Bạn là chuyên gia viết content chuẩn SEO mảng tài chính. Viết chi tiết (khoảng 900 đến 1200 chữ) về: "${keyword}".
        BẮT BUỘC Tiêu đề bài viết (title) VÀ Đoạn mô tả (excerpt) phải chứa chính xác và tự nhiên từ khóa: "${keyword}" để chuẩn hóa SEO.
        Dùng HTML, các thẻ <h2>, <h3>, <ul>, <li>. Bôi đậm từ khóa chính. Không cần thẻ <h1>.${linkInstructions}`;
        
        if(customOutline) {
            promptText += `\n\nBẠN BẮT BUỘC TUÂN THỦ NGHIÊM NGẶT DÀN BÀI SAU ĐÂY CỦA TÔI ĐỂ PHÁT TRIỂN NỘI DUNG:\n${customOutline}`;
        } else {
            promptText += `\n\nBẠN BẮT BUỘC TUÂN THỦ NGHIÊM NGẶT DÀN BÀI MẶC ĐỊNH SAU ĐÂY CỦA TÔI ĐỂ PHÁT TRIỂN NỘI DUNG:\n${DAN_BAI_MAC_DINH}`;
        }

        const prompt = `${promptText}
        Trả về ĐÚNG chuẩn JSON, KHÔNG wrap bằng \`\`\`json:
        {
          "title": "Tiêu đề hấp dẫn, TỰ NHIÊN và CÓ CHỨA TỪ KHÓA",
          "slug": "tieu-de-khong-dau-cach-ngang",
          "excerpt": "Mô tả chuẩn SEO khoảng 160 ký tự, TỰ NHIÊN và CÓ CHỨA TỪ KHÓA",
          "content": "Nội dung bài viết chứa mã HTML..."
        }`;

        const rawResponse = await callGroqAI(prompt);
        const responseText = rawResponse.replace(/```json/g, '').replace(/```/g, '').trim();
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
        await sendTelegramMsg(chatId, `❌ Lỗi quá trình tạo bài: ${err.message}`);
      }
    }
    
    // ============================================
    // 2. SỬA TIÊU ĐỀ (/suatieude)
    // ============================================
    else if (command === '/suatieude') {
        const slug = parts[1];
        const newTitle = parts.slice(2).join(' ').trim();
        if(!slug || !newTitle) {
            await sendTelegramMsg(chatId, "⚠️ Sai cú pháp. Vui lòng sử dụng: `/suatieude [mã-bài] [Tiêu đề mới]`");
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
            await sendTelegramMsg(chatId, "⚠️ Sai cú pháp. Vui lòng sử dụng: `/suamota [mã-bài] [Mô tả mới]`");
            return NextResponse.json({ ok: true });
        }
        const { error } = await supabase.from('posts').update({ excerpt: newExcerpt, meta_description: newExcerpt, updated_at: new Date().toISOString() }).eq('slug', slug);
        if(error) await sendTelegramMsg(chatId, `❌ Lỗi sửa mô tả: ${error.message}`);
        else await sendTelegramMsg(chatId, `✅ Cập nhật đoạn mô tả (Meta Description) thành công.`);
    }

    // ============================================
    // 4. XUẤT BẢN NGAY (/xuatban)
    // ============================================
    else if (command === '/xuatban') {
        const slug = parts[1];
        if(!slug) return NextResponse.json({ ok: true });
        const { error } = await supabase.from('posts').update({ is_published: true, scheduled_at: null, updated_at: new Date().toISOString() }).eq('slug', slug);
        if(error) await sendTelegramMsg(chatId, `❌ Lỗi xuất bản: ${error.message}`);
        else await sendTelegramMsg(chatId, `✅ Bài viết \`${slug}\` đã chuyển trạng thái thành: ĐÃ XUẤT BẢN.`);
    }

    // ============================================
    // 5. MÀI LẠI TRỌNG TÂM BÀI VIẾT BẰNG AI (/suanoidung)
    // ============================================
    else if (command === '/suanoidung') {
        const slug = parts[1];
        const instruction = parts.slice(2).join(' ').trim();
        if(!slug || !instruction) {
             await sendTelegramMsg(chatId, "⚠️ Sai cú pháp. Vui lòng sử dụng: `/suanoidung [mã-bài] [Chỉ thị tinh chỉnh]`");
             return NextResponse.json({ ok: true });
        }
        
        await sendTelegramMsg(chatId, `⏳ Đang tiến hành phân tích và tinh chỉnh nội dung bản nháp \`${slug}\` theo yêu cầu...`);
        
        // Fetch existing
        const { data: oldPost, error: errFetch } = await supabase.from('posts').select('content, title').eq('slug', slug).single();
        if(errFetch || !oldPost) {
            await sendTelegramMsg(chatId, "❌ Không tìm thấy văn bản nháp này trong Server.");
            return NextResponse.json({ ok: true });
        }
        
        try {
            const prompt = `Hãy đóng vai biên tập viên. Dưới đây là bài viết "${oldPost.title}". YÊU CẦU SỬA CHỮA: ${instruction}\n\n Hãy viết lại nguyên bài với yêu cầu mới áp dụng vào nội dung này (Trả về hoàn toàn bằng mã HTML, KHÔNG cần Markdown bọc code):\n\n${oldPost.content}`;
            
            const rawResponse = await callGroqAI(prompt);
            const newContent = rawResponse.replace(/```html/g, '').replace(/```/g, '').trim();
            
            const { error: errUpdate } = await supabase.from('posts').update({ content: newContent, updated_at: new Date().toISOString() }).eq('slug', slug);
            if(errUpdate) throw errUpdate;
            
            await sendTelegramMsg(chatId, `✅ Cập nhật nội dung bản nháp \`${slug}\` thành công.`);
        } catch(e: any) {
            await sendTelegramMsg(chatId, `❌ Lỗi xử lý AI: ${e.message}`);
        }
    }

    // ============================================
    // 6. XÓA BÀI (/xoabai)
    // ============================================
    else if (command === '/xoabai') {
        const slug = parts[1];
        if(!slug) return NextResponse.json({ ok: true });
        const { error } = await supabase.from('posts').delete().eq('slug', slug);
        if(error) await sendTelegramMsg(chatId, `❌ Lỗi xóa dữ liệu: ${error.message}`);
        else await sendTelegramMsg(chatId, `✅ Đã xoá quản lý dữ liệu bản nháp \`${slug}\` thành công.`);
    }

    // ============================================
    // 7. XEM TRƯỚC BẢN NHÁP (/xemnhap)
    // ============================================
    else if (command === '/xemnhap') {
        const slug = parts[1];
        if(!slug) return NextResponse.json({ ok: true });
        
        const { data: post, error } = await supabase.from('posts').select('title, content').eq('slug', slug).single();
        if(error || !post) {
            await sendTelegramMsg(chatId, `❌ Dữ liệu bản nháp \`${slug}\` không tồn tại. Vui lòng kiểm tra lại mã hệ thống.`);
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
        
        await sendTelegramMsg(chatId, `📰 **[BẢN ĐỌC THỬ]: ${post.title}**\n\n*(Dữ liệu đang ở chế độ xem trước (Văn bản thuần túy). Các phân đoạn quá giới hạn ký tự sẽ được tự động tách.)*`);
        
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
             await sendTelegramMsg(chatId, "📭 Hiện tại không có mục dữ liệu nháp nào trên hệ thống.");
             return NextResponse.json({ ok: true });
         }
         
         await sendTelegramMsg(chatId, "📋 **DANH SÁCH BẢN NHÁP GẦN ĐÂY NHẤT:**");
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
       const helpText = `🏛 **HỆ THỐNG QUẢN TRỊ NỘI DUNG** 🏛
       
Để thao tác, hệ thống cung cấp các mã lệnh chuyên nghiệp dưới đây. Quý quản trị viên có thể bấm trực tiếp để kích hoạt:

**1. Khởi tạo & Xem danh sách:**
👉 \`/vietbai [Tiêu đề/Từ khóa]\`: Tạo bản nháp mới bằng AI.
👉 \`/danhsach\`: Liệt kê các bản nháp chờ duyệt kèm Nút chức năng trực tiếp.

**2. Tiền kiểm & Chỉnh sửa (Dành cho bản Nháp):**
👉 \`/xemnhap [mã-bài]\`: Hiển thị trước văn bản nháp để duyệt lỗi.
👉 \`/suatieude [mã-bài] [Tiêu đề mới]\`: Cập nhật tiêu đề bài viết.
👉 \`/suamota [mã-bài] [Mô tả mới]\`: Cập nhật đoạn Meta Description tóm tắt.
👉 \`/suanoidung [mã-bài] [Chỉ thị tinh chỉnh]\`: Yêu cầu AI tinh chỉnh nội dung bản nháp.

**3. Phê duyệt & Hủy bỏ:**
👉 \`/xuatban [mã-bài]\`: Kích hoạt xuất bản trang web ngay lập tức.
👉 \`/xoabai [mã-bài]\`: Huỷ bỏ và xoá vĩnh viễn văn bản khỏi hệ thống.

*(Ghi chú: [mã-bài] là chuỗi phân định bài viết được cung cấp ngay khi tạo bản nháp mới)*`;
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
