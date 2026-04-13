import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function createScheduledPost() {
  const content = `
<p>Bước sang tháng 4/2026, <strong>Vantage</strong> tiếp tục khẳng định vị thế là một trong những nhà môi giới dẫn đầu thị trường bằng hàng loạt những cập nhật quan trọng. Nếu bạn đang giao dịch tại Vantage hoặc có ý định mở tài khoản trong tháng này, đây là những thay đổi cốt lõi bạn không thể bỏ qua.</p>

<figure class="my-8">
  <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80" alt="Cập nhật sàn Vantage tháng 4" class="rounded-xl w-full object-cover aspect-video shadow-md">
  <figcaption class="text-center text-sm text-muted-foreground mt-3 italic">Tháng 4 chứng kiến nhiều cải tiến mạnh mẽ về thanh khoản và nền tảng của Vantage.</figcaption>
</figure>

<h2>1. Nâng cấp thanh khoản cho tài khoản Raw ECN</h2>
<p>Tài khoản Raw ECN vẫn luôn là "gà đẻ trứng vàng" thu hút giới trader chuyên nghiệp đến với Vantage. Trong đợt cập nhật hạ tầng tháng 4, Vantage đã tăng cường đấu nối trực tiếp vào thêm 3 ngân hàng thanh khoản cấp 1 (Tier-1 Liquidity Providers).</p>
<p>Điều này đồng nghĩa với việc mức trượt giá (Slippage) khi giao dịch trong <a href="/tin-tuc/diem-tin-forex-dia-chinh-tri-chi-phoi-thi-truong-07-04/">các thời điểm ra tin mạnh</a> như Non-Farm đã được dập tắt đáng kể. Chênh lệch spread của cặp XAU/USD (Vàng) giờ đây giữ mức ổn định đáng kinh ngạc từ 0.0 - 0.5 pips ngay cả ở phiên Mỹ bùng nổ.</p>

<h2>2. Ra mắt giao diện Vantage App 4.0</h2>
<p>Nắm bắt xu hướng giao dịch linh động, Vantage chính thức tung ra phiên bản App 4.0 trên cả iOS và Android. Điểm "đăng cấp" trong bản cập nhật này bao gồm:</p>
<ul>
    <li>Tích hợp trực tiếp biểu đồ TradingView bản Pro (hoàn toàn miễn phí).</li>
    <li>Trung tâm điều khiển tín hiệu (Signal center) gửi thẳng notification về máy.</li>
    <li>Trải nghiệm nạp tiền cực nhanh qua cổng VietQR chỉ trong một thao tác chạm mã.</li>
</ul>

<div class="overflow-x-auto my-6">
  <table class="min-w-full bg-card border text-sm">
      <thead class="bg-primary/10">
          <tr>
              <th class="p-3 text-left">Tiêu chí cập nhật</th>
              <th class="p-3 text-left">Trước tháng 4/2026</th>
              <th class="p-3 text-left">Từ tháng 4/2026 trở đi</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td class="p-3 font-medium text-emerald-500">Phí qua đêm (Swap)</td>
              <td class="p-3 text-muted-foreground">Tính phí tiêu chuẩn</td>
              <td class="p-3 text-muted-foreground">Miễn phí swap Vàng (XAU/USD) cho khách hàng mới</td>
          </tr>
          <tr class="bg-secondary/20">
              <td class="p-3 font-medium text-blue-400">Tốc độ rút tiền</td>
              <td class="p-3 text-muted-foreground">Dưới 12 giờ làm việc</td>
              <td class="p-3 text-muted-foreground">Tự động duyệt hệ thống (dưới 15 phút qua ngân hàng nội địa)</td>
          </tr>
          <tr>
              <td class="p-3 font-medium text-rose-500">Chương trình khuyến mãi</td>
              <td class="p-3 text-muted-foreground">Bonus 50% tiền nạp đầu tiên</td>
              <td class="p-3 text-muted-foreground">Lễ hội giao dịch: Cashback tiền mặt x2 cho toàn bộ Lot giao dịch</td>
          </tr>
      </tbody>
  </table>
</div>

<h2>3. Chính sách Cashback hoàn tiền x2</h2>
<p>Khoản <a href="/tin-tuc/cac-chuong-trinh-bonus-san-forex/">tiền thưởng (Bonus)</a> tháng này không còn bị trói buộc với những điều khoản khắt khe. Vantage tung ra chương trình hoàn tiền mặt (Cashback) áp dụng cho mọi giao dịch. Mỗi 1 Lot giao dịch, thay vì nhận $1.5 như trước, bạn sẽ nhận được $3 cộng thẳng vào số dư có thể rút được ngay lập tức.</p>

<p>Nhìn chung, với đợt "lột xác" trong tháng 4 này, Vantage không giấu giếm tham vọng lật đổ các "ông lớn" khác để thâu tóm toàn bộ nhóm trader lướt sóng (Scalper) tại Việt Nam. Nếu bạn ưu tiên một nền tảng không có độ trễ và chiết khấu hoa hồng cực mạnh, đây chính là thời điểm hoàn hảo để khởi tạo <a href="/vantage">tài khoản Vantage</a> mới.</p>
  `;

  // Note: Local time is 2026-04-09 17:30:00+07:00
  // Convert to ISO:
  const scheduledTime = "2026-04-09T10:30:00.000Z";

  const newPost = {
    title: "Sàn Vantage tháng 4 có thay đổi gì mới? Cập nhật phí và nền tảng giao dịch",
    slug: "san-vantage-thang-4-co-thay-doi-gi-moi",
    excerpt: "Điểm qua những cập nhật đáng chú ý nhất của sàn Vantage trong tháng 4/2026: Miễn phí swap Vàng, App 4.0 mới và chương trình hoàn tiền x2 khủng.",
    content: content,
    category: "khuyen-mai",
    tags: ["Vantage", "Khuyến mãi sàn", "Review sàn"],
    is_published: false,
    scheduled_at: scheduledTime,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  const { data, error } = await supabase.from('posts').insert([newPost]).select();

  if (error) {
    console.error("Lỗi khi tạo bài viết:", error);
  } else {
    console.log("Thành công! Đã tạo bài viết và lên lịch xuất bản vào lúc 17:30.");
    console.log("ID Bài viết:", data[0].id);
  }
}

createScheduledPost();
