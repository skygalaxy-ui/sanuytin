// ╔══════════════════════════════════════════════════════════════════╗
// ║  AUTO-PUBLISH SCRIPT - SANUYTIN.NET                             ║
// ║  ⚠️  KHÔNG CHỈNH SỬA FILE NÀY - DO NOT MODIFY THIS FILE ⚠️     ║
// ║                                                                  ║
// ║  Script này chạy tự động qua cron job trên VPS mỗi 30 phút.    ║
// ║  Nó kiểm tra bài viết đã đến giờ đăng và tự động publish.      ║
// ║                                                                  ║
// ║  BẢNG POSTS:                                                     ║
// ║  is_published: boolean, scheduled_at: timestamptz                ║
// ╚══════════════════════════════════════════════════════════════════╝

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pbxpjmklrkkwatdvacap.supabase.co';
// 🔑 SERVICE ROLE KEY (Secret) - Bypass RLS
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4';

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

async function publishScheduledPosts() {
    const now = new Date();
    const nowISO = now.toISOString();
    const vnTime = now.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

    console.log(`\n[${vnTime}] Kiem tra bai viet da len lich...`);

    const { data: scheduledPosts, error: fetchError } = await supabase
        .from('posts')
        .select('id, title, slug, scheduled_at')
        .eq('is_published', false)
        .not('scheduled_at', 'is', null)
        .lte('scheduled_at', nowISO);

    if (fetchError) {
        console.error(`  LOI query: ${fetchError.message}`);
        return;
    }

    if (!scheduledPosts || scheduledPosts.length === 0) {
        console.log('  Khong co bai can publish.');
        return;
    }

    console.log(`  Tim thay ${scheduledPosts.length} bai can publish:`);

    let successCount = 0;
    for (const post of scheduledPosts) {
        const { error: updateError } = await supabase
            .from('posts')
            .update({
                is_published: true,
                updated_at: nowISO
            })
            .eq('id', post.id);

        if (updateError) {
            console.error(`  X FAIL: "${post.title}" - ${updateError.message}`);
        } else {
            console.log(`  V OK: "${post.title}"`);
            successCount++;
        }
    }
    console.log(`  Hoan tat: Publish thanh cong ${successCount} bai.`);
}

publishScheduledPosts().catch(err => {
    console.error('LOI NGHIEM TRONG:', err.message);
    process.exit(1);
});
