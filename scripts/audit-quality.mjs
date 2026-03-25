import { createClient } from '@supabase/supabase-js';

const sb = createClient(
    'https://ecipdcojedkbrlggaqja.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE'
);

// Fetch ALL posts
const { data: posts, error } = await sb
    .from('posts')
    .select('id, title, slug, excerpt, content, meta_title, meta_description, featured_image, featured_image_alt, is_published, scheduled_at, tags, category, created_at, updated_at')
    .order('created_at', { ascending: false });


if (error) { console.error('Fetch error:', error.message); process.exit(1); }
if (!posts || posts.length === 0) { console.log('No posts found.'); process.exit(0); }

// Fetch categories
const { data: cats } = await sb.from('categories').select('id, name, slug');
const catMap = {};
(cats || []).forEach(c => { catMap[c.id] = c.name; });

console.log('================================================================');
console.log('   CONTENT QUALITY AUDIT - Sanuytin');
console.log('   ' + new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }));
console.log('   Total posts: ' + posts.length);
console.log('================================================================');
console.log('');

// ==================== SCORING SYSTEM ====================
const issues = {
    critical: [],   // Score 0-30: Needs immediate fix
    warning: [],    // Score 31-60: Should improve
    minor: [],      // Score 61-80: Nice to have
    good: [],       // Score 81-100: Good quality
};

const postScores = [];

for (const p of posts) {
    const problems = [];
    let score = 100;
    const plainText = (p.content || '').replace(/<[^>]*>/g, '').trim();
    const wordCount = plainText.split(/\s+/).filter(w => w.length > 0).length;
    const category = p.category || 'N/A';


    // 1. CONTENT LENGTH (-30 for <300, -15 for <800, -5 for <1200)
    if (wordCount < 100) {
        score -= 40;
        problems.push('[CRITICAL] Noi dung qua ngan: ' + wordCount + ' tu (can >800)');
    } else if (wordCount < 300) {
        score -= 30;
        problems.push('[CRITICAL] Noi dung rat ngan: ' + wordCount + ' tu (can >800)');
    } else if (wordCount < 800) {
        score -= 15;
        problems.push('[WARNING] Noi dung ngan: ' + wordCount + ' tu (nen >800)');
    } else if (wordCount < 1200) {
        score -= 5;
        problems.push('[MINOR] Noi dung trung binh: ' + wordCount + ' tu (nen >1200 cho SEO)');
    }

    // 2. MISSING META TITLE (-15)
    if (!p.meta_title || p.meta_title.trim().length < 10) {
        score -= 15;
        problems.push('[WARNING] Thieu meta title');
    } else if (p.meta_title.length > 60) {
        score -= 5;
        problems.push('[MINOR] Meta title qua dai: ' + p.meta_title.length + ' ky tu (nen <60)');
    }

    // 3. MISSING META DESCRIPTION (-15)
    if (!p.meta_description || p.meta_description.trim().length < 20) {
        score -= 15;
        problems.push('[WARNING] Thieu meta description');
    } else if (p.meta_description.length > 160) {
        score -= 5;
        problems.push('[MINOR] Meta description qua dai: ' + p.meta_description.length + ' ky tu (nen <160)');
    }

    // 4. MISSING EXCERPT (-10)
    if (!p.excerpt || p.excerpt.trim().length < 20) {
        score -= 10;
        problems.push('[WARNING] Thieu excerpt/mo ta ngan');
    }

    // 5. MISSING FEATURED IMAGE (-10)
    if (!p.featured_image || p.featured_image.trim().length === 0) {
        score -= 10;
        problems.push('[WARNING] Thieu anh dai dien (featured image)');
    } else if (!p.featured_image_alt || p.featured_image_alt.trim().length < 5) {
        score -= 5;
        problems.push('[MINOR] Thieu alt text cho anh dai dien');
    }

    // 6. MISSING FOCUS KEYWORD (-5) - SKIPPED (Column missing in DB)
    /*
    if (!p.focus_keyword || p.focus_keyword.trim().length < 3) {
        score -= 5;
        problems.push('[MINOR] Thieu focus keyword');
    }
    */


    // 7. MISSING TAGS (-5)
    if (!p.tags || (Array.isArray(p.tags) && p.tags.length === 0)) {
        score -= 5;
        problems.push('[MINOR] Thieu tags');
    }

    // 8. H2 HEADINGS CHECK (-10 if no H2s in content)
    const h2Count = ((p.content || '').match(/<h2/gi) || []).length;
    const h3Count = ((p.content || '').match(/<h3/gi) || []).length;
    if (h2Count === 0 && wordCount > 200) {
        score -= 10;
        problems.push('[WARNING] Khong co heading H2 (can cho SEO va doc gia)');
    }

    // 9. INTERNAL LINKS CHECK
    const linkCount = ((p.content || '').match(/<a\s/gi) || []).length;
    if (linkCount === 0 && wordCount > 500) {
        score -= 5;
        problems.push('[MINOR] Khong co link nao trong bai viet');
    }

    // 10. IMAGE IN CONTENT
    const imgCount = ((p.content || '').match(/<img/gi) || []).length;
    if (imgCount === 0 && wordCount > 800) {
        score -= 3;
        problems.push('[MINOR] Khong co hinh anh trong noi dung');
    }

    // 11. DUPLICATE/THIN CONTENT DETECTION
    if (plainText.length > 0) {
        // Check for templated/repeated phrases
        const templatePhrases = [
            'lorem ipsum', 'placeholder', 'coming soon', 'test content',
            'dang cap nhat', 'sap ra mat'
        ];
        for (const phrase of templatePhrases) {
            if (plainText.toLowerCase().includes(phrase)) {
                score -= 20;
                problems.push('[CRITICAL] Co noi dung template/placeholder: "' + phrase + '"');
            }
        }
    }

    // 12. TITLE LENGTH
    if (p.title && p.title.length > 70) {
        score -= 3;
        problems.push('[MINOR] Title qua dai: ' + p.title.length + ' ky tu (nen <70)');
    }
    if (!p.title || p.title.trim().length < 10) {
        score -= 20;
        problems.push('[CRITICAL] Title qua ngan hoac trong');
    }

    // Clamp score
    score = Math.max(0, Math.min(100, score));

    postScores.push({
        id: p.id,
        title: p.title || '(no title)',
        slug: p.slug,
        category,
        score,
        wordCount,
        h2Count,
        h3Count,
        imgCount,
        linkCount,
        problems,
        is_published: p.is_published,
        hasMeta: !!(p.meta_title && p.meta_description),
        hasImage: !!p.featured_image,
        hasExcerpt: !!p.excerpt,
        hasFocusKW: true, // column missing
    });

}

