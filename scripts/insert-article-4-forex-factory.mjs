import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'forex-factory-la-gi-huong-dan-su-dung';
const IMG = `/images/${slug}`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">📌 Tóm Tắt Nhanh</p>
  <p><strong>Forex Factory (forexfactory.com)</strong> là website cung cấp lịch kinh tế, tin tức và diễn đàn Forex lớn nhất thế giới, hoàn toàn miễn phí. Đây là công cụ mà <strong>95% trader chuyên nghiệp sử dụng hàng ngày</strong> để theo dõi sự kiện kinh tế, quản lý rủi ro và lên kế hoạch giao dịch. Bài viết này hướng dẫn bạn cách cài đặt và sử dụng Forex Factory từ A-Z.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">📑 Trong Bài Viết Này</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#forex-factory-la-gi">Forex Factory Là Gì? Tại Sao Trader Cần Dùng?</a></li>
    <li><a href="#cai-dat">Cách Cài Đặt Forex Factory Cho Người Việt</a></li>
    <li><a href="#doc-lich">Hướng Dẫn Đọc Lịch Kinh Tế Trên Forex Factory</a></li>
    <li><a href="#tinh-nang-khac">Các Tính Năng Hữu Ích Khác</a></li>
    <li><a href="#meo-su-dung">5 Mẹo Sử Dụng Forex Factory Hiệu Quả</a></li>
    <li><a href="#faq">Câu Hỏi Thường Gặp (FAQ)</a></li>
    <li><a href="#ket-luan">Kết Luận</a></li>
  </ol>
</nav>

<h2 id="forex-factory-la-gi">Forex Factory Là Gì? Tại Sao Trader Cần Dùng?</h2>
<p><strong>Forex Factory là nền tảng thông tin Forex miễn phí lớn nhất thế giới,</strong> được thành lập năm 2004 và hiện có hơn 500.000 thành viên hoạt động. Website cung cấp 4 công cụ chính:</p>

<ul>
  <li><strong>📅 Calendar (Lịch kinh tế)</strong> — Liệt kê tất cả sự kiện kinh tế toàn cầu theo thời gian thực, có lọc theo đồng tiền và mức độ ảnh hưởng</li>
  <li><strong>📰 News (Tin tức)</strong> — Tổng hợp tin tức Forex từ các nguồn uy tín (Reuters, Bloomberg, MarketWatch)</li>
  <li><strong>📊 Market (Thị trường)</strong> — Giá real-time các cặp tiền, vàng, dầu, chỉ số chứng khoán</li>
  <li><strong>💬 Forum (Diễn đàn)</strong> — Cộng đồng trader chia sẻ chiến lược, phân tích và kinh nghiệm</li>
</ul>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Hướng dẫn điều hướng các tab chính trên Forex Factory" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">4 tab chính trên Forex Factory: Calendar, Market, News và Forum</figcaption>
</figure>

<h3>Tại sao Forex Factory quan trọng hơn bạn nghĩ?</h3>
<p>Nhiều trader mới chỉ tập trung phân tích kỹ thuật (biểu đồ, indicator) mà bỏ qua tin tức kinh tế — đây là sai lầm phổ biến nhất. Một lệnh đang lãi $200 có thể biến thành thua $500 chỉ trong 30 giây khi báo cáo NFP công bố. Forex Factory giúp bạn <strong>biết trước khi nào "bão" sẽ đến</strong> để chuẩn bị hoặc tránh.</p>

<h2 id="cai-dat">Cách Cài Đặt Forex Factory Cho Người Việt</h2>
<p><strong>Chỉ cần 2 phút cài đặt ban đầu, bạn sẽ luôn thấy lịch kinh tế theo giờ Việt Nam và chỉ hiển thị những tin quan trọng nhất.</strong></p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Cài đặt bộ lọc Forex Factory theo giờ Việt Nam GMT+7" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Giao diện bộ lọc Calendar: chọn đồng tiền, múi giờ GMT+7 và mức độ ảnh hưởng</figcaption>
</figure>

<h3>Bước 1: Cài múi giờ Việt Nam (GMT+7)</h3>
<p>Truy cập <strong>forexfactory.com</strong> → nhấn vào <strong>biểu tượng đồng hồ</strong> ở góc trên phải → chọn <strong>"GMT+7:00 Asia/Ho_Chi_Minh"</strong> → nhấn <strong>Save Settings</strong>. Từ nay, tất cả thời gian sẽ hiển thị theo giờ Việt Nam.</p>

