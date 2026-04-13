import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'hoi-chung-fomo-forex-tam-ly-giao-dich';
const IMG = `/images/fomo`;

const content = `
<div class="tldr-box" style="background:#fefce8; border-left:4px solid #eab308; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">TOM TAT NHANH</p>
  <p>FOMO (Fear Of Missing Out) la noi so bi bo lo co hoi kiem tien, khien trader voi vang vao lenh khi gia da bay rat cao (Đu đỉnh) hoac sập rat sau (Bắt đáy bang tay không). Thoi quen doc nhieu group tin hieu va so ban be kiem tien nhieu hon minh la nguyen nhan chinh. De chua benh nay, hay chap nhan rang: "Thi truong co ca ngan co hoi moi ngay, ban khong can phai bat duoc tat ca nhung con sóng de tro nen giau co".</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">Trong Bai Viet Nay</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#fomo-la-gi">1. Hoi chung FOMO la gi ma dang so the?</a></li>
    <li><a href="#trieu-chung">2. Nhan biet minh dang bi FOMO thau tom</a></li>
    <li><a href="#cach-chua-tri">3. Cách chua benh "Sợ lỡ chuyến đò" hieu qua nhat</a></li>
  </ol>
</nav>

<h2 id="fomo-la-gi">1. Hoi Chung FOMO La Gi Ma Quét Sạch Tien Cua Trader?</h2>
<p>FOMO (Fear Of Missing Out) dich ra la Nỗi so bi bỏ lỡ. Day la thoi diem ban nhin thay cay nen xanh xuyen thung troi con ban be tren nhom lai dang rần rần khoe Lai Chục ngàn Đô. Ban thay minh "tụt hậu", thay minh la ke that bai neu khong bam ngay vao nut BUY de huong ké vinh quang.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_featured.png" alt="Hoi chung fomo trong forex" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Thay tau vu tru ruc sang lao đi la ban song chet doi bam vao mac ke rủi ro cham rèm!</figcaption>
</figure>

<p>Ket qua la gi? Ban vua vao lenh BUY ngay tren đỉnh cay nen. Đo cũng chinh la luc nhung nguoi khoe Lai tren Nhom bat đau <strong>CHỐT LỜI</strong>. Dong tien chot loi lam gia quay đầu, san xuong muc Cắt Lỗ cua ban. Rat cay dang!!</p>

<h2 id="trieu-chung">2. Tam Ly Đám Đồng (Herd Mentality) Va Su Điên Rổ Toàn Thể</h2>
<p>Dau hieu ban đang bi tam ly FOMO dieu khien rat de nhan ra:</p>
<ul style="line-height:2;">
  <li><strong>Pha Quy Tăc:</strong> Mo ung dung len thay cay nen đep qua, quen luon ca Ke Hoach Lot hay R:R, bam vao lenh vi so tí nua no chạy mất.</li>
  <li><strong>Over-Trading:</strong> So lo co hoi nen cai nhieu man hinh, thuc sang dem đe canh bieu 1 phut. Nhin dau cung thay diem vao lenh!</li>
  <li><strong>Tam Ly Đám Đông:</strong> Nhom Zalo doc lenh BUY Vang full tien, ban cam thay minh bi lac long neu khong theo tầu. Kq la tat ca cung bi đắm!!</li>
</ul>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Tam ly dam dong trong chung khoan forex" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Con cuu di dau, ca bay bi che mat di theo nay — du phia truoc la vuc sâu chet nguoi.</figcaption>
</figure>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Over trading benh ly fomo trader" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">So bo lo co hoi se dot chay nang luong vao nhung cai nhìn vao nhung cu the bieu do honloan suot dem den.</figcaption>
</figure>

<h2 id="cach-chua-tri">3. Cách Chua Benh "Sợ Lỡ Chuyến Đò" De Giau Co</h2>
<p>Thi truong Forex giao dich hon 6,600 ty Đo la MOI NGAY. Nghi rang ban vừa lỡ mất cơ hội "duy nhất" de lam giau tuc la ban ko biet gi ve Forex. Hom nay lỡ thi Ngay mai co cai Tốt Hon. Hom nay thu 6 nghi ngoi thi Tuan sau an đậm hon.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="quan tri tam ly trading fomo forex" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Dinh cao cua Trading: Ngoai tai tieng on ai, hoan toan khong quan tam toi dam dong de nhat quan voi ke hoach cua rieng minh.</figcaption>
</figure>

<p>De dap tat su cuong loan nay: Hay dong bieu do khi cam xuc đang dâng trào! Tap thoi quen dat Lenh Cho (Limit hoac Stop), tuyet doi khong vao lenh Execute truc tiep Market. Moi khi sap bi xuc đong an vao BUY/SELL Market... hay chi nghi ve 1 dieu duy nhat: Tỉ lẹ R:R cho diem nay co xung ko?</p>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">Bai Viet Lien Quan De Doc Them</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/cach-tinh-lot-size-chuan-xac-trong-forex">Da FOMO ma con vao Khoi luong Lot lon thi dung la tham hoa. Tham khao lai Lot size.</a></li>
    <li><a href="/kien-thuc/tin-hieu-forex-signals-mien-phi-2026">Canh giac cao do voi moi hoi nhom Ban Tin Hieu khoe Lãi — chung chi tao FOMO de thet Tuyen ban!</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Doi bai SanUyTin.net</p>
    <p style="font-size:14px; color:#64748b; margin:0;">FOMO là tên sát thủ thầm lặng giết chết tài khoản nhanh hơn bất kỳ sai lầm PTKT nào. Chữa được bệnh nhảy tàu mù quáng, là bạn đã nắm chắc 50% cơ may tồn tại!</p>
  </div>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Hoi chung FOMO la gi', scheduled_at: '2026-04-09T15:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? 'Loi: ' + error.message : 'Da cap nhat bai 23!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Hội Chứng FOMO Trong Forex Là Gì? Chữa Bệnh Sợ Lỡ Cơ Hội',
    slug, excerpt: 'Bệnh đu đỉnh và bán đáy thường tới từ tâm lý bầy đàn và FOMO (Nỗi sợ bị bỏ lỡ). Học cách làm chủ tâm lý giao dịch và không để cảm xúc chi phối.',
    meta_title: 'Hội Chứng FOMO Trong Forex Là Gì? Chữa Bệnh Đu Đỉnh Bán Đáy',
    meta_description: 'Tìm hiểu ngay về Hội chứng FOMO (Fear Of Missing Out) trong lĩnh vực Forex Crypto, làm sao để vượt qua rào cản tâm lý sợ mất cơ hội này?',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Tam ly FOMO Forex the hien the nao',
    is_published: false, scheduled_at: '2026-04-09T15:30:00+07:00', published_at: null
  });
  console.log(error ? 'Loi: ' + error.message : 'Da them bai 23 vao DB!');
}
run();
