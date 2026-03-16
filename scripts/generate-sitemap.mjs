import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Use Service Role Key for reliability in server-side script
const supabaseUrl = 'https://pbxpjmklrkkwatdvacap.supabase.co';
const serviceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4';

const supabase = createClient(supabaseUrl, serviceKey);

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
    try {
        return new Date(dateStr).toISOString().split('T')[0];
    } catch (e) {
        return new Date().toISOString().split('T')[0];
    }
}

function escapeXml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function getBrokersFromData() {
    try {
        // Read the brokers data file directly
        const brokersFile = path.join(process.cwd(), 'src', 'data', 'brokers.ts');
        const content = fs.readFileSync(brokersFile, 'utf8');

        // This is a bit hacky but works for extracting slugs from a TS file without executing it
        const slugMatches = content.match(/slug:\s*["']([^"']+)["']/g);
        if (slugMatches) {
            return slugMatches.map(m => m.match(/["']([^"']+)["']/)[1]);
        }
    } catch (e) {
        console.error('Error reading brokers data:', e);
    }
    return [];
}

async function generateSitemap() {
    console.log('🗺️  Generating sitemap.xml for Sanuytin (New DB)...\n');

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

    // 2. Brokers (from local data file)
    const brokerSlugs = await getBrokersFromData();
    if (brokerSlugs && brokerSlugs.length > 0) {
        const uniqueSlugs = [...new Set(brokerSlugs)];
        for (const slug of uniqueSlugs) {
            urls.push({
                loc: `${BASE_URL}/${slug}/`,
                lastmod: today,
                changefreq: 'weekly',
                priority: '0.8',
            });
        }
        console.log(`  ✅ ${uniqueSlugs.length} broker pages (from data)`);
    }

    // 3. Published posts from NEW DB
    const { data: posts, error: postErr } = await supabase
        .from('posts')
        .select('slug, updated_at, created_at, category_id')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

    // Load categories to determine correct route
    const { data: categories } = await supabase.from('categories').select('id, slug');
    const catIdToSlug = {};
    if (categories) {
        categories.forEach(c => { catIdToSlug[c.id] = c.slug; });
    }
    const knowledgeSlugs = ['kien-thuc', 'kien-thuc-forex', 'kien-thuc-dau-tu', 'huong-dan', 'kinh-nghiem'];

    if (postErr) {
        console.log(`  ❌ Posts error: ${postErr.message}`);
    } else if (posts) {
        let newsCount = 0;
        let knowledgeCount = 0;

        for (const post of posts) {
            if (!post.slug) continue;

            const lastmod = toISODate(post.updated_at || post.created_at);
            const catSlug = catIdToSlug[post.category_id] || '';
            const isKnowledge = knowledgeSlugs.includes(catSlug);
            const route = isKnowledge ? 'kien-thuc-forex' : 'tin-tuc';

            urls.push({
                loc: `${BASE_URL}/${route}/${post.slug}/`,
                lastmod,
                changefreq: 'weekly',
                priority: isKnowledge ? '0.7' : '0.7',
            });

            if (isKnowledge) knowledgeCount++;
            else newsCount++;
        }
        console.log(`  ✅ ${newsCount} news articles (/tin-tuc/)`);
        console.log(`  ✅ ${knowledgeCount} knowledge articles (/kien-thuc-forex/)`);
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

    const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, xml, 'utf-8');

    console.log(`\n✅ Sitemap generated: ${urls.length} URLs`);
    console.log(`📄 Saved to: public/sitemap.xml`);
}

generateSitemap().catch(console.error);
