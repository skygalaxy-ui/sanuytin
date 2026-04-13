import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function formatPost170() {
  const newContent = `
<h2>Lot (Lô) trong Forex là gì? Phân Định Sống Còn Cho Trader</h2>
<p>Trong cuộc sống hàng ngày, bạn mua trứng theo "tá", mua vàng theo "chỉ" hoặc "lượng". Trong thị trường ngoại hối (Forex) cũng vậy, tiền tệ không được bán lẻ từng đồng một mà được gom lại thành các khối lượng tiêu chuẩn gọi là <strong>Lot (Lô)</strong>.</p>
<p>Một <strong>Standard Lot (Lô tiêu chuẩn)</strong> tương đương với 100.000 đơn vị tiền tệ cơ sở. Ví dụ, nếu bạn mua 1 Lot cặp tỷ giá EUR/USD, nghĩa là bạn đang giao dịch 100.000 Euro. Việc nắm vững khái niệm Lot Size là bước phòng thủ đầu tiên trước khi bạn <a href="/kien-thuc-forex/margin-call-stop-out-la-gi/">nghiên cứu về rủi ro Margin Call</a> hay các kỹ thuật trade nâng cao khác.</p>

<figure class="my-8">
  <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&q=80" alt="Máy tính và bảng biểu tính toán Lot Size" class="rounded-xl w-full object-cover aspect-video shadow-md">
  <figcaption class="text-center text-sm text-muted-foreground mt-3 italic">Tính toán khối lượng lệnh (Lot Size) là bài toán vỡ lòng bắt buộc của mọi trader.</figcaption>
</figure>

<h2>Phân loại các kích thước Lot phổ biến</h2>
<p>Để tạo điều kiện cho các nhà giao dịch cá nhân với số vốn nhỏ cũng có thể tham gia thị trường, các <a href="/tin-tuc/top-10-san-forex-uy-tin-nhat-viet-nam-2026/">sàn Forex uy tín</a> đã chia nhỏ Standard Lot thành các đơn vị linh hoạt hơn như Mini, Micro và Nano.</p>

<div class="overflow-x-auto my-6">
  <table class="min-w-full bg-card border border-border text-sm">
      <thead class="bg-primary/10">
          <tr>
              <th class="p-3 border-b text-left">Loại Lot</th>
              <th class="p-3 border-b text-left">Khối lượng lệnh hiển thị trên MT4/MT5</th>
              <th class="p-3 border-b text-left">Số lượng đơn vị tiền tệ</th>
              <th class="p-3 border-b text-left">Giá trị uớc tính cho 1 Pip (Cặp XXX/USD)</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td class="p-3 border-b font-medium text-primary">Standard Lot (Tiêu chuẩn)</td>
              <td class="p-3 border-b font-mono">1.00</td>
              <td class="p-3 border-b">100,000</td>
              <td class="p-3 border-b font-bold text-rose-500">$10</td>
          </tr>
          <tr class="bg-secondary/20">
              <td class="p-3 border-b font-medium text-blue-400">Mini Lot</td>
              <td class="p-3 border-b font-mono">0.10</td>
              <td class="p-3 border-b">10,000</td>
              <td class="p-3 border-b font-bold text-amber-500">$1</td>
          </tr>
          <tr>
              <td class="p-3 border-b font-medium text-emerald-400">Micro Lot</td>
              <td class="p-3 border-b font-mono">0.01</td>
              <td class="p-3 border-b">1,000</td>
              <td class="p-3 border-b font-bold text-emerald-500">$0.10 (10 cent)</td>
          </tr>
          <tr class="bg-secondary/20">
              <td class="p-3 border-b font-medium text-slate-400">Nano Lot (Tài khoản Cent)</td>
              <td class="p-3 border-b font-mono">0.001</td>
              <td class="p-3 border-b">100</td>
              <td class="p-3 border-b font-bold text-slate-500">$0.01 (1 cent)</td>
          </tr>
      </tbody>
  </table>
</div>

<p>Đối với người mới bắt đầu (vốn dưới $500), Sàn Uy Tín khuyến nghị bạn <strong>TUYỆT ĐỐI CHỈ NÊN GIAO DỊCH MICRO LOT (0.01)</strong>. Việc nhồi khối lượng Mini hay Standard Lot vào một tài khoản nhỏ là con đường ngắn nhất dẫn đến việc mất trắng tài sản.</p>

<h2>Công thức Tính Lot Size Chuẩn Xác Kháng Cháy Tài Khoản</h2>
<p>Một trader có <a href="/kien-thuc-forex/hoi-chung-fomo-forex-tam-ly-giao-dich">tâm lý giao dịch tĩnh</a> không bao giờ đánh khối lượng bừa bãi. Họ luôn tuân thủ nguyên tắc quản lý rủi ro tính bằng %. Công thức sát thủ để xác định Lot Size hoàn hảo như sau:</p>

<blockquote class="border-l-4 border-primary bg-primary/10 p-5 rounded-r-xl italic my-6 text-foreground font-medium">
  <strong>Khối lượng (Lot Size)</strong> = (Số tiền Rủi ro được phép) / (Khoảng cách Stop Loss tính bằng Pip x Giá trị 1 Pip)
</blockquote>

<p><strong>Ví dụ minh họa:</strong></p>
<ul>
    <li>Bạn có tài khoản <strong>$1.000</strong>. Bạn quyết định chỉ rủi ro <strong>1%</strong> tài khoản cho lệnh này (nghĩa là tối đa mất $10).</li>
    <li>Bạn xác định thiết lập điểm cắt lỗ (Stop Loss) cách điểm vào lệnh <strong>20 Pips</strong>.</li>
    <li>Giả sử bạn giao dịch cặp EUR/USD, giá trị 1 Pip của Standard Lot là $10.</li>
</ul>
<p>Áp dụng công thức: Lot = $10 / (20 x $10) = <strong>0.05 Lot</strong>.</p>
<p>Điều này có nghĩa là, để bảo toàn tài khoản chỉ thủng $10 nếu sai hướng, bạn phải nhập chính xác khối lượng <strong>0.05</strong> lên phần mềm MT4 thay vì đánh lụi 0.1 hay 0.2.</p>

<figure class="my-8">
  <img src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&q=80" alt="Tuyệt đối tuân thủ khối lượng lệnh qua app tính toán" class="rounded-xl w-full object-cover">
  <figcaption class="text-center text-sm text-muted-foreground mt-3 italic">Hãy luôn sử dụng các máy tính Lot Size trực tuyến để phân bổ nguồn vốn an toàn.</figcaption>
</figure>

<div class="bg-secondary/30 p-6 rounded-2xl border border-border mt-10">
    <h3 class="text-2xl font-bold mb-4 text-primary">Câu Hỏi Thường Gặp Về Lot Size (FAQ)</h3>
    
    <div class="space-y-4">
        <div>
            <h4 class="font-semibold text-lg text-foreground">1. Đánh khối lượng 1 Lot Vàng (XAU/USD) thì 1 giá trị giá bao nhiêu tiền?</h4>
            <p class="text-muted-foreground text-sm mt-1">Đặc thù của Vàng (XAU/USD) là 1 Standard Lot tương đương 100 Ounce vàng chứ không phải 100.000 đơn vị như Forex. Việc Vàng di chuyển 1 USD (ví dụ từ 2300 lên 2301) mà bạn đi khối lượng 1 Lot thì tương đương lãi/lỗ <strong>$100</strong>.</p>
        </div>
        <div>
            <h4 class="font-semibold text-lg text-foreground">2. Vốn 100 USD thì nên đánh Lot bao nhiêu để qua đêm an toàn?</h4>
            <p class="text-muted-foreground text-sm mt-1">Với số vốn nhỏ giọt $100, để duy trì nhịp đập tài khoản khỏe mạnh và sống sót qua các cú giật tin tức, tỷ lệ chuẩn mực cao nhất là 0.01 Lot đến 0.02 Lot. Hoặc an toàn hơn, bạn nên mở <a href="/kien-thuc-forex/cac-loai-tai-khoan-exness/">Tài khoản Cent (Nano Lot)</a> để thả lỏng tâm lý.</p>
        </div>
        <div>
            <h4 class="font-semibold text-lg text-foreground">3. Đòn bẩy (Leverage) có làm thay đổi giá trị của Lot không?</h4>
            <p class="text-muted-foreground text-sm mt-1">Không hề. Đòn bẩy (như 1:500 hay 1:1000) chỉ quyết định số tiền <a href="/kien-thuc-forex/margin- call-stop-out-la-gi/">Ký quỹ (Margin)</a> tối thiểu cần để mở lệnh, chức năng đòn bẩy không thay đổi định lượng thật của thị trường. 1 Lot vẫn mãi là 100.000 đơn vị.</p>
        </div>
    </div>
</div>
  `;

  const { error: updateErr } = await supabase
    .from('posts')
    .update({ 
        content: newContent,
        updated_at: new Date().toISOString()
    })
    .eq('id', 170);

  if (updateErr) {
    console.error("Lỗi cập nhật bài 170:", updateErr);
  } else {
    console.log("Thành công cập nhật bài 170 với nội dung chuẩn SEO: Table, FAQ, Links, Unsplash Images");
  }
}

formatPost170();
