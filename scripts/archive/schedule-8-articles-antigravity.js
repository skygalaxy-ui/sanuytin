const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://pbxpjmklrkkwatdvacap.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE";

const supabase = createClient(supabaseUrl, supabaseKey);

const posts = [
    {
        scheduled_at: '2026-04-05T00:30:00+00:00', // 07:30 VN
        slug: 'huong-dan-cho-nguoi-moi-bat-dau-forex-2026',
        title: 'Hướng Dẫn Đầu Tư Forex Cho Người Mới Bắt Đầu Từ A-Z (2026)',
        meta_title: 'Hướng Dẫn Mở Đầu Đầu Tư Forex Cho Người Mới Từng Bước Một',
        excerpt: 'Chập chững bước vào ngành kinh doanh ngoại hối? Khám phá ngay hướng dẫn từ A-Z giúp bất kỳ người mới bắt đầu nào cũng có thể tự tin mở lệnh Forex an toàn.',
        category: 'huong-dan',
        featured_image: '/images/beginner_broker_doors_1775207204994.png',
        featured_image_alt: 'Hướng Dẫn Đầu Tư Forex Cho Người Mới',
        content: `
<h2>1. Hiểu Rõ Về Thị Trường Ngoại Hối (Forex)</h2>
<p>Ngoại hối (Forex) là thị trường tài chính lớn nhất thế giới, nơi các đồng tiền quốc gia được giao dịch và trao đổi cho nhau. Đây là một cơ hội lớn nhưng nó cũng đòi hỏi một nguyên lý hoạt động căn bản trước khi ném tiền thật vào canh bạc chưa rõ ràng luật chơi.</p>
<p>Điều đầu tiên mà mọi người mới bắt đầu cần nắm được chính là quy luật cặp tiền tệ: Ví dụ, khi bạn giao dịch cặp EUR/USD, điều đó có nghĩa là bạn đang mua đồng Euro và bán đi đồng USD với niềm tin rằng nền kinh tế châu Âu sẽ tăng giá trị vượt bậc hơn sơ với nền kinh tế Hoa Kỳ trong ngắn hạn.</p>
<h2>2. Cánh Cửa Đi Tới Giao Dịch Của Các Sàn Môi Giới</h2>
<p>Khác với thị trường cổ phiếu, thị trường ngoại hối luôn phi tập trung. Cánh cửa để bước vào khu rừng này chính là các Sàn môi giới (Brokers) uy tín. Những cánh cửa này giúp bạn kết nối lệnh giao dịch tới mạng lưới liên ngân hàng toàn cầu (Interbank).</p>
<figure style="margin: 2em 0; text-align: center;">
<img src="/images/beginner_broker_doors_1775207204994.png" alt="Cánh cửa lựa chọn sàn môi giới Forex" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Lựa chọn một cánh cửa an toàn (sàn giao dịch) bước vào thị trường</figcaption>
</figure>
<h2>3. 4 Yếu Tố Bạn Cần Chuẩn Bị</h2>
<ul>
    <li><strong>Sự kỷ luật cá nhân:</strong> Quyết định khi nào giao dịch, và khi nào không giao dịch chiếm 90% sự thành bại.</li>
    <li><strong>Nền tảng giao dịch thân thiện:</strong> MetaTrader 4 hoặc MetaTrader 5 là 2 công cụ phổ biến cung cấp thông tin tỷ giá.</li>
    <li><strong>Vốn đầu tư thực tế:</strong> Khuyến nghị luôn bắt đầu bằng tài khoản Demo, sau đó dành vốn từ $100-$500 để giao dịch với lệnh siêu mỏng (Micro lot/ 0.01).</li>
    <li><strong>Chiến lược quản trị rủi ro mạnh mẽ:</strong> Chỉ dùng tối đa 1-3% vốn tài khoản cho mỗi lệnh nhằm chống lại các biến động bất ngờ trên thị trường.</li>
</ul>
<h2>4. Mở Đầu Trải Nghiệm Qua Tài Khoản Demo</h2>
<p>Hãy tải ứng dụng MT4 về điện thoại hoặc máy tính, tạo ngay một tài khoản Demo $10,000 để cảm nhận sự thay đổi của Pip, Margin, và Spread trong suốt 2 tuần. Bạn sẽ hình thành một phản ứng "nhạy giá" tuyệt vời cho người mới khởi đầu.</p>
`
    },
    {
        scheduled_at: '2026-04-05T03:00:00+00:00', // 10:00 VN
        slug: 'tieu-chi-danh-gia-san-giao-dich-forex',
        title: '5 Tiêu Chí Đánh Giá Sàn Giao Dịch Forex Chuẩn Xác Nhất 2026',
        meta_title: 'Tiêu Chí Đánh Giá Sàn Giao Dịch Forex Từ Góc Nhìn Chuyên Gia',
        excerpt: 'Sàn Forex lừa đảo ngày càng tinh vi? Nắm giữ ngay 5 bài kiểm tra cốt lõi phân tích độ uy tín của bất cứ nhà môi giới (Broker) nào để bảo vệ quỹ giao dịch.',
        category: 'kiem-gia-san',
        featured_image: '/images/broker_behind_desk_1775207154206.png',
        featured_image_alt: 'Đánh Giá Sàn Giao Dịch Forex',
        content: `
<h2>1. Vì Sao Phải "Tuyển Dụng" Sàn Giao Dịch?</h2>
<p>Bạn không chỉ mở tài khoản tại một sàn Forex. Thực chất, BẠN ĐANG TUYỂN DỤNG CỘNG SỰ TÀI CHÍNH cho mình. Mọi chỉ đạo, thao tác mua bán, đóng/mở vị thế của bạn đều phải đi qua hệ thống máy chủ của họ. Sự uy tín và trung thực là thước đo quan trọng nhất bạn không thể bỏ qua!</p>
<h2>2. Những Tiêu Chí Sinh Tử Của Một Sàn Uy Tín</h2>
<p>Chúng ta có 5 quy luật sinh tử (hoặc "checklist" bắt buộc) khi dạo quanh để kiểm định bất kỳ sàn giao dịch nào đang chào mời hấp dẫn:</p>
<figure style="margin: 2em 0; text-align: center;">
<img src="/images/broker_behind_desk_1775207154206.png" alt="Phân tích uy tín broker Forex" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Soi chiếu năng lực và độ uy tín của nhà môi giới đằng sau bàn làm việc</figcaption>
</figure>
<h3>Tiêu Chí 1: Giấy phép quản lý cấp cao nhất (Tier 1 & Tier 2)</h3>
<p>Hãy xem xét đến FCA (Anh Quốc), ASIC (Úc), hạng 2 gồm CySEC (Đảo Síp) - Nếu sàn không trình bày minh bạch những giấy phép tài chính này, hãy đưa chúng vào danh sách "cảnh báo đỏ" ngay lập tức.</p>
<h3>Tiêu Chí 2: Chi phí giao dịch minh bạch (Spread & Commission)</h3>
<p>So sánh phí hoa hồng trên các tài khoản ECN/Raw. Một sàn uy tín sẽ cung cấp Spread bằng 0 (Hoặc cạnh tranh) với Commission chỉ quanh mốc độ $3.0 - $3.5 mỗi lot giao dịch / chiều.</p>
<h3>Tiêu Chí 3: Tốc Độ Khớp Lệnh và Xử Lý Trượt Giá</h3>
<p>Hãy quan sát lệnh có bị Requotes (báo giá lại) hay độ trễ (latency) mạng kéo dài hơn 200 milimet-giây hay không. Lệnh bị trượt (Slippage) liên tục trong tin tức có thể gây thiệt hại kỷ lục cho tài khoản ngay trong một cú Flash crash.</p>
<h3>Tiêu Chí 4: Công nghệ thanh khoản và nền tảng giao dịch</h3>
<p>Những nền tảng đỉnh cao như MT4, MT5, hoặc cTrader đều cung cấp đầy đủ đường cong giá ổn định. Vấn đề là công nghệ Bridge (Đầu nối tín hiệu) từ sàn có mượt mà hay không.</p>
<h3>Tiêu Chí 5: Trải Nghiệm Nạp & Rút Tiền Thực Tế</h3>
<p>Bạn vẫn chưa thực sự hiểu về một Broker cho tới khi bạn thực hiện NẠP tiền vào - GIAO DỊCH thử nghiệm - VÀ CHỈ ĐỊNH RÚT tiển. Sàn Forex tốt nhất sẽ thực hiện việc rút tiền trong vòng không quá 24 giờ cho cổng ngân hàng quốc tế hoặc tiền mã hoá cục bộ.</p>
`
    },
    {
        scheduled_at: '2026-04-05T05:30:00+00:00', // 12:30 VN
        slug: 'bot-giao-dich-forex-hieu-qua',
        title: 'Bot Giao Dịch Forex (EA) Là Gì? Sự Thật Về Giao Dịch Tự Động',
        meta_title: 'Bot Giao Dịch Forex Có Sinh Lời Không? Giải Mã Kỷ Nguyên EA',
        excerpt: 'Tham vọng tạo ra một cỗ máy in tiền thụ động (EA) có trở thành hiện thực? Khám phá cách các bot giao dịch Forex hoạt động, cũng như lợi và hại của chúng.',
        category: 'kien-thuc',
        featured_image: '/images/robot_brokers_battling_1775207286485.png',
        featured_image_alt: 'Bot Giao Dịch Forex, Expert Advisor',
        content: `
<h2>1. EA (Expert Advisor) hay Bot Giao Dịch Forex Là Gì?</h2>
<p><strong>Bot giao dịch (Trading Robot)</strong> hay EA (Tên gọi thuần túy trong nền tảng MT4/MT5) đơn thuần là một đoạn script hoặc chương trình phần mềm được lập trình theo quy tắc thuật toán cố định. Khi các biến số hội đủ điều kiện (như MA giao cắt RSI), con bot tự động tính toán lot size và đặt lệnh giao dịch mà không có sự hiện diện của con người.</p>
<h2>2. Ưu Điểm Đỉnh Cao Của Robot So Với Con Người</h2>
<p>Robot không biết sợ hãi, cũng chẳng chịu bất cứ dao động lòng tin tâm lý nào!</p>
<ul>
    <li>Bot có khả năng soi quét và xử lý 10 biểu đồ tiền tệ một lúc - một tốc độ rà soát mà không một Trader truyền thống nào làm được.</li>
    <li>Robot tuân thủ chặt 100% nguyên tắc rủi ro và quản lý vốn như thiết lập ban đầu (VD: Cắt lỗ cứng ở 1.5% tài khoản), chống lại mong muốn "gồng lỗ" bất trị ở con người.</li>
</ul>
<figure style="margin: 2em 0; text-align: center;">
<img src="/images/robot_brokers_battling_1775207286485.png" alt="Các thuật toán Bot giao dịch đối kháng Forex" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Hệ sinh thái giao dịch thuật toán: Các lệnh mua và bán tự động va chạm mãnh liệt</figcaption>
</figure>
<h2>3. Nhưng Tại Sao Hầu Hết Bot Thương Mại Lại Thất Bại?</h2>
<p>Trong thị trường giao dịch Forex có cấu trúc phi tuyến tính mang cực nhiều biến số khó đoán, một EA chỉ phân tích bằng dữ liệu quá khứ tĩnh không đủ sức dẻo dai thích nghi. Những nhược điểm nhức nhối có thể kể đến:</p>
<ul>
    <li>Khả năng bị phá huỷ trong thời kỳ khủng hoảng và điểm bùng phát kinh tế (thiên nga đen): Bot thường không "đọc" được tweet của quan chức Fed hoặc dữ kiện chiến tranh địa chính trị.</li>
    <li>Nhiều EA thương mại trên Internet sử dụng lưới chéo (Grid) hay phương pháp gấp thép Martingale cực kỳ độc hại. Bạn có thể thắng nhỏ nhưng một ngày rủi ro cao sẽ cháy bay trụi toàn bộ tài khoản trong 6 giờ.</li>
</ul>
<h2>4. Kết Luận: Lời Khuyên Sử Dụng EA An Toàn</h2>
<p>Bot giao dịch không phải là "chén thánh". Hãy dùng Robot như một phương thức bán tự động: Để EA tự phát ra cảnh báo vào tín hiệu cho bạn, hoặc dùng nó đóng các lệnh cắt lỗ theo hệ thống (Trailing stop), nhưng bản thân con người VẪN CHỊU TRÁCH NHIỆM CHO NÚT BẤM VÀO LỆNH.</p>
`
    },
    {
        scheduled_at: '2026-04-05T08:00:00+00:00', // 15:00 VN
        slug: 'top-san-forex-nap-rut-tien-nhanh-nhat',
        title: 'Top 3 Sàn Forex Uy Tín Hỗ Trợ Rút Tiền Nhanh Siêu Tốc (Dưới 3 Phút)',
        meta_title: 'Danh Sách Sàn Ưu Tiên Rút Nhanh: Khi Tiền Phải Nằm Trong Ví',
        excerpt: 'Thời gian là vàng bạc! Cùng kiểm chứng top 3 sàn Forex đỉnh cao cung cấp cơ chế rút tiền "thần tốc" về ngân hàng chỉ trong dưới 3 phút để tối ưu thanh khoản.',
        category: 'so-sanh',
        featured_image: '/images/superhero_fast_withdrawal_1775207252393.png',
        featured_image_alt: 'Rút tiền nhanh siêu tốc ở sàn Forex',
        content: `
<h2>1. Giá Trị Của Việc Rút Tiền Chớp Nhoáng</h2>
<p>Thành công của bất kỳ ngày giao dịch nào không nằm ở số tiền hiển thị trên MetaTrader, mà ở khoảnh khắc tiền được ghi có vào tài khoản ngân hàng của bạn một lần và mãi mãi. Cơ chế Rút tiền (Withdrawal) là trải nghiệm kiểm chứng lớn nhất cho độ minh bạch của hệ thống sàn Forex.</p>
<figure style="margin: 2em 0; text-align: center;">
<img src="/images/superhero_fast_withdrawal_1775207252393.png" alt="Sàn Forex hỗ trợ rút tiền nhanh chóng" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Hình tượng siêu tốc độ: Các hệ thống sàn ưu tiên thanh khoản trả tiền tức thời cho khách hàng</figcaption>
</figure>
<h2>2. Sàn Exness - Vị Vua Khớp Lệnh và Xử Lý "Instant"</h2>
<p>Đứng đầu bảng trong 10 năm liền về thanh khoản nội tệ: <strong>Exness</strong> sở hữu cơ chế rút tiền không tính phí trên hàng tá phương tiện giao dịch: Ví điện tử, Crypto hay Internet Banking đều trơn tru cả cuối tuần.</p>
<ul>
    <li>Thực thể nạp/rút tiền liên ngân hàng diễn ra nội bộ mà không cần xét duyệt bằng tay, điều này làm cho tiền có thể trả thẳng về ngân hàng của bạn chỉ sau ~60 giây.</li>
    <li>Lưu ý: Bạn bắt buộc làm lệnh rút bằng đúng phương thức mà bạn đã gửi tiền vào trước đó.</li>
</ul>
<h2>3. Vantage Markets - Thách Thức Về Cổng Tài Chính Khổng Lồ</h2>
<p>Sàn <strong>Vantage</strong> ghi đậm tiếng tăm một nhà cái khổng lồ tại Châu Á. Họ phân luồng thanh khoản rất xuất sắc và tạo ra cơ chế rút qua các cổng trực tiếp cực kỳ uy tín (Dưới 1-2 giờ hành chính làm việc).</p>
<h2>4. IC Markets - Chất Lượng Chuyên Nghiệp Hàng Đầu Nước Úc</h2>
<p>Đối nghịch với trào lưu tức thời, <strong>IC Markets</strong> ưu việt ở phương án chuyển khoản Bank Transfer bảo mật cao. Tuy mất khoảng gần nửa ngày (12 tiếng) nhưng quy trình chống sai sót hoàn hảo khiến nó luôn là lựa chọn hàng đầu cho các nhà đầu tư lớn có tài khoản hàng ngàn đô la.</p>
`
    },
    {
        scheduled_at: '2026-04-05T10:00:00+00:00', // 17:00 VN
        slug: 'cac-chuong-trinh-bonus-san-forex',
        title: 'Sự Thật Về Các Chương Trình Bonus Sàn Forex: Cơ Hội Hay Cạm Bẫy?',
        meta_title: 'Sự Thật Về Các Bonus Sàn Forex Bạn Nên Đọc Trước Khi Nhận',
        excerpt: 'Một Bonus $50 không cần ký quỹ hay 100% thưởng nạp tiền nghe quá lời để từ chối? Bóc tách ý nghĩa thực tiễn phía sau vô số chương trình khuyến mãi ngành Forex.',
        category: 'khuyen-mai',
        featured_image: '/images/forex_revenue_vault_1775207138368.png',
        featured_image_alt: 'Khuyến mãi và bonus sàn Forex',
        content: `
<h2>1. Ma Trận Khuyến Mãi (Bonus) - Chúng Đến Từ Đâu?</h2>
<p>Kể từ năm 2026, vô số các nhà môi giới Forex vung tiền vào những chương trình Bonus vô cùng ưu đãi. Bạn thường thấy: <strong>"$30 No Deposit Bonus"</strong> hoặc <strong>"200% Lợi Ích Nạp Lần Đầu"</strong>. Về mặt bản chất thương mại, sàn mong muốn thu hút user tạo tài khoản mới và phát sinh khối lượng giao dịch.</p>
<h2>2. Phân Tích Hai Dòng Bonus Thông Dụng</h2>
<figure style="margin: 2em 0; text-align: center;">
<img src="/images/forex_revenue_vault_1775207138368.png" alt="Kho báu khuyến mãi Bonus tỷ lệ đòn bẩy" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Bên trong kho lưu trữ: Hệ thống quản trị tiền tệ của một chương trình Bonus thực sự</figcaption>
</figure>
<h3>Bonus Không Cần Nạp Tiền (No Deposit Bonus)</h3>
<p>Rất dễ dàng để nhận một tài khoản $30 dùng thử ngay. Bạn giao dịch, và có thể rút được LỢI NHUẬN bạn tạo ra tử $30 đó. Tuy nhiên, quy định ẩn dưới điều khoản cực kì khắt khe: Bạn sẽ phải cày tới hơn 2.0 Lot tiêu chuẩn trong đúng 30 ngày và cấm áp dụng Scalping.</p>
<h3>Bonus Hỗ Trợ Đòn Bẩy (Deposit Bonus/ Margin Bonus)</h3>
<p>Bạn bỏ vào mã số ID 1,000 USD, sàn cộng thêm $1,000 Credit Bonus để bạn có công cụ chịu đựng giao dịch lên 2,000 USD.<br/>
Điểm chết người: Số Credit này không thể rút, và ngay khi khoản lỗ của bạn ăn sâu vào 1.000 USD vốn thật – sàn sẽ tức khắc TỰ ĐỘNG THU HỒI $1.000 Credit đó và phát lệnh Margin Call. Nó hoàn toàn vô ích để "chống cháy tài khoản" như bạn lầm tưởng!</p>
<h2>3. Cách Tiếp Cận "Sáng Suốt" Với Khuyến Mãi</h2>
<p>Tương tự như đi ăn nhà hàng, Bonus chỉ nên được coi là "Tráng miệng". Đừng đổi sự an toàn của vốn tự do lấy một chút sức mạnh kí gửi từ Margin của sàn. Hãy chỉ ưu tiên những chính sách hoàn tiền <strong>Cashback (Hoàn lại Rebate theo đúng phí giao dịch)</strong> vì chúng an toàn và không đi kèm điều kiện khoá rút tiền.</p>
`
    },
    {
        scheduled_at: '2026-04-05T12:00:00+00:00', // 19:00 VN
        slug: 'phuong-phap-phan-tich-ky-thuat-forex',
        title: 'Tuyệt Chiêu Phân Tích Kỹ Thuật Forex: Đọc Biểu Đồ Như Một Pro Trader',
        meta_title: 'Đọc Biểu Đồ Và Phân Tích Kỹ Thuật Khi Trade Ngoại Hối',
        excerpt: 'Bí kíp đọc hiểu ngôn ngữ của đường giá thông qua quy mô phân tích Price Action và biểu đồ nến, áp dụng cho thị trường ngoại hối biến động kinh hoàng.',
        category: 'kien-thuc',
        featured_image: '/images/magic_crystal_ball_chart_1775207302122.png',
        featured_image_alt: 'Phân Tích Kỹ Thuật Forex',
        content: `
<h2>1. Giá Lên, Giá Xuống Vút Trong Đêm Sương Của Phân Tích Kỹ Thuật</h2>
<p>Phân tích kỹ thuật (Technical Analysis) sử dụng các mẫu lịch sử về khối lượng, đỉnh-đáy của giá để ngoại suy về hành động tâm lý thị trường kế tiếp trong tương lai. Tức là bạn nhìn vào lịch sử để tiên tri tương lai. Một Pro Trader không nhất định cần quả cầu thuỷ tinh, họ chỉ cần cấu trúc Biểu đồ nến Nhật là quá trình dự đoán sẽ cực kỳ rành mạch.</p>
<figure style="margin: 2em 0; text-align: center;">
<img src="/images/magic_crystal_ball_chart_1775207302122.png" alt="Phép màu của phân tích kỹ thuật" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Sự kỳ diệu của viễn kiến phân tích kỹ thuật trên các biểu đồ phức hợp</figcaption>
</figure>
<h2>2. Triết Lý 3 Cốt Lõi Của Hành Động Giá (Price Action)</h2>
<p>Price action là thứ tín hiệu thanh khiết duy nhất - do nó được chính thị trường định đoạt và giao nạp một cách trực tiếp không có sự chậm trễ của bộ Indicator thứ 3.</p>
<ul>
    <li><strong>Sự phá vỡ (Breakouts):</strong> Những vùng giá bị giam nén lâu ngày, một khi phá đứt đường cản và đóng nến mạnh sẽ bộc phát lực đi xuyên tâm kéo dài hàng trăm Pips theo sóng H4.</li>
    <li><strong>Tái điểm chạm (Retest):</strong> Nguyên tắc không thể thiếu khi củng cố tính vững vàng của dòng tiền là thị trường buộc phải test lại những "chiến trường" vừa mới thủng để chứng minh sức mạnh của phe Bán/Mua.</li>
</ul>
<h2>3. Lời Khuyên Ứng Phiên Đỉnh Điểm</h2>
<p>Hãy phân tích và thiết lập kịch bản từ tối chủ nhật cho hệ thống cản hỗ trợ (Support / Resistance Zones) trên biểu đồ thời gian khung lớn (D1, W1). Chỉ nên mở các tín hiệu chốt lệnh cụ thể ở H1 để triệt tiêu mọi tạp âm trong diễn biến nhiễu nhương của Market.</p>
`
    },
    {
        scheduled_at: '2026-04-05T14:00:00+00:00', // 21:00 VN
        slug: 'bao-mat-tai-khoan-forex-an-toan',
        title: 'Bảo Mật Tài Khoản Forex: Hướng Dẫn Tránh Bị Hack & Lừa Đảo',
        meta_title: 'Mẹo Bảo Mật Tài Khoản Giao Dịch Forex Không Ai Tiết Lộ',
        excerpt: 'Bảo vệ thành quả sinh lời của bạn trước những vụ hack, lừa đảo (phishing) và mất quyền truy cập tài khoản giao dịch ngay hôm nay cùng chuyên gia.',
        category: 'huong-dan',
        featured_image: '/images/shield_deflecting_bolts_1775207222103.png',
        featured_image_alt: 'Bảo Mật An Toàn Tài Khoản',
        content: `
<h2>1. Hiểm Họa Hacker Xâm Nhập - Đừng Thách Thức Công Nghệ!</h2>
<p>Bạn dùng thuật toán bảo vệ 256bit của ngân hàng, nhưng lại quên mất việc bảo vệ trực diện tài khoản giao dịch Margin. Lấy trộm 1.000 USD từ tài khoản Forex nhanh hơn cạy một cánh cửa hầm ngầm. Phishing (Email lừa đảo giả danh Sàn) hoặc keylogger cài vào trình cắm EA độc hại là nguyên nhân hàng đầu.</p>
<figure style="margin: 2em 0; text-align: center;">
<img src="/images/shield_deflecting_bolts_1775207222103.png" alt="Lớp khiên từ trường bảo vệ giao dịch thuật toán" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Hệ thống rào chắn vững vàng để bảo mật tuyệt đối nền tảng giao dịch quỹ mạng</figcaption>
</figure>
<h2>2. Bộ 3 Quy Tắc Thiết Lập Chống Dò Rỉ</h2>
<ul>
    <li><strong>Xác thực mật khẩu đa luồng 2FA ngay lập tức:</strong> Liên kết App Authenticator là biện pháp bảo vệ "Chén thánh" 100% trước những hacker nắm được địa chỉ Email của bạn.</li>
    <li><strong>Tuyệt đối tránh sử dụng Wi-Fi quán Cafe:</strong> Truy xuất tín hiệu giao dịch có mật khẩu và Session mở tại mạng Wifi công cộng khiến dữ liệu của bạn bị đánh hơi PacketSniff chỉ trong vòng vài giây.</li>
    <li><strong>Tuyệt đối không gửi Password cho Mentor (Sư phụ), hỗ trợ viên (Support Agent):</strong> Sàn không bắt buộc bạn cung cấp mật khẩu khi cần giải quyết đơn khiếu nại! Họ có quyền truy cập master bằng Token để nhìn bảng lưu thông riêng biệt.</li>
</ul>
<h2>3. An Toàn Rút Tiền Đỉnh Cao</h2>
<p>Hãy liên kết 1 số tài khoản CỨNG MẶC ĐỊNH DUY NHẤT để sàn nhận biết định danh thanh toán đầu-cuối của riêng bạn. Nếu lệnh rút thay đổi, hệ thống bảo hộ của Broker xịn (chuẩn xác định bởi CySEC) sẽ treo giao dịch (hoãn lại) để gọi điện xác nhận tính xác thực 100% với thân chủ chủ biên.</p>
`
    },
    {
        scheduled_at: '2026-04-06T00:30:00+00:00', // 07:30 VN
        slug: 'bai-hoc-kinh-nghiem-giao-dich-forex',
        title: 'Thành Công Từ Trader Chuyên Nghiệp: 5 Bài Học Tối Thượng Giá Trị Nghìn Đô',
        meta_title: 'Bài Học Từ Những Trader Giao Dịch Chuyên Nghiệp Quản Lý Rủi Ro',
        excerpt: 'Được phỏng vấn từ phong cách đầu tư bền bỉ của những chuyên gia đứng top giao dịch tại Forex thế giới, làm sáng tỏ câu đố giữa kiên trì và kỷ luật vô tâm.',
        category: 'kien-thuc',
        featured_image: '/images/traders_celebrating_confetti_1775207320287.png',
        featured_image_alt: 'Những bài học thành công trong giao dịch Forex',
        content: `
<h2>1. Bức Tranh Lấp Lánh – Kỷ Nguyên Chờ Đợi Sự Thành Công</h2>
<p>Có một câu chuyện muôn thuở được truyền tai: "Một Trader mới học muốn giàu trong 3 ngày, còn một Trader kỳ cựu sẵn sàng trải qua chuỗi hoà 30 ngày để giữ cho vốn của họ luôn ở trạng thái tấn công an toàn". Sự khác biệt ở việc chuyên nghiệp không thể được nhét bằng công cụ giao dịch mà nằm ở sự chuẩn bị tinh thần và nội tâm sâu sắc nhất.</p>
<figure style="margin: 2em 0; text-align: center;">
<img src="/images/traders_celebrating_confetti_1775207320287.png" alt="Lễ kỷ niệm chiến thắng của các trader tại phòng ban giao dịch" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Chiến thắng không thuộc về người đoán đúng mọi xu hướng, chiến thắng là sự sống sót của chu kỳ</figcaption>
</figure>
<h2>2. Những Nguyên Tắc Xương Máu Gây Bất Ngờ</h2>
<ul>
    <li><strong>Sự thành công là việc LẶP ĐI LẶP LẠI sự tẻ nhạt:</strong> Những Pro-Trader không bị rung động trước mức tỷ giá nhảy cóc vì họ có một nhật ký giao dịch rất kiên cường lặp lại chu kỳ hàng trăm ván chơi đồng nhất.</li>
    <li><strong>Thắng - Thua là 1 Xác Suất Phân Tán Đều:</strong> Hãy tưởng tượng bạn ném xu - và dù phương pháp có 60% tỉ lệ win, thì vẫn có chuỗi đen thua liền 8 lần. Một tài khoản trụ vững không bao giờ vỡ trận trước 8 ván thua.</li>
    <li><strong>Yêu Quý Stop loss (Chốt lỗ) ngang với Chốt Mạng:</strong> Stop loss là bảo hiểm an ninh tốt nhất cho lệnh giao dịch trong các mùa bão giá tài phiệt. Mất vài đồng tiền nhỏ nhưng có thể thức dậy vui vẻ làm lại chiến trường ngay tháng sau.</li>
</ul>
<h2>3. Lời Nhắn Nhủ Gửi Gắm</h2>
<p>Hãy xoay sự tập trung vào VỐN sống còn của bạn, còn LỢI NHUẬN sẽ đi theo hệ thống. Trading là một cuộc chơi cự ly Marathon. Đừng chạy quá sức rồi nằm lại ngay vạch 100m đầu tiên của chuyến hành trình ngàn dặm.</p>
`
    }
];

