// Import all brokers from brokers.ts to Supabase
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ecipdcojedkbrlggaqja.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Broker data from brokers.ts (converted to Supabase format)
const brokers = [
    {
        rank: 1,
        name: "Vantage",
        slug: "vantage",
        logo: "https://sanuytin.net/wp-content/uploads/2025/11/san-giao-dich-forex-vantage-co-uy-tin-khong.png",
        score: 9.9,
        avg_spread: "1.0 pips",
        max_lev: "1:1000",
        min_dep: "$50",
        license: "ASIC, FCA, CIMA",
        register_link: "https://www.vantage-markets-apac.com/vi/open-live-account/?affid=NzI2ODQyNw==",
        pros: ["Được cấp phép bởi các tổ chức uy tín hàng đầu (ASIC, FCA)", "Tốc độ khớp lệnh cực nhanh, không re-quote", "Phí giao dịch thấp, đặc biệt là tài khoản Raw ECN", "Hỗ trợ nạp rút tiền nhanh chóng qua ngân hàng nội địa"],
        cons: ["Yêu cầu tiền nạp tối thiểu $50 (cao hơn một số sàn khác)", "Ít chương trình Bonus cho khách hàng cũ"],
        features: ["Khớp lệnh siêu tốc", "Raw Spread từ 0.0", "Hỗ trợ người Việt"],
        year_founded: 2009,
        headquarters: "Sydney, Australia",
        platforms: ["MT4", "MT5", "ProTrader", "App"],
        is_active: true
    },
    {
        rank: 2,
        name: "XM",
        slug: "xm",
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/xm-sanuytin.jpg",
        score: 9.8,
        avg_spread: "1.0 pips",
        max_lev: "1:1000",
        min_dep: "$5",
        license: "ASIC, CySEC, FSC",
        register_link: "https://affs.click/mG65j",
        pros: ["Chương trình Bonus thưởng nạp tiền hấp dẫn nhất", "Không yêu cầu báo giá lại (Re-quotes)", "Phí spread ổn định, không giãn mạnh"],
        cons: ["Tài khoản Standard có spread hơi cao so với ECN", "Giao diện web hơi cũ"],
        features: ["Bonus $30 không cần nạp", "Phí qua đêm thấp", "Khớp lệnh nhanh"],
        year_founded: 2009,
        headquarters: "Limassol, Cyprus",
        platforms: ["MT4", "MT5", "XM App"],
        is_active: true
    },
    {
        rank: 3,
        name: "Exness",
        slug: "exness",
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/exness-sanuytin.jpg",
        score: 9.5,
        avg_spread: "0.6 pips",
        max_lev: "Vô cực",
        min_dep: "$10",
        license: "FCA, CySEC, FSA",
        register_link: "#",
        pros: ["Nạp rút tiền diễn ra tức thì, kể cả cuối tuần", "Đòn bẩy không giới hạn (Vô cực)", "Spread trên cặp vàng và tiền tệ chính cực thấp", "Đội ngũ hỗ trợ người Việt 24/7 nhiệt tình"],
        cons: ["Máy chủ đôi khi bị lag vào giờ tin mạnh", "Spread có thể giãn nhẹ khi thị trường biến động cực đoan"],
        features: ["Nạp rút tức thì", "Spread cực thấp", "Hỗ trợ tiếng Việt 24/7"],
        year_founded: 2008,
        headquarters: "Limassol, Cyprus",
        platforms: ["MT4", "MT5", "Exness Terminal"],
        is_active: true
    },
    {
        rank: 4,
        name: "XTB",
        slug: "xtb",
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/xtb-sanuytin.jpg",
        score: 9.5,
        avg_spread: "0.8 pips",
        max_lev: "1:500",
        min_dep: "$0",
        license: "FCA, CySEC, KNF",
        register_link: "#",
        pros: ["Nền tảng xStation 5 độc quyền cực kỳ mượt mà", "Được niêm yết trên sàn chứng khoán (minh bạch tài chính)", "Miễn phí phí qua đêm (Swap) cho lệnh Vàng và nhiều cặp tiền"],
        cons: ["Không hỗ trợ MT4/MT5 (có thể khó quen với người cũ)", "Đòn bẩy tối đa chỉ 1:500"],
        features: ["Nền tảng xStation 5 xịn", "Niêm yết chứng khoán", "Miễn phí qua đêm vàng"],
        year_founded: 2002,
        headquarters: "Warsaw, Poland",
        platforms: ["xStation 5", "xStation Mobile"],
        is_active: true
    },
    {
        rank: 5,
        name: "FBS",
        slug: "fbs",
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/fbs-sanuytin.png",
        score: 9.3,
        avg_spread: "0.7 pips",
        max_lev: "1:3000",
        min_dep: "$1",
        license: "CySEC, ASIC, FSC",
        register_link: "#",
        pros: ["Đòn bẩy cực cao lên tới 1:3000", "Nhiều loại tài khoản phù hợp mọi trader (Cent, Micro, Standard)", "Ứng dụng Copy Trade tốt"],
        cons: ["Spread tài khoản thường hơi cao", "Giấy phép quốc tế chưa mạnh bằng top đầu"],
        features: ["Nhiều loại tài khoản", "Copy trade tốt", "Nạp rút nhanh"],
        year_founded: 2009,
        headquarters: "Limassol, Cyprus",
        platforms: ["MT4", "MT5", "FBS Trader"],
        is_active: true
    },
    {
        rank: 6,
        name: "HFM",
        slug: "hfm",
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/hfm-sanuytin.jpg",
        score: 9.2,
        avg_spread: "1.0 pips",
        max_lev: "1:2000",
        min_dep: "$5",
        license: "FCA, CySEC, FSA",
        register_link: "#",
        pros: ["Chương trình Bảo hiểm Trách nhiệm Dân sự lên đến 5.000.000 EUR", "Tài khoản PAMM chất lượng cho nhà đầu tư", "Công cụ phân tích độc quyền Premium Trader Tools", "Nhiều loại tài khoản linh hoạt (Cent, Zero, Premium)"],
        cons: ["Quy trình xác minh danh tính đôi khi hơi lâu (24h)", "Không hỗ trợ PayPal cho khách hàng Việt Nam"],
        features: ["Bonus nạp tiền lớn", "Nhiều công cụ GD", "Bảo hiểm vốn"],
        year_founded: 2010,
        headquarters: "Larnaca, Cyprus",
        platforms: ["MT4", "MT5", "HFM App"],
        is_active: true
    },
    {
        rank: 7,
        name: "FXTM",
        slug: "fxtm",
        logo: "https://sanuytin.net/wp-content/uploads/2025/11/fxtm-san-forex-uy-tin-2025.jpeg",
        score: 9.1,
        avg_spread: "1.5 pips",
        max_lev: "1:2000",
        min_dep: "$10",
        license: "FCA, CySEC",
        register_link: "#",
        pros: ["Tốc độ khớp lệnh ECN cực nhanh, trung bình vài mili giây", "Nền tảng FXTM Invest (Copy Trade) rất phát triển", "Kho tài liệu giáo dục và hội thảo online phong phú", "Tách biệt vốn khách hàng tại các ngân hàng Tier-1"],
        cons: ["Phí rút tiền qua một số ví điện tử có thể cao", "Giao diện web quản lý tài khoản hơi rối với người mới"],
        features: ["Đào tạo tốt", "Tài khoản ECN", "Hỗ trợ nhiệt tình"],
        year_founded: 2011,
        headquarters: "Limassol, Cyprus",
        platforms: ["MT4", "MT5", "FXTM Trader"],
        is_active: true
    },
    {
        rank: 8,
        name: "FxPro",
        slug: "fxpro",
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/fxpro-sanuytin.jpg",
        score: 8.9,
        avg_spread: "1.2 pips",
        max_lev: "1:500",
        min_dep: "$100",
        license: "FCA, CySEC, SCB",
        register_link: "#",
        pros: ["Thương hiệu toàn cầu uy tín, nhà tài trợ đội đua McLaren F1", "Nền tảng cTrader mạnh mẽ, hỗ trợ đo lường độ sâu thị trường (DOM)", "Mô hình No Dealing Desk (NDD) minh bạch hoàn toàn", "Ví FxPro Wallet giúp quản lý vốn an toàn, tách biệt rủi ro"],
        cons: ["Spread trên tài khoản MT4 không cạnh tranh bằng Exness hay Vantage", "Quy trình mở tài khoản yêu cầu xác minh khá kỹ"],
        features: ["Thương hiệu toàn cầu", "Không phí hoa hồng", "Nhiều nền tảng"],
        year_founded: 2006,
        headquarters: "London, UK",
        platforms: ["cTrader", "MT4", "MT5", "FxPro Edge"],
        is_active: true
    },
    {
        rank: 9,
        name: "Tickmill",
        slug: "tickmill",
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/tickmill-sanuytin.jpg",
        score: 8.6,
        avg_spread: "0.0 pips",
        max_lev: "1:1000",
        min_dep: "$100",
        license: "FCA, CySEC, FSA",
        register_link: "#",
        pros: ["Phí hoa hồng (Commission) thấp nhất thị trường: 2 đơn vị tiền tệ/lot", "Chào đón mọi chiến lược giao dịch: Scalping, News Trading, EA", "Không có phí ẩn, spread cực thấp trên tài khoản Pro", "Giấy phép FCA Anh Quốc uy tín"],
        cons: ["Ít sản phẩm giao dịch (chủ yếu là Forex, Vàng, Dầu, một số Index)", "Không có tài khoản Cent (chỉ có Pro và Classic)"],
        features: ["Spread thấp ổn định", "Không phí hoa hồng", "Execution nhanh"],
        year_founded: 2014,
        headquarters: "Mahe, Seychelles",
        platforms: ["MT4", "MT5"],
        is_active: true
    },
    {
        rank: 10,
        name: "Pepperstone",
        slug: "pepperstone",
        logo: "https://sanuytin.net/wp-content/uploads/2025/10/Pepperstone-sanuytin.jpg",
        score: 8.3,
        avg_spread: "0.0 pips",
        max_lev: "1:500",
        min_dep: "$0 (rec. $200)",
        license: "ASIC, FCA, SCB",
        register_link: "#",
        pros: ["Hỗ trợ kết nối trực tiếp với TradingView để giao dịch", "Thanh khoản sâu từ 22 ngân hàng Tier-1", "Dịch vụ chăm sóc khách hàng được đánh giá 5 sao", "Khớp lệnh cực nhanh dưới 30ms"],
        cons: ["Yêu cầu nạp tiền lần đầu $200 (hơi cao với sinh viên)", "Không có nhiều chương trình Bonus như XM hay Exness"],
        features: ["Khớp lệnh cực nhanh", "Không Dealing Desk", "Hỗ trợ cTrader"],
        year_founded: 2010,
        headquarters: "Melbourne, Australia",
        platforms: ["cTrader", "MT4", "MT5", "TradingView"],
        is_active: true
    }
];

