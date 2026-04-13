import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'cach-tinh-lot-size-chuan-xac-trong-forex';
const IMG = `/images/lot-size`;

const content = `
<div class="tldr-box" style="background:#fefce8; border-left:4px solid #eab308; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">TOM TAT NHANH</p>
  <p>Lot Size la gi? Đo la The Tich cua lenh Giao dich. Ban khong the boc dai 1 Lot, 2 Lot vao lenh ma khong tinh toan! De tranh Chay Tai khoan, <strong>Lot Size phai duoc Tinh Toan phu thuoc vao Khoang Cach Stoploss</strong>. Neu Stoploss cang xa, ban phai chu dong Ha Lot Size xuong de tong so tien Rủi ro (Quy ra Do la) van giu co dinh o muc an toan (Vi du: 1% hoac 2% tai khoan).</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">Trong Bai Viet Nay</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#lot-la-gi">1. Lot Size la gi? Su chet choc tu thoi quen Fixed Lot</a></li>
    <li><a href="#cong-thuc">2. Cong Thuc Tinh Lot Size Chuan Chot Cung</a></li>
    <li><a href="#ung-dung">3. Ung Dung Toan Hoc vao Viec Ne Margin Call</a></li>
  </ol>
</nav>

<h2 id="lot-la-gi">1. Thuoc Do Cua Tu Than: Lot Size Va Loi Mon "Fixed Lot"</h2>
<p>Ban co thay minh hay the nay khong: Tai khoan co 1,000$. Ban nghi minh danh 0.1 Lot cho 1 lenh la RAT an toan. Vay la vao lenh nao ban cung de mac dinh <strong>0.1 Lot</strong>, mat mạc ke day la khung H1 hay D1.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Nhieu lot size khien tai khoan forex chay" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Danh chung khối lượng cho moi con sóng giong nhu viec de mot khoi thep lên mot ban kinh mong manh.</figcaption>
</figure>

<p>Do la <strong>Fixed Lot (Lot Co Dinh)</strong>. Khi ban danh M15, Stoploss chi 10 Pip. Ban mat 10$ (1% tai khoan). Nhung luc ban thu trade khung D1, cung vao 0.1 Lot nhung Stoploss gio day cach 100 Pip. Boom! The la lenh do ban mat toi 100$ (10% tai khoan).</p>
<p>Khoi luong Lot ban bat buoc phai thay doi! Tuyệt đối khong co con so Lot nao la "an toan chung chung". Nho ky: Stoploss Ngan => Lot ban Phep lon, Stoploss Xa => Lot bat buoc Phep Nho.</p>

<h2 id="cong-thuc">2. Cong Thuc Tinh Lot "Xuyên Tim" De Song Sot Trong Bao</h2>
<p>Dung lo toi viec phai ngoi nham, da co nhieu phan mem (Cac ung dung Lot Calculator mien phi, hoac EA tren MT4) ho tro ban. The nhung ban nhat dinh phai thao hieu co so nay:</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="cach tinh the tich margin trong forex" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">So luong Lot giong nhu nho dung tung ly thuoc Doc. Nhieu qua thi chet ma It qua thi chua thien.</figcaption>
</figure>

<div style="background-color:#1e293b; color:#fff; padding:20px; border-radius:8px; margin-bottom:20px;">
  <strong><span style="font-family:monospace; font-size:16px;">Khối Lượng Lot = Số Tiền Rủi Ro ($) / (Khoảng cách Stoploss (Pip) * Pip Value)</span></strong>
</div>

<p><strong>Ví dụ Thực Tế:</strong></p>
<ul style="line-height:2;">
  <li>Tai khoan ban có: 10,000$</li>
  <li>Ty le Rủi ro toi da ban chap nhan duoc: 1% (Nghia la ton That Toi Đa 100$)</li>
  <li>Gia su Pip Value la chẩn cua cap Vàng (XAUUSD): 1 Pip (tuong ung 10 Point) bien dong tren The Tich 1 Lot mang lai 10$ loi/nnhuan.</li>
  <li>Truong Hop A (Đánh Ngắn, Stoploss 20 Pip): Khối lượng Lot = 100$ / (20 Pip * 10$) = <strong>0.5 Lot</strong></li>
  <li>Truong Hop B (Đánh Dài, Stoploss 50 Pip): Khối lượng Lot = 100$ / (50 Pip * 10$) = <strong>0.2 Lot</strong></li>
</ul>
<p>Ghi vao Tieu Thuyet ngay luc nay: O ca 2 lenh, ke ca chung quet cham Stoploss, thi so tien ban MAT DI DO GIA GIAN la khong thay doi ! Van dung y 100$ do. Tam ly ban hoan toan on dinh khong tuc gian hay hoi han.</p>

<h2 id="ung-dung">3. Mang Cuoc Chien Truoc Khoang Trong Vao "Traing Cân Bằng"</h2>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="giao dich nhe nhang khong cang thang lot size rui ro" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Quan ly Lot tot tuc la viec mang ba lo vao nui lua hay tam hoa deu duoc luong truoc an toan.</figcaption>
</figure>
<p>Mot khi ban bat đau Tính Toan Khối Lượng Lot truoc khi Vo lenh. Ban se thay su "Tỉnh Táo" lạ thuong. Ban se khong phai giat minh mo dien thoai de Xem "Bay nhieu roi, am bao ton ròi..."! Boi ban DA BIET CHAC CHAN con so cuoi cung se mat la bao nhieu trước khi ban bấm nut.</p>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">Bai Viet Lien Quan De Doc Them</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/risk-reward-rr-la-gi-bi-quyet-quan-ly-von">Doc ngay RR de ghep R:R vao cong thuc Lot. Vua that chat dau vao, vua loi cuon the hien dau ra.</a></li>
    <li><a href="/kien-thuc/margin-call-stop-out-la-gi">Vi sao Margin call thuong the goi cac nan nhan dung Fix Lot khong dung kieu?</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Doi bai SanUyTin.net</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Hay vut "Cam Tinh Vao Lot". Chẳng cần phải là một thiên tài toán học, chỉ cần cái máy tính bỏ túi và quyết tâm không để lòng tham làm mờ mắt!</p>
  </div>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Tinh lot size Forex chuan xac', scheduled_at: '2026-04-09T11:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? 'Loi: ' + error.message : 'Da cap nhat bai 22!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Cách Tính Lot Size Chuẩn Xác Nhất Trong Forex Tránh Bị Cháy Tài Khoản',
    slug, excerpt: 'Việc vào lệnh với 1 Volume Lot cố định rất dễ dẫn đến cháy TK. Khám phá công thức tính Lot Size theo Stoploss chuẩn xác quản trị 1% rủi ro.',
    meta_title: 'Cách Tính Lot Size Forex Chuẩn Không Thua Đầu Tư Khoản Ngầm',
    meta_description: 'Lot size trong Forex là gì? Bỏ ngay thói quen đi Fix Volume Lot. Tìm hiểu công thức tính số lot an toàn để không bị margin call.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Giao dich Forex quan ly khoi luong Lot',
    is_published: false, scheduled_at: '2026-04-09T11:30:00+07:00', published_at: null
  });
  console.log(error ? 'Loi: ' + error.message : 'Da them bai 22 vao DB!');
}
run();
