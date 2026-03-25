import { createClient } from '@supabase/supabase-js';

const sb = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

// ===================== BAI 1: NAV ETF =====================
const navEtfContent = `
<p>Nếu bạn đang đầu tư hoặc cân nhắc mua chứng chỉ quỹ ETF tại Việt Nam, việc hiểu và theo dõi <strong>NAV (Net Asset Value - Giá trị tài sản ròng)</strong> là kỹ năng bắt buộc. NAV chính là "giá thật" của quỹ — khác với giá giao dịch trên sàn, và sự chênh lệch giữa hai con số này có thể khiến bạn mua đắt hoặc bán rẻ mà không hay biết.</p>

<p>Bài viết này hướng dẫn chi tiết cách theo dõi NAV, đánh giá hiệu suất quỹ ETF, và tránh các sai lầm phổ biến mà nhiều nhà đầu tư F0 mắc phải.</p>

<h2>NAV quỹ ETF là gì? Tại sao quan trọng với nhà đầu tư?</h2>

<p><strong>NAV (Net Asset Value)</strong> là tổng giá trị tài sản của quỹ trừ đi các khoản nợ, chia cho tổng số chứng chỉ quỹ đang lưu hành. Nói đơn giản, NAV cho bạn biết mỗi chứng chỉ quỹ "đáng giá" bao nhiêu dựa trên giá trị thực tế của danh mục đầu tư.</p>

<p><strong>Công thức:</strong> NAV = (Tổng tài sản quỹ - Tổng nợ phải trả) / Số chứng chỉ quỹ lưu hành</p>

<p>Ví dụ: Quỹ DCVFM VNDiamond có tổng tài sản 5.000 tỷ đồng, nợ 50 tỷ, và 200 triệu chứng chỉ quỹ. NAV = (5.000 - 50) / 200 = 24.750 đồng/CCQ.</p>

<p>NAV quan trọng vì:</p>
<ul>
<li><strong>Phản ánh giá trị thực:</strong> Giá ETF trên sàn có thể cao hơn (premium) hoặc thấp hơn (discount) NAV. Nếu bạn mua khi giá cao hơn NAV 2-3%, bạn đang mua đắt so với giá trị thực.</li>
<li><strong>Đo lường hiệu suất:</strong> So sánh NAV qua các thời kỳ giúp bạn đánh giá quỹ có hoạt động hiệu quả hay không.</li>
<li><strong>Quyết định mua/bán:</strong> Khi giá sàn thấp hơn NAV (discount), đó là cơ hội mua vào; khi premium quá cao, nên cân nhắc chốt lời.</li>
</ul>

<h2>Phân biệt NAV, iNAV và Giá sàn — 3 con số dễ nhầm lẫn</h2>

<p>Nhiều nhà đầu tư mới lẫn lộn giữa 3 khái niệm này:</p>

<table>
<thead><tr><th>Chỉ số</th><th>Ý nghĩa</th><th>Tần suất cập nhật</th><th>Dùng để làm gì</th></tr></thead>
<tbody>
<tr><td><strong>NAV chính thức</strong></td><td>Giá trị tài sản ròng cuối ngày</td><td>1 lần/ngày (sau 16:00)</td><td>Đánh giá hiệu suất dài hạn</td></tr>
<tr><td><strong>iNAV (Indicative NAV)</strong></td><td>NAV ước tính trong phiên giao dịch</td><td>Mỗi 15-60 giây</td><td>Xác định premium/discount trong ngày</td></tr>
<tr><td><strong>Giá sàn (Market Price)</strong></td><td>Giá giao dịch thực tế trên HoSE/HNX</td><td>Real-time</td><td>Đặt lệnh mua/bán</td></tr>
</tbody>
</table>

<p><strong>Mẹo thực tế:</strong> Trước khi đặt lệnh mua ETF, hãy so sánh giá sàn với iNAV. Nếu giá sàn cao hơn iNAV trên 1%, bạn đang trả phí premium quá cao — nên chờ giá điều chỉnh hoặc đặt lệnh giới hạn (LO) thay vì lệnh ATO/ATC.</p>

<h2>5 công cụ theo dõi NAV quỹ ETF tại Việt Nam (miễn phí)</h2>

<p>Dưới đây là 5 nguồn đáng tin cậy nhất để theo dõi NAV ETF tại thị trường Việt Nam:</p>

<h3>1. Website công ty quản lý quỹ</h3>
<p>Đây là nguồn chính xác nhất. Mỗi quỹ ETF đều công bố NAV hàng ngày trên website chính thức:</p>
<ul>
<li><strong>DCVFM</strong> (VNDiamond, VN30 ETF): dcvfm.com.vn</li>
<li><strong>SSIAM</strong> (VNFinLead, VNIT): ssiam.com.vn</li>
<li><strong>VinaCapital</strong> (FUEVN100): vinacapital.com</li>
</ul>

<h3>2. HoSE/HNX Fund Center</h3>
<p>Sở Giao dịch Chứng khoán TP.HCM cung cấp dữ liệu NAV và iNAV cho tất cả ETF niêm yết. Truy cập phần "Quỹ ETF" trên website hose.vn.</p>

<h3>3. App chứng khoán (SSI, VNDirect, TCBS)</h3>
<p>Hầu hết các app chứng khoán lớn đều hiển thị iNAV trong phiên giao dịch. SSI iBoard và VNDirect cho phép theo dõi premium/discount realtime.</p>

<h3>4. Fmarket.vn</h3>
<p>Nền tảng chuyên về quỹ đầu tư, cung cấp biểu đồ NAV lịch sử, so sánh hiệu suất giữa các quỹ, và phân tích danh mục chi tiết.</p>

<h3>5. Simplize.vn</h3>
<p>Công cụ phân tích tài chính với dữ liệu ETF đầy đủ, bao gồm biểu đồ NAV, tracking error, và so sánh với chỉ số tham chiếu.</p>

<h2>Cách đánh giá hiệu suất quỹ ETF đúng cách</h2>

<p>Đánh giá hiệu suất ETF không chỉ đơn giản là nhìn NAV tăng hay giảm. Bạn cần xem xét 4 yếu tố sau:</p>

<h3>1. Tổng lợi nhuận (Total Return)</h3>
<p>Bao gồm cả tăng giá NAV và cổ tức/lãi được phân phối. Nhiều ETF như E1VFVN30 phân phối cổ tức hàng năm — nếu chỉ nhìn NAV sẽ bỏ sót phần lợi nhuận này.</p>

<h3>2. Tracking Error — Sai số bám sát chỉ số</h3>
<p>ETF được thiết kế để bám sát chỉ số tham chiếu (VN30, VNDiamond...). <strong>Tracking error</strong> đo độ lệch giữa hiệu suất quỹ và chỉ số. Tracking error càng thấp, quỹ càng tốt.</p>
<ul>
<li><strong>Tracking error < 0,5%/năm:</strong> Xuất sắc</li>
<li><strong>0,5% - 1%:</strong> Chấp nhận được</li>
<li><strong>> 1%:</strong> Cần xem xét lại</li>
</ul>

<h3>3. Tỷ lệ chi phí (Expense Ratio)</h3>
<p>Phí quản lý quỹ ăn mòn lợi nhuận theo thời gian. ETF Việt Nam có phí từ 0,5% đến 0,85%/năm. Trong dài hạn, chênh lệch 0,3% phí có thể tạo ra khác biệt lớn nhờ hiệu ứng lãi kép.</p>

<h3>4. So sánh với benchmark phù hợp</h3>
<p>Đừng so sánh ETF VN30 với VNIndex — hai chỉ số này khác nhau. Hãy luôn so với chỉ số tham chiếu chính xác của quỹ.</p>

<h2>So sánh hiệu suất các ETF phổ biến tại Việt Nam 2026</h2>

<table>
<thead><tr><th>Quỹ ETF</th><th>Chỉ số tham chiếu</th><th>Phí quản lý</th><th>AUM (tỷ đồng)</th><th>Tracking Error</th></tr></thead>
<tbody>
<tr><td><strong>E1VFVN30</strong></td><td>VN30-TRI</td><td>0,65%/năm</td><td>~8.500</td><td>0,3%</td></tr>
<tr><td><strong>FUEVFVND</strong></td><td>VNDiamond</td><td>0,75%/năm</td><td>~5.200</td><td>0,4%</td></tr>
<tr><td><strong>FUESSV50</strong></td><td>VNFinSelect</td><td>0,85%/năm</td><td>~1.800</td><td>0,5%</td></tr>
<tr><td><strong>FUESSVFL</strong></td><td>VNFinLead</td><td>0,80%/năm</td><td>~2.100</td><td>0,45%</td></tr>
<tr><td><strong>FUEVN100</strong></td><td>VNFIN100</td><td>0,50%/năm</td><td>~900</td><td>0,6%</td></tr>
</tbody>
</table>

<p><strong>Nhận xét:</strong> E1VFVN30 có tracking error tốt nhất (0,3%) nhờ quy mô lớn và thanh khoản cao. FUEVN100 có phí thấp nhất (0,5%) nhưng tracking error cao hơn do thanh khoản còn hạn chế.</p>

<h2>5 sai lầm phổ biến khi đánh giá hiệu suất ETF</h2>

<p>Dưới đây là những lỗi mà cả nhà đầu tư mới lẫn có kinh nghiệm thường mắc phải:</p>

<p><strong>Sai lầm 1: Chỉ nhìn giá sàn, bỏ qua NAV</strong><br/>
Giá sàn có thể bị ảnh hưởng bởi cung cầu tạm thời. Trong ngày T+2, giá có thể chênh lệch 1-2% so với NAV thực tế. Luôn kiểm tra NAV cuối ngày trước khi đánh giá hiệu suất.</p>

<p><strong>Sai lầm 2: So sánh ETF ngắn hạn (1-3 tháng)</strong><br/>
ETF là công cụ đầu tư dài hạn. Hiệu suất 1-3 tháng chịu ảnh hưởng nhiều bởi biến động ngắn hạn và không phản ánh chất lượng quỹ. Nên đánh giá tối thiểu 1 năm, lý tưởng là 3-5 năm.</p>

<p><strong>Sai lầm 3: Không tính cổ tức vào lợi nhuận</strong><br/>
Khi ETF phân phối cổ tức, NAV giảm tương ứng. Nếu chỉ nhìn biến động NAV mà bỏ qua cổ tức đã nhận, bạn sẽ đánh giá thấp hiệu suất thực tế.</p>

<p><strong>Sai lầm 4: Mua ETF giá "rẻ" mà không xét NAV</strong><br/>
ETF có giá 15.000đ không "rẻ" hơn ETF giá 30.000đ. Giá tuyệt đối không có ý nghĩa — điều quan trọng là tỷ lệ premium/discount so với NAV và triển vọng chỉ số tham chiếu.</p>

<p><strong>Sai lầm 5: Bỏ qua phí và thuế</strong><br/>
Lợi nhuận thực = (NAV cuối kỳ - NAV đầu kỳ + cổ tức) - phí quản lý - phí giao dịch - thuế thu nhập cá nhân (0,1% giá bán). Nhiều nhà đầu tư quên trừ các khoản này khi tính lợi nhuận.</p>

<h2>Hướng dẫn thực hành: Theo dõi NAV ETF hàng tuần trong 5 phút</h2>

<p>Bạn không cần theo dõi NAV mỗi ngày. Đây là quy trình 5 phút mỗi tuần dành cho nhà đầu tư bận rộn:</p>

<ol>
<li><strong>Thứ 2:</strong> Truy cập website quỹ, ghi nhận NAV cuối tuần trước</li>
<li><strong>So sánh:</strong> NAV tuần này vs tuần trước → tính % thay đổi</li>
<li><strong>Đối chiếu:</strong> So sánh % thay đổi NAV với % thay đổi chỉ số tham chiếu</li>
<li><strong>Kiểm tra premium/discount:</strong> Giá đóng cửa thứ 6 vs NAV → nếu premium > 1,5%, cân nhắc chờ</li>
<li><strong>Ghi chép:</strong> Cập nhật vào Google Sheets cá nhân để theo dõi xu hướng dài hạn</li>
</ol>

<h2>Câu hỏi thường gặp (FAQ)</h2>

<h3>NAV được cập nhật khi nào?</h3>
<p>NAV chính thức được công bố sau khi kết thúc phiên giao dịch, thường từ 16:00 đến 18:00 cùng ngày hoặc sáng hôm sau. iNAV được cập nhật realtime trong phiên giao dịch.</p>

<h3>Nên mua ETF khi premium hay discount?</h3>
<p>Lý tưởng nhất là mua khi giá sàn thấp hơn hoặc bằng NAV (discount hoặc par). Tránh mua khi premium trên 1,5% vì bạn đang trả thêm phí vô hình.</p>

<h3>ETF nào phù hợp cho người mới bắt đầu?</h3>
<p>E1VFVN30 là lựa chọn an toàn nhất cho người mới nhờ thanh khoản cao, tracking error thấp, và đa dạng hóa 30 cổ phiếu lớn nhất thị trường.</p>

<h3>Có nên đầu tư ETF khi thị trường giảm?</h3>
<p>Thị trường giảm có thể là cơ hội mua vào nếu bạn đầu tư dài hạn. Chiến lược DCA (mua đều đặn hàng tháng) giúp giảm rủi ro timing và tận dụng giá thấp để mua thêm chứng chỉ quỹ.</p>
`;

