import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://ecipdcojedkbrlggaqja.supabase.co',
    'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K'
);

const BASE_URL = 'https://sanuytin.net';

// Static pages with their priorities
const STATIC_PAGES = [
    { path: '/', changefreq: 'daily', priority: '1.0' },
    { path: '/danh-gia-san/', changefreq: 'weekly', priority: '0.9' },
    { path: '/kien-thuc-forex/', changefreq: 'daily', priority: '0.9' },
    { path: '/tin-tuc/', changefreq: 'daily', priority: '0.8' },
    { path: '/so-sanh/', changefreq: 'weekly', priority: '0.8' },
    { path: '/khuyen-mai/', changefreq: 'weekly', priority: '0.8' },
    { path: '/thuat-ngu/', changefreq: 'monthly', priority: '0.7' },
    { path: '/cong-cu/', changefreq: 'monthly', priority: '0.7' },
    { path: '/lien-he/', changefreq: 'monthly', priority: '0.5' },
    { path: '/dieu-khoan-su-dung/', changefreq: 'monthly', priority: '0.3' },
    { path: '/chinh-sach-bao-mat/', changefreq: 'monthly', priority: '0.3' },
];

function toISODate(dateStr) {
    if (!dateStr) return new Date().toISOString().split('T')[0];
    return new Date(dateStr).toISOString().split('T')[0];
}

function escapeXml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function generateSitemap() {
    console.log('🗺️  Generating sitemap.xml...\n');

    const urls = [];
    const today = new Date().toISOString().split('T')[0];

    // 1. Static pages
    for (const page of STATIC_PAGES) {
        urls.push({
            loc: `${BASE_URL}${page.path}`,
            lastmod: today,
            changefreq: page.changefreq,
            priority: page.priority,
        });
    }
    console.log(`  ✅ ${STATIC_PAGES.length} static pages`);

    // 2. Brokers
    const { data: brokers, error: brokerErr } = await supabase
        .from('brokers')
        .select('slug, updated_at')
        .order('rank');

    if (brokerErr) {
        console.log(`  ❌ Brokers error: ${brokerErr.message}`);
    } else if (brokers) {
        for (const broker of brokers) {
            if (broker.slug) {
                urls.push({
                    loc: `${BASE_URL}/${broker.slug}/`,
                    lastmod: toISODate(broker.updated_at),
                    changefreq: 'weekly',
                    priority: '0.8',
                });
            }
        }
        console.log(`  ✅ ${brokers.length} broker pages`);
    }

    // 3. Published posts (tin-tuc + kien-thuc-forex)
    const { data: posts, error: postErr } = await supabase
        .from('posts')
        .select('slug, category, updated_at, published_at')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

    if (postErr) {
        console.log(`  ❌ Posts error: ${postErr.message}`);
    } else if (posts) {
        let kienThucCount = 0;
        let tinTucCount = 0;

        for (const post of posts) {
            if (!post.slug) continue;

            // Map category to URL path
            // 'so-sanh' category goes under /tin-tuc/, everything else under /kien-thuc-forex/
            const isTinTuc = post.category === 'so-sanh';
            const categoryPath = isTinTuc ? 'tin-tuc' : 'kien-thuc-forex';
            const lastmod = toISODate(post.updated_at || post.published_at);

            urls.push({
                loc: `${BASE_URL}/${categoryPath}/${post.slug}/`,
                lastmod,
                changefreq: 'weekly',
                priority: '0.7',
            });

            if (isTinTuc) tinTucCount++;
            else kienThucCount++;
        }
        console.log(`  ✅ ${kienThucCount} kien-thuc-forex posts`);
        console.log(`  ✅ ${tinTucCount} tin-tuc posts`);
    }

    // Build XML
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    for (const url of urls) {
        xml += '  <url>\n';
        xml += `    <loc>${escapeXml(url.loc)}</loc>\n`;
        xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
        xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
        xml += `    <priority>${url.priority}</priority>\n`;
        xml += '  </url>\n';
    }

    xml += '</urlset>\n';

    // Write file
    const fs = await import('fs');
    const path = await import('path');

    const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, xml, 'utf-8');

    console.log(`\n✅ Sitemap generated: ${urls.length} URLs`);
    console.log(`📄 Saved to: public/sitemap.xml`);
}

generateSitemap().catch(console.error);
