import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing credentials');
  process.exit(1);
}

const supabaseAdmin = createClient(supabaseUrl, supabaseKey);

const postId = '925d11c2-0493-4dce-8143-0520ce7fe4a1';

const htmlContent = `
<p>Thay vì những bãi biển đầy nắng và gió, xu hướng tổ chức teambuilding tại vùng núi, đặc biệt là dưới tán rừng thông Đà Lạt đang ngày càng được nhiều doanh nghiệp ưa chuộng. Không khí se lạnh, cảnh quan thiên nhiên hoang sơ và không gian tĩnh lặng là điều kiện tuyệt vời để triển khai các concept teambuilding độc lạ, đòi hỏi tư duy sinh tồn và sự gắn kết chiều sâu.</p>

<h2>1. Tại sao là Rừng Thông Đà Lạt?</h2>
<p>Khác biệt hoàn toàn với teambuilding vận động thể lực trên biển, teambuilding Đà Lạt thiên về <strong>Trí tuệ (Intellectual)</strong> và <strong>Sinh tồn (Survival)</strong>. Dưới tán rừng thông tĩnh lặng, con người dễ dàng trút bỏ lớp vỏ bọc công sở, hòa mình vào thiên nhiên và mở lòng với đồng nghiệp hơn.</p>

<h2>2. Top 3 Concept Teambuilding Đà Lạt Đặc Sắc Nhất</h2>

<h3>Concept 1: Mật Mã Rừng Thiêng (Sinh tồn & Trí tuệ)</h3>
<ul>
<li><strong>Bối cảnh:</strong> Cả đoàn lạc vào một khu rừng hoang sơ (Hồ Tuyền Lâm, Suối Vàng...). Hệ thống định vị bị hỏng.</li>
<li><strong>Thử thách:</strong> Các đội phải sử dụng sa bàn và la bàn để tìm cách thoát ra ngoài. Trên đường đi, đội phải tìm kiếm nguyên liệu nhóm lửa, lọc nước cất, và dựng lều dã chiến.</li>
<li><strong>Ý nghĩa:</strong> Khơi dậy bản năng sinh tồn, rèn luyện kỹ năng phân công công việc dưới áp lực thiếu thốn tài nguyên.</li>
</ul>

<h3>Concept 2: Truy Tìm Kho Báu Langbiang (Amazing Race)</h3>
<ul>
<li><strong>Bối cảnh:</strong> Một bản đồ kho báu cổ bị xé thành nhiều mảnh. Các mảnh ghép được giấu tại các địa danh nổi tiếng: Thác Datanla, Thiền Viện Trúc Lâm, Rừng thông Bản Đôn...</li>
<li><strong>Thử thách:</strong> Di chuyển bằng xe Jeep hoặc Trekking đoạn ngắn. Giải mật thư tại mỗi trạm để nhận mảnh ghép tiếp theo. Thử thách có thể là: Đu dây mạo hiểm (Zipline) hoặc trượt máng băng rừng.</li>
<li><strong>Ý nghĩa:</strong> Tối ưu thời gian, phát huy thế mạnh cá nhân (người giỏi giải đố, người có thể lực tốt).</li>
</ul>

<h3>Concept 3: Camping Acoustic (Kết nối & Thư giãn sâu)</h3>
<ul>
<li><strong>Bối cảnh:</strong> Một khu glamping sang trọng giữa rừng thông.</li>
<li><strong>Hoạt động:</strong> Không có những trò chơi chạy đua mệt nhoài. Thay vào đó là workshop pha cà phê thủ công, nghệ thuật cắm bó hoa rừng, và đỉnh điểm là đêm nhạc Acoustic bên đống lửa.</li>
<li><strong>Ý nghĩa:</strong> Chữa lành (Heal) tâm hồn, tái tạo năng lượng làm việc và chia sẻ những câu chuyện chưa từng kể giữa các thành viên.</li>
</ul>

<h2>3. Địa Điểm Tổ Chức Phù Hợp</h2>
<ul>
<li><strong>Khu vực Hồ Tuyền Lâm:</strong> Cảnh quan đa dạng (rừng, hồ), phù hợp cho chèo thuyền SUP kết hợp trekking.</li>
<li><strong>Thung Lũng Tình Yêu & Đồi Mộng Mơ:</strong> An toàn, có sẵn bãi cỏ lớn để setup trò chơi team vận động nhẹ nhàng.</li>
<li><strong>Thác Datanla:</strong> Rất phù hợp nếu doanh nghiệp muốn nhân sự trải nghiệm các trò chơi mạo hiểm như Zipline, Highwire.</li>
</ul>

<h2>4. Lưu ý khi tổ chức Teambuilding Đà Lạt</h2>
<p>Nhiệt độ Đà Lạt có thể thay đổi rất nhanh từ sáng đến chiều. Doanh nghiệp cần nhắc nhở nhân viên chuẩn bị áo khoác gió, giày thể thao chuyên dụng có độ bám tốt để đi rừng. Đặc biệt, phải luôn có phương án y tế dự phòng cho các trường hợp vắt cắn hay dị ứng côn trùng.</p>
`;

async function main() {
  console.log('Cập nhật bài viết: Concept teambuilding rừng thông Đà Lạt...');
  const { error } = await supabaseAdmin
    .from('posts')
    .update({ 
      content: htmlContent, 
      excerpt: 'Khám phá 3 concept tổ chức teambuilding cực chất tại rừng thông Đà Lạt kết hợp giữa sinh tồn, trí tuệ và nghỉ dưỡng chữa lành cho doanh nghiệp.', 
      updated_at: new Date().toISOString() 
    })
    .eq('id', postId);
    
  if (error) {
    console.error('Lỗi cập nhật:', error);
  } else {
    console.log('✅ Đã cập nhật thành công bài viết Đà Lạt!');
  }
}

main();
