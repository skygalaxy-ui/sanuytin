import { createClient } from '@supabase/supabase-js';

const sb = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

// Get all posts, find the 2 with lowest word count
const { data: allPosts } = await sb
    .from('posts')
    .select('id, title, slug, content, meta_title, meta_description, focus_keyword, tags, category_id')
    .eq('is_published', true);

const scored = (allPosts || []).map(p => {
    const plain = (p.content || '').replace(/<[^>]*>/g, '').trim();
    return { ...p, wordCount: plain.split(/\s+/).filter(w => w.length > 0).length };
}).sort((a, b) => a.wordCount - b.wordCount);

// Show bottom 5
for (const p of scored.slice(0, 5)) {
    console.log(`[${p.wordCount} tu] ID:${p.id} | ${p.title}`);
    console.log(`  slug: ${p.slug}`);
    console.log(`  cat_id: ${p.category_id}`);
    console.log(`  meta: ${p.meta_title}`);
    console.log(`  focus_kw: ${p.focus_keyword}`);
    console.log('');
}
