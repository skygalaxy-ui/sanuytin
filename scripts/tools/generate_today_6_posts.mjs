import { GoogleGenerativeAI } from '@google/generative-ai';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// 1. Tải Biến Môi Trường
dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY || !GEMINI_API_KEY) {
    console.error("❌ Thiếu biến môi trường! Vui lòng kiểm tra .env.local");
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// Các Unsplash ID phù hợp với Premium Glassmorphism (Chart, Finance, Abstract)
const UNSPLASH_IMAGES = [
    "1611974789855-9c2a0a7236a3", "1590283625485-1f91d3dc50eb", "1642337775960-9dc4901fdb09",
    "1518186285570-55e4ea88f486", "1605792657660-596af9009e82", "1624996379697-f01d168b1a52",
    "1556155092-490a1ba16284", "1642543411037-37704df36341", "1614028674026-444c100ca26e",
    "1612001550772-ab930d6bf46c", "1611317181057-01df7be8b2e3", "1633158829585-23ba8b7c80af",
    "1613917409279-bf729b555eab", "1633519803120-cf00259b92bb", "1615840287214-723fb88ae403"
];

function getRandomImage(width = 800, height = 450) {
    const id = UNSPLASH_IMAGES[Math.floor(Math.random() * UNSPLASH_IMAGES.length)];
    return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;
}

// 6 Topics cho hôm nay
const TOPICS = [
    {
        title: "Bí Kíp Quản Lý Vốn: Bí Quyết Sinh Lời Gấp 3 Lần Trong Chia Sẻ Từ Chuyên Gia",
        slug: "bi-kip-quan-ly-von-loi-nhuan-giai-ma-2026",
        category: "quan-ly-von",
        tags: ["Quản lý vốn", "Tâm lý giao dịch", "Forex Newbie"]
    },
    {
        title: "Cách Đọc Mô Hình Nến Đảo Chiều Xác Suất Thắng 90% (Kèm Biểu Đồ Thực Tế)",
        slug: "cach-doc-mo-hinh-nen-dao-chieu-chuan-xac-thang-lon",
        category: "phan-tich-ky-thuat",
        tags: ["Nến Nhật", "Price Action", "Phân tích kỹ thuật"]
    },
    {
        title: "Kiểm Soát Tâm Lý Giao Dịch: Làm Sao Thoát Khỏi Bẫy FOMO Của 95% Trader?",
        slug: "kiem-soat-tam-ly-giao-dich-tranh-fomo",
        category: "kinh-nghiem",
        tags: ["Tâm lý giao dịch", "FOMO", "Kinh nghiệm trade"]
    },
    {
        title: "Chiến Lược Đánh Scalping Dễ Cháy Tài Khoản Nếu Bạn Bỏ Qua 5 Sai Lầm Này",
        slug: "5-sai-lam-chet-nguoi-khi-danh-scalping",
        category: "kien-thuc-nguoi-moi",
        tags: ["Scalping", "Kinh nghiệm trade", "Quản lý vốn"]
    },
    {
        title: "Trade Tin Non-Farm (NFP): Cách Theo Dấu Chân Cá Mập Trước Lệnh Ra Mắt",
        slug: "trade-tin-tuc-non-farm-chien-luoc-ca-map",
        category: "phan-tich-ky-thuat",
        tags: ["Non-farm", "Tin tức", "Thị trường"]
    },
    {
        title: "Phân Tích Cơ Bản vs Phân Tích Kỹ Thuật: Đâu Mới Là Chìa Khóa Ăn Đậm 2026?",
        slug: "phan-tich-co-ban-vs-phan-tich-ky-thuat",
        category: "kien-thuc-nguoi-moi",
        tags: ["Phân tích kỹ thuật", "Phân tích cơ bản", "Forex Newbie"]
    }
];

// Hàm Delay để không bị Google Gemini API rate limit
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function generateContent(topic) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

    const prompt = `
Viết một bài chuẩn chỉnh SEO, độ dài bắt buộc TRÊN 1000 TỪ (từ 1200 - 1500 từ) cho website Sàn Uy Tín.
Chủ đề: ${topic.title}
Từ khóa chính: ${topic.tags[0]}

Văn phong: Dành cho dân tài chính, đầu tư Forex, chuyên nghiệp nhưng vẫn dễ hiểu chuẩn phong cách "Premium Glassmorphism" (nghĩa là có cấu trúc rõ nét, thoáng đãng, chia block rõ ràng). 

Yêu cầu bắt buộc về Cấu trúc & Outline chuẩn SEO:
1. Thẻ H1 là tiêu đề (ở đầu văn bản). Mở bài (Sapo) hấp dẫn, kích thích người đọc và có chứa từ khóa chính ngay trong 100 từ đầu tiên.
2. Thân bài phải có Outline mạch lạc (ít nhất 3-4 thẻ H2 cốt lõi). Dưới mỗi H2 có các thẻ H3 triển khai ý chi tiết.
3. Nội dung chuyên sâu, phân tích kỹ, độ dài bắt buộc hơn 1000 từ. Hãy viết thật đầy đủ các ý, chứa các thông số ví dụ minh họa thực tế thị trường 2026 để tăng độ trust.
4. ĐIỂM ĐẶC BIỆT: Chèn đúng 3 placeholder ảnh trong bài dưới dạng:
   [IMAGE_1]
   [IMAGE_2]
   [IMAGE_3]
   Rải đều ở sau mỗi phần H2 khác nhau để minh họa. KHÔNG DÙNG THẺ <img> HTML NÀO! Chỉ ghi [IMAGE_X].
5. Cuối bài bắt buộc phải có mục FAQ (Những câu hỏi thường gặp) chứa ít nhất 3 thẻ H3 câu hỏi chuẩn SEO (có đánh dấu Hỏi/Đáp rõ ràng).
6. Sau FAQ, chèn thẻ H2 mang tên Kết Luận hoặc Tổng Kết và Lời Khuyên.

Tr trả về nguyên bản nội dung chuẩn HTML/Markdown, không cần ghi "Dưới đây là bài viết:" hay các câu rườm rà. Viết thẳng luôn nội dung Markdown.`;

    console.log(`🤖 Đang call Gemini tạo bài: ${topic.title}...`);
    const result = await model.generateContent(prompt);
    let text = result.response.text();

    // Thay thế Placeholder thành HTML tag để sát phong cách UI
    text = text.replace("[IMAGE_1]", `<img src="${getRandomImage(1200, 600)}" alt="${topic.tags[0]} minh hoạ 1" class="w-full rounded-2xl shadow-xl my-6" loading="lazy" />`);
    text = text.replace("[IMAGE_2]", `<img src="${getRandomImage(1200, 600)}" alt="${topic.tags[0]} minh hoạ 2" class="w-full rounded-2xl shadow-xl my-6" loading="lazy" />`);
    text = text.replace("[IMAGE_3]", `<img src="${getRandomImage(1200, 600)}" alt="${topic.tags[0]} minh hoạ 3" class="w-full rounded-2xl shadow-xl my-6" loading="lazy" />`);

    return text;
}

