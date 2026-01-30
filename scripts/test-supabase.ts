// Test Supabase connection and add sample data
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ecipdcojedkbrlggaqja.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testConnection() {
    console.log('🔌 Testing Supabase connection...\n');

    // Test 1: Check tables exist
    const { data: tables, error: tablesError } = await supabase
        .from('brokers')
        .select('count')
        .limit(1);

    if (tablesError) {
        console.error('❌ Connection failed:', tablesError.message);
        return false;
    }
    console.log('✅ Connected to Supabase successfully!\n');
    return true;
}

async function insertSampleData() {
    console.log('📝 Inserting sample data...\n');

    // Sample Brokers
    const brokers = [
        {
            rank: 1,
            name: 'Exness',
            slug: 'exness',
            logo: 'https://sanuytin.net/wp-content/uploads/2024/03/Exness-logo.webp',
            score: 9.8,
            avg_spread: '0.0 pip',
            max_lev: '1:2000',
            min_dep: '$1',
            license: 'FCA, CySEC, FSA',
            register_link: 'https://exness.com',
            pros: ['Spread thấp nhất thị trường', 'Rút tiền tự động 24/7', 'Đòn bẩy cao'],
            cons: ['Không có bonus', 'Chưa có app mobile riêng'],
            features: ['Copy Trading', 'VPS miễn phí', 'Phí qua đêm thấp'],
            year_founded: 2008,
            headquarters: 'Cyprus',
            platforms: ['MT4', 'MT5', 'Web Terminal'],
            is_active: true
        },
        {
            rank: 2,
            name: 'XM',
            slug: 'xm',
            logo: 'https://sanuytin.net/wp-content/uploads/2024/03/xm-logo.webp',
            score: 9.5,
            avg_spread: '0.6 pip',
            max_lev: '1:1000',
            min_dep: '$5',
            license: 'ASIC, CySEC, IFSC',
            register_link: 'https://xm.com',
            pros: ['Bonus hấp dẫn', 'Hỗ trợ tiếng Việt 24/5', 'Nhiều khuyến mãi'],
            cons: ['Spread cao hơn Exness', 'Phí qua đêm cao'],
            features: ['Bonus 30$', 'Webinar hàng tuần', 'Phân tích thị trường'],
            year_founded: 2009,
            headquarters: 'Cyprus',
            platforms: ['MT4', 'MT5'],
            is_active: true
        },
        {
            rank: 3,
            name: 'Vantage',
            slug: 'vantage',
            logo: 'https://sanuytin.net/wp-content/uploads/2024/03/vantage-logo.webp',
            score: 9.3,
            avg_spread: '0.0 pip',
            max_lev: '1:500',
            min_dep: '$50',
            license: 'ASIC, FCA, CIMA',
            register_link: 'https://vantage.com',
            pros: ['Raw spread từ 0.0', 'Nạp rút nhanh', 'Hỗ trợ tốt'],
            cons: ['Deposit tối thiểu cao', 'Chưa phổ biến tại VN'],
            features: ['ECN/STP', 'Pro Trader Tools', 'VPS miễn phí'],
            year_founded: 2009,
            headquarters: 'Australia',
            platforms: ['MT4', 'MT5', 'ProTrader'],
            is_active: true
        }
    ];

    const { data: brokersData, error: brokersError } = await supabase
        .from('brokers')
        .insert(brokers)
        .select();

    if (brokersError) {
        console.error('❌ Error inserting brokers:', brokersError.message);
    } else {
        console.log(`✅ Inserted ${brokersData.length} brokers`);
    }

    // Sample Scheduled Content
    const scheduledContent = [
        {
            title: 'Cập nhật đánh giá Exness tháng 2/2026',
            type: 'review',
            status: 'scheduled',
            scheduled_date: '2026-02-01T09:00:00Z',
            author: 'Admin',
            category: 'Đánh giá sàn',
            notes: 'Cập nhật spread và phí mới'
        },
        {
            title: 'Hướng dẫn giao dịch vàng cho người mới',
            type: 'article',
            status: 'draft',
            scheduled_date: '2026-02-05T10:00:00Z',
            author: 'Editor',
            category: 'Kiến thức',
            notes: null
        },
        {
            title: 'Khuyến mãi Tết Nguyên Đán 2026',
            type: 'promotion',
            status: 'scheduled',
            scheduled_date: '2026-01-28T00:00:00Z',
            author: 'Marketing',
            category: 'Khuyến mãi',
            notes: 'Bonus 100% deposit'
        },
        {
            title: 'So sánh Exness vs XM 2026',
            type: 'article',
            status: 'scheduled',
            scheduled_date: '2026-02-10T08:00:00Z',
            author: 'Admin',
            category: 'So sánh',
            notes: null
        }
    ];

    const { data: contentData, error: contentError } = await supabase
        .from('scheduled_content')
        .insert(scheduledContent)
        .select();

    if (contentError) {
        console.error('❌ Error inserting scheduled content:', contentError.message);
    } else {
        console.log(`✅ Inserted ${contentData.length} scheduled content items`);
    }

    // Sample Site Settings
    const settings = [
        { key: 'site_name', value: JSON.stringify('Sàn Uy Tín') },
        { key: 'site_tagline', value: JSON.stringify('Top 10 Sàn Forex Uy Tín Tại Việt Nam 2026') },
        { key: 'contact_email', value: JSON.stringify('contact@sanuytin.net') },
        { key: 'social_facebook', value: JSON.stringify('https://facebook.com/sanuytin') }
    ];

    const { data: settingsData, error: settingsError } = await supabase
        .from('site_settings')
        .insert(settings)
        .select();

    if (settingsError) {
        console.error('❌ Error inserting settings:', settingsError.message);
    } else {
        console.log(`✅ Inserted ${settingsData.length} site settings`);
    }

    console.log('\n🎉 Sample data inserted successfully!');
}

async function verifyData() {
    console.log('\n📊 Verifying data...\n');

    const { data: brokers } = await supabase.from('brokers').select('name, score').order('rank');
    console.log('Brokers:', brokers);

    const { data: content } = await supabase.from('scheduled_content').select('title, status');
    console.log('Scheduled Content:', content);

    const { data: settings } = await supabase.from('site_settings').select('key, value');
    console.log('Settings:', settings);
}

// Run tests
async function main() {
    const connected = await testConnection();
    if (connected) {
        await insertSampleData();
        await verifyData();
    }
}

main();
