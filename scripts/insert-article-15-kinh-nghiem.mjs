import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'kinh-nghiem-thi-quy-forex-cach-pass-thu-thach';
const IMG = `/images/${slug}`;

const content = `
<div class="tldr-box" style="background:#f0f9ff; border-left:4px solid #0ea5e9; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">TOM TAT NHANH</p>
  <p>De danh bai duoc cac quy cap von (Prop Firm), ky nang phan tich ky thuat chi chiem 20%. 80% con lai quyet dinh su thanh bai la Kha nang Quan tri rui ro kem theo Tam ly giao dich vung vang. Ban phai biet chap nhan thua lo nho de bao ve tai khoan va chi ra don o nhung setup co xac suat thang then tuyet doi.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">Trong Bai Viet Nay</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#tam-ly">Tam ly chien: Binh tinh truoc cam do</a></li>
    <li><a href="#quan-tri">Quan tri von: Cong thuc Risk Per Trade</a></li>
    <li><a href="#chon-loc">Loc tin hieu: Nghe thuat tia nen Sniper</a></li>
    <li><a href="#ky-luat">Ky luat thep: Biet diem dung</a></li>
    <li><a href="#faq">Cau Hoi Thuong Gap (FAQ)</a></li>
  </ol>
</nav>

<h2 id="tam-ly">Tam Ly Chien: Su Binh Tinh Lam Nen Chuyen Lon</h2>
<p>Dieu tao nen su khac biet cua mot tay choi Forex lao lang va mot tay choi nghiep du la cach ho kiem soat hoi tho khi thi truong dien cuong.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_featured.png" alt="Kinh nghiem thi quy forex quan tri tam ly" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Mot tam tri can bang la vu khi bi mat sac ben nhat tren san giao dich.</figcaption>
</figure>

<p>Hau het cac thu thach quy deu bo gioi han thoi gian (Unlimited Time). Vay tai sao ban phai gap gap? Nhieu trader non nong muon pass luon trong 1 ngay da tat tay (thieu quan tri rui ro) va roi chet chim trong su hoi tiec. Hay nho rang thi truong luon o do ngay mai. Viec cua ban la di tu tu, moi ngay kiem 0.5% hoac 1% va giu cho tam ly thoai mai.</p>

<h2 id="chon-loc">Loc Tin Hieu: Nghe Thuat Tia Nen Cua Sniper</h2>
<p>Trading la mot tro choi chon loc, khong phai tro choi kiem nan. Ban khong can vao 10 lenh moi ngay de the hien minh ban ron.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_1.png" alt="Tia nen chon tin hieu xac suat cao the sniper" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Chi bop co khi con moi chung minh duoc no da di vao khu vuc tu huyet.</figcaption>
</figure>

<p>Kinh nghiem hang dau la chi nham toi nhung Setups co A+ (Hieu suat cao). Dong nghia voi viec tin hieu phai vo cung ro rang va co net hoi tu cua it nhat 3 yeu to ung ho (Vi du: Cung Cau + Fibonacci + Nen Pinbar Dao Chieu). Bo qua tat ca nhung Setup nua voi hoac khong nam trong he thong chi de "thu van may".</p>

<h2 id="quan-tri">Kiem Soat Rui Ro: Lam Chu Cong Thuc Tinh Lot</h2>
<p>Tai nan dot tu nhieu nhat cua cac Trader tham gia thu thach la quen khong Tinh toan Khoi luong Giao dich hoac vao nham don bay khien tai khoan cham Drawdown dung 1 lenh.</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_2.png" alt="Tinh lot size ty le r:r quan tri rui ro tai khoan" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Su dung cac cong cu (Tool) tinh toan the tich de cat ghep dung rui ro mon muon.</figcaption>
</figure>

<ul>
  <li><strong>Ty le Risk mac dinh:</strong> Hay co dinh Risk Per Trade xuong duoi 0.5% moi lenh (Tham chi 0.25% voi lenh thu ngo). Dieu nay dam bao neu ban gap chuoi Thua 5 lenh lien tiep, ban tong cong moi chi lo nho hon 2.5%, van cach rat xa cai an tu hinh 5% hoac 10%.</li>
  <li><strong>Hieu duoc Ty le R:R (Risk/Reward):</strong> Neu rui ro 1 de an 2, ban chi can ti le Thang la hon 40% de co lai tong the trong suot qua trinh Pass. Khong can dung toan bo thoi gian, hay trung tap trung cho mot ty le sinh loi dep.</li>
</ul>

<h2 id="ky-luat">Ky Luat Thep: Biet Khi Nao Nen Dung Lai</h2>
<p>Qua tam ba ban. Loi khuyen tu cac top trader thuoc Prop Firm cho thay rang con thu tich luy rui ro tiep theo day nam o viec Overtrade (Giao dich qua do).</p>

<figure style="margin:24px 0; text-align:center;">
  <img src="${IMG}_illu_3.png" alt="Ngung giao dich chot loi biet diem dung trader" style="width:100%; max-width:720px; border-radius:12px;" loading="lazy" />
  <figcaption style="font-size:14px; color:#888; margin-top:8px;">Gom thanh qua phia sau lung vao balo, di bo dao ria ngam canh va khong vuong ban man hinh.</figcaption>
</figure>

<p>Khi da dat duoc loi nhuan tich cuc trong ngay, ban phai hoc cach Dong May Tinh. Nhin bieu do cang lau, nao bo cang bi thao tung va ao giac ra tin hieu. Hay dat nguyen tac cung: An x cap do 1 ngay (hoac Thua x do) la se tat may va chi duoc quay lai vao sang ngay hom sau.</p>

<div style="background:#fef3c7; border-left:4px solid #f59e0b; padding:16px 20px; border-radius:8px; margin:20px 0;">
  <p style="font-weight:700; margin-bottom:4px;">Luu Y Khac Nghiet</p>
  <p>Tuyet doi khong dung thu thuat luon lach he thong quy nham de an gian. (Nhu mua con Bot vao lenh 2 dau Hedging che mat he thong). Viec ban pass bang tuc thu tuc se bi dieu tra lai truoc khi the hien duoc tinh trang thanh toan (Payout), dan toi bi block khoang luon account do chi la pass ma khong co lich su khop logic tay.</p>
</div>

<h2 id="faq">Cau Hoi Thuong Gap (FAQ)</h2>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">De test he thong, toi co nen mua tai khoan quy luon de thi the khong?</h3>
  <p>Khong nen. Truoc khi dot tien that vao le phi thi nang ne. Hay tu thiet ke mot tai khoan Demo cua Broker theo dung kich thuoc ban dinh thi, vi du $50.000. Xong lap san bieu the le theo doi Equity va Balance hang ngay vao Excel (Goi la nhat ky giao dich Trade Journal). Khi nao ban vuot qua demo cua minh moi di thi tu tin.</p>
</div>

<div class="faq-item" style="margin-bottom:20px;">
  <h3 style="font-size:17px;">Neu qua han thoi gian thu doi ma toi dang hoa von thi sao?</h3>
  <p>Tin vui la nam 2026 nay roi hau nhhu cac Quy Prop Firm nhu FTMO deu cap cho ban Unlimited Time (Khong thoi gian max). Nhung trong mot so quy 1-Step co bo sung bo Time, neu ban van dang co loi (hoac hoa von) tai luc het Time thi ban co the nhan nut yeu cau duoc cap lai mien phi Account khac do.</p>
</div>

<div style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-top:32px;">
  <p style="font-weight:700; margin-bottom:12px;">Bai Viet Lien Quan De Doc Them</p>
  <ul style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="/kien-thuc/quy-cap-von-forex-prop-firm-la-gi">Luat thi co ban can biet cap nhat cac nguyen tac an toan?</a></li>
    <li><a href="/kien-thuc/trailing-drawdown-la-gi-cach-tinh-sut-giam-quy">Meo phong ngua Drawdown kep bang loi tu tra Stoploss</a></li>
  </ul>
</div>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Doi bai SanUyTin.net</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Chuc ban vung vang tam ly va dat duoc thanh qua trong ky thu thach Prop Firm sap den. Tien thieu gi tran doi, cu cham va chac nhe.</p>
  </div>
</div>
`;

