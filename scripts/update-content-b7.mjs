import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const extras = {
    78: `<h3>Fibonacci trong thực tế hàng ngày</h3><p>Pro trader không chỉ dùng một Fibonacci duy nhất. Họ vẽ nhiều Fibo từ các swing khác nhau trên cùng một chart. Ví dụ trên EUR/USD D1: Fibo từ swing W1 cho big picture, Fibo từ swing D1 cho medium term, Fibo từ swing H4 cho entry point. Khi 3 mức Fibo khác nhau giao nhau tại cùng một vùng giá → confluence zone cực mạnh.</p>
<p>Ngoài ra, nhiều trader kết hợp Fibonacci với Pivot Points. Khi level Fibo trùng với Daily/Weekly Pivot → giá thường phản ứng mạnh tại vùng đó. Đây là kỹ thuật institutional trader (trader tổ chức) thường áp dụng vì Pivot Points được theo dõi bởi hầu hết các bank trader và hedge fund.</p>`,

    80: `<h3>Practical Drawdown Management</h3><p>Xây dựng Daily Drawdown Protocol: (1) Nếu thua 2% trong ngày → dừng 2 giờ, đi ra ngoài hít thở. (2) Nếu thua 3% → dừng đến ngày hôm sau. (3) Nếu thua 5% trong tuần → dừng cả tuần. (4) Nếu thua 10% trong tháng → dừng 2 tuần và review toàn bộ chiến lược. Viết protocol này ra giấy, dán cạnh màn hình. Khi cảm xúc chi phối, protocol là thứ duy nhất giữ bạn an toàn.</p>`,

    82: `<h3>Sự khác biệt giữa Major, Minor và Exotic</h3><p>Major pairs gồm 7 cặp chứa USD: EUR/USD, USD/JPY, GBP/USD, USD/CHF, AUD/USD, NZD/USD, USD/CAD. Đặc điểm: spread thấp, thanh khoản cao, biến động dự đoán được. Minor (Cross) pairs không chứa USD nhưng chứa các đồng tiền mạnh: EUR/GBP, EUR/JPY, GBP/JPY. Spread cao hơn major, biến động đôi khi rất mạnh (đặc biệt GBP/JPY). Exotic pairs gồm 1 đồng tiền mạnh + 1 đồng tiền nước đang phát triển: USD/TRY, USD/ZAR, EUR/TRY. Spread cực cao (10-50 pip), thanh khoản thấp, biến động thất thường. Người mới TUYỆT ĐỐI tránh exotic pairs.</p>`,

    83: `<h3>Từ Journal đến System Trading</h3><p>Sau 6-12 tháng ghi journal đầy đủ, bạn sẽ có đủ dữ liệu để xây dựng trading system cá nhân. Trading system là bộ quy tắc chi tiết: trade cặp nào, timeframe nào, setup nào, entry/exit rule, lot size rule, điều kiện dừng trade. System được tối ưu từ dữ liệu journal thực tế của BẠN chứ không phải copy từ ai khác. Đây chính là Holy Grail mà nhiều trader mới tìm kiếm nhưng không biết: nó không tồn tại sẵn, mà phải tự xây từ kinh nghiệm cá nhân qua Trading Journal.</p>
<p>Cuối cùng, Trading Journal không chỉ giúp bạn trở thành trader giỏi hơn, mà còn giúp bạn biết khi nào nên DỪNG trading. Nếu sau 12 tháng journal cho thấy bạn thua liên tục dù đã thử nhiều chiến lược, đó là tín hiệu rõ ràng rằng trading không phù hợp. Và đó cũng là một loại "thành công" vì bạn biết dừng trước khi mất thêm tiền.</p>`,

    84: `<h3>Hạ tầng kỹ thuật và tốc độ</h3><p>Đối với trader dùng Expert Advisor (EA) hoặc algorithmic trading, hạ tầng kỹ thuật là yếu tố quyết định. IC Markets có data center tại Equinix NY4 (New York) và LD4 (London) - cùng location với nhiều nhà cung cấp thanh khoản lớn. Latency trung bình chỉ 1ms nếu VPS đặt cùng location. Exness cũng có hạ tầng tốt nhưng không công bố chi tiết data center location. Nếu bạn trade tần suất cao (high frequency), IC Markets có ưu thế rõ ràng về mặt kỹ thuật. Còn với trading thủ công, sự khác biệt latency giữa 2 sàn không đáng kể.</p>`
};

async function main() {
    console.log('📝 Final round...\n');
    for (const [id, extra] of Object.entries(extras)) {
        const { data: post } = await sb.from('posts').select('content').eq('id', Number(id)).single();
        if (!post) continue;
        let content = post.content;
        const lastH2 = content.lastIndexOf('<h2>');
        if (lastH2 > 0) content = content.slice(0, lastH2) + extra + content.slice(lastH2);
        else content += extra;
        await sb.from('posts').update({ content, updated_at: new Date().toISOString() }).eq('id', Number(id));
        const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const words = text.split(' ').filter(w => w.length > 0).length;
        const st = words >= 900 ? '✅' : '⚠️';
        console.log(`${st} ID ${id} → ${words} từ`);
    }
    console.log('\n✅ Done!');
}
main();
