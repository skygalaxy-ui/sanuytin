import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function formatPost171() {
  const { data: post, error: fetchErr } = await supabase
    .from('posts')
    .select('*')
    .eq('id', 171)
    .single();

  if (fetchErr || !post) {
    console.error("Lỗi khi lấy bài viết 171:", fetchErr);
    return;
  }

  const newContent = `
<h2>Hội chứng FOMO trong Forex là gì?</h2>
<p><strong>FOMO (Fear Of Missing Out)</strong> trong giao dịch Forex là hội chứng tâm lý sợ bỏ lỡ cơ hội. Cụ thể, khi một nhà giao dịch thấy thị trường biến động mạnh, giá đi lên (hoặc xuống) theo một xu hướng rõ ràng mà bản thân lại chưa có lệnh, họ sẽ bị thôi thúc phải "nhảy vào" dòng chảy đó bằng mọi giá. Họ sợ rằng nếu không giao dịch ngay lúc này, họ sẽ miết đi một món hời khổng lồ.</p>

<figure class="my-8">
  <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" alt="Tâm lý FOMO khi nhìn biểu đồ Forex xanh đỏ liên tục" class="rounded-xl w-full object-cover aspect-video shadow-md">
  <figcaption class="text-center text-sm text-muted-foreground mt-3 italic">Hội chứng FOMO dễ dàng kích hoạt khi trader nhìn thấy những nến xanh đỏ biến động dữ dội.</figcaption>
</figure>

<p>Hội chứng FOMO không chừa một ai. Từ một <a href="/kien-thuc-forex/huong-dan-cho-nguoi-moi-bat-dau-forex-2026/">người mới tham gia (Newbie)</a> thiếu phương hướng cho đến những trader lâu năm đôi lúc mất cảnh giác. Hậu quả của việc giao dịch theo cảm xúc này thường là việc "đu đỉnh" hoặc "bán đáy", kéo theo khoản lỗ khổng lồ và bào mòn tài khoản với tốc độ chóng mặt.</p>

<h2>Dấu hiệu nhận biết bạn đang bị FOMO chi phối</h2>
<p>Làm thế nào để biết bạn đang trong trạng thái FOMO? Dưới đây là những biểu hiện kinh điển:</p>
<ul>
    <li><strong>Vào lệnh không có kế hoạch:</strong> Bạn không hề chuẩn bị kịch bản giao dịch trước, nhưng chỉ vì thấy cây nến xanh phóng lên quá mạnh, bạn lập tức nhấn nút "Buy".</li>
    <li><strong>Cảm thấy lo lắng, bồn chồn khi đứng ngoài thị trường:</strong> Dù thị trường biến động hỗn loạn hoặc đi ngang không rõ xu hướng, bạn vẫn cảm thấy ngứa ngáy và phải "bóp cò" để có cảm giác đang tham gia cuộc chơi.</li>
    <li><strong>Sửa lệnh Stop Loss liên tục:</strong> Khi giá đi ngược lại với dự đoán FOMO ban đầu, thay vì cắt lỗ, bạn lại dời Stop Loss ra xa hơn hoặc thậm chí thả trôi vì "hy vọng" giá sẽ quay lại. Hiện tượng này thường đi liền với <a href="/kien-thuc-forex/margin-call-stop-out-la-gi/">nguy cơ dính Margin Call</a>.</li>
    <li><strong>Giao dịch khối lượng quá lớn (Overtrading):</strong> Bạn sử dụng tỷ lệ Margin cao hoặc khối lượng Lot cực lớn so với mức an toàn để mong gỡ gạc nhanh chóng.</li>
</ul>

<h2>Sự Khác Biệt Giữa Trader Kỷ Luật Và Trader FOMO</h2>
<p>Bảng phân tích dưới đây sẽ giúp bạn nhìn nhận rõ ràng ranh giới giữa một giao dịch có chuẩn bị và một lần "Fomo" mù quáng.</p>
<div class="overflow-x-auto my-6">
  <table class="min-w-full bg-card border border-border text-sm">
      <thead class="bg-primary/10">
          <tr>
              <th class="p-3 border-b text-left">Tiêu chí</th>
              <th class="p-3 border-b text-left">Giao dịch Kỷ luật (Discipline)</th>
              <th class="p-3 border-b text-left">Giao dịch FOMO (Cảm xúc)</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td class="p-3 border-b font-medium">Lý do vào lệnh</td>
              <td class="p-3 border-b">Hệ thống báo tín hiệu, phân tích kỹ thuật hợp lệ.</td>
              <td class="p-3 border-b">Thấy giá chạy quá nhanh, sợ lỡ sóng, bị bạn bè/group hô hào.</td>
          </tr>
          <tr class="bg-secondary/20">
              <td class="p-3 border-b font-medium">Rủi ro (Risk)</td>
              <td class="p-3 border-b">Được tính toán kỹ trước khi cắm lệnh (1-2% tài khoản).</td>
              <td class="p-3 border-b">Không quan tâm Stop Loss, nhồi lệnh liên tục bất chấp hậu quả.</td>
          </tr>
          <tr>
              <td class="p-3 border-b font-medium">Tâm lý (Mindset)</td>
              <td class="p-3 border-b">Bình tĩnh, chấp nhận kết quả dù là Take Profit hay Stop Loss.</td>
              <td class="p-3 border-b">Lo âu, căng thẳng cao độ, tim đập nhanh mỗi lần nến giật.</td>
          </tr>
          <tr class="bg-secondary/20">
              <td class="p-3 border-b font-medium">Theo dõi lệnh</td>
              <td class="p-3 border-b">Đóng app, làm việc khác, chờ thị trường tự xử lý.</td>
              <td class="p-3 border-b">Khư khư nhìn màn hình 24/24, canh chừng bảng điện.</td>
          </tr>
      </tbody>
  </table>
</div>

<h2>Bí quyết "Chữa Bệnh" FOMO Trí Mạng Trong Forex</h2>
<p>FOMO sinh ra từ cảm xúc bản năng của con người. Để "chữa khỏi" hoàn toàn là bất khả thi, tuy nhiên bạn hoàn toàn có thể kiểm soát và đè bẹp nó bằng hệ thống kỷ luật sắt thép.</p>
<figure class="my-8">
  <img src="https://images.unsplash.com/photo-1590283603385-18ff3828c4e4?w=800&q=80" alt="Bình tĩnh đối mặt biểu đồ" class="rounded-xl w-full object-cover">
  <figcaption class="text-center text-sm text-muted-foreground mt-3 italic">Kiên nhẫn là công cụ hiệu quả nhất để đập tan sự sợ hãi bỏ lỡ cơ hội.</figcaption>
</figure>
<p>Dưới đây là một số mẹo để rèn luyện tâm lý giao dịch vững vàng:</p>
<ol>
    <li>Duy trì một hệ thống <a href="/kien-thuc-forex/huong-dan-lap-nhat-ky-giao-dich-trading-journal/">Nhật ký giao dịch (Trading Journal)</a> rõ ràng. Ghi chú và mổ xẻ những tình huống bạn từng bị FOMO chi phối và kết quả thua sốc của chúng làm bài học đắt giá.</li>
    <li>Ghi nhớ nguyên tắc: "Market is always there". Cơ hội lúc nào cũng đầy rẫy. Hôm nay lỡ sóng mạnh, ngứa tay thì đóng máy tính lại đi ngủ, ngày mai thị trường vẫn ở đó, biểu đồ vẫn vẽ. Bạn chỉ mất tiền chứ cơ hội không bao giờ biến mất cả.</li>
    <li>Chặn hoặc tắt mọi thông báo từ các Group Telegram "lùa gà" hay hô hào show lãi. Mạng xã hội chính là nguồn cơn gây nên nỗi sợ FOMO độc tính nhất. Hãy tự phân tích và tự ra quyết định trên tài khoản của chính mình. Sự tĩnh lặng tạo nên các lệnh thắng.</li>
</ol>


<div class="bg-secondary/30 p-6 rounded-2xl border border-border mt-10">
    <h3 class="text-2xl font-bold mb-4 text-primary">Câu Hỏi Thường Gặp Càng Thêm Rõ Ràng (FAQ)</h3>
    
    <div class="space-y-4">
        <div>
            <h4 class="font-semibold text-lg text-foreground">1. FOMO có phải là biểu hiện tâm lý bình thường không?</h4>
            <p class="text-muted-foreground text-sm mt-1">Hoàn toàn bình thường! Nỗi sợ mất cơ hội là tàn dư từ sự tiến hóa của loài người. Tuy nhiên, nếu bạn để bản năng này dẫn lái tài khoản thì rủi ro cháy túi là hiện hữu. Quan trọng là bạn học cách dập tắt nó trước khi xuống tiền.</p>
        </div>
        <div>
            <h4 class="font-semibold text-lg text-foreground">2. Thời điểm nào dễ kích ngòi nổ FOMO nhất trên thị trường?</h4>
            <p class="text-muted-foreground text-sm mt-1">Vào các đợt Non-Farm (NFP), công bố lãi suất (FED), tin tức CPI, giá có khuynh hướng giật hai đầu hoặc phống bão đột ngột. Hoặc thời kỳ Crypto Bitcoin phá đỉnh lịch sử là lúc tâm lý FOMO lên đến cao độ, dồn người mới lên "đu đỉnh" mát mẻ.</p>
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
    .eq('id', 171);

  if (updateErr) {
    console.error("Lỗi cập nhật bài 171:", updateErr);
  } else {
    console.log("Thành công cập nhật bài 171 với nội dung chuẩn SEO: Table, FAQ, Links, Unsplash Images");
  }
}

formatPost171();
