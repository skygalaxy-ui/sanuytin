import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = "https://ecipdcojedkbrlggaqja.supabase.co";
const supabaseKey = "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K";

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const posts = [
    {
        title: "Hướng Dẫn Cách Mở Tài Khoản Forex & Xác Minh (KYC) Thành Công 100%",
        slug: "huong-dan-mo-tai-khoan-forex",
        category: "huong-dan",
        excerpt: "Bước chân vào thị trường Forex bắt đầu từ một tài khoản an toàn. Hướng dẫn chi tiết cách chuẩn bị giấy tờ và xác minh danh tính thành công ngay lần đầu.",
        meta_title: "Cách Mở Tài Khoản Forex & KYC Thành Công [Cập Nhật 2026]",
        meta_description: "Bạn chưa biết cách mở tài khoản Forex? Xem ngay hướng dẫn chi tiết cách đăng ký, chuẩn bị CCCD/Sao kê và xác minh KYC thành công 100% cho người mới.",
        tags: ["mở tài khoản forex", "KYC", "xác minh danh tính", "hướng dẫn forex"],
        is_published: true,
        published_at: new Date().toISOString(),
        content: `
            <p>Việc mở tài khoản Forex hiện nay đã trở nên cực kỳ đơn giản nhờ công nghệ định danh trực tuyến. Tuy nhiên, để tài khoản được bảo mật và nạp rút tiền thông suốt, bạn cần thực hiện đúng các bước ngay từ đầu.</p>
            
            <h2>Bước 1: Chuẩn bị giấy tờ cần thiết</h2>
            <p>Trước khi nhấn nút Đăng ký, hãy chắc chắn bạn đã có bản chụp rõ nét của các loại giấy tờ sau:</p>
            <ul>
                <li><strong>Giấy tờ tùy thân:</strong> CCCD (Căn cước công dân), Chứng minh thư hoặc Hộ chiếu còn hạn.</li>
                <li><strong>Bằng chứng địa chỉ:</strong> Sao kê ngân hàng, hóa đơn điện/nước/internet đứng tên bạn trong 3-6 tháng gần nhất. (Lưu ý: CCCD gắn chip hiện nay đã có thể dùng làm bằng chứng địa chỉ ở một số sàn như Exness).</li>
            </ul>

            <h2>Bước 2: Quy trình đăng ký tài khoản</h2>
            <p>Hầu hết các sàn uy tín như Exness, XM hay XTB đều có quy trình chung:</p>
            <ol>
                <li>Truy cập trang chủ sàn và chọn "Đăng ký".</li>
                <li>Điền Email và mật khẩu (Nên dùng mật khẩu mạnh có ký tự đặc biệt).</li>
                <li>Xác thực Email thông qua mã code được gửi về hộp thư.</li>
            </ol>

            <h2>Bước 3: Xác minh danh tính (KYC) - Quan trọng nhất</h2>
            <p>KYC (Know Your Customer) là bước bắt buộc để phòng chống rửa tiền. Bạn hãy tải ảnh giấy tờ đã chuẩn bị lên hệ thống. Ảnh cần đảm bảo:</p>
            <ul>
                <li>Đủ 4 góc, không bị mất cạnh.</li>
                <li>Không bị lóa đèn flash, chữ rõ ràng.</li>
                <li>Bản gốc, không dùng bản scan hay photocopy.</li>
            </ul>

            <h2>Câu Hỏi Thường Gặp</h2>
            <h3>Xác minh tài khoản mất bao lâu?</h3>
            <p>Tại các sàn lớn, hệ thống AI sẽ duyệt tự động trong khoảng 5-15 phút. Trường hợp cần nhân viên duyệt thủ công có thể mất đến 24h.</p>
            <h3>Tại sao tài khoản của tôi bị từ chối xác minh?</h3>
            <p>Lý do phổ biến nhất là thông tin địa chỉ trên sao kê không khớp với thông tin bạn khai báo, hoặc ảnh chụp giấy tờ bị mờ.</p>
        `
    },
    {
        title: "Cách Quản Lý Vốn Forex Hiệu Quả: Quy Tắc 2% Để Không Cháy Tài Khoản",
        slug: "cach-quan-ly-von-forex-hieu-qua",
        category: "kien-thuc-forex",
        excerpt: "90% trader thua lỗ vì thiếu quản lý vốn. Hãy học cách sử dụng quy tắc 2% và Risk:Reward để tồn tại và kiếm lời bền vững trên thị trường.",
        meta_title: "Bí Kíp Quản Lý Vốn Forex Hiệu Quả - Chống Cháy Tài Khoản",
        meta_description: "Tìm hiểu các quy tắc vàng trong quản lý vốn Forex: Quy tắc 2%, tỷ lệ Risk:Reward và cách tính khối lượng lệnh chuẩn xác giúp bạn giao dịch an toàn.",
        tags: ["quản lý vốn", "thủ thuật trading", "risk management", "quản trị rủi ro"],
        is_published: true,
        published_at: new Date().toISOString(),
        content: `
            <p>Trong trading, quản lý vốn (Risk Management) quan trọng hơn cả phương pháp tìm điểm vào lệnh. Nếu bạn có phương pháp thắng 70% nhưng mỗi lệnh thua bạn mất 50% tài khoản, bạn vẫn sẽ sớm về số 0.</p>
            
            <h2>1. Quy tắc 2% - Giới hạn rủi ro tối đa</h2>
            <p>Quy tắc này rất đơn giản: Không bao giờ chấp nhận mất quá 2% số dư tài khoản cho một lệnh giao dịch duy nhất.</p>
            <p>Ví dụ: Tài khoản bạn có 1,000$, số tiền tối đa bạn được phép mất khi dính Stop Loss là 20$.</p>

            <h2>2. Tỷ lệ Risk : Reward (R:R) tối thiểu 1:2</h2>
            <p>Trước khi vào lệnh, hãy đảm bảo số tiền bạn kỳ vọng thắng được phải gấp ít nhất 2 lần số tiền bạn chấp nhận mất.</p>
            <ul>
                <li><strong>Thắng:</strong> Thu về 40$ (Reward)</li>
                <li><strong>Thua:</strong> Mất 20$ (Risk)</li>
            </ul>
            <p>Với tỷ lệ 1:2, bạn chỉ cần thắng 4 trên 10 lệnh là đã có lợi nhuận tổng kết.</p>

            <h2>3. Cách tính khối lượng lệnh (Position Sizing)</h2>
            <p>Đừng bao giờ vào lệnh một cách ngẫu hứng (ví dụ luôn đánh 0.1 lot). Bạn phải tính toán theo công thức:</p>
            <p><strong>Khối lượng (Lot) = Số tiền rủi ro / (Khoảng cách Stoploss tính bằng pip x giá trị 1 pip)</strong></p>

            <h2>Câu Hỏi Thường Gặp</h2>
            <h3>Tại sao tôi tuân thủ quản lý vốn mà vẫn thua?</h3>
            <p>Quản lý vốn giúp bạn không cháy tài khoản, nhưng lợi nhuận vẫn phụ thuộc vào phương pháp giao dịch có xác suất thắng dương (Positive Expectancy).</p>
            <h3>Có nên gồng lỗ để không vi phạm quy tắc 2%?</h3>
            <p>Tuyệt đối KHÔNG. Gồng lỗ là sai lầm chết người. Hãy đặt Stop Loss ngay khi vào lệnh và chấp nhận cuộc chơi nếu sai.</p>
        `
    },
    {
        title: "So Sánh Sàn Exness và XTB: Đâu Là Lựa Chọn Tốt Nhất Cho Bạn?",
        slug: "so-sanh-exness-va-xtb",
        category: "so-sanh",
        excerpt: "Exness và XTB là hai 'ông lớn' tại thị trường Việt Nam. Bài viết so sánh chi tiết về spread, tốc độ rút tiền và nền tảng giao dịch để bạn đưa ra lựa chọn đúng đắn.",
        meta_title: "So Sáng Exness vs XTB - Sàn Nào Uy Tín & Phí Rẻ Hơn?",
        meta_description: "Phân tích đối đầu Exness và XTB. So sánh chi tiết Spread, nạp rút và nền tảng. Exness mạnh về nạp rút, XTB mạnh về cổ phiếu và tính pháp lý.",
        tags: ["so sánh sàn", "exness", "xtb", "đánh giá sàn"],
        is_published: true,
        published_at: new Date().toISOString(),
        content: `
            <p>Rất nhiều trader Việt vân phân giữa Exness và XTB. Một bên là vua nạp rút, một bên là sàn niêm yết trên sàn chứng khoán với pháp lý cực kỳ vững chắc. Hãy cùng soi kỹ các tiêu chí sau.</p>
            
            <h2>1. Pháp lý và Độ tin cậy</h2>
            <ul>
                <li><strong>XTB:</strong> Niêm yết trên sàn chứng khoán Warsaw, có giấy phép FCA (Anh), KNF (Ba Lan). Pháp lý thuộc hàng Top 1 thế giới.</li>
                <li><strong>Exness:</strong> Sở hữu giấy phép FCA (Anh) và CySEC. Độ tin cậy rất cao với khối lượng giao dịch hàng tháng lên tới 3,000 tỷ USD.</li>
            </ul>

            <h2>2. Spread và Phí giao dịch</h2>
            <p>Về cơ bản, cả hai đều có phí rất rẻ. Tuy nhiên:</p>
            <ul>
                <li><strong>Exness:</strong> Thắng thế ở các tài khoản Raw Spread và Zero với mức Spread Vàng cực thấp (gần như bằng 0).</li>
                <li><strong>XTB:</strong> Không thu phí hoa hồng (commission) ở tài khoản Standard, giúp tính toán lợi nhuận đơn giản hơn.</li>
            </ul>

            <h2>3. Tốc độ Nạp và Rút tiền</h2>
            <p>Đây là điểm tạo nên thương hiệu của Exness:</p>
            <ul>
                <li><strong>Exness:</strong> Rút tiền nhanh trong vòng 3-5 phút (kể cả thứ 7 và Chủ Nhật).</li>
                <li><strong>XTB:</strong> Rút tiền thường mất vài giờ đến 24h trong ngày làm việc.</li>
            </ul>

            <h2>Câu Hỏi Thường Gặp</h2>
            <h3>Sàn nào tốt hơn để giao dịch Vàng?</h3>
            <p>Exness thường được ưa chuộng hơn cho Vàng nhờ mức spread thấp và hỗ trợ đòn bẩy vô cực (Infinite Leverage) dù điều này khá rủi ro.</p>
            <h3>Người mới nên chọn Exness hay XTB?</h3>
            <p>Nếu bạn thích sự đơn giản và nạp rút nhanh, hãy chọn Exness. Nếu bạn muốn đầu tư dài hạn cả Cổ phiếu thật và Forex với pháp lý chuẩn mực, XTB là lựa chọn tốt hơn.</p>
        `
    },
    {
        title: "Hướng Dẫn Nạp Rút Tiền Sàn Exness: Nhanh Chóng & Không Mất Phí",
        slug: "huong-dan-nap-rut-tien-exness",
        category: "huong-dan",
        excerpt: "Exness nổi tiếng với khả năng rút tiền tức thì. Xem ngay hướng dẫn nạp rút qua Internet Banking, VietQR và các lưu ý để tiền về tài khoản trong 5 phút.",
        meta_title: "Cách Nạp Rút Tiền Exness Qua Internet Banking - VietQR",
        meta_description: "Hướng dẫn chi tiết cách nạp rút tiền sàn Exness từ ngân hàng Việt Nam. Mẹo rút tiền nhanh trong 3 phút và giải quyết các lỗi nạp rút thường gặp.",
        tags: ["nạp rút tiền", "exness", "thanh toán", "hướng dẫn"],
        is_published: true,
        published_at: new Date().toISOString(),
        content: `
            <p>Một trong những lý do khiến Exness trở thành sàn Forex phổ biến nhất Việt Nam chính là hệ thống nạp rút tự động cực nhanh. Dưới đây là hướng dẫn chi tiết dành cho bạn.</p>
            
            <h2>1. Các phương thức nạp tiền phổ biến</h2>
            <p>Exness hỗ trợ đa dạng phương thức cho người Việt:</p>
            <ul>
                <li><strong>Internet Banking:</strong> Chuyển tiền qua các ngân hàng lớn (Vietcombank, Techcombank...).</li>
                <li><strong>VietQR:</strong> Quét mã chuyển tiền nhanh 24/7.</li>
                <li><strong>USDT (Tether):</strong> Phù hợp cho trader muốn bảo mật hoặc giao dịch vốn lớn.</li>
            </ul>

            <h2>2. Quy trình Rút tiền trong 5 phút</h2>
            <p>Để rút tiền thành công, bạn cần tuân thủ nguyên tắc: <strong>Nạp bằng đường nào, rút bằng đường đó.</strong></p>
            <ol>
                <li>Vào mục "Rút tiền" trong khu vực cá nhân.</li>
                <li>Chọn phương thức bạn đã dùng để nạp tiền.</li>
                <li>Nhập số tiền và xác nhận qua mã SMS gửi về điện thoại.</li>
                <li>Tiền thường sẽ về tài khoản ngân hàng sau 3-5 phút.</li>
            </ol>

            <h2>3. Lưu ý quan trọng để tránh bị treo lệnh</h2>
            <ul>
                <li>Tên tài khoản ngân hàng phải trùng 100% với tên đăng ký tại Exness.</li>
                <li>Hạn chế rút tiền lúc ngân hàng bảo trì hệ thống (thường vào đêm muộn hoặc rạng sáng).</li>
            </ul>

            <h2>Câu Hỏi Thường Gặp</h2>
            <h3>Nạp rút tại Exness có mất phí không?</h3>
            <p>Exness hoàn toàn miễn phí nạp rút. Tuy nhiên, ngân hàng của bạn có thể thu phí chuyển khoản nội địa nhỏ (thường là miễn phí hiện nay).</p>
            <h3>Tại sao lệnh rút tiền của tôi đang ở trạng thái 'Đang xử lý'?</h3>
            <p>Đừng lo lắng, thông thường lệnh sẽ hoàn tất sau vài phút. Nếu quá 24h chưa thấy tiền về, hãy nhắn ngay cho bộ phận Chat trực tuyến 24/7 của Exness để được hỗ trợ.</p>
        `
    }
];

async function seedPosts() {
    console.log('Starting to seed SEO articles...');

    for (const post of posts) {
        // Check if slug exists
        const { data: existing } = await supabase
            .from('posts')
            .select('id')
            .eq('slug', post.slug)
            .single();

        if (existing) {
            console.log(`Skipping existing post: ${post.title}`);
            continue;
        }

        const { data, error } = await supabase
            .from('posts')
            .insert([post]);

        if (error) {
            console.error(`Error inserting ${post.title}:`, error);
        } else {
            console.log(`Successfully added: ${post.title}`);
        }
    }

    console.log('Seeding completed!');
}

seedPosts();
