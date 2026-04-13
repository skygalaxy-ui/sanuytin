import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function formatPost169() {
  const newContent = `
<h2>Tỷ lệ Risk:Reward (R:R) trong Forex là gì?</h2>
<p>Trong thế giới giao dịch đầy rẫy bất trắc, câu hỏi định đoạt sự sống còn không phải là "tỷ lệ thắng (Winrate) của bạn bao nhiêu?", mà là <strong>"Khi thắng bạn được bao nhiêu và khi thua bạn mất bao nhiêu?"</strong>. Đó chính là cốt lõi của khái niệm tỷ lệ <strong>Risk:Reward (Rủi ro : Lợi nhuận)</strong> hay còn gọi là tỷ lệ R:R.</p>
<p>Tỷ lệ R:R đo lường trực tiếp mức độ lợi nhuận tiềm năng mà bạn kỳ vọng thu về được so với mức vốn sẵn sàng rủi ro đánh đổi cho một giao dịch. Ví dụ, thiết lập tỷ lệ R:R là 1:2 có nghĩa là bạn chấp nhận rủi ro mất 1 đô la để lấy cơ hội kiếm được 2 đô la tiền lãi.</p>

<figure class="my-8">
  <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" alt="Biểu đồ minh họa tỷ lệ RR trong giao dịch" class="rounded-xl w-full object-cover aspect-video shadow-md">
  <figcaption class="text-center text-sm text-muted-foreground mt-3 italic">Quản trị tốt tỷ lệ Risk/Reward chính là "Chén Thánh" lớn nhất trong hành trình Forex.</figcaption>
</figure>

<h2>Bài toán kỳ diệu bù đắp Winrate thấp</h2>
<p>Một lầm tưởng chết người của <a href="/kien-thuc-forex/huong-dan-cho-nguoi-moi-bat-dau-forex-2026/">người mới tham gia (Newbie)</a> là cố gắng lùng sục các công cụ báo điểm mua/bán (Indiator) chính xác 100%. Thực tế, một Trader chuyên nghiệp đôi lúc chỉ cần tỷ lệ dự đoán đúng 40% nhưng vẫn rút lãi đều đặn nhờ phép màu của tỷ lệ R:R.</p>

<div class="overflow-x-auto my-6">
  <table class="min-w-full bg-card border border-border text-sm">
      <thead class="bg-primary/10">
          <tr>
              <th class="p-3 border-b text-left">Tỷ lệ Risk:Reward</th>
              <th class="p-3 border-b text-left">Winrate (Tỷ lệ thắng tối thiểu để hòa vốn)</th>
              <th class="p-3 border-b text-left">Đặc điểm chiến lược</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td class="p-3 border-b font-medium text-rose-500">1:0.5 (Tồi tệ)</td>
              <td class="p-3 border-b font-mono">66.6%</td>
              <td class="p-3 border-b">Thường gặp ở tâm lý gồng lỗ, chốt lãi non. Phải thắng 7 lệnh mới gỡ được 3 lệnh thua.</td>
          </tr>
          <tr class="bg-secondary/20">
              <td class="p-3 border-b font-medium text-primary">1:1 (Phổ thông)</td>
              <td class="p-3 border-b font-mono">50%</td>
              <td class="p-3 border-b">Cân bằng. Được ứng dụng nhiều trong phong cách <a href="/kien-thuc-forex/scalping-forex-chien-luoc-luot-song/">Scalping (Đánh lướt sóng)</a> siêu ngắn.</td>
          </tr>
          <tr>
              <td class="p-3 border-b font-medium text-emerald-400">1:2 (Lý tưởng)</td>
              <td class="p-3 border-b font-mono">33.3%</td>
              <td class="p-3 border-b">Chuẩn mực chuyên nghiệp. Bạn có thể sai 6 lần, đúng 4 lần mà tổng kết vẫn có lợi nhuận.</td>
          </tr>
          <tr class="bg-secondary/20">
              <td class="p-3 border-b font-medium text-blue-400">1:3 trở lên (Đột phá)</td>
              <td class="p-3 border-b font-mono">Dưới 25%</td>
              <td class="p-3 border-b">Rất khó điểm vào, tỷ lệ dính Stop Loss cực cao do điểm <a href="/kien-thuc-forex/ho-tro-khang-cu-trong-forex/">Kháng cự / Hỗ trợ</a> hẹp. Lợi nhuận khủng.</td>
          </tr>
      </tbody>
  </table>
</div>

<h2>Bí quyết sống sót và tối ưu tỷ lệ R:R</h3>
<p>Một chiến lược giao dịch hoàn hảo không phải là vẽ bừa một lệnh Take Profit cao gấp 3 lần Stop loss là sẽ có biên độ R:R 1:3. Đường giá sẽ quay đầu đập vỡ Stop Loss của bạn trước khi kịp chạm Tp. Để ứng dụng hiệu quả, bạn cần phải tuân thủ ba nguyên tắc sống còn sau:</p>

<ol>
    <li>
        <strong>Luôn luôn đặt Stop Loss trước (Khoanh vùng Risk):</strong> Đừng bao giờ giao dịch nếu bạn không biết được điểm kịch kim tài khoản bị tự động cắt lỗ. Bạn không thể xác định tỷ lệ Reward nếu không định giá được cái Giá (Risk) ban đầu. Đây là mấu chốt để <a href="/kien-thuc-forex/cach-tinh-lot-size-chuan-xac-trong-forex/">tính toán khối lượng Lot Size chuấn xác</a>.
    </li>
    <li>
        <strong>Chốt lời theo "Cấu trúc thị trường":</strong> Đừng chốt lời mông lung. Điểm lợi nhuận (Take Profit) phải được đặt tại các đỉnh/đáy kháng cự quan trọng. Nếu khoảng cách tới mức Kháng cự chỉ mang lại tỷ lệ 1:1, đừng cố gồng ép tỷ lệ 1:2. Hãy bỏ qua lệnh đó và chờ tín hiệu khác rực rỡ hơn.
    </li>
    <li>
        <strong>Trailing Stop (Kéo Stop Loss về mức hòa vốn):</strong> Khi lệnh đã chạy được 1 đoạn lãi tương đương tỷ lệ R:R = 1:1. Chuyên gia luôn học cách "Trailing" (dời) Stop loss từ âm về bằng đúng tại mức giá mở vào lệnh gốc (Entry). Lúc này, tâm điểm của lệnh biến thành: Hoặc lãi to 1:2, hoặc hòa phí không mất đồng nào. Tâm lý giao dịch khi đó thanh thản hoàn toàn.
    </li>
</ol>

<figure class="my-8">
  <img src="https://images.unsplash.com/photo-1590283603385-18ff3828c4e4?w=800&q=80" alt="Minh họa quy tắc cắt điểm chốt lỗ" class="rounded-xl w-full object-cover">
  <figcaption class="text-center text-sm text-muted-foreground mt-3 italic">Hãy chắc chắn điểm Rủi ro (SL) phải được thiết lập dựa theo cấu trúc vùng hỗ trợ vật lý thay vì cảm tính.</figcaption>
</figure>

<div class="bg-secondary/30 p-6 rounded-2xl border border-border mt-10">
    <h3 class="text-2xl font-bold mb-4 text-primary">Câu Hỏi Thường Gặp Về Quản Lý Vốn (FAQ)</h3>
    
    <div class="space-y-4">
        <div>
            <h4 class="font-semibold text-lg text-foreground">1. Nên chọn tỷ lệ Risk:Reward bao nhiêu là tốt nhất để ổn định?</h4>
            <p class="text-muted-foreground text-sm mt-1">Đối với những ngày đầu tham gia thị trường, thiết lập điểm chuẩn <strong>1:1.5 hoặc 1:2</strong> là sự cân đối tuyệt vời nhất kết hợp giữa việc đạt Tỷ lệ hòa vốn 40% Winrate và không ôm lệnh chờ quá lâu. Hãy né các kèo Reward chỉ có 0.5 (Tức là lời 5 đồng nhưng cược 10 đồng).</p>
        </div>
        <div>
            <h4 class="font-semibold text-lg text-foreground">2. Nếu tôi trade quỹ (Prop Firm), R:R 1:1 có đủ xài không?</h4>
            <p class="text-muted-foreground text-sm mt-1">Thực tiễn chứng minh <a href="/kien-thuc-forex/quy-cap-von-forex-prop-firm-la-gi/">vượt qua các thử thách thi Quỹ cá mập</a> bằng tỷ lệ 1:1 cực kỳ mạo hiểm vì vướng phải rào cản Sụt giảm tối đa (Drawdown limit). Ở Quỹ, luật chơi được thiết kế rất ngặt nghèo buộc bạn phải tuân thủ chuẩn thấp nhất 1:1.5 trở lên bằng cách thu nạp một hệ thống giao dịch SMC hoặc Price Action chắc tay chứ không thể đánh nhồi ngẫu nhiên như trade tài khoản tự bỏ vốn.</p>
        </div>
        <div>
            <h4 class="font-semibold text-lg text-foreground">3. Gồng lỗ để gỡ rồi dời Stop Loss thì thuộc loại R:R nào?</h4>
            <p class="text-muted-foreground text-sm mt-1">Đó không phải là R:R! Đó là <strong><a href="/kien-thuc-forex/hoi-chung-fomo-forex-tam-ly-giao-dich">hội chứng FOMO và ảo tưởng tâm lý</a></strong>. Khi dời SL xa dần (kéo lùi Stop Loss xuống khi lệnh Buy đang chìm tàu), bạn đang tăng tỷ lệ Rủi ro (Risk) từ mức 1 ban đầu phình to gấp 3, gấp 4 lần. Phá nát công thức tỷ lệ R:R đồng nghĩa với phá sản trong nay mai.</p>
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
    .eq('id', 169);

  if (updateErr) {
    console.error("Lỗi cập nhật bài 169:", updateErr);
  } else {
    console.log("Thành công cập nhật bài 169 với nội dung chuẩn SEO: Table, FAQ, Links, Unsplash Images");
  }
}

formatPost169();
