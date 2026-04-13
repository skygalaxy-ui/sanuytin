import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function upgradePosts() {
    const { data: posts } = await supabase.from('posts').select('id, title, content').in('id', [176, 177, 178, 179, 180, 181, 182, 183]);
    
    if (!posts) return;

    for (let post of posts) {
        // Expand the content to match the "Pro Max Outline" (Detailed insights, Market data table, and FAQ)
        const newContent = `${post.content}
<div class="overflow-x-auto my-6">
  <table class="min-w-full bg-card border text-sm">
      <thead class="bg-primary/10">
          <tr>
              <th class="p-3 text-left">Tài sản (Asset)</th>
              <th class="p-3 text-left">Tác động ngắn hạn (Ngay lập tức)</th>
              <th class="p-3 text-left">Hành động khuyến nghị (Action plan)</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td class="p-3 font-medium text-amber-500">Vàng rồng (XAU/USD)</td>
              <td class="p-3 text-muted-foreground">Biến động dãn spread (mở rộng biên độ) rất gắt ở 2 đầu lên xuống. Dễ có hiện tượng <a href="/kien-thuc-forex/margin-call-stop-out-la-gi/">quét thanh khoản (Hunt Stoploss)</a> trước khi đi theo đường chính.</td>
              <td class="p-3 text-muted-foreground">Siết chặt điểm vào lệnh, ưu tiên các setup đảo chiều ngay tại hỗ trợ kháng cự cứng trên khung H4. Tránh Breakout.</td>
          </tr>
          <tr class="bg-secondary/20">
              <td class="p-3 font-medium text-emerald-500">Đồng Đô La (DXY)</td>
              <td class="p-3 text-muted-foreground">Tạo sức ép bán tháo hoặc hút dòng tiền đổ dồn tùy thuộc báo cáo thực tế. Cấu trúc giá sẽ dốc nghiêng không hồi.</td>
              <td class="p-3 text-muted-foreground">Hỗ trợ giao dịch lướt sóng (Scalping) theo đà. Nếu DXY xanh gắt, chuẩn bị bồi bán (Sell) EUR/USD và GBP/USD.</td>
          </tr>
          <tr>
              <td class="p-3 font-medium text-blue-400">Chứng khoán Mỹ (SP500)</td>
              <td class="p-3 text-muted-foreground">Tiền rẻ luôn là nhiên liệu cho cổ phiếu. Giai đoạn tin tức sẽ quyết định bẻ gãy đà tích lũy đi ngang.</td>
              <td class="p-3 text-muted-foreground">Không nên đuổi lệnh quá xa so với đường trung bình EMA. Tính <a href="/kien-thuc-forex/cach-tinh-lot-size-chuan-xac-trong-forex/">phân lượng rủi ro</a> thấp để chống Gap giá.</td>
          </tr>
      </tbody>
  </table>
</div>

<h2>Góc nhìn chuyên sâu: Bẫy thị trường & Chiến lược tồn tại</h2>
<p>Bất kỳ một thời khắc tin tức công bố nào cũng đi kèm hành vi đẩy thanh khoản ảo (Fake liquidity) từ giới chủ sàn báo giá (Market maker). Khi mà thông số rò rỉ khớp hoặc không khớp với kỳ vọng, việc giá giật ngược hàng trăm pips là chuyện mâm cơm thường nhật.</p>
<p>Khẳng định luôn: Trader nhỏ lẻ không bao giờ có đủ năng lực "cãi tay đôi" với các quỹ cơ cấu ngàn tỷ đô vào giờ G. Phương pháp thông minh nhất không phải là "ngồi đoán" tin đó tốt hay xấu, mà là đợi tin ra cho thị trường giật nát bét rồi 20 phút sau mới bắt đầu giao dịch theo dấu gãy vỡ của <a href="/kien-thuc-forex/hanh-dong-gia-price-action-co-ban/">Hành động giá Price action</a> chân thực nhất.</p>

<div class="bg-secondary/30 p-6 rounded-2xl border border-border mt-10">
    <h3 class="text-2xl font-bold mb-4 text-primary">Câu hỏi thường gặp: Vượt qua biến động tin tức (FAQ)</h3>
    <div class="space-y-4">
        <div>
            <h4 class="font-semibold text-lg text-foreground">1. Có nên treo lệnh chờ Limit/Stop trước lúc ra tin không?</h4>
            <p class="text-muted-foreground text-sm mt-1">Tuyệt đối không! Lúc thị trường hoảng loạn, ranh giới trượt giá là vô tận. Nếu sàn Forex của bạn đẩy chênh lệch (Spread) lên 50-60 pips ở nhịp giật của Vàng, lệnh dừng (Stop) của bạn sẽ bị cắt đứt ở mức tỉ giá tồi tệ nhất hệ mặt trời, gây cháy tài khoản rỗng túi trước cả khi bạn kịp chớp mắt.</p>
        </div>
        <div>
            <h4 class="font-semibold text-lg text-foreground">2. Bao nhiêu lâu sau thì sóng thị trường mới ổn định trở lại?</h4>
            <p class="text-muted-foreground text-sm mt-1">Thông thường, sau khi bản tin lõi kết thúc, sẽ mất từ 15 đến 30 phút để phe tạo lập "tiêu hóa" hoàn toàn thông tin. Nếu có phiên điều trần trực tiếp, rủi ro sẽ kéo dài suốt một tiếng rưỡi do các phát biểu châm ngòi tâm lý liên diễn.</p>
        </div>
    </div>
</div>
        `;
        
        await supabase.from('posts').update({ content: newContent }).eq('id', post.id);
    }
    console.log("Hoàn thành bơm ruột (Table + FAQ) cho 8 bài tin tức vĩ mô (ID 176 - 183)");
}
upgradePosts();
