import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const supabaseUrl = "https://pbxpjmklrkkwatdvacap.supabase.co";
const supabaseAnonKey = "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function main() {
    const { data: posts } = await supabase
        .from('posts')
        .select('id, title, slug, content, is_published')
        .eq('is_published', true)
        .order('id', { ascending: true });

    if (!posts) return;

    // Get first 3 posts content to analyze
    const samples = posts.slice(0, 3).map(p => ({
        id: p.id,
        title: p.title,
        contentPreview: p.content ? p.content.substring(0, 2000) : 'NO CONTENT',
    }));

    writeFileSync('scripts/sample-content.json', JSON.stringify(samples, null, 2), 'utf8');

    // Also list all post titles
    const allTitles = posts.map(p => `#${p.id}: ${p.title}`);
    writeFileSync('scripts/all-posts.txt', allTitles.join('\n'), 'utf8');

    console.log(`Saved ${posts.length} post titles and 3 sample contents.`);
}

main();
