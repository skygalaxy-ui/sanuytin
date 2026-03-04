const { createClient } = require('@supabase/supabase-js');
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4');
const cat = 'ac86a067-5518-42d7-8045-a92a75f4a15f';
const img = (id) => `https://images.unsplash.com/photo-${id}?w=1200&h=630&fit=crop&q=80`;

const posts = [
    // === EXNESS còn lại ===
    {
        title: 'Exness Không Đăng Nhập Được? 7 Cách Khắc Phục Nhanh Nhất 2026',
        slug: 'exness-khong-dang-nhap-duoc',
        meta_title: 'Exness Không Đăng Nhập Được? Nguyên Nhân & 7 Cách Khắc Phục 2026',
        meta_description: '✅ Exness không đăng nhập được? 7 nguyên nhân phổ biến và cách khắc phục nhanh: lỗi mật khẩu, xác minh 2FA, lỗi server, VPN. Hướng dẫn chi tiết.',
        excerpt: 'Tổng hợp 7 nguyên nhân và cách khắc phục khi không đăng nhập được Exness: quên mật khẩu, lỗi 2FA, VPN, server down.',
        featured_image: img('1563986768609-322da13575f2'), featured_image_alt: 'Exness không đăng nhập được cách khắc phục',
        category_id: cat, tags: ['exness', 'hướng dẫn', 'lỗi đăng nhập'],
        is_published: false, scheduled_at: '2026-03-22T05:00:00Z', // 22/03
        content: `<article>
<p>Bạn đang gặp tình trạng <strong>không đăng nhập được Exness</strong>? Đừng lo — đây là lỗi khá phổ biến và thường có cách khắc phục đơn giản. Bài viết này tổng hợp <strong>7 nguyên nhân thường gặp</strong> và cách sửa nhanh nhất.</p>

<h2>🔍 7 Nguyên Nhân & Cách Khắc Phục</h2>

<h3>1. Sai mật khẩu</h3>
<p><strong>Triệu chứng:</strong> Báo "Invalid password" hoặc "Sai mật khẩu".</p>
<p><strong>Cách sửa:</strong> Nhấn <strong>"Quên mật khẩu"</strong> → nhập email → nhận link đặt lại mật khẩu trong 5 phút. Lưu ý: phân biệt mật khẩu Personal Area và mật khẩu MT4/MT5 (khác nhau).</p>

<h3>2. Lỗi xác thực 2 bước (2FA)</h3>
<p><strong>Triệu chứng:</strong> Nhập mã Google Authenticator nhưng báo sai.</p>
<p><strong>Cách sửa:</strong> Kiểm tra <strong>thời gian điện thoại</strong> phải đồng bộ tự động (Settings → Date & Time → Automatic). Nếu mất app 2FA → liên hệ CSKH Exness kèm CMND để gỡ 2FA.</p>

<h3>3. Tài khoản bị khoá</h3>
<p><strong>Triệu chứng:</strong> Báo "Account suspended" hoặc "Tài khoản bị tạm khoá".</p>
<p><strong>Cách sửa:</strong> Liên hệ <strong>CSKH Exness 24/7</strong> qua Live Chat. Nguyên nhân có thể: chưa xác minh KYC, nghi ngờ gian lận, hoặc vi phạm điều khoản.</p>

<h3>4. Lỗi VPN/IP bị chặn</h3>
<p><strong>Triệu chứng:</strong> Trang Exness không load hoặc báo lỗi kết nối.</p>
<p><strong>Cách sửa:</strong> Tắt VPN nếu đang bật. Hoặc thử đổi sang VPN server khác (Singapore, Hong Kong). Một số mạng công ty chặn website tài chính.</p>

<h3>5. Lỗi server Exness</h3>
<p><strong>Triệu chứng:</strong> Báo "Server error" hoặc trang trắng.</p>
<p><strong>Cách sửa:</strong> Chờ 15-30 phút và thử lại. Kiểm tra trang <strong>status.exness.com</strong> hoặc Twitter @Exness xem có bảo trì không.</p>

<h3>6. Cache/Cookie lỗi</h3>
<p><strong>Triệu chứng:</strong> Đăng nhập vòng lặp hoặc quay lại trang login.</p>
<p><strong>Cách sửa:</strong> Xoá cache trình duyệt (Ctrl+Shift+Delete) → thử lại. Hoặc dùng trình duyệt khác/chế độ ẩn danh.</p>

<h3>7. App Exness cũ</h3>
<p><strong>Triệu chứng:</strong> App Exness báo lỗi hoặc không phản hồi.</p>
<p><strong>Cách sửa:</strong> Cập nhật app lên phiên bản mới nhất từ App Store/Google Play. Nếu vẫn lỗi → xoá app và cài lại.</p>

<h2>📞 Liên Hệ CSKH Exness</h2>
<ul>
<li><strong>Live Chat:</strong> exness.com → góc phải dưới (24/7, tiếng Việt)</li>
<li><strong>Email:</strong> support@exness.com</li>
<li><strong>Hotline:</strong> Có số điện thoại cho từng quốc gia</li>
</ul>

<p>👉 <a href="/tin-tuc/san-exness-co-lua-dao-khong/">Exness có uy tín không?</a> | <a href="/tin-tuc/san-exness-nen-dung-tai-khoan-nao/">Nên dùng tài khoản nào?</a></p>
<p><strong>⚠️</strong> <em>Giao dịch Forex có rủi ro cao.</em></p>
</article>`
    },
    {
        title: 'Sàn Exness Có Miễn Phí Qua Đêm Không? Swap-Free & Phí Overnight 2026',
        slug: 'san-exness-co-mien-phi-qua-dem-khong',
        meta_title: 'Exness Có Miễn Phí Qua Đêm Không? Swap-Free & Phí Overnight Chi Tiết',
        meta_description: '✅ Exness miễn phí qua đêm không? Giải thích swap, phí overnight, tài khoản Swap-Free. Cách tiết kiệm phí giữ lệnh qua đêm trên Exness.',
        excerpt: 'Giải đáp chi tiết phí qua đêm (swap) trên Exness, tài khoản Swap-Free, cách kiểm tra và tiết kiệm phí overnight.',
        featured_image: img('1507679799987-c73779587ccf'), featured_image_alt: 'Exness phí qua đêm swap free',
        category_id: cat, tags: ['exness', 'swap', 'phí qua đêm', 'swap-free'],
        is_published: false, scheduled_at: '2026-03-23T05:00:00Z', // 23/03
        content: `<article>
<p>Nhiều bạn mới giao dịch thắc mắc: <strong>"Exness có miễn phí qua đêm không?"</strong>. Câu trả lời ngắn gọn: <strong>có tài khoản miễn phí qua đêm (Swap-Free), nhưng không phải tất cả</strong>. Cùng tìm hiểu chi tiết nhé!</p>

<h2>📌 Phí Qua Đêm (Swap) Là Gì?</h2>
<p><strong>Swap</strong> hay <strong>phí qua đêm (overnight fee)</strong> là khoản phí (hoặc thu nhập) được tính khi bạn giữ lệnh qua <strong>00:00 giờ server</strong>. Phí này phản ánh chênh lệch lãi suất giữa 2 đồng tiền trong cặp bạn giao dịch.</p>
<ul>
<li><strong>Swap dương (+):</strong> Bạn NHẬN tiền khi giữ lệnh qua đêm</li>
<li><strong>Swap âm (-):</strong> Bạn PHẢ TRẢ phí khi giữ qua đêm</li>
<li><strong>Thứ 4 tính gấp 3:</strong> Phí cuối tuần được tính vào đêm thứ 4</li>
</ul>

<h2>🆓 Tài Khoản Swap-Free Exness</h2>
<p>Exness cung cấp <strong>tài khoản Swap-Free</strong> — miễn phí qua đêm hoàn toàn. Điều kiện:</p>
<table><thead><tr><th>Tiêu chí</th><th>Chi tiết</th></tr></thead>
<tbody>
<tr><td><strong>Ai được?</strong></td><td>Tự động kích hoạt cho một số quốc gia (bao gồm VN)</td></tr>
<tr><td><strong>Sản phẩm</strong></td><td>Forex, Vàng, Bạc, Crypto</td></tr>
<tr><td><strong>Giới hạn</strong></td><td>Giữ lệnh quá lâu có thể bị tính "phí lưu kho" thay swap</td></tr>
<tr><td><strong>Loại tài khoản</strong></td><td>Áp dụng cho tất cả loại TK</td></tr>
</tbody></table>

<h2>💡 Cách Kiểm Tra Swap Trên Exness</h2>
<ol>
<li>Mở MT4/MT5 → chuột phải vào sản phẩm → <strong>Specification</strong></li>
<li>Xem mục <strong>Swap Long</strong> và <strong>Swap Short</strong></li>
<li>Hoặc vào <strong>exness.com → Sản phẩm → Forex → chọn cặp tiền → xem Swap</strong></li>
</ol>

<h2>📊 Ví Dụ Swap Trên Exness</h2>
<table><thead><tr><th>Cặp tiền</th><th>Swap Long</th><th>Swap Short</th></tr></thead>
<tbody>
<tr><td>EUR/USD</td><td>-6.5 USD/lot</td><td>+1.2 USD/lot</td></tr>
<tr><td>XAU/USD (Vàng)</td><td>-15 USD/lot</td><td>+5 USD/lot</td></tr>
<tr><td>GBP/JPY</td><td>+3 USD/lot</td><td>-8 USD/lot</td></tr>
</tbody></table>
<p><em>Số liệu tham khảo, thay đổi theo lãi suất ngân hàng trung ương.</em></p>

<h2>🎯 Mẹo Tiết Kiệm Phí Qua Đêm</h2>
<ul>
<li>Đăng ký tài khoản <strong>Swap-Free</strong> nếu hay giữ lệnh nhiều ngày</li>
<li><strong>Day trading/Scalping</strong> → đóng lệnh trước 00:00 server → không tính swap</li>
<li>Chọn cặp có <strong>swap dương</strong> để vừa trade vừa nhận thêm tiền</li>
</ul>

<p>👉 <a href="/tin-tuc/san-exness-nen-dung-tai-khoan-nao/">Nên dùng tài khoản nào?</a> | <a href="/tin-tuc/san-exness-giao-dich-nhung-gi/">Exness giao dịch gì?</a></p>
<p><strong>⚠️</strong> <em>Giao dịch Forex có rủi ro cao.</em></p>
</article>`
    },
    // === XM ===
    {
        title: 'Sàn XM Là Gì? Đánh Giá Toàn Diện Cho Trader Việt Nam 2026',
        slug: 'san-xm-la-gi-danh-gia',
        meta_title: 'Sàn XM Là Gì? Review Toàn Diện: Uy Tín, Phí, Bonus, Tài Khoản 2026',
        meta_description: '✅ Sàn XM Là Gì? Đánh giá toàn diện XM Global 2026: giấy phép, spread, bonus $30, loại tài khoản, nạp rút. Phù hợp cho trader Việt Nam không?',
        excerpt: 'Đánh giá toàn diện sàn XM Global cho trader Việt: giấy phép, phí, bonus, loại tài khoản, ưu nhược điểm và so sánh với Exness.',
        featured_image: img('1460925895917-afdab827c52f'), featured_image_alt: 'Sàn XM là gì đánh giá 2026',
        category_id: cat, tags: ['xm', 'review sàn', 'xm global', 'xm forex'],
        is_published: false, scheduled_at: '2026-03-24T05:00:00Z', // 24/03
        content: `<article>
<p>Nếu bạn đang tìm hiểu về <strong>sàn XM</strong>, bạn có thể đã gặp nhiều tên gọi: <strong>XM Global, XM Forex, XM Trading, XM Broker</strong> — tất cả đều là cùng một sàn! Bài viết giúp bạn hiểu rõ XM là ai, có đáng tin không, và phù hợp với bạn không.</p>

<h2>📌 XM Là Gì?</h2>
<p>XM (tên đầy đủ: <strong>XM Global Limited</strong>) là sàn Forex và CFD được thành lập năm 2009, phục vụ <strong>hơn 10 triệu trader</strong> tại 190 quốc gia.</p>
<table><thead><tr><th>Thông tin</th><th>Chi tiết</th></tr></thead>
<tbody>
<tr><td><strong>Tên chính thức</strong></td><td>Trading Point of Financial Instruments Ltd</td></tr>
<tr><td><strong>Thành lập</strong></td><td>2009 (15+ năm)</td></tr>
<tr><td><strong>Giấy phép</strong></td><td>CySEC (Síp), ASIC (Úc), DFSA, IFSC</td></tr>
<tr><td><strong>Người dùng</strong></td><td>10 triệu+ tại 190 quốc gia</td></tr>
<tr><td><strong>Nạp tối thiểu</strong></td><td>$5</td></tr>
<tr><td><strong>Nền tảng</strong></td><td>MT4, MT5, XM App</td></tr>
<tr><td><strong>Bonus</strong></td><td>$30 không cần nạp ⭐</td></tr>
</tbody></table>

<h2>✅ Ưu Điểm Sàn XM</h2>
<ol>
<li><strong>Bonus $30 không cần nạp</strong> — Thử giao dịch hoàn toàn miễn phí</li>
<li><strong>Nạp tối thiểu $5</strong> — Thấp nhất ngành</li>
<li><strong>Webinar tiếng Việt miễn phí</strong> — Đào tạo hàng tuần</li>
<li><strong>10M+ người dùng</strong> — Cộng đồng lớn nhất thế giới</li>
<li><strong>Nền tảng MT4/MT5</strong> — Quen thuộc, đầy đủ công cụ</li>
</ol>

<h2>⚠️ Nhược Điểm</h2>
<ol>
<li><strong>Spread cao hơn Exness</strong> — EUR/USD ~1.6 pips vs 0.9 pips</li>
<li><strong>Phí không hoạt động $15/tháng</strong></li>
<li><strong>Rút tiền chậm hơn Exness</strong> — 24h vs tức thì</li>
</ol>

<h2>📊 So Sánh XM vs Exness</h2>
<table><thead><tr><th>Tiêu chí</th><th>XM</th><th>Exness</th></tr></thead>
<tbody>
<tr><td>Nạp tối thiểu</td><td>$5 ⭐</td><td>$10</td></tr>
<tr><td>Spread</td><td>1.6 pips</td><td>0.9 pips ⭐</td></tr>
<tr><td>Bonus</td><td>$30 ⭐</td><td>Không</td></tr>
<tr><td>Rút tiền</td><td>24h</td><td>Tức thì ⭐</td></tr>
<tr><td>Đào tạo</td><td>Webinar VN ⭐</td><td>Ít</td></tr>
</tbody></table>

<p>👉 <a href="/tin-tuc/huong-dan-copy-trade-xm/">Copy Trade XM</a> | <a href="/so-sanh/">So sánh sàn</a></p>
<p><strong>⚠️</strong> <em>Giao dịch Forex có rủi ro cao.</em></p>
</article>`
    },
    {
        title: 'Sàn XM Có Hợp Pháp Không? Pháp Lý & Giấy Phép Chi Tiết 2026',
        slug: 'san-xm-co-hop-phap-khong',
        meta_title: 'Sàn XM Có Hợp Pháp Không? Phân Tích Giấy Phép CySEC, ASIC 2026',
        meta_description: '✅ Sàn XM có hợp pháp không? Phân tích giấy phép CySEC, ASIC, DFSA. XM có bị cấm tại Việt Nam? Giải đáp chi tiết cho trader mới.',
        excerpt: 'Giải đáp sàn XM có hợp pháp không: phân tích giấy phép, pháp lý tại Việt Nam, và so sánh uy tín với các sàn khác.',
        featured_image: img('1589829545856-d10d557cf95f'), featured_image_alt: 'Sàn XM có hợp pháp không 2026',
        category_id: cat, tags: ['xm', 'hợp pháp', 'giấy phép', 'pháp lý'],
        is_published: false, scheduled_at: '2026-03-25T05:00:00Z', // 25/03
        content: `<article>
<p><strong>"Sàn XM có hợp pháp không?"</strong> — câu hỏi quan trọng trước khi giao dịch. Bài viết này phân tích giấy phép XM và khung pháp lý tại Việt Nam bằng ngôn ngữ dễ hiểu cho người mới.</p>

<h2>🛡️ Giấy Phép Sàn XM</h2>
<table><thead><tr><th>Cơ quan</th><th>Quốc gia</th><th>Số giấy phép</th><th>Hạng</th></tr></thead>
<tbody>
<tr><td><strong>CySEC</strong></td><td>Síp (EU)</td><td>120/10</td><td>Tier-1 ⭐</td></tr>
<tr><td><strong>ASIC</strong></td><td>Úc</td><td>443670</td><td>Tier-1 ⭐</td></tr>
<tr><td><strong>DFSA</strong></td><td>Dubai</td><td>F003484</td><td>Tier-2</td></tr>
<tr><td><strong>IFSC</strong></td><td>Belize</td><td>60/354/TS/19</td><td>Tier-3</td></tr>
</tbody></table>

<p><strong>Kết luận:</strong> XM sở hữu 2 giấy phép tier-1 (CySEC + ASIC), thuộc nhóm sàn uy tín nhất thế giới. Sàn lừa đảo không thể đạt được giấy phép này.</p>

<h2>❓ XM Có Hợp Pháp Ở Việt Nam Không?</h2>
<p>Tương tự Exness — Việt Nam chưa có khung pháp lý cụ thể cho Forex quốc tế. XM <strong>không bị cấm</strong> nhưng cũng không được cấp phép chính thức tại VN. Hàng triệu trader Việt đang giao dịch bình thường.</p>

<p>👉 <a href="/tin-tuc/san-xm-la-gi-danh-gia/">XM là gì?</a> | <a href="/tin-tuc/san-exness-co-bi-cam-o-viet-nam-khong/">Forex có bị cấm ở VN?</a></p>
<p><strong>⚠️</strong> <em>Giao dịch Forex có rủi ro cao.</em></p>
</article>`
    },
    {
        title: 'Sàn XM Có Tài Khoản Cent Không? So Sánh Các Loại Tài Khoản XM',
        slug: 'san-xm-co-tai-khoan-cent-khong',
        meta_title: 'XM Có Tài Khoản Cent Không? So Sánh Micro, Standard, Ultra Low 2026',
        meta_description: '✅ XM có tài khoản Cent không? So sánh Micro, Standard, Ultra Low, Shares. Nên chọn loại nào? Hướng dẫn cho trader mới bắt đầu.',
        excerpt: 'Giải đáp XM có tài khoản Cent không, so sánh các loại tài khoản và hướng dẫn chọn phù hợp.',
        featured_image: img('1507679799987-c73779587ccf'), featured_image_alt: 'XM tài khoản cent 2026',
        category_id: cat, tags: ['xm', 'tài khoản', 'cent', 'micro'],
        is_published: false, scheduled_at: '2026-03-26T05:00:00Z', // 26/03
        content: `<article>
<p><strong>"XM có tài khoản Cent không?"</strong> — câu hỏi phổ biến vì tài khoản Cent cho phép giao dịch với rủi ro rất thấp, phù hợp người mới. Câu trả lời ngắn: <strong>XM không có tài khoản Cent, nhưng có tài khoản Micro</strong> — tương tự và phù hợp hơn!</p>

<h2>📊 Các Loại Tài Khoản XM</h2>
<table><thead><tr><th>Loại</th><th>Lot tối thiểu</th><th>Spread</th><th>Nạp min</th><th>Phù hợp</th></tr></thead>
<tbody>
<tr><td><strong>Micro ⭐</strong></td><td>0.01 lot (10 units)</td><td>Từ 1.0 pips</td><td>$5</td><td>Người mới</td></tr>
<tr><td><strong>Standard</strong></td><td>0.01 lot (1,000 units)</td><td>Từ 1.0 pips</td><td>$5</td><td>Trader phổ thông</td></tr>
<tr><td><strong>Ultra Low</strong></td><td>0.01 lot</td><td>Từ 0.6 pips ⭐</td><td>$50</td><td>Trader tiết kiệm phí</td></tr>
<tr><td><strong>Shares</strong></td><td>1 cổ phiếu</td><td>Biến đổi</td><td>$10,000</td><td>Đầu tư cổ phiếu</td></tr>
</tbody></table>

<h2>🔍 Micro vs Cent — Khác Gì?</h2>
<p>Tài khoản <strong>Micro</strong> của XM tương đương tài khoản Cent ở các sàn khác:</p>
<ul>
<li>1 lot Micro = <strong>1,000 units</strong> (thay vì 100,000 units của Standard)</li>
<li>Rủi ro nhỏ hơn <strong>100 lần</strong> so với tài khoản Standard</li>
<li>Chỉ cần $5 để bắt đầu</li>
</ul>

<h2>🎯 Nên Chọn Loại Nào?</h2>
<ul>
<li><strong>Mới hoàn toàn:</strong> Micro — rủi ro thấp nhất, học giao dịch</li>
<li><strong>Muốn spread thấp:</strong> Ultra Low — 0.6 pips, tiết kiệm</li>
<li><strong>Giao dịch cổ phiếu:</strong> Shares — mua cổ phiếu thực</li>
</ul>

<p>👉 <a href="/tin-tuc/san-xm-la-gi-danh-gia/">XM là gì?</a> | <a href="/tin-tuc/san-xm-khuyen-mai/">XM khuyến mãi</a></p>
<p><strong>⚠️</strong> <em>Giao dịch Forex có rủi ro cao.</em></p>
</article>`
    },
    {
        title: 'Sàn XM Khuyến Mãi 2026: Bonus $30 Miễn Phí & Ưu Đãi Nạp Tiền',
        slug: 'san-xm-khuyen-mai',
        meta_title: 'XM Khuyến Mãi 2026: Bonus $30 + 50% Nạp Tiền | Cập Nhật Mới Nhất',
        meta_description: '✅ Tổng hợp khuyến mãi XM 2026: bonus $30 không cần nạp, bonus nạp 50%+20%, chương trình loyalty. Hướng dẫn nhận thưởng từng bước.',
        excerpt: 'Cập nhật toàn bộ chương trình khuyến mãi sàn XM 2026: bonus không nạp, bonus nạp tiền, và cách nhận thưởng.',
        featured_image: img('1554224155-6726b3ff858f'), featured_image_alt: 'XM khuyến mãi bonus 2026',
        category_id: cat, tags: ['xm', 'khuyến mãi', 'bonus', 'ưu đãi'],
        is_published: false, scheduled_at: '2026-03-27T05:00:00Z', // 27/03
        content: `<article>
<p>XM nổi tiếng với các <strong>chương trình khuyến mãi hấp dẫn</strong> — đặc biệt là bonus $30 không cần nạp tiền. Bài viết cập nhật toàn bộ ưu đãi XM 2026 và hướng dẫn bạn nhận thưởng từng bước nhé!</p>

<h2>🎁 Chương Trình Khuyến Mãi XM 2026</h2>
<table><thead><tr><th>Chương trình</th><th>Giá trị</th><th>Điều kiện</th></tr></thead>
<tbody>
<tr><td><strong>Bonus $30 không nạp ⭐</strong></td><td>$30 miễn phí</td><td>Khách mới, xác minh KYC</td></tr>
<tr><td><strong>Bonus nạp 50%</strong></td><td>Tối đa $500</td><td>Nạp lần đầu</td></tr>
<tr><td><strong>Bonus nạp 20%</strong></td><td>Tối đa $4,500</td><td>Các lần nạp tiếp</td></tr>
<tr><td><strong>XM Loyalty Program</strong></td><td>XMP Points đổi quà</td><td>Giao dịch liên tục</td></tr>
<tr><td><strong>Quà sinh nhật</strong></td><td>Tùy hạng thành viên</td><td>Thành viên Loyalty</td></tr>
</tbody></table>

<h2>📱 Cách Nhận Bonus $30 Từng Bước</h2>
<ol>
<li>Đăng ký tài khoản XM (chọn Standard hoặc Micro)</li>
<li><strong>Xác minh KYC</strong> — Upload CMND/CCCD</li>
<li>Chờ phê duyệt (1-24h)</li>
<li>Vào Members Area → <strong>"Claim $30 Bonus"</strong></li>
<li>$30 được cộng vào tài khoản ngay lập tức!</li>
</ol>
<p>💡 <strong>Lưu ý:</strong> Lợi nhuận từ bonus có thể rút, nhưng bản thân $30 không rút được.</p>

<h2>📊 So Sánh Bonus: XM vs Vantage vs FBS</h2>
<table><thead><tr><th>Sàn</th><th>Bonus không nạp</th><th>Bonus nạp</th></tr></thead>
<tbody>
<tr><td>XM</td><td>$30 ⭐</td><td>50% + 20%</td></tr>
<tr><td>Vantage</td><td>$30</td><td>100% + 20% ⭐</td></tr>
<tr><td>FBS</td><td>$100</td><td>100%</td></tr>
<tr><td>Exness</td><td>Không</td><td>Không</td></tr>
</tbody></table>

<p>👉 <a href="/tin-tuc/san-xm-la-gi-danh-gia/">XM là gì?</a> | <a href="/tin-tuc/san-xm-co-tai-khoan-cent-khong/">Tài khoản XM</a></p>
<p><strong>⚠️</strong> <em>Bonus có điều kiện. Đọc kỹ T&C trước khi nhận.</em></p>
</article>`
    }
];

async function main() {
    let ok = 0, skip = 0;
    for (const p of posts) {
        const { data: ex } = await s.from('posts').select('id').eq('slug', p.slug).single();
        if (ex) { console.log('SKIP:', p.slug); skip++; continue; }
        const { data, error } = await s.from('posts').insert([p]).select('id,scheduled_at');
        if (error) { console.log('ERR:', p.slug, error.message); continue; }
        const vn = new Date(data[0].scheduled_at).toLocaleString('vi-VN', {
            timeZone: 'Asia/Ho_Chi_Minh', weekday: 'short', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
        });
        console.log('OK', p.slug, '|', vn);
        ok++;
    }
    console.log(`\nDone: ${ok} inserted, ${skip} skipped`);
}
main();
