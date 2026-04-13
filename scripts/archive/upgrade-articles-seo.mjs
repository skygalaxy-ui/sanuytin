import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const articles = [
  {
    id: 143,
    category: 'kien-thuc-forex',
    content: `<h2>Tại sao việc đánh giá sàn Forex quan trọng hơn bạn nghĩ?</h2>
<p>Trong hàng trăm sàn Forex đang hoạt động tại Việt Nam, chỉ khoảng <strong>10-15%</strong> thực sự đáp ứng các tiêu chuẩn an toàn quốc tế. Việc chọn sai sàn không chỉ ảnh hưởng đến lợi nhuận mà còn có thể khiến bạn mất trắng toàn bộ số vốn đã nạp.</p>
<p>Bài viết này sẽ cung cấp cho bạn <strong>5 tiêu chí vàng</strong> — được đúc kết từ kinh nghiệm của hàng nghìn trader chuyên nghiệp — để đánh giá chính xác bất kỳ sàn giao dịch nào trước khi bỏ tiền thật vào.</p>

<h2>Tiêu chí 1: Giấy phép quản lý — \"Hộ chiếu\" của sàn Forex</h2>
<p>Giấy phép (License) là yếu tố <strong>quan trọng nhất</strong> khi đánh giá một sàn Forex. Nó chứng minh sàn đó chịu sự giám sát của cơ quan tài chính có thẩm quyền, buộc phải tuân thủ các quy định về bảo vệ tiền gửi khách hàng.</p>
<p>Các giấy phép được phân thành 3 cấp độ:</p>
<table>
<thead><tr><th>Cấp độ</th><th>Cơ quan</th><th>Quốc gia</th><th>Mức độ tin cậy</th></tr></thead>
<tbody>
<tr><td><strong>Tier 1</strong></td><td>FCA</td><td>Anh</td><td>⭐⭐⭐⭐⭐ Cao nhất</td></tr>
<tr><td><strong>Tier 1</strong></td><td>ASIC</td><td>Úc</td><td>⭐⭐⭐⭐⭐ Cao nhất</td></tr>
<tr><td><strong>Tier 2</strong></td><td>CySEC</td><td>Síp (EU)</td><td>⭐⭐⭐⭐ Cao</td></tr>
<tr><td><strong>Tier 2</strong></td><td>FSCA</td><td>Nam Phi</td><td>⭐⭐⭐⭐ Cao</td></tr>
<tr><td><strong>Tier 3</strong></td><td>FSA</td><td>Seychelles</td><td>⭐⭐⭐ Trung bình</td></tr>
<tr><td><strong>Tier 3</strong></td><td>VFSC</td><td>Vanuatu</td><td>⭐⭐ Thấp</td></tr>
</tbody>
</table>
<p><em>Lời khuyên:</em> Ưu tiên sàn có ít nhất 1 giấy phép Tier 1 hoặc Tier 2. Sàn chỉ có Tier 3 hoặc không có giấy phép nên tránh xa.</p>

<h2>Tiêu chí 2: Chi phí giao dịch — Spread và Commission</h2>
<p><strong>Spread</strong> (chênh lệch giá mua-bán) là khoản phí ẩn mà bạn trả cho MỌI lệnh giao dịch. Spread thấp = chi phí thấp = lợi nhuận ròng cao hơn.</p>
<p>Ví dụ: Nếu bạn giao dịch 10 lệnh/ngày với spread trung bình 2 pip, mỗi tháng bạn mất khoảng <strong>400-600$</strong> chỉ riêng tiền phí. Đó là lý do tại sao chênh lệch chỉ 0.5 pip giữa các sàn cũng tạo ra khác biệt rất lớn về dài hạn.</p>
<table>
<thead><tr><th>Sàn</th><th>Spread EUR/USD</th><th>Commission</th><th>Tổng chi phí/lot</th></tr></thead>
<tbody>
<tr><td><a href="/exness/">Exness</a></td><td>0.0 pip</td><td>$3.5/lot</td><td>$3.5</td></tr>
<tr><td><a href="/xm/">XM</a></td><td>0.1 pip</td><td>$3.5/lot</td><td>$4.5</td></tr>
<tr><td><a href="/ic-markets/">IC Markets</a></td><td>0.0 pip</td><td>$3.5/lot</td><td>$3.5</td></tr>
<tr><td>Sàn trung bình</td><td>1.5 pip</td><td>$0</td><td>$15</td></tr>
</tbody>
</table>

<h2>Tiêu chí 3: Tốc độ khớp lệnh và trượt giá (Slippage)</h2>
<p>Tốc độ khớp lệnh quyết định bạn vào/ra thị trường ở mức giá nào. Sàn uy tín thường khớp lệnh trong <strong>dưới 50ms</strong>, trong khi sàn kém chất lượng có thể mất 500ms-2 giây, gây ra trượt giá nghiêm trọng.</p>
<p><strong>Trượt giá (Slippage)</strong> xảy ra khi giá thực tế khác với giá bạn đặt lệnh. Với scalper giao dịch hàng chục lệnh mỗi ngày, mỗi pip trượt giá tích lũy lại trở thành khoản lỗ đáng kể.</p>
<p><em>Cách kiểm tra:</em> Mở tài khoản demo và đặt lệnh ở thời điểm thị trường biến động mạnh (như lúc ra tin Non-Farm). Nếu trượt giá thường xuyên vượt 1-2 pip, đó là dấu hiệu cảnh báo.</p>

<h2>Tiêu chí 4: Nền tảng giao dịch và công nghệ</h2>
<p>Nền tảng giao dịch là "vũ khí" của trader. Các nền tảng phổ biến và đáng tin cậy nhất hiện nay:</p>
<ul>
<li><strong>MetaTrader 4 (MT4):</strong> Kinh điển, ổn định, hỗ trợ EA tốt nhất</li>
<li><strong>MetaTrader 5 (MT5):</strong> Nâng cấp với thêm khung thời gian và loại lệnh</li>
<li><strong>cTrader:</strong> Giao diện hiện đại, phù hợp scalper chuyên nghiệp</li>
<li><strong>Nền tảng riêng:</strong> Một số sàn phát triển riêng (cần kiểm tra kỹ tính ổn định)</li>
</ul>
<p><strong>Lưu ý quan trọng:</strong> Sàn tốt phải cung cấp cả phiên bản Web, Desktop và Mobile để bạn có thể giao dịch mọi lúc mọi nơi.</p>

<h2>Tiêu chí 5: Trải nghiệm nạp/rút tiền thực tế</h2>
<p>Đây là bài kiểm tra "thực chiến" quan trọng nhất. Một sàn có thể quảng cáo rất hay, nhưng nếu <strong>rút tiền khó khăn hoặc chậm trễ</strong>, tất cả đều vô nghĩa.</p>
<p>Checklist kiểm tra nạp/rút:</p>
<ul>
<li>✅ Hỗ trợ đa phương thức: ngân hàng nội địa, ví điện tử, USDT</li>
<li>✅ Thời gian rút: dưới 24h (lý tưởng là dưới 2h)</li>
<li>✅ Phí rút minh bạch: 0$ hoặc phí cố định thấp</li>
<li>✅ Không yêu cầu KYC lặp lại mỗi lần rút</li>
</ul>
<p><em>Mẹo:</em> Trước khi nạp lớn, hãy thử nạp 50-100$ và rút thử. Đây là cách nhanh nhất để kiểm chứng.</p>

<h2>Bảng tổng hợp: So sánh nhanh Top sàn theo 5 tiêu chí</h2>
<table>
<thead><tr><th>Sàn</th><th>Giấy phép</th><th>Spread</th><th>Khớp lệnh</th><th>Nền tảng</th><th>Rút tiền</th></tr></thead>
<tbody>
<tr><td><a href="/exness/">Exness</a></td><td>FCA, CySEC, FSA</td><td>Từ 0.0 pip</td><td>&lt;30ms</td><td>MT4, MT5</td><td>Tức thì</td></tr>
<tr><td><a href="/xm/">XM</a></td><td>CySEC, ASIC, IFSC</td><td>Từ 0.1 pip</td><td>&lt;50ms</td><td>MT4, MT5</td><td>&lt;24h</td></tr>
<tr><td><a href="/ic-markets/">IC Markets</a></td><td>ASIC, CySEC, FSA</td><td>Từ 0.0 pip</td><td>&lt;40ms</td><td>MT4, MT5, cTrader</td><td>&lt;24h</td></tr>
</tbody>
</table>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Sàn Forex có giấy phép FCA thì an toàn tuyệt đối không?</h3>
<p>Giấy phép FCA là tiêu chuẩn cao nhất, cung cấp bảo hiểm tiền gửi lên đến £85,000 qua FSCS. Tuy nhiên, không có gì là tuyệt đối — bạn vẫn cần tuân thủ quản lý vốn và không đặt toàn bộ tài sản vào một sàn duy nhất.</p>
<h3>Spread 0.0 pip có thật không hay chỉ là quảng cáo?</h3>
<p>Hoàn toàn có thật trên tài khoản ECN/Raw Spread. Tuy nhiên, sàn sẽ thu phí commission riêng (thường $3-7/lot). Tổng chi phí (spread + commission) mới là con số bạn cần quan tâm.</p>
<h3>Nên ưu tiên sàn có đòn bẩy cao hay thấp?</h3>
<p>Đòn bẩy không phải tiêu chí chọn sàn. Người mới nên dùng đòn bẩy dưới 1:100. Sàn uy tín cho phép bạn <strong>tự chọn mức đòn bẩy</strong> phù hợp với kinh nghiệm của mình.</p>

<p>Hãy áp dụng 5 tiêu chí trên để đánh giá bất kỳ sàn nào trước khi nạp tiền. Tham khảo ngay <a href="/#ranking">Bảng Xếp Hạng Top 10 Sàn Forex Uy Tín Nhất 2026</a> tại Sàn Uy Tín để có cái nhìn tổng quan và khách quan nhất.</p>`
  },
  {
    id: 144,
    category: 'kien-thuc',
    content: `<h2>Bot giao dịch Forex (EA) — Cỗ máy kiếm tiền tự động hay "cái bẫy" cho người mới?</h2>
<p>Expert Advisor (EA) là chương trình phần mềm chạy trên nền tảng MetaTrader, có khả năng <strong>tự động mở/đóng lệnh</strong> theo thuật toán được lập trình sẵn mà không cần sự can thiệp của con người. Nghe có vẻ hoàn hảo — bạn ngủ, robot kiếm tiền. Nhưng sự thật phía sau có màu hồng đến vậy không?</p>
<p>Theo thống kê từ MyFxBook, <strong>hơn 75% EA công khai kết quả đều thua lỗ</strong> trong dài hạn. Bài viết này sẽ giúp bạn hiểu rõ cơ chế hoạt động, ưu nhược điểm và cách sử dụng EA một cách thông minh.</p>

<h2>EA hoạt động như thế nào?</h2>
<p>EA hoạt động dựa trên một bộ quy tắc (rules) được viết bằng ngôn ngữ MQL4/MQL5. Khi điều kiện trong code được thỏa mãn, EA sẽ tự động thực hiện hành động tương ứng:</p>
<ul>
<li><strong>Mở lệnh Buy/Sell</strong> khi tín hiệu kỹ thuật xuất hiện (vd: MA crossover)</li>
<li><strong>Đặt Stop Loss/Take Profit</strong> tự động theo tỷ lệ R:R</li>
<li><strong>Quản lý vốn</strong> bằng cách tính lot size dựa trên % rủi ro</li>
<li><strong>Trailing Stop</strong> để bảo vệ lợi nhuận khi giá đi đúng hướng</li>
</ul>

<h2>So sánh: Giao dịch thủ công vs EA tự động</h2>
<table>
<thead><tr><th>Tiêu chí</th><th>Giao dịch thủ công</th><th>EA tự động</th></tr></thead>
<tbody>
<tr><td>Tốc độ ra quyết định</td><td>Chậm (phải phân tích)</td><td>Tức thì (milliseconds)</td></tr>
<tr><td>Cảm xúc</td><td>Dễ bị ảnh hưởng</td><td>Không có cảm xúc</td></tr>
<tr><td>Hoạt động 24/7</td><td>Không thể</td><td>Có</td></tr>
<tr><td>Thích ứng tin tức</td><td>Linh hoạt</td><td>Kém (cần lập trình riêng)</td></tr>
<tr><td>Chi phí ban đầu</td><td>Thấp</td><td>Cao (mua EA + VPS)</td></tr>
<tr><td>Backtest</td><td>Khó kiểm chứng</td><td>Dễ dàng trên MT4/MT5</td></tr>
</tbody>
</table>

<h2>3 loại EA phổ biến nhất trên thị trường</h2>
<h3>1. EA Trend Following (Theo xu hướng)</h3>
<p>Sử dụng Moving Average, MACD hoặc ADX để xác định xu hướng và vào lệnh cùng chiều. Đây là loại an toàn nhất cho người mới, nhưng hiệu suất kém trong thị trường sideway.</p>

<h3>2. EA Scalping (Lướt sóng)</h3>
<p>Mở hàng chục đến hàng trăm lệnh mỗi ngày với mục tiêu lãi nhỏ (3-10 pip/lệnh). Yêu cầu spread cực thấp và VPS tốc độ cao. Phù hợp với sàn có chi phí thấp như <a href="/exness/">Exness</a> hoặc <a href="/ic-markets/">IC Markets</a>.</p>

<h3>3. EA Martingale (Gấp thếp)</h3>
<p>Tăng gấp đôi lot size sau mỗi lệnh thua để "gỡ lại". <strong>Cực kỳ nguy hiểm!</strong> Có thể "cháy" tài khoản chỉ sau 5-7 lệnh thua liên tiếp. Hầu hết các "EA lãi 1000%/tháng" trên mạng đều dùng chiến lược này.</p>

<h2>Cách nhận biết EA lừa đảo</h2>
<ul>
<li>🚩 Hứa hẹn lợi nhuận cố định (vd: "20% mỗi tháng, không rủi ro")</li>
<li>🚩 Không cung cấp backtest hoặc MyFxBook verified</li>
<li>🚩 Yêu cầu nạp tiền vào sàn cụ thể (để lấy hoa hồng IB)</li>
<li>🚩 Không cho phép dùng thử trên Demo trước</li>
<li>🚩 Chỉ show kết quả "screenshot" thay vì link tài khoản thực</li>
</ul>

<h2>Hướng dẫn sử dụng EA an toàn cho người mới</h2>
<ol>
<li><strong>Chạy Demo ít nhất 3 tháng</strong> trước khi dùng tiền thật</li>
<li><strong>Không tin backtest 100%</strong> — backtest không phản ánh trượt giá, spread thực tế</li>
<li><strong>Giới hạn rủi ro</strong> tối đa 1-2% vốn mỗi lệnh</li>
<li><strong>Thuê VPS</strong> để EA chạy 24/7 không gián đoạn</li>
<li><strong>Theo dõi mỗi ngày</strong> — EA không phải "set and forget"</li>
</ol>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>EA miễn phí trên MQL5 Market có tốt không?</h3>
<p>Có một số EA miễn phí chất lượng, nhưng đa phần yêu cầu tối ưu lại thông số cho phù hợp với điều kiện thị trường hiện tại. Hãy luôn kiểm tra rating và review từ người dùng thực.</p>
<h3>Cần bao nhiêu vốn để chạy EA hiệu quả?</h3>
<p>Tối thiểu $500-1000 cho EA trend following, $2000+ cho EA scalping. Vốn quá nhỏ sẽ không đủ margin để chịu đựng drawdown bình thường.</p>
<h3>Sàn nào phù hợp nhất để chạy EA?</h3>
<p>Các sàn cho phép EA và có spread thấp như <a href="/exness/">Exness</a>, <a href="/ic-markets/">IC Markets</a>, hoặc <a href="/xm/">XM</a> là lựa chọn tốt nhất. Xem chi tiết tại <a href="/#ranking">Top 10 Sàn Forex Uy Tín</a>.</p>

<p>EA là công cụ hỗ trợ mạnh mẽ, nhưng <strong>không phải cỗ máy in tiền</strong>. Hãy trang bị kiến thức đầy đủ trước khi sử dụng và luôn kiểm soát rủi ro chặt chẽ.</p>`
  },
  {
    id: 145,
    category: 'so-sanh',
    content: `<h2>Tại sao tốc độ nạp/rút tiền là yếu tố sống còn?</h2>
<p>Đối với trader Forex, việc nạp/rút tiền nhanh không chỉ là sự tiện lợi mà còn là <strong>yếu tố sống còn</strong>. Khi thị trường biến động mạnh, bạn cần nạp thêm margin ngay lập tức để tránh bị call margin. Ngược lại, khi muốn rút lợi nhuận, bất kỳ sự chậm trễ nào cũng có thể khiến bạn lo lắng về sự an toàn của tiền.</p>
<p>Dưới đây là <strong>Top 3 sàn Forex</strong> được cộng đồng trader Việt Nam đánh giá cao nhất về tốc độ xử lý giao dịch tài chính trong năm 2026.</p>

<h2>#1. Exness — Rút tiền tức thì 24/7</h2>
<p><a href="/exness/">Exness</a> đang dẫn đầu thị trường về tốc độ rút tiền với công nghệ <strong>Instant Withdrawal</strong>. Đặc biệt với ví điện tử và USDT, lệnh rút được xử lý <strong>tự động trong vài giây</strong> mà không cần phê duyệt thủ công.</p>
<ul>
<li>⚡ <strong>Thời gian rút:</strong> Tức thì (ví điện tử, crypto) — 24h (ngân hàng)</li>
<li>💰 <strong>Phí rút:</strong> 0$ cho hầu hết phương thức</li>
<li>🏦 <strong>Phương thức:</strong> Ngân hàng VN, Skrill, Neteller, USDT, Perfect Money</li>
<li>📊 <strong>Giấy phép:</strong> FCA, CySEC, FSA</li>
</ul>

<h2>#2. XM — Rút nhanh kèm Bonus hấp dẫn</h2>
<p><a href="/xm/">XM</a> nổi tiếng với chính sách <strong>xử lý rút tiền trong 24 giờ làm việc</strong>. Với hơn 10 triệu khách hàng toàn cầu, XM đã xây dựng hệ thống xử lý tài chính tự động hóa cao.</p>
<ul>
<li>⚡ <strong>Thời gian rút:</strong> 24h làm việc</li>
<li>💰 <strong>Phí rút:</strong> 0$ (trên $200)</li>
<li>🏦 <strong>Phương thức:</strong> Ngân hàng VN, Skrill, Neteller, thẻ Visa/Master</li>
<li>🎁 <strong>Bonus:</strong> Thưởng nạp 50% (lên đến $500)</li>
</ul>

<h2>#3. IC Markets — Tốc độ xử lý cấp tổ chức</h2>
<p><a href="/ic-markets/">IC Markets</a> là sàn được các trader chuyên nghiệp và quỹ hedge fund ưa chuộng nhờ <strong>hạ tầng thanh khoản cấp tổ chức</strong> và tốc độ xử lý giao dịch tài chính chuyên nghiệp.</p>
<ul>
<li>⚡ <strong>Thời gian rút:</strong> 1-3 ngày làm việc (ngân hàng), tức thì (Skrill/Neteller)</li>
<li>💰 <strong>Phí rút:</strong> 0$ (ví điện tử), phí ngân hàng quốc tế áp dụng</li>
<li>🏦 <strong>Phương thức:</strong> Chuyển khoản quốc tế, Skrill, Neteller, USDT, PayPal</li>
<li>📊 <strong>Giấy phép:</strong> ASIC, CySEC, FSA</li>
</ul>

<h2>Bảng so sánh tốc độ nạp/rút 3 sàn</h2>
<table>
<thead><tr><th>Tiêu chí</th><th><a href="/exness/">Exness</a></th><th><a href="/xm/">XM</a></th><th><a href="/ic-markets/">IC Markets</a></th></tr></thead>
<tbody>
<tr><td>Rút ví điện tử</td><td><strong>Tức thì</strong></td><td>24h</td><td>Tức thì</td></tr>
<tr><td>Rút ngân hàng VN</td><td>24h</td><td>24h</td><td>1-3 ngày</td></tr>
<tr><td>Rút USDT</td><td><strong>Tức thì</strong></td><td>24h</td><td>24h</td></tr>
<tr><td>Phí rút</td><td><strong>$0</strong></td><td>$0 (trên $200)</td><td>$0 (ví điện tử)</td></tr>
<tr><td>Nạp tối thiểu</td><td><strong>$1</strong></td><td>$5</td><td>$200</td></tr>
<tr><td>Giấy phép</td><td>FCA, CySEC</td><td>CySEC, ASIC</td><td>ASIC, CySEC</td></tr>
</tbody>
</table>

<h2>Mẹo rút tiền nhanh và an toàn</h2>
<ol>
<li><strong>Xác minh tài khoản đầy đủ</strong> ngay khi đăng ký (KYC) để tránh bị yêu cầu bổ sung khi rút</li>
<li><strong>Rút cùng phương thức nạp</strong> — đây là quy định chống rửa tiền, vi phạm sẽ bị trì hoãn</li>
<li><strong>Rút vào giờ hành chính</strong> (8h-17h GMT+7) để được xử lý nhanh nhất</li>
<li><strong>Ưu tiên ví điện tử/USDT</strong> thay vì chuyển khoản ngân hàng nếu cần tiền gấp</li>
</ol>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Sàn nào rút tiền nhanh nhất tại Việt Nam?</h3>
<p>Exness hiện là sàn rút tiền nhanh nhất với công nghệ Instant Withdrawal, cho phép rút tức thì qua ví điện tử và USDT mà không cần phê duyệt thủ công.</p>
<h3>Có sàn nào tính phí rút tiền không?</h3>
<p>Đa số sàn uy tín không tính phí rút (hoặc phí rất thấp). Nếu sàn nào tính phí 5-10% mỗi lần rút, đó là dấu hiệu cảnh báo cần tránh xa.</p>
<h3>Rút tiền bị chậm trễ thì nên làm gì?</h3>
<p>Liên hệ bộ phận hỗ trợ qua Live Chat ngay lập tức. Nếu quá 3 ngày làm việc mà chưa nhận được tiền, hãy gửi khiếu nại đến cơ quan quản lý (FCA/ASIC/CySEC) của sàn đó.</p>

<p>Tốc độ nạp/rút tiền phản ánh trực tiếp uy tín và năng lực tài chính của sàn. Xem đầy đủ bảng xếp hạng tại <a href="/#ranking">Top 10 Sàn Forex Uy Tín Nhất 2026</a>.</p>`
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
console.log(`\n🎉 Batch 1 done: ${count}/3 articles upgraded`);
process.exit(0);
