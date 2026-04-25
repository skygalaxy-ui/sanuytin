"use client";

import Image from "next/image";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Services.module.css";

interface ServicesProps {
    images?: Record<string, string>;
    content?: Record<string, string>;
}

const serviceDefaults = [
    {
        badge: "TEAMBUILDING",
        color: "#F97316",
        title: "Teambuilding Đột Phá",
        desc: "Giải pháp gắn kết nhân sự thông qua các kịch bản Amazing Race & Survival độc quyền.",
        imageKey: "service_teambuilding",
        defaultImage: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/rescue/1775755121814-ad5df164.jpg",
        eventType: "to-chuc-teambuilding",
    },
    {
        badge: "COMPANY TRIP",
        color: "#22C55E",
        title: "Du Lịch & MICE",
        desc: "Hành trình nghỉ dưỡng 5 sao kết hợp hội thảo và gắn kết văn hóa doanh nghiệp.",
        imageKey: "service_company_trip",
        defaultImage: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841385999-fcj900bwtw.webp",
        eventType: "to-chuc-company-trip",
    },
    {
        badge: "YEAR END PARTY",
        color: "#8B5CF6",
        title: "Tiệc Tất Niên & Gala",
        desc: "Đêm tiệc tri ân đẳng cấp với những concept nghệ thuật bùng nổ và khác biệt.",
        imageKey: "service_year_end_party",
        defaultImage: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841468860-py4m4f8y5kl.webp",
        eventType: "to-chuc-year-end-party",
    },
    {
        badge: "SPORTS DAY",
        color: "#EF4444",
        title: "Ngày Hội Thể Thao",
        desc: "Giải đấu nội bộ và ngày hội vận động Olympic mini khơi dậy bản lĩnh đội ngũ.",
        imageKey: "service_sports_day",
        defaultImage: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841648627-yz74vcs8xm.webp",
        eventType: "to-chuc-sports-day",
    },
    {
        badge: "FAMILY DAY",
        color: "#F59E0B",
        title: "Ngày Hội Gia Đình",
        desc: "Gắn kết hậu phương nhân sự với hoạt động vui chơi đa thế hệ đầy ý nghĩa.",
        imageKey: "service_family_day",
        defaultImage: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841704194-h5zu7tms3bk.webp",
        eventType: "to-chuc-family-day",
    },
    {
        badge: "KHAI TRƯƠNG",
        color: "#DC2626",
        title: "Khai Trương - Khánh Thành",
        desc: "Nghi lễ khởi đầu hồng phát với sự kết hợp hoàn hảo giữa truyền thống và hiện đại.",
        imageKey: "service_khai_truong",
        defaultImage: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774842323006-w8rswfc8loo.webp",
        eventType: "to-chuc-khai-truong",
    },
] as const;

export default function Services({ images = {}, content = {} }: ServicesProps) {
    const { ref: headerRef, isVisible: headerVisible } = useReveal();
    const { ref: gridRef, isVisible: gridVisible } = useReveal(0.08);

    const title = content.service_title || '<span class="titleHighlight">Dịch vụ</span> tổ chức sự kiện';
    const subtitle = content.service_subtitle || 'Giải pháp teambuilding & event trọn gói cho mọi quy mô doanh nghiệp';

    return (
        <section className={styles.section} id="services">
            <div className={styles.container}>
                <div
                    ref={headerRef as React.RefObject<HTMLDivElement>}
                    className={`${styles.header} reveal ${headerVisible ? "visible" : ""}`}
                >
                    <div className={styles.badge}>
                        DỊCH VỤ
                    </div>
                    <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title.replace('<span class="titleHighlight">', `<span class="${styles.titleHighlight}">`) }} />
                    <p className={styles.subtitle} dangerouslySetInnerHTML={{ __html: subtitle }} />
                </div>

                <div
                    ref={gridRef as React.RefObject<HTMLDivElement>}
                    className={`${styles.grid} reveal-stagger ${gridVisible ? "visible" : ""}`}
                >
                    {serviceDefaults.map((s) => (
                        <Link key={s.badge} href={`/dich-vu/${s.eventType}`} className={styles.card} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                            <div className={styles.cardImage}>
                                <Image src={images[s.imageKey] || s.defaultImage} alt={s.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" />
                                <div className={styles.cardOverlay} />
                                <div className={styles.cardBadge} style={{ background: s.color }}>
                                    {s.badge}
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{s.title}</h3>
                                <p className={styles.cardDesc}>{s.desc}</p>
                                <span className={styles.cardLink}>
                                    Xem chi tiết
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
