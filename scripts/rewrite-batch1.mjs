import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ecipdcojedkbrlggaqja.supabase.co";
const supabaseAnonKey = "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ===================== BATCH 1: Posts 10, 28, 29, 30, 31 =====================

const batch1 = [
    {
        id: 10,
        content: `<h2>Stop Loss và Take Profit — Tại sao bạn không thể bỏ qua?</h2>
<p>Nếu bạn đang giao dịch Forex mà chưa sử dụng <strong>Stop Loss</strong> và <strong>Take Profit</strong>, thì về cơ bản, bạn đang lái xe mà không có phanh. Nghe có vẻ kịch tính, nhưng đó là sự thật mà rất nhiều trader mới phải trả giá đắt mới nhận ra.</p>
<p>Stop Loss (SL) là lệnh tự động đóng vị thế khi giá đi ngược, giúp bạn giới hạn thua lỗ. Còn Take Profit (TP) thì ngược lại — nó chốt lời cho bạn khi giá chạm mức mong muốn. Hai công cụ này không chỉ bảo vệ tài khoản, mà còn giúp bạn loại bỏ cảm xúc ra khỏi quyết định giao dịch. Bạn có thể thực hành cách đặt SL/TP trên <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a> tại <a href="/exness">Exness</a>.</p>
<img src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Cách đặt Stop Loss Take Profit" />

<h2>Tại sao Stop Loss quan trọng đến vậy?</h2>
<p>Có một thống kê mà bạn nên ghi nhớ: khoảng 90% trader thua lỗ, và nguyên nhân phổ biến nhất chính là không sử dụng Stop Loss. Hãy tưởng tượng bạn thắng 10 lệnh liên tiếp, mỗi lệnh lời 20 pips. Chỉ cần một lệnh thua không có SL chạy đến -200 pips, toàn bộ lợi nhuận tích lũy sẽ bay sạch.</p>
<p>Stop Loss giúp bạn làm ba điều quan trọng: giới hạn thiệt hại mỗi lệnh ở mức bạn chấp nhận được, loại bỏ những phút do dự "liệu có nên cắt không", và bảo vệ tài khoản khỏi các sự kiện bất ngờ như flash crash hay tin tức chấn động. Tìm hiểu thêm về <a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a> để hiểu rõ hơn.</p>

<h2>Ba phương pháp đặt Stop Loss phổ biến</h2>
<p><strong>Đặt SL theo vùng hỗ trợ/kháng cự</strong> là cách phổ biến nhất. Nếu bạn mua (Buy), hãy đặt SL ngay dưới vùng hỗ trợ gần nhất, thêm 5-10 pips làm buffer để tránh bị quét bởi spike. Với lệnh Sell thì ngược lại — SL nằm trên kháng cự. Phương pháp này hiệu quả vì nó dựa trên cách thị trường thực sự vận hành.</p>
<p><strong>Đặt SL theo chỉ báo ATR</strong> (Average True Range) là một cách khách quan hơn. ATR đo biến động trung bình của thị trường, giúp bạn tính SL phù hợp với điều kiện hiện tại. Công thức đơn giản: SL = Giá vào lệnh ± (ATR × 1.5 đến 2.0). Ví dụ, nếu ATR(14) là 80 pips thì SL khoảng 120 pips.</p>
<p><strong>Đặt SL theo phần trăm vốn</strong> giúp bạn kiểm soát rủi ro rõ ràng. Bạn xác định trước số tiền chấp nhận thua — ví dụ 1% vốn. Với tài khoản $1,000, rủi ro tối đa mỗi lệnh là $10. Từ đó tính ngược ra SL bao nhiêu pips tùy lot size. Kết hợp với <a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a> để tối ưu hơn.</p>

<h2>Đặt Take Profit — Chốt lời đúng lúc</h2>
<p>Nhiều trader biết cắt lỗ nhưng lại rất tệ trong việc chốt lời. Hoặc là chốt quá sớm vì sợ mất lợi nhuận, hoặc tham quá nên giá quay đầu mà vẫn chưa chốt. Có ba cách tiếp cận bạn nên biết.</p>
<p>Cách đầu tiên là dùng <strong>tỷ lệ Risk/Reward cố định</strong>. Nếu SL là 30 pips, đặt TP 60 pips (R:R 1:2). Với tỷ lệ này, bạn chỉ cần thắng 34% tổng số lệnh là đã có lợi nhuận — một con số hoàn toàn khả thi.</p>
<p>Cách thứ hai là <strong>chốt lời tại vùng kháng cự</strong> (với lệnh Buy) hoặc hỗ trợ (với lệnh Sell). Đây là cách thực tế nhất vì giá thường phản ứng mạnh tại các vùng này.</p>
<p>Cách thứ ba gọi là <strong>Partial Take Profit</strong> — bạn chốt một nửa lệnh tại TP1, kéo SL về entry (hòa vốn), rồi để phần còn lại chạy đến TP2 hoặc TP3. Đây là cách cân bằng giữa "chắc ăn" và "tận dụng trend".</p>

<h2>Những sai lầm chết người khi đặt SL/TP</h2>
<p>Sai lầm phổ biến nhất là <strong>đặt SL quá chặt</strong>. Khi SL chỉ cách giá entry 5-10 pips, bạn sẽ bị quét liên tục bởi biến động bình thường của thị trường. Giải pháp là thêm buffer dựa trên ATR.</p>
<p>Sai lầm thứ hai — và nguy hiểm nhất — là <strong>không đặt SL</strong>. Chỉ cần một lần duy nhất, thị trường có thể xóa sạch tài khoản của bạn. Sai lầm thứ ba là <strong>di chuyển SL theo hướng bất lợi</strong>: giá đi ngược, bạn kéo SL ra xa hơn với hy vọng giá sẽ quay lại. Đừng bao giờ làm vậy.</p>
<p>Cuối cùng, nhiều người đặt <strong>TP quá tham</strong> — mong giá chạy thêm 200 pips trong khi thực tế chỉ biến động 50 pips/ngày. Hãy thực tế với kỳ vọng của mình.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Nên đặt SL bao nhiêu pips?</h3>
<p>Không có con số cố định — phụ thuộc vào cặp tiền, khung thời gian và điều kiện thị trường. Với EUR/USD trên khung D1, SL khoảng 30-80 pips là hợp lý. Với XAU/USD thì cần rộng hơn, khoảng 100-300 pips. Điều quan trọng là luôn dựa trên cấu trúc giá chứ không phải con số tùy ý.</p>
<h3>Trailing Stop là gì?</h3>
<p>Trailing Stop là SL tự động di chuyển theo hướng có lợi khi giá tăng. Ví dụ, trailing 30 pips nghĩa là SL luôn cách giá hiện tại 30 pips. Khi giá tăng 50 pips, SL đã ở mức +20 pips (bạn đã khóa lãi). Phù hợp cho chiến lược trend following, nhưng dễ bị quét trong thị trường sideway.</p>
<h3>Có nên giao dịch không có SL?</h3>
<p>Câu trả lời là <strong>không, tuyệt đối không</strong>. Mỗi lệnh cần có SL được xác định trước khi vào lệnh. Nếu bạn không biết đặt SL ở đâu, nghĩa là bạn chưa nên vào lệnh đó. Tham khảo <a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a> và <a href="/tin-tuc/tam-ly-trading-yeu-to-thanh-cong">tâm lý trading</a> để xây dựng kỷ luật vững chắc.</p>

<p>Thành thạo cách đặt <strong>Stop Loss và Take Profit</strong> là bước quan trọng nhất trên hành trình trading. Hãy nhớ: luôn đặt SL trước khi vào lệnh, R:R tối thiểu 1:2, và không bao giờ kéo SL theo hướng bất lợi. Thực hành trên <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a> tại <a href="/exness">Exness</a> hoặc <a href="/vantage">Vantage</a>. Tìm hiểu thêm tại <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>
<p>Lưu ý quan trọng: SL cần được điều chỉnh theo cặp tiền bạn giao dịch. XAU/USD biến động gấp 3-5 lần EUR/USD, nên SL cũng cần rộng hơn tương ứng. Sử dụng <a href="/tin-tuc/huong-dan-su-dung-metatrader-4-mt4">MetaTrader 4</a> để kiểm tra ATR và tìm mức SL phù hợp cho hệ thống giao dịch của bạn.</p>`
    },
    {
        id: 28,
        content: `<h2>Forex là gì — và tại sao hàng triệu người Việt đang giao dịch?</h2>
<p><strong>Forex</strong> (Foreign Exchange) là thị trường ngoại hối — nơi các đồng tiền được mua bán, trao đổi với nhau. Nếu bạn đã từng đổi VND sang USD khi đi du lịch, thực chất bạn đã tham gia một giao dịch Forex nhỏ rồi đấy.</p>
<p>Điều làm Forex khác biệt là quy mô khổng lồ: trung bình $7.5 nghìn tỷ USD được giao dịch mỗi ngày (theo BIS 2025), lớn hơn gấp nhiều lần thị trường chứng khoán. Forex hoạt động 24 giờ/ngày, 5 ngày/tuần, và không có sàn giao dịch tập trung — mọi thứ diễn ra qua mạng liên ngân hàng toàn cầu. Để bắt đầu, bạn cần mở tài khoản tại sàn uy tín như <a href="/exness">Exness</a>, <a href="/xm">XM</a> hoặc <a href="/vantage">Vantage</a>.</p>
<img src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Forex là gì hướng dẫn người mới" />

<h2>Forex hoạt động như thế nào?</h2>
<p>Trong Forex, bạn luôn giao dịch theo <strong>cặp tiền tệ</strong>: EUR/USD, GBP/USD, USD/JPY... Đồng tiền đầu tiên (base) là đồng bạn mua, đồng thứ hai (quote) là đồng bạn bán. Ví dụ khi EUR/USD = 1.0900, nghĩa là 1 Euro đổi được 1.09 USD.</p>
<p>Có ba nhóm cặp tiền chính. Nhóm <strong>Major</strong> (EUR/USD, GBP/USD) có thanh khoản cao nhất và spread thấp nhất, từ 0.1-1 pip. Nhóm <strong>Minor</strong> (EUR/GBP, AUD/NZD) không chứa USD, spread cao hơn một chút. Và nhóm <strong>Exotic</strong> (USD/VND, EUR/TRY) có spread rất cao và biến động lớn — không khuyến khích cho người mới.</p>
<p>Một khái niệm quan trọng nữa là <strong>đòn bẩy</strong>. Với đòn bẩy 1:100, bạn chỉ cần $1,000 vốn để kiểm soát vị thế trị giá $100,000. Nghe hấp dẫn, nhưng đòn bẩy khuếch đại cả lợi nhuận lẫn thua lỗ — nó thực sự là con dao hai lưỡi mà bạn cần hiểu rõ. Tìm hiểu thêm về <a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a> để sử dụng đòn bẩy an toàn.</p>

<h2>Forex hấp dẫn nhờ điều gì?</h2>
<p>Thanh khoản siêu cao (7.5 nghìn tỷ/ngày) nghĩa là bạn luôn có đối tác để khớp lệnh, dù giao dịch lớn hay nhỏ. Thị trường mở cửa từ sáng thứ Hai đến tối thứ Sáu, nên bạn có thể giao dịch vào bất kỳ khung giờ nào phù hợp với lịch trình cá nhân.</p>
<p>Chi phí giao dịch cũng rất thấp — spread từ 0.1 pip tại các sàn hàng đầu. Bạn có thể kiếm lợi nhuận khi giá tăng (mua) hoặc giá giảm (bán), và vốn khởi đầu chỉ cần từ $10-$100 tại nhiều sàn. Đây là lý do Forex thu hút cả những người chỉ muốn giao dịch bán thời gian.</p>

<h2>Những rủi ro bạn phải hiểu rõ</h2>
<p>Đòn bẩy cao đồng nghĩa với rủi ro mất vốn nhanh. Một tin tức bất ngờ có thể khiến giá biến động hàng trăm pips trong vài phút. Và kẻ thù lớn nhất của trader không phải là thị trường — mà là cảm xúc. Tham lam khiến bạn không chốt lời, sợ hãi khiến bạn cắt lỗ quá sớm. Đọc thêm về <a href="/tin-tuc/tam-ly-trading-yeu-to-thanh-cong">tâm lý trading</a> để giữ đầu lạnh.</p>
<p>Ngoài ra, bạn cần cẩn thận với các sàn lừa đảo đang rất phổ biến, đặc biệt tại Việt Nam. Chỉ giao dịch tại sàn có giấy phép từ các cơ quan uy tín như FCA (Anh), ASIC (Úc) hoặc CySEC (Síp). Tham khảo <a href="/so-sanh">so sánh sàn Forex</a> để chọn sàn phù hợp.</p>

<h2>Lộ trình 6 bước cho người mới</h2>
<p>Đầu tiên, hãy dành 1-2 tuần để <strong>học kiến thức cơ bản</strong> về cặp tiền, pip, lot, spread. Tiếp theo, <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">mở tài khoản demo miễn phí</a> — chỉ mất khoảng 10 phút — và thực hành trong 1-3 tháng.</p>
<p>Trong quá trình demo, hãy song song học về <a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a> — đây là kỹ năng quan trọng nhất. Khi bạn đã giao dịch demo ổn định, chuyển sang tài khoản thật với số vốn nhỏ ($50-$200). Từ đó, tăng dần khi đã có lợi nhuận ổn định sau 6-12 tháng.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Forex có hợp pháp ở Việt Nam không?</h3>
<p>Giao dịch Forex cá nhân qua sàn quốc tế hiện chưa được quy định rõ ràng bởi pháp luật Việt Nam. Tuy nhiên, hàng triệu trader Việt đang giao dịch tại các sàn quốc tế uy tín. Để an toàn, hãy chọn sàn được cấp phép bởi FCA, ASIC, CySEC hoặc FSA.</p>
<h3>Cần bao nhiêu vốn để bắt đầu?</h3>
<p>Bạn có thể bắt đầu chỉ với $50-$200, nhưng vốn lý tưởng là $500-$1,000 để áp dụng quản lý vốn đúng cách (rủi ro 1-2% mỗi lệnh). Hãy bắt đầu với <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a> miễn phí trước khi dùng tiền thật.</p>
<h3>Mất bao lâu để kiếm tiền từ Forex?</h3>
<p>Trung bình bạn cần 6-12 tháng học tập và thực hành nghiêm túc. 70-80% trader mới thua lỗ trong năm đầu tiên. Chìa khóa thành công là kỷ luật, kiên nhẫn, và liên tục nâng cao kiến thức. Đọc thêm bài <a href="/tin-tuc/tam-ly-trading-yeu-to-thanh-cong">tâm lý trading</a>.</p>

<p><strong>Forex</strong> là cơ hội lớn, nhưng chỉ dành cho những ai chuẩn bị kỹ càng. Bắt đầu bằng <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a>, học <a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a>, và chọn <a href="/so-sanh">sàn uy tín</a>. Xem thêm tại <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>
<p>Trader mới thường mắc 5 sai lầm chính: giao dịch không kế hoạch, rủi ro quá lớn, không đặt Stop Loss, mở quá nhiều lệnh, và đuổi theo giá do FOMO. Để tránh, hãy học <a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a>, kiểm soát <a href="/tin-tuc/tam-ly-trading-yeu-to-thanh-cong">tâm lý trading</a>, và thực hành trên <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a>. Xem thêm tại <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>`
    },
    {
        id: 29,
        content: `<h2>Nến Nhật là gì — và tại sao nó là "ngôn ngữ" của thị trường?</h2>
<p>Nếu biểu đồ giá là "bản đồ" của thị trường, thì <strong>nến Nhật Bản</strong> (Japanese Candlestick) chính là ngôn ngữ giúp bạn đọc bản đồ đó. Được phát triển từ thế kỷ 18 bởi thương nhân gạo Munehisa Homma tại Nhật, đến nay nến Nhật vẫn là công cụ phân tích kỹ thuật được sử dụng nhiều nhất trên toàn thế giới.</p>
<p>Mỗi cây nến mang trong mình bốn thông tin: giá mở cửa, giá đóng cửa, giá cao nhất và giá thấp nhất trong một khoảng thời gian. Khi bạn thành thạo cách đọc nến, bạn sẽ "nghe" được thị trường đang nói gì — ai đang thắng, bên mua hay bên bán. Mở <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a> tại <a href="/exness">Exness</a> để thực hành ngay.</p>
<img src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Biểu đồ nến Nhật Bản" />

<h2>Cấu tạo của cây nến — đơn giản hơn bạn nghĩ</h2>
<p>Mỗi cây nến gồm hai phần: <strong>thân nến</strong> (body) và <strong>bóng nến</strong> (shadow/wick). Thân nến thể hiện khoảng cách giữa giá mở và đóng cửa. Nến xanh (tăng) nghĩa là giá đóng cửa cao hơn giá mở cửa — bên mua đang mạnh hơn. Nến đỏ (giảm) thì ngược lại.</p>
<p>Bóng trên là mức giá cao nhất mà thị trường đạt được trong phiên, còn bóng dưới là mức thấp nhất. Thân nến dài = xu hướng mạnh. Bóng dài = thị trường đang do dự, đấu tranh giữa mua và bán. Nến không có bóng (Marubozu) báo hiệu xu hướng cực mạnh, không ai phản kháng.</p>

<h2>Bốn mô hình nến đơn bạn cần thuộc lòng</h2>
<p><strong>Doji</strong> là cây nến có thân rất nhỏ hoặc gần như không có, với bóng dài hai bên. Nó xuất hiện khi thị trường đang phân vân, chưa biết đi hướng nào. Khi bạn thấy Doji sau một đợt tăng/giảm mạnh, đó có thể là dấu hiệu đảo chiều.</p>
<p><strong>Hammer</strong> (búa) có thân nhỏ ở phía trên và bóng dưới rất dài. Nó thường xuất hiện ở đáy xu hướng giảm, báo hiệu bên mua đang quay lại kiểm soát. Ngược lại, <strong>Shooting Star</strong> (sao băng) có bóng trên dài và thân nhỏ ở dưới — tín hiệu đảo chiều giảm khi xuất hiện ở đỉnh.</p>
<p><strong>Marubozu</strong> là nến không có bóng, cho thấy bên mua (nến xanh) hoặc bên bán (nến đỏ) kiểm soát hoàn toàn phiên giao dịch. Đây là tín hiệu xu hướng sẽ tiếp diễn.</p>

<h2>Mô hình hai và ba nến — khi câu chuyện rõ ràng hơn</h2>
<p>Mô hình <strong>Engulfing</strong> (nhấn chìm) gồm hai nến: nến thứ hai "nuốt" hoàn toàn nến trước đó. Bullish Engulfing (nến xanh nuốt nến đỏ) ở đáy là tín hiệu mua mạnh mẽ. Bearish Engulfing ở đỉnh thì ngược lại.</p>
<p>Mô hình <strong>Morning Star</strong> (sao mai) gồm ba nến: nến giảm lớn, nến nhỏ (do dự), rồi nến tăng lớn. Đây là tín hiệu đảo chiều tăng đáng tin cậy. <strong>Evening Star</strong> là phiên bản ngược lại, báo hiệu đảo chiều giảm.</p>

<h2>Mẹo đọc nến hiệu quả</h2>
<p>Đừng bao giờ giao dịch chỉ dựa trên một cây nến duy nhất. Hãy luôn xem nến trong "bối cảnh" — nó xuất hiện ở đâu trên biểu đồ? Gần vùng <a href="/tin-tuc/ho-tro-khang-cu-trong-forex">hỗ trợ/kháng cự</a> hay giữa trend?</p>
<p>Nến trên khung thời gian lớn (H4, D1) đáng tin hơn khung nhỏ (M5, M15) rất nhiều. Và quan trọng nhất: kết hợp nến Nhật với <strong>volume</strong> và các chỉ báo khác như <a href="/tin-tuc/huong-dan-su-dung-rsi">RSI</a>, <a href="/tin-tuc/huong-dan-su-dung-macd">MACD</a> để xác nhận tín hiệu sẽ chính xác hơn rất nhiều.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Khung thời gian nào tốt nhất để đọc nến?</h3>
<p>H4 và D1 cho tín hiệu đáng tin nhất. Khung thời gian nhỏ hơn (M5, M15) có nhiều nhiễu hơn, dễ cho tín hiệu giả. Nếu bạn mới bắt đầu, hãy tập trung vào nến D1 trước.</p>
<h3>Cần học hết bao nhiêu mô hình nến?</h3>
<p>Bạn không cần học hết hàng trăm mô hình. Chỉ cần thành thạo 5-7 mô hình chính (Doji, Hammer, Engulfing, Morning/Evening Star, Pin Bar) là đủ để giao dịch hiệu quả. Quan trọng là hiểu ý nghĩa đằng sau, chứ không phải nhớ tên.</p>

<p>Nến Nhật không phải là "phép thuật" cho bạn đáp án đúng mọi lúc, nhưng nó giúp bạn hiểu thị trường tốt hơn rất nhiều. Kết hợp nến Nhật với <a href="/tin-tuc/ho-tro-khang-cu-trong-forex">hỗ trợ/kháng cự</a> và <a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a> — đó là bộ ba nền tảng của mọi trader thành công. Xem thêm tại <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>`
    },
];

async function main() {
    for (const post of batch1) {
        const { error } = await supabase
            .from('posts')
            .update({ content: post.content })
            .eq('id', post.id);

        if (error) {
            console.log(`❌ Post #${post.id}: ${error.message}`);
        } else {
            console.log(`✅ Post #${post.id} updated`);
        }
    }
    console.log(`\nBatch 1 done! Updated ${batch1.length} posts.`);
}

main();
