import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');
const img = (src, alt) => `<figure style="margin:2em 0;text-align:center;"><img src="${src}" alt="${alt}" style="width:100%;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.3);" loading="lazy"/><figcaption style="color:#888;font-size:14px;margin-top:8px;">${alt}</figcaption></figure>`;

const updates = {
    80: {
        extra: `${img("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80", "Biểu đồ drawdown equity curve")}
<h2>Phân tích Drawdown chuyên sâu</h2>
<h3>Drawdown Recovery Table</h3>
<p>Quan hệ giữa drawdown và % cần để hồi vốn KHÔNG tuyến tính mà theo hàm mũ. Đây là lý do tại sao kiểm soát drawdown quan trọng hơn tối đa hóa lợi nhuận:</p>
<ul><li>Thua 10% → cần lãi 11% để hồi vốn (dễ)</li><li>Thua 25% → cần lãi 33% (vẫn khả thi)</li><li>Thua 50% → cần lãi 100% (rất khó)</li><li>Thua 75% → cần lãi 300% (gần như không thể)</li><li>Thua 90% → cần lãi 900% (tài khoản coi như "chết")</li></ul>
<h3>Quy tắc kiểm soát Drawdown</h3>
<p><strong>Quy tắc 6%:</strong> Không thua quá 6% vốn trong 1 tuần. Nếu đạt mức này, dừng trade cho đến tuần sau. Đây là quy tắc của Alexander Elder - trader và tác giả sách nổi tiếng.</p>
<p><strong>Quy tắc giảm lot:</strong> Khi DD đạt 10%, giảm lot size xuống 50%. Khi DD đạt 15%, giảm thêm 50% nữa. Khi DD đạt 20%, DỪNG hoàn toàn và review chiến lược.</p>
${img("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "Equity curve của trader kiểm soát DD tốt")}
<h3>Cách đo Drawdown trên MT4/MT5</h3>
<p>Vào tab Account History → chuột phải → chọn "Detailed Report". Báo cáo sẽ hiển thị Maximum Drawdown cả tuyệt đối ($) và tương đối (%). Theo dõi chỉ số này hàng tuần.</p>
<h3>Drawdown và tâm lý Trading</h3>
<p>Drawdown không chỉ ảnh hưởng tài chính mà còn tác động mạnh đến tâm lý. Khi DD lớn, trader thường: revenge trade (trade trả thù) với lot lớn hơn, bỏ qua kế hoạch giao dịch, hoặc mất tự tin hoàn toàn. Nhận biết các dấu hiệu này để kịp thời dừng lại và reset tâm lý.</p>
${img("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", "Phân tích drawdown trên báo cáo MT5")}`
    },

    81: {
        extra: `${img("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", "Backtest trên TradingView với tính năng Replay")}
<h2>Hướng dẫn Backtest trên TradingView</h2>
<h3>Bước 1: Chuẩn bị biểu đồ</h3>
<p>Mở TradingView → Chọn cặp tiền EUR/USD → Chọn timeframe H4 hoặc D1. Thêm các indicator theo chiến lược (ví dụ: EMA 20, 50 + RSI 14).</p>
<h3>Bước 2: Dùng tính năng Replay</h3>
<p>Nhấn nút "Replay" trên thanh công cụ → Chọn ngày bắt đầu (ví dụ: 1/7/2025). Biểu đồ sẽ chạy từng nến. Nhấn "Play" để nến chạy tự động hoặc "Step" để đi từng nến một.</p>
<h3>Bước 3: Ghi chép vào Spreadsheet</h3>
<p>Mở Google Sheets cùng lúc. Mỗi khi thấy setup theo chiến lược, ghi lại: ngày, hướng (Buy/Sell), giá vào, SL, TP, kết quả. Không gian lận - ghi đúng những gì bạn thấy tại thời điểm đó.</p>
${img("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "Template Trading Journal cho Backtest")}
<h3>Bước 4: Phân tích kết quả sau 100 lệnh</h3>
<p>Sau khi hoàn thành ít nhất 100 lệnh backtest, tính các chỉ số sau:</p>
<ul><li><strong>Win Rate:</strong> Số lệnh thắng / Tổng lệnh. Mục tiêu: ≥ 45%</li><li><strong>Average R:R:</strong> Trung bình lợi nhuận mỗi lệnh thắng / thua lỗ mỗi lệnh thua. Mục tiêu: ≥ 1.5:1</li><li><strong>Profit Factor:</strong> Tổng lợi nhuận / Tổng thua lỗ. Mục tiêu: ≥ 1.5</li><li><strong>Max Consecutive Losses:</strong> Số lệnh thua liên tiếp nhiều nhất. Giúp chuẩn bị tâm lý</li><li><strong>Expectancy:</strong> (Win Rate × Avg Win) - (Loss Rate × Avg Loss). Phải dương</li></ul>
<h3>Bước 5: Forward Test</h3>
<p>Sau backtest thành công → Trade trên Demo 1-2 tháng. Nếu kết quả tương tự backtest (±10%) → sẵn sàng cho tiền thật. Nếu khác biệt lớn → chiến lược có thể bị curve-fit (quá khớp dữ liệu quá khứ).</p>
${img("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", "Phân tích kết quả backtest trên Google Sheets")}`
    },

    82: {
        extra: `${img("https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80", "Biểu đồ các cặp tiền major hoạt động mạnh trong phiên London")}
<h2>Phân tích sâu từng cặp tiền</h2>
<h3>EUR/USD - "King của Forex"</h3>
<p>EUR/USD chiếm khoảng 24% toàn bộ volume Forex. Đây là cặp tiền được trade nhiều nhất thế giới. Spread trung bình chỉ 0.1-0.3 pip trên tài khoản ECN. Cặp này phản ứng mạnh với tin tức từ cả ECB (Ngân hàng Trung ương Châu Âu) và Fed (Cục Dự trữ Liên bang Mỹ).</p>
<p><strong>Đặc điểm giao dịch:</strong> EUR/USD có xu hướng trending mạnh trên D1, phù hợp cả scalping lẫn swing trading. Phiên tốt nhất: London và overlap London-New York.</p>
<h3>GBP/USD - "The Wild Card"</h3>
<p>GBP/USD biến động mạnh hơn EUR/USD khoảng 30-50%. Điều này tạo cơ hội lớn nhưng cũng rủi ro cao. Cặp này phản ứng cực mạnh với tin tức BOE (Ngân hàng Anh) và dữ liệu kinh tế UK.</p>
<p><strong>Cảnh báo cho người mới:</strong> GBP/USD có thể giật 30-50 pip trong vài phút. Nếu bạn mới bắt đầu, hãy dùng lot nhỏ hơn 50% so với EUR/USD.</p>
${img("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80", "Biến động trung bình các cặp tiền Forex theo phiên")}
<h3>Chiến lược cho từng cặp</h3>
<ul><li><strong>EUR/USD:</strong> EMA crossover (20/50) trên H4. Trend following. Win rate cao, biến động vừa phải</li><li><strong>GBP/USD:</strong> Breakout phiên London (15:00-17:00 VN). Volatility cao → SL rộng hơn</li><li><strong>USD/JPY:</strong> Trade theo tin BOJ và risk sentiment. Correlation với Nikkei 225</li><li><strong>AUD/USD:</strong> Swing trade trên D1. Theo dõi giá vàng và quặng sắt (tương quan mạnh)</li></ul>
${img("https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80", "Dashboard theo dõi các cặp tiền trên TradingView")}`
    },

    83: {
        extra: `${img("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", "Mẫu Trading Journal chuyên nghiệp")}
<h2>Template Trading Journal chi tiết</h2>
<h3>Thông tin mỗi Trade</h3>
<table style="width:100%;border-collapse:collapse;margin:1.5em 0;"><thead style="background:rgba(59,130,246,0.1);"><tr><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Mục</th><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Ví dụ</th></tr></thead><tbody><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Ngày/giờ</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">21/02/2026 15:30</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Cặp tiền</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">EUR/USD</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Setup</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Pin Bar tại Support + EMA 50</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Entry / SL / TP</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">1.0785 / 1.0755 / 1.0845</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Lot Size</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">0.05</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">R:R</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">1:2</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Kết quả</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Win +60 pip (+$30)</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Cảm xúc (1-10)</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">7 - Hơi hồi hộp lúc vào lệnh</td></tr><tr><td style="padding:12px;">Bài học</td><td style="padding:12px;">Nên chờ nến close xác nhận thay vì vào sớm</td></tr></tbody></table>
${img("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "Google Sheets template Trading Journal")}
<h3>Weekly Review - 5 câu hỏi quan trọng</h3>
<ol><li><strong>Setup nào cho win rate cao nhất?</strong> → Tập trung vào setup đó</li><li><strong>Timeframe nào bạn trade tốt nhất?</strong> → Gắn bó với timeframe đó</li><li><strong>Bạn thường thua vào lúc nào?</strong> → Tránh trade vào giờ đó</li><li><strong>Cảm xúc ảnh hưởng trading thế nào?</strong> → Nhận diện pattern tâm lý</li><li><strong>Có lệnh nào vi phạm kế hoạch?</strong> → Kỷ luật cần cải thiện</li></ol>
<h3>Thống kê Monthly</h3>
<p>Cuối mỗi tháng, tổng hợp: tổng số lệnh, Win Rate %, R:R trung bình, tổng P&L, Max Drawdown, lệnh hay nhất/tệ nhất. So sánh với tháng trước để đo lường tiến bộ. Trader chuyên nghiệp có trading journal 3-5 năm - đó chính là "bí kíp" của họ.</p>
${img("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", "Biểu đồ tiến bộ theo tháng từ Trading Journal")}`
    },

    84: {
        extra: `${img("https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80", "Nền tảng IC Markets Raw trên desktop")}
<h2>Trải nghiệm thực tế từ trader Việt Nam</h2>
<h3>Đánh giá IC Markets từ góc độ trader Việt</h3>
<p>IC Markets là sàn ECN thật, nghĩa là lệnh của bạn được gửi trực tiếp đến nhà cung cấp thanh khoản (LP) thay vì sàn tự xử lý. Điều này đảm bảo <strong>không có conflict of interest</strong> - sàn không kiếm tiền khi bạn thua. Tốc độ khớp lệnh trung bình 40ms, rất nhanh cho scalping.</p>
<p>Tuy nhiên, IC Markets yêu cầu nạp tối thiểu $200 và rút tiền 1-3 ngày qua ngân hàng. Đối với trader Việt Nam quen rút instant trên Exness, đây là điểm hạn chế.</p>
<h3>Đánh giá Exness từ góc độ trader Việt</h3>
<p>Exness chiếm thị phần lớn nhất Đông Nam Á nhờ localization tốt: hỗ trợ tiếng Việt 24/7, nạp/rút qua ngân hàng nội địa tức thì, nạp tối thiểu chỉ $1. Đòn bẩy không giới hạn (unlimited leverage) là ưu thế cho trader vốn nhỏ.</p>
${img("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80", "So sánh tốc độ khớp lệnh IC Markets và Exness")}
<h3>Kịch bản chọn sàn theo mục tiêu</h3>
<ul><li><strong>Trader mới, vốn $100-500:</strong> Exness Standard → Không hoa hồng, spread từ 1.0 pip, nạp/rút dễ</li><li><strong>Scalper chuyên nghiệp:</strong> IC Markets Raw Spread → ECN thật, tốc độ khớp nhanh, spread 0.0 pip</li><li><strong>Swing trader:</strong> Exness Pro → Spread thấp, không hoa hồng, phí swap hợp lý</li><li><strong>EA/Bot trader:</strong> IC Markets → VPS miễn phí khi trade ≥ 15 lot/tháng, server gần LP</li></ul>
<p><strong>Chiến lược kép:</strong> Nhiều trader chuyên nghiệp mở tài khoản ở CẢ HAI sàn. Dùng Exness cho scalping ngắn vì rút nhanh, dùng IC Markets cho swing trading dài hạn vì ECN chất lượng.</p>
${img("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "Dashboard quản lý nhiều tài khoản trading")}`
    },

    85: {
        extra: `${img("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", "Giao diện Forex Factory - lịch kinh tế")}
<h2>Phân tích các tin tức cụ thể</h2>
<h3>NFP (Non-Farm Payrolls) - Tin quan trọng nhất</h3>
<p>NFP báo cáo số việc làm mới tạo ra trong tháng (ngoài ngành nông nghiệp) tại Mỹ. Được công bố vào <strong>thứ 6 đầu tiên mỗi tháng, 19:30 VN</strong>. NFP tốt (con số cao) → USD tăng. NFP xấu → USD giảm.</p>
<p><strong>Ví dụ:</strong> Tháng 1/2026, NFP dự báo +180K, thực tế +256K (cao hơn nhiều). EUR/USD giảm 120 pip trong 30 phút từ 1.0820 xuống 1.0700. Trader nào bắt được xu hướng sau tin → lợi nhuận lớn.</p>
<h3>CPI (Consumer Price Index) - Lạm phát</h3>
<p>CPI đo lường mức tăng giá tiêu dùng. CPI cao → lạm phát cao → Fed có thể tăng lãi suất → USD tăng. CPI thấp → Fed có thể giảm lãi suất → USD giảm. Công bố khoảng ngày 10-15 hàng tháng.</p>
${img("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", "Phản ứng giá EUR/USD khi NFP được công bố")}
<h3>FOMC Meeting - Quyết định lãi suất</h3>
<p>FOMC họp 8 lần/năm, quyết định lãi suất cơ bản của Mỹ. Kết quả công bố lúc 01:00 VN (sáng thứ 5), kèm họp báo chủ tịch Fed 30 phút sau. Đây là tin có biến động mạnh nhất - giá có thể dao động 200-300 pip.</p>
<h3>Lịch theo dõi hàng tuần</h3>
<ul><li><strong>Thứ 2:</strong> Check lịch tuần trên Forex Factory, đánh dấu tin High Impact</li><li><strong>Mỗi sáng 7:00:</strong> Check tin trong ngày, nếu có tin đỏ → chuẩn bị</li><li><strong>30 phút trước tin:</strong> Đóng hết lệnh đang mở hoặc siết SL</li><li><strong>15-30 phút sau tin:</strong> Quan sát phản ứng giá, xác định xu hướng mới</li><li><strong>1-2 giờ sau tin:</strong> Vào lệnh theo hướng xu hướng mới (nếu có)</li></ul>
${img("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "Biểu đồ phản ứng giá với các loại tin tức khác nhau")}`
    }
};

async function main() {
    console.log('📝 Update bài 80-85 (thêm nội dung + ảnh)...\n');
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