// Sort by score ascending (worst first)
postScores.sort((a, b) => a.score - b.score);

// ==================== SUMMARY ====================
const published = postScores.filter(p => p.is_published);
const scheduled = postScores.filter(p => !p.is_published);
const avgScore = Math.round(postScores.reduce((s, p) => s + p.score, 0) / postScores.length);
const avgPublishedScore = published.length > 0 ? Math.round(published.reduce((s, p) => s + p.score, 0) / published.length) : 0;

const criticalCount = postScores.filter(p => p.score <= 30).length;
const warningCount = postScores.filter(p => p.score > 30 && p.score <= 60).length;
const okCount = postScores.filter(p => p.score > 60 && p.score <= 80).length;
const goodCount = postScores.filter(p => p.score > 80).length;

const noMetaTitle = postScores.filter(p => !p.hasMeta).length;
const noImage = postScores.filter(p => !p.hasImage).length;
const noExcerpt = postScores.filter(p => !p.hasExcerpt).length;
const noFocusKW = postScores.filter(p => !p.hasFocusKW).length;
const thinContent = postScores.filter(p => p.wordCount < 300).length;
const shortContent = postScores.filter(p => p.wordCount >= 300 && p.wordCount < 800).length;

const avgWordCount = Math.round(postScores.reduce((s, p) => s + p.wordCount, 0) / postScores.length);

// Score distribution
console.log('--- TONG QUAN CHAT LUONG ---');
console.log('');
console.log('  Diem trung binh:        ' + avgScore + '/100');
console.log('  Diem TB (da dang):      ' + avgPublishedScore + '/100');
console.log('  So tu trung binh:       ' + avgWordCount + ' tu/bai');
console.log('');
console.log('  PHAN PHOI DIEM:');
console.log('    [81-100] Tot:         ' + goodCount + ' bai (' + Math.round(goodCount / postScores.length * 100) + '%)');
console.log('    [61-80]  Trung binh:  ' + okCount + ' bai (' + Math.round(okCount / postScores.length * 100) + '%)');
console.log('    [31-60]  Can cai:     ' + warningCount + ' bai (' + Math.round(warningCount / postScores.length * 100) + '%)');
console.log('    [0-30]   Nghiem trong: ' + criticalCount + ' bai (' + Math.round(criticalCount / postScores.length * 100) + '%)');
console.log('');
console.log('  VAN DE THUONG GAP:');
console.log('    Thieu meta title/desc: ' + noMetaTitle + '/' + postScores.length);
console.log('    Thieu featured image:  ' + noImage + '/' + postScores.length);
console.log('    Thieu excerpt:         ' + noExcerpt + '/' + postScores.length);
console.log('    Thieu focus keyword:   ' + noFocusKW + '/' + postScores.length);
console.log('    Noi dung <300 tu:      ' + thinContent + '/' + postScores.length);
console.log('    Noi dung 300-800 tu:   ' + shortContent + '/' + postScores.length);
console.log('');

// ==================== WORST POSTS ====================
console.log('--- TOP 20 BAI CAN SUA GAP (diem thap nhat) ---');
console.log('');

const worst = postScores.slice(0, 20);
for (let i = 0; i < worst.length; i++) {
    const p = worst[i];
    const status = p.is_published ? 'PUBLISHED' : 'SCHEDULED';
    console.log(`  ${i + 1}. [${p.score}/100] ${p.title.substring(0, 60)}`);
    console.log(`     ${status} | ${p.category} | ${p.wordCount} tu | H2:${p.h2Count} | Links:${p.linkCount}`);
    for (const prob of p.problems) {
        console.log('     -> ' + prob);
    }
    console.log('');
}

