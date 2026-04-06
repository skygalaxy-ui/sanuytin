import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'margin-call-stop-out-la-gi';
const IMG = `/images/margin`;

const content = `
<h2>Tóm Tắt Nhanh</h2>
<p><strong>Margin Call</strong> la loi canh bao dong do "Het tien" tu san giao dich khi ban dang gan chay tai khoan. Con <strong>Stop Out</strong> la mưc an tu: San chu dong đong toan bo lenh cua ban de phu be tai khoan khong bi am tien. Chay tai khoan la hau qua cua viec vao Lot qua lon hoac gồng lo vo ky luat cung voi viec su dung Đòn Bẩy (Leverage) khong kiem soat.</p>

<h2>QuyTac 1: Margin Call - Tien Chuong Bao Tử Tu San</h2>
<p>Khi ban giao dich voi đòn bay (Leverage), ban chi can ki gui Mot Mon Tien Nho (Margin) de danh Mot Cai Lenh To. Nhung gia tien te chay theo huong nguoc lai khien Tai Khoan ban am vao gan het so tien Margin do.</p>
<p>Luc nay, san giao dich se gui loi Margin Call (Thương o muc 100% Margin Level). Man hinh cua pho nhom thuong hien mau Do hoac Vang canh bao ban.</p>

<figure>
  <img src="${IMG}_featured.png" alt="Margin call la gi trong forex" loading="lazy" />
  <figcaption>Tieng vong tu than - Loi keu goi nap them tien cang nhanh cang tot.</figcaption>
</figure>

<h2>QuyTac 2: Stop Out - Nhat Kiem Doat Mang</h2>
<p>Neu ban phớt lờ Margin Call, ko chịu dong bớt lệnh va cũng ko nạp thêm tiền, Lưỡi Hai Tử Thần se giang xuong. Ðo la luc Stop Out bi kịch kich hoat (Thuong o muc Margin Level < 50% hoac 20% tuy tieu chuan san).</p>

<figure>
  <img src="${IMG}_illu_2.png" alt="Stop out tu dong dong lenh" loading="lazy" />
  <figcaption>Thinh linh cat roi day cuu sinh, lenh giao dich buoc phai di vao cat bui!</figcaption>
</figure>
<p>San buoc phai dong ep het tat ca cac lenh đang lo cua ban tu Lớn den Nho de giu cho tai khoan cua ban khong bi Am xuyen tao no cho san. Day la "su chay tai khoan" huyen thoai ma ai no cung phai trai qua.</p>

<h2>Nguyen Nhan va Cach Chữa Cháy Tai Khoan?</h2>

<figure>
  <img src="${IMG}_illu_1.png" alt="Lam the nao de khong bi margin call" loading="lazy" />
  <figcaption>Lot qua lon se bop nat khoang an toan cua tai khoan mong manh.</figcaption>
</figure>

<ul>
  <li><strong>Nguyen nhan 1 loi Lot Size:</strong> Vao khoi luong Lot qua to so voi tai khoan. (Đanh 1 lot tren tai khoan 100$).</li>
  <li><strong>Nguyen nhan 2 khong Stoploss:</strong> Ban tin rang gia the nao cung quay tro lai, nen ban gỡ bo Stoploss đi.</li>
  <li><strong>Giai phap Ngan Chan:</strong></li>
</ul>

<figure>
  <img src="${IMG}_illu_3.png" alt="Xay dung tuong thanh quan ly von an toan" loading="lazy" />
  <figcaption>Kiem soat chat che chinh la viec ban xây dung phên đap chống sat lo cho nguon von.</figcaption>
</figure>

<p>De khong bi am anh boi Marginal Call: 1. Hay luon cai Dat Stoploss Cứng roi xó app. 2.Tinh toan Lot size hop ly de Stoploss ko am vượt qua 2% Tai khoan cua Ban!</p>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Margin Call la gi', scheduled_at: '2026-04-09T19:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? 'Loi: ' + error.message : 'Da cap nhat bai 24!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Margin Call và Stop Out Là Gì? Tại Sao Newbie Hay Bị Cháy Tài Khoản?',
    slug, excerpt: 'Ám ảnh lớn nhất của mọi Trader là cháy tài khoản. Bài này giải đáp tường tận Margin Call và Stop Out là gì, cách tính Margin Level để không bị sàn ép đóng lệnh.',
    meta_title: 'Margin Call Có Nghĩa Là Gì? Phân Biệt Với Stop Out Lập Tức',
    meta_description: 'Hiểu cặn kẽ ý nghĩa Margin Call và Stop Out để cứu vãn tài sản trước nguy cơ bị sàn giao dịch cưỡng chế bán sạch tài khoản.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Chay tai khoan Margin call stop out',
    is_published: false, scheduled_at: '2026-04-09T19:30:00+07:00', published_at: null
  });
  console.log(error ? 'Loi: ' + error.message : 'Da them bai 24 vao DB!');
}
run();
