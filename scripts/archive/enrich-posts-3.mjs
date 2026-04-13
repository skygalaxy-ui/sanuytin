import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const IL = {
    home: '<a href="/">Sàn Uy Tín</a>',
    compare: '<a href="/so-sanh">So sánh sàn Forex</a>',
    exness: '<a href="/exness">Exness</a>',
    xm: '<a href="/xm">XM</a>',
    vantage: '<a href="/vantage">Vantage</a>',
    forexBasic: '<a href="/tin-tuc/forex-la-gi-huong-dan-nguoi-moi">Forex là gì</a>',
    techAnalysis: '<a href="/tin-tuc/phan-tich-ky-thuat-vs-co-ban">phân tích kỹ thuật vs cơ bản</a>',
    moneyMgmt: '<a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a>',
    candlestick: '<a href="/tin-tuc/cach-doc-bieu-do-nen-nhat-ban">đọc biểu đồ nến Nhật</a>',
    psychology: '<a href="/tin-tuc/tam-ly-trading-yeu-to-thanh-cong">tâm lý trading</a>',
    orderTypes: '<a href="/tin-tuc/cac-loai-lenh-trong-forex">các loại lệnh Forex</a>',
    mt4: '<a href="/tin-tuc/cach-cai-dat-metatrader-4">cài đặt MetaTrader 4</a>',
    rsi: '<a href="/tin-tuc/huong-dan-su-dung-rsi">hướng dẫn sử dụng RSI</a>',
    copyTrade: '<a href="/tin-tuc/huong-dan-copy-trading">copy trading</a>',
    scalping: '<a href="/tin-tuc/scalping-forex-chien-luoc-luot-song">chiến lược scalping</a>',
    stopLoss: '<a href="/tin-tuc/cach-dat-stop-loss-take-profit">cách đặt Stop Loss</a>',
    demo: '<a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">mở tài khoản demo</a>',
    cachdautu: '<a href="https://cachdautu.com/">Cách Đầu Tư</a>',
};

