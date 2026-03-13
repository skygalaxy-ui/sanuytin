import { createClient } from '@supabase/supabase-js';

const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const getDate = (daysAhead) => {
    const date = new Date();
    date.setDate(date.getDate() + daysAhead);
    date.setHours(7, 30, 0, 0);
    return date.toISOString();
};

const comparisonContent = `
<h2>1. Trận chiến giữa hai "ông lớn" ECN đến từ Úc</h2>
<p>Tại Việt Nam, nếu bạn hỏi về sàn giao dịch có chi phí thấp nhất và khớp lệnh chuẩn xác nhất, chắc chắn cái tên <strong><a href="https://sanuytin.net/ic-markets/">IC Markets</a></strong> và <strong><a href="https://sanuytin.net/pepperstone/">Pepperstone</a></strong> sẽ được xướng lên. Cả hai đều sở hữu giấy phép ASIC (Úc) danh giá và hạ tầng công nghệ bậc nhất thế giới.</p>

<h2>2. So sánh tài khoản Raw Spread (Chi phí giao dịch)</h2>
<p>Dưới đây là bảng so sánh mức spread trung bình của hai sàn tại thời kỳ thị trường ổn định:</p>
<div class="overflow-x-auto">
<table class="w-full border-collapse text-sm rounded-lg overflow-hidden border border-border/50">
    <thead class="bg-secondary/50 text-foreground">
        <tr>
            <th class="p-3 text-left">Cặp tiền</th>
            <th class="p-3 text-left">IC Markets (Raw)</th>
            <th class="p-3 text-left">Pepperstone (Razor)</th>
        </tr>
    </thead>
    <tbody class="divide-y divide-border/50">
        <tr><td class="p-3 font-medium text-foreground">EUR/USD</td><td class="p-3 text-blue-500 font-bold">0.0 - 0.2</td><td class="p-3 text-blue-500 font-bold">0.0 - 0.3</td></tr>
        <tr><td class="p-3 font-medium text-foreground">XAU/USD (Vàng)</td><td class="p-3 text-orange-400 font-bold">0.8 - 1.2</td><td class="p-3 text-orange-400 font-bold">1.0 - 1.5</td></tr>
        <tr><td class="p-3 font-medium text-foreground">Phí hoa hồng (Round Trip)</td><td class="p-3 font-bold text-foreground">7 USD / lot</td><td class="p-3 font-bold text-foreground">7 AUD / lot</td></tr>
    </tbody>
</table>
</div>
<p>Ở đây, IC Markets có vẻ nhỉnh hơn một chút về độ ổn định của spread thấp trên cặp Vàng (XAUUSD).</p>

<h2>3. Nền tảng giao dịch & Tốc độ khớp lệnh</h2>
<p>Nếu bạn là một Scalper chuyên nghiệp dùng Robot (EA) hoặc giao dịch khối lượng cực lớn, tốc độ khớp lệnh là yếu tố sống còn.</p>
<ul>
    <li><strong>Pepperstone:</strong> Nổi tiếng với việc đầu tư mạnh vào trung tâm dữ liệu Equinix (London và New York). Sàn này cung cấp tốc độ khớp lệnh trung bình dưới 30ms (mili giây), điều cực kỳ ấn tượng. Đặc biệt, Pepperstone hỗ trợ <strong>cTrader</strong> rất mượt mà.</li>
    <li><strong>IC Markets:</strong> Cũng có máy chủ tại Equinix, IC Markets lại ghi điểm nhờ tính thanh khoản sâu (Deep Liquidity), giúp hạn chế tối đa việc bị trượt giá (Slippage) khi giao dịch những khối lệnh khổng lồ.</li>
</ul>

<h2>4. Ưu và Nhược điểm nhanh</h2>
<p>So sánh ngắn gọn để bạn dễ lựa chọn:</p>
<div class="grid md:grid-cols-2 gap-6 mt-6">
    <div class="bg-card border border-border rounded-xl p-5 shadow-sm">
        <h3 class="text-blue-500 font-bold mb-3">🔥 Chọn IC Markets nếu:</h3>
        <ul class="text-sm space-y-2 text-muted-foreground">
            <li>Bạn thích tính thanh khoản sâu, ít trượt giá.</li>
            <li>Bạn muốn giao dịch trên sàn MT4 lâu đời và uy tín nhất.</li>
            <li>Bạn cần nạp rút tiền đa dạng qua nhiều ngân hàng.</li>
        </ul>
    </div>
    <div class="bg-card border border-border rounded-xl p-5 shadow-sm">
        <h3 class="text-orange-500 font-bold mb-3">⚡️ Chọn Pepperstone nếu:</h3>
        <ul class="text-sm space-y-2 text-muted-foreground">
            <li>Bạn cần tốc độ khớp lệnh nhanh nhất thế giới.</li>
            <li>Bạn là tín đồ của nền tảng <strong>cTrader</strong> hiện đại.</li>
            <li>Bạn cần đội ngũ Support tại Việt Nam xử lý vấn đề cực nhanh.</li>
        </ul>
    </div>
</div>

<h2>5. Kết luận</h2>
<p>Pepperstone và IC Markets là "kẻ tám lạng, người nửa cân". Nếu bạn quan tâm đến chi phí rẻ nhất hãy chọn IC Markets. Nếu bạn ưu tiên tốc độ hãy chọn Pepperstone. Bạn cũng có thể xem thêm <strong><a href="https://sanuytin.net/kien-thuc-forex/top-10-san-forex-uy-tin-nhat-viet-nam-2026/">so sánh sàn forex uy tín nhất 2026</a></strong> để tìm thêm các lựa chọn khác.</p>
`;

const post = {
    title: "So Sánh IC Markets Và Pepperstone 2026: Sàn Nào Spread Raw Thấp Hơn?",
    slug: "so-sanh-ic-markets-va-pepperstone-2026",
    category: "so-sanh",
    tags: ["so sanh san", "ic markets", "pepperstone", "spread raw"],
    excerpt: "Phân tích đối đầu giữa hai sàn ECN hàng đầu hiện nay: IC Markets vs Pepperstone năm 2026. So sánh chi tiết về spread tài khoản Raw, Razor và tốc độ khớp lệnh.",
    meta_title: "So Sánh IC Markets & Pepperstone 2026 ✓ Trận Chiến ECN",
    meta_description: "So sánh sàn IC Markets và Pepperstone 2026. Sàn nào có spread thấp nhất cho Scalper? Đánh giá chi tiết tài khoản Raw Spread và Razor. Xem ngay!",
    featured_image: "https://images.unsplash.com/photo-1611974717424-34cca55476a6?w=1200&q=80",
    featured_image_alt: "So sánh IC Markets vs Pepperstone",
    is_published: false,
    scheduled_at: getDate(10), // March 13
    author: 'Sàn Uy Tín',
    content: comparisonContent
};

async function main() {
    console.log('🚀 Lên lịch bài viết so sánh IC Markets vs Pepperstone...');
    const { error } = await sb.from('posts').insert([post]);
    if (error) {
        console.error('❌ Lỗi:', error.message);
    } else {
        console.log(`✅ Thành công! Bài viết đã được lên lịch vào ngày ${post.scheduled_at.split('T')[0]}.`);
    }
}

main();
