import { createClient } from '@supabase/supabase-js';

const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const getDate = (daysAhead) => {
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    date.setHours(7, 30, 0, 0);
    return date.toISOString();
};

const platformsBatch = [
    {
        title: "MT4 Và MT5: Đâu Là Lựa Chọn Tốt Nhất Cho Trader Trong Năm 2026?",
        slug: "so-sanh-mt4-va-mt5-2026-chi-tiet",
        category: "kien-thuc-forex",
        tags: ["mt4", "mt5", "nen tang giao dich", "meta-trader"],
        excerpt: "So sánh chi tiết MetaTrader 4 và MetaTrader 5 năm 2026. Tại sao MT4 vẫn được ưa chuộng và khi nào bạn nên chuyển sang MT5 để tối ưu hóa lợi nhuận?",
        meta_title: "So Sánh MT4 Và MT5 2026 ✓ Nên Chọn Nền Tảng Nào?",
        meta_description: "So sánh MT4 vs MT5 mới nhất 2026. Phân tích ưu nhược điểm, tốc độ khớp lệnh và khả năng chạy Robot EA. Xem ngay tư vấn từ chuyên gia Sàn Uy Tín.",
        featured_image: "https://images.unsplash.com/photo-1611974717424-34cca55476a6?w=1200&q=80",
        featured_image_alt: "So sánh MT4 vs MT5",
        is_published: false,
        scheduled_at: getDate(15), // March 18
        author: 'Sàn Uy Tín',
        content: `
<h2>1. MetaTrader - "Linh hồn" của ngành giao dịch Forex</h2>
<p>Dù có bao nhiêu nền tảng mới ra đời, MT4 và MT5 của MetaQuotes vẫn giữ vị thế độc tôn. Tuy nhiên, sự khác biệt giữa hai "anh em" này thường khiến trader bối rối.</p>

<h2>2. MetaTrader 4 (MT4) - Huyền thoại chưa bao giờ lỗi thời</h2>
<p>Ra đời từ năm 2005, MT4 vẫn là lựa chọn số 1 của 80% trader Forex. 
<ul>
    <li><strong>Điểm mạnh:</strong> Cực kỳ nhẹ, dễ sử dụng, kho Robot (EA) và Indicator miễn phí khổng lồ.</li>
    <li><strong>Phù hợp nhất:</strong> Cho các trader chỉ tập trung vào Forex và Vàng.</li>
</ul></p>

<h2>3. MetaTrader 5 (MT5) - Tương lai của giao dịch đa tài sản</h2>
<p>MT5 không phải là bản nâng cấp của MT4, mà là một nền tảng hoàn toàn khác.
<ul>
    <li><strong>Điểm mạnh:</strong> Hỗ trợ giao dịch Cổ phiếu, Tương lai, Quyền chọn. Tốc độ xử lý đa luồng nhanh hơn, hỗ trợ 21 khung thời gian (so với 9 của MT4).</li>
    <li><strong>Phù hợp nhất:</strong> Trader muốn đánh đa tài sản và dùng Robot thế hệ mới (MQL5).</li>
</ul></p>

<h2>4. Kết luận: Nên chọn cái nào?</h2>
<p>Nếu bạn là người mới và chỉ đánh Forex, hãy bắt đầu với <strong>MT4</strong> tại <strong><a href="https://sanuytin.net/exness/">sàn Exness</a></strong> hoặc <strong><a href="https://sanuytin.net/xm/">sàn XM</a></strong>. Nếu bạn muốn chuyên sâu về cổ phiếu và cần tốc độ xử lý lớn, hãy chọn <strong>MT5</strong> trên <strong><a href="https://sanuytin.net/ic-markets/">IC Markets</a></strong>.</p>
    `
    },
    {
        title: "Hướng Dẫn Dùng TradingView Toàn Tập 2026: Cách Kết Nối Sàn & Đặt Lệnh",
        slug: "huong-dan-tradingview-2026-toan-tap",
        category: "kien-thuc-forex",
        tags: ["tradingview", "huong dan", "phan tich ky thuat", "cong cu"],
        excerpt: "Hướng dẫn sử dụng TradingView chi tiết năm 2026. Cách cài đặt biểu đồ mượt mà, dùng Indicator và kết nối trực tiếp với sàn Forex để đặt lệnh không cần MT4.",
        meta_title: "Hướng Dẫn TradingView 2026 ✓ Cách Phân Tích Như Pro",
        meta_description: "Cẩm nang TradingView 2026 cho người mới. Cách dùng công cụ vẽ, cài đặt chỉ báo và kết nối TradingView với các sàn uy tín để trade trực tiếp.",
        featured_image: "https://images.unsplash.com/photo-1611974717424-34cca55476a6?w=1200&q=80",
        featured_image_alt: "Hướng dẫn TradingView 2026",
        is_published: false,
        scheduled_at: getDate(16), // March 19
        author: 'Sàn Uy Tín',
        content: `
<h2>1. Tại sao mọi trader Pro đều dùng TradingView?</h2>
<p>TradingView không chỉ là biểu đồ, nó là một nền tảng phân tích kỹ thuật mạnh mẽ và hiện đại nhất thế giới hiện nay với giao diện cực đẹp và dữ liệu real-time chính xác.</p>

<h2>2. Các tính năng cốt lõi cần biết</h2>
<ul>
    <li><strong>Watchlist:</strong> Quản lý danh sách cặp tiền và vàng yêu thích.</li>
    <li><strong>Indicator:</strong> Hàng trăm nghìn chỉ báo từ cộng đồng (Pine Script).</li>
    <li><strong>Paper Trading:</strong> Giúp bạn tập trade thử nghiệm chiến thuật mà không mất tiền thật.</li>
</ul>

<h2>3. Cách kết nối TradingView với sàn Forex (Direct Trading)</h2>
<p>Hiện nay, một số sàn lớn như <strong><a href="https://sanuytin.net/danh-gia-san-xtb-chi-tiet-2026/">XTB</a></strong> hay <strong><a href="https://sanuytin.net/review-san-pepperstone-chi-tiet-2026/">Pepperstone</a></strong> đã cho phép kết nối trực tiếp tài khoản vào TradingView. Bạn có thể đặt lệnh, chốt lời, cắt lỗ ngay trên biểu đồ TradingView cực kỳ tiện lợi.</p>

<h2>4. Kết luận</h2>
<p>TradingView là công cụ bắt buộc phải có nếu bạn muốn sự nghiệp trader chuyên nghiệp. Hãy đăng ký tài khoản miễn phí và tập vẽ biểu đồ ngay hôm nay!</p>
    `
    },
    {
        title: "cTrader Là Gì? Tại Sao Scalper Chuyên Nghiệp Lại Dần Rời Bỏ MT4?",
        slug: "ctrader-la-gi-danh-gia-nen-tang-forex",
        category: "kien-thuc-forex",
        tags: ["ctrader", "nen tang", "scalping", "ic markets"],
        excerpt: "Phân tích nền tảng cTrader năm 2026. Khám phá lý do tại sao các trader lướt sóng chuyên nghiệp lại ưa chuộng cTrader vì tốc độ và minh bạch hơn MetaTrader.",
        meta_title: "cTrader Là Gì? Đánh Giá Nền Tảng Scalping Số 1 2026",
        meta_description: "Tìm hiểu cTrader 2026 - nền tảng giao dịch chuyên nghiệp cho Scalper. So sánh cTrader vs MT4 và danh sách các sàn hỗ trợ cTrader mượt nhất.",
        featured_image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=80",
        featured_image_alt: "Nền tảng cTrader",
        is_published: false,
        scheduled_at: getDate(17), // March 20
        author: 'Sàn Uy Tín',
        content: `
<h2>1. cTrader - Chuẩn mực mới cho sự minh bạch</h2>
<p>cTrader được phát triển bởi Spotware với triết lý <strong>"Trader First"</strong>. Khác với MT4, cTrader được thiết kế ngay từ đầu để kết nối trực tiếp với thị trường liên ngân hàng (ECN), loại bỏ hoàn toàn khả năng can thiệp lệnh của sàn.</p>

<h2>2. Những tính năng "ăn tiền" của cTrader</h2>
<ul>
    <li><strong>Tốc độ khớp lệnh:</strong> Nhanh hơn MetaTrader đáng kể, cực kỳ quan trọng cho Scalping.</li>
    <li><strong>Độ sâu thị trường (DOM):</strong> Giúp bạn thấy được thanh khoản thị trường ở từng mức giá.</li>
    <li><strong>Giao diện Dark Mode:</strong> Cực kỳ hiện đại và chuyên nghiệp, giảm mỏi mắt khi nhìn biểu đồ lâu.</li>
</ul>

<h2>3. Sàn nào hỗ trợ cTrader tốt nhất 2026?</h2>
<p>Hiện tại, <strong><a href="https://sanuytin.net/review-san-pepperstone-chi-tiet-2026/">Pepperstone</a></strong>, <strong><a href="https://sanuytin.net/danh-gia-san-ic-markets-2026/">IC Markets</a></strong> và <strong><a href="https://sanuytin.net/review-san-fxpro-2026-chi-tiet/">FxPro</a></strong> là những sàn cung cấp nền tảng cTrader ổn định nhất tại Việt Nam.</p>
    `
    },
    {
        title: "Forex VPS Là Gì? Cách Treo Robot (EA) 24/7 Ổn Định & An Toàn Nhất",
        slug: "forex-vps-la-gi-cach-thue-vps-forex",
        category: "kien-thuc-forex",
        tags: ["forex vps", "robot ea", "hosting", "kinh nghiem"],
        excerpt: "Tìm hiểu về Forex VPS: Giải pháp giúp Robot giao dịch của bạn hoạt động 24/7 mà không cần bật máy tính. Hướng dẫn cách chọn VPS có độ trễ thấp nhất.",
        meta_title: "Forex VPS Là Gì? Hướng Dẫn Thuê VPS Treo EA 24/7",
        meta_description: "Forex VPS là gì? Tại sao trader dùng Robot EA bắt buộc phải thuê VPS? Cách chọn VPS gần máy chủ sàn (London/New York) để giảm độ trễ (Latency).",
        featured_image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c4b?w=1200&q=80",
        featured_image_alt: "Forex VPS chuyên dụng",
        is_published: false,
        scheduled_at: getDate(18), // March 21
        author: 'Sàn Uy Tín',
        content: `
<h2>1. Tại sao bạn cần Forex VPS?</h2>
<p>Nếu bạn sử dụng Robot (EA), bạn không thể bật máy tính cá nhân 24/24 vì rủi ro mất điện, mất mạng hoặc máy bị lag. <strong>Forex VPS</strong> là một máy chủ ảo chạy liên tục trong trung tâm dữ liệu chuyên dụng, đảm bảo phần mềm của bạn luôn trực tuyến.</p>

<h2>2. Lợi ích của VPS so với máy tính thông thường</h2>
<ul>
    <li><strong>Hoạt động 24/7:</strong> Không bao giờ tắt máy.</li>
    <li><strong>Độ trễ (Latency) cực thấp:</strong> Nếu bạn đặt VPS tại London gần máy chủ <strong><a href="https://sanuytin.net/ic-markets/">IC Markets</a></strong>, tốc độ khớp lệnh sẽ nhanh gấp nhiều lần.</li>
    <li><strong>Truy cập mọi nơi:</strong> Bạn có thể dùng điện thoại để kiểm tra máy chủ VPS bất cứ lúc nào qua Remote Desktop.</li>
</ul>

<h2>3. Lưu ý khi chọn thuê Forex VPS 2026</h2>
<p>Đừng thuê các loại VPS giá rẻ thông thường. Hãy chọn các dịch vụ chuyên cho Forex như **Beeks** hoặc **Vultr** tại các khu vực London (LD4) hoặc New York (NY4) để có hiệu năng tốt nhất.</p>
    `
    }
];

async function main() {
    console.log('🚀 Đang đẩy gói bài viết "Nền tảng Giao dịch" vào lịch hệ thống...');
    for (const post of platformsBatch) {
        const { error } = await sb.from('posts').insert([post]);
        if (error) {
            console.error(`❌ Lỗi bài "${post.title}":`, error.message);
        } else {
            console.log(`✅ Đã lên lịch: "${post.title}" - Ngày: ${post.scheduled_at.split('T')[0]}`);
        }
    }
}

main();
