import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'san-forex-nap-rut-ngan-hang-vn';
const IMG = `/images/${slug}`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">📌 Tóm Tắt Nhanh</p>
  <p>Hiện nay, <strong>99% trader Việt Nam đều chọn nạp rút Forex qua Internet Banking</strong> (Vietcombank, Techcombank, ACB...). Đây là phương thức an toàn, rẻ nhất (miễn phí hoặc phí rất thấp) và cực nhanh (nạp tức thì, rút trong vòng 5-30 phút). Bài viết này hướng dẫn cách thực hiện an toàn và cảnh báo 3 dấu hiệu lừa đảo phổ biến qua chuyển khoản.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">📑 Trong Bài Viết Này</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#uu-diem">Tại Sao Nên Nạp Rút Qua Ngân Hàng Nội Địa?</a></li>
    <li><a href="#so-sanh">So Sánh: Internet Banking vs USDT vs Ví Điện Tử</a></li>
    <li><a href="#huong-dan">Hướng Dẫn Nạp Rút An Toàn Từ A-Z</a></li>
    <li><a href="#canh-bao-scam">Cảnh Báo Lừa Đảo: 3 Red Flags Khi Chuyển Khoản</a></li>
    <li><a href="#faq">Câu Hỏi Thường Gặp (FAQ)</a></li>
    <li><a href="#ket-luan">Kết Luận</a></li>
  </ol>
</nav>

<h2 id="uu-diem">Tại Sao Nên Nạp Rút Qua Ngân Hàng Nội Địa?</h2>
<p>Trước năm 2018, trader Việt thường phải dùng Neteller, Skrill hoặc thẻ Visa/Mastercard với mức phí "cắt cổ" (2.5% - 4%). Hiện tại, <strong>các sàn uy tín đều hỗ trợ cổng thanh toán trung gian như Ngân Lượng, Help2Pay, PayTrust</strong>, giúp kết nối trực tiếp với tài khoản VND của bạn.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_featured.png" alt="Nạp rút tiền sàn Forex qua ngân hàng Việt Nam Vietcombank Techcombank" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Nạp rút qua Internet Banking: Tiện lợi và đã trở thành tiêu chuẩn của trader Việt.</figcaption>
</figure>

<h3>3 Ưu điểm tuyệt đối:</h3>
<ul>
  <li><strong>Miễn Phí (Hoặc Rất Thấp):</strong> Sàn thường chịu phí giao dịch giúp bạn. Tỷ giá quy đổi bám sát giá ngân hàng.</li>
  <li><strong>Tốc Độ Ánh Sáng:</strong> Nạp tiền vào tài khoản MT4 tức thì (chỉ 1-3 phút). </li>
  <li><strong>Không Sợ Rủi Ro Pháp Lý Khóa Thẻ:</strong> Dùng thẻ Visa đôi khi bị ngân hàng chủ quản từ chối giao dịch do chính sách với Forex. Chuyển khoản nội địa qua trung gian thì luôn thông suốt.</li>
</ul>

<h2 id="so-sanh">So Sánh: Internet Banking vs USDT vs Ví Điện Tử</h2>
<p>Bạn vẫn đang phân vân nên nạp tiền bằng cách nào? Bảng so sánh dưới đây sẽ giúp bạn:</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="So sánh các phương thức nạp rút Forex tại Việt Nam" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Internet Banking và Crypto (USDT) hiện là 2 con đường nhanh nhất và rẻ nhất.</figcaption>
</figure>

