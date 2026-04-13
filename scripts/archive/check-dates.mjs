import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function check() {
  const { data } = await sb.from('posts').select('id, title, created_at, updated_at, is_published, slug').order('id', { ascending: false }).limit(20);
  data.forEach(p => {
    console.log(`${p.id} | ${p.created_at.substring(0,10)} | ${p.updated_at.substring(0,10)} | ${p.is_published ? 'PUB' : 'DFT'} | ${p.title.substring(0,40)}`);
  });
}
check();
