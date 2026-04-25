const { createClient } = require('@supabase/supabase-js');
const { GoogleGenAI } = require('@google/genai');



// 1. Initialize Clients
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

if (!process.env.GEMINI_API_KEY) {
    console.error("❌ LỖI: Chưa tìm thấy GEMINI_API_KEY trong file .env.local!");
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const BATCH_LIMIT = 50; // Xử lý 50 bài mỗi lần chạy để an toàn, có thể tăng lên nếu muốn

// Hàm tiện ích đếm số từ
function getWordCount(htmlString) {
    if (!htmlString) return 0;
    const cleanContent = htmlString.replace(/<[^>]*>?/gm, ' ');
    return cleanContent.split(/\s+/).filter(w => w.length > 0).length;
}

// Cấu trúc Prompt cực kỳ chặt chẽ dặn dò AI chuẩn SEO
const SYSTEM_PROMPT = `
Bạn là một chuyên gia Content SEO xuất sắc làm việc cho công ty "Sự Kiện Toàn Quốc" (Website chuyên tư vấn, thi công, cung cấp thiết bị và tổ chức Sự kiện, Teambuilding, Year End Party, Hội nghị tại Hà Nội, Đà Nẵng, TP.HCM).

Nhiệm vụ: Dựa vào Tên Bài Viết (Title), hãy viết một bài chuẩn SEO từ 900 - 1200 từ.
Yêu cầu bắt buộc:
1. Đảm bảo cấu trúc H2, H3 rõ ràng, phân đoạn logic. KHÔNG in đậm bừa bãi. CHỈ TRẢ VỀ mã HTML (không có thẻ bao bọc html, body, doctype - chỉ từ <h2> trở đi).
2. Không viết lời chào thừa thãi như "Chào bạn", "Dưới đây là". Đi thẳng vào nội dung.
3. Nội dung phải thực tế, chuyên môn cao, mang giá trị chiều sâu cho tệp khách hàng B2B (Dân Hành chính nhân sự, Marketing, Ban Giám đốc). Không viết kiểu văn mẫu hời hợt lớp 1.
4. Ở cuối bài, LUÔN LUÔN có một đoạn kết luận (H2. Tổng Kết / Liên hệ) kêu gọi khách hàng gọi ngay vào Hotline 0854 517 868 để "Sự Kiện Toàn Quốc" hỗ trợ lên Bản thảo kịch bản, báo giá thi công trọn gói với chi phí tối ưu nhất hiện nay.
5. Bài viết phải có ít nhất 1 lần In đậm kết hợp với keyword (Tên bài viết).
6. FORMAT ĐẦU RA BẮT BUỘC CHỈ CÓ THẺ HTML. KHÔNG có Markdown (\`\`\`html).
`;

async function main() {
    console.log("🔍 Đang kết nối Database và tìm kiếm bài viết Thin Content (< 800 từ) chưa xuất bản...");
    
    // Lấy bài viết chưa published
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, content')
        .eq('is_published', false)
        .order('scheduled_at', { ascending: true });
        
    if (error) {
        console.error("❌ Lỗi lấy dữ liệu Subapase:", error);
        return;
    }
    
    // Lọc ra các bài mỏng
    const thinPosts = posts.filter(p => getWordCount(p.content) < 800).slice(0, BATCH_LIMIT);
    
    if (thinPosts.length === 0) {
        console.log("✅ Xin chúc mừng! Không tìm thấy bài viết nào bị lỗi (Thin content). Hoặc tất cả đã được sửa.");
        return;
    }
    
    console.log("🔥 Tìm thấy " + thinPosts.length + " bài cần viết lại. Bắt đầu kích hoạt AI...");
    
    let successCount = 0;
    
    for (let i = 0; i < thinPosts.length; i++) {
        const post = thinPosts[i];
        console.log("[Tiến độ: " + (i+1) + "/" + thinPosts.length + "] Đang viết lại bài: " + post.title + "...");
        
        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-pro', // Hoặc gemini-2.5-flash nếu cần chạy tốc độ và tiết kiệm báo giá
                contents: [
                    { text: SYSTEM_PROMPT },
                    { text: "Tên bài viết cần làm (Title): " + post.title }
                ],
                config: {
                    temperature: 0.7,
                }
            });
            
            let rawHtml = response.text || '';
            // Xóa rác markdown nếu Gemini có chèn nhầm
            rawHtml = rawHtml.replace(/\`\`\`html/g, '').replace(/\`\`\`/g, '').trim();
            
            const words = getWordCount(rawHtml);
            
            if (words < 700) {
                console.log("  ⚠️  Bài viết AI trả về hơi ngắn (" + words + " từ). Vẫn lưu nhưng sẽ cần chú ý.");
            } else {
                console.log("  ✅ Đã viết xong! Chiều dài: " + words + " từ.");
            }
            
            // Xả vào Database
            const { error: updateError } = await supabase.from('posts').update({ content: rawHtml }).eq('id', post.id);
            
            if (updateError) {
                console.error("  ❌ Lỗi kết nối CSDL khi cập nhật bài " + post.title + ": ", updateError);
            } else {
                successCount++;
            }
            
            // Tạm nghỉ 4 giây để chống sập API Rate-Limit của Google
            if (i < thinPosts.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 4000));
            }
            
        } catch (err) {
            console.error("  ❌ Lỗi gọi API ở bài " + post.title + ":", err.message || err);
            // Tiếp tục vòng lặp dẫu có lỗi
        }
    }
    
    console.log("\\n🎉 XONG! Đã sửa thành công " + successCount + "/" + thinPosts.length + " bài. Hãy chạy lại file này để làm mẻ 50 bài tiếp theo.");
}

main();
