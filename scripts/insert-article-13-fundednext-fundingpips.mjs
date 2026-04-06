import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'review-quy-fundednext-funding-pips';
const IMG = `/images/${slug}`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">Tom Tat Nhanh</p>
  <p>Cung cap <strong>gia ve cuc re</strong> (chi tu vai chuc do la) va vong thi <strong>1 buoc (1-Step)</strong> dang la the manh tuyet doi cua FundedNext va Funding Pips so voi cac ong lon truyen thong. Tuy nhien, luat Tinh Drawdown (sut giam) cua ho doi khi rat khat khe, va hien tuong truot gia (Slippage) tren server van hay xay ra khien nhieu Trader buc xuc.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">Trong Bai Viet Nay</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#loi-the">Loi the tuyet doi: Thi 1 vong va gia re</a></li>
    <li><a href="#fundednext">Review chi tiet FundedNext</a></li>
    <li><a href="#funding-pips">Review chi tiet Funding Pips</a></li>
    <li><a href="#nhuoc-diem">Goc khuat: Server Lag va Slippage</a></li>
    <li><a href="#faq">Cau Hoi Thuong Gap (FAQ)</a></li>
  </ol>
</nav>

<h2 id="loi-the">Loi the tuyet doi: Gia re va Thi 1 Vong (1-Step Challenge)</h2>
<p>Diem giong nhau lon nhat giua FundedNext va Funding Pips khien cong dong ao ao do vao dang ki la Model 1-Step. Neu nhu cac quy truyen thong yau cau ban phai tray da troc vay thi 2 vong (an 10% xong rui an tiep 5%), thi tai day ban chi can hoan thanh DUNG 1 VONG DUY NHAT.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_featured.png" alt="Review quy cap von FundedNext va Funding Pips" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Cuoc cham tran giua hai sieu sao moi noi trong lang Prop Firm the gioi.</figcaption>
</figure>

<p>Vi du, ban chi can danh qua moc Loi nhuan (Profit Target) la 10%, ngay lap tuc ban pass quy ma khong can thi vong 2. Dieu nay ruot ngan cuoc phieu luu va tiet kiem the luc cho Trader rat nhieu.</p>

<h2 id="fundednext">Review Chi Tiet FundedNext: O vua marketing va cham soc khach hang</h2>
<p>FundedNext co the coi la theluc marketing manh nhat thi truong hien tai voi cac chuong trinh dua top mang quy kim cuong.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Do challenge 1 vong voi quy FundedNext" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Vong thi 1 buoc (1-step evaluation) ngan gon giup trader thoai mai ve mat tam ly.</figcaption>
</figure>

<ul>
  <li><strong>Diem Cong:</strong> Hien tai FundedNext dang co chinh sach tang them hoa hong (Payout) 15% loi nhuan ngay ca trong giai doan ban dang thi DEMO. Co nghia la ban chua can do LIVE, chi can ban thi xong co lai la ban da duoc thuong an ui roi.</li>
  <li><strong>Diem uong:</strong> Trailing Drawdown de cap trong the loai thi 1 vong cua ho rat ac mong. Mien la ban dung lenh, tien loi nhuan tang len, moc tu dong chet (Max Drawdown) cung truot len theo. Ban thang rui ban bi hui lai - vao diem Daily Loss la mat tai khoan ngay lap tuc.</li>
</ul>

<h2 id="funding-pips">Review Chi Tiet Funding Pips: Quy tu than cua cac Scalper</h2>
<p>Trai nguoc voi FundedNext phai chi rat nhieu tien vao marketing, Funding Pips noi len nho truyen mieng tu cac cong dong giao dich hieu suat cao nho spread cuc mong.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Thoi gian rut tien payout cua Funding Pips" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Uu diem noi bat cua Funding Pips la giup trader nhan Payout nhanh cuc doc chi sau 5 ngay.</figcaption>
</figure>

<ul>
  <li><strong>Diem Cong:</strong> Thanh toan sieu nhe sieu toc. Funding Pips cap cho nguoi thi dau co che chu ky Payout moi 5 Ngay! Day la mot su dot pha so voi nguyen tac cho doi ca thang cua cac the loai cu. Thu hai, gia ve vao cua ho thuc su re (tai khoan 5.000 do chi ton vai to xan).</li>
  <li><strong>Diem uong:</strong> De ho tro Payout nhanh, the le cam giu lenh qua tuan cua ho cuc ky gat gao. Vi the quy nay thiet ke dac tri cho dan thich lanh nhanh danh nhanh, chot deal cuoi ngay kieu Day Trading.</li>
</ul>

