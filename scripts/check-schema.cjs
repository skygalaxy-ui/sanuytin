const { createClient } = require('@supabase/supabase-js');
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');
(async () => {
    const { data: posts, count } = await s.from('posts').select('id, title, category_id, is_published', { count: 'exact' });
    console.log('Total posts: ' + (count || posts?.length || 0));

    const { data: cats } = await s.from('categories').select('id, name, slug');
    const catMap = {};
    cats.forEach(c => { catMap[c.id] = c.name + ' (' + c.slug + ')'; });

    // Distribution
    const dist = {};
    cats.forEach(c => { dist[c.slug] = 0; });
    dist['[no-category]'] = 0;

    posts.forEach(p => {
        const cat = cats.find(c => c.id === p.category_id);
        const key = cat ? cat.slug : '[no-category]';
        dist[key]++;
    });

    console.log('\nDistribution:');
    Object.entries(dist).sort((a, b) => b[1] - a[1]).forEach(([slug, count]) => {
        console.log('  ' + slug.padEnd(25) + count);
    });

    // Show first 5 posts with their categories
    console.log('\nSample posts:');
    posts.slice(0, 10).forEach(p => {
        console.log('  [' + (catMap[p.category_id] || 'NONE') + '] ' + p.title.substring(0, 60));
    });
})();
