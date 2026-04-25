import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Lỗi: Thiếu biến môi trường NEXT_PUBLIC_SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkQueue() {
  console.log("Đang kiểm tra hàng đợi bài viết (scheduled posts)...");
  
  const { data: posts, count, error } = await supabase
    .from('posts')
    .select('id, title, scheduled_at', { count: 'exact' })
    .eq('is_published', false)
    .is('deleted_at', null)
    .not('scheduled_at', 'is', null)
    .order('scheduled_at', { ascending: true });

  if (error) {
    console.error("Lỗi truy vấn:", error);
    return;
  }

  console.log(`\n===========================================`);
  console.log(`📊 BÁO CÁO: Có ${count || 0} bài viết đang xếp hàng chờ.`);
  console.log(`===========================================\n`);

  if (posts && posts.length > 0) {
    posts.forEach((post, index) => {
      const scheduleDate = new Date(post.scheduled_at).toLocaleString('vi-VN');
      console.log(`${index + 1}. ${post.title}`);
      console.log(`   ⏳ Hẹn lúc: ${scheduleDate}\n`);
    });
  }
}

checkQueue();
