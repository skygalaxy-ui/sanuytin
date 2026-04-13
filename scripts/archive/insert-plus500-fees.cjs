const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4'
);

const post = {
    title: 'Phí Giao Dịch Sàn Plus500: Bảng Phí Chi Tiết & Cách Tối Ưu Cho Trader Việt 2026',
    slug: 'phi-giao-dich-san-plus500',
    meta_title: 'Phí Giao Dịch Sàn Plus500 2026: Spread, Phí Qua Đêm, Nạp Rút & Mẹo Tiết Kiệm',
    meta_description: '✅ Tổng hợp chi tiết phí giao dịch sàn Plus500 năm 2026: spread từ 0.8 pips, phí qua đêm, phí không hoạt động $10/tháng, phí nạp rút. So sánh với Exness, XM, IC Markets.',
    excerpt: 'Phân tích toàn diện bảng phí giao dịch sàn Plus500 năm 2026 — từ spread, phí qua đêm (swap), phí chuyển đổi tiền tệ, phí không hoạt động đến phí nạp/rút tiền. Kèm bảng so sánh với các sàn cùng phân khúc và mẹo tiết kiệm phí hiệu quả cho trader Việt Nam.',
    featured_image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=630&fit=crop&q=80',
    featured_image_alt: 'Phí giao dịch sàn Plus500 - bảng phí chi tiết cho trader Việt Nam 2026',
    category_id: 'ac86a067-5518-42d7-8045-a92a75f4a15f', // Kinh nghiệm
    tags: ['plus500', 'phí giao dịch', 'spread', 'phí qua đêm', 'sàn forex'],
    is_published: false,
    scheduled_at: '2026-03-04T05:00:00Z', // 12:00 PM Vietnam time (UTC+7)
    content: `<article>
<p>Khi lựa chọn sàn giao dịch, <strong>phí giao dịch</strong> luôn là yếu tố then chốt ảnh hưởng trực tiếp đến lợi nhuận của trader. <strong>Plus500</strong> — sàn CFD niêm yết trên Sở Giao dịch Chứng khoán London (LSE) — áp dụng mô hình phí <em>không hoa hồng</em>, tất cả chi phí được tích hợp vào spread. Vậy cụ thể <strong>phí giao dịch sàn Plus500</strong> gồm những gì? Bài viết này sẽ phân tích chi tiết từng loại phí, so sánh với các đối thủ và chia sẻ mẹo tiết kiệm phí hiệu quả nhất năm 2026.</p>

<h2>📊 Tổng Quan Cấu Trúc Phí Plus500</h2>

<p>Plus500 áp dụng mô hình <strong>\"zero commission\"</strong> — không thu phí hoa hồng trên bất kỳ giao dịch nào. Thay vào đó, sàn kiếm lợi nhuận thông qua <strong>chênh lệch giá mua/bán (spread)</strong>. Ngoài ra, trader cần lưu ý thêm một số loại phí phi giao dịch.</p>

<p>Dưới đây là bảng tổng hợp toàn bộ các loại phí trên Plus500:</p>

<table>
<thead>
<tr><th>Loại phí</th><th>Mức phí</th><th>Ghi chú</th></tr>
</thead>
<tbody>
<tr><td>Hoa hồng (Commission)</td><td><strong>$0</strong></td><td>Không thu phí hoa hồng trên tất cả giao dịch</td></tr>
<tr><td>Spread (Forex)</td><td><strong>Từ 0.8 pips</strong></td><td>Dynamic spread, thay đổi theo điều kiện thị trường</td></tr>
<tr><td>Spread (Vàng - XAU/USD)</td><td><strong>Từ 0.34 pips</strong></td><td>Spread cạnh tranh cho kim loại quý</td></tr>
<tr><td>Phí qua đêm (Overnight)</td><td><strong>Biến đổi</strong></td><td>Áp dụng khi giữ lệnh qua thời gian cut-off</td></tr>
<tr><td>Phí không hoạt động</td><td><strong>$10/tháng</strong></td><td>Sau 3 tháng không đăng nhập</td></tr>
<tr><td>Phí chuyển đổi tiền tệ</td><td><strong>Đến 0.7%</strong></td><td>Khi giao dịch sản phẩm bằng ngoại tệ khác</td></tr>
<tr><td>Phí nạp tiền</td><td><strong>$0</strong></td><td>Miễn phí nạp tiền nội bộ</td></tr>
<tr><td>Phí rút tiền</td><td><strong>$0 (5 lần/tháng)</strong></td><td>$10 cho mỗi lần rút thêm</td></tr>
<tr><td>Guaranteed Stop Order</td><td><strong>Spread rộng hơn</strong></td><td>Phí được tính qua spread tăng thêm</td></tr>
</tbody>
</table>

<h2>💱 Phí Spread Chi Tiết Theo Nhóm Tài Sản</h2>

<p><strong>Spread</strong> (chênh lệch giá mua/bán) là chi phí giao dịch chính trên Plus500. Đây là loại spread <strong>động (dynamic)</strong>, nghĩa là mức spread sẽ thay đổi liên tục tùy theo điều kiện thị trường, thanh khoản và thời điểm giao dịch.</p>

<h3>Forex (Ngoại hối)</h3>

<p>Plus500 cung cấp <strong>hơn 60 cặp tiền tệ</strong> với spread bắt đầu từ 0.8 pips cho các cặp chính (major pairs). Tuy nhiên, mức spread trung bình thực tế thường cao hơn mức tối thiểu quảng cáo:</p>

<table>
<thead>
<tr><th>Cặp tiền</th><th>Spread tối thiểu</th><th>Spread trung bình</th><th>Đánh giá</th></tr>
</thead>
<tbody>
<tr><td>EUR/USD</td><td>0.8 pips</td><td>~0.9 pips</td><td>⭐ Trung bình</td></tr>
<tr><td>GBP/USD</td><td>1.2 pips</td><td>~1.5 pips</td><td>⭐ Trung bình</td></tr>
<tr><td>USD/JPY</td><td>1.0 pips</td><td>~1.2 pips</td><td>⭐ Trung bình</td></tr>
<tr><td>AUD/USD</td><td>1.0 pips</td><td>~1.3 pips</td><td>⭐ Trung bình</td></tr>
<tr><td>EUR/GBP</td><td>1.5 pips</td><td>~1.8 pips</td><td>⚠️ Cao</td></tr>
</tbody>
</table>

<p><strong>Nhận xét:</strong> Spread forex của Plus500 ở mức <strong>trung bình đến cao</strong> so với ngành. Với EUR/USD ~0.9 pips, chi phí mỗi lot tiêu chuẩn khoảng <strong>$9/lot</strong>, tương đương ~$13/lot khi tính cả markup. Đối với trader giao dịch tần suất cao (scalper), đây không phải là lựa chọn tối ưu nhất.</p>

<h3>Chỉ số (Indices) & Hàng hóa (Commodities)</h3>

<p>Spread cho chỉ số và hàng hóa của Plus500 được đánh giá <strong>cạnh tranh hơn</strong> so với forex:</p>

<table>
<thead>
<tr><th>Sản phẩm</th><th>Spread trung bình</th><th>Đánh giá</th></tr>
</thead>
<tbody>
<tr><td>S&P 500</td><td>~0.7 điểm</td><td>✅ Cạnh tranh</td></tr>
<tr><td>DAX 40</td><td>~1.5 điểm</td><td>✅ Cạnh tranh</td></tr>
<tr><td>Vàng (XAU/USD)</td><td>~0.34 pips</td><td>✅ Tốt</td></tr>
<tr><td>Dầu WTI</td><td>~0.04 điểm</td><td>✅ Cạnh tranh</td></tr>
<tr><td>Bitcoin CFD</td><td>~$50</td><td>⚠️ Cao</td></tr>
</tbody>
</table>

<h3>Cổ phiếu CFD</h3>

<p>Đối với cổ phiếu CFD, Plus500 áp dụng spread <strong>cao hơn mặt bằng chung</strong> do không thu hoa hồng. Trader giao dịch cổ phiếu nên xem xét kỹ mức spread của từng mã trước khi vào lệnh.</p>

<h2>🌙 Phí Qua Đêm (Overnight Funding / Swap)</h2>

<p>Đây là loại phí quan trọng mà nhiều trader mới thường bỏ qua. <strong>Phí qua đêm</strong> được tính khi bạn giữ một vị thế mở qua thời điểm cut-off hàng ngày (thường là 22:00 GMT).</p>

<h3>Cách tính phí qua đêm:</h3>

<ul>
<li><strong>Lệnh Buy (Long):</strong> Thường bị trừ phí (vì bạn đang "vay" tiền để giữ vị thế)</li>
<li><strong>Lệnh Sell (Short):</strong> Có thể được cộng hoặc trừ phí tùy lãi suất</li>
<li><strong>Ngày thứ Tư (Forex):</strong> Phí swap <strong>nhân 3 lần</strong> để bù cho cuối tuần</li>
</ul>

<p><strong>Lưu ý quan trọng:</strong> Phí qua đêm của Plus500 được các chuyên gia đánh giá ở mức <strong>cao hơn trung bình ngành</strong>. Nếu bạn là swing trader hoặc position trader giữ lệnh nhiều ngày, chi phí swap có thể ăn mòn đáng kể lợi nhuận.</p>

<p>Bạn có thể kiểm tra phí qua đêm cụ thể cho từng sản phẩm bằng cách vào mục <strong>\"Chi tiết\" (Details)</strong> bên cạnh tên công cụ giao dịch trên nền tảng Plus500.</p>

<h3>Mẹo giảm phí qua đêm:</h3>

<ol>
<li><strong>Đóng lệnh trước giờ cut-off</strong> nếu không cần giữ qua đêm</li>
<li><strong>Tránh mở lệnh trước thứ Tư</strong> nếu không muốn chịu phí x3</li>
<li><strong>Ưu tiên day trading</strong> — mở và đóng lệnh trong ngày để tránh hoàn toàn phí swap</li>
</ol>

<h2>⏰ Phí Không Hoạt Động (Inactivity Fee)</h2>

<p>Plus500 áp dụng phí không hoạt động <strong>$10/tháng</strong> (hoặc tương đương) khi:</p>

<ul>
<li>Bạn <strong>không đăng nhập</strong> vào tài khoản trong <strong>ít nhất 3 tháng liên tiếp</strong></li>
<li>Phí được trừ <strong>tự động hàng tháng</strong> từ số dư tài khoản</li>
<li>Chỉ áp dụng cho tài khoản tiền thật (không ảnh hưởng tài khoản demo)</li>
<li>Chỉ thu khi tài khoản <strong>có đủ số dư</strong></li>
</ul>

<p><strong>Cách tránh:</strong> Cực kỳ đơn giản — chỉ cần <strong>đăng nhập vào tài khoản định kỳ</strong> (ít nhất 1 lần mỗi 3 tháng), không cần thực hiện giao dịch nào. Đặt lịch nhắc trên điện thoại để không quên!</p>

<h2>💰 Phí Nạp & Rút Tiền</h2>

<h3>Phí nạp tiền</h3>

<p>Plus500 <strong>miễn phí nạp tiền nội bộ</strong> — bạn nhận đủ 100% số tiền nạp vào tài khoản. Tuy nhiên, cần lưu ý:</p>

<ul>
<li><strong>Nạp tối thiểu:</strong> $100</li>
<li><strong>Phương thức:</strong> Thẻ Visa/Mastercard, chuyển khoản ngân hàng, ví điện tử (PayPal, Skrill)</li>
<li><strong>Phí chuyển đổi tiền tệ:</strong> Đến <strong>0.7%</strong> nếu đồng tiền nạp khác đồng tiền tài khoản</li>
<li>Bên thứ ba (ngân hàng) có thể thu phí riêng</li>
</ul>

<h3>Phí rút tiền</h3>

<table>
<thead>
<tr><th>Điều kiện</th><th>Phí</th></tr>
</thead>
<tbody>
<tr><td>5 lần rút đầu tiên/tháng</td><td><strong>Miễn phí</strong></td></tr>
<tr><td>Lần rút thứ 6 trở đi</td><td><strong>$10/lần</strong></td></tr>
<tr><td>Rút dưới mức tối thiểu ($100 bank, $50 PayPal)</td><td><strong>$10</strong></td></tr>
<tr><td>Rút qua phương thức khác phương thức nạp</td><td><strong>$10</strong></td></tr>
<tr><td>Chuyển khoản quốc tế</td><td><strong>$6</strong></td></tr>
<tr><td>Phí chuyển đổi tiền tệ (nếu có)</td><td><strong>Đến 0.7%</strong></td></tr>
</tbody>
</table>

<p><strong>Thời gian xử lý rút tiền:</strong> 1-3 ngày làm việc (nội bộ Plus500).</p>

<h2>🔒 Phí Guaranteed Stop Order (Lệnh Dừng Lỗ Đảm Bảo)</h2>

<p>Plus500 cung cấp tính năng <strong>Guaranteed Stop Order</strong> — đảm bảo lệnh dừng lỗ sẽ được thực hiện đúng giá bạn đặt, kể cả khi thị trường gap (nhảy giá). Đây là tính năng hữu ích khi giao dịch trong biến động mạnh hoặc tin tức quan trọng.</p>

<p><strong>Chi phí:</strong> Không có phí cố định. Thay vào đó, spread sẽ <strong>rộng hơn bình thường</strong> khi bạn sử dụng Guaranteed Stop Order. Mức spread tăng thêm tùy thuộc vào sản phẩm và điều kiện thị trường.</p>

<h2>📈 So Sánh Phí Plus500 Với Các Sàn Khác</h2>

<p>Để trader Việt Nam dễ dàng đánh giá, dưới đây là bảng so sánh phí giữa Plus500 và 3 sàn phổ biến khác:</p>

<table>
<thead>
<tr><th>Tiêu chí</th><th>Plus500</th><th>Exness</th><th>XM</th><th>IC Markets</th></tr>
</thead>
<tbody>
<tr><td><strong>Hoa hồng</strong></td><td>$0</td><td>$0 (Standard)</td><td>$0 (Standard)</td><td>$7/lot (Raw)</td></tr>
<tr><td><strong>Spread EUR/USD</strong></td><td>~0.9 pips</td><td>~0.9 pips</td><td>~1.6 pips</td><td>~0.1 pips</td></tr>
<tr><td><strong>Phí qua đêm</strong></td><td>Cao</td><td>Trung bình</td><td>Trung bình</td><td>Thấp</td></tr>
<tr><td><strong>Phí không hoạt động</strong></td><td>$10/tháng</td><td>Không</td><td>$15/tháng</td><td>Không</td></tr>
<tr><td><strong>Nạp tối thiểu</strong></td><td>$100</td><td>$10</td><td>$5</td><td>$200</td></tr>
<tr><td><strong>Phí rút tiền</strong></td><td>Miễn phí (5 lần)</td><td>Miễn phí</td><td>Miễn phí</td><td>Miễn phí</td></tr>
<tr><td><strong>Nền tảng</strong></td><td>WebTrader riêng</td><td>MT4/MT5</td><td>MT4/MT5</td><td>MT4/MT5/cTrader</td></tr>
<tr><td><strong>Phù hợp cho</strong></td><td>Trader mới</td><td>Mọi cấp độ</td><td>Trader mới</td><td>Trader chuyên nghiệp</td></tr>
</tbody>
</table>

<h3>Nhận xét so sánh:</h3>

<ul>
<li><strong>Plus500 vs Exness:</strong> Spread tương đương, nhưng Exness không thu phí không hoạt động và nạp tối thiểu thấp hơn đáng kể ($10 vs $100). Exness phù hợp hơn cho trader Việt Nam ở mọi cấp độ.</li>
<li><strong>Plus500 vs XM:</strong> Plus500 có spread tốt hơn XM nhưng XM cung cấp MT4/MT5, quen thuộc hơn với trader châu Á. XM có phí không hoạt động cao hơn ($15/tháng).</li>
<li><strong>Plus500 vs IC Markets:</strong> IC Markets có spread thấp hơn rõ rệt (0.1 pips EUR/USD trên tài khoản Raw). Tuy nhiên IC Markets thu hoa hồng $7/lot. Tổng chi phí IC Markets vẫn thấp hơn cho trader giao dịch nhiều.</li>
</ul>

<h2>🎯 Plus500 Phù Hợp Với Ai?</h2>

<p>Dựa trên phân tích phí, <strong>Plus500</strong> phù hợp nhất với:</p>

<ul>
<li>✅ <strong>Trader mới bắt đầu</strong> — giao diện đơn giản, không phí hoa hồng, dễ hiểu</li>
<li>✅ <strong>Day trader</strong> — tránh được phí qua đêm, chỉ chịu spread</li>
<li>✅ <strong>Trader chỉ số & hàng hóa</strong> — spread cạnh tranh trên indices và commodities</li>
<li>⚠️ <strong>Không phù hợp cho scalper</strong> — spread cao hơn sàn ECN</li>
<li>⚠️ <strong>Không phù hợp cho swing trader</strong> — phí qua đêm cao</li>
</ul>

<h2>💡 7 Mẹo Tiết Kiệm Phí Khi Giao Dịch Trên Plus500</h2>

<ol>
<li><strong>Giao dịch trong giờ thanh khoản cao</strong> — Spread thường thấp nhất khi phiên London và New York mở cửa (14:00 - 23:00 giờ Việt Nam)</li>
<li><strong>Ưu tiên day trading</strong> — Mở và đóng lệnh trong ngày để tránh phí qua đêm</li>
<li><strong>Đăng nhập định kỳ</strong> — Tránh phí không hoạt động bằng cách đăng nhập ít nhất 1 lần/3 tháng</li>
<li><strong>Nạp đúng đồng tiền tài khoản</strong> — Tránh phí chuyển đổi tiền tệ 0.7%</li>
<li><strong>Rút tiền không quá 5 lần/tháng</strong> — Tận dụng 5 lần rút miễn phí</li>
<li><strong>Rút tiền về đúng phương thức nạp</strong> — Tránh phí $10 cho phương thức khác</li>
<li><strong>Tránh giao dịch khi tin tức lớn</strong> — Spread thường mở rộng đáng kể trong các sự kiện NFP, FOMC, ECB</li>
</ol>

<h2>❓ Câu Hỏi Thường Gặp Về Phí Plus500</h2>

<h3>Plus500 có thu phí hoa hồng không?</h3>
<p>Không. Plus500 không thu phí hoa hồng trên bất kỳ giao dịch nào. Toàn bộ chi phí giao dịch được tích hợp vào spread (chênh lệch giá mua/bán).</p>

<h3>Spread EUR/USD của Plus500 là bao nhiêu?</h3>
<p>Spread tối thiểu cho EUR/USD là 0.8 pips, trung bình khoảng 0.9 pips. Mức này tương đương chi phí khoảng $8-9 mỗi lot tiêu chuẩn.</p>

<h3>Phí qua đêm Plus500 có cao không?</h3>
<p>Có, phí qua đêm (swap) của Plus500 được đánh giá ở mức cao hơn trung bình ngành. Trader giữ lệnh nhiều ngày nên cân nhắc sử dụng sàn khác hoặc chuyển sang day trading.</p>

<h3>Làm sao tránh phí không hoạt động $10/tháng?</h3>
<p>Chỉ cần đăng nhập vào tài khoản Plus500 ít nhất 1 lần trong mỗi 3 tháng. Bạn không cần thực hiện giao dịch, chỉ cần đăng nhập là đủ.</p>

<h3>Plus500 có thu phí nạp tiền không?</h3>
<p>Không. Plus500 miễn phí nạp tiền nội bộ. Tuy nhiên, nếu đồng tiền nạp khác đồng tiền tài khoản, bạn sẽ bị tính phí chuyển đổi lên đến 0.7%.</p>

<h3>Rút tiền từ Plus500 mất phí không?</h3>
<p>5 lần rút đầu tiên mỗi tháng miễn phí. Từ lần thứ 6, mỗi lần rút bị tính phí $10. Rút dưới mức tối thiểu hoặc rút về phương thức khác phương thức nạp cũng bị phí $10.</p>

<h2>🏁 Kết Luận</h2>

<p><strong>Phí giao dịch sàn Plus500</strong> ở mức trung bình trong ngành CFD. Ưu điểm lớn nhất là <strong>không phí hoa hồng</strong> và <strong>cấu trúc phí đơn giản, dễ hiểu</strong> — phù hợp cho trader mới. Tuy nhiên, so với các sàn ECN như IC Markets hay sàn có swap thấp như Exness, chi phí tổng thể của Plus500 vẫn cao hơn, đặc biệt cho swing trader.</p>

<p><strong>Khuyến nghị:</strong> Hãy sử dụng <a href="/plus500/">trang đánh giá chi tiết sàn Plus500</a> và <a href="/so-sanh/">công cụ so sánh sàn</a> của chúng tôi để xem xét thêm các khía cạnh khác như pháp lý, nền tảng giao dịch và hỗ trợ khách hàng trước khi quyết định. Bạn cũng có thể tham khảo bài <a href="/tin-tuc/uu-nhuoc-diem-san-plus500/">ưu nhược điểm sàn Plus500</a> để có cái nhìn toàn diện hơn.</p>

<p><em>Bài viết được cập nhật lần cuối: Tháng 03/2026. Thông tin phí có thể thay đổi — vui lòng kiểm tra trên website chính thức Plus500 trước khi giao dịch.</em></p>

<p><strong>⚠️ Cảnh báo rủi ro:</strong> <em>Giao dịch CFD tiềm ẩn rủi ro cao và có thể dẫn đến mất toàn bộ vốn đầu tư. 80% tài khoản nhà đầu tư cá nhân bị thua lỗ khi giao dịch CFD. Bạn nên cân nhắc kỹ liệu bạn có hiểu cách CFD hoạt động và liệu bạn có đủ khả năng chấp nhận rủi ro mất tiền không.</em></p>
</article>`
};

async function main() {
    // Check if post already exists
    const { data: existing } = await supabase
        .from('posts')
        .select('id,title')
        .eq('slug', post.slug)
        .single();

    if (existing) {
        console.log('⚠️  Bài viết đã tồn tại:', existing.title);
        console.log('   ID:', existing.id);
        return;
    }

    const { data, error } = await supabase
        .from('posts')
        .insert([post])
        .select('id,title,slug,is_published,scheduled_at');

    if (error) {
        console.log('❌ Lỗi:', error.message);
        return;
    }

    console.log('✅ Tạo bài viết thành công!');
    console.log('   ID:', data[0].id);
    console.log('   Title:', data[0].title);
    console.log('   Slug:', data[0].slug);
    console.log('   Published:', data[0].is_published);
    console.log('   Scheduled:', data[0].scheduled_at);
    console.log('');
    console.log('📌 Bài viết sẽ tự động publish lúc 12:00 PM (giờ VN) hôm nay');
    console.log('📌 Xem trong Admin: /admin → Posts');
}

main();
