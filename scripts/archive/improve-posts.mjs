import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    "https://pbxpjmklrkkwatdvacap.supabase.co",
    "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K"
);

// ============================================================
// INTERNAL LINKS MAP - Based on content relevance
// ============================================================
const INTERNAL_LINKS = {
    // slug -> { text, url } pairs for contextual linking
    'bollinger-bands-la-gi': [
        { anchor: 'RSI', url: '/tin-tuc/huong-dan-su-dung-rsi' },
        { anchor: 'MACD', url: '/tin-tuc/huong-dan-su-dung-macd' },
        { anchor: 'Moving Average', url: '/tin-tuc/moving-average-ema-sma' },
        { anchor: 'hỗ trợ/kháng cự', url: '/tin-tuc/ho-tro-khang-cu-trong-forex' },
        { anchor: 'tài khoản demo', url: '/tin-tuc/cach-mo-tai-khoan-demo-forex' },
    ],
    'fibonacci-retracement-forex': [
        { anchor: 'hỗ trợ/kháng cự', url: '/tin-tuc/ho-tro-khang-cu-trong-forex' },
        { anchor: 'trendline', url: '/tin-tuc/cach-ve-trendline-giao-dich-xu-huong' },
        { anchor: 'Price Action', url: '/tin-tuc/price-action-la-gi' },
        { anchor: 'quản lý vốn', url: '/tin-tuc/quan-ly-von-trong-trading' },
        { anchor: 'tài khoản demo', url: '/tin-tuc/cach-mo-tai-khoan-demo-forex' },
    ],
    'price-action-la-gi': [
        { anchor: 'biểu đồ nến Nhật', url: '/tin-tuc/cach-doc-bieu-do-nen-nhat-ban' },
        { anchor: 'hỗ trợ/kháng cự', url: '/tin-tuc/ho-tro-khang-cu-trong-forex' },
        { anchor: 'trendline', url: '/tin-tuc/cach-ve-trendline-giao-dich-xu-huong' },
        { anchor: 'quản lý vốn', url: '/tin-tuc/quan-ly-von-trong-trading' },
        { anchor: 'so sánh sàn Forex', url: '/so-sanh' },
    ],
    'drawdown-la-gi-forex': [
        { anchor: 'quản lý vốn', url: '/tin-tuc/quan-ly-von-trong-trading' },
        { anchor: 'position sizing', url: '/tin-tuc/position-sizing-tinh-khoi-luong-lenh-forex' },
        { anchor: 'Stop Loss', url: '/tin-tuc/cach-dat-stop-loss-take-profit' },
        { anchor: 'tâm lý trading', url: '/tin-tuc/tam-ly-trading-yeu-to-thanh-cong' },
        { anchor: 'tài khoản demo', url: '/tin-tuc/cach-mo-tai-khoan-demo-forex' },
    ],
    'backtest-chien-luoc-forex': [
        { anchor: 'MT4/MT5', url: '/tin-tuc/mt4-vs-mt5-nen-tang-giao-dich' },
        { anchor: 'scalping', url: '/tin-tuc/scalping-forex-chien-luoc-luot-song' },
        { anchor: 'breakout trading', url: '/tin-tuc/chien-luoc-breakout-trading-forex' },
        { anchor: 'quản lý vốn', url: '/tin-tuc/quan-ly-von-trong-trading' },
        { anchor: 'tài khoản demo', url: '/tin-tuc/cach-mo-tai-khoan-demo-forex' },
    ],
    'cap-tien-forex-de-trade-nhat': [
        { anchor: 'phiên giao dịch Forex', url: '/tin-tuc/cac-phien-giao-dich-forex' },
        { anchor: 'spread', url: '/tin-tuc/spread-trong-forex-la-gi' },
        { anchor: 'lot size', url: '/tin-tuc/lot-size-la-gi-cach-tinh' },
        { anchor: 'pip', url: '/tin-tuc/pip-trong-forex-la-gi' },
        { anchor: 'Exness vs XM', url: '/tin-tuc/so-sanh-exness-vs-xm' },
    ],
    'trading-journal-nhat-ky-giao-dich': [
        { anchor: 'tâm lý trading', url: '/tin-tuc/tam-ly-trading-yeu-to-thanh-cong' },
        { anchor: 'backtest', url: '/tin-tuc/backtest-chien-luoc-forex' },
        { anchor: 'quản lý vốn', url: '/tin-tuc/quan-ly-von-trong-trading' },
        { anchor: 'Stop Loss', url: '/tin-tuc/cach-dat-stop-loss-take-profit' },
        { anchor: 'drawdown', url: '/tin-tuc/drawdown-la-gi-forex' },
    ],
    'so-sanh-ic-markets-vs-exness': [
        { anchor: 'spread', url: '/tin-tuc/spread-trong-forex-la-gi' },
        { anchor: 'đòn bẩy', url: '/tin-tuc/don-bay-leverage-trong-forex' },
        { anchor: 'chọn sàn uy tín', url: '/tin-tuc/chon-san-forex-uy-tin-cho-nguoi-moi' },
        { anchor: 'Exness vs XM', url: '/tin-tuc/so-sanh-exness-vs-xm' },
        { anchor: 'Vantage vs Exness', url: '/tin-tuc/so-sanh-vantage-vs-exness' },
    ],
    'doc-tin-tuc-kinh-te-forex': [
        { anchor: 'phân tích cơ bản', url: '/tin-tuc/phan-tich-ky-thuat-vs-co-ban' },
        { anchor: 'phiên giao dịch', url: '/tin-tuc/cac-phien-giao-dich-forex' },
        { anchor: 'Forex là gì', url: '/tin-tuc/forex-la-gi-huong-dan-nguoi-moi' },
        { anchor: 'Stop Loss', url: '/tin-tuc/cach-dat-stop-loss-take-profit' },
        { anchor: 'tài khoản demo', url: '/tin-tuc/cach-mo-tai-khoan-demo-forex' },
    ],
    'mo-hinh-gia-head-shoulders-double-top': [
        { anchor: 'biểu đồ nến Nhật', url: '/tin-tuc/cach-doc-bieu-do-nen-nhat-ban' },
        { anchor: 'hỗ trợ/kháng cự', url: '/tin-tuc/ho-tro-khang-cu-trong-forex' },
        { anchor: 'trendline', url: '/tin-tuc/cach-ve-trendline-giao-dich-xu-huong' },
        { anchor: 'breakout', url: '/tin-tuc/chien-luoc-breakout-trading-forex' },
        { anchor: 'tài khoản demo', url: '/tin-tuc/cach-mo-tai-khoan-demo-forex' },
    ],
    'cach-ve-trendline-giao-dich-xu-huong': [
        { anchor: 'hỗ trợ/kháng cự', url: '/tin-tuc/ho-tro-khang-cu-trong-forex' },
        { anchor: 'Fibonacci', url: '/tin-tuc/fibonacci-retracement-forex' },
        { anchor: 'Moving Average', url: '/tin-tuc/moving-average-ema-sma' },
        { anchor: 'biểu đồ nến Nhật', url: '/tin-tuc/cach-doc-bieu-do-nen-nhat-ban' },
        { anchor: 'tài khoản demo', url: '/tin-tuc/cach-mo-tai-khoan-demo-forex' },
    ],
    'mt4-vs-mt5-nen-tang-giao-dich': [
        { anchor: 'chọn sàn uy tín', url: '/tin-tuc/chon-san-forex-uy-tin-cho-nguoi-moi' },
        { anchor: 'backtest', url: '/tin-tuc/backtest-chien-luoc-forex' },
        { anchor: 'Exness vs XM', url: '/tin-tuc/so-sanh-exness-vs-xm' },
        { anchor: 'tài khoản demo', url: '/tin-tuc/cach-mo-tai-khoan-demo-forex' },
        { anchor: 'scalping', url: '/tin-tuc/scalping-forex-chien-luoc-luot-song' },
    ],
    'chien-luoc-breakout-trading-forex': [
        { anchor: 'hỗ trợ/kháng cự', url: '/tin-tuc/ho-tro-khang-cu-trong-forex' },
        { anchor: 'Bollinger Bands', url: '/tin-tuc/bollinger-bands-la-gi' },
        { anchor: 'quản lý vốn', url: '/tin-tuc/quan-ly-von-trong-trading' },
        { anchor: 'mô hình giá', url: '/tin-tuc/mo-hinh-gia-head-shoulders-double-top' },
        { anchor: 'tài khoản demo', url: '/tin-tuc/cach-mo-tai-khoan-demo-forex' },
    ],
    'forex-vs-chung-khoan-dau-tu-thi-truong-nao': [
        { anchor: 'Forex là gì', url: '/tin-tuc/forex-la-gi-huong-dan-nguoi-moi' },
        { anchor: 'đòn bẩy', url: '/tin-tuc/don-bay-leverage-trong-forex' },
        { anchor: 'phiên giao dịch Forex', url: '/tin-tuc/cac-phien-giao-dich-forex' },
        { anchor: 'chọn sàn uy tín', url: '/tin-tuc/chon-san-forex-uy-tin-cho-nguoi-moi' },
        { anchor: 'tài khoản demo', url: '/tin-tuc/cach-mo-tai-khoan-demo-forex' },
    ],
    'position-sizing-tinh-khoi-luong-lenh-forex': [
        { anchor: 'lot size', url: '/tin-tuc/lot-size-la-gi-cach-tinh' },
        { anchor: 'quản lý vốn', url: '/tin-tuc/quan-ly-von-trong-trading' },
        { anchor: 'Stop Loss', url: '/tin-tuc/cach-dat-stop-loss-take-profit' },
        { anchor: 'drawdown', url: '/tin-tuc/drawdown-la-gi-forex' },
        { anchor: 'tài khoản demo', url: '/tin-tuc/cach-mo-tai-khoan-demo-forex' },
    ],
    'chien-luoc-trend-following-forex': [
        { anchor: 'Moving Average', url: '/tin-tuc/moving-average-ema-sma' },
        { anchor: 'MACD', url: '/tin-tuc/huong-dan-su-dung-macd' },
        { anchor: 'trendline', url: '/tin-tuc/cach-ve-trendline-giao-dich-xu-huong' },
        { anchor: 'quản lý vốn', url: '/tin-tuc/quan-ly-von-trong-trading' },
        { anchor: 'tài khoản demo', url: '/tin-tuc/cach-mo-tai-khoan-demo-forex' },
    ],
    'risk-reward-ratio-ty-le-rui-ro-loi-nhuan': [
        { anchor: 'Stop Loss & Take Profit', url: '/tin-tuc/cach-dat-stop-loss-take-profit' },
        { anchor: 'quản lý vốn', url: '/tin-tuc/quan-ly-von-trong-trading' },
        { anchor: 'position sizing', url: '/tin-tuc/position-sizing-tinh-khoi-luong-lenh-forex' },
        { anchor: 'tâm lý trading', url: '/tin-tuc/tam-ly-trading-yeu-to-thanh-cong' },
        { anchor: 'tài khoản demo', url: '/tin-tuc/cach-mo-tai-khoan-demo-forex' },
    ],
    'tam-ly-giao-dich-fomo-revenge-trade': [
        { anchor: 'tâm lý trading', url: '/tin-tuc/tam-ly-trading-yeu-to-thanh-cong' },
        { anchor: 'quản lý vốn', url: '/tin-tuc/quan-ly-von-trong-trading' },
        { anchor: 'trading journal', url: '/tin-tuc/trading-journal-nhat-ky-giao-dich' },
        { anchor: 'drawdown', url: '/tin-tuc/drawdown-la-gi-forex' },
        { anchor: 'tài khoản demo', url: '/tin-tuc/cach-mo-tai-khoan-demo-forex' },
    ],
    'supply-demand-zone-forex': [
        { anchor: 'hỗ trợ/kháng cự', url: '/tin-tuc/ho-tro-khang-cu-trong-forex' },
        { anchor: 'Price Action', url: '/tin-tuc/price-action-la-gi' },
        { anchor: 'biểu đồ nến Nhật', url: '/tin-tuc/cach-doc-bieu-do-nen-nhat-ban' },
        { anchor: 'breakout trading', url: '/tin-tuc/chien-luoc-breakout-trading-forex' },
        { anchor: 'tài khoản demo', url: '/tin-tuc/cach-mo-tai-khoan-demo-forex' },
    ],
};

