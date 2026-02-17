/**
 * Script: Thêm Internal Links chuẩn SEO vào nội dung bài viết
 * 
 * Chiến lược:
 * 1. Link đến bài viết kiến thức liên quan (cross-link giữa các bài)
 * 2. Link đến trang đánh giá sàn Forex khi nhắc đến tên sàn
 * 3. Link đến trang danh sách (tin-tuc, kien-thuc-forex)
 * 4. Giới hạn số link mỗi bài (tránh spam)
 * 5. Không đặt link trong heading (h1-h6)
 * 6. Chỉ link lần đầu xuất hiện keyword
 */

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ecipdcojedkbrlggaqja.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE';

const sb = createClient(SUPABASE_URL, SUPABASE_KEY);

// ==================== LINK MAP ====================
// Keyword → URL mapping (chỉ link lần đầu xuất hiện)

// Helper: xác định URL dựa trên category
function getPostUrl(slug, category) {
    if (['kien-thuc', 'kien-thuc-forex', 'kiến thức forex'].includes(category)) {
        return `/kien-thuc-forex/${slug}/`;
    }
    return `/tin-tuc/${slug}/`;
}

// Broker names → review page URLs
const BROKER_LINKS = {
    'Vantage': '/vantage/',
    'Exness': '/exness/',
    'XM': '/xm/',
    'XTB': '/xtb/',
    'FBS': '/fbs/',
    'HFM': '/hfm/',
    'FXTM': '/fxtm/',
    'FxPro': '/fxpro/',
    'Tickmill': '/tickmill/',
    'Pepperstone': '/pepperstone/',
    'IC Markets': '/ic-markets/',
    'OANDA': '/oanda/',
    'eToro': '/etoro/',
};

// Keyword → article URL mapping (sẽ build từ DB)
let ARTICLE_LINKS = {};

// Utility page links
const UTILITY_LINKS = {
    'sàn uy tín': '/',
    'so sánh sàn': '/so-sanh/',
    'bảng xếp hạng': '/#ranking',
    'top sàn forex': '/#ranking',
    'sàn forex uy tín': '/',
};

// ==================== CORE LOGIC ====================

const MAX_INTERNAL_LINKS_PER_POST = 8; // Tối đa 8 internal link mỗi bài
const MAX_BROKER_LINKS_PER_POST = 3;   // Tối đa 3 link sàn mỗi bài

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Thêm internal link vào HTML content
 * - Không chèn link trong heading, anchor, hoặc HTML tag
 * - Chỉ link lần đầu xuất hiện
 * - Không link đến chính bài viết hiện tại
 */
