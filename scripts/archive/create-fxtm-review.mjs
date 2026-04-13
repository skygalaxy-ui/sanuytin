import { createClient } from '@supabase/supabase-js';

const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const getDate = (daysAhead) => {
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    date.setHours(7, 30, 0, 0);
    return date.toISOString();
};

const fxtmContent = `
<h2>1. Sàn FXTM - Người đồng hành bền bỉ</h2>
<p><strong>FXTM (Forextime)</strong> đã khẳng định được uy tín toàn cầu sau hơn một thập kỷ hoạt động. Đây là sàn môi giới được quản lý chặt chẽ bởi FCA (Anh) và các tổ chức quốc tế lớn khác.</p>

<h2>2. Tại sao người mới nên bắt đầu từ FXTM?</h2>
<p>FXTM không chỉ cung cấp nền tảng giao dịch, họ cung cấp <strong>Giáo dục</strong>. Hệ thống bài học từ sơ cấp đến cao cấp của FXTM thuộc hàng tốt nhất thị trường hiện nay. Ngoài ra, tính năng <strong>FXTM Invest</strong> giúp người mới copy bài bản từ các chuyên gia hàng đầu của sàn.</p>

<h2>3. Đa dạng các loại tài khoản</h2>
<ul>
    <li><strong>Advantage:</strong> Tài khoản ECN thực thụ với spread cực thấp dành cho dân chuyên nghiệp.</li>
    <li><strong>Micro Account:</strong> Dùng cho người mới tập làm quen thị trường với khối lượng siêu nhỏ, nạp tối thiểu chỉ từ 10$.</li>
</ul>

<h2>4. Ưu và Nhược điểm</h2>
<ul>
    <li><strong>Ưu điểm:</strong> Giấy phép uy tín, hỗ trợ đào tạo trader cực tốt, nạp rút nhanh qua Local Bank, tiếng Việt 24/5.</li>
    <li><strong>Nhược điểm:</strong> Một số loại phí cao nếu tài khoản không hoạt động lâu ngày, spread tài khoản chuẩn đôi khi dãn nhẹ.</li>
</ul>

<h2>5. Kết luận</h2>
<p>Nếu bạn là trader chú trọng việc học hỏi kiến thức song song với đời giao dịch, FXTM là một môi trường không thể bỏ qua. Xem thêm <strong><a href="https://sanuytin.net/kien-thuc-forex/top-10-san-forex-uy-tin-nhat-viet-nam-2026/">đánh giá sàn Forex tốt nhất hiện nay</a></strong>.</p>
`;

const post = {
    title: "Review Sàn FXTM 2026: Đánh Giá Chi Tiết Phí Giao Dịch & Độ Uy Tín",
    slug: "review-san-fxtm-2026-chi-tiet",
    category: "review",
    tags: ["fxtm", "forextime", "đánh giá sàn", "kiến thức"],
    excerpt: "Review chi tiết sàn FXTM 2026. Tìm hiểu tại sao FXTM lại là sàn giao dịch hàng đầu trong lĩnh vực giáo dục trader và hỗ trợ người mới bắt đầu tốt nhất.",
    meta_title: "Review Sàn FXTM 2026 ✓ Sàn Forex Tuyệt Vời Cho Người Mới",
    meta_description: "Đánh giá sàn FXTM (Forextime) mới nhất 2026. Tìm hiểu giấy phép FCA, tài khoản Micro cho người mới và hệ thống tín hiệu FXTM Invest. Xem ngay!",
    featured_image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c4b?w=1200&q=80",
    featured_image_alt: "Đánh giá sàn FXTM",
    is_published: false,
    scheduled_at: getDate(13), // March 16
    author: 'Sàn Uy Tín',
    content: fxtmContent
};

async function main() {
    console.log('🚀 Lên lịch bài viết review sàn FXTM...');
    const { error } = await sb.from('posts').insert([post]);
    if (error) {
        console.error('❌ Lỗi:', error.message);
    } else {
        console.log(`✅ Thành công! Bài viết đã được lên lịch vào ngày ${post.scheduled_at.split('T')[0]}.`);
    }
}

main();
