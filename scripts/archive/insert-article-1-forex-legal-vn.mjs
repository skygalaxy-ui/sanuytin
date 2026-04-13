import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const slug = 'forex-co-hop-phap-o-viet-nam-khong';

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">📌 Tóm Tắt Nhanh</p>
  <p>Tại Việt Nam, <strong>chưa có luật nào cấm cá nhân giao dịch Forex</strong> qua các sàn quốc tế. Tuy nhiên, Ngân hàng Nhà nước chỉ cho phép giao dịch ngoại hối qua các ngân hàng được cấp phép. Thực tế, hàng trăm nghìn trader Việt vẫn tham gia Forex hợp pháp thông qua các broker quốc tế có giấy phép FCA, ASIC, CySEC.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">📑 Trong Bài Viết Này</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#khung-phap-ly">Khung Pháp Lý Forex Tại Việt Nam Hiện Nay</a></li>
    <li><a href="#cach-trader-viet-tham-gia">Cách Trader Việt Tham Gia Forex Hợp Pháp</a></li>
    <li><a href="#so-sanh-san-quoc-te">So Sánh Các Sàn Quốc Tế An Toàn Cho Người Việt</a></li>
    <li><a href="#canh-bao-lua-dao">Cảnh Báo Lừa Đảo Forex Tại Việt Nam</a></li>
    <li><a href="#huong-dan-an-toan">5 Bước Giao Dịch Forex An Toàn Tại Việt Nam</a></li>
    <li><a href="#faq">Câu Hỏi Thường Gặp (FAQ)</a></li>
    <li><a href="#ket-luan">Kết Luận</a></li>
  </ol>
</nav>

<h2 id="khung-phap-ly">Khung Pháp Lý Forex Tại Việt Nam Hiện Nay</h2>
<p><strong>Pháp luật Việt Nam hiện tại không có điều khoản nào cấm cá nhân tự giao dịch Forex.</strong> Tuy nhiên, Pháp lệnh Ngoại hối 2005 (sửa đổi 2013) và Nghị định 70/2014/NĐ-CP quy định rằng hoạt động kinh doanh ngoại hối trong nước chỉ được thực hiện thông qua các tổ chức tín dụng được Ngân hàng Nhà nước (NHNN) cấp phép.</p>

<p>Điều này có nghĩa là: <strong>không có sàn Forex nội địa nào được cấp phép hoạt động tại Việt Nam.</strong> Các tổ chức tự xưng là "sàn Forex Việt Nam" đều không có tư cách pháp lý và tiềm ẩn rủi ro lừa đảo rất cao.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="/images/forex-co-hop-phap-o-viet-nam-khong_illu_1.png" alt="Nghiên cứu khung pháp lý Forex tại Việt Nam" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Khung pháp lý về giao dịch ngoại hối tại Việt Nam vẫn đang trong giai đoạn hoàn thiện</figcaption>
</figure>

<h3>Luật nói gì về giao dịch cá nhân?</h3>
<p>Điểm mấu chốt là pháp luật <strong>chỉ cấm tổ chức kinh doanh Forex không phép</strong> — tức là mở sàn, môi giới, hay huy động vốn giao dịch Forex trên lãnh thổ Việt Nam. Đối với cá nhân tự mở tài khoản tại sàn quốc tế và giao dịch bằng tiền cá nhân, hiện chưa có điều luật nào trực tiếp xử phạt hành vi này.</p>

<h3>Tình hình thực tế tại Việt Nam năm 2026</h3>
<p>Theo thống kê từ các sàn quốc tế lớn, Việt Nam nằm trong <strong>top 10 quốc gia có lượng trader Forex đông nhất Đông Nam Á</strong> với ước tính hơn 300.000 tài khoản hoạt động. Các sàn như Exness, XM, IC Markets đều có bộ phận hỗ trợ tiếng Việt và kênh nạp/rút qua ngân hàng Việt Nam.</p>

<div style="background:#fef3c7; border-left:4px solid #f59e0b; padding:16px 20px; border-radius:8px; margin:20px 0;">
  <p style="font-weight:700; margin-bottom:4px;">⚠️ Lưu Ý Quan Trọng</p>
  <p>Mặc dù cá nhân giao dịch Forex chưa bị cấm, bạn vẫn phải <strong>tự chịu trách nhiệm hoàn toàn về rủi ro tài chính</strong>. Không có cơ quan nào tại Việt Nam bảo vệ quyền lợi nhà đầu tư Forex. Hãy chỉ giao dịch với số tiền bạn sẵn sàng mất.</p>
