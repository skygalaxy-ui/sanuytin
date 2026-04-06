import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'forex-vs-chung-khoan-viet-nam';
const IMG = `/images/${slug}`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">📌 Tóm Tắt Nhanh</p>
  <p>Forex và Chứng Khoán Việt Nam (CKCS) là hai kênh đầu tư có đặc thù hoàn toàn trái ngược. Nếu Chứng Khoán phù hợp với việc hold dài hạn (ôm cổ tức) và an toàn về pháp lý, thì <strong>Forex lại là sân chơi cho người vốn ít, thích lướt sóng nhanh (Scalping), đòn bẩy lớn và thị trường mở liên tục 24/5.</strong></p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">📑 Trong Bài Viết Này</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#tong-quan">Quy mô thị trường: Đàn cá mập và Làng chài</a></li>
    <li><a href="#thoi-gian">Thời gian giao dịch: 24/5 vs Giờ hành chính</a></li>
    <li><a href="#t-cong">Tính thanh khoản (T+0 vs T+2.5)</a></li>
    <li><a href="#don-bay">Đòn bẩy: Vũ khí hai lưỡi</a></li>
    <li><a href="#faq">Câu Hỏi Thường Gặp (FAQ)</a></li>
    <li><a href="#ket-luan">Nên chọn kênh nào năm 2026?</a></li>
  </ol>
</nav>

<h2 id="tong-quan">Quy Mô Thị Trường: Đàn Cá Mập và Làng Chài</h2>
<p>Hãy bắt đầu bằng những con số thực tế. Thị trường Chứng Khoán Việt Nam (VN-Index) giao dịch mỗi ngày khoảng 1 tỷ USD (khoảng 25.000 tỷ VND). Đối với một nhà đầu tư nhỏ lẻ, con số này nghe rất lớn.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_featured.png" alt="So sanh forex vs chung khoan viet nam" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Khác biệt lớn nhất nằm ở tốc độ khớp lệnh và biên độ dao động.</figcaption>
</figure>

<p>Tuy nhiên, thị trường ngoại hối (Forex) có khối lượng giao dịch lên tới <strong>hơn 6.000 tỷ USD mỗi ngày</strong>. Tức là Forex lớn gấp 6.000 lần chứng khoán VN. Điều này dẫn đến một lợi thế tuyệt đối: <strong>Không ai có quyền thao túng giá Forex.</strong></p>
<p>Ở chứng khoán VN, thỉnh thoảng bạn sẽ thấy một "đội lái" đẩy kịch trần một mã cổ phiếu FLC hay "úp sọt" nhà đầu tư. Ở Forex, kể cả Elon Musk cũng khó lòng thao túng được tỷ giá của đồng Đô la Mỹ hằng ngày.</p>

<h2 id="thoi-gian">Thời Gian Giao Dịch: 24/5 vs Giờ Hành Chính</h2>
<p>Đây là tiêu chí quyết định xem bạn có thể dành bao nhiêu thời gian cho công việc đầu tư.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Forex 24/5 Chung khoan chung minh" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Chứng khoán phụ thuộc khung giờ mở cửa, có giới hạn thời gian.</figcaption>
</figure>

<ul>
  <li><strong>Chứng Khoán VN:</strong> Chỉ giao dịch từ 9h00 sáng đến 14h45 chiều. Chốt phiên là bảng điện bị khóa, phù hợp cho người có thể soi tin tức trong giờ làm việc.</li>
  <li><strong>Forex:</strong> Thị trường liên ngân hàng luân chuyển từ Châu Úc sang Châu Mỹ, chạy xoay vòng 24/24 suốt 5 ngày trong tuần. Bạn có thể chốt lệnh vào giữa đêm hoặc lúc sáng sớm tinh mơ.</li>
</ul>

<h2 id="t-cong">Tính Thanh Khoản (T+0 vs T+2.5)</h2>
<p>Nếu bạn là người thích "ăn sổi", lướt sóng nhanh (Day Trading), thì T+2.5 của chứng khoán cơ sở là một "cực hình".</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Day trading toc do cao forex" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Forex với T+0 cho phép trader chốt lệnh kiếm lời/cắt lỗ ngay trong tích tắc.</figcaption>
</figure>

<p>Ở Chứng khoán VN, bạn mua cổ phiếu hôm nay (T0), bạn phải đợi đến chiều ngày T+2 (khoảng 2.5 ngày) cổ phiếu mới về tài khoản để bạn có thể bán. Trong 2 ngày chờ đợi đó, lỡ doanh nghiệp bị bắt bớ hoặc thị trường sập, bạn chỉ biết ngồi nhìn tài sản bốc hơi mà không thể bán tháo.</p>
<p>Forex là <strong>T+0 Tuyệt đối</strong>. Bạn bấm lệnh BUY, 1 giây sau thấy lãi, bạn có thể ấn nút ĐÓNG và thu vài trăm ngàn vào túi lập tức.</p>

