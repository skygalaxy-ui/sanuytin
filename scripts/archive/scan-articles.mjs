import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const { data, error } = await sb.from('posts').select('id, title, content, category').eq('is_published', true).order('id');
if (error) { console.error(error.message); process.exit(1); }

let needFix = [];
for (const d of data) {
  const c = d.content || '';
  const wc = c.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const hasTable = /<table/i.test(c);
  const hasFAQ = /FAQ|câu hỏi thường/i.test(c);
  const hasLinks = /href="\//i.test(c);
  if (wc < 600 || !hasTable || !hasFAQ || !hasLinks) {
    needFix.push({ id: d.id, title: d.title.slice(0, 55), wc, hasTable, hasFAQ, hasLinks, category: d.category });
    console.log(`${d.id} | ${wc}w | T:${hasTable?'✅':'❌'} F:${hasFAQ?'✅':'❌'} L:${hasLinks?'✅':'❌'} | ${d.title.slice(0,55)}`);
  }
}
console.log(`\nTotal published: ${data.length} | Need fix: ${needFix.length}`);
process.exit(0);
