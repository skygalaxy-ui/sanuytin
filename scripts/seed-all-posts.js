const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://ecipdcojedkbrlggaqja.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE'
);

const articles = {
    'tin-tuc': [
        { title: 'Fed Giữ Nguyên Lãi Suất Trong Cuộc Họp Tháng 2/2026', slug: 'fed-giu-nguyen-lai-suat-thang-2-2026', excerpt: 'Cục Dự trữ Liên bang Mỹ quyết định giữ nguyên lãi suất cơ bản ở mức 4.25%-4.50%.' },
        { title: 'Giá Vàng Vượt Mốc 2,100 USD/oz Lần Đầu Tiên', slug: 'gia-vang-vuot-moc-2100-usd', excerpt: 'Giá vàng thế giới phá vỡ ngưỡng kháng cự quan trọng 2,100 USD/oz.' },
        { title: 'USD/VND Tăng Nhẹ Sau Điều Chỉnh Tỷ Giá Trung Tâm', slug: 'usd-vnd-tang-nhe-thang-2-2026', excerpt: 'NHNN điều chỉnh tỷ giá trung tâm, USD/VND tăng nhẹ đầu tuần.' },
        { title: 'ECB Cân Nhắc Cắt Giảm Lãi Suất Quý 2/2026', slug: 'ecb-can-nhac-cat-giam-lai-suat-q2', excerpt: 'ECB xem xét cắt giảm lãi suất để kích thích tăng trưởng kinh tế châu Âu.' },
        { title: 'Bitcoin Vượt Mốc 60,000 USD Giữa Làn Sóng Đầu Tư', slug: 'bitcoin-vuot-60000-usd-2026', excerpt: 'Bitcoin vượt 60,000 USD khi các quỹ đầu tư lớn tiếp tục mua vào.' },
        { title: 'Thị Trường Châu Á Khởi Sắc Sau Dữ Liệu PMI Trung Quốc', slug: 'thi-truong-chau-a-khoi-sac-pmi', excerpt: 'Các thị trường châu Á tăng điểm sau khi PMI Trung Quốc vượt kỳ vọng.' },
    ],
    'kien-thuc': [
        { title: 'Forex Là Gì? Hướng Dẫn Toàn Diện Cho Người Mới', slug: 'forex-la-gi-huong-dan-nguoi-moi', excerpt: 'Tìm hiểu thị trường Forex - thị trường tài chính lớn nhất thế giới.' },
        { title: 'Cách Đọc Biểu Đồ Nến Nhật Bản Cơ Bản', slug: 'cach-doc-bieu-do-nen-nhat-ban', excerpt: 'Học cách đọc và phân tích biểu đồ nến - công cụ quan trọng của trader.' },
        { title: 'Quản Lý Vốn Trong Trading - Bí Quyết Sống Sót', slug: 'quan-ly-von-trong-trading', excerpt: 'Quản lý vốn là yếu tố quyết định sự thành bại trong trading.' },
        { title: 'Phân Tích Kỹ Thuật vs Phân Tích Cơ Bản', slug: 'phan-tich-ky-thuat-vs-co-ban', excerpt: 'So sánh hai phương pháp phân tích phổ biến nhất trong trading.' },
        { title: 'Tâm Lý Trading - Yếu Tố Quyết Định 80% Thành Công', slug: 'tam-ly-trading-yeu-to-thanh-cong', excerpt: 'Kiểm soát cảm xúc và xây dựng kỷ luật trading bền vững.' },
        { title: 'Các Loại Lệnh Trong Forex: Market, Limit, Stop', slug: 'cac-loai-lenh-trong-forex', excerpt: 'Hướng dẫn chi tiết về các loại lệnh giao dịch phổ biến.' },
    ],
    'huong-dan': [
        { title: 'Hướng Dẫn Mở Tài Khoản Sàn Vantage Chi Tiết', slug: 'huong-dan-mo-tai-khoan-vantage', excerpt: 'Hướng dẫn từng bước mở tài khoản tại sàn Vantage uy tín.' },
        { title: 'Cách Cài Đặt MetaTrader 4 Cho Người Mới', slug: 'cach-cai-dat-metatrader-4', excerpt: 'Hướng dẫn tải, cài đặt và sử dụng nền tảng MT4.' },
        { title: 'Cách Nạp Rút Tiền Tại Sàn Exness Nhanh Nhất', slug: 'cach-nap-rut-tien-exness', excerpt: 'Các phương thức nạp rút tiền tại Exness: Banking, MoMo, USDT.' },
        { title: 'Hướng Dẫn Sử Dụng Indicator RSI', slug: 'huong-dan-su-dung-rsi', excerpt: 'Sử dụng RSI để xác định điểm mua bán hiệu quả.' },
        { title: 'Cách Đặt Stop Loss và Take Profit Hiệu Quả', slug: 'cach-dat-stop-loss-take-profit', excerpt: 'Đặt lệnh cắt lỗ và chốt lời khoa học để bảo vệ vốn.' },
        { title: 'Hướng Dẫn Copy Trading Cho Người Mới Bắt Đầu', slug: 'huong-dan-copy-trading', excerpt: 'Cách sao chép giao dịch từ các trader chuyên nghiệp.' },
    ],
    'phan-tich': [
        { title: 'Phân Tích EUR/USD: Xu Hướng Tăng Tiếp Diễn', slug: 'phan-tich-eurusd-xu-huong-tang', excerpt: 'EUR/USD trong xu hướng tăng với mục tiêu tiếp theo 1.12.' },
        { title: 'Dự Báo Giá Vàng Tuần 2 Tháng 2/2026', slug: 'du-bao-gia-vang-tuan-2-thang-2', excerpt: 'Phân tích các yếu tố ảnh hưởng đến giá vàng tuần tới.' },
        { title: 'GBP/USD Có Thể Bứt Phá Sau Dữ Liệu Việc Làm UK', slug: 'gbpusd-but-pha-du-lieu-viec-lam', excerpt: 'Bảng Anh có thể tăng mạnh nếu dữ liệu việc làm tích cực.' },
        { title: 'USD/JPY: Khả Năng BOJ Can Thiệp Thị Trường', slug: 'usdjpy-boj-can-thiep', excerpt: 'USD/JPY vượt mốc 150, BOJ có thể can thiệp.' },
        { title: 'Dầu Thô Có Xu Hướng Giảm Trong Ngắn Hạn', slug: 'dau-tho-xu-huong-giam-ngan-han', excerpt: 'Giá dầu có thể tiếp tục giảm do nhu cầu toàn cầu suy yếu.' },
        { title: 'Triển Vọng AUD/USD Trước Cuộc Họp RBA', slug: 'trien-vong-audusd-cuoc-hop-rba', excerpt: 'Phân tích AUD/USD trước quyết định lãi suất của RBA.' },
    ],
    'review': [
        { title: 'Đánh Giá Sàn Vantage 2026: Ưu Nhược Điểm Chi Tiết', slug: 'danh-gia-san-vantage-2026', excerpt: 'Review chi tiết sàn Vantage - spread, đòn bẩy, nạp rút tiền.' },
        { title: 'Đánh Giá Sàn Exness 2026: Có Uy Tín Không?', slug: 'danh-gia-san-exness-2026', excerpt: 'Phân tích toàn diện sàn Exness - giấy phép, phí giao dịch.' },
        { title: 'Đánh Giá Sàn XM 2026: Nên Chọn Hay Không?', slug: 'danh-gia-san-xm-2026', excerpt: 'Review sàn XM - bonus, nền tảng, hỗ trợ khách hàng.' },
        { title: 'Đánh Giá Sàn IC Markets 2026: Dành Cho Scalper', slug: 'danh-gia-san-ic-markets-2026', excerpt: 'IC Markets - sàn ECN với spread thấp nhất thị trường.' },
        { title: 'So Sánh Exness vs Vantage: Sàn Nào Tốt Hơn?', slug: 'so-sanh-exness-vs-vantage', excerpt: 'So sánh chi tiết hai sàn Forex phổ biến nhất Việt Nam.' },
        { title: 'Top 5 Sàn Forex Phí Thấp Nhất 2026', slug: 'top-5-san-forex-phi-thap-nhat', excerpt: 'Danh sách các sàn Forex có spread và phí giao dịch thấp nhất.' },
    ],
};

