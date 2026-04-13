const { createClient } = require('@supabase/supabase-js');

// DB "sky" (ecipd...) = Đúng ra phải là cho SANUYTIN.NET
const SKY_URL = 'https://ecipdcojedkbrlggaqja.supabase.co';
const SKY_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY';

// DB "cachdautu" (pbxpj...) = Đúng ra phải là cho CACHDAUTU.COM
const CDT_URL = 'https://pbxpjmklrkkwatdvacap.supabase.co';
const CDT_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4';

async function inspectDB(name, url, key) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`DB: "${name}" (${url.split('//')[1].split('.')[0]})`);
    console.log('='.repeat(60));

    const sb = createClient(url, key);

    // Check posts table
    const { data: posts, error: postsErr, count: postsCount } = await sb
        .from('posts')
        .select('id, title, slug, is_published, scheduled_at, category_id', { count: 'exact' })
        .limit(5);

    if (postsErr) {
        console.log(`  posts table: ${postsErr.message}`);
    } else {
        console.log(`  POSTS: ${postsCount} bai`);
        if (posts && posts.length > 0) {
            const { data: allPosts } = await sb.from('posts').select('is_published');
            const pubCount = allPosts ? allPosts.filter(p => p.is_published).length : '?';
            const unpubCount = allPosts ? allPosts.filter(p => !p.is_published).length : '?';
            console.log(`    Published: ${pubCount}, Chua publish: ${unpubCount}`);
            console.log(`  Mau bai viet:`);
            posts.slice(0, 3).forEach((p, i) => {
                console.log(`    [${i + 1}] "${p.title?.substring(0, 60)}"`);
                console.log(`        slug: ${p.slug?.substring(0, 50)}`);
            });
        }
    }

    // Check categories
    const { data: cats, error: catsErr } = await sb.from('categories').select('id, name, slug');
    if (catsErr) {
        console.log(`\n  categories: KHONG TON TAI`);
    } else {
        console.log(`\n  CATEGORIES: ${cats?.length || 0} danh muc`);
        if (cats) cats.forEach(c => console.log(`    - ${c.name} (${c.slug})`));
    }

    // Check other tables
    const tables = ['brokers', 'pages', 'users', 'profiles', 'comments', 'contacts', 'settings', 'subscribers', 'products', 'orders'];
    console.log(`\n  Cac bang khac:`);
    for (const table of tables) {
        const { data: tData, error: tErr } = await sb.from(table).select('id').limit(1);
        if (!tErr) {
            const { count } = await sb.from(table).select('id', { count: 'exact', head: true });
            console.log(`    ${table}: ${count} records`);
        }
    }
}

(async () => {
    console.log('KIEM TRA 2 DATABASE DE XAC DINH DU LIEU DANG O DAU');
    console.log('Thoi gian: ' + new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }));

    await inspectDB('sky (cho sanuytin.net)', SKY_URL, SKY_KEY);
    await inspectDB('cachdautu (cho cachdautu.com)', CDT_URL, CDT_KEY);

    console.log('\n\nDONE.');
})();
