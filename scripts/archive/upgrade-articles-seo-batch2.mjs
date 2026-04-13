import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const articles = [
  {
    id: 146,
    category: 'kien-thuc-forex',
    content: `<h2>Bonus Forex — "Miếng pho mát miễn phí" trong bẫy chuột?</h2>
<p>Bonus nạp tiền, bonus không cần nạp (no-deposit bonus), cashback... Các sàn Forex liên tục tung ra các chương trình khuyến mãi hấp dẫn để thu hút trader mới. Nhưng liệu những ưu đãi này thực sự có lợi cho bạn, hay chỉ là <strong>chiêu marketing</strong> để giữ chân bạn giao dịch nhiều hơn?</p>
<p>Bài viết này sẽ phân tích <strong>chi tiết từng loại bonus</strong>, điều kiện ẩn phía sau, và cách tận dụng chúng một cách thông minh.</p>

<h2>Các loại Bonus Forex phổ biến nhất</h2>
<h3>1. Bonus nạp tiền (Deposit Bonus)</h3>
<p>Sàn thưởng thêm một tỷ lệ phần trăm trên số tiền bạn nạp. Ví dụ: bonus 50% — nạp $1,000, nhận thêm $500 vào tài khoản.</p>
<p><em>Điều kiện phổ biến:</em> Phải giao dịch đủ số lot quy định (thường 5-30 lot/$1 bonus) mới được rút tiền thưởng.</p>

<h3>2. Bonus không cần nạp (No-Deposit Bonus)</h3>
<p>Sàn tặng một khoản tiền nhỏ ($5-$100) ngay khi bạn đăng ký, không cần nạp tiền. Đây là cách tốt nhất để <strong>thử giao dịch thật không rủi ro</strong>.</p>
<p><em>Lưu ý:</em> Thường giới hạn rút lợi nhuận (chỉ rút được lãi, không rút được bonus), và yêu cầu KYC đầy đủ.</p>

<h3>3. Cashback (Hoàn phí giao dịch)</h3>
<p>Hoàn lại một phần spread hoặc commission cho mỗi lot bạn giao dịch. Đây là loại bonus <strong>minh bạch và có lợi nhất</strong> vì không có điều kiện rút ẩn.</p>

<h2>Bảng so sánh Bonus các sàn uy tín 2026</h2>
<table>
<thead><tr><th>Sàn</th><th>Loại Bonus</th><th>Giá trị</th><th>Điều kiện rút</th><th>Đánh giá</th></tr></thead>
<tbody>
<tr><td><a href="/xm/">XM</a></td><td>Deposit 50%+20%</td><td>Lên đến $5,000</td><td>Giao dịch đủ lot</td><td>⭐⭐⭐⭐</td></tr>
<tr><td><a href="/exness/">Exness</a></td><td>Không có bonus</td><td>—</td><td>—</td><td>Spread thấp thay thế</td></tr>
<tr><td><a href="/fbs/">FBS</a></td><td>Deposit 100%</td><td>Lên đến $10,000</td><td>Giao dịch đủ lot</td><td>⭐⭐⭐</td></tr>
<tr><td>HFM</td><td>No-Deposit $50</td><td>$50</td><td>KYC + giao dịch 5 lot</td><td>⭐⭐⭐</td></tr>
</tbody>
</table>

<h2>5 điều kiện ẩn bạn PHẢI kiểm tra trước khi nhận Bonus</h2>
<ol>
<li><strong>Yêu cầu lot tối thiểu:</strong> Nhiều sàn đòi bạn giao dịch 20-30 lot cho mỗi $1 bonus. Với bonus $500, bạn cần giao dịch 10,000-15,000 lot!</li>
<li><strong>Thời hạn sử dụng:</strong> Bonus thường hết hạn sau 30-90 ngày. Nếu chưa đủ điều kiện rút, bonus sẽ bị thu hồi.</li>
<li><strong>Giới hạn rút:</strong> Một số sàn chỉ cho rút lợi nhuận, không cho rút vốn gốc khi còn bonus trong tài khoản.</li>
<li><strong>Sản phẩm giới hạn:</strong> Bonus có thể chỉ áp dụng cho một số cặp tiền hoặc loại tài khoản nhất định.</li>
<li><strong>Hủy bonus = mất lợi nhuận:</strong> Nếu bạn yêu cầu hủy bonus trước khi đủ điều kiện, toàn bộ lợi nhuận liên quan cũng bị xóa.</li>
</ol>

<h2>Khi nào nên nhận Bonus, khi nào nên từ chối?</h2>
<p><strong>NÊN nhận:</strong></p>
<ul>
<li>No-Deposit Bonus để thử sàn mới (không rủi ro gì)</li>
<li>Cashback/hoàn phí — luôn có lợi, không ràng buộc</li>
<li>Deposit Bonus nếu bạn <strong>đã có kế hoạch giao dịch đủ volume</strong> tự nhiên</li>
</ul>
<p><strong>KHÔNG NÊN nhận:</strong></p>
<ul>
<li>Bonus yêu cầu volume quá lớn (trên 10 lot/$1 bonus)</li>
<li>Bonus từ sàn không có giấy phép uy tín</li>
<li>Bonus khiến bạn giao dịch vượt quá kế hoạch quản lý vốn</li>
</ul>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Bonus Forex có phải lừa đảo không?</h3>
<p>Bản thân bonus không phải lừa đảo — các sàn uy tín như <a href="/xm/">XM</a> hay FBS đều cung cấp bonus minh bạch. Vấn đề nằm ở việc bạn có đọc kỹ điều kiện hay không. Sàn lừa đảo sẽ dùng bonus hoành tráng để che giấu điều kiện rút khắt khe.</p>
<h3>Exness không có bonus, vậy có đáng dùng không?</h3>
<p><a href="/exness/">Exness</a> bù đắp bằng spread cực thấp (từ 0.0 pip) và rút tiền tức thì. Về dài hạn, spread thấp tiết kiệm đáng kể hơn bất kỳ bonus nào. Đây là triết lý "minh bạch thay vì quà tặng".</p>
<h3>Nhận bonus có ảnh hưởng đến rút tiền không?</h3>
<p>Có. Khi bonus còn trong tài khoản, một số sàn sẽ giới hạn số tiền bạn có thể rút. Hãy luôn hỏi rõ bộ phận hỗ trợ trước khi nhận.</p>

<p>Bonus là con dao hai lưỡi — biết cách sử dụng sẽ là lợi thế, nhưng lạm dụng sẽ phản tác dụng. Hãy luôn ưu tiên chất lượng sàn hơn khuyến mãi. Tham khảo <a href="/#ranking">Top 10 Sàn Forex Uy Tín Nhất 2026</a> để chọn sàn phù hợp nhất.</p>`
  },
  {
    id: 147,
    category: 'kien-thuc',
    content: `<h2>Phân tích kỹ thuật — "Ngôn ngữ" của biểu đồ giá</h2>
<p>Phân tích kỹ thuật (Technical Analysis) là phương pháp dự đoán xu hướng giá dựa trên <strong>dữ liệu lịch sử về giá và khối lượng giao dịch</strong>. Nếu phân tích cơ bản trả lời câu hỏi "Nên mua/bán CÁI GÌ?", thì phân tích kỹ thuật trả lời "Nên mua/bán KHI NÀO?"</p>
<p>Hơn <strong>80% trader chuyên nghiệp</strong> sử dụng phân tích kỹ thuật làm công cụ chính để ra quyết định. Bài viết này sẽ hướng dẫn bạn đọc biểu đồ và sử dụng các chỉ báo phổ biến nhất.</p>

<h2>3 loại biểu đồ cơ bản</h2>
<table>
<thead><tr><th>Loại</th><th>Ưu điểm</th><th>Nhược điểm</th><th>Phù hợp</th></tr></thead>
<tbody>
<tr><td><strong>Line Chart</strong></td><td>Đơn giản, rõ xu hướng</td><td>Thiếu thông tin chi tiết</td><td>Nhìn tổng quan</td></tr>
<tr><td><strong>Bar Chart</strong></td><td>Đầy đủ OHLC</td><td>Khó đọc khi nhiều nến</td><td>Trader trung cấp</td></tr>
<tr><td><strong>Candlestick</strong></td><td>Trực quan, dễ nhận diện mẫu</td><td>Cần học các pattern</td><td>Phổ biến nhất</td></tr>
</tbody>
</table>

<h2>5 chỉ báo kỹ thuật quan trọng nhất</h2>
<h3>1. Moving Average (Đường trung bình động)</h3>
<p>MA là chỉ báo nền tảng nhất. <strong>SMA(200)</strong> được coi là "đường phân chia bull/bear" — giá trên MA200 là xu hướng tăng, giá dưới là xu hướng giảm.</p>
<p><em>Tín hiệu giao dịch:</em> Khi MA(50) cắt lên trên MA(200) → <strong>Golden Cross</strong> (tín hiệu mua mạnh). Ngược lại → <strong>Death Cross</strong> (tín hiệu bán).</p>

<h3>2. RSI (Relative Strength Index)</h3>
<p>RSI dao động từ 0-100, đo <strong>sức mạnh xu hướng</strong>. Trên 70 = quá mua (overbought), dưới 30 = quá bán (oversold).</p>
<p><em>Mẹo nâng cao:</em> Đừng chỉ mua khi RSI dưới 30 — hãy chờ RSI <strong>cắt ngược lên trên</strong> mức 30 rồi mới vào lệnh Buy.</p>

<h3>3. MACD (Moving Average Convergence Divergence)</h3>
<p>MACD kết hợp 2 đường MA để xác định <strong>điểm đảo chiều xu hướng</strong>. Khi đường MACD cắt lên trên đường Signal → mua. Ngược lại → bán.</p>

<h3>4. Bollinger Bands</h3>
<p>Gồm 3 dải: giữa (SMA20), trên và dưới (±2 độ lệch chuẩn). Khi dải bóp hẹp → thị trường sắp bứt phá mạnh. Giá chạm dải trên → có thể đảo chiều giảm.</p>

<h3>5. Fibonacci Retracement</h3>
<p>Dùng các mức 23.6%, 38.2%, 50%, 61.8% để xác định <strong>vùng pullback tiềm năng</strong>. Mức 61.8% (Golden Ratio) là vùng hay xuất hiện phản ứng giá nhất.</p>

<h2>Quy trình phân tích kỹ thuật 4 bước</h2>
<ol>
<li><strong>Xác định xu hướng chính</strong> trên khung D1 bằng MA200</li>
<li><strong>Tìm vùng hỗ trợ/kháng cự</strong> quan trọng trên H4</li>
<li><strong>Chờ tín hiệu xác nhận</strong> từ RSI hoặc MACD trên H1</li>
<li><strong>Vào lệnh</strong> với Stop Loss rõ ràng và tỷ lệ R:R tối thiểu 1:2</li>
</ol>

<h2>Sai lầm phổ biến khi dùng phân tích kỹ thuật</h2>
<ul>
<li>🚩 <strong>Dùng quá nhiều chỉ báo</strong> cùng lúc → tín hiệu mâu thuẫn</li>
<li>🚩 <strong>Bỏ qua khung thời gian lớn</strong> → bị "noise" đánh lừa trên khung nhỏ</li>
<li>🚩 <strong>Không đặt Stop Loss</strong> vì "tin chắc" tín hiệu đúng</li>
<li>🚩 <strong>Backtest quá ít</strong> → không đủ dữ liệu xác nhận strategy</li>
</ul>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Phân tích kỹ thuật có hiệu quả 100% không?</h3>
<p>Không có phương pháp nào hiệu quả 100%. Phân tích kỹ thuật giúp bạn <strong>tăng xác suất thắng</strong> — chỉ cần thắng 55-60% với R:R 1:2 là đã có lợi nhuận ổn định.</p>
<h3>Nên dùng bao nhiêu chỉ báo cùng lúc?</h3>
<p>Tối đa 2-3 chỉ báo bổ trợ cho nhau: 1 chỉ báo xu hướng (MA) + 1 chỉ báo momentum (RSI/MACD) + 1 chỉ báo volume nếu cần.</p>
<h3>Nền tảng nào tốt nhất để phân tích kỹ thuật?</h3>
<p>TradingView (web) cho phân tích visual, MetaTrader 4/5 cho giao dịch thực tế. Các sàn như <a href="/exness/">Exness</a> và <a href="/ic-markets/">IC Markets</a> đều hỗ trợ đầy đủ cả hai nền tảng này.</p>

<p>Phân tích kỹ thuật là kỹ năng cần thời gian luyện tập. Hãy bắt đầu với <a href="/kien-thuc-forex/forex-la-gi/">kiến thức Forex cơ bản</a> và thực hành trên tài khoản Demo trước khi giao dịch thật.</p>`
  },
  {
    id: 148,
    category: 'kien-thuc-forex',
    content: `<h2>Tại sao bảo mật tài khoản Forex là ưu tiên số 1?</h2>
<p>Mỗi năm, hàng nghìn trader bị mất tiền không phải vì thua lệnh, mà vì <strong>tài khoản bị hack, lừa đảo phishing, hoặc rò rỉ thông tin cá nhân</strong>. Với số tiền lớn luân chuyển qua các sàn Forex, đây là mục tiêu hấp dẫn cho tin tặc.</p>
<p>Bài viết này cung cấp hướng dẫn <strong>bảo mật toàn diện</strong> giúp bạn bảo vệ tài khoản giao dịch và tài sản tài chính.</p>

<h2>5 mối đe dọa bảo mật phổ biến nhất</h2>
<table>
<thead><tr><th>Mối đe dọa</th><th>Mô tả</th><th>Mức độ</th></tr></thead>
<tbody>
<tr><td><strong>Phishing</strong></td><td>Email/web giả mạo sàn Forex để đánh cắp login</td><td>🔴 Rất cao</td></tr>
<tr><td><strong>Malware/Keylogger</strong></td><td>Phần mềm gián điệp ghi lại mọi phím bạn gõ</td><td>🔴 Rất cao</td></tr>
<tr><td><strong>SIM Swap</strong></td><td>Kẻ gian chiếm SIM điện thoại để nhận OTP</td><td>🟡 Cao</td></tr>
<tr><td><strong>EA/Bot giả</strong></td><td>EA chứa backdoor gửi thông tin tài khoản ra ngoài</td><td>🟡 Cao</td></tr>
<tr><td><strong>WiFi công cộng</strong></td><td>Giao dịch qua WiFi không mã hóa bị đánh cắp dữ liệu</td><td>🟠 Trung bình</td></tr>
</tbody>
</table>

<h2>Checklist bảo mật tài khoản Forex (7 bước)</h2>
<h3>Bước 1: Bật xác thực 2 lớp (2FA)</h3>
<p>Đây là lớp bảo vệ <strong>quan trọng nhất</strong>. Sử dụng app Google Authenticator hoặc Authy thay vì SMS (vì SMS có thể bị tấn công SIM Swap).</p>

<h3>Bước 2: Sử dụng mật khẩu mạnh và duy nhất</h3>
<p>Mật khẩu cần tối thiểu 12 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt. <strong>Không bao giờ</strong> dùng cùng mật khẩu cho sàn Forex và email cá nhân.</p>

<h3>Bước 3: Xác minh tài khoản đầy đủ (KYC)</h3>
<p>KYC không chỉ là yêu cầu pháp lý mà còn bảo vệ bạn — nếu tài khoản bị hack, sàn có thể dùng thông tin KYC để xác minh chủ tài khoản thật và khôi phục quyền truy cập.</p>

<h3>Bước 4: Chỉ giao dịch trên thiết bị tin cậy</h3>
<p>Không đăng nhập sàn Forex trên máy tính công cộng (quán net, thư viện). Nếu bắt buộc phải dùng WiFi công cộng, hãy sử dụng <strong>VPN có mã hóa</strong>.</p>

<h3>Bước 5: Cảnh giác với Email/Link lạ</h3>
<p>Luôn kiểm tra URL trước khi đăng nhập. Ví dụ: <code>exness.com</code> là thật, nhưng <code>exness-login.xyz</code> hoặc <code>exnness.com</code> là lừa đảo.</p>

<h3>Bước 6: Không cài EA/Bot từ nguồn không rõ</h3>
<p>Chỉ tải EA từ MQL5 Market chính thức hoặc nguồn có uy tín. EA crack thường chứa backdoor gửi thông tin đăng nhập MT4/MT5 của bạn cho kẻ gian.</p>

<h3>Bước 7: Thiết lập cảnh báo rút tiền</h3>
<p>Bật thông báo email/SMS cho mọi hoạt động rút tiền. Nếu phát hiện rút tiền bất thường, liên hệ sàn ngay lập tức để đóng băng tài khoản.</p>

<h2>Cách chọn sàn Forex an toàn về bảo mật</h2>
<ul>
<li>✅ <strong>Mã hóa SSL/TLS</strong> trên toàn bộ website (kiểm tra biểu tượng khóa trên trình duyệt)</li>
<li>✅ <strong>Hỗ trợ 2FA</strong> (Google Authenticator, không chỉ SMS)</li>
<li>✅ <strong>Bảo hiểm tiền gửi</strong> (FCA cung cấp FSCS lên đến £85,000)</li>
<li>✅ <strong>Tách biệt tài khoản khách hàng</strong> (Segregated Accounts) — tiền của bạn không bị trộn lẫn với vốn điều hành của sàn</li>
</ul>
<p>Các sàn đạt chuẩn bảo mật cao nhất: <a href="/exness/">Exness</a> (FCA, CySEC), <a href="/xm/">XM</a> (CySEC, ASIC), <a href="/ic-markets/">IC Markets</a> (ASIC, CySEC).</p>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Tài khoản Forex bị hack thì có lấy lại tiền được không?</h3>
<p>Tùy sàn. Sàn có giấy phép FCA/ASIC thường có quy trình điều tra và bồi thường. Sàn không giấy phép thì gần như không có cơ chế bảo vệ nào.</p>
<h3>Có nên dùng VPN khi giao dịch Forex?</h3>
<p>Nên dùng VPN khi sử dụng WiFi công cộng. Tuy nhiên, một số sàn có thể khóa tài khoản nếu phát hiện VPN từ quốc gia bị cấm. Hãy kiểm tra chính sách của sàn trước.</p>
<h3>SMS OTP có an toàn không?</h3>
<p>SMS OTP kém an toàn hơn app 2FA vì có thể bị tấn công SIM Swap. Hãy ưu tiên sử dụng Google Authenticator hoặc Authy.</p>

<p>Bảo mật là nền tảng của mọi hoạt động giao dịch. Hãy dành 10 phút để áp dụng checklist trên và bảo vệ tài sản của bạn. Xem thêm <a href="/#ranking">Top 10 Sàn Forex Uy Tín</a> với tiêu chuẩn bảo mật cao nhất.</p>`
  },
  {
    id: 149,
    category: 'kien-thuc',
    content: `<h2>5 bài học "xương máu" từ trader chuyên nghiệp</h2>
<p>Mỗi trader thành công đều có một hành trình đầy thất bại phía sau. Sự khác biệt giữa người thắng và người thua không nằm ở chiến lược, mà nằm ở <strong>bài học họ rút ra từ những lần thua lỗ</strong>.</p>
<p>Dưới đây là 5 bài học được đúc kết từ kinh nghiệm thực chiến của các trader chuyên nghiệp — những bài học mà nếu biết sớm, bạn có thể tiết kiệm được hàng nghìn đô la "học phí" cho thị trường.</p>

<h2>Bài học 1: Quản lý vốn quan trọng hơn chiến lược</h2>
<p>"Tôi đã từng có winrate (tỷ lệ thắng) 70%, nhưng vẫn cháy tài khoản. Lý do? Tôi đặt 20% vốn cho mỗi lệnh." — Một trader chia sẻ trên diễn đàn ForexFactory.</p>
<p><strong>Quy tắc sống còn:</strong></p>
<ul>
<li>Không bao giờ rủi ro quá <strong>1-2% vốn</strong> cho một lệnh duy nhất</li>
<li>Với tài khoản $1,000, Stop Loss tối đa mỗi lệnh chỉ nên là $10-20</li>
<li>Dù thắng hay thua, <strong>lot size phải nhất quán</strong>, không tăng gấp đôi sau lệnh thua</li>
</ul>

<h2>Bài học 2: Kiên nhẫn chờ đợi setup — đừng "FOMO"</h2>
<p>FOMO (Fear Of Missing Out) — nỗi sợ bỏ lỡ cơ hội — là kẻ thù lớn nhất của trader. Thị trường mở cửa 24/5, sẽ luôn có cơ hội mới. Nhưng nếu bạn vào lệnh bừa bãi vì sợ bỏ lỡ, bạn đang đánh bạc chứ không phải giao dịch.</p>
<p><strong>Thống kê thực tế:</strong> Trader chuyên nghiệp trung bình chỉ mở <strong>2-5 lệnh/tuần</strong>. Trader nghiệp dư thường mở 5-10 lệnh/ngày. Ít lệnh hơn = chất lượng lệnh cao hơn = lợi nhuận ổn định hơn.</p>

<h2>Bài học 3: Nhật ký giao dịch — "Vũ khí bí mật" bị đánh giá thấp</h2>
<p>Hơn <strong>90% trader không ghi nhật ký giao dịch</strong>. Đây là sai lầm nghiêm trọng. Không có nhật ký, bạn không thể biết mình mắc sai lầm gì, pattern nào hiệu quả, và cải thiện ở đâu.</p>
<p>Mỗi mục nhật ký nên bao gồm:</p>
<table>
<thead><tr><th>Mục</th><th>Nội dung ghi</th></tr></thead>
<tbody>
<tr><td>Ngày/Giờ</td><td>Thời điểm vào/ra lệnh</td></tr>
<tr><td>Cặp tiền</td><td>EUR/USD, GBP/JPY...</td></tr>
<tr><td>Lý do vào lệnh</td><td>Tín hiệu kỹ thuật cụ thể (vd: Pin Bar tại Support)</td></tr>
<tr><td>Kết quả</td><td>Lãi/lỗ bao nhiêu pip, R:R thực tế</td></tr>
<tr><td>Cảm xúc</td><td>Bình tĩnh? Lo lắng? Tham lam?</td></tr>
<tr><td>Bài học</td><td>Rút ra được gì cho lần sau?</td></tr>
</tbody>
</table>

<h2>Bài học 4: Tâm lý giao dịch quyết định 80% thành bại</h2>
<p>Bạn có thể có chiến lược hoàn hảo trên giấy, nhưng khi tiền thật đang chạy, <strong>cảm xúc sẽ phá hủy mọi kế hoạch</strong>. Hai cảm xúc nguy hiểm nhất:</p>
<ul>
<li><strong>Tham lam:</strong> Không chốt lời khi đã đạt mục tiêu, để rồi giá quay đầu</li>
<li><strong>Sợ hãi:</strong> Cắt lỗ quá sớm hoặc không dám vào lệnh khi tín hiệu rõ ràng</li>
</ul>
<p><em>Giải pháp:</em> Đặt Take Profit và Stop Loss <strong>TRƯỚC KHI</strong> vào lệnh. Sau khi vào lệnh, rời khỏi màn hình. Để hệ thống tự làm việc.</p>

<h2>Bài học 5: Chọn đúng sàn từ đầu — tiết kiệm cả nghìn đô</h2>
<p>Nhiều trader mới chọn sàn theo quảng cáo hoặc lời giới thiệu không đáng tin. Khi phát hiện sàn có vấn đề (spread cao, trượt giá, rút tiền chậm), họ đã mất nhiều tiền và thời gian.</p>
<p><strong>Chi phí ẩn của sàn kém chất lượng:</strong></p>
<ul>
<li>Mất $200-500/tháng do spread cao hơn bình quân</li>
<li>Mất lợi nhuận do trượt giá liên tục</li>
<li>Stress khi rút tiền bị trì hoãn không rõ lý do</li>
</ul>
<p>Hãy dành thời gian nghiên cứu kỹ trước khi chọn sàn. Tham khảo <a href="/#ranking">Top 10 Sàn Forex Uy Tín Nhất 2026</a> — bảng xếp hạng dựa trên dữ liệu thực tế từ hàng nghìn trader Việt Nam.</p>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Mất bao lâu để trở thành trader có lợi nhuận ổn định?</h3>
<p>Trung bình <strong>1-3 năm</strong> nếu bạn nghiêm túc học và thực hành. Những trader thành công nhất đều trải qua giai đoạn thua lỗ dài trước khi ổn định.</p>
<h3>Nên bắt đầu với bao nhiêu vốn?</h3>
<p>Tối thiểu $100-500 cho tài khoản thật. Tuy nhiên, hãy dành 3-6 tháng trên tài khoản Demo trước. Các sàn như <a href="/exness/">Exness</a> cho phép mở tài khoản thật chỉ với $1.</p>
<h3>Copy Trade có phải giải pháp tốt cho người mới?</h3>
<p>Copy Trade là cách tốt để học cách giao dịch của người giỏi, nhưng <strong>không phải cách kiếm tiền bền vững</strong>. Hãy dùng nó như công cụ học tập, đồng thời tự phát triển kỹ năng riêng.</p>

<p>Thành công trong Forex không đến từ "bí kíp" hay "chiến lược thần thánh" — nó đến từ kỷ luật, kiên nhẫn và liên tục cải thiện bản thân. Bắt đầu hành trình của bạn với kiến thức đúng đắn tại <a href="/kien-thuc-forex/">Kiến thức Forex</a>.</p>`
  }
];

let count = 0;
for (const art of articles) {
  const { error } = await sb.from('posts').update({
    content: art.content,
    category: art.category,
    updated_at: new Date().toISOString()
  }).eq('id', art.id);

  if (error) console.error(`❌ ID ${art.id}:`, error.message);
  else { console.log(`✅ ID ${art.id}: Updated`); count++; }
}
console.log(`\n🎉 Batch 2 done: ${count}/4 articles upgraded`);
process.exit(0);
