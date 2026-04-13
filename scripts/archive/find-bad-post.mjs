import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function findBad() {
  const { data, error } = await sb.from('posts').select('id, title, content');
  if (error) { console.error(error); return; }
  let found = 0;
  for (const post of data) {
    if (post.title?.includes('Bonus') || post.title?.includes('Vén Màn') || post.content?.includes('Danh Giá Nổi Khắp')) {
      console.log(`BINGO! Found bad post: ${post.id}`);
      console.log(`Title: ${post.title}`);
      console.log(`Content length: ${post.content?.length}`);
      found++;
    }
  }
  console.log(`Found ${found} matching posts.`);
}
findBad();