// ============================================================
// FAQ DATA - Relevant FAQ questions for each post
// ============================================================
const FAQ_DATA = {
    'bollinger-bands-la-gi': [
        { q: 'Bollinger Bands là gì?', a: 'Bollinger Bands là chỉ báo kỹ thuật gồm 3 đường: đường trung bình (SMA 20), dải trên và dải dưới cách đường trung bình 2 độ lệch chuẩn. Nó giúp đo lường biến động giá và xác định vùng quá mua/quá bán.' },
        { q: 'Bollinger Bands có chính xác không?', a: 'Bollinger Bands hoạt động tốt nhất khi kết hợp với các chỉ báo khác như RSI hoặc MACD. Không nên dùng đơn lẻ vì có thể cho tín hiệu giả, đặc biệt trong thị trường sideway kéo dài.' },
        { q: 'Cài đặt Bollinger Bands tốt nhất là gì?', a: 'Cài đặt mặc định SMA 20 với 2 độ lệch chuẩn phù hợp cho hầu hết trader. Scalper có thể dùng SMA 10, trong khi trader dài hạn có thể dùng SMA 50.' },
    ],
    'fibonacci-retracement-forex': [
        { q: 'Fibonacci Retracement là gì?', a: 'Fibonacci Retracement là công cụ phân tích kỹ thuật sử dụng các mức tỷ lệ Fibonacci (23.6%, 38.2%, 50%, 61.8%) để xác định vùng hỗ trợ/kháng cự tiềm năng khi giá điều chỉnh.' },
        { q: 'Mức Fibonacci nào quan trọng nhất?', a: 'Mức 61.8% (tỷ lệ vàng) và 38.2% là hai mức quan trọng nhất. Giá thường bật lại mạnh tại các mức này. Mức 50% tuy không phải số Fibonacci nhưng cũng rất được chú ý.' },
        { q: 'Fibonacci có dùng được cho mọi khung thời gian không?', a: 'Có. Fibonacci hoạt động trên mọi khung thời gian, nhưng các mức trên khung H4 và D1 thường chính xác và đáng tin cậy hơn so với khung M5, M15.' },
    ],
    'price-action-la-gi': [
        { q: 'Price Action là gì?', a: 'Price Action là phương pháp phân tích thị trường dựa hoàn toàn vào biến động giá trên biểu đồ nến, không sử dụng chỉ báo kỹ thuật (indicator). Trader đọc các mô hình nến, cấu trúc giá để ra quyết định.' },
        { q: 'Price Action có khó học không?', a: 'Price Action đòi hỏi thời gian thực hành nhiều, nhưng nền tảng đơn giản. Bạn cần nắm vững: đọc nến Nhật, xác định hỗ trợ/kháng cự, và nhận biết 5-10 mô hình giá phổ biến.' },
        { q: 'Nên dùng Price Action trên khung thời gian nào?', a: 'H4 và D1 là khung thời gian lý tưởng cho Price Action vì ít nhiễu. Khung thấp hơn (M5, M15) cần kinh nghiệm nhiều hơn do tín hiệu giả xuất hiện thường xuyên.' },
    ],
    'drawdown-la-gi-forex': [
        { q: 'Drawdown là gì?', a: 'Drawdown là mức sụt giảm vốn từ đỉnh cao nhất xuống đáy thấp nhất trong một giai đoạn. Ví dụ: tài khoản từ $10.000 giảm xuống $7.000 thì drawdown là 30%.' },
        { q: 'Drawdown bao nhiêu phần trăm là chấp nhận được?', a: 'Drawdown dưới 20% được coi là an toàn. Nếu drawdown vượt 30%, bạn cần xem lại chiến lược. Drawdown 50% cần lãi 100% để hòa vốn — rất khó phục hồi.' },
        { q: 'Làm sao giảm drawdown?', a: 'Có 3 cách chính: giảm rủi ro mỗi lệnh xuống 1-2% vốn, dùng Stop Loss đúng cách, và ngừng giao dịch khi thua liên tiếp 3-5 lệnh để điều chỉnh tâm lý.' },
    ],
    'backtest-chien-luoc-forex': [
        { q: 'Backtest là gì?', a: 'Backtest là quá trình kiểm tra chiến lược giao dịch trên dữ liệu lịch sử để đánh giá hiệu quả trước khi áp dụng vào giao dịch thực. Đây là bước bắt buộc của mọi trader chuyên nghiệp.' },
        { q: 'Backtest có đáng tin cậy không?', a: 'Backtest cho kết quả tham khảo tốt nhưng không hoàn hảo. Quá khứ không đảm bảo tương lai. Nên backtest trên ít nhất 100-200 lệnh và kiểm tra thêm bằng tài khoản demo trước khi trade thật.' },
        { q: 'Dùng phần mềm nào để backtest?', a: 'MT4/MT5 có Strategy Tester tích hợp sẵn. TradingView có chức năng Bar Replay. Forex Tester là phần mềm chuyên dụng cho manual backtest, được nhiều trader chuyên nghiệp sử dụng.' },
    ],
    'cap-tien-forex-de-trade-nhat': [
        { q: 'Cặp tiền nào dễ trade nhất cho người mới?', a: 'EUR/USD là cặp tiền dễ trade nhất vì spread thấp, thanh khoản cao và biến động ổn định. Sau đó là GBP/USD, USD/JPY và AUD/USD.' },
        { q: 'Nên trade bao nhiêu cặp tiền cùng lúc?', a: 'Người mới nên tập trung 1-2 cặp tiền để hiểu rõ tính cách và biến động của chúng. Khi có kinh nghiệm, có thể mở rộng lên 3-5 cặp tiền nhưng không nên quá nhiều.' },
        { q: 'Cặp tiền nào biến động mạnh nhất?', a: 'GBP/JPY và GBP/NZD biến động mạnh nhất, có thể đi 150-300 pip/ngày. Tuy nhiên, chúng đi kèm rủi ro lớn và chỉ phù hợp cho trader kinh nghiệm.' },
    ],
    'trading-journal-nhat-ky-giao-dich': [
        { q: 'Trading Journal ghi những gì?', a: 'Cần ghi: thời gian vào/thoát lệnh, cặp tiền, hướng (buy/sell), khối lượng, lý do vào lệnh, kết quả pip/tiền, ảnh chụp biểu đồ, và trạng thái tâm lý khi trade.' },
        { q: 'Dùng app hay sổ tay ghi Trading Journal?', a: 'Cả hai đều tốt. Excel/Google Sheets là lựa chọn phổ biến nhất vì linh hoạt. Các app chuyên dụng như Tradervue, Edgewonk cũng rất hiệu quả với tính năng phân tích tự động.' },
        { q: 'Ghi Trading Journal trong bao lâu mới thấy hiệu quả?', a: 'Tối thiểu 1-2 tháng (khoảng 50-100 lệnh) để nhận ra pattern sai lầm. Top trader khuyên ghi suốt sự nghiệp vì Journal giúp liên tục cải thiện chiến lược.' },
    ],
    'so-sanh-ic-markets-vs-exness': [
        { q: 'IC Markets hay Exness tốt hơn?', a: 'Tùy nhu cầu. Exness nổi bật với rút tiền tức thì và đòn bẩy cao, phù hợp trader Việt giao dịch ngắn hạn. IC Markets có spread thấp hơn trên tài khoản Raw Spread, phù hợp scalper chuyên nghiệp.' },
        { q: 'IC Markets có uy tín không?', a: 'Có. IC Markets được quản lý bởi ASIC (Úc) và CySEC (Cyprus), hai cơ quan uy tín hàng đầu. Thành lập từ 2007, là một trong những sàn ECN lớn nhất thế giới.' },
        { q: 'Nạp rút tiền ở IC Markets có nhanh không?', a: 'Nạp tiền qua thẻ/ví điện tử xử lý tức thì. Rút tiền mất 1-2 ngày làm việc qua ngân hàng. Không nhanh bằng Exness (rút tức thì) nhưng vẫn ở mức khá nhanh.' },
    ],
    'doc-tin-tuc-kinh-te-forex': [
        { q: 'Tin kinh tế nào ảnh hưởng Forex nhiều nhất?', a: 'Non-Farm Payrolls (NFP), quyết định lãi suất Fed, CPI (lạm phát), GDP và PMI là 5 loại tin ảnh hưởng mạnh nhất. NFP có thể khiến thị trường biến động 100-200 pip trong vài phút.' },
        { q: 'Nên trade hay tránh khi có tin lớn?', a: 'Người mới nên tránh trade khi có tin lớn vì biến động khó lường. Trader kinh nghiệm có thể trade tin nhưng cần giảm lot size và đặt Stop Loss rộng hơn bình thường.' },
        { q: 'Xem lịch kinh tế ở đâu?', a: 'ForexFactory.com là nguồn phổ biến nhất. Investing.com và Myfxbook cũng cung cấp lịch kinh tế chi tiết. Hầu hết sàn Forex như Exness, XM đều tích hợp sẵn lịch kinh tế.' },
    ],
    'mo-hinh-gia-head-shoulders-double-top': [
        { q: 'Mô hình Head and Shoulders dự báo gì?', a: 'Head and Shoulders là mô hình đảo chiều giảm, xuất hiện ở đỉnh uptrend. Khi giá phá vỡ đường Neckline, xu hướng giảm bắt đầu với target bằng khoảng cách từ đỉnh Head đến Neckline.' },
        { q: 'Double Top có chính xác không?', a: 'Double Top là một trong những mô hình đáng tin cậy nhất với tỷ lệ thành công khoảng 65-70% trên khung H4 trở lên. Nên xác nhận thêm bằng volume và chỉ báo RSI.' },
        { q: 'Làm sao phân biệt mô hình thật và giả?', a: 'Mô hình thật cần: volume giảm dần khi hình thành, phá vỡ Neckline với volume lớn, và xuất hiện trên khung thời gian H4 trở lên. Mô hình trên M5, M15 thường là giả.' },
    ],
    'cach-ve-trendline-giao-dich-xu-huong': [
        { q: 'Trendline là gì?', a: 'Trendline là đường thẳng nối ít nhất 2 điểm đáy (uptrend) hoặc 2 điểm đỉnh (downtrend) trên biểu đồ giá. Nó giúp xác định và theo dõi xu hướng thị trường.' },
        { q: 'Cần bao nhiêu điểm chạm để trendline đáng tin cậy?', a: 'Tối thiểu 2 điểm để vẽ, nhưng cần ít nhất 3 điểm chạm để trendline thực sự đáng tin cậy. Càng nhiều điểm chạm, trendline càng mạnh.' },
        { q: 'Khi trendline bị phá vỡ thì sao?', a: 'Phá vỡ trendline thường báo hiệu thay đổi xu hướng, nhưng cần xác nhận bằng nến đóng cửa bên ngoài trendline kèm volume lớn. Nhiều trường hợp là phá giả (fakeout).' },
    ],
    'mt4-vs-mt5-nen-tang-giao-dich': [
        { q: 'MT4 hay MT5 tốt hơn?', a: 'MT4 đơn giản hơn và có cộng đồng EA/indicator lớn, phù hợp người mới. MT5 có nhiều khung thời gian hơn, đặt lệnh linh hoạt hơn, và hỗ trợ nhiều loại tài sản. Nếu chỉ trade Forex, MT4 đủ dùng.' },
        { q: 'Có thể dùng MT4/MT5 trên điện thoại không?', a: 'Có. Cả MT4 và MT5 đều có app miễn phí trên iOS và Android. Giao diện mobile cho phép bạn theo dõi, phân tích và đặt lệnh từ bất kỳ đâu.' },
        { q: 'Tải MT4/MT5 ở đâu?', a: 'Tải trực tiếp từ trang web của sàn bạn đăng ký (Exness, XM, Vantage...). Hoặc từ trang chính thức metatrader.com. App di động có trên App Store và Google Play.' },
    ],
    'chien-luoc-breakout-trading-forex': [
        { q: 'Breakout trading là gì?', a: 'Breakout trading là chiến lược vào lệnh khi giá phá vỡ một vùng hỗ trợ/kháng cự quan trọng hoặc thoát khỏi vùng consolidation. Kỳ vọng giá sẽ tiếp tục đi mạnh theo hướng phá vỡ.' },
        { q: 'Làm sao phân biệt breakout thật và giả?', a: 'Breakout thật đi kèm volume tăng mạnh, nến đóng cửa rõ ràng ngoài vùng hỗ trợ/kháng cự. Nên đợi pullback test lại vùng vừa phá rồi mới vào lệnh để giảm rủi ro breakout giả.' },
        { q: 'Breakout hiệu quả nhất vào phiên nào?', a: 'Phiên London mở cửa (14:00-15:00 VN) và giao thoa London-New York (19:00-22:00 VN) có breakout mạnh nhất vì thanh khoản cao. Tránh breakout trong phiên Á vì biến động yếu.' },
    ],
    'forex-vs-chung-khoan-dau-tu-thi-truong-nao': [
        { q: 'Forex hay chứng khoán dễ kiếm tiền hơn?', a: 'Không có câu trả lời tuyệt đối. Forex phù hợp người muốn vốn nhỏ, giao dịch linh hoạt 24/5. Chứng khoán phù hợp đầu tư dài hạn, ổn định hơn. Cả hai đều cần kiến thức và kỷ luật.' },
        { q: 'Nên bắt đầu với Forex hay chứng khoán?', a: 'Người mới hoàn toàn nên bắt đầu với chứng khoán vì ít rủi ro hơn. Nếu thích giao dịch ngắn hạn và chấp nhận rủi ro cao, Forex với tài khoản demo là lựa chọn tốt để học hỏi.' },
        { q: 'Forex có rủi ro hơn chứng khoán không?', a: 'Có, Forex rủi ro hơn đáng kể do đòn bẩy cao (lên đến 1:1000). Tuy nhiên nếu quản lý vốn tốt (1-2% rủi ro/lệnh), Forex có thể kiểm soát được rủi ro tương tự chứng khoán.' },
    ],
    'position-sizing-tinh-khoi-luong-lenh-forex': [
        { q: 'Position Sizing là gì?', a: 'Position Sizing là phương pháp tính khối lượng lệnh (lot size) dựa trên số vốn, phần trăm rủi ro chấp nhận, và khoảng cách Stop Loss. Đây là kỹ thuật quản lý vốn cốt lõi.' },
        { q: 'Công thức tính Position Size thế nào?', a: 'Lot Size = (Vốn × % Rủi ro) ÷ (SL tính bằng pip × Giá trị 1 pip). Ví dụ: Vốn $1.000, rủi ro 2% ($20), SL 50 pip, giá trị pip $1 → Lot = $20 ÷ ($1 × 50) = 0.4 lot (4 micro lot).' },
        { q: 'Nên rủi ro bao nhiêu phần trăm mỗi lệnh?', a: 'Khuyến nghị 1-2% vốn mỗi lệnh. Trader mới nên bắt đầu với 0.5-1%. Không bao giờ rủi ro quá 5% — đây là mức tối đa và chỉ dành cho trường hợp cực kỳ tự tin.' },
    ],
    'chien-luoc-trend-following-forex': [
        { q: 'Trend Following là gì?', a: 'Trend Following là chiến lược giao dịch theo xu hướng — mua khi giá đang tăng, bán khi giá đang giảm. Triết lý đơn giản: "The trend is your friend" (xu hướng là bạn của bạn).' },
        { q: 'Làm sao xác định xu hướng?', a: 'Có 3 cách chính: dùng Moving Average (giá trên MA = uptrend), cấu trúc đỉnh/đáy (Higher High/Higher Low), và chỉ báo ADX (trên 25 = xu hướng mạnh). Nên kết hợp ít nhất 2 cách.' },
        { q: 'Trend Following có nhược điểm gì?', a: 'Nhược điểm chính là: vào lệnh chậm (bỏ lỡ phần đầu xu hướng), thua nhiều lệnh nhỏ trong thị trường sideway, và đòi hỏi sự kiên nhẫn cao vì phải giữ lệnh lâu.' },
    ],
    'risk-reward-ratio-ty-le-rui-ro-loi-nhuan': [
        { q: 'Risk:Reward Ratio là gì?', a: 'Risk:Reward Ratio (R:R) là tỷ lệ giữa số tiền bạn sẵn sàng mất (rủi ro) so với số tiền kỳ vọng kiếm được (lợi nhuận). R:R 1:3 nghĩa là bạn rủi ro $10 để kiếm $30.' },
        { q: 'Tỷ lệ R:R tối thiểu nên là bao nhiêu?', a: 'Tối thiểu 1:2. Với R:R 1:2, bạn chỉ cần thắng 40% lệnh là đã có lãi. R:R 1:3 là mức lý tưởng — chỉ cần thắng 30% lệnh vẫn có lợi nhuận ổn định.' },
        { q: 'Có nên luôn giữ cứng tỷ lệ R:R?', a: 'Không nhất thiết cứng nhắc, nhưng nên có R:R tối thiểu trước mỗi lệnh. Có thể linh hoạt dời Take Profit nếu thị trường cho tín hiệu tiếp tục, nhưng không bao giờ mở rộng Stop Loss.' },
    ],
    'tam-ly-giao-dich-fomo-revenge-trade': [
        { q: 'FOMO trong trading là gì?', a: 'FOMO (Fear Of Missing Out) là tâm lý sợ bỏ lỡ cơ hội khi thấy thị trường biến động mạnh. Trader FOMO vào lệnh vội vàng, không phân tích, thường mua đỉnh hoặc bán đáy.' },
        { q: 'Revenge Trade là gì và tại sao nguy hiểm?', a: 'Revenge Trade là hành vi giao dịch trả thù sau khi thua lỗ — tăng lot size, vào lệnh liên tục để gỡ gạc. Đây là nguyên nhân số 1 khiến trader cháy tài khoản trong 1 ngày.' },
        { q: 'Làm sao kiểm soát FOMO và Revenge Trade?', a: 'Có 3 cách: đặt quy tắc giao dịch cứng (max 3 lệnh/ngày, nghỉ sau 2 lệnh thua), ghi Trading Journal để nhận diện pattern cảm xúc, và luôn tuân thủ kế hoạch đã lập trước phiên.' },
    ],
    'supply-demand-zone-forex': [
        { q: 'Supply/Demand Zone khác gì hỗ trợ/kháng cự?', a: 'Supply/Demand Zone là vùng giá rộng hơn (zone), trong khi hỗ trợ/kháng cự thường là đường (line). Zone cho biết khu vực lệnh lớn đang chờ, còn S/R là mức giá cụ thể.' },
        { q: 'Làm sao xác định Supply/Demand Zone?', a: 'Tìm vùng giá di chuyển mạnh và nhanh (impulse move) ra khỏi một vùng tích lũy. Vùng trước khi giá bật đi mạnh chính là Supply/Demand Zone. Nến lớn, volume cao là dấu hiệu zone mạnh.' },
        { q: 'Supply/Demand Zone có hiệu quả hơn chỉ báo?', a: 'Supply/Demand Zone phản ánh hành vi thực tế của tổ chức lớn, trong khi chỉ báo dựa trên công thức toán học và thường chậm. Nhiều trader chuyên nghiệp ưu tiên dùng zone kết hợp Price Action.' },
    ],
};

