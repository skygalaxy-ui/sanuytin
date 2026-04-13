import { createClient } from '@supabase/supabase-js';

const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const getDate = (daysAhead) => {
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    date.setHours(7, 30, 0, 0); // Đăng lúc 7:30 sáng
    return date.toISOString();
};

const batch2Posts = [
    {
        title: "Review Sàn HFM 2026: Đánh Giá Hệ Thống Bonus & Bảo Hiểm Khoản Vay",
        slug: "review-san-hfm-2026-chi-tiet",
        category: "review",
        tags: ["hfm", "hotforex", "đánh giá sàn", "bonus"],
        excerpt: "Sàn HFM (HotForex) có thực sự uy tín? Review chi tiết về giấy phép, hệ thống Bonus nạp tiền và gói bảo hiểm 5 triệu Euro cho khách hàng năm 2026.",
        meta_title: "Review Sàn HFM 2026: Sàn Forex Bonus Tốt Nhất?",
        meta_description: "Phân tích sàn HFM (HotForex) 2026. Đánh giá ưu nhược điểm, các loại tài khoản Cent, Zero và chương trình bảo hiểm vốn 5 triệu Euro độc quyền.",
        featured_image: "https://images.unsplash.com/photo-1611974717424-34cca55476a6?w=1200&q=80",
        featured_image_alt: "Đánh giá sàn HFM 2026",
        is_published: false,
        scheduled_at: getDate(6), // March 9
        author: 'Sàn Uy Tín',
        content: `
<h2>1. HFM (HotForex) - Sự trở lại mạnh mẽ trong năm 2026</h2>
<p>HFM không còn là cái tên xa lạ với trader Việt. Trong danh sách <strong><a href="https://sanuytin.net/kien-thuc-forex/top-10-san-forex-uy-tin-nhat-viet-nam-2026/">top 10 sàn Forex uy tín nhất 2026</a></strong>, HFM luôn giữ vững vị trí nhờ tính ổn định và các chương trình hỗ trợ trader cực tốt.</p>

<h2>2. Tại sao HFM được đánh giá cao về độ an toàn?</h2>
<p>Điểm làm nên sự khác biệt của HFM chính là **Gói bảo hiểm trách nhiệm dân sự** lên đến 5.000.000 EUR. Đây là "lá chắn" bảo vệ khách hàng trước các sai sót kỹ thuật hoặc sơ suất từ phía nhà môi giới - điều mà rất ít sàn dám cam kết.</p>

<h2>3. Các loại tài khoản linh hoạt</h2>
<ul>
    <li><strong>Premium Account:</strong> Phù hợp cho trader có kinh nghiệm với spread thấp.</li>
    <li><strong>Cent Account:</strong> "Thiên đường" cho người mới bắt đầu tập luyện thực chiến với số vốn chỉ từ vài USD.</li>
    <li><strong>Zero Spread:</strong> Spread thô từ 0.0, cực kỳ cạnh tranh cho dân đánh theo phương pháp Scalping.</li>
</ul>

<h2>4. Bonus nạp tiền - Thế mạnh của HFM</h2>
<p>HFM thường xuyên có các chương trình Bonus nạp tiền lên đến 100%, giúp gia tăng đáng kể đòn bẩy và sức chống chịu của tài khoản trong những giai đoạn thị trường biến động mạnh.</p>

<h2>5. Kết luận</h2>
<p>HFM là sự hòa quyện giữa an toàn pháp lý và lợi ích tài chính thông qua Bonus. Bạn có thể tham khảo thêm <strong><a href="https://sanuytin.net/danh-gia-san/">các đánh giá sàn Forex khác</a></strong> để tìm thêm lựa chọn phù hợp nhất.</p>
    `
    },
    {
        title: "So Sánh Sàn Exness Và XM: Sàn Nào Nạp Rút & Khuyến Mãi Tốt Hơn?",
        slug: "so-sanh-san-exness-va-xm-2026",
        category: "so-sanh",
        tags: ["so sánh sàn forex", "exness", "xm", "nạp rút"],
        excerpt: "Trận chiến giữa hai 'ông vua' mảng nạp rút và khuyến mãi. So sánh chi tiết Exness vs XM năm 2026: Đâu là lựa chọn tối ưu cho nhà đầu tư Việt?",
        meta_title: "So Sánh Sàn Exness Và XM 2026: Kẻ Tám Lạng Người Nửa Cân",
        meta_description: "So sánh sàn Exness và XM 2026 chi tiết. Phân tích tốc độ nạp rút tiền, spread, đòn bẩy và các chương trình khuyến mãi Bonus. Xem ngay!",
        featured_image: "https://images.unsplash.com/photo-1611974717424-34cca55476a6?w=1200&q=80",
        featured_image_alt: "So sánh Exness vs XM 2026",
        is_published: false,
        scheduled_at: getDate(7), // March 10
        author: 'Sàn Uy Tín',
        content: `
<h2>1. Hai đối thủ không khoan nhượng</h2>
<p>Tại thị trường Việt Nam, <strong>Exness</strong> và <strong>XM</strong> là hai cái tên phổ biến nhất. Tuy nhiên, họ lại có hướng đi hoàn toàn khác nhau về triết lý sản phẩm.</p>
<ul>
    <li><strong>Exness:</strong> Tập trung vào tốc độ, đòn bẩy vô cực và nạp rút tức thì.</li>
    <li><strong>XM:</strong> Tập trung vào trải nghiệm người dùng, bonus hào phóng và hỗ trợ khách hàng tận tâm.</li>
</ul>

<h2>2. So sánh tốc độ nạp rút</h2>
<p>Về khoản này, <strong><a href="https://sanuytin.net/exness/">Exness</a></strong> gần như không có đối thủ với khả năng nạp rút tự động 24/7 kể cả cuối tuần. Tuy nhiên, <strong><a href="https://sanuytin.net/xm/">XM</a></strong> cũng không thua kém quá xa với thời gian xử lý trong vòng 2-4h và hỗ trợ đa dạng ngân hàng nội địa.</p>

<h2>3. Spread và Chi phí giao dịch</h2>
<p>Exness thường dẫn đầu về spread thấp trên tài khoản Raw/Zero. Ngược lại, XM cung cấp spread ổn định hơn ở các khung thời gian có biến động mạnh. Nếu bạn muốn so đối đầu 2 sàn này với các đối thủ khác, hãy xem <strong><a href="https://sanuytin.net/so-sanh/">bảng so sánh sàn Forex 2026</a></strong>.</p>

<h2>4. Bonus và Khuyến mãi</h2>
<p>Đây là sân chơi riêng của XM. Trong khi Exness hầu như không có Bonus, XM liên tục ra mắt các chương trình Bonus nạp tiền, Bonus không cần nạp tiền (No Deposit Bonus) cho người mới. Đây là điểm cộng cực lớn giúp XM lấy lòng trader mới.</p>

<h2>5. Kết luận</h2>
<p>Chọn <strong>Exness</strong> nếu bạn cần tốc độ và đòn bẩy cao. Chọn <strong>XM</strong> nếu bạn thích nhận khuyến mãi và cần một môi trường giao dịch êm ả, ổn định.</p>
    `
    },
    {
        title: "Cách Mở Tài Khoản Forex 2026: Hướng Dẫn Chi Tiết Từ A-Z Cho Người Mới",
        slug: "cach-mo-tai-khoan-forex-2026-chi-tiet",
        category: "kien-thuc-forex",
        tags: ["mở tài khoản forex", "hướng dẫn", "trader mới", "kiến thức"],
        excerpt: "Hướng dẫn từng bước cách mở tài khoản Forex, xác minh danh tính (eKYC) và nạp tiền an toàn tại các sàn uy tín năm 2026. Những lưu ý để tránh bị lừa đảo.",
        meta_title: "Cách Mở Tài Khoản Forex 2026 ✓ Hướng Dẫn Cực Dễ",
        meta_description: "Hướng dẫn mở tài khoản Forex cho người mới bắt đầu năm 2026. Cách chọn sàn, xác minh eKYC nhanh và nạp vốn an toàn. Bí quyết bảo mật tài khoản.",
        featured_image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c4b?w=1200&q=80",
        featured_image_alt: "Hướng dẫn mở tài khoản Forex 2026",
        is_published: false,
        scheduled_at: getDate(8), // March 11
        author: 'Sàn Uy Tín',
        content: `
<h2>1. Quy trình 4 bước để bắt đầu sự nghiệp Trader</h2>
<p>Mở một tài khoản giao dịch hiện nay cực kỳ đơn giản, nhưng để làm sao cho đúng và an toàn thì không phải ai cũng biết. Trước khi bắt đầu, hãy chắc chắn bạn đã chọn được một cái tên trong <strong><a href="https://sanuytin.net/kien-thuc-forex/top-10-san-forex-uy-tin-nhat-viet-nam-2026/">danh sách sàn Forex uy tín</a></strong>.</p>

<h2>2. Bước 1: Đăng ký thông tin cơ bản</h2>
<p>Bạn cần truy cập trang chủ của sàn, nhấn vào nút "Mở tài khoản" và điền: Email, Số điện thoại và Quốc tịch. **Lưu ý:** Nên dùng thông tin thật để tránh rắc rối khi rút tiền sau này.</p>

<h2>3. Bước 2: Xác minh danh tính (eKYC)</h2>
<p>Hầu hết các sàn hiện nay đều hỗ trợ xác minh tự động bằng Trí tuệ nhân tạo (AI). Bạn chỉ cần chụp 2 mặt CCCD và ảnh selfie. Quy trình này thường chỉ mất 5-10 phút.</p>

<h2>4. Bước 3: Nạp tiền vào tài khoản</h2>
<p>Chúng tôi khuyên bạn nên bắt đầu với số vốn nhỏ để test tốc độ nạp rút. Phương thức nạp tiền phổ biến và nhanh nhất tại Việt Nam là **Internet Banking** hoặc các ví điện tử như MoMo, Skrill.</p>

<h2>5. Bước 4: Tải nền tảng giao dịch</h2>
<p>Tải MT4, MT5 hoặc nền tảng độc quyền của sàn (như xStation của XTB) về điện thoại hoặc máy tính để bắt đầu đặt những lệnh đầu tiên.</p>

<h2>6. Lời khuyên bảo mật</h2>
<p>Đừng bao giờ chia sẻ mật khẩu giao dịch cho bất kỳ ai. Hãy ưu tiên sử dụng xác thực 2 lớp (2FA) để bảo vệ số tiền của bạn.</p>
    `
    }
];

async function main() {
    console.log('🚀 Đang đẩy 3 bài viết chiến lược tiếp theo vào lịch Admin...');
    for (const post of batch2Posts) {
        const { error } = await sb.from('posts').insert([post]);
        if (error) {
            console.error(`❌ Lỗi bài "${post.title}":`, error.message);
        } else {
            console.log(`✅ Thành công: "${post.title}" đăng ngày ${post.scheduled_at.split('T')[0]}`);
        }
    }
}

main();
