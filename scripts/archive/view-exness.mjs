import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

async function viewExnessPost() {
    const { data: post } = await supabase.from('posts').select('id, title, content, excerpt').eq('id', 115).single();
    if (post) {
        console.log(`Title: ${post.title}`);
        console.log(`Content Length: ${post.content.length}`);
        console.log("Snippet:");
        console.log(post.content.substring(0, 500));
    }
}
viewExnessPost();