// ============================================================
// Fix META DESCRIPTIONS for 3 posts
// ============================================================
const META_FIXES = {
    95: { meta_description: 'Tìm hiểu cách xác định Supply/Demand Zone trong Forex. Giao dịch theo dấu chân của ngân hàng lớn và tổ chức tài chính để tăng tỷ lệ thắng.', excerpt: 'Tìm hiểu cách xác định Supply/Demand Zone trong Forex. Giao dịch theo dấu chân của ngân hàng lớn và tổ chức tài chính để tăng tỷ lệ thắng.' },
    37: { meta_description: 'Hướng dẫn sử dụng chỉ báo RSI thực chiến. Bí kíp tìm điểm mua bán chính xác, phân kỳ RSI, và cách kết hợp RSI với các công cụ phân tích khác.', excerpt: 'Hướng dẫn sử dụng chỉ báo RSI thực chiến. Bí kíp tìm điểm mua bán chính xác, phân kỳ RSI, và cách kết hợp RSI với các công cụ phân tích khác.' },
    33: { meta_description: 'Tìm hiểu các loại lệnh trong Forex: Market Order, Limit Order, Stop Order. Cách đặt lệnh đúng để không mất tiền oan và tối ưu hóa điểm vào/thoát.' },
};

// Fix tags + author for 4 posts
const TAG_FIXES = {
    62: { tags: ['đòn bẩy', 'leverage', 'forex cơ bản', 'rủi ro', 'margin'], author: 'Sàn Uy Tín Team' },
    63: { tags: ['spread', 'phí giao dịch', 'forex cơ bản', 'chi phí trading', 'sàn forex'], author: 'Sàn Uy Tín Team' },
    64: { tags: ['pip', 'forex cơ bản', 'tính pip', 'lot size', 'lợi nhuận'], author: 'Sàn Uy Tín Team' },
    65: { tags: ['sàn forex lừa đảo', 'chọn sàn', 'an toàn', 'giấy phép', 'cảnh báo'], author: 'Sàn Uy Tín Team' },
};

