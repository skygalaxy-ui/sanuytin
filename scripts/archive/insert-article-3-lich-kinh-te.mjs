import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'lich-kinh-te-forex-cach-doc-tin';
const IMG = `/images/${slug}`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">📌 Tóm Tắt Nhanh</p>
  <p>Lịch kinh tế (Economic Calendar) là công cụ liệt kê <strong>tất cả các sự kiện kinh tế quan trọng</strong> theo ngày/giờ kèm mức độ ảnh hưởng đến thị trường Forex. Trader sử dụng nó để biết khi nào nên giao dịch, khi nào nên tránh, và dự đoán hướng đi của giá dựa trên kết quả thực tế so với dự báo. Công cụ miễn phí phổ biến nhất: <strong>Forex Factory, Investing.com, Myfxbook</strong>.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">📑 Trong Bài Viết Này</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#lich-kinh-te-la-gi">Lịch Kinh Tế Forex Là Gì?</a></li>
    <li><a href="#cach-doc">Cách Đọc Lịch Kinh Tế Từng Cột</a></li>
    <li><a href="#su-kien-quan-trong">Top 8 Sự Kiện Kinh Tế Quan Trọng Nhất</a></li>
    <li><a href="#anh-huong-thi-truong">Tin Tức Ảnh Hưởng Thị Trường Forex Như Thế Nào?</a></li>
    <li><a href="#chien-luoc">Chiến Lược Giao Dịch Theo Lịch Kinh Tế</a></li>
    <li><a href="#faq">Câu Hỏi Thường Gặp (FAQ)</a></li>
    <li><a href="#ket-luan">Kết Luận</a></li>
  </ol>
</nav>

<h2 id="lich-kinh-te-la-gi">Lịch Kinh Tế Forex Là Gì?</h2>
<p><strong>Lịch kinh tế là bảng tổng hợp tất cả các sự kiện, báo cáo và chỉ số kinh tế vĩ mô được công bố theo lịch trình cố định,</strong> bao gồm thời gian chính xác, quốc gia liên quan, mức độ ảnh hưởng (thấp/trung bình/cao), giá trị kỳ trước (Previous), dự báo (Forecast) và kết quả thực tế (Actual).</p>

<p>Đối với trader Forex, lịch kinh tế quan trọng không kém gì biểu đồ kỹ thuật. Lý do:</p>
<ul>
  <li><strong>Tin tốt hơn dự báo</strong> → đồng tiền của quốc gia đó thường tăng giá</li>
  <li><strong>Tin xấu hơn dự báo</strong> → đồng tiền thường giảm giá</li>
  <li><strong>Tin đúng dự báo</strong> → thị trường thường ít phản ứng hoặc đã "price-in" trước</li>
</ul>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Cách đọc lịch kinh tế Forex với Previous Forecast Actual" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Hướng dẫn đọc một dòng dữ liệu trên lịch kinh tế: Previous → Forecast → Actual</figcaption>
</figure>

<h2 id="cach-doc">Cách Đọc Lịch Kinh Tế Từng Cột</h2>
<p><strong>Mỗi dòng trên lịch kinh tế chứa 6 thông tin cốt lõi</strong> mà trader cần hiểu rõ trước khi ra quyết định giao dịch:</p>

<div style="overflow-x:auto; margin:20px 0;">
<table style="width:100%; border-collapse:collapse; font-size:15px;">
  <thead>
    <tr style="background:#1e293b; color:#fff;">
      <th style="padding:12px 16px; text-align:left;">Cột</th>
      <th style="padding:12px 16px; text-align:left;">Ý nghĩa</th>
      <th style="padding:12px 16px; text-align:left;">Ví dụ</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">⏰ Time</td>
      <td style="padding:10px 16px;">Giờ công bố (theo múi giờ bạn cài đặt)</td>
      <td style="padding:10px 16px;">19:30 (giờ VN) = 8:30 AM EST</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">🏳️ Currency</td>
      <td style="padding:10px 16px;">Đồng tiền bị ảnh hưởng</td>
      <td style="padding:10px 16px;">USD, EUR, GBP, JPY...</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">⚡ Impact</td>
      <td style="padding:10px 16px;">Mức độ ảnh hưởng (🟡 Thấp / 🟠 TB / 🔴 Cao)</td>
      <td style="padding:10px 16px;">NFP = 🔴🔴🔴 (Cao nhất)</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">📊 Previous</td>
      <td style="padding:10px 16px;">Giá trị kỳ trước (tháng/quý trước)</td>
      <td style="padding:10px 16px;">NFP Previous: 180K</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">🎯 Forecast</td>
      <td style="padding:10px 16px;">Dự báo của các chuyên gia kinh tế</td>
      <td style="padding:10px 16px;">NFP Forecast: 210K</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">✅ Actual</td>
      <td style="padding:10px 16px;">Kết quả thực tế (hiện sau khi công bố)</td>
      <td style="padding:10px 16px;">NFP Actual: 275K → USD tăng mạnh!</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Quy tắc vàng: Actual so với Forecast mới là yếu tố quyết định</h3>
