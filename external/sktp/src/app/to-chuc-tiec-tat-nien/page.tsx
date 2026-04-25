import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '@/app/LandingPage.module.css';
import ContactForm from '@/components/ContactForm/ContactForm';
import FloatingContact from '@/components/FloatingContact/FloatingContact';

export const metadata: Metadata = {
    title: 'Dịch vụ tổ chức tiệc tất niên (Year End Party 2026)',
    description: 'Chuyên gia thiết kế kịch bản Tiệc Tất Niên (YEP) siêu lầy lội hoặc Concept tri ân sang trọng chuẩn dạ tiệc hoàng gia. Cung cấp MC, ca sĩ, ban nhạc và đạo diễn sân khấu trọn gói.',
    keywords: 'tổ chức tiệc tất niên, đơn vị tổ chức year end party, kịch bản tất niên doanh nghiệp, mc tiệc tất niên',
    openGraph: {
        title: 'Bùng Nổ Tiệc Cuối Năm Cùng EKIP Chuyên Nghiệp Hàng Đầu',
        description: 'Vượt xa hình thức ăn nhậu truyền thống, chúng tôi mang thảm đỏ vinh danh và ánh sáng sân khấu 3D bước vào đêm tiệc tri ân lịch sử của bạn.',
        images: ['https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80'],
    }
};

