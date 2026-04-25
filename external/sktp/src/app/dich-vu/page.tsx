import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { serviceDetails } from "@/data/serviceData";
import styles from "./DichVu.module.css";

export const metadata: Metadata = {
    title: "Dịch Vụ Tổ Chức Sự Kiện Chuyên Nghiệp — Sự Kiện Toàn Quốc",
    description: "Khám phá đầy đủ các dịch vụ tổ chức sự kiện của chúng tôi: Teambuilding, Company Trip, Year End Party, Workshop, Sports Day, Family Day, Khai Trương và Hội Nghị.",
    alternates: { canonical: "https://sukientoanquoc.com/dich-vu" },
};

const serviceIcons: Record<string, string> = {
    "to-chuc-teambuilding":  "🏕️",
    "to-chuc-company-trip":  "✈️",
    "to-chuc-year-end-party": "🎉",
    "to-chuc-workshop":      "🎨",
    "to-chuc-sports-day":    "🏆",
    "to-chuc-family-day":    "👨‍👩‍👧‍👦",
    "to-chuc-khai-truong":   "🦁",
    "to-chuc-hoi-nghi":      "🎤",
};

const serviceColors: Record<string, string> = {
    "to-chuc-teambuilding":   "#f97316",
    "to-chuc-company-trip":   "#0ea5e9",
    "to-chuc-year-end-party": "#eab308",
    "to-chuc-workshop":       "#a855f7",
    "to-chuc-sports-day":     "#22c55e",
    "to-chuc-family-day":     "#ec4899",
    "to-chuc-khai-truong":    "#ef4444",
    "to-chuc-hoi-nghi":       "#6366f1",
};

export default function DichVuPage() {
    const services = Object.entries(serviceDetails);

    return (
        <div className={styles.page}>
            <Header />

            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <p className={styles.heroLabel}>Chuyên nghiệp — Sáng tạo — Đột phá</p>
                    <h1 className={styles.heroTitle}>Dịch Vụ Tổ Chức Sự Kiện</h1>
                    <p className={styles.heroDesc}>
                        Từ buổi Teambuilding đến Gala Dinner hoành tráng, chúng tôi mang đến giải pháp sự kiện
                        toàn diện — được đo may theo DNA riêng của doanh nghiệp bạn.
                    </p>
                    <div className={styles.heroStats}>
                        <div className={styles.stat}>
                            <span className={styles.statNum}>500+</span>
                            <span className={styles.statLabel}>Sự kiện thành công</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statNum}>8</span>
                            <span className={styles.statLabel}>Loại hình dịch vụ</span>
                        </div>
                        <div className={styles.statDivider} />
                        <div className={styles.stat}>
                            <span className={styles.statNum}>10+</span>
                            <span className={styles.statLabel}>Năm kinh nghiệm</span>
                        </div>
                    </div>
                </div>
                <div className={styles.heroBg} />
            </section>

            {/* Services Grid */}
            <section className={styles.gridSection}>
                <div className={styles.container}>
                    <div className={styles.servicesGrid}>
                        {services.map(([slug, service], index) => {
                            const color = serviceColors[slug] || "#f97316";
                            const icon = serviceIcons[slug] || "⭐";
                            const isFeatured = index < 2; // first 2 cards are large
                            return (
                                <Link
                                    key={slug}
                                    href={`/dich-vu/${slug}`}
                                    className={`${styles.serviceCard} ${isFeatured ? styles.featured : ""}`}
                                    style={{ "--accent": color } as React.CSSProperties}
                                >
                                    <div className={styles.cardImageWrapper}>
                                        <Image
                                            src={service.heroImage}
                                            alt={service.title}
                                            fill
                                            className={styles.cardImage}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className={styles.cardOverlay} />
                                    </div>

                                    <div className={styles.cardContent}>
                                        <span className={styles.cardIcon}>{icon}</span>
                                        <h2 className={styles.cardTitle}>{service.title.split("—")[0].trim()}</h2>
                                        <p className={styles.cardDesc}>{service.description.slice(0, 100)}...</p>
                                        <span className={styles.cardCta}>
                                            Xem chi tiết
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14M12 5l7 7-7 7"/>
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaBox}>
                        <div className={styles.ctaGlow} />
                        <h2 className={styles.ctaTitle}>Chưa tìm thấy dịch vụ phù hợp?</h2>
                        <p className={styles.ctaDesc}>Đội ngũ tư vấn của chúng tôi sẵn sàng thiết kế giải pháp riêng biệt cho doanh nghiệp bạn — hoàn toàn miễn phí.</p>
                        <div className={styles.ctaActions}>
                            <Link href="/lien-he" className={styles.ctaBtnPrimary}>Nhận tư vấn miễn phí</Link>
                            <a href="tel:0854517868" className={styles.ctaBtnSecondary}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12 19.79 19.79 0 0 1 1.14 3.38 2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                0854 517 868
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
