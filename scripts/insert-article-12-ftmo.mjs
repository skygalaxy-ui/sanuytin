import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'review-quy-ftmo-luat-thi-nap-rut';
const IMG = `/images/${slug}`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">📌 Tóm Tắt Nhanh</p>
  <p><strong>FTMO</strong> được mệnh danh là "Ngân hàng Nhà nước" của giới Prop Firm nhờ lịch sử hoạt động lâu đời (từ 2015), sòng phẳng thanh toán và có trụ sở vật lý hoành tráng tại châu Âu (Cộng hòa Séc). Mặc dù lệ phí thi khá chát và luật lệ khắt khe, nhưng nếu bạn thật sự muốn làm nghề Trading lâu dài, thi đậu FTMO là chứng chỉ danh giá nhất.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">📑 Nội Dung Bài Viết</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#tong-quan">Tại sao FTMO là "King"?</a></li>
    <li><a href="#luat-thi">Cấu trúc Vòng thi & Giá vé Update 2026</a></li>
    <li><a href="#luat-le">Phân tích Luật Daily Drawdown tĩnh</a></li>
    <li><a href="#nap-rut">Rút tiền (Payout) - Tốc độ bàn thờ</a></li>
    <li><a href="#faq">Câu Hỏi Thường Gặp (FAQ)</a></li>
    <li><a href="#ket-luan">Tổng kết: Đáng đồng tiền bát gạo?</a></li>
  </ol>
</nav>

<h2 id="tong-quan">Tại Sao FTMO Lại Là "Ông Vua" Không Ngai Tranh Cãi?</h2>
<p>Trong khi các quỹ rác (Scam) thi nhau mọc lên như nấm năm 2022-2024 với lờ lãi "giảm giá 50%" hay "không giới hạn thời gian", để rồi sụp đổ hàng loạt đem theo tiền cọc của Trader (như MFF, The Funded Trader, True Forex Funds). Thì FTMO vẫn đứng sừng sững.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_featured.png" alt="Review danh gia quy cap von FTMO" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Chiếc cúp vàng không thể xô đổ giữa tâm bão sập quỹ.</figcaption>
</figure>

<p>Họ tồn tại vững mạnh từ năm 2015 qua đủ chu kì Gấu/Bò của thị trường. Nhờ chính sách quản trị rủi ro A-Book minh bạch, nền tảng công nghệ mạnh mẽ cực kỳ không dễ bị Hacker trục lợi. Có trụ sở thật ở Prague, đóng thuế đầy đủ và được vinh danh bởi Forbes.</p>

<h2 id="luat-thi">Cấu Trúc Vòng Thi: Bức Tường Lửa Không Xoay Chuyển</h2>
<p>So với những quỹ mới ra mắt ưu đãi xả láng, FTMO có vẻ khá "Bảo thủ" trong luật thi. Họ chia làm 2 Vòng chuẩn mực (Standard Account):</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Do challenge ftmo giay chung nhan" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Bằng khen điện tử của FTMO luôn là thứ trader tự hào kheo trên mạng xã hội.</figcaption>
</figure>

<ul>
  <li><strong>Giai đoạn 1 (FTMO Challenge):</strong> Yêu cầu Profit Target là <strong>10%</strong>. Giới hạn thời gian Vô hạn (Unlimited Trading Days - Đã update từ 2024).</li>
  <li><strong>Giai đoạn 2 (Verification):</strong> Yêu cầu Profit Target là <strong>5%</strong>. Giới hạn thời gian Vô hạn. Để quỹ check xem bạn có ăn may.</li>
</ul>
<p>Sau khi Pass 2 vòng, bạn được refund (hoàn lại gốc) tiền vé. Giá vé ví dụ: Tài khoản $10.000 tốn phí thi là €155 euro. Tài khoản khủng $200k tốn phí thi €1,080 euro.</p>

<h2 id="luat-le">Daily Drawdown Tĩnh: Chìa Khóa Cứu Mạng</h2>
<p>Nhiều Trader rất sợ bị sập bẫy sụt giảm. Thật may mắn, FTMO sử dụng cơ chế Drawdown siêu tử tế.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Kiem tra xem xet drawdown the le quỹ ftmo" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Bộ dò quét Equity của FTMO tuy khép nhưng lại cực kì rõ ràng và xanh chín.</figcaption>
</figure>

<ul>
  <li><strong>Max Daily Loss là 5%.</strong> Đặc biệt, FTMO tính mốc này dựa trên số dư (Balance) của đầu ngày lúc 0h00 giờ máy chủ CE(S)T. </li>
  <li>Ví dụ tài khoản khởi đầu $100k. Mốc chết ngày đầu là $95k. Giả sử ban ngày bạn thắng lên được $104k, có nghĩa là bạn còn một bộ đệm giảm tận -$9k cho tới mức chết $95k. Các quỹ rác khác thì nó sẽ trượt cái mốc $95k đi theo lợi nhuận 104k của bạn.</li>
  <li><strong>Max Loss tuyệt đối là 10% Tính trên Balance gốc ban đầu.</strong> Bạn sẽ không bao giờ bị đuổi nếu tài khoản chưa xuống chạm $90.000.</li>
</ul>