async function run() {
  const { data: existing } = await sb.from('posts').select('id').eq('slug', slug).single();
  if (existing) {
    const { error } = await sb.from('posts').update({ content, featured_image: `${IMG}_featured.png`, featured_image_alt: 'Kinh nghiem thi quy forex an toan', scheduled_at: '2026-04-07T21:30:00+07:00', updated_at: new Date().toISOString() }).eq('id', existing.id);
    console.log(error ? 'Loi: ' + error.message : 'Da cap nhat bai 15!');
    return;
  }
  const { error } = await sb.from('posts').insert({
    title: 'Kinh Nghiệm Thi Quỹ Forex: 5 Bí Kíp Giúp Pass Thử Thách An Toàn',
    slug, excerpt: 'Chia sẻ kinh nghiệm thi quỹ Forex xương máu từ các cao thủ giúp bạn pass vòng 1 và vòng 2 an toàn. Cách quản trị vốn đỉnh cao tránh vi phạm nội quy.',
    meta_title: 'Kinh Nghiệm Thi Quỹ Forex: Cách Pass Thử Thách Thành Công',
    meta_description: 'Nắm vững 5 kinh nghiệm thi quỹ Forex này để dễ dàng pass các bài thử thách cam go. Bí kíp ổn định tâm lý, quản trị rủi ro tránh sụt giảm.',
    content, category: 'kien-thuc',
    featured_image: `${IMG}_featured.png`, featured_image_alt: 'Kinh Nghiem Thi Quy Pass Thu Thach',
    is_published: false, scheduled_at: '2026-04-07T21:30:00+07:00', published_at: null
  });
  console.log(error ? 'Loi: ' + error.message : 'Da them bai 15 vao DB!');
}
run();
