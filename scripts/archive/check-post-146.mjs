import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function checkPost() {
  const { data } = await sb.from('posts').select('content, title').eq('id', 146).single();
  console.log(data.title);
  console.log(data.content.substring(0, 1000));
}
checkPost();
