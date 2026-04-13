import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function run() {
  const ids = [176, 177, 178, 179, 180, 181, 182, 183];
  for (const id of ids) {
    const { data: post } = await sb.from('posts').select('slug').eq('id', id).single();
    if (post) {
      if (!post.slug.endsWith('-moi')) {
          const newSlug = post.slug + '-moi';
          await sb.from('posts').update({ slug: newSlug }).eq('id', id);
          console.log(`Updated ID ${id}: ${newSlug}`);
      }
    }
  }
}
run();
