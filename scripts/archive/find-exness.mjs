import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

async function checkExness() {
    const { data: posts } = await supabase
        .from('posts')
        .select('id, title, category, slug, is_published')
        .ilike('title', '%exness%');

    console.log("Tìm thấy các bài viết chứa 'Exness':", posts);
}

checkExness();
