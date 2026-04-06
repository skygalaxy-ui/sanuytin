import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function search() {
  const { data, error } = await sb.from('posts').select('id, title').ilike('title', '%chiêu trò%');
  console.log('Search by title chiêu trò:', data);

  const { data: d2, error: e2 } = await sb.from('posts').select('id, title').ilike('content', '%danh giá nổi khắp%');
  console.log('Search by content danh giá:', d2);
}
search();
