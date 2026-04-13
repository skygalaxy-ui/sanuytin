import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const posts = [
    {
        title: "Lot size là gì? Cách tính lot chuẩn trong Forex",
        slug: "lot-size-la-gi-cach-tinh",
        category: "kien-thuc",
        tags: ["lot size", "forex", "người mới"],
        excerpt: "Tìm hiểu lot size trong Forex là gì, các loại lot (standard, mini, micro) và cách tính lot size phù hợp với vốn và mức rủi ro của bạn.",
        meta_title: "Lot Size Là Gì? Cách Tính Lot Chuẩn Trong Forex 2026",
        meta_description: "Tìm hiểu lot size trong Forex là gì, các loại lot (standard, mini, micro) và cách tính lot size phù hợp với vốn và mức rủi ro.",
        featured_image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
        content: `
<h2>1. Lot size trong Forex là gì?</h2>
<p><strong>Lot size</strong> là đơn vị đo lường khối lượng giao dịch trong thị trường Forex. Hiểu đơn giản, lot chính là "số lượng" tiền tệ mà bạn mua hoặc bán trong mỗi giao dịch.</p>
<p>Trong Forex, bạn không giao dịch từng đồng đô la riêng lẻ mà giao dịch theo các lô (lot) tiêu chuẩn. Việc hiểu rõ lot size giúp bạn <strong>kiểm soát rủi ro</strong> và tính toán chính xác lợi nhuận hoặc thua lỗ cho mỗi giao dịch.</p>

<h2>2. Các loại lot size phổ biến</h2>
<p>Có 4 loại lot size chính mà trader thường sử dụng:</p>

<table style="width:100%; border-collapse:collapse; margin:1.5em 0;">
<thead style="background:rgba(59,130,246,0.1);">
<tr><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Loại Lot</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Số đơn vị tiền tệ</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Giá trị 1 pip (EUR/USD)</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Phù hợp với</th></tr>
</thead>
<tbody>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);"><strong>Standard Lot (1.0)</strong></td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">100,000</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$10/pip</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Trader chuyên nghiệp, vốn lớn</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);"><strong>Mini Lot (0.1)</strong></td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">10,000</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$1/pip</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Trader trung cấp</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);"><strong>Micro Lot (0.01)</strong></td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">1,000</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$0.10/pip</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Người mới bắt đầu</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);"><strong>Nano Lot (0.001)</strong></td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">100</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$0.01/pip</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Tập luyện, test chiến lược</td></tr>
</tbody>
</table>

<h2>3. Mối quan hệ giữa lot size, pip và lợi nhuận</h2>
<p>Lot size quyết định trực tiếp <strong>giá trị mỗi pip</strong> trong giao dịch của bạn. Đây là mối quan hệ cốt lõi mà mọi trader cần nắm vững:</p>
<ul>
<li><strong>1 Standard Lot (1.0):</strong> Mỗi pip thay đổi = $10. Giá tăng 50 pips → Lãi $500</li>
<li><strong>1 Mini Lot (0.1):</strong> Mỗi pip thay đổi = $1. Giá tăng 50 pips → Lãi $50</li>
<li><strong>1 Micro Lot (0.01):</strong> Mỗi pip thay đổi = $0.10. Giá tăng 50 pips → Lãi $5</li>
</ul>
<p>Công thức tổng quát: <strong>Lợi nhuận/Thua lỗ = Số pip × Giá trị pip × Số lot</strong></p>

<figure style="margin:2em 0; text-align:center;">
<img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80" alt="Tính toán lot size trong Forex" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Tính toán lot size chính xác giúp kiểm soát rủi ro hiệu quả</figcaption>
</figure>

<h2>4. Cách tính lot size phù hợp với vốn</h2>
<p>Đây là công thức vàng mà mọi trader nên áp dụng:</p>
<p><strong>Lot size = (Vốn × % Rủi ro) ÷ (Stop Loss tính bằng pip × Giá trị 1 pip)</strong></p>

<p>Ví dụ thực tế:</p>
<ul>
<li>Vốn tài khoản: <strong>$1,000</strong></li>
<li>Rủi ro mỗi lệnh: <strong>2%</strong> = $20</li>
<li>Stop Loss: <strong>50 pips</strong></li>
<li>Giá trị 1 pip (micro lot): <strong>$0.10</strong></li>
<li>Lot size = $20 ÷ (50 × $0.10) = $20 ÷ $5 = <strong>0.04 lot (4 micro lot)</strong></li>
</ul>

<h2>5. Quy tắc chọn lot size theo vốn</h2>
<p>Dưới đây là bảng tham chiếu nhanh giúp bạn chọn lot size an toàn:</p>

<table style="width:100%; border-collapse:collapse; margin:1.5em 0;">
<thead style="background:rgba(59,130,246,0.1);">
<tr><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Số vốn</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Lot khuyên dùng</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Rủi ro/lệnh (2%)</th></tr>
</thead>
<tbody>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$100 - $500</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">0.01 (Micro)</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$2 - $10</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$500 - $2,000</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">0.01 - 0.05</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$10 - $40</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$2,000 - $10,000</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">0.05 - 0.2</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$40 - $200</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$10,000+</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">0.1 - 1.0</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">$200+</td></tr>
</tbody>
</table>

<h2>6. Sai lầm phổ biến khi chọn lot size</h2>
<ul>
<li><strong>Dùng lot quá lớn so với vốn:</strong> Đây là nguyên nhân #1 khiến tài khoản cháy nhanh. Với $500, giao dịch 0.5 lot nghĩa là mỗi pip thay đổi = $5, chỉ cần thua 100 pip là mất hết.</li>
<li><strong>Không tính lot theo % rủi ro:</strong> Nhiều người mở lệnh theo cảm tính, lúc 0.01 lot lúc 0.1 lot mà không có hệ thống.</li>
<li><strong>Tăng lot khi thua (Martingale):</strong> Tăng gấp đôi lot sau mỗi lần thua để gỡ - chiến lược này dẫn đến cháy tài khoản cấp số nhân.</li>
<li><strong>Không điều chỉnh lot theo biến động:</strong> Khi thị trường biến động mạnh (tin NFP, CPI), nên giảm lot size xuống 50% so với bình thường.</li>
</ul>

<h2>7. Lot size trên các sàn Forex phổ biến</h2>
<p>Mỗi sàn có quy định lot size tối thiểu khác nhau:</p>
<ul>
<li><strong>Exness:</strong> Tối thiểu 0.01 lot (Micro). Tài khoản Standard Cent cho phép giao dịch 0.01 cent lot (tương đương 10 đơn vị tiền tệ).</li>
<li><strong>XM:</strong> Tối thiểu 0.01 lot. Tài khoản Micro có lot size 1,000 đơn vị (thay vì 100,000 như Standard).</li>
<li><strong>Vantage:</strong> Tối thiểu 0.01 lot trên tất cả loại tài khoản.</li>
<li><strong>FBS:</strong> Tài khoản Cent cho phép giao dịch từ 0.01 cent lot, rất phù hợp cho người mới tập luyện.</li>
</ul>

<h2>8. Kết luận</h2>
<p>Lot size là một trong những khái niệm nền tảng quan trọng nhất trong Forex. Chọn lot size phù hợp giúp bạn:</p>
<ul>
<li>Kiểm soát rủi ro theo tỷ lệ % cố định</li>
<li>Bảo vệ tài khoản khỏi những biến động bất ngờ</li>
<li>Giao dịch bền vững trong dài hạn</li>
</ul>
<p><strong>Quy tắc vàng:</strong> Luôn tính lot size trước khi mở lệnh. Không bao giờ rủi ro quá 2% tài khoản cho một giao dịch. Nếu mới bắt đầu, hãy dùng micro lot (0.01) và tăng dần khi đã có kinh nghiệm.</p>
`
    },
    {
        title: "Margin là gì? Hiểu rõ Margin Call và Stop Out",
        slug: "margin-la-gi-margin-call",
        category: "kien-thuc",
        tags: ["margin", "margin call", "forex"],
        excerpt: "Giải thích chi tiết Margin trong Forex là gì, cách tính margin, cơ chế Margin Call và Stop Out, cùng cách phòng tránh cháy tài khoản.",
        meta_title: "Margin Là Gì? Giải Thích Margin Call Và Stop Out Đơn Giản",
        meta_description: "Tìm hiểu margin trong Forex là gì, cách tính margin, mức margin call, stop out và cách phòng tránh cháy tài khoản hiệu quả.",
        featured_image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&q=80",
        content: `
<h2>1. Margin trong Forex là gì?</h2>
<p><strong>Margin (ký quỹ)</strong> là số tiền mà sàn Forex yêu cầu bạn đặt cọc để mở và duy trì một vị thế giao dịch. Đây không phải là phí giao dịch, mà là khoản tiền bị "giữ lại" tạm thời trong tài khoản của bạn.</p>
<p>Hãy hình dung Margin giống như <strong>tiền đặt cọc thuê nhà</strong>: bạn không mất số tiền này, nhưng nó bị khóa trong suốt thời gian bạn giữ vị thế. Khi đóng lệnh, margin được trả lại cho bạn.</p>
<p>Margin liên quan trực tiếp đến đòn bẩy. Đòn bẩy càng cao thì margin yêu cầu càng thấp, và ngược lại.</p>

<h2>2. Các thuật ngữ margin quan trọng</h2>
<p>Trước khi đi sâu, bạn cần hiểu rõ các khái niệm sau:</p>
<ul>
<li><strong>Used Margin (Margin đã dùng):</strong> Tổng số tiền bị khóa cho tất cả các vị thế đang mở.</li>
<li><strong>Free Margin (Margin tự do):</strong> Số tiền còn lại có thể dùng để mở thêm lệnh mới. Free Margin = Equity - Used Margin.</li>
<li><strong>Equity (Vốn hiệu lực):</strong> Giá trị thực của tài khoản tại thời điểm hiện tại = Balance + Lãi/Lỗ chưa chốt.</li>
<li><strong>Margin Level:</strong> Tỷ lệ phần trăm giữa Equity và Used Margin. Margin Level = (Equity ÷ Used Margin) × 100%.</li>
</ul>

<h2>3. Cách tính Margin</h2>
<p>Công thức tính margin:</p>
<p><strong>Margin = (Lot size × Contract size) ÷ Đòn bẩy</strong></p>
<p>Ví dụ: Mở 1 lot EUR/USD với đòn bẩy 1:100:</p>
<ul>
<li>Margin = (1 × 100,000) ÷ 100 = <strong>$1,000</strong></li>
</ul>
<p>Với đòn bẩy 1:500:</p>
<ul>
<li>Margin = (1 × 100,000) ÷ 500 = <strong>$200</strong></li>
</ul>

<figure style="margin:2em 0; text-align:center;">
<img src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&q=80" alt="Biểu đồ margin trong giao dịch Forex" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Hiểu rõ margin giúp bạn quản lý vốn an toàn hơn</figcaption>
</figure>

<h2>4. Margin Call là gì?</h2>
<p><strong>Margin Call</strong> là cảnh báo từ sàn khi Margin Level của bạn giảm xuống dưới mức quy định (thường là 50-100%). Lúc này, tài khoản đang trong tình trạng nguy hiểm.</p>
<p>Khi bị Margin Call, bạn có 2 lựa chọn:</p>
<ul>
<li><strong>Nạp thêm tiền:</strong> Tăng Equity để nâng Margin Level lên trên mức an toàn.</li>
<li><strong>Đóng bớt lệnh:</strong> Giảm Used Margin bằng cách đóng các vị thế đang thua.</li>
</ul>

<h2>5. Stop Out là gì?</h2>
<p><strong>Stop Out</strong> là mức Margin Level mà sàn sẽ tự động đóng lệnh của bạn, bắt đầu từ lệnh thua nhiều nhất. Đây là cơ chế bảo vệ để ngăn tài khoản bạn về số âm.</p>
<p>Mức Stop Out phổ biến:</p>
<ul>
<li><strong>Exness:</strong> Stop Out 0% (rất thấp, cho phép bạn chịu drawdown lớn)</li>
<li><strong>XM:</strong> Margin Call 50%, Stop Out 20%</li>
<li><strong>Vantage:</strong> Margin Call 80%, Stop Out 50%</li>
</ul>

<h2>6. Ví dụ thực tế về Margin Call</h2>
<p>Tình huống: Bạn có $1,000, dùng đòn bẩy 1:100, mở 0.5 lot EUR/USD:</p>
<ul>
<li>Used Margin = (0.5 × 100,000) ÷ 100 = <strong>$500</strong></li>
<li>Free Margin = $1,000 - $500 = <strong>$500</strong></li>
<li>Margin Level = ($1,000 ÷ $500) × 100% = <strong>200%</strong> (an toàn)</li>
</ul>
<p>Nếu lệnh thua 400 pip (= -$200):</p>
<ul>
<li>Equity = $1,000 - $200 = <strong>$800</strong></li>
<li>Margin Level = ($800 ÷ $500) × 100% = <strong>160%</strong> (vẫn ổn)</li>
</ul>
<p>Nếu lệnh thua thêm, Equity còn $250:</p>
<ul>
<li>Margin Level = ($250 ÷ $500) × 100% = <strong>50%</strong> → <strong>MARGIN CALL!</strong></li>
</ul>

<h2>7. Cách phòng tránh Margin Call</h2>
<ul>
<li><strong>Luôn dùng Stop Loss:</strong> Đặt SL trước khi mở lệnh, giới hạn thua lỗ tối đa 2% tài khoản.</li>
<li><strong>Không dùng quá 5-10% margin:</strong> Giữ Used Margin dưới 10% tổng vốn để có đủ Free Margin chống biến động.</li>
<li><strong>Chọn đòn bẩy vừa phải:</strong> Đòn bẩy cao = margin thấp = dễ mở nhiều lệnh = dễ Margin Call. Nên dùng 1:50 đến 1:200.</li>
<li><strong>Theo dõi Margin Level:</strong> Giữ Margin Level trên 500% là an toàn. Dưới 200% là cảnh báo.</li>
</ul>

<h2>8. Kết luận</h2>
<p>Margin là cơ chế cốt lõi trong giao dịch Forex. Hiểu rõ Margin, Margin Call và Stop Out giúp bạn:</p>
<ul>
<li>Tính toán chính xác số lệnh có thể mở</li>
<li>Biết khi nào tài khoản đang nguy hiểm</li>
<li>Phòng tránh việc bị đóng lệnh tự động</li>
</ul>
<p><strong>Lời khuyên:</strong> Hãy luôn giữ Margin Level trên 300%, sử dụng Stop Loss cho mọi giao dịch và không bao giờ "all-in" toàn bộ vốn vào một giao dịch.</p>
`
    },
    {
        title: "Các phiên giao dịch Forex: London, New York, Tokyo",
        slug: "cac-phien-giao-dich-forex",
        category: "kien-thuc",
        tags: ["phiên giao dịch", "forex", "thời gian"],
        excerpt: "Tìm hiểu 4 phiên giao dịch Forex chính (Sydney, Tokyo, London, New York), giờ mở cửa theo giờ Việt Nam và phiên nào có lợi nhuận cao nhất.",
        meta_title: "Các Phiên Giao Dịch Forex Theo Giờ Việt Nam | Hướng Dẫn 2026",
        meta_description: "Tìm hiểu 4 phiên giao dịch Forex chính, giờ mở cửa theo giờ Việt Nam, phiên nào biến động mạnh nhất và cách chọn phiên phù hợp.",
        featured_image: "https://images.unsplash.com/photo-1504607798333-52a30db54a5d?w=800&q=80",
        content: `
<h2>1. Thị trường Forex hoạt động 24/5</h2>
<p>Khác với chứng khoán, thị trường <strong>Forex mở cửa 24 giờ/ngày, 5 ngày/tuần</strong> - từ sáng thứ Hai đến sáng thứ Bảy (giờ Việt Nam). Điều này có được nhờ sự luân phiên hoạt động của các trung tâm tài chính lớn nhất thế giới.</p>
<p>Tuy nhiên, không phải mọi thời điểm đều có thanh khoản và biến động như nhau. Hiểu rõ từng phiên giao dịch giúp bạn <strong>chọn thời điểm tốt nhất</strong> để giao dịch.</p>

<h2>2. Bốn phiên giao dịch chính (giờ Việt Nam)</h2>

<table style="width:100%; border-collapse:collapse; margin:1.5em 0;">
<thead style="background:rgba(59,130,246,0.1);">
<tr><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Phiên</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Giờ mở (VN)</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Giờ đóng (VN)</th><th style="padding:12px; text-align:left; border-bottom:2px solid rgba(255,255,255,0.1);">Đặc điểm</th></tr>
</thead>
<tbody>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);"><strong>Sydney</strong></td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">5:00</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">14:00</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Thanh khoản thấp, biến động nhẹ</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);"><strong>Tokyo (Á)</strong></td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">6:00</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">15:00</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">JPY, AUD mạnh. Biến động vừa</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);"><strong>London (Âu)</strong></td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">14:00</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">23:00</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">Thanh khoản cao nhất, EUR/GBP mạnh</td></tr>
<tr><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);"><strong>New York (Mỹ)</strong></td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">19:00</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">4:00 (+1)</td><td style="padding:12px; border-bottom:1px solid rgba(255,255,255,0.05);">USD mạnh, tin tức quan trọng</td></tr>
</tbody>
</table>

<h2>3. Phiên London - "Vua" của thị trường Forex</h2>
<p>Phiên London chiếm <strong>khoảng 35% tổng khối lượng giao dịch Forex toàn cầu</strong>, là phiên có thanh khoản và biến động mạnh nhất.</p>
<ul>
<li><strong>Thời gian vàng:</strong> 14:00 - 17:00 (giờ VN) khi phiên vừa mở, thường có breakout mạnh</li>
<li><strong>Cặp tiền nên giao dịch:</strong> EUR/USD, GBP/USD, EUR/GBP, USD/CHF</li>
<li><strong>Spread:</strong> Thấp nhất trong ngày nhờ thanh khoản cao</li>
</ul>

<h2>4. Phiên chồng lấn - cơ hội vàng</h2>
<p>Khi hai phiên hoạt động đồng thời, thanh khoản và biến động tăng đột biến:</p>
<ul>
<li><strong>Tokyo - London (14:00 - 15:00 VN):</strong> Biến động tăng nhẹ, phù hợp cho giao dịch cặp EUR/JPY, GBP/JPY</li>
<li><strong>London - New York (19:00 - 23:00 VN):</strong> Đây là <strong>khung giờ tốt nhất</strong> trong ngày. Thanh khoản cực cao, spread thấp, biến động mạnh. Hầu hết tin tức kinh tế quan trọng của Mỹ công bố trong khung giờ này.</li>
</ul>

<figure style="margin:2em 0; text-align:center;">
<img src="https://images.unsplash.com/photo-1504607798333-52a30db54a5d?w=800&q=80" alt="Phiên giao dịch Forex toàn cầu" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Các phiên giao dịch Forex luân phiên hoạt động 24/5</figcaption>
</figure>

<h2>5. Chọn phiên phù hợp với phong cách trading</h2>
<ul>
<li><strong>Scalper:</strong> Nên giao dịch phiên London hoặc London/New York overlap (14:00 - 23:00 VN). Spread thấp, biến động đủ để kiếm lời nhanh.</li>
<li><strong>Day Trader:</strong> London và New York. Mở lệnh đầu phiên London (14:00) và đóng trước khi hết phiên New York.</li>
<li><strong>Swing Trader:</strong> Linh hoạt hơn, có thể phân tích vào phiên Á và đặt lệnh chờ cho phiên Âu/Mỹ.</li>
<li><strong>Trader Việt Nam:</strong> Khung 14:00 - 23:00 là thuận tiện nhất vì trùng với giờ Âu/Mỹ và không quá khuya.</li>
</ul>

<h2>6. Những lưu ý quan trọng</h2>
<ul>
<li><strong>Tránh giao dịch lúc phiên mở/đóng:</strong> 5 phút đầu và cuối mỗi phiên thường có spread giãn rộng.</li>
<li><strong>Chú ý lịch tin tức:</strong> Các tin NFP, CPI, quyết định lãi suất Fed thường ra vào phiên New York (19:30 - 21:30 VN).</li>
<li><strong>Giờ mùa hè/đông:</strong> Châu Âu và Mỹ có daylight saving time, khiến giờ giao dịch lệch 1 tiếng so với bình thường.</li>
<li><strong>Thứ Hai sáng và Thứ Sáu chiều:</strong> Spread thường rộng, thanh khoản thấp. Nên hạn chế giao dịch.</li>
</ul>

<h2>7. Kết luận</h2>
<p>Chọn đúng phiên giao dịch là yếu tố quan trọng quyết định hiệu quả trading. Đối với trader Việt Nam, <strong>khung giờ vàng là 14:00 - 23:00</strong> (phiên London và nửa đầu phiên New York).</p>
<p><strong>Lời khuyên:</strong> Hãy test chiến lược của bạn trên tài khoản demo ở nhiều phiên khác nhau trong 2-4 tuần để tìm ra phiên phù hợp nhất với lịch trình và phong cách giao dịch của bạn.</p>
`
    }
];

// Schedule dates: Feb 18-27, 2026, each at 7:00 AM Vietnam time (UTC+7 = midnight UTC)
const baseDate = new Date('2026-02-18T00:00:00Z');

async function main() {
    console.log('📝 Seeding 3/10 bài viết (batch 1)...\n');

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const publishDate = new Date(baseDate.getTime() + i * 24 * 60 * 60 * 1000);

        const { data, error } = await sb.from('posts').insert([{
            ...post,
            author: 'Sàn Uy Tín',
            is_published: false,
            published_at: publishDate.toISOString(),
            scheduled_at: publishDate.toISOString(),
            featured_image_alt: post.title,
        }]).select('id').single();

        if (error) {
            console.log(`❌ "${post.title}": ${error.message}`);
        } else {
            console.log(`✅ "${post.title}" → Lên lịch ${publishDate.toISOString().split('T')[0]} (ID: ${data.id})`);
        }
    }
    console.log('\n✅ Batch 1 hoàn tất (3 bài). Chạy batch 2 tiếp...');
}

main().catch(console.error);