// Fix category slug inconsistency
const CATEGORY_FIXES = {
    66: { category: 'kien-thuc' }, // was 'kiến thức forex'
};

// ============================================================
// MAIN EXECUTION
// ============================================================
async function main() {
    let updated = 0;
    let errors = 0;

    // 1. Seed categories table
    console.log("📁 STEP 1: Tạo categories...");
    const categories = [
        { name: 'Kiến thức', slug: 'kien-thuc', description: 'Kiến thức cơ bản và nâng cao về Forex, phân tích kỹ thuật, cơ bản.' },
        { name: 'Hướng dẫn', slug: 'huong-dan', description: 'Hướng dẫn chi tiết các thao tác, chiến lược, và công cụ giao dịch.' },
        { name: 'So sánh', slug: 'so-sanh', description: 'So sánh chi tiết giữa các sàn Forex, nền tảng giao dịch.' },
        { name: 'Review Sàn', slug: 'review-san', description: 'Đánh giá chi tiết các sàn Forex uy tín.' },
        { name: 'Chiến lược', slug: 'chien-luoc', description: 'Các chiến lược giao dịch Forex hiệu quả.' },
        { name: 'Tư vấn', slug: 'tu-van', description: 'Tư vấn và gợi ý cho trader ở mọi trình độ.' },
    ];
    for (const cat of categories) {
        const { error } = await supabase.from('categories').upsert(cat, { onConflict: 'slug' });
        if (error) console.log(`   ⚠️ Category ${cat.slug}: ${error.message}`);
        else console.log(`   ✅ ${cat.name}`);
    }

    // 2. Fix meta descriptions
    console.log("\n📝 STEP 2: Sửa Meta Description ngắn...");
    for (const [id, fixes] of Object.entries(META_FIXES)) {
        const { error } = await supabase.from('posts').update(fixes).eq('id', parseInt(id));
        if (error) { console.log(`   ❌ ID:${id}: ${error.message}`); errors++; }
        else { console.log(`   ✅ ID:${id} — Meta desc updated`); updated++; }
    }

    // 3. Fix tags + author
    console.log("\n🏷️ STEP 3: Sửa Tags + Author...");
    for (const [id, fixes] of Object.entries(TAG_FIXES)) {
        const { error } = await supabase.from('posts').update(fixes).eq('id', parseInt(id));
        if (error) { console.log(`   ❌ ID:${id}: ${error.message}`); errors++; }
        else { console.log(`   ✅ ID:${id} — Tags + Author updated`); updated++; }
    }

    // 4. Fix category slug
    console.log("\n📂 STEP 4: Sửa category slug...");
    for (const [id, fixes] of Object.entries(CATEGORY_FIXES)) {
        const { error } = await supabase.from('posts').update(fixes).eq('id', parseInt(id));
        if (error) { console.log(`   ❌ ID:${id}: ${error.message}`); errors++; }
        else { console.log(`   ✅ ID:${id} — Category slug fixed`); updated++; }
    }

    // 5. Add internal links + FAQ for posts that lack them
    console.log("\n🔗 STEP 5: Thêm Internal Links + FAQ...");
    const { data: posts } = await supabase.from('posts').select('id, slug, content').order('id');

    for (const post of posts) {
        const slug = post.slug;
        const content = post.content || '';
        const hasLinks = content.includes('href="/') || content.includes('sanuytin');
        const hasFaq = content.toLowerCase().includes('câu hỏi thường gặp') || content.toLowerCase().includes('faq');

        let newContent = content;
        let changed = false;

        // Add internal links if missing
        if (!hasLinks && INTERNAL_LINKS[slug]) {
            const links = INTERNAL_LINKS[slug];
            // Add a paragraph with internal links at the end before FAQ
            const linkParagraph = `<p>Để nắm vững kiến thức giao dịch, bạn nên tham khảo thêm: ${links.map(l => `<a href="${l.url}">${l.anchor}</a>`).join(', ')}. Truy cập <a href="https://sanuytin.com">Sàn Uy Tín</a> để cập nhật thông tin mới nhất.</p>`;

            // Insert before last </p>
            const lastPIdx = newContent.lastIndexOf('</p>');
            if (lastPIdx > -1) {
                newContent = newContent.substring(0, lastPIdx + 4) + '\n\n' + linkParagraph;
            } else {
                newContent += '\n\n' + linkParagraph;
            }
            changed = true;
            console.log(`   🔗 ID:${post.id} — Added ${links.length} internal links`);
        }

        // Add FAQ if missing
        if (!hasFaq && FAQ_DATA[slug]) {
            const faqs = FAQ_DATA[slug];
            let faqHtml = '\n\n<h2>Câu Hỏi Thường Gặp</h2>\n';
            for (const faq of faqs) {
                faqHtml += `<h3>${faq.q}</h3>\n<p>${faq.a}</p>\n`;
            }
            newContent += faqHtml;
            changed = true;
            console.log(`   ❓ ID:${post.id} — Added ${faqs.length} FAQ items`);
        }

        // Update if changed
        if (changed) {
            const { error } = await supabase.from('posts').update({
                content: newContent,
                updated_at: new Date().toISOString()
            }).eq('id', post.id);
            if (error) { console.log(`   ❌ ID:${post.id}: ${error.message}`); errors++; }
            else { updated++; }
        }
    }

    console.log("\n" + "=".repeat(50));
    console.log(`✅ HOÀN TẤT: ${updated} cập nhật thành công, ${errors} lỗi`);
    console.log("=".repeat(50));
}

main().catch(console.error);
