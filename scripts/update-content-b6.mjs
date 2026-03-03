import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const extras = {
    71: `<h3>Weighted Moving Average (WMA)</h3><p>Ngoài SMA và EMA, WMA cũng đáng xem xét. WMA cho trọng số cao hơn cho dữ liệu gần nhất, tương tự EMA nhưng tính toán khác. Trong thực tế, EMA phổ biến hơn WMA vì có mặt trên tất cả nền tảng giao dịch. WMA chủ yếu dùng trong các hệ thống giao dịch tự động (EA) nơi cần tinh chỉnh sensitivity.</p>`,
    74: `<h3>Swap và chiến lược dài hạn</h3><p>Đối với position trader giữ lệnh hàng tuần đến hàng tháng, swap là chi phí đáng kể. Một lệnh Buy EUR/USD 1 lot giữ 30 ngày với swap -$6.5/ngày sẽ mất <strong>$195 phí swap</strong>. Do đó, position trader cần tính swap vào plan trước khi mở lệnh. Nếu swap âm quá lớn, cân nhắc dùng tài khoản swap-free hoặc chuyển sang cặp tiền có swap thấp hơn.</p>`,
    76: `<h3>Kết luận cuối: Thử trước khi chọn</h3><p>Cách tốt nhất là mở tài khoản demo CẢ HAI sàn, trade song song 2 tuần. So sánh: tốc độ khớp lệnh, spread thực tế vào các khung giờ khác nhau, tốc độ nạp/rút tiền, và chất lượng hỗ trợ khách hàng. Kết quả thực tế sẽ cho bạn câu trả lời chính xác hơn bất kỳ bài review nào.</p>`,
    77: `<h3>BB trên nhiều Timeframe</h3><p>Multi-Timeframe BB Analysis: Khi BB Squeeze xuất hiện đồng thời trên H4 và D1, breakout sẽ cực kỳ mạnh. Ngược lại, nếu chỉ Squeeze trên M15 nhưng D1 đang trend mạnh → Squeeze M15 có thể chỉ là "false alarm". Luôn check BB trên timeframe lớn trước để xác nhận context.</p>`,
    78: `<h3>Auto Fibonacci trên TradingView</h3><p>TradingView có indicator "Auto Fib Retracement" tự động vẽ Fibonacci dựa trên swing gần nhất. Tuy nhiên, vẽ thủ công vẫn chính xác hơn vì bạn có thể chọn swing phù hợp nhất. Mẹo: overlay 2-3 Fibonacci từ các swing khác nhau, vùng nào có nhiều mức Fibo trùng nhau → đó là S/R cực mạnh. Đây chính là kỹ thuật Fibonacci Cluster mà institutional trader thường dùng.</p>`,
    79: `<h3>Kết hợp Price Action với Volume</h3><p>Volume xác nhận tính hợp lệ của Price Action. Pin Bar tại S/R nhưng volume thấp → tín hiệu yếu. Pin Bar kèm volume spike → tín hiệu rất mạnh. Engulfing kèm volume cao hơn trung bình 50% → xác suất thắng cao. Trên Forex, volume chỉ là tick volume (không phải real volume), nhưng nghiên cứu cho thấy tick volume correlation với real volume trên 90%.</p>`,
    80: `<h3>Maximum Favorable Excursion (MFE)</h3><p>MFE đo lường mức lợi nhuận lớn nhất mà mỗi lệnh từng đạt được trước khi đóng. Phân tích MFE trong journal giúp tối ưu Take Profit. Nếu nhiều lệnh thắng từng floating +50 pip nhưng TP chỉ +20 pip → bạn đang chốt lời quá sớm. Ngược lại, Maximum Adverse Excursion (MAE) cho biết giá đã đi ngược tối đa bao nhiêu trước khi hit TP. MAE giúp tối ưu Stop Loss: nếu hầu hết lệnh thắng chỉ drawdown tối đa -15 pip, đặt SL -15 pip thay vì -30 pip. Các chỉ số MFE/MAE chỉ có được khi bạn backtest đầy đủ với ít nhất 100 mẫu.</p>`,
    81: `<h3>Automated vs Manual Backtest</h3><p>Manual backtest (dùng Replay) chậm nhưng giúp bạn thực sự "sống" với chiến lược. Bạn cảm nhận được thị trường, thấy những lúc khó khăn, và biết cảm giác khi gặp chuỗi 5 lệnh thua. Automated backtest (dùng Pine Script trên TradingView hoặc EA trên MT4) nhanh, test hàng ngàn lệnh trong vài giây, nhưng không cho bạn trải nghiệm tâm lý. Lời khuyên: bắt đầu manual backtest 100 lệnh trước, sau đó chuyển sang automated để test trên nhiều cặp tiền và timeframe. Kết hợp cả hai cho kết quả toàn diện nhất.</p>`,
    82: `<h3>Lộ trình cho người mới</h3><p>Tháng 1-2: Chỉ trade EUR/USD trên Demo. Học cách đặt lệnh, đọc biểu đồ, và sử dụng 1 chiến lược đơn giản. Tháng 3-4: Thêm GBP/USD hoặc USD/JPY. So sánh đặc điểm và ghi journal. Tháng 5-6: Nếu tỷ lệ thắng ổn định >45% với R:R >1.5:1 trên demo → chuyển sang tiền thật với micro lot. Quan trọng nhất: không vội. Trader vội vàng chuyển tiền thật sau 1-2 tuần demo là nguyên nhân chính khiến 90% trader thua lỗ. Đầu tư 6 tháng học trên demo sẽ save cho bạn hàng ngàn đô trong tương lai.</p>`,
    83: `<h3>Digital Tools cho Journal</h3><p>Ngoài Google Sheets và Notion, có nhiều công cụ journal chuyên biệt. TradeZella tự import lệnh từ MT4/MT5, phân tích setup, và tạo report tự động - giá $29/tháng nhưng tiết kiệm rất nhiều thời gian. Tradervue miễn phí cho 100 trade/tháng, đủ cho hầu hết trader. Nếu dùng Google Sheets, tạo Dashboard với chart P&L theo tuần, Win Rate theo setup, và Drawdown chart. Google Sheets + Google App Script có thể tự động tính toán mọi thứ, gần như thay thế phần mềm trả phí. Template miễn phí có thể tìm trên tradingheroes.com hoặc babypips.com.</p>`,
    84: `<h3>Regulation và bảo vệ nhà đầu tư</h3><p>IC Markets được quản lý bởi ASIC (Australia) - một trong những cơ quan tài chính nghiêm ngặt nhất thế giới. Tiền khách hàng được giữ tách biệt tại ngân hàng National Australia Bank. Exness có FCA (Anh) và CySEC (Síp), cũng là các cơ quan quản lý hàng đầu. Cả hai sàn đều cung cấp bảo hiểm bảo vệ nhà đầu tư, nhưng mức bảo vệ khác nhau tùy entity đăng ký. Trader Việt Nam thường đăng ký dưới entity offshore (FSA, SCB) nên mức bảo vệ thấp hơn so với đăng ký trực tiếp tại UK hay Australia.</p>`,
    85: `<h3>Dùng AI đọc tin tức</h3><p>Trong năm 2026, nhiều trader đã dùng AI để phân tích tin tức nhanh hơn. Các công cụ như ForexGPT hoặc TradingView Pine Script có thể quét lịch kinh tế và tính toán tác động tiềm năng. Tuy nhiên, AI chưa thể thay thế hoàn toàn phán đoán của trader kinh nghiệm, đặc biệt trong các sự kiện bất ngờ (geopolitical risk, bank failure). Sử dụng AI như công cụ hỗ trợ, không phải thay thế. Kết hợp Forex Factory + AI summary + kinh nghiệm cá nhân là combo hiệu quả nhất cho fundamental analysis.</p>`
};

async function main() {
    console.log('📝 Round 2: Bổ sung thêm nội dung...\n');
    for (const [id, extra] of Object.entries(extras)) {
        const { data: post } = await sb.from('posts').select('content').eq('id', Number(id)).single();
        if (!post) continue;
        let content = post.content;
        const lastH2 = content.lastIndexOf('<h2>');
        if (lastH2 > 0) content = content.slice(0, lastH2) + extra + content.slice(lastH2);
        else content += extra;
        const { error } = await sb.from('posts').update({ content, updated_at: new Date().toISOString() }).eq('id', Number(id));
        const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const words = text.split(' ').filter(w => w.length > 0).length;
        const st = words >= 900 ? '✅' : '⚠️';
        console.log(`${st} ID ${id} → ${words} từ`);
    }
    console.log('\n✅ Done!');
}
main();
