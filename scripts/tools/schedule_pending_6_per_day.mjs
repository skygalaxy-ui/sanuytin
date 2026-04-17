import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.production' });
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  dotenv.config({ path: '.env.local' });
}

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function run() {
    console.log("Đang lấy 9 bài chưa đăng để phân bổ lịch...");
    
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, published_at, is_published')
        .eq('is_published', false)
        .order('id', { ascending: true });
        
    if (error) {
        console.error("Lỗi lấy bài:", error);
        return;
    }

    console.log(`Tìm thấy ${posts.length} bài. Đang xếp lịch 6 bài/ngày...`);

    let currentDate = new Date();
    // Bắt đầu xếp lịch từ ngày mai
    currentDate.setDate(currentDate.getDate() + 1); 
    currentDate.setHours(8, 0, 0, 0); // Bắt đầu từ 8h sáng

    let postsInDay = 0;

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

        if (postsInDay >= 6) {
            // Đã đủ 6 bài cho ngày hiện tại, chuyển sang ngày tiếp theo
            currentDate.setDate(currentDate.getDate() + 1);
            currentDate.setHours(8, 0, 0, 0); // Về lại 8h sáng
            postsInDay = 0;
        }

        // Mỗi bài cách nhau 2 tiếng trong ngày (8h, 10h, 12h, 14h, 16h, 18h)
        const scheduledTime = new Date(currentDate);
        scheduledTime.setHours(8 + (postsInDay * 2));

        console.log(`- Xếp: "${post.title.substring(0, 40)}..." -> ${scheduledTime.toLocaleString('vi-VN')}`);

        const { error: updateError } = await supabase
            .from('posts')
            .update({ 
                published_at: scheduledTime.toISOString()
            })
            .eq('id', post.id);

        if (updateError) {
            console.error(`❌ Lỗi cập nhật ${post.id}:`, updateError);
        }

        postsInDay++;
    }
    
    console.log("✅ Đã hoàn tất lên lịch tự động!");
}

run();
