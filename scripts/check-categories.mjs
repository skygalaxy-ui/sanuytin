import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    "https://ecipdcojedkbrlggaqja.supabase.co",
    "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K"
);

async function main() {
    // Get all published posts
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, category, is_published')
        .eq('is_published', true)
        .order('id');

    if (error) {
        console.error('Error:', error);
        return;
    }

    // Count by category
    const counts = {};
    posts.forEach(p => {
        const c = p.category || 'NULL';
        counts[c] = (counts[c] || 0) + 1;
    });

    console.log('=== CATEGORY DISTRIBUTION ===');
    Object.entries(counts).sort((a, b) => b[1] - a[1]).forEach(([c, n]) => {
        console.log(`  ${c}: ${n} bài`);
    });

    console.log('\n=== ALL POSTS WITH CATEGORIES ===');
    posts.forEach(p => {
        console.log(`  #${p.id}: [${p.category || 'NULL'}] ${p.title}`);
    });

    // Get categories table
    const { data: categories } = await supabase.from('categories').select('*');
    console.log('\n=== CATEGORIES TABLE ===');
    if (categories) {
        categories.forEach(c => console.log(`  ${c.slug}: ${c.name}`));
    }

    // Frontend expects these category slugs:
    console.log('\n=== FRONTEND EXPECTS ===');
    console.log('  tin-tuc, kien-thuc, huong-dan, phan-tich, review');
}

main().catch(console.error);
