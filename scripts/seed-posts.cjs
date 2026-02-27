const { createClient } = require('@supabase/supabase-js');
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');

// 8 bài mỗi danh mục = 40 bài, chia đều 5 danh mục
const POSTS = [
    // ===== TIN TỨC (8 bài) =====
    { category: "tin-tuc", title: "Fed giữ nguyên lãi suất tháng 2/2026: Tác động đến Forex và Vàng", excerpt: "Cục Dự trữ Liên bang Mỹ quyết định giữ nguyên lãi suất ở mức 4.5%, khiến đồng USD suy yếu và giá vàng tăng vọt. Phân tích chi tiết diễn biến thị trường sau quyết định của Fed.", slug: "fed-giu-nguyen-lai-suat-thang-2-2026" },
    { category: "tin-tuc", title: "Giá Vàng vượt mốc 2.400 USD/oz — Kỷ lục lịch sử mới 2026", excerpt: "Vàng thế giới liên tục phá đỉnh trong bối cảnh căng thẳng địa chính trị và kỳ vọng Fed cắt giảm lãi suất. Nhà đầu tư đổ xô vào kênh trú ẩn an toàn.", slug: "gia-vang-vuot-moc-2400-usd-ky-luc-2026" },
    { category: "tin-tuc", title: "Bitcoin chạm $70,000 — Altcoin mùa nào sắp bắt đầu?", excerpt: "Bitcoin vượt ngưỡng kháng cự quan trọng, kéo theo sự bùng nổ của các đồng altcoin. Thị trường crypto đang bước vào giai đoạn tăng trưởng mới.", slug: "bitcoin-cham-70000-altcoin-mua-sap-bat-dau" },
    { category: "tin-tuc", title: "EUR/USD tăng mạnh sau dữ liệu GDP Eurozone vượt kỳ vọng", excerpt: "Đồng Euro tăng giá mạnh so với USD sau khi số liệu GDP quý 4 của Eurozone công bố cao hơn dự kiến. Cặp EUR/USD tiến tới vùng 1.12.", slug: "eurusd-tang-manh-gdp-eurozone-vuot-ky-vong" },
    { category: "tin-tuc", title: "Thị trường Forex tuần này: 5 sự kiện kinh tế cần theo dõi", excerpt: "Tổng hợp các sự kiện kinh tế quan trọng tuần này bao gồm Non-Farm Payrolls, CPI và quyết định lãi suất của ECB ảnh hưởng trực tiếp đến thị trường.", slug: "thi-truong-forex-tuan-nay-5-su-kien-kinh-te" },
    { category: "tin-tuc", title: "Ngân hàng Trung ương Nhật Bản bất ngờ tăng lãi suất — JPY tăng vọt", excerpt: "BOJ gây bất ngờ khi nâng lãi suất lần đầu tiên sau 17 năm, khiến đồng Yên Nhật tăng mạnh và thị trường toàn cầu biến động.", slug: "ngan-hang-trung-uong-nhat-ban-tang-lai-suat" },
    { category: "tin-tuc", title: "Dầu thô WTI vượt $90 giữa căng thẳng Trung Đông", excerpt: "Giá dầu thô WTI tăng vượt mốc $90/thùng do lo ngại nguồn cung bị gián đoạn từ khu vực Trung Đông. Tác động đến cặp USD/CAD và AUD/USD.", slug: "dau-tho-wti-vuot-90-cang-thang-trung-dong" },
    { category: "tin-tuc", title: "CPI Mỹ giảm — Kỳ vọng Fed cắt giảm lãi suất tăng cao", excerpt: "Chỉ số giá tiêu dùng CPI của Mỹ giảm xuống 2.8%, thấp hơn kỳ vọng 3.0%. Thị trường phản ứng tích cực với khả năng Fed nới lỏng chính sách tiền tệ.", slug: "cpi-my-giam-ky-vong-fed-cat-giam-lai-suat" },

    // ===== KIẾN THỨC (8 bài) =====
    { category: "kien-thuc", title: "Forex là gì? Hướng dẫn nhập môn toàn tập cho người mới 2026", excerpt: "Tìm hiểu Forex từ A-Z: khái niệm, cách hoạt động, các cặp tiền chính, phiên giao dịch và lý do tại sao Forex là thị trường tài chính lớn nhất thế giới.", slug: "forex-la-gi-huong-dan-nhap-mon-toan-tap" },
    { category: "kien-thuc", title: "Pip là gì? Cách tính Pip trong Forex đơn giản nhất", excerpt: "Giải thích chi tiết khái niệm Pip, Pipette và cách tính giá trị pip cho từng cặp tiền tệ. Bao gồm ví dụ thực tế và bảng tính nhanh.", slug: "pip-la-gi-cach-tinh-pip-trong-forex" },
    { category: "kien-thuc", title: "Đòn bẩy (Leverage) là gì? Lợi và hại khi dùng đòn bẩy cao", excerpt: "Đòn bẩy giúp bạn giao dịch với số vốn lớn hơn nhiều lần so với thực tế. Nhưng đây cũng là con dao hai lưỡi nếu không biết cách quản lý rủi ro.", slug: "don-bay-leverage-la-gi-loi-va-hai" },
    { category: "kien-thuc", title: "Spread là gì? Tại sao Spread quan trọng khi chọn sàn Forex?", excerpt: "Spread là chênh lệch giữa giá mua và giá bán, ảnh hưởng trực tiếp đến chi phí giao dịch. Hiểu rõ spread giúp bạn tiết kiệm đáng kể khi trade.", slug: "spread-la-gi-tai-sao-quan-trong-chon-san" },
    { category: "kien-thuc", title: "Lot là gì? Standard Lot, Mini Lot, Micro Lot khác nhau thế nào?", excerpt: "Tìm hiểu các loại lot trong Forex và cách chọn khối lượng giao dịch phù hợp với vốn của bạn. Hướng dẫn tính toán size lot an toàn.", slug: "lot-la-gi-standard-mini-micro-lot" },
    { category: "kien-thuc", title: "Margin là gì? Margin Call và Stop Out hoạt động ra sao?", excerpt: "Giải thích khái niệm margin, free margin, margin level và cách tránh bị Margin Call — nỗi sợ lớn nhất của trader mới.", slug: "margin-la-gi-margin-call-stop-out" },
    { category: "kien-thuc", title: "Nến Nhật (Candlestick) là gì? 10 mô hình nến quan trọng nhất", excerpt: "Tổng hợp kiến thức về biểu đồ nến Nhật, cách đọc nến và 10 mô hình nến phổ biến nhất mà mọi trader cần phải biết.", slug: "nen-nhat-candlestick-10-mo-hinh-quan-trong" },
    { category: "kien-thuc", title: "Các phiên giao dịch Forex: Tokyo, London, New York — Nên trade khi nào?", excerpt: "Thị trường Forex hoạt động 24/5 nhưng không phải lúc nào cũng sôi động. Tìm hiểu đặc điểm từng phiên và thời điểm vàng để giao dịch.", slug: "cac-phien-giao-dich-forex-tokyo-london-newyork" },

    // ===== HƯỚNG DẪN (8 bài) =====
    { category: "huong-dan", title: "Hướng dẫn mở tài khoản Exness từ A-Z cho người mới 2026", excerpt: "Bài hướng dẫn chi tiết từng bước mở tài khoản Exness, xác minh danh tính (KYC), nạp tiền và bắt đầu giao dịch Forex.", slug: "huong-dan-mo-tai-khoan-exness-2026" },
    { category: "huong-dan", title: "Cách cài đặt và sử dụng MetaTrader 4 (MT4) trên điện thoại", excerpt: "Hướng dẫn tải, cài đặt MT4 trên iOS/Android, đăng nhập tài khoản và thực hiện lệnh giao dịch đầu tiên chỉ trong 5 phút.", slug: "cach-cai-dat-su-dung-mt4-dien-thoai" },
    { category: "huong-dan", title: "Hướng dẫn nạp/rút tiền sàn XM chi tiết — Nhanh nhất 2026", excerpt: "Tổng hợp các phương thức nạp rút tiền trên sàn XM: ngân hàng nội địa, ví điện tử, crypto. So sánh thời gian xử lý và phí.", slug: "huong-dan-nap-rut-tien-san-xm-chi-tiet" },
    { category: "huong-dan", title: "Cách đọc biểu đồ Forex cho người mới bắt đầu", excerpt: "Hướng dẫn đọc biểu đồ nến, biểu đồ đường và biểu đồ thanh. Cách phân biệt vùng hỗ trợ, kháng cự và xu hướng thị trường.", slug: "cach-doc-bieu-do-forex-cho-nguoi-moi" },
    { category: "huong-dan", title: "Hướng dẫn đặt Stop Loss và Take Profit hiệu quả", excerpt: "Cách xác định vị trí đặt SL/TP hợp lý theo chiến lược giao dịch. Bao gồm phương pháp ATR, swing high/low và tỷ lệ R:R.", slug: "huong-dan-dat-stop-loss-take-profit-hieu-qua" },
    { category: "huong-dan", title: "Cách sử dụng TradingView miễn phí để phân tích kỹ thuật", excerpt: "Hướng dẫn tạo tài khoản, setup chart, thêm indicator và vẽ trendline trên TradingView — công cụ phân tích phổ biến nhất.", slug: "cach-su-dung-tradingview-mien-phi" },
    { category: "huong-dan", title: "Hướng dẫn copy trade trên Exness cho người không có kinh nghiệm", excerpt: "Copy trade giúp bạn sao chép lệnh giao dịch từ trader chuyên nghiệp. Hướng dẫn chi tiết từ A-Z cách chọn trader và quản lý rủi ro.", slug: "huong-dan-copy-trade-tren-exness" },
    { category: "huong-dan", title: "Cách mở tài khoản Demo Forex và luyện tập không rủi ro", excerpt: "Tài khoản demo là cách tốt nhất để học trade mà không mất tiền thật. Hướng dẫn mở demo trên MT4/MT5 và các mẹo luyện tập hiệu quả.", slug: "cach-mo-tai-khoan-demo-forex-luyen-tap" },

    // ===== PHÂN TÍCH (8 bài) =====
    { category: "phan-tich", title: "Phân tích kỹ thuật EUR/USD tuần 4 tháng 2/2026: Xu hướng tăng tiếp tục?", excerpt: "Phân tích chi tiết cặp EUR/USD với các mức hỗ trợ/kháng cự quan trọng, chỉ báo MACD, RSI và dự báo tuần tới.", slug: "phan-tich-ky-thuat-eurusd-tuan-4-thang-2-2026" },
    { category: "phan-tich", title: "Vàng (XAU/USD) — Phân tích xu hướng trung hạn tháng 3/2026", excerpt: "Giá vàng đang trong sóng tăng Elliott thứ 5. Phân tích Fibonacci, trendline và các kịch bản giá có thể xảy ra.", slug: "vang-xauusd-phan-tich-xu-huong-thang-3-2026" },
    { category: "phan-tich", title: "GBP/USD: Mô hình Double Bottom — Cơ hội mua vào?", excerpt: "Cặp GBP/USD hình thành mô hình hai đáy trên khung H4. Phân tích chi tiết điểm vào lệnh, SL và TP theo Price Action.", slug: "gbpusd-mo-hinh-double-bottom-co-hoi-mua" },
    { category: "phan-tich", title: "USD/JPY: Tác động của chính sách BOJ lên xu hướng dài hạn", excerpt: "Phân tích cơ bản và kỹ thuật cặp USD/JPY sau quyết định lãi suất của BOJ. Dự báo kịch bản 3 tháng tới.", slug: "usdjpy-tac-dong-chinh-sach-boj-xu-huong" },
    { category: "phan-tich", title: "Chiến lược giao dịch Break and Retest thực chiến", excerpt: "Hướng dẫn chi tiết chiến lược Break and Retest — một trong những setup có tỷ lệ thắng cao nhất trong Price Action trading.", slug: "chien-luoc-break-and-retest-thuc-chien" },
    { category: "phan-tich", title: "RSI phân kỳ: Cách nhận diện đỉnh/đáy thị trường chính xác", excerpt: "RSI Divergence là tín hiệu mạnh báo hiệu sự đảo chiều. Hướng dẫn nhận diện phân kỳ dương, phân kỳ âm và cách vào lệnh.", slug: "rsi-phan-ky-nhan-dien-dinh-day-thi-truong" },
    { category: "phan-tich", title: "Trendline: Vẽ 1 đường thẳng mà biết giá đi đâu — Cách làm đúng", excerpt: "Hướng dẫn vẽ trendline đúng cách, phân biệt uptrend/downtrend, chiến lược bounce và breakout với trendline.", slug: "trendline-ve-dung-cach-biet-gia-di-dau" },
    { category: "phan-tich", title: "Trend Following: Chiến lược lười nhưng lãi nhất mọi thời đại", excerpt: "Trend Following không cần đoán đỉnh đáy, chỉ cần theo xu hướng. Phân tích tại sao đây là phương pháp được các quỹ hedge fund ưa chuộng.", slug: "trend-following-chien-luoc-luoi-lai-nhat" },

    // ===== REVIEW SÀN (8 bài) =====
    { category: "review", title: "Đánh giá sàn Exness chi tiết 2026: Có thực sự uy tín như lời đồn?", excerpt: "Review toàn diện sàn Exness: giấy phép FSA, FCA; spread, phí, nạp rút, đòn bẩy. So sánh với các sàn khác và nhận định khách quan.", slug: "danh-gia-san-exness-chi-tiet-2026" },
    { category: "review", title: "Đánh giá sàn XM chi tiết 2026: Phí thấp nhưng rủi ro gì?", excerpt: "XM là sàn Forex có giấy phép CySEC và ASIC với hơn 10 triệu khách hàng. Đánh giá chi tiết ưu nhược điểm và kinh nghiệm sử dụng thực tế.", slug: "danh-gia-san-xm-chi-tiet-2026" },
    { category: "review", title: "Đánh giá sàn Pepperstone chi tiết 2026: Có thực sự uy tín như lời đồn?", excerpt: "Pepperstone nổi tiếng với spread thấp và tốc độ khớp lệnh nhanh. Review chi tiết giấy phép, phí, nền tảng và trải nghiệm thực tế.", slug: "danh-gia-san-pepperstone-chi-tiet-2026" },
    { category: "review", title: "Đánh giá sàn IC Markets 2026 — Sàn ECN số 1 cho Scalper?", excerpt: "IC Markets được biết đến là sàn ECN hàng đầu với spread siêu thấp. Đánh giá chi tiết có phải là lựa chọn tốt nhất cho scalping.", slug: "danh-gia-san-ic-markets-2026-ecn-scalper" },
    { category: "review", title: "So sánh Exness vs XM: Sàn nào phù hợp người Việt hơn?", excerpt: "Đặt 2 sàn Forex phổ biến nhất Việt Nam lên bàn cân: so sánh spread, đòn bẩy, nạp rút, hỗ trợ tiếng Việt và trải nghiệm thực tế.", slug: "so-sanh-exness-vs-xm-san-nao-phu-hop" },
    { category: "review", title: "Top 5 sàn Forex có phí thấp nhất cho người Việt 2026", excerpt: "Xếp hạng 5 sàn Forex có tổng chi phí giao dịch thấp nhất: tính cả spread, commission và phí swap. Phân tích chi tiết từng sàn.", slug: "top-5-san-forex-phi-thap-nhat-nguoi-viet-2026" },
    { category: "review", title: "Đánh giá sàn FxPro 2026: Giấy phép mạnh nhưng phí có cao?", excerpt: "FxPro sở hữu giấy phép FCA (Anh) và CySEC (Síp) — hai giấy phép uy tín nhất ngành. Nhưng spread và phí swap liệu có cạnh tranh?", slug: "danh-gia-san-fxpro-2026-giay-phep-phi" },
    { category: "review", title: "Nên trade sàn nào năm 2026? Top 5 sàn uy tín cho từng nhu cầu", excerpt: "Tổng hợp top 5 sàn Forex uy tín nhất 2026 cho từng nhu cầu: scalping, copy trade, vốn nhỏ và trader chuyên nghiệp.", slug: "nen-trade-san-nao-2026-top-5-san-uy-tin" },
];

