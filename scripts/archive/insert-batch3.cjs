const { createClient } = require('@supabase/supabase-js');
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4');
const cat = 'ac86a067-5518-42d7-8045-a92a75f4a15f';
const img = (id) => `https://images.unsplash.com/photo-${id}?w=1200&h=630&fit=crop&q=80`;

const posts = [
    {
        title: 'Đánh Forex Là Gì? Hướng Dẫn Cách Chơi Forex Cho Người Mới 2026',
        slug: 'danh-forex-la-gi-cach-choi',
        meta_title: 'Đánh Forex Là Gì? Cách Chơi Forex Từ A-Z Cho Người Mới Bắt Đầu 2026',
        meta_description: '✅ Đánh Forex là gì? Hướng dẫn cách chơi Forex từ A-Z: mở tài khoản, phân tích kỹ thuật, quản lý vốn. Cẩm nang dễ hiểu cho người hoàn toàn mới.',
        excerpt: 'Hướng dẫn toàn diện cách đánh Forex cho người mới: từ khái niệm cơ bản, mở tài khoản, đặt lệnh đến quản lý vốn an toàn.',
        featured_image: img('1611974789855-9c2a0a7236a3'), featured_image_alt: 'Cách đánh forex cho người mới',
        category_id: cat, tags: ['forex', 'cách đánh forex', 'cách chơi forex', 'hướng dẫn'],
        is_published: false, scheduled_at: '2026-03-28T05:00:00Z',
        content: `<article>
<p>Bạn nghe nói về <strong>"đánh Forex"</strong> hay <strong>"chơi Forex"</strong> nhưng chưa hiểu rõ nó là gì? Đừng lo! Bài viết này sẽ giải thích bằng ngôn ngữ <strong>thật đơn giản</strong>, như đang nói chuyện với một người bạn vậy 😊</p>

<h2>📌 Forex Là Gì? (Giải Thích Đơn Giản)</h2>
<p><strong>Forex</strong> (Foreign Exchange) là thị trường <strong>mua bán tiền tệ</strong>. Nói dễ hiểu: bạn đổi tiền này sang tiền khác và kiếm lời từ sự chênh lệch tỷ giá.</p>
<p><strong>Ví dụ:</strong> Bạn mua 1,000 EUR khi giá EUR/USD = 1.0800 (tốn $1,080). Sau 3 ngày, EUR tăng lên 1.1000 → bạn bán và nhận $1,100. Lời $20. Đó chính là <strong>"đánh Forex"</strong>!</p>

<h2>📊 Forex Giao Dịch Những Gì?</h2>
<p>Không chỉ có tiền tệ! Trên các sàn Forex hiện đại, bạn có thể giao dịch:</p>
<ul>
<li><strong>Cặp tiền tệ:</strong> EUR/USD, GBP/USD, USD/JPY...</li>
<li><strong>Vàng (XAU/USD):</strong> Sản phẩm hot nhất cho trader Việt</li>
<li><strong>Dầu thô:</strong> WTI, Brent</li>
<li><strong>Chỉ số:</strong> S&P 500, Nasdaq, DAX</li>
<li><strong>Crypto:</strong> BTC, ETH (dạng CFD)</li>
</ul>

<h2>📱 Cách Bắt Đầu Đánh Forex — 5 Bước</h2>
<ol>
<li><strong>Chọn sàn uy tín</strong> — Exness, XM, Vantage (có giấy phép FCA/ASIC/CySEC)</li>
<li><strong>Mở tài khoản demo</strong> — Tập giao dịch với tiền ảo, 0 rủi ro</li>
<li><strong>Học kiến thức cơ bản</strong> — Đọc biểu đồ, đường trend, support/resistance</li>
<li><strong>Mở tài khoản thật</strong> — Nạp $10-50 để bắt đầu</li>
<li><strong>Giao dịch nhỏ</strong> — Lot 0.01, rủi ro tối đa 1-2% vốn/lệnh</li>
</ol>

<h2>💰 Cần Bao Nhiêu Tiền Để Bắt Đầu?</h2>
<table><thead><tr><th>Mức vốn</th><th>Phù hợp</th><th>Sàn đề xuất</th></tr></thead>
<tbody>
<tr><td>$5-10</td><td>Tập luyện, học giao dịch</td><td>XM ($5), Exness ($10)</td></tr>
<tr><td>$50-200</td><td>Bắt đầu nghiêm túc</td><td>Exness, Vantage</td></tr>
<tr><td>$500+</td><td>Giao dịch chuyên nghiệp</td><td>Exness Raw, IC Markets</td></tr>
</tbody></table>

<h2>⚠️ Rủi Ro Cần Biết</h2>
<ul>
<li><strong>Có thể mất tiền:</strong> 70-80% trader mới thua lỗ trong năm đầu</li>
<li><strong>Đòn bẩy = dao hai lưỡi:</strong> Lãi nhanh nhưng cũng lỗ nhanh</li>
<li><strong>Tâm lý quan trọng nhất:</strong> Tham lam và sợ hãi là kẻ thù lớn nhất</li>
</ul>

<h2>🎯 5 Mẹo Cho Người Mới</h2>
<ol>
<li><strong>Demo ít nhất 1 tháng</strong> trước khi nạp tiền thật</li>
<li><strong>Chỉ rủi ro 1-2% vốn/lệnh</strong> — có $100 thì SL max $1-2</li>
<li><strong>Không vay tiền để đánh Forex</strong> — chỉ dùng tiền nhàn rỗi</li>
<li><strong>Ghi nhật ký giao dịch</strong> — học từ lỗi sai</li>
<li><strong>Kiên nhẫn</strong> — Forex không phải cách làm giàu nhanh</li>
</ol>

<p>👉 <a href="/tin-tuc/san-exness-co-lua-dao-khong/">Sàn nào uy tín?</a> | <a href="/tin-tuc/copy-trading-la-gi-huong-dan-top-san-uy-tin/">Copy Trading cho người mới</a></p>
<p><strong>⚠️ Cảnh báo:</strong> <em>Forex có rủi ro cao. 70-80% trader cá nhân thua lỗ. Chỉ đầu tư số tiền bạn chấp nhận mất.</em></p>
</article>`
    },
    {
        title: 'Đánh Forex Sàn Nào Uy Tín? Top 5 Sàn Tốt Nhất Cho Trader Việt 2026',
        slug: 'danh-forex-san-nao-uy-tin',
        meta_title: 'Đánh Forex Sàn Nào Uy Tín? Top 5 Sàn Forex Tốt Nhất 2026',
        meta_description: '✅ Đánh Forex sàn nào uy tín? So sánh top 5 sàn tốt nhất 2026: Exness, XM, Vantage, IC Markets, FXTM. Tiêu chí chọn sàn an toàn cho người Việt.',
        excerpt: 'So sánh top 5 sàn Forex uy tín nhất cho trader Việt Nam 2026 và hướng dẫn tiêu chí chọn sàn an toàn.',
        featured_image: img('1460925895917-afdab827c52f'), featured_image_alt: 'Đánh forex sàn nào uy tín 2026',
        category_id: cat, tags: ['forex', 'sàn forex', 'uy tín', 'so sánh sàn'],
        is_published: false, scheduled_at: '2026-03-29T05:00:00Z',
        content: `<article>
<p>Bạn muốn bắt đầu <strong>đánh Forex</strong> nhưng không biết <strong>chơi sàn nào uy tín</strong>? Đây là câu hỏi quan trọng nhất — chọn sai sàn có thể mất trắng tiền dù giao dịch giỏi. Bài viết so sánh <strong>top 5 sàn tốt nhất</strong> cho trader Việt Nam, sử dụng tiêu chí khách quan và dễ hiểu.</p>

<h2>📊 Top 5 Sàn Forex Uy Tín Cho Trader Việt 2026</h2>
<table><thead><tr><th>#</th><th>Sàn</th><th>Giấy phép</th><th>Nạp min</th><th>Spread từ</th><th>Điểm nổi bật</th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>Exness</strong></td><td>FCA, CySEC</td><td>$10</td><td>0.0 pips</td><td>Rút tiền tức thì ⭐</td></tr>
<tr><td>2</td><td><strong>XM</strong></td><td>CySEC, ASIC</td><td>$5</td><td>1.0 pips</td><td>Bonus $30 ⭐</td></tr>
<tr><td>3</td><td><strong>Vantage</strong></td><td>ASIC, FCA</td><td>$50</td><td>0.0 pips</td><td>ECN giá rẻ ⭐</td></tr>
<tr><td>4</td><td><strong>IC Markets</strong></td><td>ASIC, CySEC</td><td>$200</td><td>0.0 pips</td><td>Tốc độ nhanh nhất ⭐</td></tr>
<tr><td>5</td><td><strong>FXTM</strong></td><td>FCA, CySEC</td><td>$10</td><td>0.0 pips</td><td>Copy Trading tốt ⭐</td></tr>
</tbody></table>

<h2>🔍 5 Tiêu Chí Chọn Sàn An Toàn</h2>
<ol>
<li><strong>Giấy phép Tier-1</strong> — FCA (Anh), ASIC (Úc), CySEC (EU). KHÔNG chọn sàn chỉ có giấy phép offshore</li>
<li><strong>Thời gian hoạt động > 10 năm</strong> — Sàn lâu đời = đã qua nhiều khủng hoảng</li>
<li><strong>Nạp/rút nhanh</strong> — Hỗ trợ ngân hàng Việt Nam, rút trong vài giờ</li>
<li><strong>Hỗ trợ tiếng Việt</strong> — CSKH, tài liệu, webinar</li>
<li><strong>Phí minh bạch</strong> — Công khai spread, hoa hồng, phí qua đêm</li>
</ol>

<h2>🎯 Nên Chọn Sàn Nào?</h2>
<ul>
<li><strong>Người mới, vốn nhỏ:</strong> XM ($5 nạp) hoặc Exness ($10)</li>
<li><strong>Ưu tiên rút nhanh:</strong> Exness (tức thì)</li>
<li><strong>Muốn bonus:</strong> XM ($30) hoặc Vantage ($30 + 100%)</li>
<li><strong>Scalper chuyên nghiệp:</strong> IC Markets hoặc Vantage Raw ECN</li>
</ul>

<p>👉 <a href="/tin-tuc/danh-forex-la-gi-cach-choi/">Forex là gì?</a> | <a href="/so-sanh/">So sánh chi tiết</a></p>
<p><strong>⚠️</strong> <em>Giao dịch Forex có rủi ro cao. Chọn sàn uy tín giúp giảm rủi ro phi giao dịch.</em></p>
</article>`
    },
    {
        title: 'Chơi Forex Có Phạm Pháp Không? Có Bị Cấm Hay Bị Phạt Ở Việt Nam?',
        slug: 'choi-forex-co-pham-phap-khong',
        meta_title: 'Chơi Forex Có Phạm Pháp Không? Pháp Luật Việt Nam 2026 Nói Gì?',
        meta_description: '✅ Đánh Forex có vi phạm pháp luật không? Chơi Forex có bị cấm, bị phạt ở Việt Nam? Phân tích pháp lý chi tiết và cách giao dịch an toàn 2026.',
        excerpt: 'Giải đáp: chơi Forex có phạm pháp không, có bị cấm ở VN không, có phải nộp thuế không. Phân tích pháp lý dễ hiểu cho người mới.',
        featured_image: img('1589829545856-d10d557cf95f'), featured_image_alt: 'Chơi forex có phạm pháp không Việt Nam',
        category_id: cat, tags: ['forex', 'pháp luật', 'việt nam', 'cấm', 'phạt'],
        is_published: false, scheduled_at: '2026-03-30T05:00:00Z',
        content: `<article>
<p>Bạn muốn thử <strong>đánh Forex</strong> nhưng lo lắng: <strong>"Chơi Forex có phạm pháp không? Có bị phạt không?"</strong>. Đây là câu hỏi rất chính đáng! Bài viết phân tích chi tiết pháp luật Việt Nam về Forex bằng ngôn ngữ dễ hiểu nhé.</p>

<h2>📌 Pháp Luật VN Nói Gì Về Forex?</h2>
<p>Hiện tại (2026), Việt Nam <strong>chưa có luật cụ thể</strong> quy định về giao dịch Forex cá nhân qua sàn quốc tế. Nghĩa là:</p>
<table><thead><tr><th>Câu hỏi</th><th>Trả lời</th></tr></thead>
<tbody>
<tr><td><strong>Chơi Forex có phạm pháp không?</strong></td><td>❌ Không — chưa có luật cấm cá nhân giao dịch</td></tr>
<tr><td><strong>Có bị cấm không?</strong></td><td>❌ Không bị cấm — nhưng cũng chưa cho phép chính thức</td></tr>
<tr><td><strong>Có bị phạt không?</strong></td><td>❌ Không — chưa có chế tài xử phạt trader cá nhân</td></tr>
<tr><td><strong>Có phải nộp thuế không?</strong></td><td>⚠️ Chưa rõ — VN chưa có quy định thuế thu nhập từ Forex</td></tr>
</tbody></table>

<h2>🔍 Vùng Xám Pháp Lý — Nghĩa Là Gì?</h2>
<p>"Vùng xám" nghĩa là <strong>không cấm, không cho phép</strong>. Cụ thể:</p>
<ul>
<li>Chưa có sàn Forex quốc tế nào được cấp phép hoạt động tại VN</li>
<li>Ngân hàng Nhà nước không quản lý hoạt động Forex cá nhân</li>
<li>Hàng triệu trader Việt đang giao dịch bình thường trên Exness, XM, Vantage...</li>
<li>Trader tự chịu trách nhiệm về giao dịch của mình</li>
</ul>

<h2>⚖️ Đánh Forex Có Phải Nộp Thuế Không?</h2>
<p>Hiện tại, VN <strong>chưa có quy định thuế</strong> cụ thể cho thu nhập từ giao dịch Forex cá nhân qua sàn quốc tế. Tuy nhiên, nếu pháp luật thay đổi trong tương lai, thu nhập từ Forex có thể được tính thuế thu nhập cá nhân (TNCN).</p>

<h2>🛡️ Cách Chơi Forex An Toàn Về Pháp Lý</h2>
<ol>
<li><strong>Chọn sàn có giấy phép quốc tế</strong> — FCA, ASIC, CySEC (không phải sàn không rõ nguồn gốc)</li>
<li><strong>Không tổ chức sàn Forex</strong> — Cá nhân giao dịch OK, nhưng mở sàn Forex tại VN là vi phạm</li>
<li><strong>Không lôi kéo người khác</strong> — Hoạt động MLM/multi-level liên quan Forex có thể bị xử lý</li>
<li><strong>Giữ bằng chứng giao dịch</strong> — Screenshot nạp/rút, lịch sử giao dịch</li>
<li><strong>Dùng tiền nhàn rỗi</strong> — Không vay mượn, không dùng tiền cần thiết</li>
</ol>

<h2>❓ FAQ</h2>
<h3>Forex có phải đánh bạc không?</h3>
<p>Không. Forex là thị trường tài chính lớn nhất thế giới ($7+ nghìn tỷ/ngày), được quản lý bởi các ngân hàng trung ương. Tuy nhiên, nếu bạn giao dịch mà không có kiến thức = giống đánh bạc.</p>

<h3>Chơi Forex có an toàn không?</h3>
<p>An toàn nếu: chọn sàn uy tín + quản lý vốn tốt + học kiến thức trước khi giao dịch. Rủi ro chính đến từ thị trường, không phải pháp lý.</p>

<p>👉 <a href="/tin-tuc/danh-forex-la-gi-cach-choi/">Cách đánh Forex</a> | <a href="/tin-tuc/danh-forex-san-nao-uy-tin/">Sàn nào uy tín?</a></p>
<p><strong>⚠️</strong> <em>Bài viết mang tính thông tin, không phải tư vấn pháp lý. Giao dịch Forex có rủi ro cao.</em></p>
</article>`
    },
    {
        title: 'Đánh Forex Vàng: Hướng Dẫn Giao Dịch XAU/USD Cho Người Mới 2026',
        slug: 'danh-forex-vang-xau-usd',
        meta_title: 'Đánh Forex Vàng (XAU/USD): Hướng Dẫn Toàn Diện Cho Người Mới 2026',
        meta_description: '✅ Hướng dẫn đánh Forex Vàng (XAU/USD) từ A-Z: cách đọc biểu đồ, chiến lược, quản lý vốn, sàn tốt nhất để giao dịch vàng 2026.',
        excerpt: 'Hướng dẫn giao dịch vàng XAU/USD trên Forex: kiến thức cơ bản, chiến lược, phí, và sàn tốt nhất cho trader Việt.',
        featured_image: img('1610375461246-83df859d849d'), featured_image_alt: 'Đánh forex vàng XAU USD 2026',
        category_id: cat, tags: ['forex', 'vàng', 'xau/usd', 'giao dịch vàng'],
        is_published: false, scheduled_at: '2026-03-31T05:00:00Z',
        content: `<article>
<p><strong>Vàng (XAU/USD)</strong> là sản phẩm được trader Việt Nam giao dịch <strong>nhiều nhất</strong> trên thị trường Forex. Biến động mạnh, thanh khoản cao, giao dịch 24/5 — vàng mang lại cơ hội lợi nhuận lớn nhưng cũng đi kèm rủi ro. Bài viết hướng dẫn bạn cách giao dịch vàng an toàn và hiệu quả nhé!</p>

<h2>📌 Đánh Forex Vàng Là Gì?</h2>
<p>"Đánh Forex vàng" nghĩa là <strong>giao dịch cặp XAU/USD</strong> (giá vàng tính bằng USD) qua sàn Forex. Bạn không cần mua vàng thật — chỉ cần dự đoán giá vàng lên hay xuống.</p>
<ul>
<li><strong>Buy (Mua):</strong> Khi bạn nghĩ vàng sẽ tăng giá</li>
<li><strong>Sell (Bán):</strong> Khi bạn nghĩ vàng sẽ giảm giá</li>
</ul>

<h2>📊 Tại Sao Vàng Phổ Biến?</h2>
<table><thead><tr><th>Ưu điểm</th><th>Chi tiết</th></tr></thead>
<tbody>
<tr><td><strong>Biến động mạnh</strong></td><td>Vàng thường dao động $20-50/ngày = cơ hội lớn</td></tr>
<tr><td><strong>Thanh khoản cao</strong></td><td>Luôn có người mua/bán, execution nhanh</td></tr>
<tr><td><strong>Tài sản trú ẩn</strong></td><td>Tăng giá khi thị trường bất ổn</td></tr>
<tr><td><strong>Đòn bẩy cao</strong></td><td>Exness cho đòn bẩy vô cực trên vàng</td></tr>
</tbody></table>

<h2>🎯 Chiến Lược Giao Dịch Vàng Cho Người Mới</h2>
<ol>
<li><strong>Theo trend (xu hướng):</strong> Vàng đang tăng → Buy. Đang giảm → Sell. Đừng đi ngược trend!</li>
<li><strong>Giao dịch theo tin tức:</strong> Vàng nhạy cảm với CPI, Non-Farm, lãi suất Fed</li>
<li><strong>Support/Resistance:</strong> Mua ở vùng hỗ trợ, bán ở vùng kháng cự</li>
<li><strong>Luôn đặt Stop Loss:</strong> Vàng biến động mạnh, SL bắt buộc!</li>
</ol>

<h2>💰 Sàn Nào Giao Dịch Vàng Tốt Nhất?</h2>
<table><thead><tr><th>Sàn</th><th>Spread vàng</th><th>Đòn bẩy vàng</th></tr></thead>
<tbody>
<tr><td><strong>Exness Raw</strong></td><td>0.0-6 cents ⭐</td><td>Vô cực</td></tr>
<tr><td><strong>Vantage ECN</strong></td><td>0.0-8 cents ⭐</td><td>1:500</td></tr>
<tr><td><strong>IC Markets</strong></td><td>0.0-10 cents</td><td>1:500</td></tr>
<tr><td><strong>XM</strong></td><td>25-35 cents</td><td>1:888</td></tr>
</tbody></table>

<h2>⚠️ Rủi Ro Giao Dịch Vàng</h2>
<ul>
<li><strong>Biến động $30-50/ngày</strong> = với 1 lot có thể lãi/lỗ $3,000-5,000</li>
<li><strong>Spread mở rộng</strong> lúc tin tức lớn</li>
<li><strong>Gap giá cuối tuần</strong> — cẩn thận giữ lệnh qua weekend</li>
</ul>

<p>👉 <a href="/tin-tuc/danh-forex-la-gi-cach-choi/">Forex là gì?</a> | <a href="/tin-tuc/san-exness-giao-dich-nhung-gi/">Exness giao dịch gì?</a></p>
<p><strong>⚠️</strong> <em>Giao dịch vàng rủi ro rất cao do biến động lớn. Luôn đặt Stop Loss.</em></p>
</article>`
    },
    {
        title: 'Chơi Forex Thua Lỗ: 7 Nguyên Nhân & Cách Khắc Phục Cho Trader Mới',
        slug: 'choi-forex-thua-lo-nguyen-nhan',
        meta_title: 'Chơi Forex Thua Lỗ: 7 Sai Lầm Phổ Biến & Cách Khắc Phục 2026',
        meta_description: '✅ Tại sao chơi Forex thua lỗ? 7 nguyên nhân thường gặp: không stop loss, đòn bẩy quá cao, revenge trading. Bài học xương máu và cách khắc phục.',
        excerpt: '7 nguyên nhân phổ biến khiến trader mới thua lỗ Forex và cách khắc phục thiết thực từ kinh nghiệm thực tế.',
        featured_image: img('1563986768609-322da13575f2'), featured_image_alt: 'Chơi forex thua lỗ nguyên nhân',
        category_id: cat, tags: ['forex', 'thua lỗ', 'sai lầm', 'kinh nghiệm'],
        is_published: false, scheduled_at: '2026-04-01T05:00:00Z',
        content: `<article>
<p>Thống kê cho thấy <strong>70-80% trader mới thua lỗ</strong> trong năm đầu tiên. Bạn không cô đơn! Bài viết chia sẻ <strong>7 nguyên nhân phổ biến nhất</strong> và cách khắc phục — viết bằng ngôn ngữ thân thiện, như lời khuyên từ một người bạn đi trước vậy 😊</p>

<h2>1️⃣ Không Đặt Stop Loss</h2>
<p><strong>Sai lầm:</strong> "Chờ thêm chút nữa, giá sẽ quay lại" → Cuối cùng cháy tài khoản.</p>
<p><strong>Cách sửa:</strong> LUÔN đặt SL trước khi vào lệnh. Quy tắc: rủi ro tối đa 1-2% vốn/lệnh.</p>

<h2>2️⃣ Đòn Bẩy Quá Cao</h2>
<p><strong>Sai lầm:</strong> Vốn $100, dùng đòn bẩy 1:500 → giao dịch như có $50,000 → lỗ vài pip = mất 50% vốn.</p>
<p><strong>Cách sửa:</strong> Dùng đòn bẩy thực tế (effective leverage) dưới 1:10. Đòn bẩy cao ≠ phải dùng hết!</p>

<h2>3️⃣ Revenge Trading (Giao Dịch Gỡ)</h2>
<p><strong>Sai lầm:</strong> Vừa thua → vào lệnh ngay để "gỡ lại" → lot lớn hơn → thua tiếp → vòng lặp thua.</p>
<p><strong>Cách sửa:</strong> Thua 2 lệnh liên tiếp → DỪNG LẠI. Tắt máy, đi dạo, ngày mai giao dịch tiếp.</p>

<h2>4️⃣ Không Có Chiến Lược</h2>
<p><strong>Sai lầm:</strong> Giao dịch theo cảm tính, "thấy đẹp thì vào lệnh".</p>
<p><strong>Cách sửa:</strong> Viết ra trading plan: vào lệnh khi nào, SL ở đâu, TP ở đâu. Tuân thủ 100%.</p>

<h2>5️⃣ Overtrading (Giao Dịch Quá Nhiều)</h2>
<p><strong>Sai lầm:</strong> Mở 10-20 lệnh/ngày → phí spread ăn hết lợi nhuận.</p>
<p><strong>Cách sửa:</strong> Tối đa 2-3 lệnh/ngày. Chất lượng > Số lượng.</p>

<h2>6️⃣ Không Học Kiến Thức</h2>
<p><strong>Sai lầm:</strong> Nạp tiền ngay, giao dịch luôn, không hiểu support/resistance, trend là gì.</p>
<p><strong>Cách sửa:</strong> Dành ít nhất 1 tháng học cơ bản + demo trước khi nạp tiền thật.</p>

<h2>7️⃣ Kỳ Vọng Quá Cao</h2>
<p><strong>Sai lầm:</strong> "Nạp $100, kiếm $1,000/tháng" → thất vọng → bỏ cuộc hoặc liều lĩnh.</p>
<p><strong>Cách sửa:</strong> Kỳ vọng thực tế: 5-15%/tháng là TỐT. Warren Buffett chỉ đạt ~20%/năm!</p>

<h2>🎯 Lộ Trình Thoát Thua Lỗ</h2>
<ol>
<li>Tháng 1-3: Demo + học kiến thức cơ bản</li>
<li>Tháng 4-6: Nạp vốn nhỏ ($50-100), lot 0.01</li>
<li>Tháng 7-12: Tăng dần vốn nếu consistent profitable</li>
<li>Năm 2+: Giao dịch với vốn lớn hơn, đa dạng sản phẩm</li>
</ol>

<p>👉 <a href="/tin-tuc/danh-forex-la-gi-cach-choi/">Forex cho người mới</a> | <a href="/tin-tuc/copy-trading-la-gi-huong-dan-top-san-uy-tin/">Copy Trading thay vì tự trade</a></p>
<p><strong>⚠️</strong> <em>Forex có rủi ro cao. Thua lỗ là bình thường, quan trọng là học từ sai lầm.</em></p>
</article>`
    },
    {
        title: 'Giấy Phép Sàn Forex: Cách Check & Phân Biệt FCA, ASIC, CySEC, FSA',
        slug: 'giay-phep-san-forex-cach-check',
        meta_title: 'Giấy Phép Sàn Forex: Hướng Dẫn Check FCA, ASIC, CySEC Chi Tiết 2026',
        meta_description: '✅ Cách check giấy phép sàn Forex: FCA, ASIC, CySEC, FSA là gì? Hướng dẫn kiểm tra giấy phép thật/giả. Phân biệt tier-1, tier-2, tier-3.',
        excerpt: 'Hướng dẫn kiểm tra giấy phép sàn Forex: FCA, ASIC, CySEC, FSA khác gì, cách check trực tiếp trên website cơ quan quản lý.',
        featured_image: img('1554224155-6726b3ff858f'), featured_image_alt: 'Giấy phép sàn Forex FCA ASIC CySEC',
        category_id: cat, tags: ['giấy phép', 'FCA', 'ASIC', 'CySEC', 'FSA', 'sàn forex'],
        is_published: false, scheduled_at: '2026-04-02T05:00:00Z',
        content: `<article>
<p>Bạn muốn kiểm tra xem sàn Forex có uy tín không? Bước đầu tiên là <strong>check giấy phép</strong>! Nhưng FCA, ASIC, CySEC, FSA... nhiều chữ viết tắt quá — khó hiểu phải không? Bài viết giải thích <strong>đơn giản, dễ hiểu</strong>, và hướng dẫn bạn cách tự kiểm tra nhé.</p>

<h2>📌 Tại Sao Giấy Phép Quan Trọng?</h2>
<p>Giấy phép = <strong>"giấy phép lái xe"</strong> của sàn Forex. Sàn không có giấy phép = không ai quản lý = có thể chiếm đoạt tiền bạn bất cứ lúc nào.</p>

<h2>🏆 Phân Loại Giấy Phép: Tier-1, 2, 3</h2>
<table><thead><tr><th>Hạng</th><th>Cơ quan</th><th>Quốc gia</th><th>Độ tin cậy</th></tr></thead>
<tbody>
<tr><td><strong>Tier-1 ⭐</strong></td><td>FCA</td><td>Anh 🇬🇧</td><td>Cao nhất — bảo vệ £85,000</td></tr>
<tr><td><strong>Tier-1 ⭐</strong></td><td>ASIC</td><td>Úc 🇦🇺</td><td>Rất cao — kiểm toán nghiêm ngặt</td></tr>
<tr><td><strong>Tier-1</strong></td><td>CySEC</td><td>Síp 🇨🇾 (EU)</td><td>Cao — chuẩn EU, bảo vệ €20,000</td></tr>
<tr><td><strong>Tier-2</strong></td><td>DFSA</td><td>Dubai 🇦🇪</td><td>Trung bình — uy tín khu vực</td></tr>
<tr><td><strong>Tier-2</strong></td><td>FSCA</td><td>Nam Phi 🇿🇦</td><td>Trung bình</td></tr>
<tr><td><strong>Tier-3</strong></td><td>FSA</td><td>Seychelles</td><td>Thấp — ít quản lý</td></tr>
<tr><td><strong>Tier-3</strong></td><td>IFSC</td><td>Belize</td><td>Thấp — offshore</td></tr>
<tr><td><strong>Tier-3</strong></td><td>VFSC</td><td>Vanuatu</td><td>Thấp — dễ xin</td></tr>
</tbody></table>
<p><strong>Quy tắc:</strong> Sàn có ít nhất <strong>1 giấy phép Tier-1</strong> = đáng tin cậy.</p>

<h2>🔍 Cách Check Giấy Phép Thật/Giả</h2>
<h3>Check FCA (Anh)</h3>
<ol>
<li>Truy cập: <strong>register.fca.org.uk</strong></li>
<li>Nhập tên sàn hoặc số FRN</li>
<li>Xem trạng thái: <strong>"Authorised"</strong> = hợp lệ</li>
</ol>

<h3>Check ASIC (Úc)</h3>
<ol>
<li>Truy cập: <strong>connectonline.asic.gov.au</strong></li>
<li>Tìm theo ABN hoặc tên công ty</li>
<li>Xem <strong>AFSL number</strong> và trạng thái</li>
</ol>

<h3>Check CySEC (EU)</h3>
<ol>
<li>Truy cập: <strong>cysec.gov.cy</strong> → Regulated Entities</li>
<li>Tìm theo tên hoặc số CIF</li>
<li>Xem trạng thái license</li>
</ol>

<h2>📊 Giấy Phép Các Sàn Phổ Biến</h2>
<table><thead><tr><th>Sàn</th><th>Tier-1</th><th>Tier-2/3</th></tr></thead>
<tbody>
<tr><td>Exness</td><td>FCA, CySEC ⭐</td><td>FSA, FSCA</td></tr>
<tr><td>XM</td><td>CySEC, ASIC ⭐</td><td>DFSA, IFSC</td></tr>
<tr><td>Vantage</td><td>ASIC, FCA ⭐</td><td>CIMA, VFSC</td></tr>
<tr><td>IC Markets</td><td>ASIC, CySEC ⭐</td><td>FSA</td></tr>
</tbody></table>

<h2>⚠️ Dấu Hiệu Sàn Không Uy Tín</h2>
<ul>
<li>❌ Chỉ có giấy phép Tier-3 (VFSC, IFSC, SVG)</li>
<li>❌ Không tìm thấy trên website cơ quan quản lý</li>
<li>❌ Hứa lãi suất cố định (5-10%/tháng chắc chắn)</li>
<li>❌ Không cho rút tiền hoặc delay rút tiền</li>
</ul>

<p>👉 <a href="/tin-tuc/danh-forex-san-nao-uy-tin/">Sàn nào uy tín?</a> | <a href="/tin-tuc/san-exness-co-lua-dao-khong/">Exness có uy tín?</a></p>
<p><strong>⚠️</strong> <em>Luôn check giấy phép trước khi nạp tiền vào bất kỳ sàn nào.</em></p>
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