function generateContent(title, category) {
    const sections = {
        intro: `<h2>Giới thiệu</h2><p>${title} là một trong những chủ đề quan trọng mà các trader cần nắm vững để thành công trong thị trường Forex. Trong bài viết này, chúng tôi sẽ phân tích chi tiết và cung cấp những thông tin hữu ích nhất cho bạn đọc. Thị trường Forex là thị trường tài chính lớn nhất thế giới với khối lượng giao dịch hàng nghìn tỷ USD mỗi ngày, thu hút hàng triệu nhà đầu tư từ khắp nơi trên thế giới tham gia giao dịch mỗi ngày.</p>`,

        analysis: `<h2>Phân Tích Chi Tiết</h2><p>Để hiểu rõ hơn về vấn đề này, chúng ta cần xem xét nhiều khía cạnh khác nhau. Đầu tiên, yếu tố kinh tế vĩ mô đóng vai trò quan trọng trong việc định hướng xu hướng thị trường. Các chỉ số như GDP, lạm phát, lãi suất và tỷ lệ thất nghiệp đều có tác động trực tiếp đến giá trị đồng tiền và biến động thị trường.</p><p>Thứ hai, tâm lý thị trường cũng là yếu tố không thể bỏ qua. Khi nhà đầu tư lo ngại về rủi ro, họ thường chuyển sang các tài sản an toàn như USD, JPY hoặc vàng. Ngược lại, khi thị trường lạc quan, các đồng tiền rủi ro cao như AUD, NZD thường được ưa chuộng hơn và có xu hướng tăng giá mạnh.</p>`,

        strategy: `<h2>Chiến Lược Giao Dịch</h2><p>Dựa trên phân tích trên, trader có thể áp dụng một số chiến lược phù hợp với phong cách và mục tiêu của mình. Đối với trader ngắn hạn, việc theo dõi các phiên giao dịch chính như London, New York và Tokyo là rất quan trọng vì đây là thời điểm thanh khoản cao nhất và biến động mạnh nhất.</p><p>Đối với trader dài hạn, phân tích cơ bản và xu hướng lớn sẽ là nền tảng cho quyết định giao dịch. Quản lý rủi ro là yếu tố sống còn - không nên mạo hiểm quá 2% vốn cho mỗi giao dịch. Đặt stop loss hợp lý và tuân thủ kỷ luật giao dịch là chìa khóa để tồn tại và phát triển lâu dài trong thị trường đầy biến động này.</p>`,

        tips: `<h2>Những Điều Cần Lưu Ý</h2><p>Khi tham gia giao dịch Forex, bạn cần lưu ý một số điểm quan trọng sau đây. Thứ nhất, luôn cập nhật tin tức kinh tế và các sự kiện có thể ảnh hưởng đến thị trường. Lịch kinh tế là công cụ không thể thiếu cho mọi trader chuyên nghiệp và bạn nên theo dõi hàng ngày.</p><p>Thứ hai, đừng để cảm xúc chi phối quyết định giao dịch. Lòng tham và sợ hãi là kẻ thù lớn nhất của trader và có thể dẫn đến những quyết định sai lầm. Thứ ba, hãy liên tục học hỏi và cải thiện kỹ năng. Thị trường luôn thay đổi và những gì hiệu quả hôm nay có thể không còn phù hợp ngày mai.</p>`,

        conclusion: `<h2>Kết Luận</h2><p>Tóm lại, ${title.toLowerCase()} là vấn đề đáng quan tâm đối với mọi trader ở mọi cấp độ. Bằng cách nắm vững kiến thức cơ bản, xây dựng chiến lược phù hợp và quản lý rủi ro tốt, bạn hoàn toàn có thể thành công trong thị trường Forex đầy thách thức nhưng cũng rất hấp dẫn này.</p><p>Hãy nhớ rằng trading là một hành trình dài, đừng nóng vội mà hãy kiên nhẫn tích lũy kinh nghiệm từng ngày. Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại liên hệ với chúng tôi hoặc để lại bình luận bên dưới. Chúc bạn giao dịch thành công và đạt được mục tiêu tài chính của mình!</p>`,
    };

    return sections.intro + sections.analysis + sections.strategy + sections.tips + sections.conclusion;
}

