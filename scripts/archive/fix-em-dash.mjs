/**
 * Script: Xóa dấu gạch dài (em dash —) trong nội dung và tiêu đề bài viết
 * Thay bằng dấu "-" hoặc xóa hoàn toàn tùy ngữ cảnh
 */
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE'
);

async function main() {
    console.log('🔧 Tìm và xóa dấu gạch dài (—) trong bài viết...\n');

    const { data: posts, error } = await sb
        .from('posts')
        .select('id, title, content')
        .eq('is_published', true);

    if (error || !posts) {
        console.error('❌ Lỗi:', error?.message);
        process.exit(1);
    }

    let updated = 0;

    for (const post of posts) {
        const titleHasDash = post.title.includes('—');
        const contentDashes = (post.content?.match(/—/g) || []).length;

        if (!titleHasDash && contentDashes === 0) continue;

        console.log(`📝 "${post.title}"`);

        if (titleHasDash) console.log(`   Title: có dấu —`);
        if (contentDashes > 0) console.log(`   Content: ${contentDashes} dấu —`);

        // Show context before fix
        if (contentDashes > 0) {
            const matches = post.content.match(/.{0,40}—.{0,40}/g) || [];
            matches.slice(0, 3).forEach(m => {
                const clean = m.replace(/<[^>]+>/g, '').trim();
                console.log(`   → "${clean}"`);
            });
        }

        // Replace em dash with " - " (space-hyphen-space)
        const newTitle = post.title.replaceAll('—', '-');
        const newContent = post.content?.replaceAll('—', ' - ') || post.content;

        const updates = {};
        if (titleHasDash) updates.title = newTitle;
        if (contentDashes > 0) updates.content = newContent;
        updates.updated_at = new Date().toISOString();

        const { error: updateErr } = await sb
            .from('posts')
            .update(updates)
            .eq('id', post.id);

        if (updateErr) {
            console.log(`   ❌ Lỗi update: ${updateErr.message}`);
        } else {
            console.log(`   ✅ Đã sửa!`);
            updated++;
        }
        console.log('');
    }

    console.log('='.repeat(40));
    console.log(`📊 Sửa xong: ${updated} bài viết`);
    console.log('='.repeat(40));
}

main().catch(console.error);
