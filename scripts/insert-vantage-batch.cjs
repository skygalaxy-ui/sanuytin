const { createClient } = require('@supabase/supabase-js');
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4');
const cat = 'ac86a067-5518-42d7-8045-a92a75f4a15f';
const img = (id) => `https://images.unsplash.com/photo-${id}?w=1200&h=630&fit=crop&q=80`;

const posts = [
    {
        title: 'So Sánh Vantage vs Exness: Sàn Nào Tốt Hơn Cho Trader Việt 2026?',
        slug: 'so-sanh-vantage-vs-exness',
        meta_title: 'Vantage vs Exness 2026: So Sánh Chi Tiết Phí, Spread, Rút Tiền & Uy Tín',
        meta_description: '✅ So sánh Vantage vs Exness 2026: spread, phí, đòn bẩy, rút tiền, bonus. Sàn nào tốt hơn cho trader Việt? Phân tích khách quan từng tiêu chí.',
        excerpt: 'So sánh chi tiết Vantage và Exness theo 10 tiêu chí: spread, phí, rút tiền, bonus, giấy phép, giúp bạn chọn sàn phù hợp nhất.',
        featured_image: img('1611974789855-9c2a0a7236a3'), featured_image_alt: 'So sánh Vantage vs Exness 2026',
        category_id: cat, tags: ['vantage', 'exness', 'so sánh sàn', 'forex'],
        is_published: false, scheduled_at: '2026-04-03T05:00:00Z',
        content: `<article>
<p><strong>Vantage vs Exness</strong> — đây là "cuộc chiến" giữa 2 sàn Forex hàng đầu mà trader Việt Nam hay phân vân nhất. Cả hai đều uy tín, nhưng mỗi sàn có thế mạnh riêng. Bài viết so sánh <strong>khách quan theo 10 tiêu chí</strong> để bạn chọn đúng sàn cho mình nhé!</p>

<h2>📊 Bảng So Sánh Tổng Quan</h2>
<table><thead><tr><th>Tiêu chí</th><th>Vantage</th><th>Exness</th><th>🏆 Thắng</th></tr></thead>
<tbody>
<tr><td><strong>Giấy phép</strong></td><td>ASIC, FCA</td><td>FCA, CySEC</td><td>Hòa ⚖️</td></tr>
<tr><td><strong>Thành lập</strong></td><td>2009 (16 năm)</td><td>2008 (17 năm)</td><td>Hòa ⚖️</td></tr>
<tr><td><strong>Nạp tối thiểu</strong></td><td>$50</td><td>$10</td><td>Exness ✅</td></tr>
<tr><td><strong>Spread EUR/USD</strong></td><td>0.0 pips (Raw)</td><td>0.0 pips (Raw)</td><td>Hòa ⚖️</td></tr>
<tr><td><strong>Hoa hồng ECN</strong></td><td>$6/lot</td><td>$7/lot</td><td>Vantage ✅</td></tr>
<tr><td><strong>Spread vàng</strong></td><td>0.0-8 cents</td><td>0.0-6 cents</td><td>Exness ✅</td></tr>
<tr><td><strong>Đòn bẩy</strong></td><td>1:500</td><td>Vô cực</td><td>Exness ✅</td></tr>
<tr><td><strong>Rút tiền</strong></td><td>1-3 ngày</td><td>Tức thì ⭐</td><td>Exness ✅</td></tr>
<tr><td><strong>Bonus</strong></td><td>$30 + 100% nạp ⭐</td><td>Không có</td><td>Vantage ✅</td></tr>
<tr><td><strong>Backcom</strong></td><td>Đến $8/lot</td><td>Qua IB</td><td>Vantage ✅</td></tr>
<tr><td><strong>Copy Trading</strong></td><td>Có</td><td>Có ⭐</td><td>Exness ✅</td></tr>
<tr><td><strong>Nền tảng</strong></td><td>MT4, MT5, ProTrader</td><td>MT4, MT5, Exness Trade</td><td>Hòa ⚖️</td></tr>
</tbody></table>
<p><strong>Kết quả: Exness 5 — Vantage 3 — Hòa 4.</strong></p>

<h2>🎯 Khi Nào Chọn Vantage?</h2>
<ul>
<li>✅ Bạn muốn <strong>bonus nạp tiền 100%</strong> — Exness không có chương trình này</li>
<li>✅ Bạn là <strong>ECN trader</strong> quan tâm hoa hồng thấp ($6 vs $7)</li>
<li>✅ Bạn muốn <strong>backcom/hoàn phí cao</strong> — Vantage có chương trình IB tốt</li>
<li>✅ Giao dịch <strong>vàng trên phiên Âu/Mỹ</strong> — spread Vantage cực cạnh tranh</li>
</ul>

<h2>🎯 Khi Nào Chọn Exness?</h2>
<ul>
<li>✅ Ưu tiên <strong>rút tiền tức thì</strong> — đặc biệt quan trọng cho trader Việt</li>
<li>✅ <strong>Vốn nhỏ ($10-50)</strong> — Exness nạp chỉ $10, Vantage cần $50</li>
<li>✅ Cần <strong>đòn bẩy vô cực</strong> cho chiến lược đặc biệt</li>
<li>✅ Dùng <strong>Copy Trading</strong> — Exness Social Trading hoàn thiện hơn</li>
</ul>

<h2>📈 So Sánh Chi Tiết Từng Mục</h2>

<h3>1. Spread & Phí — Ai rẻ hơn?</h3>
<p>Về tổng chi phí giao dịch (spread + commission):</p>
<ul>
<li><strong>EUR/USD:</strong> Vantage Raw ($6 + 0.1 pip = ~$6.1) vs Exness Raw ($7 + 0.0 pip = ~$7) → <strong>Vantage rẻ hơn $0.9/lot</strong></li>
<li><strong>Vàng:</strong> Exness thường spread tốt hơn trong phiên châu Á, Vantage tốt hơn phiên Âu/Mỹ</li>
</ul>

<h3>2. Rút tiền — Khác biệt lớn nhất</h3>
<p>Đây là <strong>yếu tố quyết định</strong> cho nhiều trader Việt:</p>
<ul>
<li><strong>Exness:</strong> Rút tức thì, 24/7, về ngân hàng VN trong vài phút — KHÔNG sàn nào sánh bằng</li>
<li><strong>Vantage:</strong> Rút trong 1-3 ngày làm việc — nhanh hơn trung bình ngành nhưng chậm hơn Exness</li>
</ul>

<h3>3. Bonus — Vantage áp đảo</h3>
<p>Exness <strong>không có bất kỳ chương trình bonus nào</strong>. Vantage cung cấp:</p>
<ul>
<li>$30 bonus không nạp</li>
<li>100% bonus nạp lần đầu (tối đa $500)</li>
<li>20% bonus nạp tiếp theo (tối đa $20,000)</li>
</ul>

<h2>🏁 Kết Luận</h2>
<p>Không có sàn nào "tốt hơn tuyệt đối". Chọn <strong>Exness</strong> nếu ưu tiên rút tiền nhanh và vốn nhỏ. Chọn <strong>Vantage</strong> nếu muốn bonus, phí ECN thấp, và backcom. Nhiều trader dùng <strong>CẢ HAI</strong> — mỗi sàn cho một mục đích!</p>

<p>👉 <a href="/vantage/">Review Vantage</a> | <a href="/tin-tuc/san-exness-co-lua-dao-khong/">Review Exness</a> | <a href="/so-sanh/">So sánh tất cả sàn</a></p>
<p><strong>⚠️</strong> <em>Giao dịch Forex có rủi ro cao. So sánh dựa trên dữ liệu tháng 03/2026.</em></p>
</article>`
    },
    {
        title: 'Hướng Dẫn Mở Tài Khoản Vantage Từ A-Z: Nhanh Nhất Trong 5 Phút',
        slug: 'huong-dan-mo-tai-khoan-vantage',
        meta_title: 'Mở Tài Khoản Vantage 2026: Hướng Dẫn 5 Phút Từng Bước Có Hình Ảnh',
        meta_description: '✅ Hướng dẫn mở tài khoản Vantage Markets trong 5 phút: đăng ký, xác minh KYC, nạp tiền, chọn loại tài khoản. Kèm bonus $30 không cần nạp.',
        excerpt: 'Hướng dẫn từng bước mở tài khoản Vantage Markets: đăng ký, KYC, nạp tiền, nhận bonus $30 miễn phí trong 5 phút.',
        featured_image: img('1507679799987-c73779587ccf'), featured_image_alt: 'Hướng dẫn mở tài khoản Vantage',
        category_id: cat, tags: ['vantage', 'mở tài khoản', 'đăng ký', 'hướng dẫn'],
        is_published: false, scheduled_at: '2026-04-04T05:00:00Z',
        content: `<article>
<p>Muốn giao dịch trên Vantage nhưng chưa biết bắt đầu từ đâu? Bài viết hướng dẫn bạn <strong>mở tài khoản Vantage chỉ trong 5 phút</strong> — từng bước dễ hiểu, kèm mẹo nhận bonus $30 miễn phí nhé!</p>

<h2>📋 Chuẩn Bị Trước Khi Đăng Ký</h2>
<ul>
<li>📧 <strong>Email cá nhân</strong> (Gmail, Yahoo...)</li>
<li>📱 <strong>Số điện thoại</strong> VN</li>
<li>🪪 <strong>CMND/CCCD</strong> hoặc Hộ chiếu (chụp ảnh rõ nét)</li>
<li>💳 <strong>Phương thức nạp tiền:</strong> Internet Banking hoặc ví điện tử</li>
</ul>

<h2>📱 5 Bước Mở Tài Khoản</h2>

<h3>Bước 1: Truy cập Vantage Markets</h3>
<p>Vào website chính thức: <strong>vantagemarkets.com</strong> hoặc tải app <strong>Vantage App</strong> trên điện thoại. Nhấn <strong>"Open Live Account"</strong> hoặc <strong>"Mở tài khoản"</strong>.</p>

<h3>Bước 2: Điền thông tin cá nhân</h3>
<ul>
<li>Họ tên (đúng như CMND)</li>
<li>Email</li>
<li>Số điện thoại</li>
<li>Quốc gia: <strong>Vietnam</strong></li>
<li>Tạo mật khẩu</li>
</ul>

<h3>Bước 3: Chọn loại tài khoản</h3>
<table><thead><tr><th>Loại</th><th>Phù hợp</th><th>Nạp min</th></tr></thead>
<tbody>
<tr><td><strong>Standard STP</strong></td><td>Người mới ⭐</td><td>$50</td></tr>
<tr><td><strong>Raw ECN</strong></td><td>Trader có kinh nghiệm</td><td>$50</td></tr>
<tr><td><strong>Pro ECN</strong></td><td>Chuyên nghiệp</td><td>$10,000</td></tr>
</tbody></table>
<p>💡 <strong>Mẹo:</strong> Người mới bắt đầu nên chọn <strong>Standard STP</strong> — không phí hoa hồng, dễ hiểu.</p>

<h3>Bước 4: Xác minh danh tính (KYC)</h3>
<ol>
<li>Upload ảnh <strong>CMND/CCCD</strong> (mặt trước + mặt sau)</li>
<li>Upload <strong>ảnh selfie</strong> cầm CMND</li>
<li>Chờ phê duyệt: <strong>1-24 giờ</strong> (thường 1-2 giờ trong ngày làm việc)</li>
</ol>

<h3>Bước 5: Nạp tiền & Nhận Bonus</h3>
<ul>
<li><strong>Nạp tối thiểu:</strong> $50</li>
<li><strong>Phương thức VN:</strong> Internet Banking (Vietcombank, BIDV, Techcombank), Visa/Mastercard, Skrill, Neteller</li>
<li><strong>Nhận bonus $30:</strong> Tự động cộng sau khi xác minh KYC (kiểm tra mục Promotions)</li>
<li><strong>Bonus 100% nạp:</strong> Nạp $500 → nhận thêm $500 tiền thưởng</li>
</ul>

<h2>⚙️ Sau Khi Mở Tài Khoản</h2>
<ol>
<li>Tải <strong>MT4 hoặc MT5</strong> từ Vantage</li>
<li>Đăng nhập bằng thông tin sàn gửi qua email</li>
<li><strong>Mở tài khoản Demo</strong> trước để luyện tập</li>
<li>Bắt đầu giao dịch với lot nhỏ (0.01)</li>
</ol>

<h2>❓ FAQ</h2>
<h3>Mở tài khoản Vantage mất bao lâu?</h3>
<p>Đăng ký chỉ 5 phút. Xác minh KYC thường 1-2 giờ, tối đa 24 giờ.</p>
<h3>Có cần nạp tiền ngay không?</h3>
<p>Không bắt buộc. Bạn có thể mở tài khoản Demo trước để tập luyện miễn phí.</p>

<p>👉 <a href="/tin-tuc/san-vantage-co-uy-tin-khong/">Vantage uy tín không?</a> | <a href="/tin-tuc/so-sanh-vantage-vs-exness/">Vantage vs Exness</a> | <a href="/vantage/">Review Vantage</a></p>
<p><strong>⚠️</strong> <em>Giao dịch Forex có rủi ro cao. Chỉ đầu tư số tiền bạn chấp nhận mất.</em></p>
</article>`
    },
    {
        title: 'Phí Giao Dịch Vantage: Bảng Spread, Hoa Hồng & Swap Chi Tiết 2026',
        slug: 'phi-giao-dich-vantage',
        meta_title: 'Phí Giao Dịch Vantage 2026: Spread, Hoa Hồng, Swap & Phí Ẩn Chi Tiết',
        meta_description: '✅ Tổng hợp phí giao dịch Vantage 2026: spread từng sản phẩm, hoa hồng ECN, phí swap, phí nạp/rút. So sánh chi phí với Exness, IC Markets.',
        excerpt: 'Bảng phí giao dịch Vantage đầy đủ: spread, hoa hồng, swap, phí nạp rút. Kèm so sánh chi phí với Exness và IC Markets.',
        featured_image: img('1554224155-6726b3ff858f'), featured_image_alt: 'Phí giao dịch Vantage 2026',
        category_id: cat, tags: ['vantage', 'phí giao dịch', 'spread', 'hoa hồng'],
        is_published: false, scheduled_at: '2026-04-05T05:00:00Z',
        content: `<article>
<p>Trước khi giao dịch trên Vantage, bạn cần hiểu rõ <strong>tất cả các loại phí</strong> để tính toán chi phí chính xác. Bài viết tổng hợp bảng phí Vantage 2026 bằng ngôn ngữ dễ hiểu nhé!</p>

<h2>📊 Tổng Quan Phí Vantage</h2>
<table><thead><tr><th>Loại phí</th><th>Standard STP</th><th>Raw ECN</th><th>Pro ECN</th></tr></thead>
<tbody>
<tr><td><strong>Spread</strong></td><td>Từ 1.0 pips</td><td>Từ 0.0 pips ⭐</td><td>Từ 0.0 pips</td></tr>
<tr><td><strong>Hoa hồng</strong></td><td>$0</td><td>$6/lot RT</td><td>$4/lot RT ⭐</td></tr>
<tr><td><strong>Swap (phí qua đêm)</strong></td><td>Có</td><td>Có</td><td>Có</td></tr>
<tr><td><strong>Phí nạp</strong></td><td>Miễn phí</td><td>Miễn phí</td><td>Miễn phí</td></tr>
<tr><td><strong>Phí rút</strong></td><td>Miễn phí</td><td>Miễn phí</td><td>Miễn phí</td></tr>
<tr><td><strong>Phí không hoạt động</strong></td><td>Không</td><td>Không</td><td>Không</td></tr>
</tbody></table>

<h2>💱 Spread Các Sản Phẩm Chính</h2>
<table><thead><tr><th>Sản phẩm</th><th>Standard STP</th><th>Raw ECN</th></tr></thead>
<tbody>
<tr><td>EUR/USD</td><td>1.0-1.4 pips</td><td>0.0-0.2 pips</td></tr>
<tr><td>GBP/USD</td><td>1.2-1.8 pips</td><td>0.1-0.5 pips</td></tr>
<tr><td>USD/JPY</td><td>1.0-1.5 pips</td><td>0.0-0.3 pips</td></tr>
<tr><td><strong>XAU/USD (Vàng)</strong></td><td>1.8-2.5 pips</td><td>0.0-0.8 pips ⭐</td></tr>
<tr><td>US500 (S&P 500)</td><td>0.5-0.8 pips</td><td>0.4-0.6 pips</td></tr>
<tr><td>BTC/USD</td><td>$30-50</td><td>$20-40</td></tr>
</tbody></table>

<h2>📈 So Sánh Chi Phí: Vantage vs Exness vs IC Markets</h2>
<p>Tổng chi phí = Spread + Hoa hồng (tính trên 1 lot EUR/USD):</p>
<table><thead><tr><th>Sàn</th><th>Tài khoản ECN</th><th>Tổng chi phí/lot</th></tr></thead>
<tbody>
<tr><td><strong>Vantage Raw</strong></td><td>0.1 pip + $6</td><td>~$7 ⭐</td></tr>
<tr><td>Exness Raw</td><td>0.0 pip + $7</td><td>~$7</td></tr>
<tr><td>IC Markets Raw</td><td>0.1 pip + $7</td><td>~$8</td></tr>
<tr><td>XM (Standard)</td><td>1.6 pips + $0</td><td>~$16</td></tr>
</tbody></table>
<p><strong>Nhận xét:</strong> Vantage Raw và Exness Raw có chi phí gần bằng nhau (~$7/lot). Đều rẻ hơn rõ rệt so với XM Standard.</p>

<h2>🆓 Phí Vantage KHÔNG Thu</h2>
<ul>
<li>✅ Phí nạp tiền: <strong>Miễn phí</strong></li>
<li>✅ Phí rút tiền: <strong>Miễn phí</strong></li>
<li>✅ Phí không hoạt động: <strong>Không có</strong> (khác XM tính $15/tháng)</li>
<li>✅ Phí duy trì tài khoản: <strong>Không có</strong></li>
</ul>

<h2>💡 Mẹo Tiết Kiệm Phí</h2>
<ol>
<li><strong>Dùng Raw ECN</strong> nếu giao dịch > 3 lot/ngày — rẻ hơn Standard</li>
<li><strong>Đăng ký qua IB</strong> để nhận backcom hoàn phí</li>
<li><strong>Giao dịch trong phiên Âu/Mỹ</strong> — spread thấp nhất</li>
<li><strong>Day trading</strong> để tránh phí swap qua đêm</li>
</ol>

<p>👉 <a href="/tin-tuc/huong-dan-mo-tai-khoan-vantage/">Mở tài khoản Vantage</a> | <a href="/tin-tuc/so-sanh-vantage-vs-exness/">Vantage vs Exness</a></p>
<p><strong>⚠️</strong> <em>Phí có thể thay đổi. Kiểm tra trên website Vantage. Giao dịch có rủi ro cao.</em></p>
</article>`
    },
    {
        title: 'Cách Nạp Rút Tiền Vantage Tại Việt Nam: Nhanh Nhất, Ít Phí Nhất 2026',
        slug: 'cach-nap-rut-tien-vantage-viet-nam',
        meta_title: 'Nạp Rút Tiền Vantage Tại Việt Nam 2026: Ngân Hàng, Ví, Phí & Thời Gian',
        meta_description: '✅ Hướng dẫn nạp rút tiền Vantage tại Việt Nam: Internet Banking, Skrill, Neteller, USDT. Thời gian xử lý, phí, và mẹo rút nhanh nhất.',
        excerpt: 'Hướng dẫn chi tiết cách nạp rút tiền Vantage tại Việt Nam qua ngân hàng, ví điện tử, crypto. Kèm phí và thời gian xử lý.',
        featured_image: img('1563986768609-322da13575f2'), featured_image_alt: 'Nạp rút tiền Vantage Việt Nam',
        category_id: cat, tags: ['vantage', 'nạp tiền', 'rút tiền', 'việt nam'],
        is_published: false, scheduled_at: '2026-04-06T05:00:00Z',
        content: `<article>
<p>Một trong những lo lắng lớn nhất của trader Việt khi chọn sàn Forex là: <strong>"Nạp rút tiền có dễ không? Có bị chặn không?"</strong>. Bài viết hướng dẫn chi tiết cách nạp rút Vantage tại Việt Nam — phương thức nào nhanh nhất, ít phí nhất nhé!</p>

<h2>💳 Phương Thức Nạp Tiền Vantage Tại VN</h2>
<table><thead><tr><th>Phương thức</th><th>Thời gian</th><th>Phí</th><th>Nạp min</th><th>Đánh giá</th></tr></thead>
<tbody>
<tr><td><strong>Internet Banking</strong></td><td>Tức thì — 1h</td><td>Miễn phí</td><td>$50</td><td>⭐⭐⭐⭐⭐ Nhanh nhất</td></tr>
<tr><td><strong>Visa/Mastercard</strong></td><td>Tức thì</td><td>Miễn phí</td><td>$50</td><td>⭐⭐⭐⭐</td></tr>
<tr><td><strong>Skrill</strong></td><td>Tức thì</td><td>Miễn phí</td><td>$50</td><td>⭐⭐⭐⭐</td></tr>
<tr><td><strong>Neteller</strong></td><td>Tức thì</td><td>Miễn phí</td><td>$50</td><td>⭐⭐⭐⭐</td></tr>
<tr><td><strong>USDT (Crypto)</strong></td><td>10-30 phút</td><td>Phí mạng</td><td>$50</td><td>⭐⭐⭐⭐</td></tr>
<tr><td><strong>Perfect Money</strong></td><td>Tức thì</td><td>Miễn phí</td><td>$50</td><td>⭐⭐⭐</td></tr>
</tbody></table>

<h2>💰 Phương Thức Rút Tiền</h2>
<table><thead><tr><th>Phương thức</th><th>Thời gian</th><th>Phí</th><th>Rút min</th></tr></thead>
<tbody>
<tr><td><strong>Internet Banking</strong></td><td>1-3 ngày</td><td>Miễn phí</td><td>$50</td></tr>
<tr><td><strong>Visa/Mastercard</strong></td><td>1-3 ngày</td><td>Miễn phí</td><td>$50</td></tr>
<tr><td><strong>Skrill/Neteller</strong></td><td>1 ngày</td><td>Miễn phí</td><td>$50</td></tr>
<tr><td><strong>USDT</strong></td><td>1-24h</td><td>Phí mạng</td><td>$50</td></tr>
</tbody></table>

<h2>📱 Hướng Dẫn Nạp Tiền Qua Internet Banking</h2>
<ol>
<li>Đăng nhập <strong>Vantage Client Portal</strong></li>
<li>Chọn <strong>"Deposit" → "Local Bank Transfer"</strong></li>
<li>Chọn ngân hàng (Vietcombank, BIDV, Techcombank, MB Bank...)</li>
<li>Nhập số tiền nạp ≥ $50</li>
<li>Hệ thống hiển thị <strong>thông tin chuyển khoản</strong> (STK, nội dung CK)</li>
<li>Mở app ngân hàng → chuyển khoản đúng thông tin</li>
<li>Tiền vào tài khoản trong <strong>5 phút — 1 giờ</strong></li>
</ol>

<h2>🛡️ Mẹo Nạp Rút An Toàn</h2>
<ul>
<li><strong>Rút về đúng phương thức đã nạp</strong> — quy định AML (chống rửa tiền)</li>
<li><strong>Xác minh KYC trước khi rút</strong> — tránh bị chặn</li>
<li><strong>Giữ screenshot</strong> mọi giao dịch nạp/rút</li>
<li><strong>Nạp qua ngân hàng lớn</strong> — Vietcombank, Techcombank ít lỗi nhất</li>
</ul>

<h2>⚠️ Xử Lý Khi Gặp Vấn Đề</h2>
<table><thead><tr><th>Vấn đề</th><th>Giải pháp</th></tr></thead>
<tbody>
<tr><td>Nạp rồi nhưng chưa vào TK</td><td>Chờ 1-2h. Nếu quá lâu → liên hệ CSKH kèm screenshot</td></tr>
<tr><td>Ngân hàng chặn giao dịch</td><td>Gọi hotline ngân hàng mở khoá, hoặc dùng ví điện tử</td></tr>
<tr><td>Rút bị từ chối</td><td>Kiểm tra KYC, rút đúng phương thức nạp</td></tr>
</tbody></table>

<p>👉 <a href="/tin-tuc/huong-dan-mo-tai-khoan-vantage/">Mở tài khoản Vantage</a> | <a href="/tin-tuc/phi-giao-dich-vantage/">Phí Vantage</a> | <a href="/vantage/">Review Vantage</a></p>
<p><strong>⚠️</strong> <em>Giao dịch Forex có rủi ro cao. Thông tin nạp/rút có thể thay đổi.</em></p>
</article>`
    }
];

async function main() {
    let ok = 0;
    for (const p of posts) {
        const { data: ex } = await s.from('posts').select('id').eq('slug', p.slug).single();
        if (ex) { console.log('SKIP:', p.slug); continue; }
        const { data, error } = await s.from('posts').insert([p]).select('id,scheduled_at');
        if (error) { console.log('ERR:', p.slug, error.message); continue; }
        const vn = new Date(data[0].scheduled_at).toLocaleString('vi-VN', {
            timeZone: 'Asia/Ho_Chi_Minh', weekday: 'short', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
        });
        console.log('OK', p.slug, '|', vn); ok++;
    }
    console.log(`\nDone: ${ok} inserted`);
}
main();
