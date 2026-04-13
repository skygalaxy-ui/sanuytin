import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const posts = [
  {
    title: 'Chiến Lược Price Action Cho Người Mới Bắt Đầu 2026',
    slug: 'chien-luoc-price-action-cho-nguoi-moi-2026',
    excerpt: 'Hướng dẫn chi tiết cách đọc hành động giá (Price Action) để giao dịch Forex hiệu quả mà không cần chỉ báo kỹ thuật.',
    content: '<h2>Price Action là gì?</h2><p>Price Action là phương pháp phân tích thị trường dựa trên chuyển động giá thuần túy, không sử dụng chỉ báo kỹ thuật...</p><h2>Các mô hình nến quan trọng</h2><p>Pin Bar, Engulfing, Inside Bar là 3 mô hình nến cơ bản nhất mà bạn cần nắm vững.</p><h2>Cách áp dụng vào thực tế</h2><p>Kết hợp Price Action với các vùng hỗ trợ/kháng cự để tìm điểm vào lệnh chính xác.</p>',
    category: 'kien-thuc',
    tags: ['price-action', 'forex', 'người mới'],
    author: 'Admin',
    meta_title: 'Chiến Lược Price Action Cho Người Mới 2026 | SanUyTin',
    meta_description: 'Hướng dẫn chi tiết chiến lược Price Action cho người mới. Học cách đọc nến, xác định trend và tìm điểm vào lệnh hiệu quả.',
    is_published: false,
    scheduled_at: '2026-03-26T08:00:00+07:00'
  },
  {
    title: 'Review Sàn Axi Chi Tiết 2026 - Ưu Nhược Điểm',
    slug: 'review-san-axi-chi-tiet-2026',
    excerpt: 'Đánh giá toàn diện sàn Axi (AxiTrader) - Giấy phép FCA, phí giao dịch, nền tảng và dịch vụ hỗ trợ tại Việt Nam.',
    content: '<h2>Sàn Axi là ai?</h2><p>Axi (trước đây là AxiTrader) được thành lập năm 2007 tại Sydney, Australia. Sàn hiện sở hữu giấy phép FCA (Anh) và ASIC (Úc).</p><h2>Phí giao dịch</h2><p>Tài khoản Pro: Spread từ 0.0 pips, hoa hồng $7/lot. Tài khoản Standard: Spread từ 1.0 pips, không hoa hồng.</p><h2>Ưu và nhược điểm</h2><p>Ưu: Phí thấp, hỗ trợ MT4/MT5, copy trade. Nhược: Chưa có hỗ trợ tiếng Việt chính thức.</p>',
    category: 'review',
    tags: ['axi', 'axitrader', 'review sàn'],
    author: 'Admin',
    meta_title: 'Review Sàn Axi 2026 - Phí Giao Dịch, Giấy Phép & Đánh Giá',
    meta_description: 'Đánh giá chi tiết sàn Axi 2026. Tìm hiểu giấy phép FCA/ASIC, phí spread, nạp rút tiền và trải nghiệm thực tế.',
    is_published: false,
    scheduled_at: '2026-03-27T08:00:00+07:00'
  },
  {
    title: 'So Sánh Exness vs Pepperstone 2026 - Sàn Nào Tốt Hơn?',
    slug: 'so-sanh-exness-vs-pepperstone-2026',
    excerpt: 'So sánh chi tiết 2 sàn giao dịch hàng đầu: Exness với ưu thế rút tiền tức thì vs Pepperstone với tốc độ khớp lệnh siêu nhanh.',
    content: '<h2>Tổng quan 2 sàn</h2><p>Exness và Pepperstone đều là những sàn giao dịch uy tín hàng đầu thế giới, nhưng phục vụ hai nhóm trader khác nhau.</p><h2>So sánh phí giao dịch</h2><p>Exness Pro: Spread từ 0.1 pips. Pepperstone Razor: Spread từ 0.0 pips + $7 hoa hồng.</p><h2>Nạp rút tiền</h2><p>Exness chiến thắng về tốc độ rút tiền (Instant). Pepperstone mất 1-3 ngày làm việc.</p>',
    category: 'so-sanh',
    tags: ['exness', 'pepperstone', 'so sánh sàn'],
    author: 'Admin',
    meta_title: 'So Sánh Exness vs Pepperstone 2026 | Sàn Nào Phí Thấp Hơn?',
    meta_description: 'So sánh Exness vs Pepperstone 2026: Phí giao dịch, tốc độ rút tiền, nền tảng MT4/MT5 và đánh giá từ trader Việt Nam.',
    is_published: false,
    scheduled_at: '2026-03-28T08:00:00+07:00'
  },
  {
    title: 'Top 5 Chỉ Báo Kỹ Thuật Forex Hiệu Quả Nhất 2026',
    slug: 'top-5-chi-bao-ky-thuat-forex-hieu-qua-nhat',
    excerpt: 'Tổng hợp 5 chỉ báo kỹ thuật được trader chuyên nghiệp sử dụng nhiều nhất: RSI, MACD, Bollinger Bands, Stochastic và Ichimoku.',
    content: '<h2>1. RSI (Relative Strength Index)</h2><p>RSI đo lường sức mạnh tương đối của giá. Khi RSI > 70: Quá mua, RSI < 30: Quá bán.</p><h2>2. MACD</h2><p>MACD giúp xác định xu hướng và momentum thị trường thông qua sự giao cắt của 2 đường trung bình.</p><h2>3. Bollinger Bands</h2><p>Dải Bollinger giúp đo lường biến động giá và xác định các vùng quá mua/quá bán.</p><h2>4. Stochastic Oscillator</h2><p>Chỉ báo dao động ngẫu nhiên so sánh giá đóng cửa với biên giá trong một khoảng thời gian.</p><h2>5. Ichimoku Kinko Hyo</h2><p>Hệ thống phân tích toàn diện từ Nhật Bản, cung cấp cái nhìn về xu hướng, hỗ trợ/kháng cự và momentum.</p>',
    category: 'kien-thuc',
    tags: ['chỉ báo kỹ thuật', 'RSI', 'MACD', 'forex'],
    author: 'Admin',
    meta_title: 'Top 5 Chỉ Báo Kỹ Thuật Forex Hiệu Quả Nhất 2026',
    meta_description: 'Hướng dẫn sử dụng 5 chỉ báo kỹ thuật phổ biến nhất: RSI, MACD, Bollinger Bands, Stochastic, Ichimoku cho trader Forex.',
    is_published: false,
    scheduled_at: '2026-03-29T08:00:00+07:00'
  },
  {
    title: 'Cập Nhật Khuyến Mãi Sàn Forex Tháng 4/2026 - Bonus Nạp Tiền',
    slug: 'khuyen-mai-san-forex-thang-4-2026',
    excerpt: 'Tổng hợp các chương trình khuyến mãi, bonus nạp tiền từ các sàn Forex uy tín dành cho trader Việt Nam tháng 4/2026.',
    content: '<h2>Khuyến mãi nổi bật tháng 4/2026</h2><p>Tổng hợp các deal hot nhất từ các sàn giao dịch uy tín dành riêng cho trader Việt Nam.</p><h2>XM - Bonus không cần ký quỹ $30</h2><p>Mở tài khoản mới tại XM và nhận ngay $30 giao dịch miễn phí, không cần nạp tiền.</p><h2>HFM - Bonus nạp tiền 100%</h2><p>Nạp tối thiểu $50 và nhận thêm 100% giá trị nạp, tối đa lên đến $5,000.</p><h2>Lưu ý quan trọng</h2><p>Luôn đọc kỹ điều khoản và điều kiện rút tiền trước khi tham gia bất kỳ chương trình bonus nào.</p>',
    category: 'tin-tuc',
    tags: ['khuyến mãi', 'bonus', 'forex'],
    author: 'Admin',
    meta_title: 'Khuyến Mãi Sàn Forex Tháng 4/2026 | Bonus Nạp Tiền HOT',
    meta_description: 'Tổng hợp khuyến mãi, bonus nạp tiền từ các sàn Forex uy tín tháng 4/2026. Cập nhật deal hot nhất cho trader Việt Nam.',
    is_published: false,
    scheduled_at: '2026-03-30T08:00:00+07:00'
  }
];

console.log('📅 Đang tạo 5 bài viết trong bảng POSTS (giống thao tác Admin)...\n');

const { data, error } = await sb.from('posts').insert(posts).select('id, title, slug, is_published, scheduled_at');

if (error) {
  console.error('❌ Lỗi:', error.message);
  process.exit(1);
}

console.log('✅ Đã tạo thành công 5 bài viết DRAFT + lên lịch:\n');
data.forEach((item, i) => {
  const date = new Date(item.scheduled_at).toLocaleDateString('vi-VN', { weekday: 'long', day: '2-digit', month: '2-digit' });
  console.log(`  ${i + 1}. 📝 "${item.title}"`);
  console.log(`     🔗 Slug: ${item.slug}`);
  console.log(`     📅 Hẹn đăng: ${date} lúc 08:00`);
  console.log(`     📌 Trạng thái: ${item.is_published ? '🟢 Published' : '🟡 Draft (chờ đăng)'}`);
  console.log('');
});

console.log('💡 Bạn có thể vào Admin > Bài viết để chỉnh sửa nội dung trước khi đến giờ đăng.');
console.log('💡 Chạy "node scripts/auto-publish.mjs" để tự động đăng khi đến giờ.');
