import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://pbxpjmklrkkwatdvacap.supabase.co";
const supabaseAnonKey = "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function main() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, slug, featured_image, category, is_published, published_at')
        .eq('is_published', true)
        .order('published_at', { ascending: false, nullsFirst: false })
        .limit(10);

    if (error) {
        console.error('Error:', error);
        return;
    }

    console.log(`\n=== TOP 10 BAI VIET MOI NHAT ===\n`);
    posts.forEach((p, i) => {
        console.log(`#${i + 1} [ID: ${p.id}]`);
        console.log(`   Title: ${p.title}`);
        console.log(`   Slug: ${p.slug}`);
        console.log(`   Category: ${p.category}`);
        console.log(`   Published: ${p.published_at}`);
        console.log(`   Featured Image: ${p.featured_image || '❌ MISSING'}`);
        console.log('');
    });
}

main();
