const { createClient } = require('@supabase/supabase-js');

const s = createClient(
    'https://ecipdcojedkbrlggaqja.supabase.co',
    'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K'
);

(async () => {
    const { data, error } = await s
        .from('posts')
        .select('title, slug, category, featured_image, is_published, published_at')
        .eq('is_published', true)
        .order('created_at', { ascending: false })
        .limit(6);

    console.log('Error:', error?.message || 'none');
    if (data) {
        data.forEach((p, i) => {
            console.log(`\n[${i + 1}] "${p.title}"`);
            console.log(`    category: "${p.category}"`);
            console.log(`    featured_image: ${p.featured_image ? p.featured_image.substring(0, 60) + '...' : 'NULL'}`);
            console.log(`    published: ${p.published_at || 'null'}`);
        });
    }
})();
