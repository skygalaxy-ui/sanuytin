import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { serviceDetails } from "@/data/serviceData";
import styles from "./ServiceDetail.module.css";

export function generateStaticParams() {
    return Object.keys(serviceDetails).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = serviceDetails[slug as keyof typeof serviceDetails];

    if (!service) {
        return { title: "Dịch vụ không tìm thấy — Sự Kiện Toàn Quốc" };
    }

    return {
        title: `${service.title} — Sự Kiện Toàn Quốc`,
        description: service.description,
        openGraph: {
            title: `${service.title} — Sự Kiện Toàn Quốc`,
            description: service.description,
            url: `https://sukientoanquoc.com/dich-vu/${slug}`,
            type: "website",
            locale: "vi_VN",
            images: [{ url: service.heroImage, width: 1200, height: 630, alt: service.title }],
        },
        alternates: { canonical: `https://sukientoanquoc.com/dich-vu/${slug}` },
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = serviceDetails[slug as keyof typeof serviceDetails];

    if (!service) notFound();

    return (
        <div className={styles.page}>
            <Header />

            {/* ─── HERO ─── */}
            <section className={styles.hero}>
                <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className={styles.heroBg}
                    priority
                />
                <div className={styles.heroOverlay} />
                <div className={styles.heroInner}>
                    <div className={styles.heroCrumb}>
                        <Link href="/" className={styles.crumbLink}>Trang chủ</Link>
                        <span className={styles.crumbSep}>/</span>
                        <Link href="/#dich-vu" className={styles.crumbLink}>Dịch vụ</Link>
                    </div>
                    <p className={styles.heroLabel}>DỊCH VỤ CHUYÊN NGHIỆP</p>
                    <h1 className={styles.heroTitle}>{service.title}</h1>
                    <p className={styles.heroDesc}>{service.description}</p>
                    <a href="tel:0854517868" className={styles.heroCta}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12 19.79 19.79 0 0 1 1.14 3.38 2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Tư vấn miễn phí: 0854 517 868
                    </a>
                </div>
            </section>

            {/* ─── BENEFITS STRIP ─── */}
            <section className={styles.benefitsStrip}>
                <div className={styles.container}>
                    <p className={styles.sectionLabel}>Tại sao chọn chúng tôi</p>
                    <div className={styles.benefitsGrid}>
                        {service.benefits.map((benefit, i) => (
                            <div key={i} className={styles.benefitCard}>
                                <span className={styles.benefitNum}>{String(i + 1).padStart(2, '0')}</span>
                                <p className={styles.benefitText}>{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── RICH CONTENT ─── */}
            {service.htmlDetail && (
                <section className={styles.contentSection}>
                    <div className={styles.container}>
                        <div
                            className={styles.richContent}
                            dangerouslySetInnerHTML={{ __html: service.htmlDetail }}
                        />
                    </div>
                </section>
            )}

            {/* ─── PROCESS ─── */}
            <section className={styles.processSection}>
                <div className={styles.container}>
                    <p className={styles.sectionLabel}>Quy trình</p>
                    <h2 className={styles.processHeading}>Quy trình thực hiện chuẩn 5 sao</h2>
                    <div className={styles.processGrid}>
                        {service.process.map((step, i) => (
                            <div key={step.step} className={styles.processCard}>
                                <div className={styles.processLine}>
                                    <span className={styles.processNum}>{step.step}</span>
                                    {i < service.process.length - 1 && <span className={styles.processConnector} />}
                                </div>
                                <h3 className={styles.processName}>{step.name}</h3>
                                <p className={styles.processDesc}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className={styles.ctaSection}>
                <div className={styles.container}>
                    <div className={styles.ctaBox}>
                        <div className={styles.ctaGlow} />
                        <p className={styles.ctaLabel}>Bắt đầu ngay hôm nay</p>
                        <h2 className={styles.ctaTitle}>Sẵn sàng cho sự kiện hoành tráng?</h2>
                        <p className={styles.ctaDesc}>Đội ngũ chuyên gia của chúng tôi cam kết mang lại sự hài lòng vượt mong đợi — từ ý tưởng đến thực thi.</p>
                        <div className={styles.ctaActions}>
                            <Link href="/lien-he" className={styles.ctaBtnPrimary}>
                                Gửi yêu cầu báo giá
                            </Link>
                            <a href="tel:0854517868" className={styles.ctaBtnSecondary}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12 19.79 19.79 0 0 1 1.14 3.38 2 2 0 0 1 3.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
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
