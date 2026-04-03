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

const { data: pendingPosts, error: postsError } = await sb
    .from('posts')
    .select('id, title, slug, category, excerpt, scheduled_at')
    .eq('is_published', false)
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

            // --- BẮN TIN TỰ ĐỘNG SANG TELEGRAM CHANNEL ---
            try {
                const tgBotToken = process.env.TELEGRAM_BOT_TOKEN;
                const channelId = process.env.TELEGRAM_CHANNEL_ID;
                
                if (tgBotToken && channelId) {
                    const isKnowledge = post.category && ['kien-thuc', 'kien-thuc-forex', 'kien-thuc-dau-tu', 'kinh-nghiem'].includes(post.category);
                    const articleUrl = `https://sanuytin.net/${isKnowledge ? 'kien-thuc-forex' : 'tin-tuc'}/${post.slug}`;
                    const previewText = post.excerpt ? post.excerpt + '\n\n' : '';
                    
                    // Tránh các ký tự markdown đặc biệt gây lỗi
                    const safeTitle = post.title.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');
                    const safePreview = previewText.replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&');

                    const message = `🔥 *BÀI VIẾT MỚI:* *${safeTitle}*\n\n${safePreview}👉 [Đọc bài viết chi tiết tại đây](${articleUrl})`;
                    
                    const res = await fetch(`https://api.telegram.org/bot${tgBotToken}/sendMessage`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            chat_id: channelId,
                            text: message,
                            parse_mode: 'MarkdownV2',
                            link_preview_options: { is_disabled: false }
                        })
                    });
                    
                    if (res.ok) {
                        console.log(`     ✈️ Đã bắn tin thành công sang Channel`);
                    } else {
                        const errText = await res.text();
                        console.error(`     ⚠️ Lỗi khi bắn vào Channel:`, errText);
                    }
                }
            } catch(e) {
                console.error(`     ❌ Lỗi kết nối Telegram Channel:`, e.message);
            }
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

// ─── KẾT QUẢ ───
console.log('');
console.log('═══════════════════════════════════════════════');
console.log(`  🎉 Hoàn tất! Đã xử lý ${totalPublished} mục.`);
console.log('═══════════════════════════════════════════════');
console.log('');
