import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

// Map of keywords in titles -> Target Category Slugs & Category Name
const categoryRules = [
    // --- 1. KIEN THUC FOREX PILLAR ---
    {
        keywords: ['giá', 'nến', 'price action', 'mô hình', 'indicator', 'kỹ thuật', 'rsi', 'macd', 'fibonacci', 'trendline', 'smc', 'liquidity', 'cản', 'kháng cự', 'supply', 'demand', 'bollinger', 'ema', 'sma'],
        category: 'phan-tich-ky-thuat',
        category_name: 'Phân Tích Kỹ Thuật'
    },
    {
        keywords: ['fomo', 'vốn', 'rủi ro', 'cháy', 'trí', 'lots', 'thắng', 'nhật ký', 'tâm lý', 'cảm xúc', 'kỷ luật', 'risk', 'reward', 'drawdown'],
        category: 'quan-ly-von',
        category_name: 'Quản Lý Vốn & Tâm Lý'
    },
    {
        keywords: ['bot', 'mt4', 'mt5', 'tradingview', 'vps', 'phần mềm', 'công cụ', 'ea'],
        category: 'cong-cu-trading',
        category_name: 'Công Cụ Trading'
    },
    {
        keywords: ['quỹ', 'prop firm', 'thi quỹ'],
        category: 'dau-tu-quy',
        category_name: 'Đầu Tư Quỹ'
    },
    {
        keywords: ['lot', 'pip', 'swap', 'spread', 'đòn bẩy', 'margin', 'newbie', 'mới bắt đầu', 'người mới', 'là gì', 'cơ bản', 'hướng dẫn', 'kiến thức', 'tài khoản', 'nạp rút', 'chọn sàn', 'sàn forex'],
        // Fallback for general tutorials covering basics
        category: 'kien-thuc-nguoi-moi',
        category_name: 'Cho Người Mới'
    },
    
    // --- 2. MONEY PILLAR (BROKERS) ---
    {
        keywords: ['lừa đảo', 'scam', 'cảnh báo', 'bóc phốt'],
        category: 'canh-bao-scam',
        category_name: 'Cảnh Báo Cảnh Giác'
    },
    {
        keywords: ['so sánh', 'vs'],
        category: 'so-sanh-san',
        category_name: 'So Sánh Sàn'
    },
    {
        keywords: ['review', 'đánh giá', 'exness', 'xm', 'ic markets', 'vantage', 'fxtm', 'fbs', 'hfm', 'pepperstone', 'xtb'],
        category: 'danh-gia-san',
        category_name: 'Đánh Giá Sàn'
    },

    // --- 3. NEWS & PROMO PILLAR ---
    {
        keywords: ['khuyến mãi', 'bonus', 'thưởng'],
        category: 'khuyen-mai',
        category_name: 'Khuyến Mãi'
    },
    {
        keywords: ['tin tức', 'thị trường', 'điểm tin', 'nhận định', 'usd', 'xau', 'fed', 'kinh tế', 'lãi suất'],
        category: 'tin-thi-truong',
        category_name: 'Tin Thị Trường'
    }
];

function determineCategory(title, currentCat) {
    const lowerTitle = title.toLowerCase();
    
    // Test rules sequentially based on title
    for (const rule of categoryRules) {
        if (rule.keywords.some(kw => lowerTitle.includes(kw.toLowerCase()))) {
            return { category: rule.category, category_name: rule.category_name };
        }
    }
    
    // Fallback if no matching keyword
    if (currentCat === 'tin-tuc') return { category: 'tin-thi-truong', category_name: 'Tin Thị Trường' };
    if (currentCat && currentCat.includes('kien-thuc')) return { category: 'kien-thuc-nguoi-moi', category_name: 'Cho Người Mới' };
    
    return { category: 'kien-thuc-nguoi-moi', category_name: 'Cho Người Mới' };
}

async function refactorDatabase() {
    console.log("Fetching posts...");
    const { data: posts, error } = await supabase.from('posts').select('id, title, category');
    
    if (error || !posts) {
        console.error("Error fetching", error);
        return;
    }
    
    let updatedCount = 0;
    
    for (const post of posts) {
        const { category, category_name } = determineCategory(post.title, post.category);
        
        const { error: updateErr } = await supabase.from('posts')
            .update({ category })
            .eq('id', post.id);
            
        if (!updateErr) {
            updatedCount++;
            console.log(`[${post.id}] ${post.title.substring(0, 40)}... -> Assigned: ${category_name}`);
        }
    }
    
    console.log(`\nDONE! Successfully recategorized ${updatedCount} posts.`);
}

refactorDatabase();
