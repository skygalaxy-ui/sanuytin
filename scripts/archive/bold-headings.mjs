import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    "https://pbxpjmklrkkwatdvacap.supabase.co",
    "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K"
);

async function boldHeadings() {
    console.log("🔤 In đậm tiêu đề H2/H3 trong tất cả bài viết...\n");

    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, content')
        .order('id');

    if (error) { console.error("Lỗi:", error); return; }

    let updated = 0;
    let skipped = 0;

    for (const post of posts) {
        if (!post.content) { skipped++; continue; }

        let newContent = post.content;
        let changed = false;

        // Bold H2 content: <h2>Text</h2> → <h2><strong>Text</strong></h2>
        // But skip if already has <strong> inside
        newContent = newContent.replace(/<h2([^>]*)>((?!<strong>)(.+?))<\/h2>/gi, (match, attrs, content) => {
            // Skip if already wrapped in <strong>
            if (content.trim().startsWith('<strong>')) return match;
            changed = true;
            return `<h2${attrs}><strong>${content}</strong></h2>`;
        });

        // Bold H3 content: <h3>Text</h3> → <h3><strong>Text</strong></h3>
        newContent = newContent.replace(/<h3([^>]*)>((?!<strong>)(.+?))<\/h3>/gi, (match, attrs, content) => {
            if (content.trim().startsWith('<strong>')) return match;
            changed = true;
            return `<h3${attrs}><strong>${content}</strong></h3>`;
        });

        if (changed) {
            const { error: updateError } = await supabase
                .from('posts')
                .update({ content: newContent, updated_at: new Date().toISOString() })
                .eq('id', post.id);

            if (updateError) {
                console.log(`   ❌ ID:${post.id} — ${updateError.message}`);
            } else {
                updated++;
                console.log(`   ✅ ID:${post.id} — ${post.title.substring(0, 60)}`);
            }
        } else {
            skipped++;
        }
    }

    console.log(`\n${"=".repeat(50)}`);
    console.log(`✅ Hoàn tất: ${updated} bài đã in đậm tiêu đề, ${skipped} bài bỏ qua`);
    console.log("=".repeat(50));
}

boldHeadings().catch(console.error);
