import { createClient } from '@supabase/supabase-js';
import { marked } from 'marked';
import dotenv from 'dotenv';
import fs from 'fs';
if (fs.existsSync('.env.production')) {
  dotenv.config({ path: '.env.production' });
} else {
  dotenv.config({ path: '.env.local' });
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function fix() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, slug, title, content');

  if (error) {
    console.error('Lỗi khi tải bài viết:', error);
    return;
  }

  for (const post of posts) {
    console.log(`Đang kiểm tra: ${post.title}`);
    
    // Nếu nội dung có vẻ chứa Markdown headers (đặc trưng ## )
    if (post.content && (post.content.includes('## ') || post.content.includes('**'))) {
      console.log('Phát hiện Markdown, đang dịch sang HTML...');
      
      const htmlContent = marked(post.content);
      
      const { error: updateError } = await supabase
        .from('posts')
        .update({ content: htmlContent })
        .eq('id', post.id);
        
      if (updateError) {
        console.error('Lỗi khi cập nhật:', updateError);
      } else {
        console.log(`Đã sửa xong định dạng HTML cho: ${post.slug}`);
      }
    } else {
      console.log('Nội dung đã là HTML hoặc không chứa Markdown, bỏ qua.');
    }
  }
}

fix();
