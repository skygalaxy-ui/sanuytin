import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

// Extra paragraphs for each post that's under 900 words
const extras = {
    64: `<h3>Lời khuyên quản lý rủi ro theo Pip</h3><p>Khi đặt Stop Loss, hãy nghĩ bằng pip chứ đừng nghĩ bằng tiền. Ví dụ: SL 30 pip nghe an toàn hơn "SL $300" nhưng thực tế là cùng một thứ nếu bạn trade 1 lot. Bằng cách tính giá trị pip trước, bạn kiểm soát được chính xác rủi ro mỗi lệnh. Trader chuyên nghiệp luôn xác định SL bằng pip trước, rồi tính lot size ngược lại để rủi ro không quá 1-2% vốn. Đây là quy trình đúng đắn nhất trong quản lý vốn Forex.</p>`,

    69: `<h3>Mẹo trade theo phiên cho trader Việt Nam</h3><p>Với multiple timezone, trader VN có lợi thế lớn: sáng sớm có thể trade phiên Á (JPY pairs), chiều và tối trade phiên London (EUR, GBP pairs), đêm trade phiên Mỹ (USD pairs). Tuy nhiên, đừng trade cả 3 phiên - chọn 1-2 phiên phù hợp lịch sinh hoạt và ngủ đủ giấc. Nhiều trader Việt Nam thành công nhất với phiên London overlap (20:00-00:00) vì đây là thời điểm biến động mạnh nhất và phù hợp giờ tối ở VN.</p>
<p>Ngoài ra, hãy chú ý đến các ngày nghỉ lễ quốc tế. Khi Mỹ nghỉ lễ (Thanksgiving, Independence Day), volume phiên New York giảm mạnh. Khi Nhật nghỉ (Golden Week), phiên Á rất trầm lắng. Kiểm tra lịch nghỉ lễ hàng năm để tránh trade trong những ngày thanh khoản thấp.</p>`,

    71: `<h3>Moving Average và xu hướng dài hạn</h3><p>EMA 200 trên biểu đồ D1 được xem là "đường phân chia" giữa bull market và bear market. Các quỹ đầu tư lớn thường dùng EMA 200 làm tham chiếu: khi giá trên EMA 200 → they are bullish, khi dưới → bearish. Đây là lý do EMA 200 hoạt động tốt như mức support/resistance.</p>
<p>Moving Average Ribbon (nhiều MA cùng lúc) cũng là công cụ mạnh. Sử dụng 6-8 đường EMA (từ 10 đến 60) cùng lúc. Khi các đường xếp đẹp theo thứ tự → xu hướng mạnh. Khi các đường bắt đầu chéo nhau → xu hướng yếu dần hoặc đảo chiều. Ribbon giúp visualize sức mạnh xu hướng bằng mắt thường dễ dàng.</p>`,

    72: `<h3>Kinh nghiệm thực tế khi dùng song song</h3><p>Nhiều trader Việt Nam kinh nghiệm sử dụng cả Exness và XM cùng lúc. Họ dùng Exness cho giao dịch chính nhờ rút tiền nhanh, và dùng XM để tận dụng chương trình bonus khi có khuyến mãi. Ngoài ra, so sánh spread real-time giữa 2 sàn cũng giúp tìm điểm vào lệnh tốt hơn. Đây là chiến lược "đa dạng hóa sàn" khá thông minh.</p>`,

    73: `<h3>S/R trên nhiều Timeframe</h3><p>Hỗ trợ/kháng cự trên timeframe lớn luôn mạnh hơn timeframe nhỏ. S/R trên W1 (weekly) cực kỳ quan trọng - giá thường phản ứng mạnh khi chạm vùng này. S/R trên D1 vẫn rất đáng tin cậy cho day trading. S/R trên H1 phù hợp cho scalping nhưng dễ bị "đâm thủng" hơn.</p>
<p>Kỹ thuật Multi-Timeframe Analysis: Vẽ S/R trên W1 trước → D1 → H4 → H1. Khi S/R trên nhiều timeframe trùng nhau tại cùng một vùng giá → đó là <strong>S/R confluence</strong> cực mạnh, xác suất bounce rất cao.</p>`,

    74: `<h3>Swap dương và chiến lược Carry Trade</h3><p>Carry Trade là chiến lược tận dụng swap dương. Bạn mua đồng tiền lãi suất cao và bán đồng tiền lãi suất thấp, giữ lệnh dài hạn để thu swap mỗi ngày. Ví dụ: Mua USD/JPY khi lãi suất Mỹ cao hơn Nhật. Mỗi ngày nhận swap dương, tích lũy lâu dài rất đáng kể. Tuy nhiên, carry trade có rủi ro khi tỷ giá đi ngược xu hướng, lợi nhuận swap không đủ bù thua lỗ giá.</p>`,

    76: `<h3>Tổng kết: Điểm mạnh riêng của từng sàn</h3><p>Vantage nổi bật với phí giao dịch thấp hơn và nền tảng ProTrader hiện đại. Chương trình Active Trader giảm phí thêm cho trader volume lớn. Ngoài ra, Vantage cung cấp VPS miễn phí cho tài khoản từ $1,000. Đây là lợi thế cho trader dùng EA (Expert Advisor).</p>
<p>Exness nổi bật vì tốc độ rút tiền instant, nạp tối thiểu cực thấp ($1), và hỗ trợ tiếng Việt toàn diện. Đòn bẩy unlimited cho phép trader vốn nhỏ vẫn có thể tham gia thị trường. Nhìn chung, Exness chiếm ưu thế hơn tại Việt Nam nhờ độ tiện lợi vượt trội.</p>`,

    77: `<h3>Bollinger Bands và Keltner Channel</h3><p>Một kỹ thuật nâng cao là so sánh BB với Keltner Channel. Khi BB nằm TRONG Keltner → thị trường đang "squeeze" cực mạnh. Khi BB bắt đầu mở rộng ra ngoài Keltner → breakout đã bắt đầu. Đây là indicator TTM Squeeze - rất phổ biến trong cộng đồng trader. Kết hợp BB + Keltner tăng đáng kể xác suất bắt được breakout lớn.</p>
<p>Ngoài ra, Bandwidth indicator (đo độ rộng BB) giúp nhận diện Squeeze bằng con số cụ thể thay vì bằng mắt. Khi Bandwidth giảm xuống mức thấp nhất trong 120 chu kỳ → Squeeze rất mạnh.</p>`,

    78: `<h3>Fibonacci và các công cụ khác</h3><p>Fibonacci hoạt động tốt nhất khi kết hợp với các công cụ phân tích khác. Khi mức Fibo trùng với trendline → confluence mạnh. Khi Fibo trùng với hỗ trợ/kháng cự ngang → tín hiệu cực đáng tin. Khi Fibo trùng với Moving Average quan trọng (EMA 50, 200) → vùng giá cực kỳ ý nghĩa. Trader chuyên nghiệp luôn tìm ít nhất 2-3 yếu tố confluence trước khi vào lệnh.</p>
<p>Fibonacci cũng áp dụng được cho Time analysis (thời gian). Fibonacci Time Extension dự đoán khi nào giá sẽ đạt mục tiêu dựa trên các tỷ lệ thời gian Fibonacci. Tuy nhiên, Time Fibo ít phổ biến hơn Price Fibo và đòi hỏi kinh nghiệm nhiều hơn.</p>
<p>Cuối cùng, Fibonacci Fan là biến thể vẽ các đường trend theo tỷ lệ Fibonacci, tạo ra các vùng support/resistance động. Kết hợp Fan + Retracement cho bức tranh toàn diện nhất về cấu trúc giá.</p>`,

    79: `<h3>Price Action và các trường phái</h3><p>Price Action có nhiều trường phái khác nhau. Al Brooks tập trung vào đọc từng nến chi tiết trên M5 - phương pháp phức tạp nhất. Lance Beggs dùng Price Action theo cấu trúc thị trường (market structure). Sam Seiden kết hợp Price Action với Supply/Demand zone. Nial Fuller đơn giản hóa với chỉ Pin Bar, Engulfing, Inside Bar tại S/R hàng ngày.</p>
<p>Cho người mới, khuyên bắt đầu với phương pháp Nial Fuller vì đơn giản nhất: chỉ cần biểu đồ D1, 3 mô hình nến, và vẽ S/R. Khi đã có nền tảng vững, mở rộng sang Sam Seiden (Supply/Demand) rồi Lance Beggs (Market Structure).</p>`,

    80: `<h3>Drawdown Period - thời gian phục hồi</h3><p>Drawdown không chỉ về % mà còn về THỜI GIAN. Recovery time (thời gian phục hồi) cũng quan trọng ngang drawdown %. Chiến lược A: DD 15%, phục hồi trong 2 tuần. Chiến lược B: DD 10%, nhưng phục hồi mất 3 tháng. Chiến lược A có thể tốt hơn dù DD cao hơn vì phục hồi nhanh.</p>
<p>Underwater Period là thời gian equity nằm dưới đỉnh cao nhất trước đó. Underwater period dài → trader dễ mất kiên nhẫn và bỏ chiến lược. Theo dõi chỉ số này giúp đánh giá chiến lược toàn diện hơn. Một chiến lược tốt nên có underwater period không quá 30 ngày trong điều kiện bình thường.</p>
<p>Calmar Ratio = Annual Return / Max Drawdown. Chỉ số này cho biết mỗi % drawdown mang lại bao nhiêu % lợi nhuận hàng năm. Calmar > 2.0 = xuất sắc, 1.0-2.0 = tốt, dưới 0.5 = cần cải thiện.</p>`,

    81: `<h3>Curve Fitting - bẫy nguy hiểm khi Backtest</h3><p>Curve fitting (quá khớp) xảy ra khi bạn tối ưu chiến lược quá mức trên dữ liệu quá khứ. Kết quả backtest đẹp nhưng trade thật hoàn toàn khác. Dấu hiệu curve fitting: quá nhiều điều kiện và filter, chỉ hoạt động trên 1 cặp tiền cụ thể, win rate quá cao (>80%) trên backtest.</p>
<p>Cách tránh curve fitting: Giữ chiến lược đơn giản (tối đa 3-4 điều kiện), test trên nhiều cặp tiền, chia dữ liệu thành in-sample (để phát triển) và out-of-sample (để kiểm chứng). Nếu kết quả in-sample và out-of-sample tương tự ±15% → chiến lược robust. Nếu chênh lệch lớn → khả năng bị curve fit.</p>
<p>Walk-Forward Analysis là phương pháp chống curve fitting tốt nhất: chia dữ liệu thành nhiều đoạn, optimize trên đoạn 1 → test trên đoạn 2 → optimize trên đoạn 2 → test trên đoạn 3, v.v. Nếu kết quả nhất quán qua nhiều đoạn → chiến lược thật sự hiệu quả.</p>`,

    82: `<h3>Correlation giữa các cặp tiền</h3><p>Hiểu correlation giúp tránh rủi ro kép. EUR/USD và GBP/USD có correlation dương mạnh (~0.80). Nếu bạn mua cả hai cùng lúc, bạn đang gấp đôi rủi ro. EUR/USD và USD/CHF có correlation âm (~-0.90). Mua EUR/USD và bán USD/CHF gần như giống nhau.</p>
<p>Quy tắc an toàn: Không mở lệnh cùng hướng trên 2 cặp tiền có correlation trên 0.70. Nếu muốn đa dạng hóa, chọn cặp tiền ít correlation. Ví dụ: EUR/USD + AUD/JPY có correlation thấp, trade cả hai giúp phân tán rủi ro hiệu quả.</p>`,

    83: `<h3>Tâm lý và Trading Journal</h3><p>Trading Journal là công cụ phát hiện pattern tâm lý tốt nhất. Sau 1 tháng ghi journal, bạn sẽ phát hiện những điều bất ngờ: có thể bạn trade tệ vào thứ Hai (vì tâm lý sau weekend), hoặc luôn revenge trade sau 2 lệnh thua liên tiếp, hoặc trade tốt nhất vào chiều tối (vì tập trung hơn).</p>
<p>Ghi lại "cảm xúc score" (1-10) cho mỗi lệnh rất hữu ích. Phân tích correlation giữa score và kết quả: nếu score 8-10 (quá hưng phấn) liên quan đến lệnh thua → bạn biết mình cần bình tĩnh hơn. Journal biến trading từ "cờ bạc" thành "business có dữ liệu".</p>
<p>Một mẹo nhỏ: Chụp screenshot biểu đồ cho mỗi trade. Hình ảnh giúp bạn review pattern chính xác hơn so với chỉ đọc số. 6 tháng sau nhìn lại, bạn sẽ thấy sự tiến bộ rõ ràng trong cách đọc biểu đồ.</p>`,

    84: `<h3>Chi phí ẩn khi chọn sàn</h3><p>Ngoài spread và commission, còn có các chi phí ẩn cần xem xét: swap (phí qua đêm), slippage (trượt giá khi khớp lệnh), và requote (báo giá lại). IC Markets nổi tiếng ít slippage nhờ hệ thống ECN. Exness có thể bị slippage khi tin tức mạnh nhưng đã cải thiện nhiều.</p>
<p>VPS (Virtual Private Server) cũng là chi phí cần tính. IC Markets cung cấp VPS miễn phí từ 15 lot/tháng. Exness có VPS riêng với điều kiện tương tự. Nếu bạn dùng EA, VPS gần server sàn giúp giảm latency từ 100ms xuống dưới 5ms - điều cực kỳ quan trọng cho scalping EA.</p>`,

    85: `<h3>Tâm lý khi trade tin tức</h3><p>Trade tin tức đòi hỏi tâm lý vững như đá. Giá có thể giật 50 pip trong 1 giây, rồi đảo chiều 100 pip trong phút tiếp theo. Nếu bạn chưa sẵn sàng cho biến động cực độ này, hãy đứng ngoài. FOMO (Fear of Missing Out) là kẻ thù lớn nhất khi trade tin - nhiều trader nhảy vào muộn và bị kẹt ở giá xấu.</p>
<p>Quy tắc vàng: Nếu bạn không có kế hoạch rõ ràng TRƯỚC khi tin ra, đừng trade. Kế hoạch phải bao gồm: sẽ trade cặp nào, hướng nào nếu tin tốt/xấu, entry cụ thể, SL/TP rõ ràng. Viết ra giấy trước 30 phút. Khi tin ra, chỉ cần thực hiện đúng kế hoạch, không suy nghĩ thêm.</p>`
};

async function main() {
    console.log('📝 Bổ sung nội dung cho các bài dưới 900 từ...\n');
    for (const [id, extra] of Object.entries(extras)) {
        const { data: post } = await sb.from('posts').select('content').eq('id', Number(id)).single();
        if (!post) continue;
        let content = post.content;
        // Insert before last Kết luận h2
        const lastH2 = content.lastIndexOf('<h2>');
        if (lastH2 > 0) content = content.slice(0, lastH2) + extra + content.slice(lastH2);
        else content += extra;
        const { error } = await sb.from('posts').update({ content, updated_at: new Date().toISOString() }).eq('id', Number(id));
        const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const words = text.split(' ').filter(w => w.length > 0).length;
        const status = words >= 900 ? '✅' : '⚠️';
        console.log(`${status} ID ${id} → ${words} từ`);
    }
    console.log('\n✅ Done!');
}
main();