// ===================== BAI 2: TOP 10 APP =====================
const top10AppContent = `
<p>Với hơn 20 công ty chứng khoán (CTCK) tại Việt Nam cung cấp app giao dịch, việc chọn đúng ứng dụng phù hợp là bước đầu tiên quyết định trải nghiệm đầu tư của bạn. App tốt không chỉ giúp đặt lệnh nhanh mà còn cung cấp công cụ phân tích, tin tức realtime, và giao diện thân thiện — giúp bạn ra quyết định đầu tư thông minh hơn.</p>

<p>Bài viết này so sánh chi tiết <strong>10 app đầu tư chứng khoán phổ biến nhất</strong> tại Việt Nam năm 2026, dựa trên 6 tiêu chí quan trọng nhất.</p>

<h2>6 tiêu chí chọn app đầu tư chứng khoán</h2>

<p>Trước khi so sánh từng app, hãy hiểu 6 tiêu chí đánh giá:</p>

<ol>
<li><strong>Phí giao dịch:</strong> Phí mua/bán cổ phiếu — yếu tố ảnh hưởng trực tiếp đến lợi nhuận, đặc biệt với nhà đầu tư giao dịch thường xuyên.</li>
<li><strong>Tốc độ & Độ ổn định:</strong> App có lag không? Có bị sập khi thị trường biến động mạnh không?</li>
<li><strong>Công cụ phân tích:</strong> Biểu đồ kỹ thuật, bộ lọc cổ phiếu, dữ liệu tài chính doanh nghiệp.</li>
<li><strong>Giao diện & Trải nghiệm:</strong> Dễ sử dụng cho người mới? Có chế độ dark mode? Thao tác đặt lệnh bao nhiêu bước?</li>
<li><strong>Tính năng nâng cao:</strong> Copy trading, giao dịch phái sinh, margin, tín hiệu AI.</li>
<li><strong>Hỗ trợ khách hàng:</strong> Livechat, hotline, phản hồi nhanh khi có vấn đề về tài khoản.</li>
</ol>

<h2>Bảng so sánh tổng quan Top 10 App chứng khoán 2026</h2>

<table>
<thead><tr><th>App</th><th>CTCK</th><th>Phí GD</th><th>Tốc độ</th><th>Phân tích</th><th>UX</th><th>Điểm TB</th></tr></thead>
<tbody>
<tr><td><strong>SSI iBoard</strong></td><td>SSI</td><td>0,15%</td><td>9/10</td><td>9/10</td><td>8/10</td><td><strong>8,7</strong></td></tr>
<tr><td><strong>VPS SmartOne</strong></td><td>VPS</td><td>0,15%</td><td>9/10</td><td>8/10</td><td>9/10</td><td><strong>8,5</strong></td></tr>
<tr><td><strong>TCBS</strong></td><td>Techcom Securities</td><td>0,15%</td><td>8/10</td><td>8/10</td><td>9/10</td><td><strong>8,4</strong></td></tr>
<tr><td><strong>VNDirect</strong></td><td>VNDirect</td><td>0,15-0,25%</td><td>8/10</td><td>9/10</td><td>7/10</td><td><strong>8,2</strong></td></tr>
<tr><td><strong>MBS Trade</strong></td><td>MB Securities</td><td>0,15%</td><td>8/10</td><td>7/10</td><td>8/10</td><td><strong>7,8</strong></td></tr>
<tr><td><strong>HSC Trade</strong></td><td>HSC</td><td>0,15%</td><td>8/10</td><td>8/10</td><td>7/10</td><td><strong>7,7</strong></td></tr>
<tr><td><strong>Pinetree</strong></td><td>Pinetree</td><td><strong>0%</strong></td><td>7/10</td><td>7/10</td><td>8/10</td><td><strong>7,5</strong></td></tr>
<tr><td><strong>DNSE</strong></td><td>DNSE</td><td><strong>0%</strong></td><td>7/10</td><td>6/10</td><td>8/10</td><td><strong>7,3</strong></td></tr>
<tr><td><strong>Mirae Asset</strong></td><td>Mirae Asset VN</td><td>0,15%</td><td>7/10</td><td>7/10</td><td>7/10</td><td><strong>7,0</strong></td></tr>
<tr><td><strong>KIS Vietnam</strong></td><td>KIS</td><td>0,18%</td><td>7/10</td><td>6/10</td><td>7/10</td><td><strong>6,8</strong></td></tr>
</tbody>
</table>

<h2>Phân tích chi tiết từng app</h2>

<h3>1. SSI iBoard — Toàn diện nhất cho mọi cấp độ</h3>
<p><strong>Điểm nổi bật:</strong> Công cụ phân tích kỹ thuật mạnh nhất thị trường với hơn 30 chỉ báo, bộ lọc cổ phiếu thông minh, và dữ liệu tài chính doanh nghiệp chi tiết. SSI là CTCK lớn nhất Việt Nam với hơn 2 triệu tài khoản.</p>
<p><strong>Phù hợp cho:</strong> Nhà đầu tư muốn phân tích chuyên sâu, cả ngắn hạn và dài hạn.</p>
<p><strong>Hạn chế:</strong> Giao diện hơi phức tạp cho người mới bắt đầu.</p>

<h3>2. VPS SmartOne — Tốc độ và trải nghiệm tốt nhất</h3>
<p><strong>Điểm nổi bật:</strong> Giao diện hiện đại, mượt mà nhất trong các app chứng khoán VN. Đặt lệnh chỉ 2 chạm, hỗ trợ Face ID/Touch ID. Tin nhắn thông báo biến động realtime.</p>
<p><strong>Phù hợp cho:</strong> Nhà đầu tư trẻ, ưu tiên trải nghiệm người dùng.</p>
<p><strong>Hạn chế:</strong> Công cụ phân tích chưa phong phú bằng SSI.</p>

<h3>3. TCBS — Đầu tư đa kênh (cổ phiếu + trái phiếu + tiết kiệm)</h3>
<p><strong>Điểm nổi bật:</strong> Nền tảng tài chính tích hợp — vừa giao dịch cổ phiếu, vừa mua trái phiếu online, vừa gửi tiết kiệm lãi cao qua Techcombank. Phân tích AI với robot tư vấn TCInvest.</p>
<p><strong>Phù hợp cho:</strong> Nhà đầu tư muốn quản lý tài chính tổng thể trên 1 app.</p>
<p><strong>Hạn chế:</strong> Phí giao dịch phái sinh cao hơn trung bình.</p>

<h3>4. VNDirect — Dữ liệu và research mạnh</h3>
<p><strong>Điểm nổi bật:</strong> Báo cáo phân tích chuyên sâu từ đội ngũ research lớn nhất VN, hệ thống cảnh báo giá thông minh, và tích hợp tin tức tài chính realtime từ Bloomberg.</p>
<p><strong>Phù hợp cho:</strong> Nhà đầu tư quan tâm đến fundamental analysis.</p>
<p><strong>Hạn chế:</strong> Giao diện mobile chưa mượt bằng VPS hay TCBS.</p>

<h3>5. Pinetree & DNSE — Miễn phí giao dịch 100%</h3>
<p><strong>Điểm nổi bật:</strong> Cả hai đều miễn phí hoàn toàn phí giao dịch — lựa chọn tối ưu chi phí cho nhà đầu tư mới hoặc giao dịch nhiều lệnh nhỏ.</p>
<p><strong>Phù hợp cho:</strong> Người mới bắt đầu muốn thử nghiệm với vốn nhỏ.</p>
<p><strong>Hạn chế:</strong> Công cụ phân tích cơ bản hơn, hỗ trợ khách hàng chậm hơn các CTCK lớn.</p>

<h2>App nào phù hợp với từng loại nhà đầu tư?</h2>

<table>
<thead><tr><th>Loại nhà đầu tư</th><th>App khuyên dùng</th><th>Lý do</th></tr></thead>
<tbody>
<tr><td><strong>Mới bắt đầu (F0)</strong></td><td>VPS SmartOne hoặc TCBS</td><td>Giao diện dễ dùng, có hướng dẫn, mở tài khoản nhanh</td></tr>
<tr><td><strong>Tiết kiệm phí</strong></td><td>Pinetree hoặc DNSE</td><td>Phí 0%, phù hợp giao dịch nhiều lệnh nhỏ</td></tr>
<tr><td><strong>Phân tích chuyên sâu</strong></td><td>SSI iBoard</td><td>Công cụ phân tích mạnh nhất, dữ liệu đầy đủ nhất</td></tr>
<tr><td><strong>Đầu tư đa kênh</strong></td><td>TCBS</td><td>Cổ phiếu + trái phiếu + tiết kiệm trên 1 app</td></tr>
<tr><td><strong>Day trading</strong></td><td>VPS SmartOne hoặc SSI</td><td>Tốc độ nhanh, đặt lệnh realtime, không bị lag</td></tr>
</tbody>
</table>

<h2>Hướng dẫn mở tài khoản chứng khoán online trong 10 phút</h2>

<p>Hầu hết các CTCK đều hỗ trợ mở tài khoản hoàn toàn online (eKYC) với quy trình tương tự:</p>

<ol>
<li><strong>Tải app:</strong> Download app CTCK viết chọn từ App Store hoặc Google Play</li>
<li><strong>Chuẩn bị:</strong> CCCD/CMND gắn chip, selfie khuôn mặt, số điện thoại chính chủ</li>
<li><strong>Đăng ký:</strong> Điền thông tin cá nhân, xác thực NFC bằng CCCD gắn chip</li>
<li><strong>Ký hợp đồng:</strong> Ký điện tử ngay trên app</li>
<li><strong>Nạp tiền:</strong> Chuyển khoản từ tài khoản ngân hàng đã liên kết</li>
<li><strong>Giao dịch:</strong> Bắt đầu mua/bán cổ phiếu ngay sau khi tiền về tài khoản</li>
</ol>

<p><strong>Lưu ý quan trọng:</strong> Luôn mở tài khoản trực tiếp trên app chính thức của CTCK. Tuyệt đối không mở qua link do người lạ gửi hoặc các website không rõ nguồn gốc để tránh rủi ro lừa đảo.</p>

<h2>5 lưu ý an toàn khi sử dụng app đầu tư</h2>

<ol>
<li><strong>Bật xác thực 2 lớp (2FA):</strong> Bảo vệ tài khoản bằng OTP hoặc ứng dụng authenticator</li>
<li><strong>Không chia sẻ mật khẩu:</strong> CTCK và nhân viên không bao giờ hỏi mật khẩu qua điện thoại</li>
<li><strong>Cập nhật app thường xuyên:</strong> Bản cập nhật thường vá lỗi bảo mật</li>
<li><strong>Kiểm tra giấy phép:</strong> Chỉ dùng app của CTCK được cấp phép bởi UBCKNN</li>
<li><strong>Cảnh giác app giả:</strong> Kiểm tra tên developer trên store phải trùng với tên CTCK chính thức</li>
</ol>

<h2>Câu hỏi thường gặp (FAQ)</h2>

<h3>App nào có phí giao dịch rẻ nhất?</h3>
<p>Pinetree và DNSE hiện miễn phí 100% phí giao dịch cổ phiếu cơ sở. Các CTCK lớn (SSI, VPS, TCBS) thường thu phí 0,15% nhưng có chương trình ưu đãi giảm phí cho khách hàng mới.</p>

<h3>Người mới nên chọn SSI hay VPS?</h3>
<p>Nếu ưu tiên trải nghiệm đơn giản, dễ sử dụng: chọn VPS SmartOne. Nếu muốn học phân tích kỹ thuật ngay từ đầu: chọn SSI iBoard. Cả hai đều là lựa chọn tốt với uy tín hàng đầu thị trường.</p>

<h3>Có nên dùng nhiều app cùng lúc?</h3>
<p>Có thể mở tài khoản ở 2-3 CTCK để so sánh trải nghiệm và tận dụng ưu đãi phí. Tuy nhiên, nên tập trung giao dịch chính trên 1 app để quản lý danh mục hiệu quả hơn.</p>

<h3>App chứng khoán có an toàn không?</h3>
<p>Các app từ CTCK được cấp phép bởi Ủy ban Chứng khoán Nhà nước (UBCKNN) đều tuân thủ quy định bảo mật nghiêm ngặt. Tiền và cổ phiếu của bạn được lưu ký tại VSD (Trung tâm Lưu ký Chứng khoán), hoàn toàn tách biệt với tài sản của CTCK.</p>
`;

