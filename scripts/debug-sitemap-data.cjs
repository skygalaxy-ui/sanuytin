const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://pbxpjmklrkkwatdvacap.supabase.co';
const serviceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4';

const supabase = createClient(supabaseUrl, serviceKey);

async function run() {
    console.log('--- FETCHING POSTS FOR SITEMAP ---');
    const { data: posts, error } = await supabase
        .from('posts')
        .select('slug, title, is_published, category');

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log('Total posts:', posts.length);
    console.log('Published:', posts.filter(p => p.is_published).length);
    console.log('Not published:', posts.filter(p => !p.is_published).length);

    const categories = [...new Set(posts.map(p => p.category))];
    console.log('Categories found:', categories);

    console.log('\n--- SAMPLE SLUGS (Published) ---');
    console.log(posts.filter(p => p.is_published).slice(0, 5).map(p => p.slug));
}

run();