async function clearAndImportBrokers() {
    console.log('🗑️ Clearing existing brokers...\n');

    // Delete existing brokers
    const { error: deleteError } = await supabase
        .from('brokers')
        .delete()
        .neq('id', 0); // Delete all

    if (deleteError) {
        console.error('❌ Error deleting brokers:', deleteError.message);
        return;
    }
    console.log('✅ Cleared existing brokers\n');

    console.log('📝 Importing 10 brokers...\n');

    const { data, error } = await supabase
        .from('brokers')
        .insert(brokers)
        .select();

    if (error) {
        console.error('❌ Error inserting brokers:', error.message);
        return;
    }

    console.log(`✅ Successfully imported ${data.length} brokers:\n`);
    data.forEach(broker => {
        console.log(`   ${broker.rank}. ${broker.name} (Score: ${broker.score})`);
    });
}

async function addMoreScheduledContent() {
    console.log('\n📅 Adding more scheduled content...\n');

    const moreContent = [
        {
            title: 'Hướng dẫn đăng ký Vantage từ A-Z',
            type: 'article',
            status: 'scheduled',
            scheduled_date: '2026-02-08T09:00:00Z',
            author: 'Admin',
            category: 'Hướng dẫn',
            notes: 'Bài hướng dẫn chi tiết với hình ảnh'
        },
        {
            title: 'Review sàn FBS tháng 2/2026',
            type: 'review',
            status: 'draft',
            scheduled_date: '2026-02-12T10:00:00Z',
            author: 'Editor',
            category: 'Đánh giá sàn',
            notes: null
        },
        {
            title: 'So sánh chi tiết HFM vs FXTM',
            type: 'article',
            status: 'scheduled',
            scheduled_date: '2026-02-15T08:00:00Z',
            author: 'Admin',
            category: 'So sánh',
            notes: 'Bảng so sánh detailBroker'
        },
        {
            title: 'Cập nhật spread Pepperstone',
            type: 'update',
            status: 'scheduled',
            scheduled_date: '2026-02-20T14:00:00Z',
            author: 'Editor',
            category: 'Cập nhật',
            notes: 'Dữ liệu spread mới nhất'
        }
    ];

    const { data, error } = await supabase
        .from('scheduled_content')
        .insert(moreContent)
        .select();

    if (error) {
        console.error('❌ Error adding content:', error.message);
        return;
    }

    console.log(`✅ Added ${data.length} more scheduled content items`);
}

async function verifySummary() {
    console.log('\n📊 SUMMARY:\n');

    const { data: brokerData } = await supabase
        .from('brokers')
        .select('name, score, rank')
        .order('rank');

    console.log('📌 BROKERS in Supabase:');
    brokerData?.forEach(b => console.log(`   #${b.rank} ${b.name} - ${b.score}⭐`));

    const { data: contentData } = await supabase
        .from('scheduled_content')
        .select('title, status, type')
        .order('scheduled_date');

    console.log('\n📌 SCHEDULED CONTENT:');
    contentData?.forEach(c => console.log(`   [${c.status}] ${c.title}`));

    console.log('\n🎉 Import completed successfully!');
}

// Run
async function main() {
    await clearAndImportBrokers();
    await addMoreScheduledContent();
    await verifySummary();
}

main();
