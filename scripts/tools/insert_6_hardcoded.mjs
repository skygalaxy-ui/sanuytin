import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const UNSPLASH_IMAGES = [
    "1611974789855-9c2a0a7236a3", "1590283625485-1f91d3dc50eb", "1642337775960-9dc4901fdb09",
    "1518186285570-55e4ea88f486", "1605792657660-596af9009e82", "1624996379697-f01d168b1a52",
    "1556155092-490a1ba16284", "1642543411037-37704df36341", "1614028674026-444c100ca26e"
];

function getImage(width = 1200, height = 600) {
    const id = UNSPLASH_IMAGES[Math.floor(Math.random() * UNSPLASH_IMAGES.length)];
    return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;
}

function processContent(text, title) {
    let result = text.replace(/\[IMAGE_1\]/g, `<img src="${getImage()}" alt="${title} hình 1" class="w-full rounded-2xl shadow-xl my-6" />`);
    result = result.replace(/\[IMAGE_2\]/g, `<img src="${getImage()}" alt="${title} hình 2" class="w-full rounded-2xl shadow-xl my-6" />`);
    result = result.replace(/\[IMAGE_3\]/g, `<img src="${getImage()}" alt="${title} hình 3" class="w-full rounded-2xl shadow-xl my-6" />`);
    return result;
}