<div style="overflow-x:auto; margin:20px 0;">
<table style="width:100%; border-collapse:collapse; font-size:15px;">
  <thead>
    <tr style="background:#1e293b; color:#fff;">
      <th style="padding:12px 16px; text-align:left;">Phương thức</th>
      <th style="padding:12px 16px; text-align:center;">Tốc độ nạp</th>
      <th style="padding:12px 16px; text-align:center;">Tốc độ rút</th>
      <th style="padding:12px 16px; text-align:center;">Phí (Trung bình)</th>
      <th style="padding:12px 16px; text-align:left;">Đề xuất</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">Internet Banking</td>
      <td style="padding:10px 16px; text-align:center;">Tức thì</td>
      <td style="padding:10px 16px; text-align:center;">15 phút - 24h</td>
      <td style="padding:10px 16px; text-align:center;">0%</td>
      <td style="padding:10px 16px; text-align:left;">⭐⭐⭐⭐⭐ (Tốt nhất)</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">Crypto (USDT TRC20)</td>
      <td style="padding:10px 16px; text-align:center;">3-15 phút</td>
      <td style="padding:10px 16px; text-align:center;">15 phút - 24h</td>
      <td style="padding:10px 16px; text-align:center;">~1$ / lần</td>
      <td style="padding:10px 16px; text-align:left;">⭐⭐⭐⭐ (Cho pro)</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">MoMo / ZaloPay</td>
      <td style="padding:10px 16px; text-align:center;">Tức thì</td>
      <td style="padding:10px 16px; text-align:center;">1-2 ngày</td>
      <td style="padding:10px 16px; text-align:center;">0 - 1%</td>
      <td style="padding:10px 16px; text-align:left;">⭐⭐⭐ (Tiện lợi mức nhỏ)</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">Visa / Mastercard</td>
      <td style="padding:10px 16px; text-align:center;">Tức thì</td>
      <td style="padding:10px 16px; text-align:center;">3-7 ngày</td>
      <td style="padding:10px 16px; text-align:center;">2% - 4%</td>
      <td style="padding:10px 16px; text-align:left;">⭐ (Nên tránh)</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="huong-dan">Hướng Dẫn Nạp Rút An Toàn Từ A-Z</h2>

<h3>1. Quy tắc Nạp - Rút Cùng Nguồn (Anti-Money Laundering)</h3>
<p>Một quy tắc bắt buộc của mọi sàn Forex uy tín (có giấy phép ASIC, FCA) là <strong>Anti-Money Laundering (Luật chống rửa tiền)</strong>. Tức là: Bạn <strong>nạp bằng phương thức nào thì phải rút bằng chính phương thức đó</strong>, và tài khoản ngân hàng phải <strong>chính chủ trùng tên đăng ký</strong> tài khoản Forex.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Rút tiền lãi từ sàn Forex về tài khoản ngân hàng Việt Nam thành công" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Nếu tuân thủ đúng quy tắc chính chủ, lệnh rút duyệt tự động cực kỳ nhanh.</figcaption>
</figure>

<h3>2. Các bước Rút tiền về Ngân hàng (Không bị lỗi)</h3>
<ol style="line-height:2;">
  <li>Đảm bảo bạn đã đóng (hoặc có đủ ký quỹ) cho các lệnh đang mở.</li>
  <li>Chọn mục "Rút tiền" (Withdrawal) trên website của sàn.</li>
  <li>Chọn "Local Bank Wire" hoặc "Internet Banking Vietnam".</li>
  <li>Nhập số tiền muốn rút. <strong>Lưu ý: điền tên tài khoản viết HOA, KHÔNG DẤU (VD: NGUYEN VAN A).</strong></li>
  <li>Điền tên ngân hàng, số tài khoản và Chi nhánh (nếu sàn yêu cầu).</li>
  <li>Xác nhận OTP qua email hoặc SMS. Tiền sẽ về trong ngày.</li>
</ol>

<h2 id="canh-bao-scam">Cảnh Báo Lừa Đảo: 3 Red Flags Khi Chuyển Khoản</h2>
<p>Kẻ gian thường đánh vào sự thiếu hiểu biết của người mới để lừa chuyển tiền. Dưới đây là 3 dấu hiệu lừa đảo phổ biến nhất:</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="Cảnh báo an toàn lừa đảo nạp tiền sàn forex chuyển khoản cá nhân" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Tuyệt đối KHÔNG BAO GIỜ chuyển khoản tiền nạp Forex vào tài khoản của một cá nhân!</figcaption>
</figure>

