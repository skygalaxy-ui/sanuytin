import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'diem-tin-forex-dia-chinh-tri-chi-phoi-thi-truong-07-04';

const content = `
<div class="tldr-box" style="background:#fefce8; border-left:4px solid #eab308; padding:20px; border-radius:8px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:18px; margin-bottom:8px;">TÓM TẮT NHANH PHIÊN GIAO DỊCH</p>
  <p>Thay vì các báo cáo kinh tế, tâm điểm của thị trường ngoại hối hôm nay (07/04) lại đổ dồn vào <strong>rủi ro xung đột tại Trung Đông</strong>. Dòng tiền an toàn đang giúp đồng Đô la Mỹ (USD) duy trì đà sức mạnh ở vùng đỉnh, trong khi tỷ giá trong nước cũng ghi nhận một vài nhịp hạ nhiệt ở thị trường phi chính thức.</p>
</div>

<nav class="toc" style="background:#f8fafc; padding:20px 24px; border-radius:12px; margin-bottom:32px;">
  <p style="font-weight:700; font-size:16px; margin-bottom:12px;">Trong Bản Tin Này</p>
  <ol style="margin:0; padding-left:20px; line-height:2;">
    <li><a href="#dia-chinh-tri">1. Rủi ro địa chính trị đang là mồi lửa cho thị trường</a></li>
    <li><a href="#usd-chung-lai">2. USD có dấu hiệu chững lại chờ tin kinh tế</a></li>
    <li><a href="#ty-gia-trong-nuoc">3. Bức tranh tỷ giá USD/VND hiện tại</a></li>
    <li><a href="#khuyen-nghi">4. Khuyến nghị giao dịch nhanh</a></li>
  </ol>
</nav>

<h2 id="dia-chinh-tri">1. Rủi ro địa chính trị đang là mồi lửa cho thị trường</h2>
<p>Trong phiên giao dịch hôm nay, yếu tố kiểm soát và định hướng tâm lý nhà đầu tư không phải là các con số kinh tế, mà chính là các hệ quả có thể xảy ra từ <strong>căng thẳng Mỹ và Iran</strong>. Giới chức sắc và các quỹ đầu tư lớn đều đang dồn sự chú ý vào khu vực Trung Đông.</p>
<p>Bất kỳ một tia lửa nào làm gián đoạn tuyến hàng hải tại khu vực đều có thể kích hoạt làn sóng mua gom tài sản trú ẩn an toàn (safe-haven), đánh mạnh vào các cặp JPY và USD.</p>

<h2 id="usd-chung-lai">2. USD có dấu hiệu chững lại chờ tin kinh tế</h2>
<p>Bất chấp tâm lý né tránh rủi ro, phe bò USD dường như đang có một nhịp lấy hơi sau tuần tăng giá mạnh. Đồng Đô la Mỹ hiện đang neo ở quanh vùng đỉnh ngắn hạn chứ không bứt phá tiếp.</p>
<p>Lý do cho việc dòng tiền chững lại nằm ở yếu tố chờ đợi. Thị trường đang cần các chất xúc tác cụ thể từ dữ liệu <strong>Đơn đặt hàng lâu bền (Durable Goods Orders)</strong> của Mỹ và <strong>biên bản cuộc họp FOMC</strong> sắp được công bố để xác nhận liệu mức lãi suất có trụ vững an toàn hay không.</p>

<h2 id="ty-gia-trong-nuoc">3. Bức tranh tỷ giá USD/VND hiện tại</h2>
<p>Sáng nay, Ngân hàng Nhà nước đã nhích nhẹ tỷ giá trung tâm thêm 2 đồng, đưa lên mốc <strong>25.108 VND/USD</strong>. Các tổ chức tín dụng lớn tiếp tục neo ở biên độ tỷ giá cao.</p>
<p>Dù vậy, thị trường tự do lại đang vẽ ra một kịch bản đảo chiều chớp nhoáng với nhịp giảm nhẹ tay, kéo tỷ giá giao dịch phổ biến về quanh mốc <strong>26.682 - 26.802 đồng/USD</strong>, tạo ra cơ hội cho các nghiệp vụ hoán đổi tiền tệ.</p>

<h2 id="khuyen-nghi">4. Khuyến nghị giao dịch nhanh</h2>
<p>Thị trường đang vào pha bị dẫn dắt bởi tin nóng (News-driven). Các vùng kháng cự hay hỗ trợ ngắn hạn rất dễ bị đập gãy (Breakout giả) nếu có bản tin quốc tế bùng lên bất thình lình.</p>
<p>Hãy lập tức hạ volume lệnh (Lot size) và thắt chặt Cắt lỗ (Stop Loss) ở các cặp USD-cross và cặp Vàng (XAUUSD). Bị dính trượt giá (Slippage) khi giá chạy qua Stoploss là sự cố thường gặp trong những ngày nhạy cảm như hôm nay.</p>

<div class="author-box" style="display:flex; gap:16px; align-items:center; background:#f1f5f9; padding:20px; border-radius:12px; margin-top:32px;">
  <div>
    <p style="font-weight:700; margin:0 0 4px;">Đội ngũ tin tức Sàn Uy Tín</p>
    <p style="font-size:14px; color:#64748b; margin:0;">Bản tin này cung cấp góc nhìn tham khảo, hãy luôn tự đưa ra quyết định dựa trên quản lý vốn rủi ro của bạn.</p>
  </div>
</div>
`;

async function run() {
  const { error } = await sb.from('posts').insert({
    title: 'Điểm tin thị trường 07/04: Căng thẳng địa chính trị chi phối, USD chững lại ở đỉnh',
    slug,
    excerpt: 'Tâm điểm thị trường chuyển hướng sang rủi ro xung đột tại Trung Đông. Đồng USD neo cao nhưng chững giá khi chờ dữ liệu FOMC.',
    meta_title: 'Tin tức Forex 07/04: Địa chính trị chi phối xu hướng USD',
    meta_description: 'Cập nhật tin tức thị trường Forex hôm nay 07/04: Phân tích ảnh hưởng của căng thẳng Mỹ Iran tới đồng USD, Vàng và tỷ giá VND.',
    content,
    category: 'tin-tuc',
    is_published: true,
    published_at: new Date().toISOString(),
    scheduled_at: null
  });
  console.log(error ? 'Lỗi: ' + error.message : 'Đã đăng bản tin trực tiếp lên DB thành công!');
}
run();
