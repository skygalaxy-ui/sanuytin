import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'liquidity-thanh-khoan-la-gi-bay-gia-smc';
const IMG = `/images/liquidity`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">TOM TAT NHANH</p>
  <p>Liquidity (Thanh khoan) thuc chat la tien - Noi tap trung cac lenh Cho (Limit) va lenh Dung lo (Stoploss) cua Dam dong. Market Makers thao tung gia quet qua cac vung nay de hut nhien lieu truoc khi day trend chinh. De khong tro thanh "mom moi", ban phai tu duy nguoc: Vung dao chieu qua dep cho nhieu nguoi thay - do chinh la cai bay cua SMC (Liquidity Pool).</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">Trong Bai Viet Nay</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#thanh-khoan-la-gi">Goc Nhin SMC: Thanh Khoan La Gi ma Ca Map thuong the?</a></li>
    <li><a href="#3-dang-thanh-khoan">3 Loai Bay Thanh Khoan pho bien nhat Forex</a></li>
    <li><a href="#inducement">Inducement (IDM): Moi cau Ca Map vut tiep tiep</a></li>
    <li><a href="#cach-ne-bay">Cach "nup bong" ne Stop Hunt thoat Chet</a></li>
  </ol>
</nav>

<h2 id="thanh-khoan-la-gi">Thanh Khoan La Gi Ma Ca Map Thuong The?</h2>
<p>Khai niem Thanh Khoan trong tai chinh truyen thong y chi toc do mua ban cua 1 tai san thuan tuy. Nhan trong he sinh thai Smart Money Concept, hieu ngam no la <strong>"Lenh Dung lo cua ban la Lenh Vao cua Tay To"</strong>.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_featured.png" alt="Liquidity bay thanh khoan forex la gi" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Ho sau "nuot chung" so tien tu nhung nha dau tu qua vao le.</figcaption>
</figure>

<p>De Mua mot luong ngoai te cuc ky khong lo (Vai ty Do La), cac Big Boys khong the don gian nhan nut Mua The La Xong, vi se truot gia rat tham cho chinh ho. Thay vao do, ho tao ra cam ky su so hai dang sau cac bay khien ban "Ban" ra. Khi ban Ban, ho gom vao. So diem tap trung Lenh Stoploss cua nho le goi la <em>Liquidity Pool (Be Thanh Khoan)</em>.</p>

<h2 id="3-dang-thanh-khoan">3 Loai Bay Thanh Khoan Tieu Bieu</h2>
<p>Ban co thay cu de SL tren Dinh / Day cu la hay bi quet den cham roi chay dung huong ko? Day la nguyen nhan:</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="May hut thanh khoan SMC lay nhien lieu" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Hut cang nhieu tien cua F0, chiec xe day xu huong cang chay xuyen khoe hon.</figcaption>
</figure>

<ul style="line-height:2;">
  <li><strong>Equal Highs / Equal Lows (EQH/EQL):</strong> Tuong tuong nhieu Nho le thay 2 cai dinh tao ra 1 vung Dao chieu cuc tot. Ho danh xuong va dat SL ngay tren 2 dinh khang cu do. BOOOM! Ca map biet thua! Day la vung Liquidity beo bo nhat de Ca map day gia nhich qua Quet Toan Bo Stoploss roi moi tiep tuc Giam.</li>
  <li><strong>Trendline Liquidity (Thanh Khoan Kenh Gia):</strong> Duong xien xien duoc bat len bot xuong cham ngon. Qua nhieu nguoi dat SL duoi canh duong Trendline la thuc an.</li>
  <li><strong>Session Liquidity (Thanh khoan phien Ao/Au):</strong> Đinh đay cua phien A (Asian High/Low) rat hay bi Phien Au/My hoac ban dem quet qua lan trọn nhat kiêm loi.</li>
</ul>

<h2 id="inducement">Inducement (IDM): Moi Cau Ca Map</h2>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Inducement mồi nhử thanh khoản stop hunt SMC" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Ban tuong that da bat vao con song an toan? Thu thuc ban chi nam tren luoi cau.</figcaption>
</figure>
<p>Inducement duoc dich la "Moi Nhu". Do la khi gia tao mot vung Dao Chieu <em>(Pullback)</em> som truoc khi cham vao OB thuc su. Ai nong ruot se lao vao mua som, dat SL ben duoi Inducement. Tat nhien nhung ke vao som nay phai chet the hien thi truong sap rut rau tai OB hang that. Su khac biet cua Mot OB xin va dom (Nhieu bay) nam o cai IDM nay.</p>

<h2 id="cach-ne-bay">Cach "Nup Bong" Thong Minh De Toa Sang Chieu Thu</h2>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Cho doi quet thanh khoan sweep liquidity SMC" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Smart trader ngoi yen khi thi truong dang nuot trọn nhau, sau moi binh yen ra tay.</figcaption>
</figure>
<p>Loi khuyen dat gia nhat: <strong>Neu ban khong the nhin thay Liquidity tren bieu do, chuc mung ban - Ban chinh la con Liquidity do.</strong></p>
<p>Cach ne rat don gian: Khong bao gio danh theo bat ky Dinh/Day nao QUÁ ro rang ve mat Khang Cu - Ho Tro. Hay doi gia Pha (Sweep) nhung muc quan trong do, dong nen thao FVG/Rau nen dai (No da "an" xong Liquidity), luc nay ta moi vao lenh theo song. "Sweep and Reverse" chinh la ngon ngu tuyet mang cua vu tru.</p>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">Bai Viet Lien Quan De Doc Them</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/order-block-ob-la-gi-cach-tim-ca-map">OB la gi ma ho dung de an chung day thanh khoan?</a></li>
    <li><a href="/kien-thuc/quy-cap-von-forex-prop-firm-la-gi">Vi sao trader lai thich pass quy bang SMC?</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Doi bai SanUyTin.net</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Bat bat thu thanh khoan rat dau kho. Vi the chi nen di vao thi truong khi hieu "Tay to da mo duoc gi, va ai sap la ke chiu tran".</p>
  </div>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Liquidity SMC la gi bay gia', scheduled_at: '2026-04-08T15:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? 'Loi: ' + error.message : 'Da cap nhat bai 18!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Liquidity (Thanh Khoản) Là Gì? Cách Tránh Bẫy Của Market Maker',
    slug, excerpt: 'Bạn hay bị quét Stoploss (cắt lỗ) rồi giá quay ngược lại đúng hướng? Đó là do Market Maker đã gom điểm Thanh khoản (Liquidity) của bạn.',
    meta_title: 'Liquidity (Thanh Khoản) Là Gì? Đọc Bẫy Giá Trong SMC',
    meta_description: 'Liquidity là gì trong SMC Forex? Tìm hiểu các loại Liquidity, hiện tượng quét thanh khoản và cách Trader né bẫy giá của cá mập săn mồi.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Liquidity Forex Thanh Khoan Boi Bay',
    is_published: false, scheduled_at: '2026-04-08T15:30:00+07:00', published_at: null
  });
  console.log(error ? 'Loi: ' + error.message : 'Da them bai 18 vao DB!');
}
run();
