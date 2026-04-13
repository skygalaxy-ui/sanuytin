import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    "https://pbxpjmklrkkwatdvacap.supabase.co",
    "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K"
);

async function scanLists() {
    const { data: posts } = await supabase
        .from('posts')
        .select('id, title, slug, content, is_published')
        .order('id');

    console.log("=== SCAN BÀI VIẾT CÓ NHIỀU DANH SÁCH ===\n");

    const results = [];

    for (const post of posts) {
        const content = post.content || '';
        const liCount = (content.match(/<li/gi) || []).length;
        const ulCount = (content.match(/<ul/gi) || []).length;
        const olCount = (content.match(/<ol/gi) || []).length;
        const tableCount = (content.match(/<table/gi) || []).length;
        const pCount = (content.match(/<p/gi) || []).length;
        const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).filter(w => w).length;

        // Calculate list ratio: how much content is in lists vs paragraphs
        const listRatio = pCount > 0 ? (liCount / (pCount + liCount)) * 100 : 0;

        results.push({
            id: post.id,
            title: post.title.substring(0, 65),
            slug: post.slug,
            li: liCount,
            ul: ulCount,
            ol: olCount,
            table: tableCount,
            p: pCount,
            words: wordCount,
            ratio: Math.round(listRatio),
            pub: post.is_published ? 'PUB' : 'DRF',
        });
    }

    // Sort by list ratio descending
    results.sort((a, b) => b.ratio - a.ratio);

    // Show posts with high list content
    console.log("Bài có TỶ LỆ LIỆT KÊ CAO (>= 30%):\n");
    console.log(`${'ID'.padEnd(5)} ${'%List'.padEnd(6)} ${'<li>'.padEnd(5)} ${'<p>'.padEnd(5)} ${'<table>'.padEnd(8)} ${'Từ'.padEnd(7)} ${'Status'.padEnd(5)} Tiêu đề`);
    console.log('-'.repeat(120));

    for (const r of results) {
        if (r.ratio >= 30 || r.li >= 10) {
            const flag = r.ratio >= 50 ? '🔴' : r.ratio >= 30 ? '🟡' : '🟢';
            console.log(`${String(r.id).padEnd(5)} ${flag}${String(r.ratio + '%').padEnd(5)} ${String(r.li).padEnd(5)} ${String(r.p).padEnd(5)} ${String(r.table).padEnd(8)} ${String(r.words).padEnd(7)} ${r.pub.padEnd(5)} ${r.title}`);
        }
    }

    // Show a sample of one high-list post content
    const worstPost = results.find(r => r.ratio >= 40);
    if (worstPost) {
        const { data } = await supabase.from('posts').select('content').eq('id', worstPost.id).single();
        console.log(`\n\n=== SAMPLE: ID:${worstPost.id} — ${worstPost.title} ===\n`);
        console.log(data.content.substring(0, 3000));
        console.log("\n...\n");
        console.log(data.content.slice(-1000));
    }

    // Summary
    const highList = results.filter(r => r.ratio >= 30 || r.li >= 10);
    console.log(`\n\nTỔNG KẾT: ${highList.length} bài cần viết lại (tỷ lệ liệt kê >= 30% hoặc >= 10 <li>)`);
    console.log(`Danh sách IDs: [${highList.map(r => r.id).join(', ')}]`);
}

scanLists().catch(console.error);
