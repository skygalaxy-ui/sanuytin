const { createClient } = require('@supabase/supabase-js');
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4');

async function main() {
    // 1. Dời bài Coupon Rate 18:00 hôm nay → 05/03 09:00 (slot trống)
    const { data: coupon } = await s.from('posts').select('id').ilike('title', '%Coupon Rate vs YTM%').single();
    if (coupon) {
        await s.from('posts').update({ scheduled_at: '2026-03-05T02:00:00Z' }).eq('id', coupon.id);
        console.log('MOVED Coupon Rate → 05/03 09:00 AM');
    }

    // 2. Insert bài Mỹ-Iran tại 18:00 hôm nay
    const post = {
        title: 'Chiến Sự Mỹ - Iran Có Ảnh Hưởng Đến Thị Trường Forex Không?',
        slug: 'chien-su-my-iran-anh-huong-thi-truong-forex',
        meta_title: 'Chiến Sự Mỹ - Iran 2026: Tác Động Đến Forex, Vàng & Dầu Như Thế Nào?',
        meta_description: '✅ Phân tích tác động chiến sự Mỹ - Iran đến thị trường Forex 2026. Vàng, dầu, USD biến động ra sao? Trader nên làm gì để bảo vệ tài khoản?',
        excerpt: 'Phân tích toàn diện tác động của xung đột Mỹ - Iran đến thị trường Forex: vàng tăng hay giảm, dầu biến động thế nào, USD sẽ ra sao, và chiến lược giao dịch phù hợp cho trader Việt.',
        featured_image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&h=630&fit=crop&q=80',
        featured_image_alt: 'Chiến sự Mỹ Iran ảnh hưởng thị trường Forex vàng dầu 2026',
        category_id: 'ac86a067-5518-42d7-8045-a92a75f4a15f',
        tags: ['tin tức forex', 'mỹ iran', 'vàng', 'dầu', 'phân tích thị trường'],
        is_published: false,
        scheduled_at: '2026-03-04T11:00:00Z', // 18:00 VN hôm nay
        content: `<article>
<p>Xung đột giữa <strong>Mỹ và Iran</strong> luôn là một trong những yếu tố địa chính trị có sức ảnh hưởng lớn nhất đến thị trường tài chính toàn cầu. Nếu bạn đang giao dịch Forex, đặc biệt là <strong>vàng (XAU/USD)</strong> hoặc <strong>dầu thô (WTI, Brent)</strong>, bạn cần hiểu rõ chiến sự Mỹ - Iran tác động như thế nào để đưa ra quyết định đúng đắn.</p>

<h2>📌 Tại Sao Xung Đột Mỹ - Iran Ảnh Hưởng Forex?</h2>
<p>Iran nắm giữ vị trí chiến lược trên bản đồ năng lượng thế giới:</p>
<ul>
<li><strong>Eo biển Hormuz:</strong> Nơi 20% lượng dầu thô toàn cầu đi qua mỗi ngày. Nếu xung đột leo thang, nguồn cung dầu bị đe doạ → giá dầu tăng vọt.</li>
<li><strong>Nước xuất khẩu dầu lớn:</strong> Iran thuộc top 10 quốc gia sản xuất dầu. Lệnh trừng phạt hoặc chiến sự cắt giảm nguồn cung.</li>
<li><strong>Tâm lý thị trường:</strong> Bất ổn địa chính trị → nhà đầu tư tìm đến tài sản an toàn (vàng, USD, JPY).</li>
</ul>

<h2>📊 Tác Động Cụ Thể Lên Từng Sản Phẩm</h2>

<h3>🥇 Vàng (XAU/USD) — Tăng mạnh</h3>
<p>Vàng là <strong>"tài sản trú ẩn an toàn"</strong> số 1. Khi chiến sự leo thang:</p>
<ul>
<li><strong>Ngắn hạn:</strong> Vàng thường tăng 2-5% trong tuần đầu tiên</li>
<li><strong>Lịch sử:</strong> Khi Mỹ tiêu diệt tướng Soleimani (01/2020), vàng tăng từ $1,517 → $1,611 trong 6 ngày (+6.2%)</li>
<li><strong>Chiến lược:</strong> Mua vàng (Buy XAU/USD) khi xung đột leo thang, take profit khi đàm phán hòa bình</li>
</ul>

<h3>🛢️ Dầu Thô (WTI, Brent) — Biến động cực mạnh</h3>
<p>Dầu thô là sản phẩm bị ảnh hưởng <strong>trực tiếp nhất</strong>:</p>
<ul>
<li><strong>Eo Hormuz bị phong toả:</strong> Giá dầu có thể tăng 20-30%</li>
<li><strong>Lệnh trừng phạt mới:</strong> Giá tăng nhẹ 5-10%</li>
<li><strong>Lịch sử:</strong> Tấn công cơ sở dầu Saudi (09/2019, được cho là Iran hậu thuẫn) → dầu tăng 15% trong 1 ngày</li>
<li><strong>Rủi ro:</strong> Biến động cực lớn, gap giá, slippage cao</li>
</ul>

<h3>💵 USD — Phức tạp</h3>
<p>Phản ứng của USD phụ thuộc vào mức độ xung đột:</p>
<ul>
<li><strong>Xung đột nhẹ → USD tăng:</strong> Nhà đầu tư mua USD như tài sản trú ẩn</li>
<li><strong>Chiến tranh kéo dài → USD giảm:</strong> Chi phí quân sự lớn, thâm hụt ngân sách tăng</li>
<li><strong>DXY (Dollar Index):</strong> Theo dõi DXY để đánh giá sức mạnh USD tổng thể</li>
</ul>

<h3>🇯🇵 JPY (Yên Nhật) — Tăng</h3>
<p>Yên Nhật là <strong>tài sản trú ẩn truyền thống</strong> ở châu Á. USD/JPY thường giảm (JPY tăng giá) khi xung đột leo thang.</p>

<h2>📈 Bảng Tóm Tắt Tác Động</h2>
<table><thead><tr><th>Sản phẩm</th><th>Khi xung đột tăng</th><th>Khi hòa hoãn</th><th>Mức biến động</th></tr></thead>
<tbody>
<tr><td><strong>Vàng (XAU/USD)</strong></td><td>↑ Tăng mạnh</td><td>↓ Giảm về</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td><strong>Dầu WTI/Brent</strong></td><td>↑ Tăng rất mạnh</td><td>↓ Giảm mạnh</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td><strong>USD (DXY)</strong></td><td>↑ Tăng nhẹ</td><td>→ Ổn định</td><td>⭐⭐⭐</td></tr>
<tr><td><strong>JPY</strong></td><td>↑ Tăng (USD/JPY giảm)</td><td>↓ Giảm</td><td>⭐⭐⭐⭐</td></tr>
<tr><td><strong>EUR/USD</strong></td><td>↓ Giảm</td><td>↑ Phục hồi</td><td>⭐⭐⭐</td></tr>
<tr><td><strong>Crypto (BTC)</strong></td><td>↑ Có thể tăng</td><td>→ Không rõ ràng</td><td>⭐⭐</td></tr>
</tbody></table>

<h2>🎯 Chiến Lược Giao Dịch Khi Có Xung Đột</h2>
<ol>
<li><strong>Giảm khối lượng giao dịch</strong> — Biến động lớn = rủi ro lớn. Giảm lot size 50-70%.</li>
<li><strong>Mở rộng Stop Loss</strong> — Thị trường biến động mạnh, SL quá sát sẽ bị quét liên tục.</li>
<li><strong>Ưu tiên vàng</strong> — Xu hướng rõ ràng nhất khi xung đột: vàng tăng.</li>
<li><strong>Tránh giao dịch dầu nếu mới</strong> — Biến động quá lớn, gap giá có thể xoá tài khoản.</li>
<li><strong>Theo dõi tin tức liên tục</strong> — 1 dòng tweet từ lãnh đạo có thể đảo chiều thị trường trong vài phút.</li>
<li><strong>Không revenge trading</strong> — Nếu thua, KHÔNG giao dịch gỡ ngay. Bình tĩnh phân tích lại.</li>
</ol>

<h2>📰 Nguồn Tin Tức Đáng Tin Cậy</h2>
<ul>
<li><strong>Reuters, Bloomberg:</strong> Tin tức tài chính nhanh và chính xác nhất</li>
<li><strong>ForexFactory:</strong> Lịch kinh tế + tin tức Forex</li>
<li><strong>TradingView:</strong> Phân tích kỹ thuật + cộng đồng trader</li>
<li><strong>Twitter/X:</strong> Theo dõi @Reuters, @business, @zaborek_fx</li>
</ul>

<h2>⚠️ Lưu Ý Quan Trọng Cho Trader Việt</h2>
<ul>
<li><strong>Thời gian VN:</strong> Tin tức Trung Đông thường ra vào <strong>đêm khuya VN</strong> (múi giờ Iran = GMT+3:30). Cẩn thận giữ lệnh qua đêm.</li>
<li><strong>Spread mở rộng:</strong> Các sàn thường mở rộng spread khi tin tức lớn. Exness, XM đều có thể spread cao gấp 3-5 lần bình thường.</li>
<li><strong>Margin call:</strong> Đòn bẩy cao + biến động lớn = nguy hiểm. Giữ margin level trên 200%.</li>
</ul>

<h2>🏁 Kết Luận</h2>
<p>Chiến sự Mỹ - Iran <strong>chắc chắn ảnh hưởng</strong> đến thị trường Forex, đặc biệt là vàng và dầu thô. Đối với trader mới, lời khuyên tốt nhất là <strong>giảm khối lượng giao dịch</strong> và <strong>theo dõi tin tức sát sao</strong>. Nếu bạn chưa có kinh nghiệm giao dịch trong giai đoạn bất ổn, hãy ngồi ngoài quan sát — đôi khi <strong>không giao dịch cũng là một chiến lược thắng</strong>.</p>

<p>👉 <strong>Xem thêm:</strong> <a href="/tin-tuc/copy-trading-la-gi-huong-dan-top-san-uy-tin/">Copy Trading là gì?</a> | <a href="/so-sanh/">So sánh sàn giao dịch</a></p>

<p><em>Cập nhật: 04/03/2026. Bài viết mang tính phân tích, không phải khuyến nghị đầu tư.</em></p>
<p><strong>⚠️ Cảnh báo rủi ro:</strong> <em>Giao dịch Forex trong thời điểm bất ổn địa chính trị có rủi ro cực cao. Chỉ đầu tư số tiền bạn chấp nhận mất hoàn toàn.</em></p>
</article>`
    };

    const { data: ex } = await s.from('posts').select('id').eq('slug', post.slug).single();
    if (ex) { console.log('EXISTS'); return; }
    const { data, error } = await s.from('posts').insert([post]).select('id,title,scheduled_at');
    if (error) { console.log('ERR:', error.message); return; }
    console.log('OK', data[0].title.substring(0, 50));
    console.log('   18:00 hom nay 04/03');

    // Kiem tra tong bai hom nay
    const { data: today } = await s.from('posts').select('title,scheduled_at').gte('scheduled_at', '2026-03-04T00:00:00Z').lte('scheduled_at', '2026-03-04T23:59:59Z').order('scheduled_at');
    console.log('\nLich 04/03 sau khi cap nhat:');
    today.forEach(p => {
        const h = new Date(p.scheduled_at).toLocaleTimeString('en', { timeZone: 'Asia/Ho_Chi_Minh', hour: '2-digit', minute: '2-digit' });
        console.log(' ', h, p.title.substring(0, 50));
    });
    console.log('Tong:', today.length, 'bai');
}
main();