</div>

<h2 id="cach-trader-viet-tham-gia">Cách Trader Việt Tham Gia Forex Hợp Pháp</h2>
<p><strong>Cách duy nhất an toàn và hợp pháp để người Việt giao dịch Forex là thông qua các sàn môi giới quốc tế có giấy phép từ cơ quan quản lý tài chính uy tín.</strong> Đây là phương thức được hàng trăm nghìn trader Việt sử dụng mỗi ngày.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="/images/forex-co-hop-phap-o-viet-nam-khong_illu_2.png" alt="Trader Việt giao dịch qua sàn quốc tế có giấy phép" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Trader Việt kết nối với thị trường toàn cầu thông qua các sàn quốc tế có giấy phép uy tín</figcaption>
</figure>

<h3>Giấy phép quốc tế quan trọng nhất</h3>
<p>Khi chọn sàn, hãy ưu tiên các broker có ít nhất 1 trong những giấy phép sau:</p>
<ul>
  <li><strong>FCA (Anh Quốc)</strong> — Tiêu chuẩn cao nhất thế giới, bảo vệ quỹ lên đến £85,000</li>
  <li><strong>ASIC (Úc)</strong> — Quy định nghiêm ngặt, yêu cầu tách biệt quỹ khách hàng</li>
  <li><strong>CySEC (Síp/EU)</strong> — Tuân thủ MiFID II, bảo hiểm ICF lên đến €20,000</li>
  <li><strong>FSA Seychelles / FSCA Nam Phi</strong> — Phổ biến cho thị trường châu Á, yêu cầu thấp hơn</li>
</ul>

<h3>Quy trình mở tài khoản từ Việt Nam</h3>
<p>Toàn bộ quy trình diễn ra trực tuyến và mất khoảng 10-15 phút: Đăng ký email → Xác minh danh tính (CMND/CCCD + selfie) → Nạp tiền qua ngân hàng VN hoặc ví điện tử → Bắt đầu giao dịch. Hầu hết các sàn lớn đều hỗ trợ nạp/rút bằng VND qua Internet Banking hoặc ví MoMo, ZaloPay.</p>

<h2 id="so-sanh-san-quoc-te">So Sánh Các Sàn Quốc Tế An Toàn Cho Người Việt</h2>
<p>Dưới đây là bảng so sánh nhanh 5 sàn Forex quốc tế phổ biến nhất tại Việt Nam năm 2026, dựa trên giấy phép, chi phí và mức độ hỗ trợ tiếng Việt:</p>

<div style="overflow-x:auto; margin:20px 0;">
<table style="width:100%; border-collapse:collapse; font-size:15px;">
  <thead>
    <tr style="background:#1e293b; color:#fff;">
      <th style="padding:12px 16px; text-align:left;">Sàn Forex</th>
      <th style="padding:12px 16px; text-align:center;">Giấy phép</th>
      <th style="padding:12px 16px; text-align:center;">Spread EUR/USD</th>
      <th style="padding:12px 16px; text-align:center;">Nạp tối thiểu</th>
      <th style="padding:12px 16px; text-align:center;">Hỗ trợ VN</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">Exness</td>
      <td style="padding:10px 16px; text-align:center;">FCA, CySEC, FSA</td>
      <td style="padding:10px 16px; text-align:center;">0.1 pip</td>
      <td style="padding:10px 16px; text-align:center;">$1</td>
      <td style="padding:10px 16px; text-align:center;">✅ Tiếng Việt 24/7</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">XM</td>
      <td style="padding:10px 16px; text-align:center;">ASIC, CySEC, DFSA</td>
      <td style="padding:10px 16px; text-align:center;">0.6 pip</td>
      <td style="padding:10px 16px; text-align:center;">$5</td>
      <td style="padding:10px 16px; text-align:center;">✅ Tiếng Việt</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">IC Markets</td>
      <td style="padding:10px 16px; text-align:center;">ASIC, CySEC, FSA</td>
      <td style="padding:10px 16px; text-align:center;">0.0 pip</td>
      <td style="padding:10px 16px; text-align:center;">$200</td>
      <td style="padding:10px 16px; text-align:center;">✅ Tiếng Việt</td>
    </tr>
    <tr>
      <td style="padding:10px 16px; font-weight:600;">Vantage</td>
      <td style="padding:10px 16px; text-align:center;">ASIC, CIMA</td>
      <td style="padding:10px 16px; text-align:center;">0.0 pip</td>
      <td style="padding:10px 16px; text-align:center;">$50</td>
      <td style="padding:10px 16px; text-align:center;">✅ Tiếng Việt</td>
    </tr>
    <tr style="background:#f8fafc;">
      <td style="padding:10px 16px; font-weight:600;">Pepperstone</td>
      <td style="padding:10px 16px; text-align:center;">FCA, ASIC, CySEC</td>
      <td style="padding:10px 16px; text-align:center;">0.0 pip</td>
      <td style="padding:10px 16px; text-align:center;">$200</td>
      <td style="padding:10px 16px; text-align:center;">⚠️ Tiếng Anh</td>
    </tr>
  </tbody>
