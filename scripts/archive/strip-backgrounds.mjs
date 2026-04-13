import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function run() {
  const { data: posts, error } = await sb.from('posts').select('id, content');
  
  if (error) {
    console.error("DB Error:", error.message);
    return;
  }

  console.log(`Đang xử lý ${posts.length} bài viết để xóa màu nền (background)...`);
  
  let updatedCount = 0;
  for (const post of posts) {
    if (!post.content) continue;
    
    let result = post.content;
    
    // Gỡ các thuộc tính background, background-color, color (vì có thể trùng với nền trắng/đen)
    // RegExp bắt các dạng background / background-color inline
    result = result.replace(/background(?:-color)?\s*:\s*[^;"]+\s*;?/gi, '');
    
    // Gỡ thuộc tính color inline nếu có (tránh việc chữ bị trùng màu sau khi gỡ background)
    result = result.replace(/color\s*:\s*#[a-fA-F0-9]+\s*;?/gi, '');

    // Dọn dẹp style rỗng (nếu attribute style="" không còn nội dung)
    result = result.replace(/ style="\s*"/gi, '');
    
    if (result !== post.content) {
      const { error: updErr } = await sb.from('posts').update({ content: result }).eq('id', post.id);
      if (updErr) {
        console.error(`Lỗi update bài ${post.id}:`, updErr.message);
      } else {
        console.log(`Đã gỡ sạch Background cho bài ID: ${post.id}`);
        updatedCount++;
      }
    }
  }
  
  console.log(`Hoàn thành! Đã dọn dẹp sạch sẽ background cho ${updatedCount} bài viết.`);
}

run();
