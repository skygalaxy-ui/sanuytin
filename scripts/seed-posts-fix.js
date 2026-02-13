const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://ecipdcojedkbrlggaqja.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE'
);

// Shorter titles to fit 60 char limit
const articles = [
    // tin-tuc (missing 4)
    { title: 'Fed Giữ Nguyên Lãi Suất Tháng 2/2026', slug: 'fed-giu-lsuat-t2-2026', category: 'tin-tuc', excerpt: 'Cục Dự trữ Liên bang Mỹ quyết định giữ nguyên lãi suất cơ bản ở mức 4.25%-4.50%.' },
    { title: 'Giá Vàng Vượt Mốc 2,100 USD/oz', slug: 'gia-vang-2100-usd', category: 'tin-tuc', excerpt: 'Giá vàng thế giới phá vỡ ngưỡng kháng cự quan trọng 2,100 USD/oz.' },
    { title: 'USD/VND Tăng Sau Điều Chỉnh NHNN', slug: 'usd-vnd-dieu-chinh-nhnn', category: 'tin-tuc', excerpt: 'Ngân hàng Nhà nước điều chỉnh tỷ giá trung tâm, USD/VND tăng nhẹ.' },
    { title: 'Bitcoin Vượt 60,000 USD Đầu Năm 2026', slug: 'bitcoin-60000-usd-2026', category: 'tin-tuc', excerpt: 'Bitcoin vượt qua ngưỡng 60,000 USD khi các quỹ đầu tư lớn mua vào.' },

    // kien-thuc-forex (missing 5)
    { title: 'Forex Là Gì? Cẩm Nang Cho Người Mới', slug: 'forex-la-gi-cam-nang', category: 'kien-thuc-forex', excerpt: 'Tìm hiểu về thị trường Forex - thị trường tài chính lớn nhất thế giới.' },
    { title: 'Cách Đọc Biểu Đồ Nến Nhật Bản Cơ Bản', slug: 'bieu-do-nen-nhat-co-ban', category: 'kien-thuc-forex', excerpt: 'Học cách đọc và phân tích biểu đồ nến Nhật Bản hiệu quả.' },
    { title: 'Quản Lý Vốn Trading - Bí Quyết Sống Sót', slug: 'quan-ly-von-bi-quyet', category: 'kien-thuc-forex', excerpt: 'Quản lý vốn là yếu tố quyết định sự sống còn trong trading.' },
    { title: 'Phân Tích Kỹ Thuật vs Cơ Bản', slug: 'ky-thuat-vs-co-ban', category: 'kien-thuc-forex', excerpt: 'So sánh hai phương pháp phân tích phổ biến nhất trong trading.' },
    { title: 'Tâm Lý Trading - 80% Quyết Định Thành Công', slug: 'tam-ly-trading-80-phan-tram', category: 'kien-thuc-forex', excerpt: 'Cách kiểm soát cảm xúc và xây dựng kỷ luật trong trading.' },

    // phan-tich (missing 1)
    { title: 'EUR/USD: Xu Hướng Tăng Tiếp Diễn', slug: 'eurusd-xu-huong-tang', category: 'phan-tich', excerpt: 'Phân tích kỹ thuật EUR/USD với mục tiêu tiếp theo là 1.12.' },

    // huong-dan (missing 1)
    { title: 'Cài Đặt MetaTrader 4 Cho Người Mới', slug: 'cai-dat-mt4-nguoi-moi', category: 'huong-dan', excerpt: 'Hướng dẫn chi tiết tải, cài đặt và sử dụng MetaTrader 4.' },
];

