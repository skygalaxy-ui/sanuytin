import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const riskRewardCont = `
<div class="tldr-box" style="background:#fefce8; border-left:4px solid #eab308; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">TÓM TẮT NHANH</p>
  <p>Không thể chiến thắng 100% khi trade Forex, do vậy, thứ duy nhất kiếm ra tiền là Tỷ lệ Risk/Reward (R:R). Hiểu đơn giản: Mỗi khi Thua bạn mất 1 đồng, nhưng mỗi khi Thắng bạn ăn được 3 đồng (R:R = 1:3). Chỉ cần thế thôi, bạn thậm chí đánh sai 60% Vẫn có lãi! Quản lý vốn R:R luôn quan trọng hơn bất kỳ tín hiệu VIP hay phương pháp thần thánh nào.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">Trong Bài Viết Này</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#risk-reward-la-gi">Tỷ lệ R:R (Risk/Reward) là gì? Bảng tính lợi nhuận</a></li>
    <li><a href="#sai-lam">Sai lầm tự huỷ: Ăn vài Pip nhưng gồng lỗ đến năm sau</a></li>
    <li><a href="#bi-quyet-lon">Bí Quyết 1 R: "Mất ít Tiền để được nhiều Tiền"</a></li>
  </ol>
</nav>

<h2 id="risk-reward-la-gi">R:R (Risk/Reward) Là Gì Mà Dân Chuyên Tôn Thờ Như Vậy?</h2>
<p>Tỷ lệ R:R (Risk to Reward ratio) - Tỷ lệ Rủi ro trên Lợi nhuận. Nó trả lời cho câu hỏi: <i>"Để vào lệnh này, mình phải đặt cược bao nhiêu tiền, và nếu đúng, mình sẽ được ăn lại bao nhiêu?"</i>.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="/images/risk-reward_featured.png" alt="Tỷ lệ risk reward là gì trong forex" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Cuộc trao đổi: Bỏ ra một đồng tiền vô ích để nhận về rương vàng to?</figcaption>
</figure>

<p>Ví dụ R:R là 1:2. Bạn chấp nhận mất 50$ (Stoploss) để ăn 100$ (Take Profit). Theo toán học, nếu bạn thực hiện 10 lệnh, bạn thua bõ bèn 6 lệnh (Mất 300$). Nhưng chỉ với 4 lệnh Thắng (Ăn 400$). Tổng kết lại bạn vẫn LỜI 100$. Bạn Thấy Sự Không Tưởng Của Toán Học Chưa?</p>

<h2 id="sai-lam">Canh Bạc Của Thế Kỷ: Ăn 5 Pip Nhưng Gồng Lỗ 50 Pip?</h2>
<p>Sai lầm cốt lõi của mọi Newbie là: Sợ việc mình bị sai!</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="/images/risk-reward_illu_2.png" alt="Quản lý vốn forex tệ hại" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Gồng lỗ là khi bạn đặt cược vô lý: Đem chiếc thuyền rộng lớn để cược với một đồng rỉ sét.</figcaption>
</figure>

<p>Triển vọng "Thích làm xanh biểu đồ" làm bạn hay chốt lời thật tiểu (Ăn tí tẹo rồi chạy), trong khi giá chạy Ngược thì nắm chặt để Cứu vãn rồi cháy luôn Tài Khoản (Bao nhiêu cố gắng công cốc). Đó là tư duy <strong>Negative Risk Reward</strong>, với R:R giống như 5:1. (Cược 5 đồng để ăn 1 đồng).</p>

<h2 id="bi-quyet-lon">Bí Quyết Ăn Chắc: Luôn Mục Tiêu Đến Tỷ Lệ R:R >= 1:2</h2>

<figure style="margin:24px 0; text-align:center;">
  <img src="/images/risk-reward_illu_1.png" alt="Cách tính r:r risk reward tốt nhất" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Nhà đầu tư khôn ngoan chỉ đặt cược mong muốn vào những ván Bài Có Tỉ lệ Trả Thưởng Cao Nhất.</figcaption>
</figure>
<p>Bạn có biết rằng các nhà giao dịch chuyên nghiệp không thể thắng liên tiếp, thua là chuyện thường ngày ở huyện. Họ không kiếm sống bằng tỉ lệ thắng 90%. Họ kiếm tiền và giàu lên chủ yếu bằng tỉ lệ thắng Thấp nhưng Mỗi lần thắng họ ăn được một R:R từ 1:3 đến tận 1:10.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="/images/risk-reward_illu_3.png" alt="Gồng lãi cắt lỗ trong quản lý vốn forex" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Chịu đòn (thua ít), để đối thủ sơ hở rồi mới giết gọn (thắng lớn) => Đây chính là huyền cơ của Trading!</figcaption>
</figure>
<p>Hãy quyết đoán Cắt Lỗ. Nhớ thật kỹ, Cắt lỗ đúng kế hoạch là một Lệnh Giao Dịch Thành Công vì nó giữ cho bạn đứng vững khi cơ hội ngon tuyệt xuất hiện.</p>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">Bài Viết Liên Quan Để Đọc Thêm</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/bao-nhieu-tien-de-bat-dau-forex">Nên tập thói quen R:R với tài khoản số vốn nhỏ bắt đầu như thế nào?</a></li>
    <li><a href="/kien-thuc/quy-cap-von-forex-prop-firm-la-gi">Chỉ cần R:R tốt, bạo thì Quỹ Cấp Vốn hoàn toàn là miền đất hứa để kiếm tiền không tưởng.</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Đội bài SanUyTin.net</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Hãy giữ vững nguyên tắc. Chỉ vào giao dịch ở những cơ hội mà bạn thấy được rằng nếu trúng độc đắc, món quà lớn gấp ít nhất 2 lần số tiền bạn chuẩn bị mất. Còn nếu chỉ tỷ lệ 1:1? Tốt nhất bấm phím tắt app!</p>
  </div>
</div>
`;

