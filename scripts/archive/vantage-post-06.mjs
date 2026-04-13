import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K');

const post = {
    title: "Phí Spread Và Hoa Hồng Vantage 2026",
    slug: "phi-spread-hoa-hong-vantage",
    category: "kien-thuc",
    is_published: false,
    published_at: "2026-02-27T09:00:00+07:00",
    featured_image: "https://images.pexels.com/photos/5849569/pexels-photo-5849569.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured_image_alt: "Phân tích phí spread và hoa hồng sàn Vantage",
    excerpt: "Phân tích chi tiết phí giao dịch trên Vantage: spread EUR/USD, Vàng, hoa hồng ECN. So sánh với Exness, XM để đánh giá mức phí cạnh tranh nhất.",
    meta_title: "Phí Spread Vantage 2026: Chi Tiết Từng Cặp Tiền",
    meta_description: "✅ Bảng phí spread Vantage chi tiết: EUR/USD từ 0.0 pips, Vàng từ 1.5 pips. So sánh phí với Exness, XM. Tài khoản nào có phí thấp nhất?",
    tags: ["Vantage", "spread", "phí giao dịch", "hoa hồng", "forex"],
    content: `
<p>Chi phí giao dịch là yếu tố ảnh hưởng trực tiếp đến lợi nhuận của trader. Trong bài viết này, chúng tôi sẽ phân tích chi tiết <a href="/kien-thuc-forex/spread-trong-forex-la-gi">spread</a> và phí hoa hồng trên <a href="/vantage">sàn Vantage</a>, đồng thời so sánh với các sàn khác để bạn có cái nhìn khách quan nhất.</p>

<h2>Spread Trên Vantage Hoạt Động Như Thế Nào?</h2>

<p>Spread là chênh lệch giữa giá Bid (giá bán) và giá Ask (giá mua) của một cặp tiền. Đây là khoản phí mà sàn thu từ mỗi giao dịch. Spread càng thấp, chi phí giao dịch càng nhỏ, và lợi nhuận tiềm năng của bạn càng lớn.</p>

<p>Vantage sử dụng mô hình ECN (Electronic Communication Network), kết nối trực tiếp với các nhà cung cấp thanh khoản Tier-1. Điều này cho phép sàn cung cấp spread gần như bằng 0 trên tài khoản Raw ECN và Pro ECN, thay vì phải markup thêm như các sàn Market Maker.</p>

<img src="https://images.pexels.com/photos/6770556/pexels-photo-6770556.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Biểu đồ spread EUR/USD trên sàn Vantage" />

<h2>Bảng Spread Chi Tiết Theo Cặp Tiền</h2>

<p>Dưới đây là spread trung bình trên tài khoản Raw ECN của Vantage trong phiên giao dịch chính (London và New York):</p>

<h3>Cặp Tiền Chính (Majors)</h3>
<ul>
<li><strong>EUR/USD:</strong> 0.0 - 0.3 pips (trung bình 0.1 pips)</li>
<li><strong>GBP/USD:</strong> 0.2 - 0.6 pips (trung bình 0.4 pips)</li>
<li><strong>USD/JPY:</strong> 0.1 - 0.4 pips (trung bình 0.2 pips)</li>
<li><strong>AUD/USD:</strong> 0.2 - 0.5 pips (trung bình 0.3 pips)</li>
<li><strong>USD/CHF:</strong> 0.3 - 0.7 pips (trung bình 0.5 pips)</li>
</ul>

<h3>Vàng Và Kim Loại Quý</h3>
<ul>
<li><strong>XAU/USD (Vàng):</strong> 1.0 - 2.5 pips (trung bình 1.5 pips)</li>
<li><strong>XAG/USD (Bạc):</strong> 1.5 - 3.0 pips (trung bình 2.0 pips)</li>
</ul>

<p>Lưu ý: spread biến động theo thời gian trong ngày. Phiên Á (sáng Việt Nam) thường có spread rộng hơn phiên Âu/Mỹ (chiều tối Việt Nam). Tin tức quan trọng cũng khiến spread giãn tạm thời.</p>

<img src="https://images.pexels.com/photos/7567571/pexels-photo-7567571.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Biến động spread theo phiên giao dịch Á, Âu, Mỹ" />

<h2>Phí Hoa Hồng (Commission)</h2>

<p>Vantage áp dụng hai mô hình phí khác nhau tùy loại tài khoản:</p>

<p><strong>Standard STP:</strong> Không có phí hoa hồng. Toàn bộ chi phí đã được cộng vào spread. Đơn giản, dễ hiểu cho người mới.</p>

<p><strong>Raw ECN:</strong> Hoa hồng $3/lot/chiều, tương đương $6/lot khi mở và đóng lệnh. Bù lại, spread gần 0. Tổng chi phí thường thấp hơn Standard khoảng 25-30%.</p>

<p><strong>Pro ECN:</strong> Hoa hồng chỉ $1.5/lot/chiều ($3/lot round-turn). Spread tương đương Raw ECN nhưng hoa hồng giảm 50%. Đây là lựa chọn tiết kiệm nhất cho trader giao dịch khối lượng lớn. Xem thêm <a href="/kien-thuc-forex/cac-loai-tai-khoan-vantage">chi tiết từng loại tài khoản Vantage</a>.</p>

<h2>So Sánh Phí Với Các Sàn Khác</h2>

<p>Để đánh giá mức phí của Vantage có thực sự cạnh tranh không, hãy so sánh tổng chi phí giao dịch 1 lot EUR/USD trên các sàn phổ biến:</p>

<ul>
<li><strong>Vantage Raw ECN:</strong> Spread 0.1 pips + $6 hoa hồng = <strong>~$7/lot</strong></li>
<li><strong>Exness Zero:</strong> Spread 0.0 pips + $7 hoa hồng = <strong>~$7/lot</strong></li>
<li><strong>XM Ultra Low:</strong> Spread 0.8 pips, không hoa hồng = <strong>~$8/lot</strong></li>
<li><strong>IC Markets Raw:</strong> Spread 0.1 pips + $7 hoa hồng = <strong>~$8/lot</strong></li>
</ul>

<p>Kết quả cho thấy Vantage Raw ECN có tổng chi phí thuộc nhóm thấp nhất thị trường, ngang Exness Zero và thấp hơn XM, IC Markets. Với tài khoản Pro ECN, chi phí còn giảm thêm $3/lot nữa — rất cạnh tranh.</p>

<img src="https://images.pexels.com/photos/6771178/pexels-photo-6771178.jpeg?auto=compress&cs=tinysrgb&w=800" alt="So sánh phí giao dịch Vantage với Exness và XM" />

<h2>Phí Swap (Phí Qua Đêm)</h2>

<p>Ngoài spread và hoa hồng, bạn cần biết thêm về <strong>phí swap</strong> — phí tính khi giữ lệnh qua đêm (sau 0h giờ server). Swap có thể âm (bạn trả phí) hoặc dương (bạn nhận phí) tùy cặp tiền và hướng giao dịch.</p>

<p>Vantage cung cấp tài khoản <strong>Swap-Free (Islamic Account)</strong> không tính phí qua đêm, phù hợp cho trader không muốn chịu swap. Tuy nhiên, tài khoản này có thể bị tính phí quản lý nếu giữ lệnh quá lâu (thường sau 3-5 ngày). Tìm hiểu thêm về <a href="/kien-thuc-forex/swap-phi-qua-dem-la-gi">swap và phí qua đêm trong Forex</a>.</p>

<h2>Mẹo Giảm Chi Phí Giao Dịch</h2>

<p>Dù phí Vantage đã rất thấp, bạn vẫn có thể tối ưu thêm bằng những cách sau:</p>

<ul>
<li><strong>Giao dịch vào phiên chính:</strong> Phiên London (14h-22h) và New York (19h-3h sáng giờ VN) có spread thấp nhất</li>
<li><strong>Tránh tin tức lớn:</strong> Spread thường giãn mạnh khi có NFP, FOMC, CPI. Đợi 5-10 phút sau tin để spread ổn định</li>
<li><strong>Chọn Raw ECN:</strong> Nếu giao dịch trên 5 lệnh/ngày, Raw ECN luôn rẻ hơn Standard STP</li>
<li><strong>Dùng lệnh Limit:</strong> Thay vì Market Order, dùng Limit Order để vào lệnh ở giá tốt hơn</li>
</ul>

<img src="https://images.pexels.com/photos/5980867/pexels-photo-5980867.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Mẹo tối ưu chi phí giao dịch trên Vantage" />

<h2>Kết Luận</h2>

<p>Phí giao dịch trên Vantage thuộc nhóm cạnh tranh nhất thị trường, đặc biệt với tài khoản Raw ECN (spread từ 0.0 pips + $6/lot) và Pro ECN (spread từ 0.0 pips + $3/lot). So với các đối thủ như Exness, XM hay IC Markets, Vantage không hề thua kém về mặt chi phí.</p>

<p>Quay lại <a href="/">trang chủ SanUyTin.net</a> để khám phá thêm.</p>

<h3>Bài Viết Liên Quan</h3>
<ul>
<li><a href="/vantage">Đánh Giá Chi Tiết Sàn Vantage 2026</a></li>
<li><a href="/kien-thuc-forex/cac-loai-tai-khoan-vantage">Các Loại Tài Khoản Vantage</a></li>
<li><a href="/kien-thuc-forex/ly-do-tin-tuong-vantage">10 Lý Do Tin Tưởng Vantage</a></li>
<li><a href="/kien-thuc-forex/so-sanh-vantage-vs-xm">So Sánh Vantage vs XM</a></li>
</ul>
`
};

async function main() {
    const { data, error } = await supabase.from('posts').insert(post).select('id, slug, title').single();
    if (error) console.error('❌', error.message);
    else console.log(`✅ Bài 6/20 — ID: ${data.id} | ${data.title}`);
    process.exit(0);
}
main();
