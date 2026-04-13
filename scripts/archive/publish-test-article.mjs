import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const now = new Date().toISOString();
const fiveMinAgo = new Date(Date.now() - 5*60*1000).toISOString();

const article = {
  title: '5 Sai Lầm Chết Người Khi Chọn Sàn Forex',
  slug: '5-sai-lam-chet-nguoi-khi-chon-san-forex',
  excerpt: 'Chọn sai sàn Forex có thể khiến bạn mất trắng. Tìm hiểu 5 sai lầm phổ biến nhất mà 90% trader mới mắc phải.',
  category: 'kien-thuc-forex',
  tags: ['forex', 'sàn giao dịch', 'người mới'],
  meta_title: '5 Sai Lầm Chết Người Khi Chọn Sàn Forex 2026',
  meta_description: 'Cảnh báo 5 sai lầm phổ biến nhất khi chọn sàn Forex và cách phòng tránh hiệu quả.',
  featured_image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200',
  featured_image_alt: '5 Sai Lầm Chết Người Khi Chọn Sàn Forex',
  is_published: false,
  scheduled_at: fiveMinAgo,
  published_at: now,
  content: `<h2>Tại sao việc chọn sàn Forex quan trọng đến vậy?</h2>
<p>Trong thế giới giao dịch ngoại hối, việc chọn sàn Forex giống như chọn ngân hàng để gửi tiền. Một sàn uy tín sẽ bảo vệ vốn của bạn, cung cấp môi trường giao dịch minh bạch và hỗ trợ bạn phát triển. Ngược lại, một sàn "rác" có thể khiến bạn mất trắng chỉ trong một đêm.</p>
<p>Theo thống kê từ các cơ quan quản lý tài chính quốc tế, <strong>hơn 70% trader thua lỗ</strong> không phải vì chiến lược sai, mà vì họ đã chọn nhầm nền tảng giao dịch ngay từ đầu.</p>

<h2>Sai lầm #1: Chỉ nhìn vào Bonus mà quên kiểm tra giấy phép</h2>
<p>Đây là cái bẫy kinh điển nhất. Nhiều sàn "ma" tung ra các chương trình <strong>bonus 100%, thậm chí 200%</strong> để thu hút trader mới. Bạn nạp 500$, được thưởng thêm 500$ — nghe thì hấp dẫn, nhưng thực tế phía sau là hàng loạt điều kiện rút tiền khắt khe.</p>
<p><strong>Cách phòng tránh:</strong> Luôn ưu tiên kiểm tra giấy phép trước. Các cơ quan quản lý uy tín: <strong>FCA (Anh), ASIC (Úc), CySEC (Síp), FSA (Seychelles)</strong>.</p>

<h2>Sai lầm #2: Bỏ qua yếu tố Spread và phí giao dịch ẩn</h2>
<p>Nhiều trader mới chỉ quan tâm đến giao diện đẹp, mà quên mất rằng <strong>spread (chênh lệch giá mua-bán)</strong> chính là chi phí bạn phải trả cho MỌI lệnh giao dịch.</p>
<p>Với 10 lệnh/ngày và spread trung bình 2 pip trên EUR/USD, bạn đang mất khoảng <strong>20$ mỗi ngày chỉ riêng tiền phí</strong>. Trong một tháng lên tới 400-600$.</p>
<p><strong>Giải pháp:</strong> So sánh spread của ít nhất 3-5 sàn. Các sàn như <a href="/exness/">Exness</a> hay <a href="/xm/">XM</a> cung cấp spread từ 0.0 pip trên tài khoản ECN.</p>

<h2>Sai lầm #3: Không kiểm tra tốc độ rút tiền</h2>
<p>Bạn có thể thắng lớn trên thị trường, nhưng nếu không rút được tiền thì mọi thứ đều vô nghĩa. Chiêu "giữ tiền" phổ biến:</p>
<ul>
<li><strong>Yêu cầu xác minh lặp đi lặp lại</strong></li>
<li><strong>Thời gian xử lý kéo dài:</strong> Hứa 24h nhưng mất 2-3 tuần</li>
<li><strong>Phí rút tiền khổng lồ:</strong> 5-10% cho mỗi lần rút</li>
</ul>
<p><strong>Mẹo hay:</strong> Trước khi nạp lớn, hãy thử nạp 50-100$ và rút thử. Nếu suôn sẻ dưới 24h, đó là dấu hiệu tốt.</p>

<h2>Sai lầm #4: Dùng đòn bẩy quá cao</h2>
<p>Nhiều sàn quảng cáo đòn bẩy <strong>1:2000 hoặc 1:3000</strong>. Với đòn bẩy 1:2000, chỉ cần thị trường đi ngược <strong>0.05%</strong> là bạn mất sạch tài khoản.</p>
<p><strong>Lời khuyên:</strong> Người mới nên bắt đầu với đòn bẩy <strong>không quá 1:100</strong>.</p>

<h2>Sai lầm #5: Không đọc đánh giá từ cộng đồng trader thực</h2>
<p>Đừng chỉ tin vào website chính thức — họ sẽ tự khen mình. Hãy kiểm tra:</p>
<ul>
<li><strong>WikiFX:</strong> Kiểm tra giấy phép sàn Forex lớn nhất thế giới</li>
<li><strong>Trustpilot:</strong> Đánh giá độc lập với hàng ngàn review</li>
<li><strong><a href="/">Sàn Uy Tín</a>:</strong> Bảng xếp hạng các sàn uy tín nhất cho trader Việt</li>
</ul>

<h2>Checklist chọn sàn Forex an toàn</h2>
<table>
<thead><tr><th>Tiêu chí</th><th>Sàn uy tín</th><th>Sàn "rác"</th></tr></thead>
<tbody>
<tr><td>Giấy phép</td><td>FCA, ASIC, CySEC</td><td>Không có hoặc mờ ám</td></tr>
<tr><td>Spread</td><td>0.0 - 1.5 pip</td><td>3+ pip</td></tr>
<tr><td>Rút tiền</td><td>Dưới 24 giờ</td><td>Kéo dài, nhiều điều kiện</td></tr>
<tr><td>Đòn bẩy</td><td>1:30 - 1:500</td><td>1:2000+</td></tr>
<tr><td>Đánh giá</td><td>4+ sao WikiFX</td><td>Nhiều khiếu nại</td></tr>
</tbody>
</table>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Sàn Forex nào tốt nhất cho người mới 2026?</h3>
<p>Exness (spread thấp, rút tiền nhanh) và XM (bonus hấp dẫn, nền tảng dễ dùng) được đánh giá cao nhất cho trader Việt Nam.</p>
<h3>Có nên giao dịch trên sàn không có giấy phép?</h3>
<p>Tuyệt đối không. Rủi ro mất trắng cực kỳ cao và bạn không có bất kỳ sự bảo vệ pháp lý nào.</p>
<h3>Làm sao nhận biết sàn Forex lừa đảo?</h3>
<p>Dấu hiệu: (1) Hứa lợi nhuận cố định, (2) Không công khai giấy phép, (3) Khó rút tiền, (4) Spam quảng cáo quá hấp dẫn.</p>

<p>Hãy luôn đặt an toàn lên hàng đầu và tham khảo <a href="/#ranking">bảng xếp hạng sàn uy tín</a> trước khi quyết định.</p>`
};

const { data, error } = await sb.from('posts').insert([article]).select('id, title, slug').single();
if (error) {
  console.error('INSERT ERROR:', error.message);
  process.exit(1);
}
console.log('✅ Bài viết đã được chèn:', JSON.stringify(data));
process.exit(0);
