const { createClient } = require('@supabase/supabase-js');
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD');

(async () => {
    const { data: posts } = await s.from('posts').select('id, title, category, is_published').order('published_at', { ascending: false });

    console.log('Total posts: ' + (posts?.length || 0));

    // Count per category
    const dist = {};
    (posts || []).forEach(p => {
        const cat = p.category || '[none]';
        dist[cat] = (dist[cat] || 0) + 1;
    });

    console.log('\n=== DISTRIBUTION ===');
    Object.entries(dist).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
        console.log('  ' + cat.padEnd(20) + count);
    });

    console.log('\n=== SAMPLE POSTS BY CATEGORY ===');
    Object.keys(dist).forEach(cat => {
        console.log('\n[' + cat + ']');
        (posts || []).filter(p => (p.category || '[none]') === cat).slice(0, 3).forEach(p => {
            console.log('  - ' + p.title.substring(0, 70));
        });
    });
})();