<h2 id="don-bay">Đòn Bẩy: Vũ Khí Hai Lưỡi</h2>
<p>Đầu tư chứng khoán cần rất nhiều vốn. Muốn mua một ngàn cổ phiếu Vinamilk (VNM) giá 70.000đ, bạn phải bỏ ra 70 triệu VNĐ tiền quỹ thật. Nếu dùng Margin (Đòn bẩy) của công ty thẻ khoán, cao lắm cũng chỉ là 1:2 hoặc 1:3.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="Don bay tai chinh leverage trong forex" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Chỉ với $10, bạn có thể kiểm soát các lệnh lớn $10,000 nhờ đòn bẩy Forex.</figcaption>
</figure>

<p>Bên Forex, các sàn cung cấp đòn bẩy tiêu chuẩn 1:500, thậm chí Vô Cực. Có nghĩa là bạn chỉ cần nạp 200$, bạn đã điều khiển một lượng tiền khổng lồ lên tới 100.000$ vào thị trường. Nhờ điều này, nếu giá chỉ dịch chuyển một tí tẹo, bạn vẫn có được lợi nhuận rất cao.</p>

<div style="background:#fef3c7; border-left:4px solid #f59e0b; padding:16px 20px; border-radius:8px; margin:20px 0;">
  <p style="font-weight:700; margin-bottom:4px;">⚠️ Cảnh Báo Cháy Tài Khoản</p>
  <p>Lãi cực nhanh thì thua cũng cực nhanh. Nếu bạn dùng đòn bẩy 1:500 đi lệnh với Khối lượng (Lot size) quá to so với vốn. Giá chỉ cần giật ngược 5 Giá, tài khoản 200$ của bạn sẽ biến mất (Margin Call) ngay lập tức gạt bay máu liều.</p>
</div>

<h2 id="faq">❓ Câu Hỏi Thường Gặp (FAQ)</h2>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Pháp lý kênh nào an toàn hơn?</h3>
  <p>Chắc chắn là Chứng Khoán VN. Bạn được ủy ban chứng khoán nhà nước bảo trợ. Forex tại Việt Nam chưa được cấp phép (chưa cấm), bạn sẽ tự giao dịch chịu rủi ro qua cổng thanh toán ngoài.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Tôi làm ngân hàng (Rảnh buổi tối), nên chơi cái nào?</h3>
  <p>Forex! Vì buổi tối 7h là thời gian cực sôi động của Phiên Mỹ, chênh lệch phí thấp nhất, nến dài và biến động bùng nổ để bạn vào kèo ngay. Bảng điện chứng khoán 3h chiều đã đóng mất tiêu rồi.</p>
</div>

<h2 id="ket-luan">Nên Chọn Kênh Nào Năm 2026?</h2>
<p>Hai kênh này không dẫm đạp lên nhau mà có thể tồn tại **Song Song**. Nếu bạn trích 80% vốn để đầu tư giá trị an toàn dài hạn, **Chứng Khoán Việt Nam** (mua cổ phiếu bluechips đầu ngành) là hầm trú ẩn hoàn hảo và chia dòng tiền cổ tức thụ động.</p>
<p>20% phần vốn còn lại - Số tiền mà bạn sẵn sàng mạo hiểm để kiếm siêu lợi nhuận hằng ngày hằng giờ? Hãy đem vào rèn rũa tâm lí ở sàn đấu khốc liệt nhất hành tinh: **Thị trường Forex.**</p>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">📚 Bài Viết Bạn Nên Đọc</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/bao-nhieu-tien-de-bat-dau-trade-forex">Bao Nhiêu Tiền Để Bắt Đầu Nạp Trade Forex Mới An Toàn Nhất?</a></li>
    <li><a href="/kien-thuc/forex-va-crypto-khac-nhau-nhu-the-nao">Forex và Tiền Ảo Crypto: Sự Khác Biệt Máu Mặt Cuối Cùng</a></li>
    <li><a href="/kien-thuc/cac-loai-lenh-trong-forex">Phân Biệt Market Order, Limit Order Trong 2 Phút</a></li>
  </ul>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Forex vs Chung khoan Viet Nam', scheduled_at: '2026-04-06T19:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? '❌ ' + error.message : '✅ Đã cập nhật bài 9!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Forex vs Chứng Khoán: Bạn Nên Chọn Kênh Nào 2026?',
    slug, excerpt: 'Trận chiến kinh điển giữa T+0 lướt sóng 24/5 của Forex và T+2.5 an toàn pháp lý của Chứng khoán cơ sở VN. So kè chi tiết vốn, đòn bẩy và thanh khoản.',
    meta_title: 'So Sánh Forex vs Chứng Khoán Việt Nam (2026)',
    meta_description: 'Nên đầu tư chứng khoán hay Forex? So sánh T+0 lướt sóng, đòn bẩy vô cực 1:500 và khả năng kiếm siêu lợi nhuận mỗi ngày của hai thị trường lớn nhất.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Trận chiến kinh điển Forex vs Cổ phiếu Việt Nam',
    is_published: false, scheduled_at: '2026-04-06T19:30:00+07:00', published_at: null
  });
  console.log(error ? '❌ ' + error.message : '✅ Đã thêm bài 9 "Forex vs Chứng Khoán" vào DB!');
}
run();