function generateContent(title) {
    return `<h2>Giới thiệu</h2>
<p>${title} là một trong những chủ đề quan trọng mà các trader cần nắm vững để thành công trong thị trường Forex. Trong bài viết này, chúng tôi sẽ phân tích chi tiết và cung cấp những thông tin hữu ích nhất cho bạn đọc. Thị trường Forex là thị trường tài chính lớn nhất thế giới với khối lượng giao dịch hàng nghìn tỷ USD mỗi ngày.</p>

<h2>Phân Tích Chi Tiết</h2>
<p>Để hiểu rõ hơn về vấn đề này, chúng ta cần xem xét nhiều khía cạnh khác nhau. Đầu tiên, yếu tố kinh tế vĩ mô đóng vai trò quan trọng trong việc định hướng xu hướng thị trường. Các chỉ số như GDP, lạm phát, lãi suất và tỷ lệ thất nghiệp đều có tác động trực tiếp đến giá trị đồng tiền.</p>
<p>Thứ hai, tâm lý thị trường cũng là yếu tố không thể bỏ qua. Khi nhà đầu tư lo ngại về rủi ro, họ thường chuyển sang các tài sản an toàn như USD, JPY hoặc vàng. Ngược lại, khi thị trường lạc quan, các đồng tiền rủi ro cao như AUD, NZD thường được ưa chuộng hơn.</p>

<h2>Chiến Lược Giao Dịch</h2>
<p>Dựa trên phân tích trên, trader có thể áp dụng một số chiến lược phù hợp. Đối với trader ngắn hạn, việc theo dõi các phiên giao dịch chính (London, New York, Tokyo) là rất quan trọng vì đây là thời điểm thanh khoản cao nhất. Đối với trader dài hạn, phân tích cơ bản và xu hướng lớn sẽ là nền tảng cho quyết định giao dịch.</p>
<p>Quản lý rủi ro là yếu tố sống còn trong trading. Không nên mạo hiểm quá 2% vốn cho mỗi giao dịch. Đặt stop loss hợp lý và tuân thủ kỷ luật giao dịch là chìa khóa để tồn tại lâu dài trong thị trường này.</p>

<h2>Những Điều Cần Lưu Ý</h2>
<p>Khi tham gia giao dịch, bạn cần lưu ý một số điểm quan trọng. Thứ nhất, luôn cập nhật tin tức kinh tế và các sự kiện có thể ảnh hưởng đến thị trường. Lịch kinh tế là công cụ không thể thiếu. Thứ hai, đừng để cảm xúc chi phối quyết định. Lòng tham và sợ hãi là kẻ thù lớn nhất của trader.</p>
<p>Thứ ba, hãy liên tục học hỏi và cải thiện kỹ năng. Thị trường luôn thay đổi và những gì hiệu quả hôm nay có thể không còn phù hợp ngày mai. Tham gia các cộng đồng trading, đọc sách và theo dõi các chuyên gia có uy tín.</p>

<h2>Kết Luận</h2>
<p>Tóm lại, đây là vấn đề đáng quan tâm đối với mọi trader. Bằng cách nắm vững kiến thức cơ bản, xây dựng chiến lược phù hợp và quản lý rủi ro tốt, bạn hoàn toàn có thể thành công trong thị trường Forex. Hãy nhớ rằng trading là một hành trình dài, đừng nóng vội mà hãy kiên nhẫn tích lũy kinh nghiệm từng ngày. Chúc bạn giao dịch thành công!</p>`;
}

async function seedPosts() {
    console.log('Seeding missing posts...\n');

    for (const post of articles) {
        const fullPost = {
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            content: generateContent(post.title),
            category: post.category,
            tags: ['forex', 'trading'],
            author: 'Sàn Uy Tín Team',
            meta_title: post.title + ' | Sàn Uy Tín',
            meta_description: post.excerpt,
            is_published: true,
            published_at: new Date().toISOString(),
            featured_image: null,
            featured_image_alt: null,
        };

        const { error } = await supabase.from('posts').insert([fullPost]);

        if (error) {
            console.log(`❌ ${post.title}: ${error.message}`);
        } else {
            console.log(`✅ ${post.title}`);
        }
    }

    console.log('\n✅ Done!');
}

seedPosts();
