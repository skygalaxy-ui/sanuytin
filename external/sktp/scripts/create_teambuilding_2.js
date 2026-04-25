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
    // 1. Fetch Admin Images
    const { data: imgList } = await supabaseAdmin.storage.from('post-images').list();
    const validImages = imgList.filter(f => f.name !== '.emptyFolderPlaceholder');
    const localUrls = validImages.map(f => supabaseAdmin.storage.from('post-images').getPublicUrl(f.name).data.publicUrl);
    
    const imgs = [];
    for(let i=0; i<4; i++) {
        imgs.push(localUrls[Math.floor(Math.random()*localUrls.length)]);
    }

    const keyword = 'báo giá dịch vụ teambuilding bãi biển đà nẵng';
    const title = 'Bóc Trần Bảng Báo Giá Dịch Vụ Teambuilding Bãi Biển Đà Nẵng Lõm Cốt Lõi';
    const slug = 'bao-gia-dich-vu-teambuilding-bai-bien-da-nang';

    const fullHtml = `
<p>Khu vực biển Mỹ Khê và Sơn Trà của Đà Nẵng luôn là "Sân Vận Động" khép kín lý tưởng nhất cả nước cho mọi hoạt động vui chơi tập thể. Thế nhưng, cứ tới mùa cao điểm, phòng ban Nhân Sự (HR) và đội Mua hàng (Purchasing) lại ngụp lặn trong biển ma trận của hàng tá <strong>${keyword}</strong>. Một bảng dự toán rẻ rúng báo hiệu rủi ro chết người, còn một mức giá trên trời lại đẩy doanh nghiệp vào nguy cơ lãng phí thấu xương. Hãy lột sạch lớp vỏ bọc ảo mộng để đi vào bức tranh tài chính cốt lõi nhất!</p>

<h2>1. Tại Sao Báo Giá Teambuilding Tại Đà Nẵng Lại Thường Bị Thổi Phồng?</h2>
<p>Sự đặc thù của địa hình Đà Nẵng (với sự pha trộn của biển lớn và hệ thống cát sụt) bắt ép các hoạt động Team Building phải chịu lực hao mòn thiết bị rất cao. Khắp mặt đường Võ Nguyên Giáp, có tới 80% tay cò sự kiện và các Tour Guide tự xưng là công ty Event để đứng ra chào giá. Tuy nhiên, họ lại không có lấy một mét vuông nhà phao, không có một giàn khung Truss sân khấu nào dưới tay.</p>

<p>Mỗi khi vớ được bạn, hệ thống môi giới này lập tức đi "xẻ lẻ" hạng mục: Gọi bên A thuê loa kẹo kéo, gọi bên B thuê áo pitch đồng phục, gọi bên C thuê MC... Mỗi cầu nối bị "cắn" thêm khoảng 15-20% phí hoa hồng giấu kín. Hậu quả chung cuộc, doanh nghiệp nhận về một bảng <em>${keyword}</em> bị lấp liếm thuế GTGT, chất lượng rời rạc và vỡ trận ngay từ khi thổi còi bắt đầu.</p>
<img src="${imgs[0]}" alt="Báo giá ${keyword} minh bạch" />

<h2>2. Khung Bóc Tách Một Khối Ngân Sách Teambuilding Dân B2B Sát Đáy Tận Xưởng</h2>
<h3>A. Khối Thiết Bị Game Tool Cốt Lõi (30% Tổng Dòng Tiền)</h3>
<p>Bãi cát Mỹ Khê cực kỳ mịn, nên các trò chơi sử dụng dây kéo hay tháp ván gỗ đều cần neo trọng lực nặng. Hạng mục này nhà thầu phải chứng minh họ sở hữu Đồ Phao Hơi Siêu Trường (Leo núi phao, Phao lăn nước 2 mét...). Mức giá thuê khoán đồ Game lớn tận xưởng thường dao động từ vài chục đến hàng trăm triệu đối với đoàn 500 khách, nhưng nếu bị môi giới chèn ép, con số có thể x2 x3 chỉ sau một cú điện thoại.</p>

<h3>B. Khối Hệ Thống Âm Thanh & Điểm Lõm Kỹ Thuật Bãi Cát (25% Tổng Dòng Tiền)</h3>
<p>Một thảm họa vô hình là việc sử dụng hệ thống Loa kéo lưu động cho đoàn 200 nhân sự trên bãi biển. Tiếng sóng đánh gãy vụn hoàn toàn dải tần số âm thanh, khiến đội nhóm phía sau không nghe thấy MC hô khẩu lệnh. Một nhà thầu Tận Gốc tại Đà Nẵng sẽ báo thẳng vào bảng dự toán: Hệ thống loa Full 4 Sub đôi kèm 02 Monitor công suất lớn bảo vệ màng loa trước hơi muối biển. Khoản tiền đầu tư này là vách ngăn sống còn của khí thế chương trình.</p>
<img src="${imgs[1]}" alt="Hệ thống âm thanh ngoài bãi biển đà nẵng" />

<h3>C. Khối Nhân Sự Kịch Bản: MC The Master Tinh Nhuệ (20% Tổng Dòng Tiền)</h3>
<p>Khoản chi cho bộ não vận hành. Hãy nhớ lấy điều này: Bạn không trả tiền cho cái miệng nói to, bạn trả tiền cho khả năng Đọc Vị Hành Vi Đám Đông. MC Teambuilding lão luyện (The Master) biết chính xác khi nào đội ngũ đang tụt huyết áp vì nắng gắt, để tức tốc thay đổi trò chơi vận động thành Game trí tuệ tại chỗ. Việc booking nhân sự Cấp S từ lò đào tạo của Sài Gòn ra Đà Nẵng sẽ đẩy giá máy bay và ăn ở lên cao, trừ khi Agency đó tự bao nuôi dàn nhân lực chiến đấu tại chính Cẩm Lệ hay Hải Châu.</p>

<h3>D. Khối Logistics Dịch Vụ: Bảo Hiểm, Nước Yến, Bạt Che Nhôm (25% Tổng Dòng Tiền)</h3>
<p>Khuất lấp nhất trong mọi <strong>bảng báo giá teambuilding đà nẵng</strong> chính là phí cấp phép sử dụng bãi cát công cộng đóng cho ban quản lý bán đảo Sơn Trà. Những công ty ảo sẽ xóa luôn dòng thuế phí này để bản giá trông cho "Cực Rẻ". Đến khi công an du lịch thổi còi đình chỉ chơi, công ty của bạn mới ngã ngửa. Bên cạnh đó, các khoản ăn nhẹ xế chiều như Nước dừa, Trái cây và Lều bạt che nắng khu vực trạm y tế là những khoản bóc tách tuy lẻ nhưng bảo vệ tính mạng thành viên kịch liệt.</p>

<h2>3. Vén Màn 3 Mánh Lới Dẫn Dụ (Bẫy Rập) Trong Báo Giá Sự Kiện Biển Mùa Hè</h2>
<ul>
    <li><strong>Chiêu trò "Tặng Kèm Ảo":</strong> Agency hô hào tặng kèm Flycam và thợ quay phim. Đến ngày chơi, thợ bay lên chụp được 3 tấm hình méo mó rồi hạ cánh vì lý do "Sóng biển quá mạnh hư máy". Thực chất họ đang tận dụng những tay thợ nghiệp dư không có trình độ bay sự kiện thể thao để gài gắm bạn.</li>
    <li><strong>Sử dụng vật dụng y tế hết Date giả lập:</strong> Báo giá trên giấy có hộp y tế sơ cứu, nhưng khi gãy xương bong gân thì trong rương chỉ có... dăm ba miếng urgo (Băng keo cá nhân).</li>
    <li><strong>Phủi tay sau cơn bão:</strong> Hợp đồng chỉ cam kết Setup khi trời NẮNG. Nếu sáng sớm Mỹ Khê vỡ bão biển, họ sẽ ép doanh nghiệp bạn hoàn nguyên toàn bộ tiền do "Sự cố thiên tai bất khả kháng" trong điều khoản phụ lục ly ti, để mặc bạn chịu trận với nhân viên.</li>
</ul>

<img src="${imgs[2]}" alt="Lật tẩy các mánh báo giá teambuilding" />

<h2>4. Sự Kiện Toàn Quốc - Cú Vả Thẳng Thừng Vào Mọi Ma Trận Báo Giá Trên Trời</h2>
<p>Thời gian đàm phán mệt mỏi sẽ kết thúc ngay tại đây! <strong>Sự Kiện Toàn Quốc</strong> tự hào là khối hệ sinh thái tự sản xuất, tự vận hành và tự bảo hành khổng lồ tọa lạc xuyên trục Nam Trung Bộ. Khi bạn cầm trên tay <em>${keyword}</em> của Sự Kiện Toàn Quốc, bạn đang cầm trong tay bản đồ kho báu tận xưởng (Factory-Direct Booking) không lẫn một xu tiền cò mồi trung gian nào.</p>

<p>Tại sao chúng tôi làm được mức dự toán ngân sách cực đoan nhất, đè bẹp các Agency Sài Gòn? Vì chúng tôi có kho bãi hàng ngàn Truss nhôm, hàng trăm loại Game Board Siêu trường phục vụ 2000 khách cắm chốt cực gần bờ biển Mỹ Khê. Không mất 15 triệu tiền xe tải Bắc-Nam, không phải chi tiền hoa hồng cho MC tự do, tất cả nằm trọn vẹn trong "Đội Ngũ Tác Chiến Sẵn Có" của chúng tôi.</p>

<p>Bạn vẫn còn e ngại về tính rành mạch số liệu kế toán? Bấm số và gọi trực diện theo đường <strong>Hotline hiển thị Tốc Độ Cao tại Website này</strong>. Những chuyên gia Audit sự kiện khét tiếng nhất của Sự Kiện Toàn Quốc sẽ bóc tách và phân tích cho bạn một bảng chi phí Excel vạn dòng sắc nét miễn phí. Đã tới lúc tiêu tiền minh bạch, rực rỡ và đập nát mọi báo giá dỏm bủa vây!</p>
`;

    const pushTime = new Date(Date.now() - 5000).toISOString();

    const { data: existing } = await supabaseAdmin.from('posts').select('id').eq('slug', slug).single();

    if (existing) {
        await supabaseAdmin.from('posts').update({
            title: title,
            content: fullHtml,
            featured_image: imgs[3],
            scheduled_at: pushTime,
            is_published: false,
            meta_title: 'Sự Kiện Toàn Quốc - Báo Giá Teambuilding Đà Nẵng',
            meta_description: 'Toàn bộ sự thật đằng sau ' + keyword + '. Vạch trần 3 chiêu trò lấp liếm hóa đơn và nghệ thuật tối ưu ngân sách công ty.',
        }).eq('id', existing.id);
        console.log('Teambuilding Post 2 Updated & Scheduled NOW');
    } else {
        await supabaseAdmin.from('posts').insert({
            title: title,
            slug: slug,
            category_id: 1, 
            content: fullHtml,
            excerpt: 'Vạch mặt báo giá đắt đỏ, giải phẫu cách tiết kiệm chi phí bãi biển Mỹ Khê...',
            featured_image: imgs[3],
            is_published: false,
            scheduled_at: pushTime,
            meta_title: 'Sự Kiện Toàn Quốc - Báo Giá Teambuilding Đà Nẵng',
            meta_description: 'Toàn bộ sự thật đằng sau ' + keyword + '. Vạch trần 3 chiêu trò lấp liếm hóa đơn và nghệ thuật tối ưu ngân sách công ty.'
        });
        console.log('Teambuilding Post 2 Inserted & Scheduled NOW');
    }

    process.exit(0);
})();
