import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'phuong-phap-smc-smart-money-concept-la-gi';
const IMG = `/images/smc`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">TOM TAT NHANH</p>
  <p>SMC (Smart Money Concept) khong phai la phep mau. Day la phuong phap doc vi bieu do dua tren hanh vi cua Big Boys (Cac to chuc lon, Ngan hang trung uong). Ban se hoc cach nhin thay tin hieu gia dang bi gom hoac bi thao tung (Liquidity), xac dinh vung hoat dong cua ca map (Order Block) de di theo xu huong thay vi tro thanh thanh khoan cho ho quet Stoploss.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">Trong Bai Viet Nay</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#smc-la-gi">Khai Niem: SMC la gi? Ca Map lam the nao?</a></li>
    <li><a href="#thanh-khoan">Thanh khoan (Liquidity): Bay cua Big Boy</a></li>
    <li><a href="#dau-chan">Dau Chan: Bo, ghenh, hoac Order Block</a></li>
    <li><a href="#cuoi-song">Cuoi Song: Cach trader ca nhan nup bong SMC</a></li>
    <li><a href="#u-nhuoc">Uu va Nhuoc Diem</a></li>
  </ol>
</nav>

<h2 id="smc-la-gi">Khai Niem: Phuong Phap SMC La Gi?</h2>
<p>Thi truong Forex tri gia hon 7 nghin ty USD moi ngay va no khong duoc dieu khien boi nhung trader le nhu chung ta. No duoc dan dat boi "Smart Money" - Dong tien thong minh tu Market Makers (Tap doan tao lap) va cac dinh che lon.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_featured.png" alt="Phuong phap smc smart money concept la gi" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Tay to tao lap luon biet ro ho can day gia den dau tren ban co.</figcaption>
</figure>

<p>Phuong phap tao nen khai niem SMC chu yeu tap trung vao viec tim hieu cau truc ban chat de giai ma net bieu do dang nam. Thay vi dung muc khang cu va ho tro don gian xac suat rui ro, muc dich cua SMC la tim "Nguyen nhan" bam theo dau vet "Hau qua".</p>

<h2 id="thanh-khoan">Khac Biet Cau Truc: Bay Thanh Khoan (Liquidity Pools)</h2>
<p>Ban co bao gio thay gia vua cham chot dung cham diem ban dat Stoploss, xong no lap tuc quay ngoat dau di dung huong du kien khong? Vay la mang luoi Big boys da hoanthanh nhiem vu quet cua minh. Do goi la Liquidity Hunt (San thanh khoan).</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Bay thanh khoan liquidity pool smc" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Nhung vung tich luy khien nhieu chu ca mac kim chinh la vi tri ho quet manh nhat.</figcaption>
</figure>

<p>Thi truong can nhien lieu (Orders) de hoat dong. Khi Big boys muon Mua voi khoi luong cuc khung, ho khong the cu the Mua vi se het hang. Ho phai day gia xuong muc ho tro tam ly noi toan bo Nho le (Retail traders) hoang loan the Dat Stoploss hoac vao lenh Ban Khong. Roi ho tham lang vot het Dong Thanh Khoan do de tao day chu V.</p>

<h2 id="dau-chan">Dau Chan: Vung Khang Cu Goc Order Block (OB)</h2>
<p>Sau khi quet ngap thanh khoan, Ca Map se de lai mot lo hong ve Khoi luong cuc ky de phat hien goi la Imbalance (Mat can bang) va vung cuoi cung bat dau vu tang hay giam do chinh la Order Block.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Dau chan ca map order block thi truong" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Su dung bieu do de mo xet lo trinh tung dau the hien Imbalance xuyen thau.</figcaption>
</figure>

<p>Noi de hieu, Order Block la cay nen ban / mua cuoi cung truoc khi thi truong co nhung cay nen chay dai va rat tieu cuc voi thien ma do thieu hụt tinh chat nguoc lai. Theo dao ly cua SMC, gia som hay muon cung phai tro ve "Don" nhung menh lenh goc chua hoan thanh o cai Order block do.</p>

<h2 id="cuoi-song">Hanh Truong: Cach Cưỡi Sóng SMC</h2>
<p>SMC la mon qua doi voi nguoi ky luat. Ban khong danh tu do giua duong.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="Cuoi song trade kho thuan xu huong smc" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Cho doi va nup bong de dong hanh tiep sau dong tien thong minh.</figcaption>
</figure>

<p>Trinh tu cuThe bao gom: Quan sat Market Structure (Cau truc thi truong) de kiem tra gia dang tang hay giam -> Tim vung bay Liquidity de de chung -> Doi gia rut den muc Order Block vung ban dau -> Dat hanh dong tai POI (Point of Interest) voi muc ty le cat lo sieu nho.</p>

<h2 id="u-nhuoc">Uu va Nhuoc Diem</h2>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Uu Diem cua SMC</h3>
  <p>Cho ti le win va R:R tuyet voi. Stoploss cua ban co the chi 2-5 pip nhung muc cho loi tuong duong len den 20-50 pip (Ty le R:R rat cao 1:10 hoac hon).</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Nhuoc Diem</h3>
  <p>Can qua nhieu kien thuc tong hop. Bieu do de bi nhin ao giac (Tim dau cung thay OB), co the bo lo lenh nhieu ngay troi vi gia kho khop vao dung vung cho doi cua ban.</p>
</div>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">Bai Viet Lien Quan De Doc Them</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/quy-cap-von-forex-prop-firm-la-gi">Quy Prop Firm: San choi moi de luyen ky nang?</a></li>
    <li><a href="/kien-thuc/ trailing-drawdown-la-gi-cach-tinh-sut-giam-quy">Rui ro trailing drawdown khi nuoi lenh lẹ.</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Doi bai SanUyTin.net</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Hay vung tin. Khong the hieu SMC ngay lap tuc sau 1 dem duoc. Luyen tap nhin bieu do Backtest la cach duy nhat.</p>
  </div>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Phuong phap smc la gi', scheduled_at: '2026-04-08T08:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? 'Loi: ' + error.message : 'Da cap nhat bai 16!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Phương Pháp SMC (Smart Money Concept) Là Gì? Hướng Dẫn A-Z',
    slug, excerpt: 'Giải mã khái niệm SMC đỉnh cao giúp bạn bắt trọn nhịp sống của các Big Boys giao dịch ngàn tỷ nhằm ăn lãi theo sóng.',
    meta_title: 'SMC Là Gì? Phương Pháp Giao Dịch Smart Money Concept',
    meta_description: 'Phương pháp SMC là gì? Tại sao nhiều trader theo hệ tư tưởng này? Cách đọc thanh khoản (Liquidity) và nhận diện Order Block để trade cùng bầy cá mập.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'sMC la gi forex',
    is_published: false, scheduled_at: '2026-04-08T08:30:00+07:00', published_at: null
  });
  console.log(error ? 'Loi: ' + error.message : 'Da them bai 16 vao DB!');
}
run();
