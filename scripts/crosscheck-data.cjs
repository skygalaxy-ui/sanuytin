const { createClient } = require('@supabase/supabase-js');

const SKY_URL = 'https://ecipdcojedkbrlggaqja.supabase.co';
const SKY_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY';

const CDT_URL = 'https://pbxpjmklrkkwatdvacap.supabase.co';
const CDT_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4';

const skyDB = createClient(SKY_URL, SKY_KEY);
const cdtDB = createClient(CDT_URL, CDT_KEY);

(async () => {
    console.log('KIEM TRA DU LIEU DAN XEN GIUA 2 DATABASE');
    console.log('='.repeat(60));

    // ======= 1. LAY POSTS TU CA 2 DB =======
    // DB "sky" posts co cau truc khac (khong co category_id)
    const { data: skyPosts, error: skyErr } = await skyDB
        .from('posts')
        .select('id, title, slug, created_at');

    const { data: cdtPosts, error: cdtErr } = await cdtDB
        .from('posts')
        .select('id, title, slug, created_at');

    console.log(`\nDB "sky" (ecipd...): ${skyErr ? 'LOI: ' + skyErr.message : skyPosts.length + ' posts'}`);
    console.log(`DB "cachdautu" (pbxpj...): ${cdtErr ? 'LOI: ' + cdtErr.message : cdtPosts.length + ' posts'}`);

    if (skyErr || cdtErr) {
        console.log('\nKhong the kiem tra do loi truy cap.');
        return;
    }

    // ======= 2. TIM BAI TRUNG SLUG =======
    console.log('\n' + '='.repeat(60));
    console.log('1. TIM BAI TRUNG SLUG (cung URL):');
    console.log('='.repeat(60));

    const skySlugs = new Set(skyPosts.map(p => p.slug));
    const cdtSlugs = new Set(cdtPosts.map(p => p.slug));

    const sharedSlugs = [];
    for (const slug of skySlugs) {
        if (cdtSlugs.has(slug)) sharedSlugs.push(slug);
    }

    if (sharedSlugs.length === 0) {
        console.log('  KHONG CO bai trung slug. Du lieu TACH BIET hoan toan!');
    } else {
        console.log(`  ⚠ CO ${sharedSlugs.length} bai TRUNG SLUG:`);
        for (const slug of sharedSlugs) {
            const skyPost = skyPosts.find(p => p.slug === slug);
            const cdtPost = cdtPosts.find(p => p.slug === slug);
            console.log(`    slug: "${slug}"`);
            console.log(`      DB sky:      "${skyPost.title?.substring(0, 50)}" (${skyPost.created_at})`);
            console.log(`      DB cachdautu: "${cdtPost.title?.substring(0, 50)}" (${cdtPost.created_at})`);
        }
    }

    // ======= 3. TIM BAI TRUNG TITLE =======
    console.log('\n' + '='.repeat(60));
    console.log('2. TIM BAI TRUNG TITLE (cung tieu de):');
    console.log('='.repeat(60));

    const skyTitles = new Set(skyPosts.map(p => p.title));
    const sharedTitles = [];
    for (const title of skyTitles) {
        const cdtMatch = cdtPosts.find(p => p.title === title);
        if (cdtMatch) sharedTitles.push(title);
    }

    if (sharedTitles.length === 0) {
        console.log('  KHONG CO bai trung title.');
    } else {
        console.log(`  ⚠ CO ${sharedTitles.length} bai TRUNG TITLE:`);
        sharedTitles.forEach(t => console.log(`    - "${t?.substring(0, 60)}"`));
    }

    // ======= 4. KIEM TRA CATEGORIES =======
    console.log('\n' + '='.repeat(60));
    console.log('3. SO SANH CATEGORIES:');
    console.log('='.repeat(60));

    const { data: skyCats } = await skyDB.from('categories').select('name, slug');
    const { data: cdtCats } = await cdtDB.from('categories').select('name, slug');

    const skyCatSlugs = new Set((skyCats || []).map(c => c.slug));
    const cdtCatSlugs = new Set((cdtCats || []).map(c => c.slug));

    console.log(`  DB sky: ${skyCats?.length || 0} categories`);
    (skyCats || []).forEach(c => console.log(`    - ${c.name} (${c.slug})`));
    console.log(`  DB cachdautu: ${cdtCats?.length || 0} categories`);
    (cdtCats || []).forEach(c => console.log(`    - ${c.name} (${c.slug})`));

    const sharedCats = [];
    for (const slug of skyCatSlugs) {
        if (cdtCatSlugs.has(slug)) sharedCats.push(slug);
    }
    console.log(`\n  Categories trung nhau: ${sharedCats.length > 0 ? sharedCats.join(', ') : 'KHONG CO'}`);

    // ======= 5. KIEM TRA BROKERS =======
    console.log('\n' + '='.repeat(60));
    console.log('4. KIEM TRA BROKERS:');
    console.log('='.repeat(60));

    const { data: skyBrokers, error: skyBErr } = await skyDB.from('brokers').select('id, name').limit(5);
    const { data: cdtBrokers, error: cdtBErr } = await cdtDB.from('brokers').select('id, name').limit(5);

    console.log(`  DB sky: ${skyBErr ? 'KHONG CO bang brokers' : skyBrokers.length + ' brokers (mau)'}`);
    if (skyBrokers) skyBrokers.slice(0, 3).forEach(b => console.log(`    - ${b.name}`));
    console.log(`  DB cachdautu: ${cdtBErr ? 'KHONG CO bang brokers' : cdtBrokers.length + ' brokers (mau)'}`);
    if (cdtBrokers) cdtBrokers.slice(0, 3).forEach(b => console.log(`    - ${b.name}`));

    // ======= 6. NOI DUNG BAI VIET - PHAN LOAI =======
    console.log('\n' + '='.repeat(60));
    console.log('5. PHAN LOAI NOI DUNG BAI VIET:');
    console.log('='.repeat(60));

    // Sky posts - check if they look like sanuytin or cachdautu content
    console.log('\n  --- DB sky (ecipd) - Tat ca posts: ---');
    skyPosts.forEach((p, i) => {
        console.log(`    [${i + 1}] ${p.title?.substring(0, 70)}`);
    });

    console.log(`\n  --- DB cachdautu (pbxpj) - 10 mau posts dau: ---`);
    cdtPosts.slice(0, 10).forEach((p, i) => {
        console.log(`    [${i + 1}] ${p.title?.substring(0, 70)}`);
    });

    // ======= 7. KET LUAN =======
    console.log('\n' + '='.repeat(60));
    console.log('KET LUAN:');
    console.log('='.repeat(60));
    console.log(`  Bai trung slug:  ${sharedSlugs.length}`);
    console.log(`  Bai trung title: ${sharedTitles.length}`);
    console.log(`  Categories chung: ${sharedCats.length}`);
    if (sharedSlugs.length === 0 && sharedTitles.length === 0) {
        console.log('  ✅ Du lieu 2 DB HOAN TOAN TACH BIET, khong bi dan xen!');
    } else {
        console.log('  ⚠ CO du lieu bi dan xen giua 2 DB!');
    }
})();