const updates = [
    {
        slug: 'danh-gia-san-exness-2026',
        content: `<h2>Đánh giá sàn Exness 2026 — Sàn Forex phổ biến nhất Việt Nam</h2>
<p>${IL.exness} là sàn giao dịch Forex và CFD có trụ sở tại Síp, thành lập năm 2008. Với hơn 800,000 trader hoạt động hàng tháng và khối lượng giao dịch vượt $4 nghìn tỷ/tháng (2025), Exness là một trong những sàn Forex lớn nhất thế giới. Đặc biệt phổ biến tại Đông Nam Á nhờ hỗ trợ nạp rút bằng tiền Việt (VND) qua ngân hàng nội địa.</p>
<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Đánh giá sàn Exness 2026 Forex" />

<h2>Thông tin tổng quan Exness</h2>
<table><thead><tr><th>Tiêu chí</th><th>Chi tiết</th></tr></thead><tbody>
<tr><td>Tên đầy đủ</td><td>Exness (SC) Ltd / Exness (Cy) Ltd</td></tr>
<tr><td>Năm thành lập</td><td>2008</td></tr>
<tr><td>Trụ sở</td><td>Limassol, Síp</td></tr>
<tr><td>Giấy phép</td><td>FCA (Anh), CySEC (Síp), FSA (Seychelles), FSCA (Nam Phi)</td></tr>
<tr><td>Sản phẩm</td><td>Forex, Kim loại, Crypto, Chỉ số, Năng lượng</td></tr>
<tr><td>Nền tảng</td><td>MT4, MT5, Exness Terminal, Exness Trade App</td></tr>
<tr><td>Đòn bẩy tối đa</td><td>Unlimited (tài khoản đủ điều kiện)</td></tr>
<tr><td>Nạp tối thiểu</td><td>$1 (tài khoản Standard)</td></tr>
<tr><td>Spread EUR/USD</td><td>Từ 0.3 pip (Standard) / 0.0 pip (Raw Spread)</td></tr>
</tbody></table>

<h2>So sánh các loại tài khoản Exness</h2>
<table><thead><tr><th>Loại TK</th><th>Nạp tối thiểu</th><th>Spread</th><th>Commission</th><th>Phù hợp</th></tr></thead><tbody>
<tr><td>Standard</td><td>$1</td><td>Từ 0.3 pip</td><td>Không</td><td>Người mới bắt đầu</td></tr>
<tr><td>Standard Cent</td><td>$1</td><td>Từ 0.3 pip</td><td>Không</td><td>Luyện tập vốn nhỏ</td></tr>
<tr><td>Pro</td><td>$200</td><td>Từ 0.1 pip</td><td>Không</td><td>Trader có kinh nghiệm</td></tr>
<tr><td>Raw Spread</td><td>$200</td><td>Từ 0.0 pip</td><td>$3.5/lot</td><td>Scalper, EA trader</td></tr>
<tr><td>Zero</td><td>$200</td><td>0.0 pip (95% thời gian)</td><td>$3.5/lot trở lên</td><td>Scalping chuyên nghiệp</td></tr>
</tbody></table>

<h2>Ưu và nhược điểm của Exness</h2>
<h3>✅ Ưu điểm</h3>
<ul>
<li><strong>Nạp rút siêu nhanh:</strong> Tự động xử lý, nạp qua Internet Banking Việt Nam trong vài phút</li>
<li><strong>Spread cực thấp:</strong> EUR/USD từ 0.0 pip trên tài khoản Raw</li>
<li><strong>Đòn bẩy linh hoạt:</strong> Lên đến Unlimited cho các tài khoản đủ điều kiện</li>
<li><strong>Hỗ trợ tiếng Việt:</strong> Live chat, email, và hotline tiếng Việt 24/5</li>
<li><strong>Minh bạch:</strong> Công bố báo cáo kiểm toán hàng quý của Big4</li>
</ul>
<h3>❌ Nhược điểm</h3>
<ul>
<li>Tài khoản FCA (Anh) giới hạn đòn bẩy 1:30 theo quy định</li>
<li>Không có bonus/khuyến mãi cho trader mới</li>
<li>Spread mở rộng đáng kể trong tin tức lớn</li>
</ul>

<h2>Ai nên chọn Exness?</h2>
<p>Exness phù hợp với hầu hết trader Việt Nam — từ người mới (nạp tối thiểu $1) đến chuyên nghiệp (spread 0.0 pip). Đặc biệt lý tưởng cho ${IL.scalping} nhờ tốc độ khớp lệnh nhanh và ${IL.copyTrade}. Bắt đầu với ${IL.demo} để trải nghiệm. ${IL.compare} với các sàn khác tại ${IL.home}. Tham khảo ${IL.cachdautu}.</p>`
    },

    {
        slug: 'danh-gia-san-xm-2026',
        content: `<h2>Đánh giá sàn XM 2026 — Lựa chọn hàng đầu cho người mới</h2>
<p>${IL.xm} (XM Global Limited) là sàn Forex quốc tế thành lập năm 2009, phục vụ hơn 10 triệu khách hàng tại 190 quốc gia. XM nổi tiếng với chương trình bonus hấp dẫn, giáo dục trading chất lượng cao, và các cuộc thi giao dịch thường xuyên — những yếu tố khiến sàn đặc biệt phù hợp với người mới bắt đầu.</p>
<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Đánh giá sàn XM Global 2026 Forex" />

<h2>Thông tin tổng quan XM</h2>
<table><thead><tr><th>Tiêu chí</th><th>Chi tiết</th></tr></thead><tbody>
<tr><td>Tên đầy đủ</td><td>XM Global Limited / Trading Point Holdings</td></tr>
<tr><td>Năm thành lập</td><td>2009</td></tr>
<tr><td>Trụ sở</td><td>Belize (Global) / Síp (EU)</td></tr>
<tr><td>Giấy phép</td><td>CySEC (Síp), ASIC (Úc), IFSC (Belize), DFSA (Dubai)</td></tr>
<tr><td>Sản phẩm</td><td>Forex, CFD, Chỉ số, Hàng hóa, Cổ phiếu</td></tr>
<tr><td>Nền tảng</td><td>MT4, MT5, XM App</td></tr>
<tr><td>Đòn bẩy tối đa</td><td>1:888 (tài khoản Global)</td></tr>
<tr><td>Nạp tối thiểu</td><td>$5</td></tr>
<tr><td>Spread EUR/USD</td><td>Từ 0.6 pip (Ultra Low) / 1.6 pip (Standard)</td></tr>
</tbody></table>

<h2>So sánh XM với các sàn cùng phân khúc</h2>
<table><thead><tr><th>Tiêu chí</th><th>XM</th><th>Exness</th><th>Vantage</th></tr></thead><tbody>
<tr><td>Nạp tối thiểu</td><td>$5</td><td>$1</td><td>$50</td></tr>
<tr><td>Spread EUR/USD</td><td>0.6 pip</td><td>0.3 pip</td><td>0.4 pip</td></tr>
<tr><td>Đòn bẩy max</td><td>1:888</td><td>Unlimited</td><td>1:500</td></tr>
<tr><td>Bonus</td><td>✅ $30 + 50%</td><td>❌ Không</td><td>✅ $50 welcome</td></tr>
<tr><td>Cuộc thi</td><td>✅ Hàng tháng</td><td>❌ Không</td><td>✅ Có</td></tr>
<tr><td>Giáo dục</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐</td><td>⭐⭐⭐⭐</td></tr>
</tbody></table>

<h2>Ưu và nhược điểm XM</h2>
<h3>✅ Ưu điểm</h3>
<ul>
<li><strong>Bonus hấp dẫn:</strong> $30 không cần nạp + 50% bonus nạp tiền</li>
<li><strong>Giáo dục miễn phí:</strong> Webinar hàng tuần, video học, phân tích thị trường</li>
<li><strong>Cuộc thi giao dịch:</strong> Giải thưởng lên đến $1,000,000/năm</li>
<li><strong>Đa nền tảng:</strong> MT4 + MT5 + App riêng</li>
</ul>
<h3>❌ Nhược điểm</h3>
<ul>
<li>Spread cao hơn Exness và IC Markets</li>
<li>Nạp rút VND chậm hơn Exness (2-24h)</li>
<li>Không có tài khoản Cent cho luyện tập vốn nhỏ</li>
</ul>

<p>XM lý tưởng cho trader mới muốn học hỏi — bonus $30 cho phép bắt đầu không cần nạp tiền. Học ${IL.forexBasic}, ${IL.candlestick}, và ${IL.moneyMgmt} trước khi giao dịch. ${IL.compare} tại ${IL.home}. Xem thêm ${IL.cachdautu}.</p>`
    },

    {
        slug: 'danh-gia-san-vantage-2026',
        content: `<h2>Đánh giá sàn Vantage 2026 — ECN Trading chuyên nghiệp</h2>
<p>${IL.vantage} (Vantage International Group Limited) là sàn Forex ECN từ Úc, thành lập năm 2009. Với công nghệ ECN/STP tiên tiến, Vantage kết nối trader trực tiếp với các nhà cung cấp thanh khoản hàng đầu, đảm bảo không có can thiệp dealing desk. Sàn được quản lý bởi ASIC (Úc), FCA (Anh), và CIMA (Cayman Islands).</p>
<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Đánh giá sàn Vantage Markets 2026" />

<h2>Thông tin tổng quan Vantage</h2>
<table><thead><tr><th>Tiêu chí</th><th>Chi tiết</th></tr></thead><tbody>
<tr><td>Tên đầy đủ</td><td>Vantage International Group Limited</td></tr>
<tr><td>Năm thành lập</td><td>2009</td></tr>
<tr><td>Trụ sở</td><td>Sydney, Úc</td></tr>
<tr><td>Giấy phép</td><td>ASIC (Úc), FCA (Anh), CIMA (Cayman)</td></tr>
<tr><td>Mô hình thực thi</td><td>ECN/STP — Không dealing desk</td></tr>
<tr><td>Nền tảng</td><td>MT4, MT5, Vantage ProTrader, TradingView</td></tr>
<tr><td>Đòn bẩy tối đa</td><td>1:500</td></tr>
<tr><td>Nạp tối thiểu</td><td>$50 (Standard) / $10,000 (Raw ECN)</td></tr>
<tr><td>Spread EUR/USD</td><td>Từ 0.0 pip (Raw ECN + $3/lot commission)</td></tr>
</tbody></table>

<h2>So sánh các loại tài khoản Vantage</h2>
<table><thead><tr><th>Loại TK</th><th>Nạp min</th><th>Spread</th><th>Commission</th><th>Phù hợp</th></tr></thead><tbody>
<tr><td>Standard STP</td><td>$50</td><td>Từ 1.4 pip</td><td>$0</td><td>Người mới</td></tr>
<tr><td>Raw ECN</td><td>$500</td><td>Từ 0.0 pip</td><td>$3/lot</td><td>Trader kinh nghiệm</td></tr>
<tr><td>Pro ECN</td><td>$10,000</td><td>Từ 0.0 pip</td><td>$1.5/lot</td><td>Chuyên nghiệp, volume lớn</td></tr>
</tbody></table>

<h2>Điểm nổi bật của Vantage</h2>
<ul>
<li><strong>ECN thực sự:</strong> Kết nối trực tiếp với 8+ nhà cung cấp thanh khoản hàng đầu</li>
<li><strong>Tốc độ khớp lệnh:</strong> Trung bình < 25ms — lý tưởng cho ${IL.scalping} và EA</li>
<li><strong>ProTrader:</strong> Nền tảng giao dịch tích hợp TradingView, phân tích chuyên sâu</li>
<li><strong>Copy Trading:</strong> Tích hợp sẵn — xem ${IL.copyTrade} để bắt đầu</li>
<li><strong>Bonus $50:</strong> Welcome bonus cho trader mới đăng ký</li>
</ul>

<p>Vantage phù hợp trader trung cấp đến chuyên nghiệp cần công nghệ ECN thực sự. Bắt đầu với ${IL.demo}, học ${IL.mt4} và áp dụng ${IL.moneyMgmt}. ${IL.compare} tại ${IL.home}. Xem thêm ${IL.cachdautu}.</p>`
    },

    {
        slug: 'huong-dan-su-dung-rsi',
        content: `<h2>Hướng dẫn sử dụng RSI — Chỉ báo dao động số 1</h2>
<p>RSI (Relative Strength Index — Chỉ số Sức Mạnh Tương Đối) được phát triển bởi J. Welles Wilder vào năm 1978. Đây là chỉ báo dao động (oscillator) phổ biến nhất, đo lường tốc độ và cường độ biến động giá trên thang 0-100. RSI giúp trader xác định vùng quá mua, quá bán, và phân kỳ — những tín hiệu giao dịch có xác suất cao.</p>
<p>Trước khi học RSI, hãy nắm vững ${IL.forexBasic} và cách ${IL.candlestick} để kết hợp phân tích hiệu quả.</p>
<img src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80" alt="Chỉ báo RSI Relative Strength Index trên biểu đồ Forex" />

<h2>Cách đọc RSI — Bảng tham chiếu nhanh</h2>
<table><thead><tr><th>Vùng RSI</th><th>Ý nghĩa</th><th>Hành động gợi ý</th><th>Lưu ý</th></tr></thead><tbody>
<tr><td>80-100</td><td>Quá mua cực mạnh</td><td>Chuẩn bị Sell khi RSI quay đầu</td><td>Có thể duy trì lâu trong uptrend mạnh</td></tr>
<tr><td>70-80</td><td>Quá mua</td><td>Cảnh giác, tìm tín hiệu đảo chiều</td><td>Kết hợp mô hình nến xác nhận</td></tr>
<tr><td>50-70</td><td>Xu hướng tăng</td><td>Tìm cơ hội Buy khi RSI pullback về 50</td><td>Xu hướng vẫn mạnh</td></tr>
<tr><td>30-50</td><td>Xu hướng giảm</td><td>Tìm cơ hội Sell khi RSI rally lên 50</td><td>Xu hướng vẫn yếu</td></tr>
<tr><td>20-30</td><td>Quá bán</td><td>Chuẩn bị Buy khi RSI bật lên</td><td>Kết hợp hỗ trợ kỹ thuật</td></tr>
<tr><td>0-20</td><td>Quá bán cực mạnh</td><td>Tìm cơ hội Buy mạnh</td><td>Hiếm gặp, tín hiệu mạnh</td></tr>
</tbody></table>

<h2>3 chiến lược RSI hiệu quả nhất</h2>
<h3>1. RSI Divergence (Phân kỳ) — Tín hiệu mạnh nhất</h3>
<p><strong>Phân kỳ tăng:</strong> Giá tạo đáy thấp hơn nhưng RSI tạo đáy cao hơn → báo hiệu đảo chiều tăng. <strong>Phân kỳ giảm:</strong> Giá tạo đỉnh cao hơn nhưng RSI tạo đỉnh thấp hơn → báo hiệu đảo chiều giảm. Đây là tín hiệu có tỷ lệ thắng cao nhất khi kết hợp với vùng hỗ trợ/kháng cự.</p>

<h3>2. RSI Overbought/Oversold + Mô hình nến</h3>
<p>RSI quá bán (< 30) + mô hình Hammer hoặc Bullish Engulfing = tín hiệu Buy mạnh. Xem ${IL.candlestick} để nhận diện các mô hình nến. Đặt SL và TP theo nguyên tắc ${IL.stopLoss}.</p>

<h3>3. RSI 50 Line Cross</h3>
<p>RSI cắt lên trên đường 50 → xác nhận xu hướng tăng, tìm cơ hội Buy. RSI cắt xuống dưới 50 → xu hướng giảm, tìm Sell. Phương pháp này đơn giản nhưng hiệu quả trên khung H4 và D1.</p>

<h2>Cài đặt RSI tối ưu theo khung thời gian</h2>
<table><thead><tr><th>Khung TG</th><th>Chu kỳ RSI</th><th>Chiến lược phù hợp</th><th>Sàn khuyên dùng</th></tr></thead><tbody>
<tr><td>M1-M15</td><td>RSI(7)</td><td>${IL.scalping}</td><td>${IL.exness} (spread thấp)</td></tr>
<tr><td>H1-H4</td><td>RSI(14)</td><td>Day Trading</td><td>${IL.xm} hoặc ${IL.vantage}</td></tr>
<tr><td>D1-W1</td><td>RSI(21)</td><td>Swing Trading</td><td>Mọi sàn</td></tr>
</tbody></table>
<p>Thực hành RSI trên ${IL.demo} với ${IL.mt4}. Áp dụng ${IL.moneyMgmt} nghiêm ngặt. ${IL.compare} tại ${IL.home}. Tham khảo ${IL.cachdautu}.</p>`
    },

    {
        slug: 'cach-dat-stop-loss-take-profit',
        content: `<h2>Cách đặt Stop Loss và Take Profit chính xác</h2>
<p>Stop Loss (SL) và Take Profit (TP) là hai công cụ quan trọng nhất trong quản lý giao dịch. SL bảo vệ bạn khỏi thua lỗ quá lớn, TP đảm bảo bạn chốt lời theo kế hoạch. Một trader không đặt SL giống như lái xe không thắt dây an toàn — có thể ổn 100 lần nhưng chỉ cần 1 lần tai nạn là mất tất cả.</p>
<p>Nếu chưa quen với giao dịch, hãy đọc ${IL.forexBasic} và ${IL.orderTypes} trước.</p>
<img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" alt="Cách đặt Stop Loss Take Profit trong giao dịch Forex" />

<h2>5 phương pháp đặt Stop Loss phổ biến</h2>
<table><thead><tr><th>Phương pháp</th><th>Cách đặt</th><th>Ưu điểm</th><th>Phù hợp</th></tr></thead><tbody>
<tr><td>1. Theo cấu trúc giá</td><td>Dưới/trên đáy/đỉnh gần nhất</td><td>Logic, dựa trên market</td><td>Tất cả trader</td></tr>
<tr><td>2. Theo ATR</td><td>SL = ATR(14) × 1.5-2</td><td>Tự động điều chỉnh theo biến động</td><td>Swing Trader</td></tr>
<tr><td>3. Theo % vốn</td><td>SL sao cho rủi ro = 1-2% vốn</td><td>Kiểm soát rủi ro chặt</td><td>Money Management</td></tr>
<tr><td>4. Trailing Stop</td><td>SL di chuyển theo giá có lợi</td><td>Khóa lợi nhuận, bắt trend dài</td><td>Trend Follower</td></tr>
<tr><td>5. Theo MA/EMA</td><td>SL dưới/trên EMA 20 hoặc EMA 50</td><td>Dựa trên xu hướng</td><td>Day Trader, Swing</td></tr>
</tbody></table>

<h2>3 phương pháp đặt Take Profit</h2>
<table><thead><tr><th>Phương pháp</th><th>Cách đặt</th><th>R:R</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>1. Fixed R:R</td><td>TP = SL × 2 (hoặc × 3)</td><td>1:2 hoặc 1:3</td><td>SL 30 pip → TP 60-90 pip</td></tr>
<tr><td>2. Kháng cự/Hỗ trợ</td><td>TP tại vùng S/R gần nhất</td><td>Thay đổi</td><td>TP tại đỉnh cũ hoặc Fibonacci</td></tr>
<tr><td>3. Partial Close</td><td>Chốt 50% tại TP1, 50% tại TP2</td><td>Mix</td><td>TP1: 1:1.5, TP2: 1:3</td></tr>
</tbody></table>

<h2>Ví dụ thực tế: Setup giao dịch EUR/USD</h2>
<table><thead><tr><th>Thành phần</th><th>Phương pháp</th><th>Giá trị</th></tr></thead><tbody>
<tr><td>Phân tích</td><td>Bullish Engulfing tại EMA 50 (H4)</td><td>—</td></tr>
<tr><td>Entry</td><td>Buy tại nến xác nhận</td><td>1.0860</td></tr>
<tr><td>Stop Loss</td><td>Dưới đáy nến Engulfing - 10 pip</td><td>1.0820 (-40 pip)</td></tr>
<tr><td>Take Profit 1</td><td>Kháng cự gần nhất (R:R 1:2)</td><td>1.0940 (+80 pip)</td></tr>
<tr><td>Take Profit 2</td><td>Fibonacci 161.8% extension</td><td>1.1000 (+140 pip)</td></tr>
<tr><td>Lot Size</td><td>2% rủi ro trên $1,000</td><td>0.05 lot</td></tr>
</tbody></table>

<h2>Những sai lầm phổ biến cần tránh</h2>
<ul>
<li><strong>Không đặt SL:</strong> "Để xem sao đã" → cách nhanh nhất để cháy tài khoản</li>
<li><strong>Di chuyển SL ra xa:</strong> Phá vỡ kế hoạch, tăng rủi ro không kiểm soát</li>
<li><strong>TP quá gần:</strong> R:R < 1:1 → thua lỗ dài hạn dù thắng nhiều lệnh</li>
<li><strong>SL quá sát:</strong> Bị quét SL bởi noise thị trường</li>
</ul>
<p>Thực hành trên ${IL.demo}, học thêm ${IL.rsi} và ${IL.candlestick} để đặt SL/TP chính xác hơn. Áp dụng ${IL.moneyMgmt} và rèn luyện ${IL.psychology}. Xem thêm ${IL.cachdautu}.</p>`
    }
];

async function run() {
    console.log(`Updating ${updates.length} review/guide posts...\n`);
    for (const upd of updates) {
        const { error } = await supabase
            .from('posts')
            .update({ content: upd.content })
            .eq('slug', upd.slug);
        if (error) console.log(`❌ ${upd.slug}: ${error.message}`);
        else console.log(`✅ ${upd.slug}`);
    }
    console.log('\nDone batch 3!');
}
run();