const ARTICLES = [
{
title: "Bí Kíp Quản Lý Vốn: Tuyệt Chiêu Sinh Lời Gấp 3 Lần Trong Forex",
slug: "bi-kip-quan-ly-von-loi-nhuan-giai-ma-2026",
category: "quan-ly-von",
tags: ["Quản lý vốn", "Tâm lý giao dịch", "Forex Newbie"],
content: `
Quản lý vốn luôn là yếu tố sống còn quyết định sự tồn tại trên thị trường khắc nghiệt này. Dành cho những ai đang luẩn quẩn trong vòng lặp cháy tài khoản, bài viết này sẽ chỉ ra công thức quản trị tiền ưu việt nhất.

## 1. Bản Chất Của Quản Lý Vốn Thay Đổi 2026
Khác với quản trị rủi ro cơ bản, quản lý vốn năm nay đòi hỏi sự linh hoạt tối đa khi thị trường biến động kép (Vàng đạt đỉnh, Lãi suất Fed khó đoán). Nếu bạn chỉ đặt Risk 1%, tài khoản sẽ mất 100 lệnh sai liên tiếp mới cháy. 
[IMAGE_1]
Nhiều trader sai lầm khi tự ý tăng rủi ro lên 5% mỗi lệnh để mau gỡ vốn, dẫn đến thảm họa kép khi chuỗi thua (Drawdown) xuất hiện. Thực tế quản lý vốn nghiêm ngặt không làm bạn giàu chậm đi, mà nó đảm bảo bạn có tiền để chơi những lúc thị trường nhả tiền đẹp nhất.

## 2. Quy Tắc 2% Lợi Nhuận Kép
Sức mạnh tuyệt đối trong quản lý vốn nằm ở lãi suất kép kết hợp nguyên tắc rủi ro thấp. Bạn chỉ nên mạo hiểm 1-2% tổng Equity mỗi lệnh. Chẳng hạn Vốn 1000$ -> Rủi ro tối đa 20$ / lệnh. Điều chỉnh Khối lượng (Lot size) cho phù hợp với mức Stop Loss.
[IMAGE_2]
Hơn thế, duy trì tỷ lệ Thắng/Bại (Risk:Reward) tối thiểu là 1:2. Mất 1, ăn 2. Dù Rate Win của bạn chỉ cần vỏn vẹn 40%, bạn vẫn lời ổn định vào cuối tháng! Điều tưởng chừng như vô lý này lại là chén thánh của mọi chuyên gia.

## 3. Quản Lý Lệnh Lời Chạy Không Giới Hạn
Rủi ro đã cố định (Stoploss), không có lý do gì giới hạn lợi nhuận của mình. Hãy dời Stoploss về điểm hòa vốn (Breakeven) ngay khi lệnh đi được 1 khoảng lợi nhuận, và thả trôi Take Profit bằng cách trailing stop trên các khung cấu trúc giá (Swing Low / High).
[IMAGE_3]

## Những Câu Hỏi Thường Gặp Của Người Mới (FAQ)

### Nên mạo hiểm bao nhiêu % tài khoản lúc mới chơi Forex?
Lời khuyên từ các quỹ lớn như FTMO hay MyForexFunds là mạo hiểm dướí 0.5% - 1% trong giai đoạn làm quen tay lệnh, tối đa không bao giờ được vượt ngưỡng 2% Equity.

### Có nên DCA (Nhồi lệnh gồng lỗ) khi giá đi ngược?
Tuyệt đối KHÔNG gồng lỗ. Gồng lỗ kết hợp trung bình giá xuống (DCA) trong phái sinh đòn bẩy cao là hành động tự sát nhanh nhất. Hãy chấp nhận SL và tìm cơ hội khác.

### Phương pháp quản lý rủi ro kiểu Martingale là gì?
Martingale là nhân đôi khối lượng sau mỗi lần thua, cực kỳ RỦI RO và bị cấm ở nhiều hệ thống Quỹ đánh giá. Nếu trúng dây đen 5-6 tay, tài khoản của bạn sẽ bốc hơi sạch sẽ. Đừng bao giờ dại dột sử dụng chiến lược này.
`
},
{
title: "Cách Đọc Mô Hình Nến Đảo Chiều Xác Suất Thắng 90% Kèm Chart Thực Tế",
slug: "cach-doc-mo-hinh-nen-dao-chieu-chuan-xac-thang-lon",
category: "phan-tich-ky-thuat",
tags: ["Nến Nhật", "Price Action", "Phân tích kỹ thuật"],
content: `
Mô hình nến Nhật là ngôn ngữ giao tiếp trực tiếp nhất của đường giá. Hãy học ngôn ngữ của dòng tiền cá mập thông qua các mô hình nến đảo chiều mạnh mẽ nhất.

## 1. Fakey - Dấu Vết Cá Mập Săn Thanh Khoản
Mô hình Fakey (Hay còn gọi là Inside Bar phá vỡ giả) chính là "cỗ máy quét Stoploss" của dòng tiền lớn (Smart Money). Bạn sẽ thường thấy mô hình này xảy ra ngay tại các vùng Kháng cự Hỗ trợ quan trọng.
[IMAGE_1]
Cấu trúc cơ bản là 1 cụm nến Inside bar (Nến sau nằm trọn trong nến trước), theo sau một cú Breakout phá lên trên hoặc xuống dưới... sau đó rút chân đảo chiều ngược lại cực mạnh đóng nến tạo Pinbar. Hãy Follow theo hướng rút nến đó, tỷ lệ thành công của bạn sẽ cải thiện ngoạn mục!

## 2. Nến Engulfing Đặt Tại Đúng "Key Level"
Engulfing (Nến nhấn chìm) là cấu trúc hai nến, trong đó thân nến thứ hai hoàn toàn bao trùm thân nến thứ nhất. Cây Engulfing tăng tại vùng Hỗ trợ siêu mạnh chính là tín hiệu Phe Bò (Mua) tái chiếm thị trường.
[IMAGE_2]
Tuyệt đối đừng lao vào đánh Engulfing giữa lơ lửng sườn núi. Điểm G của nến này bắt buộc phải kết hợp vùng hợp lưu (Confluence) như Trendline, Hỗ trợ hoặc Fibonacci quan trọng.

## 3. Cách Set Bẫy Tránh Sai Lầm Tâm Lý Khi Gặp Nến Đẹp
Tuyệt đối không Mua/Bán tức thời khi cây nến CHƯA ĐÓNG! Cá mập hoàn toàn có thể đẩy giá vượt cản trong 30 phút đầu nhưng đạp mạnh rút bóng nến trong 5 phút cuối giờ, tạo ra Pinbar quét râu những kẻ FOMO sớm.
[IMAGE_3]

## FAQ - Câu Hỏi Tìm Điểm Đảo Chiều Chuyên Sâu

### Xem mô hình nến ở khung thời gian (Timeframe) nào chuẩn nhất?
Các chuyên gia PTKT khuyên ưu tiên khung Daily (D1) và H4 vì nến ở khung thời gian càng lớn, độ uy tín càng cao và triệt tiêu được rất nhiều yếu tố "nhiễu" của các sàn tung râu.

### Gặp Pinbar ở mọi nơi có nên đặt lệnh luôn không?
KHÔNG. Pinbar đứng cô đơn ở giữa xu hướng thường không có sức mạnh đảo chiều. Chỉ có giá trị khi nó quét thanh khoản tại Key level hoặc vùng Cản (Support/Resistance).

### Râu nến dài có phải luôn báo hiệu đảo chiều không?
Râu nến biểu hiện sự Reject (Từ chối giá) mạnh của một bên. Tuy nhiên, nếu thân nến quá to mà khối lượng (Volume) yếu thì râu nến có thể là lừa gạt (Fake). Do đó, bạn cần kiểm tra hành động giá nến sau đó (Follow-through).
`
},
{
title: "Kiểm Soát Tâm Lý Giao Dịch: Làm Lại Từ Con Số Không Thoát Khỏi FOMO",
slug: "kiem-soat-tam-ly-giao-dich-tranh-fomo",
category: "kinh-nghiem",
tags: ["Tâm lý giao dịch", "FOMO", "Kinh nghiệm trade"],
content: `
Kẻ thù nguy hiểm nhất của mỗi Trader không phải nhà cái, không phải tin tức vĩ mô, mà là chính bản thân họ. Tâm lý giao dịch chiếm tới 80% thành công của các nhà quản lý quỹ. FOMO chính là căn bệnh chung của 95% lính mới làm bay hơi mọi tài khoản ký quỹ mỏng manh.

## 1. FOMO (Fear Of Missing Out) - Con "Ngáo ộp" Sàn Forex
Bạn thấy biểu đồ giật dựng đứng vì Non-farm vừa ra tốt cho Đô la. Màu xanh tràn ngập nến, não bộ tiết ra Dopamine thôi thúc bạn "PHẢI MUA BÂY GIỜ NẾU KHÔNG SẼ MẤT PHẦN". Bạn Long ở đỉnh ngọn cây, và 3 phút sau sàn điều chỉnh quét Stoploss. Quen chứ?
[IMAGE_1]
Đừng bao giờ để cảm xúc lên lỏi vào lúc trade. Hãy nhớ: Market còn đó 24/5 từ vài trăm năm qua, nếu mất cơ hội này hôm nay, tuần tới, tháng tới vẫn có cả ngàn mẫu hình tương tự đang đợi. Tiền mới là thứ có giới hạn!

## 2. Rule Cốt Lõi Tắt Cảm Xúc 
Ghi danh vào quyển Sổ nhiệt ký Trading Journal của bạn bộ công cụ chặn bão cảm xúc. Set And Forget chính là bí quyết thần kỳ của Pro Trader. 
Vào lệnh -> Đặt SL (Chặn rủi ro) -> Đặt TP (Mục tiêu chốt lời) -> TẮT MÀN HÌNH.
[IMAGE_2]
Hành động ngồi nhìn từng tick giá Xanh, Đỏ chỉ khiến nội tiết tố lo âu Cortisol sản sinh liên tu bất tận, dẫn dắt bạn đi đến hành vi Dời SL, Gồng lỗ hoặc chốt non vì quá sợ mất đi lợi nhuận li ti đang có. 

## 3. Tâm Lý Gồng Lời Và Gồng Lỗ Trong Khách Quan Điểm
Gồng lời thì chốt sớm, mà gồng lỗ thì chờ lên vĩnh viễn. Để đi xa trong nghề này, tư duy phải đảo ngược: "Cắt đi đau khổ dứt điểm, Thả bay tự do phồn vinh."
[IMAGE_3]

## Bài Học FAQ Về Khắc Chế Cảm Xúc Trader 

### Làm sao hết cảm giác run tay khi đặt lệnh?
Hãy chia nhỏ khối lượng lại! Bắt đầu lại với tài khoản Cent hoặc đánh siêu nhỏ cỡ 0.01 Lot đến khi bạn xem số tiền đánh cược đó là cốc cà phê sáng vô thưởng vô phạt. Khi ấy bạn sẽ trade tĩnh lặng hơn cực nhiều.

### Tại sao Cắt Lỗ Xong Giá Lại Chạy Đúng Hướng Thường Xuyên Vậy?
Hiện tượng quét Stop Hunt xảy ra do bạn đặt SL tại vùng quá nông ngay sát đuôi nến. Bọn tay to thừa biết đám đông đặt SL tại đâu, và sàn sẽ đẩy spread cắn mồi rồi đi thẳng. Khắc phục bằng cách trừ hao SL vượt ra ngoài Cấu trúc thị trường chừng 3-5 Pip tùy con hàng.

### Cách tốt nhất để lập kỷ luật giao dịch năm 2026?
Cần một Check-list. Hãy in Check-list dán trước máy tính. Lệnh phải thỏa mãn cả xu hướng, cản, Mô hình nến tín hiệu và R:R đẹp mới được bắn đạn. Thiếu 1/4 thì kiên nhẫn ngồi ngoài thị trường ngắm. Ngồi ngoài (No Trade) cũng là một Vị thế chiến thắng!
`
},
{
title: "Chiến Lược Rủi Ro Đánh Scalping Dễ Cháy Tài Khoản Nhất Nếu Bạn Bỏ Qua 5 Sai Lầm Này",
slug: "5-sai-lam-chet-nguoi-khi-danh-scalping",
category: "kien-thuc-nguoi-moi",
tags: ["Scalping", "Kinh nghiệm trade", "Quản lý vốn"],
content: `
Giao dịch theo tần suất cao chớp nhoáng (Scalping) là con đường nhanh nhất để bào mòn sức lực và tâm trí. Rất hấp dẫn với giới Newbie nhưng cũng chính là lò luyện thiêu rụi túi tiền cực đậm chớp mắt. Chào mừng tới "Nghệ thuật lướt sóng".

## 1. Sai lầm Chết Người Chọn Sai Nền Tiền Tệ Và Giờ Giao Dịch
Đánh Scalping đòi hỏi tính thanh khoản (Liquidity) và dao động (Volatility) cao nhưng biên độ Phí (Spread/Commission) phải bé. Nếu bạn scalp mã Exotics như USD/TRY hoặc EUR/NZD giữa lúc Phiên Úc thì phí đã nuốt chửng 80% lợi nhuận khi vừa vào lệnh.
[IMAGE_1]
Hãy Scalp vàng (XAUUSD) vào giờ giao thoa phiên Mỹ - Âu (19h tới 22h tối VN) hoặc EUR/USD. Sự thanh khoản siêu việt lúc đó giúp phí trượt giá dường như bằng 0.

## 2. Over-Trade: Máy Cày Kiệt Quệ Phí Sàn 
Nếu ngày vã 20, 30 hay 50 lệnh liên tiếp, bạn đang làm giàu không phải cho bạn mà là cho sàn (Broker). Hơn nữa, sau lưng chục lần vào vào nhấp nháy liên hoàn, sự chính xác phân tích giá bắt đầu giảm về 0 và Trader sẽ trade theo cảm tính cờ bạc (Revenge trade).
[IMAGE_2]

## 3. Quá Lạm Dụng Khung M1 Bỏ Quên M15 
Cắm đầu vào M1 (1 Phút) là lỗi phổ thông mà hầu như ai cũng bị. Tín hiệu đánh lừa từ M1 rất dày. Ít nhất hãy dùng phân tích Đa Khung Thời Gian (Multi-Timeframe), xác định Trend chủ đạo tại H1, Swing/Cản của M15 và tiến vào ngắm bắn Trigger vào lệnh thật chuẩn ở M3 hoặc M1.
[IMAGE_3]

## FAQ - Tổng Hợp Vấn Đề Scalping Trading Từ Cao Thủ 

### Scalp có thực sự kiếm nhiều tiền hơn Đánh Dài (Swing) không? 
Không có đáp án cố định. Scalp cung cấp tần suất vào thị trường nhiều tạo ROI cực khủng theo công thức tính lãi kép liên lặp nhưng nó bào mòn não lớn, không phù hợp người đi làm bận rộn. Swing chậm hơn nhưng thoải mái và tỷ lệ rủi ro thấp.

### Nến M1 đi nhanh quá không kịp bấm cắt, phải làm sao? 
Nên dùng các công cụ Bot 1 Click Trading trên MT5. Set cố định SL, TP trong cài đặt. Cấm tự đánh tay kéo dời SL ở M1, bạn không thể phản xạ nhanh bằng các Bot HFT dập giá vỡ đầu xuống 100 Giá chỉ trong con chớp M1 Nonfarm. 

### Sàn nạp đánh Scalp tốt có đặc điểm gì?
Tìm cácBroker cung cấp tùy chọn tài khoản ECN/ZERO/RAW. Ở đó chênh lệch (Spread) thường bằng 0 PIP. Thay vào đó bạn đóng Commission cứng (VD: $3-$6 / 1 Lot chuẩn xoay vòng). Điều này đảm bảo an toàn lệnh khi thị trường sideway biên mỏng.
`
},
{
title: "Trade Tin Non-Farm (NFP): Cách Theo Dấu Chân Cá Mập Trước Bão Tố",
slug: "trade-tin-tuc-non-farm-chien-luoc-ca-map",
category: "phan-tich-ky-thuat",
tags: ["Non-farm", "Tin tức", "Thị trường"],
content: `
Báo cáo việc làm siêu quyền lực Nonfarm Payrolls diễn ra ngày thứ 6 đầu tiên mỗi tháng chính là cơn bão quét sạch bảng điện và làm ngập ngừng mọi tín hiệu Kỹ thuật thuần túy trên biểu đồ Forex 2026. 

## 1. Hành Động Giật Đôi Đầu Săn Stoploss Đám Đông 
Cá mập tại Nonfarm cực kỳ phũ phàng với cú Sweep văng 2 đầu (Up and Down). Thường khi số liệu được báo chí publish trên màn hình muộn 3 giây, thì giá đã bắn vọt lên quét đội Sell, sau đó đâm xẹp xuống nuốt thanh khoản đội Mua. Ai đặt Stoploss nhỏ hơn 50 Píp lúc này cháy là hiển nhiên.
[IMAGE_1]
Chính vì giãn Spread và thanh khoản sụp hầm, chuyên gia khuyến cáo KHÔNG mở lệnh trước. Trừ phi bạn chơi Xổ số đánh lót Hedging rào 2 cửa (Buy Stop / Sell Stop) với khoảng cách thật rộng để ăn biên thoát cực mạnh.

## 2. Giao Dịch Chậm Ở 15 Phút Sau Bão Bùng
"Ăn Cơm Ngó Nồi", để an toàn sống còn, hãy chờ Cây M15 đầu tiên đóng cửa. Nếu nến xanh mạnh kèm chỉ số Việc Lắm Mỹ mạnh mẽ tốt hẳn so chuẩn, lúc đó lực đà đi theo xu hướng của M15 sẽ tàn bạo trong 2-3 tiếng đồng hồ Mỹ. Hãy Pull back nhẹ vào các Fib hoặc Base của râu M15 và đánh thuận xu hướng Mới Gãy tạo ra lúc nãy.
[IMAGE_2]

## 3. Không Tin Số Liệu Đầu Tiên Sớm Tức Khắc
Thường số liệu tin NFP còn đi kèm Tỷ lệ Thất Nghiệp (Unemployment) và Lương giờ bình quân. Nếu NFP ra xanh nhưng Thất nghiệp lên tồi tệ hơn, thị trường sẽ lưỡng lự giật giá (Whipsaw). 
[IMAGE_3]

## Bách Khoa Toàn Thư Câu Hỏi Về Chơi Tin NFP Thần Tốc (FAQ)

### Giờ NFP ra mắt có cố định không?
Trong tháng đổi giờ mùa hè Mỹ thì là 19h30 Tối Thứ Sáu đầu tiên. Sang tháng đổi giờ cuối năm có thể dãn về 20h30 Tối Việt Nam. Xem mục Factory Calendar để set chuông cài nhắc nhở.

### Chơi tin cần dời SL TP sao để hiệu quả lớn tránh mất trắng? 
Nếu đã may mắn bắt được con sóng 1 chiều 200 - 300 PÍp NonFarm, đừng chốt ngay mà dời SL qua Breakeven lập tức khóa túi an toàn, rồi tiếp tục Trailing bằng đỉnh đáy nến M15 tới khi trend bị gãy chót đuôi thị trường Mỹ gắt gao giữa đêm. 

### Những Đồng Nào Dễ Tự Tin Rơi Trượt Và Có Độ Ép Giá Kinh Biên Để Non-Farm? 
Vàng (XAU/USD) là hung thần siêu dã man, có lúc đi cả 500 Giá một tối NFP. Các cặp chéo USD/JPY (yên) hoặc EUR/USD cũng biến động chằng chịt rúng số lớn. Hạn chế dính với các đồng quá yếu ớt rác vì nó hay đứng cứng hoặc không thanh khoản kịp khớp SL.
`
},
{
title: "Phân Tích Cơ Bản vs Kỹ Thuật: Chìa Khóa Mở Rương Vàng 2026?",
slug: "phan-tich-co-ban-vs-phan-tich-ky-thuat",
category: "kien-thuc-nguoi-moi",
tags: ["Phân tích kỹ thuật", "Phân tích cơ bản", "Forex Newbie"],
content: `
Bức tường giữa phái tin vào Kinh Tế Vĩ Mô (Tin đồn lạm phát, GDP) và phái ngậm chart Nến Nhật thuần túy vẫn chưa có điểm kết. Bài này giúp bạn dung hòa âm dương để trở thành siêu Trader bất khả chiến bại tại thì trường 2026 rực lửa.

## 1. Phân Tích Cơ Bản: La Bàn Vĩ Mô Dự Trù Xu Hướng Chung 
Bạn không thể nào làm ngơ khi Ngân Hàng Fed quyết giảm lãi suất đột ngột, hay chiến tranh nổ ra ở biển đỏ giữa 2 phe phái. Lúc đó Nến không thể chạy loạn thoát khỏi sự dẫn dắt của Giá Vàng, Dầu thô Mọi Phân tích kỹ thuật đều vô dụng chống lại tin siêu Đen (Thiên Nga Đen). PT Cơ Bản vẽ ra lộ trình Đích tới của 3 Tháng sau.
[IMAGE_1]

## 2. Phân Tích Kỹ Thuật: Xe Chỉ Luồn Kim Tìm Entry Chuẩn Chỉ Xác Sát 
Dù biết tin tức làm USD mạnh lên, nhưng không ai lao vào mua bừa trên khung Giá trần (Resistance) H4. Họ phải dùng Mô hình Nến, Kháng Cự, Hỗ trợ, RSI phân kỳ để đánh bắt ở vùng đáy ngắn múc Pull back cho giá đẹp nhất Lịch Sử Tối ngày lúc này!
[IMAGE_2]
Phân tích kỹ thuật là con dao giải phẫu cắt lớp chi tiết Hành vi giao dịch từng phút giây, cho điểm Mua (Entry), điềm Cắt Lỗ tối ưu (Stop Loss) mà Phân tích cơ bản không bao giờ cho con số tĩnh.

## 3. Cân Bằng Kiềng 3 Chân Thách Thức BigBoys
Trade Cơ Bản cho Phương Hướng Lục Đầu Lư - Khẳng định Đại Xu Hướng. Kỹ thuật là Ngọn Giáo xác định nơi xuất kích - Điểm nổ nòng bóp cò đúng lúc chuẩn ngàm. Nếu thiếu 1 trong 2, Bạn luôn thua thiệt bọn Bank Trade quái vật.
[IMAGE_3]

## FAQ - Sách Trắng Lý Luận Đối Ngoại Chọn PT Từng Loại

### Người mới nên chọn Kỹ thuật hay Cơ Bản tiên khởi?
Với người quá Mới, Kỹ Thuật đi trước. Đọc hiểu Rào cản Support, Mua Đáy Bán Đỉnh cơ chế cấu tạo Nến là nhanh nhất trong vài Tuần. 

### Tại sao lúc ra tin Cơ bản lại đánh lệch cả Kỹ Thuật cản cứng nhất vỡ vụn?
Tin vĩ mô bẻ gãy xu hướng khi BigBoy rút lệnh dồn xả làm thanh khoản rỗng. Trong 30 phút số lượng Lệnh Mua / Bán khổng lồ tràn vào không màng cản cũ, biến cản cứng ngàn năm thành Tờ Tiền Giấy Xốp. Nhường đường ra né qua tin xóc đĩa.

### Thuần chỉ dùng chỉ báo đường MA có đánh Forex vững sống được không?
Rất khó kiếm ăn Lâu nếu chỉ bấu víu vài sợi EMAs lúc nà Giá Chay (Price Action - Nến Trần) mới phản ánh hành vi tâm lý không có độ lệch/trễ giờ (Lagging) như bọn EMA rớt hậu quả.
`
}
]

