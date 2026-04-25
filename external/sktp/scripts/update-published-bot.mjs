import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

async function expandPost(post) {
    console.log(`\n⏳ Đang phẫu thuật trùng tu bài: "${post.title}"`);
    
    // ĐÂY LÀ KHUNG OUTLINE CHUẨN SEO ÁP DỤNG ĐỂ CẬP NHẬT LẠI BÀI CŨ
    const prompt = `
Bạn là một chuyên gia Content SEO hàng đầu chuyên ngách Tổ chức Sự Kiện (Event Management).
Bài viết sau đây đã được xuất bản nhưng nội dung đang quá ngắn, thiếu chiều sâu.
Nhiệm vụ của bạn là VIẾT MỚI LẠI TOÀN BỘ bài blog chi tiết, chuyên nghiệp, chuẩn SEO cho tiêu đề: "${post.title}".

OUTLINE CHUẨN MỰC BẮT BUỘC:
1. Độ dài bài viết: NGHIÊM NGẶT từ 900 đến 1200 từ. (Nội dung phải sâu sắc, cấm viết sáo rỗng).
2. Cấu trúc bài viết:
   - Mở bài hấp dẫn lôi cuốn (100 từ).
   - 3 đến 5 Thẻ Heading 2 (<h2>) chia rõ từng luận điểm mấu chốt.
   - Có điểm nhấn bằng chữ in đậm (<strong>) sát phạt vào các thuật ngữ chuyên ngành.
   - Kết bài kêu gọi hành động (Call to Action - CRO) chèn lời mời liên hệ "Sự Kiện Toàn Quốc" với giọng văn thôi thúc chốt sale thật mạnh.
3. Hình ảnh: Bạn PHẢI chèn đúng 3 hình ảnh minh họa bằng thẻ HTML <img> phân bổ đều giữa các luận điểm. 
   - Dùng cú pháp với các ảnh chụp lấy tự động (Pha trộn ngẫu nhiên): 
     <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop" alt="Mô tả ảnh seo" />
     <img src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1200&auto=format&fit=crop" alt="Mô tả ảnh seo" />
     <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop" alt="Mô tả ảnh seo" />
4. Định dạng ngõ ra: Trả về 100% là mã HTML hợp lệ (không bao gồm thẻ <html> hay <body>, chỉ dùng <p>, <h2>, <h3>, <ul>, <li>, <img>). 
TUYỆT ĐỐI không bọc trong dấu \`\`\`html.
`;

    if (!GEMINI_API_KEY) {
        throw new Error("LỖI: Sếp chưa gắn GEMINI_API_KEY trong file .env.local rồi!");
    }

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
         throw new Error("Gemini AI bị nghẽn, không trả về dữ liệu.");
    }
    
    htmlContent = htmlContent.replace(/^\`\`\`(html)?/gm, '').replace(/\`\`\`$/gm, '').trim();
    return htmlContent;
}

async function runUpdater() {
    console.log("🚀 BẮT ĐẦU QUÉT BÀI ĐÃ ĐĂNG BỊ NGẮN (THIẾU CHỮ) ĐỂ TRÙNG TU 🚀");
    
    // Chỉ lôi ra những bài ĐÃ ĐĂNG nhưng Content ngắn dưới 1500 ký tự (Thường bài dài > 4000 ký tự)
    // Sẽ bỏ qua 4 bài Roadshow khổng lồ mình vừa làm.
    const { data: publishedPosts } = await supabase
        .from('posts')
        .select('id, title, content')
        .eq('is_published', true)
        .order('published_at', { ascending: false });
        
    if (!publishedPosts || publishedPosts.length === 0) {
        console.log("Không có bài nào trên Web.");
        return;
    }

    const thinPosts = publishedPosts.filter(p => !p.content || p.content.length < 2500);
    
    if (thinPosts.length === 0) {
         console.log("✅ Toàn bộ bài đã đăng trên Web hiện tại đều là Bài Khổng Lồ. Không có rác Cần Trùng Tu!");
         return;
    }

    console.log(`Tìm thấy ${thinPosts.length} bài viết gầy còm cần bơm mỡ. Vận hành dao kéo...`);
    
    for (const post of thinPosts) {
        try {
            const expandedHtml = await expandPost(post);
            
            await supabase.from('posts').update({ 
                content: expandedHtml,
                updated_at: new Date().toISOString()
            }).eq('id', post.id);
            
            console.log(`✅ Thành công đắp 1200 từ cho: ${post.title}`);
            
            // Nghỉ 4 giây chống rate-limit
            await new Promise(resolve => setTimeout(resolve, 4000));
        } catch (e) {
            console.error(`❌ Đứt gãy ở bài "${post.title}":`, e.message);
        }
    }
    
    console.log("\n🎩 === KẾT THÚC BOT TRÙNG TU CÁC BÀI ĐÃ ĐĂNG ===");
}

runUpdater();