export default function TatNienPage() {
    return (
        <div className={styles.page}>
            <Header />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBgWrapper}>
                    <Image
                        src="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1920&q=90"
                        alt="Đêm Gala Tiệc Tất Niên Doanh Nghiệp"
                        fill
                        className={styles.heroBgImage}
                        priority
                    />
                    <div className={styles.heroGradient} />
                </div>
                
                <div className={styles.heroContent}>
                    <span className={styles.badge}>
                        NĂNG LỰC GALA DINNER (YEP 2026)
                    </span>
                    <h1 className={styles.title}>
                        Kiến tạo thước phim ký ức <br />
                        <span className={styles.gradientText}>
                            tiệc tất niên hoành tráng
                        </span>
                    </h1>
                    <p className={styles.description}>
                        Xóa bỏ định kiến về những bữa tiệc liên hoan chỉ có hát Karaoke ồn ào. Biến sảnh tiệc của bạn thành một nhà hát lộng lẫy để tôn vinh những giọt mồ hôi của 365 ngày cống hiến.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <article className={styles.mainContent}>
                <div className={styles.proseContainer}>
                    
                    <h2>Tại sao Tiệc Tất Niên lại quan trọng hơn cả Tiền Thưởng Tết?</h2>
                    <p>
                        Ngày nay, nhân sự không chỉ làm việc bằng lương hay đãi ngộ vật chất đơn thuần. Trong tầng cao nhất của tháp nhu cầu Maslow, sự "Được Tôn Vinh" chính là động lực sống còn giữ chân những chuyên gia đầu ngành tiếp tục gắn bó với bộ máy. Khảo sát của chúng tôi chỉ ra rằng, một đêm Year End Party được dồn toàn lực đầu tư Concept lộng lẫy có giá trị giữ chân và tăng cường lòng tự hào doanh nghiệp gấp 3 lần so với tháng lương thứ 13 khô khan vứt qua tài khoản ngân hàng.
                    </p>
                    <p>
                        Dưới ánh đèn Moving Head rực rỡ và những tràng pháo tay rền vang của hội trường ngàn người, cảm giác vị Giám Đốc đích thân trao gửi chiếc Cup vinh danh Kim Cương cho cá nhân xuất sắc. Đó là thứ quyền lực của tổ chức Sự kiện! Đó chính là cách bạn tẩy não đối thủ cạnh tranh có ý định săn mất nhân tài của mình.
                    </p>

                    <figure>
                        <Image 
                            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80" 
                            alt="Khung cảnh bắn pháo kim tuyến tại Tiệc tất niên"
                            width={1200}
                            height={675}
                        />
                        <figcaption>Khoảnh khắc vinh danh trên bục sân khấu là sự đền đáp thiêng liêng tuyệt đỉnh của nghề nhân sự.</figcaption>
                    </figure>

                    <h2>Tư duy phát triển các Concept Chủ đề (Theme) điên rồ nhất</h2>
                    <p>Chúng tôi không dùng lại những phông nền (Backdrop) lấy trên mạng điền thay tên doanh nghiệp bạn. Sự Kiện Toàn Quốc bóc tách văn hóa của tập đoàn bạn để thêu dệt nên một dải ngân hà chủ đề (Theme Concept) mà chỉ các Agency Master mới chắp bút ra được.</p>

                    <div className={styles.tableWrapper}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tên Chủ Đề (Concept)</th>
                                    <th>Chất liệu sân khấu & Hoạt động</th>
                                    <th>Tính cách Tập đoàn phù hợp</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.tableHighlight}>Đại mộng Gatsby (The Great Gatsby)</td>
                                    <td>Phủ kín hội trường bằng tông Đen/Vàng Gold xa xỉ của vùng thập niên 1920s Tầng lớp quý tộc Mỹ. Bắt buộc mặc Dresscode Đầm Dạ hội ánh kim và Vest Tuxedo. Thảm đỏ trải ngập lối đi.</td>
                                    <td>Ngân Hàng, Tài Chính, Tập đoàn Bất Động Sản siêu cấp. Các doanh nghiệp khối ngàn tỷ.</td>
                                </tr>
                                <tr>
                                    <td className={styles.tableHighlight}>Chuyến bay Không Gian (Cosmos)</td>
                                    <td>Thiết kế Cổng chào Checkin bằng đường hầm vô cực LED nhấp nháy như mô đun phi thuyền. Vé mời là Boarding Pass lên sao Hỏa. MC hóa trang Cơ trưởng. Ánh sáng Laser đan chéo ma trận.</td>
                                    <td>Khu công nghiệp Đa quốc gia, Doanh nghiệp Lập trình phầm mềm IT, Khối Kỹ Thuật Viễn thông.</td>
                                </tr>
                                <tr>
                                    <td className={styles.tableHighlight}>Chill-Out Áo Bà Ba (Hồn Việt)</td>
                                    <td>Decor các Gánh hàng rong tre nứa, bánh đúc mắm tôm dọc sảnh thay cho Canape kiểu Tây. Các sếp mặc đồ Lam / Bà Tây Nam Bộ nhảy Flashmob. Khuấy động dân dã tột đỉnh, phá vỡ khoảng cách.</td>
                                    <td>Nhà máy sản xuất dây chuyền 5000 Công nhân. Chuỗi siêu thị Mẹ và Bé. Doanh nghiệp vừa.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2>Sự khốc liệt ở khâu Vận Hành sân khấu</h2>
                    <p>Khán giả ngồi dưới nhâm nhi ly rượu vang sẽ không bao giờ nhìn thấy giọt mồ hôi của đội nhóm vận hành phía sau tấm áo bọc màn LED. Việc ráp nối (Timeline Rehearsal) giữa điệu múa mở màn của Vũ đoàn, khớp với nhịp gõ trống của ban nhạc sống và hiệu ứng pháo sáng bùng lên sau 0.5s từ hiệu lệnh chữ "DZÔ" của Ban Giám đốc... Tất cả là sự phối hợp của thần kinh thép và 100% thời gian thực đàm phán qua bộ đàm in-ear-monitor.</p>
                    <p>Sự Kiện Toàn Quốc độc quyền cung cấp những chiếc "Máy Phát Điện Cảm Xúc" xịn nhất thị trường, đó chính là Đội Ngũ MC Trứ Danh. Một vị quản trò tài ba là người có khả năng nâng đỡ Diễn giả khi sếp bị vấp chữ, đẩy cao trào cảm xúc vỡ òa khi xướng tên bốc thăm trúng thưởng, và thu vén nụ cười của 2000 công nhân nhậu đang bắt đầu mất kỷ luật khéo léo gom họ về vị trí cũ.</p>

                    <h2>Lời Cam Kết Của Hệ Hệ YEP Cấu Trúc Khép Kín</h2>
                    <p>Bạn không cần phải đi dò giá tìm người cho thuê loa riêng lẻ, rồi lại phải tốn tiền gọi đội múa lân ở quận khác, cũng không cần đau đầu đi nếm thử món ăn nhà hàng. Toàn bộ khâu hậu cần F&B cho đến việc cắt ghép làm Video Clip chiếu màn LED ngợi ca doanh nghiệp đầu tiệc, tất tần tật đều được gộp thành Một Cửa (One-Stop Agency) tại Sự Kiện Toàn Quốc.</p>
                    <p>Trút toàn bộ mọi gánh nặng lên vai chúng tôi. Bạn xứng đáng được mặc một bộ váy tuyệt trần tiến vào đại tiệc của chính tổ chức bạn đang điều hành. Hãy thưởng thức nó - vì đêm nay là đêm tuyệt diệu nhất của đế chế bạn đã gây dựng.</p>
                    
                </div>
            </article>

            {/* Contact Form */}
            <div id="contact">
                <ContactForm />
            </div>

            <Footer />
            <FloatingContact />
        </div>
    );
}
