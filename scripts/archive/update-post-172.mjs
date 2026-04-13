import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const newContent = `<h2>Tóm Tắt Nhanh Bản Chất Kẻ Hủy Diệt Tài Khoản</h2>
<p>Thuật ngữ <strong>Margin Call</strong> chính là lời cảnh báo "Sắp hết tiền" được phát đi từ sàn giao dịch khi bạn đang gồng lỗ quá sát mép tài khoản. Trong khi đó, <strong>Stop Out</strong> lại là mức án tử hình không thể kháng cáo: Sàn môi giới sẽ tự động chủ động đóng toàn bộ các lệnh đang mở của bạn để bảo vệ tài khoản không bị âm thành tiền nợ (Negative Balance Protection). Tình trạng "cháy tài khoản" này là hậu quả nhãn tiền của việc vào khối lượng Lot quá lớn, gồng lỗ vô kỷ luật kết hợp cùng việc lạm dụng đòn bẩy (Leverage) mà không hề có phương án kiểm soát rủi ro.</p>

<figure>
  <img src="https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/post-images/margin_featured.png" alt="Margin call la gi trong forex" loading="lazy" />
  <figcaption>Tiếng vọng từ tử thần - Lời kêu gọi nạp thêm tiền vào tài khoản càng nhanh càng tốt.</figcaption>
</figure>

<h2>1. Margin Call (Lệnh Gọi Ký Quỹ) - Tiếng Chuông Báo Tử Từ Sàn</h2>
<p>Khi bạn tham gia giao dịch với đòn bẩy tài chính (Leverage), bạn thực chất chỉ cần ký quỹ một khoản tiền rất nhỏ (gọi là Margin) để đánh một cái lệnh siêu to khổng lồ. Tuy nhiên, rủi ro xuất hiện khi giá tiền tệ chạy ngược lại hoàn toàn so với hướng nhận định của bạn, khiến tài khoản của bạn bị âm dần vào gần hết số tiền Margin đó để duy trì trạng thái gồng lỗ.</p>
<p>Lúc này, hệ thống máy chủ của sàn giao dịch sẽ tự động gửi một thông báo <strong>Margin Call</strong> (thường hiển thị khi Mức Ký Quỹ - Margin Level rớt xuống mốc 100%). Màn hình MT4/MT5 của bạn thường sẽ nhấp nháy chuyển sang màu Đỏ dạ quang hoặc Vàng rực để cảnh báo tình trạng khẩn cấp. Bạn sẽ không thể mở thêm bất kỳ lệnh mới nào nếu không <a href="/kien-thuc-forex/san-forex-nap-rut-ngan-hang-vn">nạp thêm tiền vào sàn giao dịch Forex</a> ngay lập tức.</p>

<h2>2. Stop Out (Lệnh Cắt Thanh Lý) - Nhát Kiếm Đoạt Mạng</h2>
<p>Nếu bạn cố tình phớt lờ lệnh Margin Call, không chịu cắt bớt các lệnh đang thua lỗ và cũng kiên quyết không nạp thêm giáp (tiền duy trì), thì lưỡi hái tử thần sẽ chuẩn bị giáng xuống. Đó là lúc thảm kịch <strong>Stop Out</strong> chính thức bị kích hoạt (Thường xảy ra khi Margin Level rớt xuống dưới 50% hoặc 20% tùy thuộc vào quy định chính sách của từng sàn).</p>

<figure>
  <img src="https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/post-images/margin_illu_2.png" alt="Stop out tu dong dong lenh" loading="lazy" />
  <figcaption>Thình lình cắt đứt dây cứu sinh, lệnh giao dịch bắt buộc phải bị thanh lý đi vào cát bụi!</figcaption>
</figure>

<p>Sàn môi giới lúc này không còn lựa chọn nào khác buộc phải đóng ép trả lệnh toàn bộ các vị thế đang lỗ của bạn, thông thường sẽ ưu tiên cắt từ lệnh có mức lỗ lớn nhất cho đến lệnh lỗ nhỏ nhất. Mục đích của sự lạnh lùng này là để giữ cho tài khoản của bạn không bao giờ bị âm xuyên vào kho tiền của sàn (Sàn không có nghĩa vụ gánh khoản nợ giao dịch giùm bạn). Đây đích thị là "sự kiện cháy tài khoản" huyền thoại, một nỗi đau đầy nước mắt mà hầu như bất cứ tân binh Forex nào cũng phải trải qua một lần trong đời.</p>

<h2>3. Vòng Đời Của Một Tài Khoản Sắp Cháy (Bảng Phân Tích)</h2>
<p>Để hiểu rõ hơn quá trình từ lúc bắt đầu lỗ cho đến lúc ra đê, hãy cùng mổ xẻ các thông số cốt lõi sau. Nắm rõ chúng mới biết <a href="/kien-thuc-forex/bao-nhieu-tien-de-bat-dau-trade-forex">cần chuẩn bị bao nhiêu vốn để bắt đầu trade Forex</a> an toàn:</p>

<table>
  <thead>
    <tr>
      <th>Thông số báo động (Chỉ báo)</th>
      <th>Mô tả trạng thái hiện tại</th>
      <th>Hậu quả và Cách xử lý lệnh</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Free Margin (Ký Quỹ Dư)</strong></td>
      <td>Vẫn còn tiền rảnh rỗi trong tài khoản đang dương rủng rỉnh.</td>
      <td>Thoải mái mở hằng hà sa số các lệnh mới. Hoàn toàn an toàn.</td>
    </tr>
    <tr>
      <td><strong>Margin Level = 100%</strong></td>
      <td>Báo động đỏ (Margin Call kích hoạt). Vốn = Ký Quỹ.</td>
      <td>Màn hình chớp đỏ. Không được phép đánh lệnh bồi thêm. Phải nạp tiền vào.</td>
    </tr>
    <tr>
      <td><strong>Margin Level &lt; 50%</strong></td>
      <td>Ranh giới sinh tử mong manh (Stop Out chớp nhoáng).</td>
      <td>Máy chủ của hệ thống sàn sẽ tự động cắt phăng các lệnh lỗ sâu nhất.</td>
    </tr>
    <tr>
      <td><strong>Equity = 0 (Thậm chí âm)</strong></td>
      <td>Cháy rụi toàn bộ (Crash). Trạng thái nợ rủi ro.</td>
      <td>Chính thức xóa sổ vốn. Bạn phải làm lại từ đầu với tiền thật mới.</td>
    </tr>
  </tbody>
</table>

<h2>4. Nguyên Nhân Xảy Ra Thảm Họa Và Cách Chữa Cháy</h2>

<figure>
  <img src="https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/post-images/margin_illu_1.png" alt="Lam the nao de khong bi margin call" loading="lazy" />
  <figcaption>Nhồi nhét khối lượng Lot quá khủng sẽ bóp nát khoảng an toàn của một quy mô tài khoản mỏng manh.</figcaption>
</figure>

<ul>
  <li><strong>Nguyên nhân thứ nhất: Lỗi nhồi Lot Size quá to:</strong> Vào khối lượng Lot khổng lồ so với sức chịu đựng của tài khoản gốc. (Ví dụ: Đánh thẳng 1 lot Standard trên 1 tài khoản chỉ vỏn vẹn 100$). Chỉ cần giá đi chệch 1 PIP là bạn đứt hơi. Đây là lúc bạn cần học ngay <a href="/kien-thuc-forex/cach-tinh-lot-size-chuan-xac-trong-forex">cách tính Lot Size chuẩn xác qua máy tính</a>.</li>
  <li><strong>Nguyên nhân thứ hai: Tội đồ Không đặt Stoploss:</strong> Tâm lý "cồng rễ" khiến bạn luôn có một niềm tin mù quáng rằng giá thế nào cũng sẽ quay trở lại vị trí hòa vốn, nên bạn quyết định gỡ bỏ lệnh Dừng Lỗ (Stoploss) đi để cản bị râu nến quét quấy rối.</li>
</ul>

<figure>
  <img src="https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/post-images/margin_illu_3.png" alt="Xay dung tuong thanh quan ly von an toan" loading="lazy" />
  <figcaption>Kiểm soát chặt chẽ điểm chạm dừng lỗ chính là việc bạn xây dựng nên tường thành chống sạt lở cho quỹ vốn gốc.</figcaption>
</figure>

<h2>Câu Hỏi Thường Gặp Của Newbie Từng Cháy Tài Khoản (FAQ)</h2>
<h3>Tôi lỡ bị Stop Out và tài khoản đang hiện số Đô La âm (-$5), tôi có bị sàn đòi nợ tóm cổ không?</h3>
<p>Hãy yên tâm, đa số các sàn môi giới uy tín hiện nay (như Exness, XTB, IC Markets) đều cung cấp chính sách Bảo Vệ Số Dư Âm (Negative Balance Protection). Điều này có nghĩa là khi giá giật quá mạnh khiến lệnh cháy đâm thủng 0 về dưới âm vốn, hệ thống sẽ tự động bù đắp và gạch xóa số nợ đó kéo tài khoản của bạn về mốc $0. Bạn không phải đền bù khoản nợ phát sinh vô lý đó cho sàn.</p>
<h3>Làm sao để biết giới hạn Margin Call nằm ở mức nào trước khi đặt lệnh?</h3>
<p>Mỗi công ty môi giới đều quy định cực kỳ rõ ràng mức tỷ lệ Margin Call (thông thường là 100%) và Stop Out (thường là mức 50% hoặc 20%) trong bảng thông số tài khoản trên trang chủ của họ. Ví dụ ở chuẩn các tài khoản Standard thông dụng thì Stop Out rơi vào 20%, nghĩa là khi số tiền vốn thực (Equity) rớt chỉ còn bằng 20% số tiền cược (Margin) thì lệnh sẽ tự nổ tung. Bạn phải tra cứu kỹ trước khi nạp vốn.</p>
<h3>Mẹo để không bao giờ trải qua cảm giác Margin Call ám ảnh này?</h3>
<p>Bí quyết đơn thuần chỉ gói gọn ở hai bước thép: Một là tuyệt đối luôn vào lệnh với điểm cài đặt Stoploss cứng được thiết lập sẵn máy, cấm dời xa điểm cắt. Hai là căn chỉnh khối lượng hợp lý (Lot size) sao cho nếu lệnh có chạm kịch điểm SL thì số tiền lỗ cũng tuyệt nhiên không được vượt quá ngưỡng giới hạn 2% - tuân thủ nguyên tắc cốt tử của <a href="/kien-thuc-forex/risk-reward-rr-la-gi-bi-quyet-quan-ly-von">tỷ lệ R:R và quản trị vốn sinh tồn</a>.</p>
`;

async function updatePost() {
  const { error } = await sb.from('posts').update({ content: newContent }).eq('id', 172);
  if (error) {
    console.error('Failed to update:', error);
  } else {
    console.log('Successfully updated post 172');
  }
}

updatePost();