async function run() {
    console.log("Bat dau them bai vao Supabase...");
    let successCount = 0;
    let skipCount = 0;
    
    for (const post of posts) {
        const text = post.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const wc = text.split(' ').length;
        
        console.log('\\n' + '='.repeat(60));
        console.log('Title: ' + post.title);
        console.log('Slug: ' + post.slug);
        console.log('Schedule: ' + post.scheduled_at);
        console.log('Words: ' + wc);
        
        const { data: existing } = await supabase
            .from('posts')
            .select('id')
            .eq('slug', post.slug)
            .single();

        if (existing) {
            console.log('=> WARNING: Slug already exists, skipping!');
            skipCount++;
            continue;
        }

        const { error } = await supabase.from('posts').insert({
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            meta_title: post.meta_title,
            meta_description: post.excerpt, // fallback
            content: post.content,
            category: post.category,
            featured_image: post.featured_image,
            featured_image_alt: post.featured_image_alt || post.title,
            is_published: false,
            scheduled_at: post.scheduled_at,
            published_at: null
        });

        if (error) {
            console.log('=> ERROR: ' + error.message);
        } else {
            console.log('=> OK: Scheduled successfully!');
            successCount++;
        }
    }
    
    console.log('\\n' + '='.repeat(60));
    console.log("XONG! Đã thêm " + successCount + " bài. Bỏ qua " + skipCount + " bài.");
}

run();
