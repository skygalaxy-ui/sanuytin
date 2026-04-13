import { createClient } from '@supabase/supabase-js';

const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

// Helper to get future dates
const getDate = (daysAhead) => {
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    date.setHours(7, 0, 0, 0); // Open at 7:00 AM VN time
    return date.toISOString();
};

const postsToSchedule = [
    {
        title: "Đánh Giá Sàn XTB 2026: Nền Tảng xStation 5 Và Chính Sách Phí Swap Vàng",
        slug: "danh-gia-san-xtb-chi-tiet-2026",
        category: "review",
        tags: ["đánh giá sàn", "xtb", "xstation 5", "review sàn"],
        excerpt: "Review chi tiết sàn XTB năm 2026. Tại sao đây là sàn Forex uy tín phù hợp nhất cho trader giao dịch Vàng với chính sách miễn phí qua đêm (Swap-free).",
        meta_title: "Đánh Giá Sàn XTB 2026: Ưu Nhược Điểm & Phí Giao Dịch",
        meta_description: "Tìm hiểu chi tiết sàn XTB 2026. Đánh giá nền tảng xStation, giấy phép, nạp rút và chính sách phí swap Vàng cực tốt cho trader Việt.",
        featured_image: "https://images.unsplash.com/photo-1611974717424-34cca55476a6?w=1200&q=80",
        is_published: false,
        scheduled_at: getDate(1), // March 4
        author: 'Sàn Uy Tín',
        content: `
<h2>1. Giới thiệu về sàn XTB</h2>
<p>XTB là một nhà môi giới trực tuyến toàn cầu hàng đầu, được thành lập tại Ba Lan vào năm 2002. Với hơn 20 năm kinh nghiệm, XTB hiện là một công ty Fintech thực thụ, niêm yết trên Sở giao dịch chứng khoán Warsaw (WSE). Điều này mang lại sự minh bạch tài chính cực cao mà ít <strong><a href="https://sanuytin.net/kien-thuc-forex/top-10-san-forex-uy-tin-nhat-viet-nam-2026/">sàn Forex uy tín</a></strong> nào có được.</p>

<h2>2. Giấy phép pháp lý</h2>
<p>XTB được cấp phép bởi các cơ quan tài chính uy tín bậc nhất thế giới:</p>
<ul>
    <li>FCA (Anh)</li>
    <li>CySEC (Síp)</li>
    <li>KNF (Ba Lan)</li>
    <li>DFSA (Dubai)</li>
</ul>

<h2>3. Nền tảng giao dịch độc quyền xStation 5</h2>
<p>Khác với hầu hết các sàn sử dụng MT4/MT5, XTB đã phát triển nền tảng xStation 5 riêng biệt. Đây là một trong những nền tảng giao dịch mượt mà nhất hiện nay, cung cấp tốc độ khớp lệnh trung bình dưới 33ms và giao diện hiện đại, dễ sử dụng cho cả người mới và chuyên gia.</p>

<h2>4. Ưu điểm nổi bật cho Trader Việt</h2>
<ul>
    <li><strong>Miễn phí Swap cho Vàng:</strong> XTB là sàn Forex rất hào phóng khi miễn phí phí qua đêm cho lệnh Vàng, giúp trader giữ lệnh dài hạn tiết kiệm được khoản chi phí khổng lồ.</li>
    <li><strong>Nạp rút nhanh:</strong> Hỗ trợ nạp tiền qua Ngân Lượng và ví điện tử, tiền về tài khoản ngân hàng Việt Nam cực nhanh.</li>
    <li><strong>Dịch vụ hỗ trợ:</strong> Có đội ngũ chuyên viên người Việt hỗ trợ tận tình 1-1.</li>
</ul>

<h2>5. Kết luận</h2>
<p>XTB là lựa chọn hoàn hảo cho những ai thích sự minh bạch và muốn giao dịch Vàng dài hạn. Hãy thử so sánh các thông số của XTB với các sàn khác tại <strong><a href="https://sanuytin.net/so-sanh/">bảng so sánh sàn Forex</a></strong> để thấy rõ ưu thế.</p>
    `
    },
    {
        title: "Review Sàn Pepperstone 2026: Sàn Forex Uy Tín Nhất Về Tốc Độ Khớp Lệnh",
        slug: "review-san-pepperstone-chi-tiet-2026",
        category: "review",
        tags: ["pepperstone", "đánh giá sàn", "ctrader", "review"],
        excerpt: "Đánh giá chi tiết sàn Pepperstone từ Úc. Review phí spread từ 0.0 pips, khớp lệnh ECN cực nhanh và khả năng kết nối TradingView.",
        meta_title: "Review Sàn Pepperstone 2026: Sàn Forex Cho Pro Trader",
        meta_description: "Phân tích sàn Pepperstone 2026. Review chi tiết về phí Razor, tốc độ khớp lệnh, nền tảng cTrader và kết nối TradingView. Đánh giá thực tế.",
        featured_image: "https://images.unsplash.com/photo-1611974717424-34cca55476a6?w=1200&q=80",
        is_published: false,
        scheduled_at: getDate(3), // March 6 (March 5 is for comparison article)
        author: 'Sàn Uy Tín',
        content: `
<h2>1. Pepperstone - "Con cưng" của ngành Fintech Úc</h2>
<p>Thành lập từ năm 2010 tại Melbourne, Pepperstone đã nhanh chóng trở thành một trong những nhà môi giới ngoại hối lớn nhất thế giới. Sàn nổi tiếng với tốc độ xử lý lệnh cực nhanh và thanh khoản sâu từ các ngân hàng Tier-1.</p>

<h2>2. Tại sao chuyên gia chọn Pepperstone?</h2>
<ul>
    <li><strong>Tốc độ thực thi:</strong> Hơn 99% lệnh được xử lý chỉ trong vài mili giây, giúp khớp giá chính xác nhất.</li>
    <li><strong>Razor Account:</strong> Cung cấp spread thô từ 0.0 pips, rất phù hợp cho dân Scalping.</li>
    <li><strong>Kết nối TradingView:</strong> Đây là một trong số ít <strong><a href="https://sanuytin.net/kien-thuc-forex/top-10-san-forex-uy-tin-nhat-viet-nam-2026/">sàn Forex uy tín</a></strong> cho phép bạn giao dịch trực tiếp trên biểu đồ TradingView cực kỳ chuyên nghiệp.</li>
</ul>

<h2>3. Đánh giá của Pepperstone so với XTB</h2>
<p>Nếu bạn phân vân, hãy đọc bài <strong><a href="https://sanuytin.net/so-sanh/so-sanh-san-xtb-va-pepperstone-2026/">so sánh sàn XTB và Pepperstone</a></strong> của chúng tôi để hiểu rõ nhu cầu của bản thân phù hợp với sàn nào hơn.</p>

<h2>4. Kết luận</h2>
<p>Pepperstone cực kỳ ổn định và minh bạch. Đây là sàn "phải có" trong danh mục của các Pro Trader cần tốc độ và biểu đồ chuyên nghiệp.</p>
    `
    },
    {
        title: "Thông Tin Sàn Plus500 2026: Sàn CFD Niêm Yết Tại London Có Uy Tín Không?",
        slug: "thong-tin-san-plus500-chi-tiet-2026",
        category: "review",
        tags: ["plus500", "đánh giá sàn", "cfd", "london market"],
        excerpt: "Review sàn Plus500 năm 2026. Thông tin chi tiết về sàn giao dịch CFD niêm yết trên sàn chứng khoán London, ưu và nhược điểm cho người mới.",
        meta_title: "Thông Tin Sàn Plus500 2026: Đánh Giá Pháp Lý & Phí",
        meta_description: "Tìm hiểu toàn bộ thông tin về sàn Plus500 trong năm 2026. Review sàn CFD niêm yết LSE, độ bảo mật, nền tảng đơn giản và các chi phí giao dịch.",
        featured_image: "https://images.unsplash.com/photo-1611974717424-34cca55476a6?w=1200&q=80",
        is_published: false,
        scheduled_at: getDate(4), // March 7
        author: 'Sàn Uy Tín',
        content: `
<h2>1. Plus500 là ai?</h2>
<p>Plus500 là nhà môi giới CFD đa tài sản được niêm yết trên Sàn chứng khoán London (LSE) và nằm trong chỉ số FTSE 250. Điều này khẳng định Plus500 là một trong những <strong><a href="https://sanuytin.net/kien-thuc-forex/top-10-san-forex-uy-tin-nhat-viet-nam-2026/">sàn Forex uy tín</a></strong> nhất về mặt tuân thủ quy định và tài chính.</p>

<h2>2. Ưu điểm nổi bật</h2>
<ul>
    <li><strong>Minh bạch:</strong> Là công ty đại chúng, mọi báo cáo tài chính của họ đều được công khai.</li>
    <li><strong>Nền tảng đơn giản:</strong> Nền tảng của Plus500 cực kỳ thân thiện với người mới, không phức tạp như MT4/MT5.</li>
    <li><strong>Không phí hoa hồng:</strong> Plus500 chủ yếu thu phí qua Spread cạnh tranh.</li>
</ul>

<h2>3. Điểm cần lưu ý</h2>
<p>Tuy nhiên, Plus500 không hỗ trợ các nền tảng bên ngoài và không hỗ trợ giao dịch Robot. Nếu bạn là một trader thủ công thích giao diện hiện đại, sạch sẽ thì đây là lựa chọn số 1.</p>

<h2>4. Kết luận</h2>
<p>Plus500 đại diện cho thế hệ sàn giao dịch hiện đại và bảo mật cao. Hãy kiểm tra thêm <strong><a href="https://sanuytin.net/so-sanh/">bảng so sánh sàn giao dịch</a></strong> để xem Plus500 đứng ở đâu so với các đối thủ của mình.</p>
    `
    }
];

