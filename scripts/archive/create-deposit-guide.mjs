import { createClient } from '@supabase/supabase-js';

const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const getDate = (daysAhead) => {
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    date.setHours(7, 30, 0, 0); // Đăng lúc 7:30 sáng
    return date.toISOString();
};

const guideContent = `
<h2>1. Tại sao tốc độ nạp rút lại quan trọng?</h2>
<p>Trong thị trường Forex, cơ hội có thể đến và đi chỉ trong vài giây. Một lệnh nạp tiền chậm trễ có thể khiến bạn bỏ lỡ cơ hội giao dịch tốt. Ngược lại, việc rút tiền nhanh chóng là minh chứng rõ ràng nhất cho độ <strong><a href="https://sanuytin.net/">uy tín của sàn Forex</a></strong>.</p>

<h2>2. Hướng dẫn nạp rút tiền sàn Exness (Nhanh số 1 thị trường)</h2>
<p><strong><a href="https://sanuytin.net/exness/">Exness</a></strong> nổi tiếng với hệ thống nạp rút tự động. Tiền sẽ về tài khoản ngay lập tức (instant) ngay cả vào thứ 7 và Chủ nhật.</p>
<h3>Các bước nạp tiền Exness:</h3>
<ol>
    <li>Đăng nhập khu vực cá nhân, chọn "Nạp tiền".</li>
    <li>Chọn phương thức <strong>Internet Banking (Vietcombank, Techcombank, MoMo...)</strong>.</li>
    <li>Nhập số tiền VNĐ muốn nạp, hệ thống sẽ tự quy đổi ra USD theo tỷ giá hiện tại.</li>
    <li>Quét mã QR qua app ngân hàng để hoàn tất.</li>
</ol>
<h3>Lưu ý khi rút tiền:</h3>
<p>Bạn nạp bằng cổng nào thì bắt buộc phải rút bằng cổng đó theo quy tắc chống rửa tiền (AML).</p>

<h2>3. Hướng dẫn nạp rút tiền sàn XM (Chương trình Bonus hấp dẫn)</h2>
<p><strong><a href="https://sanuytin.net/xm/">Sàn XM</a></strong> hỗ trợ rất tốt cho trader Việt Nam với nhiều phương thức linh hoạt.</p>
<h3>Cách nạp tiền XM qua Ngân hàng nội địa:</h3>
<ol>
    <li>Truy cập trang cá nhận, nhấn "Đăng nạp tiền".</li>
    <li>Chọn <strong>Local Bank Transfer</strong> hoặc Online Banking.</li>
    <li>Thực hiện chuyển khoản theo thông tin sàn cung cấp (Nhớ ghi đúng mã tham chiếu).</li>
</ol>
<h3>Mẹo để rút tiền XM nhanh nhất:</h3>
<p>Thời gian xử lý rút tiền tại XM thường mất từ 2-4 tiếng. Hãy thực hiện lệnh rút vào sáng sớm (trước 10h sáng) để nhận tiền ngay trong ngày.</p>

<h2>4. Những lưu ý cực kỳ quan trọng để không bị "treo" tiền</h2>
<ul>
    <li><strong>Chính chủ tài khoản:</strong> Tên tài khoản ngân hàng nạp/rút bắt buộc phải TRÙNG KHỚP hoàn toàn với tên bạn đăng ký trên sàn. Các sàn Forex không chấp nhận nạp tiền hộ từ người thứ ba.</li>
    <li><strong>Xác minh tài khoản (eKYC):</strong> Chắc chắn tài khoản của bạn đã được xác minh địa chỉ và danh tính đầy đủ trước khi thực hiện nạp số vốn lớn.</li>
    <li><strong>Kiểm tra hạn mức ngân hàng:</strong> Đảm bảo tài khoản ngân hàng của bạn đã kích hoạt thanh toán trực tuyến và có đủ hạn mức giao dịch trong ngày.</li>
</ul>

<h2>5. Kết luận</h2>
<p>Exness mạnh về tốc độ, XM mạnh về sự ổn định và hỗ trợ. Tùy vào nhu cầu cá nhân bạn hãy chọn sàn phù hợp. Bạn có thể xem thêm <strong><a href="https://sanuytin.net/kien-thuc-forex/top-10-san-forex-uy-tin-nhat-viet-nam-2026/">danh sách sàn Forex tốt nhất 2026</a></strong> để có thêm lựa chọn.</p>
`;

const post = {
    title: "Hướng Dẫn Nạp Rút Tiền Sàn Exness & XM Chi Tiết: Lưu Ý Không Bị Chậm Tiền",
    slug: "huong-dan-nap-rut-tien-exness-xm-2026",
    category: "kien-thuc-forex",
    tags: ["nap rut", "exness", "xm", "kinh nghiem", "forex"],
    excerpt: "Hướng dẫn từng bước nạp và rút tiền tại hai sàn Forex phổ biến nhất Việt Nam là Exness và XM năm 2026. Cách tránh lỗi bị treo tiền và lưu ý quan trọng về eKYC.",
    meta_title: "Cách Nạp Rút Tiền Exness & XM 2026 ✓ Không Bị Chậm Tiền",
    meta_description: "Hướng dẫn nạp rút tiền sàn Exness và XM mới nhất 2026. Cách thực hiện qua ngân hàng Việt Nam, lưu ý về eKYC và bí quyết rút tiền nhanh trong 30 phút.",
    featured_image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=80",
    featured_image_alt: "Hướng dẫn nạp rút tiền forex",
    is_published: false,
    scheduled_at: getDate(9), // March 12
    author: 'Sàn Uy Tín',
    content: guideContent
};

async function main() {
    console.log('🚀 Lên lịch bài viết hướng dẫn nạp rút tiền...');
    const { error } = await sb.from('posts').insert([post]);
    if (error) {
        console.error('❌ Lỗi:', error.message);
    } else {
        console.log(`✅ Thành công! Bài viết đã được lên lịch vào ngày ${post.scheduled_at.split('T')[0]}.`);
    }
}

main();