// ===================== UPDATE =====================
const now = new Date().toISOString();

console.log('=== PHASE 1: Rewriting 2 critical thin posts ===');
console.log('');

// Update post 1: NAV ETF
const { error: err1 } = await sb
    .from('posts')
    .update({
        content: navEtfContent.trim(),
        meta_description: 'Huong dan chi tiet cach theo doi NAV quy ETF tai Viet Nam. So sanh iNAV, NAV, gia san. 5 cong cu mien phi va 5 sai lam pho bien khi danh gia hieu suat quy.',
        updated_at: now,
    })
    .eq('id', '35ef6ff5-c485-4994-952c-017c7f24dd92');

if (err1) {
    console.log('[FAIL] Bai 1 (NAV ETF): ' + err1.message);
} else {
    const plain1 = navEtfContent.replace(/<[^>]*>/g, '').trim();
    const wc1 = plain1.split(/\s+/).filter(w => w.length > 0).length;
    console.log('[OK] Bai 1: Cach theo doi NAV va hieu suat quy ETF');
    console.log('     Words: 225 -> ' + wc1);
    console.log('     H2: ' + (navEtfContent.match(/<h2>/gi) || []).length);
    console.log('     H3: ' + (navEtfContent.match(/<h3>/gi) || []).length);
    console.log('     Tables: ' + (navEtfContent.match(/<table>/gi) || []).length);
}

