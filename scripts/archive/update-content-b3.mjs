import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');
const img = (src, alt) => `<figure style="margin:2em 0;text-align:center;"><img src="${src}" alt="${alt}" style="width:100%;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.3);" loading="lazy"/><figcaption style="color:#888;font-size:14px;margin-top:8px;">${alt}</figcaption></figure>`;

const updates = {
    73: {
        extra: `${img("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", "Xác định vùng hỗ trợ kháng cự trên biểu đồ")}
<h2>Chiến lược giao dịch với S/R</h2>
<h3>Cách vẽ S/R đúng cách</h3>
<p>Hỗ trợ/kháng cự không phải một đường chính xác mà là một <strong>VÙNG</strong>. Khi vẽ S/R, hãy dùng vùng (zone) thay vì đường kẻ. Vẽ trên timeframe lớn (D1, W1) trước, sau đó zoom vào timeframe nhỏ hơn.</p>
<p>Một vùng S/R mạnh khi: giá đã bounce từ đó ít nhất 2-3 lần, thời gian entre các lần bounce càng dài → vùng càng quan trọng, và volume tăng đáng kể khi giá đến vùng đó.</p>
<h3>Support trở thành Resistance và ngược lại</h3>
<p>Khi giá phá vỡ (breakout) một vùng hỗ trợ, vùng đó thường biến thành kháng cự mới. Tương tự, khi kháng cự bị phá, nó trở thành hỗ trợ. Đây gọi là hiện tượng <strong>Role Reversal</strong> (đảo vai trò) - một trong những nguyên tắc quan trọng nhất.</p>
${img("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "Ví dụ Role Reversal - hỗ trợ thành kháng cự")}
<h3>Chiến lược Bounce (Bật lại)</h3>
<ul><li>Chờ giá đến vùng S/R mạnh trên D1/H4</li><li>Zoom vào H1 tìm xác nhận: nến Pin Bar, Engulfing hoặc mô hình đảo chiều</li><li>Vào lệnh tại vùng S/R khi có xác nhận</li><li>SL đặt dưới/trên vùng S/R. TP tại vùng S/R tiếp theo</li></ul>
<h3>Chiến lược Breakout (Phá vỡ)</h3>
<ul><li>Giá tiến đến vùng S/R và phá vỡ kèm volume lớn</li><li>Chờ pullback (hồi lại) test vùng S/R đã phá → Role Reversal</li><li>Vào lệnh tại vùng pullback khi giá cho nến xác nhận</li><li>SL đặt ở phía đối diện của vùng. TP = 2× khoảng cách SL hoặc vùng S/R kế</li></ul>` },

    74: {
        extra: `${img("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80", "Bảng phí swap các cặp tiền phổ biến")}
<h2>Bảng swap tham khảo</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5em 0;"><thead style="background:rgba(59,130,246,0.1);"><tr><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Cặp tiền</th><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Swap Long</th><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Swap Short</th><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Triple Swap</th></tr></thead><tbody><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">EUR/USD</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">-$6.5</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">+$1.2</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Thứ 4</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">GBP/USD</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">-$5.8</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">+$0.8</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Thứ 4</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">USD/JPY</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">+$4.5</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">-$8.2</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Thứ 4</td></tr><tr><td style="padding:12px;">XAU/USD</td><td style="padding:12px;">-$15.0</td><td style="padding:12px;">+$5.0</td><td style="padding:12px;">Thứ 4</td></tr></tbody></table>
<p><strong>Lưu ý:</strong> Swap thay đổi hàng ngày tùy chính sách lãi suất các ngân hàng trung ương. Bảng trên chỉ mang tính tham khảo.</p>
<h3>Triple Swap là gì?</h3>
<p>Vào ngày thứ 4 (Wednesday), swap được tính gấp 3 lần (Triple Swap) để bù cho 2 ngày cuối tuần thứ 7 và Chủ nhật khi thị trường đóng cửa. Nếu bạn giữ lệnh qua đêm thứ 4, hãy chuẩn bị cho chi phí swap × 3.</p>
${img("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", "Tài khoản Islamic không tính swap")}
<h3>Cách tránh/giảm phí Swap</h3>
<ul><li><strong>Tài khoản Swap-Free (Islamic):</strong> Exness, XM đều cung cấp tài khoản không tính swap. Phù hợp cho swing trader giữ lệnh nhiều ngày. Tuy nhiên, một số sàn sẽ tính phí admin thay thế sau 3-5 ngày.</li>
<li><strong>Đóng lệnh trước rollover:</strong> Rollover time thường là 00:00 server. Đóng lệnh trước giờ này nếu swap âm quá lớn.</li>
<li><strong>Carry Trade:</strong> Mở lệnh theo hướng có swap dương. Ví dụ: Buy USD/JPY khi swap long dương.</li>
<li><strong>Scalping/Day Trading:</strong> Không giữ lệnh qua đêm = không trả swap.</li></ul>` },

    75: {
        extra: `${img("https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80", "Giao diện Copy Trade trên Exness")}
<h2>Các nền tảng Copy Trade phổ biến</h2>
<h3>1. Exness Social Trading</h3>
<p>Nền tảng copy trade của Exness cho phép tìm và theo dõi Strategy Provider (nhà cung cấp chiến lược). Bạn xem lịch sử giao dịch, drawdown, lợi nhuận rồi quyết định có copy hay không. Phí: Strategy Provider tính 0-50% lợi nhuận.</p>
<h3>2. ZuluTrade</h3>
<p>Nền tảng copy trade lâu đời, hỗ trợ nhiều sàn. Hệ thống ranking và đánh giá trader rõ ràng. Phí: spread markup nhỏ.</p>
<h3>3. MQL5 Signals</h3>
<p>Tích hợp trực tiếp trong MT4/MT5. Đăng ký signal rồi tự động copy. Phí: $20-50/tháng tùy trader.</p>
${img("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "Chọn trader để copy - các chỉ số quan trọng")}
<h3>Cách chọn trader để Copy</h3>
<ul><li><strong>Lịch sử ít nhất 6 tháng:</strong> Đừng copy trader mới 1-2 tháng, chưa đủ data</li><li><strong>Drawdown dưới 30%:</strong> Max Drawdown trên 30% = quá rủi ro</li><li><strong>Lợi nhuận ổn định:</strong> Hơn 5-10%/tháng đều đặn thay vì 100% rồi cháy tài khoản</li><li><strong>Số lệnh đủ lớn:</strong> Ít nhất 100 lệnh để thống kê có ý nghĩa</li><li><strong>Có Stop Loss:</strong> Trader không dùng SL = tấm vé một chiều đến cháy tài khoản</li></ul>
<h3>Rủi ro của Copy Trade</h3>
<p>Copy trade KHÔNG phải "tiền rơi từ trên trời". Rủi ro bao gồm: trader bị thua lỗ (bạn cũng thua), slippage khi copy (giá vào có thể khác), và phí commission ăn vào lợi nhuận. Luôn bắt đầu với số tiền nhỏ và theo dõi ít nhất 1 tháng trước khi tăng vốn.</p>` },

    76: {
        extra: `${img("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", "So sánh nền tảng Vantage và Exness")}
<h2>So sánh chi tiết Vantage vs Exness</h2>
<h3>Về Nền tảng giao dịch</h3>
<p><strong>Vantage:</strong> Hỗ trợ MT4, MT5, ProTrader (dựa trên TradingView), và app mobile. ProTrader có giao diện hiện đại, nhiều công cụ phân tích.</p>
<p><strong>Exness:</strong> MT4, MT5, Exness Terminal (web-based), và app di động. Exness Terminal đơn giản, phù hợp người mới.</p>
<h3>Về phí giao dịch</h3>
<p>Cả hai đều có tài khoản Raw Spread với spread từ 0.0 pip. Vantage tính $3/lot/side (~$6/lot round turn). Exness tính $3.5/lot/side (~$7/lot round turn). Vantage nhỉnh hơn về phí.</p>
${img("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "Bảng so sánh phí giao dịch Vantage vs Exness")}
<h3>Về nạp/rút tiền VN</h3>
<p><strong>Exness:</strong> Ưu thế tuyệt đối - ngân hàng nội địa, ví điện tử, rút tiền TỨC THÌ. Đây là lý do chính trader Việt Nam chọn Exness.</p>
<p><strong>Vantage:</strong> Hỗ trợ ngân hàng, Skrill, Neteller, crypto. Rút tiền 1-3 ngày. Không nhanh bằng Exness nhưng đa dạng phương thức hơn.</p>
<h3>Ai nên chọn sàn nào?</h3>
<ul><li><strong>Chọn Vantage:</strong> Trader cần ProTrader (TradingView), muốn phí thấp hơn, trade volume lớn, hoặc tham gia chương trình Active Trader (giảm phí khi trade nhiều)</li>
<li><strong>Chọn Exness:</strong> Trader Việt Nam cần nạp/rút nhanh, vốn nhỏ (tháp nhất $1), cần hỗ trợ tiếng Việt 24/7, hoặc muốn đòn bẩy không giới hạn</li></ul>` },

    77: {
        extra: `${img("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80", "Chiến lược Bollinger Squeeze trên biểu đồ thực")}
<h2>Ví dụ giao dịch thực tế với Bollinger Bands</h2>
<h3>Case Study: EUR/USD - Squeeze Breakout</h3>
<p>Ngày 5/2/2026, Bollinger Bands trên biểu đồ H4 EUR/USD bắt đầu bóp hẹp sau 3 ngày sideway. Bandwidth giảm xuống mức thấp nhất trong 20 ngày. Đây là tín hiệu Squeeze điển hình.</p>
<p>Ngày 7/2, giá breakout lên trên dải trên kèm nến Marubozu mạnh. Volume tăng 200% so với trung bình. Đây là tín hiệu vào lệnh MUA rõ ràng. Entry: 1.0780, SL: 1.0740 (dải dưới), TP: 1.0860 (R:R = 1:2). Kết quả: TP hit sau 2 ngày. Lợi nhuận +80 pip.</p>
${img("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", "Kết hợp Bollinger Bands với RSI")}
<h3>Bài tập thực hành</h3>
<ul><li>Mở TradingView, chọn EUR/USD khung H4</li><li>Thêm Bollinger Bands (20, 2) và RSI (14)</li><li>Tìm 5 ví dụ Squeeze Breakout trong 3 tháng gần nhất</li><li>Ghi lại: Entry, SL, TP, kết quả cho mỗi trade</li><li>Tính Win Rate và R:R trung bình</li></ul>
<p>Đây là cách tốt nhất để nắm vững Bollinger Bands trước khi áp dụng tiền thật. Hãy dành ít nhất 1 tuần làm bài tập này trên tài khoản demo.</p>` },

    78: {
        extra: `${img("https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80", "Fibonacci Extension và các mức mở rộng")}
<h2>Fibonacci Extension</h2>
<p>Ngoài Retracement, Fibonacci Extension giúp xác định <strong>mục tiêu chốt lời</strong>. Các mức Extension quan trọng: 127.2%, 161.8%, 261.8%.</p>
<h3>Cách dùng Fibonacci Extension</h3>
<ul><li>Áp dụng sau khi giá hoàn thành pullback và tiếp tục xu hướng</li><li>Mức 127.2% - TP1 (Take Profit đầu tiên)</li><li>Mức 161.8% - TP2 (Target chính)</li><li>Mức 261.8% - TP3 (Target mở rộng, chỉ đạt trong xu hướng mạnh)</li></ul>
${img("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "Ví dụ thực tế vẽ Fibonacci trên TradingView")}
<h3>Fibonacci Confluence Zone</h3>
<p>Khi bạn vẽ Fibonacci từ nhiều swing khác nhau và các mức trùng nhau, đó là <strong>Confluence Zone</strong> - vùng giá cực kỳ mạnh. Ví dụ: Fibo 61.8% từ swing lớn trùng với Fibo 38.2% từ swing nhỏ → vùng này là support/resistance tuyệt vời.</p>
<h3>Ví dụ thực tế</h3>
<p>GBP/USD khung D1: Giá tăng từ 1.2400 (Swing Low) lên 1.2800 (Swing High). Vẽ Fibo → Mức 50% = 1.2600, Mức 61.8% = 1.2553. Giá pullback về 1.2560 (gần 61.8%) rồi tạo Pin Bar bullish → Entry MUA tại 1.2570, SL dưới 78.6% = 1.2486, TP tại đỉnh cũ 1.2800. R:R = 1:2.7 - setup tuyệt vời.</p>` },

    79: {
        extra: `${img("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", "Ví dụ Pin Bar tại vùng hỗ trợ trên biểu đồ D1")}
<h2>Ví dụ Price Action thực chiến</h2>
<h3>Trade 1: Pin Bar Rejection tại Support</h3>
<p>EUR/USD D1: Giá giảm về vùng hỗ trợ 1.0750 - vùng đã bounce 3 lần trước đó. Tại đây xuất hiện <strong>Bullish Pin Bar</strong> với bóng dưới dài gấp 3 lần thân nến. Entry: Buy tại close Pin Bar (1.0785). SL: Dưới bóng Pin Bar (1.0730). TP: Kháng cự tiếp theo (1.0870). R:R = 1:1.5. Kết quả: TP hit sau 3 ngày.</p>
<h3>Trade 2: Bearish Engulfing tại Resistance</h3>
<p>GBP/USD H4: Giá tăng lên vùng kháng cự 1.2650. Nến trước là nến xanh nhỏ, nến sau là nến đỏ LỚN nuốt hoàn toàn nến trước → Bearish Engulfing. Entry: Sell tại close Engulfing. SL: Trên đỉnh Engulfing. TP: Support gần nhất. R:R = 1:2.</p>
${img("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "Engulfing pattern tại vùng kháng cự mạnh")}
<h3>Quy trình Price Action hàng ngày</h3>
<ol><li><strong>7:00 sáng:</strong> Mở biểu đồ D1, xác định xu hướng và đánh dấu S/R quan trọng</li>
<li><strong>14:30:</strong> Trước phiên London, check H4 tìm setup tại S/R đã đánh dấu</li>
<li><strong>15:00-17:00:</strong> Mở cửa London - quan sát Price Action tại S/R. Vào lệnh nếu có mô hình nến xác nhận</li>
<li><strong>20:00:</strong> Mở cửa New York - cơ hội thứ 2 trong ngày</li>
<li><strong>23:00:</strong> Review lệnh, ghi Trading Journal</li></ol>
<p><strong>Lời khuyên cuối:</strong> Price Action cần thời gian luyện tập. Dành ít nhất 3 tháng trade demo chỉ với Pin Bar và Engulfing tại S/R. Khi tỷ lệ thắng trên 50% ổn định → chuyển sang tiền thật với micro lot.</p>` }
};

async function main() {
    console.log('📝 Update bài 73-79 (thêm nội dung + ảnh)...\n');
    for (const [id, upd] of Object.entries(updates)) {
        const { data: post } = await sb.from('posts').select('content').eq('id', Number(id)).single();
        if (!post) { console.log('❌ ID ' + id + ' not found'); continue; }
        let content = post.content;
        const lastH2 = content.lastIndexOf('<h2>');
        if (lastH2 > 0) content = content.slice(0, lastH2) + upd.extra + content.slice(lastH2);
        else content += upd.extra;
        const { error } = await sb.from('posts').update({ content, updated_at: new Date().toISOString() }).eq('id', Number(id));
        if (error) console.log('❌ ID ' + id + ': ' + error.message);
        else {
            const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
            const words = text.split(' ').filter(w => w.length > 0).length;
            const imgs = (content.match(/<img /g) || []).length;
            console.log('✅ ID ' + id + ' → ' + words + ' từ, ' + imgs + ' ảnh');
        }
    }
    console.log('\n✅ Batch done!');
}
main();
