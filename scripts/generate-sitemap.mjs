import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const supabase = createClient(
    "https://ecipdcojedkbrlggaqja.supabase.co",
    "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K"
);

const BASE_URL = 'https://sanuytin.net';

async function main() {
    console.log("🗺️  Generating sitemap from Supabase...\n");

    const { data: posts, error } = await supabase
        .from('posts')
        .select('slug, updated_at, published_at')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

    if (error) { console.error("❌ Error:", error); return; }

    const today = new Date().toISOString().split('T')[0];

    const staticPages = [
        { url: '/', priority: '1.0', changefreq: 'daily' },
        { url: '/danh-gia-san/', priority: '0.9', changefreq: 'weekly' },
        { url: '/so-sanh/', priority: '0.8', changefreq: 'weekly' },
        { url: '/khuyen-mai/', priority: '0.8', changefreq: 'weekly' },
        { url: '/kien-thuc-forex/', priority: '0.9', changefreq: 'daily' },
        { url: '/tin-tuc/', priority: '0.8', changefreq: 'daily' },
        { url: '/thuat-ngu/', priority: '0.7', changefreq: 'monthly' },
        { url: '/cong-cu/', priority: '0.7', changefreq: 'monthly' },
        { url: '/lien-he/', priority: '0.5', changefreq: 'monthly' },
    ];

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Static pages
    for (const page of staticPages) {
        xml += `  <url>\n`;
        xml += `    <loc>${BASE_URL}${page.url}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
        xml += `    <priority>${page.priority}</priority>\n`;
        xml += `  </url>\n`;
    }

    // Blog posts — correct path: /tin-tuc/slug/
    for (const post of (posts || [])) {
        const lastmod = (post.updated_at || post.published_at || today).split('T')[0];
        xml += `  <url>\n`;
        xml += `    <loc>${BASE_URL}/tin-tuc/${post.slug}/</loc>\n`;
        xml += `    <lastmod>${lastmod}</lastmod>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>0.7</priority>\n`;
        xml += `  </url>\n`;
    }

    xml += '</urlset>';

    fs.writeFileSync('public/sitemap.xml', xml, 'utf8');
    console.log(`✅ Sitemap generated:`);
    console.log(`   📄 ${staticPages.length} static pages`);
    console.log(`   📝 ${posts?.length || 0} blog posts`);
    console.log(`   📁 Saved to public/sitemap.xml`);
}

main().catch(console.error);
