const https = require('https');
const { URL } = require('url');

const BASE = 'https://sanuytin.net';
const visited = new Set();
const broken = [];
const redirects = [];

function fetch(url) {
    return new Promise((resolve) => {
        const req = https.get(url, { timeout: 8000, headers: { 'User-Agent': 'Mozilla/5.0 LinkChecker' } }, (res) => {
            let body = '';
            res.on('data', c => body += c);
            res.on('end', () => resolve({ status: res.statusCode, body, headers: res.headers }));
        });
        req.on('error', () => resolve({ status: 0, body: '' }));
        req.on('timeout', () => { req.destroy(); resolve({ status: 0, body: '' }); });
    });
}

function extractInternalLinks(html) {
    const links = new Set();
    const re = /href=["'](\/[^"'#]*?)["']/g;
    let m;
    while ((m = re.exec(html)) !== null) {
        const path = m[1].replace(/\/$/, '') || '/';
        links.add(path);
    }
    return [...links];
}

async function main() {
    console.log('🔍 Checking INTERNAL links on sanuytin.net...\n');

    // Get all published post slugs from Supabase
    const { createClient } = require('@supabase/supabase-js');
    const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4');

    // Start pages to crawl
    const startPaths = ['/', '/so-sanh/', '/tin-tuc/', '/thuat-ngu/', '/kien-thuc-forex/', '/lp/hoc-dau-tu/'];

    // Add all published blog posts
    const { data: posts } = await s.from('posts').select('slug').eq('is_published', true);
    if (posts) posts.forEach(p => startPaths.push('/tin-tuc/' + p.slug + '/'));

    // Crawl all start pages and collect internal links
    const allLinks = new Map(); // path → [found_on_page]

    for (const path of startPaths) {
        const url = BASE + path;
        if (visited.has(url)) continue;
        visited.add(url);

        const { status, body } = await fetch(url);

        if (status === 404) {
            broken.push({ path, from: 'direct', status: 404 });
            continue;
        }
        if (status === 301 || status === 302) {
            redirects.push({ path, status });
            continue;
        }
        if (status !== 200) continue;

        const links = extractInternalLinks(body);
        for (const link of links) {
            if (!allLinks.has(link)) allLinks.set(link, []);
            allLinks.get(link).push(path);
        }
        process.stdout.write(`  Crawled ${visited.size}/${startPaths.length} pages...\r`);
    }

    console.log(`\n  Found ${allLinks.size} unique internal links\n`);

    // Check all discovered internal links
    let checked = 0;
    for (const [path, foundOn] of allLinks) {
        const url = BASE + path;
        if (visited.has(url)) continue;
        visited.add(url);

        const { status } = await fetch(url);
        if (status === 404) {
            broken.push({ path, from: foundOn[0], status: 404 });
        } else if (status === 301 || status === 302) {
            redirects.push({ path, from: foundOn[0], status });
        } else if (status >= 400 || status === 0) {
            broken.push({ path, from: foundOn[0], status: status || 'ERR' });
        }
        checked++;
        if (checked % 10 === 0) process.stdout.write(`  Verified ${checked}/${allLinks.size} links...\r`);
    }

    // Report
    console.log(`\n\n${'='.repeat(50)}`);

    if (broken.length > 0) {
        console.log(`\n❌ BROKEN LINKS (${broken.length}):`);
        broken.forEach(b => {
            console.log(`  ${b.status} ${b.path}`);
            console.log(`    ← found on: ${b.from}`);
        });
    } else {
        console.log('\n✅ No broken internal links found!');
    }

    if (redirects.length > 0) {
        console.log(`\n🔄 REDIRECTS (${redirects.length}):`);
        redirects.forEach(r => console.log(`  ${r.status} ${r.path}`));
    }

    console.log(`\n📊 Total: ${visited.size} URLs checked, ${broken.length} broken, ${redirects.length} redirects`);
}
main();
