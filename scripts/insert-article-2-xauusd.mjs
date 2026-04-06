import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const slug = 'giao-dich-vang-xauusd-huong-dan';
const IMG = `/images/${slug}`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">📌 Tóm Tắt Nhanh</p>
  <p>Giao dịch vàng XAU/USD là mua bán hợp đồng chênh lệch (CFD) giá vàng so với đồng USD, thực hiện qua các sàn Forex quốc tế. Bạn có thể <strong>kiếm lời khi giá vàng tăng (Buy) hoặc giảm (Sell)</strong> mà không cần sở hữu vàng thật. Chỉ cần $50-$200 là có thể bắt đầu, nhưng cần quản lý rủi ro cực kỳ chặt chẽ vì vàng biến động mạnh.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">📑 Trong Bài Viết Này</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#xauusd-la-gi">XAU/USD Là Gì? Cách Giao Dịch Vàng Online</a></li>
    <li><a href="#yeu-to-anh-huong">5 Yếu Tố Ảnh Hưởng Giá Vàng Mạnh Nhất</a></li>
    <li><a href="#so-sanh-san">So Sánh Sàn Giao Dịch Vàng Tốt Nhất 2026</a></li>
    <li><a href="#cach-dat-lenh">Hướng Dẫn Đặt Lệnh Giao Dịch Vàng Từng Bước</a></li>
    <li><a href="#sai-lam">4 Sai Lầm Chết Người Khi Trade Vàng</a></li>
    <li><a href="#faq">Câu Hỏi Thường Gặp (FAQ)</a></li>
    <li><a href="#ket-luan">Kết Luận</a></li>
  </ol>
</nav>

<h2 id="xauusd-la-gi">XAU/USD Là Gì? Cách Giao Dịch Vàng Online</h2>
<p><strong>XAU/USD là mã giao dịch quốc tế của vàng so với đồng đô la Mỹ.</strong> Trong đó, XAU là ký hiệu hóa học của vàng (Au) theo chuẩn ISO 4217, còn USD là đồng đô la Mỹ. Khi bạn "Buy XAU/USD", nghĩa là bạn đặt cược giá vàng sẽ tăng so với USD.</p>

<p>Khác với mua vàng vật chất tại tiệm vàng SJC, giao dịch XAU/USD qua sàn Forex cho phép bạn:</p>
<ul>
  <li><strong>Kiếm lời cả khi giá vàng giảm</strong> (bằng lệnh Sell/Short)</li>
  <li><strong>Sử dụng đòn bẩy</strong> — chỉ cần $100 có thể giao dịch lượng vàng trị giá $10,000-$50,000</li>
  <li><strong>Giao dịch 23/5</strong> — thị trường mở từ thứ 2 đến thứ 6, gần như 24 giờ/ngày</li>
  <li><strong>Không cần bảo quản</strong> — không lo mất cắp hay chi phí giữ vàng</li>
</ul>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="So sánh mua vàng vật chất và giao dịch vàng XAU/USD online" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Mua vàng thật vs Giao dịch vàng online XAU/USD — hai cách tiếp cận hoàn toàn khác nhau</figcaption>
</figure>

<h3>1 Pip vàng XAU/USD bằng bao nhiêu tiền?</h3>
<p>Với vàng, 1 pip = $0.01 thay đổi trong giá. Ví dụ: giá vàng từ 2,350.00 lên 2,350.50 = tăng 50 pip. Với lot size tiêu chuẩn (1.0 lot = 100 oz), mỗi pip trị giá <strong>$1</strong>. Với lot nhỏ nhất (0.01 lot), mỗi pip = <strong>$0.01</strong>. Đây là mức an toàn cho người mới.</p>

<h2 id="yeu-to-anh-huong">5 Yếu Tố Ảnh Hưởng Giá Vàng Mạnh Nhất</h2>
<p><strong>Giá vàng không biến động ngẫu nhiên — nó phản ứng trực tiếp với các sự kiện kinh tế và địa chính trị toàn cầu.</strong> Hiểu rõ 5 yếu tố dưới đây giúp bạn dự đoán xu hướng chính xác hơn.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="5 yếu tố ảnh hưởng giá vàng XAU/USD" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Bản đồ các yếu tố chính tác động lên giá vàng trên thị trường quốc tế</figcaption>
</figure>

