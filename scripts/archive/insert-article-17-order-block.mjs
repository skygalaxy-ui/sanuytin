import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'order-block-ob-la-gi-cach-tim-ca-map';
const IMG = `/images/order-block`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">TOM TAT NHANH</p>
  <p>Order Block (Khoi lenh) la vung gia ma Ca map (Ngan hang, To chuc lon) da tich luy mot khoi luong lenh cuc lon truoc khi day khien thi truong buoc vao mot xu huong manh. Giao dich voi OB la viec ban xac dinh cac diem nay, kien nhan doi gia "Pullback" (Doi buoc) ve lai do de khop theo huong cua tay to.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">Trong Bai Viet Nay</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#dinh-nghia">Khai Niem: Order Block (OB) la gi?</a></li>
    <li><a href="#bullish-bearish">Phan loai: Bullish OB va Bearish OB</a></li>
    <li><a href="#cach-ve">3 Buoc xac dinh Order Block uy tin (High Probability)</a></li>
    <li><a href="#cach-vao-lenh">Chien luoc Entry voi OB nguyen thuy</a></li>
    <li><a href="#luu-y">Sai lam thuong gap khien ban chet oan tai OB</a></li>
  </ol>
</nav>

<h2 id="dinh-nghia">Khai Niem: Order Block (OB) La Gi?</h2>
<p>Ban cu tuong tuong minh dang lai xe tren mot duong bang nhanh. Dot nhien, mot vien gach khong lo xuat hien ngay giua duong voi hao quang sang ruc rỡ, am am vang doi. Vien gach do chinh la Order Block - Mot buc tuong vung chac khien xe nao dam vao cung phai doi lai.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_featured.png" alt="Order block ob la gi trong smc" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">OB giong nhu vien gach vang nam vung chai tren mat dat.</figcaption>
</figure>

<p>Ve mat ky thuat, Order Block thuong duoc xac dinh la <strong>cay nen giam/tang cuoi cung truoc mot con song tang/giam cuc manh</strong>. Con song manh nay phai tao ra su pha vo cau truc (Break of Structure - BOS hoac CHoCH) va thuong di kem voi khoang trong gia (Imbalance - FVG).</p>

<h2 id="bullish-bearish">Phan Loai OB: Khi Bo Va Gau Hien Hinh</h2>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Bullish order block khoi lenh mua ob" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Bullish OB la luc Bo vang sung nang doan gia di len.</figcaption>
</figure>
<p><strong>Bullish Order Block (OB Tang):</strong> La cay nen giam cuoi cung truoc mot chuoi tang gia phi ma. No the hien viec Ca Map da co tinh day gia xuong de gom Hang roi Moi thay bom Tien. De trade voi Bullish OB, ban cho gia quay lai vung nay trong tuong lai roi Canh Mua.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Bearish order block la gi sMC khoi lenh ban" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Bearish OB do con Gau nhem day da de lap vung mua.</figcaption>
</figure>
<p><strong>Bearish Order Block (OB Giam):</strong> Nguoc lai, no la cay nen tang cuoi cung truoc khi gia sap sau xuong day. Do the hien luong lenh xa hang khong lo da duoc an dat o do. Khi gia test len diem ay lan nua, do se la mot muc do choi li de Canh Ban.</p>

<h2 id="cach-ve">3 Buoc Xac Dinh Order Block "Khang Sinh" Uy Tin</h2>
<p>Ban khong the thay cay nen cuoi cung nao cung nhan no la OB duoc. Muon tim dung vien hong ngoc giua dan gach da, ban phai ap dung bo tieu chi sau:</p>

<ul style="line-height:2;">
  <li><strong>Dieu kien 1 (Imbalance/FVG):</strong> Con song tang/giam lap tuc sau cay OB do phai cuc ky manh me va de lai FVG (Fair Value Gap - Khoang trong gia ly thuong). Su hien dien cua FVG chung to Dong Tien Lon da roi di dot ngot.</li>
  <li><strong>Dieu kien 2 (BOS/CHoCH):</strong> Dong luc sau do phai pha duoc Day hoac Dinh truoc do (Pha vo cau truc cung cau hien tai).</li>
  <li><strong>Dieu kien 3 (Unmitigated - Chua duoc test):</strong> OB do phai la vung chuyen nguyen tinh hoa chua he bi "viem nhiem" (Tuc la chua co rau nen cua cac khoang thoi gian sau quay lai phat don roi rut).</li>
</ul>

<h2 id="cach-vao-lenh">Chien Luoc Entry voi OB Nguyen Thuy</h2>
<p>Mot khi ban da keo ra duoc vung OB xin, lam the nao de an chac ma khong bi truot lenh (Slippage) hay de le ra suot muot?</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="Kien nhan doi order block lap the phong thu" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Vung khang cu vung chac che cho nha giao dich.</figcaption>
</figure>

<p>Cach an toan nhat co ten la tao tin hieu xac nhan (Confirmation Entry). Hay dung o khunmg THoi gian lon (VD: H4 hoac D1) de tim OB. Khi gia roi roi dung mep cua OB roi ha khung THoi gian nho hon (VD: M15 hoac M5) cho no co tin hieu dao chieu CHoCH tai do roi moi vao lenh theo song moi.</p>

<h2 id="luu-y">Sai Lam Thuong Gap (Kinh Nghiem Xuong Mau)</h2>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Bat dao roi vao OB chua Mitigation nhung lai la OB nam tren duong bay Thanh khoan?</h3>
  <p>Loi lon nhat la chon OB khong co Liquidity Pool nam "Truoc" no (Inducement). Neu OB qua ro rang ma nam pho bay ra ngoai khoang do, Ca Map se xuyen pha OB do de quet the nhan tien tao ra OB thu 2 roi moi the hoat.</p>
</div>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">Bai Viet Lien Quan De Doc Them</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/phuong-phap-smc-smart-money-concept-la-gi">Hoc lai tu dau he thong SMC (Smart Money Concept).</a></li>
    <li><a href="/kien-thuc/trailing-drawdown-la-gi-cach-tinh-sut-giam-quy">Ban co the thi quy Prop firm bang phuong phap OB khong?</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Doi bai SanUyTin.net</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Hay nho rang thi truong luon co vo so Order Block, nhung chi 5-10% la dang de dat cuoc! Hay backtest that can than.</p>
  </div>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Order block smc la gi', scheduled_at: '2026-04-08T11:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? 'Loi: ' + error.message : 'Da cap nhat bai 17!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Order Block (OB) Là Gì? Tuyệt Chiêu Bắt Đỉnh Đáy Cùng Cá Mập',
    slug, excerpt: 'Hướng dẫn tìm và giao dịch với Order Block (Khối lệnh). Cách nhận biết OB uy tín cao (High Probability) để tối ưu lợi nhuận và né bẫy thanh khoản.',
    meta_title: 'Order Block Là Gì? Cách Xác Định OB Chuẩn Trong Forex',
    meta_description: 'Order Block (Khối lệnh) là gì trong phương pháp SMC? Khám phá 3 bước vẽ Order Block có xác suất thắng cao tránh bẫy của tay to.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Order Block La Gi OB SMc',
    is_published: false, scheduled_at: '2026-04-08T11:30:00+07:00', published_at: null
  });
  console.log(error ? 'Loi: ' + error.message : 'Da them bai 17 vao DB!');
}
run();
