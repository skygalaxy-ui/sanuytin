const { createClient } = require('@supabase/supabase-js');

// ═══════════════════════════════════════════════════════
// NEW SERVICE ROLE KEY FOR PROJECT: pbxpjmklrkkwatdvacap (cachdautu/sanuytin)
// This key bypasses RLS and allows direct database updates.
// ═══════════════════════════════════════════════════════
const SUPABASE_URL = 'https://pbxpjmklrkkwatdvacap.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4';

const supabase = createClient(SUPABASE_URL, SERVICE_KEY);

// 16 overdue post IDs
const OVERDUE_POSTS = [
    { id: '45a99d63-b20b-4d82-bf29-0e38c33df757', time: '2026-03-03T08:00:00Z' },   // 03/03 15:00 VN
    { id: '258ec912-7346-47e7-87c2-9db03de177fc', time: '2026-03-04T02:00:00Z' },   // 04/03 09:00 VN
    { id: '5250d1f3-0493-4430-97fe-9c6c477dcce1', time: '2026-03-04T08:00:00Z' },   // 04/03 15:00 VN
    { id: '13e3ea7a-77b8-4a28-87aa-17bbd6d379dd', time: '2026-03-05T02:00:00Z' },   // 05/03 09:00 VN
    { id: '70f19cdb-d058-4391-bc3c-74d6521e09bf', time: '2026-03-05T08:00:00Z' },   // 05/03 15:00 VN
    { id: '4f5171e1-16a8-4f15-ad47-f9372372ed47', time: '2026-03-06T02:00:00Z' },   // 06/03 09:00 VN
    { id: 'bee6f933-b29a-4173-b484-df425c0b751b', time: '2026-03-06T08:00:00Z' },   // 06/03 15:00 VN
    { id: '3b9ad3b3-1ed6-4824-bddb-32db63b61bc0', time: '2026-03-07T02:00:00Z' },   // 07/03 09:00 VN
    { id: '6c73d6f9-e909-4cde-94a9-92078c13163a', time: '2026-03-07T08:00:00Z' },   // 07/03 15:00 VN
    { id: 'b5e4e09d-7c29-4798-bbc2-6e751c3e73ed', time: '2026-03-08T02:00:00Z' },   // 08/03 09:00 VN
    { id: '7d3ea1ef-302e-44dc-b454-afa541816655', time: '2026-03-08T08:00:00Z' },   // 08/03 15:00 VN
    { id: 'b06b17a7-9980-4956-b7e2-e6e065d49ffe', time: '2026-03-09T02:00:00Z' },   // 09/03 09:00 VN
    { id: '799d6485-4113-494f-87ef-0b698ac33d14', time: '2026-03-09T08:00:00Z' },   // 09/03 15:00 VN
    { id: 'bfa5efa9-a0f1-4c86-b371-bcb3a28e70ed', time: '2026-03-10T02:00:00Z' },   // 10/03 09:00 VN
    { id: 'df855f93-af4c-4879-a48b-82ff8d527110', time: '2026-03-10T08:00:00Z' },   // 10/03 15:00 VN
    { id: '8a45dedd-bed2-49d9-b345-60382a9b37a2', time: '2026-03-11T02:00:00Z' },   // 11/03 09:00 VN
];

async function run() {
    console.log('🚀 DUNG SERVICE ROLE KEY DE LEN LICH LAI 16 BAI...');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    let successCount = 0;

    for (const item of OVERDUE_POSTS) {
        // Fetch title for logging
        const { data: post } = await supabase.from('posts').select('title').eq('id', item.id).single();
        const title = post?.title?.substring(0, 50) || 'Unknown';

        // Update with Service Role Key (Bypass RLS)
        const { data, error } = await supabase
            .from('posts')
            .update({
                scheduled_at: item.time,
                is_published: false,
                updated_at: new Date().toISOString()
            })
            .eq('id', item.id)
            .select(); // Return row to confirm write

        if (error) {
            console.log(`  ❌ FAIL: "${title}" - ${error.message}`);
        } else if (data && data.length > 0) {
            const vnTime = new Date(item.time).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
            console.log(`  ✅ OK: "${title}" -> ${vnTime}`);
            successCount++;
        } else {
            console.log(`  ⚠️ WARN: Update returned 0 rows for "${title}"`);
        }
    }

    console.log(`\n📊 Ket qua: ${successCount}/16 bai da duoc len lich lai thanh cong.`);

    // Verify one sample post to be 100% sure
    console.log('\n🔍 Verification Check:');
    const { data: verify } = await supabase.from('posts').select('scheduled_at').eq('id', OVERDUE_POSTS[0].id).single();
    console.log(`  Post ID: ${OVERDUE_POSTS[0].id}`);
    console.log(`  Expected: ${OVERDUE_POSTS[0].time}`);
    console.log(`  Reality:  ${verify?.scheduled_at}`);

    if (verify?.scheduled_at === OVERDUE_POSTS[0].time) {
        console.log('  🎯 CONFIRMED: Database write successfully persisted!');
    } else {
        console.log('  💥 ERROR: Database write still NOT persisting!');
    }
}

run();
