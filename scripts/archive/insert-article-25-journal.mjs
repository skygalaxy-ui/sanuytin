import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'huong-dan-lap-nhat-ky-giao-dich-trading-journal';
const IMG = `/images/journal`;

const content = `
<h2>Tóm Tắt Nhanh</h2>
<p>Nguoi moi thuong giao dich theo cam tinh va nhanh chong quen di nhung lenh thua tui ho. <strong>Trading Journal (Nhat ky giao dich)</strong> chinh la chiec guong chieu yeu giup ban nhin ro vao nhung that bai va thanh cong cua ban than. Ghi chep lai tat ca cac lenh (Ly do vao, Diem vao, Cam xuc, Loi nhuan) bang Excel hay so tay la cach duy nhat đe ban han che lap lai nhung sai lam ngo ngan và nang cao ty le thang.</p>

<figure>
  <img src="${IMG}_featured.png" alt="Nhat ky giao dich trading journal la gi" loading="lazy" />
  <figcaption>Nhẹ nhang va cham rai phan tich tung sai lam đe gọt giũa ky nang.</figcaption>
</figure>

<h2>1. Tại Sao Giao Dich Khong Ghi Chep Lai La Tu Sat?</h2>
<p>Khong ai the nho duoc minh da vao lenh gi tuan truoc hoac ly do "tai sao hom qua lai ban Vang". Giao dich ma khong có ghi chep giong nhu ban đang phuong huong chay nhung ko biet chay ve muc tieu nao.</p>

<figure>
  <img src="${IMG}_illu_1.png" alt="Khong ghi chep nhat ky trader se lam vao hoang loan" loading="lazy" />
  <figcaption>Cam giac tuyet vong va mat dinh huong khi ban lien tuc thay tai khoan hao hut ma ko rő nguyen nhan!</figcaption>
</figure>
<p>Hau qua cua viec nay la ban se chi biet thay tai khoan tu do am xuong nhung khong the tim ra lo hong de va. Ban thay minh sai, nhung ko biet chua o đâu. Ban khong co so lieu de thong ke chien luoc cua minh dang hieu qua o buoc nao.</p>

<h2>2. Trading Journal: Nguoi Thay Khac Nghiet Nhat</h2>
<p>Ban co the noi doi voi vo, noi doi bo me la ban đang xai tien đe đau tu, nhung Nhat ky giao dich se bat ban phai thang than doi dien su that. Do la Bang Chung Thép!</p>

<figure>
  <img src="${IMG}_illu_2.png" alt="Phan tich nhat ky giao dich de rut ra kinh nghiem" loading="lazy" />
  <figcaption>Cuoi tuan ngoi lai va dong vai tham tu... soi vao nhung ly do minh vao lenh truoc do.</figcaption>
</figure>

<p>Moi dịp cuoi tuan, ban kiem tra lai quyen so / file excel và giat minh nhan ra:</p>
<ul>
  <li>Co toi 60% so lenh bi căt lỗ thuoc ve "Lenh mua đap tra tu phia sau do phuc thu thi truong".</li>
  <li>Chien luoc Vao lenh theo Breakout co ty le dung len toi 75% trong tuan truoc -> Can tang cuong su dung.</li>
  <li>Nhung lenh bi that bai nang nề nhat thuong xay ra vao Thu 6.</li>
</ul>

<h2>3. Cach Tao MOT File Excel Nhat Ky Chuan Moi Thoi Dai</h2>
<p>De bat đau, ban chi can mo Google Sheets hay Microsoft Excel va tạo ra các cột cốt lõi sau, khong can mat thoi gian ve voi phuc tap:</p>
<ul>
  <li><strong>Ngay / Thang / Gio:</strong> Thoi diem chi tiet vao lenh đe thong ke khung gio hieu qua.</li>
  <li><strong>Cap Tien Te:</strong> XAUUSD, EURUSD...</li>
  <li><strong>Loai Lenh:</strong> BUY hay SELL, kieu vao lenh la Market hay Limit.</li>
  <li><strong>Ly do vao lenh:</strong> Cuc ky quan trong! (VD: Mua Vang do thay tìn hieu Pinbar chạm vao vung khang cu quan trong, Hoac do Nhom Telegram phím lenh).</li>
  <li><strong>Diem vao, SL, TP:</strong> Thong tin muc gia ban đã chọn.</li>
  <li><strong>Ket qua P/L (Profit/Loss):</strong> Tinh theo R (VD: +2R hay -1R) đe dễ thong ke hieu qua quan tri von.</li>
  <li><strong>Cam Xuc luc vao, giu và đong lenh:</strong> Hoi hop, Binh Thuong, Run rẩy, Thay hoi Ngu ngốc...</li>
  <li><strong>Bai hoc Nhan Rat:</strong> Dung day SL som ghe... lan sau phai giong...</li>
</ul>

<figure>
  <img src="${IMG}_illu_3.png" alt="Ky luat trading journal hieu qua thong ke" loading="lazy" />
  <figcaption>Tu tin vung chai khi ban da co mot ban tong ho so ngam va ky luat sat đa!</figcaption>
</figure>

<h2>Loi Ket</h2>
<p>Viec ghi chep lai có the khien ban cam thay vo cung xau ho moi khi nhin vao nhung lenh chay tui do long tham. Tuy nhien đo la buoc đâu tien de dot xac ky nang và lot xac tro thanh mot Trader ky luat co ty le chien thang on đinh duong dai!</p>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Lap nhat ky giao dich trading journal', scheduled_at: '2026-04-09T21:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? 'Loi: ' + error.message : 'Da cap nhat bai 25!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Hướng Dẫn Lập Nhật Ký Giao Dịch (Trading Journal) Bằng Excel Để Thành Công',
    slug, excerpt: 'Một Trading Journal đầy đủ giúp bạn phân tích sai lầm, kiếm soát tâm lý FOMO và thống kê tỷ suất chiến thắng hiệu quả sau mỗi tuần giao dịch.',
    meta_title: 'Nhật Ký Giao Dịch: Lập Trading Journal Bằng Excel Chuẩn',
    meta_description: 'Hiểu rõ tại sao 90% nhà đầu tư thành công đều sử dụng Nhật Ký Giao Dịch (Trading Journal). Tải ngay mẫu ghi chép Excel xịn xò để quản trị vốn.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Mau file excel nhat ky giao dich',
    is_published: false, scheduled_at: '2026-04-09T21:30:00+07:00', published_at: null
  });
  console.log(error ? 'Loi: ' + error.message : 'Da them bai 25 vao DB!');
}
run();
