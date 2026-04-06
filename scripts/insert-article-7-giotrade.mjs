import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'nen-giao-dich-forex-luc-may-gio-viet-nam';
const IMG = `/images/${slug}`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">📌 Tóm Tắt Nhanh</p>
  <p>Thị trường Forex mở cửa 24/5, nhưng không phải lúc nào giao dịch cũng mang lại lợi nhuận tốt. <strong>Khung giờ vàng cho Trader Việt Nam là từ 19:00 đến 23:00 (Mùa hè)</strong>. Đây là lúc phiên Âu (London) giao thoa với phiên Mỹ (New York), tạo ra thanh khoản khổng lồ, mức chênh lệch (spread) thấp nhất và giá di chuyển mạnh nhất để chốt lời nhanh.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">📑 Trong Bài Viết Này</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#tong-quan">Tại sao chọn đúng giờ lại mang tính sống còn?</a></li>
    <li><a href="#phien-a">Sáng: Phiên Á (Tokyo & Sydney) – Chậm rãi, yên bình</a></li>
    <li><a href="#phien-au">Chiều: Phiên Âu (London) – Sự bùng nổ bắt đầu</a></li>
    <li><a href="#phien-my">Tối: Phiên Mỹ & Giao thoa (Golden Hour)</a></li>
    <li><a href="#mua-he-dong">Lưu ý Giờ Mùa Hè / Mùa Đông</a></li>
    <li><a href="#faq">Câu Hỏi Thường Gặp (FAQ)</a></li>
    <li><a href="#ket-luan">Kết Luận</a></li>
  </ol>
</nav>

<h2 id="tong-quan">Tại sao chọn đúng giờ lại mang tính sống còn?</h2>
<p>Nhiều người mới lầm tưởng rằng "thị trường mở 24/24 thì rảnh lúc nào đánh lúc đó". Thực tế, nếu bạn vào lệnh lúc 11 giờ trưa (giờ VN), giá thường đi ngang (sideway) hàng giờ đồng hồ, phí Spread giãn rộng cắn mất lợi nhuận, và bạn rất dễ chán nản.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_featured.png" alt="Khung giờ giao dịch forex tốt nhất theo giờ Việt Nam" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Khác biệt múi giờ mang lại lợi thế cực lớn cho Trader ở Việt Nam.</figcaption>
</figure>

<p>Thị trường Forex tuân theo giờ làm việc của hệ thống liên ngân hàng khổng lồ trải dài từ Châu Úc sang Châu Mỹ. Khi một khối lượng lớn ngân hàng cùng mở máy tính làm việc, hàng tỷ Dollar được giao dịch, đó là lúc thanh khoản cao nhất. Việt Nam cực kỳ may mắn khi khung giờ thanh khoản cao lại rơi đúng vào lúc chúng ta đã tan sở buổi chiều!</p>

<h2 id="phien-a">Sáng: Phiên Á (Tokyo & Sydney) – Chậm Rãi, Yên Bình</h2>
<p>Phiên Á bắt đầu từ <strong>sáng sớm đến khoảng 2h chiều (Giờ VN)</strong>.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Phiên Á Tokyo Sydney giao dịch forex giờ Việt Nam" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Biểu đồ sáng sớm khá bình yên, phù hợp nhâm nhi café phân tích xu hướng.</figcaption>
</figure>

<ul>
  <li><strong>Đặc điểm:</strong> Thị trường cực kỳ phẳng lặng và chậm rãi. Giá thường tích lũy trong một biên độ hẹp.</li>
  <li><strong>Cặp tiền nên trade:</strong> JPY (Yên Nhật), AUD (Đô la Úc), NZD (Đô la New Zealand) – ví dụ: AUD/USD, USD/JPY.</li>
  <li><strong>Chiến thuật:</strong> Rất phù hợp nếu bạn thích đánh những đoạn Scalping ngắn vài pip, hoặc sử dụng chiến thuật "Đánh phá vỡ" (Breakout) cho các phiên sau. Hạn chế trade Vàng (XAU/USD) ở phiên này vì spread cao và khó đoán định.</li>
</ul>

