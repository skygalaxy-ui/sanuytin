const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const envFile = fs.readFileSync('.env.local', 'utf8');
const envVars = envFile.split('\n').reduce((acc, line) => {
    const [key, ...values] = line.split('=');
    if (key && values.length > 0) acc[key.trim()] = values.join('=').trim();
    return acc;
}, {});

const supabaseAdmin = createClient(envVars['NEXT_PUBLIC_SUPABASE_URL'], envVars['SUPABASE_SERVICE_ROLE_KEY']);

(async () => {
    // 1. Fetch post-images (Admin rules)
    const { data: imgList } = await supabaseAdmin.storage.from('post-images').list();
    const validImages = imgList.filter(f => f.name !== '.emptyFolderPlaceholder');
    const localUrls = validImages.map(f => supabaseAdmin.storage.from('post-images').getPublicUrl(f.name).data.publicUrl);
    
    const imgs = [];
    for(let i=0; i<4; i++) {
        imgs.push(localUrls[Math.floor(Math.random()*localUrls.length)]);
    }

    const keyword = 'công ty tổ chức teambuilding trọn gói nha trang';
    const title = 'Top 1 Công Ty Tổ Chức Teambuilding Trọn Gói Nha Trang Chống Rủi Ro Khí Hậu';
    const slug = 'cong-ty-to-chuc-teambuilding-tron-goi-nha-trang';

    const fullHtml = `
<p>Lên kế hoạch vui chơi cho một tập thể từ 100 đến 1000 nhân sự chưa bao giờ là việc nhẹ nhàng, nhất là khi chọn đích đến là thành phố biển đầy nắng gió. Việc giao phó hàng trăm sinh mạng cùng với danh dự công đoàn cho một <strong>${keyword}</strong> đòi hỏi sự giám sát và một cái đầu cực kỳ lạnh bóc tách từng chi phí thật giả lẫn lộn.</p>

<h2>1. Tại Sao Teambuilding Tại Nha Trang Lại Đòi Hỏi Yêu Cầu Logistic Sinh Tử Thế Này?</h2>
<p>Bạn không thể bưng nguyên kịch bản Teambuilding ở bãi cỏ công viên vào một môi trường thiên nhiên khắc nghiệt như Bãi Dài hay Bãi Cồn Dê của Nha Trang. Cái nắng gió duyên hải Nam Trung Bộ có thể vắt kiệt sức lực của các nhân viên văn phòng chỉ trong 30 phút dưới nắng.</p>
<p>Thế nhưng, nhiều nhà phân phối tour nghiệp dư vẫn liên tiếp nhồi nhét cường độ vận động cực mạnh với vật dụng bằng nhựa dỏm, dẫn đến tình trạng ngất xỉu và tai nạn bong gân đồng loạt. Vì thế, lựa chọn đúng <strong>công ty tổ chức teambuilding trọn gói nha trang</strong> phải bao hàm cả năng lực "Y Tế Dự Phòng" và năng lực đánh giá "Địa Hình Sát Thương".</p>
<img src="${imgs[0]}" alt="Vận hành Teambuilding bãi biển Nha Trang an toàn" />

<h2>2. Bộ Quy Chuẩn 4 Bước Để Cân Đo Đong Đếm Năng Lực Của Agency Teambuilding</h2>
<h3>BƯỚC 1: Xác Thực Dụng Cụ Trò Chơi (Game Tools) Bằng Kho Bãi Thực Tế</h3>
<p>Rất nhiều tay cò môi giới nhận kịch bản từ bạn, sau đó chạy đi mướn dụng cụ bơm hơi với chất lượng cao su tái chế mỏng dính. Kết quả là khi đang chơi leo núi phao trên mặt biển, phao bị xịt hoặc rách khiến người chơi chìm xuống nước vô cùng nguy hiểm. Một tập đoàn sự kiện lớn bắt buộc phải chứng minh cho bạn thấy xưởng bảo quản phao bơm hơi kháng lực, áo phao chịu tải trọng 120kg được giặt ủi sạch sẽ trước ngày D-1.</p>

<h3>BƯỚC 2: Sự Linh Hoạt Kịch Bản Giải Cứu Mưa Bão Mặt Cầu</h3>
<p>Nha Trang có mùa giông trên biển cực kỳ khó lường. Công ty tổ chức được gọi là "chuyên nghiệp" khi họ trình bày ngay một [Kịch Bản Plan B - Teambuilding Trong Nhà (Indoor)] vào ngày báo giá. Nếu đổ giông bão, toàn bộ kèn trống, hệ thống loa kéo, game trí tuệ sẽ tự động di chuyển về Grand Ballroom (Phòng hội nghị lớn) của Resort mà ngân sách không thay đổi một đồng.</p>

<img src="${imgs[1]}" alt="Kịch bản dự phòng chống mưa bão cho Teambuilding" />

<h3>BƯỚC 3: Mạng Lưới Ràng Buộc Với Nhà Yến Xào (Dinh Dưỡng Xế Chiều)</h3>
<p>Nhân viên tham gia chạy nhảy, tiêu hao một lượng Calories khổng lồ. Việc Agency chỉ cung cấp nước lọc và dưa hấu vào giờ giải lao là một sự sỉ nhục đối với ngân sách công ty. Điểm sáng của hãng tổ chức Teambuilding tại Nha Trang xịn là họ phải bố trí những quầy Buffet Tea-break năng lượng cao: Cháo nhum biển, Yến sào đường phèn, Bánh ngọt dừa để phục hồi cơ thể cực tốc cho đại viên.</p>

<h3>BƯỚC 4: Xé Nát Bảng Báo Giá Ma - Tuyệt Đối Sạch (VAT Tách Bạch)</h3>
<p>Đừng vì một báo giá có dòng chữ "Trọn gói 1 Triệu/người" mà gật đầu. Trọn gói là bao gồm những gì? 
Có bao gồm bảo hiểm thân thể du lịch 100 Tr/người chưa? Có bao gồm giá thuê bãi cát công cộng đóng cho Sở ban ngành chưa? Hay đến nơi nhân viên của bạn phải đứng đội nắng chờ Ban tổ chức đàm phán cự cãi với cơ quan chức năng? Sự rành mạch đến từ việc 100% bóc tách hóa đơn điện tử ngay từ khâu đầu.</p>

<h2>3. Vạch Trần Top 3 Sai Lầm Ngu Tối Khi Thầu Teambuilding Nước Rút</h2>
<ul>
    <li><strong>Tham Rẻ Mướn Sinh Viên Làm MC Quản Trò (Hoạt Náo Viên):</strong> Sinh viên làm MC thiếu cái "Uy" điều hướng một đám đông 500 mạng người. Âm điệu gào thét mất kiểm soát có thể khiến khách VIP tham dự đâm ra tức giận, phá vỡ liên kết đội nhóm.</li>
    <li><strong>Sử Dụng Drone (Flycam) Mà Không Đăng Ký Giấy Phép Cục Tác Chiến Không Quân:</strong> Đừng ảo mộng lấy những thước phim toàn cảnh nếu đơn vị bạn chưa xin phép giấy tờ bay tại khu quân sự Khánh Hòa, máy bay sẽ bị bắt sóng và tiêu hủy.</li>
    <li><strong>Không Định Vị Xe Cấp Cứu Sẵn Có:</strong> Đối với ngân sách quy mô trên 500 triệu, việc thiết lập trạm Y tế cứu thương có xe lưu động trực chiến ngoài mép bãi là bắt buộc. Phớt lờ việc này chỉ vì tiết kiệm 3 Triệu là một hành động dại dột.</li>
</ul>

<img src="${imgs[2]}" alt="Sai lầm chết người khi thuê quản trò teambuilding lỏng lẻo" />

<h2>4. Sự Kiện Toàn Quốc - Cỗ Xây Đắp Teambuilding Mạng Lưới Rộng Lớn Nhất Nha Trang</h2>
<p>Sau những giờ đắn đo sợ hãi ngân sách bị lãng phí vào "hố đen", hàng nghìn tập đoàn đã yên tâm cập bến và ký gửi niềm tin vào <strong>Sự Kiện Toàn Quốc</strong>. Tự vỗ ngực xưng danh là gã khổng lồ ôm trọn mạng lưới kết nối mạnh nhất dải biển Khánh Hòa, chúng tôi là <strong>${keyword}</strong> giải quyết mọi phấp phỏng từ sâu nhất trong tâm trí bạn.</p>

<p>Tại kho bãi của Sự Kiện Toàn Quốc, hàng chục tấn Phao Hơi, Game Tool Đồ Tác Chiến Liên Liên đoàn được phơi phóng vô khuẩn chờ doanh nghiệp bạn hạ lệnh. Quy tụ những MC Event Team Building dày dạn từ lò đào tạo Sân Khấu Điện Ảnh, mỗi màn hô khẩu hiệu đều đảm bảo xé toang không gian, gắn kết từng cá nhân lạnh lùng nhất thắt chặt vào vòng tay văn hóa doanh nghiệp tột đỉnh.</p>

<p>Ngay lúc này, quý đối tác đừng ngần ngại bấm ngay số Hotline vàng trên góc màn hình Website! Đội ngũ cố vấn cấp cao The Master của chúng tôi đang trực chờ 24/7 để trình chiếu ngay bản thiết kế Game Board 3D bãi biển độc nhất cho riêng công ty bạn. Hãy để chuyến đi lần này trở thành kỳ quan lớn nhất trong lịch sử công ty!</p>
`;

    // Add to front of queue => schedule now
    const pushTime = new Date(Date.now() - 5000).toISOString();

    const { data: existing } = await supabaseAdmin.from('posts').select('id').eq('slug', slug).single();

    if (existing) {
        await supabaseAdmin.from('posts').update({
            title: title,
            content: fullHtml,
            featured_image: imgs[3],
            scheduled_at: pushTime,
            is_published: false,
            meta_title: 'Sự Kiện Toàn Quốc - Teambuilding Nha Trang',
            meta_description: 'Tìm ngay ' + keyword + ' uy tín hàng đầu chống lại mọi báo giá ảo. Khám phá 4 quy trình xác thực đơn vị tổ chức teambuilding khắt khe nhất.',
        }).eq('id', existing.id);
        console.log('Teambuilding Post 1 Updated & Scheduled NOW');
    } else {
        await supabaseAdmin.from('posts').insert({
            title: title,
            slug: slug,
            category_id: 1, 
            content: fullHtml,
            excerpt: keyword + ' khắt khe giải quyết mọi sự cố thời tiết Bãi Dài...',
            featured_image: imgs[3],
            is_published: false,
            scheduled_at: pushTime,
            meta_title: 'Sự Kiện Toàn Quốc - Teambuilding Nha Trang',
            meta_description: 'Tìm ngay ' + keyword + ' uy tín hàng đầu chống lại mọi báo giá ảo. Khám phá 4 quy trình xác thực đơn vị tổ chức.'
        });
        console.log('Teambuilding Post 1 Inserted & Scheduled NOW');
    }

    process.exit(0);
})();
