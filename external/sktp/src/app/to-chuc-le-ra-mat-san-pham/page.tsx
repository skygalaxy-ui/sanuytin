import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '@/app/LandingPage.module.css';
import ContactForm from '@/components/ContactForm/ContactForm';
import FloatingContact from '@/components/FloatingContact/FloatingContact';

export const metadata: Metadata = {
    title: 'Tổ Chức Lễ Ra Mắt Sản Phẩm Chuyên Nghiệp Khẳng Định Vị Thế (2026)',
    description: 'Dịch vụ tổ chức lễ ra mắt sản phẩm (Product Launch Event) toàn quốc. Trọn gói lên concept, kịch bản sáng tạo, thi công sân khấu hoành tráng. Chi phí tối ưu, hiệu quả truyền thông cực đại.',
    keywords: 'tổ chức lễ ra mắt sản phẩm, product launch event, khánh thành sản phẩm mới, ra mắt thương hiệu',
    openGraph: {
        title: 'Tổ Chức Lễ Ra Mắt Sản Phẩm Đỉnh Cao Cảm Xúc',
        description: 'Tạo tiếng vang truyền thông ngay trong ngày đầu ra mắt sản phẩm mới của bạn. Sự Kiện Toàn Quốc chuyên Setup trọn gói với công nghệ Hologram, 3D Mapping.',
        images: ['https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80'],
    }
};