// ==================== BY CATEGORY ====================
console.log('--- CHAT LUONG THEO CHUYEN MUC ---');
console.log('');

const catStats = {};
for (const p of postScores) {
    if (!catStats[p.category]) {
        catStats[p.category] = { count: 0, totalScore: 0, totalWords: 0, noMeta: 0, noImg: 0 };
    }
    catStats[p.category].count++;
    catStats[p.category].totalScore += p.score;
    catStats[p.category].totalWords += p.wordCount;
    if (!p.hasMeta) catStats[p.category].noMeta++;
    if (!p.hasImage) catStats[p.category].noImg++;
}

const catList = Object.entries(catStats).sort((a, b) => (a[1].totalScore / a[1].count) - (b[1].totalScore / b[1].count));
for (const [cat, stats] of catList) {
    const avg = Math.round(stats.totalScore / stats.count);
    const avgW = Math.round(stats.totalWords / stats.count);
    console.log(`  ${cat}: ${avg}/100 avg | ${stats.count} bai | ${avgW} tu/bai | no-meta:${stats.noMeta} | no-img:${stats.noImg}`);
}
console.log('');

// ==================== BEST POSTS ====================
console.log('--- TOP 10 BAI CHAT LUONG CAO NHAT ---');
console.log('');
const best = [...postScores].sort((a, b) => b.score - a.score).slice(0, 10);
for (let i = 0; i < best.length; i++) {
    const p = best[i];
    console.log(`  ${i + 1}. [${p.score}/100] ${p.title.substring(0, 65)}`);
    console.log(`     ${p.category} | ${p.wordCount} tu | H2:${p.h2Count} H3:${p.h3Count} | Imgs:${p.imgCount} | Links:${p.linkCount}`);
}
console.log('');

// ==================== DUPLICATE TITLE CHECK ====================
console.log('--- KIEM TRA TRUNG LAP ---');
console.log('');
const titleMap = {};
for (const p of postScores) {
    const normTitle = p.title.toLowerCase().trim();
    if (!titleMap[normTitle]) titleMap[normTitle] = [];
    titleMap[normTitle].push(p);
}
const dupes = Object.entries(titleMap).filter(([, v]) => v.length > 1);
if (dupes.length > 0) {
    console.log('  Tim thay ' + dupes.length + ' nhom bai trung title:');
    for (const [title, posts] of dupes) {
        console.log('    "' + title.substring(0, 60) + '"');
        for (const p of posts) {
            console.log('      - ID:' + p.id + ' | slug:' + p.slug + ' | ' + (p.is_published ? 'Published' : 'Scheduled'));
        }
    }
} else {
    console.log('  Khong co bai viet nao trung title.');
}
console.log('');

// ==================== CONTENT SIMILARITY (basic) ====================
console.log('--- KIEM TRA NOI DUNG TUONG TU ---');
console.log('');
// Simple: check if any 2 posts share >50% of first 200 chars
const snippets = postScores.map(p => {
    const text = (p.slug || '').substring(0, 100);
    return { id: p.id, title: p.title, text };
});

// Slug similarity check
const slugDupes = [];
for (let i = 0; i < postScores.length; i++) {
    for (let j = i + 1; j < postScores.length; j++) {
        const a = postScores[i].slug;
        const b = postScores[j].slug;
        if (a === b) {
            slugDupes.push([postScores[i], postScores[j]]);
        }
    }
}
if (slugDupes.length > 0) {
    console.log('  [CRITICAL] Tim thay ' + slugDupes.length + ' cap slug trung:');
    for (const [a, b] of slugDupes) {
        console.log('    "' + a.slug + '" -> ID:' + a.id + ' va ID:' + b.id);
    }
} else {
    console.log('  Khong co slug trung lap.');
}
console.log('');

// ==================== ACTIONABLE SUMMARY ====================
console.log('================================================================');
console.log('   HANH DONG CAN LAM (uu tien cao -> thap)');
console.log('================================================================');
console.log('');

if (criticalCount > 0) {
    console.log('  1. [GAP] Sua ' + criticalCount + ' bai diem <30 (noi dung qua mong/template)');
}
if (thinContent > 0) {
    console.log('  2. [GAP] Viet lai ' + thinContent + ' bai co <300 tu');
}
if (noMetaTitle > 0) {
    console.log('  3. [QUAN TRONG] Them meta title+desc cho ' + noMetaTitle + ' bai');
}
if (noImage > 0) {
    console.log('  4. [QUAN TRONG] Them featured image cho ' + noImage + ' bai');
}
if (noExcerpt > 0) {
    console.log('  5. [NEN LAM] Them excerpt cho ' + noExcerpt + ' bai');
}
if (noFocusKW > 0) {
    console.log('  6. [NEN LAM] Them focus keyword cho ' + noFocusKW + ' bai');
}
if (shortContent > 0) {
    console.log('  7. [NEN LAM] Bo sung noi dung cho ' + shortContent + ' bai (300-800 tu -> 1200+)');
}
console.log('');
console.log('Kiem tra hoan tat!');
