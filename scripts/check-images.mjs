import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const supabaseUrl = "https://ecipdcojedkbrlggaqja.supabase.co";
const supabaseAnonKey = "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function checkImageUrl(url) {
    try {
        const res = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(5000) });
        return res.ok;
    } catch {
        return false;
    }
}

async function main() {
    const { data: posts } = await supabase
        .from('posts')
        .select('id, title, slug, featured_image, content')
        .eq('is_published', true)
        .order('id', { ascending: true });

    if (!posts) return;

    const results = [];

    for (const post of posts) {
        const urls = [];
        if (post.featured_image) urls.push({ type: 'featured', url: post.featured_image });
        if (post.content) {
            const re = /<img[^>]+src=["']([^"']+)["']/gi;
            let m;
            while ((m = re.exec(post.content)) !== null) urls.push({ type: 'content', url: m[1] });
        }

        const checks = await Promise.all(urls.map(async u => ({ ...u, ok: await checkImageUrl(u.url) })));
        const broken = checks.filter(c => !c.ok);
        if (broken.length > 0) {
            results.push({ id: post.id, title: post.title, slug: post.slug, broken });
        }
    }

    writeFileSync('scripts/broken-results.json', JSON.stringify(results, null, 2), 'utf8');
    console.log('Done. Found ' + results.length + ' posts with broken images.');
}

main();
