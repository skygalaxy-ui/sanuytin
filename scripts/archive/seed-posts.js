const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://ecipdcojedkbrlggaqja.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE'
);

// Categories
const categories = [
    { name: 'Tin Tức Forex', slug: 'tin-tuc' },
    { name: 'Kiến Thức Forex', slug: 'kien-thuc-forex' },
    { name: 'Phân Tích Thị Trường', slug: 'phan-tich' },
    { name: 'Hướng Dẫn Trading', slug: 'huong-dan' },
];

// Articles data
const articles = {
    'tin-tuc': [
        {
            title: 'Fed Giữ Nguyên Lãi Suất Trong Cuộc Họp Tháng 2/2026',
            slug: 'fed-giu-nguyen-lai-suat-thang-2-2026',
            excerpt: 'Cục Dự trữ Liên bang Mỹ (Fed) quyết định giữ nguyên lãi suất cơ bản ở mức 4.25%-4.50% trong cuộc họp tháng 2/2026.',
        },
        {
            title: 'Giá Vàng Vượt Mốc 2,100 USD/oz Lần Đầu Tiên Trong Năm',
            slug: 'gia-vang-vuot-moc-2100-usd',
            excerpt: 'Giá vàng thế giới đã phá vỡ ngưỡng kháng cự quan trọng 2,100 USD/oz trong phiên giao dịch hôm nay.',
        },
        {
            title: 'USD/VND Tăng Nhẹ Sau Khi NHNN Điều Chỉnh Tỷ Giá Trung Tâm',
            slug: 'usd-vnd-tang-nhe-thang-2-2026',
            excerpt: 'Ngân hàng Nhà nước đã điều chỉnh tỷ giá trung tâm, khiến USD/VND tăng nhẹ trong phiên giao dịch đầu tuần.',
        },
        {
            title: 'ECB Cân Nhắc Cắt Giảm Lãi Suất Trong Quý 2/2026',
            slug: 'ecb-can-nhac-cat-giam-lai-suat',
            excerpt: 'Ngân hàng Trung ương châu Âu (ECB) đang xem xét khả năng cắt giảm lãi suất để kích thích tăng trưởng kinh tế.',
        },
        {
            title: 'Bitcoin Vượt Mốc 60,000 USD Giữa Làn Sóng Đầu Tư Mới',
            slug: 'bitcoin-vuot-moc-60000-usd',
            excerpt: 'Bitcoin đã vượt qua ngưỡng 60,000 USD trong bối cảnh các quỹ đầu tư lớn tiếp tục mua vào.',
        },
    ],
    'kien-thuc-forex': [
        {
            title: 'Forex Là Gì? Hướng Dẫn Toàn Diện Cho Người Mới Bắt Đầu',
            slug: 'forex-la-gi-huong-dan-toan-dien',
            excerpt: 'Tìm hiểu về thị trường Forex - thị trường tài chính lớn nhất thế giới với khối lượng giao dịch hàng nghìn tỷ USD mỗi ngày.',
        },
        {
            title: 'Cách Đọc Biểu Đồ Nến Nhật Bản - Kiến Thức Cơ Bản',
            slug: 'cach-doc-bieu-do-nen-nhat-ban',
            excerpt: 'Học cách đọc và phân tích biểu đồ nến Nhật Bản - công cụ không thể thiếu của mọi trader chuyên nghiệp.',
        },
        {
            title: 'Quản Lý Vốn Trong Trading - Bí Quyết Sống Sót Lâu Dài',
            slug: 'quan-ly-von-trong-trading',
            excerpt: 'Quản lý vốn là yếu tố quyết định sự sống còn trong trading. Học cách bảo vệ tài khoản của bạn.',
        },
        {
            title: 'Phân Tích Kỹ Thuật vs Phân Tích Cơ Bản - Nên Chọn Cái Nào?',
            slug: 'phan-tich-ky-thuat-vs-co-ban',
            excerpt: 'So sánh hai phương pháp phân tích phổ biến nhất trong trading và cách kết hợp chúng hiệu quả.',
        },
        {
            title: 'Tâm Lý Trading - Yếu Tố Quyết Định 80% Thành Công',
            slug: 'tam-ly-trading-yeu-to-quyet-dinh',
            excerpt: 'Tìm hiểu cách kiểm soát cảm xúc và xây dựng kỷ luật trong trading để đạt được thành công bền vững.',
        },
    ],
    'phan-tich': [
        {
            title: 'Phân Tích EUR/USD: Xu Hướng Tăng Có Thể Tiếp Diễn',
            slug: 'phan-tich-eurusd-xu-huong-tang',
            excerpt: 'Phân tích kỹ thuật cho thấy EUR/USD đang trong xu hướng tăng mạnh với mục tiêu tiếp theo là 1.12.',
        },
        {
            title: 'Dự Báo Giá Vàng Tuần 2 Tháng 2/2026',
            slug: 'du-bao-gia-vang-tuan-2-thang-2',
            excerpt: 'Phân tích các yếu tố ảnh hưởng đến giá vàng và dự báo xu hướng trong tuần tới.',
        },
        {
            title: 'GBP/USD Có Thể Bứt Phá Sau Dữ Liệu Việc Làm UK',
            slug: 'gbpusd-co-the-but-pha',
            excerpt: 'Bảng Anh có thể tăng mạnh nếu dữ liệu việc làm tích cực được công bố vào cuối tuần.',
        },
        {
            title: 'USD/JPY: Ngân Hàng Nhật Bản Có Thể Can Thiệp',
            slug: 'usdjpy-nhat-ban-can-thiep',
            excerpt: 'Phân tích khả năng BOJ can thiệp vào thị trường tiền tệ sau khi USD/JPY vượt mốc 150.',
        },
        {
            title: 'Dầu Thô Có Xu Hướng Giảm Trong Ngắn Hạn',
            slug: 'dau-tho-xu-huong-giam',
            excerpt: 'Giá dầu có thể tiếp tục giảm do lo ngại về nhu cầu toàn cầu suy yếu.',
        },
    ],
    'huong-dan': [
        {
            title: 'Hướng Dẫn Mở Tài Khoản Sàn Vantage Chi Tiết',
            slug: 'huong-dan-mo-tai-khoan-vantage',
            excerpt: 'Hướng dẫn từng bước mở tài khoản giao dịch tại sàn Vantage - một trong những sàn Forex uy tín nhất.',
        },
        {
            title: 'Cách Cài Đặt và Sử Dụng MetaTrader 4 Cho Người Mới',
            slug: 'cach-cai-dat-metatrader-4',
            excerpt: 'Hướng dẫn chi tiết cách tải, cài đặt và sử dụng nền tảng MetaTrader 4 để giao dịch Forex.',
        },
        {
            title: 'Cách Nạp Rút Tiền Tại Sàn Exness Nhanh Nhất',
            slug: 'cach-nap-rut-tien-exness',
            excerpt: 'Hướng dẫn các phương thức nạp rút tiền tại Exness: Banking, MoMo, USDT với thời gian xử lý nhanh nhất.',
        },
        {
            title: 'Hướng Dẫn Sử Dụng Indicator RSI Trong Trading',
            slug: 'huong-dan-su-dung-indicator-rsi',
            excerpt: 'Học cách sử dụng chỉ báo RSI để xác định điểm mua bán và tránh các tín hiệu giả.',
        },
        {
            title: 'Cách Đặt Stop Loss và Take Profit Hiệu Quả',
            slug: 'cach-dat-stop-loss-take-profit',
            excerpt: 'Hướng dẫn cách đặt lệnh cắt lỗ và chốt lời một cách khoa học để bảo vệ vốn và tối ưu lợi nhuận.',
        },
    ],
};

