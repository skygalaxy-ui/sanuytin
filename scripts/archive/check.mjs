import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const { data } = await sb.from('posts').select('id, title, slug, is_published, scheduled_at, category').order('id', { ascending: false }).limit(10);
data.forEach(p => {
  const status = p.is_published ? 'PUB  ' : 'DRAFT';
  const sched = p.scheduled_at ? p.scheduled_at.substring(0,16) : 'none';
  console.log(`ID:${p.id} | ${status} | sched:${sched} | cat:${p.category} | ${p.title}`);
});