<h2 id="nap-rut">Rút Lãi (Payout) Với Tốc Độ Bàn Thờ (24 Giờ)</h2>
<p>Tương truyền rằng: Ở MFF bạn mất 7 ngày chờ lệnh duyệt rút tiền hồi hộp mướt mồ hôi. Tại FTMO, bạn ấn rút tiền sáng nay thì tối có tiếng ting ting.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="FTMO thanh toan rut tien payout uy tin nhanh nhat" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Lợi nhuận được chia tới 80% (ngay lứa đầu) và 90% khi bạn được Scale Up tài khoản.</figcaption>
</figure>

<p>Chu kỳ chia chác mặc định là 14 ngày (Bi-weekly) kể từ lần trade Live đầu tiên. Gần đây (năm 2026), FTMO còn mở chức năng <strong>Payout On-Demand</strong> (Thích Rút Lúc Nào Cũng Được), chia sẻ lợi nhuận mặc định là 80/20.</p>
<p>Hỗ trợ rút đa kênh: Từ Bank Transfer cổ điển cho tới thanh toán qua Ví Tiền Ảo Crypto (USDT, BTC) cực kì tiện cho cộng đồng Trader Việt Nam né còng số 8.</p>

<div style="background:#fef3c7; border-left:4px solid #f59e0b; padding:16px 20px; border-radius:8px; margin:20px 0;">
  <p style="font-weight:700; margin-bottom:4px;">⚠️ Lưỡi Gươm Của Nhà Vua (Luật Cấm Bẩn)</p>
  <p>FTMO soi IP và cách giao dịch cực gắt. Nếu bạn copy Trade trộm bằng Bot HFT (High-Frequency Trading) với tốc độ Mili-giây, hoặc có IP đăng nhập nhảy liên lục (do dùng VPN linh tinh). Hệ thống nghi ngờ bạn xài dịch vụ "Quản lý quỹ hộ" và sẽ đình chỉ lập tức.</p>
</div>

<h2 id="faq">❓ Câu Hỏi Thường Gặp (FAQ) Về FTMO</h2>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Bây giờ FTMO còn cấm giao dịch qua tuần (Over the weekend) không?</h3>
  <p>Tùy theo loại hình. Với tài khoản *Normal*, bạn phải Đóng toàn bộ lệnh trước khi đóng phiên cuối tuần. Còn nếu bạn mua tài khoản *Swing Account* (sẽ bị giảm đòn bẩy bù lại), bạn hoàn toàn có thể vứt lệnh qua tuần hoặc qua thời điểm Ra Tin tức.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">So sánh FTMO với FundedNext thì ai ngon hơn?</h3>
  <p>FundedNext thì luật thoáng hơn, hỗ trợ tiếng việt tốt hơn, nhưng Server thỉnh thoảng Lag (Trượt giá nhẹ). FTMO thì Server siêu mượt Spread thấp, nhưng giá mua ticktet lại cao hơn FundedNext. Có tiền nhàn rỗi, cứ ưu tiên FTMO trước!</p>
</div>

<h2 id="ket-luan">Tổng Kết: Đầu Tàu Kéo Cả Ngành Prop Firm</h2>
<p>Không quá khi nói FTMO là chứng chỉ Harvard của thị trường Trader Cá Nhân. Một khi bạn lôi app MetaTrader ra khoe được tờ chứng nhận Live của FTMO: Bạn là một con sói già cội. Sự minh bạch thanh khoản giúp bạn có tâm lý Trade nhẹ nhàng như mây bay.</p>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">📚 Bài Viết Liên Quan Về Thi Quỹ</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/quy-cap-von-forex-prop-firm-la-gi">Tìm Hiểu Nền Tảng: Quỹ Cấp Vốn Hoạt Động Ra Sao?</a></li>
    <li><a href="/kien-thuc/vu-sap-my-forex-funds-mff">Vụ Sập MFF Lộ Tẩy Trò Cheat Của Các Quỹ Vỏ Bọc</a></li>
    <li><a href="/kien-thuc/truot-gia-slippage-la-gi">Chiêu Trò Slippage: Đưa Nến Đau Đớn Phá Tài Khoản Phút Chót</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Đội bài SanUyTin.net</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Biên tập viên của SanUyTin có nhiều người từng giữ các quỹ 200k của FTMO. Đánh giá hoàn toàn khách quan, không phải là link Ref xúi giục nạp tiền thi chui.</p>
  </div>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Review danh gia quy cap von FTMO', scheduled_at: '2026-04-07T11:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? '❌ ' + error.message : '✅ Đã cập nhật bài 12!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Review Đánh Giá Quỹ FTMO: Tường Thành Uy Tín Hay Trò Đốt Tiền 2026?',
    slug, excerpt: 'FTMO vẫn là Vua của các quỹ Prop Firm với luật thi Drawdown chuẩn mực và khả năng Payout trong 24h. Bóc trần ưu và nhược điểm khó nhằn.',
    meta_title: 'Đánh Giá FTMO 2026: Luật Thi & Review Payout Uy Tín Phải Biết',
    meta_description: 'Toàn cảnh Đánh giá review quỹ cấp vốn nổi tiếng nhất thế giới: FTMO. Chi tiết luật thi, giải thích daily drawdown tính theo ngày mới nhất và cơ chế rút tiền lẹ.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'FTMO the king of prop firms',
    is_published: false, scheduled_at: '2026-04-07T11:30:00+07:00', published_at: null
  });
  console.log(error ? '❌ ' + error.message : '✅ Đã thêm bài 12 "Review FTMO" vào DB!');
}
run();