async function run() {
    console.log("🚀 Bắt đầu Insert trực tiếp 6 bài viết siêu cấp chất lượng...");
    let successCount = 0;

    for (let i = 0; i < ARTICLES.length; i++) {
        const item = ARTICLES[i];
        try {
            const htmlContent = processContent(item.content, item.title);
            const rawText = item.content.replace(/#/g, '').replace(/\*/g, '').replace(/\[IMAGE_\d+\]/g, '').trim();
            const excerpt = rawText.substring(0, 150) + "...";
            const featured_image = getImage(1200, 800);
            
            const scheduleDate = new Date();
            scheduleDate.setHours(scheduleDate.getHours() + i);

            const metaTitle = item.title.length > 57 ? item.title.substring(0, 57) + "..." : item.title;
            const metaDesc = rawText.substring(0, 157) + "...";

            const postData = {
                title: item.title,
                slug: item.slug,
                category: item.category,
                tags: item.tags,
                excerpt: excerpt,
                content: htmlContent,
                featured_image: featured_image,
                featured_image_alt: metaTitle,
                meta_title: metaTitle,
                meta_description: metaDesc,
                is_published: true, 
                scheduled_at: scheduleDate.toISOString() 
            };

            const { data, error } = await supabase
                .from('posts')
                .upsert([postData], { onConflict: 'slug' })
                .select();

            if (error) throw error;
            console.log(`✅ Đã thêm thành công: ${item.title}`);
            successCount++;
        } catch (error) {
            console.error(`❌ Lỗi bài ${item.title}:`, error.message);
        }
    }
    console.log(`\n🎉 HOÀN TẤT! Đã cấy thành công ${successCount}/6 bài Không Dùng API Gemini vào Admin CMS.`);
}
run();