</table>
</div>

<p><em>Lưu ý: Spread 0.0 pip áp dụng cho tài khoản Raw/ECN, có phí commission riêng từ $3.0-$3.5/lot. Dữ liệu cập nhật tháng 4/2026.</em></p>

<h2 id="canh-bao-lua-dao">Cảnh Báo Lừa Đảo Forex Tại Việt Nam</h2>
<p><strong>Lừa đảo Forex là vấn nạn lớn nhất khiến nhiều người Việt mất tiền, chứ không phải thua lỗ do giao dịch.</strong> Theo Bộ Công an, hàng năm có hàng chục vụ lừa đảo liên quan đến "sàn Forex" với thiệt hại lên tới hàng nghìn tỷ đồng.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="/images/forex-co-hop-phap-o-viet-nam-khong_illu_3.png" alt="Phát hiện và tránh lừa đảo sàn Forex giả mạo" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Nhận diện sàn Forex lừa đảo: Luôn kiểm tra giấy phép trước khi nạp tiền</figcaption>
</figure>

<h3>Dấu hiệu nhận biết sàn Forex lừa đảo</h3>
<ul>
  <li><strong>Cam kết lợi nhuận cố định:</strong> "Đầu tư 10 triệu, nhận 5 triệu/tháng" — Không sàn hợp pháp nào dám hứa lợi nhuận vì Forex luôn có rủi ro.</li>
  <li><strong>Yêu cầu nạp tiền vào tài khoản cá nhân:</strong> Sàn uy tín có cổng thanh toán chính thức, không bao giờ yêu cầu chuyển khoản cho cá nhân.</li>
  <li><strong>Không có giấy phép kiểm chứng được:</strong> Hãy tự tra cứu mã giấy phép trên website FCA (register.fca.org.uk) hoặc ASIC.</li>
  <li><strong>Ép giao dịch, không cho rút tiền:</strong> Đặt điều kiện "volume tối thiểu" phi lý hoặc liên tục trì hoãn lệnh rút.</li>
  <li><strong>Quảng cáo qua mạng xã hội, hội nhóm kín:</strong> Tuyển dụng "đầu tư cùng chuyên gia" qua Telegram, Zalo kín.</li>
</ul>

<div style="background:#fef2f2; border-left:4px solid #ef4444; padding:16px 20px; border-radius:8px; margin:20px 0;">
  <p style="font-weight:700; margin-bottom:4px;">🚨 Cảnh Báo</p>
  <p>Nếu ai đó hứa hẹn lợi nhuận ổn định trong Forex, đó <strong>chắc chắn 100% là lừa đảo</strong>. Không có trader hay hệ thống nào trên thế giới đảm bảo được lợi nhuận khi giao dịch ngoại hối.</p>
</div>

<h2 id="huong-dan-an-toan">5 Bước Giao Dịch Forex An Toàn Tại Việt Nam</h2>
<p><strong>Dù chưa có luật cấm, bạn vẫn cần tuân thủ nghiêm ngặt 5 bước dưới đây để bảo vệ tiền và tránh rủi ro pháp lý không đáng có.</strong></p>

