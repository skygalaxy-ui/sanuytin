import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'trailing-drawdown-la-gi-cach-tinh-sut-giam-quy';
const IMG = `/images/${slug}`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">Tom Tat Nhanh</p>
  <p><strong>Trailing Drawdown (Sut giam truot)</strong> la loai luat khac nhiet nhat cua cac Quy Prop Firm. Thay vi moc lo toi da duoc co dinh o so von ban dau, Trailing Drawdown se "truot" (tang len) theo muc Loi nhuan cao nhat ma ban tung dat duoc. Nghi la ban an duoc tien roi, nhung neu bi thua lai dung cai muc loi nhuan do tru di khoang Drawdown cho phep, ban se mat tai khoan ngay lap tuc.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">Trong Bai Viet Nay</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#tong-quan">Drawdown la gi ma Trader so den vay?</a></li>
    <li><a href="#tinh-vs-truot">So sanh Drawdown Tinh va Drawdown Truot</a></li>
    <li><a href="#cai-bay">Cai bay "Giu lenh Thang thanh Hoi von"</a></li>
    <li><a href="#cach-ne">Kinh nghiem song xot ne Trailing Drawdown</a></li>
    <li><a href="#faq">Cau Hoi Thuong Gap (FAQ)</a></li>
  </ol>
</nav>

<h2 id="tong-quan">Drawdown La Gi Ma Khien Trader Suy Sup?</h2>
<p>Khi giao dich, se co nhung luc gia di nguoc huong vao vung thua lo (Am trang thai) truoc khi bat tang tro lai de cham muc Take Profit. Quy trinh bi am tien tam thoi hoac mat loi nhuan do goi la Drawdown (Sut Giam).</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_featured.png" alt="Trailing drawdown la gi sut giam tai khoan quy" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Soi day thong long vo hinh buoc chan nha giao dich, no keo cai ket chet choc ban sat sau lung ho.</figcaption>
</figure>

<p>De bao ve kho bac cua minh, Quý cap von khong cho phep ban am qua mot gioi han quy dinh. Voi max Drawdown 10% tren tai khoan $100.000, neu ban am -$10.000 la bi tich thu xoa tai khoan. Nhung ac mong thuc su nam o chu "Trailing" (Truot).</p>

<h2 id="tinh-vs-truot">Su Khac Biet Giua Drawdown Tinh (Static) va Drawdown Truot (Trailing)</h2>
<p>Hay cung phan tich mot vi du sinh dong de ban thay do tham doc cua no.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Luat sut giam tai khoan Max Drawdown that bai" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Ban dang vui vi an duoc 8.000 do la ma chi giam lai 1 ti la bi quet mat account.</figcaption>
</figure>

<ul>
  <li><strong>Drawdown Tinh (Nhu tai quy FTMO):</strong> Múc chet cua ban bi khoa cung o $90.000. Ban danh lai len $110.000, roi xui xeo thua lai roi xuong $95.000. Ban van chua sao ca.</li>
  <li><strong>Trailing Drawdown (Nhu tai cac quy 1-Step):</strong> Muc chet ban dau la $90.000. Ban danh Loi nhuan (Equity) len duoc $105.000. Soi day thong long duoc quy tich cuc keo len 10% tinh tu dinh DO. Muc chet moi bay gio la $105.000 - $10.000 = $95.000!</li>
</ul>
<p>Ban thay chu? Ban vua kiem duoc $5.000 bo tui, nhung ban lo thua lai $10.000 tra lai cho thi truong. Voi Max Drawdown Truot, BAN DA BI TICH THU TAI KHOAN mac du Base Balance cua ban van dang o muc $95.000 (Tuc la ban chua xam pham mot dong tien goc nao cua Quy).</p>

<h2 id="cai-bay">Cai Bay Chet Nguoi: Giong Lai Thanh Lo</h2>
<p>Van de tiep theo rat da man cua Trailing nam o viec no tinh theo <strong>Equity (Trang thai hien tai cua lenh)</strong> hay hay la <strong>Balance (Trang thai luc ban da dong lenh)</strong>.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Trailing muc sụt giam equity vs balance" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Truot Equity tuc la muc dung lo loi keo theo bong nen xanh cao nhat chua chot.</figcaption>
</figure>