<h2 id="nhuoc-diem">Goc Khuat: Server Lag va Hien Tuong Slippage</h2>
<p>Tai sao ho re hon nhieu nhung chua the lật do duoc chiec cup cua FTMO? Cau tra loi nam o chat luong duong truyen thanh khoan thuc thi.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="Loi sever truot gia slippage khi thi quy" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Hien tuong nghen mang dan toi Slippage la noi am anh chet nguoi luc ra Tin Tuc manh.</figcaption>
</figure>

<p>Dong nguoi thi vao qua dong dan den viec the he server nen tang giao dich MetaTrader cua FundedNext bi qua tai thoi gian gan day. Hang ngan loi than phien cua Trader ve viec luc ra Tin (News Release), gia bi truoi di hang chuc Pips.</p>
<p>Ban cai Stop Loss de khong vi pham muc 5% thua lo trong ngay. Gia Quet tin bay xuyen qua Stoploss khong khop, khop muc te hon cach xa 30 Pip. Ban chay tai khoan vi li do tu tren troi roi xuong. Day la rui ro cong nghe ma ban buoc phai ban lanh chap nhan khi da mua ve gia khuyen mai tai day.</p>

<div style="background:#fef3c7; border-left:4px solid #f59e0b; padding:16px 20px; border-radius:8px; margin:20px 0;">
  <p style="font-weight:700; margin-bottom:4px;">Loi Khuyen Ve Rung</p>
  <p>Dung dua het trung vao 1 ro. Neu vao Tin Cuc Manh (CPI / NFP), tot nhat hay tat may, hoac giam Volume di lai lam 3 lan khi giao dich tren cac quy nay de tranh rui ro chay tai khoan oan uong vi truot gia nhe.</p>
</div>

<h2 id="faq">Cau Hoi Thuong Gap (FAQ)</h2>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Toi chi co 1 trieu VND (40$) co thi quy FundedNext / Funding pips duoc khong?</h3>
  <p>Hoan toan duoc! Day la loi the cua Funding Pips. Voi khoang 32$, ban da co the mua acc thi thu thach $5,000. Rat rat phu hop cho hoc sinh, sinh vien it von bat dau mon nay.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Cac the loai quy nay co phai la da cap Ponzi Scam?</h3>
  <p>Moi hoat dong la dua ban tai khoan DEMO. Tien tra cho ban la tien tu ho tu xuat hoac tu thu viec ban data luong dong thoi mua ve rot. Nho rang ho KHONG THE KEO Ban vao goi dau tu sinh lai. Day la cuoc thi ki nang, viec ho scam ban tu tuong hay khong phu thuoc vao viec ho co chi tra tien sau khi ban do 100% hay khong. Ca FundedNext va Funding Pips van dang Payout tien am am nen chua bi ghi nhan la Scam (tinh den bai viet nay 2026).</p>
</div>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">Bai Viet Lien Quan Ve Thi Quy</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/quy-cap-von-forex-prop-firm-la-gi">Tim Hieu Nen Tang: Quy Cap Von Hoat Dong Ra Sao?</a></li>
    <li><a href="/kien-thuc/review-quy-ftmo-luat-thi-nap-rut">Review FTMO the King: Dong Tien Lon Thi Lay Uy Tin</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Doi bai SanUyTin.net</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Cac bai danh gia chi mang tinh mo ta dac vu cua thi truong tai tung thoi diem. Tuyet doi quan tri von that chat va chi trade so tien minh chap nhan mat duoc tu tien ca nhat.</p>
  </div>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Review dánh giá quỹ FundedNext và Funding Pips', scheduled_at: '2026-04-07T15:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? 'Lỗi: ' + error.message : 'Dã cập nhật thành công bài 13!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Review Đánh Giá Quỹ FundedNext và Funding Pips (2026)',
    slug, excerpt: 'Phân tích điểm mạnh yếu của 2 quỹ Top đỉnh cấp vốn một vòng: FundedNext & Funding Pips. Bóc phốt các lỗi trượt giá lag server khi thi tài khoản.',
    meta_title: 'Đánh Giá FundedNext & Funding Pips: Pass Cứ Cực Dễ Hay Rủi Ro Khó Nhằn?',
    meta_description: 'Nên chọn thi quỹ FundedNext hay mua vé rẻ của Funding Pips? Cẩm nang luật thi quỹ tỷ lệ 1 bước 1-Step, đánh giá Drawdown dính lỗi slippage và Payout nhanh chóng.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Review FundedNext Funding Pips Prop Firms',
    is_published: false, scheduled_at: '2026-04-07T15:30:00+07:00', published_at: null
  });
  console.log(error ? 'Lỗi: ' + error.message : 'Dã thêm thành công bài 13 "Review FundedNext & Funding Pips" vào Database!');
}
run();