<h3>Bước 2: Lọc tin tức theo đồng tiền bạn giao dịch</h3>
<p>Vào tab <strong>Calendar</strong> → nhấn <strong>Filter</strong> (biểu tượng lọc) → bỏ chọn tất cả, chỉ tick những đồng tiền bạn giao dịch thường xuyên. Gợi ý cho người mới: <strong>chỉ chọn USD, EUR, GBP</strong> — đây là 3 đồng tiền có tin mạnh nhất.</p>

<h3>Bước 3: Chỉ hiển thị tin High Impact</h3>
<p>Trong phần Filter, ở mục <strong>Expected Impact</strong>: chỉ chọn 🔴 <strong>High</strong> và 🟠 <strong>Medium</strong>. Bỏ chọn 🟡 Low và ⚪ Non-economic. Điều này giảm "tiếng ồn" và chỉ hiển thị những sự kiện thực sự ảnh hưởng đến giá.</p>

<h3>Bước 4: Đăng ký tài khoản (khuyên dùng)</h3>
<p>Đăng ký miễn phí để lưu cài đặt, bookmark tin quan trọng, và tham gia diễn đàn. Vào <strong>forexfactory.com/register</strong> → điền email, username, password → xác nhận email → xong.</p>

<h2 id="doc-lich">Hướng Dẫn Đọc Lịch Kinh Tế Trên Forex Factory</h2>
<p><strong>Mỗi dòng trên calendar chứa thông tin chi tiết về 1 sự kiện kinh tế.</strong> Dưới đây là cách đọc từng cột:</p>

<div style="overflow-x:auto; margin:20px 0;">
<table style="width:100%; border-collapse:collapse; font-size:15px;">
  <thead>
    <tr style="background:#1e293b; color:#fff;">
      <th style="padding:12px 16px; text-align:left;">Cột</th>
      <th style="padding:12px 16px; text-align:left;">Ý nghĩa</th>
      <th style="padding:12px 16px; text-align:left;">Mẹo đọc</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">Date/Time</td>
      <td style="padding:10px 16px;">Ngày giờ công bố</td>
      <td style="padding:10px 16px;">Đã quy theo GMT+7 nếu cài đúng</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">Currency</td>
      <td style="padding:10px 16px;">Đồng tiền bị ảnh hưởng</td>
      <td style="padding:10px 16px;">USD = tin Mỹ, EUR = tin EU...</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">Impact</td>
      <td style="padding:10px 16px;">Mức ảnh hưởng (folder icon)</td>
      <td style="padding:10px 16px;">🔴 = chú ý cao, 🟠 = vừa, 🟡 = thấp</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">Event</td>
      <td style="padding:10px 16px;">Tên sự kiện kinh tế</td>
      <td style="padding:10px 16px;">Nhấn vào để xem giải thích chi tiết</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">Actual</td>
      <td style="padding:10px 16px;">Kết quả thực tế (sau công bố)</td>
      <td style="padding:10px 16px;">🟢 Xanh = tốt hơn dự báo, 🔴 Đỏ = xấu hơn</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">Forecast</td>
      <td style="padding:10px 16px;">Dự báo của chuyên gia</td>
      <td style="padding:10px 16px;">Thị trường đã "price-in" con số này</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">Previous</td>
      <td style="padding:10px 16px;">Số liệu kỳ trước</td>
      <td style="padding:10px 16px;">Dùng để so sánh xu hướng dài hạn</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Quy tắc đọc nhanh: Actual vs Forecast</h3>
<p>Khi tin công bố, chỉ cần nhìn <strong>Actual so với Forecast</strong>:</p>
<ul>
  <li><strong>Actual > Forecast</strong> (xanh lá): Đồng tiền đó có xu hướng <strong>tăng giá</strong></li>
  <li><strong>Actual < Forecast</strong> (đỏ): Đồng tiền đó có xu hướng <strong>giảm giá</strong></li>
  <li><strong>Actual ≈ Forecast</strong>: Thị trường ít phản ứng, giá đi ngang</li>
</ul>
<p><em>Lưu ý: Quy tắc này áp dụng cho hầu hết tin, nhưng có ngoại lệ. Ví dụ: số liệu thất nghiệp (Unemployment) thì Actual < Forecast lại là TIN TỐT (ít thất nghiệp hơn dự kiến).</em></p>

