const https = require('https');

// All 69 broken paths from report
const brokenPaths = [
    '/lp/hoc-dau-tu/',
    '/tin-tuc/chien-luoc-dca-binh-quan-gia/',
    '/tin-tuc/mua-nha-hay-thue-nha-2026-phan-tich-chi-tiet/',
    '/tin-tuc/xu-huong-gia-vang-chien-luoc-dau-tu/',
    '/tin-tuc/dau-tu-vang-kenh-tru-an-an-toan/',
    '/tin-tuc/xay-dung-danh-muc-dau-tu-da-dang-hoa/',
    '/tin-tuc/phan-tich-ky-thuat-chung-khoan/',
    '/tin-tuc/10-sai-lam-pho-bien-khi-dau-tu-cach-tranh/',
    '/tin-tuc/top-5-sai-lam-dau-tu-chung-khoan/',
    '/tin-tuc/nen-dau-tu-gi-nam-2026-so-sanh-cac-kenh/',
    '/tin-tuc/uu-nhuoc-diem-san-plus500/',
    '/tin-tuc/cac-loai-lenh-chung-khoan-ato-atc-lo-mp/',
    '/tin-tuc/tai-khoan-demo-luyen-tap-giao-dich/',
];

// Check if these slugs exist in DB as published
const { createClient } = require('@supabase/supabase-js');
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4');

async function main() {
    // Get all published slugs
    const { data: posts } = await s.from('posts').select('slug').eq('is_published', true);
    const pubSlugs = new Set(posts.map(p => p.slug));

    // Get all scheduled (not published) slugs
    const { data: scheduled } = await s.from('posts').select('slug').eq('is_published', false);
    const schedSlugs = new Set(scheduled.map(p => p.slug));

    console.log('Published posts in DB:', pubSlugs.size);
    console.log('Scheduled (draft) posts:', schedSlugs.size);

    // Sample broken paths - extract slugs
    const allBroken = brokenPaths.map(p => {
        const parts = p.split('/').filter(Boolean);
        return { path: p, slug: parts[parts.length - 1] || parts[0] };
    });

    console.log('\n--- Broken Path Analysis ---');
    let inDB = 0, notInDB = 0, isDraft = 0;
    for (const b of allBroken) {
        if (pubSlugs.has(b.slug)) {
            console.log(' PUB?', b.path, '(slug exists as published but 404!)');
            inDB++;
        } else if (schedSlugs.has(b.slug)) {
            console.log(' DRAFT', b.path, '(exists but not published yet)');
            isDraft++;
        } else {
            console.log(' NONE', b.path, '(slug not in DB)');
            notInDB++;
        }
    }
    console.log(`\nIn DB published: ${inDB} | Draft: ${isDraft} | Not in DB: ${notInDB}`);

    // Check ALL 69 broken: how many are from old deleted posts?
    // The broken links come from "direct" meaning they're in the DB published but server returns 404
    // This likely means they're published in DB but the SSR page can't render them

    // Get total published count
    console.log('\n--- All published posts (first 20 with status) ---');
    const { data: all } = await s.from('posts').select('slug,title,content').eq('is_published', true).order('created_at', { ascending: false }).limit(20);
    for (const p of all) {
        const hasContent = p.content && p.content.length > 100;
        console.log(hasContent ? '✅' : '❌', p.slug.substring(0, 50), `(${(p.content || '').length} chars)`);
    }
}
main();