function addInternalLinks(html, currentSlug) {
    if (!html) return html;

    let result = html;
    let linkCount = 0;
    let brokerLinkCount = 0;
    const linkedKeywords = new Set();

    // Tạo combined link map: Articles + Brokers + Utility
    // Ưu tiên: Articles > Brokers > Utility
    const allLinks = [];

    // 1. Article links (ưu tiên cao nhất)
    for (const [keyword, url] of Object.entries(ARTICLE_LINKS)) {
        // Không link đến chính mình
        if (url.includes(currentSlug)) continue;
        allLinks.push({ keyword, url, type: 'article', priority: 1 });
    }

    // 2. Broker links
    for (const [keyword, url] of Object.entries(BROKER_LINKS)) {
        // Không link nếu đang ở trang review sàn đó
        if (url.includes(currentSlug)) continue;
        allLinks.push({ keyword, url, type: 'broker', priority: 2 });
    }

    // 3. Utility links
    for (const [keyword, url] of Object.entries(UTILITY_LINKS)) {
        allLinks.push({ keyword, url, type: 'utility', priority: 3 });
    }

    // Sort by priority, then by keyword length (longer first = more specific)
    allLinks.sort((a, b) => a.priority - b.priority || b.keyword.length - a.keyword.length);

    for (const { keyword, url, type } of allLinks) {
        if (linkCount >= MAX_INTERNAL_LINKS_PER_POST) break;
        if (type === 'broker' && brokerLinkCount >= MAX_BROKER_LINKS_PER_POST) continue;
        if (linkedKeywords.has(keyword.toLowerCase())) continue;

        // Regex: tìm keyword KHÔNG nằm trong:
        // - HTML tag (<...>)
        // - Heading (<h1>...</h1> đến <h6>...</h6>)  
        // - Anchor tag (<a>...</a>)
        // - Đã có link rồi
        const escaped = escapeRegex(keyword);

        // Simple approach: replace first occurrence outside HTML tags
        // Pattern: keyword not preceded by > and not inside a tag
        const pattern = new RegExp(
            `(?<=<p[^>]*>|<li[^>]*>|<td[^>]*>|<span[^>]*>)([^<]*?)\\b(${escaped})\\b`,
            'i'
        );

        const match = result.match(pattern);
        if (match) {
            const fullMatch = match[0];
            const before = match[1];
            const matchedKeyword = match[2];

            // Check if the keyword is already inside an <a> tag
            const beforeContext = result.substring(0, result.indexOf(fullMatch));
            const lastAOpen = beforeContext.lastIndexOf('<a ');
            const lastAClose = beforeContext.lastIndexOf('</a>');
            if (lastAOpen > lastAClose) continue; // Inside an anchor

            const replacement = `${before}<a href="${url}" title="${matchedKeyword}" style="color: inherit; text-decoration: underline; text-decoration-color: rgba(59,130,246,0.5); text-underline-offset: 2px;">${matchedKeyword}</a>`;
            result = result.replace(fullMatch, replacement);

            linkCount++;
            if (type === 'broker') brokerLinkCount++;
            linkedKeywords.add(keyword.toLowerCase());
        }
    }

    // Fallback approach: simple text matching for remaining budget
    if (linkCount < 3) {
        for (const { keyword, url, type } of allLinks) {
            if (linkCount >= MAX_INTERNAL_LINKS_PER_POST) break;
            if (type === 'broker' && brokerLinkCount >= MAX_BROKER_LINKS_PER_POST) continue;
            if (linkedKeywords.has(keyword.toLowerCase())) continue;

            const escaped = escapeRegex(keyword);
            // Match keyword in plain text (between > and <), not in headings
            const simplePattern = new RegExp(
                `(>)([^<]*?)\\b(${escaped})\\b([^<]*?)(<)`,
                'i'
            );

            const match = result.match(simplePattern);
            if (match) {
                const [fullMatch, openBracket, before, matchedKeyword, after, closeBracket] = match;

                // Skip if inside heading or already in anchor
                const idx = result.indexOf(fullMatch);
                const context = result.substring(Math.max(0, idx - 200), idx);
                if (/<h[1-6][^>]*>[^<]*$/i.test(context)) continue;
                if (/<a [^>]*>[^<]*$/i.test(context)) continue;

                const replacement = `${openBracket}${before}<a href="${url}" title="${matchedKeyword}">${matchedKeyword}</a>${after}${closeBracket}`;
                result = result.replace(fullMatch, replacement);

                linkCount++;
                if (type === 'broker') brokerLinkCount++;
                linkedKeywords.add(keyword.toLowerCase());
            }
        }
    }

    return { html: result, linksAdded: linkCount };
}

// ==================== MAIN ====================

