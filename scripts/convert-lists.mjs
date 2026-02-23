import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    "https://ecipdcojedkbrlggaqja.supabase.co",
    "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K"
);

/**
 * Convert list-heavy content into prose paragraphs.
 * 
 * Strategy:
 * - <ul>/<ol> with <li> items → merged into <p> sentences separated by ". "
 * - <li><strong>Label:</strong> description</li> → "Label: description"  
 * - Preserves all <a>, <strong>, <img>, <figure>, <table>, <h2>, <h3> tags
 * - Does NOT touch FAQ sections (Câu Hỏi Thường Gặp)
 */
function convertListsToProse(html) {
    if (!html) return html;

    // Find FAQ section start - don't modify anything after it
    const faqIndex = html.search(/Câu Hỏi Thường Gặp|FAQ/i);
    let mainContent = faqIndex > -1 ? html.substring(0, faqIndex) : html;
    let faqContent = faqIndex > -1 ? html.substring(faqIndex) : '';

    // Also find the last <h2 or <h3 before FAQ to preserve it
    if (faqIndex > -1) {
        const beforeFaq = html.substring(0, faqIndex);
        const lastHeadingIdx = Math.max(
            beforeFaq.lastIndexOf('<h2'),
            beforeFaq.lastIndexOf('<h3')
        );
        if (lastHeadingIdx > -1) {
            mainContent = beforeFaq.substring(0, lastHeadingIdx);
            faqContent = html.substring(lastHeadingIdx);
        }
    }

    let changed = false;

    // Convert <ol>...</ol> blocks
    mainContent = mainContent.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (match, inner) => {
        const items = extractListItems(inner);
        if (items.length === 0) return match;
        changed = true;
        return itemsToParagraph(items);
    });

    // Convert <ul>...</ul> blocks
    mainContent = mainContent.replace(/<ul[^>]*>([\s\S]*?)<\/ul>/gi, (match, inner) => {
        const items = extractListItems(inner);
        if (items.length === 0) return match;
        changed = true;
        return itemsToParagraph(items);
    });

    return { html: mainContent + faqContent, changed };
}

function extractListItems(listInner) {
    const items = [];
    const regex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
    let m;
    while ((m = regex.exec(listInner)) !== null) {
        let text = m[1].trim();
        // Remove nested <ul>/<ol> inside <li> (sub-lists)
        text = text.replace(/<[uo]l[^>]*>[\s\S]*?<\/[uo]l>/gi, '');
        // Clean up whitespace
        text = text.replace(/\s+/g, ' ').trim();
        if (text) items.push(text);
    }
    return items;
}

function itemsToParagraph(items) {
    // Each list item becomes a sentence in a paragraph
    // If items are short (label: description pattern), join them into one <p>
    // If items are long individual points, each gets its own line in one <p>

    const joined = items.map(item => {
        // Ensure item ends with a period or other punctuation
        let cleaned = item.trim();
        if (cleaned.endsWith('</a>') || cleaned.endsWith('</strong>')) {
            // Don't add period after tags
        } else if (!cleaned.match(/[.!?;:]$/)) {
            cleaned += '.';
        }
        return cleaned;
    }).join(' ');

    return `<p>${joined}</p>`;
}

async function main() {
    console.log("📝 Chuyển nội dung liệt kê → văn xuôi...\n");

    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, slug, content')
        .order('id');

    if (error) { console.error("Lỗi:", error); return; }

    let updated = 0;
    let skipped = 0;

    for (const post of posts) {
        const content = post.content || '';
        const liCount = (content.match(/<li/gi) || []).length;
        const pCount = (content.match(/<p/gi) || []).length;
        const listRatio = pCount > 0 ? (liCount / (pCount + liCount)) * 100 : 0;

        // Only process posts with significant list content
        if (liCount < 5 || listRatio < 25) {
            skipped++;
            continue;
        }

        const { html: newContent, changed } = convertListsToProse(content);

        if (changed) {
            // Verify we didn't lose content
            const oldTextLen = content.replace(/<[^>]*>/g, '').length;
            const newTextLen = newContent.replace(/<[^>]*>/g, '').length;

            // Content should be roughly same length (allow 10% variance for removed markers)
            if (newTextLen < oldTextLen * 0.85) {
                console.log(`   ⚠️ ID:${post.id} — Skipped (content shrunk too much: ${oldTextLen}→${newTextLen})`);
                continue;
            }

            const newLiCount = (newContent.match(/<li/gi) || []).length;
            const newPCount = (newContent.match(/<p/gi) || []).length;

            const { error: updateError } = await supabase
                .from('posts')
                .update({ content: newContent, updated_at: new Date().toISOString() })
                .eq('id', post.id);

            if (updateError) {
                console.log(`   ❌ ID:${post.id} — ${updateError.message}`);
            } else {
                updated++;
                console.log(`   ✅ ID:${post.id} — <li>:${liCount}→${newLiCount}, <p>:${pCount}→${newPCount} | ${post.title.substring(0, 55)}`);
            }
        } else {
            skipped++;
        }
    }

    console.log(`\n${"=".repeat(60)}`);
    console.log(`✅ Hoàn tất: ${updated} bài đã chuyển sang văn xuôi, ${skipped} bài bỏ qua`);
    console.log("=".repeat(60));
}

main().catch(console.error);