<figure style="margin:24px 0; text-align:center;">
  <img src="/images/forex-co-hop-phap-o-viet-nam-khong_illu_4.png" alt="Checklist giao dịch Forex an toàn tại Việt Nam" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Tuân thủ checklist an toàn giúp trader Việt giao dịch yên tâm và hiệu quả</figcaption>
</figure>

<h3>Bước 1: Chọn sàn quốc tế có giấy phép Tier-1</h3>
<p>Chỉ mở tài khoản tại các sàn có giấy phép <strong>FCA (Anh), ASIC (Úc), hoặc CySEC (EU)</strong>. Kiểm tra trực tiếp trên website cơ quan quản lý, không tin vào hình ảnh giấy phép trên website sàn.</p>

<h3>Bước 2: Bắt đầu với tài khoản Demo</h3>
<p>Luyện tập ít nhất 1-2 tháng trên tài khoản Demo trước khi nạp tiền thật. Mục tiêu: hiểu rõ cách đặt lệnh, quản lý rủi ro, và đọc biểu đồ cơ bản.</p>

<h3>Bước 3: Nạp tiền qua kênh chính thức</h3>
<p>Sử dụng cổng nạp tiền chính thức của sàn (Internet Banking, ví Neteller/Skrill, hoặc Crypto). <strong>Tuyệt đối không chuyển khoản cho bất kỳ cá nhân nào</strong> dù họ tự xưng là "đại lý" của sàn.</p>

<h3>Bước 4: Quản lý rủi ro nghiêm ngặt</h3>
<p>Không bao giờ đặt quá <strong>1-2% tổng vốn</strong> cho mỗi lệnh giao dịch. Luôn sử dụng Stop-Loss. Quy tắc đơn giản: nếu bạn mất một lệnh mà cảm thấy đau lòng, bạn đang đặt quá lớn.</p>

<h3>Bước 5: Kê khai thuế thu nhập (nếu có lợi nhuận lớn)</h3>
<p>Dù chưa có hướng dẫn chi tiết, lợi nhuận từ Forex về mặt nguyên tắc thuộc diện <strong>thu nhập chịu thuế cá nhân</strong>. Với khoản lợi nhuận đáng kể, nên tham khảo ý kiến chuyên gia thuế để tránh rủi ro pháp lý sau này.</p>

<div style="background:#ecfdf5; border-left:4px solid #10b981; padding:20px; border-radius:8px; margin:32px 0;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">✅ Những Điểm Chính Cần Nhớ</p>
  <ul style="margin:0; padding-left:20px; line-height:1.8;">
    <li>Việt Nam <strong>chưa cấm</strong> cá nhân giao dịch Forex qua sàn quốc tế</li>
    <li>Chỉ giao dịch qua sàn có giấy phép <strong>FCA, ASIC, hoặc CySEC</strong></li>
    <li>Không có sàn Forex nội địa nào hợp pháp tại Việt Nam</li>
    <li><strong>100% lời hứa lợi nhuận ổn định = lừa đảo</strong></li>
    <li>Luôn bắt đầu với tài khoản Demo và quản lý rủi ro ≤2% vốn/lệnh</li>
  </ul>
</div>

<h2 id="faq">❓ Câu Hỏi Thường Gặp</h2>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Giao dịch Forex ở Việt Nam có bị bắt không?</h3>
  <p>Không. Hiện tại chưa có trường hợp nào cá nhân bị xử phạt vì tự giao dịch Forex qua sàn quốc tế. Pháp luật chỉ xử lý các tổ chức mở sàn Forex trái phép hoặc huy động vốn đầu tư Forex trên lãnh thổ Việt Nam.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Nên chọn sàn Forex nào cho người Việt?</h3>
  <p>Exness, XM, và IC Markets là 3 sàn được đông đảo trader Việt tin dùng nhất nhờ giấy phép uy tín (FCA, ASIC), hỗ trợ tiếng Việt 24/7, và nạp/rút qua ngân hàng Việt Nam nhanh chóng.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Cần bao nhiêu tiền để bắt đầu Forex?</h3>
  <p>Bạn có thể bắt đầu với chỉ $1-$5 tại một số sàn như Exness hoặc XM. Tuy nhiên, khuyến nghị nạp tối thiểu $100-$200 để có thể quản lý rủi ro hợp lý với lot size nhỏ (0.01 lot).</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Lợi nhuận Forex có phải đóng thuế không?</h3>
  <p>Về mặt nguyên tắc, mọi thu nhập đều chịu thuế thu nhập cá nhân tại Việt Nam. Tuy nhiên, hiện chưa có hướng dẫn cụ thể về thuế Forex. Với lợi nhuận lớn, nên tham khảo chuyên gia thuế để đảm bảo tuân thủ.</p>
