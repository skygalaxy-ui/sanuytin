import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// Proper Vietnamese tags for each post
const tagUpdates = [
    { slug: 'du-bao-gia-vang-tuan-2-thang-2', tags: ['giá vàng', 'XAU/USD', 'dự báo', 'phân tích kỹ thuật'] },
    { slug: 'huong-dan-mo-tai-khoan-vantage', tags: ['Vantage', 'mở tài khoản', 'hướng dẫn', 'sàn forex'] },
    { slug: 'cach-nap-rut-tien-exness', tags: ['Exness', 'nạp rút tiền', 'hướng dẫn', 'thanh toán'] },
    { slug: 'cach-dat-stop-loss-take-profit', tags: ['Stop Loss', 'Take Profit', 'quản lý rủi ro', 'lệnh forex'] },
    { slug: 'fed-giu-nguyen-lai-suat-thang-2-2026', tags: ['Fed', 'lãi suất', 'USD', 'chính sách tiền tệ'] },
    { slug: 'gia-vang-vuot-moc-2100-usd', tags: ['giá vàng', 'XAU/USD', 'vàng thế giới', 'tin tức'] },
    { slug: 'usd-vnd-tang-nhe-thang-2-2026', tags: ['USD/VND', 'tỷ giá', 'NHNN', 'đồng Việt Nam'] },
    { slug: 'ecb-can-nhac-cat-giam-lai-suat-q2', tags: ['ECB', 'lãi suất', 'EUR/USD', 'châu Âu'] },
    { slug: 'bitcoin-vuot-60000-usd-2026', tags: ['Bitcoin', 'BTC', 'crypto', 'tiền điện tử'] },
    { slug: 'thi-truong-chau-a-khoi-sac-pmi', tags: ['PMI', 'châu Á', 'Trung Quốc', 'thị trường'] },
    { slug: 'forex-la-gi-huong-dan-nguoi-moi', tags: ['forex là gì', 'người mới', 'kiến thức cơ bản', 'giao dịch ngoại hối'] },
    { slug: 'cach-doc-bieu-do-nen-nhat-ban', tags: ['nến Nhật', 'biểu đồ', 'phân tích kỹ thuật', 'candlestick'] },
    { slug: 'quan-ly-von-trong-trading', tags: ['quản lý vốn', 'money management', 'rủi ro', 'trading'] },
    { slug: 'phan-tich-ky-thuat-vs-co-ban', tags: ['phân tích kỹ thuật', 'phân tích cơ bản', 'so sánh', 'phương pháp'] },
    { slug: 'tam-ly-trading-yeu-to-thanh-cong', tags: ['tâm lý trading', 'kỷ luật', 'cảm xúc', 'thành công'] },
    { slug: 'cac-loai-lenh-trong-forex', tags: ['loại lệnh', 'Market Order', 'Limit Order', 'Stop Order'] },
    { slug: 'cach-cai-dat-metatrader-4', tags: ['MetaTrader 4', 'MT4', 'cài đặt', 'nền tảng giao dịch'] },
    { slug: 'huong-dan-su-dung-rsi', tags: ['RSI', 'chỉ báo', 'phân tích kỹ thuật', 'indicator'] },
    { slug: 'huong-dan-copy-trading', tags: ['copy trading', 'sao chép lệnh', 'người mới', 'hướng dẫn'] },
    { slug: 'phan-tich-eurusd-xu-huong-tang', tags: ['EUR/USD', 'phân tích', 'xu hướng tăng', 'cặp tiền'] },
    { slug: 'gbpusd-but-pha-du-lieu-viec-lam', tags: ['GBP/USD', 'việc làm UK', 'bảng Anh', 'phân tích'] },
    { slug: 'usdjpy-boj-can-thiep', tags: ['USD/JPY', 'BOJ', 'can thiệp', 'Yên Nhật'] },
    { slug: 'dau-tho-xu-huong-giam-ngan-han', tags: ['dầu thô', 'WTI', 'hàng hóa', 'xu hướng giảm'] },
    { slug: 'trien-vong-audusd-cuoc-hop-rba', tags: ['AUD/USD', 'RBA', 'đô Úc', 'lãi suất'] },
    { slug: 'danh-gia-san-vantage-2026', tags: ['Vantage', 'đánh giá sàn', 'review', 'sàn forex'] },
    { slug: 'danh-gia-san-exness-2026', tags: ['Exness', 'đánh giá sàn', 'review', 'uy tín'] },
    { slug: 'danh-gia-san-xm-2026', tags: ['XM', 'đánh giá sàn', 'review', 'bonus'] },
    { slug: 'danh-gia-san-ic-markets-2026', tags: ['IC Markets', 'đánh giá sàn', 'ECN', 'scalping'] },
    { slug: 'so-sanh-exness-vs-vantage', tags: ['Exness', 'Vantage', 'so sánh sàn', 'spread'] },
    { slug: 'top-5-san-forex-phi-thap-nhat', tags: ['sàn phí thấp', 'spread thấp', 'top sàn', 'chi phí giao dịch'] },
];

async function run() {
    console.log(`Updating tags for ${tagUpdates.length} posts...\n`);
    let ok = 0;
    for (const { slug, tags } of tagUpdates) {
        const { error } = await supabase.from('posts').update({ tags }).eq('slug', slug);
        if (error) { console.log(`❌ ${slug}: ${error.message}`); }
        else { ok++; console.log(`✅ ${slug}: ${tags.join(', ')}`); }
    }
    console.log(`\nDone! ${ok}/${tagUpdates.length} updated.`);
}
run();
