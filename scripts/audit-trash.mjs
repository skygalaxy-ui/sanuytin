import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function checkTrash() {
  const { data, error } = await sb.from('posts').select('id, title, slug');
  if (error) { console.error(error); return; }
  console.log("TITLES IN DB:");
  data.forEach(p => console.log(`- ${p.title} (${p.slug})`));
}
checkTrash();
