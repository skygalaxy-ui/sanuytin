const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Load environment variables manually
const envFile = fs.readFileSync('.env.local', 'utf8');
const envVars = envFile.split('\n').reduce((acc, line) => {
    const [key, ...values] = line.split('=');
    if (key && values.length > 0) acc[key.trim()] = values.join('=').trim();
    return acc;
}, {});

const supabaseAdmin = createClient(envVars['NEXT_PUBLIC_SUPABASE_URL'], envVars['SUPABASE_SERVICE_ROLE_KEY']);

(async () => {
    // 1. Get images from post-images
    const { data: imgList } = await supabaseAdmin.storage.from('post-images').list();
    const validImages = imgList.filter(f => f.name !== '.emptyFolderPlaceholder');
    const localUrls = validImages.map(f => supabaseAdmin.storage.from('post-images').getPublicUrl(f.name).data.publicUrl);
    
    // Pick 4 random local images
    const imgs = [];
    for(let i=0; i<4; i++) {
        imgs.push(localUrls[Math.floor(Math.random()*localUrls.length)]);
    }

    const keyword = 'công ty tổ chức sự kiện chuyên nghiệp';
    const title = 'Làm Thế Nào Để Chọn Đúng Công Ty Tổ Chức Sự Kiện Chuyên Nghiệp Không Lo Bị Ép Giá?';

    const fullHtml = `
<p>Hàng năm, hàng ngàn doanh nghiệp từ Bất động sản, IT, Ngân hàng đổ hàng chục tỷ đồng vào các chương trình hội nghị khách hàng, lễ khánh thành nhà máy hay chuỗi Year End Party. Thế nhưng, đằng sau sự lộng lẫy của ánh đèn ngàn Watts và sân khấu màn hình LED khổng lồ là một bài toán sinh tử: Làm thế nào để chọn đúng <strong>${keyword}</strong>? Bài đại biểu này cung cấp cho các Manager và nhân sự hành chính (HR) một góc nhìn trần trụi, đi thẳng vào các chỉ số quyết định sự sống còn của chiến dịch MICE, đồng thời phá vỡ mọi ma trận báo giá ảo của thị trường.</p>

<h2>1. Tại Sao Lựa Chọn Nhà Thầu Tổ Chức Sự Kiện Lại Là Cuộc Chiến Khốc Liệt?</h2>
<p>Một sự kiện B2B không đơn thuần chỉ là tụ tập ăn ở và vỗ tay. Một show diễn Gala Dinner hoặc hội nghị khách hàng quốc tế là thời điểm phô trương quyền lực, sự thịnh vượng và là đòn bẩy uy tín mạnh nhất của tập đoàn trước hàng ngàn đối tác. Khi bạn đặt niềm tin nhầm vào những đơn vị Agency "trống rỗng" - tức không có hệ thống xưởng thiết bị thực tế, không có kỹ sư sự kiện tại chỗ - bạn đang đẩy ngân sách Marketing vào hố tử thần.</p>

<p>Vì sao lại gọi là hố tử thần? Bởi vì một khi rạp sự kiện (truss) bị thổi sập vì gió mạnh trên bãi biển, hay âm thanh Line Array tắt vụt khi CEO đang báo cáo doanh thu, nhãn hiệu của bạn sẽ chính thức sụp đổ trong mắt truyền thông. Điều này đòi hỏi một <strong>${keyword}</strong> không những phải giỏi tư duy sáng tạo, mà còn phải là một "tay cơ bắp" thực thụ về Logistic vận hành.</p>
<img src="${imgs[0]}" alt="Tìm kiếm ${keyword}" />

<h2>2. Quy Trình 04 Bước Thẩm Định Năng Lực Của Một Công Ty Sự Kiện Chuyên Nghiệp</h2>
<h3>Bước 1: Soi Sáng Năng Lực Kho Bãi Và Nhà Xưởng</h3>
<p>Bạn đang mua một dịch vụ mang tính vô hình. Điều đầu tiên khi ký kết hợp đồng, hãy yêu cầu đối tác dẫn tới kho lưu trữ màn hình LED, kho âm thanh Vector, và nhà chứa kết cấu không gian. Một nhà cung ứng uy tín luôn tự hào trưng bày nhà xưởng hàng ngàn mét vuông cắt sắt, hàn truss và in bạt Hiflex ngay tại địa bàn (đặc biệt là vùng duyên hải miền Trung). Việc này loại bỏ ngay sự ăn chênh lệch hoa hồng từ những tay cò sự kiện tự do.</p>

<h3>Bước 2: Hệ Sinh Thái Concept Và Kịch Bản Phân Lớp</h3>
<p>Sự sáng tạo của một <em>${keyword}</em> chân chính thể hiện qua bản Proposal (đề xuất) 3D thiết kế riêng rẽ. Họ không mượn kịch bản cũ của công ty khác, họ thiết kế riêng Key Visual (Hình ảnh chủ đạo) bám sát theo nhận diện thương hiệu của CEO công ty bạn. Từng góc Checkin góc chụp hình 3D, từng luồng đi di chuyển của dàn lãnh đạo từ khi bước qua cửa đỏ đến khi nâng rượu champagne đều phải được phác thảo trên bản thiết kế mặt bằng (Layout).</p>
<img src="${imgs[1]}" alt="${keyword} có kho bãi chuyên nghiệp" />

<h3>Bước 3: Đọc Vị Bảng Báo Giá Minh Bạch Tận Gốc (Budgeting)</h3>
<p>Thiết lập chi phí là bài toán xương máu. Nếu một Agency gửi cho bạn dòng chữ "Gói sự kiện: 300 triệu", bạn hãy từ chối ngay lập tức! Báo giá bóc tách phải chi chít các hàng mô tả rõ ràng: Màn LED cong hay thẳng? Khẩu độ nhà bạt bao nhiêu mét vuông? Đèn sân khấu Beam 450W hay 380W? Loa rải âm trung bao nhiêu quả? Sự chuyên nghiệp đến từ sự dũng cảm bóc tách tận gốc và sát sạt chuẩn xác từng chiếc đinh ốc.</p>

<h3>Bước 4: Biện Pháp Quản Trị Rủi Ro Và Khủng Hoảng (Risk Management)</h3>
<p>Khi thiên tai và dông sét kéo tới sát giờ khai mạc, đơn vị đó có thiết lập kịp phương châm Backup (dự bị)? Họ có chuẩn bị bạt che khán đài hay dàn máy phát điện dự phòng khẩn cấp lỡ khu resort mất điện diện rộng hay không? Đó mới là giá trị vô giá giúp bảo toàn thương hiệu cho khách VIP.</p>

<h2>3. 5 Sai Lầm Nằm Lòng Khi Thuê Công Ty Sự Kiện Khiến Ngân Sách Vỡ Vụn</h2>
<ul>
    <li><strong>Sai lầm 1:</strong> Quan trọng hóa yếu tố giải trí nhảm nhí mà quên đi chất lượng cơ sở kỹ thuật vật chất. Thuê rạp rẻ tiền dễ dẫn tới lật úp mặt diễn đàn khi gió to.</li>
    <li><strong>Sai lầm 2:</strong> Thuê Agency Sài Gòn nhưng làm show ở Nha Trang/Phú Quốc, dẫn đến việc doanh nghiệp phải chịu mâm phí vận chuyển quá lớn đi qua đường quốc lộ Bắc Nam.</li>
    <li><strong>Sai lầm 3:</strong> Chọn gói Teambuilding rẻ mạt bao gồm thức ăn kém chất lượng, đe doạ an toàn ngộ độc vệ sinh thực phẩm đoàn lớn.</li>
    <li><strong>Sai lầm 4:</strong> Không xin cấp phép chính thức từ các Sở văn hoá thông tin du lịch và cục bản quyền khiến sự kiện bị công an đình chỉ ngay vào tối Gala khai mạc.</li>
    <li><strong>Sai lầm 5:</strong> Đưa tiền cọc quá cao (trên 80%) trước ngày setup (D-1) khiến nhà cung cấp hờ hững với cam kết đúng giờ bàn giao sân khấu.</li>
</ul>

<img src="${imgs[2]}" alt="Khảo sát ${keyword} an toàn" />

<h2>4. Sự Kiện Toàn Quốc - Cố Vấn Tối Thượng Cho Mọi Siêu Dự Án Doanh Nghiệp</h2>
<p>Bạn đã quá mỏi mệt khi phải phung phí mồ hôi tự tay đo lường và làm việc với hàng tá nhà cung cấp trung gian lẻ tẻ? Hãy giao trọng trách khép kín đầy rủi ro này cho <strong>Sự Kiện Toàn Quốc</strong>. Tự hào thừa hưởng kho báu hệ sinh thái nhà xưởng cơ khí, âm thanh ánh sáng khổng lồ cùng hệ thống nhân sự MC đạo diễn trải rộng từ Miền Nam đến vùng Vịnh Nam Trung Bộ, chúng tôi chính là <strong>${keyword}</strong> quyền lực tối thượng nhất mà bạn từng tìm kiếm.</p>
<p>Tại Sự Kiện Toàn Quốc, bạn sẽ không tìm thấy khái niệm "mua đi bán lại qua tay". Chúng tôi trực tiếp sản xuất, trực tiếp thi công lắp ráp hệ thống sân khấu, với Barem báo giá tiết kiệm thẳng chiết khấu tận 30% cho khách mảng B2B ngay trong quý này.</p>
<p>Bấm số <strong>Hotline phía dưới website</strong> ngay lập tức để đội ngũ Ban Giám Đốc Cấp Cao của Sự Kiện Toàn Quốc gửi thẳng cho bạn một bộ File Kịch Bản Hoành tráng nhất từ trước tới nay. Cống hiến bằng cả sinh mạng để đưa thương hiệu của bạn vươn mình rực sáng lên bầu trời - đó là kim chỉ nam tối thượng của chúng tôi!</p>
`;

    const slug = 'cong-ty-to-chuc-su-kien-chuyen-nghiep';
    // Let's set scheduled_at carefully so it's precisely NOW in the DB
    // Or actually literally 2 minutes ago so the query "lte('scheduled_at', currentTime)" catches it!
    const d = new Date(Date.now() - 5 * 60 * 1000); 
    const pushTime = d.toISOString();

    const { data: existing } = await supabaseAdmin.from('posts').select('id').eq('slug', slug).single();

    if (existing) {
        await supabaseAdmin.from('posts').update({
            title: title,
            content: fullHtml,
            featured_image: imgs[3],
            scheduled_at: pushTime,
            is_published: false,
            meta_title: 'Sự Kiện Toàn Quốc - ' + keyword,
            meta_description: 'Hiểu rõ các bước tìm kiếm ' + keyword + ' hoàn chỉnh nhất để không bao giờ bị báo giá khống. Khám phá kho bãi khổng lồ của chúng tôi!'
        }).eq('id', existing.id);
        console.log('Updated existing draft and scheduled it for exactly NOW (queued for immediate publish).');
    } else {
        await supabaseAdmin.from('posts').insert({
            title: title,
            slug: slug,
            category_id: 1, // Su kien
            content: fullHtml,
            excerpt: keyword + ' bảo chứng cho thành công doanh nghiệp B2B...',
            featured_image: imgs[3],
             // existing author
            is_published: false,
            scheduled_at: pushTime,
            meta_title: 'Sự Kiện Toàn Quốc - ' + keyword,
            meta_description: 'Hiểu rõ các bước tìm kiếm ' + keyword + ' hoàn chỉnh nhất để không bao giờ bị báo giá khống.'
        });
        console.log('Inserted fresh article and scheduled it for exactly NOW (queued for immediate publish).');
    }

    process.exit(0);
})();