<h3>1. Chính sách lãi suất của Fed (Cục Dự trữ Liên bang Mỹ)</h3>
<p>Đây là yếu tố <strong>ảnh hưởng mạnh nhất</strong>. Khi Fed tăng lãi suất → USD mạnh lên → vàng giảm. Khi Fed giảm lãi suất hoặc phát tín hiệu nới lỏng → vàng tăng mạnh. Hãy theo dõi lịch họp FOMC (8 lần/năm) trên Forex Factory.</p>

<h3>2. Lạm phát toàn cầu</h3>
<p>Vàng được coi là "hàng rào chống lạm phát". Khi chỉ số CPI (Consumer Price Index) tăng cao, nhà đầu tư đổ tiền vào vàng để bảo toàn giá trị tài sản, đẩy giá XAU/USD tăng.</p>

<h3>3. Căng thẳng địa chính trị</h3>
<p>Chiến tranh, xung đột, khủng hoảng ngoại giao → vàng tăng mạnh vì được coi là "nơi trú ẩn an toàn" (safe haven). Ví dụ: xung đột Nga-Ukraine 2022 đẩy vàng vượt $2,000/oz lần đầu tiên.</p>

<h3>4. Sức mạnh đồng USD (Chỉ số DXY)</h3>
<p>Vàng và USD có <strong>quan hệ nghịch đảo</strong>. DXY tăng → vàng giảm, và ngược lại. Theo dõi chỉ số DXY là cách nhanh nhất để đánh giá xu hướng ngắn hạn của vàng.</p>

<h3>5. Nhu cầu mua vàng từ Ngân hàng Trung ương</h3>
<p>Các ngân hàng trung ương (đặc biệt Trung Quốc, Ấn Độ, Thổ Nhĩ Kỳ) liên tục tăng dự trữ vàng. Nhu cầu mua vàng quy mô lớn này tạo lực đỡ giá dài hạn cho XAU/USD.</p>

<h2 id="so-sanh-san">So Sánh Sàn Giao Dịch Vàng Tốt Nhất 2026</h2>
<p>Không phải sàn nào cũng có điều kiện giao dịch vàng giống nhau. Dưới đây là so sánh chi tiết <strong>spread, đòn bẩy và phí swap</strong> cho XAU/USD tại các sàn phổ biến nhất:</p>

<div style="overflow-x:auto; margin:20px 0;">
<table style="width:100%; border-collapse:collapse; font-size:15px;">
  <thead>
    <tr style="background:#1e293b; color:#fff;">
      <th style="padding:12px 16px; text-align:left;">Sàn Forex</th>
      <th style="padding:12px 16px; text-align:center;">Spread XAU/USD</th>
      <th style="padding:12px 16px; text-align:center;">Đòn bẩy tối đa</th>
      <th style="padding:12px 16px; text-align:center;">Lot tối thiểu</th>
      <th style="padding:12px 16px; text-align:center;">Phí Swap</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">Exness</td>
      <td style="padding:10px 16px; text-align:center;">5-15 cent</td>
      <td style="padding:10px 16px; text-align:center;">1:2000</td>
      <td style="padding:10px 16px; text-align:center;">0.01</td>
      <td style="padding:10px 16px; text-align:center;">Swap-free ✅</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">IC Markets</td>
      <td style="padding:10px 16px; text-align:center;">5-10 cent</td>
      <td style="padding:10px 16px; text-align:center;">1:500</td>
      <td style="padding:10px 16px; text-align:center;">0.01</td>
      <td style="padding:10px 16px; text-align:center;">-$5.2/lot/đêm</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">XM</td>
      <td style="padding:10px 16px; text-align:center;">25-35 cent</td>
      <td style="padding:10px 16px; text-align:center;">1:1000</td>
      <td style="padding:10px 16px; text-align:center;">0.01</td>
      <td style="padding:10px 16px; text-align:center;">-$4.8/lot/đêm</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">Vantage</td>
      <td style="padding:10px 16px; text-align:center;">10-18 cent</td>
      <td style="padding:10px 16px; text-align:center;">1:500</td>
      <td style="padding:10px 16px; text-align:center;">0.01</td>
      <td style="padding:10px 16px; text-align:center;">-$5.0/lot/đêm</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">Pepperstone</td>
      <td style="padding:10px 16px; text-align:center;">8-15 cent</td>
      <td style="padding:10px 16px; text-align:center;">1:500</td>
      <td style="padding:10px 16px; text-align:center;">0.01</td>
      <td style="padding:10px 16px; text-align:center;">-$4.5/lot/đêm</td>
    </tr>
  </tbody>
