import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
config({ path: '.env.local' });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
console.log('URL:', url);
console.log('Key:', key?.substring(0, 20) + '...');
const supabase = createClient(url, key);

const posts = [
    {
        title: "Forex Là Gì? Hướng Dẫn Toàn Diện Cho Người Mới Bắt Đầu 2026",
        slug: "forex-la-gi-huong-dan-toan-dien",
        excerpt: "Tìm hiểu Forex là gì, cách thị trường ngoại hối hoạt động và những kiến thức nền tảng giúp bạn tự tin bước vào thế giới giao dịch tiền tệ.",
        category: "kien-thuc",
        tags: ["forex là gì", "thị trường ngoại hối", "forex cơ bản", "giao dịch tiền tệ"],
        meta_title: "Forex Là Gì? Hướng Dẫn Toàn Diện Cho Người Mới 2026",
        meta_description: "Forex là gì? Bài viết giải thích chi tiết thị trường ngoại hối, cách giao dịch Forex, các cặp tiền tệ phổ biến và lợi ích khi tham gia thị trường Forex.",
        featured_image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
        featured_image_alt: "Biểu đồ giao dịch Forex trên màn hình máy tính",
        content: `<h2>Forex là gì?</h2>
<p>Forex (Foreign Exchange) là thị trường giao dịch ngoại hối lớn nhất thế giới, nơi các đồng tiền được mua bán liên tục 24 giờ mỗi ngày, 5 ngày trong tuần. Khối lượng giao dịch hàng ngày trên thị trường Forex vượt quá 7.5 nghìn tỷ USD, biến nó trở thành thị trường tài chính có thanh khoản cao nhất toàn cầu.</p>
<p>Không giống như thị trường chứng khoán tập trung tại các sàn giao dịch cụ thể, Forex hoạt động phi tập trung (OTC - Over The Counter). Điều này có nghĩa là các giao dịch diễn ra trực tiếp giữa hai bên thông qua mạng lưới ngân hàng, tổ chức tài chính và nhà môi giới trên toàn thế giới.</p>
<img src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=700&q=80" alt="Phân tích biểu đồ Forex trên nhiều màn hình" />
<h2>Các cặp tiền tệ phổ biến trong Forex</h2>
<p>Trong giao dịch Forex, bạn luôn giao dịch theo cặp tiền tệ. Mỗi cặp bao gồm đồng tiền cơ sở (base currency) và đồng tiền định giá (quote currency). Dưới đây là bảng tổng hợp các cặp tiền phổ biến nhất:</p>
<table><thead><tr><th>Cặp tiền</th><th>Tên gọi</th><th>Đặc điểm</th><th>Spread trung bình</th></tr></thead><tbody>
<tr><td>EUR/USD</td><td>Euro/Đô la Mỹ</td><td>Thanh khoản cao nhất</td><td>0.6-1.0 pip</td></tr>
<tr><td>GBP/USD</td><td>Bảng Anh/Đô la Mỹ</td><td>Biến động mạnh</td><td>1.0-2.0 pip</td></tr>
<tr><td>USD/JPY</td><td>Đô la Mỹ/Yên Nhật</td><td>Ổn định, dễ dự đoán</td><td>0.7-1.2 pip</td></tr>
<tr><td>AUD/USD</td><td>Đô la Úc/Đô la Mỹ</td><td>Liên quan tới hàng hóa</td><td>1.0-1.5 pip</td></tr>
<tr><td>USD/CHF</td><td>Đô la Mỹ/Franc Thụy Sĩ</td><td>Cặp tiền trú ẩn</td><td>1.0-1.8 pip</td></tr>
</tbody></table>
<h2>Tại sao nên giao dịch Forex?</h2>
<p>Thị trường Forex mang lại nhiều lợi thế vượt trội so với các kênh đầu tư truyền thống. Đầu tiên là tính thanh khoản cực cao — bạn có thể mua bán gần như bất kỳ khối lượng nào mà không lo thiếu người đối ứng. Thứ hai, thị trường hoạt động liên tục từ thứ Hai đến thứ Sáu, cho phép bạn giao dịch vào bất kỳ thời điểm nào phù hợp với lịch trình cá nhân.</p>
<p>Một ưu điểm nổi bật khác là đòn bẩy tài chính. Hầu hết các sàn Forex cho phép sử dụng đòn bẩy từ 1:100 đến 1:500, nghĩa là bạn chỉ cần số vốn nhỏ để kiểm soát vị thế lớn hơn nhiều lần. Tuy nhiên, cần lưu ý rằng đòn bẩy là con dao hai lưỡi — nó có thể khuếch đại cả lợi nhuận lẫn thua lỗ.</p>
<h2>Các phiên giao dịch chính</h2>
<p>Thị trường Forex được chia thành 3 phiên giao dịch chính, tương ứng với giờ làm việc của các trung tâm tài chính lớn:</p>
<ul>
<li><strong>Phiên Á (Tokyo):</strong> 6:00 - 15:00 (giờ Việt Nam) — Biến động vừa phải, phù hợp scalping</li>
<li><strong>Phiên Âu (London):</strong> 14:00 - 23:00 — Phiên giao dịch sôi động nhất với thanh khoản cao</li>
<li><strong>Phiên Mỹ (New York):</strong> 19:00 - 4:00 sáng hôm sau — Biến động mạnh, đặc biệt khi trùng với phiên Âu</li>
</ul>
<h2>Những thuật ngữ Forex quan trọng</h2>
<p>Trước khi bắt đầu giao dịch, bạn cần nắm vững một số thuật ngữ quan trọng. <strong>Pip</strong> là đơn vị đo lường nhỏ nhất của sự thay đổi giá, thường là chữ số thập phân thứ 4. <strong>Lot</strong> là đơn vị khối lượng giao dịch — 1 lot tiêu chuẩn bằng 100,000 đơn vị tiền tệ cơ sở. <strong>Spread</strong> là chênh lệch giữa giá mua (Ask) và giá bán (Bid), đây cũng là chi phí giao dịch chính mà bạn phải trả cho nhà môi giới.</p>
<p>Ngoài ra, <strong>Margin</strong> là số tiền ký quỹ cần thiết để mở một vị thế, và <strong>Leverage</strong> (đòn bẩy) cho phép bạn giao dịch với số tiền lớn hơn số vốn thực tế. Để hiểu sâu hơn về cách quản lý vốn hiệu quả, bạn có thể tham khảo thêm tại <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>
<h2>Bước đầu tiên để giao dịch Forex</h2>
<p>Nếu bạn đã sẵn sàng bắt đầu, hãy thực hiện theo các bước sau: Tìm hiểu kiến thức cơ bản thông qua các khóa học và tài liệu uy tín. Tiếp theo, mở tài khoản demo tại một sàn giao dịch được cấp phép để thực hành mà không rủi ro mất tiền thật. Sau khi đã tự tin với chiến lược của mình, bạn có thể chuyển sang tài khoản thực với số vốn nhỏ và tăng dần theo thời gian.</p>
<p>Quan trọng nhất, hãy luôn giao dịch có kỷ luật, tuân thủ kế hoạch quản lý rủi ro và không ngừng học hỏi. Thị trường Forex luôn thay đổi, và chỉ những trader biết thích nghi mới có thể thành công lâu dài. Tham khảo thêm các bài phân tích chuyên sâu tại <a href="https://cachdautu.com/">cachdautu.com</a> để cập nhật xu hướng thị trường mới nhất.</p>`
    },
    {
        title: "Top 10 Sàn Forex Uy Tín Nhất Việt Nam 2026 – So Sánh Chi Tiết",
        slug: "top-san-forex-uy-tin-viet-nam",
        excerpt: "Danh sách 10 sàn Forex uy tín được trader Việt Nam tin dùng nhất năm 2026, kèm đánh giá chi tiết về phí, đòn bẩy và giấy phép hoạt động.",
        category: "review",
        tags: ["sàn forex uy tín", "chọn sàn forex", "sàn giao dịch", "top sàn forex"],
        meta_title: "Top 10 Sàn Forex Uy Tín Nhất Việt Nam 2026 – So Sánh",
        meta_description: "So sánh chi tiết 10 sàn Forex uy tín nhất cho trader Việt Nam 2026. Đánh giá spread, đòn bẩy, giấy phép và trải nghiệm giao dịch thực tế.",
        featured_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        featured_image_alt: "So sánh các sàn giao dịch Forex trên màn hình laptop",
        content: `<h2>Tiêu chí chọn sàn Forex uy tín</h2>
<p>Việc lựa chọn sàn Forex uy tín là bước quan trọng nhất quyết định sự an toàn cho số vốn của bạn. Một sàn giao dịch tốt không chỉ cung cấp nền tảng giao dịch ổn định mà còn phải được quản lý bởi các cơ quan tài chính uy tín trên thế giới. Trong bối cảnh thị trường Forex tại Việt Nam ngày càng sôi động, trader cần đặc biệt cẩn trọng với các sàn không có giấy phép hoặc có dấu hiệu lừa đảo.</p>
<p>Khi đánh giá một sàn Forex, có 5 tiêu chí then chốt cần xem xét: giấy phép hoạt động từ cơ quan quản lý uy tín (FCA, ASIC, CySEC), mức spread và phí giao dịch cạnh tranh, tốc độ khớp lệnh nhanh chóng, chính sách nạp rút tiền thuận tiện cho người Việt, và chất lượng hỗ trợ khách hàng tiếng Việt.</p>
<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80" alt="Bảng so sánh sàn Forex uy tín trên dashboard" />
<h2>Bảng so sánh 10 sàn Forex hàng đầu 2026</h2>
<table><thead><tr><th>Sàn</th><th>Giấy phép</th><th>Spread EUR/USD</th><th>Đòn bẩy tối đa</th><th>Nạp tối thiểu</th><th>Đánh giá</th></tr></thead><tbody>
<tr><td>XM</td><td>CySEC, ASIC</td><td>0.6 pip</td><td>1:888</td><td>$5</td><td>⭐ 9.2/10</td></tr>
<tr><td>Exness</td><td>FCA, CySEC</td><td>0.3 pip</td><td>Unlimited</td><td>$1</td><td>⭐ 9.5/10</td></tr>
<tr><td>IC Markets</td><td>ASIC, CySEC</td><td>0.1 pip</td><td>1:500</td><td>$200</td><td>⭐ 9.3/10</td></tr>
<tr><td>FBS</td><td>IFSC, CySEC</td><td>0.5 pip</td><td>1:3000</td><td>$1</td><td>⭐ 8.8/10</td></tr>
<tr><td>Pepperstone</td><td>FCA, ASIC</td><td>0.1 pip</td><td>1:500</td><td>$200</td><td>⭐ 9.1/10</td></tr>
<tr><td>AvaTrade</td><td>ASIC, FSA</td><td>0.9 pip</td><td>1:400</td><td>$100</td><td>⭐ 8.7/10</td></tr>
<tr><td>FXTM</td><td>FCA, CySEC</td><td>0.5 pip</td><td>1:1000</td><td>$10</td><td>⭐ 8.9/10</td></tr>
<tr><td>Tickmill</td><td>FCA, CySEC</td><td>0.1 pip</td><td>1:500</td><td>$100</td><td>⭐ 8.6/10</td></tr>
<tr><td>OctaFX</td><td>CySEC</td><td>0.6 pip</td><td>1:500</td><td>$25</td><td>⭐ 8.5/10</td></tr>
<tr><td>HFM</td><td>FCA, CySEC</td><td>0.8 pip</td><td>1:1000</td><td>$5</td><td>⭐ 8.4/10</td></tr>
</tbody></table>
<h2>Phân tích chi tiết từng sàn</h2>
<h3>Exness – Sàn phổ biến nhất Việt Nam</h3>
<p>Exness nổi bật với chính sách đòn bẩy không giới hạn (Unlimited Leverage), nạp rút siêu nhanh qua ngân hàng Việt Nam và spread cực thấp từ 0.3 pip. Sàn được quản lý bởi FCA (Anh) và CySEC (Síp), hai cơ quan giám sát tài chính hàng đầu thế giới. Đặc biệt, Exness hỗ trợ nạp tiền qua nhiều kênh phổ biến tại Việt Nam như Internet Banking, ví MoMo, và thẻ ngân hàng nội địa.</p>
<h3>IC Markets – Lựa chọn của trader chuyên nghiệp</h3>
<p>IC Markets là sàn được ưa chuộng bởi các trader sử dụng chiến lược scalping và EA (Expert Advisor) nhờ tốc độ khớp lệnh cực nhanh và spread raw từ 0.0 pip. Sàn cung cấp cả MT4, MT5 và cTrader, đáp ứng nhu cầu đa dạng của trader. Với giấy phép ASIC từ Úc, IC Markets đảm bảo sự minh bạch và bảo vệ quỹ khách hàng tối đa.</p>
<h2>Những lưu ý khi chọn sàn Forex</h2>
<p>Đừng chỉ nhìn vào mức spread thấp hay đòn bẩy cao để quyết định. Hãy ưu tiên các sàn có giấy phép từ cơ quan quản lý Tier-1 như FCA, ASIC — đây là dấu hiệu cho thấy sàn tuân thủ các quy định nghiêm ngặt về bảo vệ nhà đầu tư. Ngoài ra, hãy kiểm tra chính sách segregated accounts (tách biệt tài khoản khách hàng) và chế độ bảo hiểm tiền gửi.</p>
<p>Điều quan trọng là luôn thử nghiệm trên tài khoản demo trước khi nạp tiền thật. Xem thêm hướng dẫn chi tiết về cách chọn sàn phù hợp và các chiến lược giao dịch hiệu quả tại <a href="https://cachdautu.com/">Cách Đầu Tư</a>. Bên cạnh đó, hãy tham gia các cộng đồng trader Việt Nam để học hỏi kinh nghiệm thực tế từ những người đi trước.</p>
<h2>Cảnh báo sàn Forex lừa đảo</h2>
<p>Bên cạnh các sàn uy tín, thị trường cũng tồn tại nhiều sàn lừa đảo. Dấu hiệu nhận biết bao gồm: cam kết lợi nhuận cố định cao bất thường, không có giấy phép hoạt động rõ ràng, yêu cầu nạp thêm tiền liên tục mà không cho rút, và sử dụng chiêu trò giới thiệu hoa hồng đa cấp. Hãy luôn kiểm tra kỹ thông tin sàn trên website của các cơ quan quản lý trước khi mở tài khoản. Để cập nhật danh sách sàn lừa đảo mới nhất, hãy theo dõi <a href="https://cachdautu.com/">cachdautu.com</a> thường xuyên.</p>`
    },
    {
        title: "Phân Tích Kỹ Thuật Forex: 7 Chỉ Báo Quan Trọng Trader Phải Biết",
        slug: "phan-tich-ky-thuat-forex-chi-bao-quan-trong",
        excerpt: "Tổng hợp 7 chỉ báo phân tích kỹ thuật phổ biến nhất trong giao dịch Forex, hướng dẫn cách sử dụng hiệu quả cho người mới.",
        category: "kien-thuc",
        tags: ["phân tích kỹ thuật", "chỉ báo forex", "RSI", "MACD", "Bollinger Bands"],
        meta_title: "Phân Tích Kỹ Thuật Forex: 7 Chỉ Báo Quan Trọng Nhất",
        meta_description: "Hướng dẫn chi tiết 7 chỉ báo phân tích kỹ thuật Forex quan trọng nhất: RSI, MACD, Moving Average, Bollinger Bands và cách áp dụng thực tế.",
        featured_image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
        featured_image_alt: "Biểu đồ phân tích kỹ thuật với các chỉ báo Forex",
        content: `<h2>Phân tích kỹ thuật là gì?</h2>
<p>Phân tích kỹ thuật (Technical Analysis) là phương pháp dự đoán xu hướng giá trong tương lai dựa trên dữ liệu lịch sử về giá và khối lượng giao dịch. Khác với phân tích cơ bản tập trung vào các yếu tố kinh tế vĩ mô, phân tích kỹ thuật tin rằng mọi thông tin đều đã được phản ánh vào giá, và lịch sử có xu hướng lặp lại.</p>
<p>Trong giao dịch Forex, phân tích kỹ thuật đóng vai trò then chốt giúp trader xác định điểm vào lệnh, điểm thoát lệnh và mức cắt lỗ chính xác. Dưới đây là 7 chỉ báo quan trọng nhất mà mọi trader đều cần nắm vững.</p>
<img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=700&q=80" alt="Màn hình phân tích kỹ thuật với nhiều chỉ báo" />
<h2>Bảng tổng hợp 7 chỉ báo kỹ thuật</h2>
<table><thead><tr><th>Chỉ báo</th><th>Loại</th><th>Tín hiệu chính</th><th>Khung thời gian phù hợp</th></tr></thead><tbody>
<tr><td>Moving Average (MA)</td><td>Xu hướng</td><td>Cắt chéo đường MA</td><td>H4, D1</td></tr>
<tr><td>RSI</td><td>Dao động</td><td>Quá mua (&gt;70) / Quá bán (&lt;30)</td><td>H1, H4</td></tr>
<tr><td>MACD</td><td>Xu hướng + Động lượng</td><td>Cắt chéo đường tín hiệu</td><td>H4, D1</td></tr>
<tr><td>Bollinger Bands</td><td>Biến động</td><td>Giá chạm dải trên/dưới</td><td>H1, H4</td></tr>
<tr><td>Fibonacci</td><td>Hỗ trợ/Kháng cự</td><td>Mức thoái lui 38.2%, 61.8%</td><td>D1, W1</td></tr>
<tr><td>Stochastic</td><td>Dao động</td><td>Cắt chéo vùng quá mua/bán</td><td>M15, H1</td></tr>
<tr><td>Ichimoku</td><td>Đa chức năng</td><td>Giá trên/dưới mây</td><td>H4, D1</td></tr>
</tbody></table>
<h2>1. Moving Average (Đường trung bình động)</h2>
<p>Moving Average là chỉ báo nền tảng và phổ biến nhất trong phân tích kỹ thuật. Nó tính giá trung bình của tài sản trong một khoảng thời gian nhất định, giúp làm mượt biến động giá và xác định xu hướng chung. Có hai loại MA phổ biến: SMA (Simple Moving Average) tính trung bình đơn giản, và EMA (Exponential Moving Average) cho trọng số cao hơn cho giá gần đây.</p>
<p>Tín hiệu giao dịch phổ biến nhất là khi đường MA ngắn hạn (ví dụ EMA 20) cắt lên trên đường MA dài hạn (ví dụ EMA 50) — đây được gọi là "Golden Cross" và là tín hiệu mua. Ngược lại, "Death Cross" xảy ra khi MA ngắn cắt xuống dưới MA dài, báo hiệu xu hướng giảm.</p>
<h2>2. RSI (Relative Strength Index)</h2>
<p>RSI đo lường tốc độ và cường độ biến động giá trên thang điểm 0-100. Khi RSI vượt trên 70, thị trường được coi là quá mua (overbought) và có thể đảo chiều giảm. Khi RSI xuống dưới 30, thị trường quá bán (oversold) và có thể phục hồi. Tuy nhiên, trong xu hướng mạnh, RSI có thể duy trì ở vùng quá mua/quá bán trong thời gian dài.</p>
<h2>3. MACD (Moving Average Convergence Divergence)</h2>
<p>MACD kết hợp đặc tính của chỉ báo xu hướng và chỉ báo động lượng. Nó bao gồm đường MACD (EMA 12 - EMA 26), đường Signal (EMA 9 của MACD), và Histogram thể hiện khoảng cách giữa hai đường. Tín hiệu mua xuất hiện khi đường MACD cắt lên trên đường Signal, và tín hiệu bán khi cắt xuống dưới.</p>
<h2>4-7. Các chỉ báo bổ sung</h2>
<p><strong>Bollinger Bands</strong> giúp đo lường biến động thị trường thông qua dải trên và dải dưới. Khi giá chạm dải dưới trong xu hướng tăng, đây thường là cơ hội mua tốt. <strong>Fibonacci Retracement</strong> sử dụng các mức 23.6%, 38.2%, 50%, và 61.8% để xác định vùng hỗ trợ kháng cự tiềm năng, đặc biệt hữu ích sau các đợt tăng hoặc giảm mạnh.</p>
<p><strong>Stochastic Oscillator</strong> hoạt động tương tự RSI nhưng nhạy hơn với biến động ngắn hạn. <strong>Ichimoku Kinko Hyo</strong> là hệ thống chỉ báo toàn diện từ Nhật Bản, cung cấp thông tin về xu hướng, hỗ trợ/kháng cự và động lượng trong cùng một biểu đồ.</p>
<h2>Kết hợp nhiều chỉ báo hiệu quả</h2>
<p>Sai lầm phổ biến của trader mới là sử dụng quá nhiều chỉ báo cùng lúc, gây ra tình trạng "analysis paralysis". Thay vào đó, hãy chọn 2-3 chỉ báo bổ trợ cho nhau — ví dụ kết hợp MA (xu hướng) với RSI (dao động) và Fibonacci (hỗ trợ/kháng cự). Khi cả 3 đều cho cùng tín hiệu, xác suất thành công sẽ cao hơn nhiều. Đọc thêm các chiến lược phân tích kỹ thuật nâng cao tại <a href="https://cachdautu.com/">Cách Đầu Tư</a> để hoàn thiện kỹ năng giao dịch của bạn.</p>`
    },
    {
        title: "Quản Lý Vốn Forex: 5 Nguyên Tắc Vàng Tránh Cháy Tài Khoản",
        slug: "quan-ly-von-forex-nguyen-tac-vang",
        excerpt: "Học cách quản lý vốn Forex đúng cách với 5 nguyên tắc vàng giúp bảo vệ tài khoản và tối ưu lợi nhuận dài hạn.",
        category: "kien-thuc",
        tags: ["quản lý vốn", "money management", "cháy tài khoản", "rủi ro forex", "risk management"],
        meta_title: "Quản Lý Vốn Forex: 5 Nguyên Tắc Vàng Tránh Cháy Tài Khoản",
        meta_description: "5 nguyên tắc quản lý vốn Forex hiệu quả giúp trader tránh cháy tài khoản, kiểm soát rủi ro và tối ưu hóa lợi nhuận giao dịch dài hạn.",
        featured_image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        featured_image_alt: "Biểu đồ quản lý vốn và rủi ro trong giao dịch Forex",
        content: `<h2>Tại sao quản lý vốn quan trọng hơn chiến lược?</h2>
<p>Có một sự thật mà nhiều trader mới bỏ qua: quản lý vốn quan trọng hơn bất kỳ chiến lược giao dịch nào. Theo thống kê, hơn 80% trader thua lỗ không phải vì chiến lược sai mà vì quản lý vốn kém. Bạn có thể có tỷ lệ thắng 70%, nhưng nếu mỗi lần thua lỗ gấp 5 lần lợi nhuận mỗi lần thắng, bạn vẫn sẽ cháy tài khoản.</p>
<p>Quản lý vốn (Money Management) là tập hợp các quy tắc giúp bạn xác định kích thước vị thế phù hợp, mức cắt lỗ hợp lý và tỷ lệ rủi ro/lợi nhuận tối ưu cho mỗi giao dịch. Nắm vững nghệ thuật này chính là chìa khóa để tồn tại và phát triển lâu dài trên thị trường Forex.</p>
<img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=700&q=80" alt="Bảng tính quản lý rủi ro và vốn giao dịch" />
<h2>Nguyên tắc 1: Quy tắc 2% – Không bao giờ rủi ro quá 2%</h2>
<p>Đây là nguyên tắc nền tảng nhất trong quản lý vốn. Mỗi giao dịch đơn lẻ, bạn không nên rủi ro quá 1-2% tổng vốn tài khoản. Ví dụ, nếu tài khoản có $1,000 thì mức thua lỗ tối đa cho mỗi lệnh chỉ nên là $10-$20. Quy tắc này đảm bảo rằng ngay cả khi bạn thua liên tiếp 10 lệnh, tài khoản vẫn còn đủ vốn để phục hồi.</p>
<h2>Bảng minh họa tác động của quy tắc 2%</h2>
<table><thead><tr><th>Vốn ban đầu</th><th>Rủi ro/lệnh</th><th>Thua 5 lệnh liên tiếp</th><th>Vốn còn lại</th><th>Cần lãi bao nhiêu để hòa vốn</th></tr></thead><tbody>
<tr><td>$1,000</td><td>2% ($20)</td><td>-$100</td><td>$900</td><td>11.1%</td></tr>
<tr><td>$1,000</td><td>5% ($50)</td><td>-$250</td><td>$750</td><td>33.3%</td></tr>
<tr><td>$1,000</td><td>10% ($100)</td><td>-$500</td><td>$500</td><td>100%</td></tr>
<tr><td>$1,000</td><td>20% ($200)</td><td>-$1,000</td><td>$0</td><td>Cháy tài khoản</td></tr>
</tbody></table>
<p>Bảng trên cho thấy rõ ràng: khi rủi ro 2% mỗi lệnh, bạn chỉ cần lãi 11% để phục hồi. Nhưng nếu rủi ro 10%, con số đó tăng vọt lên 100%. Đây chính là lý do vì sao quản lý vốn là yếu tố sống còn.</p>
<h2>Nguyên tắc 2: Tỷ lệ Risk/Reward tối thiểu 1:2</h2>
<p>Mỗi giao dịch, mục tiêu lợi nhuận (Take Profit) phải gấp ít nhất 2 lần mức cắt lỗ (Stop Loss). Ví dụ: nếu Stop Loss là 30 pip, Take Profit phải tối thiểu 60 pip. Với tỷ lệ R:R 1:2, bạn chỉ cần thắng 40% số lệnh để vẫn có lợi nhuận. Đây là bí quyết giúp nhiều trader chuyên nghiệp duy trì lợi nhuận ổn định dù không phải lúc nào cũng đúng.</p>
<h2>Nguyên tắc 3: Sử dụng Stop Loss cho MỌI lệnh</h2>
<p>Stop Loss không phải là tùy chọn — nó là bắt buộc. Không có ngoại lệ. Nhiều trader mới mắc sai lầm cố giữ lệnh thua với hy vọng thị trường sẽ đảo chiều, kết quả thường là thua lỗ càng lớn hơn. Hãy đặt Stop Loss ngay khi mở lệnh, và tuyệt đối không di chuyển nó ra xa hơn vùng cắt lỗ ban đầu.</p>
<h2>Nguyên tắc 4: Tính khối lượng giao dịch chính xác</h2>
<p>Kích thước lot (volume) cần được tính toán dựa trên mức rủi ro chấp nhận và khoảng cách Stop Loss, không phải dựa trên cảm giác. Công thức đơn giản: <strong>Lot = (Vốn × %Rủi ro) / (Stop Loss × Giá trị pip)</strong>. Ví dụ: vốn $1,000, rủi ro 2% ($20), Stop Loss 50 pip, giá trị mỗi pip của 0.01 lot EUR/USD là $0.1 → Lot = $20 / (50 × $0.1) = 0.04 lot.</p>
<h2>Nguyên tắc 5: Đa dạng hóa và giới hạn exposure</h2>
<p>Đừng bỏ tất cả trứng vào một giỏ. Tránh mở quá nhiều lệnh trên cùng một cặp tiền hoặc các cặp tiền có tương quan cao (ví dụ EUR/USD và GBP/USD thường di chuyển cùng hướng). Tổng rủi ro của tất cả các lệnh đang mở không nên vượt quá 6% tổng vốn.</p>
<h2>Kết luận</h2>
<p>Quản lý vốn không phải là chủ đề hấp dẫn như các chiến lược giao dịch hay phân tích thị trường, nhưng nó chính là nền tảng quyết định sự sống còn của trader. Hãy nhớ: mục tiêu đầu tiên không phải là kiếm tiền, mà là bảo vệ vốn. Khi bạn vẫn còn vốn trong tài khoản, bạn luôn có cơ hội tìm được cơ hội giao dịch tốt. Để tìm hiểu thêm về các chiến lược quản lý rủi ro nâng cao, hãy tham khảo <a href="https://cachdautu.com/">Cách Đầu Tư</a> — nơi chia sẻ kinh nghiệm thực chiến từ các trader chuyên nghiệp.</p>`
    },
    {
        title: "Đọc Biểu Đồ Nến Nhật: 10 Mô Hình Price Action Phổ Biến Nhất",
        slug: "doc-bieu-do-nen-nhat-mo-hinh-price-action",
        excerpt: "Hướng dẫn đọc biểu đồ nến Nhật và 10 mô hình Price Action phổ biến nhất giúp trader nhận diện cơ hội giao dịch chính xác.",
        category: "kien-thuc",
        tags: ["nến Nhật", "price action", "mô hình nến", "biểu đồ forex", "candlestick"],
        meta_title: "Đọc Biểu Đồ Nến Nhật: 10 Mô Hình Price Action Phổ Biến",
        meta_description: "Học cách đọc biểu đồ nến Nhật với 10 mô hình Price Action phổ biến nhất. Hướng dẫn chi tiết cách nhận diện Doji, Hammer, Engulfing và áp dụng thực tế.",
        featured_image: "https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=800&q=80",
        featured_image_alt: "Biểu đồ nến Nhật candlestick trên nền đen",
        content: `<h2>Biểu đồ nến Nhật là gì?</h2>
<p>Biểu đồ nến Nhật (Japanese Candlestick) là công cụ biểu diễn giá phổ biến nhất trong phân tích kỹ thuật. Được phát minh bởi thương nhân gạo Nhật Bản Munehisa Homma vào thế kỷ 18, mỗi cây nến thể hiện 4 thông tin quan trọng: giá mở cửa (Open), giá đóng cửa (Close), giá cao nhất (High) và giá thấp nhất (Low) trong một khoảng thời gian nhất định.</p>
<p>Thân nến xanh (hoặc trắng) cho thấy giá đóng cửa cao hơn giá mở cửa — tín hiệu tăng giá. Ngược lại, thân nến đỏ (hoặc đen) biểu thị giá đóng cửa thấp hơn giá mở cửa — tín hiệu giảm giá. Bóng nến trên và dưới thể hiện phạm vi biến động giá trong phiên.</p>
<img src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=700&q=80" alt="Các mô hình nến Nhật phổ biến trong phân tích kỹ thuật" />
<h2>10 mô hình nến quan trọng nhất</h2>
<table><thead><tr><th>STT</th><th>Mô hình</th><th>Tín hiệu</th><th>Độ tin cậy</th><th>Ghi chú</th></tr></thead><tbody>
<tr><td>1</td><td>Hammer (Búa)</td><td>Đảo chiều tăng</td><td>Cao</td><td>Xuất hiện cuối xu hướng giảm</td></tr>
<tr><td>2</td><td>Shooting Star</td><td>Đảo chiều giảm</td><td>Cao</td><td>Xuất hiện cuối xu hướng tăng</td></tr>
<tr><td>3</td><td>Doji</td><td>Phân vân</td><td>Trung bình</td><td>Cần xác nhận từ nến tiếp theo</td></tr>
<tr><td>4</td><td>Bullish Engulfing</td><td>Đảo chiều tăng</td><td>Rất cao</td><td>Nến tăng nuốt trọn nến giảm</td></tr>
<tr><td>5</td><td>Bearish Engulfing</td><td>Đảo chiều giảm</td><td>Rất cao</td><td>Nến giảm nuốt trọn nến tăng</td></tr>
<tr><td>6</td><td>Morning Star</td><td>Đảo chiều tăng</td><td>Rất cao</td><td>Mô hình 3 nến</td></tr>
<tr><td>7</td><td>Evening Star</td><td>Đảo chiều giảm</td><td>Rất cao</td><td>Mô hình 3 nến</td></tr>
<tr><td>8</td><td>Three White Soldiers</td><td>Tăng mạnh</td><td>Cao</td><td>3 nến tăng liên tiếp</td></tr>
<tr><td>9</td><td>Three Black Crows</td><td>Giảm mạnh</td><td>Cao</td><td>3 nến giảm liên tiếp</td></tr>
<tr><td>10</td><td>Spinning Top</td><td>Phân vân</td><td>Thấp</td><td>Thân nhỏ, bóng dài hai đầu</td></tr>
</tbody></table>
<h2>1. Hammer và Inverted Hammer</h2>
<p>Mô hình Hammer (nến búa) xuất hiện ở cuối một xu hướng giảm, có đặc điểm thân nến nhỏ nằm ở phần trên và bóng dưới dài gấp ít nhất 2 lần thân nến. Ý nghĩa: phe bán đã đẩy giá xuống rất thấp trong phiên nhưng phe mua đã phản công mạnh mẽ, kéo giá trở lại gần mức mở cửa. Đây là dấu hiệu cho thấy lực bán đang suy yếu và xu hướng tăng có thể bắt đầu.</p>
<h2>2-3. Engulfing và Doji</h2>
<p><strong>Bullish Engulfing</strong> là mô hình 2 nến: nến thứ hai (tăng) có thân hoàn toàn bao phủ nến thứ nhất (giảm). Đây là tín hiệu đảo chiều tăng mạnh nhất, đặc biệt khi xuất hiện tại vùng hỗ trợ quan trọng. Mô hình <strong>Doji</strong> có giá mở cửa và đóng cửa gần bằng nhau, tạo thành hình chữ thập, thể hiện sự cân bằng giữa phe mua và phe bán. Doji đơn lẻ không cho tín hiệu rõ ràng nhưng khi kết hợp với nến trước và sau, nó có thể xác nhận điểm đảo chiều.</p>
<h2>4-5. Morning Star và Evening Star</h2>
<p><strong>Morning Star</strong> là mô hình 3 nến báo hiệu đảo chiều từ giảm sang tăng: nến giảm lớn, nến thân nhỏ (gap xuống), rồi nến tăng lớn quay trở lại. <strong>Evening Star</strong> là phiên bản ngược lại, báo hiệu đảo chiều từ tăng sang giảm. Cả hai mô hình đều có độ tin cậy rất cao, đặc biệt khi kết hợp với vùng hỗ trợ/kháng cự.</p>
<h2>Cách áp dụng Price Action vào giao dịch thực tế</h2>
<p>Để sử dụng mô hình nến hiệu quả, hãy tuân thủ 3 nguyên tắc: Thứ nhất, luôn xem xét bối cảnh — mô hình nến chỉ có ý nghĩa khi xuất hiện tại vùng hỗ trợ/kháng cự quan trọng hoặc đường xu hướng. Thứ hai, chờ xác nhận — đừng vội vào lệnh ngay khi thấy mô hình, hãy đợi nến tiếp theo xác nhận. Thứ ba, kết hợp với các chỉ báo khác như RSI hoặc MACD để tăng xác suất thành công.</p>
<p>Price Action là kỹ năng cần thời gian rèn luyện. Hãy bắt đầu bằng cách quan sát biểu đồ hàng ngày và ghi chép lại các mô hình bạn phát hiện. Với thực hành đều đặn, bạn sẽ phát triển được "eye for patterns" — khả năng nhận diện cơ hội giao dịch nhanh chóng và chính xác. Xem thêm các ví dụ thực tế và phân tích biểu đồ tại <a href="https://cachdautu.com/">cachdautu.com</a>.</p>`
    }
];

async function seed() {
    console.log('Seeding 5 draft posts...');
    for (const post of posts) {
        const { data, error } = await supabase.from('posts').insert([{
            ...post,
            author: 'Admin',
            is_published: false,
            published_at: null,
            scheduled_at: null
        }]).select().single();
        if (error) console.error('Error:', post.slug, error.message);
        else console.log('✅', data.title);
    }
    console.log('Done batch 1!');
}
seed();
