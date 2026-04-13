import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function formatPost115() {
  const newContent = `
<p>Nếu bạn đã hoặc đang tìm hiểu về việc <a href="/kien-thuc-forex/bao-nhieu-tien-de-bat-dau-trade-forex/">chuẩn bị vốn để trade Forex</a> tại thị trường Việt Nam, chắc chắn cái tên vang lên đầu tiên từ cộng đồng luôn là <strong>Exness</strong>. Được mệnh danh là "Vua thanh khoản" của thị trường bán lẻ, Exness nắm giữ vị thế độc tôn với đặc sản <em>Rút tiền tức thì 24/7</em> và <em>Đòn bẩy Vô cực</em>.</p>
<p>Tuy nhiên, liệu Exness có thực sự là một sàn môi giới hoàn hảo, hay đằng sau những con số khủng về khối lượng giao dịch là những nhược điểm chí mạng mà ít ai tiết lộ? Hãy cùng Sàn Uy Tín bóc tách chi tiết qua điểm đánh giá chuyên sâu năm 2026.</p>

<figure class="my-8">
  <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" alt="Đánh giá sàn Exness uy tín tại Việt Nam 2026" class="rounded-xl w-full object-cover aspect-video shadow-md">
  <figcaption class="text-center text-sm text-muted-foreground mt-3 italic">Exness duy trì khối lượng giao dịch lên đến hàng nghìn tỷ USD mỗi tháng.</figcaption>
</figure>

<h2>1. Exness Trực Thuộc Quản Lý Của Ai? Cấp Giấy Phép Nào?</h2>
<p>Thành lập từ năm 2008, Tập đoàn Exness (Exness Group) hoạt động hợp pháp dựa trên nền tảng pháp lý vững chắc với hàng loạt giấy phép quản lý hạng A từ các định chế tài chính khắt khe nhất thế giới:</p>
<ul>
    <li><strong>FCA (Cơ quan Kiểm soát Tài chính Anh Quốc):</strong> Giấy phép số 730729. Đây là chứng chỉ đắt giá nhất, yêu cầu quỹ bồi thường lên đến 85.000 Bảng Anh cho mỗi nhà đầu tư.</li>
    <li><strong>CySEC (Ủy ban Chứng khoán và Giao dịch Síp):</strong> Giấy phép số 178/12, tuân thủ đạo luật MiFID bảo vệ toàn bộ trader thuộc khối Liên minh Châu Âu (EU).</li>
    <li><strong>FSA (Cơ quan Dịch vụ Tài chính Seychelles):</strong> Giấy phép số SD025. Đây là pháp nhân thường cấp dịch vụ cho các trader tại Việt Nam, mang lại sự linh hoạt tối đa về đòn bẩy.</li>
</ul>

<h2>2. Ma Trận Tài Khoản: Bạn Phù Hợp Với Loại Nào?</h2>
<p>Exness chia cấu trúc tài khoản làm hai nhóm chính: Nhóm Tiêu chuẩn (dành cho người mới) và Nhóm Chuyên nghiệp (dành cho Scalper và chuyên gia).</p>

<div class="overflow-x-auto my-6">
  <table class="min-w-full bg-card border border-border text-sm">
      <thead class="bg-primary/10">
          <tr>
              <th class="p-3 border-b text-left">Đặc Điểm</th>
              <th class="p-3 border-b text-left">Tài Khoản Standard</th>
              <th class="p-3 border-b text-left">Tài Khoản Raw Spread</th>
              <th class="p-3 border-b text-left">Tài Khoản Zero</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td class="p-3 border-b font-medium text-emerald-500">Đối tượng</td>
              <td class="p-3 border-b text-muted-foreground">Người mới bắt đầu</td>
              <td class="p-3 border-b text-muted-foreground">Chiến lược đánh lướt sóng (Scalping)</td>
              <td class="p-3 border-b text-muted-foreground">Giao dịch thuật toán (Bot EA)</td>
          </tr>
          <tr class="bg-secondary/20">
              <td class="p-3 border-b font-medium text-blue-400">Nạp tối thiểu</td>
              <td class="p-3 border-b">$10 (Tùy cổng thanh toán)</td>
              <td class="p-3 border-b">$200 (Yêu cầu lần nạp đầu)</td>
              <td class="p-3 border-b">$200 (Yêu cầu lần nạp đầu)</td>
          </tr>
          <tr>
              <td class="p-3 border-b font-medium text-amber-500">Spread (Từ)</td>
              <td class="p-3 border-b">0.3 pips (Không hoa hồng)</td>
              <td class="p-3 border-b">0.0 pips (Spread thô từ LP)</td>
              <td class="p-3 border-b">0.0 pips (Cố định 95% thời gian)</td>
          </tr>
           <tr class="bg-secondary/20">
              <td class="p-3 border-b font-medium text-rose-500">Phí Hoa Hồng</td>
              <td class="p-3 border-b">Miễn Phí</td>
              <td class="p-3 border-b">Lên đến $3.5/lot/chiều</td>
              <td class="p-3 border-b">Từ $0.2/lot/chiều (Tùy cặp)</td>
          </tr>
      </tbody>
  </table>
</div>
<p>Lưu ý quan trọng: Nhằm <a href="/kien-thuc-forex/cach-tinh-lot-size-chuan-xac-trong-forex/">kiểm soát size vào lệnh</a> hợp lý, đa số trader Việt Nam chuộng tài khoản <strong>Standard</strong> vì nó không chém phí commission, giúp tính toán rủi ro và đặt Stop Loss đơn giản hơn hẳn.</p>

<h2>3. Tuyệt Chiêu Độc Tôn: Nạp Rút Tức Thì (Instant Withdrawal)</h2>
<p>Đây là điểm tạo nên sự khác biệt hoàn toàn giữa Exness và phần còn lại của thế giới Forex. Tại các sàn khác kế toán duyệt lệnh rút tiền bằng tay (Manual), mất từ 24h - 48h. Tại Exness, lệnh rút tiền đưa thẳng vào Hệ thống Xử lý Tự động.</p>
<p>Hệ quả là bạn sẽ thấy tiền nổ "Ting Ting" về ngân hàng Techcombank, Vietcombank... chỉ trong vòng <strong>3 giây đến 1 phút</strong>, diễn ra 24/7 kể cả lúc 2 giờ sáng ngày Chủ Nhật.</p>

<h2>4. Những "Bóng Tối" Ở Exness Bạn Nên Đề Phòng</h2>
<p>Bất kỳ một sàn môi giới nào cũng có nhược điểm. Dưới đây là những hạn chế chí mạng nếu bạn chuẩn bị mở tài khoản:</p>
<ol>
    <li><strong>Trượt giá (Slippage) cực mạnh thời điểm ra tin:</strong> Với cơ chế khớp lệnh thị trường, những lúc có <a href="/kien-thuc-forex/non-farm-la-gi/">Tin tức Non-Farm, CPI lõi</a>, thanh khoản hụt rất nhanh làm spread của XAU/USD (Vàng) giãn ra vô cực. Nếu bạn đặt lệnh chờ (Pending order), giá sẽ khớp ở vị trí bất lợi nhất.</li>
    <li><strong>Hỗ trợ viên (Support) hay quá tải:</strong> Do lượng khách hàng toàn cầu khổng lồ, tổng đài Live Chat tiếng Việt đôi lúc rơi vào tình trạng xếp hàng chờ lâu.</li>
</ol>

<div class="bg-secondary/30 p-6 rounded-2xl border border-border mt-10">
    <h3 class="text-2xl font-bold mb-4 text-primary">Câu Hỏi Thường Gặp Về Sàn Exness (FAQ)</h3>
    <div class="space-y-4">
        <div>
            <h4 class="font-semibold text-lg text-foreground">1. Có sự cố sàn Exness can thiệp chặn rút tiền không?</h4>
            <p class="text-muted-foreground text-sm mt-1">Exness không bao giờ giam tiền của khách theo hướng cố ý lừa đảo. 99% trường hợp không rút được tiền là do khách hàng vi phạm nguyên tắc AML (Chống rửa tiền): VD nạp bằng tài khoản Vợ, nhưng thẻ rút tiền lại mang tên Chồng. Tại Exness, Nạp cổng nào bắt buộc phải rút ra đúng cổng đó cùng tên chủ sở hữu (Chính chủ).</p>
        </div>
        <div>
            <h4 class="font-semibold text-lg text-foreground">2. Đòn bẩy vô cực (Unlimited) của Exness được kích hoạt thế nào?</h4>
            <p class="text-muted-foreground text-sm mt-1">Bạn sẽ không tự động có đòn bẩy 1:Vô cực ngay khi vừa mở tài khoản. Bạn phải tự trade đủ số lô (Lots) theo quy định và đóng một số lượng lệnh tối thiểu (thường là 10 lệnh nhỏ). Đòn bẩy khổng lồ này <a href="/kien-thuc-forex/risk-reward-rr-la-gi-bi-quyet-quan-ly-von/">là con dao hai lưỡi cắn nát tài khoản</a>, nên Exness ẩn nó đi với người dùng mới tinh.</p>
        </div>
        <div>
            <h4 class="font-semibold text-lg text-foreground">3. Nếu lướt sóng vàng (Scalping XAUUSD) nên chọn tài khoản nào?</h4>
            <p class="text-muted-foreground text-sm mt-1">Chắc chắn phải chọn <strong>Pro</strong> hoặc <strong>Raw Spread</strong>. Mặc dù bị trả hoa hồng, nhưng bù lại Spread (chênh lệch mua/bán) khi trade Vàng mỏng như lưỡi dao cạo, giúp khớp Take Profit (Chốt lời) với những biến động giá dù là nhỏ nhất theo chỉ số <a href="/kien-thuc-forex/3-mau-nen-price-action-pin-bar-fakey/">hành động giá</a>.</p>
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
    .eq('id', 115);

  if (updateErr) {
    console.error("Lỗi cập nhật bài 115 (Exness):", updateErr);
  } else {
    console.log("Thành công cập nhật bài 115 (Exness) với nội dung chuẩn SEO: Table, FAQ, Links, Unsplash Images");
  }
}

formatPost115();
