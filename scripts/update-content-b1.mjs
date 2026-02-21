import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

// Helper: tạo figure ảnh
const img = (src, alt) => `<figure style="margin:2em 0;text-align:center;"><img src="${src}" alt="${alt}" style="width:100%;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.3);" loading="lazy"/><figcaption style="color:#888;font-size:14px;margin-top:8px;">${alt}</figcaption></figure>`;

// Mỗi post thêm nội dung + 2 ảnh (đã có 1 = tổng 3)
const updates = {
    63: { // Spread
        extra: `${img("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80", "So sánh spread giữa các sàn Forex")}
<h2>Chi tiết về các loại Spread</h2>
<h3>Fixed Spread (Spread cố định)</h3>
<p>Fixed spread không thay đổi bất kể điều kiện thị trường. Loại spread này thường được cung cấp bởi các sàn Market Maker. Ưu điểm là bạn luôn biết trước chi phí giao dịch, nhưng nhược điểm là spread thường cao hơn so với loại biến động.</p>
<p>Fixed spread phù hợp với trader mới bắt đầu hoặc những ai giao dịch trong thời gian tin tức quan trọng, vì không bị giật spread đột ngột.</p>
<h3>Variable Spread (Spread biến động)</h3>
<p>Variable spread thay đổi theo cung cầu thị trường. Trong điều kiện bình thường, spread rất thấp (0.1-0.5 pip cho EUR/USD). Tuy nhiên, khi có tin tức lớn như NFP hoặc FOMC, spread có thể mở rộng lên 5-20 pip.</p>
${img("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", "Biểu đồ spread biến động theo thời gian")}
<h3>Cách giảm chi phí spread</h3>
<ul><li><strong>Chọn tài khoản ECN/Raw:</strong> Spread từ 0.0 pip + hoa hồng nhỏ, tổng chi phí thấp hơn tài khoản Standard</li>
<li><strong>Trade đúng phiên:</strong> Spread thấp nhất trong phiên London và New York overlap (20:00-00:00 VN)</li>
<li><strong>Tránh trade lúc tin tức:</strong> Spread giật mạnh khi NFP, CPI, FOMC → đợi 15 phút sau tin</li>
<li><strong>Chọn cặp major:</strong> EUR/USD, GBP/USD luôn có spread thấp nhất. Tránh exotic pairs như USD/TRY</li>
<li><strong>So sánh nhiều sàn:</strong> Spread giữa các sàn chênh 0.2-0.5 pip → tích lũy lâu dài rất đáng kể</li></ul>
<h3>Ví dụ tính chi phí spread thực tế</h3>
<p>Giả sử bạn trade EUR/USD 1 lot/ngày, 20 ngày/tháng:</p>
<ul><li>Sàn A spread 1.5 pip: Chi phí = 1.5 × $10 × 20 = <strong>$300/tháng</strong></li>
<li>Sàn B spread 0.2 pip + $7 hoa hồng: Chi phí = 0.2 × $10 × 20 + $7 × 20 = <strong>$180/tháng</strong></li>
<li>Tiết kiệm: <strong>$120/tháng = $1,440/năm</strong></li></ul>
<p>Như vậy, chỉ riêng việc chọn đúng loại tài khoản đã tiết kiệm hàng ngàn đô mỗi năm. Đây là lý do trader chuyên nghiệp luôn chọn tài khoản ECN/Raw Spread.</p>`
    },
    64: { // Pip
        extra: `${img("https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80", "Cách tính pip trên biểu đồ MT4/MT5")}
<h2>Ví dụ tính Pip chi tiết</h2>
<h3>Ví dụ 1: EUR/USD</h3>
<p>Bạn mua EUR/USD tại 1.0850 và bán tại 1.0920. Lợi nhuận = 1.0920 - 1.0850 = 0.0070 = <strong>70 pip</strong>. Nếu trade 1 lot (100,000 units), mỗi pip = $10 → Lợi nhuận = 70 × $10 = <strong>$700</strong>.</p>
<h3>Ví dụ 2: USD/JPY</h3>
<p>USD/JPY là trường hợp đặc biệt vì JPY chỉ có 2 chữ số thập phân. Bạn bán USD/JPY tại 150.50 và mua lại tại 149.80. Lợi nhuận = 150.50 - 149.80 = 0.70 = <strong>70 pip</strong>. Giá trị mỗi pip = $100,000 × 0.01 / 149.80 ≈ <strong>$6.68/pip</strong>.</p>
${img("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "Bảng giá trị pip các cặp tiền phổ biến")}
<h3>Bảng giá trị pip chuẩn (1 Standard Lot)</h3>
<table style="width:100%;border-collapse:collapse;margin:1.5em 0;"><thead style="background:rgba(59,130,246,0.1);"><tr><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Cặp tiền</th><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Giá trị 1 pip</th><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Mini lot (0.1)</th><th style="padding:12px;border-bottom:2px solid rgba(255,255,255,0.1);">Micro lot (0.01)</th></tr></thead><tbody><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">EUR/USD</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">$10</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">$1</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">$0.10</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">GBP/USD</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">$10</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">$1</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">$0.10</td></tr><tr><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">USD/JPY</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">~$6.67</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">~$0.67</td><td style="padding:12px;border-bottom:1px solid rgba(255,255,255,0.05);">~$0.067</td></tr><tr><td style="padding:12px;">XAU/USD (Vàng)</td><td style="padding:12px;">$10</td><td style="padding:12px;">$1</td><td style="padding:12px;">$0.10</td></tr></tbody></table>
<h3>Pipette là gì?</h3>
<p>Pipette là 1/10 pip, hay chữ số thập phân thứ 5 trong tỷ giá. Nhiều sàn hiển thị giá 5 chữ số (ví dụ EUR/USD 1.08505). Chữ số cuối cùng (5) chính là pipette. Pipette giúp báo giá chính xác hơn nhưng không dùng để tính lời/lỗ.</p>
<p><strong>Mẹo:</strong> Khi mới bắt đầu, hãy dùng <strong>micro lot (0.01)</strong> để mỗi pip chỉ có giá trị $0.10. Điều này cho phép bạn học hỏi mà không gánh rủi ro tài chính quá lớn.</p>`
    },
    65: { // Chọn sàn
        extra: `${img("https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80", "Giao diện nền tảng giao dịch MT5")}
<h2>Quy trình kiểm tra sàn Forex uy tín</h2>
<h3>Bước 1: Kiểm tra giấy phép</h3>
<p>Truy cập website cơ quan quản lý để verify giấy phép. Ví dụ với FCA (Anh): vào <strong>register.fca.org.uk</strong> và tìm tên sàn. Với ASIC (Australia): vào <strong>connectonline.asic.gov.au</strong>. Giấy phép phải đang hoạt động (Active), không phải đã thu hồi (Revoked).</p>
<h3>Bước 2: Kiểm tra thời gian hoạt động</h3>
<p>Sàn uy tín thường hoạt động từ 5 năm trở lên. Các sàn mới thành lập (<2 năm) có rủi ro cao hơn. Kiểm tra trên Google với từ khóa "tên sàn + review" hoặc "tên sàn + scam" để xem đánh giá.</p>
${img("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "Kiểm tra giấy phép sàn Forex online")}
<h3>Bước 3: Test rút tiền</h3>
<p>Đây là bước QUAN TRỌNG NHẤT. Nạp một khoản nhỏ ($50-100), trade vài lệnh, rồi rút tiền. Sàn uy tín sẽ xử lý rút tiền trong 24-48 giờ. Nếu bị gây khó dễ hoặc yêu cầu nạp thêm → đó là dấu hiệu lừa đảo.</p>
<h3>Dấu hiệu sàn lừa đảo</h3>
<ul><li><strong>Hứa lợi nhuận cố định:</strong> "Cam kết 10%/tháng" → 100% lừa đảo</li>
<li><strong>Không có giấy phép:</strong> Hoặc giấy phép từ quốc nhỏ không ai biết (St. Vincent, Marshall Islands)</li>
<li><strong>Ép nạp tiền:</strong> Gọi điện liên tục, tạo áp lực nạp thêm</li>
<li><strong>Bonus quá hấp dẫn:</strong> "Bonus 100% tiền nạp" kèm điều kiện rút rất khó khăn</li>
<li><strong>Không rút được tiền:</strong> Viện nhiều lý do để trì hoãn hoặc từ chối rút</li></ul>
<p><strong>Nguyên tắc vàng:</strong> Nếu nghe quá tốt để là thật → nó không phải thật. Không có sàn nào cam kết lợi nhuận, và mọi giao dịch Forex đều có rủi ro mất vốn.</p>`
    }
};

async function main() {
    console.log('📝 Update bài 63, 64, 65 (thêm nội dung + ảnh)...\n');
    for (const [id, upd] of Object.entries(updates)) {
        const { data: post } = await sb.from('posts').select('content').eq('id', Number(id)).single();
        if (!post) { console.log('❌ ID ' + id + ' not found'); continue; }

        // Insert extra content before </h2>Kết luận or at end
        let content = post.content;
        const conclusionIdx = content.lastIndexOf('<h2>');
        if (conclusionIdx > 0) {
            content = content.slice(0, conclusionIdx) + upd.extra + content.slice(conclusionIdx);
        } else {
            content += upd.extra;
        }

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
