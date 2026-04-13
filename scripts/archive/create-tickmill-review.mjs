import { createClient } from '@supabase/supabase-js';

const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const getDate = (daysAhead) => {
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    date.setHours(7, 30, 0, 0);
    return date.toISOString();
};

const tickmillContent = `
<h2>1. Sàn Tickmill là ai?</h2>
<p>Dù ít rầm rộ về quảng cáo so với Exness hay XM, nhưng <strong>Tickmill</strong> lại là cái tên cực kỳ được kính trọng trong giới Professional Trader. Đây là sàn môi giới được cấp phép bởi FCA (Anh), CySEC và Seychelles, đảm bảo mức độ an toàn vốn rất cao.</p>

<h2>2. Thế mạnh tuyệt đối về phí hoa hồng (Commission)</h2>
<p>Tickmill nổi tiếng là sàn có phí hoa hồng thấp nhất thị trường hiện nay. Với tài khoản Pro, bạn chỉ mất khoản phí <strong>4$/lot (round trip)</strong>. Đây là con số cực thấp so với mức trung bình 7$/lot của các sàn khác.</p>
<p>Điều này giúp Tickmill trở thành lựa chọn hàng đầu cho những trader có tần suất giao dịch cực lớn (Scalper) hoặc dùng Robot EA.</p>

<h2>3. Tốc độ nạp rút tiền Tickmill 2026</h2>
<p>Tickmill hỗ trợ nạp rút qua Internet Banking ngân hàng nội địa Việt Nam. Thời gian nhận tiền thường trong vòng <strong>2-12 tiếng</strong> giờ hành chính. Dù không tức thì như Exness nhưng sự ổn định và minh bạch về dòng tiền là điểm tựa rất lớn cho nhà đầu tư.</p>

<h2>4. Ưu và Nhược điểm</h2>
<ul>
    <li><strong>Ưu điểm:</strong> Phí commission rẻ vô đối, giấy phép FCA cực kỳ uy tín, khớp lệnh chuẩn ECN, ổn định.</li>
    <li><strong>Nhược điểm:</strong> Không có các chương trình Bonus nạp tiền hào phóng, giao diện web hơi cổ điển.</li>
</ul>

<h2>5. Kết luận</h2>
<p>Hãy chọn <strong>Tickmill</strong> nếu bạn là một nhà giao dịch nghiêm túc, chú trọng tối ưu chi phí từng đô la cho mỗi lệnh đánh. Bạn có thể xem thêm <strong><a href="https://sanuytin.net/kien-thuc-forex/top-10-san-forex-uy-tin-nhat-viet-nam-2026/">danh sách sàn Forex tốt nhất 2026</a></strong> để tham khảo thêm.</p>
`;

const post = {
    title: "Review Sàn Tickmill 2026: Sàn Forex Có Phí Hoa Hồng Thấp Nhất Market",
    slug: "review-san-tickmill-2026-phí-rẻ-nhat",
    category: "review",
    tags: ["tickmill", "review san", "fee rẻ", "môi giới uy tín"],
    excerpt: "Review chi tiết sàn Tickmill năm 2026. Phân tích tại sao Tickmill lại là lựa chọn số 1 cho các nhà giao dịch chuyên nghiệp nhờ phí commission cực thấp chỉ 4$/lot.",
    meta_title: "Review Sàn Tickmill 2026 ✓ Sàn Forex Phí Rẻ Nhất Việt Nam",
    meta_description: "Đánh giá sàn Tickmill mới nhất 2026. Review giấy phép FCA, phí commission cực rẻ cho Scalper và tốc độ nạp rút tiền ngân hàng Việt Nam. Xem ngay!",
    featured_image: "https://images.unsplash.com/photo-1611974717424-34cca55476a6?w=1200&q=80",
    featured_image_alt: "Đánh giá sàn Tickmill",
    is_published: false,
    scheduled_at: getDate(11), // March 14
    author: 'Sàn Uy Tín',
    content: tickmillContent
};

async function main() {
    console.log('🚀 Lên lịch bài viết review sàn Tickmill...');
    const { error } = await sb.from('posts').insert([post]);
    if (error) {
        console.error('❌ Lỗi:', error.message);
    } else {
        console.log(`✅ Thành công! Bài viết đã được lên lịch vào ngày ${post.scheduled_at.split('T')[0]}.`);
    }
}

main();