console.log('');

// Update post 2: Top 10 App
const { error: err2 } = await sb
    .from('posts')
    .update({
        content: top10AppContent.trim(),
        meta_description: 'So sanh chi tiet Top 10 app dau tu chung khoan tai Viet Nam 2026: SSI, VPS, TCBS, VNDirect, Pinetree. Bang so sanh phi, toc do, cong cu phan tich va app phu hop cho tung nha dau tu.',
        focus_keyword: 'app dau tu chung khoan Viet Nam',
        updated_at: now,
    })
    .eq('id', '75b06b63-a704-41b2-b8d1-5718c3e36517');

if (err2) {
    console.log('[FAIL] Bai 2 (Top 10 App): ' + err2.message);
} else {
    const plain2 = top10AppContent.replace(/<[^>]*>/g, '').trim();
    const wc2 = plain2.split(/\s+/).filter(w => w.length > 0).length;
    console.log('[OK] Bai 2: So sanh Top 10 App dau tu chung khoan VN 2026');
    console.log('     Words: 291 -> ' + wc2);
    console.log('     H2: ' + (top10AppContent.match(/<h2>/gi) || []).length);
    console.log('     H3: ' + (top10AppContent.match(/<h3>/gi) || []).length);
    console.log('     Tables: ' + (top10AppContent.match(/<table>/gi) || []).length);
}

console.log('');
console.log('Phase 1 complete!');
