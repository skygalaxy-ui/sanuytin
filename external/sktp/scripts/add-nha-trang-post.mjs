import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Category giả định
const EVENT_BIZ_CAT = "b47ed1f9-f685-415e-bc2d-61af81d2a69e";

const article = {
    title: "Công Ty Tổ Chức Sự Kiện Nha Trang Uy Tín: Báo Giá Trọn Gói Đầu Tư 2026",
    slug: "cong-ty-to-chuc-su-kien-nha-trang-uy-tin-2026",
    excerpt: "Công ty tổ chức sự kiện Nha Trang uy tín, cam kết báo giá trọn gói 3 mức ngân sách linh hoạt, không phát sinh chi phí ngầm, đầy đủ kịch bản thiết kế 3D 2026.",
    category_id: EVENT_BIZ_CAT,
    tags: ["tổ chức sự kiện nha trang", "báo giá sự kiện", "công ty tổ chức sự kiện", "gala dinner nha trang"],
    meta_title: "Công Ty Tổ Chức Sự Kiện Nha Trang Uy Tín: Báo Giá Trọn Gói 2026",
    meta_description: "Công ty tổ chức sự kiện Nha Trang chuyên nghiệp. Xem báo giá trọn gói thiết bị âm thanh, ánh sáng, màn hình LED, thiết kế sân khấu 3D chi tiết nhất.",
    featured_image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=100&w=1500&auto=format&fit=crop",
    is_published: true,
    published_at: new Date().toISOString(),
    content: `
<p>Bạn đang gánh trên vai áp lực "khổng lồ" từ sếp để giải quyết bài toán tìm kiếm một công ty tổ chức sự kiện Nha Trang chuyên nghiệp, không được phép xảy ra bất kỳ một sai sót nào dù là nhỏ nhất? Hoặc bạn là giám đốc doanh nghiệp mong muốn một đêm Gala Dinner bùng nổ, khẳng định vị thế nhưng lại lăn tăn vì ngân sách chưa thực sự thoải mái? Đừng để sự hoang mang, mất ngủ bào mòn năng lượng của bạn ngay trước thềm ngày trọng đại. Rất nhiều sự kiện tâm huyết đã biến thành "thảm họa" truyền thông chỉ vì tin nhầm những đơn vị làm ăn chắp vá. Bài viết dưới đây chính là chiếc "cứu sinh" dành trọn cho bạn!</p>

<p><img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=100&w=1500&auto=format&fit=crop" alt="công ty tổ chức sự kiện nha trang chuyên nghiệp" /></p>

<h2>Tại sao phải thuê ngoài / Nỗi đau đứt gãy không thể cứu vãn</h2>
<p>Việc tự tay tổ chức một sự kiện quy mô của doanh nghiệp không hề giống như chuẩn bị một buổi tiệc sinh nhật trong gia đình. Đó là một hệ thống dây chuyền phức tạp và là bài toán hóc búa của nghệ thuật quản trị rủi ro. Nếu quyết định "nhà làm" để tiết kiệm chi phí thay vì thuê công ty tổ chức sự kiện Nha Trang chuyên nghiệp, đây là 3 viễn cảnh chực chờ nuốt chửng công sức của tập thể:</p>
<p><strong>1. Đứt gãy kịch bản và sự cố thiết bị tàn phá không khí:</strong> Sự kiện đang bước vào phút giây cao trào đỉnh điểm thì hệ thống âm thanh bỗng rít lên chói tai. Màn hình LED tắt lụi đen thui. Khán giả và hàng trăm khách mời VIP ngơ ngác. Sự lúng túng tột độ lúc này không thể dùng tiền lấy lại uy tín.</p>
<p><strong>2. Vỡ trận ngân sách một cách lãng xẹt:</strong> Bạn cứ lầm tưởng tự đi thuê lẻ tẻ từng chiếc rạp, thợ lắp âm thanh sẽ rẻ hơn? Đây là cú lừa ngoạn mục. Các khoản chi phí phát sinh lặt vặt liên tục ập tới khiến ngân sách cuối cùng đội lên gấp đôi so với đi thuê trọn gói ban đầu.</p>
<p><strong>3. Bóc lột nhân sự, rời rạc mục tiêu:</strong> Nhân viên phòng kinh doanh, hành chính không sinh ra để khuân vác loa đài, rải cáp điện hay điều phối khách chạy chương trình. Ép họ làm việc trái ngành chỉ khiến họ kiệt quệ và bỏ lỡ mất mục tiêu quan trọng: Đi giao lưu và mở rộng tập đối tác.</p>

<h2>Trọn Bộ Kế Hoạch Đấm Chìm Rủi Ro Của Các Chuyên Gia</h2>
<p>Khi quyết định ký hợp đồng làm việc với công ty tổ chức sự kiện Nha Trang, bạn không chỉ đơn thuần là mua dịch vụ. Bạn thực sự đang chi tiền để mua "sự an tâm tuyệt đối".</p>
<p><strong>Bộ tiêu chuẩn khảo sát và thiết kế 3D trực quan:</strong> Tuyệt đối không có chuyện phác thảo sơ sài qua điện thoại. Mọi không gian, ý tưởng đều được bộ phận Creative mô phỏng bằng không gian 3D chi tiết tỉ lệ thực. Khách hàng sẽ nhìn thấy trước 100% hình thái sự kiện ngay từ trên giấy.</p>
<p><strong>Hoàn thiện và bàn giao nguyên mạng trước 24 tiếng:</strong> Toàn bộ quá trình set up khung rạp, chạy dây điện, thử tải âm thanh ánh sáng, tập rượt kịch bản (run code tổng duyệt) đều phải được chốt hạ và bàn giao hoàn thiện trước ít nhất 24 giờ diễn ra sự kiện chính thức.</p>
<p><img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=100&w=1500&auto=format&fit=crop" alt="Hệ thống âm thanh ánh sáng sự kiện ngoài trời nha trang" /></p>

<h2>Bảng Báo Giá 3 Tầng Ngân Sách Linh Hoạt</h2>
<p>"Không sợ bỏ ra tốn tiền, chỉ sợ tiền đổ vào không hiệu quả". Để dập tắt nỗi ám ảnh về việc bị "chặt chém", công ty tổ chức sự kiện Nha Trang đóng khung niêm yết 3 module ngân sách trọn gói:</p>
<p><strong>1. Gói Phổ Thông (Dành cho sự kiện vừa, 50-150 người):</strong> Sân khấu chuẩn, Backdrop căng phẳng in siêu nét, hệ thống âm lượng ánh sáng đủ bao phủ âm tròn vẹn. Biên tập chi tiết kịch bản, bao gồm MC. Chỉ khoảng mười mấy triệu đồng.</p>
<p><strong>2. Gói Nâng Tầm (Medium, 200-500 người):</strong> Màn hình LED P3 siêu nét. Lắp đặt hệ thống hiệu ứng khói lạnh, pháo điện, loa Line Array công suất khủng thách thức mọi không gian vịnh đảo Nha Trang. Tặng kèm Media quay phim chụp ảnh và Flycam.</p>
<p><strong>3. Gói Quyền Lực (VVIP):</strong> Giám đốc nghệ thuật triển khai sân khấu 3D Layer phức tạp cấu trúc bậc thang, công nghệ 3D Hologram, kết hợp Mapping chiếu sáng. Mời ca sĩ hạng A để biến đêm gala thành tâm điểm bùng nổ mạng xã hội.</p>

<h2>Tại sao chọn Sự Kiện Toàn Quốc?</h2>
<p>Điểm khác biệt sống còn của chúng tôi (USP) ưu việt ở năng lực: <strong>Làm chủ 100% hệ sinh thái trang thiết bị vật tư</strong>. Từ giàn giáo nhôm định hình khổng lồ, màn hình LED đến hệ thống Line Array... Tất cả đều nằm ngay tại đại bản doanh kho bãi của mình.</p>
<p>Tự tin vận hành với <strong>Lời Cam Kết 3 KHÔNG</strong>:</p>
<ul>
<li><strong>Không qua trung gian:</strong> Sản xuất, cung ứng dàn dựng nội bộ cắt đứt mọi khâu môi giới giúp giảm tối thiểu 30% ngân sách so với thị trường.</li>
<li><strong>Không phát sinh ma trận phụ phí:</strong> Báo giá chuẩn xác một lần. Tuyệt đối không tồn tại "bẫy" chi phí ngầm.</li>
<li><strong>Không dùng nhân sự thời vụ bạo phát:</strong> Kỹ thuật viên bàn mixer, đạo diễn âm thanh đều là chuyên gia hưởng biên chế, xử lý qua sóng bộ đàm khắc nghiệt.</li>
</ul>
<p><img src="https://images.unsplash.com/photo-1549451371-64aa98a6f660?q=100&w=1500&auto=format&fit=crop" alt="chọn sự kiện toàn quốc" /></p>

<p><strong>Tặng ngay bộ Demo bản vẽ Kịch bản 3D phác thảo trị giá 5.000.000 VNĐ cấp tốc chỉ sau 3 giờ trao đổi!</strong> Gọi ngay cho Hotline <strong>0988.XXX.XXX</strong> hoặc Telegram: <strong>@SuKienToanQuoc</strong>.</p>
`
};

async function run() {
    console.log("Đang tải dữ liệu lên database Admin...");
    const { data: newPost, error: insertErr } = await supabase.from('posts').insert(article).select('id');
    
    if (insertErr) {
        console.error("Lỗi:", insertErr);
        return;
    }
    console.log("Tuyệt vời! Bài viết đã được public trên Admin. Post ID:", newPost[0].id);
}

run();
