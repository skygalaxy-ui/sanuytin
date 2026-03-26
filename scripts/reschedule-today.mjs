import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Lấy 3 bài scheduled gần nhất
const { data: posts } = await sb
  .from('posts')
  .select('id, title, slug')
  .eq('is_published', false)
  .not('scheduled_at', 'is', null)
  .order('scheduled_at', { ascending: true })
  .limit(3);

if (!posts || posts.length < 3) {
  console.error('Không tìm đủ 3 bài scheduled');
  process.exit(1);
}

const updates = [
  {
    id: posts[0].id,
    scheduled_at: '2026-03-25T15:00:00+07:00',
    content: `<h2>Price Action là gì? Tại sao Trader chuyên nghiệp yêu thích?</h2>
<p>Price Action (hành động giá) là phương pháp phân tích thị trường dựa hoàn toàn trên <strong>chuyển động giá thuần túy</strong>, không phụ thuộc vào bất kỳ chỉ báo kỹ thuật nào. Đây là phương pháp được các trader chuyên nghiệp tại ngân hàng lớn và quỹ đầu tư ưa chuộng nhất vì tính trực quan và hiệu quả cao.</p>
<p>Thay vì nhìn vào các đường RSI, MACD hay Bollinger Bands phức tạp, trader Price Action chỉ cần quan sát <strong>biểu đồ nến Nhật</strong> (candlestick chart) để đưa ra quyết định giao dịch. Phương pháp này giúp bạn "đọc" được tâm lý thị trường một cách trực tiếp nhất.</p>

<h2>3 Mô hình nến quan trọng nhất cho người mới</h2>
<h3>1. Pin Bar – Tín hiệu đảo chiều mạnh nhất</h3>
<p>Pin Bar là mô hình nến có <strong>bóng nến dài gấp 2-3 lần thân nến</strong>. Khi xuất hiện tại vùng hỗ trợ/kháng cự, Pin Bar báo hiệu khả năng đảo chiều rất cao. Ví dụ: Khi giá EURUSD giảm xuống vùng hỗ trợ 1.0800 và hình thành Pin Bar có bóng dưới dài, đây là tín hiệu mua mạnh.</p>
<p>Cách giao dịch: Đặt lệnh Buy ngay sau khi nến Pin Bar đóng cửa, Stop Loss đặt dưới bóng nến, Take Profit gấp 2 lần khoảng cách SL (tỷ lệ R:R = 1:2).</p>

<h3>2. Engulfing – Mô hình nhấn chìm</h3>
<p>Engulfing Pattern xảy ra khi <strong>thân nến sau "nhấn chìm" hoàn toàn thân nến trước</strong>. Bullish Engulfing (nến xanh nhấn chìm nến đỏ) tại vùng hỗ trợ là tín hiệu mua cực mạnh. Bearish Engulfing ngược lại là tín hiệu bán.</p>
<p>Mẹo quan trọng: Engulfing có khối lượng giao dịch lớn sẽ đáng tin cậy hơn nhiều so với Engulfing có volume thấp.</p>

<h3>3. Inside Bar – Mô hình tích lũy trước bứt phá</h3>
<p>Inside Bar là nến có thân và bóng nằm hoàn toàn trong phạm vi nến trước đó. Mô hình này cho thấy thị trường đang <strong>"nghỉ ngơi" trước khi bung</strong> một cú di chuyển mạnh. Trader chuyên nghiệp thường giao dịch breakout khỏi Inside Bar.</p>

<h2>Cách kết hợp Price Action với Support/Resistance</h2>
<p>Price Action đạt hiệu quả cao nhất khi kết hợp với các <strong>vùng hỗ trợ/kháng cự quan trọng</strong>. Quy trình giao dịch chuẩn gồm 3 bước:</p>
<p><strong>Bước 1:</strong> Xác định xu hướng chính trên khung thời gian lớn (H4 hoặc D1). Nếu giá đang tạo các đỉnh cao hơn và đáy cao hơn → Xu hướng tăng.</p>
<p><strong>Bước 2:</strong> Đánh dấu các vùng hỗ trợ/kháng cự quan trọng – là những nơi giá đã phản ứng mạnh trong quá khứ (bounce hoặc breakout).</p>
<p><strong>Bước 3:</strong> Chờ tín hiệu Price Action (Pin Bar, Engulfing, Inside Bar) xuất hiện tại các vùng S/R đã đánh dấu → Vào lệnh theo tín hiệu.</p>

<h2>Quản lý vốn khi giao dịch Price Action</h2>
<p>Dù bạn có hệ thống giao dịch tốt đến đâu, nếu không quản lý vốn đúng cách thì vẫn sẽ thua lỗ. Quy tắc vàng là: <strong>Không bao giờ rủi ro quá 2% tài khoản cho một lệnh giao dịch</strong>.</p>
<p>Ví dụ: Tài khoản $1,000 → Mỗi lệnh chỉ được phép lỗ tối đa $20. Nếu Stop Loss là 20 pips, bạn chỉ nên giao dịch 0.1 lot (mini lot).</p>
<p>Tỷ lệ Risk:Reward tối thiểu nên là 1:2. Nghĩa là nếu bạn rủi ro $20, mục tiêu lợi nhuận phải từ $40 trở lên. Với tỷ lệ này, bạn chỉ cần thắng 40% lệnh vẫn có lãi.</p>

<h2>Sai lầm phổ biến khi học Price Action</h2>
<p><strong>Sai lầm 1:</strong> Giao dịch mọi Pin Bar mà không xét đến bối cảnh (context). Một Pin Bar giữa vùng không rõ ràng không có giá trị bằng Pin Bar tại vùng S/R.</p>
<p><strong>Sai lầm 2:</strong> Sử dụng khung thời gian quá nhỏ (M1, M5). Tín hiệu Price Action trên khung H1, H4, D1 đáng tin cậy hơn nhiều.</p>
<p><strong>Sai lầm 3:</strong> Không kiên nhẫn chờ tín hiệu. Trader mới thường vào lệnh "đoán" thay vì chờ mô hình hoàn chỉnh.</p>

<h2>Kết luận: Price Action có phù hợp với bạn?</h2>
<p>Price Action là phương pháp tuyệt vời cho người mới vì nó đơn giản, trực quan và không phụ thuộc vào chỉ báo. Tuy nhiên, nó đòi hỏi <strong>sự kiên nhẫn và kỷ luật</strong> cao. Nếu bạn sẵn sàng dành 3-6 tháng luyện tập trên tài khoản demo, Price Action sẽ là nền tảng vững chắc cho sự nghiệp trading của bạn.</p>
<p>Bắt đầu bằng cách mở tài khoản demo tại <a href="/review/exness">Exness</a> hoặc <a href="/review/xm">XM</a> và thực hành nhận diện các mô hình nến trên biểu đồ D1 của cặp EURUSD.</p>`
  },
  {
    id: posts[1].id,
    scheduled_at: '2026-03-25T17:00:00+07:00',
    content: `<h2>Sàn Axi là ai? Tổng quan về AxiTrader</h2>
<p>Axi (tên đầy đủ: AxiTrader) là một sàn giao dịch Forex và CFD được thành lập vào năm <strong>2007 tại Sydney, Australia</strong>. Ban đầu mang tên AxiTrader, sàn đã đổi tên thành Axi vào năm 2020 để phản ánh tầm nhìn toàn cầu hóa. Với hơn 17 năm kinh nghiệm, Axi hiện phục vụ hơn <strong>60,000 trader</strong> tại hơn 100 quốc gia.</p>
<p>Điểm nổi bật nhất của Axi là sự kết hợp giữa <strong>giấy phép uy tín hàng đầu</strong> (FCA Anh và ASIC Úc) với mức phí giao dịch cạnh tranh, đặc biệt phù hợp cho trader thích giao dịch trên nền tảng MT4.</p>

<h2>Giấy phép và độ uy tín của Axi</h2>
<h3>FCA (Financial Conduct Authority) – Anh</h3>
<p>Giấy phép FCA là một trong những giấy phép <strong>khó lấy nhất thế giới</strong>. Để được cấp phép, Axi phải tuân thủ các quy định nghiêm ngặt về tách biệt tiền khách hàng, bảo hiểm bồi thường lên đến £85,000 thông qua FSCS (Financial Services Compensation Scheme), và báo cáo tài chính định kỳ.</p>

<h3>ASIC (Australian Securities and Investments Commission) – Úc</h3>
<p>ASIC là cơ quan quản lý tài chính của Australia, nơi Axi được thành lập. Giấy phép ASIC yêu cầu sàn phải duy trì vốn tối thiểu và tuân thủ các tiêu chuẩn bảo vệ nhà đầu tư nghiêm ngặt.</p>
<p><strong>Kết luận về uy tín:</strong> Với cả FCA và ASIC, Axi nằm trong nhóm top sàn uy tín nhất thế giới, ngang hàng với Pepperstone và IC Markets.</p>

<h2>Các loại tài khoản và phí giao dịch</h2>
<h3>Tài khoản Standard</h3>
<p>Dành cho người mới bắt đầu. <strong>Spread từ 1.0 pips, không có hoa hồng</strong>. Đòn bẩy tối đa 500:1. Nạp tối thiểu $0 (không giới hạn). Đây là lựa chọn tốt nếu bạn muốn giao dịch đơn giản mà không cần tính toán phí hoa hồng.</p>

<h3>Tài khoản Pro</h3>
<p>Dành cho trader có kinh nghiệm. <strong>Spread từ 0.0 pips, hoa hồng $7/lot khứ hồi</strong>. Đây là tài khoản ECN thực thụ, phù hợp cho scalper và day trader cần spread thấp nhất có thể.</p>

<h3>Tài khoản Elite (Mới 2026)</h3>
<p>Dành cho trader VIP với khối lượng giao dịch lớn. Spread từ 0.0 pips, <strong>hoa hồng chỉ $3.5/lot</strong>. Yêu cầu nạp tối thiểu $25,000 hoặc đạt volume giao dịch 100 lot/tháng.</p>

<h2>Nền tảng giao dịch</h2>
<p>Axi hỗ trợ <strong>MetaTrader 4 (MT4)</strong> – nền tảng phổ biến nhất thế giới. Sàn cũng cung cấp AxiTrader App cho điện thoại và công cụ <strong>Axi Copy</strong> cho phép copy trade từ các trader giỏi.</p>
<p>Ngoài ra, Axi tích hợp với <strong>PsyQuation</strong> – công cụ phân tích AI giúp trader nhận diện các sai lầm trong chiến lược giao dịch và đưa ra gợi ý cải thiện.</p>
<p><strong>Lưu ý:</strong> Axi chưa hỗ trợ MT5 và cTrader. Nếu bạn cần MT5, hãy xem xét <a href="/review/pepperstone">Pepperstone</a> hoặc <a href="/review/ic-markets">IC Markets</a>.</p>

<h2>Nạp và rút tiền tại Việt Nam</h2>
<p>Axi hỗ trợ nhiều phương thức nạp/rút tiền phổ biến tại Việt Nam:</p>
<p><strong>Nạp tiền:</strong> Visa/MasterCard (tức thì), chuyển khoản ngân hàng (1-3 ngày), Skrill/Neteller (tức thì), và đặc biệt là <strong>crypto (USDT)</strong> – phương thức ngày càng phổ biến.</p>
<p><strong>Rút tiền:</strong> Thời gian xử lý trung bình 1-2 ngày làm việc. Axi cho phép rút miễn phí không giới hạn số lần, đây là điểm cộng lớn so với nhiều sàn khác.</p>

<h2>Ưu và nhược điểm của Axi</h2>
<h3>Ưu điểm</h3>
<p>✅ Giấy phép FCA + ASIC cực kỳ uy tín</p>
<p>✅ Phí giao dịch cạnh tranh (tài khoản Pro)</p>
<p>✅ Rút tiền nhanh, miễn phí không giới hạn</p>
<p>✅ Công cụ Copy Trade và PsyQuation AI</p>
<p>✅ Nạp tối thiểu $0 – thân thiện với người mới</p>

<h3>Nhược điểm</h3>
<p>❌ Chỉ hỗ trợ MT4, chưa có MT5 và cTrader</p>
<p>❌ Chưa có hỗ trợ tiếng Việt chính thức</p>
<p>❌ Sản phẩm giao dịch ít hơn so với Exness hay XM</p>

<h2>Kết luận: Ai nên chọn Axi?</h2>
<p>Axi là lựa chọn tuyệt vời cho trader <strong>ưu tiên uy tín và chi phí thấp</strong>. Nếu bạn là người thích giao dịch trên MT4 với spread raw và muốn một sàn có giấy phép hàng đầu, Axi xứng đáng nằm trong top 3 sàn cần xem xét. Tuy nhiên, nếu bạn cần MT5 hoặc hỗ trợ tiếng Việt, hãy cân nhắc <a href="/review/exness">Exness</a> hoặc <a href="/review/xm">XM</a>.</p>`
  },
  {
    id: posts[2].id,
    scheduled_at: '2026-03-25T19:00:00+07:00',
    content: `<h2>Tại sao bạn cần chỉ báo kỹ thuật trong Forex?</h2>
<p>Chỉ báo kỹ thuật (Technical Indicators) là các công cụ toán học được tính toán dựa trên <strong>giá, khối lượng và thời gian</strong> của thị trường. Chúng giúp trader xác định xu hướng, tìm điểm vào/thoát lệnh và đo lường sức mạnh của thị trường một cách khách quan.</p>
<p>Trong hàng trăm chỉ báo có sẵn trên MT4/MT5, dưới đây là <strong>5 chỉ báo được trader chuyên nghiệp sử dụng nhiều nhất</strong> và cách áp dụng chúng một cách hiệu quả.</p>

<h2>1. RSI (Relative Strength Index) – Chỉ số sức mạnh tương đối</h2>
<h3>RSI hoạt động như thế nào?</h3>
<p>RSI đo lường tốc độ và mức độ thay đổi giá trên thang điểm từ 0 đến 100. Công thức cơ bản: RSI = 100 - (100 / (1 + RS)), trong đó RS = Trung bình tăng / Trung bình giảm trong N phiên.</p>
<p><strong>Ngưỡng quan trọng:</strong> RSI > 70 → Vùng quá mua (overbought), giá có thể giảm. RSI < 30 → Vùng quá bán (oversold), giá có thể tăng.</p>

<h3>Cách giao dịch với RSI</h3>
<p><strong>Chiến lược 1 – Divergence:</strong> Khi giá tạo đỉnh cao hơn nhưng RSI tạo đỉnh thấp hơn → Bearish Divergence → Tín hiệu bán mạnh. Ngược lại là Bullish Divergence → Tín hiệu mua.</p>
<p><strong>Chiến lược 2 – Midline Cross:</strong> RSI cắt lên trên mức 50 → Xu hướng tăng đang mạnh lên. RSI cắt xuống dưới 50 → Xu hướng giảm đang chiếm ưu thế.</p>
<p><strong>Cài đặt khuyến nghị:</strong> Period 14 (mặc định) cho khung D1, Period 7 cho khung H1-H4.</p>

<h2>2. MACD (Moving Average Convergence Divergence)</h2>
<h3>MACD hoạt động như thế nào?</h3>
<p>MACD gồm 3 thành phần: <strong>Đường MACD</strong> (EMA 12 - EMA 26), <strong>Đường Signal</strong> (EMA 9 của MACD), và <strong>Histogram</strong> (MACD - Signal). MACD giúp xác định cả xu hướng lẫn momentum.</p>

<h3>Tín hiệu giao dịch</h3>
<p><strong>Tín hiệu mua:</strong> Đường MACD cắt lên trên đường Signal + Histogram chuyển từ âm sang dương. Đặc biệt mạnh khi xảy ra dưới mức 0.</p>
<p><strong>Tín hiệu bán:</strong> Đường MACD cắt xuống dưới đường Signal + Histogram chuyển từ dương sang âm.</p>
<p><strong>Mẹo nâng cao:</strong> Kết hợp MACD Divergence với các vùng hỗ trợ/kháng cự để tăng xác suất thắng lệnh lên 65-70%.</p>

<h2>3. Bollinger Bands – Dải băng Bollinger</h2>
<h3>Cấu trúc Bollinger Bands</h3>
<p>Bollinger Bands gồm 3 dải: <strong>Dải giữa</strong> (SMA 20), <strong>Dải trên</strong> (SMA 20 + 2 Standard Deviation), <strong>Dải dưới</strong> (SMA 20 - 2 Standard Deviation). Khoảng 95% hành động giá nằm trong 2 dải này.</p>

<h3>Chiến lược giao dịch</h3>
<p><strong>Bollinger Squeeze:</strong> Khi 2 dải co lại sát nhau → Thị trường đang tích lũy → Sắp có bứt phá mạnh. Trader chờ breakout ra khỏi dải trên hoặc dưới để vào lệnh.</p>
<p><strong>Bollinger Bounce:</strong> Giá chạm dải dưới trong xu hướng tăng → Tín hiệu mua. Giá chạm dải trên trong xu hướng giảm → Tín hiệu bán.</p>

<h2>4. Stochastic Oscillator – Chỉ báo dao động ngẫu nhiên</h2>
<h3>Cách đọc Stochastic</h3>
<p>Stochastic so sánh giá đóng cửa hiện tại với biên giá trong N phiên. Gồm 2 đường: <strong>%K</strong> (đường nhanh) và <strong>%D</strong> (đường chậm, SMA 3 của %K). Thang đo từ 0 đến 100.</p>
<p><strong>Vùng quá mua:</strong> > 80. <strong>Vùng quá bán:</strong> < 20.</p>

<h3>Khi nào dùng Stochastic?</h3>
<p>Stochastic hiệu quả nhất trong <strong>thị trường sideway</strong> (đi ngang). Trong thị trường trending mạnh, Stochastic sẽ cho nhiều tín hiệu giả. Vì vậy, luôn xác định thị trường đang trending hay ranging trước khi sử dụng.</p>
<p><strong>Tín hiệu mua:</strong> %K cắt lên trên %D tại vùng < 20. <strong>Tín hiệu bán:</strong> %K cắt xuống dưới %D tại vùng > 80.</p>

<h2>5. Ichimoku Kinko Hyo – Hệ thống phân tích toàn diện Nhật Bản</h2>
<h3>5 thành phần của Ichimoku</h3>
<p><strong>Tenkan-sen</strong> (Conversion Line): Trung bình 9 phiên. <strong>Kijun-sen</strong> (Base Line): Trung bình 26 phiên. <strong>Senkou Span A & B</strong>: Tạo thành "đám mây" Kumo. <strong>Chikou Span</strong>: Đường trễ 26 phiên.</p>

<h3>Cách giao dịch với Ichimoku</h3>
<p><strong>Tín hiệu mua mạnh:</strong> Giá nằm trên đám mây + Tenkan cắt lên Kijun + Chikou nằm trên giá 26 phiên trước. Khi cả 3 điều kiện đều thỏa mãn, xác suất thắng lệnh lên đến 75%.</p>
<p><strong>Đám mây Kumo:</strong> Đám mây dày = hỗ trợ/kháng cự mạnh. Đám mây mỏng = có thể bị xuyên thủng dễ dàng.</p>
<p><strong>Mẹo:</strong> Ichimoku hoạt động tốt nhất trên khung D1 và W1. Trên khung nhỏ (M15, M30), tín hiệu sẽ kém chính xác.</p>

<h2>Kết hợp các chỉ báo như thế nào?</h2>
<p>Sai lầm lớn nhất là sử dụng quá nhiều chỉ báo cùng lúc. Quy tắc vàng: <strong>Tối đa 2-3 chỉ báo</strong>, mỗi chỉ báo phục vụ một mục đích khác nhau:</p>
<p>1. <strong>Xác định xu hướng:</strong> MACD hoặc Ichimoku</p>
<p>2. <strong>Tìm điểm vào lệnh:</strong> RSI hoặc Stochastic</p>
<p>3. <strong>Xác định biên độ:</strong> Bollinger Bands</p>
<p>Ví dụ combo hiệu quả: <strong>MACD + RSI + Bollinger Bands</strong>. MACD xác nhận xu hướng, RSI Divergence tìm điểm vào, Bollinger Bands đặt Stop Loss và Take Profit.</p>

<h2>Kết luận</h2>
<p>Không có chỉ báo nào hoàn hảo 100%. Mỗi chỉ báo có ưu và nhược điểm riêng. Chìa khóa thành công nằm ở việc <strong>hiểu rõ bản chất</strong> của từng chỉ báo, kết hợp chúng hợp lý và luôn tuân thủ quản lý vốn. Hãy bắt đầu thực hành trên tài khoản demo tại <a href="/review/exness">Exness</a> để làm quen trước khi giao dịch thật.</p>`
  }
];

