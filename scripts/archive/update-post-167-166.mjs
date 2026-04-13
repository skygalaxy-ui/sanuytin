import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);

async function formatPosts() {
  // === UPDATE POST 167 (Price Action) ===
  const content167 = `
<p>Bạn có bao giờ tự hỏi làm thế nào những trader chuyên nghiệp lại đưa ra các quyết định chính xác mà biểu đồ của họ hoàn toàn sạch trơn, không hề có MACD, RSI hay Bollinger Bands? Câu trả lời nằm ở nghệ thuật giao dịch <strong>hành động giá (Price action)</strong>.</p>
<p>Thay vì bị nhiễu do <a href="/kien-thuc-forex/hoi-chung-fomo-forex-tam-ly-giao-dich/">hội chứng FOMO</a> hay rối mắt bởi các chỉ báo kỹ thuật chạy theo sau giá, phương pháp này tập trung vào thứ cốt lõi và chân thực nhất trên biểu đồ: dấu chân của dòng tiền.</p>

<figure class="my-8">
  <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80" alt="Hành động giá price action cơ bản cho newbie" class="rounded-xl w-full object-cover aspect-video shadow-md">
  <figcaption class="text-center text-sm text-muted-foreground mt-3 italic">Biểu đồ nến Nhật thể hiện tâm lý trần trụi của phe mua và phe bán.</figcaption>
</figure>

<h2>Hành động giá (Price action) là gì?</h2>
<p>Price action là phương pháp giao dịch dựa hoàn toàn vào việc đọc và phân tích sự chuyển động của tỷ giá trên một biểu đồ trống gạch (naked chart). Bạn chỉ sử dụng biểu đồ nến Nhật kết hợp với các vùng hỗ trợ, kháng cự cốt lõi để xác định phe nào (người mua hay người bán) đang chiếm quyền kiểm soát.</p>
<p>Lợi thế lớn nhất của phương pháp này là nó không hề có độ trễ. Các chỉ báo kỹ thuật (indicators) như rập khuôn các công thức máy móc để tính trung bình của đường giá trong quá khứ, vì thế chúng luôn dự báo trễ pha so với thị trường thực tế.</p>

<h2>3 Nền tảng cốt lõi của giao dịch Price action</h2>

<div class="overflow-x-auto my-6">
  <table class="min-w-full bg-card border text-sm">
      <thead class="bg-primary/10">
          <tr>
              <th class="p-3 text-left">Yếu tố kỹ thuật</th>
              <th class="p-3 text-left">Định nghĩa & tính chất</th>
              <th class="p-3 text-left">Cách thức giao dịch cơ bản</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td class="p-3 font-medium text-blue-400">Xu hướng (Trend)</td>
              <td class="p-3 text-muted-foreground">Cấu trúc cấu thành từ các đỉnh và đáy liên tiếp, thể hiện đà chảy của dòng tiền thông minh.</td>
              <td class="p-3 text-muted-foreground">Chờ giá điều chỉnh về các vùng cấu trúc để thuận bù vào lệnh. Đánh xuôi dòng.</td>
          </tr>
          <tr class="bg-secondary/20">
              <td class="p-3 font-medium text-emerald-500">Vùng giá trị (Level)</td>
              <td class="p-3 text-muted-foreground">Các <a href="/kien-thuc-forex/order-block-ob-la-gi-cach-tim-ca-map/">khối order block (OB)</a>, hỗ trợ và kháng cự mạnh mà dòng tiền cá mập bị kẹt lại trước đó.</td>
              <td class="p-3 text-muted-foreground">Kẻ một ranh giới (zone) chứ không phải là 1 đường kẻ mỏng để phục kích lệnh.</td>
          </tr>
          <tr>
              <td class="p-3 font-medium text-rose-500">Mô hình nến (Candlestick)</td>
              <td class="p-3 text-muted-foreground">Tín hiệu cò súng (Trigger) để nhấp lệnh. Xác thực sự kiệt sức của phe đối nghịch.</td>
              <td class="p-3 text-muted-foreground">Tìm kiếm các mẫu nến nhấn chìm, <a href="/kien-thuc-forex/3-mau-nen-price-action-pin-bar-fakey/">nến Pin bar từ chối giá</a> ngay tại vùng hỗ trợ kháng cự.</td>
          </tr>
      </tbody>
  </table>
</div>
<p>Một giao dịch chất lượng (High probability trade) luôn là sự hội tụ tuyệt vời của cả ba yếu tố này. Nếu bạn chỉ thấy nến đảo chiều nhưng nó bị treo lơ lửng không nằm ở vùng hỗ trợ quan trọng, thì đó chỉ là sự nhiễu loạn ngẫu nhiên của thị trường.</p>

<div class="bg-secondary/30 p-6 rounded-2xl border border-border mt-10">
    <h3 class="text-2xl font-bold mb-4 text-primary">Câu hỏi thường gặp về hành động giá (FAQ)</h3>
    <div class="space-y-4">
        <div>
            <h4 class="font-semibold text-lg text-foreground">1. Price action chỉ hợp đánh khung thời gian lớn?</h4>
            <p class="text-muted-foreground text-sm mt-1">Lý thuyết Dow luôn đúng ở mọi khung thời gian (Fractal nature). Tuy nhiên, nếu bạn vận dụng vào biểu đồ 1 phút (M1), rủi ro trượt lan giá rất lớn do áp lực từ các nhóm thuật toán (Bot cao tần) cắt dán bảng điện, dễ làm cho cấu trúc cản mỏng vỡ nát.</p>
        </div>
        <div>
            <h4 class="font-semibold text-lg text-foreground">2. Người mới nên ưu tiên mô hình nến nào trước?</h4>
            <p class="text-muted-foreground text-sm mt-1">Chỉ duy nhất nến nhấn chìm (Engulfing) và nến râu dài kiệt sức (Pin Bar/Hammer). Những cây nến thân cực kỳ nhỏ như Doji xoay vòng không cung cấp manh mối gì và không nên đụng vào.</p>
        </div>
    </div>
</div>
  `;

  // === UPDATE POST 166 (Liquidity) ===
  const content166 = `
<p>Bạn đã từng bị dính một chuỗi cắt lỗ (stop loss) cực kỳ đau đớn ngay tại một vùng hỗ trợ mà bạn đinh ninh kiểu gì biểu đồ cũng sẽ đứng vững? Chỉ vài cái tấc nến lao xuống quét rụng lệnh cắt lỗ của bạn, giá lập tức vòng ngược cắm đầu bay vút thẳng lên trời xanh. Đây không phải do xui xẻo, mà là hệ quả từ việc "bị ăn thịt" bởi khái niệm <strong>thanh khoản (Liquidity)</strong> của các "cá mập" (smart money).</p>

<figure class="my-8">
  <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80" alt="Biểu đồ phân tích khái niệm thanh khoản liquidity trong SMC" class="rounded-xl w-full object-cover aspect-video shadow-md">
  <figcaption class="text-center text-sm text-muted-foreground mt-3 italic">Thanh khoản thị trường là nguyên liệu sống còn của các nhà lập lệnh khối lượng lớn.</figcaption>
</figure>

<h2>Thanh khoản (Liquidity) thực chất là gì?</h2>
<p>Trong thị trường ngoại hối (Forex), đối với đám đông nhỏ lẻ rỉ rả, mua và bán 1-2 lots thì thị trường luôn vô tận. Nhưng nếu một quỹ phòng hộ (Hedge fund) mang tới hàng tỷ đô la muốn mua vào, họ sẽ không có đủ lệnh bán (người khác bán cho họ) để thực thi ở một mức giá lý tưởng mà không làm chấn động lan trượt giá.</p>
<p>Để khớp khối lượng khủng, họ bắt buộc phải săn tìm các cụm tiền lớn đang chờ sẵn. Cụm tiền đó nằm ở đâu? Đó chính là các vùng hội tụ nhóm lệnh cắt lỗ (stop loss) và các <a href="/kien-thuc-forex/3-mau-nen-price-action-pin-bar-fakey/">lệnh breakout mù quáng (buy/sell stop)</a> của đám đông. Tại sao? Khi lệnh buy của bạn bị chạm cắt lỗ - tức là bạn đang thực thi một hệ thống bán (sell). Mớ lệnh sell xối xả này mới đủ dòng hàng để cá mập mua (buy) vào khối lượng khổng lồ. <strong>Thanh khoản chính là lệnh chờ trên thị trường.</strong></p>

<h2>3 cái bẫy thanh khoản kinh điển (Liquidity pool)</h2>

<div class="overflow-x-auto my-6">
  <table class="min-w-full bg-card border text-sm">
      <thead class="bg-primary/10">
          <tr>
              <th class="p-3 text-left">Vùng bẫy phân bổ</th>
              <th class="p-3 text-left">Tình trạng tâm lý đám đông</th>
              <th class="p-3 text-left">Hoạt động quét vùng thanh khoản</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td class="p-3 font-medium text-emerald-500">Đỉnh / Đáy bằng nhau (EQH / EQL)</td>
              <td class="p-3 text-muted-foreground">Trader tin cản này siêu cứng ngắc, vội vàng đặt SL ngay sát đỉnh đáy.</td>
              <td class="p-3 text-muted-foreground">Thị trường "lướt" thọc râu lên 1-2 giá, cắn toàn bộ stop loss (Buy stop/Sell limit bồi) rồi quay ngoắt đi ngược lại.</td>
          </tr>
          <tr class="bg-secondary/20">
              <td class="p-3 font-medium text-blue-400">Đường kháng cự xiên (Trendline)</td>
              <td class="p-3 text-muted-foreground">Giá tích lũy nén dọc theo cạnh của một đường trend được vẽ chéo dốc.</td>
              <td class="p-3 text-muted-foreground">Khi tạo breakout hờ, lôi kéo hàng ngũ FOMO (buy vào), sau đó "cá mập" xả mạnh xả sập trendline.</td>
          </tr>
          <tr>
              <td class="p-3 font-medium text-rose-500">Múi giờ giao phiên</td>
              <td class="p-3 text-muted-foreground">Thị trường buồn ngủ vào cuối phiên Á hoặc chờ đợi trước <a href="/tin-tuc/diem-tin-forex-dia-chinh-tri-chi-phoi-thi-truong-07-04/">bản tin tức kinh tế quan trọng.</a></td>
              <td class="p-3 text-muted-foreground">Mở giao ban Âu hoặc Mỹ thì nhà tạo lập đánh gãy biên độ ranh giới tích lũy hẹp để tóm SL rồi mới trả giá về phương xa.</td>
          </tr>
      </tbody>
  </table>
</div>

<p>Để không trở thành thanh khoản (nạn nhân) cho cá mập, bạn phải học định hình <a href="/kien-thuc-forex/phuong-phap-smc-smart-money-concept-la-gi/">ngôn ngữ hệ thống dòng tiền thông minh (SMC)</a>. Hãy quan sát cách thức râu nến liếm nhẹ qua các cụm mốc cản quan trọng, khi thấy sự rút chân mạnh mẽ - thay vì chán nản cắt lỗ, đó cũng là lúc một thiết lập (setup) xác suất cao mang tỷ lệ <a href="/kien-thuc-forex/risk-reward-rr-la-gi-bi-quyet-quan-ly-von/">R:R kinh điển</a> mới chỉ thực sự bắt đầu.</p>

<div class="bg-secondary/30 p-6 rounded-2xl border border-border mt-10">
    <h3 class="text-2xl font-bold mb-4 text-primary">Câu hỏi nâng cao (FAQ)</h3>
    <div class="space-y-4">
        <div>
            <h4 class="font-semibold text-lg text-foreground">1. Có cách tự động tránh thanh khoản cắn cắt lỗ?</h4>
            <p class="text-muted-foreground text-sm mt-1">Thay vì đặt điểm chạm cắt lỗ sát sàn sạt chỉ cách cản có 1 pip để cầu may lợi nhuận R:R to, hãy nới điểm SL giãn cách qua khỏi biên độ hỗ trợ thêm 1 chút (thường là cộng thêm chỉ số ATR 14 hoặc nhích rộng 10-15 pip so với cấu trúc). Chấp nhận lợi nhuận gộp bớt lại một chút để bao quát cản bị liếm râu.</p>
        </div>
        <div>
            <h4 class="font-semibold text-lg text-foreground">2. Thanh khoản áp dụng ở biểu đồ vàng (XAUUSD) có khác biệt?</h4>
            <p class="text-muted-foreground text-sm mt-1">Vàng XAU/USD là tài sản mang tính đầu cơ số 1 ở mọi sàn giao dịch. Lực quét thanh khoản ở đó tàn khốc vô biên, quét một trảo lên tới hàng chục giá (hàng trăm pips). Điều này khiến áp dụng SMC và canh thanh khoản Vàng là sân chơi của sư tử, rủi ro khổng lồ nhưng phần thưởng cũng rất béo bở đối với trader lọc lõi.</p>
        </div>
    </div>
</div>
  `;

  const { error: e1 } = await supabase.from('posts').update({ title: 'Hành động giá (Price action) cơ bản là gì? Trade không cần chỉ báo', content: content167, updated_at: new Date().toISOString() }).eq('id', 167);
  if (e1) console.error("Lỗi bài 167:", e1); else console.log("Cập nhật bài 167 (Price action cơ bản) - Lowercase chuẩn");

  const { error: e2 } = await supabase.from('posts').update({ title: 'Thanh khoản (Liquidity) là gì? Cách tránh cạm bẫy của cá mập SMC', content: content166, updated_at: new Date().toISOString() }).eq('id', 166);
  if (e2) console.error("Lỗi bài 166:", e2); else console.log("Cập nhật bài 166 (Liquidity) - Lowercase chuẩn");
}

formatPosts();
