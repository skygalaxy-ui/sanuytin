
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K');

const content = `
<h2>Đánh giá sàn Pepperstone chi tiết 2026: Có thực sự uy tín như lời đồn?</h2>
<p>Trong thị trường Forex đầy biến động, việc tìm kiếm một sàn môi giới vừa nhanh, vừa rẻ, lại vừa an toàn là mục tiêu hàng đầu của mọi trader. Pepperstone, một cái tên đến từ Úc, từ lâu đã khẳng định vị thế của mình như một "ông lớn" trong phân khúc sàn ECN. Bài viết này sẽ đi sâu vào phân tích mọi góc cạnh của sàn Pepperstone trong năm 2026 này.</p>

<h3>1. Giới thiệu tổng quan về Pepperstone</h3>
<p>Được thành lập vào năm 2010 tại Melbourne, Úc, Pepperstone đã nhanh chóng vươn tầm thế giới. Không giống như nhiều sàn Market Maker (nhà tạo lập thị trường) khác, Pepperstone đi theo mô hình ECN/STP, nghĩa là họ đẩy lệnh trực tiếp của khách hàng đến các nhà cung cấp thanh khoản. Điều này đảm bảo tính minh bạch và loại bỏ hoàn toàn xung đột lợi ích giữa sàn và trader.</p>
<ul>
    <li><strong>Điểm cộng:</strong> Khớp lệnh cực nhanh, spread siêu thấp, hỗ trợ đa nền tảng.</li>
    <li><strong>Điểm trừ:</strong> Không có nhiều chương trình khuyến mãi (bonus) vì là sàn chuẩn ECN.</li>
</ul>

<h3>2. Chứng chỉ và Giấy phép hoạt động - Yếu tố then chốt</h3>
<p>Độ uy tín của một sàn Forex tỷ lệ thuận với giấy phép mà họ sở hữu. Với Pepperstone, bạn có thể hoàn toàn yên tâm bởi sàn được quản lý bởi những cơ quan tài chính khắt khe nhất:</p>
<ul>
    <li><strong>ASIC (Úc):</strong> Giấy phép nền tảng đảm bảo sàn hoạt động chuyên nghiệp.</li>
    <li><strong>FCA (Vương quốc Anh):</strong> Một trong những chứng chỉ quyền lực nhất, bảo vệ quyền lợi nhà đầu tư lên đến 85,000 GBP trong trường hợp sàn mất khả năng thanh toán.</li>
    <li>Ngoài ra còn có CySEC (Síp), BaFin (Đức), SCB (Bahamas) để phục vụ khách hàng toàn cầu.</li>
</ul>

<h3>3. Các loại tài khoản giao dịch tại Pepperstone</h3>
<p>Pepperstone cung cấp hai loại tài khoản chính, tối ưu cho từng nhu cầu khác nhau:</p>
<ul>
    <li><strong>Tài khoản Standard:</strong> Phù hợp cho người mới bắt đầu. Phí spread đã được cộng vào giá, miễn phí hoa hồng (0 commission).</li>
    <li><strong>Tài khoản Razor:</strong> Lựa chọn số 1 cho các Scalper. Spread bắt đầu từ 0.0 pip, hoa hồng cực thấp chỉ từ $7/lot.</li>
</ul>
<p>Hãy xem thêm các <a href="https://sanuytin.net/pepperstone/">đánh giá về Pepperstone</a> để thấy sự khác biệt về chi phí so với các sàn khác.</p>

<h3>4. Nền tảng giao dịch và Công cụ hỗ trợ</h3>
<p>Pepperstone hỗ trợ đầy đủ bộ ba nền tảng: MetaTrader 4, MetaTrader 5 và đặc biệt là <strong>cTrader</strong>. Với cTrader, bạn sẽ thấy độ sâu thị trường và tốc độ xử lý lệnh vượt trội, rất phù hợp cho những ai ưa thích công nghệ hiện đại.</p>

<h3>5. Chi phí giao dịch: Spread, Commission và Swap</h3>
<p>Về chi phí, Pepperstone gần như không có đối thủ ở tài khoản Razor. Cặp EUR/USD thường xuyên có spread trung bình quanh mức 0.0 - 0.2 pip. Phí Swap (qua đêm) cũng được sàn tối ưu khá tốt cho các trader giữ lệnh dài hạn.</p>

<h3>6. Nạp và Rút tiền nhanh chóng</h3>
<p>Tại Việt Nam, Pepperstone hỗ trợ nạp rút qua Internet Banking rất thuận tiện. Tiền nạp vào tài khoản gần như ngay lập tức, và lệnh rút thường được xử lý trong ngày, giúp trader chủ động hoàn toàn về vốn.</p>

<h3>7. Kết luận</h3>
<p>Pepperstone là sự lựa chọn hoàn hảo cho những ai đang tìm kiếm sự minh bạch, tốc độ và chi phí thấp. Đây không phải là nơi dành cho những người săn tìm bonus rẻ tiền, mà là nơi dành cho những trader chuyên nghiệp cày pips thực thụ.</p>
`;

const postData = {
    title: 'Đánh giá sàn Pepperstone chi tiết 2026: Có thực sự uy tín như lời đồn?',
    slug: 'danh-gia-san-pepperstone-2026',
    excerpt: 'Tìm hiểu chi tiết về sàn Pepperstone năm 2026: Giấy phép ASIC/FCA, phí spread tài khoản Razor, nền tảng cTrader và tốc độ nạp rút tiền tại Việt Nam.',
    content: content,
    category: 'kien-thuc',
    is_published: false,
    scheduled_at: '2026-02-26T08:30:00+07:00',
    meta_title: 'Đánh giá sàn Pepperstone chi tiết 2026 | Sàn Uy Tín',
    meta_description: 'Pepperstone có lừa đảo không? Đánh giá chi tiết giấy phép, phí giao dịch và nạp rút sàn Pepperstone mới nhất 2026 dành cho trader Việt.'
};

async function create() {
    console.log('Đang gửi dữ liệu lên Supabase...');
    const { data, error } = await supabase.from('posts').insert([postData]).select();

    if (error) {
        console.error('Lỗi insert:', error);
    } else {
        console.log('Thành công! Bài viết đã được lên lịch.');
        console.log('ID bài viết:', data[0].id);
    }
}

create();
