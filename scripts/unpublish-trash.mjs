import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function findCapitalizedTrash() {
  const { data, error } = await sb.from('posts').select('id, title, content');
  if (error) { console.error(error); return; }
  
  let count = 0;
  for (const post of data) {
    if (!post.content) continue;
    // Extract first 20 words from the content (stripping HTML)
    const text = post.content.replace(/<[^>]+>/g, '').trim();
    if (!text) continue;
    const words = text.split(/\s+/).slice(0, 50);
    // Count how many words are capitalized
    let capCount = 0;
    for (const w of words) {
      if (w.length > 0 && w[0] === w[0].toUpperCase() && w[0].match(/[A-ZÂĂĐÊÔƠƯ]/i)) {
        capCount++;
      }
    }
    // If more than 70% of words are capitalized, it's trash
    if (capCount / words.length > 0.4) {
      console.log(`[TRASH DETECTED] ID: ${post.id} | Title: ${post.title}`);
      count++;
      
      // Unpublish it
      await sb.from('posts').update({ is_published: false }).eq('id', post.id);
      console.log(` -> Unpublished ${post.id}`);
    }
  }
  console.log(`Found and unpublished ${count} trash articles.`);
}
findCapitalizedTrash();
