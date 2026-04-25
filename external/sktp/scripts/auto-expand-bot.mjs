import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Lưu ý: Cần thêm GEMINI_API_KEY vào file .env.local
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function expandPost(post) {
    console.log(`Đang phân tích bài: ${post.title}`);
    
    const prompt = `
Bạn là một chuyên gia Content SEO hàng đầu trong lĩnh vực Tổ chức Sự Kiện (Event Management).
Nhiệm vụ của bạn là viết một bài blog chi tiết, chuyên nghiệp, chuẩn SEO cho tiêu đề sau: "${post.title}".

YÊU CẦU BẮT BUỘC:
1. Độ dài bài viết: NGHIÊM NGẶT từ 900 đến 1200 từ. Không viết dài lê thê quá 1200 từ, cũng không viết ngắn dưới 900 từ.
2. Cấu trúc bài viết:
   - Mở bài hấp dẫn (100 từ).
   - 3 đến 5 Thẻ Heading 2 (<h2>).
   - Có điểm nhấn bằng chữ in đậm (<strong>) cho các từ khóa quan trọng.
   - Kết bài kêu gọi hành động (Call to Action) liên hệ "Sự Kiện Toàn Quốc".
3. Hình ảnh: Bạn PHẢI chèn đúng 3 hình ảnh minh họa bằng thẻ HTML <img> ở giữa các đoạn văn. 
   - Dùng cú pháp với các ảnh có sẵn sau (chọn ngẫu nhiên): 
     <img src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1200&auto=format&fit=crop" alt="Mô tả ảnh" />
     <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop" alt="Mô tả ảnh" />
     <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Mô tả ảnh" />
4. Format: Trả về 100% là mã HTML hợp lệ (không bao gồm thẻ <html> hay <body>, chỉ bao gồm các thẻ <p>, <h2>, <h3>, <ul>, <li>, <img>,...). Không bọc trong dấu \`\`\`html.
`;

    if (!GEMINI_API_KEY) {
        throw new Error("LỖI: Chưa có GEMINI_API_KEY trong file .env.local");
    }

    // Gọi Gemini API (Google Generative AI REST endpoint)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 2500,
            }
        })
    });

    const data = await response.json();
    
    if (data.error) {
        throw new Error(data.error.message);
    }
    
    let htmlContent = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!htmlContent) {
         throw new Error("API không trả về nội dung hợp lệ.");
    }
    
    // Clean up markdown code blocks if gemini included them
    htmlContent = htmlContent.replace(/^\`\`\`(html)?/gm, '').replace(/\`\`\`$/gm, '').trim();

    return htmlContent;
}

async function runAutoExpander() {
    console.log("=== BẮT ĐẦU BOT AUTO-EXPANDER (900-1200 TỪ) ===");
    
    // Lấy 5 bài viết ngắn nhất chưa đăng (content dưới 500 ký tự)
    const { data: drafts } = await supabase
        .from('posts')
        .select('id, title, content')
        .eq('is_published', false)
        .order('scheduled_at', { ascending: true })
        .limit(5);
        
    if (!drafts || drafts.length === 0) {
        console.log("Không còn bài nháp nào cần mở rộng.");
        return;
    }
    
    for (const post of drafts) {
        try {
            // Nếu bài đã có bài dài thì bỏ qua
            if (post.content && post.content.length > 3000) {
                 console.log(`Bỏ qua bài "${post.title}" vì đã đủ dài.`);
                 continue;
            }
            
            const expandedHtml = await expandPost(post);
            
            // Validate sơ bộ số lượng ảnh
            const imgCount = (expandedHtml.match(/<img/g) || []).length;
            console.log(`-> Gen xong (${expandedHtml.length} chars, ${imgCount} ảnh). Cập nhật DB...`);
            
            await supabase.from('posts').update({ 
                content: expandedHtml,
                updated_at: new Date().toISOString()
            }).eq('id', post.id);
            
            console.log(`✅ Thành công!`);
            
            // Nghỉ 3 giây chống rate-limit
            await new Promise(resolve => setTimeout(resolve, 3000));
        } catch (e) {
            console.error(`❌ Lỗi khi xử lý bài "${post.title}":`, e.message);
        }
    }
    
    console.log("=== KẾT THÚC TIẾN TRÌNH ===");
}

runAutoExpander();
