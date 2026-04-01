import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../.env.local') });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function checkOldPosts() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, is_published, created_at, content, featured_image')
        .order('published_at', { ascending: true }) // Using published_at ascending is better, or created_at
        .limit(10);

    if (error) {
        console.error("Lỗi:", error.message);
        return;
    }

    console.log(`\n=== BÁO CÁO CHÂT LƯỢNG NỘI DUNG (10 BÀI ĐĂNG CŨ NHẤT) ===\n`);
    
    for (const post of posts) {
        let issues = [];
        let isReview = post.title.toLowerCase().includes('review') || post.title.toLowerCase().includes('đánh giá') || post.title.toLowerCase().includes('so sánh');
        
        let hasFeaturedImage = !!post.featured_image;
        if (!hasFeaturedImage) issues.push("- ❌ Thiếu ảnh đại diện (featured_image)");

        let content = post.content || '';
        let textContent = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        let wordCount = textContent.split(' ').length;
        
        if (wordCount < 600) issues.push(`- ❌ Bài viết quá ngắn (Chỉ có ${wordCount} từ)`);

        let imgTagsCount = (content.match(/<img/g) || []).length;
        if (imgTagsCount < 3) issues.push(`- ❌ Thiếu ảnh trong bài (Mới có ${imgTagsCount}/3 ảnh)`);

        let hasConclusion = /h[23][^>]*>.*Kết\s*luận.*<\/h[23]/i.test(content) || /Kết\s*luận/i.test(content.substring(content.length - 1000));
        if (!hasConclusion) issues.push("- ❌ Thiếu phần/Từ 'Kết luận'");

        let checkmarksCount = (content.match(/✅/g) || []).length;
        let crossesCount = (content.match(/❌/g) || []).length;
        if (isReview && (checkmarksCount === 0 || crossesCount === 0)) {
            issues.push(`- ❌ Thiếu Icon phân định Ưu (✅) hoặc Nhược (❌) điểm cho bài Đánh giá`);
        }

        console.log(`[ID: ${post.id}] ${post.title}`);
        
        if (issues.length === 0) {
            console.log(`   👉 TỐT: Đạt đầy đủ tiêu chuẩn (${wordCount} từ, ${imgTagsCount} ảnh trong bài, có ảnh đại diện)`);
        } else {
            issues.forEach(i => console.log(`   ${i}`));
        }
        console.log('----------------------------------------------------');
    }
}

checkOldPosts();
