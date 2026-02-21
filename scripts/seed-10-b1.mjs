import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');
const img = (src, alt) => `<figure style="margin:2em 0;text-align:center;"><img src="${src}" alt="${alt}" style="width:100%;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.3);" loading="lazy"/><figcaption style="color:#888;font-size:14px;margin-top:8px;">${alt}</figcaption></figure>`;

async function main() {
    // 1. Sửa tiêu đề bài 66
    await sb.from('posts').update({
        title: 'Khi cháy tài khoản diễn biến tâm lý của trader diễn ra như thế nào',
        meta_title: 'Khi Cháy Tài Khoản: Diễn Biến Tâm Lý Trader Như Thế Nào?',
        updated_at: new Date().toISOString()
    }).eq('id', 66);
    console.log('✅ Đã sửa tiêu đề bài 66\n');

    // 2. Tạo 10 bài mới - Batch 1 (bài 1-5)
    const posts = [
        {
            title: "Mô hình giá Head & Shoulders và Double Top/Bottom",
            slug: "mo-hinh-gia-head-shoulders-double-top",
            category: "kien-thuc",
            tags: ["mô hình giá", "chart patterns", "head and shoulders"],
            excerpt: "Hướng dẫn nhận diện và giao dịch các mô hình giá quan trọng nhất: Head & Shoulders, Double Top, Double Bottom với ví dụ thực tế.",
            meta_title: "Mô Hình Giá Head & Shoulders, Double Top/Bottom | Forex 2026",
            meta_description: "Hướng dẫn chi tiết mô hình Head & Shoulders, Double Top, Double Bottom: cách nhận diện, xác nhận và giao dịch hiệu quả.",
            featured_image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
            scheduled_at: '2026-02-25T01:00:00Z', // 8:00 VN
            content: `<h2>1. Mô hình giá là gì?</h2><p><strong>Mô hình giá (Chart Patterns)</strong> là các hình dạng lặp đi lặp lại trên biểu đồ, phản ánh tâm lý tập thể của thị trường. Khi nhận diện đúng mô hình, bạn có thể dự đoán hướng đi tiếp theo của giá với xác suất cao. Mô hình giá được chia thành 2 loại chính: <strong>mô hình đảo chiều</strong> (reversal) và <strong>mô hình tiếp diễn</strong> (continuation).</p>
${img("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", "Các mô hình giá phổ biến trên biểu đồ Forex")}
<h2>2. Head and Shoulders (Đầu và Vai)</h2><h3>Cấu tạo</h3><p>Mô hình gồm 3 đỉnh: đỉnh giữa cao nhất (Head - Đầu), hai đỉnh hai bên thấp hơn và gần bằng nhau (Shoulders - Vai). Đường nối hai đáy giữa hai vai gọi là <strong>Neckline</strong> (đường viền cổ). Mô hình này báo hiệu xu hướng tăng sắp kết thúc và đảo chiều thành giảm.</p>
<h3>Cách giao dịch</h3><ul><li><strong>Entry:</strong> Chờ giá phá vỡ (break) Neckline với volume lớn → BÁN</li><li><strong>Stop Loss:</strong> Đặt trên vai phải (Right Shoulder)</li><li><strong>Take Profit:</strong> Đo khoảng cách từ Head đến Neckline, chiếu xuống từ điểm break</li><li><strong>Xác nhận:</strong> Volume giảm dần ở Head và Vai phải, tăng mạnh khi break Neckline</li></ul>
<p><strong>Ví dụ:</strong> EUR/USD tạo H&S trên D1 với Head ở 1.1050, Neckline ở 1.0900. Khi phá 1.0900 → Target = 1.0900 - (1.1050 - 1.0900) = <strong>1.0750</strong>. Đây là target rất đáng tin cậy.</p>
<h3>Inverse Head and Shoulders (H&S ngược)</h3><p>Ngược lại với H&S thường, H&S ngược xuất hiện ở cuối xu hướng giảm, báo hiệu đảo chiều thành tăng. Gồm 3 đáy: đáy giữa sâu nhất. Giao dịch: MUA khi giá phá Neckline lên trên.</p>
${img("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "Mô hình Head and Shoulders và target giá")}
<h2>3. Double Top (Hai đỉnh)</h2><p>Double Top xuất hiện khi giá tạo 2 đỉnh gần bằng nhau, không thể phá vỡ mức kháng cự. Đây là tín hiệu xu hướng tăng sắp kết thúc. Khoảng cách giữa 2 đỉnh thường từ 2-8 tuần trên D1.</p>
<ul><li><strong>Entry BÁN:</strong> Khi giá phá đáy giữa 2 đỉnh (Neckline)</li><li><strong>SL:</strong> Trên đỉnh cao nhất</li><li><strong>TP:</strong> Khoảng cách từ đỉnh đến Neckline, chiếu xuống</li></ul>
<h2>4. Double Bottom (Hai đáy)</h2><p>Ngược lại Double Top. Giá tạo 2 đáy gần bằng nhau, không phá vỡ hỗ trợ. Tín hiệu xu hướng giảm kết thúc, sắp tăng. Giao dịch: MUA khi giá phá đỉnh giữa 2 đáy.</p>
<p>Double Bottom được coi là một trong những mô hình đáng tin cậy nhất. Win rate trung bình khoảng 65-70% khi xuất hiện trên D1 hoặc W1.</p>
<h2>5. Triple Top / Triple Bottom</h2><p>Tương tự Double Top/Bottom nhưng có 3 đỉnh/đáy. Mô hình này ít phổ biến hơn nhưng đáng tin cậy hơn. 3 lần test cùng một mức giá mà không phá vỡ → mức đó rất mạnh, và khi bị phá → breakout sẽ rất mạnh.</p>
${img("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "Double Top và Double Bottom trên biểu đồ thực")}
<h2>6. Sai lầm phổ biến</h2><ul><li><strong>Vào lệnh quá sớm:</strong> Luôn chờ Neckline bị phá trước. Nhiều mô hình "giả" không hoàn thành</li><li><strong>Không kiểm tra volume:</strong> Mô hình không có volume xác nhận thường fail</li><li><strong>Dùng trên timeframe quá nhỏ:</strong> H&S trên M5 gần như vô giá trị. Tối thiểu H4, lý tưởng D1</li><li><strong>Bỏ qua xu hướng lớn:</strong> H&S bearish trong uptrend lớn → có thể chỉ là pullback nhỏ</li></ul>
<h2>7. Kết luận</h2><p>Head & Shoulders và Double Top/Bottom là những mô hình đáng tin cậy nhất. Hãy tập nhận diện trên biểu đồ quá khứ, ghi lại ít nhất 20 ví dụ mỗi loại. Khi thấy mô hình "hiện rõ" mà không cần cố tìm → đó là lúc bạn đã thành thạo.</p>`
        },
        {
            title: "Cách vẽ Trendline đúng và giao dịch theo xu hướng",
            slug: "cach-ve-trendline-giao-dich-xu-huong",
            category: "kien-thuc",
            tags: ["trendline", "xu hướng", "phân tích kỹ thuật"],
            excerpt: "Hướng dẫn vẽ trendline đúng cách, phân biệt uptrend/downtrend, chiến lược bounce và breakout với trendline.",
            meta_title: "Cách Vẽ Trendline Đúng | Giao Dịch Theo Xu Hướng Forex 2026",
            meta_description: "Hướng dẫn vẽ trendline chuẩn xác trong Forex: quy tắc 2 điểm, chiến lược bounce và breakout trendline cho trader.",
            featured_image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
            scheduled_at: '2026-02-25T09:00:00Z', // 16:00 VN
            content: `<h2>1. Trendline là gì?</h2><p><strong>Trendline</strong> (đường xu hướng) là đường nối các đỉnh hoặc đáy có ý nghĩa trên biểu đồ, giúp xác định hướng đi chủ đạo của giá. Trendline là công cụ phân tích kỹ thuật <strong>cơ bản nhất nhưng hiệu quả nhất</strong>, được sử dụng bởi cả retail trader và institutional trader.</p>
<p>Có 2 loại trendline: <strong>Uptrend line</strong> (đường xu hướng tăng) nối các Higher Lows, và <strong>Downtrend line</strong> (đường xu hướng giảm) nối các Lower Highs.</p>
${img("https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80", "Trendline trên biểu đồ Forex thực tế")}
<h2>2. Quy tắc vẽ Trendline đúng</h2><h3>Quy tắc 1: Cần ít nhất 2 điểm</h3><p>Trendline hợp lệ cần ít nhất 2 điểm touch (chạm). 3 điểm touch → trendline rất đáng tin. 4+ điểm → trendline cực mạnh. Mỗi lần giá chạm trendline và bounce → trendline được "xác nhận" thêm.</p>
<h3>Quy tắc 2: Dùng bóng nến (wicks)</h3><p>Có 2 trường phái: vẽ qua đuôi nến (wicks) và vẽ qua thân nến (bodies). Phổ biến nhất là vẽ qua đuôi nến vì đó là giá thực tế đã giao dịch. Tuy nhiên, nếu đuôi nến quá dài, có thể dùng thân nến.</p>
<h3>Quy tắc 3: Không "ép" trendline</h3><p>Trendline tốt nhất là trendline bạn nhìn thấy ngay lập tức, không cần zoom hay điều chỉnh nhiều. Nếu phải "ép" đường qua nhiều điểm → trendline đó không tự nhiên, không đáng tin.</p>
<h2>3. Chiến lược giao dịch với Trendline</h2><h3>Chiến lược 1: Trendline Bounce</h3><ul><li>Khi giá hồi về trendline uptrent → tìm tín hiệu MUA (Pin Bar, Engulfing)</li><li>SL: Đặt dưới trendline 10-20 pip</li><li>TP: Đỉnh cao nhất gần nhất hoặc R:R 1:2</li><li>Xác suất cao hơn khi trendline đã được test 2+ lần</li></ul>
${img("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80", "Chiến lược Trendline Bounce - mua tại đường xu hướng")}
<h3>Chiến lược 2: Trendline Breakout</h3><ul><li>Khi giá phá vỡ trendline có volume lớn → xu hướng đang thay đổi</li><li>Chờ pullback test lại trendline đã phá (đường hỗ trợ thành kháng cự)</li><li>Vào lệnh tại pullback với SL ngắn. TP: Support/Resistance tiếp theo</li></ul>
<h3>Chiến lược 3: Channel Trading</h3><p>Vẽ 2 trendline song song (1 nối đáy, 1 nối đỉnh) tạo thành Channel (kênh giá). Mua tại trendline dưới, bán tại trendline trên. Channel trading hiệu quả nhất trong thị trường trending rõ ràng.</p>
<h2>4. Trendline trên nhiều Timeframe</h2><p>Trendline trên W1 và D1 mạnh nhất - giá phản ứng rõ ràng. Trendline trên H4 phù hợp day trading. Trendline trên H1 trở xuống chỉ dùng cho scalping và dễ bị phá vỡ.</p>
<p><strong>Multi-TF approach:</strong> Vẽ trendline trên D1 để xác định big picture. Zoom vào H4 để tìm điểm entry chính xác. Khi trendline D1 trùng với H4 → tín hiệu rất mạnh.</p>
${img("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", "Channel Trading - giao dịch trong kênh giá")}
<h2>5. Sai lầm phổ biến</h2><ul><li><strong>Vẽ quá nhiều trendline:</strong> Chỉ vẽ 2-3 trendline quan trọng nhất, không biến biểu đồ thành "mạng nhện"</li><li><strong>Cố giữ trendline đã phá:</strong> Khi trendline bị phá → xóa và vẽ mới theo cấu trúc mới</li><li><strong>Không chờ pullback:</strong> Trade breakout mà không chờ retest → dễ bị fakeout</li></ul>
<h2>6. Kết luận</h2><p>Trendline đơn giản nhưng cực kỳ hiệu quả. Trader chỉ dùng Trendline + S/R + Price Action đã có thể giao dịch có lợi nhuận ổn định. Đừng phức tạp hóa - giữ biểu đồ sạch sẽ và tập trung vào trendline rõ ràng nhất.</p>`
        },
        {
            title: "MT4 vs MT5: nên chọn nền tảng giao dịch nào?",
            slug: "mt4-vs-mt5-nen-tang-giao-dich",
            category: "kien-thuc",
            tags: ["MT4", "MT5", "nền tảng giao dịch"],
            excerpt: "So sánh MT4 và MT5 chi tiết: giao diện, tính năng, indicator, EA, và lý do tại sao nhiều trader vẫn dùng MT4 dù MT5 mới hơn.",
            meta_title: "MT4 vs MT5: So Sánh Nền Tảng Giao Dịch Forex 2026",
            meta_description: "So sánh chi tiết MT4 và MT5: tính năng, giao diện, indicator, Expert Advisor. Hướng dẫn chọn nền tảng phù hợp.",
            featured_image: "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
            scheduled_at: '2026-02-26T01:00:00Z', // 8:00 VN
            content: `<h2>1. MT4 và MT5 là gì?</h2><p><strong>MetaTrader 4 (MT4)</strong> và <strong>MetaTrader 5 (MT5)</strong> là hai nền tảng giao dịch phổ biến nhất thế giới, phát triển bởi MetaQuotes Software. MT4 ra mắt năm 2005, MT5 ra mắt năm 2010. Dù MT5 mới hơn, MT4 vẫn được đa số trader Forex ưa chuộng. Tại sao? Hãy cùng phân tích.</p>
${img("https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80", "Giao diện MetaTrader 4 và MetaTrader 5")}
<h2>2. Bảng so sánh tổng quan</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5em 0;"><thead style="background:rgba(59,130,246,0.1);"><tr><th style="padding:12px;text-align:left;border-bottom:2px solid rgba(255,255,255,0.1);">Tiêu chí</th><th style="padding:12px;text-align:left;border-bottom:2px solid rgba(255,255,255,0.1);">MT4</th><th style="padding:12px;text-align:left;border-bottom:2px solid rgba(255,255,255,0.1);">MT5</th></tr></thead><tbody><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Năm ra mắt</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">2005</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">2010</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Timeframes</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">9</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">21</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Indicators mặc định</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">30</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">38</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Loại lệnh chờ</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">4</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">6</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Ngôn ngữ lập trình</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">MQL4</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">MQL5</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Hedging</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Có</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Có (từ 2016)</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Depth of Market</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Không</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Có</td></tr><tr><td style="padding:12px;">Economic Calendar</td><td style="padding:12px;">Không</td><td style="padding:12px;">Có (tích hợp)</td></tr></tbody></table>
<h2>3. Ưu điểm MT4</h2><ul><li><strong>Đơn giản, dễ dùng:</strong> Giao diện trực quan, người mới học nhanh trong 1-2 ngày</li><li><strong>Kho EA/Indicator khổng lồ:</strong> 20+ năm → hàng triệu EA và indicator miễn phí/trả phí</li><li><strong>Nhẹ, chạy mượt:</strong> Yêu cầu phần cứng thấp, chạy tốt trên PC cấu hình yếu</li><li><strong>Cộng đồng lớn:</strong> Dễ tìm hướng dẫn, support, và script sẵn bằng tiếng Việt</li></ul>
<h2>4. Ưu điểm MT5</h2><ul><li><strong>21 timeframes:</strong> Thêm M2, M3, M4, M6, M10, M12, H2, H3, H6, H8, H12 - linh hoạt hơn nhiều</li><li><strong>Strategy Tester nâng cao:</strong> Multi-currency testing, multi-thread - backtest nhanh hơn 5-10x</li><li><strong>Depth of Market (DOM):</strong> Xem orderbook, biết volume bid/ask tại từng mức giá</li><li><strong>Economic Calendar tích hợp:</strong> Không cần mở Forex Factory riêng</li><li><strong>MQL5 mạnh hơn:</strong> Ngôn ngữ lập trình hướng đối tượng, code sạch hơn</li></ul>
${img("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "Depth of Market và Economic Calendar trên MT5")}
<h2>5. Khi nào chọn MT4?</h2><ul><li>Bạn mới bắt đầu trade Forex → MT4 dễ học hơn</li><li>Bạn dùng EA cũ viết bằng MQL4 → Không tương thích MT5</li><li>Bạn chỉ trade Forex (không trade stocks, futures)</li><li>PC cấu hình yếu hoặc RAM ít</li></ul>
<h2>6. Khi nào chọn MT5?</h2><ul><li>Bạn cần timeframe đặc biệt (M6, H2, H8...)</li><li>Bạn cần backtest nhanh và chính xác hơn</li><li>Bạn muốn trade đa thị trường (Forex + Stocks + Crypto)</li><li>Bạn viết EA mới → MQL5 mạnh và tương lai hơn</li></ul>
${img("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", "So sánh giao diện MT4 và MT5 trên mobile")}
<h2>7. Kết luận</h2><p>Nếu chỉ trade Forex và muốn đơn giản → <strong>MT4</strong> vẫn là lựa chọn tốt nhất. Nếu cần tính năng nâng cao, backtest mạnh, và sẵn sàng cho tương lai → <strong>MT5</strong>. MetaQuotes đã ngừng cập nhật MT4 nên về lâu dài, MT5 sẽ là tiêu chuẩn. Hãy bắt đầu với MT4 rồi chuyển sang MT5 khi sẵn sàng.</p>`
        },
        {
            title: "Chiến lược Breakout Trading: cách giao dịch phá vỡ hiệu quả",
            slug: "chien-luoc-breakout-trading-forex",
            category: "kien-thuc",
            tags: ["breakout", "chiến lược", "phá vỡ"],
            excerpt: "Hướng dẫn chiến lược Breakout Trading từ A-Z: cách nhận diện, xác nhận breakout thật, tránh false breakout và quản lý lệnh.",
            meta_title: "Chiến Lược Breakout Trading Forex | Hướng Dẫn Chi Tiết 2026",
            meta_description: "Chiến lược Breakout Trading: cách nhận diện breakout thật, tránh fakeout, entry point, SL/TP và quản lý rủi ro.",
            featured_image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
            scheduled_at: '2026-02-26T09:00:00Z', // 16:00 VN
            content: `<h2>1. Breakout Trading là gì?</h2><p><strong>Breakout Trading</strong> là chiến lược giao dịch khi giá phá vỡ một mức hỗ trợ/kháng cự quan trọng, trendline, hoặc vùng consolidation (tích lũy). Khi breakout xảy ra với volume lớn, giá thường di chuyển mạnh theo hướng phá vỡ, tạo cơ hội lợi nhuận lớn trong thời gian ngắn.</p>
<p>Breakout là một trong những chiến lược phổ biến nhất vì <strong>tín hiệu rõ ràng và dễ thực hiện</strong>. Tuy nhiên, false breakout (phá vỡ giả) là thách thức lớn nhất mà trader cần vượt qua.</p>
${img("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80", "Breakout phá vỡ kháng cự với volume tăng mạnh")}
<h2>2. Các loại Breakout</h2><h3>Horizontal Breakout (Phá vỡ ngang)</h3><p>Giá phá vỡ mức hỗ trợ/kháng cự ngang. Đây là loại phổ biến nhất. Ví dụ: EUR/USD sideway trong range 1.0800-1.0900 rồi breakout lên trên 1.0900.</p>
<h3>Trendline Breakout</h3><p>Giá phá vỡ đường trendline. Thường báo hiệu đảo chiều xu hướng. Khi uptrend line bị phá → xu hướng tăng kết thúc.</p>
<h3>Chart Pattern Breakout</h3><p>Giá phá vỡ Neckline của Head & Shoulders, Triangle, Flag, Wedge... Mỗi mô hình có target cụ thể.</p>
<h2>3. Cách nhận diện Breakout thật</h2><ul><li><strong>Volume tăng mạnh:</strong> Breakout thật luôn kèm volume tăng 50-200% so với trung bình. Volume thấp → khả năng false breakout cao</li><li><strong>Nến breakout mạnh:</strong> Nến Marubozu hoặc nến thân dài, đóng xa khỏi mức bị phá → mạnh. Nến nhỏ, bóng dài → yếu</li><li><strong>Thời gian tích lũy:</strong> Giá sideway càng lâu → breakout càng mạnh. Tích lũy 2 tuần rồi breakout sẽ mạnh hơn tích lũy 2 ngày</li><li><strong>Context:</strong> Breakout theo hướng xu hướng lớn → đáng tin hơn. Ví dụ: breakout lên trong uptrend D1</li></ul>
${img("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", "So sánh Breakout thật và False Breakout")}
<h2>4. Chiến lược giao dịch Breakout</h2><h3>Chiến lược 1: Trade Breakout cùng lúc</h3><ul><li>Đặt lệnh Buy Stop trên kháng cự hoặc Sell Stop dưới hỗ trợ</li><li>Khi giá breakout, lệnh tự kích hoạt</li><li>SL: Đặt phía đối diện của vùng consolidation</li><li>TP: Chiều cao vùng consolidation × 1-2</li></ul>
<h3>Chiến lược 2: Chờ Pullback (Khuyên dùng)</h3><ul><li>Chờ giá breakout → không vào ngay</li><li>Đợi giá pullback (hồi lại) test mức vừa phá</li><li>Tìm tín hiệu Price Action tại vùng pullback → Entry</li><li>SL ngắn hơn, R:R tốt hơn so với trade ngay</li></ul>
<h2>5. False Breakout và cách tránh</h2><p>False breakout xảy ra khoảng 40-50% lần. Để giảm tỷ lệ bị fakeout:</p><ul><li>Chờ nến đóng cửa ngoài mức phá vỡ (không vào bằng lệnh pending)</li><li>Kiểm tra volume - false breakout thường kèm volume thấp</li><li>Dùng ATR (Average True Range) filter: breakout phải lớn hơn 1.5× ATR</li><li>Trade theo xu hướng lớn: breakout ngược xu hướng thường fail</li></ul>
${img("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", "Pullback sau breakout - điểm entry lý tưởng")}
<h2>6. Kết luận</h2><p>Breakout Trading là chiến lược mạnh mẽ khi kết hợp đúng với volume, context, và quản lý rủi ro. Chiến lược chờ pullback an toàn hơn trade ngay tại breakout. Luôn dùng SL chặt chẽ vì false breakout phổ biến.</p>`
        },
        {
            title: "Forex vs Chứng khoán: nên đầu tư thị trường nào?",
            slug: "forex-vs-chung-khoan-dau-tu-thi-truong-nao",
            category: "kien-thuc",
            tags: ["Forex", "chứng khoán", "so sánh"],
            excerpt: "So sánh Forex và chứng khoán Việt Nam: vốn, thời gian, rủi ro, lợi nhuận, tính thanh khoản. Phân tích giúp bạn chọn thị trường phù hợp.",
            meta_title: "Forex vs Chứng Khoán: Nên Đầu Tư Thị Trường Nào? 2026",
            meta_description: "So sánh Forex và chứng khoán Việt Nam chi tiết: vốn, thời gian, rủi ro, đòn bẩy, thanh khoản. Chọn thị trường phù hợp.",
            featured_image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
            scheduled_at: '2026-02-27T01:00:00Z', // 8:00 VN
            content: `<h2>1. Tổng quan hai thị trường</h2><p>Forex (Foreign Exchange) là thị trường trao đổi ngoại tệ với volume giao dịch <strong>$7.5 nghìn tỷ/ngày</strong> - lớn nhất thế giới. Chứng khoán Việt Nam (VN-Index) giao dịch khoảng <strong>$500-800 triệu/ngày</strong>. Hai thị trường phục vụ mục đích và đối tượng khác nhau.</p>
${img("https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80", "Forex và chứng khoán - hai thị trường tài chính lớn")}
<h2>2. Bảng so sánh chi tiết</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5em 0;"><thead style="background:rgba(59,130,246,0.1);"><tr><th style="padding:12px;text-align:left;border-bottom:2px solid rgba(255,255,255,0.1);">Tiêu chí</th><th style="padding:12px;text-align:left;border-bottom:2px solid rgba(255,255,255,0.1);">Forex</th><th style="padding:12px;text-align:left;border-bottom:2px solid rgba(255,255,255,0.1);">Chứng khoán VN</th></tr></thead><tbody><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Vốn tối thiểu</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">$1-100</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">500K-1 triệu VNĐ</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Đòn bẩy</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">1:100 - 1:Unlimited</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">1:1 (margin 1:2.5)</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Thời gian giao dịch</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">24/5 (Thứ 2-6)</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">9:00-15:00 T2-T6</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Short selling</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Tự do</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Hạn chế</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Phí giao dịch</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Spread (rất thấp)</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">0.15-0.25% + thuế 0.1%</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Tính pháp lý VN</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Chưa được luật hóa</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Hợp pháp, quản lý bởi UBCKNN</td></tr><tr><td style="padding:12px;">Thanh khoản</td><td style="padding:12px;">Cực cao</td><td style="padding:12px;">Trung bình-Cao (blue chips)</td></tr></tbody></table>
<h2>3. Ưu điểm Forex</h2><ul><li><strong>Vốn nhỏ:</strong> Chỉ cần $50-100 là bắt đầu được</li><li><strong>24/5:</strong> Trade bất cứ lúc nào, phù hợp người đi làm</li><li><strong>Short selling tự do:</strong> Kiếm tiền cả khi giá giảm</li><li><strong>Thanh khoản cực cao:</strong> Không bao giờ bị "kẹt" lệnh</li><li><strong>Phí thấp:</strong> Spread chỉ 0.1-1 pip, không thuế giao dịch</li></ul>
<h2>4. Ưu điểm Chứng khoán VN</h2><ul><li><strong>Hợp pháp:</strong> Được nhà nước quản lý, có quy định rõ ràng</li><li><strong>Đầu tư dài hạn:</strong> Cổ phiếu tốt tăng trưởng 15-30%/năm + cổ tức</li><li><strong>Ít đòn bẩy:</strong> Rủi ro cháy tài khoản thấp hơn nhiều</li><li><strong>Nhiều thông tin:</strong> Báo chí, phân tích bằng tiếng Việt phong phú</li><li><strong>Tài sản thực:</strong> Sở hữu một phần doanh nghiệp thật</li></ul>
${img("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80", "Giao diện giao dịch chứng khoán và Forex")}
<h2>5. Rủi ro cần lưu ý</h2><h3>Rủi ro Forex</h3><p>Đòn bẩy cao = rủi ro mất vốn nhanh. 90% trader Forex thua lỗ. Chưa có luật bảo vệ nhà đầu tư tại VN. Nhiều sàn lừa đảo.</p>
<h3>Rủi ro Chứng khoán</h3><p>Biến động mạnh khi thị trường bear. Cổ phiếu có thể mất giá 50-80%. Thông tin bất đối xứng - insider trading vẫn tồn tại.</p>
<h2>6. Ai nên chọn thị trường nào?</h2><ul><li><strong>Chọn Forex nếu:</strong> Bạn có ít vốn ($50-500), muốn trade ngắn hạn, linh hoạt thời gian, chấp nhận rủi ro cao</li><li><strong>Chọn Chứng khoán nếu:</strong> Bạn muốn đầu tư dài hạn, an toàn pháp lý, có vốn từ 10 triệu trở lên, muốn sở hữu tài sản thực</li><li><strong>Cả hai:</strong> Nhiều nhà đầu tư dùng chứng khoán cho dài hạn và Forex cho ngắn hạn. Đa dạng hóa portfolio giúp giảm rủi ro tổng thể</li></ul>
${img("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "Đa dạng hóa danh mục đầu tư")}
<h2>7. Kết luận</h2><p>Không có thị trường nào "tốt hơn" - chỉ có thị trường phù hợp hơn với bạn. Nếu bạn đang đọc bài này và chưa có kinh nghiệm, khuyên bắt đầu với chứng khoán VN vì an toàn và hợp pháp hơn. Khi đã có nền tảng tài chính, có thể thử Forex với vốn nhỏ.</p>`
        }];

    // Schedule and insert
    for (const post of posts) {
        const schedAt = post.scheduled_at;
        delete post.scheduled_at;
        const { data, error } = await sb.from('posts').insert([{
            ...post, author: 'Sàn Uy Tín',
            is_published: false,
            published_at: schedAt,
            scheduled_at: schedAt,
            featured_image_alt: post.title,
        }]).select('id').single();
        const d = new Date(schedAt);
        const vn = d.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
        if (error) console.log('❌ ' + post.title + ': ' + error.message);
        else console.log(`⏰ ${vn} | [${data.id}] ${post.title}`);
    }
    console.log('\n✅ Batch 1 done (5/10)!');
}
main();
