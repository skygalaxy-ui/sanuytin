const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

(async () => {
    // Check overdue posts - are they published now?
    const ids = [
        '45a99d63-b20b-4d82-bf29-0e38c33df757',
        '258ec912-7346-47e7-87c2-9db03de177fc',
        '5250d1f3-0493-4430-97fe-9c6c477dcce1',
        '13e3ea7a-77b8-4a28-87aa-17bbd6d379dd',
        '70f19cdb-d058-4391-bc3c-74d6521e09bf',
        '4f5171e1-16a8-4f15-ad47-f9372372ed47',
        'bee6f933-b29a-4173-b484-df425c0b751b',
        '3b9ad3b3-1ed6-4824-bddb-32db63b61bc0',
        '6c73d6f9-e909-4cde-94a9-92078c13163a',
        'b5e4e09d-7c29-4798-bbc2-6e751c3e73ed',
        '7d3ea1ef-302e-44dc-b454-afa541816655',
        'b06b17a7-9980-4956-b7e2-e6e065d49ffe',
        '799d6485-4113-494f-87ef-0b698ac33d14',
        'bfa5efa9-a0f1-4c86-b371-bcb3a28e70ed',
        'df855f93-af4c-4879-a48b-82ff8d527110',
        '8a45dedd-bed2-49d9-b345-60382a9b37a2',
    ];

    const { data, error } = await supabase
        .from('posts')
        .select('id, title, is_published, scheduled_at')
        .in('id', ids);

    if (error) { console.log('Error:', error.message); return; }

    console.log('Status of 16 overdue posts:');
    let pubCount = 0, unpubCount = 0;
    data.forEach((p, i) => {
        const status = p.is_published ? 'PUBLISHED' : 'NOT YET';
        if (p.is_published) pubCount++;
        else unpubCount++;
        const sched = p.scheduled_at ? new Date(p.scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }) : 'null';
        console.log(`  [${i + 1}] ${status} | sched: ${sched} | ${p.title.substring(0, 50)}`);
    });
    console.log(`\nPublished: ${pubCount}, Not yet: ${unpubCount}`);

    // Also count total
    const { data: all } = await supabase
        .from('posts')
        .select('id, is_published, scheduled_at');

    const published = all.filter(p => p.is_published);
    const scheduled = all.filter(p => !p.is_published && p.scheduled_at);
    const drafts = all.filter(p => !p.is_published && !p.scheduled_at);

    console.log(`\nTOTAL: ${all.length} posts`);
    console.log(`  Published: ${published.length}`);
    console.log(`  Scheduled: ${scheduled.length}`);
    console.log(`  Draft: ${drafts.length}`);
})();
