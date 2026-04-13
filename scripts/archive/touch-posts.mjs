import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function run() {
  const ids = [176, 177, 178, 179, 180, 181, 182, 183];
  for (const id of ids) {
    const { data: post } = await sb.from('posts').select('*').eq('id', id).single();
    if (post) {
      await sb.from('posts').update({ 
          updated_at: new Date().toISOString(),
          is_published: true
      }).eq('id', id);
      console.log(`Touched ID ${id}`);
    }
  }
}
run();
