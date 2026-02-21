import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const DOMAIN = 'https://sanuytin.net';

// Static pages
const staticPages = [
    { path: '/', changefreq: 'daily', priority: '1.0' },
    { path: '/danh-gia-san/', changefreq: 'weekly', priority: '0.9' },
    { path: '/so-sanh/', changefreq: 'weekly', priority: '0.8' },
    { path: '/khuyen-mai/', changefreq: 'weekly', priority: '0.8' },
    { path: '/kien-thuc-forex/', changefreq: 'daily', priority: '0.9' },
    { path: '/tin-tuc/', changefreq: 'daily', priority: '0.8' },
    { path: '/thuat-ngu/', changefreq: 'monthly', priority: '0.7' },
    { path: '/cong-cu/', changefreq: 'monthly', priority: '0.7' },
    { path: '/lien-he/', changefreq: 'monthly', priority: '0.5' },
];

function getPostUrl(post) {
    if (post.category === 'kien-thuc' || post.category === 'huong-dan') {
        return `/kien-thuc-forex/${post.slug}`;
    }
    return `/tin-tuc/${post.slug}`;
}

async function main() {
    // Get all published posts
    const { data: posts } = await sb.from('posts')
        .select('slug, category, updated_at, published_at')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

    if (!posts) { console.log('❌ No posts found'); return; }

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    // Static pages
    const today = new Date().toISOString().split('T')[0];
    for (const page of staticPages) {
        xml += `  <url>
    <loc>${DOMAIN}${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
    }

    // Dynamic blog posts
    for (const post of posts) {
        const url = getPostUrl(post);
        const lastmod = (post.updated_at || post.published_at || new Date().toISOString()).split('T')[0];
        xml += `  <url>
    <loc>${DOMAIN}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    }

    xml += `</urlset>
`;

    writeFileSync('public/sitemap.xml', xml);
    console.log(`✅ Sitemap generated: ${staticPages.length} static + ${posts.length} posts = ${staticPages.length + posts.length} URLs`);
    console.log(`📁 Saved to public/sitemap.xml`);
}
main();