async function main() {
    console.log('🔗 Bắt đầu thêm Internal Links chuẩn SEO...\n');

    // 1. Fetch all published posts
    const { data: posts, error } = await sb
        .from('posts')
        .select('*')
        .eq('is_published', true)
        .order('id');

    if (error || !posts) {
        console.error('❌ Lỗi lấy bài viết:', error?.message);
        process.exit(1);
    }

    console.log(`📚 Tìm thấy ${posts.length} bài viết đã xuất bản\n`);

    // 2. Build ARTICLE_LINKS from posts
    const keywordMap = {
        'forex-la-gi-huong-dan-nguoi-moi': ['Forex là gì', 'thị trường ngoại hối', 'thị trường Forex'],
        'cach-doc-bieu-do-nen-nhat-ban': ['nến Nhật', 'biểu đồ nến', 'candlestick', 'mô hình nến'],
        'quan-ly-von-trong-trading': ['quản lý vốn', 'quản lý rủi ro', 'money management'],
        'phan-tich-ky-thuat-vs-co-ban': ['phân tích kỹ thuật', 'phân tích cơ bản', 'technical analysis'],
        'tam-ly-trading-yeu-to-thanh-cong': ['tâm lý trading', 'tâm lý giao dịch', 'kỷ luật trading'],
        'cac-loai-lenh-trong-forex': ['lệnh trong Forex', 'lệnh stop loss', 'lệnh take profit', 'các loại lệnh'],
        'huong-dan-su-dung-rsi': ['RSI', 'chỉ báo RSI', 'Relative Strength Index'],
        'scalping-forex-chien-luoc-luot-song': ['scalping', 'lướt sóng', 'chiến lược scalping'],
        'cach-mo-tai-khoan-demo-forex': ['tài khoản demo', 'mở tài khoản demo', 'demo Forex'],
        'don-bay-leverage-trong-forex': ['đòn bẩy', 'leverage', 'đòn bẩy tài chính'],
        'spread-trong-forex-la-gi': ['spread', 'spread Forex', 'phí spread'],
        'pip-trong-forex-la-gi': ['pip', 'pip là gì', 'điểm pip'],
        'chon-san-forex-uy-tin-cho-nguoi-moi': ['chọn sàn Forex', 'sàn Forex cho người mới'],
        'cach-dat-stop-loss-take-profit': ['stop loss', 'take profit', 'cắt lỗ chốt lời'],
        'chay-tai-khoan-forex-dien-bien-tam-ly': ['cháy tài khoản', 'thua lỗ Forex', 'mất hết tài khoản'],
    };

    for (const post of posts) {
        const url = getPostUrl(post.slug, post.category);
        const keywords = keywordMap[post.slug] || [];
        for (const kw of keywords) {
            ARTICLE_LINKS[kw] = url;
        }
    }

    console.log(`📎 Tổng keyword map: ${Object.keys(ARTICLE_LINKS).length} keywords → bài viết`);
    console.log(`🏢 Tổng broker links: ${Object.keys(BROKER_LINKS).length} sàn`);
    console.log('');

    // 3. Process each post
    let totalLinksAdded = 0;
    let postsUpdated = 0;

    for (const post of posts) {
        if (!post.content || post.content.length < 100) {
            console.log(`⏭️  Bỏ qua "${post.title}" (nội dung quá ngắn)`);
            continue;
        }

        // Check if post already has internal links
        const existingLinks = (post.content.match(/<a\s+href="\//g) || []).length;
        if (existingLinks >= 3) {
            console.log(`⏭️  Bỏ qua "${post.title}" (đã có ${existingLinks} internal links)`);
            continue;
        }

        const { html: newContent, linksAdded } = addInternalLinks(post.content, post.slug);

        if (linksAdded > 0) {
            console.log(`✅ "${post.title}" → +${linksAdded} links`);

            // Update in Supabase
            const { error: updateErr } = await sb
                .from('posts')
                .update({
                    content: newContent,
                    updated_at: new Date().toISOString()
                })
                .eq('id', post.id);

            if (updateErr) {
                console.error(`   ❌ Lỗi update: ${updateErr.message}`);
            } else {
                totalLinksAdded += linksAdded;
                postsUpdated++;
            }
        } else {
            console.log(`⚠️  "${post.title}" → Không tìm thấy keyword phù hợp`);
        }
    }

    console.log('\n' + '='.repeat(50));
    console.log(`📊 Kết quả:`);
    console.log(`   - Bài viết đã cập nhật: ${postsUpdated}/${posts.length}`);
    console.log(`   - Tổng links đã thêm: ${totalLinksAdded}`);
    console.log('='.repeat(50));
}

main().catch(console.error);
