import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const featuredImages = [
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&q=80",
  "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80",
  "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200&q=80"
];

const contentImages = [
  "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
  "https://images.unsplash.com/photo-1604594849809-fd38dc9ee484?w=800&q=80",
  "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&q=80",
  "https://images.unsplash.com/photo-1585805562095-d227361adce6?w=800&q=80",
  "https://images.unsplash.com/photo-1614028674482-15f1a9a81177?w=800&q=80"
];

let usedFeatured = 0;
let usedContent = 0;

function fixContent(html, title) {
  let newHtml = html;

  // 1. Add Pros/Cons checkmarks
  newHtml = newHtml.replace(/(<h[23][^>]*>(Ưu điểm|Ưu điểm nổi bật).*?<\/h[23]>[\s\S]*?<ul>)([\s\S]*?)(<\/ul>)/gi, (match, prefix, title, listContent, suffix) => {
    let newList = listContent.replace(/<li>/gi, '<li>✅ ');
    return prefix + newList + suffix;
  });

  newHtml = newHtml.replace(/(<h[23][^>]*>(Nhược điểm|Hạn chế).*?<\/h[23]>[\s\S]*?<ul>)([\s\S]*?)(<\/ul>)/gi, (match, prefix, title, listContent, suffix) => {
    let newList = listContent.replace(/<li>/gi, '<li>❌ ');
    return prefix + newList + suffix;
  });

  // 2. Add 'Kết luận' if it doesn't exist
  if (!newHtml.match(/h[23][^>]*>.*Kết luận.*<\/h[23]/i)) {
    newHtml += `
      <h2>Kết luận</h2>
      <p>Tổng kết lại, bài viết đã cung cấp cho bạn cái nhìn toàn diện về <strong>${title}</strong>. Hy vọng với những kiến thức và đánh giá chi tiết này, bạn sẽ tự tin hơn trong việc đưa ra các quyết định đầu tư và giao dịch an toàn trên thị trường ngoại hối. Hãy luôn nhớ quản lý rủi ro thật chặt chẽ!</p>
    `;
  }

  // 3. Inject minimum 3 images
  const h2Count = (newHtml.match(/<h2/g) || []).length;
  const currentImages = (newHtml.match(/<img/g) || []).length;
  
  if (currentImages < 3) {
    let added = 0;
    const parts = newHtml.split(/<h2/i);
    let finalHtml = parts[0];
    
    for (let i = 1; i < parts.length; i++) {
        if (added < 3) {
            const imgUrl = contentImages[usedContent % contentImages.length];
            usedContent++;
            finalHtml += `<img src="${imgUrl}" alt="${title} minh họa phần ${i}" style="margin:20px auto;border-radius:10px;width:100%;object-fit:cover;" />\n<h2` + parts[i];
            added++;
        } else {
            finalHtml += "<h2" + parts[i];
        }
    }
    newHtml = finalHtml;
  }

  return newHtml;
}

async function run() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title, content, featured_image')
    .order('published_at', { ascending: false })
    .limit(10);

  if (error) {
    console.error(error);
    return;
  }

  for (const post of posts) {
    console.log('[Working on]', post.title);
    let updates = {};
    
    if (!post.featured_image) {
      updates.featured_image = featuredImages[usedFeatured % featuredImages.length];
      usedFeatured++;
    }

    if (post.content) {
       const newContent = fixContent(post.content, post.title);
       updates.content = newContent;
    }

    if (Object.keys(updates).length > 0) {
      const { error: upErr } = await supabase
        .from('posts')
        .update(updates)
        .eq('id', post.id);
      if (upErr) console.error("Error updating", post.title, upErr);
      else console.log("Updated", post.title);
    }
  }
}

run();