console.log('📅 Đang cập nhật 3 bài: 1 đăng NGAY + 2 hẹn giờ hôm nay...\n');

// Bài 1: ĐĂNG NGAY (is_published = true)
const { error: err1 } = await sb
  .from('posts')
  .update({ is_published: true, scheduled_at: null, content: updates[0].content, updated_at: new Date().toISOString() })
  .eq('id', updates[0].id);
if (err1) console.error('❌ Bài 1:', err1.message);
else {
  const wc = updates[0].content.replace(/<[^>]*>/g, '').split(/\s+/).filter(w => w.length > 0).length;
  console.log(`✅ BÀI 1 ĐÃ ĐĂNG NGAY! │ ${wc} từ │ "Chiến Lược Price Action"`);
}

// Bài 2 & 3: Hẹn giờ
for (let i = 1; i < updates.length; i++) {
  const u = updates[i];
  const { error } = await sb
    .from('posts')
    .update({ scheduled_at: u.scheduled_at, content: u.content, updated_at: new Date().toISOString() })
    .eq('id', u.id);
  const time = new Date(u.scheduled_at).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Ho_Chi_Minh' });
  const wordCount = u.content.replace(/<[^>]*>/g, '').split(/\s+/).filter(w => w.length > 0).length;
  if (error) console.error(`❌ Bài ${i+1}: ${error.message}`);
  else console.log(`✅ BÀI ${i+1} hẹn đăng lúc ${time} │ ${wordCount} từ`);
}

console.log('\n🎉 Hoàn tất! 1 bài đã lên sóng, 2 bài chờ đăng tự động.');
