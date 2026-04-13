import fs from 'fs';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Load env files in order of priority
dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env.production' });
dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ecipdcojedkbrlggaqja.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.log('⚠️ Thiếu SUPABASE_SERVICE_ROLE_KEY trong .env.local');
    process.exit(1);
}

const sb = createClient(supabaseUrl, supabaseKey);
const now = new Date().toISOString();
let totalPublished = 0;

console.log('');
console.log('═══════════════════════════════════════════════');
console.log('  🚀 SanUyTin Auto-Publish System');
console.log(`  🕐 ${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`);
console.log('═══════════════════════════════════════════════');
console.log('');

// ─── PHẦN 1: Kiểm tra bảng "posts" ───
console.log('📋 [1/2] Kiểm tra bảng POSTS (bài viết chờ đăng)...');

const newlyPublishedItems = [];

const { data: pendingPosts, error: postsError } = await sb
    .from('posts')
    .select('id, title, slug, category, excerpt, scheduled_at')
    // Loại bỏ điều kiện 'is_published': false vì website có thể đã tự động bật true trước khi cron chạy
    .not('scheduled_at', 'is', null)
    .lte('scheduled_at', now);

if (postsError) {
    console.error('  ❌ Lỗi truy vấn posts:', postsError.message);
} else if (!pendingPosts || pendingPosts.length === 0) {
    console.log('  ✅ Không có bài viết nào cần đăng.');
} else {
    console.log(`  📝 Tìm thấy ${pendingPosts.length} bài viết đến giờ đăng:`);
    for (const post of pendingPosts) {
        const { error: updateError } = await sb
            .from('posts')
            .update({
                is_published: true,
                scheduled_at: null,
                updated_at: now
            })
            .eq('id', post.id);

        if (updateError) {
            console.error(`     ❌ Thất bại: "${post.title}" - ${updateError.message}`);
        } else {
            console.log(`     ✅ ĐÃ ĐĂNG: "${post.title}"`);
            totalPublished++;

            // Đồng bộ với src/lib/categories.ts → KNOWLEDGE_CATEGORY_SLUGS
            const KNOWLEDGE_CATEGORIES = [
                'kien-thuc', 'kien-thuc-forex', 'kien-thuc-dau-tu',
                'huong-dan', 'kinh-nghiem', 'kien-thuc-nguoi-moi',
                'phan-tich-ky-thuat', 'quan-ly-von', 'cong-cu-trading', 'dau-tu-quy'
            ];
            const isKnowledge = post.category && KNOWLEDGE_CATEGORIES.includes(post.category);
            const articleUrl = `https://sanuytin.net/${isKnowledge ? 'kien-thuc-forex' : 'tin-tuc'}/${post.slug}`;
            
            newlyPublishedItems.push({
                title: post.title,
                url: articleUrl,
                excerpt: post.excerpt || ''
            });
        }
    }
}

// ─── PHẦN 2: Kiểm tra bảng "scheduled_content" ───
console.log('');
console.log('📋 [2/2] Kiểm tra bảng SCHEDULED_CONTENT (lịch nội dung)...');

const { data: scheduledItems, error: schedError } = await sb
    .from('scheduled_content')
    .select('*')
    .eq('status', 'scheduled')
    .lte('scheduled_date', now);

if (schedError) {
    console.error('  ❌ Lỗi truy vấn scheduled_content:', schedError.message);
} else if (!scheduledItems || scheduledItems.length === 0) {
    console.log('  ✅ Không có nội dung lịch nào cần xử lý.');
} else {
    console.log(`  📝 Tìm thấy ${scheduledItems.length} mục lịch đến giờ:`);
    for (const item of scheduledItems) {
        // Cập nhật trạng thái sang "published"
        const { error: updateError } = await sb
            .from('scheduled_content')
            .update({
                status: 'published',
                updated_at: now
            })
            .eq('id', item.id);

        if (updateError) {
            console.error(`     ❌ Thất bại: "${item.title}" - ${updateError.message}`);
        } else {
            console.log(`     ✅ ĐÃ CẬP NHẬT: "${item.title}" → published`);
            totalPublished++;
        }
    }
}

// ─── PHẦN 3: Kiểm tra bài quá hạn (overdue) ───
const { data: overdueItems } = await sb
    .from('scheduled_content')
    .select('id, title, scheduled_date')
    .eq('status', 'scheduled')
    .lt('scheduled_date', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());

if (overdueItems && overdueItems.length > 0) {
    console.log('');
    console.log(`⚠️  Cảnh báo: ${overdueItems.length} mục đã QUÁ HẠN hơn 7 ngày:`);
    for (const item of overdueItems) {
        await sb.from('scheduled_content').update({ status: 'overdue', updated_at: now }).eq('id', item.id);
        console.log(`     🔴 "${item.title}" (hạn: ${new Date(item.scheduled_date).toLocaleDateString('vi-VN')})`);
    }
}

// ─── PHẦN 4: Thu thập danh sách sắp tới & Xuất JSON ───
const endOfDay = new Date();
endOfDay.setHours(23, 59, 59, 999);

const { data: upcomingPosts } = await sb
    .from('posts')
    .select('title, scheduled_at')
    .eq('is_published', false)
    .gt('scheduled_at', now)
    .lte('scheduled_at', endOfDay.toISOString())
    .order('scheduled_at', { ascending: true });

fs.writeFileSync('publish_report.json', JSON.stringify({
    published: newlyPublishedItems,
    upcoming: upcomingPosts || []
}));

// ─── KẾT QUẢ ───
console.log('');
console.log('═══════════════════════════════════════════════');
console.log(`  🎉 Hoàn tất! Đã xử lý ${totalPublished} mục.`);
console.log('═══════════════════════════════════════════════');
console.log('');
