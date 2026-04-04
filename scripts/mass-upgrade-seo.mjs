import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// SEO blocks to inject
const faqBlock = `
<h2>Câu hỏi thường gặp (FAQ)</h2>
<h3>Sàn Forex nào uy tín nhất cho người Việt 2026?</h3>
<p>Dựa trên giấy phép quản lý, spread, tốc độ rút tiền và đánh giá từ cộng đồng, <a href="/exness/">Exness</a> và <a href="/xm/">XM</a> là hai sàn được trader Việt Nam tin tưởng nhất. Xem chi tiết tại <a href="/#ranking">Bảng xếp hạng Top 10 Sàn Uy Tín</a>.</p>
<h3>Người mới nên bắt đầu Forex với bao nhiêu vốn?</h3>
<p>Tối thiểu $100-$500 cho tài khoản thật. Tuy nhiên, nên thực hành trên tài khoản Demo ít nhất 3 tháng trước khi dùng tiền thật. Exness cho phép mở tài khoản chỉ từ $1.</p>
<h3>Làm sao để tránh bị lừa đảo khi giao dịch Forex?</h3>
<p>Luôn kiểm tra giấy phép (FCA, ASIC, CySEC), đọc đánh giá từ trader thực, thử rút tiền nhỏ trước khi nạp lớn, và không tin vào lời hứa lợi nhuận cố định hàng tháng.</p>`;

const tableBlock = `
<h2>So sánh nhanh Top sàn Forex uy tín 2026</h2>
<table>
<thead><tr><th>Sàn</th><th>Giấy phép</th><th>Spread EUR/USD</th><th>Rút tiền</th><th>Nạp tối thiểu</th></tr></thead>
<tbody>
<tr><td><a href="/exness/">Exness</a></td><td>FCA, CySEC</td><td>Từ 0.0 pip</td><td>Tức thì</td><td>$1</td></tr>
<tr><td><a href="/xm/">XM</a></td><td>CySEC, ASIC</td><td>Từ 0.1 pip</td><td>24h</td><td>$5</td></tr>
<tr><td><a href="/ic-markets/">IC Markets</a></td><td>ASIC, CySEC</td><td>Từ 0.0 pip</td><td>1-3 ngày</td><td>$200</td></tr>
</tbody>
</table>`;

const ctaBlock = `<p>Để tìm sàn giao dịch phù hợp nhất, tham khảo <a href="/#ranking">Bảng Xếp Hạng Top 10 Sàn Forex Uy Tín Nhất 2026</a> — được cập nhật hàng tháng với dữ liệu thực tế từ cộng đồng trader Việt Nam.</p>`;

const linksBlock = `<p><strong>Bài viết liên quan:</strong> <a href="/kien-thuc-forex/forex-la-gi/">Forex là gì?</a> · <a href="/tin-tuc/chien-luoc-price-action-cho-nguoi-moi-2026/">Chiến lược Price Action</a> · <a href="/kien-thuc-forex/5-sai-lam-chet-nguoi-khi-chon-san-forex/">5 sai lầm khi chọn sàn</a></p>`;

// Fetch all published posts that need fixing
const { data, error } = await sb.from('posts')
  .select('id, title, content, category')
  .eq('is_published', true)
  .order('id');

if (error) { console.error(error.message); process.exit(1); }

let updated = 0;
let skipped = 0;

for (const post of data) {
  const c = post.content || '';
  const hasTable = /<table/i.test(c);
  const hasFAQ = /FAQ|câu hỏi thường/i.test(c);
  const hasLinks = /href="\//i.test(c);

  // Skip if already has all 3
  if (hasTable && hasFAQ && hasLinks) { skipped++; continue; }

  let newContent = c;

  // Add internal links if missing
  if (!hasLinks) {
    // Find last </p> and inject links before closing
    newContent += '\n' + linksBlock;
  }

  // Add table if missing
  if (!hasTable) {
    newContent += '\n' + tableBlock;
  }

  // Add FAQ if missing
  if (!hasFAQ) {
    newContent += '\n' + faqBlock;
  }

  // Add CTA at the end
  if (!/bảng xếp hạng|top 10 sàn/i.test(newContent.slice(-500))) {
    newContent += '\n' + ctaBlock;
  }

  const { error: updateErr } = await sb.from('posts')
    .update({ content: newContent, updated_at: new Date().toISOString() })
    .eq('id', post.id);

  if (updateErr) {
    console.error(`❌ ${post.id}:`, updateErr.message);
  } else {
    updated++;
    console.log(`✅ ${post.id} | ${post.title.slice(0, 50)}`);
  }
}

console.log(`\n🎉 Done! Updated: ${updated} | Skipped (already OK): ${skipped} | Total: ${data.length}`);
process.exit(0);
