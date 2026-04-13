import { createClient } from '@supabase/supabase-js';

const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const getDate = (daysAhead) => {
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    date.setHours(7, 30, 0, 0);
    return date.toISOString();
};

const fxproContent = `
<h2>1. FxPro - Tượng đài của sự chuyên nghiệp</h2>
<p><strong>FxPro</strong> là một trong số ít những sàn giao dịch sở hữu hơn 100 giải thưởng quốc tế lớn. Với trụ sở tại Luân Đôn và sự giám sát chặt chẽ từ FCA, FxPro được coi là bến đỗ an toàn bậc nhất cho các nhà đầu tư lớn tại Việt Nam.</p>

<h2>2. Tại sao FxPro lại đẳng cấp?</h2>
<p>FxPro hoạt động theo mô hình <strong>No Dealing Desk (NDD)</strong>, điều này có nghĩa là sàn không can thiệp vào lệnh của bạn. Lệnh sẽ được đẩy trực tiếp ra thị trường liên ngân hàng, đảm bảo tính công bằng và loại bỏ hoàn toàn xung đột lợi ích giữa sàn và trader.</p>

<h2>3. Nền tảng giao dịch đa dạng</h2>
<p>Tại FxPro, bạn có thể trải nghiệm tất cả các công nghệ giao dịch đỉnh cao nhất:</p>
<ul>
    <li><strong>FxPro Edge:</strong> Nền tảng độc quyền siêu mượt cho nền tảng web.</li>
    <li><strong>cTrader:</strong> Công cụ dành cho trader muốn tốc độ khớp lệnh cực nhanh.</li>
    <li><strong>MT4 & MT5:</strong> Hai công cụ kinh điển nhất ngành.</li>
</ul>

<h2>4. Ưu và Nhược điểm</h2>
<ul>
    <li><strong>Ưu điểm:</strong> Hạ tầng siêu mạnh, giấp phép FCA uy tín hàng đầu, không can thiệp lệnh khách hàng, hỗ trợ eKYC nhanh chóng.</li>
    <li><strong>Nhược điểm:</strong> Spread có thể cao hơn một chút so với các sàn ECN thuần túy, không có các chương trình khuyến mãi nạp tiền.</li>
</ul>

<h2>5. Kết luận</h2>
<p>FxPro dành cho những nhà đầu tư cần sự tin tưởng tuyệt đối vào hệ thống và mong muốn giao dịch lâu dài. Xem thêm <strong><a href="https://sanuytin.net/kien-thuc-forex/top-10-san-forex-uy-tin-nhat-viet-nam-2026/">danh sách 10 sàn Forex tốt nhất hiện nay</a></strong>.</p>
`;

const post = {
    title: "Review Sàn FxPro 2026: Đánh Giá Chi Tiết Giấy Phép FCA & Phí Giao Dịch",
    slug: "review-san-fxpro-2026-chi-tiet",
    category: "review",
    tags: ["fxpro", "review san", "môi giới anh quốc", "đánh giá uy tín"],
    excerpt: "Review chi tiết sàn FxPro năm 2026. Phân tích tại sao sàn FxPro luôn nằm trong top các sàn Forex an toàn nhất thế giới nhờ giấy phép FCA Anh Quốc siêu uy tín.",
    meta_title: "Review Sàn FxPro 2026 ✓ Sàn Forex Hàng Đầu Anh Quốc",
    meta_description: "Đánh giá sàn FxPro mới nhất 2026. Review hạ tầng No Dealing Desk (NDD), giấy phép FCA Anh Quốc và các nền tảng cTrader mượt mà nhất. Xem ngay!",
    featured_image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=80",
    featured_image_alt: "Đánh giá sàn FxPro",
    is_published: false,
    scheduled_at: getDate(14), // March 17
    author: 'Sàn Uy Tín',
    content: fxproContent
};

async function main() {
    console.log('🚀 Lên lịch bài viết review sàn FxPro...');
    const { error } = await sb.from('posts').insert([post]);
    if (error) {
        console.error('❌ Lỗi:', error.message);
    } else {
        console.log(`✅ Thành công! Bài viết đã được lên lịch vào ngày ${post.scheduled_at.split('T')[0]}.`);
    }
}

main();
