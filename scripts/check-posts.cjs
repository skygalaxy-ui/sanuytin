const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

// Columns: id, title, slug, excerpt, content, category_id, tags, is_published, 
// reading_time, featured_image, scheduled_at, created_at, updated_at, 
// focus_keyword, featured_image_alt, meta_title, meta_description

const now = new Date();
const nowISO = now.toISOString();

(async () => {
    // Get all posts
    const { data: allPosts, error } = await supabase
        .from('posts')
        .select('id, title, slug, category_id, is_published, scheduled_at, created_at, updated_at, reading_time, tags')
        .order('created_at', { ascending: false });

    if (error) {
        console.log('Error:', error.message);
        return;
    }

    console.log(`\nThoi gian hien tai (VN): ${now.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}`);
    console.log(`Thoi gian UTC: ${nowISO}\n`);

    // Classify posts
    const published = [];
    const scheduled = [];
    const drafts = [];

    allPosts.forEach(p => {
        if (p.is_published) {
            published.push(p);
        } else if (p.scheduled_at && new Date(p.scheduled_at) > now) {
            scheduled.push(p);
        } else if (p.scheduled_at && new Date(p.scheduled_at) <= now) {
            // Scheduled but past due - should have been published
            scheduled.push({ ...p, _overdue: true });
        } else {
            drafts.push(p);
        }
    });

    // Sort
    published.sort((a, b) => new Date(b.updated_at || b.created_at) - new Date(a.updated_at || a.created_at));
    scheduled.sort((a, b) => new Date(a.scheduled_at) - new Date(b.scheduled_at));

    // 1. Published
    console.log(`=== BAI DA DANG (published): ${published.length} bai ===`);
    console.log('-'.repeat(100));
    published.forEach((p, i) => {
        const date = new Date(p.updated_at || p.created_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
        console.log(`  [${String(i + 1).padStart(3)}] ID:${String(p.id).padStart(3)} | ${date} | cat:${String(p.category_id || '').padEnd(3)} | ${p.title}`);
    });

    console.log('');

    // 2. Scheduled
    console.log(`=== BAI DA LEN LICH (scheduled): ${scheduled.length} bai ===`);
    console.log('-'.repeat(100));
    scheduled.forEach((p, i) => {
        const schedDate = new Date(p.scheduled_at).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
        const marker = p._overdue ? 'QUA HAN!' : 'Cho...  ';
        console.log(`  [${String(i + 1).padStart(3)}] ID:${String(p.id).padStart(3)} | ${schedDate} | ${marker} | cat:${String(p.category_id || '').padEnd(3)} | ${p.title}`);
    });

    console.log('');

    // 3. Drafts
    console.log(`=== BAI NHAP (draft): ${drafts.length} bai ===`);
    console.log('-'.repeat(100));
    drafts.forEach((p, i) => {
        console.log(`  [${String(i + 1).padStart(3)}] ID:${String(p.id).padStart(3)} | cat:${String(p.category_id || '').padEnd(3)} | ${p.title}`);
    });

    // Summary
    console.log('\n' + '='.repeat(100));
    console.log(`TONG KET: ${allPosts.length} bai`);
    console.log(`   Da dang:  ${published.length}`);
    console.log(`   Len lich: ${scheduled.length} (qua han: ${scheduled.filter(s => s._overdue).length})`);
    console.log(`   Nhap:     ${drafts.length}`);
    console.log('='.repeat(100));
})();