<h2 id="tinh-nang-khac">Các Tính Năng Hữu Ích Khác</h2>
<p>Ngoài Calendar, Forex Factory còn có nhiều tính năng mà không phải trader nào cũng biết:</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="Sử dụng Forex Factory trên nhiều thiết bị để theo dõi tin tức" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Trader chuyên nghiệp theo dõi Forex Factory trên cả laptop và điện thoại để không bỏ lỡ tin quan trọng</figcaption>
</figure>

<h3>Market Scanner — Giá real-time</h3>
<p>Tab <strong>Market</strong> hiển thị giá bid/ask, spread, và % thay đổi của tất cả cặp tiền chính, vàng, dầu. Bạn có thể nhấn vào từng cặp tiền để xem biểu đồ mini. Tiện lợi khi cần kiểm tra nhanh mà không cần mở MT4.</p>

<h3>News — Tin tức tổng hợp</h3>
<p>Tab <strong>News</strong> tổng hợp tin từ Reuters, MarketWatch, FXStreet... theo thời gian thực. Mỗi tin có nhãn đồng tiền liên quan, giúp bạn lọc nhanh tin về USD, EUR, hay GBP.</p>

<h3>Forum — Kho tàng chiến lược</h3>
<p>Diễn đàn Forex Factory là nơi hàng nghìn trader chia sẻ hệ thống giao dịch thực chiến. Các thread nổi tiếng nhất:</p>
<ul>
  <li><strong>James16 Price Action</strong> — Chiến lược Price Action kinh điển</li>
  <li><strong>Strat Thread</strong> — Giao dịch theo cấu trúc nến</li>
  <li><strong>ICT Mentorship</strong> — Smart Money Concepts</li>
</ul>

<h3>Trade Explorer — Nhật ký giao dịch</h3>
<p>Kết nối tài khoản MT4/MT5 với Forex Factory để tự động ghi lại kết quả giao dịch, thống kê winrate, drawdown, và lợi nhuận. <strong>Miễn phí và tự động 100%.</strong></p>

<h2 id="meo-su-dung">5 Mẹo Sử Dụng Forex Factory Hiệu Quả</h2>

<h3>Mẹo 1: Kiểm tra Calendar mỗi sáng trước 8:00 VN</h3>
<p>Dành 2 phút mỗi sáng mở Forex Factory, ghi nhận các tin 🔴 trong ngày. Nếu có tin 🔴 vào đúng phiên bạn giao dịch → giảm lot size hoặc đóng lệnh trước.</p>

<h3>Mẹo 2: Bookmark trang tuần (This Week)</h3>
<p>Trên Calendar, nhấn <strong>"This Week"</strong> để xem toàn bộ tin trong tuần. Lập kế hoạch giao dịch cho cả tuần dựa trên các ngày có nhiều tin 🔴.</p>

<h3>Mẹo 3: Nhấn vào tên sự kiện để hiểu sâu</h3>
<p>Khi nhấn vào tên event (ví dụ "Non-Farm Employment Change"), Forex Factory hiển thị: <strong>giải thích sự kiện, lịch sử số liệu, và biểu đồ tác động lên giá</strong>. Cực kỳ hữu ích cho người mới.</p>

<h3>Mẹo 4: Theo dõi "Deviation" — Mức chênh lệch</h3>
<p>Actual cách Forecast càng xa (deviation lớn) → biến động giá càng mạnh. Ví dụ: NFP Forecast: 200K, Actual: 350K → deviation = +150K → USD tăng rất mạnh.</p>

<h3>Mẹo 5: Dùng kết hợp với MT4/MT5</h3>
<p>Mở Forex Factory trên tab trình duyệt, MT4 trên tab khác. Khi tin sắp ra → theo dõi Forex Factory. Khi tin xong → chuyển sang MT4 vào lệnh. Đây là workflow của 90% trader chuyên nghiệp.</p>

<div style="background:#ecfdf5; border-left:4px solid #10b981; padding:20px; border-radius:8px; margin:32px 0;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">✅ Những Điểm Chính Cần Nhớ</p>
  <ul style="margin:0; padding-left:20px; line-height:1.8;">
    <li>Forex Factory là <strong>công cụ miễn phí bắt buộc</strong> cho mọi trader</li>
    <li>Cài <strong>GMT+7</strong> và lọc <strong>High/Medium Impact</strong> ngay lần đầu truy cập</li>
    <li>Chỉ cần theo dõi <strong>USD, EUR, GBP</strong> là đủ cho người mới</li>
    <li>Luôn so sánh <strong>Actual vs Forecast</strong>, không phải Previous</li>
    <li>Kiểm tra Calendar <strong>mỗi sáng trước 8:00 VN</strong> để lên kế hoạch</li>
  </ul>
