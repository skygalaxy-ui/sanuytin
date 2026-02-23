const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Ảnh stock từ Unsplash (free, no hotlink issues)
const images = {
    leverage: [
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80', // trading screens
        'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80', // financial chart
        'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80', // crypto/forex trading
    ],
    spread: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80', // data analysis
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', // financial dashboard
        'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&q=80', // stock market
    ],
    pip: [
        'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&q=80', // calculator finance
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80', // trading
        'https://images.unsplash.com/photo-1642790551116-18e150f248e5?w=800&q=80', // forex chart
    ],
    broker: [
        'https://images.unsplash.com/photo-1553729459-uj1c1b1a7f9b?w=800&q=80', // laptop trading
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', // dashboard
        'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80', // chart
    ]
};

const posts = [
    {
        scheduled_at: '2026-02-12T11:00:00+00:00',
        slug: 'don-bay-leverage-trong-forex',
        title: 'Đòn Bẩy (Leverage) Trong Forex Là Gì? Cách Sử Dụng An Toàn',
        meta_title: 'Đòn Bẩy Forex Là Gì? Hướng Dẫn Dùng Leverage An Toàn',
        excerpt: 'Tìm hiểu đòn bẩy (leverage) trong Forex là gì, cách hoạt động, mức đòn bẩy phổ biến và chiến lược sử dụng đòn bẩy an toàn cho người mới bắt đầu.',
        category: 'kien-thuc',
        featured_image: images.leverage[0],
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

<figure style="margin: 2em 0; text-align: center;">
<img src="${images.leverage[0]}" alt="Màn hình giao dịch Forex với đòn bẩy" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Giao diện giao dịch Forex — nơi bạn chọn mức đòn bẩy phù hợp</figcaption>
</figure>

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

<figure style="margin: 2em 0; text-align: center;">
<img src="${images.leverage[1]}" alt="Biểu đồ tài chính minh họa rủi ro đòn bẩy" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Biểu đồ minh họa — đòn bẩy khuếch đại cả lãi lẫn lỗ</figcaption>
</figure>

<h2>5. Margin Call và Stop Out là gì?</h2>
<ul>
<li><strong>Margin Call:</strong> Cảnh báo khi mức ký quỹ của bạn giảm xuống dưới mức tối thiểu (thường 50-100% margin). Sàn sẽ thông báo bạn cần nạp thêm tiền hoặc đóng bớt vị thế.</li>
<li><strong>Stop Out:</strong> Khi mức margin giảm xuống quá thấp (thường 20-50%), sàn sẽ <strong>tự động đóng</strong> các vị thế thua lỗ lớn nhất để bảo vệ tài khoản khỏi âm.</li>
</ul>
<p>Mức Margin Call và Stop Out khác nhau tùy sàn. Ví dụ: Exness có Stop Out 0%, IC Markets là 50%.</p>

<h2>6. Chiến lược sử dụng đòn bẩy an toàn</h2>
<h3>6.1. Nguyên tắc vàng: Dùng đòn bẩy thấp hơn mức tối đa</h3>
<p>Chỉ vì sàn cho phép đòn bẩy 1:1000 không có nghĩa bạn phải dùng hết. Hãy bắt đầu với <strong>đòn bẩy hiệu dụng 1:10 đến 1:20</strong> bằng cách mở vị thế nhỏ so với tài khoản.</p>

<h3>6.2. Luôn đặt Stop Loss</h3>
<p>Stop Loss là lưới an toàn bắt buộc khi dùng đòn bẩy. Nó tự động đóng lệnh khi thua lỗ đạt mức bạn chấp nhận được.</p>

<h3>6.3. Quy tắc rủi ro 1-2%</h3>
<p>Không bao giờ rủi ro quá 1-2% tài khoản trên một giao dịch. Với tài khoản 1.000 USD, mỗi lệnh chỉ nên rủi ro tối đa 10-20 USD.</p>

<h3>6.4. Tính toán lot size phù hợp</h3>
<p><strong>Lot size = (Vốn × % rủi ro) ÷ (SL pips × Giá trị 1 pip)</strong></p>

<figure style="margin: 2em 0; text-align: center;">
<img src="${images.leverage[2]}" alt="Trader phân tích biểu đồ Forex" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Phân tích và tính toán lot size phù hợp trước khi vào lệnh</figcaption>
</figure>

<h2>7. Bảng so sánh mức đòn bẩy theo loại trader</h2>
<ul>
<li><strong>Người mới bắt đầu:</strong> 1:10 - 1:50 → Rủi ro thấp, học hỏi từ từ</li>
<li><strong>Trader trung cấp:</strong> 1:50 - 1:200 → Cân bằng lợi nhuận và rủi ro</li>
<li><strong>Trader chuyên nghiệp:</strong> 1:200 - 1:500 → Tận dụng cơ hội ngắn hạn</li>
<li><strong>Scalper chuyên nghiệp:</strong> 1:500+ → Giao dịch cực ngắn hạn, kỷ luật cao</li>
</ul>

<h2>8. Sai lầm phổ biến khi sử dụng đòn bẩy</h2>
<ul>
<li><strong>Dùng đòn bẩy tối đa ngay từ đầu:</strong> Nguyên nhân số 1 khiến trader mới cháy tài khoản trong tuần đầu tiên.</li>
<li><strong>Không đặt Stop Loss:</strong> Một biến động nhỏ cũng có thể xóa sổ tài khoản.</li>
<li><strong>Mở quá nhiều vị thế:</strong> Mỗi vị thế đều chiếm margin, tăng rủi ro tổng thể.</li>
<li><strong>Không hiểu Margin Level:</strong> Dẫn đến bất ngờ khi bị Margin Call.</li>
</ul>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Đòn bẩy 1:100 nghĩa là gì?</h3>
<p>Nghĩa là bạn có thể kiểm soát vị thế lớn gấp 100 lần số vốn thực. Với 100 USD, bạn giao dịch được 10.000 USD. Cả lợi nhuận và thua lỗ đều được khuếch đại 100 lần.</p>

<h3>Người mới nên dùng đòn bẩy bao nhiêu?</h3>
<p>Nên bắt đầu với đòn bẩy hiệu dụng 1:10 đến 1:20. Mở vị thế nhỏ so với tài khoản, kết hợp Stop Loss chặt chẽ và chỉ rủi ro 1% mỗi lệnh.</p>

<h3>Đòn bẩy cao có tốt không?</h3>
<p>Đòn bẩy cao không xấu — chỉ có cách sử dụng mới quyết định. Nó cho phép linh hoạt hơn nhưng đòi hỏi kỷ luật cực kỳ nghiêm ngặt.</p>

<h3>Sàn nào cho đòn bẩy cao nhất?</h3>
<p>Exness cung cấp đòn bẩy Unlimited cho một số tài khoản. Vantage và XM cung cấp tới 1:500. Hãy chọn mức phù hợp với trình độ của bạn.</p>
`
    },
    {
        scheduled_at: '2026-02-12T13:30:00+00:00',
        slug: 'spread-trong-forex-la-gi',
        title: 'Spread Trong Forex Là Gì? Cách Tính Và Giảm Chi Phí Giao Dịch',
        meta_title: 'Spread Forex Là Gì? Giải Thích Dễ Hiểu Cho Người Mới',
        excerpt: 'Tìm hiểu spread trong Forex là gì, các loại spread phổ biến, cách tính chi phí spread và mẹo tiết kiệm spread khi giao dịch.',
        category: 'kien-thuc',
        featured_image: images.spread[0],
        content: `
<h2>1. Spread trong Forex là gì?</h2>
<p><strong>Spread</strong> là khoảng chênh lệch giữa giá Mua (Ask) và giá Bán (Bid) của một cặp tiền tệ. Đây chính là <strong>chi phí giao dịch</strong> mà sàn môi giới thu từ trader mỗi khi mở lệnh.</p>
<p>Ví dụ: Cặp EUR/USD có giá Bid = 1.0850 và giá Ask = 1.0852. Spread = 1.0852 - 1.0850 = <strong>0.0002</strong>, tương đương <strong>2 pips</strong>.</p>
<p>Hiểu đơn giản: Khi bạn mở lệnh mua, bạn mua ở giá Ask (cao hơn). Khi bạn đóng lệnh (bán lại), bạn bán ở giá Bid (thấp hơn). Khoảng chênh lệch đó chính là lợi nhuận của sàn.</p>

<h2>2. Tại sao spread quan trọng với trader?</h2>
<p>Spread ảnh hưởng trực tiếp đến lợi nhuận của bạn vì:</p>
<ul>
<li><strong>Mỗi lệnh đều bắt đầu ở trạng thái thua lỗ:</strong> Ngay khi mở lệnh, bạn đã thua lỗ bằng đúng giá trị spread.</li>
<li><strong>Scalper bị ảnh hưởng nhiều nhất:</strong> Mục tiêu 5-10 pips, spread 2-3 pips đã chiếm 20-60% lợi nhuận.</li>
<li><strong>Tích lũy theo thời gian:</strong> 10 lệnh × 2 pips spread = 20 pips chi phí mỗi ngày. Một tháng = 400 pips!</li>
</ul>

<figure style="margin: 2em 0; text-align: center;">
<img src="${images.spread[0]}" alt="Phân tích dữ liệu spread Forex" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Phân tích spread — yếu tố ảnh hưởng trực tiếp đến chi phí giao dịch</figcaption>
</figure>

<h2>3. Các loại spread trong Forex</h2>
<h3>3.1. Spread cố định (Fixed Spread)</h3>
<p>Spread không thay đổi bất kể điều kiện thị trường. Ví dụ: EUR/USD luôn có spread 2 pips.</p>
<ul>
<li><strong>Ưu điểm:</strong> Dễ dự đoán chi phí, phù hợp cho người mới</li>
<li><strong>Nhược điểm:</strong> Thường cao hơn spread thả nổi trong điều kiện bình thường</li>
</ul>

<h3>3.2. Spread thả nổi (Variable Spread)</h3>
<p>Spread thay đổi theo cung cầu thị trường. Bình thường rất thấp (0.1-0.5 pips), nhưng có tin lớn có thể giãn ra 10-50 pips.</p>
<ul>
<li><strong>Ưu điểm:</strong> Trung bình thấp hơn, phù hợp cho scalper</li>
<li><strong>Nhược điểm:</strong> Giãn rộng bất ngờ khi biến động</li>
</ul>

<h3>3.3. Spread bằng 0 (Zero Spread)</h3>
<p>Spread = 0 pips nhưng thu phí hoa hồng (commission) cố định. Ví dụ: Exness Zero, IC Markets Raw Spread.</p>

<h2>4. Yếu tố ảnh hưởng đến mức spread</h2>

<figure style="margin: 2em 0; text-align: center;">
<img src="${images.spread[1]}" alt="Dashboard tài chính hiển thị spread realtime" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Theo dõi spread realtime trên dashboard giao dịch</figcaption>
</figure>

<ul>
<li><strong>Cặp tiền tệ:</strong> Cặp chính (EUR/USD) spread thấp nhất (0.1-2 pips). Cặp ngoại (USD/ZAR) spread rất cao (10-100 pips).</li>
<li><strong>Phiên giao dịch:</strong> Phiên London và overlap London-New York có spread thấp nhất.</li>
<li><strong>Tin tức kinh tế:</strong> Khi có Non-Farm Payroll, quyết định lãi suất, spread có thể giãn 5-20 lần.</li>
<li><strong>Thanh khoản:</strong> Cuối tuần, ngày lễ spread rộng hơn do thanh khoản giảm mạnh.</li>
<li><strong>Loại tài khoản:</strong> Standard spread cao hơn ECN/Raw. VIP spread thấp nhất.</li>
</ul>

<h2>5. Cách tính chi phí spread</h2>
<p>Giá trị 1 pip theo lot size:</p>
<ul>
<li><strong>1 Lot tiêu chuẩn:</strong> 1 pip = 10 USD</li>
<li><strong>1 Mini Lot (0.1):</strong> 1 pip = 1 USD</li>
<li><strong>1 Micro Lot (0.01):</strong> 1 pip = 0.10 USD</li>
</ul>
<p>Ví dụ: 1 lot EUR/USD, spread 1.5 pips → Chi phí = 1.5 × 10 = <strong>15 USD mỗi lệnh</strong>.</p>

<h2>6. So sánh spread các sàn phổ biến</h2>
<p>Spread trung bình EUR/USD tại các sàn uy tín:</p>
<ul>
<li><strong>IC Markets (Raw Spread):</strong> 0.0 - 0.1 pips + $3.5 commission/lot</li>
<li><strong>Exness (Zero):</strong> 0.0 pips + $3.5 commission/lot</li>
<li><strong>XM (Standard):</strong> 1.6 - 1.8 pips, không hoa hồng</li>
<li><strong>Vantage (Raw ECN):</strong> 0.0 - 0.2 pips + $3 commission/lot</li>
</ul>

<h2>7. Mẹo giảm chi phí spread</h2>

<figure style="margin: 2em 0; text-align: center;">
<img src="${images.spread[2]}" alt="Thị trường tài chính và chiến lược giảm spread" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Chiến lược giảm chi phí spread hiệu quả cho trader</figcaption>
</figure>

<ul>
<li><strong>Chọn tài khoản ECN/Raw:</strong> Tổng chi phí thường thấp hơn tài khoản Standard.</li>
<li><strong>Giao dịch giờ thanh khoản cao:</strong> Phiên London (14:00-23:00 VN) spread thấp nhất.</li>
<li><strong>Tránh giao dịch khi có tin lớn:</strong> Spread giãn cực mạnh trong 15-30 phút quanh tin.</li>
<li><strong>Chọn cặp tiền spread thấp:</strong> EUR/USD, USD/JPY, GBP/USD tốt nhất.</li>
<li><strong>Sử dụng chương trình cashback:</strong> Một số sàn hoàn lại một phần spread.</li>
</ul>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Spread bao nhiêu là tốt?</h3>
<p>Đối với EUR/USD, dưới 1 pip được coi là tốt. Tài khoản ECN với spread 0.0-0.3 pips cộng commission 3-3.5 USD/lot là mức rất cạnh tranh.</p>

<h3>Spread cố định hay thả nổi tốt hơn?</h3>
<p>Swing trader: spread cố định dễ tính toán. Scalper: spread thả nổi (ECN) tiết kiệm hơn.</p>

<h3>Tại sao spread giãn rộng đột ngột?</h3>
<p>Do thanh khoản giảm hoặc biến động tăng mạnh. Thường xảy ra khi có tin kinh tế quan trọng, đầu tuần, hoặc cuối năm.</p>
`
    },
    {
        scheduled_at: '2026-02-13T02:00:00+00:00',
        slug: 'pip-trong-forex-la-gi',
        title: 'Pip Trong Forex Là Gì? Cách Tính Pip Và Giá Trị Pip Chính Xác',
        meta_title: 'Pip Forex Là Gì? Hướng Dẫn Tính Pip Chi Tiết 2026',
        excerpt: 'Giải thích pip trong Forex là gì, cách tính số pip, giá trị pip theo lot size, và ứng dụng pip trong quản lý rủi ro giao dịch.',
        category: 'kien-thuc',
        featured_image: images.pip[0],
        content: `
<h2>1. Pip trong Forex là gì?</h2>
<p><strong>Pip</strong> (viết tắt của "Percentage In Point") là đơn vị đo lường nhỏ nhất của sự thay đổi giá trong Forex. Nói dễ hiểu, pip là đơn vị để đo xem giá đã di chuyển bao xa.</p>
<p>Đối với hầu hết các cặp tiền tệ, <strong>1 pip = 0.0001</strong> (chữ số thập phân thứ 4). Ví dụ:</p>
<ul>
<li>EUR/USD tăng từ 1.08<strong>50</strong> lên 1.08<strong>51</strong> → Tăng <strong>1 pip</strong></li>
<li>GBP/USD giảm từ 1.26<strong>30</strong> xuống 1.26<strong>10</strong> → Giảm <strong>20 pips</strong></li>
</ul>
<p><strong>Ngoại lệ:</strong> Các cặp có JPY (USD/JPY, EUR/JPY) thì 1 pip = 0.01 (thập phân thứ 2). USD/JPY từ 150.<strong>50</strong> lên 150.<strong>60</strong> = 10 pips.</p>

<figure style="margin: 2em 0; text-align: center;">
<img src="${images.pip[0]}" alt="Tính toán pip trong Forex" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Tính toán pip — kỹ năng cơ bản mọi trader cần biết</figcaption>
</figure>

<h2>2. Pipette là gì?</h2>
<p>Nhiều sàn hiển thị giá với 5 chữ số thập phân. Chữ số cuối cùng gọi là <strong>pipette</strong> — bằng 1/10 pip.</p>
<p>Ví dụ: EUR/USD = 1.0850<strong>3</strong> — số 3 cuối là pipette. 10 pipettes = 1 pip.</p>

<h2>3. Cách tính giá trị 1 pip</h2>
<p>Giá trị tiền 1 pip phụ thuộc vào kích cỡ lot:</p>
<ul>
<li><strong>1 Standard Lot (100.000):</strong> 1 pip = 10 USD</li>
<li><strong>1 Mini Lot (10.000):</strong> 1 pip = 1 USD</li>
<li><strong>1 Micro Lot (1.000):</strong> 1 pip = 0.10 USD</li>
<li><strong>1 Nano Lot (100):</strong> 1 pip = 0.01 USD</li>
</ul>

<h2>4. Công thức tính giá trị pip</h2>
<p><strong>Giá trị pip = (Kích cỡ pip ÷ Tỷ giá hiện tại) × Lot size</strong></p>
<p>Ví dụ: 1 lot USD/JPY khi tỷ giá = 150.00:</p>
<ul>
<li>Kích cỡ pip = 0.01 (cặp JPY)</li>
<li>Giá trị pip = (0.01 ÷ 150.00) × 100.000 = <strong>6.67 USD</strong></li>
</ul>

<figure style="margin: 2em 0; text-align: center;">
<img src="${images.pip[1]}" alt="Biểu đồ Forex hiển thị pip movements" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Biểu đồ giá — mỗi biến động nhỏ đều được đo bằng pip</figcaption>
</figure>

<h2>5. Ứng dụng pip trong giao dịch thực tế</h2>
<h3>5.1. Tính lợi nhuận và thua lỗ</h3>
<p><strong>Lợi nhuận = Số pip × Giá trị 1 pip × Số lot</strong></p>
<p>Ví dụ: Mua 0.5 lot EUR/USD, giá tăng 30 pips → Lợi nhuận = 30 × 10 × 0.5 = <strong>150 USD</strong></p>

<h3>5.2. Đặt Stop Loss chính xác</h3>
<p>Kết hợp quy tắc quản lý vốn 1-2%:</p>
<ul>
<li>Tài khoản: 5.000 USD, rủi ro 1% = 50 USD</li>
<li>Giao dịch 0.1 lot → 1 pip = 1 USD</li>
<li>Stop Loss tối đa = 50 ÷ 1 = <strong>50 pips</strong></li>
</ul>

<h3>5.3. So sánh spread giữa các sàn</h3>
<p>Pip giúp so sánh minh bạch. Sàn A spread 1.5 pips, sàn B spread 0.3 pips + $3 commission → Sàn B tổng = 0.6 pips → Rẻ hơn.</p>

<h2>6. Bảng giá trị pip các cặp tiền phổ biến</h2>
<p>Với 1 standard lot:</p>
<ul>
<li><strong>EUR/USD:</strong> 1 pip = 10.00 USD</li>
<li><strong>GBP/USD:</strong> 1 pip = 10.00 USD</li>
<li><strong>USD/JPY:</strong> 1 pip ≈ 6.67 USD</li>
<li><strong>AUD/USD:</strong> 1 pip = 10.00 USD</li>
<li><strong>USD/CHF:</strong> 1 pip ≈ 11.36 USD</li>
</ul>

<figure style="margin: 2em 0; text-align: center;">
<img src="${images.pip[2]}" alt="Forex chart và giá trị pip" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Nắm vững giá trị pip giúp quản lý rủi ro hiệu quả</figcaption>
</figure>

<h2>7. Sai lầm thường gặp về pip</h2>
<ul>
<li><strong>Nhầm pip với pipette:</strong> Nhiều sàn hiển thị 5 chữ số thập phân. Đừng nhầm chữ số cuối với pip thật.</li>
<li><strong>Quên rằng giá trị pip thay đổi:</strong> Cặp cross không có USD, giá trị pip thay đổi theo tỷ giá.</li>
<li><strong>Không tính pip vào kế hoạch:</strong> Spread 2 pips + mục tiêu 5 pips → thực tế chỉ lãi 3 pips.</li>
</ul>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>1 pip bằng bao nhiêu tiền?</h3>
<p>Phụ thuộc lot size: 1 standard lot = 10 USD/pip, 0.1 lot = 1 USD/pip, 0.01 lot = 0.10 USD/pip.</p>

<h3>Pip và point khác nhau thế nào?</h3>
<p>Point thường là đơn vị nhỏ nhất platform hiển thị — tức pipette. 1 pip = 10 points trong MT4/MT5.</p>

<h3>Làm sao đếm pip nhanh?</h3>
<p>Không có JPY: nhìn thập phân thứ 4. Cặp JPY: nhìn thập phân thứ 2. Hoặc dùng công cụ tính pip online.</p>
`
    },
    {
        scheduled_at: '2026-02-13T07:00:00+00:00',
        slug: 'chon-san-forex-uy-tin-cho-nguoi-moi',
        title: 'Cách Chọn Sàn Forex Uy Tín Cho Người Mới Bắt Đầu 2026',
        meta_title: 'Cách Chọn Sàn Forex Uy Tín 2026 | Tiêu Chí Quan Trọng',
        excerpt: 'Hướng dẫn chi tiết 7 tiêu chí chọn sàn Forex uy tín cho người mới: giấy phép, spread, nạp rút tiền, hỗ trợ tiếng Việt và đánh giá thực tế từ trader.',
        category: 'huong-dan',
        featured_image: images.broker[1],
        content: `
<h2>1. Tại sao chọn sàn Forex uy tín là bước quan trọng nhất?</h2>
<p>Chọn sàn Forex là quyết định <strong>ảnh hưởng đến toàn bộ hành trình giao dịch</strong> của bạn. Một sàn tốt mang lại trải nghiệm mượt mà, chi phí thấp, và quan trọng nhất — <strong>tiền của bạn được bảo vệ</strong>.</p>
<p>Theo thống kê, hàng năm có hàng nghìn trader Việt Nam mất tiền do giao dịch trên sàn không được cấp phép. Tìm hiểu kỹ trước khi nạp tiền là điều bắt buộc.</p>

<figure style="margin: 2em 0; text-align: center;">
<img src="${images.broker[1]}" alt="Dashboard giao dịch Forex" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Chọn sàn uy tín — bước đầu tiên trong hành trình trading</figcaption>
</figure>

<h2>2. Giấy phép quản lý — Tiêu chí số 1</h2>
<p><strong>Giấy phép (License)</strong> là bằng chứng sàn được cơ quan tài chính giám sát:</p>
<ul>
<li><strong>FCA (Anh):</strong> Tiêu chuẩn vàng — quỹ bồi thường lên đến £85.000 nếu sàn phá sản.</li>
<li><strong>ASIC (Úc):</strong> Giám sát nghiêm ngặt. IC Markets, Vantage có giấy phép này.</li>
<li><strong>CySEC (Cyprus/EU):</strong> Phổ biến Châu Âu, quỹ bảo vệ €20.000.</li>
<li><strong>FSA (Seychelles), VFSC (Vanuatu):</strong> Giấy phép offshore — ít nghiêm ngặt hơn nhưng vẫn tốt hơn không có.</li>
</ul>
<p><strong>Quy tắc:</strong> Ưu tiên sàn có ít nhất 1 giấy phép từ FCA, ASIC, hoặc CySEC. Tuyệt đối tránh sàn không có giấy phép.</p>

<h2>3. Kiểm tra spread và phí giao dịch</h2>
<ul>
<li><strong>Spread trung bình:</strong> EUR/USD dưới 1.5 pips cho Standard là chấp nhận được.</li>
<li><strong>Tài khoản ECN/Raw:</strong> Spread 0.0-0.3 pips + commission. Tổng chi phí thường thấp hơn Standard.</li>
<li><strong>Phí swap:</strong> Phí giữ lệnh qua đêm. Có sàn cung cấp tài khoản Swap-free.</li>
<li><strong>Phí ẩn:</strong> Kiểm tra phí nạp rút, phí không hoạt động, phí chuyển đổi tiền tệ.</li>
</ul>

<h2>4. Nạp rút tiền — Yếu tố sống còn</h2>

<figure style="margin: 2em 0; text-align: center;">
<img src="${images.broker[2]}" alt="Biểu đồ phân tích sàn Forex" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">So sánh các sàn về phí nạp rút và tốc độ xử lý</figcaption>
</figure>

<ul>
<li><strong>Phương thức tại VN:</strong> Ngân hàng nội địa (Vietcombank, Techcombank), ví điện tử (USDT, Neteller).</li>
<li><strong>Thời gian xử lý:</strong> Nạp: vài phút. Rút: tốt nhất trong 24h, chậm nhất 3 ngày.</li>
<li><strong>Phí nạp rút:</strong> Nhiều sàn uy tín miễn phí hoàn toàn (Exness, Vantage).</li>
<li><strong>Nạp tối thiểu:</strong> Sàn tốt cho phép nạp từ 1-10 USD.</li>
</ul>

<h2>5. Nền tảng giao dịch</h2>
<ul>
<li><strong>MetaTrader 4 (MT4):</strong> Kinh điển, dễ dùng, hỗ trợ Expert Advisors. Phù hợp người mới.</li>
<li><strong>MetaTrader 5 (MT5):</strong> Nâng cấp với thêm khung thời gian, lịch kinh tế tích hợp.</li>
<li><strong>cTrader:</strong> Giao diện hiện đại, tốc độ nhanh, phù hợp scalper.</li>
</ul>
<p>Nên chọn sàn hỗ trợ <strong>MT4/MT5</strong> vì tài liệu hướng dẫn tiếng Việt rất phong phú.</p>

<h2>6. Hỗ trợ khách hàng tiếng Việt</h2>
<ul>
<li><strong>Live chat tiếng Việt:</strong> Exness, XM có đội ngũ hỗ trợ 24/5.</li>
<li><strong>Tốc độ phản hồi:</strong> Nhắn tin thử trước khi nạp. Sàn tốt phản hồi vài phút.</li>
<li><strong>Kênh hỗ trợ:</strong> Email, live chat, Telegram, hotline.</li>
<li><strong>Tài liệu giáo dục:</strong> Video, webinar, bài viết bằng tiếng Việt.</li>
</ul>

<h2>7. Đánh giá và uy tín cộng đồng</h2>
<ul>
<li><strong>Google Reviews và Trustpilot:</strong> Đọc đánh giá từ trader thật.</li>
<li><strong>Cộng đồng Forex VN:</strong> Nhóm Facebook, diễn đàn với kinh nghiệm thực tế.</li>
<li><strong>Thời gian hoạt động:</strong> Ưu tiên sàn trên 10 năm. Sàn dưới 3 năm rủi ro cao.</li>
<li><strong>Số lượng khách:</strong> Sàn triệu trader (Exness, XM) đáng tin hơn sàn nhỏ.</li>
</ul>

<figure style="margin: 2em 0; text-align: center;">
<img src="${images.broker[0]}" alt="Trader đánh giá sàn Forex trên laptop" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Nghiên cứu kỹ trước khi chọn sàn — đọc đánh giá từ cộng đồng trader</figcaption>
</figure>

<h2>8. Checklist: 7 câu hỏi trước khi mở tài khoản</h2>
<ol>
<li>Sàn có giấy phép FCA/ASIC/CySEC không?</li>
<li>Spread EUR/USD dưới 1.5 pips (Standard) hoặc dưới 0.5 pips (ECN)?</li>
<li>Hỗ trợ nạp rút qua ngân hàng VN?</li>
<li>Rút tiền dưới 24 giờ?</li>
<li>Có nền tảng MT4/MT5?</li>
<li>Hỗ trợ tiếng Việt?</li>
<li>Hoạt động trên 5 năm?</li>
</ol>
<p>Đạt ít nhất <strong>5/7</strong> → đáng tin cậy để mở tài khoản.</p>

<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Sàn Forex nào uy tín nhất cho người Việt?</h3>
<p>Dựa trên giấy phép và hỗ trợ tại VN: Exness (10+ năm), IC Markets (ASIC), Vantage (ASIC), XM (CySEC). Mỗi sàn có ưu điểm riêng phù hợp từng phong cách.</p>

<h3>Nạp bao nhiêu tiền để bắt đầu?</h3>
<p>Có thể bắt đầu 10-50 USD. Khuyến nghị 100-200 USD để đủ margin giao dịch micro lot.</p>

<h3>Làm sao biết sàn lừa đảo?</h3>
<p>Dấu hiệu: Không có giấy phép, hứa lợi nhuận cố định ("lãi 10%/tháng"), không cho rút tiền, yêu cầu nạp thêm liên tục, website sơ sài. Tránh xa ngay.</p>

<h3>Mở tài khoản demo trước có cần thiết không?</h3>
<p>Rất cần thiết! Demo giúp làm quen nền tảng, thử chiến lược không rủi ro. Giao dịch demo ít nhất 1-2 tháng trước khi nạp tiền thật.</p>
`
    }
];

async function run() {
    for (const post of posts) {
        const text = post.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const wc = text.split(' ').length;
        const imgCount = (post.content.match(/<img /g) || []).length;

        console.log('\n' + '='.repeat(60));
        console.log('Title: ' + post.title);
        console.log('Slug: ' + post.slug);
        console.log('Schedule: ' + post.scheduled_at);
        console.log('Words: ' + wc + ' | Images: ' + imgCount);

        if (wc < 600) {
            console.log('WARNING: Word count too low, skipping!');
            continue;
        }

        const { data: existing } = await supabase
            .from('posts')
            .select('id')
            .eq('slug', post.slug)
            .single();

        if (existing) {
            console.log('WARNING: Slug already exists, skipping!');
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
            featured_image: post.featured_image,
            featured_image_alt: post.title,
            is_published: false,
            scheduled_at: post.scheduled_at,
            published_at: null
        });

        if (error) {
            console.log('ERROR: ' + error.message);
        } else {
            console.log('OK: Scheduled successfully!');
        }
    }

    // Summary
    const { data: scheduled } = await supabase
        .from('posts')
        .select('slug,scheduled_at')
        .eq('is_published', false)
        .not('scheduled_at', 'is', null)
        .order('scheduled_at', { ascending: true });

    console.log('\n' + '='.repeat(60));
    console.log('SCHEDULED POSTS:');
    if (scheduled) {
        scheduled.forEach(p => {
            const vn = new Date(p.scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
            console.log('  ' + vn + ' | ' + p.slug);
        });
    }
}

run();
