import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K');

const post = {
    title: "So Sánh Tài Khoản Vantage: STP, Raw ECN, Pro",
    slug: "cac-loai-tai-khoan-vantage",
    category: "huong-dan",
    is_published: false,
    published_at: "2026-02-26T17:00:00+07:00",
    featured_image: "https://images.pexels.com/photos/5716025/pexels-photo-5716025.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured_image_alt: "Các loại tài khoản giao dịch trên sàn Vantage",
    excerpt: "Phân tích chi tiết 3 loại tài khoản Vantage: Standard STP, Raw ECN và Pro ECN. So sánh spread, phí, đòn bẩy giúp bạn chọn loại phù hợp nhất.",
    meta_title: "Tài Khoản Vantage: STP vs Raw ECN vs Pro 2026",
    meta_description: "✅ So sánh chi tiết tài khoản Standard STP, Raw ECN, Pro ECN trên Vantage. Spread, phí, nạp tối thiểu, đòn bẩy. Hướng dẫn chọn loại phù hợp.",
    tags: ["Vantage", "tài khoản", "Raw ECN", "STP", "forex"],
    content: `
<p>Một trong những câu hỏi phổ biến nhất khi <a href="/kien-thuc-forex/huong-dan-mo-tai-khoan-vantage">mở tài khoản Vantage</a> là nên chọn loại nào. Sàn hiện cung cấp 3 loại tài khoản chính, mỗi loại được thiết kế cho một phong cách giao dịch khác nhau. Bài viết này sẽ phân tích kỹ từng loại để bạn đưa ra lựa chọn tốt nhất.</p>

<h2>Tổng Quan 3 Loại Tài Khoản</h2>

<p><a href="/vantage">Vantage</a> cung cấp 3 loại tài khoản: Standard STP dành cho người mới, Raw ECN cho trader muốn chi phí thấp, và Pro ECN cho trader chuyên nghiệp. Sự khác biệt chính nằm ở cách tính phí giao dịch (spread vs hoa hồng) và mức nạp tối thiểu.</p>

<p>Tất cả 3 loại đều sử dụng chung hạ tầng công nghệ oneZero™ với tốc độ khớp lệnh dưới 30ms và không can thiệp Dealing Desk. Điều này có nghĩa dù bạn chọn loại nào, chất lượng thực thi lệnh đều như nhau.</p>

<img src="https://images.pexels.com/photos/6771169/pexels-photo-6771169.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Bảng so sánh các loại tài khoản giao dịch Vantage" />

<h2>1. Standard STP — Dành Cho Người Mới</h2>

<h3>Đặc điểm chính</h3>

<p>Standard STP là loại tài khoản đơn giản nhất, phù hợp cho trader mới bắt đầu hoặc những người thích sự đơn giản. Phí giao dịch được tính trọn gói trong spread, không có phí hoa hồng riêng — giúp bạn dễ tính toán chi phí hơn.</p>

<ul>
<li><strong>Nạp tối thiểu:</strong> $50</li>
<li><strong>Spread:</strong> Từ 1.0 pips (EUR/USD trung bình 1.2-1.4 pips)</li>
<li><strong>Hoa hồng:</strong> Không</li>
<li><strong>Đòn bẩy:</strong> Tối đa 1:1000</li>
<li><strong>Lot tối thiểu:</strong> 0.01 (micro lot)</li>
<li><strong>Nền tảng:</strong> MT4, MT5, ProTrader</li>
</ul>

<h3>Phù hợp với ai?</h3>
<p>Bạn nên chọn Standard STP nếu mới bắt đầu học giao dịch, vốn nhỏ dưới $500, hoặc đơn giản là không muốn phải nghĩ về phí hoa hồng. Spread 1.0-1.4 pips hoàn toàn hợp lý cho swing trading và giao dịch trung hạn.</p>

<h2>2. Raw ECN — Chi Phí Thấp Nhất</h2>

<h3>Đặc điểm chính</h3>

<p>Raw ECN là loại tài khoản được trader kinh nghiệm yêu thích nhất trên Vantage. Thay vì cộng phí vào spread, sàn tách riêng: spread siêu thấp (từ 0.0 pips) + phí hoa hồng cố định $3/lot/chiều. Tổng chi phí giao dịch thường thấp hơn Standard STP khoảng 20-30%.</p>

<ul>
<li><strong>Nạp tối thiểu:</strong> $50</li>
<li><strong>Spread:</strong> Từ 0.0 pips (EUR/USD trung bình 0.1-0.3 pips)</li>
<li><strong>Hoa hồng:</strong> $3/lot/chiều ($6/lot round-turn)</li>
<li><strong>Đòn bẩy:</strong> Tối đa 1:1000</li>
<li><strong>Lot tối thiểu:</strong> 0.01 (micro lot)</li>
<li><strong>Nền tảng:</strong> MT4, MT5, ProTrader</li>
</ul>

<img src="https://images.pexels.com/photos/7567502/pexels-photo-7567502.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Giao dịch với spread thấp trên tài khoản Raw ECN Vantage" />

<h3>Phù hợp với ai?</h3>
<p>Chọn Raw ECN nếu bạn giao dịch thường xuyên (5+ lệnh/ngày), áp dụng <a href="/kien-thuc-forex/scalping-forex-chien-luoc-luot-song">chiến lược scalping</a>, hoặc đơn giản là muốn chi phí giao dịch thấp nhất có thể. Với khối lượng giao dịch lớn, bạn sẽ tiết kiệm được vài trăm đến vài ngàn USD mỗi tháng so với Standard.</p>

<h2>3. Pro ECN — Cho Trader Chuyên Nghiệp</h2>

<h3>Đặc điểm chính</h3>

<p>Pro ECN là tài khoản cao cấp nhất, dành cho trader có vốn lớn hoặc quản lý quỹ. Nạp tối thiểu $10,000 nhưng đổi lại bạn nhận được spread thấp nhất thị trường và hoa hồng ưu đãi hơn Raw ECN.</p>

<ul>
<li><strong>Nạp tối thiểu:</strong> $10,000</li>
<li><strong>Spread:</strong> Từ 0.0 pips (thấp hơn Raw ECN trung bình 0.1 pips)</li>
<li><strong>Hoa hồng:</strong> $1.5/lot/chiều ($3/lot round-turn)</li>
<li><strong>Đòn bẩy:</strong> Tối đa 1:500</li>
<li><strong>Lot tối thiểu:</strong> 0.01 (micro lot)</li>
<li><strong>Nền tảng:</strong> MT4, MT5, ProTrader</li>
</ul>

<h3>Phù hợp với ai?</h3>
<p>Pro ECN dành cho trader đã có kinh nghiệm, vốn trên $10,000 và giao dịch khối lượng lớn. Nếu bạn giao dịch hàng chục lot mỗi ngày, hoa hồng chỉ $1.5/lot thay vì $3/lot sẽ tiết kiệm rất nhiều.</p>

<img src="https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Trader chuyên nghiệp sử dụng tài khoản Pro ECN Vantage" />

<h2>So Sánh Chi Phí Thực Tế</h2>

<p>Để bạn dễ hình dung, đây là chi phí thực tế khi giao dịch 1 lot EUR/USD trên từng loại tài khoản:</p>

<ul>
<li><strong>Standard STP:</strong> Spread 1.2 pips = <strong>$12/lot</strong> (không hoa hồng)</li>
<li><strong>Raw ECN:</strong> Spread 0.2 pips + hoa hồng $6 = <strong>$8/lot</strong></li>
<li><strong>Pro ECN:</strong> Spread 0.1 pips + hoa hồng $3 = <strong>$4/lot</strong></li>
</ul>

<p>Rõ ràng, nếu bạn giao dịch 10 lot/ngày trong 22 ngày/tháng, chênh lệch giữa Standard và Raw ECN lên đến <strong>$880/tháng</strong>. Đó là lý do trader kinh nghiệm luôn chọn Raw ECN hoặc Pro ECN. Tìm hiểu thêm về <a href="/kien-thuc-forex/spread-trong-forex-la-gi">spread trong Forex</a> để hiểu rõ hơn.</p>

<h2>Nên Bắt Đầu Với Tài Khoản Nào?</h2>

<p>Lời khuyên của chúng tôi rất đơn giản và thực tế:</p>

<p><strong>Người mới hoàn toàn</strong> → Bắt đầu với <strong>Standard STP</strong>. Không cần nghĩ về hoa hồng, tập trung học cách giao dịch. Khi đã quen, chuyển sang Raw ECN.</p>

<p><strong>Đã có kinh nghiệm cơ bản</strong> → Chọn ngay <strong>Raw ECN</strong>. Nạp tối thiểu giống Standard ($50) nhưng chi phí thấp hơn nhiều. Đây là lựa chọn tối ưu nhất cho đa số trader.</p>

<p><strong>Trader chuyên nghiệp, vốn lớn</strong> → <strong>Pro ECN</strong> nếu bạn có từ $10,000 trở lên và giao dịch khối lượng cao. Hoa hồng giảm một nửa so với Raw ECN.</p>

<p>Dù chọn loại nào, bạn đều có thể mở thêm tài khoản Demo miễn phí để test trước. Và quan trọng nhất, hãy luôn <a href="/kien-thuc-forex/cach-quan-ly-von-forex-hieu-qua">quản lý vốn chặt chẽ</a> bất kể loại tài khoản bạn sử dụng.</p>

<img src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Hướng dẫn chọn loại tài khoản Vantage phù hợp" />

<h2>Kết Luận</h2>

<p>Cả 3 loại tài khoản trên Vantage đều chất lượng, chỉ khác nhau về cấu trúc phí. Standard STP đơn giản cho người mới, Raw ECN tối ưu chi phí cho đa số trader, và Pro ECN dành cho trader vốn lớn. Hãy chọn loại phù hợp với trình độ và nhu cầu hiện tại, sau đó nâng cấp khi cần.</p>

<p>Quay lại <a href="/">trang chủ SanUyTin.net</a> để khám phá thêm.</p>

<h3>Bài Viết Liên Quan</h3>
<ul>
<li><a href="/vantage">Đánh Giá Chi Tiết Sàn Vantage 2026</a></li>
<li><a href="/kien-thuc-forex/huong-dan-mo-tai-khoan-vantage">Hướng Dẫn Mở Tài Khoản Vantage</a></li>
<li><a href="/kien-thuc-forex/huong-dan-nap-rut-tien-vantage">Hướng Dẫn Nạp Rút Tiền Vantage</a></li>
<li><a href="/kien-thuc-forex/so-sanh-vantage-vs-xm">So Sánh Vantage vs XM 2026</a></li>
</ul>
`
};

async function main() {
    const { data, error } = await supabase.from('posts').insert(post).select('id, slug, title').single();
    if (error) console.error('❌', error.message);
    else console.log(`✅ Bài 5/20 — ID: ${data.id} | ${data.title}`);
    process.exit(0);
}
main();
