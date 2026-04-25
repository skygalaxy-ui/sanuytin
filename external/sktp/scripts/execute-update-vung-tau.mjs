import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing credentials');
  process.exit(1);
}

const supabaseAdmin = createClient(supabaseUrl, supabaseKey);

const postId = '259a2d01-0d52-4ed6-9e90-474f382c00cf';

const htmlContent = `
<p>Vũng Tàu từ lâu đã là điểm đến "quốc dân" cho các doanh nghiệp khi lựa chọn địa điểm tổ chức teambuilding. Với ưu điểm vị trí địa lý chỉ cách TP.HCM khoảng 2 tiếng đi xe, sở hữu bãi biển dài, phẳng, và nền tảng hạ tầng dịch vụ lưu trú, ăn uống đa dạng, Vũng Tàu đáp ứng được hầu hết mọi nhu cầu hội thao, gala dinner và nghỉ dưỡng của các tập đoàn.</p>

<h2>1. Tại sao nên chọn Vũng Tàu để tổ chức Teambuilding?</h2>
<ul>
<li><strong>Vị trí thuận lợi:</strong> Dễ dàng di chuyển, không mất quá nhiều thời gian và chi phí cho phương tiện đi lại, đặc biệt là với các tuyến Xe Limousine cao cấp hiện nay.</li>
<li><strong>Bãi biển lý tưởng:</strong> Các bãi biển như Bãi Sau (Thùy Vân) rất rộng, độ dốc thoai thoải, cát mịn và an toàn cho việc setup các mô hình game khổng lồ trên biển như Đồ hơi teambuilding, phao chuối...</li>
<li><strong>Dịch vụ đa dạng:</strong> Từ resort 5 sao sang trọng (Pullman, Imperial...) đến các khu khách sạn bình dân, đáp ứng mọi ngân sách.</li>
</ul>

<h2>2. Kịch bản Teambuilding "Vươn Ra Biển Lớn" (Mẫu)</h2>
<p>Dưới đây là kịch bản teambuilding cơ bản trên bãi biển Vũng Tàu, tập trung vào tinh thần đoàn kết, vượt qua giới hạn của từng cá nhân.</p>

<h3>Phần 1: Khởi động (Warm-up)</h3>
<p>Cả đoàn tập trung tại bãi biển, MC quản trò bắt đầu với các minigame phá băng (Ice-breaker). Các đội được chia ngẫu nhiên, sau đó mỗi đội sẽ tự thiết kế Cờ đội và Slogan thật độc đáo để tạo khí thế.</p>

<h3>Phần 2: Thử thách liên hoàn trên biển</h3>
<ul>
<li><strong>Game 1 - Đồng tâm hiệp lực:</strong> Các thành viên cùng đứng trên chiếc phao dài khổng lồ, di chuyển nhịp nhàng từ điểm A đến điểm B mà không được chạm chân xuống đất.</li>
<li><strong>Game 2 - Vượt sóng ra khơi:</strong> Sử dụng thuyền phao hơi, cả đội chèo ra biển lấy cờ mục tiêu. Đòi hỏi sự phân công người lái, người chèo hợp lý.</li>
<li><strong>Game 3 - Kiếm trúc vươn cao:</strong> Xếp các ống phao thành ngọn tháp cao nhất có thể trong thời gian quy định, chống lại lực cản của sức gió biển.</li>
</ul>

<h3>Phần 3: Gala Dinner & Lửa trại (Tối)</h3>
<p>Sau một buổi chiều đốt cháy năng lượng, cả đoàn sẽ bước vào buổi tiệc BBQ hải sản dọc bờ biển. Chương trình nối tiếp bằng các tiết mục văn nghệ "cây nhà lá vườn", vinh danh cá nhân xuất sắc và kết thúc bằng vòng tay nối lớn quanh đống lửa bập bùng.</p>

<h2>3. Bảng giá tham khảo dịch vụ Teambuilding tại Vũng Tàu (Tham khảo)</h2>
<table>
  <thead>
    <tr>
      <th>Gói dịch vụ</th>
      <th>Quy mô</th>
      <th>Các hạng mục đi kèm (Bao gồm MC, Game Tools, Âm thanh)</th>
      <th>Đơn giá dự kiến (VNĐ/Người)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Gói Cơ Bản (Basic)</strong></td>
      <td>50 - 100 khách</td>
      <td>MC chuyên nghiệp, thiết bị phao cơ bản, loa kéo công suất lớn, cờ đội.</td>
      <td>250.000đ - 350.000đ</td>
    </tr>
    <tr>
      <td><strong>Gói Tiêu Chuẩn (Standard)</strong></td>
      <td>100 - 300 khách</td>
      <td>MC, Ekip Media (Quay phim chụp hình), Đồ hơi cỡ lớn, Âm thanh ánh sáng sân khấu biển.</td>
      <td>400.000đ - 550.000đ</td>
    </tr>
    <tr>
      <td><strong>Gói Cao Cấp (Premium)</strong></td>
      <td>Trên 300 khách</td>
      <td>Teambuilding concept kịch bản riêng, Flycam, Sân khấu 3D vách LED tại bãi biển, Gala quy mô.</td>
      <td>Từ 650.000đ</td>
    </tr>
  </tbody>
</table>
<p><em>Lưu ý: Bảng giá trên chỉ mang tính chất tham khảo cho hạng mục quản trò và trò chơi. Chi phí xe di chuyển, lưu trú khách sạn và ăn uống sẽ phụ thuộc vào mùa cao điểm hoặc khách sạn lựa chọn.</em></p>

<h2>4. Lời kết</h2>
<p>Tổ chức teambuilding ở Vũng Tàu chưa bao giờ là một lựa chọn lỗi thời nếu bạn biết cách thiết kế kịch bản sáng tạo và tìm kiếm đơn vị tổ chức chuyên nghiệp. Hãy để mỗi chuyến đi không chỉ là vui chơi mà còn là dịp để "lên dây cót" tinh thần cho đội ngũ nhân sự của doanh nghiệp bạn!</p>
`;

async function main() {
  console.log('Cập nhật bài viết: Tổ chức teambuilding Vũng Tàu...');
  const { error } = await supabaseAdmin
    .from('posts')
    .update({ 
      content: htmlContent, 
      excerpt: 'Hướng dẫn chi tiết kịch bản tổ chức teambuilding tại Vũng Tàu kèm bảng giá dịch vụ tham khảo dành cho doanh nghiệp trong mùa hè năm nay.', 
      updated_at: new Date().toISOString() 
    })
    .eq('id', postId);
    
  if (error) {
    console.error('Lỗi cập nhật:', error);
  } else {
    console.log('✅ Đã cập nhật thành công bài viết Vũng Tàu!');
  }
}

main();
