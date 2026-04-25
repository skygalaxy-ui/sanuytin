import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./DuAn.module.css";

export const metadata: Metadata = {
    title: "Dự Án Đã Tổ Chức — Sự Kiện Toàn Quốc",
    description: "Khám phá các dự án sự kiện, teambuilding, company trip nổi bật mà Sự Kiện Toàn Quốc đã thực hiện cho hơn 500+ doanh nghiệp hàng đầu.",
    alternates: { canonical: "https://sukientoanquoc.com/du-an" },
};

// Dữ liệu mock sử dụng ảnh thực tế từ thư viện admin Supabase
const projectsData = [
    {
        id: "p1",
        title: "Kỷ niệm 10 năm thành lập Techcombank",
        category: "Gala Dinner & Teambuilding",
        image: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841385999-fcj900bwtw.webp",
        stats: "1500+ Khách",
        slug: "ky-niem-10-nam-techcombank"
    },
    {
        id: "p2",
        title: "Vinamilk Summer Camp 2025",
        category: "Company Trip",
        image: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841468860-py4m4f8y5kl.webp",
        stats: "3000+ Khách",
        slug: "vinamilk-summer-camp-2025"
    },
    {
        id: "p3",
        title: "Ra mắt sản phẩm Samsung Galaxy",
        category: "Hội Nghị Khách Hàng",
        image: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841552125-d6rsss2mtnr.webp",
        stats: "500 VIPs",
        slug: "ra-mat-san-pham-samsung"
    },
    {
        id: "p4",
        title: "Shopee Year End Party Khai Xuân",
        category: "Year End Party",
        image: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841648627-yz74vcs8xm.webp",
        stats: "800 Khách",
        slug: "shopee-yep-khai-xuan"
    },
    {
        id: "p5",
        title: "Vingroup Leader Summit",
        category: "Workshop Cấp Cao",
        image: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841704194-h5zu7tms3bk.webp",
        stats: "200 Leaders",
        slug: "vingroup-leader-summit"
    },
    {
        id: "p6",
        title: "FPT Software Sports Day",
        category: "Sports Day",
        image: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774842323006-w8rswfc8loo.webp",
        stats: "1200 Khách",
        slug: "fpt-sports-day"
    }
];

export default function DuAnPage() {
    return (
        <div className={styles.page}>
            <Header />

            {/* ─── HERO ─── */}
            <section className={styles.hero}>
                <Image
                    src="https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/rescue/1775755121814-ad5df164.jpg"
                    alt="Các dự án nổi bật"
                    fill
                    className={styles.heroBgImg}
                    priority
                />
                <div className={styles.heroOverlay} />
                <div className={styles.heroInner}>
                    <p className={styles.heroLabel}>Hồ sơ năng lực</p>
                    <h1 className={styles.heroTitle}>Dự Án Nổi Bật</h1>
                    <p className={styles.heroDesc}>
                        Những câu chuyện thành công, những khoảnh khắc bùng nổ mà chúng tôi tự hào được đồng hành cùng các doanh nghiệp, tập đoàn lớn tại Việt Nam.
                    </p>
                    <div className={styles.heroStats}>
                        <div className={styles.stat}>
                            <span className={styles.statNum}>500+</span>
                            <span className={styles.statLabel}>Dự án hoàn thành</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statNum}>100k+</span>
                            <span className={styles.statLabel}>Người tham dự</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statNum}>100%</span>
                            <span className={styles.statLabel}>Đảm bảo KPI</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── PROJECTS GRID ─── */}
            <section className={styles.gridSection}>
                <div className={styles.container}>
                    <div className={styles.projectsGrid}>
                        {projectsData.map((project, index) => {
                            const isFeatured = index < 2; // Hai bài đầu to hơn
                            return (
                                <Link
                                    key={project.id}
                                    href={`/lien-he`} /* Tạm link tới liên hệ, nếu có trang chi tiết thì sửa */
                                    className={`${styles.projectCard} ${isFeatured ? styles.featured : ""}`}
                                >
                                    <div className={styles.cardImageWrapper}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className={styles.cardImage}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className={styles.cardOverlay} />
                                    </div>

                                    <div className={styles.cardContent}>
                                        <div className={styles.cardTop}>
                                            <span className={styles.cardCategory}>{project.category}</span>
                                            <span className={styles.cardStats}>{project.stats}</span>
                                        </div>
                                        <div className={styles.cardBottom}>
                                            <h2 className={styles.cardTitle}>{project.title}</h2>
                                            <span className={styles.cardCta}>
                                                Xem hình ảnh
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── BOTTOM CTA ─── */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaBox}>
                        <div className={styles.ctaGlow} />
                        <h2 className={styles.ctaTitle}>Sẵn sàng cho chiến dịch tiếp theo?</h2>
                        <p className={styles.ctaDesc}>Chúng tôi ở đây để lắng nghe yêu cầu và "đo may" một kịch bản sự kiện hoàn toàn mới, mang đậm bản sắc riêng của công ty bạn.</p>
                        <div className={styles.ctaActions}>
                            <Link href="/lien-he" className={styles.ctaBtnPrimary}>Gửi yêu cầu báo giá</Link>
                            <a href="tel:0854517868" className={styles.ctaBtnSecondary}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12 19.79 19.79 0 0 1 1.14 3.38 2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                Hotline: 0854 517 868
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