<p>Nhiều trader mới mắc sai lầm khi so sánh Actual với Previous. Thực tế, <strong>thị trường đã "wap" (price-in) giá trị Forecast vào giá trước khi tin công bố</strong>. Vì vậy, chỉ có sự chênh lệch giữa Actual và Forecast mới tạo ra biến động đột ngột.</p>

<h2 id="su-kien-quan-trong">Top 8 Sự Kiện Kinh Tế Quan Trọng Nhất</h2>
<p><strong>Không phải tất cả tin tức đều đáng quan tâm.</strong> Dưới đây là 8 sự kiện "hạng nặng" có khả năng dịch chuyển thị trường 50-200 pip chỉ trong vài phút:</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Top 3 sự kiện kinh tế quan trọng nhất Forex: NFP CPI FOMC" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Bộ 3 quyền lực: NFP (việc làm), CPI (lạm phát), FOMC (lãi suất) — 3 sự kiện trader phải thuộc lòng</figcaption>
</figure>

<div style="overflow-x:auto; margin:20px 0;">
<table style="width:100%; border-collapse:collapse; font-size:15px;">
  <thead>
    <tr style="background:#1e293b; color:#fff;">
      <th style="padding:12px 16px; text-align:left;">Sự kiện</th>
      <th style="padding:12px 16px; text-align:center;">Tần suất</th>
      <th style="padding:12px 16px; text-align:center;">Đồng tiền</th>
      <th style="padding:12px 16px; text-align:center;">Biến động</th>
      <th style="padding:12px 16px; text-align:center;">Giờ VN</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">NFP (Non-Farm Payrolls)</td>
      <td style="padding:10px 16px; text-align:center;">Tháng (thứ 6 đầu)</td>
      <td style="padding:10px 16px; text-align:center;">USD</td>
      <td style="padding:10px 16px; text-align:center;">100-200 pip</td>
      <td style="padding:10px 16px; text-align:center;">19:30</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">CPI (Chỉ số giá tiêu dùng)</td>
      <td style="padding:10px 16px; text-align:center;">Tháng</td>
      <td style="padding:10px 16px; text-align:center;">USD/EUR/GBP</td>
      <td style="padding:10px 16px; text-align:center;">80-150 pip</td>
      <td style="padding:10px 16px; text-align:center;">19:30</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">FOMC (Quyết định lãi suất Fed)</td>
      <td style="padding:10px 16px; text-align:center;">8 lần/năm</td>
      <td style="padding:10px 16px; text-align:center;">USD + All</td>
      <td style="padding:10px 16px; text-align:center;">100-300 pip</td>
      <td style="padding:10px 16px; text-align:center;">01:00</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">GDP (Tổng sản phẩm quốc nội)</td>
      <td style="padding:10px 16px; text-align:center;">Quý</td>
      <td style="padding:10px 16px; text-align:center;">USD/EUR/GBP</td>
      <td style="padding:10px 16px; text-align:center;">50-100 pip</td>
      <td style="padding:10px 16px; text-align:center;">19:30</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">ECB/BOE Rate Decision</td>
      <td style="padding:10px 16px; text-align:center;">6-8 lần/năm</td>
      <td style="padding:10px 16px; text-align:center;">EUR/GBP</td>
      <td style="padding:10px 16px; text-align:center;">80-200 pip</td>
      <td style="padding:10px 16px; text-align:center;">18:45-18:00</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">Retail Sales (Doanh số bán lẻ)</td>
      <td style="padding:10px 16px; text-align:center;">Tháng</td>
      <td style="padding:10px 16px; text-align:center;">USD</td>
      <td style="padding:10px 16px; text-align:center;">40-80 pip</td>
      <td style="padding:10px 16px; text-align:center;">19:30</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">PMI (Purchasing Managers Index)</td>
      <td style="padding:10px 16px; text-align:center;">Tháng</td>
      <td style="padding:10px 16px; text-align:center;">USD/EUR/GBP/CNY</td>
      <td style="padding:10px 16px; text-align:center;">30-60 pip</td>
      <td style="padding:10px 16px; text-align:center;">Khác nhau</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">Unemployment Claims (Thất nghiệp)</td>
      <td style="padding:10px 16px; text-align:center;">Tuần</td>
      <td style="padding:10px 16px; text-align:center;">USD</td>
      <td style="padding:10px 16px; text-align:center;">20-50 pip</td>
      <td style="padding:10px 16px; text-align:center;">19:30</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="anh-huong-thi-truong">Tin Tức Ảnh Hưởng Thị Trường Forex Như Thế Nào?</h2>
