import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function check() {
  console.log('--- Đang test hàm getPosts(true) ---');
  const { data: posts } = await supabase
        .from('posts')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

  console.log('Tổng số bài nhận được:', posts.length);
  const found = posts.find(p => p.id === 136 || p.slug === 'chien-luoc-price-action-cho-nguoi-moi-2026');
  if (found) {
    console.log('✅ Tìm thấy bài 136!');
    console.log('   ID:', found.id);
    console.log('   Title:', found.title);
    console.log('   Category:', found.category);
    console.log('   Is Published:', found.is_published);
  } else {
    console.log('❌ KHÔNG tìm thấy bài 136 trong danh sách Published');
    console.log('Bài mới nhất là:', posts[0]?.title);
  }
}
check();