async function run() {
    console.log("🚀 Bắt đầu chiến dịch tự động tạo 6 bài viết cho hôm nay!\n");
    let successCount = 0;

    for (let i = 0; i < TOPICS.length; i++) {
        const topic = TOPICS[i];
        try {
            const content = await generateContent(topic);
            const excerpt = content.substring(content.indexOf('\n') + 1, content.indexOf('\n') + 200).replace(/#/g, '').replace(/\*/g, '').trim() + "...";
            const featured_image = getRandomImage(1200, 800);
            
            // Xếp lịch phân bổ đều từ hiện tại tới 10 tiếng tiếp theo
            const scheduleDate = new Date();
            scheduleDate.setHours(scheduleDate.getHours() + (i * 1.5));

            const postData = {
                title: topic.title,
                slug: topic.slug,
                category: topic.category,
                tags: topic.tags,
                excerpt: excerpt,
                content: content,
                featured_image: featured_image,
                featured_image_alt: topic.title,
                meta_title: topic.title,
                meta_description: excerpt.substring(0, 160),
                is_published: true, // Vì bạn muốn 6 bài cho "hôm nay", ta cho hiển thị thẳng luôn!
                scheduled_at: scheduleDate.toISOString() 
            };

            const { data, error } = await supabase
                .from('posts')
                .upsert([postData], { onConflict: 'slug' })
                .select();

            if (error) throw error;
            console.log(`✅ Đã thêm: ${topic.title} (Lịch ảo báo vào: ${scheduleDate.toLocaleTimeString()})`);
            successCount++;

            if (i < TOPICS.length - 1) {
                console.log("⏳ Nghỉ 5s để tránh Rate Limit API...");
                await delay(5000);
            }

        } catch (error) {
            console.error(`❌ Lỗi khi xử lý bài "${topic.title}":`, error.message);
        }
    }

    console.log(`\n🎉 HOÀN TẤT! Đã gieo thành công ${successCount}/${TOPICS.length} bài chuẩn SEO xịn nhất vào CMS.`);
    process.exit(0);
}

run();