</table>
</div>

<p><em>Spread đo bằng cent (trên giá vàng). Ví dụ: spread 10 cent = giá Bid 2,350.00 / Ask 2,350.10. Dữ liệu cập nhật tháng 4/2026, có thể thay đổi theo điều kiện thị trường.</em></p>

<h2 id="cach-dat-lenh">Hướng Dẫn Đặt Lệnh Giao Dịch Vàng Từng Bước</h2>
<p><strong>Dưới đây là quy trình 5 bước đặt lệnh giao dịch vàng XAU/USD an toàn trên nền tảng MT4/MT5</strong>, áp dụng cho tất cả các sàn Forex.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="Hướng dẫn đặt lệnh giao dịch vàng XAU/USD trên MT4" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Giao diện đặt lệnh Buy XAU/USD với Stop Loss và Take Profit rõ ràng trên MT4</figcaption>
</figure>

<h3>Bước 1: Phân tích xu hướng trên khung H4 hoặc D1</h3>
<p>Trước khi mở lệnh, xác định xu hướng chính trên khung thời gian lớn (H4 hoặc D1). Sử dụng EMA 50 và EMA 200: giá trên cả 2 đường = xu hướng tăng, giá dưới cả 2 = xu hướng giảm.</p>

<h3>Bước 2: Tìm điểm vào lệnh trên khung M30 hoặc H1</h3>
<p>Sau khi xác định xu hướng, chuyển sang khung nhỏ hơn để tìm điểm vào. Các tín hiệu phổ biến: nến Pin Bar tại vùng hỗ trợ/kháng cự, RSI quá mua/bán kết hợp divergence, hoặc breakout kênh giá.</p>

<h3>Bước 3: Đặt Stop Loss bắt buộc</h3>
<p>Với vàng, mỗi $1 biến động = $1/pip (0.01 lot) đến $100/pip (1.0 lot). <strong>Luôn đặt SL cách entry 200-500 pip ($2-$5/oz)</strong> tùy khung thời gian. Quy tắc vàng: rủi ro mỗi lệnh ≤ 2% tổng vốn.</p>

<h3>Bước 4: Xác định Take Profit với tỷ lệ R:R ≥ 1:2</h3>
<p>Nếu SL = 300 pip, thì TP tối thiểu = 600 pip. Tỷ lệ Risk:Reward 1:2 đảm bảo bạn chỉ cần thắng 40% số lệnh vẫn có lời tổng thể.</p>

<h3>Bước 5: Quản lý lệnh đang chạy</h3>
<p>Khi giá đi đúng hướng 50% quãng đường đến TP, hãy dời SL lên điểm hòa vốn (Break-even). Điều này loại bỏ hoàn toàn rủi ro thua lỗ cho lệnh đó.</p>

<h2 id="sai-lam">4 Sai Lầm Chết Người Khi Trade Vàng</h2>
<p><strong>Vàng XAU/USD là một trong những cặp tiền biến động mạnh nhất trên Forex</strong> — trung bình 1,500-3,000 pip/ngày, gấp 3-5 lần EUR/USD. Vì vậy, những sai lầm nhỏ có thể gây thiệt hại cực lớn.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_4.png" alt="4 sai lầm phổ biến khi giao dịch vàng XAU/USD" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Những sai lầm chí mạng khiến trader mới thua lỗ nặng khi giao dịch vàng</figcaption>
</figure>

<h3>Sai lầm 1: Dùng đòn bẩy quá cao</h3>
<p>Vàng biến động $20-$50/ngày là bình thường. Với đòn bẩy 1:500 và lot 0.1, chỉ cần giá đi ngược $10 là bạn mất $100. <strong>Khuyến nghị: đòn bẩy tối đa 1:100 cho vàng, lot ≤ 0.05 với tài khoản $500.</strong></p>

