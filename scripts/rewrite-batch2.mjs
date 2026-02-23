import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ecipdcojedkbrlggaqja.supabase.co";
const supabaseAnonKey = "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const batch2 = [
    {
        id: 30,
        content: `<h2>Quản lý vốn — kỹ năng mà 90% trader bỏ qua</h2>
<p>Nhiều người mới bước vào Forex đổ hết thời gian học phân tích kỹ thuật, tìm chỉ báo "thần thánh", nhưng lại bỏ qua <strong>quản lý vốn</strong> — thứ thực sự quyết định bạn sống hay chết trong thị trường này.</p>
<p>Sự thật là dù bạn có hệ thống giao dịch tốt đến đâu, nếu rủi ro 10% vốn mỗi lệnh, chỉ cần 5-6 lệnh thua liên tiếp là tài khoản cháy. Và chuỗi thua 5-6 lệnh xảy ra thường xuyên hơn bạn nghĩ — ngay cả với những trader giỏi nhất. Thực hành ngay trên <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a> tại <a href="/exness">Exness</a>.</p>
<img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80" alt="Quản lý vốn trong trading Forex" />

<h2>Quy tắc 1-2% — đơn giản nhưng cứu mạng</h2>
<p>Đây là nguyên tắc nền tảng: <strong>không bao giờ rủi ro quá 1-2% vốn trong một lệnh</strong>. Với tài khoản $1,000, mỗi lệnh bạn chỉ được thua tối đa $10-$20. Nghe ít, nhưng chính sự "ít" này giúp bạn chịu được 20-30 lệnh thua liên tiếp mà vẫn còn vốn để phục hồi.</p>
<p>Kết hợp với tỷ lệ <strong>Risk/Reward tối thiểu 1:2</strong>, bạn chỉ cần thắng khoảng 40% lệnh là đã có lợi nhuận. Nếu SL là 30 pips, TP tối thiểu phải 60 pips. Quy tắc đơn giản này đã giúp vô số trader từ "cháy tài khoản mỗi tháng" chuyển sang "lợi nhuận ổn định".</p>

<h2>Tính lot size — không phải cảm tính</h2>
<p>Nhiều trader vào lệnh 0.1 lot vì "quen tay" mà không tính toán gì cả. Cách đúng là dùng công thức: <strong>Lot size = (Vốn × % rủi ro) ÷ (SL pips × Giá trị 1 pip)</strong>.</p>
<p>Ví dụ: vốn $1,000, rủi ro 1% ($10), SL 50 pips, giá trị 1 pip trên EUR/USD micro lot = $0.1 → Lot size = $10 ÷ (50 × $1) = 0.02 lot. Con số cụ thể, không phải "đoán mò". Tham khảo <a href="/tin-tuc/cac-loai-lenh-trong-forex">các loại lệnh Forex</a> để hiểu cách đặt lệnh chính xác.</p>

<h2>Những sai lầm phổ biến nhất</h2>
<p><strong>Gỡ lỗ (revenge trading)</strong> là sai lầm chết người. Sau 2-3 lệnh thua, cảm xúc dâng lên, bạn tăng lot gấp đôi để "gỡ". Kết quả? Thua thêm, thua nặng hơn. Giải pháp: nghỉ sau 2-3 lệnh thua liên tiếp, quay lại ngày hôm sau với đầu lạnh.</p>
<p>Sai lầm thứ hai là <strong>"all-in" một lệnh</strong> — bỏ 50-100% vốn vào một cơ hội "chắc ăn". Trong trading, không có gì là chắc ăn. Mỗi lệnh chỉ là một xác suất, và quản lý vốn giúp bạn sống đủ lâu để xác suất phát huy tác dụng.</p>
<p>Cuối cùng, <strong>tăng lot khi thua</strong> (Martingale) — nghe logic nhưng cực kỳ nguy hiểm. Mỗi lần thua bạn gấp đôi lot, chỉ cần 6-7 lần thua liên tiếp là mất toàn bộ vốn. Hãy giữ lot size cố định hoặc giảm khi thua. Kiểm soát <a href="/tin-tuc/tam-ly-trading-yeu-to-thanh-cong">tâm lý trading</a> là nền tảng của quản lý vốn.</p>

<h2>Drawdown — con số bạn phải theo dõi</h2>
<p>Drawdown là mức giảm vốn từ đỉnh cao nhất xuống điểm thấp nhất. Nếu tài khoản từ $1,000 giảm xuống $800, drawdown là 20%. Vấn đề là: để phục hồi từ drawdown 20%, bạn cần lãi 25%. Drawdown 50%? Cần lãi 100% — gần như bất khả thi.</p>
<p>Đó là lý do tại sao ngưỡng drawdown tối đa chấp nhận được chỉ nên là 20-25%. Nếu vượt mức này, hãy tạm dừng, xem xét lại hệ thống giao dịch và tìm ra vấn đề trước khi tiếp tục.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Cần bao nhiêu vốn tối thiểu để trade Forex?</h3>
<p>Bạn có thể bắt đầu từ $100-$200, nhưng vốn lý tưởng là $500-$1,000. Với $500 và rủi ro 1% ($5), bạn trade lot 0.01-0.03 trên khung H4/D1 — vừa đủ để thực hành nghiêm túc mà không quá áp lực.</p>
<h3>Nên rủi ro bao nhiêu % mỗi lệnh?</h3>
<p>Quy tắc: 1% cho người thận trọng, 2% cho người tích cực. Không bao giờ vượt quá 3%. Trader chuyên nghiệp thường chỉ rủi ro 0.5-1%. Kỷ luật tuân thủ quy tắc này là chìa khóa tồn tại trong Forex.</p>

<p><strong>Quản lý vốn</strong> không hào nhoáng như phân tích kỹ thuật, nhưng chính nó quyết định bạn có tồn tại đủ lâu để trở thành trader giỏi hay không. Ghi nhớ: rủi ro 1-2%/lệnh, R:R tối thiểu 1:2, luôn dùng <a href="/tin-tuc/cach-dat-stop-loss-take-profit">Stop Loss</a>, và đừng bao giờ gỡ lỗ. Thực hành trên <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a> cho đến khi kỷ luật trở thành bản năng. Tìm hiểu thêm tại <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>`
    },
    {
        id: 31,
        content: `<h2>Kỹ thuật hay cơ bản — trader nên chọn phương pháp nào?</h2>
<p>Đây là câu hỏi kinh điển mà hầu hết trader mới đều đặt ra: nên dùng <strong>phân tích kỹ thuật</strong> (nhìn biểu đồ) hay <strong>phân tích cơ bản</strong> (theo tin tức)? Câu trả lời ngắn gọn: cả hai, nhưng bắt đầu từ kỹ thuật. Thực hành tại <a href="/exness">Exness</a> hoặc <a href="/xm">XM</a>.</p>
<img src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Phân tích kỹ thuật vs cơ bản Forex" />

<h2>Phân tích kỹ thuật — "đọc" biểu đồ giá</h2>
<p>Phân tích kỹ thuật dựa trên một ý tưởng đơn giản: <strong>giá phản ánh tất cả</strong>. Mọi thông tin — tin tức, tâm lý, cung cầu — đều đã được phản ánh trong biến động giá. Việc của bạn là đọc biểu đồ để tìm ra xu hướng và điểm vào lệnh.</p>
<p>Các công cụ chính bao gồm xu hướng (trendline, EMA), vùng <a href="/tin-tuc/ho-tro-khang-cu-trong-forex">hỗ trợ/kháng cự</a>, các chỉ báo như <a href="/tin-tuc/huong-dan-su-dung-rsi">RSI</a> và MACD, cùng mô hình giá trên <a href="/tin-tuc/cach-doc-bieu-do-nen-nhat-ban">biểu đồ nến Nhật</a>. Ưu điểm lớn nhất của phương pháp này là cho tín hiệu cụ thể: entry ở đâu, đặt SL bao nhiêu, TP bao nhiêu.</p>

<h2>Phân tích cơ bản — hiểu "tại sao" giá chạy</h2>
<p>Nếu phân tích kỹ thuật cho bạn biết "chuyện gì đang xảy ra", thì phân tích cơ bản giải thích "tại sao nó xảy ra". Phương pháp này nhìn vào sức khỏe kinh tế của mỗi quốc gia để đánh giá đồng tiền mạnh hay yếu.</p>
<p><strong>Lãi suất</strong> là yếu tố quan trọng nhất — ngân hàng trung ương tăng lãi suất thì đồng tiền mạnh lên. Tiếp đó là GDP (tăng trưởng kinh tế), CPI (lạm phát), Non-Farm Payrolls (việc làm tại Mỹ), và cán cân thương mại. Mỗi khi các dữ liệu này được công bố, thị trường có thể biến động hàng trăm pips trong vài phút.</p>

<h2>Kết hợp cả hai — phương pháp của trader chuyên nghiệp</h2>
<p>Trader thành công nhất thường không "chọn phe" mà kết hợp cả hai. Cách tiếp cận hiệu quả: dùng <strong>cơ bản để xác định hướng lớn</strong>, sau đó dùng <strong>kỹ thuật để tìm điểm vào lệnh cụ thể</strong>.</p>
<p>Ví dụ thực tế: dữ liệu NFP yếu → bạn biết USD có thể suy yếu (cơ bản). Sau đó, bạn mở biểu đồ EUR/USD, tìm mô hình nến tăng tại vùng hỗ trợ → đặt lệnh Buy với <a href="/tin-tuc/cach-dat-stop-loss-take-profit">SL dưới hỗ trợ, TP tại kháng cự tiếp theo</a>. Cơ bản cho hướng, kỹ thuật cho entry — đơn giản mà hiệu quả. Áp dụng kèm <a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a> phù hợp.</p>

<h2>Người mới nên bắt đầu từ đâu?</h2>
<p>Lời khuyên chân thành: hãy bắt đầu từ <strong>phân tích kỹ thuật</strong>. Lý do? Nó trực quan hơn, cho tín hiệu rõ ràng hơn, và bạn có thể thực hành ngay trên biểu đồ. Sau 3-6 tháng, khi đã quen với việc đọc chart, hãy bổ sung kiến thức cơ bản. Đọc thêm <a href="/tin-tuc/forex-la-gi-huong-dan-nguoi-moi">Forex là gì</a> và thực hành trên <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a>.</p>
<p>Một lưu ý quan trọng: dù bạn thiên về phương pháp nào, <strong>đừng trade khi có tin tức lớn</strong> nếu chưa hiểu tác động của nó. Tin tức có thể khiến mọi setup kỹ thuật đẹp đẽ bị phá vỡ trong tích tắc. Kiểm tra lịch kinh tế trên ForexFactory trước mỗi phiên giao dịch.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Chỉ dùng phân tích kỹ thuật có được không?</h3>
<p>Được, nhiều trader thành công chỉ dùng price action (nến Nhật + hỗ trợ/kháng cự). Tuy nhiên, hãy tránh giao dịch trong 15-30 phút trước và sau tin tức lớn vì spread có thể bung rộng và SL dễ bị quét.</p>
<h3>Phần mềm nào hỗ trợ phân tích tốt nhất?</h3>
<p><a href="/tin-tuc/huong-dan-su-dung-metatrader-4-mt4">MetaTrader 4</a> và MT5 cho phân tích kỹ thuật (miễn phí tại <a href="/exness">Exness</a>). TradingView cho cả kỹ thuật lẫn cơ bản. ForexFactory và Investing.com cho lịch kinh tế. Kết hợp các công cụ này tạo bộ phân tích hoàn chỉnh.</p>

<p>Cả <strong>phân tích kỹ thuật</strong> và <strong>cơ bản</strong> đều có giá trị. Kết hợp chúng một cách thông minh sẽ cho bạn lợi thế lớn. Tham khảo <a href="/so-sanh">so sánh sàn Forex</a> để chọn sàn phù hợp. Tìm hiểu thêm tại <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>`
    },
    {
        id: 33,
        content: `<h2>Hiểu các loại lệnh — bước đầu tiên để giao dịch đúng</h2>
<p>Trước khi bạn phân tích chart, tìm tín hiệu, hay học bất kỳ chiến lược nào, có một kỹ năng cơ bản hơn hết: <strong>hiểu và sử dụng đúng các loại lệnh</strong>. Đặt sai loại lệnh giống như nhắm đúng mục tiêu nhưng bắn sai súng — kết quả sẽ không như mong đợi. Nếu bạn mới bắt đầu, hãy đọc <a href="/tin-tuc/forex-la-gi-huong-dan-nguoi-moi">Forex là gì</a> trước để nắm kiến thức nền tảng.</p>
<img src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Các loại lệnh giao dịch trong thị trường Forex" />

<h2>Market Order — vào lệnh ngay lập tức</h2>
<p><strong>Market Order</strong> là loại lệnh đơn giản nhất: bạn nhấn Buy hoặc Sell, lệnh khớp ngay tại giá thị trường hiện tại. Nhanh, gọn, không chờ đợi.</p>
<p>Tuy nhiên, "nhanh" không phải lúc nào cũng tốt. Trong lúc biến động mạnh (tin tức, phiên London mở cửa), bạn có thể bị <strong>trượt giá (slippage)</strong> — lệnh khớp ở giá khác vài pips so với giá bạn thấy trên màn hình. Nên dùng Market Order khi bạn thấy cơ hội rõ ràng và không muốn bỏ lỡ.</p>

<h2>Limit Order — kiên nhẫn để có giá tốt hơn</h2>
<p><strong>Limit Order</strong> giúp bạn đặt lệnh ở mức giá tốt hơn giá hiện tại. <strong>Buy Limit</strong> đặt dưới giá hiện tại — bạn chờ giá giảm về vùng hỗ trợ rồi mới mua. <strong>Sell Limit</strong> đặt trên giá hiện tại — chờ giá tăng lên kháng cự rồi bán.</p>
<p>Ưu điểm lớn nhất: bạn có entry tốt hơn, nghĩa là tỷ lệ Risk/Reward cũng tốt hơn. Nhược điểm? Đôi khi giá không chạm mức bạn đặt và lệnh không được khớp — bạn bỏ lỡ cơ hội. Nhưng đó là sự đánh đổi chấp nhận được. Tham khảo <a href="/tin-tuc/cach-doc-bieu-do-nen-nhat-ban">đọc biểu đồ nến Nhật</a> để nhận diện vùng hỗ trợ/kháng cự chính xác.</p>

<h2>Stop Order — bắt sóng breakout</h2>
<p><strong>Buy Stop</strong> đặt trên giá hiện tại — khi giá phá vỡ kháng cự, lệnh tự động khớp để bạn "nhảy" theo xu hướng mới. <strong>Sell Stop</strong> đặt dưới giá hiện tại — khi giá phá hỗ trợ, bạn vào lệnh bán.</p>
<p>Đây là công cụ quan trọng cho chiến lược <strong>breakout trading</strong>. Tuy nhiên, cẩn thận với "false breakout" — giá phá kháng cự rồi quay đầu, khiến bạn bị mắc kẹt. Kết hợp với volume và <a href="/tin-tuc/huong-dan-su-dung-rsi">RSI</a> để lọc tín hiệu giả.</p>

<h2>Stop Loss và Take Profit — hai "vệ sĩ" bắt buộc</h2>
<p><strong>Stop Loss</strong> tự động đóng lệnh khi bạn thua đến mức cho phép, bảo vệ tài khoản khỏi thiệt hại lớn. <strong>Take Profit</strong> tự động chốt lời khi giá đạt mục tiêu, giúp bạn không bị chi phối bởi lòng tham. Cả hai nên được đặt <strong>cùng lúc khi mở lệnh</strong>, không phải sau khi lệnh đã chạy. Tìm hiểu chi tiết về <a href="/tin-tuc/cach-dat-stop-loss-take-profit">cách đặt Stop Loss và Take Profit</a>.</p>
<p><strong>Trailing Stop</strong> là phiên bản nâng cao: SL tự động di chuyển theo hướng có lợi. Ví dụ, bạn Buy EUR/USD tại 1.0900 với trailing 30 pips. Giá lên 1.0950 → SL tự nâng lên 1.0920 (khóa lãi 20 pips). Phù hợp cho trend following nhưng cần thận trọng khi thị trường sideway.</p>

<h2>Mẹo sử dụng lệnh như trader chuyên nghiệp</h2>
<p>Luôn đặt SL và TP cùng lúc với lệnh chờ — đừng chờ khớp mới đặt SL vì bạn sẽ quên hoặc lười. Đặt lệnh trước phiên dựa trên phân tích đã chuẩn bị, tránh đưa ra quyết định khi thị trường đang chạy vì cảm xúc sẽ chi phối.</p>
<p>Nếu lệnh chờ không khớp sau 24-48 giờ, hãy hủy và đánh giá lại — thị trường có thể đã thay đổi cấu trúc. Và quan trọng: kết hợp lệnh chờ với <a href="/tin-tuc/phan-tich-ky-thuat-vs-co-ban">phân tích kỹ thuật</a> để xác định entry chính xác hơn.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Nên dùng Market Order hay Limit Order?</h3>
<p>Phụ thuộc vào tình huống. Market Order cho khi cần vào lệnh ngay (breakout mạnh, tin tức). Limit Order cho khi bạn muốn entry tốt hơn và có thể chờ. Trader chuyên nghiệp thường dùng Limit Order khoảng 70% vì entry tốt hơn = R:R tốt hơn. Thực hành trên <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a> tại <a href="/exness">Exness</a>.</p>
<h3>OCO (One Cancels Other) là gì?</h3>
<p>OCO là loại lệnh nâng cao: bạn đặt 2 lệnh chờ cùng lúc, khi 1 lệnh khớp thì lệnh còn lại tự hủy. Ví dụ, giá ở 1.0900, bạn đặt Buy Stop 1.0950 + Sell Stop 1.0850 — giá phá hướng nào thì vào lệnh hướng đó. Đặc biệt hữu ích trước tin tức lớn như NFP hay FOMC.</p>

<p>Nắm vững các loại lệnh là bước đầu tiên để giao dịch có kỷ luật. Áp dụng <a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a> nghiêm ngặt cho mọi lệnh. <a href="/so-sanh">So sánh sàn Forex</a> tại <a href="/">Sàn Uy Tín</a> để chọn sàn phí thấp nhất. Tham khảo <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>`
    },
];

async function main() {
    for (const post of batch2) {
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
    console.log(`\nBatch 2 done! Updated ${batch2.length} posts.`);
}

main();
