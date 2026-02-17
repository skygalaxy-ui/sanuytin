import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const posts = [
    {
        title: "Hỗ trợ và kháng cự: cách xác định vùng giá quan trọng",
        slug: "ho-tro-khang-cu-trong-forex",
        category: "kien-thuc",
        tags: ["hỗ trợ", "kháng cự", "price action"],
        excerpt: "Hướng dẫn cách xác định vùng hỗ trợ và kháng cự trong Forex, phương pháp vẽ đường hỗ trợ/kháng cự và chiến lược giao dịch tại các vùng giá này.",
        meta_title: "Hỗ Trợ Và Kháng Cự Trong Forex | Cách Xác Định Chính Xác",
        meta_description: "Hướng dẫn xác định vùng hỗ trợ/kháng cự trong Forex, cách vẽ đường S/R và chiến lược giao dịch breakout, bounce tại vùng giá quan trọng.",
        featured_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        content: `
<h2>1. Hỗ trợ và kháng cự là gì?</h2>
<p><strong>Hỗ trợ (Support)</strong> là vùng giá mà lực mua đủ mạnh để ngăn giá giảm thêm. Hãy tưởng tượng đây là "sàn nhà" - nơi giá thường bật lên.</p>
<p><strong>Kháng cự (Resistance)</strong> là vùng giá mà lực bán đủ mạnh để ngăn giá tăng thêm. Đây là "trần nhà" - nơi giá thường bị đẩy xuống.</p>
<p>Hỗ trợ và kháng cự (S/R) là <strong>nền tảng quan trọng nhất</strong> trong phân tích kỹ thuật. Dù bạn dùng chỉ báo nào (RSI, MACD, MA), tất cả đều liên quan đến việc xác định vùng S/R.</p>

<h2>2. Tại sao S/R hoạt động?</h2>
<p>S/R hoạt động dựa trên <strong>tâm lý đám đông</strong>:</p>
<ul>
<li><strong>Tại vùng hỗ trợ:</strong> Nhiều trader đặt lệnh mua vì cho rằng giá "rẻ". Lực mua tập trung tạo nên "bức tường" ngăn giá giảm.</li>
<li><strong>Tại vùng kháng cự:</strong> Nhiều trader đặt lệnh bán vì cho rằng giá "đắt". Lực bán tập trung tạo nên "trần" ngăn giá tăng.</li>
<li><strong>Vùng càng được test nhiều lần:</strong> → Càng quan trọng (nhưng cũng càng yếu đi mỗi lần test)</li>
</ul>

<h2>3. Cách xác định vùng hỗ trợ/kháng cự</h2>
<h3>3.1. Phương pháp Swing High/Low</h3>
<p>Đây là cách đơn giản và hiệu quả nhất:</p>
<ul>
<li>Quan sát các đỉnh (swing high) và đáy (swing low) trên biểu đồ</li>
<li>Nối các đỉnh ngang nhau → Đường kháng cự</li>
<li>Nối các đáy ngang nhau → Đường hỗ trợ</li>
<li>Ưu tiên khung thời gian lớn (D1, H4) để tìm S/R mạnh</li>
</ul>

<h3>3.2. Phương pháp số tròn (Round Numbers)</h3>
<p>Các mức giá tròn (1.1000, 1.2000, 1.3000...) thường là vùng S/R tâm lý mạnh vì nhiều trader đặt lệnh tại đây.</p>

<h3>3.3. Sử dụng Moving Average</h3>
<p>Các đường EMA 50, EMA 100 và EMA 200 thường đóng vai trò hỗ trợ/kháng cự động. Giá thường bật lại khi chạm các đường MA này trong xu hướng mạnh.</p>

<figure style="margin:2em 0; text-align:center;">
<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Phân tích hỗ trợ kháng cự" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Xác định vùng hỗ trợ/kháng cự chính xác là kỹ năng cốt lõi</figcaption>
</figure>

<h2>4. Quy tắc quan trọng về S/R</h2>
<ul>
<li><strong>S/R là VÙNG, không phải ĐƯỜNG:</strong> Đừng cố vẽ đường chính xác đến từng pip. S/R là vùng giá rộng 10-30 pip.</li>
<li><strong>Vai trò đổi chiều:</strong> Khi giá phá vỡ kháng cự, kháng cự đó trở thành hỗ trợ (và ngược lại). Đây là nguyên tắc cực kỳ quan trọng.</li>
<li><strong>Khung thời gian lớn > nhỏ:</strong> S/R trên D1 mạnh hơn S/R trên H1. Luôn kiểm tra khung lớn trước.</li>
<li><strong>Càng nhiều "chạm" càng quan trọng:</strong> Vùng S/R được test 3-4 lần có ý nghĩa hơn vùng chỉ test 1 lần.</li>
</ul>

<h2>5. Chiến lược giao dịch tại S/R</h2>
<h3>Chiến lược 1: Bounce (Bật lại)</h3>
<ul>
<li>Chờ giá chạm vùng hỗ trợ + xuất hiện nến đảo chiều tăng → MUA</li>
<li>Chờ giá chạm vùng kháng cự + xuất hiện nến đảo chiều giảm → BÁN</li>
<li>Stop Loss: Đặt dưới/trên vùng S/R 10-20 pip</li>
<li>Take Profit: Đặt tại vùng S/R tiếp theo</li>
</ul>

<h3>Chiến lược 2: Breakout (Phá vỡ)</h3>
<ul>
<li>Khi giá phá vỡ kháng cự bằng nến mạnh, đóng cửa trên kháng cự → MUA</li>
<li>Chờ giá pullback về retest vùng kháng cự cũ (giờ là hỗ trợ) → Xác nhận MUA</li>
<li>Cẩn thận với false breakout (phá giả) - xác nhận bằng volume hoặc đóng nến</li>
</ul>

<h2>6. Kết luận</h2>
<p>Hỗ trợ và kháng cự là công cụ phân tích kỹ thuật quan trọng nhất mà mọi trader cần thành thạo. Kết hợp S/R với các chỉ báo như RSI, MACD để tăng xác suất thắng.</p>
<p><strong>Lời khuyên:</strong> Dành 1 tuần chỉ luyện tập vẽ S/R trên tài khoản demo, không cần vào lệnh. Khi mắt đã quen nhận diện vùng giá quan trọng, bạn sẽ giao dịch tự tin hơn rất nhiều.</p>
`
    },
    {
        title: "Swap (phí qua đêm) là gì? Cách tính và tránh phí swap",
        slug: "swap-phi-qua-dem-la-gi",
        category: "kien-thuc",
        tags: ["swap", "phí qua đêm", "forex"],
        excerpt: "Giải thích phí swap trong Forex là gì, cách tính swap, tại sao phí swap thứ 4 gấp 3 và cách tránh hoặc tận dụng swap để kiếm lời.",
        meta_title: "Swap Là Gì? Phí Qua Đêm Forex Và Cách Tính Swap 2026",
        meta_description: "Tìm hiểu phí swap (phí qua đêm) trong Forex, cách tính swap, swap thứ 4 gấp 3 lần và cách tránh phí swap khi giữ lệnh dài hạn.",
        featured_image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        content: `
<h2>1. Swap (phí qua đêm) là gì?</h2>
<p><strong>Swap</strong> là phí mà bạn phải trả hoặc nhận được khi giữ một vị thế giao dịch qua đêm (sau 00:00 giờ server). Swap còn được gọi là <strong>rollover fee</strong> hay <strong>overnight interest</strong>.</p>
<p>Swap tồn tại vì khi bạn giao dịch Forex, thực chất bạn đang <strong>vay một đồng tiền để mua đồng tiền khác</strong>. Mỗi đồng tiền có lãi suất riêng do ngân hàng trung ương quy định. Chênh lệch lãi suất giữa hai đồng tiền tạo ra phí swap.</p>

<h2>2. Swap hoạt động như thế nào?</h2>
<p>Khi giao dịch cặp EUR/USD:</p>
<ul>
<li><strong>Mua EUR/USD:</strong> Bạn vay USD (trả lãi) để mua EUR (nhận lãi). Nếu lãi suất EUR > USD → Bạn nhận swap dương (được tiền). Nếu EUR < USD → Swap âm (mất tiền).</li>
<li><strong>Bán EUR/USD:</strong> Ngược lại, bạn vay EUR để bán, mua USD. Nếu lãi suất USD > EUR → Swap dương.</li>
</ul>
<p><strong>Quy tắc đơn giản:</strong> Mua đồng tiền có lãi suất cao hơn → Swap dương. Mua đồng tiền có lãi suất thấp → Swap âm.</p>

<h2>3. Tại sao swap thứ 4 gấp 3 lần?</h2>
<p>Đây là câu hỏi phổ biến nhất về swap. Lý do:</p>
<ul>
<li>Forex settlement (thanh toán) mất 2 ngày làm việc (T+2)</li>
<li>Lệnh mở thứ 4 (Wednesday) sẽ settle vào thứ 6</li>
<li>Nhưng thứ 7 và Chủ Nhật thị trường đóng cửa → Swap cho 2 ngày cuối tuần được tính vào thứ 4</li>
<li>Kết quả: Thứ 4 bạn bị tính swap gấp 3 (Wed + Sat + Sun)</li>
</ul>

<figure style="margin:2em 0; text-align:center;">
<img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" alt="Phí swap trong Forex" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Phí swap ảnh hưởng lớn đến lợi nhuận khi giữ lệnh dài ngày</figcaption>
</figure>

<h2>4. Cách xem phí swap trên MT4/MT5</h2>
<ul>
<li><strong>MT4/MT5:</strong> Click chuột phải vào cặp tiền trong Market Watch → Specification → Xem mục "Swap Long" và "Swap Short"</li>
<li><strong>Website sàn:</strong> Hầu hết sàn đều công khai bảng swap trên website. Tìm mục "Contract Specifications" hoặc "Trading Conditions"</li>
</ul>

<h2>5. Swap trên các sàn phổ biến</h2>
<table style="width:100%; border-collapse:collapse; margin:1.5em 0;">
<thead style="background:rgba(59,130,246,0.1);">
<tr><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Sàn</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Tài khoản Swap-Free</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Ghi chú</th></tr>
</thead>
<tbody>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Exness</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Có (tự động)</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Swap-free cho nhiều cặp tiền chính</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">XM</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Có (Islamic)</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Cần yêu cầu kích hoạt</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">XTB</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Có</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Miễn swap vàng + nhiều cặp</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Vantage</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Có (Islamic)</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Cần đăng ký riêng</td></tr>
</tbody>
</table>

<h2>6. Cách tránh hoặc giảm phí swap</h2>
<ul>
<li><strong>Đóng lệnh trong ngày:</strong> Nếu bạn là day trader hoặc scalper, đóng tất cả lệnh trước 00:00 server → Không mất swap.</li>
<li><strong>Dùng tài khoản Swap-Free:</strong> Nhiều sàn cung cấp tài khoản không swap (Islamic Account). Exness tự động kích hoạt cho nhiều cặp tiền.</li>
<li><strong>Tránh giữ lệnh qua thứ 4:</strong> Nếu có thể, đóng lệnh trước 00:00 thứ 4 (server time) để tránh phí swap gấp 3.</li>
<li><strong>Chọn cặp tiền có swap thấp:</strong> Các cặp USD/JPY, USD/CHF thường có swap thấp hơn các cặp exotic.</li>
</ul>

<h2>7. Carry Trade: kiếm lời từ swap</h2>
<p>Carry Trade là chiến lược <strong>mua đồng tiền lãi suất cao, bán đồng tiền lãi suất thấp</strong> để nhận swap dương hàng ngày. Ví dụ: Mua USD/JPY (lãi suất USD cao, JPY gần 0%) → Nhận swap dương mỗi đêm.</p>
<p>Tuy nhiên, Carry Trade có rủi ro nếu giá đi ngược chiều. Lợi nhuận từ swap có thể không bù đắp được thua lỗ từ biến động giá.</p>

<h2>8. Kết luận</h2>
<p>Swap là chi phí ẩn mà nhiều trader mới bỏ qua. Nếu bạn giữ lệnh qua đêm thường xuyên, phí swap có thể ảnh hưởng đáng kể đến lợi nhuận.</p>
<p><strong>Lời khuyên:</strong> Luôn kiểm tra phí swap trước khi mở lệnh dài hạn. Nếu swap âm quá lớn, cân nhắc sử dụng tài khoản Swap-Free hoặc chiến lược ngắn hạn hơn.</p>
`
    },
    {
        title: "Copy Trade là gì? Hướng dẫn copy trade cho người mới",
        slug: "copy-trade-la-gi-huong-dan",
        category: "huong-dan",
        tags: ["copy trade", "social trading", "người mới"],
        excerpt: "Hướng dẫn toàn diện về Copy Trade: cách hoạt động, ưu nhược điểm, cách chọn trader để copy và các nền tảng copy trade phổ biến nhất 2026.",
        meta_title: "Copy Trade Là Gì? Hướng Dẫn Copy Trade Cho Người Mới 2026",
        meta_description: "Tìm hiểu Copy Trade là gì, cách hoạt động, ưu nhược điểm và hướng dẫn chọn trader giỏi để copy trade hiệu quả cho người mới bắt đầu.",
        featured_image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        content: `
<h2>1. Copy Trade là gì?</h2>
<p><strong>Copy Trade (Social Trading)</strong> là hình thức giao dịch cho phép bạn <strong>tự động sao chép</strong> các giao dịch của trader giỏi vào tài khoản của mình. Khi trader được copy mở lệnh, tài khoản của bạn cũng tự động mở lệnh tương tự.</p>
<p>Copy Trade giống như <strong>"đầu tư ủy thác" phiên bản số hóa</strong>. Bạn không cần phân tích thị trường hay tự mở lệnh, chỉ cần chọn đúng trader giỏi để copy.</p>

<h2>2. Copy Trade hoạt động như thế nào?</h2>
<ol>
<li><strong>Chọn nền tảng:</strong> Mở tài khoản tại sàn hỗ trợ Copy Trade</li>
<li><strong>Tìm trader:</strong> Duyệt danh sách trader, xem thống kê hiệu suất (lợi nhuận, drawdown, số tháng hoạt động)</li>
<li><strong>Copy:</strong> Chọn trader và phân bổ vốn. Ví dụ: phân bổ $500 copy Trader A</li>
<li><strong>Tự động giao dịch:</strong> Khi Trader A mở/đóng lệnh, tài khoản bạn tự động theo</li>
<li><strong>Quản lý:</strong> Bạn có thể dừng copy, rút vốn hoặc đổi trader bất cứ lúc nào</li>
</ol>

<figure style="margin:2em 0; text-align:center;">
<img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" alt="Copy Trade" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Copy Trade cho phép người mới tham gia thị trường dễ dàng hơn</figcaption>
</figure>

<h2>3. Ưu điểm của Copy Trade</h2>
<ul>
<li><strong>Không cần kinh nghiệm:</strong> Người mới hoàn toàn có thể tham gia thị trường Forex</li>
<li><strong>Tiết kiệm thời gian:</strong> Không cần theo dõi chart hay phân tích kỹ thuật</li>
<li><strong>Học hỏi:</strong> Quan sát cách trader chuyên nghiệp giao dịch</li>
<li><strong>Đa dạng hóa:</strong> Copy nhiều trader với chiến lược khác nhau</li>
</ul>

<h2>4. Nhược điểm và rủi ro</h2>
<ul>
<li><strong>Không kiểm soát 100%:</strong> Trader được copy quyết định mọi thứ, bạn chỉ theo</li>
<li><strong>Hiệu suất quá khứ ≠ tương lai:</strong> Trader lãi 6 tháng trước không đảm bảo lãi tiếp</li>
<li><strong>Phí copy:</strong> Một số nền tảng thu 20-30% lợi nhuận</li>
<li><strong>Rủi ro thua lỗ:</strong> Vẫn có thể mất tiền nếu trader copy thua</li>
<li><strong>Slippage:</strong> Giá vào lệnh của bạn có thể khác với trader gốc do độ trễ</li>
</ul>

<h2>5. Cách chọn trader để copy</h2>
<p>Đây là bước quan trọng nhất. Tiêu chí lọc:</p>
<ul>
<li><strong>Thời gian hoạt động:</strong> Tối thiểu 6-12 tháng. Tránh trader chỉ mới chạy 1-2 tháng dù lãi cao.</li>
<li><strong>Drawdown tối đa:</strong> Nên dưới 30%. Drawdown 50%+ là rủi ro quá cao.</li>
<li><strong>Lợi nhuận ổn định:</strong> Tháng nào cũng lãi 5-15% tốt hơn tháng lãi 100% rồi thua 50%.</li>
<li><strong>Chiến lược rõ ràng:</strong> Trader có mô tả chi tiết chiến lược (Scalping, Swing, News trading...)</li>
<li><strong>Số người copy:</strong> 100+ người copy là tín hiệu đáng tin cậy</li>
<li><strong>Sử dụng Stop Loss:</strong> Trader không dùng SL = nguy hiểm, tránh xa</li>
</ul>

<h2>6. Các nền tảng Copy Trade phổ biến</h2>
<ul>
<li><strong>eToro:</strong> Nền tảng Social Trading lớn nhất thế giới, 30+ triệu user. Giao diện đẹp, dễ dùng. Phí: spread markup.</li>
<li><strong>Exness Social Trading:</strong> Tích hợp sẵn trong app Exness. Miễn phí copy, trader nhận commission từ lợi nhuận.</li>
<li><strong>XM CopyTrading:</strong> Nền tảng copy trading của XM, phù hợp cho người đang sử dụng XM.</li>
<li><strong>FBS CopyTrade:</strong> Ứng dụng copy trade riêng, đơn giản và dễ sử dụng.</li>
<li><strong>ZuluTrade:</strong> Nền tảng copy trade độc lập, kết nối với nhiều sàn khác nhau.</li>
</ul>

<h2>7. Lời khuyên cho người mới copy trade</h2>
<ul>
<li><strong>Bắt đầu với số vốn nhỏ</strong> ($100-$300) để test trước khi tăng vốn</li>
<li><strong>Đa dạng hóa:</strong> Copy 3-5 trader với chiến lược khác nhau, không "all-in" vào 1 người</li>
<li><strong>Đặt giới hạn thua lỗ:</strong> Cài đặt max drawdown, tự động dừng copy nếu thua quá mức</li>
<li><strong>Theo dõi định kỳ:</strong> Kiểm tra hiệu suất mỗi tuần, thay đổi trader nếu cần</li>
<li><strong>Không copy "thánh sống":</strong> Trader lãi 500%/tháng thường dùng chiến lược cực kỳ rủi ro</li>
</ul>

<h2>8. Kết luận</h2>
<p>Copy Trade là cách tốt để người mới tiếp cận thị trường Forex mà không cần quá nhiều kiến thức. Tuy nhiên, đây không phải "máy in tiền". Hãy chọn trader cẩn thận, quản lý vốn chặt chẽ và luôn có kế hoạch rủi ro.</p>
<p><strong>Lời khuyên cuối:</strong> Dù copy trade, hãy vẫn học kiến thức Forex cơ bản. Hiểu thị trường sẽ giúp bạn đánh giá trader tốt hơn và biết khi nào nên dừng copy.</p>
`
    },
    {
        title: "So sánh Vantage vs Exness: đánh giá chi tiết 2026",
        slug: "so-sanh-vantage-vs-exness",
        category: "huong-dan",
        tags: ["Vantage", "Exness", "so sánh sàn"],
        excerpt: "So sánh chi tiết Vantage và Exness trên mọi tiêu chí quan trọng: spread, đòn bẩy, tốc độ khớp lệnh, nạp rút và hỗ trợ khách hàng.",
        meta_title: "So Sánh Vantage vs Exness 2026 | Đánh Giá Chi Tiết",
        meta_description: "So sánh Vantage và Exness: phí spread, đòn bẩy, tốc độ khớp lệnh, nạp rút tiền và hỗ trợ tiếng Việt. Sàn nào tốt hơn?",
        featured_image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
        content: `
<h2>1. Tổng quan Vantage vs Exness</h2>
<p>Vantage và Exness đều thuộc top đầu các sàn Forex uy tín dành cho trader Việt Nam. Cả hai có giấy phép mạnh, spread thấp và hỗ trợ tốt. Bài viết này so sánh toàn diện để giúp bạn chọn sàn phù hợp.</p>

<table style="width:100%; border-collapse:collapse; margin:1.5em 0;">
<thead style="background:rgba(59,130,246,0.1);">
<tr><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Tiêu chí</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Vantage</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Exness</th></tr>
</thead>
<tbody>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Năm thành lập</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">2009</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">2008</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Giấy phép</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">ASIC, FCA, CIMA</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">FCA, CySEC, FSA</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Nạp tối thiểu</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$50</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$10</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Đòn bẩy tối đa</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">1:1000</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Unlimited</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Spread EUR/USD</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Từ 0.0 (Raw ECN)</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Từ 0.0 (Raw Spread)</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Tốc độ khớp lệnh</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Dưới 30ms</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">25-50ms</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Rút tiền</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">1-2 ngày</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Tức thì (Instant)</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Nền tảng</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">MT4, MT5, ProTrader</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">MT4, MT5, Terminal</td></tr>
</tbody>
</table>

<h2>2. So sánh điều kiện giao dịch</h2>
<p><strong>Vantage:</strong> Tài khoản Raw ECN là điểm mạnh lớn nhất. Spread từ 0.0 pips + commission $6/lot (2 chiều). Công nghệ cầu nối oneZero MT4 Bridge đảm bảo tốc độ khớp lệnh dưới 30ms, không re-quote. Vantage phù hợp với trader đòi hỏi chất lượng khớp lệnh cao.</p>
<p><strong>Exness:</strong> Tài khoản Raw Spread cũng có spread từ 0.0 pips + commission $7/lot. Exness có ưu thế ở đòn bẩy không giới hạn và Stop Out 0% - cho phép bạn tận dụng vốn tối đa.</p>

<h2>3. Nạp và rút tiền</h2>
<p><strong>Exness thắng tuyệt đối ở mục này.</strong> Nạp rút tức thì 24/7, kể cả cuối tuần. Hỗ trợ Internet Banking Việt Nam, VietQR, USDT. Tiền về tài khoản trong vài giây.</p>
<p><strong>Vantage:</strong> Hỗ trợ Internet Banking, USDT, Visa/Master, Skrill. Nạp tiền nhanh (vài phút), nhưng rút tiền mất 1-2 ngày làm việc. Không rút được cuối tuần.</p>

<figure style="margin:2em 0; text-align:center;">
<img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80" alt="So sánh Vantage và Exness" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Vantage vs Exness - hai sàn hàng đầu cho trader Việt</figcaption>
</figure>

<h2>4. Ai nên chọn Vantage?</h2>
<ul>
<li><strong>Trader chuyên nghiệp:</strong> Cần tốc độ khớp lệnh ECN cực nhanh</li>
<li><strong>Scalper khối lượng lớn:</strong> Commission $6/lot thấp hơn Exness ($7/lot)</li>
<li><strong>Trader dùng EA:</strong> Server ổn định, tốc độ khớp lệnh nhất quán</li>
<li><strong>Trader ưu tiên giấy phép ASIC:</strong> Giấy phép Úc thuộc hàng khó đạt nhất</li>
</ul>

<h2>5. Ai nên chọn Exness?</h2>
<ul>
<li><strong>Trader cần rút tiền nhanh:</strong> Rút tiền tức thì là tính năng không sàn nào có</li>
<li><strong>Trader vốn nhỏ:</strong> Nạp tối thiểu chỉ $10, đòn bẩy unlimited</li>
<li><strong>Swing Trader:</strong> Swap-free tự động cho nhiều cặp tiền, giữ lệnh lâu không lo phí qua đêm</li>
<li><strong>Trader Việt Nam:</strong> Hỗ trợ tiếng Việt 24/7, nạp rút qua ngân hàng nội địa</li>
</ul>

<h2>6. Bảng tổng kết điểm</h2>
<table style="width:100%; border-collapse:collapse; margin:1.5em 0;">
<thead style="background:rgba(59,130,246,0.1);">
<tr><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Tiêu chí</th><th style="padding:12px; text-align:center; border-bottom:2px solid rgba(255,255,255,0.1);">Vantage</th><th style="padding:12px; text-align:center; border-bottom:2px solid rgba(255,255,255,0.1);">Exness</th></tr>
</thead>
<tbody>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Phí giao dịch</td><td style="padding:12px; text-align:center; border-bottom:1px solid rgba(255,255,255,0.05);">9/10</td><td style="padding:12px; text-align:center; border-bottom:1px solid rgba(255,255,255,0.05);">9/10</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Tốc độ khớp lệnh</td><td style="padding:12px; text-align:center; border-bottom:1px solid rgba(255,255,255,0.05);">10/10</td><td style="padding:12px; text-align:center; border-bottom:1px solid rgba(255,255,255,0.05);">8/10</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Nạp rút tiền</td><td style="padding:12px; text-align:center; border-bottom:1px solid rgba(255,255,255,0.05);">7/10</td><td style="padding:12px; text-align:center; border-bottom:1px solid rgba(255,255,255,0.05);">10/10</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Giấy phép</td><td style="padding:12px; text-align:center; border-bottom:1px solid rgba(255,255,255,0.05);">10/10</td><td style="padding:12px; text-align:center; border-bottom:1px solid rgba(255,255,255,0.05);">9/10</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Phù hợp người mới</td><td style="padding:12px; text-align:center; border-bottom:1px solid rgba(255,255,255,0.05);">7/10</td><td style="padding:12px; text-align:center; border-bottom:1px solid rgba(255,255,255,0.05);">9/10</td></tr>
</tbody>
</table>

<h2>7. Kết luận</h2>
<p>Cả Vantage và Exness đều là sàn xuất sắc. Lựa chọn phụ thuộc vào ưu tiên cá nhân:</p>
<ul>
<li><strong>Chọn Vantage</strong> nếu bạn là trader chuyên nghiệp, ưu tiên tốc độ khớp lệnh ECN và giấy phép ASIC.</li>
<li><strong>Chọn Exness</strong> nếu bạn cần rút tiền nhanh, vốn nhỏ và ưu tiên sự tiện lợi.</li>
</ul>
<p><strong>Lời khuyên:</strong> Mở tài khoản demo ở cả hai sàn, test spread và tốc độ khớp lệnh trên cùng cặp tiền. Trải nghiệm thực tế sẽ giúp bạn quyết định dễ dàng hơn.</p>
`
    }
];

const baseDate = new Date('2026-02-24T00:00:00Z'); // Bài 7-10: 24-27/2

async function main() {
    console.log('📝 Seeding bài 7-10 (batch 3)...\n');
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
    console.log('\n🎉 Hoàn tất 10/10 bài viết!');
}
main().catch(console.error);