<p>Rat nhieu quy rác tinh Trailing theo Equity. Nghia la ban vao lenh, gia bay vut len loi $6.000, nhung ban chua the Chot loi (Chua bam nut Close) vi ky vong an $10.000. Thay vao do, gia quay dau roi tu do roi xuong lam ban hoa von ($0).</p>
<p>Ngay trong ngay hom do, Quy vo tinh tinh toan "Dinh diem Equity" la $106.000. Suy ra muc Drawdown Mới la $96.000. Do lenh rot xuong hoa von, Balance ban dang la $100.000. Vay la ban chi con dung $4.000 de thở trước khi tài khoản bị khóa!</p>

<h2 id="cach-ne">Kinh Nghiem Xương Máu: Lam Sao De Song Thot Voi Trailing EOD</h2>
<p>Bat buoc phai chon nhung hang Quý uy tin (nhu FundedNext) voi model Trailing EOD (End of Day) tuc la chi truot theo Balance cuoi ngay.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="Bao ve loi nhuan chong drawdown khi thi quy" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Keo Stop Loss Duong (SL Duong) ngay khi co loi nhuan de chan do doc khong bi thu hoi.</figcaption>
</figure>

<p>Bi kíp de sinh tu an toan khi gap loai luat nay:</p>
<ul>
  <li><strong>Khong The Giong Loi Dai:</strong> Neu ban gap luat Trailing Equity, tuyet doi khong danh Swing (Giu lenh qua dem). Co lai la phai Chot ngay lap tuc roi mo lai lenh sau. Khoá lai nhuan vao Balance.</li>
  <li><strong>Doi SL ve Entry (Hoa Von):</strong> Dat Stop Loss Ve Muc Gia Vao Lenh ngay va luon khi gia chay xanh duoc khoang 20-30 Pip. Ban se an toan khong lo bi quet Max Draw down khi lenh giat nguoc.</li>
</ul>

<h2 id="faq">Cau Hoi Thuong Gap (FAQ)</h2>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Quy mac dinh ghi chu la EOD Drawdown nghia la gi?</h3>
  <p>EOD viet tat cua End Of Day. Rat co loi cho Trader - nghia la muc sụt giam truot nay no chi xac nhan Tinh vao luc 00:00 (Dong nen Ngay). Nhung dao dong cuc do ban ngay cua ban se khong bi ghi nhan lam day mốc chết lên cao. Lua chon so 1 neu phai thi quy 1-Step mua re.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Neu tai khoan toi dat $110.000 (Vuot 10%) thi Trailing co bi truot keo len hoai khong?</h3>
  <p>Khong. Hau het cac quy khi mua goi EOD Trailing ho co luat "HWM locked at starting balance". Muc chet se keo dan len nhung se DUNG LAI VIEN VIEN khi cham vao muc $100.000 ban dau. Tu do tro di, ban trade thoai mai giong y het nhu tai khoan FTMO Static thua tha mien sao dung vi pham quy tac trong ngay.</p>
</div>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">Bai Viet Lien Quan De Doc Them</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/review-quy-fundednext-funding-pips">Giai ma suc hut cac quy ap dung 1-Step Trailing rui ro cao</a></li>
    <li><a href="/kien-thuc/truot-gia-slippage-la-gi">Neu Slippage truot nen gap max drawdown, ban nghi doi loi thuoc ve ai?</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Doi bai SanUyTin.net</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Hay doc that ki file FAQ The Le Toan Tap tren giao dien Dashboard tung quy de bao ve so tien thi cua chinh ban tren hanh trinh Prop Firm.</p>
  </div>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Trailing drawdown quy cap von', scheduled_at: '2026-04-07T19:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? 'Loi: ' + error.message : 'Da cap nhat bai 14!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Trailing Drawdown Quỹ Cấp Vốn Là Gì? Cạm Bẫy Ép Cháy Tài Khoản',
    slug, excerpt: 'Giải thích dễ hiểu luật sụt giảm trượt (Trailing Drawdown) ép chết hàng vạn trader quỹ mỗi ngày. So sánh Drawdown theo Equity và Balance cuối ngày (EOD).',
    meta_title: 'Trailing Drawdown Quỹ Cấp Vốn Là Gi? Sụt Giảm Trượt',
    meta_description: 'Hiểu rõ khái niệm sụt giảm Trailing Drawdown để không bao giờ bị trượt oan tài khoản thi quỹ Prop Firm. Mẹo giữ lệnh và chốt lời an toàn chống sụt phím.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Drawdown Truot Sut Giam Quy Cap Von',
    is_published: false, scheduled_at: '2026-04-07T19:30:00+07:00', published_at: null
  });
  console.log(error ? 'Loi: ' + error.message : 'Da them bai 14 "Trailing Drawdown" vao DB!');
}
run();