export default function ProductLaunchPage() {
    return (
        <div className={styles.page}>
            <Header />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBgWrapper}>
                    <Image
                        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=90"
                        alt="Background Tổ chức lễ ra mắt sản phẩm"
                        fill
                        className={styles.heroBgImage}
                        priority
                    />
                    <div className={styles.heroGradient} />
                </div>
                
                <div className={styles.heroContent}>
                    <span className={styles.badge}>
                        GIẢI PHÁP SỰ KIỆN TRỌN GÓI 2026
                    </span>
                    <h1 className={styles.title}>
                        Tổ Chức Lễ Ra Mắt Sản Phẩm <br />
                        <span className={styles.gradientText}>
                            Tạo Tiếng Vang Chấn Động
                        </span>
                    </h1>
                    <p className={styles.description}>
                        Một sản phẩm vĩ đại không thể ra mắt một cách âm thầm. Chúng tôi giúp thương hiệu của bạn chiếm lĩnh mọi mặt báo chỉ sau 1 đêm bằng kịch bản ra mắt bùng nổ cảm xúc.
                    </p>
                    <Link href="#contact" className={styles.ctaBtn}>
                        NHẬN KỊCH BẢN MIỄN PHÍ NGAY
                    </Link>
                </div>
            </section>

            {/* Main Content - SEO 1200 Words */}
            <article className={styles.mainContent}>
                <div className={styles.proseContainer}>
                    
                    <h2>Tại sao Lễ ra mắt sản phẩm (Product Launch) lại mang tính sống còn?</h2>
                    <p>
                        Trong kỷ nguyên kỹ thuật số, vòng đời chú ý của người tiêu dùng chỉ vỏn vẹn trong vài giây. Một sản phẩm dù sở hữu công nghệ đột phá đến đâu, nhưng nếu màn dạo đầu (Lễ ra mắt) mờ nhạt, nó sẽ nhanh chóng bị đối thủ đè bẹp. Lễ ra mắt sản phẩm không đơn thuần là buổi tiệc giới thiệu tính năng, mà là <strong>một chiến dịch "Show-off" (Phô diễn sức mạnh)</strong> khẳng định vị thế thương hiệu trên thị trường.
                    </p>
                    <p>
                        Mục tiêu cốt lõi của việc tổ chức sự kiện Product Launch bao gồm:
                    </p>
                    <ul>
                        <li>Tạo hiệu ứng truyền thông (Viral Marketing) tức thì đa nền tảng.</li>
                        <li>Thu hút và thuyết phục các quỹ đầu tư, đối tác phân phối chiến lược ngay tại bàn tiệc.</li>
                        <li>Educate (Giáo dục) người dùng về tính năng ưu việt của sản phẩm thông qua trải nghiệm đa giác quan (Thính giác, Thị giác, Xúc giác).</li>
                    </ul>

                    <figure>
                        <Image 
                            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80" 
                            alt="Khách mời tham dự lễ ra mắt sản phẩm công nghệ ấn tượng"
                            width={1200}
                            height={675}
                           
                        />
                        <figcaption>Một concept không gian trải nghiệm sản phẩm chìm đắm (Immersive) thu hút sự chú ý của giới truyền thông.</figcaption>
                    </figure>

                    <h2>4 Concept tổ chức Lễ ra mắt sản phẩm "Hái ra tiền" năm 2026</h2>
                    <p>Với cương vị là tổng đạo diễn của hàng trăm sự kiện lớn nhỏ, <strong>Sự Kiện Toàn Quốc</strong> nhận định rằng một rạp bạt thông thường và diễn văn tẻ nhạt đã lỗi thời. Dưới đây là 4 Concept đang dẫn đầu xu hướng thế giới mà doanh nghiệp nên áp dụng:</p>
                    
                    <h3>Concept "Hành trình viễn tưởng" (Futuristic & Sci-Fi)</h3>
                    <p>Phù hợp tuyệt đối với các sản phẩm Công nghệ (Điện thoại, Phần mềm SaaS, Xe điện). Sử dụng tông màu Xanh Navy, Đen, Neon. Điểm nhấn là công nghệ <strong>3D Mapping</strong> chiếu thẳng lên mô hình sản phẩm khổng lồ kết hợp màn hình <strong>Hologram</strong> lơ lửng sảnh đón khách.</p>
                    
                    <h3>Concept "Thượng lưu thanh lịch" (Elegant & Minimalist)</h3>
                    <p>Sinh ra dành cho sản phẩm Dược Mỹ phẩm, Thời trang, Trang sức cao cấp. Lựa chọn các khách sạn 5 sao, màu chủ đạo là Trắng, Vàng Gold, Be. Khác biệt hóa bằng dàn giao hưởng kèn kềnh (Orchestra) chơi trực tiếp thay vì nhạc bật sẵn.</p>
                    
                    <h3>Concept "Kết nối tự nhiên" (Eco-Friendly & Nature)</h3>
                    <p>Dành riêng cho các dự án Bất động sản nghỉ dưỡng, Nông sản sạch hoặc Thực phẩm hữu cơ. Sự kiện tổ chức ngoài trời (Outdoor) vào buổi chiều hoàng hôn. Không gian ngập tràn hoa tươi, cây cỏ thật và sử dụng 100% vật liệu tái chế để tôn vinh thông điệp bền vững.</p>

                    <h3>Concept "Kịch bản bí ẩn" (The Unveiling Mystery)</h3>
                    <p>Sản phẩm bị giấu kín trong một hộp đen (Blackbox) khổng lồ giữa hội trường. Toàn bộ kịch bản nửa đầu chương trình là các tiết mục múa tương tác ánh sáng, múa bóng kể về "Nỗi đau" của khách hàng. Và khi cao trào nổi lên, chiếc hộp vỡ tung, Sản phẩm chính thức xuất hiện dưới cơn mưa dải lụa và pháo sáng.</p>


                    <h2>Quy trình 6 bước tổ chức chặt chẽ từ Sự Kiện Toàn Quốc</h2>
                    <p>Để đảm bảo khoảnh khắc ra mắt diễn ra không một vết xước (0% Rủi ro), chúng tôi tuân thủ hệ thống vận hành sự kiện chuẩn xác đến từng phút:</p>
                    
                    <ul>
                        <li><strong>Bước 1: Giải mã sản phẩm.</strong> Đội ngũ sáng tạo (Creative) sẽ mổ xẻ USP (Điểm bán hàng độc nhất) của sản phẩm để phác thảo "Linh hồn" cho sự kiện.</li>
                        <li><strong>Bước 2: Sáng tạo Theme & Key Visual.</strong> Thiết kế bộ nhận diện riêng biệt từ Thiệp mời e-Ticket, Backdrop, Trailer đếm ngược.</li>
                        <li><strong>Bước 3: Tiền trạm & Chọn địa điểm.</strong> Tìm kiếm không gian đáp ứng được sức vóc của sản phẩm (Trần cao bao nhiêu mét, sức tải điện trần...).</li>
                        <li><strong>Bước 4: Xin Giấy phép & Booking báo chí.</strong> Gỡ bỏ rào cản pháp lý, mời KOLs/KOCs và các đầu báo lớn hạng A tham dự đưa tin.</li>
                        <li><strong>Bước 5: Set-up & Rehearsal.</strong> Thi công liên tục 48 giờ. Chạy tổng duyệt kịch bản ánh sáng khớp với hành động của diễn giả trên tíc tắc.</li>
                        <li><strong>Bước 6: Thực thi & Spin-off truyền thông.</strong> Đạo diễn điều phối toàn bộ sự kiện. Bàn giao File hình ảnh/Video highlight ngay trong đêm để báo chí lên bài sáng hôm sau.</li>
                    </ul>


                    <h2>Bảng dự toán chi phí tổ chức Lễ ra mắt sản phẩm</h2>
                    <p>Mỗi sản phẩm mang một thông điệp riêng, do vậy ngân sách cực kỳ linh hoạt. Dưới đây là mức dự toán tham khảo để doanh nghiệp phân bổ dòng tiền hợp lý trước thềm ra mắt:</p>
                    
                    <div className={styles.tableWrapper}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Quy mô & Yêu cầu</th>
                                    <th>Các hạng mục Bao gồm</th>
                                    <th>Chi phí Ước tính</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.tableHighlight}>Gói Tiêu chuẩn (50 - 100 Khách)</td>
                                    <td>Venue 4 sao, Backdrop 3D, Âm thanh ánh sáng chuẩn, MC, Teabreak cơ bản, Dịch vụ Media chụp ảnh.</td>
                                    <td className={styles.tableHighlight}>Từ 80,000,000 VNĐ</td>
                                </tr>
                                <tr>
                                    <td className={styles.tableHighlight}>Gói Bùng nổ (100 - 300 Khách)</td>
                                    <td>Khách sạn 5 sao, Màn hình LED cong P3, Tiết mục múa tương tác ánh sáng (Key moment), Quà tặng Premium.</td>
                                    <td className={styles.tableHighlight}>Từ 150,000,000 VNĐ</td>
                                </tr>
                                <tr>
                                    <td className={styles.tableHighlight}>Gói Siêu thực (Trên 300 Khách)</td>
                                    <td>Concept thiết kế độc bản. Công nghệ 3D Hologram, Báo chí đưa tin, Ca sĩ khách mời Hạng A, Live-cam Flycam trực tiếp.</td>
                                    <td className={styles.tableHighlight}>Liên hệ tư vấn</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2>Bí quyết xử lý rủi ro khi chạy chương trình</h2>
                    <p>Là một chuyên gia trong ngành, chúng tôi luôn chuẩn bị phương án <strong>Backup (Kế hoạch B)</strong>. Một số tình huống kinh điển như diễn giả quên kịch bản thuyết trình sản phẩm? Chúng tôi đã trang bị màn hình nhắc chữ Teller-prompter ẩn dưới chân sân khấu. Lỗi kết nối slide trình chiếu? Kỹ thuật viên luôn có 2 máy tính chạy song song dự phòng cắt hình ngay trong 1 giây.</p>
                    <p>Việc đầu tư cho đơn vị thiết kế chuyên nghiệp chính là bạn đang mua một biểu phí "Bảo hiểm rủi ro" tuyệt đối cho thương hiệu của mình vào ngày trọng đại nhất.</p>

                    <div className={styles.ctaBox}>
                        <h2>Bạn Đã Sẵn Sàng Kiến Tạo Lịch Sử Cho Sản Phẩm?</h2>
                        <p>
                            Đừng chần chừ nhường sân khấu cho đối thủ! Liên hệ ngay với bộ phận sáng tạo của Sự Kiện Toàn Quốc để nhận bản phác thảo Ý tưởng (Proposal) hoàn toàn miễn phí.
                        </p>
                        <Link href="#contact" className={styles.ctaBtn}>
                            Gọi Tư Vấn Kịch Bản: 0854 517 868
                        </Link>
                    </div>

                </div>
            </article>

            {/* Form Liên hệ đặt xuống chân */}
            <div id="contact">
                <ContactForm />
            </div>

            <Footer />
            <FloatingContact />
        </div>
    );
}
