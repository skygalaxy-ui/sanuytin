import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');
const img = (s, a) => `<figure style="margin:2em 0;text-align:center;"><img src="${s}" alt="${a}" style="width:100%;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.3);" loading="lazy"/><figcaption style="color:#888;font-size:14px;margin-top:8px;">${a}</figcaption></figure>`;

async function main() {
    const content = `<h2>1. Supply/Demand Zone là gì?</h2><p><strong>Supply Zone</strong> (vùng cung) là vùng giá nơi có nhiều người bán sẵn sàng bán, giá giảm khi chạm. <strong>Demand Zone</strong> (vùng cầu) là vùng có nhiều người mua, giá tăng khi chạm. Nguyên lý: cung lớn hơn cầu → giá giảm, cầu lớn hơn cung → giá tăng.</p>
<p>S/D Zone khác S/R truyền thống: S/R là đường hoặc mức giá, còn S/D là VÙNG với boundary rõ ràng. Phương pháp này được phổ biến bởi Sam Seiden.</p>
${img("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", "Supply và Demand Zone trên biểu đồ")}
<h2>2. Cách vẽ Supply/Demand Zone</h2><h3>Demand Zone</h3><ol><li>Tìm vùng giá sideway hoặc base nhỏ</li><li>Từ vùng đó giá tăng mạnh (rally) với nến thân dài</li><li>Vẽ hình chữ nhật bao phủ vùng base đó</li><li>Đó chính là Demand Zone nơi có lệnh mua chưa khớp</li></ol>
<h3>Supply Zone</h3><ol><li>Tìm vùng sideway/base nhỏ</li><li>Từ đó giá giảm mạnh với nến thân dài đỏ</li><li>Vẽ hình chữ nhật bao phủ vùng base</li><li>Đó là Supply Zone nơi có lệnh bán chưa khớp</li></ol>
<h2>3. Đặc điểm vùng S/D mạnh</h2><ul><li><strong>Fresh:</strong> Giá chưa quay lại test vùng. Lần đầu bounce mạnh nhất</li><li><strong>Strong departure:</strong> Giá rời vùng với nến Marubozu hoặc gap</li><li><strong>Base ngắn:</strong> 1-3 nến tốt hơn base 10+ nến</li><li><strong>Trùng S/R:</strong> S/D zone trùng S/R → confluence cực mạnh</li></ul>
${img("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", "Cách vẽ Supply/Demand Zone chuẩn xác")}
<h2>4. Chiến lược giao dịch</h2><h3>RBR (Rally-Base-Rally)</h3><p>Giá tăng → base nhỏ → tăng tiếp. Base là Demand Zone continuation. Khi giá pullback về zone → MUA.</p>
<h3>DBD (Drop-Base-Drop)</h3><p>Giá giảm → base → giảm tiếp. Base là Supply Zone continuation. Khi pullback lên zone → BÁN.</p>
<h3>DBR (Drop-Base-Rally)</h3><p>Giá giảm → base → đảo chiều tăng mạnh. Demand Zone đảo chiều mạnh nhất. MUA khi giá quay về zone.</p>
<h3>RBD (Rally-Base-Drop)</h3><p>Giá tăng → base → đảo chiều giảm mạnh. Supply Zone đảo chiều. BÁN khi giá quay về zone.</p>
<h2>5. Entry và Risk Management</h2><ul><li><strong>Entry:</strong> Limit Order tại boundary gần nhất hoặc chờ Price Action</li><li><strong>SL:</strong> Bên kia zone + buffer 5-10 pip</li><li><strong>TP:</strong> S/D zone tiếp theo theo hướng trade</li><li><strong>R:R:</strong> Tối thiểu 1:3 cho fresh zone</li></ul>
<h2>6. S/D vs S/R truyền thống</h2><p>S/D tập trung vào NGUYÊN NHÂN giá đảo chiều: unfilled orders. S/R tập trung vào WHERE giá bounce. Kết hợp cả hai hiệu quả nhất: dùng S/R xác định vùng quan trọng, dùng S/D zone xác định entry chính xác. Nhiều trader chuyên nghiệp dùng S/R trên W1/D1 rồi zoom vào tìm S/D zone trên H4/H1.</p>
${img("https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", "Kết hợp Supply/Demand với S/R")}
<h2>7. Kết luận</h2><p>Supply/Demand Zone dựa trên nguyên lý cung cầu cơ bản. Fresh zone với strong departure cho xác suất cao nhất. Luôn trade theo xu hướng: mua tại Demand trong uptrend, bán tại Supply trong downtrend.</p>`;

    const { data, error } = await sb.from('posts').insert([{
        title: 'Supply Demand Zone: giao dịch theo vùng cung cầu',
        slug: 'supply-demand-zone-forex',
        category: 'kien-thuc',
        tags: ['supply demand', 'cung cầu', 'vùng giá'],
        excerpt: 'Cách vẽ vùng cung cầu và chiến lược giao dịch.',
        meta_title: 'Supply Demand Zone Forex 2026',
        meta_description: 'Hướng dẫn Supply/Demand Zone.',
        featured_image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
        featured_image_alt: 'Supply Demand Zone',
        author: 'Sàn Uy Tín',
        is_published: false,
        published_at: '2026-02-28T09:00:00Z',
        scheduled_at: '2026-02-28T09:00:00Z',
        content
    }]).select('id').single();
    if (error) console.log('❌', error.message);
    else console.log('✅ ID', data.id, 'created');
}
main();
