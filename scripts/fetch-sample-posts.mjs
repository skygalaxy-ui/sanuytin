import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    "https://ecipdcojedkbrlggaqja.supabase.co",
    "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K"
);

async function main() {
    // Fetch all posts with basic info
    const { data: posts } = await supabase
        .from('posts')
        .select('id, title, slug, category, tags, author, meta_title, meta_description, excerpt, is_published, published_at, content')
        .order('id', { ascending: true });

    // Show a few short posts' content structure
    const shortPosts = posts.filter(p => {
        const wc = (p.content || '').replace(/<[^>]*>/g, '').split(/\s+/).filter(w => w).length;
        return wc < 800;
    });

    console.log("=== SHORT POSTS (< 800 words) ===\n");
    for (const p of shortPosts.slice(0, 3)) {
        const wc = (p.content || '').replace(/<[^>]*>/g, '').split(/\s+/).filter(w => w).length;
        console.log(`--- ID:${p.id} | ${p.title} | ${wc} words ---`);
        console.log(`Category: ${p.category}`);
        console.log(`Tags: ${JSON.stringify(p.tags)}`);
        console.log(`Author: ${p.author}`);
        console.log(`Meta Title (${(p.meta_title || '').length}): ${p.meta_title}`);
        console.log(`Meta Desc (${(p.meta_description || '').length}): ${p.meta_description}`);
        console.log(`Excerpt (${(p.excerpt || '').length}): ${p.excerpt?.substring(0, 100)}`);

        // Show first 800 chars of content to understand structure
        console.log(`Content preview:\n${(p.content || '').substring(0, 1200)}`);
        console.log(`\n... Content end:\n${(p.content || '').slice(-500)}`);
        console.log("\n" + "=".repeat(80) + "\n");
    }

    // Show all post IDs, titles, word counts for mapping internal links
    console.log("\n\n=== ALL POSTS MAP (for internal linking) ===\n");
    for (const p of posts) {
        const wc = (p.content || '').replace(/<[^>]*>/g, '').split(/\s+/).filter(w => w).length;
        const hasLinks = (p.content || '').includes('href="/') || (p.content || '').includes('sanuytin');
        const hasFaq = (p.content || '').toLowerCase().includes('câu hỏi thường gặp') || (p.content || '').toLowerCase().includes('faq');
        console.log(`ID:${p.id} | ${wc}w | ${p.is_published ? 'PUB' : 'DRF'} | links:${hasLinks ? 'Y' : 'N'} | faq:${hasFaq ? 'Y' : 'N'} | ${p.slug}`);
    }
}

main().catch(console.error);
