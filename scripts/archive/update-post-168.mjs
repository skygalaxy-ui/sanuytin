import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function formatPost168() {
  const newContent = `
<h2>Price Action (Hành Động Giá) Là Gì? Vì Sao Trader Cần Quan Tâm?</h2>
<p>Bạn đã mệt mỏi với rổ chỉ báo (indicator) rối rắm và trễ nhịp trên màn hình? Nền tảng của <a href="/kien-thuc-forex/hanh-dong-gia-price-action-co-ban-la-gi/">giao dịch Hành Động Giá (Price Action)</a> chính là tập trung giải mã ngôn ngữ nguyên thủy nhất của thị trường: Mô Hình Nến Nhật.</p>
<p>Một thanh nến đơn lẻ luôn mang yếu tố ngẫu nhiên, nhưng khi ghép nối lại trong một bối cảnh nhất định, chúng là "dấu vết" thể hiện rõ dòng tiền của "Cá Mập" (Smart Money) đang đổ về phe Mua (Bulls) hay phe Bán (Bears). Hãy cùng Sàn Uy Tín điểm qua 3 mẫu nến sát thủ kinh điển giúp bạn săn lùng điểm giao dịch dứt khoát.</p>

<figure class="my-8">
  <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" alt="Phân tích kỹ thuật mô hình nến Nhật" class="rounded-xl w-full object-cover aspect-video shadow-md">
  <figcaption class="text-center text-sm text-muted-foreground mt-3 italic">Mô hình nến Price Action là ngôn ngữ chân thực nhất kể về sự giằng co của phe Mua và phe Bán.</figcaption>
</figure>

<h2>1. Pin Bar (Nến Búa) - Cú Rũ Bỏ Khốc Liệt</h2>
<p>Mô hình <strong>Pin Bar</strong> nổi bật với chiếc đuôi (bóng nến) cực dài so với thân nến. Đuôi nến thể hiện sự bất thình lình lao vào từ chối giá một cách quyết liệt (Price Rejection).</p>
<ul>
    <li><strong>Tại đỉnh kháng cự:</strong> Nến Pin Bar có đuôi dài thọc lên trên (Shooting Star/Bearish Pin Bar) báo hiệu phe bán đã ồ ạt dồn quân chặn đường tăng. Tín hiệu Sell.</li>
    <li><strong>Tại đáy hỗ trợ:</strong> Đuôi nến dài ngoằn xuống dưới chọc thủng hỗ trợ roi rút râu lên (Hammer/Bullish Pin Bar). Tín hiệu Buy mạnh.</li>
</ul>

<h2>2. Inside Bar (Nến Nội Bộ) - Quãng Nghỉ Lấy Hơi</h2>
<p>Ngược với Pin Bar, <strong>Inside Bar</strong> là một cây nến con bị nhốt hoàn toàn bên trong thân và đuôi của cây nến đi trước nó (Mother Bar). Đây không phải là sự đảo chiều, mà là sự nén lại của một xu hướng giống như lò xo.</p>
<p>Cách giao dịch phổ biến nhất là đánh phá vỡ (Breakout). Dân Trading lão luyện thường đặt lệnh Buy Stop phía trên và Sell Stop phía dưới của cây Mother Bar để ăn cú bùng nổ mà không cần phải đoán hướng.</p>

<h2>3. Fakey (Phá Vỡ Giả) - Bẫy Kinh Điển Của "Cá Mập"</h2>
<p><strong>Fakey Pattern</strong> chính là ông vua quét Stop Loss - kết hợp trực tiếp giữa một Inside Bar và dòng tiền hung hãn. </p>
<p>Thị trường ban đầu tạo ra mô hình Inside Bar. Sau đó, nó đâm xuyên ra khỏi Mother Bar để <em>"lừa"</em> <a href="/kien-thuc-forex/hoi-chung-fomo-forex-tam-ly-giao-dich">đám đông FOMO</a> nhảy vào đánh Breakout. Trớ trêu thay, mức giá đột ngột giật ngược trở lại và đóng cửa ở phía ngược chiều, trực tiếp biến nến phá vỡ vừa rồi thành một Pin Bar từ chối giá. Đây chính là mẻ lưới chết chóc nhất mà Cá Mập giăng ra.</p>

<div class="overflow-x-auto my-6">
  <table class="min-w-full bg-card border border-border text-sm">
      <thead class="bg-primary/10">
          <tr>
              <th class="p-3 border-b text-left">Mô Hình Nến</th>
              <th class="p-3 border-b text-left">Nhận Dạng Hình Thái</th>
              <th class="p-3 border-b text-left">Ý Nghĩa Tâm Lý Đám Đông</th>
              <th class="p-3 border-b text-left">Vị Trí Tối Ưu Mở Lệnh</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td class="p-3 border-b font-medium text-emerald-500">Pin Bar (Búa)</td>
              <td class="p-3 border-b text-muted-foreground">Đuôi dài gấp 2-3 lần thân nến nhỏ bé.</td>
              <td class="p-3 border-b">Bẫy giá (Fake breakout) kết hợp sự từ chối gắt gao.</td>
              <td class="p-3 border-b">Tại chính điểm Kháng Cự hoặc Hỗ Trợ cốt lõi.</td>
          </tr>
          <tr class="bg-secondary/20">
              <td class="p-3 border-b font-medium text-blue-400">Inside Bar</td>
              <td class="p-3 border-b text-muted-foreground">Nến sau nằm trọn vẹn trong biên độ High-Low vắng mẹ đầu tiên.</td>
              <td class="p-3 border-b">Thị trường thiếu thanh khoản, ngưng giao tranh để nén chiều biến động.</td>
              <td class="p-3 border-b">Giữa một Trendline mạnh (đánh tiếp diễn xu hướng).</td>
          </tr>
          <tr>
              <td class="p-3 border-b font-medium text-rose-500">Fakey (Phá Vỡ Giả)</td>
              <td class="p-3 border-b text-muted-foreground">Phá vỡ khỏi Inside Bar thất bại và thò đuôi rút ngược mạnh.</td>
              <td class="p-3 border-b">Phe Smart Money tiêu diệt triệt để đội Breakout muộn hoặc quét Stop Loss.</td>
              <td class="p-3 border-b">Mọi vị trí quan trọng, đặc biệt dễ xảy ra lúc <a href="/kien-thuc-forex/non-farm-la-gi/">ra tin tức Non-farm lớn</a>.</td>
          </tr>
      </tbody>
  </table>
</div>

<p>Việc rèn luyện con mắt nhanh nhạy để săn lùng ba <strong>mẫu nến Price Action</strong> siêu nhiên này là yêu cầu tiên quyết. Nhưng đừng quên, ngay cả một Setup vĩ đại nhất vẫn có tỷ lệ bị "fail" do yếu tố ngẫu nhiên của thị trường. Việc gắn chặt quản lý vốn <a href="/kien-thuc-forex/risk-reward-rr-la-gi-bi-quyet-quan-ly-von/">tỷ lệ Risk/Reward đúng chuẩn mực</a> sẽ che chở vốn của bạn sống thọ đủ lâu để ăn quả lớn từ các Setup vàng.</p>

<div class="bg-secondary/30 p-6 rounded-2xl border border-border mt-10">
    <h3 class="text-2xl font-bold mb-4 text-primary">Câu Hỏi Thường Gặp Về Mô Hình Nến Price Action (FAQ)</h3>
    
    <div class="space-y-4">
        <div>
            <h4 class="font-semibold text-lg text-foreground">1. Có nên đánh Limit order ngay khi mẫu nến chưa đóng cửa (Close) không?</h4>
            <p class="text-muted-foreground text-sm mt-1">Tuyệt đối Không. Nến chưa đóng cửa thì hình thái nến hoàn toàn là thứ vô giá trị. Chỉ trong 1 phút cuối của nến H4, giá có thể gồng lên giật ngược tạo thành cây Pin bar 180 độ so với cây Marubozu 3 phút trước. Chỉ ra quyết định đánh nến sau khi đồng hồ báo nến chính thức đóng (Confirmed).</p>
        </div>
        <div>
            <h4 class="font-semibold text-lg text-foreground">2. Mẫu nến này phát huy tác dụng tốt nhất ở khung thời gian (Timeframe) nào?</h4>
            <p class="text-muted-foreground text-sm mt-1">Tín hiệu càng chất lượng với các nến Khung thời gian càng cao (Tối thiểu từ H1, H4, và D1/Ngày). Ở khung nhỏ như M1, M5, nhiễu của sóng cực lớn nên những cây Pinbar xuất hiện nhan nhản nhưng 90% là mồi nhử không mang tác dụng cấu trúc.</p>
        </div>
        <div>
            <h4 class="font-semibold text-lg text-foreground">3. Giao dịch theo Price action có cần xem tin tức không?</h4>
            <p class="text-muted-foreground text-sm mt-1">Dân Price Action cứng cựa thường theo thuyết "Giá phản ánh tất cả". Họ không cần phân tích tính tích cực/tiêu cực của <a href="/tin-tuc/diem-tin-forex-dia-chinh-tri-chi-phoi-thi-truong-07-04/">bản tin kinh tế vĩ mô</a>. Lịch kinh tế với họ chỉ để canh né thời điểm "phóng lao" - lúc thị trường lan rộng chỉ số Spread và trượt giá điên cuồng.</p>
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
    .eq('id', 168);

  if (updateErr) {
    console.error("Lỗi cập nhật bài 168:", updateErr);
  } else {
    console.log("Thành công cập nhật bài 168 với nội dung chuẩn SEO: Table, FAQ, Links, Unsplash Images");
  }
}

formatPost168();
