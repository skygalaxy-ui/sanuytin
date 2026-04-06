import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'price-action-hanh-dong-gia-co-ban';
const IMG = `/images/price-action`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">TOM TAT NHANH</p>
  <p>Price Action (Hanh Dong Gia) la truong phai giao dich thuan tuy dua vao su di chuyen cua Gia tren bieu do Nen (Nen Nhat). Nguoi theo truong phai nay KHONG su dung bat ky chi bao (Indicator) nao nhu RSI, MACD hay Bollinger Bands. Ho tin rang "Gia da phan anh tat ca", va chi can doc hieu ngon ngu cua nến, ho co the hieu duoc tam ly tranh gianh giua phe Mua (Bo) va phe Ban (Gau).</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">Trong Bai Viet Nay</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#price-action-la-gi">Khai Niem: Price Action - Vo si mu khong can binh khi</a></li>
    <li><a href="#vi-sao-chon">Vi Sao Nen Vut Bo Indicator?</a></li>
    <li><a href="#doc-nen">Cach DOC ngon ngu cua Nen Nhat</a></li>
    <li><a href="#hoi-tu">Su Hoi Tu: Nuoc di cuc giet thoi gian</a></li>
  </ol>
</nav>

<h2 id="price-action-la-gi">Price Action La Gi? Vo Si Mu Khong Can Binh Khi</h2>
<p>Ban tuong tuong minh la mot samurai chien dau trong bong toi. Ban khong the dua vao mat de lua chon (Indicator lam tre tin hieu), ma phai dung Cam nhan ve Tieng dong, Tieng gio (Hanh dong gia) de ne don.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_featured.png" alt="Price action la gi giao dich forex" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Chi can dua vao gia va khoi luong, khong can do dac rườm rà.</figcaption>
</figure>

<p>Price Action hoat dong dua tren 3 yeu to cot loi: <strong>Nen (Candlesticks) - Cau truc thi truong (Market Structure) - Can Bang Cung Cau (Supply & Demand)</strong>. Chi voi 3 vu khi nay, ban co the phan lon nam duoc thi truong dang muon di ve dau hoac dang bi mắc kẹt ở đau.</p>

<h2 id="vi-sao-chon">Tay Trang Chi Bao: Vi Sao Nen Vut Bo Indicator?</h2>
<p>Hau het cac chi bao (Indicator) tinh toan dua tren Cong thuc toan hoc tu GIA CUA QUA KHU. Dong nghia voi viec chung luon bi tre (Lagging). Khi duong MA (Moving Average) vua kip cat nhau cho ban tin hieu MUA, thi thi truong thuc te da tang het song va bat dau quay dau.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Vut bo indicator khi trade price action" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Bieu do cua ban the nao? Co giong nhu mot to khao sat chi chit khong?</figcaption>
</figure>

<p>Khi ban chuyen sang Price action, ban nhin bieu do TRUOC MAT. Mot bieu do sach se giup ban co thoi gian nhin Thay Phat vao Dinh và Day rõ ràng thay vi bi phân tam boi cac mau sac den tu Macd hoac Fibonacci.</p>

<h2 id="doc-nen">Ngon Ngu Nến: Khi Nến Biết Nói</h2>
<p>Trading don gian la cuoc keo co giua Nguoi Mua va Nguoi Ban. Moi mot cay nen nhat deu bieu thu ket qua cua tran keo co trong thoi gian 1H hoac 1D.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Cat nen bang price action thuan tuy" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Dung cat ngang xu huong neu no qua khoe.</figcaption>
</figure>

<ul style="line-height:2;">
  <li><strong>Than nen dai, rau nen ngan:</strong> Su ap dao hoan toan. Phe Mua(giong cay nen xanh) dang nam toan bo the tran va bam nut thang tuyet doi khong thuong tiec.</li>
  <li><strong>Than nen ngan, rau nen dai (Doji / Pinbar):</strong> Su tu choi (Rejection). Day la luc mot ben da co gang day gia ra xa, nhung ngay lap tuc bi doi phuong keo co nguoc lai quyet liet. Hien tuong nay rat de la dau hieu Dao Chieu!</li>
</ul>

<h2 id="hoi-tu">Cán Cân Su Hoi Tu Giá Va Nền Tảng Hỗ Trợ</h2>
<p>Cac tay trade ky cuu thuong dung Price action de do diem "Hoi Tu" (Confluence) tren bieu do.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="Can bang cung cau supply demand price action" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Hieu nguon goc su bat o Can bang Cung & Cau giup phat hien co hoi the thu.</figcaption>
</figure>
<p>Vi du: Mot cay nen Pinbar tu choi Giam (Tin hieu 1) xuat hien tai vung Ho tro lon o khung D1 (Tin hieu 2) và trung voi diem pha vo tren duong Trendline (Tin hieu 3). Khi cac "tin hieu gia" tu dong khep vao 1 muc tieu thi xac suat thang la rat kinh khung.</p>

<div class="faq-item" style="margin-bottom:20px; padding-top:20px;">
  <h3 style="font-size:17px;">Học Price Action Cần Bao Lâu?</h3>
  <p>Thinh thoang, viec thanh thao Price action de mat tư 6 thang. Ban phai kien nhan nhìn biểu đồ đến lúc "hình thành trực giác phản xạ" thay vi chi danh vao cam xuc. Hay luyen tap truoc voi Tai khoan Demo.</p>
</div>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">Bai Viet Lien Quan De Doc Them</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/top-5-chi-bao-ky-thuat-forex-hieu-qua-nhat">Lam the nao de pha cach neu van muon giu lai chi bao MACD?</a></li>
    <li><a href="/kien-thuc/ order-block-ob-la-gi-cach-tim-ca-map">SMC thuc chat cung la 1 bien the nang cao cua Price action ma thoi.</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Doi bai SanUyTin.net</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Hay ve the cua nến. Price action chong chi dinh voi su luoi bieng, do la 1 thu Phep thuat nghe thuat.</p>
  </div>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Giao dich price action co ban', scheduled_at: '2026-04-08T19:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? 'Loi: ' + error.message : 'Da cap nhat bai 19!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Hành Động Giá (Price Action) Cơ Bản Là Gì? Trade Không Cần Chỉ Báo',
    slug, excerpt: 'Giao dịch ngoại hối với biểu đồ sạch. Học cách lột bỏ mọi chỉ báo (Indicator) để "nghe" biểu đồ nói chuyện bằng hành động giá.',
    meta_title: 'Price Action Cơ Bản: Giao Dịch Hành Động Giá',
    meta_description: 'Phương pháp giao dịch Price Action là gì? Cách đọc ngôn ngữ nến Nhật, hỗ trợ kháng cự để nhận định hướng mập di chuyển.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Price Action La Gi',
    is_published: false, scheduled_at: '2026-04-08T19:30:00+07:00', published_at: null
  });
  console.log(error ? 'Loi: ' + error.message : 'Da them bai 19 vao DB!');
}
run();