async function main() {
    console.log('📅 Đang lên lịch đăng bài cho hệ thống Admin...');

    // 1. Cập nhật 2 bài đã đăng về trạng thái Scheduled
    const { error: updateError } = await sb.from('posts')
        .update({ is_published: false, scheduled_at: getDate(2), published_at: null }) // So sánh vào ngày kia (March 5)
        .eq('slug', 'so-sanh-san-xtb-va-pepperstone-2026');

    const { error: updatePillarError } = await sb.from('posts')
        .update({ is_published: false, scheduled_at: getDate(5), published_at: null }) // Pillar vào 4 ngày nữa (March 8)
        .eq('slug', 'top-10-san-forex-uy-tin-nhat-viet-nam-2026');

    if (updateError || updatePillarError) console.error('❌ Lỗi cập nhật bài cũ');

    // 2. Thêm 3 bài review mới vào lịch
    for (const post of postsToSchedule) {
        const { data, error } = await sb.from('posts').insert([post]).select('id').single();
        if (error) {
            console.error(`❌ Lỗi tạo bài "${post.title}":`, error.message);
        } else {
            console.log(`✅ Đã lên lịch: "${post.title}" vào ngày ${post.scheduled_at.split('T')[0]}`);
        }
    }

    console.log('\n🌟 Tổng kết: Đã lên lịch 5 bài viết xen kẽ mỗi ngày 1 bài từ mai!');
}

main();
