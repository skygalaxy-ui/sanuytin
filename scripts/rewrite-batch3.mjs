import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ecipdcojedkbrlggaqja.supabase.co";
const supabaseAnonKey = "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const batch3 = [
    {
        id: 37,
        content: `<h2>RSI là gì — và tại sao trader nào cũng cần biết?</h2>
<p><strong>RSI</strong> (Relative Strength Index — Chỉ số Sức Mạnh Tương Đối) là một trong những chỉ báo kỹ thuật phổ biến nhất trong Forex. Được tạo ra bởi J. Welles Wilder vào năm 1978, RSI đo lường tốc độ và cường độ biến động giá trên thang điểm từ 0 đến 100.</p>
<p>Nói đơn giản: RSI giúp bạn biết thị trường đang "quá nóng" (quá mua) hay "quá lạnh" (quá bán), từ đó tìm ra những điểm vào lệnh có xác suất cao. Trước khi học RSI, hãy nắm vững <a href="/tin-tuc/forex-la-gi-huong-dan-nguoi-moi">Forex là gì</a> và cách <a href="/tin-tuc/cach-doc-bieu-do-nen-nhat-ban">đọc biểu đồ nến Nhật</a>.</p>
<img src="https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Chỉ báo RSI Relative Strength Index trên biểu đồ Forex" />

<h2>Cách đọc RSI — đơn giản hơn bạn nghĩ</h2>
<p>Khi RSI <strong>trên 70</strong>, thị trường đang ở vùng "quá mua" — giá đã tăng quá nhanh và có thể sắp giảm. Khi RSI <strong>dưới 30</strong>, thị trường "quá bán" — giá giảm quá mạnh và có thể sắp hồi phục. Vùng 50 là "trung tính" — RSI trên 50 cho thấy xu hướng tăng đang chiếm ưu thế, dưới 50 thì bên bán đang mạnh hơn.</p>
<p>Tuy nhiên, đừng mắc sai lầm phổ biến nhất: thấy RSI quá mua là sell ngay. Trong một uptrend mạnh, RSI có thể nằm trên 70 hàng tuần liền mà giá vẫn tiếp tục tăng. RSI "quá mua" chỉ là cảnh báo, không phải tín hiệu — bạn cần thêm xác nhận từ mô hình nến hoặc hỗ trợ/kháng cự.</p>

<h2>Ba chiến lược RSI hiệu quả nhất</h2>
<p><strong>Phân kỳ RSI (Divergence)</strong> là tín hiệu mạnh nhất. Khi giá tạo đáy thấp hơn nhưng RSI lại tạo đáy cao hơn, đó là "phân kỳ tăng" — báo hiệu giá có thể đảo chiều lên. Ngược lại, giá tạo đỉnh cao hơn nhưng RSI tạo đỉnh thấp hơn = "phân kỳ giảm". Tín hiệu này đặc biệt mạnh khi xuất hiện tại vùng hỗ trợ/kháng cự quan trọng.</p>
<p><strong>RSI quá bán + mô hình nến đảo chiều</strong> là combo kinh điển. Khi RSI dưới 30 và bạn thấy nến Hammer hoặc Bullish Engulfing xuất hiện, đó là tín hiệu Buy rất đáng tin cậy. Xem thêm <a href="/tin-tuc/cach-doc-bieu-do-nen-nhat-ban">cách đọc nến Nhật</a> để nhận diện chuẩn xác hơn. Đặt SL/TP theo <a href="/tin-tuc/cach-dat-stop-loss-take-profit">nguyên tắc Stop Loss</a>.</p>
<p><strong>RSI vượt đường 50</strong> là cách đơn giản nhất. RSI cắt lên trên 50 = xu hướng tăng đang bắt đầu, tìm cơ hội Buy. Cắt xuống dưới 50 = xu hướng giảm. Phương pháp này đơn giản nhưng khá hiệu quả trên khung H4 và D1.</p>

<h2>Nên cài RSI bao nhiêu?</h2>
<p>RSI mặc định là 14 chu kỳ — phù hợp cho hầu hết trường hợp. Nếu bạn <a href="/tin-tuc/scalping-forex-chien-luoc-luot-song">scalping</a> trên khung M1-M15, hãy thử RSI(7) để có tín hiệu nhanh hơn (nhưng chấp nhận nhiều nhiễu hơn). Nếu bạn swing trade trên D1-W1, RSI(21) sẽ bớt nhiễu và cho tín hiệu đáng tin hơn.</p>
<p>Ngoài ra, bạn có thể điều chỉnh mức overbought/oversold theo tài sản. EUR/USD thì 70/30 tiêu chuẩn, nhưng XAU/USD (vàng) biến động mạnh hơn nên dùng 80/20 sẽ lọc bớt tín hiệu giả. BTC/USD thì thậm chí 85/15 mới đáng tin.</p>

<h2>Kết hợp RSI với các chỉ báo khác</h2>
<p>RSI + MACD là bộ đôi phổ biến: RSI quá bán + MACD cắt lên = tín hiệu Buy mạnh. RSI + <a href="/tin-tuc/cach-doc-bieu-do-nen-nhat-ban">nến Nhật</a> cho tín hiệu chất lượng cao tại các vùng extreme. RSI + EMA: khi RSI trên 50 và giá trên EMA 50, xu hướng tăng được xác nhận chắc chắn.</p>
<p>Một kỹ thuật nâng cao là <strong>Multi-Timeframe RSI</strong> — kiểm tra RSI trên 2 khung thời gian. Ví dụ: RSI trên D1 > 50 (xu hướng tăng) + RSI trên H4 ở vùng quá bán (dưới 30) = cơ hội mua pullback rất tốt.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>RSI overbought có nên sell ngay?</h3>
<p>Không. Trong uptrend mạnh, RSI có thể ở vùng overbought hàng tuần. Chỉ sell khi có thêm xác nhận: mô hình nến đảo chiều hoặc price action tại kháng cự. RSI overbought trong downtrend mới là tín hiệu sell tốt.</p>
<h3>RSI period 7 hay 14?</h3>
<p>RSI(14) là chuẩn, cân bằng giữa nhạy cảm và tin cậy. RSI(7) nhanh hơn nhưng nhiều tín hiệu giả — phù hợp cho <a href="/tin-tuc/scalping-forex-chien-luoc-luot-song">scalping</a>. RSI(21) ít nhiễu hơn — phù hợp swing trade. Thực hành trên <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a>.</p>

<p>RSI là công cụ tuyệt vời nhưng đừng dùng một mình — kết hợp với <a href="/tin-tuc/cach-doc-bieu-do-nen-nhat-ban">nến Nhật</a> và <a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a> để tối đa hiệu quả. Thực hành trên <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a> tại <a href="/exness">Exness</a>. <a href="/so-sanh">So sánh sàn Forex</a> tại <a href="/">Sàn Uy Tín</a>. Tham khảo <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>`
    },
    {
        id: 57,
        content: `<h2>Scalping — giao dịch cực ngắn, lợi nhuận cực nhanh?</h2>
<p>Scalping là phong cách giao dịch mà bạn mở và đóng lệnh trong khoảng thời gian rất ngắn — từ vài giây đến vài phút. Thay vì chờ đợi một đợt sóng lớn, scalper thu lợi nhuận nhỏ nhưng liên tục, giống như "lướt sóng nhỏ" liên tục suốt cả ngày.</p>
<p>Một scalper chuyên nghiệp có thể mở 20-100 lệnh mỗi ngày, mỗi lệnh chỉ kiếm 3-10 pips. Nghe ít, nhưng tích lũy lại có thể rất đáng kể. Tuy nhiên, scalping không dành cho tất cả mọi người — nó đòi hỏi sự tập trung cao, phản xạ nhanh, và kỷ luật sắt đá.</p>
<img src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Biểu đồ scalping forex khung thời gian ngắn M1 M5" />

<h2>Scalping cần gì để thành công?</h2>
<p>Yếu tố quan trọng nhất là <strong>spread</strong> — phải dưới 1 pip. Vì lợi nhuận mỗi lệnh chỉ 3-10 pips, spread cao sẽ ăn hết profit. Bạn cần sàn ECN với spread gần 0. <a href="/exness">Exness</a> là một trong những lựa chọn phổ biến nhất cho scalper Việt.</p>
<p>Tiếp đó là <strong>tốc độ khớp lệnh</strong> — dưới 50ms là lý tưởng. Internet cáp quang ổn định, latency thấp là bắt buộc. Cặp tiền nên chọn EUR/USD hoặc GBP/USD vì thanh khoản cao nhất. Mở <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a> để test tốc độ khớp lệnh trước khi scalp bằng tiền thật.</p>

<h2>Ba chiến lược scalping phổ biến</h2>
<p><strong>EMA Crossover</strong> là cách đơn giản nhất: dùng EMA 9 và EMA 21 trên khung M5. Khi EMA 9 cắt lên trên EMA 21 thì mua, cắt xuống thì bán. SL 5-8 pips, TP 8-15 pips. Đơn giản, rõ ràng, nhưng hay cho tín hiệu giả khi thị trường sideway.</p>
<p><strong>Bollinger Bands + RSI</strong> hiệu quả hơn trong thị trường đi ngang. Khi giá chạm dải dưới Bollinger và <a href="/tin-tuc/huong-dan-su-dung-rsi">RSI</a> dưới 30 thì mua. Chạm dải trên và RSI trên 70 thì bán. Chiến lược này giúp bạn tìm các điểm đảo chiều ngắn hạn chính xác hơn.</p>
<p><strong>Price Action</strong> scalping là phương pháp nâng cao, dựa vào <a href="/tin-tuc/cach-doc-bieu-do-nen-nhat-ban">mô hình nến</a> tại các vùng hỗ trợ/kháng cự ngắn hạn và số tròn. Đòi hỏi kinh nghiệm cao nhưng cho tín hiệu chất lượng tốt nhất.</p>

<h2>Quản lý rủi ro — quan trọng gấp đôi khi scalping</h2>
<p>Vì bạn mở rất nhiều lệnh mỗi ngày, chỉ cần một lệnh thua lớn có thể xóa sạch cả ngày scalping thành công. Nguyên tắc số 1: <strong>không bao giờ gỡ Stop Loss</strong>. Khi giá chạm SL, nghĩa là tín hiệu sai — thoát lệnh ngay.</p>
<p>R:R tối thiểu cho scalping là 1:1.5 — nếu SL 5 pips thì TP ít nhất 8 pips. Đặt giới hạn thua lỗ hàng ngày: nếu thua 3% vốn trong ngày thì dừng, nghỉ ngơi, quay lại ngày mai. Không bao giờ "gỡ" bằng cách tăng lot. <a href="/tin-tuc/quan-ly-von-trong-trading">Quản lý vốn</a> là sống còn.</p>

<h2>Scalping có phù hợp cho bạn không?</h2>
<p>Nếu bạn là người mới, câu trả lời thẳng thắn là <strong>chưa</strong>. Scalping đòi hỏi phản xạ nhanh, kỷ luật tuyệt đối, và hiểu biết sâu về price action. Người mới nên bắt đầu với swing trading (khung H4/D1) để xây dựng nền tảng vững. Sau 6-12 tháng, khi đã quen với thị trường, bạn có thể thử scalping. Tìm hiểu <a href="/tin-tuc/forex-la-gi-huong-dan-nguoi-moi">Forex là gì</a> trước.</p>
<p>Trader chuyên nghiệp thường chỉ scalping 2-3 giờ/ngày trong phiên biến động nhất (London-New York overlap, 19h-23h VN). Không cần trading cả ngày — 5-15 lệnh chất lượng tốt hơn 50 lệnh vội vàng.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Scalping có phù hợp cho người mới?</h3>
<p>Không khuyến nghị. Nên bắt đầu với swing trading, xây nền tảng 6-12 tháng rồi mới thử scalping.</p>
<h3>Nên mở bao nhiêu lệnh mỗi ngày?</h3>
<p>5-15 lệnh/ngày là hợp lý, winrate mục tiêu 60-70%. Tối đa 3 lệnh thua liên tiếp = nghỉ cho phiên đó. Rủi ro tối đa 0.5-1%/lệnh.</p>

<p>Scalping là con đường thú vị nhưng khó khăn. Nếu bạn quyết tâm theo đuổi, hãy thực hành kỹ trên <a href="/tin-tuc/cach-mo-tai-khoan-demo-forex">tài khoản demo</a> trước. Tham khảo thêm tại <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>`
    },
    {
        id: 61,
        content: `<h2>Tại sao bạn nên bắt đầu với tài khoản demo?</h2>
<p>Tài khoản demo Forex là tài khoản mô phỏng cho phép bạn giao dịch bằng tiền ảo, nhưng trên điều kiện thị trường hoàn toàn thực. Giá chạy thật, biểu đồ thật, chỉ có tiền là "ảo". Đây là công cụ không thể thiếu cho người mới — bạn có thể thực hành mọi thứ từ mở lệnh, đặt SL/TP, đến thử chiến lược mà không lo mất một đồng nào.</p>
<p>Ngay cả trader dày dạn kinh nghiệm cũng dùng demo để thử chiến lược mới hoặc làm quen với nền tảng khác trước khi dùng tiền thật. Hầu hết <a href="/so-sanh">sàn Forex uy tín</a> đều cung cấp tài khoản demo miễn phí, không giới hạn thời gian.</p>
<img src="https://images.pexels.com/photos/6770774/pexels-photo-6770774.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Giao diện tài khoản demo forex trên máy tính" />

<h2>Mở tài khoản demo — chỉ mất 3 phút</h2>
<p><strong>Bước 1:</strong> Chọn sàn Forex uy tín, được cấp phép bởi FCA, ASIC hoặc CySEC. Lý do: điều kiện giao dịch trên demo cần phản ánh chính xác tài khoản thực. Nếu sàn không uy tín, trải nghiệm demo sẽ khác xa thực tế.</p>
<p><strong>Bước 2:</strong> Truy cập website sàn, tìm nút "Mở tài khoản Demo". Chỉ cần email, họ tên và số điện thoại — không cần xác minh danh tính hay nạp tiền. Quá trình đăng ký mất khoảng 1-2 phút.</p>
<p><strong>Bước 3:</strong> Sau khi đăng ký, bạn nhận thông tin đăng nhập qua email. Tải <a href="/tin-tuc/huong-dan-su-dung-metatrader-4-mt4">MetaTrader 4</a> hoặc MT5 từ sàn, đăng nhập và bắt đầu giao dịch ngay.</p>

<h2>Cách sử dụng demo hiệu quả — đừng coi nó là "trò chơi"</h2>
<p>Sai lầm lớn nhất khi dùng demo: giao dịch liều lĩnh vì "không mất tiền thật". Nhiều người vào lệnh 1 lot trên demo $100,000, trong khi tài khoản thật chỉ có $500. Kết quả? Khi chuyển sang thật, mọi thói quen sai lầm bộc lộ ngay.</p>
<p>Hãy <strong>đặt vốn demo bằng chính số vốn bạn dự định đầu tư thật</strong>. Trade lot size như thật. Tuân thủ <a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a> nghiêm ngặt. Ghi chép mọi giao dịch vào nhật ký. Đối xử với demo như thể mỗi đồng đều là tiền thật — đó mới là cách học hiệu quả.</p>

<h2>Lộ trình 3 giai đoạn trên demo</h2>
<p><strong>Giai đoạn 1 (1-2 tuần đầu):</strong> Làm quen giao diện MetaTrader — mở/đóng lệnh, đặt SL/TP, thử các chỉ báo. Giai đoạn này chỉ cần "nhấn nút" cho quen tay, chưa cần quan tâm lãi lỗ.</p>
<p><strong>Giai đoạn 2 (1-2 tháng):</strong> Áp dụng một chiến lược cụ thể và trade nhất quán. Ghi nhật ký mỗi lệnh: lý do vào, kết quả, bài học rút ra. Mục tiêu là tìm ra phong cách giao dịch phù hợp với bạn.</p>
<p><strong>Giai đoạn 3 (1 tháng):</strong> Giao dịch y hệt tài khoản thật — cùng lot size, cùng kỷ luật. Nếu profitable 2 tháng liên tiếp với drawdown dưới 15%, bạn sẵn sàng chuyển sang tiền thật.</p>

<h2>Khi nào nên chuyển sang tài khoản thật?</h2>
<p>Bạn sẵn sàng khi đáp ứng 3 điều kiện: <strong>lợi nhuận ổn định</strong> trên demo ít nhất 2 tháng liên tiếp, có <strong>kế hoạch trading rõ ràng</strong> và tuân thủ nhất quán, và có thể <strong>kiểm soát cảm xúc</strong> khi thua lỗ.</p>
<p>Khi bắt đầu giao dịch thật, hãy nạp số vốn nhỏ ($50-$100) và dùng lot nhỏ nhất (0.01 lot). Mục đích không phải kiếm tiền ngay mà là làm quen với áp lực tâm lý khi có tiền thật trên thị trường. Đọc thêm về <a href="/tin-tuc/tam-ly-trading-yeu-to-thanh-cong">tâm lý trading</a>.</p>

<h2>Câu hỏi thường gặp</h2>
<h3>Demo và thật khác nhau thế nào?</h3>
<p>Về kỹ thuật, giống nhau khoảng 95%: cùng spread, cùng biểu đồ, cùng chỉ báo. Khác biệt lớn nhất là <strong>tâm lý</strong>. Demo không có rủi ro mất tiền thật nên bạn thường mạo hiểm hơn. Khi chuyển sang thật, sợ hãi và tham lam xuất hiện mạnh hơn nhiều.</p>
<h3>Nên trade demo bao lâu?</h3>
<p>Tối thiểu 3 tháng profitable liên tiếp. Tiêu chí chuyển thật: winrate trên 50%, drawdown dưới 15%, R:R trung bình trên 1:1.5. Nếu chưa đạt, tiếp tục demo — không có deadline. Kiên nhẫn là chìa khóa thành công.</p>

<p>Tài khoản demo là bước đệm an toàn trước khi bạn bước vào thế giới trading bằng tiền thật. Mở demo miễn phí tại <a href="/exness">Exness</a>, <a href="/xm">XM</a> hoặc <a href="/vantage">Vantage</a>. Áp dụng <a href="/tin-tuc/quan-ly-von-trong-trading">quản lý vốn</a> từ demo. Tham khảo thêm tại <a href="https://cachdautu.com/">Cách Đầu Tư</a>.</p>`
    },
];

async function main() {
    for (const post of batch3) {
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
    console.log(`\nBatch 3 done! Updated ${batch3.length} posts.`);
}

main();
