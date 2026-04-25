import fs from 'fs';

const SUPABASE_URL = 'https://njchsjhdkcfaouqwyutc.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qY2hzamhka2NmYW91cXd5dXRjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDA0OTY5MCwiZXhwIjoyMDg1NjI1NjkwfQ.IlMHefuzwH2DZ_2srbE2N4vyDoZVk36vMr060wNlagE';

const placeholders = [
  {
    id: "bd68d445-7cbd-4f3d-828d-e38350e75991",
    title: "Cho thuê đồ game teambuilding khổng lồ phao bơm hơi",
    content: `
      <h2>1. Tại sao nên chọn đồ game teambuilding khổng lồ phao bơm hơi?</h2>
      <p>Trong các chương trình sự kiện ngoài trời, đặc biệt là teambuilding bãi biển hoặc sân vận động, đồ game phao bơm hơi khổng lồ mang lại sự hoành tráng và thu hút trực quan. Chúng an toàn, màu sắc rực rỡ và kích thích tinh thần thi đấu của các đội.</p>
      <h3>Ưu điểm vượt trội:</h3>
      <ul>
        <li>Tuyệt đối an toàn, giảm thiểu chấn thương khi va chạm.</li>
        <li>Tạo hiệu ứng hình ảnh cực tốt cho việc quay phim, chụp ảnh truyền thông nội bộ.</li>
        <li>Phù hợp với mọi độ tuổi và thể lực.</li>
      </ul>
      <h2>2. Các mảng đồ game phao bơm hơi được ưa chuộng nhất 2026</h2>
      <p>Dịch vụ <strong>cho thuê đồ game teambuilding khổng lồ</strong> của Sự Kiện Toàn Quốc cung cấp các mô hình sau:</p>
      <ul>
        <li><strong>Đường trượt siêu tốc:</strong> Thử thách tốc độ và sự can đảm.</li>
        <li><strong>Nhà phao liên hoàn:</strong> Đòi hỏi sự phối hợp khéo léo của cả đội để vượt chướng ngại vật.</li>
        <li><strong>Bóng đụng khổng lồ:</strong> Trò chơi đối kháng cực kỳ hài hước và giải tỏa căng thẳng.</li>
        <li><strong>Thuyền phao chuối/Cầu phao:</strong> Rất phù hợp cho các sự kiện tại bãi biển hoặc công viên nước.</li>
      </ul>
      <h2>3. Dịch vụ cho thuê trọn gói tại Sự Kiện Toàn Quốc</h2>
      <p>Chúng tôi không chỉ cho thuê thiết bị mà còn cung cấp gói dịch vụ toàn diện bao gồm: Vận chuyển, bơm hơi lắp đặt tận nơi, hướng dẫn luật chơi và nhân sự hỗ trợ an toàn trong suốt chương trình. Cam kết đồ chơi luôn sạch sẽ, mới và đạt tiêu chuẩn chất lượng cao nhất.</p>
      <p><em>Liên hệ ngay với Sự Kiện Toàn Quốc để nhận báo giá ưu đãi nhất cho chương trình teambuilding sắp tới của bạn!</em></p>
    `
  },
  {
    id: "d8941951-f571-45bc-a363-e87fbbbdc5fb",
    title: "Dịch vụ set-up sân khấu teambuilding bãi biển trọn gói",
    content: `
      <h2>1. Tầm quan trọng của sân khấu teambuilding bãi biển</h2>
      <p>Sân khấu không chỉ là nơi MC điều hành chương trình mà còn là "bộ mặt" của toàn bộ sự kiện. Một sân khấu được set-up chuyên nghiệp trên bãi biển giúp nâng tầm thương hiệu, là phông nền hoàn hảo cho những bức ảnh tập thể và tạo sự phấn khích cho người tham dự ngay từ những phút đầu tiên.</p>
      <h2>2. Quy trình set-up sân khấu bãi biển chuẩn chuyên nghiệp</h2>
      <p>Tổ chức sự kiện trên cát đòi hỏi kỹ thuật set-up đặc thù hơn nhiều so với nền đất cứng. Dịch vụ <strong>set-up sân khấu teambuilding bãi biển trọn gói</strong> của chúng tôi bao gồm:</p>
      <ul>
        <li><strong>Khảo sát địa hình:</strong> Đánh giá nền cát, hướng gió, và thủy triều để xác định vị trí đặt sân khấu an toàn nhất.</li>
        <li><strong>Thi Công Khung Truss & Sàn:</strong> Sử dụng hệ thống khung truss nhôm hợp kim chống rỉ sét, chịu được gió biển. Sàn sân khấu được gia cố chống lún hiệu quả.</li>
        <li><strong>Âm thanh, Ánh sáng (AV System):</strong> Lắp đặt dàn âm thanh công suất lớn chuyên dụng cho không gian mở, chống nhiễu gió và hệ thống ánh sáng tạo hiệu ứng cho các hoạt động buổi tối (Gala Dinner).</li>
        <li><strong>Backdrop & Decor:</strong> In ấn và thi công backdrop theo thiết kế (bạt Hiflex chống sáng hoặc màn hình LED outdoor). Trang trí thêm bằng cờ phướn, cổng hơi để tăng tính nhận diện.</li>
      </ul>
      <h2>3. Tại sao chọn Sự Kiện Toàn Quốc?</h2>
      <p>Với nhiều năm kinh nghiệm thực hiện các dự án tại Vũng Tàu, Phan Thiết, Nha Trang, Phú Quốc... Chúng tôi tự tin xử lý mọi khó khăn của thời tiết, cam kết an toàn tuyệt đối, đúng tiến độ và tháo dỡ dọn dẹp sạch sẽ trả lại cảnh quan sau sự kiện.</p>
      <p><em>Nhấc máy gọi ngay cho Sự Kiện Toàn Quốc để có một sân khấu bãi biển hoành tráng!</em></p>
    `
  },
  {
    id: "e1d7cb33-d5a3-44e6-8fae-3a7327887c2d",
    title: "Top 20 game teambuilding bãi biển vui nhộn không cần đồ cụ",
    content: `
      <h2>Tại sao nên chơi game teambuilding không cần đồ cụ?</h2>
      <p>Việc tổ chức teambuilding parfois gặp rào cản về chi phí di chuyển thiết bị lớn hoặc điều kiện bãi biển không cho phép lắp đặt nhiều đồ chơi. Khi đó, các trò chơi không cần đồ cụ chính là cứu cánh tuyệt vời! Chúng linh hoạt, dễ tổ chức, tiết kiệm chi phí mà vẫn đảm bảo được mục tiêu kết nối và tạo ra những tràng cười sảng khoái.</p>
      <h2>Top Games cực "cháy" trên bãi biển</h2>
      <h3>1. Cướp cờ (Phiên bản tốc độ)</h3>
      <p>Chia làm 2 đội đứng đối diện nhau. Mỗi người được đánh số từ 1 đến N. Ở giữa cắm 1 "ngọn cờ" (có thể dùng cành cây hoặc chai nước). Khi MC hô số nào, người mang số đó của 2 đội sẽ chạy lên giành cờ về. Trò chơi kinh điển rèn luyện sự nhanh nhẹn.</p>
      <h3>2. Đồng lòng tát Biển Đông</h3>
      <p>Yêu cầu các thành viên của đội ngồi thành hàng dọc trên bãi cát. Người đi đầu dùng hai tay vớt nước biển chuyền qua đầu cho người phía sau, liên tục như vậy cho đến người cuối cùng đổ vào xô. Đội nào đổ đầy xô trước sẽ thắng. Đặc biệt thích hợp cho không khí mùa hè!</p>
      <h3>3. Tạo hình trên cát</h3>
      <p>Game mang tính sáng tạo. MC đưa ra một chủ đề (Ví dụ: Logo công ty, một con vật...). Các đội dùng mọi thứ có sẵn xung quanh (cát, vỏ sò, lá cây, thậm chí là chính các thành viên) để tạo nên bức tranh ba chiều sống động nhất.</p>
      <h3>4. Rồng rắn lên mây (Phiên bản sinh tồn)</h3>
      <p>Cả đội bám thành một hàng dài. "Đầu rồng" của đội này phải cố gắng bắt được "đuôi rồng" của đội kia. Trò chơi náo động cả bãi biển đòi hỏi sức mạnh và sự phối hợp đội nhóm.</p>
      <h2>Tổ chức Teambuilding Bãi Biển Cùng Sự Kiện Toàn Quốc</h2>
      <p>Bạn không cần đau đầu suy nghĩ. Đội ngũ MC quản trò của Sự Kiện Toàn Quốc sở hữu một kho tàng hàng trăm trò chơi từ nhẹ nhàng đến bùng nổ, dễ dàng tùy biến theo mọi địa hình và tính cách doanh nghiệp. Hãy liên hệ với chúng tôi để nhận kịch bản chi tiết!</p>
    `
  },
  {
    id: "6c07510f-fd84-4df0-8186-22a14fb694c2",
    title: "Kịch bản game teambuilding trí tuệ trong nhà (Indoor) cực hay",
    content: `
      <h2>1. Sức hút của Teambuilding Indoor Trí Tuệ</h2>
      <p>Vào mùa mưa bão hoặc khi không gian ngoài trời hạn chế, <strong>teambuilding trong nhà (Indoor)</strong> là giải pháp hoàn hảo. Thoát khỏi cái vận động tốn sức, teambuilding trí tuệ tập trung vào các kỹ năng giải quyết vấn đề, tư duy logic, đàm phán và tinh thần lãnh đạo. Trải nghiệm này mang lại sự sâu sắc và những "bài học" quý giá áp dụng trực tiếp vào công việc hàng ngày.</p>
      <h2>2. Tham khảo Kịch Bản "Escape Room: Giải Mã Bí Ẩn"</h2>
      <p>Đây là một concept cực kỳ thịnh hành, biến căn phòng hội thảo thành một mê cung trí tuệ.</p>
      <h3>Phần 1: Khởi động (Ice-breaker) - 15 phút</h3>
      <ul>
        <li><strong>Trò chơi: Nhớ mặt gọi tên.</strong> MC tổ chức trò chơi nhanh để các thành viên nhớ nhanh tên và chức vụ của nhau. Giúp phá băng và khởi động não bộ.</li>
      </ul>
      <h3>Phần 2: Trọng tâm (Challenges) - 90 phút</h3>
      <p>Chia làm nhiều trạm, mỗi trạm là một thử thách logic:</p>
      <ul>
        <li><strong>Trạm 1: Mật mã Morse.</strong> Đội chơi nhận được một đoạn âm thanh tít tè. Họ phải dùng bảng giải mã để tìm ra thông điệp giấu kín, mở khóa hộp mật thư tiếp theo.</li>
        <li><strong>Trạm 2: Kỹ năng đàm phán (Trading Game).</strong> Các đội được phát một số mảnh ghép không hoàn chỉnh. Để hoàn thành bức tranh, họ phải tìm cách trao đổi, đàm phán (thậm chí là liên minh) với các đội khác để có được mảnh ghép mình cần.</li>
        <li><strong>Trạm 3: Xây tháp Spaghetti.</strong> Dùng băng keo, ống hút và mỳ Ý để xây một cấu trúc cao nhất có thể giữ được 1 viên kẹo dẻo trên đỉnh. Trò chơi cực tốt để rèn tư duy thiết kế và làm việc nhóm dưới áp lực thời gian.</li>
      </ul>
      <h3>Phần 3: Tổng kết đúc rút (Debriefing) - 15 phút</h3>
      <p>MC cùng các đội nhóm nhìn nhận lại quá trình. Trò nào đội làm tốt? Lúc đàm phán bị lỗi ở đâu? Liên hệ trực tiếp giá trị bài học vào cách vận hành doanh nghiệp.</p>
      <h2>3. Trải nghiệm Teambuilding Khác Biệt</h2>
      <p>Sự Kiện Toàn Quốc chuyên thiết kế các kịch bản Indoor cao cấp, sử dụng phần mềm, máy chiếu tương tác và đạo cụ tinh xảo. Chúng tôi mang đến những thử thách không chỉ vui mà còn sâu sắc. Liên hệ để nhận tư vấn kịch bản thiết kế riêng!</p>
    `
  },
  {
    id: "27ae0450-9b44-41cc-9cb2-8ce047d6cfa8",
    title: "Tổ chức sự kiện teambuilding Trại Huấn Luyện Quân Đội Thép",
    content: `
      <h2>1. Concept "Trại Huấn Luyện Quân Đội Thép" là gì?</h2>
      <p>Đây không phải là một chuyến đi nghỉ dưỡng thông thường. Concept <strong>Huấn Luyện Quân Đội (Military Bootcamp)</strong> là một chương trình teambuilding đẩy người tham gia đến giới hạn chịu đựng, phá vỡ tính ỷ lại và rèn luyện "tinh thần thép". Chương trình được mô phỏng theo kỷ luật quân đội, phù hợp cho các tập đoàn muốn tái cấu trúc, xốc lại tinh thần chiến đấu cho đội ngũ Sales, hoặc huấn luyện đội ngũ quản lý nòng cốt.</p>
      <h2>2. Điểm nổi bật của chương trình</h2>
      <ul>
        <li><strong>Kỷ luật thép:</strong> Ngay từ khi nhận phòng, các thành viên phải tuân thủ nghiêm ngặt thời gian biểu: thức dậy sớm, tập thể dục, gấp nội vụ.</li>
        <li><strong>Thử thách cực hạn:</strong> Các trò chơi mô phỏng thao trường: Bò trườn qua lưới thép, vượt bùn lầy, khiêng vác đồng đội, giải cứu con tin. Đòi hỏi 100% sự tập trung và ý chí sinh tồn.</li>
        <li><strong>Tinh thần đồng đội cốt lõi:</strong> Trong trại huấn luyện, không ai bị bỏ lại phía sau. Nếu một người làm sai, cả tiểu đội sẽ chịu phạt. Đây là đòn bẩy tuyệt vời để rèn luyện sự hy sinh và gắn kết nội bộ sâu sắc.</li>
      </ul>
      <h2>3. Lịch trình tham khảo 2 Ngày 1 Đêm</h2>
      <h3>Ngày 1: Rèn luyện tính kỷ luật & Phối hợp</h3>
      <ul>
        <li><strong>Sáng:</strong> Nhận lệnh tập trung, phát quân phục, hành quân đến doanh trại. Huấn luyện kỹ năng sinh tồn cơ bản.</li>
        <li><strong>Chiều:</strong> Tham gia "Chiến dịch vượt hào", "Hành quân mang vác nặng".</li>
        <li><strong>Tối:</strong> Đốt lửa trại, chia sẻ câu chuyện vượt khó, tự phân công canh gác ban đêm.</li>
      </ul>
      <h3>Ngày 2: Chinh phục mục tiêu lớn</h3>
      <ul>
        <li><strong>Sáng:</strong> Báo động chiến đấu giả định sớm. Tham gia "Trận đánh cuối cùng" - kết hợp mật thư trí tuệ và thể lực cường độ cao.</li>
        <li><strong>Trưa:</strong> Lễ trao huân chương, tổng kết bài học và bế mạc trại huấn luyện.</li>
      </ul>
      <h2>4. Sự Kiện Toàn Quốc - Đơn vị tổ chức chuyên nghiệp</h2>
      <p>Một concept mạnh mẽ đòi hỏi ban tổ chức phải cực kỳ chuyên nghiệp để đảm bảo <strong>An Toàn Tuyệt Đối</strong>. Sự Kiện Toàn Quốc có đội ngũ y tế túc trực, huấn luyện viên có nghiệp vụ thực tiễn, trang thiết bị thao trường đạt chuẩn. Sẵn sàng mang đến một cuộc "lột xác" thực sự cho đội ngũ của bạn!</p>
    `
  },
  {
    id: "412cf259-6038-4db9-aaaa-031b26b06cf0",
    title: "Mẫu kịch bản MC quản trò teambuilding chuyên nghiệp",
    content: `
      <h2>1. Vai trò "Giác đấu" của MC Teambuilding</h2>
      <p>Nếu hệ thống âm thanh, đạo cụ là khung xương thì MC quản trò chính là linh hồn của sự kiện. Một kịch bản MC xuất sắc không chỉ giữ lửa, tạo tiếng cười mà còn khéo léo lồng ghép thông điệp ban lãnh đạo gửi gắm vào từng trò chơi.</p>
      <h2>2. Mẫu Cấu Trúc Kịch Bản MC Tham Khảo</h2>
      <p>Dưới đây là dàn ý cơ bản giúp các MC, hoặc nhân sự nội bộ (HR) tự tin dẫn dắt một chương trình tiêu chuẩn:</p>

      <h3>Phần 1: Warm-up & Khởi động (Sáng tạo năng lượng)</h3>
      <ul>
        <li><strong>Tập trung:</strong> Dùng nhạc EDM mạnh, mời gọi mọi người xếp hàng/vòng tròn.</li>
        <li><strong>Chào mừng:</strong> "Xin nhiệt liệt chào đón đại gia đình [Tên công ty] đến với ngày hội gắn kết lớn nhất năm 2026!"</li>
        <li><strong>Minigame phá băng:</strong> Các trò chơi massage tập thể, Follow the Leader, hay trò "Tôi cần, tôi cần". Mục đích để làm nóng cơ thể, phá vỡ khoảng cách.</li>
        <li><strong>Chia đội & Bầu đội trưởng:</strong> Chia đội qua hình thức bắt số ngẫu nhiên. Bầu ra người máu lửa nhất làm đội trưởng, làm slogan, thiết kế cờ đội, nhảy flashmob đội.</li>
      </ul>

      <h3>Phần 2: Main Games (Thử thách chính)</h3>
      <p>Tại mỗi game, MC cần thực hiện đủ 4 bước:</p>
      <ol>
        <li><strong>Tạo bối cảnh (Story telling):</strong> Ví dụ "Chúng ta đang đứng trên một con tàu sắp chìm..." (Để tăng tính kịch tính).</li>
        <li><strong>Phổ biến luật chơi rõ ràng:</strong> Ngắn gọn, có ví dụ minh họa bằng hành động. Đặt luật cấm/phạt rõ ràng.</li>
        <li><strong>Hô hiệu lệnh dứt khoát:</strong> "3... 2... 1... Bắt đầu!". Trong game luôn bình luận, kích động tiến độ.</li>
        <li><strong>Công bố kết quả:</strong> Công bằng, vinh danh kỹ năng tốt của đội thắng.</li>
      </ol>

      <h3>Phần 3: Bài học & Kết thúc (Debriefing)</h3>
      <ul>
        <li>Tập hợp lại thành vòng tròn lớn, nhạc nền hạ tông nhẹ nhàng, cảm xúc.</li>
        <li>MC tương tác: "Trò chơi vừa rồi làm khó anh chị ở điểm nào? Nếu được làm lại, chiến thuật sẽ thay đổi ra sao?"</li>
        <li><strong>Đúc kết thông điệp:</strong> "Không một cá nhân xuất sắc nào có thể thành công nếu thiếu đi sự hỗ trợ từ phía sau. Nhờ sự tin tưởng, chúng ta đã đưa con thuyền [Tên công ty] về đích."</li>
        <li>Chụp ảnh lưu niệm và hô vang Slogan công ty.</li>
      </ul>

      <h2>3. Dịch vụ cung cấp MC Teambuilding</h2>
      <p>Nghề MC hoạt náo cần sự linh hoạt xử lý tình huống mà không kịch bản nào có thể lường hết. Sự Kiện Toàn Quốc tự hào sở hữu đội ngũ MC Teambuilding tinh nhuệ, hoạt ngôn, năng lượng ngút ngàn, đảm bảo sự kiện của bạn sẽ bùng nổ mọi giác quan!</p>
    `
  }
];

async function updatePostContent(post) {
  const url = `${SUPABASE_URL}/rest/v1/posts?id=eq.${post.id}`;
  
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      'apikey': SERVICE_KEY,
      'Authorization': `Bearer ${SERVICE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({
      content: post.content
    })
  });
  
  if (res.ok) {
     console.log(`✅ Cập nhật thành công: ${post.title}`);
  } else {
     const text = await res.text();
     console.error(`❌ Lỗi cập nhật "${post.title}":`, text);
  }
}

async function main() {
  console.log('🚀 Đang tạo và tối ưu nội dung cho 6 bài viết Placeholder...');
  
  for (const post of placeholders) {
     await updatePostContent(post);
  }
  
  console.log(`\\n🎉 Hoàn thành! 6 bài viết hiện đang có nội dung HTML chuẩn SEO.`);
}

main().catch(console.error);