(async () => {
    console.log('🚀 Seeding ' + POSTS.length + ' posts across 5 categories...\n');

    let success = 0;
    let failed = 0;
    const now = new Date();

    for (let i = 0; i < POSTS.length; i++) {
        const post = POSTS[i];
        // Stagger dates: each post 6 hours apart, going backwards from now
        const publishDate = new Date(now.getTime() - (i * 6 * 60 * 60 * 1000));

        const postData = {
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            content: '<p>' + post.excerpt + '</p><p>Nội dung chi tiết đang được cập nhật...</p>',
            category: post.category,
            tags: [],
            is_published: true,
            published_at: publishDate.toISOString(),
            featured_image: null,
            featured_image_alt: null,
            meta_title: null,
            meta_description: post.excerpt,
        };

        const { error } = await s.from('posts').insert(postData);

        if (error) {
            console.log('❌ ' + post.title.substring(0, 50) + ' => ' + error.message);
            failed++;
        } else {
            success++;
        }
    }

    console.log('\n✅ Done! ' + success + ' created, ' + failed + ' failed');

    // Verify distribution
    const { data: allPosts } = await s.from('posts').select('category').eq('is_published', true);
    const dist = {};
    (allPosts || []).forEach(p => { dist[p.category] = (dist[p.category] || 0) + 1; });

    console.log('\n📊 Distribution:');
    Object.entries(dist).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
        console.log('  ' + cat.padEnd(15) + count);
    });
})();
