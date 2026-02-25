// Script tự động publish bài viết đã lên lịch
// Chạy bởi cron job trên VPS mỗi 30 phút
//
// Setup cron (trên VPS):
//   crontab -e
//   Add: */30 * * * * cd /home/phuong/sanuytin && node scripts/publish-scheduled.mjs >> /tmp/publish-scheduled.log 2>&1

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ecipdcojedkbrlggaqja.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseKey) {
    console.error('❌ Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable');
    console.error('   Set it in .env.local or pass it as environment variable');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function publishScheduledPosts() {
    const now = new Date().toISOString();
    console.log(`\n🕐 [${now}] Checking scheduled posts...`);

    // Find posts that are scheduled and their publish time has passed
    const { data: scheduledPosts, error: fetchError } = await supabase
        .from('posts')
        .select('id, title, slug, scheduled_at')
        .eq('status', 'scheduled')
        .lte('scheduled_at', now);

    if (fetchError) {
        console.error('❌ Error fetching scheduled posts:', fetchError.message);
        return;
    }

    if (!scheduledPosts || scheduledPosts.length === 0) {
        console.log('✅ No posts to publish.');
        return;
    }

    console.log(`📝 Found ${scheduledPosts.length} post(s) to publish:`);

    for (const post of scheduledPosts) {
        const { error: updateError } = await supabase
            .from('posts')
            .update({
                status: 'published',
                published_at: post.scheduled_at || now,
            })
            .eq('id', post.id);

        if (updateError) {
            console.error(`   ❌ Failed: "${post.title}" — ${updateError.message}`);
        } else {
            console.log(`   ✅ Published: "${post.title}" (${post.slug})`);
        }
    }

    console.log(`🎉 Done! ${scheduledPosts.length} post(s) processed.`);
}

publishScheduledPosts().catch(err => {
    console.error('❌ Unexpected error:', err);
    process.exit(1);
});
