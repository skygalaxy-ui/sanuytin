import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'risk-reward-rr-la-gi-bi-quyet-quan-ly-von';
const IMG = `/images/risk-reward`;

const content = `
<div class="tldr-box" style="background:#fefce8; border-left:4px solid #eab308; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">TOM TAT NHANH</p>
  <p>Khong the chien thang 100% khi trade Forex, do vay, thu duy nhat kiem ra tien la Tỷ lệ Risk/Reward (R:R). Hieu don gian: Moi khi Thua ban mat 1 dong, nhung moi khi Thang ban an duoc 3 dong (R:R = 1:3). Chi can the thoi, ban tham chi danh sai 60% Van co lai! Quan ly von R:R luon quan trong hon bat ky tin hieu VIP hay phuong phap than thanh nao.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">Trong Bai Viet Nay</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#risk-reward-la-gi">Ty le R:R (Risk/Reward) la gi? Bang tinh loi nhuan</a></li>
    <li><a href="#sai-lam">Sai lam tu huy: An vai Pip nhung gồng no den nam</a></li>
    <li><a href="#bi-quyet-lon">Bi Quyet 1 R: "Mat it Tien de duoc nhieu Tien"</a></li>
  </ol>
</nav>

<h2 id="risk-reward-la-gi">R:R (Risk/Reward) La Gi Ma Dan Chuyen Ton Tho Nhu Vay?</h2>
<p>Ty le R:R (Risk to Reward ratio) - Ty le Rủi ro tren Lợi nhuận. No tra loi cho cau hoi: <i>"De vao lenh nay, minh phai dat cuoc bao nhieu tien, va neu dung, minh se duoc an lai bao nhieu?"</i>.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_featured.png" alt="Ty le risk reward la gi trong forex" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Cuoc trao doi: Bo ra mot dong tien vo ich de nhan ve ruong vang to?</figcaption>
</figure>

<p>Vi du R:R la 1:2. Ban chap nhan mat 50$ (Stoploss) de an 100$ (Take Profit). Theo toan hoc, neu ban thuc hien 10 lenh, ban thua bot ly 6 lenh (Mat 300$). Nhung chi voi 4 lenh Thang (An 400$). Tong ket lai ban van LOI 100$. Ban Thay Su Khong Tuong Cua Toan Hoc Chua?</p>

<h2 id="sai-lam">Canh Bac Cua The Ky: An 5 Pip Nhung Gồng Lỗ 50 Pip?</h2>
<p>Sai lam cot loi cua moi Newbie la: So viec minh bi sai!</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Quan ly von forex te hai" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Gồng lo la khi ban dat cuoc vo li: Dem chiec thuyen rong lon de cuoc voi mot dong rỉ sét.</figcaption>
</figure>

<p>Trien vong "Thích làm xanh bieu do" lam ban hay chot loi that tieu (An ti teo roi chay), trong khi gia chay Nguoc thi nam chat de Cứu vãn roi chay luon Tai Khoan (Bao nhieu co gang cong coc). Đo la tu duy <strong>Negative Risk Reward</strong>, voi R:R giong nhu 5:1. (Cuoc 5 dong de an 1 dong).</p>

<h2 id="bi-quyet-lon">Bi Quyet An Chac: Luon Muc Tieu Den Ty Le R:R >= 1:2</h2>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Cach tinh r:r risk reward tot nhat" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Nha dau tu khon ngoan chi đat cuoc mong muon vao nhung ván Bai Co Tỉ lệ Trả Thưởng Cao Nhất.</figcaption>
</figure>
<p>Ban co biet rang cac nha he thong chuyen nghiep khong the thang lien tiep, thua la chuyen thuong ngay o huyen. Ho khong kiem song bang ti le thang 90%. Ho kiem tien va giau len chu yeu bang ti le thang Thấp nhung Moi lan thang ho an duoc mot R:R tu 1:3 den tận 1:10.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="Gong lai cat lo trong quan ly von forex" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Chiu dòn (thua it), de doi thu xo ho roi moi giet gon (thang lon) => Day chinh la huyen co cua Trading!</figcaption>
</figure>
<p>Hãy quyet doan Cắt Lo. Nho that ky, Cắt lo dung ke hoach la mot Lenh Giao Dich Thanh Cong vi no giu cho ban dung vung khi co hoi ngon tuyet xuat hien.</p>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">Bai Viet Lien Quan De Doc Them</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/bao-nhieu-tien-de-bat-dau-forex">Nen tap thoi quen R:R voi tai khoan so von nhỏ bat dau nhu the nao?</a></li>
    <li><a href="/kien-thuc/quy-cap-von-forex-prop-firm-la-gi">Chi can R:R tot, bạo thi Quy Cấp Vốn hoan toan la mien dat hua de kiem tien khong tuong.</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Doi bai SanUyTin.net</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Hay giu vung nguyen tac. Chi vao giao dich o nhung co hoi ma ban thay duoc rang neu trung doc dac, mon qua lon gap ít nhat 2 lan so tien ban chuan bi mat. Con neu chi ty le 1:1? Tot nhat bam phim tat app!</p>
  </div>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Ty le risk reward la gi', scheduled_at: '2026-04-09T08:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? 'Loi: ' + error.message : 'Da cap nhat bai 21!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Risk/Reward (R:R) Là Gì? Bí Quyết Số 1 Để Bất Tử Không Cháy TK',
    slug, excerpt: 'Tại sao Trader giỏi luôn thắng dù đoán sai 60%? Khám phá sức mạnh của tỷ lệ Risk/Reward (R:R) và cách thiết lập kế hoạch cắt lỗ/gồng lãi chuẩn.',
    meta_title: 'Risk/Reward (R:R) Là Gì? Bí Quyết Quản Lý Vốn Forex',
    meta_description: 'Risk Reward ratio (R:R) là tỷ lệ vàng trong giao dịch. Học cách tính toán quản lý vốn để không bao giờ cháy tài khoản, dù tỷ lệ chiến thắng thấp.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Toan hoc Risk Reward Ty Le RR',
    is_published: false, scheduled_at: '2026-04-09T08:30:00+07:00', published_at: null
  });
  console.log(error ? 'Loi: ' + error.message : 'Da them bai 21 vao DB!');
}
run();
