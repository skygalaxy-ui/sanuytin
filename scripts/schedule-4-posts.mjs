const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Lịch đăng bài (giờ Việt Nam UTC+7)
// Hôm nay 12/02: 18:00, 20:30
// Ngày mai 13/02: 09:00, 14:00
const posts = [
    {
        // Hôm nay 18:00 VN = 11:00 UTC
        scheduled_at: '2026-02-12T11:00:00+00:00',
        slug: 'don-bay-leverage-trong-forex',
        title: 'Đòn Bẩy (Leverage) Trong Forex Là Gì? Cách Sử Dụng An Toàn',
        meta_title: 'Đòn Bẩy Forex Là Gì? Hướng Dẫn Dùng Leverage An Toàn',
        excerpt: 'Tìm hiểu đòn bẩy (leverage) trong Forex là gì, cách hoạt động, mức đòn bẩy phổ biến và chiến lược sử dụng đòn bẩy an toàn cho người mới bắt đầu.',
        category: 'kien-thuc',
        content: `
<h2>1. Đòn bẩy (Leverage) trong Forex là gì?</h2>
<p><strong>Đòn bẩy (Leverage)</strong> là công cụ cho phép trader giao dịch với số tiền lớn hơn nhiều so với số vốn thực có trong tài khoản. Đây là một trong những đặc điểm hấp dẫn nhất của thị trường Forex, giúp bạn có thể tham gia giao dịch với vốn nhỏ nhưng vẫn có cơ hội kiếm lợi nhuận đáng kể.</p>
<p>Ví dụ: Với đòn bẩy <strong>1:100</strong>, bạn chỉ cần có 100 USD trong tài khoản nhưng có thể mở vị thế trị giá 10.000 USD. Sàn môi giới sẽ "cho bạn mượn" phần còn lại.</p>
<p>Tuy nhiên, đòn bẩy là <strong>con dao hai lưỡi</strong> — nó khuếch đại cả lợi nhuận lẫn thua lỗ. Vì vậy, hiểu rõ cách sử dụng đòn bẩy an toàn là kỹ năng bắt buộc với mọi trader.</p>

<h2>2. Cách đòn bẩy hoạt động</h2>
<p>Khi bạn mở tài khoản giao dịch Forex, sàn môi giới sẽ cung cấp cho bạn mức đòn bẩy tối đa. Cơ chế hoạt động như sau:</p>
<ul>
<li><strong>Ký quỹ (Margin):</strong> Số tiền thực bạn cần bỏ ra để mở vị thế. Ví dụ, với đòn bẩy 1:100, ký quỹ chỉ bằng 1% giá trị giao dịch.</li>
<li><strong>Giá trị giao dịch thực:</strong> Tổng giá trị của vị thế mà bạn đang kiểm soát trên thị trường.</li>
<li><strong>Công thức:</strong> Margin = Giá trị giao dịch ÷ Đòn bẩy</li>
</ul>
<p>Ví dụ cụ thể: Bạn muốn mua 1 lot EUR/USD (trị giá 100.000 USD):</p>
<ul>
<li>Đòn bẩy 1:100 → Cần ký quỹ: 100.000 ÷ 100 = <strong>1.000 USD</strong></li>
<li>Đòn bẩy 1:500 → Cần ký quỹ: 100.000 ÷ 500 = <strong>200 USD</strong></li>
<li>Đòn bẩy 1:1000 → Cần ký quỹ: 100.000 ÷ 1000 = <strong>100 USD</strong></li>
</ul>

<h2>3. Các mức đòn bẩy phổ biến</h2>
<p>Mỗi sàn Forex cung cấp các mức đòn bẩy khác nhau, tùy thuộc vào quy định pháp lý và loại tài khoản:</p>
<ul>
<li><strong>1:30 - 1:50:</strong> Mức đòn bẩy thấp, phù hợp với trader thận trọng. Các sàn tại EU, Úc bị giới hạn ở mức này theo quy định ESMA/ASIC.</li>
<li><strong>1:100 - 1:200:</strong> Mức phổ biến nhất, cân bằng giữa cơ hội và rủi ro. Phù hợp cho trader có kinh nghiệm vừa.</li>
<li><strong>1:500 - 1:1000:</strong> Đòn bẩy cao, chỉ dành cho trader chuyên nghiệp. Lợi nhuận tiềm năng rất lớn nhưng rủi ro cháy tài khoản cũng rất cao.</li>
<li><strong>1:2000 - Unlimited:</strong> Một số sàn như Exness cung cấp đòn bẩy không giới hạn. Chỉ nên sử dụng khi đã có kinh nghiệm nhiều năm.</li>
</ul>

<h2>4. Đòn bẩy khuếch đại lợi nhuận VÀ thua lỗ</h2>
<p>Đây là điều quan trọng nhất mà mọi trader mới cần hiểu rõ. Hãy xem ví dụ sau:</p>
<p>Bạn có <strong>1.000 USD</strong>, sử dụng đòn bẩy <strong>1:100</strong> để mở vị thế 1 lot EUR/USD:</p>
<ul>
<li><strong>Nếu giá tăng 1% (100 pips):</strong> Lợi nhuận = 1.000 USD → Tài khoản tăng gấp đôi lên 2.000 USD ✅</li>
<li><strong>Nếu giá giảm 1% (100 pips):</strong> Thua lỗ = 1.000 USD → Tài khoản về 0, bị Margin Call ❌</li>
</ul>
<p>Cùng một biến động 1%, nhưng với đòn bẩy 1:100, bạn có thể mất <strong>toàn bộ vốn</strong>. Nếu không dùng đòn bẩy, bạn chỉ mất 10 USD (1% của 1.000 USD).</p>

<h2>5. Margin Call và Stop Out là gì?</h2>
<p>Đây là hai khái niệm liên quan trực tiếp đến đòn bẩy mà bạn phải nắm rõ:</p>
<ul>
<li><strong>Margin Call:</strong> Cảnh báo khi mức ký quỹ của bạn giảm xuống dưới mức tối thiểu (thường 50-100% margin). Sàn sẽ thông báo bạn cần nạp thêm tiền hoặc đóng bớt vị thế.</li>
<li><strong>Stop Out:</strong> Khi mức margin giảm xuống quá thấp (thường 20-50%), sàn sẽ <strong>tự động đóng</strong> các vị thế thua lỗ lớn nhất để bảo vệ tài khoản khỏi âm.</li>
</ul>
<p>Mức Margin Call và Stop Out khác nhau tùy sàn. Ví dụ: Exness có Stop Out 0%, IC Markets là 50%.</p>

<h2>6. Chiến lược sử dụng đòn bẩy an toàn</h2>
<h3>6.1. Nguyên tắc vàng: Dùng đòn bẩy thấp hơn mức tối đa</h3>
<p>Chỉ vì sàn cho phép đòn bẩy 1:1000 không có nghĩa bạn phải dùng hết. Hãy bắt đầu với <strong>đòn bẩy hiệu dụng 1:10 đến 1:20</strong> bằng cách mở vị thế nhỏ so với tài khoản.</p>

<h3>6.2. Luôn đặt Stop Loss</h3>
<p>Stop Loss là lưới an toàn bắt buộc khi dùng đòn bẩy. Nó tự động đóng lệnh khi thua lỗ đạt mức bạn chấp nhận được, ngăn tài khoản bị cháy.</p>

<h3>6.3. Quy tắc rủi ro 1-2%</h3>
<p>Không bao giờ rủi ro quá 1-2% tài khoản trên một giao dịch. Với tài khoản 1.000 USD, mỗi lệnh chỉ nên rủi ro tối đa 10-20 USD.</p>

<h3>6.4. Tính toán lot size phù hợp</h3>
<p>Thay vì chọn lot size ngẫu nhiên, hãy tính toán dựa trên khoảng cách Stop Loss và mức rủi ro chấp nhận được:</p>
<p><strong>Lot size = (Vốn × % rủi ro) ÷ (SL pips × Giá trị 1 pip)</strong></p>

<h2>7. Bảng so sánh mức đòn bẩy theo loại trader</h2>
<p>Dưới đây là gợi ý mức đòn bẩy phù hợp cho từng đối tượng:</p>
<ul>
<li><strong>Người mới bắt đầu:</strong> 1:10 - 1:50 → Rủi ro thấp, học hỏi từ từ</li>
<li><strong>Trader trung cấp:</strong> 1:50 - 1:200 → Cân bằng lợi nhuận và rủi ro</li>
<li><strong>Trader chuyên nghiệp:</strong> 1:200 - 1:500 → Tận dụng cơ hội ngắn hạn</li>
<li><strong>Scalper chuyên nghiệp:</strong> 1:500+ → Giao dịch cực ngắn hạn, kỷ luật cao</li>
</ul>

<h2>8. Sai lầm phổ biến khi sử dụng đòn bẩy</h2>
<ul>
<li><strong>Dùng đòn bẩy tối đa ngay từ đầu:</strong> Đây là nguyên nhân số 1 khiến trader mới cháy tài khoản trong tuần đầu tiên.</li>
<li><strong>Không đặt Stop Loss:</strong> Khi dùng đòn bẩy cao mà không có SL, một biến động nhỏ cũng có thể xóa sổ tài khoản.</li>
<li><strong>Mở quá nhiều vị thế:</strong> Mỗi vị thế đều chiếm margin. Mở nhiều lệnh cùng lúc làm tăng rủi ro tổng thể.</li>
<li><strong>Không hiểu Margin Level:</strong> Nhiều trader không theo dõi mức margin, dẫn đến bất ngờ khi bị Margin Call.</li>
</ul>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Đòn bẩy 1:100 nghĩa là gì?</h3>
<p>Nghĩa là bạn có thể kiểm soát vị thế lớn gấp 100 lần số vốn thực. Với 100 USD, bạn giao dịch được vị thế trị giá 10.000 USD. Tuy nhiên, cả lợi nhuận và thua lỗ đều được khuếch đại 100 lần.</p>

<h3>Người mới nên dùng đòn bẩy bao nhiêu?</h3>
<p>Người mới nên bắt đầu với đòn bẩy hiệu dụng không quá 1:10 đến 1:20. Điều này có nghĩa là mở vị thế nhỏ so với tài khoản, kết hợp với Stop Loss chặt chẽ và chỉ rủi ro 1% mỗi lệnh.</p>

<h3>Đòn bẩy cao có tốt không?</h3>
<p>Đòn bẩy cao không xấu — chỉ có cách sử dụng mới quyết định tốt hay xấu. Đòn bẩy cao cho phép linh hoạt hơn trong quản lý vốn, nhưng đòi hỏi kỷ luật cực kỳ nghiêm ngặt. Nếu bạn chưa có kinh nghiệm, đòn bẩy cao sẽ rất nguy hiểm.</p>

<h3>Sàn nào cho đòn bẩy cao nhất?</h3>
<p>Exness cung cấp đòn bẩy lên tới Unlimited (không giới hạn) cho một số loại tài khoản. Vantage và XM cung cấp tới 1:500. Tuy nhiên, mức đòn bẩy cao không phải lúc nào cũng tốt — hãy chọn mức phù hợp với trình độ và chiến lược của bạn.</p>
`
    },
    {
        // Hôm nay 20:30 VN = 13:30 UTC
        scheduled_at: '2026-02-12T13:30:00+00:00',
        slug: 'spread-trong-forex-la-gi',
        title: 'Spread Trong Forex Là Gì? Cách Tính Và Giảm Chi Phí Giao Dịch',
        meta_title: 'Spread Forex Là Gì? Giải Thích Dễ Hiểu Cho Người Mới',
        excerpt: 'Tìm hiểu spread trong Forex là gì, các loại spread phổ biến, cách tính chi phí spread và mẹo tiết kiệm spread khi giao dịch.',
        category: 'kien-thuc',
        content: `
<h2>1. Spread trong Forex là gì?</h2>
<p><strong>Spread</strong> là khoảng chênh lệch giữa giá Mua (Ask) và giá Bán (Bid) của một cặp tiền tệ. Đây chính là <strong>chi phí giao dịch</strong> mà sàn môi giới thu từ trader mỗi khi mở lệnh.</p>
<p>Ví dụ: Cặp EUR/USD có giá Bid = 1.0850 và giá Ask = 1.0852. Spread = 1.0852 - 1.0850 = <strong>0.0002</strong>, tương đương <strong>2 pips</strong>.</p>
<p>Hiểu đơn giản: Khi bạn mở lệnh mua, bạn mua ở giá Ask (cao hơn). Khi bạn đóng lệnh (bán lại), bạn bán ở giá Bid (thấp hơn). Khoảng chênh lệch đó chính là lợi nhuận của sàn và là chi phí của bạn.</p>

<h2>2. Tại sao spread quan trọng với trader?</h2>
<p>Spread ảnh hưởng trực tiếp đến lợi nhuận của bạn vì:</p>
<ul>
<li><strong>Mỗi lệnh đều bắt đầu ở trạng thái thua lỗ:</strong> Ngay khi mở lệnh, bạn đã thua lỗ bằng đúng giá trị spread. Giá phải di chuyển đủ xa để vượt qua spread trước khi bạn có lãi.</li>
<li><strong>Scalper bị ảnh hưởng nhiều nhất:</strong> Nếu bạn giao dịch ngắn hạn với mục tiêu 5-10 pips, spread 2-3 pips đã chiếm 20-60% lợi nhuận mục tiêu.</li>
<li><strong>Tích lũy theo thời gian:</strong> Giao dịch 10 lệnh mỗi ngày với spread 2 pips = 20 pips chi phí mỗi ngày. Một tháng = 400 pips chi phí!</li>
</ul>

<h2>3. Các loại spread trong Forex</h2>
<h3>3.1. Spread cố định (Fixed Spread)</h3>
<p>Spread không thay đổi bất kể điều kiện thị trường. Ví dụ: EUR/USD luôn có spread 2 pips dù thị trường biến động mạnh hay nhẹ.</p>
<ul>
<li><strong>Ưu điểm:</strong> Dễ dự đoán chi phí, phù hợp cho người mới</li>
<li><strong>Nhược điểm:</strong> Thường cao hơn spread thả nổi trong điều kiện bình thường</li>
</ul>

<h3>3.2. Spread thả nổi (Variable/Floating Spread)</h3>
<p>Spread thay đổi liên tục theo cung cầu thị trường. Trong điều kiện bình thường có thể rất thấp (0.1-0.5 pips), nhưng khi có tin tức lớn có thể giãn ra 10-50 pips.</p>
<ul>
<li><strong>Ưu điểm:</strong> Spread trung bình thấp hơn, phù hợp cho scalper</li>
<li><strong>Nhược điểm:</strong> Không dự đoán được, có thể giãn rộng bất ngờ</li>
</ul>

<h3>3.3. Spread bằng 0 (Zero Spread)</h3>
<p>Một số sàn cung cấp tài khoản spread = 0 pips nhưng thu phí hoa hồng (commission) cố định cho mỗi lot. Ví dụ: Exness Zero Account, IC Markets Raw Spread.</p>

<h2>4. Yếu tố ảnh hưởng đến mức spread</h2>
<ul>
<li><strong>Cặp tiền tệ:</strong> Cặp chính (EUR/USD, GBP/USD) có spread thấp nhất (0.1-2 pips). Cặp ngoại (USD/ZAR, EUR/TRY) có spread rất cao (10-100 pips).</li>
<li><strong>Phiên giao dịch:</strong> Phiên London và phiên overlap London-New York có spread thấp nhất do thanh khoản cao. Phiên Á thường có spread cao hơn.</li>
<li><strong>Tin tức kinh tế:</strong> Khi có tin quan trọng (Non-Farm Payroll, quyết định lãi suất), spread có thể giãn rộng gấp 5-20 lần bình thường.</li>
<li><strong>Thanh khoản thị trường:</strong> Cuối tuần, ngày lễ, hoặc thời điểm thị trường đóng cửa, spread thường rộng hơn do thanh khoản giảm mạnh.</li>
<li><strong>Loại tài khoản:</strong> Tài khoản Standard thường có spread cao hơn tài khoản ECN/Raw. Tài khoản VIP có spread thấp nhất.</li>
</ul>

<h2>5. Cách tính chi phí spread</h2>
<p>Để biết chi phí spread bằng tiền, bạn cần biết giá trị 1 pip:</p>
<ul>
<li><strong>1 Lot tiêu chuẩn:</strong> 1 pip = 10 USD (đối với cặp tiền có USD ở sau)</li>
<li><strong>1 Mini Lot (0.1 lot):</strong> 1 pip = 1 USD</li>
<li><strong>1 Micro Lot (0.01 lot):</strong> 1 pip = 0.10 USD</li>
</ul>
<p>Ví dụ: Giao dịch 1 lot EUR/USD với spread 1.5 pips → Chi phí = 1.5 × 10 USD = <strong>15 USD mỗi lệnh</strong>.</p>

<h2>6. So sánh spread của các sàn phổ biến</h2>
<p>Dưới đây là spread trung bình trên cặp EUR/USD tại một số sàn uy tín:</p>
<ul>
<li><strong>IC Markets (Raw Spread):</strong> 0.0 - 0.1 pips + $3.5 commission/lot</li>
<li><strong>Exness (Zero):</strong> 0.0 pips + $3.5 commission/lot</li>
<li><strong>XM (Standard):</strong> 1.6 - 1.8 pips, không hoa hồng</li>
<li><strong>Vantage (Raw ECN):</strong> 0.0 - 0.2 pips + $3 commission/lot</li>
</ul>

<h2>7. Mẹo giảm chi phí spread</h2>
<ul>
<li><strong>Chọn tài khoản ECN/Raw:</strong> Dù có commission, tổng chi phí thường thấp hơn tài khoản Standard.</li>
<li><strong>Giao dịch trong giờ thanh khoản cao:</strong> Phiên London (14:00-23:00 VN) có spread thấp nhất.</li>
<li><strong>Tránh giao dịch khi có tin lớn:</strong> Spread giãn rộng cực mạnh trong 15-30 phút quanh tin quan trọng.</li>
<li><strong>Chọn cặp tiền có spread thấp:</strong> EUR/USD, USD/JPY, GBP/USD là những cặp có spread tốt nhất.</li>
<li><strong>Sử dụng chương trình cashback:</strong> Một số sàn hoặc IB hoàn lại một phần spread cho trader.</li>
</ul>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Spread bao nhiêu là tốt?</h3>
<p>Đối với cặp EUR/USD, spread dưới 1 pip được coi là tốt. Nếu bạn dùng tài khoản ECN với spread 0.0-0.3 pips cộng commission khoảng 3-3.5 USD/lot thì đó là mức rất cạnh tranh trên thị trường.</p>

<h3>Spread cố định hay thả nổi tốt hơn?</h3>
<p>Phụ thuộc vào phong cách giao dịch. Nếu bạn là swing trader, spread cố định giúp dễ tính toán. Nếu bạn scalp hoặc day trade, spread thả nổi (tài khoản ECN) thường tiết kiệm hơn.</p>

<h3>Tại sao spread giãn rộng đột ngột?</h3>
<p>Do thanh khoản giảm hoặc biến động tăng mạnh. Thường xảy ra khi có tin kinh tế quan trọng, đầu tuần (mở cửa phiên Sydney), hoặc cuối năm khi các tổ chức tài chính nghỉ lễ.</p>
`
    },
    {
        // Ngày mai 09:00 VN = 02:00 UTC
        scheduled_at: '2026-02-13T02:00:00+00:00',
        slug: 'pip-trong-forex-la-gi',
        title: 'Pip Trong Forex Là Gì? Cách Tính Pip Và Giá Trị Pip Chính Xác',
        meta_title: 'Pip Forex Là Gì? Hướng Dẫn Tính Pip Chi Tiết 2026',
        excerpt: 'Giải thích pip trong Forex là gì, cách tính số pip, giá trị pip theo lot size, và ứng dụng pip trong quản lý rủi ro giao dịch.',
        category: 'kien-thuc',
        content: `
<h2>1. Pip trong Forex là gì?</h2>
<p><strong>Pip</strong> (viết tắt của "Percentage In Point" hoặc "Price Interest Point") là đơn vị đo lường nhỏ nhất của sự thay đổi giá trong Forex. Nói dễ hiểu, pip là đơn vị để đo xem giá đã di chuyển bao xa.</p>
<p>Đối với hầu hết các cặp tiền tệ, <strong>1 pip = 0.0001</strong> (chữ số thập phân thứ 4). Ví dụ:</p>
<ul>
<li>EUR/USD tăng từ 1.08<strong>50</strong> lên 1.08<strong>51</strong> → Tăng <strong>1 pip</strong></li>
<li>GBP/USD giảm từ 1.26<strong>30</strong> xuống 1.26<strong>10</strong> → Giảm <strong>20 pips</strong></li>
</ul>
<p><strong>Ngoại lệ:</strong> Các cặp có JPY (USD/JPY, EUR/JPY...) thì 1 pip = 0.01 (chữ số thập phân thứ 2). Ví dụ: USD/JPY từ 150.<strong>50</strong> lên 150.<strong>60</strong> = tăng 10 pips.</p>

<h2>2. Pipette là gì?</h2>
<p>Nhiều sàn hiện đại hiển thị giá với thêm một chữ số (5 hoặc 3 chữ số thập phân). Chữ số cuối cùng này gọi là <strong>pipette</strong> — bằng 1/10 pip.</p>
<p>Ví dụ: EUR/USD = 1.0850<strong>3</strong> — số 3 cuối cùng là pipette. 10 pipettes = 1 pip.</p>

<h2>3. Cách tính giá trị 1 pip</h2>
<p>Giá trị tiền của 1 pip phụ thuộc vào kích cỡ lot (khối lượng giao dịch):</p>
<ul>
<li><strong>1 Standard Lot (100.000 đơn vị):</strong> 1 pip = 10 USD</li>
<li><strong>1 Mini Lot (10.000 đơn vị):</strong> 1 pip = 1 USD</li>
<li><strong>1 Micro Lot (1.000 đơn vị):</strong> 1 pip = 0.10 USD</li>
<li><strong>1 Nano Lot (100 đơn vị):</strong> 1 pip = 0.01 USD</li>
</ul>
<p>Lưu ý: Giá trị trên áp dụng cho các cặp tiền có USD ở vị trí đồng tiền định giá (EUR/USD, GBP/USD). Đối với các cặp khác, giá trị pip sẽ thay đổi tùy tỷ giá.</p>

<h2>4. Công thức tính giá trị pip</h2>
<p>Để tính chính xác giá trị pip cho bất kỳ cặp tiền nào:</p>
<p><strong>Giá trị pip = (Kích cỡ pip ÷ Tỷ giá hiện tại) × Lot size</strong></p>
<p>Ví dụ: Giao dịch 1 lot USD/JPY khi tỷ giá = 150.00:</p>
<ul>
<li>Kích cỡ pip = 0.01 (vì cặp JPY)</li>
<li>Giá trị pip = (0.01 ÷ 150.00) × 100.000 = <strong>6.67 USD</strong></li>
</ul>

<h2>5. Ứng dụng pip trong giao dịch thực tế</h2>
<h3>5.1. Tính lợi nhuận và thua lỗ</h3>
<p>Khi bạn biết giá trị pip, việc tính P/L trở nên rất đơn giản:</p>
<p><strong>Lợi nhuận = Số pip × Giá trị 1 pip × Số lot</strong></p>
<p>Ví dụ: Mua 0.5 lot EUR/USD, giá tăng 30 pips → Lợi nhuận = 30 × 10 × 0.5 = <strong>150 USD</strong></p>

<h3>5.2. Đặt Stop Loss chính xác</h3>
<p>Kết hợp với quy tắc quản lý vốn 1-2%, bạn có thể tính SL chính xác:</p>
<ul>
<li>Tài khoản: 5.000 USD</li>
<li>Rủi ro tối đa 1% = 50 USD</li>
<li>Giao dịch 0.1 lot → 1 pip = 1 USD</li>
<li>Stop Loss tối đa = 50 ÷ 1 = <strong>50 pips</strong></li>
</ul>

<h3>5.3. So sánh spread giữa các sàn</h3>
<p>Pip giúp bạn so sánh chi phí giao dịch một cách minh bạch. Sàn A spread 1.5 pips, sàn B spread 0.3 pips + $3 commission → Quy đổi: Sàn B tổng chi phí = 0.3 + 0.3 = 0.6 pips → Rẻ hơn sàn A.</p>

<h2>6. Bảng giá trị pip các cặp tiền phổ biến</h2>
<p>Với 1 standard lot (100.000 đơn vị):</p>
<ul>
<li><strong>EUR/USD:</strong> 1 pip = 10.00 USD</li>
<li><strong>GBP/USD:</strong> 1 pip = 10.00 USD</li>
<li><strong>USD/JPY:</strong> 1 pip ≈ 6.67 USD (phụ thuộc tỷ giá)</li>
<li><strong>AUD/USD:</strong> 1 pip = 10.00 USD</li>
<li><strong>USD/CHF:</strong> 1 pip ≈ 11.36 USD (phụ thuộc tỷ giá)</li>
<li><strong>EUR/GBP:</strong> 1 pip ≈ 12.50 USD (phụ thuộc tỷ giá GBP/USD)</li>
</ul>

<h2>7. Sai lầm thường gặp về pip</h2>
<ul>
<li><strong>Nhầm pip với pipette:</strong> Nhiều sàn hiển thị 5 chữ số thập phân. Đừng nhầm chữ số cuối (pipette) với pip thật.</li>
<li><strong>Quên rằng giá trị pip thay đổi:</strong> Với các cặp tiền cross (không có USD), giá trị pip thay đổi theo tỷ giá hiện tại.</li>
<li><strong>Không tính pip vào kế hoạch giao dịch:</strong> Nếu spread 2 pips và mục tiêu chỉ 5 pips, bạn thực tế chỉ lãi 3 pips — chưa tính slippage.</li>
</ul>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>1 pip bằng bao nhiêu tiền?</h3>
<p>Phụ thuộc vào lot size: 1 standard lot = 10 USD/pip, 0.1 lot = 1 USD/pip, 0.01 lot = 0.10 USD/pip. Giá trị chính xác có thể khác nhau tùy cặp tiền.</p>

<h3>Pip và point khác nhau thế nào?</h3>
<p>Point (điểm) thường là đơn vị nhỏ nhất mà platform hiển thị — tức là pipette. 1 pip = 10 points trong hầu hết các nền tảng MT4/MT5 hiện đại.</p>

<h3>Làm sao đếm pip nhanh?</h3>
<p>Với các cặp tiền không có JPY: Nhìn chữ số thập phân thứ 4. Với cặp JPY: Nhìn chữ số thập phân thứ 2. Hoặc sử dụng công cụ tính pip trực tuyến cho kết quả chính xác nhất.</p>
`
    },
    {
        // Ngày mai 14:00 VN = 07:00 UTC
        scheduled_at: '2026-02-13T07:00:00+00:00',
        slug: 'chon-san-forex-uy-tin-cho-nguoi-moi',
        title: 'Cách Chọn Sàn Forex Uy Tín Cho Người Mới Bắt Đầu 2026',
        meta_title: 'Cách Chọn Sàn Forex Uy Tín 2026 | Tiêu Chí Quan Trọng',
        excerpt: 'Hướng dẫn chi tiết 7 tiêu chí chọn sàn Forex uy tín cho người mới: giấy phép, spread, nạp rút tiền, hỗ trợ tiếng Việt và đánh giá thực tế từ trader.',
        category: 'huong-dan',
        content: `
<h2>1. Tại sao chọn sàn Forex uy tín là bước quan trọng nhất?</h2>
<p>Chọn sàn Forex là quyết định <strong>ảnh hưởng đến toàn bộ hành trình giao dịch</strong> của bạn. Một sàn tốt mang lại trải nghiệm mượt mà, chi phí thấp, và quan trọng nhất — <strong>tiền của bạn được bảo vệ</strong>. Ngược lại, sàn lừa đảo có thể khiến bạn mất trắng.</p>
<p>Theo thống kê, hàng năm có hàng nghìn trader Việt Nam bị mất tiền do giao dịch trên các sàn không được cấp phép. Vì vậy, việc tìm hiểu kỹ trước khi nạp tiền là điều bắt buộc.</p>

<h2>2. Giấy phép quản lý — Tiêu chí số 1</h2>
<p><strong>Giấy phép (License)</strong> là bằng chứng cho thấy sàn được cơ quan tài chính có thẩm quyền giám sát và kiểm tra định kỳ. Các giấy phép uy tín nhất bao gồm:</p>
<ul>
<li><strong>FCA (Anh):</strong> Tiêu chuẩn vàng trong ngành — yêu cầu sàn tách biệt tiền khách hàng, có quỹ bồi thường lên đến £85.000 nếu sàn phá sản.</li>
<li><strong>ASIC (Úc):</strong> Giám sát nghiêm ngặt, yêu cầu vốn tối thiểu cao. Nhiều sàn lớn như IC Markets, Vantage có giấy phép này.</li>
<li><strong>CySEC (Cyprus/EU):</strong> Phổ biến cho sàn hoạt động tại Châu Âu, có quỹ bảo vệ nhà đầu tư €20.000.</li>
<li><strong>FSA (Seychelles), VFSC (Vanuatu):</strong> Giấy phép "offshore" — yêu cầu ít nghiêm ngặt hơn, nhưng vẫn tốt hơn không có giấy phép.</li>
</ul>
<p><strong>Quy tắc:</strong> Ưu tiên sàn có ít nhất 1 giấy phép từ FCA, ASIC, hoặc CySEC. Tuyệt đối tránh sàn không có bất kỳ giấy phép nào.</p>

<h2>3. Kiểm tra spread và phí giao dịch</h2>
<p>Chi phí giao dịch ảnh hưởng trực tiếp đến lợi nhuận dài hạn. Hãy so sánh:</p>
<ul>
<li><strong>Spread trung bình:</strong> Kiểm tra spread trên EUR/USD trong điều kiện bình thường. Dưới 1.5 pips cho tài khoản Standard là chấp nhận được.</li>
<li><strong>Tài khoản ECN/Raw:</strong> Spread thường từ 0.0-0.3 pips nhưng có thêm commission ($3-7 mỗi lot). Tổng chi phí thường thấp hơn tài khoản Standard.</li>
<li><strong>Phí swap (qua đêm):</strong> Nếu bạn giữ lệnh qua đêm, sàn sẽ tính phí swap. Một số sàn có tài khoản Swap-free cho trader Hồi giáo hoặc không muốn chịu swap.</li>
<li><strong>Phí ẩn:</strong> Kiểm tra phí nạp rút, phí không hoạt động (inactivity fee), phí chuyển đổi tiền tệ.</li>
</ul>

<h2>4. Nạp rút tiền — Yếu tố sống còn</h2>
<p>Đây là tiêu chí mà nhiều trader Việt Nam quan tâm nhất. Hãy kiểm tra:</p>
<ul>
<li><strong>Phương thức phổ biến tại VN:</strong> Ngân hàng nội địa (Vietcombank, Techcombank...), ví điện tử (USDT, Neteller, Skrill), thẻ tín dụng.</li>
<li><strong>Thời gian xử lý:</strong> Nạp tiền nên được xử lý trong vài phút. Rút tiền tốt nhất là trong 24h, chậm nhất không quá 3 ngày làm việc.</li>
<li><strong>Phí nạp rút:</strong> Nhiều sàn uy tín miễn phí nạp rút hoàn toàn (Exness, Vantage).</li>
<li><strong>Số tiền nạp tối thiểu:</strong> Sàn tốt cho phép nạp từ 1-10 USD, giúp người mới thử nghiệm với vốn nhỏ.</li>
</ul>

<h2>5. Nền tảng giao dịch</h2>
<p>Nền tảng (platform) là phần mềm bạn dùng để đặt lệnh, phân tích biểu đồ. Các nền tảng phổ biến:</p>
<ul>
<li><strong>MetaTrader 4 (MT4):</strong> Nền tảng kinh điển, dễ dùng, hỗ trợ Expert Advisors (robot giao dịch). Phù hợp cho người mới.</li>
<li><strong>MetaTrader 5 (MT5):</strong> Phiên bản nâng cấp với thêm khung thời gian, lịch kinh tế tích hợp, và hỗ trợ giao dịch chứng khoán.</li>
<li><strong>cTrader:</strong> Giao diện hiện đại, tốc độ xử lý nhanh, phù hợp cho scalper.</li>
<li><strong>Nền tảng web/app riêng:</strong> Một số sàn có app riêng, tiện lợi nhưng ít tính năng hơn MT4/MT5.</li>
</ul>
<p>Nên chọn sàn hỗ trợ <strong>MT4 hoặc MT5</strong> vì tài liệu hướng dẫn rất phong phú và dễ tìm bằng tiếng Việt.</p>

<h2>6. Hỗ trợ khách hàng tiếng Việt</h2>
<p>Đối với trader Việt Nam, đây là tiêu chí quan trọng:</p>
<ul>
<li><strong>Live chat tiếng Việt:</strong> Sàn uy tín như Exness, XM có đội ngũ hỗ trợ tiếng Việt 24/5.</li>
<li><strong>Tốc độ phản hồi:</strong> Nên kiểm tra bằng cách nhắn tin thử trước khi nạp tiền. Sàn tốt phản hồi trong vài phút.</li>
<li><strong>Kênh hỗ trợ:</strong> Email, live chat, Telegram, hotline. Càng nhiều kênh càng tốt.</li>
<li><strong>Tài liệu giáo dục:</strong> Sàn tốt cung cấp video, webinar, bài viết hướng dẫn bằng tiếng Việt.</li>
</ul>

<h2>7. Đánh giá và uy tín cộng đồng</h2>
<p>Trước khi chọn sàn, hãy tham khảo:</p>
<ul>
<li><strong>Google Reviews và Trustpilot:</strong> Đọc đánh giá từ trader thật. Chú ý tỷ lệ đánh giá tiêu cực.</li>
<li><strong>Cộng đồng Forex Việt Nam:</strong> Các nhóm Facebook, diễn đàn có nhiều chia sẻ kinh nghiệm thực tế.</li>
<li><strong>Thời gian hoạt động:</strong> Ưu tiên sàn đã hoạt động trên 10 năm. Sàn mới (dưới 3 năm) có rủi ro cao hơn.</li>
<li><strong>Số lượng khách hàng:</strong> Sàn có hàng triệu trader (Exness, XM) thường đáng tin cậy hơn sàn nhỏ.</li>
</ul>

<h2>8. Checklist nhanh: 7 câu hỏi trước khi mở tài khoản</h2>
<ol>
<li>Sàn có giấy phép FCA/ASIC/CySEC không?</li>
<li>Spread EUR/USD dưới 1.5 pips (Standard) hoặc dưới 0.5 pips (ECN)?</li>
<li>Có hỗ trợ nạp rút qua ngân hàng VN không?</li>
<li>Thời gian rút tiền dưới 24 giờ?</li>
<li>Có nền tảng MT4/MT5?</li>
<li>Có hỗ trợ tiếng Việt?</li>
<li>Đã hoạt động trên 5 năm?</li>
</ol>
<p>Nếu sàn đạt ít nhất 5/7 tiêu chí → <strong>đáng tin cậy</strong> để mở tài khoản.</p>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Sàn Forex nào uy tín nhất cho người Việt?</h3>
<p>Dựa trên giấy phép, thời gian hoạt động và hỗ trợ tại Việt Nam, các sàn được đánh giá cao nhất gồm: Exness (10+ năm, hỗ trợ VN), IC Markets (ASIC), Vantage (ASIC), và XM (CySEC). Mỗi sàn có ưu điểm riêng phù hợp với từng phong cách giao dịch.</p>

<h3>Nạp bao nhiêu tiền để bắt đầu?</h3>
<p>Bạn có thể bắt đầu với chỉ 10-50 USD trên hầu hết các sàn. Tuy nhiên, mức khuyến nghị cho người mới là 100-200 USD để có đủ margin giao dịch micro lot mà không bị Margin Call quá nhanh.</p>

<h3>Làm sao biết sàn lừa đảo?</h3>
<p>Dấu hiệu cảnh báo: Không có giấy phép, hứa lợi nhuận cố định (ví dụ: "lãi 10% mỗi tháng"), không cho rút tiền, yêu cầu nạp thêm tiền liên tục, website sơ sài hoặc mới tạo. Nếu thấy bất kỳ dấu hiệu nào, hãy tránh xa ngay.</p>

<h3>Mở tài khoản demo trước có cần thiết không?</h3>
<p>Rất cần thiết! Tài khoản demo giúp bạn làm quen nền tảng, thử nghiệm chiến lược mà không rủi ro mất tiền thật. Hãy giao dịch demo ít nhất 1-2 tháng trước khi nạp tiền thật.</p>
`
    }
];

