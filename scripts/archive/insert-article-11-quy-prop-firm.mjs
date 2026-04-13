import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'quy-cap-von-forex-prop-firm-la-gi';
const IMG = `/images/${slug}`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">📌 Tóm Tắt Nhanh</p>
  <p>Quỹ cấp vốn (Prop Firm) là một công ty tài chính có dòng tiền lớn. Bằng cách trả một khoản phí dự thi nhỏ (khoảng 50$ - 500$), bạn tham gia bài kiểm tra kỹ năng giao dịch của họ. Nếu đậu, họ sẽ <strong>cấp vốn thực cho bạn trade (từ 10.000$ đến 200.000$)</strong> và chia lợi nhuận 80-20. Lỗ thì quỹ chịu, bạn không phải đền.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">📑 Trong Bài Viết Này</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#tong-quan">Tại sao quỹ lại đưa tiền cho người lạ?</a></li>
    <li><a href="#vong-thi">Cấu trúc Vòng thi Thử thách (Challenge)</a></li>
    <li><a href="#the-le">Các luật lệ sinh tử: Daily Drawdown</a></li>
    <li><a href="#loi-nhuan">Khi nào thì được Rút tiền thật?</a></li>
    <li><a href="#faq">Câu Hỏi Thường Gặp (FAQ)</a></li>
    <li><a href="#ket-luan">Cảnh báo: Mặt tối của các Quỹ rác</a></li>
  </ol>
</nav>

<h2 id="tong-quan">Tại Sao Quỹ Lại Đưa Trăm Ngàn Đô Cho Người Lạ?</h2>
<p>Nhiều Trader mới nghĩ đây là trò lừa đảo. Làm gì có chuyện nộp 50 đô mà được cầm tài khoản 10.000 đô đi giao dịch? Nhưng thực chất, Prop Firm là mô hình kinh doanh có lợi cho cả đôi bên dựa trên xác suất toán học.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_featured.png" alt="Quy cap von forex prop firm la gi" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Thi đậu quỹ giống như bạn được một nhà tài trợ thiên thần bơm vốn vô điều kiện đền bù lỗ.</figcaption>
</figure>

<p><strong>Bí mật dòng tiền của quỹ:</strong> 90% Trader cá nhân thi quỹ đều... rớt đài ở ngay vòng 1. Quỹ sống khỏe nhờ đớp khoản "Phí đăng ký dự thi" của 90% người thua đó, để lấy vốn trả cho 10% Trader giỏi thực sự tạo ra được lợi nhuận dài hạn.</p>
<p>Những Trader xuất sắc lọt qua khe cửa hẹp sẽ giúp quỹ kiếm tiến thụ động, bởi quỹ sẽ tự động copy trade lệnh của họ sang thị trường thật (A-Book).</p>

<h2 id="vong-thi">Cấu Trúc Vòng Thi: Hành Trình Vượt Chướng Ngại Vật</h2>
<p>Bất kỳ quỹ nào (FTMO, The Funded Trader, Funding Pips...) cũng yêu cầu bạn trải qua các mốc kỳ sát hạch (Evaluation) trước khi được cấp vốn LIVE (tiền thật).</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Thi quy cap von forex FTMO challenge" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Bạn phải duy trì lợi nhuận ổn định và bảo vệ được rủi ro tối đa vượt qua các vòng sát hạch.</figcaption>
</figure>

<p>Một chu trình tiêu chuẩn chia làm 2 giai đoạn (Step 1 và Step 2):</p>
<ul>
  <li><strong>Vòng 1 (Thử thách sinh tồn):</strong> Yêu cầu bạn đánh tài khoản DEMO đạt lợi nhuận <strong>8%</strong>. Thời gian thường không giới hạn.</li>
  <li><strong>Vòng 2 (Giai đoạn xác minh):</strong> Yêu cầu nhẹ nhàng hơn, chỉ cần đạt <strong>5%</strong> để chứng minh Vòng 1 bạn ăn không phải do may mắn.</li>
</ul>
<p>Vượt qua 2 vòng này, bạn chính thức trở thành <strong>Funded Trader</strong> và được hoàn lại toàn bộ Phí đăng ký ban đầu!</p>

<h2 id="the-le">Các Luật Lệ Sinh Tử Chống Cháy Tài Khoản</h2>
<p>Sẽ rất ngây thơ nếu nghĩ quỹ đưa tiền cho bạn muốn đánh sao thì đánh. Để bảo vệ vốn quỹ, họ đưa ra các bộ quy tắc (Drawdown Rules) ép chết những "con bạc khát nước" sử dụng Đòn Bẩy để All In bừa bãi:</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="Luat vi pham margin call quy the funded trader" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Chạm vào mốc giới hạn đỏ, trọng tài sẽ rút thẻ đỏ tịch thu tài khoản của bạn ngay lập tức.</figcaption>
</figure>

<ul>
  <li><strong>Daily Drawdown (Sụt giảm tối đa trong ngày):</strong> Thường là 5%. Nghĩa là tài khoản $10.000, nếu trong 1 ngày Equity của bạn âm -$500, vi phạm ngay lập tức. Mất tài khoản (Fail).</li>
  <li><strong>Max Drawdown (Sụt giảm tối đa toàn vòng):</strong> Thường là 10% ($1.000). Số tiền lỗ cộng dồn không được chạm mốc này, đôi khi quỹ dùng dạng Floating Drawdown trượt theo lợi nhuận sẽ rất nguy hiểm.</li>
  <li><strong>Cấm đánh bạc (Gambling Policy):</strong> Một số quỹ sẽ khóa tài khoản nếu bạn ăn may bằng cách vào 1 lệnh với Volume khổng lồ ngay lúc ra Tin Tức (News Trading).</li>
</ul>