</div>

<h2 id="faq">❓ Câu Hỏi Thường Gặp</h2>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Forex Factory có miễn phí không?</h3>
  <p>Có, <strong>100% miễn phí</strong>. Calendar, Market, News và Forum đều không tốn phí. Bạn chỉ cần đăng ký tài khoản miễn phí để lưu cài đặt và tham gia diễn đàn.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Forex Factory có tiếng Việt không?</h3>
  <p>Không, Forex Factory chỉ có giao diện tiếng Anh. Tuy nhiên, bạn có thể dùng Google Translate tích hợp trình duyệt Chrome để dịch tự động. Ngoài ra, Investing.com là lựa chọn thay thế có hỗ trợ tiếng Việt.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Forex Factory có app điện thoại không?</h3>
  <p>Forex Factory không có app chính thức, nhưng website responsive hoạt động tốt trên trình duyệt điện thoại. Bạn có thể "Add to Home Screen" trên Chrome/Safari để truy cập nhanh như app.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Nên dùng Forex Factory hay Investing.com?</h3>
  <p>Cả hai đều tốt nhưng khác nhau: <strong>Forex Factory</strong> mạnh về Calendar và Forum, giao diện đơn giản. <strong>Investing.com</strong> mạnh về tin tức, có tiếng Việt, và phân tích kỹ thuật. Khuyến nghị: dùng cả hai.</p>
</div>

<h2 id="ket-luan">Kết Luận</h2>
<p>Forex Factory là công cụ không thể thiếu trong "bộ đồ nghề" của bất kỳ trader nào. Chỉ cần 2 phút cài đặt ban đầu và 2 phút kiểm tra mỗi sáng, bạn đã có lợi thế hơn đa số trader mới. Hãy bắt đầu bằng việc <strong>bookmark forexfactory.com, cài GMT+7, lọc tin High Impact</strong>, và tập thói quen kiểm tra mỗi ngày.</p>

<div style="background:linear-gradient(135deg,#1e293b,#334155); color:#fff; padding:24px; border-radius:12px; margin:24px 0; text-align:center;">
  <p style="font-size:18px; font-weight:700; margin-bottom:8px;">🚀 Đọc Thêm: Lịch Kinh Tế Forex — Cách Đọc Tin Để Giao Dịch</p>
  <p style="font-size:14px; opacity:0.85; margin:0;">Hiểu sâu hơn về NFP, CPI, FOMC và cách giao dịch theo tin tức</p>
</div>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">📚 Bài Viết Liên Quan</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc-forex/lich-kinh-te-forex-cach-doc-tin">Lịch Kinh Tế Forex: Cách Đọc Tin Để Giao Dịch</a></li>
    <li><a href="/kien-thuc-forex/giao-dich-vang-xauusd-huong-dan">Giao Dịch Vàng XAU/USD: Hướng Dẫn Cho Người Mới</a></li>
    <li><a href="/kien-thuc-forex/forex-co-hop-phap-o-viet-nam-khong">Forex Có Hợp Pháp Ở Việt Nam Không?</a></li>
    <li><a href="/kien-thuc-forex/forex-la-gi-huong-dan-nguoi-moi">Forex Là Gì? Hướng Dẫn Toàn Tập Cho Người Mới</a></li>
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
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Forex Factory là gì hướng dẫn sử dụng cho trader Việt', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? '❌ ' + error.message : '✅ Đã cập nhật bài 4!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Forex Factory Là Gì? Hướng Dẫn Sử Dụng Chi Tiết Cho Trader Việt (2026)',
    slug, excerpt: 'Hướng dẫn cài đặt và sử dụng Forex Factory từ A-Z: cách đọc lịch kinh tế, lọc tin High Impact, cài GMT+7 và 5 mẹo dùng hiệu quả.',
    meta_title: 'Forex Factory Là Gì? Hướng Dẫn Sử Dụng A-Z (2026)',
    meta_description: 'Hướng dẫn cài đặt và sử dụng Forex Factory từ A-Z: cách đọc lịch kinh tế, lọc tin High Impact, cài GMT+7 và 5 mẹo dùng hiệu quả.',
    content, category: 'huong-dan',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Forex Factory là gì hướng dẫn sử dụng cho trader Việt',
    is_published: false, scheduled_at: null, published_at: null
  });
  console.log(error ? '❌ ' + error.message : '✅ Đã thêm bài 4 "Forex Factory" vào DB!');
}
run();