async function run() {
    for (const post of posts) {
        // Kiểm tra word count
        const text = post.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const wc = text.split(' ').length;

        console.log(`\n📝 ${post.title}`);
        console.log(`   Slug: ${post.slug}`);
        console.log(`   Lên lịch: ${post.scheduled_at}`);
        console.log(`   Word count: ${wc}`);

        if (wc < 800) {
            console.log(`   ⚠️ Word count thấp (${wc}), bỏ qua!`);
            continue;
        }

        // Kiểm tra slug trùng
        const { data: existing } = await supabase
            .from('posts')
            .select('id')
            .eq('slug', post.slug)
            .single();

        if (existing) {
            console.log(`   ⚠️ Slug đã tồn tại, bỏ qua!`);
            continue;
        }

        const { error } = await supabase.from('posts').insert({
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            meta_title: post.meta_title,
            meta_description: post.excerpt,
            content: post.content,
            category: post.category,
            is_published: false,
            scheduled_at: post.scheduled_at,
            published_at: null,
            featured_image: null,
            featured_image_alt: post.title
        });

        if (error) {
            console.log(`   ❌ Lỗi: ${error.message}`);
        } else {
            console.log(`   ✅ Đã lên lịch thành công!`);
        }
    }

    // Kiểm tra lại
    const { data: all } = await supabase
        .from('posts')
        .select('slug,is_published,scheduled_at')
        .not('scheduled_at', 'is', null)
        .order('scheduled_at', { ascending: true });

    console.log('\n📅 Danh sách bài đã lên lịch:');
    all?.forEach(p => {
        const vn = new Date(p.scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
        console.log(`   ${vn} | ${p.slug}`);
    });
}

run();
