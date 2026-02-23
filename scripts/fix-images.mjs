import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// Curated, VERIFIED Unsplash images related to finance/trading
// Each one has been picked specifically for the post topic
const imageUpdates = [
    // -- Tin tức --
    { slug: 'du-bao-gia-vang-tuan-2-thang-2', img: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80' }, // gold bars
    { slug: 'fed-giu-nguyen-lai-suat-thang-2-2026', img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80' }, // US dollar bills
    { slug: 'gia-vang-vuot-moc-2100-usd', img: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80' }, // gold bars
    { slug: 'usd-vnd-tang-nhe-thang-2-2026', img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80' }, // US dollar
    { slug: 'ecb-can-nhac-cat-giam-lai-suat-q2', img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80' }, // EU euro currency
    { slug: 'bitcoin-vuot-60000-usd-2026', img: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=800&q=80' }, // bitcoin coin
    { slug: 'thi-truong-chau-a-khoi-sac-pmi', img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80' }, // city skyline asia

    // -- Kiến thức --
    { slug: 'forex-la-gi-huong-dan-nguoi-moi', img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80' }, // trading chart
    { slug: 'cach-doc-bieu-do-nen-nhat-ban', img: 'https://images.unsplash.com/photo-1642790595397-7047dc98fa72?w=800&q=80' }, // candlestick chart
    { slug: 'quan-ly-von-trong-trading', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80' }, // calculator money
    { slug: 'phan-tich-ky-thuat-vs-co-ban', img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80' }, // trading chart
    { slug: 'tam-ly-trading-yeu-to-thanh-cong', img: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80' }, // notebook thinking
    { slug: 'cac-loai-lenh-trong-forex', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' }, // laptop analytics
    { slug: 'forex-la-gi-huong-dan-toan-dien', img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80' }, // stock chart green
    { slug: 'phan-tich-ky-thuat-forex-chi-bao-quan-trong', img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80' }, // trading chart
    { slug: 'quan-ly-von-forex-nguyen-tac-vang', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80' }, // calculator money
    { slug: 'doc-bieu-do-nen-nhat-mo-hinh-price-action', img: 'https://images.unsplash.com/photo-1642790595397-7047dc98fa72?w=800&q=80' }, // candlestick chart
    { slug: 'tam-ly-giao-dich-forex-kiem-soat-cam-xuc', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80' }, // writing journal

    // -- Hướng dẫn --
    { slug: 'huong-dan-mo-tai-khoan-vantage', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' }, // laptop analytics
    { slug: 'cach-nap-rut-tien-exness', img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80' }, // money
    { slug: 'cach-dat-stop-loss-take-profit', img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80' }, // stock chart
    { slug: 'cach-cai-dat-metatrader-4', img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80' }, // multi monitor setup
    { slug: 'huong-dan-su-dung-rsi', img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80' }, // trading chart
    { slug: 'huong-dan-copy-trading', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' }, // laptop analytics
    { slug: 'scalping-forex-chien-luoc-luot-song', img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80' }, // stock chart
    { slug: 'huong-dan-su-dung-metatrader-4-mt4', img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80' }, // multi monitor
    { slug: 'cach-mo-tai-khoan-demo-forex', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' }, // laptop analytics

    // -- Phân tích --
    { slug: 'phan-tich-eurusd-xu-huong-tang', img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80' }, // stock chart green
    { slug: 'gbpusd-but-pha-du-lieu-viec-lam', img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80' }, // trading chart
    { slug: 'usdjpy-boj-can-thiep', img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80' }, // city skyline
    { slug: 'dau-tho-xu-huong-giam-ngan-han', img: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800&q=80' }, // oil industrial
    { slug: 'trien-vong-audusd-cuoc-hop-rba', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80' }, // Sydney Australia
    { slug: 'phan-tich-co-ban-forex-tin-tuc-kinh-te', img: 'https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&q=80' }, // newspaper

    // -- Review sàn --
    { slug: 'danh-gia-san-vantage-2026', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' }, // laptop analytics
    { slug: 'danh-gia-san-exness-2026', img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80' }, // stock chart
    { slug: 'danh-gia-san-xm-2026', img: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80' }, // trading chart
    { slug: 'danh-gia-san-ic-markets-2026', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' }, // laptop analytics
    { slug: 'so-sanh-exness-vs-vantage', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80' }, // calculator money
    { slug: 'top-5-san-forex-phi-thap-nhat', img: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80' }, // stock chart
    { slug: 'top-san-forex-uy-tin-viet-nam', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80' }, // laptop analytics
];

async function run() {
    console.log(`Updating featured images for ${imageUpdates.length} posts...\n`);
    let ok = 0, fail = 0;

    for (const { slug, img } of imageUpdates) {
        const { error } = await supabase
            .from('posts')
            .update({ featured_image: img })
            .eq('slug', slug);
        if (error) {
            console.log(`❌ ${slug}: ${error.message}`);
            fail++;
        } else {
            console.log(`✅ ${slug}`);
            ok++;
        }
    }
    console.log(`\nDone! ${ok} updated, ${fail} failed.`);
}
run();
