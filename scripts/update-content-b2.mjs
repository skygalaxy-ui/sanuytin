import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');
const img = (src, alt) => `<figure style="margin:2em 0;text-align:center;"><img src="${src}" alt="${alt}" style="width:100%;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.3);" loading="lazy"/><figcaption style="color:#888;font-size:14px;margin-top:8px;">${alt}</figcaption></figure>`;

const updates = {
    67: {
        extra: `${img("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", "Bảng tính lot size trên MetaTrader")}
<h2>Bảng quy đổi Lot Size chi tiết</h2>
<table style="width:100%;border-collapse:collapse;margin:1.5em 0;"><thead style="background:rgba(59,130,246,0.1);"><tr><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Loại Lot</th><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Số Units</th><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Giá trị 1 Pip</th><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Phù hợp</th></tr></thead><tbody><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Standard (1.0)</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">100,000</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">$10</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Vốn $10,000+</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Mini (0.1)</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">10,000</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">$1</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Vốn $1,000+</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Micro (0.01)</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">1,000</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">$0.10</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Vốn $100+</td></tr><tr><td style="padding:12px;">Nano (0.001)</td><td style="padding:12px;">100</td><td style="padding:12px;">$0.01</td><td style="padding:12px;">Tập luyện</td></tr></tbody></table>
<h3>Công thức tính Lot Size chuẩn</h3>
<p>Lot Size = (Vốn × Rủi ro%) / (Stop Loss pip × Giá trị pip). Ví dụ: Vốn $1,000, rủi ro 2%, SL 30 pip → Lot = ($1,000 × 2%) / (30 × $10) = 0.066 lot ≈ <strong>0.07 lot</strong> (mini lot).</p>
<p>Nhiều trader mới mắc sai lầm chọn lot quá lớn so với vốn. Quy tắc an toàn: không bao giờ rủi ro quá 1-2% vốn cho mỗi lệnh. Với vốn $500, lot tối đa nên là 0.05 standard lot.</p>
${img("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "Công thức tính lot size theo quản lý vốn")}
<h3>Sai lầm phổ biến khi chọn Lot Size</h3>
<ul><li><strong>Dùng lot quá lớn:</strong> Vốn $200 mà trade 0.5 lot → chỉ cần 20 pip ngược là mất 10% tài khoản</li><li><strong>Không tính SL trước:</strong> Luôn xác định Stop Loss TRƯỚC khi tính lot</li><li><strong>Tăng lot sau khi thua:</strong> Tuyệt đối không revenge trade với lot lớn hơn</li><li><strong>Cùng lot cho mọi cặp tiền:</strong> Giá trị pip khác nhau giữa EUR/USD và USD/JPY</li></ul>` },

    68: {
        extra: `${img("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80", "Margin Level và các mức cảnh báo")}
<h2>Ví dụ thực tế về Margin Call</h2>
<h3>Tình huống</h3>
<p>Trader A có $1,000 trong tài khoản, đòn bẩy 1:100. Mở 1 lot EUR/USD → Margin Required = $100,000 / 100 = <strong>$1,000</strong>. Free Margin = $1,000 - $1,000 = <strong>$0</strong>. Margin Level = ($1,000 / $1,000) × 100% = <strong>100%</strong>.</p>
<p>Giá đi ngược 30 pip → Equity = $1,000 - $300 = $700. Margin Level = ($700 / $1,000) × 100% = <strong>70%</strong>. Nếu sàn cài Margin Call ở 50% → chưa bị gọi ký quỹ nhưng rất nguy hiểm.</p>
<p>Giá tiếp tục ngược thêm 20 pip → Equity = $700 - $200 = $500. Margin Level = <strong>50%</strong> → <strong>MARGIN CALL!</strong> Sàn cảnh báo nạp thêm tiền hoặc đóng bớt lệnh.</p>
${img("https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80", "Biểu đồ mô phỏng Margin Call và Stop Out")}
<h3>Cách tránh Margin Call</h3>
<ul><li><strong>Không dùng hết margin:</strong> Chỉ sử dụng tối đa 10-20% margin có sẵn</li><li><strong>Đặt Stop Loss:</strong> LUÔN LUÔN đặt SL cho mọi lệnh, không bao giờ để lệnh "trôi"</li><li><strong>Giảm đòn bẩy:</strong> Đòn bẩy 1:100 thay vì 1:500 giúp giảm rủi ro margin call</li><li><strong>Theo dõi Margin Level:</strong> Duy trì Margin Level trên 200% để an toàn</li><li><strong>Không mở quá nhiều lệnh:</strong> Mỗi lệnh chiếm margin, 5 lệnh cùng lúc = 5× rủi ro</li></ul>
<h3>Stop Out hoạt động thế nào?</h3>
<p>Stop Out là mức tự động đóng lệnh, thường ở 20-50% tùy sàn. Khi Margin Level xuống dưới mức Stop Out, sàn sẽ tự động đóng lệnh thua lỗ nhiều nhất trước, rồi đến lệnh ít thua hơn, cho đến khi Margin Level trở lại trên mức an toàn.</p>` },

    69: {
        extra: `${img("https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80", "Bảng giờ các phiên giao dịch Forex theo giờ Việt Nam")}
<h2>Chi tiết từng phiên giao dịch</h2>
<h3>Phiên Sydney (Úc) - 5:00 đến 14:00 VN</h3>
<p>Phiên mở cửa đầu tiên trong ngày. Thanh khoản thấp, spread rộng hơn. Phù hợp với trader AUD/NZD. Biến động trung bình 30-50 pip. Ít trader Việt Nam hoạt động trong phiên này.</p>
<h3>Phiên Tokyo (Á) - 7:00 đến 16:00 VN</h3>
<p>Phiên chính của châu Á. USD/JPY và các cặp cross JPY hoạt động mạnh nhất. Biến động vừa phải 40-80 pip. Tin tức từ BOJ (Ngân hàng Nhật Bản) có tác động lớn. Phù hợp với trader Việt Nam buổi sáng.</p>
<h3>Phiên London (Âu) - 15:00 đến 00:00 VN</h3>
<p>Phiên có thanh khoản CAO NHẤT, chiếm <strong>35%</strong> volume Forex toàn cầu. EUR/USD, GBP/USD biến động mạnh 80-120 pip. Thời điểm mở cửa London (15:00-17:00 VN) thường có breakout mạnh. Đây là phiên LÝ TƯỞNG cho trader Việt Nam.</p>
<h3>Phiên New York (Mỹ) - 20:00 đến 05:00 VN</h3>
<p>Phiên thứ hai về thanh khoản. Tin tức kinh tế Mỹ (NFP, CPI, FOMC) ra trong phiên này gây biến động cực lớn. USD pairs là chủ đạo.</p>
${img("https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&q=80", "Overlap giữa phiên London và New York")}
<h3>Overlap London-New York (20:00-00:00 VN)</h3>
<p>Đây là <strong>khung giờ vàng</strong> của thị trường Forex. Cả hai trung tâm tài chính lớn nhất cùng hoạt động tạo ra thanh khoản và biến động cực cao. Spread thấp nhất, volume cao nhất, cơ hội trading nhiều nhất.</p>
<h3>Các thời điểm nên TRÁNH trade</h3>
<ul><li><strong>Cuối phiên Á đầu Âu (13:00-15:00 VN):</strong> Thanh khoản thấp, spread rộng, giá đi ngang</li><li><strong>Cuối phiên New York (03:00-05:00 VN):</strong> Volume giảm mạnh, spread tăng</li><li><strong>Thứ 6 cuối ngày:</strong> Trader đóng lệnh trước cuối tuần, giá biến động thất thường</li><li><strong>Ngày lễ lớn:</strong> Christmas, New Year - thị trường gần như đóng băng</li></ul>` },

    70: {
        extra: `${img("https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80", "Chỉ báo MACD trên biểu đồ MetaTrader")}
<h2>Chiến lược MACD nâng cao</h2>
<h3>Chiến lược MACD + EMA 200</h3>
<p>Kết hợp MACD với đường EMA 200 để xác định xu hướng. Chỉ MUA khi giá trên EMA 200 VÀ MACD cắt lên signal line. Chỉ BÁN khi giá dưới EMA 200 VÀ MACD cắt xuống. Chiến lược này lọc được nhiều tín hiệu giả.</p>
<h3>MACD Divergence (Phân kỳ)</h3>
<p><strong>Phân kỳ dương (Bullish Divergence):</strong> Giá tạo đáy thấp hơn nhưng MACD tạo đáy cao hơn → xu hướng giảm sắp đảo chiều. Đây là tín hiệu mạnh nhất của MACD.</p>
<p><strong>Phân kỳ âm (Bearish Divergence):</strong> Giá tạo đỉnh cao hơn nhưng MACD tạo đỉnh thấp hơn → xu hướng tăng sắp kết thúc.</p>
${img("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "Ví dụ MACD Divergence trên biểu đồ thực")}
<h3>Cài đặt MACD tối ưu theo timeframe</h3>
<ul><li><strong>Scalping (M5-M15):</strong> MACD (5, 13, 1) - nhạy hơn, nhiều tín hiệu</li><li><strong>Day Trading (H1-H4):</strong> MACD (12, 26, 9) - mặc định, cân bằng</li><li><strong>Swing Trading (D1):</strong> MACD (19, 39, 9) - ít tín hiệu nhưng chính xác hơn</li></ul>
<h3>Sai lầm khi dùng MACD</h3>
<ul><li><strong>Dùng MACD trong thị trường sideway:</strong> MACD cho nhiều tín hiệu giả khi giá đi ngang</li><li><strong>Chỉ nhìn crossover:</strong> Histogram và divergence quan trọng hơn nhiều</li><li><strong>Không xem timeframe lớn:</strong> Luôn check MACD trên D1 trước khi trade H1</li></ul>` },

    71: {
        extra: `${img("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80", "So sánh SMA và EMA trên biểu đồ")}
<h2>Chiến lược giao dịch với Moving Average</h2>
<h3>Chiến lược Golden Cross / Death Cross</h3>
<p><strong>Golden Cross:</strong> EMA 50 cắt lên trên EMA 200 → Tín hiệu uptrend mạnh → MUA. Đây là tín hiệu dài hạn, thường xuất hiện ở đầu xu hướng tăng lớn.</p>
<p><strong>Death Cross:</strong> EMA 50 cắt xuống dưới EMA 200 → Tín hiệu downtrend → BÁN. Tín hiệu này thường dẫn đến giai đoạn giảm kéo dài.</p>
<h3>Chiến lược 3 EMA (9, 21, 55)</h3>
<p>Sử dụng 3 đường EMA: EMA 9 (nhanh), EMA 21 (trung bình), EMA 55 (chậm). Khi cả 3 đường xếp đúng thứ tự (9 trên 21 trên 55 = uptrend), giá hồi về EMA 21 là điểm vào lệnh MUA lý tưởng.</p>
${img("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", "Chiến lược Golden Cross với EMA 50 và 200")}
<h3>MA làm Support/Resistance động</h3>
<p>Đường MA hoạt động như mức hỗ trợ/kháng cự di động. Trong uptrend, giá thường bounce (bật lên) từ EMA 20 hoặc EMA 50. Càng nhiều lần giá bounce từ MA, MA đó càng đáng tin.</p>
<h3>Chọn MA nào cho timeframe nào?</h3>
<table style="width:100%;border-collapse:collapse;margin:1.5em 0;"><thead style="background:rgba(59,130,246,0.1);"><tr><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Timeframe</th><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">MA khuyên dùng</th><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Mục đích</th></tr></thead><tbody><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">M5-M15</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">EMA 9, 21</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Scalping</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">H1-H4</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">EMA 20, 50</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">Day trading</td></tr><tr><td style="padding:12px;">D1-W1</td><td style="padding:12px;">EMA 50, 200</td><td style="padding:12px;">Swing/Position</td></tr></tbody></table>` },

    72: {
        extra: `${img("https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80", "Giao diện Exness và XM trên di động")}
<h2>So sánh chi tiết hơn</h2>
<h3>Nạp/Rút tiền tại Việt Nam</h3>
<p><strong>Exness:</strong> Hỗ trợ ngân hàng nội địa (Vietcombank, Techcombank, MB Bank), ví điện tử (Ngân Lượng), crypto. Rút tiền TỨC THÌ - đây là ưu điểm lớn nhất. Phí nạp/rút: <strong>MIỄN PHÍ</strong>.</p>
<p><strong>XM:</strong> Hỗ trợ ngân hàng nội địa, Skrill, Neteller, thẻ tín dụng. Rút tiền 24-48 giờ. Phí nạp: miễn phí. Phí rút: miễn phí cho lần đầu mỗi tháng.</p>
<h3>Về hỗ trợ khách hàng</h3>
<p>Exness có live chat 24/7 tiếng Việt, phản hồi nhanh trong 1-2 phút. XM có hỗ trợ tiếng Việt qua email và chat trong giờ hành chính. Về mặt này, Exness vượt trội.</p>
${img("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "Bảng so sánh phí giao dịch Exness và XM")}
<h3>Chương trình khuyến mãi</h3>
<p><strong>XM:</strong> Nổi tiếng với các chương trình bonus hấp dẫn - Bonus 50% nạp lần đầu, chương trình loyalty (tích điểm đổi quà), và bonus $30 không cần nạp tiền cho tài khoản mới.</p>
<p><strong>Exness:</strong> Không có chương trình bonus, nhưng bù lại bằng spread thấp hơn và điều kiện giao dịch tốt hơn. Đây là triết lý "chất lượng hơn khuyến mãi".</p>
<h3>Kết luận chi tiết</h3>
<ul><li><strong>Người mới, vốn nhỏ ($100-500):</strong> Chọn <strong>XM</strong> để nhận bonus, có thêm vốn tập luyện</li><li><strong>Trader thường xuyên, cần rút nhanh:</strong> Chọn <strong>Exness</strong> - rút tiền tức thì là lợi thế cực lớn</li><li><strong>Scalper:</strong> Chọn <strong>Exness Raw Spread</strong> - spread từ 0.0 pip</li><li><strong>Swing trader:</strong> Cả hai đều tốt, nhưng Exness hơi nhỉnh hơn về phí swap</li></ul>` }
};

async function main() {
    console.log('📝 Update bài 67-72 (thêm nội dung + ảnh)...\n');
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
