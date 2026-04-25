const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

// Load environment variables manually
const envFile = fs.readFileSync('.env.local', 'utf8');
const envVars = envFile.split('\n').reduce((acc, line) => {
    const [key, ...values] = line.split('=');
    if (key && values.length > 0) acc[key.trim()] = values.join('=').trim();
    return acc;
}, {});

const supabaseAdmin = createClient(envVars['NEXT_PUBLIC_SUPABASE_URL'], envVars['SUPABASE_SERVICE_ROLE_KEY']);

const unsp = [
    'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop'
];

function generateSEOArticle(title, keyword) {
    const isNhaTrang = title.toLowerCase().includes('nha trang');
    const isDaNang = title.toLowerCase().includes('đà nẵng') || title.toLowerCase().includes('da nang');
    const city = isDaNang ? 'Đà Nẵng' : (isNhaTrang ? 'Nha Trang' : 'thành phố biển');
    
    const kw = keyword || title;
    
    // Pick 3 random images
    const imgs = [];
    for(let i=0; i<3; i++) {
        imgs.push(unsp[Math.floor(Math.random()*unsp.length)]);
    }

    return `
<p>Biển xanh, cát trắng và hạ tầng du lịch phát triển bậc nhất là những lý do khiến <strong>${city}</strong> trở thành thủ phủ của ngành công nghiệp MICE (Du lịch kết hợp hội nghị) tại Việt Nam. Trong môi trường doanh nghiệp ngày nay, việc tìm kiếm giải pháp và thông tin chuyên sâu về <strong>${kw}</strong> không chỉ giúp bạn tối ưu hóa ngân sách mà còn đảm bảo một chương trình thành công rực rỡ, mang lại dấu ấn không thể phai mờ cho nhân viên và các khách mời VIP. Bài viết chuyên sâu này của Sự Kiện Toàn Quốc sẽ giải quyết triệt để mọi vướng mắc hậu cần để bạn có một góc nhìn toàn diện nhất.</p>

<h2>1. Tại Phân Khúc MICE, ${kw} Đóng Vai Trò Quan Trọng Như Thế Nào?</h2>
<p>Trong tổ chức sự kiện B2B, mọi sai sót nhỏ đều phải trả giá bằng chi phí cực lớn. Việc am hiểu và chuẩn bị kỹ lưỡng <strong>${kw}</strong> theo tiêu chuẩn khắt khe giúp các Event Manager hoặc HR có thể tránh được những khủng hoảng không đáng có.</p>
<p>Đặc thù thời tiết tại ${city} rất đẹp vào ban ngày nhưng đôi khi xuất hiện luồng gió biển giật mạnh vào ban đêm. Điều này đòi hỏi bất kỳ dịch vụ hay ý tưởng nào liên quan đến <em>${kw}</em> đều phải tính toán đến bài toán an toàn thiết bị, chống đổ sập sân khấu rạp LED và bảo vệ hệ thống âm thanh khỏi hơi muối ẩm ướt.</p>
<img src="${imgs[0]}" alt="${kw} tại ${city} chuyên nghiệp uy tín" />

<h2>2. Quy Trình 04 Bước Tối Ưu ${kw} Hoàn Hảo Nhất Tại ${city}</h2>
<h3>A. Bước 1: Khảo sát địa hình và lập khối lượng (Timeline)</h3>
<p>Không có một dự án nào thành công nếu thiếu bản vẽ 3D sơ đồ mặt bằng. Khi tiếp cận vấn đề <strong>${kw}</strong>, Sự Kiện Toàn Quốc khuyên bạn luôn phải đo lường khoảng cách từ khu vực trung tâm đến bãi biển, xác minh vị trí kéo điện 3 pha và vị trí xe tải đỗ để bốc vác đồ đạc. Đây là bí quyết sống còn để không bị phát sinh chi phí vận chuyển giờ chót.</p>

<h3>B. Bước 2: Thiết lập ngân sách (Budgeting)</h3>
<p>Thiết lập chi phí là bài toán xương máu. Việc bóc tách báo giá <em>${kw}</em> phải cực kỳ nguyên tắc. Cần liệt kê chi tiết từng hạng mục: Giá thuê trọn gói âm thanh ánh sáng ngoài trời, giá MC song ngữ, chi phí thuê nhân sự PG/PB bản địa cũng như chi phí phòng lưu trú cho đội ngũ set up thi công. Ở ${city}, giá vào mùa cao điểm du lịch có thể đội lên 30% nếu không chốt cọc sớm.</p>

<img src="${imgs[1]}" alt="Khảo sát thi công ${kw}" />

<h3>C. Bước 3: Phê duyệt phương án Quản trị rủi ro (Risk Management)</h3>
<p>Đừng bao giờ để sự kiện bị hủy bỏ chỉ vì một cơn dông. Với dịch vụ liên quan đến <strong>${kw}</strong>, phải luôn ép nhà cung cấp có phương án Backup (Dự phòng) như: hệ thống bạt che chắn cường độ cao, chuyển phương án ăn uống từ bãi cỏ vào hệ thống sảnh Ballroom, dự phòng máy phát điện liên tục chống mất điện diện rộng tại khu resort.</p>

<h3>D. Bước 4: Test run – Chạy thử chương trình trước giờ G</h3>
<p>Duyệt lại toàn bộ màn hình LED, test micro, duyệt đội lân sư rồng và ca sĩ biểu diễn. Một công ty uy tín tại ${city} luôn bàn giao mọi máy móc vận hành hoàn hảo trước khi khách bắt đầu bước vào khung giờ đón tiếp đúng 60 phút.</p>

<h2>3. 5 Sai Lầm Trí Mạng Bóp Chết Ngân Sách Khi Thuê Dịch Vụ Tại ${city}</h2>
<p>Kinh nghiệm thực tiễn từ hàng trăm dự án đúc kết nên những lỗi sai thảm họa mà các doanh nghiệp hay dính phải:</p>
<ul>
    <li><strong>Sai lầm 1:</strong> Thuê qua các công ty Agency trung gian ở thủ đô hoặc thành phố khác, dẫn đến phải cõng thêm hàng trăm triệu đồng phí chuyên chở và di chuyển phương tiện dọc đường quốc lộ.</li>
    <li><strong>Sai lầm 2:</strong> Quá sa đà vào các khâu trang trí sặc sỡ mà thuê phải hệ thống âm thanh, loa đài chợ đen cũ rích, gây ù rè và làm nát chương trình nhạc kịch.</li>
    <li><strong>Sai lầm 3:</strong> Không xin giấy phép từ Sở Văn hóa Thể thao và chính quyền sở tại, dẫn đến bị đình chỉ ngay trên ${city} sát ngày khai mạc cực kỳ đáng tiếc.</li>
    <li><strong>Sai lầm 4:</strong> Lựa chọn thực đơn hải sản Gala không có chứng nhận an toàn Vệ sinh thực phẩm cho đoàn hàng trăm người.</li>
    <li><strong>Sai lầm 5:</strong> Rút ruột thiết bị, thuê phông rạp bạt giá cực rẻ, không chịu đựng được sức gió cấp 4 cấp 5 giật mạnh bên eo biển.</li>
</ul>

<img src="${imgs[2]}" alt="Giải pháp ${kw} tận gốc an toàn" />

<h2>4. Sự Kiện Toàn Quốc - Đối Tác Vàng Giải Quyết Mọi Nhu Cầu ${kw} Uy Tín!</h2>
<p>Tự hào sở hữu nguồn tiềm lực và hệ sinh thái đồ sộ phủ kín toàn bộ duyên hải Nam Trung Bộ, <strong>Sự Kiện Toàn Quốc</strong> cam kết mang lại mức giá bóc tách tận xưởng - tận gốc không qua dù chỉ một tay cò mối trung gian nào. Chúng tôi sở hữu trực tiếp nhà máy sản xuất bộ khung không gian nhôm, máy móc chiếu sáng hiệu ứng EDM và màn hình hiển thị LED nét căng.</p>
<p>Bạn vẫn còn trăn trở về báo giá và ý tưởng liên quan đến <strong>${kw}</strong> tại ${city}? Đừng để sự thiếu kinh nghiệm lấy đi trải nghiệm cao cấp của doanh nghiệp bạn. <strong>Nhấc máy ngay hôm nay và gọi thẳng tới số Hotline của chúng tôi!</strong> Sự Kiện Toàn Quốc sẵn sàng đệ trình ngay hệ thống kịch bản Proposal hoành tráng nhất, kèm bản phác họa 3D sơ đồ sự kiện chân thật, dồn toàn bộ nguồn lực để đảm bảo cho bạn một chiến dịch truyền thông và sự kiện bùng nổ, rực rỡ và thành công không tì vết!</p>
`;
}

(async () => {
    // 1. Fetch unpublished posts targeting Nha Trang / Da Nang which have the placeholder content
    const { data: posts } = await supabaseAdmin
        .from('posts')
        .select('id, title, content')
        .eq('is_published', false) // Only edit un-published pending posts

    const shortPosts = posts.filter(p => !p.content || p.content.length < 200);

    if (!shortPosts || shortPosts.length === 0) {
        console.log('No posts found to expand.');
        process.exit(0);
    }

    console.log('Found', shortPosts.length, 'posts to expand. Expanding...');

    let updated = 0;
    for (let p of shortPosts) {
        const fullHtml = generateSEOArticle(p.title, p.title);
        await supabaseAdmin.from('posts').update({ content: fullHtml, updated_at: new Date().toISOString() }).eq('id', p.id);
        updated++;
    }

    console.log('Expanded successfully!', updated, 'posts formatted.');
    process.exit(0);
})();