<p><strong>Thị trường Forex phản ứng với tin tức theo nguyên tắc "bất ngờ" — chỉ kết quả khác xa dự báo mới tạo ra biến động lớn.</strong> Dưới đây là cơ chế phản ứng cụ thể:</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="Biến động thị trường Forex trước và sau tin tức kinh tế" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Trước tin: thị trường yên ắng — Sau tin: biến động bùng nổ chỉ trong vài giây</figcaption>
</figure>

<h3>Pha 1: Trước tin (30-60 phút) — Thị trường "nín thở"</h3>
<p>Spread nới rộng, volume giảm. Nhiều trader đóng lệnh để tránh rủi ro. Biểu đồ thường di chuyển trong biên độ hẹp (range-bound). <strong>Đây là lúc KHÔNG nên mở lệnh mới.</strong></p>

<h3>Pha 2: Đúng lúc tin ra (0-5 phút) — "Sóng thần"</h3>
<p>Nến thường phóng to gấp 5-10 lần bình thường. Spread có thể nới gấp 10 lần. Trượt giá (slippage) xảy ra phổ biến. <strong>Chỉ trader có kinh nghiệm và chiến lược rõ ràng mới nên giao dịch lúc này.</strong></p>

<h3>Pha 3: Sau tin (15-60 phút) — Xu hướng thực sự hình thành</h3>
<p>Sau cơn sốc ban đầu, thị trường "tiêu hóa" dữ liệu và xu hướng thực sự bộc lộ. <strong>Đây là thời điểm tốt nhất để vào lệnh</strong> — chờ nến H1 đóng, xác nhận hướng đi, rồi mới đặt lệnh theo xu hướng.</p>

<h2 id="chien-luoc">Chiến Lược Giao Dịch Theo Lịch Kinh Tế</h2>
<p><strong>Thay vì đoán kết quả tin tức, trader thông minh sử dụng lịch kinh tế để QUẢN LÝ RỦI RO và lập kế hoạch giao dịch hàng tuần.</strong></p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_4.png" alt="Lập kế hoạch giao dịch Forex theo lịch kinh tế hàng tuần" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Trader chuyên nghiệp luôn kiểm tra lịch kinh tế và lập trading plan mỗi đầu tuần</figcaption>
</figure>

<h3>Chiến lược 1: "Tránh bão" — An toàn cho người mới</h3>
<p>Đóng tất cả lệnh đang mở <strong>30 phút trước</strong> tin 🔴 (High Impact). Không mở lệnh mới cho đến khi nến H1 đầu tiên sau tin đóng cửa. Phù hợp: 90% trader, đặc biệt người mới.</p>

<h3>Chiến lược 2: "Hậu tin" — Chờ sóng ổn định</h3>
<p>Đợi 15-30 phút sau tin, khi spread thu hẹp về mức bình thường. Xác nhận xu hướng trên H1: nếu nến đóng mạnh theo hướng tin → vào lệnh theo hướng đó với SL đặt ở đuôi nến tin. Tỷ lệ R:R tối thiểu 1:2.</p>

<h3>Chiến lược 3: "Straddle" — Bắt cả 2 hướng (Nâng cao)</h3>
<p>Đặt 2 lệnh chờ (Buy Stop và Sell Stop) cách giá hiện tại 20-30 pip, 1 phút trước tin. Khi tin ra, giá phóng về 1 hướng → kích hoạt 1 lệnh, lệnh còn lại hủy. <strong>Cảnh báo: chiến lược này rủi ro cao do spread nới rộng, chỉ phù hợp trader có kinh nghiệm.</strong></p>

<div style="background:#fef3c7; border-left:4px solid #f59e0b; padding:16px 20px; border-radius:8px; margin:20px 0;">
  <p style="font-weight:700; margin-bottom:4px;">⚠️ Lưu Ý Quan Trọng</p>
  <p>Không cố đoán kết quả tin tức — ngay cả chuyên gia kinh tế cũng thường sai. Mục tiêu của việc đọc lịch kinh tế là <strong>biết khi nào nên TRÁNH giao dịch</strong>, không phải biết tin để đánh cược.</p>
</div>

<div style="background:#ecfdf5; border-left:4px solid #10b981; padding:20px; border-radius:8px; margin:32px 0;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">✅ Những Điểm Chính Cần Nhớ</p>
  <ul style="margin:0; padding-left:20px; line-height:1.8;">
    <li>Lịch kinh tế là <strong>bắt buộc kiểm tra mỗi ngày</strong> trước khi giao dịch</li>
    <li>Chỉ so sánh <strong>Actual vs Forecast</strong>, không so với Previous</li>
    <li>3 sự kiện quan trọng nhất: <strong>NFP, CPI, FOMC</strong></li>
    <li>Người mới nên <strong>ĐÓNG lệnh trước tin 🔴</strong>, không cố đoán hướng</li>
    <li>Thời điểm tốt nhất vào lệnh: <strong>15-30 phút SAU tin</strong>, khi spread ổn định</li>
  </ul>
