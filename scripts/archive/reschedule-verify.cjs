const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

// 16 bài quá hạn
const posts = [
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

(async () => {
    console.log('=== LEN LICH LAI 16 BAI QUA HAN ===\n');
    let ok = 0, fail = 0;

    for (let i = 0; i < posts.length; i++) {
        const { id, time } = posts[i];

        // Get title
        const { data: post } = await supabase.from('posts').select('title').eq('id', id).single();
        const title = post?.title?.substring(0, 55) || 'Unknown';

        // Update: set new schedule + ensure NOT published
        const { error } = await supabase
            .from('posts')
            .update({
                scheduled_at: time,
                is_published: false,
                updated_at: new Date().toISOString()
            })
            .eq('id', id);

        if (error) {
            console.log(`  X [${String(i + 1).padStart(2)}] FAIL: ${title} - ${error.message}`);
            fail++;
        } else {
            const vnTime = new Date(time).toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh',
                day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
            });
            console.log(`  V [${String(i + 1).padStart(2)}] ${vnTime} | ${title}`);
            ok++;
        }
    }

    console.log(`\nKet qua: ${ok}/${posts.length} thanh cong`);

    // Verify
    console.log('\n=== VERIFICATION ===');
    for (const { id, time } of posts) {
        const { data } = await supabase.from('posts').select('scheduled_at, is_published').eq('id', id).single();
        const match = data?.scheduled_at === time;
        const pub = data?.is_published;
        console.log(`  ${match ? 'OK' : 'MISMATCH'} | published: ${pub} | expected: ${time} | got: ${data?.scheduled_at}`);
    }
})();
