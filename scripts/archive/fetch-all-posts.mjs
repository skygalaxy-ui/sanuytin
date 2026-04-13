import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const supabaseUrl = "https://pbxpjmklrkkwatdvacap.supabase.co";
const supabaseAnonKey = "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function main() {
    const { data: posts } = await supabase
        .from('posts')
        .select('id, title, slug, content')
        .eq('is_published', true)
        .order('id', { ascending: true });

    if (!posts) return;

    // Save full content of all posts for review
    for (const p of posts) {
        const filename = `scripts/posts/post_${p.id}.json`;
        writeFileSync(filename, JSON.stringify({
            id: p.id,
            title: p.title,
            slug: p.slug,
            content: p.content
        }, null, 2), 'utf8');
    }

    console.log(`Saved ${posts.length} posts to scripts/posts/`);

    // Print summary
    for (const p of posts) {
        const linkCount = (p.content?.match(/<a /gi) || []).length;
        const imgCount = (p.content?.match(/<img /gi) || []).length;
        const listCount = (p.content?.match(/<li/gi) || []).length;
        const tableCount = (p.content?.match(/<table/gi) || []).length;
        const contentLen = p.content?.length || 0;
        console.log(`#${p.id} | ${p.title.substring(0, 50)} | ${contentLen}ch | ${linkCount}links | ${imgCount}imgs | ${listCount}li | ${tableCount}tables`);
    }
}

main();