// Generate 600-word content
function generateContent(title, category) {
    const intro = `<h2>Giới thiệu</h2><p>${title} là một trong những chủ đề quan trọng mà các trader cần nắm vững để thành công trong thị trường Forex. Trong bài viết này, chúng tôi sẽ phân tích chi tiết và cung cấp những thông tin hữu ích nhất cho bạn đọc. Thị trường Forex là thị trường tài chính lớn nhất thế giới với khối lượng giao dịch hàng nghìn tỷ USD mỗi ngày, thu hút hàng triệu nhà đầu tư từ khắp nơi trên thế giới.</p>`;

    const body1 = `<h2>Phân Tích Chi Tiết</h2><p>Để hiểu rõ hơn về vấn đề này, chúng ta cần xem xét nhiều khía cạnh khác nhau. Đầu tiên, yếu tố kinh tế vĩ mô đóng vai trò quan trọng trong việc định hướng xu hướng thị trường. Các chỉ số như GDP, lạm phát, lãi suất và tỷ lệ thất nghiệp đều có tác động trực tiếp đến giá trị đồng tiền.</p><p>Thứ hai, tâm lý thị trường cũng là yếu tố không thể bỏ qua. Khi nhà đầu tư lo ngại về rủi ro, họ thường chuyển sang các tài sản an toàn như USD, JPY hoặc vàng. Ngược lại, khi thị trường lạc quan, các đồng tiền rủi ro cao như AUD, NZD thường được ưa chuộng hơn.</p>`;

    const body2 = `<h2>Chiến Lược Giao Dịch</h2><p>Dựa trên phân tích trên, trader có thể áp dụng một số chiến lược phù hợp. Đối với trader ngắn hạn, việc theo dõi các phiên giao dịch chính (London, New York, Tokyo) là rất quan trọng vì đây là thời điểm thanh khoản cao nhất. Đối với trader dài hạn, phân tích cơ bản và xu hướng lớn sẽ là nền tảng cho quyết định giao dịch.</p><p>Quản lý rủi ro là yếu tố sống còn trong trading. Không nên mạo hiểm quá 2% vốn cho mỗi giao dịch. Đặt stop loss hợp lý và tuân thủ kỷ luật giao dịch là chìa khóa để tồn tại lâu dài trong thị trường này.</p>`;

    const body3 = `<h2>Những Điều Cần Lưu Ý</h2><p>Khi tham gia giao dịch, bạn cần lưu ý một số điểm quan trọng. Thứ nhất, luôn cập nhật tin tức kinh tế và các sự kiện có thể ảnh hưởng đến thị trường. Lịch kinh tế là công cụ không thể thiếu cho mọi trader. Thứ hai, đừng để cảm xúc chi phối quyết định giao dịch. Lòng tham và sợ hãi là kẻ thù lớn nhất của trader.</p><p>Thứ ba, hãy liên tục học hỏi và cải thiện kỹ năng. Thị trường luôn thay đổi và những gì hiệu quả hôm nay có thể không còn phù hợp ngày mai. Tham gia các cộng đồng trading, đọc sách và theo dõi các chuyên gia có uy tín sẽ giúp bạn nâng cao trình độ.</p>`;

    const conclusion = `<h2>Kết Luận</h2><p>Tóm lại, ${title.toLowerCase()} là vấn đề đáng quan tâm đối với mọi trader. Bằng cách nắm vững kiến thức cơ bản, xây dựng chiến lược phù hợp và quản lý rủi ro tốt, bạn hoàn toàn có thể thành công trong thị trường Forex. Hãy nhớ rằng trading là một hành trình dài, đừng nóng vội mà hãy kiên nhẫn tích lũy kinh nghiệm từng ngày.</p><p>Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại liên hệ với chúng tôi hoặc để lại bình luận bên dưới. Chúc bạn giao dịch thành công!</p>`;

    return intro + body1 + body2 + body3 + conclusion;
}

async function seedPosts() {
    console.log('Starting to seed posts...\n');

    for (const [category, posts] of Object.entries(articles)) {
        console.log(`\n📁 Category: ${category}`);

        for (const post of posts) {
            const fullPost = {
                title: post.title,
                slug: post.slug,
                excerpt: post.excerpt,
                content: generateContent(post.title, category),
                category: category,
                tags: ['forex', 'trading', category],
                author: 'Sàn Uy Tín Team',
                meta_title: post.title + ' | Sàn Uy Tín',
                meta_description: post.excerpt,
                is_published: true,
                published_at: new Date().toISOString(),
                featured_image: null,
                featured_image_alt: null,
            };

            const { data, error } = await supabase
                .from('posts')
                .insert([fullPost])
                .select()
                .single();

            if (error) {
                console.log(`  ❌ ${post.title}: ${error.message}`);
            } else {
                console.log(`  ✅ ${post.title}`);
            }
        }
    }

    console.log('\n✅ Seeding complete!');
}

seedPosts();
