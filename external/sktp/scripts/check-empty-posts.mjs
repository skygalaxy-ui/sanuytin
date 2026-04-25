import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabaseAdmin = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log('Đang kiểm tra các bài viết thiếu nội dung...');
  
  // Fetch posts where content is empty or null, or <p></p>
  const { data, error } = await supabaseAdmin
    .from('posts')
    .select('id, title, slug, content, is_published');
    
  if (error) {
    console.error('Lỗi truy vấn:', error);
    return;
  }
  
  const emptyPosts = data.filter(post => {
    // Chỉ kiểm tra các bài đã xuất bản
    if (!post.is_published) return false;
    
    if (!post.content) return true;
    
    const textOnly = post.content.replace(/<[^>]*>?/gm, '').trim();
    const isTooShort = textOnly.length < 150; // Thường bài viết thật phải dài hơn 150 ký tự
    
    // Kiểm tra thêm các cụm từ placeholder
    const lowerContent = textOnly.toLowerCase();
    const hasPlaceholder = lowerContent.includes('tobe rewritten') || 
                           lowerContent.includes('ai bot') || 
                           lowerContent.includes('lorem ipsum');
                           
    return isTooShort || hasPlaceholder;
  });

  console.log(`Kiểm tra các bài viết ĐÃ XUẤT BẢN...`);
  console.log(`Tìm thấy ${emptyPosts.length} bài viết bị lỗi (quá ngắn hoặc chứa placeholder):`);
  console.log('---');
  
  emptyPosts.forEach((post, index) => {
    console.log(`[${index + 1}] Tiêu đề: ${post.title}`);
    console.log(`    Slug: ${post.slug}`);
    console.log(`    Nội dung thô: ${post.content?.substring(0, 80)}...`);
    console.log(`    Độ dài text: ${post.content?.replace(/<[^>]*>?/gm, '').trim().length} ký tự`);
    console.log(`    ID: ${post.id}`);
    console.log('---');
  });
}

main();