</div>

<h2 id="faq">❓ Câu Hỏi Thường Gặp</h2>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Xem lịch kinh tế Forex ở đâu miễn phí?</h3>
  <p>3 nguồn phổ biến nhất: <strong>ForexFactory.com</strong> (giao diện đơn giản, lọc theo mức độ), <strong>Investing.com</strong> (có tiếng Việt), và <strong>Myfxbook.com</strong> (tích hợp phân tích). Tất cả đều miễn phí và cập nhật real-time.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">NFP là gì và tại sao quan trọng?</h3>
  <p>NFP (Non-Farm Payrolls) là báo cáo việc làm phi nông nghiệp của Mỹ, công bố thứ 6 đầu tiên mỗi tháng lúc 19:30 VN. Nó phản ánh sức khỏe nền kinh tế lớn nhất thế giới, tác động trực tiếp lên USD, vàng, và hầu hết cặp tiền Forex.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Nên giao dịch trước hay sau khi tin ra?</h3>
  <p>Đa số trader nên giao dịch <strong>SAU tin</strong> (15-30 phút), khi biến động ban đầu đã ổn định và xu hướng thật sự bộc lộ. Giao dịch trước hoặc ngay lúc tin ra chỉ phù hợp với trader chuyên nghiệp có chiến lược cụ thể.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Làm sao cài lịch kinh tế theo giờ Việt Nam?</h3>
  <p>Tại Forex Factory, nhấn vào biểu tượng đồng hồ góc trên phải → chọn <strong>GMT+7 (Asia/Ho_Chi_Minh)</strong> → Save. Tất cả thời gian sẽ tự động hiển thị theo giờ Việt Nam.</p>
</div>

<h2 id="ket-luan">Kết Luận</h2>
<p>Lịch kinh tế Forex không chỉ là công cụ xem tin tức — nó là <strong>la bàn định hướng</strong> giúp trader biết khi nào nên hành động và khi nào nên đứng ngoài. Hãy tập thói quen kiểm tra lịch kinh tế mỗi sáng trước phiên giao dịch, đánh dấu các tin 🔴, và luôn có kế hoạch rõ ràng cho mỗi sự kiện quan trọng.</p>

<div style="background:linear-gradient(135deg,#1e293b,#334155); color:#fff; padding:24px; border-radius:12px; margin:24px 0; text-align:center;">
  <p style="font-size:18px; font-weight:700; margin-bottom:8px;">🚀 Tìm Hiểu Forex Factory — Công Cụ Lịch Kinh Tế #1 Thế Giới</p>
  <p style="font-size:14px; opacity:0.85; margin:0;">Hướng dẫn cài đặt, lọc tin, và sử dụng Forex Factory hiệu quả cho trader Việt</p>
</div>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">📚 Bài Viết Liên Quan</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc-forex/phan-tich-ky-thuat-vs-co-ban">Phân Tích Kỹ Thuật vs Phân Tích Cơ Bản</a></li>
    <li><a href="/kien-thuc-forex/cac-phien-giao-dich-forex">Các Phiên Giao Dịch Forex Và Giờ Hoạt Động</a></li>
    <li><a href="/kien-thuc-forex/giao-dich-vang-xauusd-huong-dan">Giao Dịch Vàng XAU/USD: Hướng Dẫn Cho Người Mới</a></li>
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
    console.log('⚠️ Đã tồn tại, cập nhật...');
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Lịch kinh tế Forex cách đọc tin tức giao dịch 2026', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? '❌ ' + error.message : '✅ Đã cập nhật!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Lịch Kinh Tế Forex Là Gì? Cách Đọc Tin Để Giao Dịch Hiệu Quả (2026)',
    slug,
    excerpt: 'Hướng dẫn đọc lịch kinh tế Forex: cách phân tích NFP, CPI, FOMC và 3 chiến lược giao dịch theo tin tức cho trader Việt Nam.',
    meta_title: 'Lịch Kinh Tế Forex: Cách Đọc Tin Giao Dịch 2026',
    meta_description: 'Hướng dẫn đọc lịch kinh tế Forex: cách phân tích NFP, CPI, FOMC và 3 chiến lược giao dịch theo tin tức cho trader Việt Nam.',
    content,
    category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`,
    featured_image_alt: 'Lịch kinh tế Forex cách đọc tin tức giao dịch 2026',
    is_published: false, scheduled_at: null, published_at: null
  });
  console.log(error ? '❌ ' + error.message : '✅ Đã thêm bài "Lịch Kinh Tế Forex" vào DB!');
}
run();