<h2 id="phien-au">Chiều: Phiên Âu (London) – Sự Bùng Nổ Bắt Đầu</h2>
<p>Tiếng chuông mở cửa phiên London vang lên vào lúc <strong>2:00 Chiều hoặc 3:00 Chiều (Giờ VN)</strong> tùy theo mùa.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Giao dịch phiên London Châu Âu tại Việt Nam" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Thị trường sang chiều (Phiên Âu) sẽ bắt đầu biến động và hình thành xu hướng chủ đạo trong ngày.</figcaption>
</figure>

<p>Thủ đô London của Anh là trung tâm ngoại hối lớn nhất thế giới, chiếm tới 34% khối lượng giao dịch toàn cầu. Khi London mở cửa, ngủ quên trong phiên Á chính thức chấm dứt. Dòng tiền khổng lồ bơm vào khiến thanh khoản (Liquidity) tăng vọt, kéo theo phí thu của sàn (Spread) giảm xuống mức rẻ nhất.</p>
<p><strong>Cặp tiền vua của phiên này:</strong> Bất cứ cặp nào dính tới EUR (Euro) và GBP (Bảng Anh) – ví dụ: EUR/USD, GBP/JPY.</p>

<h2 id="phien-my">Tối: Phiên Mỹ & Giao Thoa (Golden Hour)</h2>
<p>Đây là <strong>"Giờ Vàng" (Golden Hour)</strong> được tất cả Trader mong đợi, bắt đầu vào khoảng <strong>7:00 Tối (Mùa Lạnh) hoặc 8:00 Tối (Mùa Nóng)</strong> giờ Việt Nam.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="Phiên Mỹ New York bùng nổ giao dịch Forex" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Cú vọt khổng lồ của thị trường từ 7h-10h tối mang lại rất nhiều cơ hội lợi nhuận.</figcaption>
</figure>

<p>Điều đặc biệt nhất: Khoảng thời gian từ 7h tối đến 11h đêm (Giờ VN) là lúc <strong>phiên London chưa đóng cửa nhưng phiên New York thì vừa mở cửa</strong>. Sự "giao thoa" đụng độ giữa hai trung tâm tài chính lớn nhất hành tinh này tạo ra các cú sập hoặc pump mạnh mẽ.</p>
<p>Hàng loạt các bản tin kinh tế quan trọng (Non-Farm, CPI Mỹ, quyết định lãi suất FED) thường được tung ra vào đúng khung giờ 7:30 Tối. Đây là thời cơ hái ra tiền của những <strong>News Trader</strong> nếu phân tích đúng quỹ đạo.</p>

<div style="background:#fef3c7; border-left:4px solid #f59e0b; padding:16px 20px; border-radius:8px; margin:20px 0;">
  <p style="font-weight:700; margin-bottom:4px;">⚠️ YMYL Warning: Coi chừng bị "Quét SL"</p>
  <p>Thanh khoản khủng cũng đi kèm rủi ro lớn. Trong khung giờ giao thoa, giá thường xuyên quét 2 đầu trước khi chạy thực sự (Hunt Liquidity). Trader mới thường xuyên đặt Stop Loss (Cắt lỗ) quá hẹp sẽ bị quét mất lệnh.</p>
</div>

<h2 id="mua-he-dong">Lưu ý Giờ Mùa Hè / Mùa Đông</h2>
<p>Người mới thường bị nhầm lẫn do các sàn Forex đều căn cứ theo lịch <strong>Daylight Saving Time (DST)</strong> của phương Tây. Việc chuyển đổi giờ sẽ thay đổi cụ thể trên khung giờ VN như sau:</p>