<h2 id="loi-nhuan">Khi Nào Thì Được Rút Về Thẻ ATM Của MìNh?</h2>
<p>Trải qua đắng cay, bạn đã cầm được tài khoản cấp vốn (Funded Account). Bạn Trade tài khoản $100.000 ăn được $3.000 lợi nhuận.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Loi nhuan rut tien tu quy cap von" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Chia chác tỉ lệ 80 - 20 (bạn lấy 8 phần, quỹ lấy 2 phần) với dòng tiền thật.</figcaption>
</figure>

<p>Đây là khúc hấp dẫn nhất: <strong>Tỷ lệ chia chác (Profit Split).</strong> Quỹ sẽ cắt cho bạn 80% (tức là $2.400) và quỹ giữ lại 20% ($600). Khoản tiền thanh toán (Payout) này thường được thanh toán qua Ví điện tử tiền ảo (USDT/Crypto) trong vòng 24 - 48h, hoặc gửi tiền quốc tế Deel về thẳng tài khoản ngân hàng Vietnam.</p>
<p>Lần rút tiền đầu tiên, họ sẽ kèm theo tiền hoàn vé dự thi cho bạn (Refund Fee).</p>

<div style="background:#fef3c7; border-left:4px solid #f59e0b; padding:16px 20px; border-radius:8px; margin:20px 0;">
  <p style="font-weight:700; margin-bottom:4px;">⚠️ Bí Mật Ít Ai Nói</p>
  <p>Tài khoản LIVE của quỹ cấp cho bạn, 99% thực tế <strong>vẫn là tài khoản DEMO</strong> mô phỏng (B-Book). Tiền mà họ Pay cho bạn được trích từ dòng tiền quỹ thu nộp của hàng ngàn người thi rớt.</p>
</div>

<h2 id="faq">❓ Câu Hỏi Thường Gặp (FAQ)</h2>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Nếu tôi rớt vòng 1, quỹ có đòi tui đền tiền không?</h3>
  <p>Tuyệt đối không! Vòng 1 và Vòng 2 là đánh trên DEMO mô phỏng. Sự mất mát duy nhất của bạn là Mất Cọc (Phí mua bài thi ban đầu).</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Vì sao Trade pass quỹ rớt thảm thương nhiều đến thế?</h3>
  <p>Bởi vì tâm lí "Mình chả mất gì ngoài tiền cọc vài chục đô". Bạn đánh All in khát nước, vô tình tạo rủi ro phá vỡ nguyên kỉ mức cản Daily Drawdown 5% thần thánh.</p>
</div>

<h2 id="ket-luan">Cảnh Báo: Rủi Ro Từ Các Quỹ Cấp Vốn Lừa Đảo (Scam)</h2>
<p>Prop Firm đang là xu hướng hot nhất 2026. Mỗi ngày có hàng chục quỹ mới mọc lên và mở ra khuyến mãi "Phí Khuyến Mại Rẻ Bèo - Đòn bẩy Vô Cực".</p>
<p>Rất nhiều quỹ dỏm cố tình làm "Trượt Giá (Slippage)" bảng điện của bạn để ép bạn chạm mốc thua Max Drawdown. Hoặc tệ hơn là bạn thi đậu, có lãi, và họ... từ chối thanh toán (Deny Payout) bằng ba cái cớ vi phạm IP hay cấm bot. Câu chuyện năm ngoái của quỹ đình đám <em>My Forex Funds (MFF) bị Bộ Tư Pháp Mỹ phong tỏa tài sản</em> là hồi chuông cảnh tỉnh.</p>
<p>Lời khuyên là hãy chỉ chọn mặt gửi vàng tham gia các Quỹ Lão Làng (như FTMO). Dù luật thi khó và đắt tiền, nhưng nếu bạn thắng: Họ chắc chắn Pay sòng phẳng.</p>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">📚 Bài Viết Liên Quan Về Thi Quỹ</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/review-danh-gia-quy-ftmo">Đánh Giá Xanh Chín Quỹ FTMO: Tường Thành Vững Chắc Nhất</a></li>
    <li><a href="/kien-thuc/tam-ly-giao-dich-fomo-revenge-trade">Khống Chế Con Quỷ Trả Thù Kịp Tránh Dính Daily Drawdown 5%</a></li>
    <li><a href="/kien-thuc/quan-ly-von-forex">Chiến Thuật Băm Lot Chia Vốn Cực Đỉnh Bất Khả Chiến Bại Trước Quỹ</a></li>
  </ul>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Quỹ cấp vốn forex prop firm là gì', scheduled_at: '2026-04-07T08:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? '❌ ' + error.message : '✅ Đã cập nhật bài 11!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Quỹ Cấp Vốn Forex (Prop Firm) Là Gì? Bí Kíp Thi Quỹ Húp Trọn Lãi 2026',
    slug, excerpt: 'Làm thế nào để chỉ nộp phí 50$ mà được quỹ cấp tài khoản vốn 10.000$ đánh lấy lãi thật? Tìm hiểu các luật lệ sinh tử của quỹ và cạm bẫy trượt thi.',
    meta_title: 'Prop Firm Là Gì? Cẩm Nang Thi Quỹ Cấp Vốn Forex 2026',
    meta_description: 'Giải thích cặn kẽ về Quỹ cấp vốn nước ngoài (Prop Firm). Cấu trúc vòng thi challenge, luật chơi Daily Drawdown khét lẹt và rủi ro sập quỹ lùa gà.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Quy Prop Firm Forex Cap Von Toan Tap',
    is_published: false, scheduled_at: '2026-04-07T08:30:00+07:00', published_at: null
  });
  console.log(error ? '❌ ' + error.message : '✅ Đã thêm bài 11 "Quỹ Prop Firm" vào DB!');
}
run();
