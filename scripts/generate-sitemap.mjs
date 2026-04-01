import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Read from .env.local to ensure we query the exact same DB as the frontend
const envPath = path.join(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const supabaseUrl = envContent.match(/NEXT_PUBLIC_SUPABASE_URL=(.*)/)?.[1]?.trim() || '';
const anonKey = envContent.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.*)/)?.[1]?.trim() || '';

if (!supabaseUrl || !anonKey) {
    console.error("Missing Supabase credentials in .env.local");
    process.exit(1);
}

const supabase = createClient(supabaseUrl, anonKey);

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
        .select('slug, updated_at, created_at, category')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

    // The posts table now uses a direct 'category' string slug instead of foreign key category_id
    const knowledgeSlugs = ['kien-thuc', 'kien-thuc-forex', 'kien-thuc-dau-tu', 'huong-dan', 'kinh-nghiem'];

    if (postErr) {
        console.log(`  ❌ Posts error: ${postErr.message}`);
    } else if (posts) {
        let newsCount = 0;
        let knowledgeCount = 0;

        for (const post of posts) {
            if (!post.slug) continue;

            const lastmod = toISODate(post.updated_at || post.created_at);
            const catSlug = post.category || '';
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
