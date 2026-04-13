import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function run() {
  const { data: posts, error } = await sb.from('posts').select('id, content');
  if (error) {
    console.error("DB Error:", error.message);
    return;
  }

  console.log(`Dang xu ly ${posts.length} bai viet...`);
  
  let updatedCount = 0;
  for (const post of posts) {
    if (!post.content) continue;
    
    let result = post.content;
    
    // 1. Remove all emojis (using Unicode Property Escapes)
    // \p{Emoji_Presentation} catches colorful emojis (🚩, 🚀, ✅)
    // \p{Extended_Pictographic} catches even more icons.
    result = result.replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, '');
    
    // 2. Remove backgrounds and inline borders from div and nav tags that are causing colored boxes
    // This removes the style completely from these specific wrappers
    result = result.replace(/<div(?: class="[^"]*")? style="background:[^"]*">/g, '<div>');
    result = result.replace(/<nav(?: class="[^"]*")? style="background:[^"]*">/g, '<nav>');
    
    // If not matching the exact sequence, generic cleanup for background specifically:
    result = result.replace(/background(-color)?\s*:\s*#[a-fA-F0-9]+\s*;/g, '');
    result = result.replace(/border-left\s*:\s*[0-9]+px\s+solid\s+#[a-fA-F0-9]+\s*;/g, '');
    result = result.replace(/padding\s*:\s*[0-9]+px(\s+[0-9]+px)?\s*;/g, '');
    result = result.replace(/border-radius\s*:\s*[0-9]+px\s*;/g, '');
    
    // Cleanup empty style tags that might have been left over
    result = result.replace(/ style="\s*"/g, '');
    
    if (result !== post.content) {
      const { error: updErr } = await sb.from('posts').update({ content: result }).eq('id', post.id);
      if (updErr) {
        console.error(`Loi update bai ${post.id}:`, updErr.message);
      } else {
        console.log(`Da xoa Emoji & Background cho bai co ID: ${post.id}`);
        updatedCount++;
      }
    }
  }
  
  console.log(`Hoan thanh! Da dọn dẹp sach se ${updatedCount} bai viet.`);
}

run();