<h3>Sai lầm 2: Không đặt Stop Loss</h3>
<p>Vàng có thể nhảy $30-$50 trong vài phút khi có tin CPI, NFP hoặc FOMC. Không có Stop Loss = bạn đang đánh bạc với toàn bộ tài khoản. Đã có rất nhiều trader mất sạch $5,000-$10,000 chỉ trong 1 cú Flash Crash vàng.</p>

<h3>Sai lầm 3: Trade vàng ngay khi ra tin lớn</h3>
<p>Biên độ spread vàng có thể nới rộng từ 10 cent lên 100-200 cent trong giây phút tin quan trọng (NFP, CPI). Đặt lệnh lúc này = trượt giá nghiêm trọng. <strong>Hãy đợi 15-30 phút sau tin để thị trường ổn định.</strong></p>

<h3>Sai lầm 4: Revenge Trading — Gỡ gạc sau khi thua</h3>
<p>Thua 1 lệnh vàng → tức giận → mở lệnh lớn hơn để gỡ → thua tiếp → cháy tài khoản. Đây là cái vòng lặp chết người. Quy tắc: <strong>thua 2 lệnh liên tiếp thì NGHỈ giao dịch phiên đó.</strong></p>

<div style="background:#fef3c7; border-left:4px solid #f59e0b; padding:16px 20px; border-radius:8px; margin:20px 0;">
  <p style="font-weight:700; margin-bottom:4px;">⚠️ Cảnh Báo Rủi Ro</p>
  <p>Giao dịch vàng XAU/USD tiền ẩn rủi ro thua lỗ cao do biến động lớn. <strong>Theo thống kê, 70-80% trader vàng thua lỗ.</strong> Chỉ giao dịch bằng số tiền bạn chấp nhận mất hoàn toàn. Không vay mượn tiền để đầu tư Forex.</p>
</div>

<div style="background:#ecfdf5; border-left:4px solid #10b981; padding:20px; border-radius:8px; margin:32px 0;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">✅ Những Điểm Chính Cần Nhớ</p>
  <ul style="margin:0; padding-left:20px; line-height:1.8;">
    <li>XAU/USD = giao dịch vàng online qua sàn Forex, <strong>không cần mua vàng thật</strong></li>
    <li>Giá vàng phản ứng mạnh nhất với <strong>chính sách Fed và lạm phát</strong></li>
    <li>Exness và IC Markets có spread vàng thấp nhất (5-15 cent)</li>
    <li>Luôn đặt Stop Loss, rủi ro ≤2% vốn/lệnh, tỷ lệ R:R ≥ 1:2</li>
    <li>Tuyệt đối <strong>không trade vàng trong 15 phút đầu ra tin lớn</strong></li>
  </ul>
</div>

<h2 id="faq">❓ Câu Hỏi Thường Gặp</h2>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Cần bao nhiêu tiền để bắt đầu trade vàng XAU/USD?</h3>
  <p>Bạn có thể bắt đầu với $50-$100 tại Exness (lot tối thiểu 0.01). Tuy nhiên, khuyến nghị tối thiểu $200-$500 để có đủ margin chịu biến động và quản lý rủi ro an toàn với lot 0.01-0.05.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Trade vàng nên dùng khung thời gian nào?</h3>
  <p>Người mới nên phân tích xu hướng trên D1/H4 và vào lệnh trên H1. Scalping vàng trên M1/M5 đòi hỏi kinh nghiệm cao và tốc độ Internet ổn định. Day trading trên M30-H1 là sự cân bằng tốt nhất.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Sàn nào tốt nhất để trade vàng cho người Việt?</h3>
  <p>Exness là lựa chọn phổ biến nhất nhờ spread thấp (5-15 cent), đòn bẩy cao (1:2000), swap-free, và hỗ trợ nạp/rút ngân hàng Việt Nam. IC Markets phù hợp trader nâng cao cần tốc độ khớp lệnh nhanh nhất.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Giờ nào giá vàng biến động mạnh nhất?</h3>
  <p>Phiên London (14:00-22:00 VN) và phiên New York (19:30-02:00 VN) có volume và biến động lớn nhất. Giao thời London-New York (19:30-22:00 VN) là "giờ vàng" với biến động mạnh nhất trong ngày.</p>
