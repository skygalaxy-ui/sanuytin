const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://pbxpjmklrkkwatdvacap.supabase.co";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE";

const supabase = createClient(supabaseUrl, supabaseKey);

const post = {
    scheduled_at: '2026-04-06T00:30:00+00:00', // 07:30 VN
    slug: 'bai-hoc-kinh-nghiem-giao-dich-forex',
    title: '5 Bài Học Sống Còn Từ Pro Trader Chuyên Nghiệp',
    meta_title: 'Bài Học Từ Pro Trader: 5 Nguyên Tắc Sống Còn',
    excerpt: 'Được phỏng vấn từ phong cách đầu tư bền bỉ của những chuyên gia đứng top giao dịch tại Forex thế giới, làm sáng tỏ câu đố giữa kiên trì và kỷ luật vô tâm.',
    category: 'kien-thuc',
    featured_image: '/images/traders_celebrating_confetti_1775207320287.png',
    featured_image_alt: 'Những bài học thành công trong giao dịch Forex',
    content: `
<h2>1. Bức Tranh Lấp Lánh – Kỷ Nguyên Chờ Đợi Sự Thành Công</h2>
<p>Có một câu chuyện muôn thuở được truyền tai: "Một Trader mới học muốn giàu trong 3 ngày, còn một Trader kỳ cựu sẵn sàng trải qua chuỗi hoà 30 ngày để giữ cho vốn của họ luôn ở trạng thái tấn công an toàn". Sự khác biệt ở việc chuyên nghiệp không thể được nhét bằng công cụ giao dịch mà nằm ở sự chuẩn bị tinh thần và nội tâm sâu sắc nhất.</p>
<figure style="margin: 2em 0; text-align: center;">
<img src="/images/traders_celebrating_confetti_1775207320287.png" alt="Lễ kỷ niệm chiến thắng của các trader tại phòng ban giao dịch" style="width:100%; border-radius:12px;" loading="lazy" />
<figcaption style="color:#888; font-size:14px; margin-top:8px;">Chiến thắng không thuộc về người đoán đúng mọi xu hướng, chiến thắng là sự sống sót của chu kỳ</figcaption>
</figure>
<h2>2. Những Nguyên Tắc Xương Máu Gây Bất Ngờ</h2>
<ul>
    <li><strong>Sự thành công là việc LẶP ĐI LẶP LẠI sự tẻ nhạt:</strong> Những Pro-Trader không bị rung động trước mức tỷ giá nhảy cóc vì họ có một nhật ký giao dịch rất kiên cường lặp lại chu kỳ hàng trăm ván chơi đồng nhất.</li>
    <li><strong>Thắng - Thua là 1 Xác Suất Phân Tán Đều:</strong> Hãy tưởng tượng bạn ném xu - và dù phương pháp có 60% tỉ lệ win, thì vẫn có chuỗi đen thua liền 8 lần. Một tài khoản trụ vững không bao giờ vỡ trận trước 8 ván thua.</li>
    <li><strong>Yêu Quý Stop loss (Chốt lỗ) ngang với Chốt Mạng:</strong> Stop loss là bảo hiểm an ninh tốt nhất cho lệnh giao dịch trong các mùa bão giá tài phiệt. Mất vài đồng tiền nhỏ nhưng có thể thức dậy vui vẻ làm lại chiến trường ngay tháng sau.</li>
</ul>
<h2>3. Lời Nhắn Nhủ Gửi Gắm</h2>
<p>Hãy xoay sự tập trung vào VỐN sống còn của bạn, còn LỢI NHUẬN sẽ đi theo hệ thống. Trading là một cuộc chơi cự ly Marathon. Đừng chạy quá sức rồi nằm lại ngay vạch 100m đầu tiên của chuyến hành trình ngàn dặm.</p>
`
};

async function run() {
    const { data: existing } = await supabase
        .from('posts')
        .select('id')
        .eq('slug', post.slug)
        .single();

    if (existing) {
        console.log('=> WARNING: Slug already exists, skipping!');
        return;
    }

    const { error } = await supabase.from('posts').insert({
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        meta_title: post.meta_title,
        meta_description: post.excerpt,
        content: post.content,
        category: post.category,
        featured_image: post.featured_image,
        featured_image_alt: post.featured_image_alt,
        is_published: false,
        scheduled_at: post.scheduled_at,
        published_at: null
    });

    if (error) {
        console.log('=> ERROR: ' + error.message);
    } else {
        console.log('=> OK: Scheduled successfully!');
    }
}

run();
