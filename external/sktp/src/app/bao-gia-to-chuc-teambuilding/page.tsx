import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from '@/app/LandingPage.module.css';
import ContactForm from '@/components/ContactForm/ContactForm';
import FloatingContact from '@/components/FloatingContact/FloatingContact';

export const metadata: Metadata = {
    title: 'Bảng báo giá tổ chức teambuilding & company trip (mới 2026)',
    description: 'Tham khảo ngay báo giá chi tiết từng hạng mục thiết kế kịch bản, thuê cung cấp MC, đạo cụ game ngoài trời và các gói Teambuilding theo ngân sách.',
    keywords: 'báo giá tổ chức teambuilding, chi phí chạy company trip, giá thuê mc teambuilding, kịch bản teambuilding giá rẻ',
    openGraph: {
        title: 'Bóc Tách Khảo Giá Dịch Vụ Tổ Chức Teambuilding (Công Khai)',
        description: 'Chúng tôi hiểu bạn cần lập báo cáo ngân sách Trình Sếp (Quỹ Công Đoàn). Bảng cấu trúc báo giá sự kiện nội bộ đập tan nỗi lo phát sinh.',
        images: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=80'],
    }
};

export default function BaoGiaPage() {
    return (
        <div className={styles.page}>
            <Header />

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBgWrapper}>
                    <Image
                        src="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1920&q=90"
                        alt="Đội ngũ năng động đang tham gia trò chơi kịch bản Teambuilding"
                        fill
                        className={styles.heroBgImage}
                        priority
                    />
                    <div className={styles.heroGradient} />
                </div>
                
                <div className={styles.heroContent}>
                    <span className={styles.badge}>
                        THUYẾT MINH TÀI CHÍNH NỘI BỘ
                    </span>
                    <h1 className={styles.title}>
                        Bài toán báo giá chạy sự kiện <br />
                        <span className={styles.gradientText}>
                            không thay đổi & phát sinh
                        </span>
                    </h1>
                    <p className={styles.description}>
                        Việc đau đầu nhất của phòng Hành chính Nhân sự khi dò giá khảo sát chính là "Ma Trận Phụ Phí Ẩn". Chúng tôi minh bạch hóa ngay từ bước nhận yêu cầu (Brief) để đảm bảo trình ký Kế Toán luôn duyệt tốc độ.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <article className={styles.mainContent}>
                <div className={styles.proseContainer}>
                    
                    <h2>Cấu trúc nền tảng hình thành tỷ trọng ngân sách sự kiện</h2>
                    <p>
                        Các đơn vị môi giới du lịch cá nhân thường đánh tráo khái niệm bằng cách chào mời bằng một con số quá rẻ bèo (Ví dụ: Trọn gói đi biển 3 ngày 2 đêm chỉ 1.200.000đ). Nhưng họ cố tình giấu 1 đống thứ không có trong gói đó như: Thiếu micro cho MC sân khấu, thiếu Flycam, trò chơi Game cũ nhàm chán từ 10 năm trước, rách nát và thức ăn chất lượng cực thấp không đảm bảo hàm lượng dinh dưỡng.
                    </p>
                    <p>
                        Sự Kiện Toàn Quốc định giá bằng Đạo đức nghề nghiệp. Chúng tôi đập tan các biến số ẩn bằng cách rã khối lượng chi phí ra thành 3 Trụ Cột (Pillars) Tài Chính cực kỳ rành mạch: <strong>Hậu cần Cứng (Logistics)</strong>, <strong>Nhân lực Vận hành (Human Resources)</strong> và <strong>Giấy phép & Sân bãi (Licences)</strong>. Sự rõ ràng ở giai đoạn đầu tháo gỡ rào cản duyệt chi cho các Tổng Giám đốc Tài chính khó tính nhất.
                    </p>

                    <figure>
                        <Image 
                            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80" 
                            alt="Kho đạo cụ game khổng lồ của đoàn chuẩn bị lên đường"
                            width={1200}
                            height={675}
                           
                        />
                        <figcaption>Kinh phí đầu tư đồ bơm hơi Teambuilding tỷ lệ thuận với mức độ Wow của doanh nghiệp trên sân chơi.</figcaption>
                    </figure>

                    <h2>Phân tích khung gói giá và Kịch bản đính kèm tương ứng</h2>
                    <p>Mỗi ngân sách định lượng sẽ quy đổi ra các cấp độ kịch bản hoàn toàn khác biệt. Cấp độ càng lên cao, khách hàng càng chạm vào những Game độc bản và Concept đắt tiền chưa từng xuất hiện đại trà. Hãy tham chiếu với mốc số lượng dao động lý tưởng (Tầm 100 Khách - Có bao gồm Hậu cần Xe và Lưu Trú Resort 3 Sao):</p>

                    <div className={styles.tableWrapper}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Gói Dịch Vụ (Packages)</th>
                                    <th>Đơn giá Dao động Cấu hình (Tham khảo)</th>
                                    <th>Đặc tả Cấu trúc Hạng mục Cơ Bản Được Cấp</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.tableHighlight}>Gói Tối Ưu Nhanh (SME Package)</td>
                                    <td>1.800.000 VNĐ - 2.500.000 VNĐ / Người lớn</td>
                                    <td>Bồm toàn bộ tiền bãi biển, Backdrop, Âm thanh di động công suất 1000W. 4 Game Tools tiêu chuẩn, MC cấp 2, Media chụp ảnh trả file ngay, Bảo hiểm đoàn đầy đủ. Phù hợp Doanh nghiệp Dịch vụ, Thương mại, Văn phòng vừa và nhỏ (Sinh viên mới ra trường đông).</td>
                                </tr>
                                <tr>
                                    <td className={styles.tableHighlight}>Gói Master Coaching (Truyền Động Lực)</td>
                                    <td>2.800.000 VNĐ - 4.500.000 VNĐ / Người lớn</td>
                                    <td>Chuỗi Game Bơm Hơi Sinh Tồn siêu khổng lồ liên hoàn. Kịch bản đánh thẳng não bộ thay đổi tư duy làm việc. Flycam FPV quay sát sàn sạt, MC thuộc Top hạng A dẫn Truyền Hình. Đội ngũ y tế túc trực riêng. Tặng kèm Khung Kịch bản Đêm Lửa Trại.</td>
                                </tr>
                                <tr>
                                    <td className={styles.tableHighlight}>Gói Khủng Long (Exclusive Corporate)</td>
                                    <td>5.500.000 VNĐ Trở lên tùy độ chịu chơi Thiết Kế Mới 100% (Custom Build)</td>
                                    <td>Amazing Race (Đua trạm chéo xuyên Quốc gia hoặc vượt Biển, lên Đảo hoang trực thăng). Thay vì chơi đồ nhựa nhẹ, tổ chức đua xe vượt địa hình (ATV) hoặc du thuyền Catamaran riêng tư bắn pháo hoa từ vịnh. Hệ thống 20 Leader chạy phụ trợ trạm.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2>Cam kết ba số KHÔNG trên bản hợp đồng định mệnh</h2>
                    <p>Chính sự trung thực đã bảo vệ nồi cơm của đội ngũ chúng tôi qua suốt thập kỷ qua giữa thời buổi Thượng Vàng Hạ Cám. Hợp đồng nguyên tắc của Sự Kiện Toàn Quốc đóng dấu pháp nhân luôn neo giữ thiết chế "Ba Không":</p>
                    <p>
                        <strong>Không phát sinh phụ phí ẩn:</strong> Nếu trời mưa làm bể màn diễn ngoài biển, Kế hoạch B thuê sảnh sự kiện khách sạn trong bờ để chuyển cờ tướng vận động. Chi phí mướn sảnh dự phòng này hoàn toàn nằm trong quỹ bao chịu của chúng tôi, khách hàng không móc thêm ví.
                    </p>
                    <p>
                        <strong>Không Delay nhịp điệu sân khấu (Cháy Timeline):</strong> Thẻ phạt hợp đồng luôn mở ngỏ nếu ekip Setup chậm quá 30 phút theo Target Time. Đội ngũ thi công của chúng tôi phải có mặt thi công nhà giàn, khung bạt ánh sáng 4 ngày trước đó và Test hệ thống cắm điện thâu đêm.
                    </p>
                    <p>
                        <strong>Không buông rơi sự an nguy thân thể:</strong> Từ cọc bảo hiểm, đội y tế cứu trợ bãi biển, hay nguồn gốc hộp kem đánh răng trong resort đều được giám định loại trừ các sự cố thương tổn cho Công Đoàn Công Nhân lớn.
                    </p>

                    <div className={styles.ctaBox}>
                        <h2>Quỹ Tiền Của Sếp Bạn, Thể Diện Của Bạn! Nhấc Máy Ngay Thôi</h2>
                        <p>
                            Bằng kinh nghiệm xương máu dàn trận cho hàng ngàn CEO, hãy ấn vào số Hotline, gửi số lượng biên chế doanh nghiệp, và chúng tôi sẽ dập cho bạn Bản Thuyết Minh Tài Chính đẹp như một bức tranh Excel để nộp sếp lớn. Lời từ chối là không thể!
                        </p>
                        <Link href="#contact" className={styles.ctaBtn}>
                            Lên Dự Toán Liền Tại Zalo: 0854 517 868
                        </Link>
                    </div>

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