</div>

<h2 id="ket-luan">Kết Luận</h2>
<p>Giao dịch vàng XAU/USD mang lại cơ hội lợi nhuận lớn nhưng đi kèm rủi ro tương xứng. Chìa khóa thành công nằm ở việc <strong>hiểu rõ các yếu tố tác động giá, chọn sàn có spread thấp, và quản lý rủi ro nghiêm ngặt</strong>. Hãy bắt đầu với tài khoản Demo, luyện tập ít nhất 1 tháng, rồi mới nạp tiền thật với số vốn nhỏ (0.01 lot).</p>

<div style="background:linear-gradient(135deg,#1e293b,#334155); color:#fff; padding:24px; border-radius:12px; margin:24px 0; text-align:center;">
  <p style="font-size:18px; font-weight:700; margin-bottom:8px;">🚀 So Sánh Chi Tiết Các Sàn Giao Dịch Vàng Uy Tín</p>
  <p style="font-size:14px; opacity:0.85; margin:0;">Spread, phí swap, đòn bẩy — tất cả trong một bảng so sánh dễ hiểu</p>
</div>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">📚 Bài Viết Liên Quan</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc-forex/forex-la-gi-huong-dan-nguoi-moi">Forex Là Gì? Hướng Dẫn Toàn Tập Cho Người Mới</a></li>
    <li><a href="/kien-thuc-forex/cach-dat-stop-loss-take-profit">Cách Đặt Stop Loss & Take Profit Hiệu Quả</a></li>
    <li><a href="/kien-thuc-forex/don-bay-leverage-trong-forex">Đòn Bẩy (Leverage) Trong Forex Là Gì?</a></li>
    <li><a href="/kien-thuc-forex/danh-gia-san-exness-2026">Đánh Giá Sàn Exness Chi Tiết 2026</a></li>
    <li><a href="/kien-thuc-forex/forex-co-hop-phap-o-viet-nam-khong">Forex Có Hợp Pháp Ở Việt Nam Không?</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Đội Ngũ Chuyên Gia SanUyTin</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Nhóm biên tập viên với hơn 8 năm kinh nghiệm phân tích và đánh giá các sàn giao dịch Forex tại thị trường Việt Nam. Mọi bài viết đều được kiểm chứng bởi trader thực chiến và cập nhật thường xuyên.</p>
  </div>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    console.log('⚠️ Bài đã tồn tại (ID: ' + existing.id + '), cập nhật...');
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Giao dịch vàng XAU/USD hướng dẫn cho người mới 2026', updated_at: new Date().toISOString() }).eq('id', existing.id);
    if (error) console.error('❌', error.message);
    else console.log('✅ Đã cập nhật!');
    return;
  }

  const { error } = await sb.from('posts').insert({
    title: 'Giao Dịch Vàng XAU/USD: Hướng Dẫn Từ A-Z Cho Người Mới (2026)',
    slug,
    excerpt: 'Hướng dẫn chi tiết cách giao dịch vàng XAU/USD qua sàn Forex: cách đặt lệnh, yếu tố ảnh hưởng giá vàng, so sánh sàn tốt nhất và 4 sai lầm cần tránh.',
    meta_title: 'Giao Dịch Vàng XAU/USD: Hướng Dẫn Chi Tiết 2026',
    meta_description: 'Hướng dẫn chi tiết cách giao dịch vàng XAU/USD qua sàn Forex: cách đặt lệnh, yếu tố ảnh hưởng giá vàng, so sánh sàn tốt nhất và 4 sai lầm cần tránh.',
    content,
    category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`,
    featured_image_alt: 'Giao dịch vàng XAU/USD hướng dẫn cho người mới 2026',
    is_published: false,
    scheduled_at: null,
    published_at: null
  });

  if (error) console.error('❌ Lỗi insert:', error.message);
  else console.log('✅ Đã thêm bài "Giao Dịch Vàng XAU/USD" vào DB! (chờ duyệt trên Admin)');
}

run();
