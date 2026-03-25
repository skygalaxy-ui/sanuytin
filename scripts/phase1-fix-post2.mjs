import { createClient } from '@supabase/supabase-js';

const sb = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

// Get current content of post 2
const { data: p } = await sb
    .from('posts')
    .select('content')
    .eq('id', '75b06b63-a704-41b2-b8d1-5718c3e36517')
    .single();

const extraContent = `

<h2>Xu huong app dau tu chung khoan 2026</h2>

<p>Thi truong app chung khoan Viet Nam dang thay doi nhanh chong voi nhieu xu huong dang chu y:</p>

<p><strong>AI va Robot tu van:</strong> Cac CTCK lon nhu TCBS, SSI da tich hop tro ly dau tu AI, phan tich danh muc tu dong va dua ra khuyen nghi dua tren du lieu lon. Xu huong nay se ngay cang pho bien trong 2026-2027.</p>

<p><strong>Social Trading va Copy Trading:</strong> Mot so app cho phep ban sao chep giao dich cua nha dau tu gioi. Day la tinh nang huu ich cho nguoi moi nhung can than trong voi viec chon nguoi de copy — hieu suat qua khu khong dam bao tuong lai.</p>

<p><strong>Giao dich phai sinh tren mobile:</strong> Hop dong tuong lai VN30 va Covered Warrant (CW) da co the giao dich tren hau het cac app lon. Tuy nhien, phai sinh doi hoi kien thuc chuyen sau — nguoi moi nen hoc ky truoc khi tham gia.</p>

<p><strong>Tich hop da tai san:</strong> Xu huong "super app" tai chinh — mot app cho phep giao dich co phieu, trai phieu, quy mo, gui tiet kiem, va thanh toan. TCBS va VPS dang dan dau xu huong nay.</p>

<h2>Ket luan: Chon app nao la tot nhat?</h2>

<p>Khong co app "tot nhat" cho tat ca moi nguoi — chi co app <strong>phu hop nhat</strong> voi nhu cau cua ban. Hay can nhac:</p>

<ul>
<li><strong>Neu la nguoi moi (F0):</strong> Bat dau voi VPS SmartOne hoac TCBS de lam quen</li>
<li><strong>Sau 3-6 thang:</strong> Thu SSI iBoard de nang cao ky nang phan tich</li>
<li><strong>Neu giao dich nhieu:</strong> Can nhac Pinetree/DNSE de tiet kiem phi</li>
<li><strong>Luon mo tai khoan chinh thuc:</strong> Chi tai app tu store chinh thuc, khong qua link la</li>
</ul>

<p>Dieu quan trong nhat khong phai la chon app nao, ma la bat dau hoc va dau tu dung cach. Mot app tot chi la cong cu — kien thuc va ky luat moi la yeu to quyet dinh thanh cong cua ban tren thi truong chung khoan.</p>
`;

// Append extra content before closing
const updatedContent = p.content + extraContent;

const { error } = await sb
    .from('posts')
    .update({
        content: updatedContent,
        updated_at: new Date().toISOString(),
    })
    .eq('id', '75b06b63-a704-41b2-b8d1-5718c3e36517');

if (error) {
    console.log('Error: ' + error.message);
} else {
    const plain = updatedContent.replace(/<[^>]*>/g, '').trim();
    const wc = plain.split(/\s+/).filter(w => w.length > 0).length;
    console.log('[OK] Bai 2 updated: ' + wc + ' tu');
}
