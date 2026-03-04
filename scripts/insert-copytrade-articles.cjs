const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4'
);

const posts = [
    {
        title: 'Hướng Dẫn Copy Trade Exness Từ A-Z: Cách Sao Chép Giao Dịch Kiếm Lời 2026',
        slug: 'huong-dan-copy-trade-exness',
        meta_title: 'Copy Trade Exness 2026: Hướng Dẫn Chi Tiết Từ A-Z Cho Người Mới',
        meta_description: '✅ Hướng dẫn copy trade Exness từng bước cho người mới 2026. Cách chọn Strategy Provider, phí copy, mức nạp tối thiểu $10, mẹo tối ưu lợi nhuận trên Exness Social Trading.',
        excerpt: 'Hướng dẫn chi tiết cách copy trade trên Exness Social Trading từ A-Z: đăng ký, chọn Strategy Provider, thiết lập copy, quản lý rủi ro và mẹo tối ưu lợi nhuận cho trader Việt Nam 2026.',
        featured_image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=630&fit=crop&q=80',
        featured_image_alt: 'Hướng dẫn copy trade Exness Social Trading cho trader Việt Nam',
        category_id: 'ac86a067-5518-42d7-8045-a92a75f4a15f',
        tags: ['exness', 'copy trade', 'social trading', 'hướng dẫn', 'sàn forex'],
        is_published: false,
        scheduled_at: '2026-03-13T05:00:00Z', // 12:00 PM VN 13/03 (Thu 6)
        content: `<article>
<p><strong>Exness Social Trading</strong> (Copy Trade Exness) là tính năng cho phép bạn sao chép tự động giao dịch từ các trader chuyên nghiệp — được hàng trăm nghìn trader Việt Nam tin dùng nhờ <strong>nạp/rút siêu nhanh</strong>, vốn tối thiểu chỉ <strong>$10</strong>, và spread cực thấp. Bài viết này sẽ hướng dẫn bạn từng bước để bắt đầu copy trade trên Exness một cách hiệu quả nhất.</p>

<h2>📌 Copy Trade Exness Là Gì?</h2>

<p><strong>Exness Social Trading</strong> là nền tảng copy trading chính thức của Exness, cho phép 2 loại người dùng:</p>

<ul>
<li><strong>Investor (Nhà đầu tư):</strong> Người sao chép giao dịch từ Strategy Provider</li>
<li><strong>Strategy Provider (SP):</strong> Trader chuyên nghiệp chia sẻ chiến lược để kiếm hoa hồng</li>
</ul>

<p>Khi Strategy Provider mở lệnh, tài khoản investor tự động mở lệnh tương tự theo tỷ lệ vốn. Toàn bộ quá trình được thực hiện <strong>24/7 tự động</strong> trên ứng dụng Exness Trade.</p>

<h3>Tại sao Exness phổ biến nhất cho trader Việt?</h3>

<table>
<thead>
<tr><th>Ưu điểm</th><th>Chi tiết</th></tr>
</thead>
<tbody>
<tr><td><strong>Vốn cực thấp</strong></td><td>Chỉ cần $10 để bắt đầu copy</td></tr>
<tr><td><strong>Nạp/rút nhanh</strong></td><td>Hỗ trợ ngân hàng Việt (Vietcombank, BIDV, Techcombank...)</td></tr>
<tr><td><strong>Spread thấp</strong></td><td>Từ 0.0 pips trên tài khoản Raw Spread</td></tr>
<tr><td><strong>Giấy phép uy tín</strong></td><td>FCA (Anh), CySEC (EU), FSA, FSCA</td></tr>
<tr><td><strong>Hỗ trợ VN</strong></td><td>Tiếng Việt, CSKH 24/7</td></tr>
<tr><td><strong>Rút tiền tức thì</strong></td><td>Rút về ví điện tử/ngân hàng trong vài phút</td></tr>
</tbody>
</table>

<h2>📱 Hướng Dẫn Copy Trade Exness Từng Bước</h2>

<h3>Bước 1: Tải ứng dụng Exness Trade</h3>

<p>Exness Social Trading hoạt động trên ứng dụng <strong>Exness Trade</strong> (không phải Exness Trader — khác nhau!):</p>
<ul>
<li><strong>iOS:</strong> Tải từ App Store → tìm "Exness Trade"</li>
<li><strong>Android:</strong> Tải từ Google Play → tìm "Exness Trade"</li>
</ul>

<h3>Bước 2: Đăng ký tài khoản Exness</h3>

<p>Nếu chưa có tài khoản:</p>
<ol>
<li>Mở ứng dụng Exness Trade → <strong>Đăng ký</strong></li>
<li>Nhập email, mật khẩu, quốc gia (Việt Nam)</li>
<li><strong>Xác minh danh tính</strong> (KYC): Upload CMND/CCCD + ảnh selfie</li>
<li>Chờ phê duyệt (thường 1-24 giờ)</li>
</ol>

<h3>Bước 3: Nạp tiền</h3>

<p>Nạp tối thiểu <strong>$10</strong> để bắt đầu. Phương thức phổ biến cho Việt Nam:</p>
<ul>
<li><strong>Internet Banking:</strong> Vietcombank, BIDV, Techcombank, MB Bank...</li>
<li><strong>Ví điện tử:</strong> Skrill, Neteller, Perfect Money</li>
<li><strong>Thẻ Visa/Mastercard</strong></li>
</ul>
<p>💡 <strong>Mẹo:</strong> Nạp qua Internet Banking để tránh phí chuyển đổi tiền tệ.</p>

<h3>Bước 4: Chọn Strategy Provider</h3>

<p>Đây là bước <strong>quan trọng nhất</strong>. Trong tab <strong>"Social Trading"</strong> trên ứng dụng, bạn sẽ thấy danh sách các Strategy Provider. Đánh giá dựa trên:</p>

<table>
<thead>
<tr><th>Tiêu chí</th><th>Mức khuyến nghị</th><th>Ý nghĩa</th></tr>
</thead>
<tbody>
<tr><td><strong>Lợi nhuận (Return)</strong></td><td>10-30%/tháng</td><td>Ổn định hơn 50%+ rồi -40%</td></tr>
<tr><td><strong>Mức rủi ro (Risk Score)</strong></td><td>1-5/10</td><td>Càng thấp càng an toàn</td></tr>
<tr><td><strong>Drawdown tối đa</strong></td><td>≤ 30%</td><td>Mức lỗ lớn nhất từng gặp</td></tr>
<tr><td><strong>Số ngày hoạt động</strong></td><td>≥ 90 ngày</td><td>Đã qua nhiều chu kỳ thị trường</td></tr>
<tr><td><strong>Số người copy</strong></td><td>≥ 50 copiers</td><td>Được cộng đồng tin tưởng</td></tr>
<tr><td><strong>Hoa hồng (Commission)</strong></td><td>0-30%</td><td>% lợi nhuận bạn phải trả cho SP</td></tr>
</tbody>
</table>

<p>⚠️ <strong>Tránh chọn SP có:</strong> Drawdown > 50%, hoạt động < 30 ngày, lợi nhuận quá cao (>100%/tháng — dấu hiệu của Martingale/đánh bạo).</p>

<h3>Bước 5: Thiết lập Copy</h3>

<ol>
<li>Nhấn vào Strategy Provider bạn chọn</li>
<li>Nhấn <strong>"Bắt đầu sao chép"</strong></li>
<li>Chọn số tiền đầu tư (tối thiểu $10)</li>
<li>Đặt <strong>Stop Loss</strong> (ví dụ: 60% — tức sẽ dừng khi vốn giảm 40%)</li>
<li>Xác nhận → Hệ thống bắt đầu sao chép tự động!</li>
</ol>

<h3>Bước 6: Theo dõi & Quản lý</h3>

<ul>
<li>Kiểm tra hiệu suất <strong>ít nhất 1 lần/tuần</strong></li>
<li>Nếu SP thua lỗ liên tục 2-3 tuần → <strong>dừng copy và chuyển sang SP khác</strong></li>
<li>Có thể <strong>dừng sao chép bất cứ lúc nào</strong> → vốn + lãi/lỗ được trả về tài khoản</li>
</ul>

<h2>💰 Phí Copy Trade Exness</h2>

<table>
<thead>
<tr><th>Loại phí</th><th>Mức phí</th><th>Ghi chú</th></tr>
</thead>
<tbody>
<tr><td><strong>Phí sao chép</strong></td><td>Do SP đặt (0-50% lợi nhuận)</td><td>Chỉ thu khi bạn có LỢI NHUẬN</td></tr>
<tr><td><strong>Spread</strong></td><td>Từ 0.0 pips</td><td>Tùy loại tài khoản SP dùng</td></tr>
<tr><td><strong>Phí qua đêm</strong></td><td>Áp dụng bình thường</td><td>Như giao dịch thông thường</td></tr>
<tr><td><strong>Phí nạp tiền</strong></td><td>Miễn phí</td><td>Exness không thu phí nạp</td></tr>
<tr><td><strong>Phí rút tiền</strong></td><td>Miễn phí</td><td>Rút tức thì, không giới hạn số lần</td></tr>
</tbody>
</table>

<p><strong>Quan trọng:</strong> Hoa hồng chỉ được tính trên <strong>lợi nhuận ròng</strong>. Nếu bạn lỗ, bạn KHÔNG phải trả hoa hồng cho SP. Điều này đảm bảo SP có động lực giao dịch có lãi.</p>

<h2>🎯 5 Mẹo Copy Trade Exness Hiệu Quả</h2>

<ol>
<li><strong>Phân bổ vốn cho 3-5 SP</strong> — Không bỏ hết trứng vào 1 giỏ. Chọn SP có phong cách khác nhau (scalper + swing trader + trend follower).</li>
<li><strong>Luôn đặt Stop Loss 50-60%</strong> — Bảo vệ vốn. Ví dụ: đầu tư $100 vào SP, đặt SL 60% → tự dừng khi vốn còn $40.</li>
<li><strong>Ưu tiên SP có hoa hồng thấp (0-20%)</strong> — SP giỏi thường không cần thu hoa hồng cao vì họ kiếm từ volume.</li>
<li><strong>Tránh SP mới < 30 ngày</strong> — Dù lợi nhuận rất cao, chưa đủ data để đánh giá. Chờ ít nhất 90 ngày.</li>
<li><strong>Review hàng tuần, đổi SP hàng tháng nếu cần</strong> — Thị trường thay đổi, SP giỏi hôm nay chưa chắc giỏi tháng sau.</li>
</ol>

<h2>⚠️ Rủi Ro Cần Biết Khi Copy Trade Exness</h2>

<ul>
<li><strong>Thua lỗ:</strong> Lợi nhuận quá khứ không đảm bảo tương lai. Bạn có thể mất một phần hoặc toàn bộ vốn.</li>
<li><strong>Slippage:</strong> Có độ trễ nhỏ giữa lệnh SP và lệnh của bạn, đặc biệt khi thị trường biến động mạnh.</li>
<li><strong>SP thay đổi chiến lược:</strong> SP có thể đột ngột thay đổi phong cách giao dịch → cần theo dõi thường xuyên.</li>
<li><strong>Vốn nhỏ = lot nhỏ:</strong> Với $10-50, lot size sẽ rất nhỏ (0.01) → lợi nhuận tuyệt đối không lớn.</li>
</ul>

<h2>❓ Câu Hỏi Thường Gặp</h2>

<h3>Copy trade Exness cần bao nhiêu tiền?</h3>
<p>Tối thiểu chỉ <strong>$10</strong>. Tuy nhiên, khuyến nghị bắt đầu với $100-200 để phân bổ cho 3-5 Strategy Provider.</p>

<h3>Copy trade Exness có an toàn không?</h3>
<p>Exness được quản lý bởi FCA (Anh), CySEC (EU) — các cơ quan tài chính hàng đầu thế giới. Vốn của bạn được bảo vệ trong tài khoản tách biệt (segregated accounts). Tuy nhiên, rủi ro thua lỗ giao dịch luôn tồn tại.</p>

<h3>Phí copy trade Exness bao nhiêu?</h3>
<p>Exness không thu phí nền tảng. Bạn chỉ trả hoa hồng cho Strategy Provider (do SP tự đặt, thường 0-50% lợi nhuận). Nếu thua lỗ, KHÔNG phải trả hoa hồng.</p>

<h3>Làm sao rút tiền từ copy trade Exness?</h3>
<p>Dừng sao chép SP → vốn + lãi/lỗ trả về tài khoản chính → Rút tiền về ngân hàng Việt Nam tức thì (thường trong vài phút).</p>

<h3>Copy trade Exness vs eToro, sàn nào tốt hơn?</h3>
<p>Cho trader Việt Nam: <strong>Exness tốt hơn</strong> nhờ vốn tối thiểu thấp ($10 vs $200), nạp/rút qua ngân hàng VN, và hỗ trợ tiếng Việt tốt hơn. eToro phù hợp hơn nếu bạn muốn cộng đồng social trading toàn cầu lớn.</p>

<h2>🏁 Kết Luận</h2>

<p><strong>Copy Trade Exness</strong> là lựa chọn hàng đầu cho trader Việt Nam nhờ vốn tối thiểu cực thấp, nạp/rút siêu nhanh, và giao diện tiếng Việt thân thiện. Tuy nhiên, hãy nhớ: copy trading là <strong>công cụ hỗ trợ</strong>, không phải "máy in tiền". Luôn đặt stop loss, phân bổ vốn hợp lý, và theo dõi hiệu suất thường xuyên.</p>

<p>👉 <strong>Xem thêm:</strong> <a href="/tin-tuc/copy-trading-la-gi-huong-dan-top-san-uy-tin/">Copy Trading là gì? Hướng dẫn chi tiết</a> | <a href="/so-sanh/">So sánh các sàn giao dịch</a> | <a href="/review-san/">Review sàn Forex uy tín</a></p>

<p><em>Cập nhật: Tháng 03/2026</em></p>

<p><strong>⚠️ Cảnh báo rủi ro:</strong> <em>Giao dịch CFD và Forex có rủi ro cao. Copy trading không đảm bảo lợi nhuận. Chỉ đầu tư số tiền bạn có thể chấp nhận mất.</em></p>
</article>`
    },
    {
        title: 'Hướng Dẫn Copy Trade XM Từ A-Z: Tính Năng, Phí & Cách Bắt Đầu 2026',
        slug: 'huong-dan-copy-trade-xm',
        meta_title: 'Copy Trade XM 2026: Hướng Dẫn Chi Tiết & Đánh Giá Thực Tế Cho Người Mới',
        meta_description: '✅ Hướng dẫn copy trade XM từng bước 2026. Đánh giá tính năng, phí, cách chọn Signal Provider, mức đầu tư tối thiểu. So sánh với Exness, eToro.',
        excerpt: 'Hướng dẫn chi tiết copy trade trên sàn XM: cách đăng ký, chọn Signal Provider, phí giao dịch, quản lý rủi ro và so sánh với các sàn copy trading khác năm 2026.',
        featured_image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=630&fit=crop&q=80',
        featured_image_alt: 'Hướng dẫn copy trade XM cho trader Việt Nam 2026',
        category_id: 'ac86a067-5518-42d7-8045-a92a75f4a15f',
        tags: ['xm', 'copy trade', 'social trading', 'hướng dẫn', 'sàn forex'],
        is_published: false,
        scheduled_at: '2026-03-14T05:00:00Z', // 12:00 PM VN 14/03 (Thu 7)
        content: `<article>
<p><strong>XM (XM Global)</strong> là một trong những sàn Forex lớn nhất thế giới với hơn 10 triệu người dùng. Năm 2026, XM đã nâng cấp tính năng <strong>Copy Trading</strong> trên nền tảng riêng, cho phép trader sao chép chiến lược từ hàng nghìn Signal Provider (nhà cung cấp tín hiệu). Bài viết này sẽ hướng dẫn chi tiết cách <strong>copy trade trên XM</strong> từ A-Z.</p>

<h2>📌 Copy Trade XM Là Gì?</h2>

<p>XM Copy Trading là tính năng tích hợp trên nền tảng giao dịch của XM, cho phép bạn <strong>tự động sao chép</strong> các giao dịch từ những trader có kinh nghiệm (gọi là <em>Strategy Manager</em> hoặc <em>Signal Provider</em>). XM sử dụng nền tảng <strong>MT4/MT5</strong> — quen thuộc với hầu hết trader châu Á.</p>

<h3>Thông tin cơ bản về XM</h3>

<table>
<thead>
<tr><th>Tiêu chí</th><th>Chi tiết</th></tr>
</thead>
<tbody>
<tr><td><strong>Thành lập</strong></td><td>2009</td></tr>
<tr><td><strong>Giấy phép</strong></td><td>CySEC, ASIC, DFSA, IFSC</td></tr>
<tr><td><strong>Người dùng</strong></td><td>10 triệu+ tại 190 quốc gia</td></tr>
<tr><td><strong>Nạp tối thiểu</strong></td><td>$5</td></tr>
<tr><td><strong>Nền tảng</strong></td><td>MT4, MT5, XM App</td></tr>
<tr><td><strong>Hỗ trợ VN</strong></td><td>Tiếng Việt, hội thảo online miễn phí</td></tr>
<tr><td><strong>Bonus</strong></td><td>$30 không cần nạp + bonus nạp 50%/20%</td></tr>
</tbody>
</table>

<h2>📱 Hướng Dẫn Copy Trade XM Từng Bước</h2>

<h3>Bước 1: Đăng ký tài khoản XM</h3>

<ol>
<li>Truy cập website XM hoặc tải ứng dụng <strong>XM App</strong></li>
<li>Đăng ký tài khoản → chọn loại tài khoản <strong>Standard</strong> (phù hợp nhất cho copy trading)</li>
<li>Xác minh danh tính (KYC): Upload CMND/CCCD</li>
<li>Chờ phê duyệt (thường 1-24 giờ)</li>
</ol>

<h3>Bước 2: Nạp tiền vào tài khoản</h3>

<ul>
<li><strong>Nạp tối thiểu:</strong> $5 (thấp nhất ngành)</li>
<li><strong>Phương thức:</strong> Internet Banking, Visa/Mastercard, Skrill, Neteller</li>
<li><strong>Phí nạp:</strong> Miễn phí</li>
<li>💡 <strong>Bonus:</strong> XM thường có chương trình bonus $30 không cần nạp — tận dụng để thử copy trading!</li>
</ul>

<h3>Bước 3: Truy cập tính năng Copy Trading</h3>

<ol>
<li>Đăng nhập XM App hoặc XM Members Area</li>
<li>Vào mục <strong>"Copy Trading"</strong> hoặc <strong>"Social Trading"</strong></li>
<li>Duyệt danh sách các Strategy Manager có sẵn</li>
</ol>

<h3>Bước 4: Chọn Strategy Manager</h3>

<p>XM cung cấp thống kê chi tiết cho từng Strategy Manager. Đánh giá dựa trên:</p>

<table>
<thead>
<tr><th>Tiêu chí</th><th>Mức khuyến nghị</th></tr>
</thead>
<tbody>
<tr><td><strong>Lợi nhuận tổng</strong></td><td>20-100% (ổn định qua nhiều tháng)</td></tr>
<tr><td><strong>Thời gian hoạt động</strong></td><td>≥ 3 tháng</td></tr>
<tr><td><strong>Drawdown tối đa</strong></td><td>≤ 30%</td></tr>
<tr><td><strong>Số người copy</strong></td><td>≥ 30 copiers</td></tr>
<tr><td><strong>Phong cách giao dịch</strong></td><td>Rõ ràng (Forex, vàng, indices...)</td></tr>
</tbody>
</table>

<h3>Bước 5: Thiết lập & Bắt đầu Copy</h3>

<ol>
<li>Nhấn vào Strategy Manager → <strong>"Copy"</strong></li>
<li>Chọn số tiền đầu tư</li>
<li>Thiết lập <strong>Stop Loss</strong> (ví dụ: dừng khi lỗ 40% vốn)</li>
<li>Xác nhận → Hệ thống tự động sao chép!</li>
</ol>

<h2>💰 Phí Copy Trade XM</h2>

<table>
<thead>
<tr><th>Loại phí</th><th>Chi tiết</th></tr>
</thead>
<tbody>
<tr><td><strong>Phí sao chép</strong></td><td>Phí hiệu suất do Strategy Manager đặt</td></tr>
<tr><td><strong>Spread</strong></td><td>Từ 1.0 pips (Standard), 0.6 pips (Ultra Low)</td></tr>
<tr><td><strong>Hoa hồng</strong></td><td>$0 (tài khoản Standard)</td></tr>
<tr><td><strong>Phí qua đêm</strong></td><td>Áp dụng như giao dịch thường</td></tr>
<tr><td><strong>Phí nạp/rút</strong></td><td>Miễn phí</td></tr>
<tr><td><strong>Phí không hoạt động</strong></td><td>$15/tháng (sau 90 ngày không hoạt động)</td></tr>
</tbody>
</table>

<h2>📊 So Sánh Copy Trade XM vs Exness vs eToro</h2>

<table>
<thead>
<tr><th>Tiêu chí</th><th>XM</th><th>Exness</th><th>eToro</th></tr>
</thead>
<tbody>
<tr><td><strong>Nạp tối thiểu</strong></td><td>$5</td><td>$10</td><td>$50</td></tr>
<tr><td><strong>Copy tối thiểu</strong></td><td>$100</td><td>$10</td><td>$200</td></tr>
<tr><td><strong>Spread EUR/USD</strong></td><td>~1.6 pips</td><td>~0.9 pips</td><td>~1.0 pips</td></tr>
<tr><td><strong>Nền tảng</strong></td><td>MT4/MT5/XM App</td><td>Exness Trade App</td><td>eToro App</td></tr>
<tr><td><strong>Bonus</strong></td><td>✅ $30 miễn phí</td><td>❌ Không</td><td>❌ Không</td></tr>
<tr><td><strong>Phí rút tiền</strong></td><td>Miễn phí</td><td>Miễn phí</td><td>$5/lần</td></tr>
<tr><td><strong>Hỗ trợ VN</strong></td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐⭐⭐</td><td>⭐⭐⭐</td></tr>
</tbody>
</table>

<h3>Nhận xét:</h3>
<ul>
<li><strong>XM</strong> phù hợp cho người mới nhờ bonus $30 miễn phí, nạp tối thiểu chỉ $5, và hỗ trợ tiếng Việt xuất sắc</li>
<li><strong>Exness</strong> phù hợp hơn nếu ưu tiên spread thấp và vốn copy nhỏ ($10)</li>
<li><strong>eToro</strong> phù hợp nếu muốn cộng đồng social trading toàn cầu lớn nhất</li>
</ul>

<h2>✅ Ưu Điểm Copy Trade XM</h2>

<ol>
<li><strong>Bonus $30 không cần nạp</strong> — Thử copy trading hoàn toàn miễn phí</li>
<li><strong>Nền tảng MT4/MT5 quen thuộc</strong> — Không cần học lại nền tảng mới</li>
<li><strong>Nạp tối thiểu $5</strong> — Thấp nhất ngành</li>
<li><strong>Hỗ trợ tiếng Việt</strong> — CSKH, hội thảo, tài liệu đào tạo tiếng Việt</li>
<li><strong>Webinar miễn phí</strong> — XM tổ chức hội thảo online hàng tuần cho trader VN</li>
</ol>

<h2>⚠️ Nhược Điểm Copy Trade XM</h2>

<ol>
<li><strong>Spread cao hơn Exness/IC Markets</strong> — EUR/USD ~1.6 pips vs 0.9 pips</li>
<li><strong>Phí không hoạt động $15/tháng</strong> — Cao hơn Plus500 ($10) và Exness ($0)</li>
<li><strong>Copy tối thiểu cao hơn Exness</strong> — $100 vs $10</li>
<li><strong>Tính năng copy trading mới hơn</strong> — Chưa hoàn thiện bằng eToro hoặc Exness</li>
</ol>

<h2>🎯 5 Mẹo Copy Trade XM Hiệu Quả</h2>

<ol>
<li><strong>Tận dụng bonus $30</strong> — Thử copy trading với tiền thưởng trước khi nạp tiền thật</li>
<li><strong>Dùng tài khoản Ultra Low</strong> — Spread thấp hơn Standard, tiết kiệm chi phí copy</li>
<li><strong>Copy 3-5 Strategy Manager</strong> — Đa dạng hóa, không phụ thuộc 1 trader</li>
<li><strong>Đặt Stop Loss 50-60%</strong> — Bảo vệ vốn gốc</li>
<li><strong>Tham gia webinar XM</strong> — Học thêm kiến thức để đánh giá Strategy Manager tốt hơn</li>
</ol>

<h2>❓ Câu Hỏi Thường Gặp</h2>

<h3>Copy trade XM cần bao nhiêu tiền?</h3>
<p>Nạp tối thiểu $5, copy tối thiểu khoảng $100. Khuyến nghị $200-500 để phân bổ cho nhiều Strategy Manager.</p>

<h3>Copy trade XM có an toàn không?</h3>
<p>XM được quản lý bởi CySEC, ASIC — cơ quan tài chính uy tín. Vốn được tách biệt trong segregated accounts. Tuy nhiên, rủi ro thua lỗ giao dịch luôn tồn tại.</p>

<h3>XM vs Exness copy trade, sàn nào tốt hơn?</h3>
<p>Exness tốt hơn về spread và vốn tối thiểu ($10 vs $100). XM tốt hơn về bonus ($30 miễn phí) và hỗ trợ đào tạo (webinar tiếng Việt). Tùy nhu cầu của bạn.</p>

<h3>Có thể dùng bonus $30 để copy trade không?</h3>
<p>Có thể, nhưng cần kiểm tra điều khoản cụ thể của chương trình bonus trên XM tại thời điểm đăng ký.</p>

<h2>🏁 Kết Luận</h2>

<p><strong>Copy Trade XM</strong> là lựa chọn tốt cho trader Việt Nam mới bắt đầu nhờ bonus $30 miễn phí, nền tảng MT4/MT5 quen thuộc, và hỗ trợ tiếng Việt xuất sắc. Tuy nhiên, spread cao hơn một số sàn khác là điểm cần cân nhắc.</p>

<p>👉 <strong>Xem thêm:</strong> <a href="/tin-tuc/copy-trading-la-gi-huong-dan-top-san-uy-tin/">Copy Trading là gì?</a> | <a href="/tin-tuc/huong-dan-copy-trade-exness/">Copy Trade Exness</a> | <a href="/so-sanh/">So sánh sàn giao dịch</a></p>

<p><em>Cập nhật: Tháng 03/2026</em></p>

<p><strong>⚠️ Cảnh báo rủi ro:</strong> <em>Giao dịch CFD và Forex có rủi ro cao. Copy trading không đảm bảo lợi nhuận. Chỉ đầu tư số tiền bạn có thể chấp nhận mất.</em></p>
</article>`
    }
];

async function main() {
    for (const post of posts) {
        const { data: existing } = await supabase
            .from('posts').select('id').eq('slug', post.slug).single();
        if (existing) {
            console.log('EXISTS:', post.slug);
            continue;
        }
        const { data, error } = await supabase
            .from('posts').insert([post]).select('id,title,scheduled_at');
        if (error) {
            console.log('ERROR:', post.slug, error.message);
            continue;
        }
        const vn = new Date(data[0].scheduled_at).toLocaleString('vi-VN', {
            timeZone: 'Asia/Ho_Chi_Minh', weekday: 'short', day: '2-digit', month: '2-digit',
            hour: '2-digit', minute: '2-digit'
        });
        console.log('OK', data[0].title.substring(0, 50));
        console.log('   Schedule:', vn);
        console.log('');
    }
}

main();
