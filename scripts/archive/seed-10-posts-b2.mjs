import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const posts = [
    {
        title: "Hướng dẫn sử dụng chỉ báo MACD trong giao dịch Forex",
        slug: "huong-dan-su-dung-macd",
        category: "huong-dan",
        tags: ["MACD", "indicator", "phân tích kỹ thuật"],
        excerpt: "Hướng dẫn chi tiết cách sử dụng chỉ báo MACD để xác định xu hướng, tìm điểm vào lệnh và kết hợp với các indicator khác trong giao dịch Forex.",
        meta_title: "Hướng Dẫn Sử Dụng MACD | Chỉ Báo Xu Hướng Forex 2026",
        meta_description: "Hướng dẫn chi tiết cách đọc và sử dụng chỉ báo MACD trong giao dịch Forex, cách tìm tín hiệu mua bán và kết hợp MACD với RSI.",
        featured_image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
        content: `
<h2>1. MACD là gì?</h2>
<p><strong>MACD (Moving Average Convergence Divergence)</strong> là chỉ báo phân tích kỹ thuật phổ biến nhất trong giao dịch Forex. Được phát triển bởi Gerald Appel vào cuối thập niên 1970, MACD giúp trader xác định <strong>xu hướng, động lượng</strong> và các điểm đảo chiều tiềm năng.</p>
<p>MACD thuộc nhóm <strong>chỉ báo xu hướng (Trend Indicator)</strong>, khác với RSI thuộc nhóm dao động (Oscillator). Sự kết hợp giữa MACD và RSI tạo nên bộ công cụ phân tích mạnh mẽ.</p>

<h2>2. Cấu tạo của MACD</h2>
<p>MACD gồm 3 thành phần chính:</p>
<ul>
<li><strong>Đường MACD (xanh):</strong> Hiệu số giữa EMA 12 và EMA 26. MACD = EMA(12) - EMA(26)</li>
<li><strong>Đường Signal (cam/đỏ):</strong> Đường EMA 9 chu kỳ của đường MACD. Đóng vai trò làm "trigger" cho tín hiệu giao dịch.</li>
<li><strong>Histogram (cột):</strong> Hiệu số giữa đường MACD và Signal. Thể hiện khoảng cách giữa hai đường, giúp nhận biết nhanh động lượng.</li>
</ul>

<figure style="margin:2em 0; text-align:center;">
<img src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80" alt="Biểu đồ MACD trong giao dịch Forex" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Chỉ báo MACD trên biểu đồ Forex</figcaption>
</figure>

<h2>3. Cách đọc tín hiệu MACD</h2>
<h3>3.1. Giao cắt đường MACD và Signal (Signal Line Crossover)</h3>
<p>Đây là tín hiệu cơ bản và phổ biến nhất:</p>
<ul>
<li><strong>Tín hiệu MUA:</strong> Đường MACD cắt lên trên đường Signal → Xu hướng tăng bắt đầu</li>
<li><strong>Tín hiệu BÁN:</strong> Đường MACD cắt xuống dưới đường Signal → Xu hướng giảm bắt đầu</li>
</ul>
<p><strong>Lưu ý:</strong> Tín hiệu giao cắt mạnh hơn khi xảy ra ở xa đường zero (0). Giao cắt gần đường zero thường là tín hiệu yếu.</p>

<h3>3.2. Giao cắt đường Zero (Zero Line Crossover)</h3>
<ul>
<li><strong>MACD cắt lên trên 0:</strong> EMA ngắn hạn (12) vượt EMA dài hạn (26) → Xác nhận xu hướng tăng</li>
<li><strong>MACD cắt xuống dưới 0:</strong> EMA ngắn hạn dưới EMA dài hạn → Xác nhận xu hướng giảm</li>
</ul>

<h3>3.3. Phân kỳ MACD (Divergence)</h3>
<p>Phân kỳ là tín hiệu mạnh nhất của MACD, báo hiệu xu hướng sắp đảo chiều:</p>
<ul>
<li><strong>Phân kỳ tăng (Bullish Divergence):</strong> Giá tạo đáy thấp hơn nhưng MACD tạo đáy cao hơn → Lực bán yếu đi, giá sắp tăng</li>
<li><strong>Phân kỳ giảm (Bearish Divergence):</strong> Giá tạo đỉnh cao hơn nhưng MACD tạo đỉnh thấp hơn → Lực mua yếu đi, giá sắp giảm</li>
</ul>

<h2>4. Chiến lược giao dịch với MACD</h2>
<h3>Chiến lược 1: MACD Crossover + Xu hướng</h3>
<ul>
<li>Xác định xu hướng tổng thể bằng EMA 200 trên khung H4 hoặc D1</li>
<li>Chỉ MUA khi giá trên EMA 200 VÀ MACD cắt lên Signal</li>
<li>Chỉ BÁN khi giá dưới EMA 200 VÀ MACD cắt xuống Signal</li>
<li>Stop Loss: Đặt dưới/trên swing low/high gần nhất</li>
<li>Take Profit: Tỷ lệ R:R tối thiểu 1:2</li>
</ul>

<h3>Chiến lược 2: Kết hợp MACD + RSI</h3>
<ul>
<li>Dùng RSI để xác nhận vùng quá mua/bán (trên 70 hoặc dưới 30)</li>
<li>Chờ MACD cho tín hiệu giao cắt cùng chiều</li>
<li>Ví dụ: RSI dưới 30 (quá bán) + MACD cắt lên Signal = Tín hiệu mua mạnh</li>
</ul>

<h2>5. Cài đặt MACD tối ưu</h2>
<p>Cài đặt mặc định (12, 26, 9) phù hợp với hầu hết trường hợp. Tuy nhiên, bạn có thể điều chỉnh:</p>
<ul>
<li><strong>Scalping (M5-M15):</strong> MACD (5, 13, 1) - nhạy hơn, nhiều tín hiệu hơn</li>
<li><strong>Day Trading (H1-H4):</strong> MACD (12, 26, 9) - cài đặt mặc định</li>
<li><strong>Swing Trading (D1-W1):</strong> MACD (19, 39, 9) - lọc bớt nhiễu, tín hiệu chính xác hơn</li>
</ul>

<h2>6. Ưu và nhược điểm của MACD</h2>
<p><strong>Ưu điểm:</strong></p>
<ul>
<li>Dễ sử dụng, phù hợp cho cả người mới và trader kinh nghiệm</li>
<li>Vừa xác định xu hướng vừa đo momentum</li>
<li>Phân kỳ MACD là tín hiệu đảo chiều có độ tin cậy cao</li>
</ul>
<p><strong>Nhược điểm:</strong></p>
<ul>
<li>Là chỉ báo trễ (lagging indicator), tín hiệu xuất hiện sau khi giá đã di chuyển</li>
<li>Tạo nhiều tín hiệu giả trong thị trường sideway (đi ngang)</li>
<li>Không nên dùng MACD làm tín hiệu duy nhất, cần kết hợp thêm công cụ khác</li>
</ul>

<h2>7. Kết luận</h2>
<p>MACD là một trong những indicator mạnh mẽ và linh hoạt nhất trong phân tích kỹ thuật. Khi kết hợp đúng cách với RSI và các công cụ phân tích khác, MACD giúp bạn tìm được điểm vào lệnh chính xác và đáng tin cậy.</p>
<p><strong>Lời khuyên:</strong> Hãy luyện tập trên tài khoản demo ít nhất 2 tuần trước khi áp dụng MACD vào giao dịch thật. Tập trung vào tín hiệu phân kỳ - đây là tín hiệu có xác suất thắng cao nhất.</p>
`
    },
    {
        title: "Moving Average (MA): Cách dùng EMA và SMA hiệu quả",
        slug: "moving-average-ema-sma",
        category: "kien-thuc",
        tags: ["moving average", "EMA", "SMA", "indicator"],
        excerpt: "Hướng dẫn toàn diện về Moving Average trong Forex: phân biệt SMA và EMA, cách cài đặt, chiến lược giao dịch Golden Cross/Death Cross.",
        meta_title: "Moving Average Là Gì? Cách Dùng EMA Và SMA Trong Forex",
        meta_description: "Hướng dẫn sử dụng Moving Average trong Forex: SMA vs EMA, Golden Cross, Death Cross và các chiến lược giao dịch hiệu quả.",
        featured_image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
        content: `
<h2>1. Moving Average là gì?</h2>
<p><strong>Moving Average (MA)</strong> - Đường trung bình động - là chỉ báo kỹ thuật cơ bản và phổ biến nhất trong giao dịch Forex. MA tính trung bình giá đóng cửa trong một khoảng thời gian nhất định, giúp <strong>làm mượt biến động giá</strong> và xác định xu hướng rõ ràng hơn.</p>
<p>MA được chia làm hai loại chính: <strong>SMA (Simple Moving Average)</strong> và <strong>EMA (Exponential Moving Average)</strong>.</p>

<h2>2. SMA vs EMA: khác nhau thế nào?</h2>

<table style="width:100%; border-collapse:collapse; margin:1.5em 0;">
<thead style="background:rgba(59,130,246,0.1);">
<tr><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Tiêu chí</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">SMA</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">EMA</th></tr>
</thead>
<tbody>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Cách tính</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Trung bình cộng đơn giản</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Trọng số cao hơn cho giá gần đây</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Phản ứng</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Chậm, ít nhiễu</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Nhanh, nhạy hơn với giá mới</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Ưu điểm</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Ổn định, lọc nhiễu tốt</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Phản ứng nhanh với thay đổi giá</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Phù hợp</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Swing trading, xác định xu hướng dài</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Day trading, scalping</td></tr>
</tbody>
</table>

<h2>3. Các chu kỳ MA phổ biến</h2>
<ul>
<li><strong>MA 9-10:</strong> Xu hướng ngắn hạn (vài ngày). Nhạy, nhiều tín hiệu.</li>
<li><strong>MA 20-21:</strong> Xu hướng trung hạn ngắn. Phổ biến trong day trading.</li>
<li><strong>MA 50:</strong> Xu hướng trung hạn. Đường hỗ trợ/kháng cự động quan trọng.</li>
<li><strong>MA 100:</strong> Xu hướng trung dài hạn.</li>
<li><strong>MA 200:</strong> Xu hướng dài hạn. Được xem là "chỉ báo sức khỏe" của thị trường. Giá trên MA200 = thị trường tăng, giá dưới = thị trường giảm.</li>
</ul>

<figure style="margin:2em 0; text-align:center;">
<img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" alt="Moving Average trên biểu đồ Forex" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Moving Average giúp xác định xu hướng và vùng hỗ trợ/kháng cự động</figcaption>
</figure>

<h2>4. Tín hiệu giao dịch Golden Cross và Death Cross</h2>
<h3>Golden Cross (Tín hiệu mua)</h3>
<p>Khi MA ngắn hạn (50) cắt lên trên MA dài hạn (200), đây là tín hiệu xu hướng tăng mạnh. Golden Cross trên khung D1 là tín hiệu rất đáng tin cậy.</p>

<h3>Death Cross (Tín hiệu bán)</h3>
<p>Khi MA ngắn hạn (50) cắt xuống dưới MA dài hạn (200), đây là tín hiệu xu hướng giảm. Nhiều quỹ đầu tư lớn sử dụng Death Cross để thoát vị thế.</p>

<h2>5. Chiến lược giao dịch với MA</h2>
<h3>Chiến lược 1: MA làm hỗ trợ/kháng cự động</h3>
<ul>
<li>Khi giá trong xu hướng tăng, EMA 20 hoặc EMA 50 thường đóng vai trò hỗ trợ</li>
<li>Giá pullback chạm EMA và bật lên → điểm mua tốt</li>
<li>Xác nhận bằng nến đảo chiều (hammer, engulfing) tại vùng MA</li>
</ul>

<h3>Chiến lược 2: Triple MA (3 đường MA)</h3>
<ul>
<li>Dùng 3 đường: EMA 9 (ngắn), EMA 21 (trung), EMA 55 (dài)</li>
<li>Khi EMA 9 > EMA 21 > EMA 55 → Xu hướng tăng mạnh, chỉ tìm điểm mua</li>
<li>Khi EMA 9 < EMA 21 < EMA 55 → Xu hướng giảm mạnh, chỉ tìm điểm bán</li>
</ul>

<h2>6. Sai lầm thường gặp</h2>
<ul>
<li><strong>Dùng MA trong sideway:</strong> MA tạo nhiều tín hiệu giả khi thị trường đi ngang. Chỉ dùng MA khi thị trường có xu hướng rõ ràng.</li>
<li><strong>Quá nhiều đường MA:</strong> Ôm đồm 5-6 đường MA trên biểu đồ gây rối mắt. Chỉ nên dùng 2-3 đường.</li>
<li><strong>Không xem khung thời gian lớn:</strong> Luôn kiểm tra MA 200 trên khung D1 để biết xu hướng tổng thể trước khi giao dịch ở khung nhỏ.</li>
</ul>

<h2>7. Kết luận</h2>
<p>Moving Average là nền tảng của phân tích kỹ thuật. Dù đơn giản, MA vẫn là công cụ được các trader chuyên nghiệp sử dụng hàng ngày.</p>
<p><strong>Lời khuyên cho người mới:</strong> Bắt đầu với EMA 20 và EMA 50 trên khung H1 hoặc H4. Học cách nhận biết xu hướng và sử dụng MA làm vùng hỗ trợ/kháng cự trước khi áp dụng các chiến lược phức tạp hơn.</p>
`
    },
    {
        title: "So sánh Exness vs XM: Sàn nào tốt hơn cho người Việt 2026?",
        slug: "so-sanh-exness-vs-xm",
        category: "huong-dan",
        tags: ["Exness", "XM", "so sánh sàn", "forex"],
        excerpt: "So sánh chi tiết Exness và XM trên mọi tiêu chí: phí giao dịch, đòn bẩy, nạp rút, nền tảng và hỗ trợ. Sàn nào phù hợp với bạn?",
        meta_title: "So Sánh Exness vs XM 2026 | Sàn Nào Tốt Hơn Cho Trader Việt?",
        meta_description: "So sánh chi tiết Exness và XM: phí spread, đòn bẩy, tốc độ nạp rút, bonus và hỗ trợ tiếng Việt. Đánh giá khách quan cho trader Việt Nam.",
        featured_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        content: `
<h2>1. Tổng quan Exness vs XM</h2>
<p>Exness và XM là hai sàn Forex phổ biến nhất tại Việt Nam. Cả hai đều có giấy phép uy tín và hỗ trợ tiếng Việt tốt. Tuy nhiên, mỗi sàn có thế mạnh riêng phù hợp với từng nhóm trader khác nhau.</p>

<table style="width:100%; border-collapse:collapse; margin:1.5em 0;">
<thead style="background:rgba(59,130,246,0.1);">
<tr><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Tiêu chí</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Exness</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">XM</th></tr>
</thead>
<tbody>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Năm thành lập</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">2008</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">2009</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Giấy phép</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">FCA, CySEC, FSA</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">ASIC, CySEC, FSC</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Nạp tối thiểu</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$10</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$5</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Đòn bẩy tối đa</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Vô cực (Unlimited)</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">1:1000</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Spread EUR/USD</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Từ 0.0 pips (Raw)</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Từ 0.6 pips (Ultra Low)</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Bonus</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Không có</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$30 + 50% nạp</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Tốc độ rút tiền</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Tức thì (Instant)</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">1-3 ngày làm việc</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Nền tảng</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">MT4, MT5, Terminal</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">MT4, MT5, XM App</td></tr>
</tbody>
</table>

<h2>2. So sánh chi phí giao dịch</h2>
<p>Chi phí giao dịch là yếu tố ảnh hưởng trực tiếp đến lợi nhuận, đặc biệt nếu bạn giao dịch thường xuyên.</p>
<p><strong>Exness:</strong> Spread trung bình EUR/USD trên tài khoản Raw Spread là 0.0 pips + commission $7/lot. Tài khoản Standard spread từ 0.3 pips, không phí hoa hồng. Tổng chi phí thấp hơn XM khoảng 20-30%.</p>
<p><strong>XM:</strong> Tài khoản Ultra Low có spread từ 0.6 pips, không commission. Tài khoản Standard spread từ 1.0 pips. XM bù đắp chi phí cao hơn bằng các chương trình bonus hấp dẫn.</p>
<p><strong>Kết luận:</strong> Exness rẻ hơn nếu bạn tính thuần chi phí giao dịch. XM có lợi hơn nếu bạn tận dụng được bonus.</p>

<figure style="margin:2em 0; text-align:center;">
<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="So sánh Exness và XM" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Exness vs XM - hai sàn phổ biến nhất tại Việt Nam</figcaption>
</figure>

<h2>3. Nạp rút tiền</h2>
<p>Đây là điểm khác biệt lớn nhất giữa hai sàn:</p>
<p><strong>Exness:</strong> Nạp rút <strong>tức thì 24/7</strong>, kể cả cuối tuần. Hỗ trợ Internet Banking nội địa Việt Nam, VietQR, USDT. Tiền về tài khoản trong vài giây. Đây là lợi thế cạnh tranh lớn nhất của Exness.</p>
<p><strong>XM:</strong> Nạp tiền nhanh (vài phút đến vài giờ). Rút tiền mất 1-3 ngày làm việc. Hỗ trợ Internet Banking, MoMo, Visa. Không rút được cuối tuần.</p>

<h2>4. Chương trình Bonus</h2>
<p><strong>Exness:</strong> Không có chương trình bonus. Exness chọn cách giảm spread và phí thay vì bonus.</p>
<p><strong>XM:</strong> Có nhiều chương trình bonus hấp dẫn:</p>
<ul>
<li>Bonus $30 không cần nạp (cho tài khoản mới)</li>
<li>Thưởng nạp 50% lên đến $500</li>
<li>Thưởng nạp 20% lên đến $4,500</li>
<li>Chương trình khách hàng thân thiết tích điểm đổi tiền mặt</li>
</ul>

<h2>5. Ai nên chọn Exness?</h2>
<ul>
<li><strong>Scalper:</strong> Spread thấp và tốc độ khớp lệnh nhanh là yếu tố sống còn</li>
<li><strong>Trader cần rút tiền nhanh:</strong> Tính năng rút tiền tức thì là duy nhất trên thị trường</li>
<li><strong>Trader sử dụng EA:</strong> Đòn bẩy cao + spread thấp + tốc độ khớp lệnh tốt</li>
<li><strong>Trader có kinh nghiệm:</strong> Tập trung vào chi phí thấp thay vì bonus</li>
</ul>

<h2>6. Ai nên chọn XM?</h2>
<ul>
<li><strong>Người mới bắt đầu:</strong> Bonus $30 cho phép giao dịch thật không cần nạp tiền</li>
<li><strong>Trader vốn nhỏ:</strong> Nạp tối thiểu chỉ $5 + bonus nạp giúp tăng vốn</li>
<li><strong>Trader thích khuyến mãi:</strong> Chương trình loyalty points đổi tiền mặt hoặc quà tặng</li>
<li><strong>Trader muốn học:</strong> XM có webinar và tài liệu đào tạo miễn phí phong phú</li>
</ul>

<h2>7. Kết luận</h2>
<p>Cả Exness và XM đều là sàn uy tín, an toàn cho trader Việt Nam. Lựa chọn phụ thuộc vào nhu cầu cá nhân:</p>
<ul>
<li><strong>Chọn Exness</strong> nếu bạn ưu tiên spread thấp, rút tiền nhanh và giao dịch chuyên nghiệp.</li>
<li><strong>Chọn XM</strong> nếu bạn mới bắt đầu, muốn tận dụng bonus và có hỗ trợ đào tạo.</li>
</ul>
<p><strong>Lời khuyên:</strong> Mở tài khoản demo ở cả hai sàn, test trong 1-2 tuần để cảm nhận trực tiếp trước khi quyết định.</p>
`
    }
];

const baseDate = new Date('2026-02-21T00:00:00Z'); // Bài 4-6: 21-23/2

async function main() {
    console.log('📝 Seeding bài 4-6 (batch 2)...\n');
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const publishDate = new Date(baseDate.getTime() + i * 24 * 60 * 60 * 1000);
        const { data, error } = await sb.from('posts').insert([{
            ...post, author: 'Sàn Uy Tín', is_published: false,
            published_at: publishDate.toISOString(),
            scheduled_at: publishDate.toISOString(),
            featured_image_alt: post.title,
        }]).select('id').single();
        if (error) console.log('❌ ' + post.title + ': ' + error.message);
        else console.log('✅ "' + post.title + '" → ' + publishDate.toISOString().split('T')[0] + ' (ID:' + data.id + ')');
    }
    console.log('\n✅ Batch 2 hoàn tất!');
}
main().catch(console.error);