<div style="background:#fef3c7; border-left:4px solid #f59e0b; padding:16px 20px; border-radius:8px; margin:20px 0;">
  <h3 style="margin-top:0; font-size:18px;">🚩 Red Flag 1: Yêu cầu chuyển vào Tài Khoản Cá Nhân</h3>
  <p><strong>Cực kỳ nguy hiểm:</strong> IB (môi giới) hoặc ai đó xưng là nhân viên hỗ trợ yêu cầu bạn chuyển trực tiếp tiền (VND) vào số tài khoản cá nhân của họ tên một người lạ nào đó để "họ nạp hộ cho nhanh". <strong>100% đây là lừa đảo sẽ chiếm đoạt tài sản.</strong> Sàn chuẩn chỉ nhận tiền qua cổng kết nối trên chính Website của chứng.</p>
</div>

<div style="background:#fef3c7; border-left:4px solid #f59e0b; padding:16px 20px; border-radius:8px; margin:20px 0;">
  <h3 style="margin-top:0; font-size:18px;">🚩 Red Flag 2: Đưa Website nạp có đuôi lạ</h3>
  <p>Ví dụ: Sàn Exness thật là exness.com, kẻ lừa đảo sẽ đưa bạn link nạp tiền tại exness-asia-vip.net. Hãy luôn quản lý tiền tại đúng app/website gốc.</p>
</div>

<h2 id="faq">❓ Câu Hỏi Thường Gặp (FAQ)</h2>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Tại sao tên người nhận nạp không phải tên sàn?</h3>
  <p>Khi qua Internet Banking, tên người nhận hiển thị thường là tên công ty Payment Gateway (như NGANLUONG, ONEPAY, HELP2PAY). Điều này là bình thường và hợp pháp.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Em nạp bằng Vietcombank thì rút về Techcombank được không?</h3>
  <p>Trường hợp hai tài khoản này đều đứng tên của chính bạn, một số sàn vẫn duyệt. Nhưng an toàn nhất: <strong>Nạp bank nào, rút bank đó.</strong></p>
</div>

<h2 id="ket-luan">Kết Luận</h2>
<p>Internet Banking hiện tại là con đường huyết mạch hoàn hảo nhất để trader Việt tham gia Forex: tiết kiệm, tức thì và ít thủ tục thao tác thừa. Quý nhà đầu tư luôn luôn nhớ nguyên tắc bảo vệ tài khoản số 1: <strong>Chỉ thao tác trên cổng nạp nội bộ web của sàn, và Say NO với mọi chuyển khoản trực tiếp cho IB/Chuyên gia đọc lệnh.</strong></p>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">📚 Bài Viết Liên Quan</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
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
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Hướng dẫn nạp rút tiền sàn forex an toàn qua ngân hàng', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? '❌ ' + error.message : '✅ Đã cập nhật bài 5!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Cách Nạp Rút Tiền Sàn Forex Qua Ngân Hàng (2026)',
    slug, excerpt: 'Hướng dẫn nạp rút tiền sàn Forex an toàn qua Internet Banking, tối ưu chi phí, thời gian khớp lệnh và cảnh báo 3 rủi ro lừa đảo cháy túi.',
    meta_title: 'Nạp Rút Sàn Forex Qua Ngân Hàng VN AN TOÀN (2026)',
    meta_description: 'Hướng dẫn nạp rút tiền sàn Forex an toàn qua Internet Banking, tối ưu chi phí, thời gian khớp lệnh và cảnh báo 3 rủi ro lừa đảo cháy túi.',
    content, category: 'huong-dan',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Hướng dẫn nạp rút tiền sàn forex an toàn qua ngân hàng',
    is_published: false, scheduled_at: null, published_at: null
  });
  console.log(error ? '❌ ' + error.message : '✅ Đã thêm bài 5 "Nạp Rút" vào DB!');
}
run();
