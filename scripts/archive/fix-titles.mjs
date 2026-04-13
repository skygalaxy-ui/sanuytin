import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K');

// Words that should STAY capitalized (proper nouns, brands, acronyms)
const PRESERVE_UPPER = new Set([
    'Forex', 'Vantage', 'XM', 'Exness', 'XTB', 'FBS', 'IC', 'Markets',
    'MT4', 'MT5', 'ECN', 'STP', 'Pro', 'Raw', 'ASIC', 'FCA', 'CySEC',
    'CFD', 'FED', 'GDP', 'CPI', 'ETF', 'USD', 'EUR', 'GBP', 'JPY',
    'Trader', 'Trading', 'Scalping', 'Swing', 'Position', 'Sizing',
    'Trend', 'Following', 'Breakout', 'Price', 'Action',
    'Copy', 'Lot', 'Pip', 'Pips', 'Spread', 'Commission',
    'Pepperstone', 'Tickmill', 'FXTM', 'HFM', 'FxPro',
    'Việt', 'Nam', 'Factory',
    'KYC', '2FA', 'VPS', 'API', 'TradingView',
    'A-Z', 'Tier-1',
    'MetaTrader',
    'Bollinger', 'Bands', 'RSI', 'MACD', 'Fibonacci',
    'Non-Farm', 'ProTrader',
]);

// Convert title case to Vietnamese sentence case
function toVietnameseSentenceCase(title) {
    // Split by colon, question mark, exclamation to handle sub-sentences  
    // We'll process segments separated by ": " 
    const segments = title.split(/(?<=[:?!]\s)/);

    return segments.map((segment, segIdx) => {
        const words = segment.split(' ');
        return words.map((word, i) => {
            // Keep empty strings
            if (!word) return word;

            // Strip quotes and punctuation for checking
            const stripped = word.replace(/^[""\""'(]+|[""\"'"".,;:?!)\]]+$/g, '');

            // First word of segment - capitalize
            if (i === 0) return word;

            // Check if word (stripped) is in preserve list
            if (PRESERVE_UPPER.has(stripped)) return word;

            // Check if word is all uppercase (acronym like ECN, STP) - keep as is
            if (stripped === stripped.toUpperCase() && stripped.length >= 2 && /^[A-Z0-9]/.test(stripped)) return word;

            // Check if starts with number
            if (/^\d/.test(stripped)) return word;

            // Otherwise, lowercase the word
            // But preserve the original punctuation wrapping
            const leadingPunct = word.match(/^[""\""'(]*/)[0];
            const trailingPunct = word.match(/[""\"'"".,;:?!)\]]*$/)[0];
            const core = word.slice(leadingPunct.length, word.length - (trailingPunct.length || Infinity));
            const coreActual = trailingPunct.length ? word.slice(leadingPunct.length, -trailingPunct.length) : word.slice(leadingPunct.length);

            // Lowercase the core
            const lowered = coreActual.charAt(0).toLowerCase() + coreActual.slice(1);
            return leadingPunct + lowered + trailingPunct;
        }).join(' ');
    }).join('');
}

async function main() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title')
        .order('id');

    if (error) {
        console.error('❌', error.message);
        process.exit(1);
    }

    console.log(`📝 Processing ${posts.length} posts...\n`);

    let changed = 0;
    for (const post of posts) {
        const newTitle = toVietnameseSentenceCase(post.title);

        if (newTitle !== post.title) {
            console.log(`ID ${post.id}:`);
            console.log(`  Before: ${post.title}`);
            console.log(`  After:  ${newTitle}`);

            const { error: updateError } = await supabase
                .from('posts')
                .update({ title: newTitle })
                .eq('id', post.id);

            if (updateError) {
                console.error(`  ❌ ${updateError.message}`);
            } else {
                console.log(`  ✅ Updated`);
                changed++;
            }
            console.log('');
        }
    }

    console.log(`\n🎉 Done! Changed ${changed}/${posts.length} titles`);
    process.exit(0);
}
main();
