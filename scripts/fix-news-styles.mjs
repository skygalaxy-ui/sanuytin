import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const slug = 'diem-tin-forex-dia-chinh-tri-chi-phoi-thi-truong-07-04';

const newContent = `<h2>Tóm tắt nhanh điểm tin giao dịch</h2>
<p>Thay vì các báo cáo kinh tế, tâm điểm của thị trường ngoại hối hôm nay (07/04) lại đổ dồn vào <strong>rủi ro xung đột tại Trung Đông</strong>. Dòng tiền an toàn đang giúp đồng Đô la Mỹ (USD) duy trì đà sức mạnh ở vùng đỉnh, trong khi tỷ giá trong nước cũng ghi nhận một vài nhịp hạ nhiệt ở thị trường phi chính thức.</p>

<h2>Nội dung chính trong bản tin</h2>
<ol>
  <li>Rủi ro địa chính trị đang là mồi lửa cho thị trường</li>
  <li>USD có dấu hiệu chững lại chờ tin kinh tế</li>
  <li>Bức tranh tỷ giá USD/VND hiện tại</li>
  <li>Khuyến nghị giao dịch nhanh</li>
</ol>

<h2>Rủi ro địa chính trị đang là mồi lửa cho thị trường</h2>
<p>Trong phiên giao dịch hôm nay, yếu tố kiểm soát và định hướng tâm lý nhà đầu tư không phải là các con số kinh tế, mà chính là các hệ quả có thể xảy ra từ <strong>căng thẳng Mỹ và Iran</strong>. Giới chức sắc và các quỹ đầu tư lớn đều đang dồn sự chú ý vào khu vực Trung Đông.</p>
<p>Bất kỳ một tia lửa nào làm gián đoạn tuyến hàng hải tại khu vực đều có thể kích hoạt làn sóng mua gom tài sản trú ẩn an toàn, đánh mạnh vào các cặp JPY và USD.</p>

<h2>USD có dấu hiệu chững lại chờ tin kinh tế</h2>
<p>Bất chấp tâm lý né tránh rủi ro, phe bò USD dường như đang có một nhịp lấy hơi sau tuần tăng giá mạnh. Đồng Đô la Mỹ hiện đang neo ở quanh vùng đỉnh ngắn hạn chứ không bứt phá tiếp.</p>
<p>Lý do cho việc dòng tiền chững lại nằm ở yếu tố chờ đợi. Thị trường đang cần các chất xúc tác cụ thể từ dữ liệu <strong>đơn đặt hàng lâu bền</strong> của Mỹ và biên bản cuộc họp FOMC sắp được công bố để xác nhận liệu mức lãi suất có trụ vững an toàn hay không.</p>

<h2>Bức tranh tỷ giá USD/VND hiện tại</h2>
<p>Sáng nay, Ngân hàng Nhà nước đã nhích nhẹ tỷ giá trung tâm thêm 2 đồng, đưa lên mốc 25.108 VND/USD. Các tổ chức tín dụng lớn tiếp tục neo ở biên độ tỷ giá cao.</p>
<p>Dù vậy, thị trường tự do lại đang vẽ ra một kịch bản đảo chiều chớp nhoáng với nhịp giảm nhẹ tay, kéo tỷ giá giao dịch phổ biến về quanh mốc 26.682 đến 26.802 đồng/USD, tạo ra cơ hội cho các nghiệp vụ hoán đổi tiền tệ.</p>

<h2>Khuyến nghị giao dịch nhanh</h2>
<p>Thị trường đang vào pha bị dẫn dắt bởi tin nóng. Các vùng kháng cự hay hỗ trợ ngắn hạn rất dễ bị đập gãy nếu có bản tin quốc tế bùng lên bất thình lình.</p>
<p>Hãy lập tức hạ khối lượng lệnh và thắt chặt cắt lỗ ở các cặp chéo USD và cặp vàng. Bị dính trượt giá khi giá chạy qua cắt lỗ là sự cố thường gặp trong những ngày nhạy cảm như hôm nay.</p>

<p><em>Đội ngũ tin tức Sàn Uy Tín. Bản tin này cung cấp góc nhìn tham khảo, hãy luôn tự đưa ra quyết định dựa trên quản lý vốn rủi ro của bạn.</em></p>
`;

async function run() {
  const { error } = await sb.from('posts').update({ content: newContent }).eq('slug', slug);
  if (error) {
    console.error('Lỗi khi update database:', error);
  } else {
    console.log('Đã cập nhật bài viết theo đúng chuẩn Guidelines!');
  }
}

run();
