import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

function getPostUrl(slug, category) {
    if (['kien-thuc', 'kien-thuc-forex', 'kiến thức forex'].includes(category)) return '/kien-thuc-forex/' + slug + '/';
    return '/tin-tuc/' + slug + '/';
}

const BROKER_LINKS = {
    'Vantage': '/vantage/', 'Exness': '/exness/', 'XM': '/xm/', 'XTB': '/xtb/',
    'FBS': '/fbs/', 'HFM': '/hfm/', 'FXTM': '/fxtm/', 'FxPro': '/fxpro/',
    'Tickmill': '/tickmill/', 'Pepperstone': '/pepperstone/', 'IC Markets': '/ic-markets/',
    'OANDA': '/oanda/', 'eToro': '/etoro/'
};

const keywordMap = {
    'forex-la-gi-huong-dan-nguoi-moi': ['Forex là gì', 'thị trường Forex'],
    'cach-doc-bieu-do-nen-nhat-ban': ['nến Nhật', 'biểu đồ nến', 'mô hình nến'],
    'quan-ly-von-trong-trading': ['quản lý vốn', 'quản lý rủi ro'],
    'phan-tich-ky-thuat-vs-co-ban': ['phân tích kỹ thuật', 'phân tích cơ bản'],
    'tam-ly-trading-yeu-to-thanh-cong': ['tâm lý trading', 'tâm lý giao dịch'],
    'cac-loai-lenh-trong-forex': ['các loại lệnh', 'lệnh trong Forex'],
    'huong-dan-su-dung-rsi': ['RSI', 'chỉ báo RSI'],
    'scalping-forex-chien-luoc-luot-song': ['scalping', 'lướt sóng'],
    'cach-mo-tai-khoan-demo-forex': ['tài khoản demo'],
    'don-bay-leverage-trong-forex': ['đòn bẩy', 'leverage'],
    'spread-trong-forex-la-gi': ['spread', 'phí spread'],
    'pip-trong-forex-la-gi': ['pip', 'điểm pip'],
    'chon-san-forex-uy-tin-cho-nguoi-moi': ['chọn sàn Forex'],
    'cach-dat-stop-loss-take-profit': ['stop loss', 'take profit', 'cắt lỗ'],
    'chay-tai-khoan-forex-dien-bien-tam-ly': ['cháy tài khoản'],
    'lot-size-la-gi-cach-tinh': ['lot size', 'lot', 'micro lot'],
    'margin-la-gi-margin-call': ['margin', 'ký quỹ', 'Margin Call', 'Stop Out'],
    'cac-phien-giao-dich-forex': ['phiên giao dịch', 'phiên London', 'phiên New York'],
    'huong-dan-su-dung-macd': ['MACD', 'chỉ báo MACD'],
    'moving-average-ema-sma': ['Moving Average', 'EMA', 'SMA', 'đường trung bình'],
    'ho-tro-khang-cu-trong-forex': ['hỗ trợ', 'kháng cự', 'support', 'resistance'],
    'swap-phi-qua-dem-la-gi': ['swap', 'phí qua đêm'],
    'copy-trade-la-gi-huong-dan': ['Copy Trade', 'copy trading'],
};

function escapeRegex(str) { return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function addLinks(html, currentSlug, allPosts) {
    if (!html) return { html, linksAdded: 0 };
    let result = html, linkCount = 0, linked = new Set(), brokerCount = 0;
    const allLinks = [];

    for (const post of allPosts) {
        const url = getPostUrl(post.slug, post.category);
        const kws = keywordMap[post.slug] || [];
        for (const kw of kws) {
            if (url.includes(currentSlug)) continue;
            allLinks.push({ keyword: kw, url, type: 'article' });
        }
    }
    for (const [kw, url] of Object.entries(BROKER_LINKS)) {
        if (url.includes(currentSlug)) continue;
        allLinks.push({ keyword: kw, url, type: 'broker' });
    }
    allLinks.sort((a, b) => b.keyword.length - a.keyword.length);

    for (const { keyword, url, type } of allLinks) {
        if (linkCount >= 8) break;
        if (type === 'broker' && brokerCount >= 3) continue;
        if (linked.has(keyword.toLowerCase())) continue;
        const escaped = escapeRegex(keyword);
        const pattern = new RegExp('(>)([^<]*?)\\b(' + escaped + ')\\b([^<]*?)(<)', 'i');
        const match = result.match(pattern);
        if (match) {
            const [full, ob, before, mk, after, cb] = match;
            const idx = result.indexOf(full);
            const ctx = result.substring(Math.max(0, idx - 200), idx);
            if (/<h[1-6][^>]*>[^<]*$/i.test(ctx)) continue;
            if (/<a [^>]*>[^<]*$/i.test(ctx)) continue;
            const repl = ob + before + '<a href="' + url + '" title="' + mk + '">' + mk + '</a>' + after + cb;
            result = result.replace(full, repl);
            linkCount++;
            if (type === 'broker') brokerCount++;
            linked.add(keyword.toLowerCase());
        }
    }
    return { html: result, linksAdded: linkCount };
}

async function main() {
    console.log('🔗 Thêm Internal Links cho bài draft...\n');
    const { data: allPosts } = await sb.from('posts').select('id, title, slug, category, content, is_published');
    if (!allPosts) return;
    const drafts = allPosts.filter(p => !p.is_published && p.content);
    console.log('📝 ' + drafts.length + ' bài draft cần xử lý\n');
    let total = 0, updated = 0;
    for (const post of drafts) {
        const { html, linksAdded } = addLinks(post.content, post.slug, allPosts);
        if (linksAdded > 0) {
            const { error } = await sb.from('posts').update({ content: html }).eq('id', post.id);
            if (!error) { total += linksAdded; updated++; console.log('✅ "' + post.title + '" → +' + linksAdded + ' links'); }
            else console.log('❌ ' + post.title + ': ' + error.message);
        } else {
            console.log('⚠️  "' + post.title + '" → 0 links');
        }
    }
    console.log('\n' + '='.repeat(40));
    console.log('📊 ' + updated + ' bài cập nhật, +' + total + ' links');
}
main().catch(console.error);
