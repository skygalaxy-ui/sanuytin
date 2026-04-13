import { createClient } from '@supabase/supabase-js';

const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const getDate = (daysAhead) => {
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    date.setHours(7, 30, 0, 0);
    return date.toISOString();
};

const etoroContent = `
<h2>1. eToro - Hơn cả một sàn môi giới</h2>
<p><strong>eToro</strong> không chỉ là nơi để bạn đặt lệnh mua bán; nó là một mạng xã hội đầu tư lớn nhất hành tinh. Tại đây, bạn có thể tương tác, thảo luận và đặc biệt là copy toàn bộ chiến lược của các chuyên gia đã được kiểm chứng thông qua tính năng <strong>CopyTrader</strong>.</p>

<h2>2. CopyTrader - "Chìa khóa" đầu tư thụ động</h2>
<p>Đây là vũ khí mạnh nhất của eToro. Bạn không nhất thiết phải là chuyên gia biểu đồ. Chỉ cần số vốn tối thiểu từ 200$, bạn có thể sao chép hoàn toàn lệnh của những trader có tỷ lệ thắng ổn định trong 2-3 năm qua. Tiền lời sẽ tự động chảy về tài khoản của bạn theo tỷ lệ thuận.</p>

<h2>3. Đầu tư Cổ phiếu Mỹ phí 0%</h2>
<p>Một điểm cực kỳ hấp dẫn của eToro tại Việt Nam là khả năng mua trực tiếp các cổ phiếu đình đám như **Apple, Google, Nvidia, Tesla** hay **Microsoft**. eToro thu phí hoa hồng là 0$ khi bạn thực hiện mua cổ phiếu thật mà không dùng đòn bẩy.</p>

<h2>4. Ưu và Nhược điểm</h2>
<ul>
    <li><strong>Ưu điểm:</strong> Mạng xã hội cộng đồng tuyệt vời, tính năng Copy Trade số 1, danh mục cổ phiếu khổng lồ, hỗ trợ eKYC nhanh gọn.</li>
    <li><strong>Nhược điểm:</strong> Phí rút tiền cố định 5$, spread đôi khi hơi giãn trong phiên biển động mạnh, phí qua đêm CFD cổ phiếu cần lưu ý.</li>
</ul>

<h2>5. Kết luận</h2>
<p>Nếu bạn là người bận rộn và không có nhiều thời gian nghiên cứu biểu đồ, eToro là lựa chọn hoàn hảo nhất cho việc đầu tư thụ động. Bạn có thể tham khảo thêm <strong><a href="https://sanuytin.net/kien-thuc-forex/top-10-san-forex-uy-tin-nhat-viet-nam-2026/">danh sách sàn Forex uy tín</a></strong> để có thêm lựa chọn.</p>
`;

const post = {
    title: "Review Sàn eToro 2026: Sàn Số 1 Việt Nam Về Copy Trade & Cổ Phiếu Mỹ",
    slug: "review-san-etoro-2026-copy-trade-so-1",
    category: "review",
    tags: ["etoro", "copy trade", "chung khoan my", "mạng xã hội"],
    excerpt: "Review chi tiết sàn eToro năm 2026. Tìm hiểu tại sao eToro lại là lựa chọn hàng đầu cho việc đầu tư thụ động qua CopyTrader và mua cổ phiếu Mỹ với phí 0% hoa hồng.",
    meta_title: "Review Sàn eToro 2026 ✓ Đầu Tư Cổ Phiếu Mỹ 0% Phí",
    meta_description: "Đánh giá sàn eToro mới nhất 2026. Review tính năng CopyTrader, hướng dẫn đầu tư cổ phiếu Mỹ phí 0% và nạp rút cho trader Việt. Xem ngay!",
    featured_image: "https://images.unsplash.com/photo-1611974717424-34cca55476a6?w=1200&q=80",
    featured_image_alt: "Đánh giá sàn eToro",
    is_published: false,
    scheduled_at: getDate(12), // March 15
    author: 'Sàn Uy Tín',
    content: etoroContent
};

async function main() {
    console.log('🚀 Lên lịch bài viết review sàn eToro...');
    const { error } = await sb.from('posts').insert([post]);
    if (error) {
        console.error('❌ Lỗi:', error.message);
    } else {
        console.log(`✅ Thành công! Bài viết đã được lên lịch vào ngày ${post.scheduled_at.split('T')[0]}.`);
    }
}

main();