async function seedPosts() {
    console.log('🚀 Bắt đầu seed 30 bài viết (6 bài × 5 danh mục)...\n');

    let total = 0;
    let success = 0;

    for (const [category, posts] of Object.entries(articles)) {
        console.log(`\n📁 Danh mục: ${category.toUpperCase()}`);

        for (const post of posts) {
            total++;
            const postData = {
                title: post.title,
                slug: post.slug,
                excerpt: post.excerpt,
                content: generateContent(post.title, category),
                category: category,
                tags: ['forex', 'trading', category],
                author: 'Sàn Uy Tín Team',
                meta_title: (post.title + ' | Sàn Uy Tín').substring(0, 60),
                meta_description: post.excerpt.substring(0, 160),
                is_published: true,
                published_at: new Date().toISOString(),
            };

            const { data, error } = await supabase
                .from('posts')
                .upsert([postData], { onConflict: 'slug' })
                .select()
                .single();

            if (error) {
                console.log(`  ❌ ${post.title.substring(0, 40)}...`);
                console.log(`     Lỗi: ${error.message}`);
            } else {
                success++;
                console.log(`  ✅ ${post.title.substring(0, 50)}...`);
            }
        }
    }

    console.log(`\n${'='.repeat(50)}`);
    console.log(`📊 KẾT QUẢ: ${success}/${total} bài viết đã được tạo thành công!`);
    console.log(`${'='.repeat(50)}\n`);
}

seedPosts();