</div>

<h2 id="ket-luan">Kết Luận</h2>
<p>Forex không bị cấm ở Việt Nam, nhưng cũng chưa được quản lý chặt chẽ. Điều này đồng nghĩa với việc bạn hoàn toàn có thể giao dịch hợp pháp, nhưng cũng phải <strong>tự bảo vệ bản thân</strong> trước rủi ro tài chính và lừa đảo. Hãy luôn chọn sàn quốc tế uy tín, bắt đầu từ tài khoản Demo, và không bao giờ tin vào lời hứa "lợi nhuận chắc chắn".</p>

<div style="background:linear-gradient(135deg,#1e293b,#334155); color:#fff; padding:24px; border-radius:12px; margin:24px 0; text-align:center;">
  <p style="font-size:18px; font-weight:700; margin-bottom:8px;">🚀 Xem Ngay Top Sàn Forex Uy Tín Cho Người Việt 2026</p>
  <p style="font-size:14px; opacity:0.85; margin:0;">So sánh chi tiết giấy phép, phí giao dịch, và tốc độ nạp/rút của 10+ sàn hàng đầu</p>
</div>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">📚 Bài Viết Liên Quan</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc-forex/top-10-san-forex-uy-tin-nhat-viet-nam-2026">Top 10 Sàn Forex Uy Tín Nhất Việt Nam 2026</a></li>
    <li><a href="/kien-thuc-forex/7-cach-phan-biet-san-forex-uy-tin-va-lua-dao">7 Cách Phân Biệt Sàn Forex Uy Tín Và Lừa Đảo</a></li>
    <li><a href="/kien-thuc-forex/forex-la-gi-huong-dan-nguoi-moi">Forex Là Gì? Hướng Dẫn Toàn Tập Cho Người Mới</a></li>
    <li><a href="/kien-thuc-forex/chon-san-forex-uy-tin-cho-nguoi-moi">Chọn Sàn Forex Uy Tín Cho Người Mới Bắt Đầu</a></li>
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
  // Check if exists
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    console.log('⚠️ Bài đã tồn tại (ID: ' + existing.id + '), cập nhật nội dung...');
    const { error } = await sb.from('posts').update({
      content,
      featured_image: '/images/forex-co-hop-phap-o-viet-nam-khong_featured.png',
      featured_image_alt: 'Forex có hợp pháp ở Việt Nam không - Hướng dẫn pháp lý 2026',
      updated_at: new Date().toISOString()
    }).eq('id', existing.id);
    if (error) console.error('❌', error.message);
    else console.log('✅ Đã cập nhật bài viết!');
    return;
  }

  const { error } = await sb.from('posts').insert({
    title: 'Forex Có Hợp Pháp Ở Việt Nam Không? Giải Đáp Pháp Lý Chi Tiết 2026',
    slug,
    excerpt: 'Forex chưa bị cấm tại Việt Nam nhưng cũng chưa được quản lý. Tìm hiểu khung pháp lý, cách giao dịch an toàn qua sàn quốc tế và nhận biết lừa đảo.',
    meta_title: 'Forex Có Hợp Pháp Ở Việt Nam Không? Pháp Lý 2026',
    meta_description: 'Forex chưa bị cấm tại Việt Nam nhưng cũng chưa được quản lý. Tìm hiểu khung pháp lý, cách giao dịch an toàn qua sàn quốc tế và nhận biết lừa đảo.',
    content,
    category: 'kien-thuc',
    featured_image: '/images/forex-co-hop-phap-o-viet-nam-khong_featured.png',
    featured_image_alt: 'Forex có hợp pháp ở Việt Nam không - Hướng dẫn pháp lý 2026',
    is_published: false,
    scheduled_at: null,
    published_at: null
  });

  if (error) console.error('❌ Lỗi insert:', error.message);
  else console.log('✅ Đã thêm bài viết vào DB! (is_published: false — chờ anh duyệt trên Admin)');
}

run();