const lotSizeCont = `
<div class="tldr-box" style="background:#fefce8; border-left:4px solid #eab308; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">TÓM TẮT NHANH</p>
  <p>Lot Size là gì? Đó là Thể Tích của lệnh Giao dịch. Bạn không thể bốc đại 1 Lot, 2 Lot vào lệnh mà không tính toán! Để tránh Cháy Tài khoản, <strong>Lot Size phải được Tính Toán phụ thuộc vào Khoảng Cách Stoploss</strong>. Nếu Stoploss càng xa, bạn phải chủ động Hạ Lot Size xuống để tổng số tiền Rủi ro (Quy ra Đô la) vẫn giữ cố định ở mức an toàn (Ví dụ: 1% hoặc 2% tài khoản).</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">Trong Bài Viết Này</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#lot-la-gi">1. Lot Size là gì? Sự chết chóc từ thói quen Fixed Lot</a></li>
    <li><a href="#cong-thuc">2. Công Thức Tính Lot Size Chuẩn Chốt Cứng</a></li>
    <li><a href="#ung-dung">3. Ứng Dụng Toán Học vào Việc Né Margin Call</a></li>
  </ol>
</nav>

<h2 id="lot-la-gi">1. Thước Đo Của Tử Thần: Lot Size Và Lối Mòn "Fixed Lot"</h2>
<p>Bạn có thấy mình hay thế này không: Tài khoản có 1,000$. Bạn nghĩ mình đánh 0.1 Lot cho 1 lệnh là RẤT an toàn. Vậy là vào lệnh nào bạn cũng để mặc định <strong>0.1 Lot</strong>, mặc kệ đây là khung H1 hay D1.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="/images/lot-size_illu_1.png" alt="Nhiều lot size khiến tài khoản forex cháy" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Đánh chung khối lượng cho mọi con sóng giống như việc để một khối thép lên một bản kính mong manh.</figcaption>
</figure>

<p>Đó là <strong>Fixed Lot (Lot Cố Định)</strong>. Khi bạn đánh M15, Stoploss chỉ 10 Pip. Bạn mất 10$ (1% tài khoản). Nhưng lúc bạn thử trade khung D1, cũng vào 0.1 Lot nhưng Stoploss giờ đây cách 100 Pip. Boom! Thế là lệnh đó bạn mất tới 100$ (10% tài khoản).</p>
<p>Khối lượng Lot bạn bắt buộc phải thay đổi! Tuyệt đối không có con số Lot nào là "an toàn chung chung". Nhớ kỹ: Stoploss Ngắn => Lot được Phép lớn, Stoploss Xa => Lot bắt buộc Phải Nhỏ.</p>

<h2 id="cong-thuc">2. Công Thức Tính Lot "Xuyên Tim" Để Sống Sót Trong Bão</h2>
<p>Đừng lo tới việc phải ngồi nhẩm, đã có nhiều phần mềm (Các ứng dụng Lot Calculator miễn phí, hoặc EA trên MT4) hỗ trợ bạn. Thế nhưng bạn nhất định phải thấu hiểu cơ sở này:</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="/images/lot-size_illu_2.png" alt="cách tính thể tích margin trong forex" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Số lượng Lot giống như nhỏ giọt từng ly thuốc Độc. Nhiều quá thì chết mà Ít quá thì chưa thiêng.</figcaption>
</figure>

<div style="background-color:#1e293b; color:#fff; padding:20px; border-radius:8px; margin-bottom:20px;">
  <strong><span style="font-family:monospace; font-size:16px;">Khối Lượng Lot = Số Tiền Rủi Ro ($) / (Khoảng cách Stoploss (Pip) * Pip Value)</span></strong>
</div>

<p><strong>Ví dụ Thực Tế:</strong></p>
<ul style="line-height:2;">
  <li>Tài khoản bạn có: 10,000$</li>
  <li>Tỷ lệ Rủi ro tối đa bạn chấp nhận được: 1% (Nghĩa là tổn Thất Tối Đa 100$)</li>
  <li>Giả sử Pip Value là chuẩn của cặp Vàng (XAUUSD): 1 Pip (tương ứng 10 Point) biến động trên Thể Tích 1 Lot mang lại 10$ lợi nhuận.</li>
  <li>Trường Hợp A (Đánh Ngắn, Stoploss 20 Pip): Khối lượng Lot = 100$ / (20 Pip * 10$) = <strong>0.5 Lot</strong></li>
  <li>Trường Hợp B (Đánh Dài, Stoploss 50 Pip): Khối lượng Lot = 100$ / (50 Pip * 10$) = <strong>0.2 Lot</strong></li>
</ul>
<p>Ghi vào Tiểu Thuyết ngay lúc này: Ở cả 2 lệnh, kể cả chúng quét chạm Stoploss, thì số tiền bạn MẤT ĐI DO GIÁ GIẢM là không thay đổi ! Vẫn đúng y 100$ đó. Tâm lý bạn hoàn toàn ổn định không tức giận hay hối hận.</p>

<h2 id="ung-dung">3. Mang Cuộc Chiến Trước Khoảng Trống Vào "Trading Cân Bằng"</h2>

<figure style="margin:24px 0; text-align:center;">
  <img src="/images/lot-size_illu_3.png" alt="giao dịch nhẹ nhàng không căng thẳng lot size rủi ro" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Quản lý Lot tốt tức là việc mang ba lô vào núi lửa hay tắm hoa đều được lượng trước an toàn.</figcaption>
</figure>
<p>Một khi bạn bắt đầu Tính Toán Khối Lượng Lot trước khi Vô lệnh. Bạn sẽ thấy sự "Tỉnh Táo" lạ thường. Bạn sẽ không phải giật mình mở điện thoại để Xem "Bay nhiều rồi, âm bao tốn rồi..."! Bởi bạn ĐÃ BIẾT CHẮC CHẮN con số cuối cùng sẽ mất là bao nhiêu trước khi bạn bấm nút.</p>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">Bài Viết Liên Quan Để Đọc Thêm</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/risk-reward-rr-la-gi-bi-quyet-quan-ly-von">Đọc ngay RR để ghép R:R vào công thức Lot. Vừa thắt chặt đầu vào, vừa lôi cuốn thể hiện đầu ra.</a></li>
    <li><a href="/kien-thuc/margin-call-stop-out-la-gi">Vì sao Margin call thường hay gọi các nạn nhân dùng Fix Lot không đúng kiểu?</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Đội bài SanUyTin.net</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Hãy vứt "Cảm Tính Vào Lot". Chẳng cần phải là một thiên tài toán học, chỉ cần cái máy tính bỏ túi và quyết tâm không để lòng tham làm mờ mắt!</p>
  </div>
</div>
`;

async function updateDB() {
  const { error: err1 } = await sb.from('posts').update({ content: riskRewardCont }).eq('slug', 'risk-reward-rr-la-gi-bi-quyet-quan-ly-von');
  console.log("Risk Reward Update:", err1 ? err1.message : 'OK');
  
  const { error: err2 } = await sb.from('posts').update({ content: lotSizeCont }).eq('slug', 'cach-tinh-lot-size-chuan-xac-trong-forex');
  console.log("Lot Size Update:", err2 ? err2.message : 'OK');
}
updateDB();
