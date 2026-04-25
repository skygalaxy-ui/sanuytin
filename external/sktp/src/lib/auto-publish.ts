import { supabaseAdmin } from './supabase-admin';
import { sendTelegramMessage } from './telegram';

/**
 * Server-side auto-publish: checks for overdue scheduled posts and publishes them.
 * This runs on every blog page visit (server component) to ensure posts are published
 * even without an external cron job.
 * 
 * Uses service_role key to bypass RLS.
 */

let lastCheck = 0;
const CHECK_INTERVAL = 60_000; // Only check once per minute to avoid excessive DB calls

export async function autoPublishOverduePosts(): Promise<number> {
    // Throttle: don't check more than once per minute
    const now = Date.now();
    if (now - lastCheck < CHECK_INTERVAL) return 0;
    lastCheck = now;

    try {
        const currentTime = new Date().toISOString();

        // Find all posts that are: not published, have a scheduled_at in the past
        const { data: overduePosts, error: fetchError } = await supabaseAdmin
            .from('posts')
            .select('id, title')
            .eq('is_published', false)
            .is('deleted_at', null)
            .not('scheduled_at', 'is', null)
            .lte('scheduled_at', currentTime);

        if (fetchError || !overduePosts || overduePosts.length === 0) {
            return 0;
        }

        // Publish each overdue post
        for (const post of overduePosts) {
            await supabaseAdmin.from('posts').update({
                is_published: true,
                published_at: currentTime,
                scheduled_at: null,
                updated_at: currentTime
            }).eq('id', post.id);
            
            await sendTelegramMessage(`<b>⏰ Đã Tới Giờ Lên Sóng!</b>\n\n📌 <b>Hệ thống vừa tự động đẩy public bài viết:</b> ${post.title}`);
        }

        console.log(`[AutoPublish] Published ${overduePosts.length} overdue posts:`, 
            overduePosts.map(p => p.title).join(', '));

        return overduePosts.length;
    } catch (error) {
        console.error('[AutoPublish] Error:', error);
        return 0;
    }
}
