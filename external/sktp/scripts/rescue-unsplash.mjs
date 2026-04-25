import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Vui lòng set biến môi trường: NEXT_PUBLIC_SUPABASE_URL và SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function scanDatabase() {
  console.log("🔍 Đang quét toàn bộ dữ liệu bài viết để tìm ảnh Unsplash chết...");
  
  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title, featured_image, content')
    .is('deleted_at', null);

  if (error) {
    console.error("Lỗi truy vấn:", error);
    return;
  }

  let badFeaturedCount = 0;
  let badContentCount = 0;
  const brokenPosts = new Set();

  posts.forEach(post => {
    // Check featured_image
    if (post.featured_image && post.featured_image.includes('unsplash.com')) {
      badFeaturedCount++;
      brokenPosts.add(post.title);
    }
    
    // Check content
    if (post.content && post.content.includes('unsplash.com')) {
      // Find how many occurrences using regex
      const matches = post.content.match(/unsplash\.com/g);
      if (matches) {
        badContentCount += matches.length;
        brokenPosts.add(post.title);
      }
    }
  });

  console.log("\n📊 BÁO CÁO KẾT QUẢ QUÉT:");
  console.log("------------------------");
  console.log(`- Có ${badFeaturedCount} ảnh đại diện bài viết chứa link Unsplash.`);
  console.log(`- Có ${badContentCount} ảnh Unsplash nằm rải rác bên trong nội dung bài viết.`);
  console.log(`- Tổng số bài viết bị dính liên đới: ${brokenPosts.size} bài.`);
  
  if (brokenPosts.size > 0) {
    console.log("\n⚠️ Cảnh báo: Các bài viết này có nguy cơ rơi top tụt traffic do Google coi là hỏng UX/UI.");
    console.log("👉 Đề xuất bước tiếp theo: Cắm script tải toàn bộ về storage và update hàng loạt.");
  } else {
    console.log("✅ Tuyệt vời! Codebase của bạn sạch sẽ, không bài nào dùng ảnh Unsplash.");
  }
}

scanDatabase();
