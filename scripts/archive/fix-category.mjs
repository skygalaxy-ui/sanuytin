import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const fixes = [
  { id: 136, title: 'Chiến lược Price Action cho người mới bắt đầu 2026', meta_title: 'Chiến lược Price Action cho người mới bắt đầu 2026 | SanUyTin' },
  { id: 137, title: 'Review sàn Axi chi tiết 2026 - Ưu nhược điểm', meta_title: 'Review sàn Axi chi tiết 2026 - Ưu nhược điểm | SanUyTin' },
  { id: 138, title: 'So sánh Exness vs Pepperstone 2026 - Sàn nào tốt hơn?', meta_title: 'So sánh Exness vs Pepperstone 2026 | SanUyTin' },
  { id: 139, title: 'Top 5 chỉ báo kỹ thuật Forex hiệu quả nhất 2026', meta_title: 'Top 5 chỉ báo kỹ thuật Forex hiệu quả nhất 2026 | SanUyTin' },
  { id: 140, title: 'Cập nhật khuyến mãi sàn Forex tháng 4/2026 - Bonus nạp tiền', meta_title: 'Khuyến mãi sàn Forex tháng 4/2026 | SanUyTin' },
];

for (const f of fixes) {
  const { error } = await sb.from('posts').update({ title: f.title, meta_title: f.meta_title }).eq('id', f.id);
  if (error) console.log('❌', f.id, error.message);
  else console.log('✅', f.id, f.title);
}
