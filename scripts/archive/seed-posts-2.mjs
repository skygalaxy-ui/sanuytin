import { config } from 'dotenv';
config({ path: '.env.local' });
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const posts = [
    {
        title: "Scalping Forex Là Gì? Chiến Lược Lướt Sóng Hiệu Quả Cho Người Mới",
        slug: "scalping-forex-chien-luoc-luot-song",
        excerpt: "Tìm hiểu Scalping Forex là gì, cách xây dựng chiến lược lướt sóng ngắn hạn hiệu quả và những sai lầm cần tránh khi scalping.",
        category: "huong-dan",
        tags: ["scalping forex", "lướt sóng", "giao dịch ngắn hạn", "chiến lược forex"],
        meta_title: "Scalping Forex Là Gì? Chiến Lược Lướt Sóng Hiệu Quả",
        meta_description: "Scalping Forex là gì? Hướng dẫn chi tiết chiến lược lướt sóng ngắn hạn, cách chọn khung thời gian, chỉ báo phù hợp và quản lý rủi ro khi scalping.",
        featured_image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
        featured_image_alt: "Trader đang scalping trên nhiều màn hình giao dịch",
        content: `<h2>Scalping Forex là gì?</h2>
<p>Scalping là phương pháp giao dịch ngắn hạn trong thị trường Forex, nơi trader mở và đóng các vị thế trong khoảng thời gian rất ngắn — thường từ vài giây đến vài phút. Mục tiêu của scalper không phải là bắt những đợt sóng lớn mà là thu lợi nhuận nhỏ nhưng liên tục từ nhiều giao dịch trong ngày. Một scalper chuyên nghiệp có thể thực hiện 20 đến 100 giao dịch mỗi ngày, mỗi lệnh chỉ kiếm 3-10 pip lợi nhuận.</p>
<p>Phương pháp này đòi hỏi sự tập trung cao độ, tốc độ phản xạ nhanh và kỷ luật nghiêm ngặt. Không phải ai cũng phù hợp với scalping — nó dành cho những trader có thể ngồi trước màn hình nhiều giờ liên tục và chịu được áp lực tâm lý từ việc ra quyết định liên tục.</p>
<img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=700&q=80" alt="Biểu đồ scalping forex khung thời gian ngắn M1 M5" />
<h2>Điều kiện cần thiết để scalping</h2>
<table><thead><tr><th>Yếu tố</th><th>Yêu cầu</th><th>Lý do</th></tr></thead><tbody>
<tr><td>Spread</td><td>≤ 1.0 pip</td><td>Spread cao ăn hết lợi nhuận nhỏ</td></tr>
<tr><td>Tốc độ khớp lệnh</td><td>< 50ms</td><td>Trượt giá là kẻ thù của scalper</td></tr>
<tr><td>Khung thời gian</td><td>M1, M5, M15</td><td>Bắt biến động ngắn hạn</td></tr>
<tr><td>Cặp tiền</td><td>EUR/USD, GBP/USD</td><td>Thanh khoản cao, spread thấp</td></tr>
<tr><td>Nền tảng</td><td>MT4, MT5, cTrader</td><td>One-click trading, tùy chỉnh</td></tr>
<tr><td>Kết nối internet</td><td>Cáp quang ổn định</td><td>Không chấp nhận lag hoặc mất kết nối</td></tr>
</tbody></table>
<h2>Chiến lược Scalping phổ biến nhất</h2>
<h3>1. Scalping với Moving Average</h3>
<p>Chiến lược đơn giản nhất: sử dụng 2 đường EMA (ví dụ EMA 9 và EMA 21) trên khung M5. Mua khi EMA 9 cắt lên trên EMA 21, bán khi EMA 9 cắt xuống dưới. Stop Loss đặt 5-8 pip, Take Profit 8-15 pip. Ưu điểm của chiến lược này là rõ ràng, dễ thực hiện, nhưng trong thị trường sideway sẽ bị nhiều tín hiệu giả.</p>
<h3>2. Scalping với Bollinger Bands + RSI</h3>
<p>Kết hợp Bollinger Bands (20, 2) với RSI (14) trên khung M5 hoặc M15. Tín hiệu mua: giá chạm dải dưới Bollinger + RSI dưới 30. Tín hiệu bán: giá chạm dải trên + RSI trên 70. Chiến lược này hiệu quả trong thị trường đi ngang (ranging market) và giúp xác định các điểm đảo chiều ngắn hạn chính xác hơn.</p>
<h3>3. Scalping Price Action</h3>
<p>Phương pháp nâng cao hơn, dựa vào mô hình nến và vùng hỗ trợ/kháng cự ngắn hạn. Trader quan sát các mô hình Pin Bar, Engulfing tại các mức giá tâm lý (số tròn) trên khung M1 hoặc M5. Phương pháp này đòi hỏi kinh nghiệm cao nhưng cho tín hiệu chất lượng tốt hơn các chỉ báo kỹ thuật thuần túy.</p>
<h2>Quản lý rủi ro khi Scalping</h2>
<p>Quản lý rủi ro trong scalping thậm chí còn quan trọng hơn so với các phong cách giao dịch khác. Vì bạn thực hiện rất nhiều lệnh mỗi ngày, chỉ cần một lệnh thua lỗ lớn có thể xóa sạch lợi nhuận của cả ngày. Nguyên tắc quan trọng nhất là không bao giờ gỡ Stop Loss — khi giá chạm Stop Loss nghĩa là tín hiệu sai và bạn cần thoát lệnh ngay lập tức.</p>
<p>Tỷ lệ Risk/Reward tối thiểu cho scalping nên là 1:1.5 đến 1:2. Nếu bạn đặt Stop Loss 5 pip thì Take Profit nên từ 8 pip trở lên. Hãy cũng đặt giới hạn thua lỗ hàng ngày — ví dụ nếu thua 3% vốn trong ngày thì dừng giao dịch và nghỉ ngơi. Tham khảo thêm chiến lược quản lý vốn chi tiết tại <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>
<h2>Sai lầm phổ biến khi Scalping</h2>
<p>Nhiều trader mới thất bại với scalping vì chọn sàn có spread quá cao, không đặt Stop Loss, hoặc giao dịch quá nhiều lệnh cùng lúc bởi tâm lý FOMO. Ngoài ra, việc scalping trong giờ tin tức kinh tế quan trọng (NFP, CPI, FOMC) cực kỳ rủi ro vì spread có thể mở rộng gấp 5-10 lần bình thường. Hãy luôn kiểm tra lịch kinh tế trước khi bắt đầu phiên scalping. Đọc thêm các phân tích về thời điểm giao dịch tối ưu tại <a href="https://cachdautu.com/">cachdautu.com</a>.</p>`
    },
    {
        title: "Tâm Lý Giao Dịch Forex: Cách Kiểm Soát Cảm Xúc Khi Trading",
        slug: "tam-ly-giao-dich-forex-kiem-soat-cam-xuc",
        excerpt: "Hiểu về tâm lý giao dịch Forex, cách kiểm soát cảm xúc tham lam, sợ hãi và xây dựng kỷ luật trading bền vững.",
        category: "kien-thuc",
        tags: ["tâm lý giao dịch", "trading psychology", "kỷ luật forex", "cảm xúc khi trading"],
        meta_title: "Tâm Lý Giao Dịch Forex: Kiểm Soát Cảm Xúc Khi Trading",
        meta_description: "Tâm lý giao dịch Forex là yếu tố quyết định thành bại. Học cách kiểm soát tham lam, sợ hãi và xây dựng kỷ luật trading vững vàng.",
        featured_image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
        featured_image_alt: "Trader tập trung phân tích thị trường Forex",
        content: `<h2>Tâm lý giao dịch quyết định 80% thành công</h2>
<p>Trong thế giới Forex, có một câu nói phổ biến: "90% giao dịch là tâm lý, 10% là kỹ thuật." Dù bạn có chiến lược giao dịch tuyệt vời đến đâu, nếu không kiểm soát được cảm xúc, bạn sẽ không thể thực hiện chiến lược đó một cách nhất quán. Tâm lý giao dịch (Trading Psychology) là nghệ thuật quản lý cảm xúc, duy trì kỷ luật và đưa ra quyết định lý trí trong mọi điều kiện thị trường.</p>
<p>Nhiều trader có đầy đủ kiến thức kỹ thuật nhưng vẫn thua lỗ liên tục. Nguyên nhân không phải do chiến lược sai mà vì họ không thể tuân thủ chính quy tắc của mình. Họ cắt lãi quá sớm vì sợ mất lợi nhuận, giữ lệnh thua quá lâu vì hy vọng thị trường đảo chiều, hoặc tăng khối lượng sau khi thắng liên tục vì quá tự tin.</p>
<img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&q=80" alt="Tâm lý giao dịch kỷ luật và kiểm soát cảm xúc" />
<h2>3 cảm xúc nguy hiểm nhất khi giao dịch</h2>
<table><thead><tr><th>Cảm xúc</th><th>Biểu hiện</th><th>Hậu quả</th><th>Cách khắc phục</th></tr></thead><tbody>
<tr><td>Tham lam (Greed)</td><td>Không chốt lời, tăng lot, giao dịch quá nhiều</td><td>Mất hết lợi nhuận, cháy tài khoản</td><td>Đặt TP cố định, tuân thủ kế hoạch</td></tr>
<tr><td>Sợ hãi (Fear)</td><td>Không dám vào lệnh, cắt lãi quá sớm</td><td>Bỏ lỡ cơ hội, lợi nhuận thấp</td><td>Giao dịch theo hệ thống, demo trước</td></tr>
<tr><td>Trả thù thị trường (Revenge)</td><td>Vào lệnh lớn ngay sau khi thua</td><td>Thua lỗ nhân đôi, mất kiểm soát</td><td>Nghỉ 30 phút sau lệnh thua, giới hạn thua/ngày</td></tr>
</tbody></table>
<h2>Tham lam — Kẻ thù số 1 của trader</h2>
<p>Tham lam xuất hiện dưới nhiều hình thức. Phổ biến nhất là khi bạn đang có lệnh lãi nhưng không chịu chốt lời vì nghĩ giá sẽ đi xa hơn — kết quả là giá đảo chiều và bạn mất hết lợi nhuận. Một dạng khác là sau khi thắng vài lệnh liên tiếp, bạn bắt đầu tăng khối lượng giao dịch vì cảm thấy quá tự tin — đây chính là bẫy tâm lý nguy hiểm nhất.</p>
<p>Cách đối phó với tham lam: Luôn đặt Take Profit trước khi vào lệnh và không thay đổi mục tiêu trong khi giao dịch. Có thể chia lợi nhuận thành 2 phần — chốt 50% ở mức TP1 và để 50% tiếp tục với trailing stop.</p>
<h2>Sợ hãi — Kẻ cản đường cơ hội</h2>
<p>Sợ hãi khiến trader bỏ lỡ nhiều cơ hội giao dịch tốt. Sau một loạt lệnh thua, bạn bắt đầu nghi ngờ chiến lược và không dám vào lệnh — dù tín hiệu rõ ràng. Hoặc bạn vào lệnh nhưng đặt Stop Loss quá sát vì sợ thua thêm, kết quả là bị quét Stop Loss liên tục bởi biến động bình thường của giá.</p>
<h2>Xây dựng kỷ luật giao dịch</h2>
<p>Kỷ luật không phải là thứ bạn có sẵn — nó được rèn luyện qua thời gian. Bắt đầu bằng việc viết một Trading Plan chi tiết bao gồm: điều kiện vào lệnh, mức SL/TP, khối lượng giao dịch, giờ giao dịch, và quy tắc quản lý rủi ro. Sau đó, ghi chép lại MỌI giao dịch vào Trading Journal — bao gồm lý do vào lệnh, kết quả và cảm xúc lúc đó.</p>
<p>Sau mỗi tuần, review lại Trading Journal để nhận diện các pattern tâm lý lặp lại. Bạn sẽ bất ngờ khi phát hiện rằng 80% lệnh thua đều liên quan đến cùng một sai lầm tâm lý. Để tìm hiểu thêm về cách xây dựng Trading Plan chuyên nghiệp, tham khảo tại <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>
<h2>5 thói quen của trader thành công</h2>
<ul>
<li><strong>Giao dịch theo kế hoạch:</strong> Không bao giờ vào lệnh khi không có setup rõ ràng</li>
<li><strong>Chấp nhận thua lỗ:</strong> Xem thua lỗ là chi phí kinh doanh, không phải thất bại cá nhân</li>
<li><strong>Kiên nhẫn:</strong> Chờ đợi setup hoàn hảo thay vì giao dịch liên tục</li>
<li><strong>Review liên tục:</strong> Phân tích lại giao dịch hàng tuần để cải thiện</li>
<li><strong>Nghỉ ngơi:</strong> Biết khi nào cần dừng lại — thị trường luôn ở đó ngày mai</li>
</ul>
<p>Hãy nhớ: mục tiêu không phải là không bao giờ thua, mà là thua ít hơn thắng và kiểm soát được cảm xúc trong mọi tình huống. Tâm lý giao dịch vững vàng là lợi thế cạnh tranh lớn nhất mà bạn có thể sở hữu. Đọc thêm các chia sẻ kinh nghiệm thực chiến tại <a href="https://cachdautu.com/">cachdautu.com</a>.</p>`
    },
    {
        title: "Hướng Dẫn Sử Dụng MetaTrader 4 (MT4) Cho Người Mới Từ A-Z",
        slug: "huong-dan-su-dung-metatrader-4-mt4",
        excerpt: "Hướng dẫn chi tiết cách tải, cài đặt và sử dụng nền tảng MetaTrader 4 từ cơ bản đến nâng cao cho trader Forex mới.",
        category: "huong-dan",
        tags: ["MetaTrader 4", "MT4", "hướng dẫn MT4", "nền tảng giao dịch", "cài đặt MT4"],
        meta_title: "Hướng Dẫn Sử Dụng MetaTrader 4 (MT4) Từ A Đến Z",
        meta_description: "Hướng dẫn sử dụng MetaTrader 4 chi tiết từ A-Z: cài đặt, mở lệnh, quản lý giao dịch, thêm chỉ báo và sử dụng Expert Advisor trên MT4.",
        featured_image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        featured_image_alt: "Giao diện MetaTrader 4 trên máy tính",
        content: `<h2>MetaTrader 4 là gì?</h2>
<p>MetaTrader 4 (MT4) là nền tảng giao dịch phổ biến nhất thế giới, được phát triển bởi MetaQuotes Software. Ra mắt từ năm 2005, MT4 vẫn là sự lựa chọn hàng đầu của hàng triệu trader Forex toàn cầu nhờ giao diện trực quan, công cụ phân tích mạnh mẽ và khả năng tùy chỉnh linh hoạt. Hầu hết các sàn Forex uy tín đều hỗ trợ MetaTrader 4 trên cả máy tính và điện thoại di động.</p>
<p>Dù đã có phiên bản mới hơn là MT5, nhiều trader vẫn trung thành với MT4 vì sự ổn định đã được chứng minh qua thời gian, kho indicator và Expert Advisor khổng lồ, cùng cộng đồng hỗ trợ rộng lớn toàn cầu.</p>
<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80" alt="Cài đặt và sử dụng MT4 trên desktop" />
<h2>Bảng so sánh MT4 và MT5</h2>
<table><thead><tr><th>Tính năng</th><th>MetaTrader 4</th><th>MetaTrader 5</th></tr></thead><tbody>
<tr><td>Khung thời gian</td><td>9 khung</td><td>21 khung</td></tr>
<tr><td>Loại lệnh chờ</td><td>4 loại</td><td>6 loại</td></tr>
<tr><td>Chỉ báo kỹ thuật</td><td>30+ tích hợp</td><td>38+ tích hợp</td></tr>
<tr><td>Ngôn ngữ lập trình</td><td>MQL4</td><td>MQL5</td></tr>
<tr><td>Hedging</td><td>Hỗ trợ</td><td>Hỗ trợ (thêm Netting)</td></tr>
<tr><td>Strategy Tester</td><td>Đơn giản</td><td>Multi-thread, nhanh hơn</td></tr>
<tr><td>Thích hợp cho</td><td>Forex, CFD</td><td>Forex, CFD, Cổ phiếu</td></tr>
</tbody></table>
<h2>Cách tải và cài đặt MT4</h2>
<p>Bước 1: Truy cập website của sàn Forex mà bạn đã đăng ký (ví dụ: Exness, XM, IC Markets). Tìm mục "Platform" hoặc "Nền tảng giao dịch" trên menu. Bước 2: Tải file cài đặt MT4 cho hệ điều hành của bạn (Windows, macOS, iOS hoặc Android). Bước 3: Chạy file cài đặt, nhấn Next theo hướng dẫn. Quá trình cài đặt chỉ mất khoảng 1-2 phút.</p>
<h2>Giao diện chính của MT4</h2>
<p>Giao diện MT4 bao gồm 4 khu vực chính: <strong>Market Watch</strong> (cột bên trái) hiển thị danh sách cặp tiền và giá realtime. <strong>Navigator</strong> chứa các tài khoản, indicator, Expert Advisor và script. <strong>Chart Window</strong> (khu vực chính giữa) hiển thị biểu đồ giá với các công cụ vẽ và chỉ báo. <strong>Terminal</strong> (phía dưới) quản lý giao dịch, lịch sử lệnh, tin tức và nhật ký.</p>
<h2>Hướng dẫn mở lệnh trên MT4</h2>
<p>Để mở một lệnh giao dịch, bạn có 2 cách: Cách nhanh là nhấn chuột phải vào biểu đồ → New Order, hoặc nhấn phím F9. Trong cửa sổ Order, chọn cặp tiền, nhập khối lượng (volume), đặt Stop Loss và Take Profit, sau đó chọn Buy hoặc Sell. Với lệnh chờ (Pending Order), bạn thay đổi Type từ "Market Execution" sang loại lệnh chờ mong muốn (Buy Limit, Sell Limit, Buy Stop, Sell Stop).</p>
<h2>Thêm chỉ báo kỹ thuật vào biểu đồ</h2>
<p>MT4 tích hợp sẵn hơn 30 chỉ báo kỹ thuật phổ biến. Để thêm chỉ báo: vào menu Insert → Indicators → chọn loại chỉ báo. Ví dụ: Insert → Indicators → Trend → Moving Average. Bạn cũng có thể tải thêm hàng nghìn custom indicator từ cộng đồng MQL4 và cài đặt vào thư mục Indicators của MT4.</p>
<h2>Mẹo sử dụng MT4 hiệu quả</h2>
<p>Một số mẹo hữu ích: sử dụng tính năng Template để lưu cấu hình biểu đồ yêu thích, bật One-Click Trading để vào lệnh nhanh khi scalping, sử dụng Alert để thông báo khi giá chạm mức quan trọng, và tùy chỉnh giao diện biểu đồ (màu nến, Grid, Line) cho phù hợp với mắt bạn. Xem thêm hướng dẫn chi tiết về Expert Advisor và tự động hóa giao dịch tại <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>`
    },
    {
        title: "Phân Tích Cơ Bản Forex: Hiểu Tin Tức Kinh Tế Để Giao Dịch Thông Minh",
        slug: "phan-tich-co-ban-forex-tin-tuc-kinh-te",
        excerpt: "Hướng dẫn phân tích cơ bản Forex: cách đọc tin tức kinh tế, lịch kinh tế và tác động của các sự kiện vĩ mô lên tỷ giá.",
        category: "phan-tich",
        tags: ["phân tích cơ bản", "tin tức kinh tế", "fundamental analysis", "NFP", "lãi suất"],
        meta_title: "Phân Tích Cơ Bản Forex: Tin Tức Kinh Tế và Tỷ Giá",
        meta_description: "Phân tích cơ bản Forex là gì? Hướng dẫn cách đọc tin tức kinh tế, hiểu tác động của lãi suất, NFP, CPI lên thị trường ngoại hối.",
        featured_image: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&q=80",
        featured_image_alt: "Phân tích tin tức kinh tế tác động đến Forex",
        content: `<h2>Phân tích cơ bản Forex là gì?</h2>
<p>Phân tích cơ bản (Fundamental Analysis) trong Forex là phương pháp đánh giá giá trị thực sự của một đồng tiền dựa trên các yếu tố kinh tế, chính trị và xã hội của quốc gia phát hành. Trong khi phân tích kỹ thuật tập trung vào biểu đồ giá, phân tích cơ bản nhìn vào "câu chuyện phía sau" — các chính sách tiền tệ, dữ liệu kinh tế vĩ mô, tình hình chính trị và sự kiện địa chính trị toàn cầu.</p>
<p>Đối với trader Forex, hiểu phân tích cơ bản giúp xác định xu hướng dài hạn của các cặp tiền tệ và tránh bị "quét" bởi những biến động bất ngờ do tin tức gây ra. Kết hợp phân tích cơ bản và kỹ thuật sẽ cho bạn một bức tranh toàn diện nhất về thị trường.</p>
<img src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=700&q=80" alt="Lịch kinh tế Forex với các sự kiện quan trọng" />
<h2>Các chỉ số kinh tế quan trọng nhất</h2>
<table><thead><tr><th>Chỉ số</th><th>Tần suất</th><th>Tác động</th><th>Cặp tiền ảnh hưởng</th></tr></thead><tbody>
<tr><td>Lãi suất (Interest Rate)</td><td>6-8 lần/năm</td><td>Rất cao</td><td>Tất cả cặp tiền liên quan</td></tr>
<tr><td>NFP (Non-Farm Payrolls)</td><td>Tháng</td><td>Rất cao</td><td>USD pairs</td></tr>
<tr><td>CPI (Consumer Price Index)</td><td>Tháng</td><td>Cao</td><td>Tất cả</td></tr>
<tr><td>GDP</td><td>Quý</td><td>Cao</td><td>Tất cả cặp tiền liên quan</td></tr>
<tr><td>PMI (Manufacturing/Services)</td><td>Tháng</td><td>Trung bình-Cao</td><td>Cặp tiền liên quan</td></tr>
<tr><td>Retail Sales</td><td>Tháng</td><td>Trung bình</td><td>Cặp tiền liên quan</td></tr>
<tr><td>Unemployment Rate</td><td>Tháng</td><td>Trung bình</td><td>Cặp tiền liên quan</td></tr>
</tbody></table>
<h2>Lãi suất — Yếu tố quyết định nhất</h2>
<p>Quyết định lãi suất của các ngân hàng trung ương (Fed, ECB, BOJ, BOE, RBA) là sự kiện có tác động lớn nhất đến thị trường Forex. Khi một ngân hàng trung ương tăng lãi suất, đồng tiền của quốc gia đó thường tăng giá vì lãi suất cao thu hút dòng vốn đầu tư quốc tế. Ngược lại, giảm lãi suất thường khiến đồng tiền mất giá.</p>
<p>Tuy nhiên, điều quan trọng không phải là mức lãi suất hiện tại mà là kỳ vọng về tương lai. Nếu thị trường đã "price in" (phản ánh trước) việc tăng lãi suất, thì khi sự kiện xảy ra, đồng tiền có thể không tăng hoặc thậm chí giảm — hiện tượng "buy the rumor, sell the fact".</p>
<h2>NFP — Sự kiện hàng tháng "rung chuyển" thị trường</h2>
<p>Non-Farm Payrolls (NFP) là báo cáo việc làm hàng tháng của Mỹ, được công bố vào thứ Sáu đầu tiên mỗi tháng lúc 20:30 giờ Việt Nam. NFP cho biết số lượng việc làm mới được tạo ra trong nền kinh tế Mỹ (trừ khu vực nông nghiệp). Con số cao hơn kỳ vọng thường khiến USD tăng giá mạnh, và ngược lại. NFP thường tạo ra biến động 50-100 pip trên các cặp tiền USD trong vòng vài phút.</p>
<h2>Cách sử dụng lịch kinh tế</h2>
<p>Mỗi ngày giao dịch, việc đầu tiên bạn cần làm là kiểm tra lịch kinh tế (Economic Calendar) trên các website như ForexFactory, Investing.com hoặc TradingView. Chú ý đến các sự kiện đánh dấu nhiều sao hoặc có tác động High/Medium. Nếu bạn là trader ngắn hạn, hãy tránh mở lệnh 30 phút trước và sau giờ công bố tin quan trọng vì spread thường mở rộng và thị trường biến động bất thường.</p>
<h2>Kết hợp phân tích cơ bản và kỹ thuật</h2>
<p>Trader thành công thường kết hợp cả hai phương pháp: dùng phân tích cơ bản để xác định hướng đi dài hạn và dùng phân tích kỹ thuật để tìm điểm vào lệnh chính xác. Ví dụ: nếu phân tích cơ bản cho thấy Fed sẽ tiếp tục tăng lãi suất (bullish USD), bạn sẽ tìm các setup bán trên biểu đồ EUR/USD tại các vùng kháng cự kỹ thuật quan trọng. Cập nhật phân tích vĩ mô hàng tuần tại <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>`
    },
    {
        title: "Cách Mở Tài Khoản Demo Forex: Thực Hành Không Rủi Ro Trước Khi Đầu Tư",
        slug: "cach-mo-tai-khoan-demo-forex",
        excerpt: "Hướng dẫn từng bước mở tài khoản demo Forex miễn phí, các lưu ý quan trọng và cách luyện tập hiệu quả trước khi giao dịch thật.",
        category: "huong-dan",
        tags: ["tài khoản demo", "demo forex", "thực hành forex", "mở tài khoản forex"],
        meta_title: "Cách Mở Tài Khoản Demo Forex: Thực Hành Không Rủi Ro",
        meta_description: "Hướng dẫn mở tài khoản demo Forex miễn phí tại các sàn uy tín. Cách luyện tập, kiểm tra chiến lược hiệu quả trước khi đầu tư tiền thật.",
        featured_image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
        featured_image_alt: "Mở tài khoản demo Forex trên laptop",
        content: `<h2>Tại sao cần tài khoản demo Forex?</h2>
<p>Tài khoản demo Forex là tài khoản mô phỏng cho phép bạn giao dịch bằng tiền ảo trên các điều kiện thị trường thực tế. Đây là công cụ không thể thiếu dành cho người mới bắt đầu tìm hiểu về thị trường ngoại hối. Bạn có thể thực hành mọi thao tác — từ mở lệnh, đặt Stop Loss, Take Profit đến sử dụng các chỉ báo kỹ thuật — mà không lo rủi ro mất tiền thật.</p>
<p>Ngay cả trader có kinh nghiệm cũng sử dụng tài khoản demo để thử nghiệm chiến lược mới, kiểm tra hệ thống giao dịch tự động (EA), hoặc làm quen với nền tảng giao dịch mới trước khi sử dụng với vốn thật. Hầu hết các sàn Forex uy tín đều cung cấp tài khoản demo miễn phí không giới hạn thời gian.</p>
<img src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=700&q=80" alt="Giao diện tài khoản demo forex trên máy tính" />
<h2>So sánh tài khoản Demo các sàn phổ biến</h2>
<table><thead><tr><th>Sàn</th><th>Vốn demo</th><th>Thời hạn</th><th>Nền tảng</th><th>Tính năng đặc biệt</th></tr></thead><tbody>
<tr><td>Exness</td><td>$10,000</td><td>Không giới hạn</td><td>MT4, MT5</td><td>Tùy chỉnh vốn, reset dễ</td></tr>
<tr><td>XM</td><td>$100,000</td><td>Không giới hạn</td><td>MT4, MT5</td><td>Tài khoản demo contests</td></tr>
<tr><td>IC Markets</td><td>$100,000</td><td>Không giới hạn</td><td>MT4, MT5, cTrader</td><td>Raw spread demo</td></tr>
<tr><td>FBS</td><td>$10,000</td><td>90 ngày</td><td>MT4, MT5</td><td>Bonus demo</td></tr>
<tr><td>Pepperstone</td><td>$50,000</td><td>30 ngày (gia hạn)</td><td>MT4, MT5, cTrader</td><td>Razor account demo</td></tr>
</tbody></table>
<h2>Hướng dẫn mở tài khoản demo từng bước</h2>
<h3>Bước 1: Chọn sàn Forex uy tín</h3>
<p>Chọn một sàn Forex được cấp phép bởi cơ quan quản lý uy tín như FCA, ASIC hoặc CySEC. Lý do: điều kiện giao dịch trên tài khoản demo cần phản ánh chính xác tài khoản thực — nếu sàn không uy tín, trải nghiệm demo sẽ khác biệt lớn so với thực tế và bạn sẽ có những kỳ vọng sai lệch.</p>
<h3>Bước 2: Đăng ký tài khoản</h3>
<p>Truy cập website sàn và tìm nút "Mở tài khoản Demo" hoặc "Demo Account". Thường bạn chỉ cần cung cấp email, họ tên và số điện thoại. Không cần xác minh danh tính hay nạp tiền. Quá trình đăng ký chỉ mất 1-2 phút.</p>
<h3>Bước 3: Tải và cài đặt nền tảng</h3>
<p>Sau khi đăng ký, bạn sẽ nhận được thông tin đăng nhập (server, login, password) qua email. Tải MetaTrader 4 hoặc 5 từ sàn, đăng nhập và bắt đầu giao dịch ngay lập tức.</p>
<h2>Cách sử dụng tài khoản demo hiệu quả</h2>
<p>Nhiều trader mắc sai lầm khi dùng tài khoản demo một cách cẩu thả — giao dịch liều lĩnh vì "không mất tiền thật." Hãy đối xử với tài khoản demo như thể đó là tiền thật của bạn. Đặt vốn demo bằng số vốn bạn dự định đầu tư thật. Tuân thủ nghiêm ngặt các quy tắc quản lý vốn. Ghi chép lại mọi giao dịch vào Trading Journal.</p>
<p>Khoảng thời gian lý tưởng để test chiến lược trên demo là 2-3 tháng trước khi chuyển sang tài khoản thật. Trong thời gian này, hãy giao dịch qua ít nhất 100 lệnh để có mẫu thống kê đủ lớn, trải nghiệm các điều kiện thị trường khác nhau (trending, ranging, volatile). Để có hướng dẫn chuyển từ demo sang live chi tiết hơn, hãy tham khảo <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>
<h2>Khi nào nên chuyển sang tài khoản thật?</h2>
<p>Bạn sẵn sàng chuyển sang tài khoản thật khi đáp ứng đủ 3 điều kiện: có lợi nhuận ổn định trên demo ít nhất 2 tháng liên tiếp, có Trading Plan rõ ràng và tuân thủ nhất quán, và có thể kiểm soát cảm xúc khi thua lỗ trên demo. Khi bắt đầu giao dịch thật, hãy nạp số vốn tối thiểu (thường $50-$100) và giao dịch với lot nhỏ nhất (0.01 lot) để làm quen dần với áp lực tâm lý khi có tiền thật trên thị trường. Cập nhật kiến thức liên tục tại <a href="https://cachdautu.com/">cachdautu.com</a>.</p>`
    }
];

async function seed() {
    console.log('Seeding 5 more draft posts...');
    for (const post of posts) {
        const { data, error } = await supabase.from('posts').insert([{
            ...post, author: 'Admin', is_published: false, published_at: null, scheduled_at: null
        }]).select().single();
        if (error) console.error('❌', post.slug, error.message);
        else console.log('✅', data.title);
    }
    console.log('Done batch 2!');
}
seed();