<div style="overflow-x:auto; margin:20px 0;">
<table style="width:100%; border-collapse:collapse; font-size:15px;">
  <thead>
    <tr style="background:#1e293b; color:#fff;">
      <th style="padding:12px 16px; text-align:left;">Phiên Giao Dịch</th>
      <th style="padding:12px 16px; text-align:left;">Mùa Hè (T4 - T10) / Giờ VN</th>
      <th style="padding:12px 16px; text-align:left;">Mùa Đông (T11 - T3) / Giờ VN</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">Sydney (Úc)</td>
      <td style="padding:10px 16px;">5:00 Sáng - 2:00 Chiều</td>
      <td style="padding:10px 16px;">4:00 Sáng - 1:00 Chiều</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">Tokyo (Phiên Á)</td>
      <td style="padding:10px 16px;">6:00 Sáng - 3:00 Chiều</td>
      <td style="padding:10px 16px;">6:00 Sáng - 3:00 Chiều</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">London (Phiên Âu)</td>
      <td style="padding:10px 16px;">2:00 Chiều - 11:00 Đêm</td>
      <td style="padding:10px 16px;">3:00 Chiều - 12:00 Đêm</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">New York (Phiên Mỹ)</td>
      <td style="padding:10px 16px;">7:00 Tối - 4:00 Sáng hôm sau</td>
      <td style="padding:10px 16px;">8:00 Tối - 5:00 Sáng hôm sau</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="faq">❓ Câu Hỏi Thường Gặp (FAQ)</h2>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Tại sao nên tránh trade vào sáng thứ 2 (đầu tuần)?</h3>
  <p>Sáng thứ 2 là lúc thị trường mới hút vốn sau cuối tuần nghỉ ngơi. Điểm mù tin tức có thể xuất hiện, tạo ra các khoảng trống giá (Gap), làm phá vỡ toàn bộ biểu đồ kỹ thuật và cắn qua StopLoss của bạn trơn tuột.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Tôi làm dân văn phòng giờ hành chính, trade lúc nào?</h3>
  <p>Lợi thế lớn của trader Việt Nam! Sau khi tan làm, ăn tối tắm rửa xong lúc 7h30 tối — Đây là khung giờ Mỹ mở cửa với thanh khoản mạnh nhất ngày. Bạn chỉ cần dành 1-2 tiếng mỗi tối là quá đủ, không cần ôm máy tính ban ngày.</p>
</div>

<h2 id="ket-luan">Kết Luận</h2>
<p>Biết được lúc nào nên dốc tiền, và lúc nào nên "ngồi ngoài" là đẳng cấp của một Trader lâu năm. Với múi giờ Việt Nam, <strong>khung 14h-16h chiều</strong> và <strong>19h-22h tối</strong> là khoảng thời gian hoàn hảo nhất để tối ưu chi phí Spread và tận dụng sóng mạnh. Không cần theo dõi 24/7, sự kiên nhẫn săn mồi đúng giờ mới mang lại hiệu quả bền vững.</p>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">📚 Bài Viết Liên Quan</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/bao-nhieu-tien-de-bat-dau-trade-forex">Bao Nhiêu Tiền Để Bắt Đầu Nạp Trade Không Bị Áp Lực?</a></li>
    <li><a href="/kien-thuc/lich-kinh-te-forex-cach-doc-tin">Cách Kiểm Tra Tin Tức Lịch Kinh Tế Gây Bão Giá</a></li>
    <li><a href="/huong-dan/forex-factory-la-gi-huong-dan-su-dung">Hướng Dẫn Lấy Tin Forex Factory Miễn Phí</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Đội Ngũ Chuyên Gia SanUyTin</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Nhóm có hơn 8 năm hỗ trợ định hướng đầu tư tài chính. Mọi bài viết đều được thẩm định dựa trên dữ liệu thanh khoản từ Interbank, độc giả có thể yên tâm học hỏi.</p>
  </div>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Gio giao dich forex Viet Nam loi nhat 2026', scheduled_at: '2026-04-06T11:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? '❌ ' + error.message : '✅ Đã cập nhật bài 7!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Nên Giao Dịch Forex Lúc Mấy Giờ VN Để Lời Nhất? (2026)',
    slug, excerpt: 'Lợi thế múi giờ tuyệt vời của người Việt Nam khi giao dịch ngoại hối. Khám phá bí quyết khung giờ vàng giao thoa Âu-Mỹ thanh khoản khủng, dễ bắt sóng mạnh để chốt lời nhất trong ngày.',
    meta_title: 'Giờ Giao Dịch Forex Việt Nam: Phiên Âu, Mỹ, Á (2026)',
    meta_description: 'Nên giao dịch Forex lúc mấy giờ Việt Nam là câu hỏi quan trọng nhất. Cùng review phiên Á, Âu (London), Mỹ (New York) và bí quyết tận dụng giờ vàng.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Giờ giao dịch Forex lúc mấy giờ Việt Nam tối ưu nhất',
    is_published: false, scheduled_at: '2026-04-06T11:30:00+07:00', published_at: null
  });
  console.log(error ? '❌ ' + error.message : '✅ Đã thêm bài 7 "Giờ Giao Dịch" vào DB!');
}
run();
