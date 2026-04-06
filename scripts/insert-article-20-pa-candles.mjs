import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = '3-mau-nen-price-action-pin-bar-fakey';
const IMG = `/images/candles`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">TOM TAT NHANH</p>
  <p>De giao dich Price Action thanh cong, ban chi can nho mat 3 mau nen huyen thoai nay: <strong>Pin Bar</strong> (Su tu choi manh me), <strong>Inside Bar</strong> (Su nen xep cho doi no), va <strong>Fakey</strong> (Cai bay chet nguoi). Day la 3 vu khi co ban ma moi Price Action Trader phai nam that ky de hanh dong tai cac vung ho tro, khang cu quan trong.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">Trong Bai Viet Nay</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#pin-bar">Nen Pin Bar: Mui thuong Tu Choi</a></li>
    <li><a href="#inside-bar">Nen Inside Bar: Ninja an minh truoc bao</a></li>
    <li><a href="#fakey">Mau Hinh Fakey: Phep thuat danh lua phe doc hanh</a></li>
    <li><a href="#loi-khuyen">Vi sao xai dung mau hinh van lo?</a></li>
  </ol>
</nav>

<h2 id="pin-bar">1. Nen Pin Bar: Mui Thuong Tu Choi Chinh Phuc Su Menh</h2>
<p>Pin Bar (The Pinocchio Bar) la cay nen giong het cai mui dai cua cau be mo go. Cấu tạo dặc trưng của nó là một bên râu nến (bóng nến) Cực dài và phân thân nến xíu xiu nam o mot đầu kia.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Mau nen Pin Bar manh price action" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Rau nen cang dai ap luc tu choi phi nguoc lai cang khung khiep.</figcaption>
</figure>

<p>Ý nghĩa đằng sau: Hình dung Phe Ban dang ép giá giam manh. Khi cham mot hỏ trợ Tinh, phe Mua thình lình tran ra giong nhung mui thuong day nguoc phe Ban lui the tham sat. Phan Rau nen giong ban chân dap dất vay. Ban hay canh mua sau khi cay nen do khep lai de tien huong dong song dao chieu.</p>

<h2 id="inside-bar">2. Nen Inside Bar: Ninja An Nấp Truoc Bao</h2>
<p>Inside Bar gom mot "Nen Me" (Mother Bar) la mot cay nen Khai mac kha to va mot "Nen con" (Inside Bar) nam lọt thom hoàn toàn trong khoảng High - Low cua nen me do.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Mau nen inside bar dang tich luy" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Anh Ninja dang ne minh doi ban lenh chi thi buoc di.</figcaption>
</figure>

<p>Hieu ngan gon, thi truong dang Tich Luy Nén. Niem tin giong chiec lo xo dang bi ep vao sat vach. KHi gia pha vo qua vung Đỉnh cua nến Mẹ hoac vung Đáy cua nền me, no se phong tuc voi toc do cuc nhanh. Nen Inside Bar hau nhu phat huy suc manh cao nhat de trade "Theo Xu Huong" (Trend Continuation).</p>

<h2 id="fakey">3. Mau Hinh Fakey: Phep Thuat Lua Măt Dam Dong</h2>
<p>Fakey chinh la biet danh cua "Inside Bar False Breakout" (Pha vo gia Inside bar). Voi dan nhin bieu do, Fakey la vu khi tri mang tao nen the luc SMC Stop Hunt.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="nen fakey la gi pha vo gia ban" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Nhieu nha dau tu lao vao ho bung va bi nuot mot luot.</figcaption>
</figure>

<p>Su doi lua dien ra khi gia thoat khoi Nen me Inside Bar va the hien mot cay nen pha vach huong Len. Moi nguoi ao ao lao vao Mua... nhung lap tuc Gia Vut Giam Nhanh tao Pin bar rut nguoc quay tro lai ben trong. Dam dong ban Mua vua bi Quet STOPLOSS thanh con moi thom mieng. Canh ban luon khi mo thay su dao nguoc kieu do.</p>

<h2 id="loi-khuyen">Loi Khuyen: Vi Sao Dung Hinh Xai Giong Vẫn Lo?</h2>
<p>Nung nan ma noi: Cac cay nen chi co gia tri Khi Trung Hop Tai Vung Khang Cu / Ho Tro (Hoac Key Level). Mot cay Pin bar dung giua dong khong manh dat ko co gia tri giao dich.</p>

<div class="faq-item" style="margin-bottom:20px; padding-top:20px;">
  <h3 style="font-size:17px;">Ba hinh the nen nay có tác dung tren Khung Timeframe nao?</h3>
  <p>Ly thuyet tren Timeframe nao cung dung. Nhung hieu qua thuc the phai la tu D1 hoac H4 tro len vi muc do Nhieu rat thap. Nhu cac "Ca Map" chi xuong tay sau khi du lieu the hien tren khoang thoi gian dai.</p>
</div>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">Bai Viet Lien Quan De Doc Them</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/price-action-hanh-dong-gia-co-ban">Nen tang ly thuyet chung ve trade Price Action thanh thoi.</a></li>
    <li><a href="/kien-thuc/lich-kinh-te-forex-cach-doc-tin">Luon quan tin khi giao dich, nhat la qua cac gio doc tin tuc non farm tui do hay ra Fakey do.</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Doi bai SanUyTin.net</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Hay in ba bieu do nen nay ra va dan truoc mat. Giao dich the tu nay la chi co di an cua tay to chu dung bi mat toi mat mien.</p>
  </div>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Ba mau nen price action xin nhat', scheduled_at: '2026-04-08T21:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? 'Loi: ' + error.message : 'Da cap nhat bai 20!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: '3 Mẫu Nến Price Action Kinh Điển Dân Chuyên Ít Phím Tán: Pin Bar, Inside Bar, Fakey',
    slug, excerpt: 'Nắm vững 3 mẫu hình nến Price Action quyền lực nhất giúp bạn độc chiếm tỷ lệ lợi nhuận cực lớn. Học cách giao dịch Pin Bar (Búa), Nén Inside Bar và bẫy Fakey đỉnh cao.',
    meta_title: '3 Mẫu Nến Price Action Kinh Điển: Pin Bar, Inside Bar, Fakey',
    meta_description: 'Top 3 mẫu hình nến Price Action đỉnh cao bạn không thể bỏ qua: Cách trade Pin Bar, Inside Bar phá vỡ và Fakey Breakout bẫy giá.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Nen pin bar fakey la gi price action',
    is_published: false, scheduled_at: '2026-04-08T21:30:00+07:00', published_at: null
  });
  console.log(error ? 'Loi: ' + error.message : 'Da them bai 20 vao DB!');
}
run();
