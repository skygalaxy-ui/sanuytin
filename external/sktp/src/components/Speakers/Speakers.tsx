"use client";

import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Speakers.module.css";

interface SpeakersProps {
    images?: Record<string, string>;
}

const clientLogos = [
    { name: "Vingroup", logoUrl: "https://upload.wikimedia.org/wikipedia/vi/thumb/9/93/Vingroup_logo.svg/1024px-Vingroup_logo.svg.png", color: "#1A3C7E" },
    { name: "Viettel", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Logo_Viettel_2021.svg/512px-Logo_Viettel_2021.svg.png", color: "#E4002B" },
    { name: "FPT", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo_2010.svg/512px-FPT_logo_2010.svg.png", color: "#F37021" },
    { name: "VinFast", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/VinFast_logo.svg/512px-VinFast_logo.svg.png", color: "#1A3C7E" },
    { name: "Masan", logoUrl: "https://upload.wikimedia.org/wikipedia/vi/thumb/1/17/Masan_Group_logo.svg/256px-Masan_Group_logo.svg.png", color: "#003B5C" },
    { name: "Sun Group", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/M%E1%BA%B7t_tr%E1%BB%9Di_Sun_Group.png/120px-M%E1%BA%B7t_tr%E1%BB%9Di_Sun_Group.png", color: "#C8102E" },
    { name: "Techcombank", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Techcombank_logo.png", color: "#E4002B" },
    { name: "VNG Corp", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/VNG_Logo.svg/256px-VNG_Logo.svg.png", color: "#0066B3" },
    { name: "MoMo", logoUrl: "https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png", color: "#A50064" },
    { name: "Tiki", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Tiki_logo.png", color: "#1A94FF" },
];

const testimonials = [
    {
        name: "Nguyễn Văn Nam",
        role: "Trưởng phòng Marketing",
        company: "Pegas Touristik Việt Nam",
        avatar: "",
        avatarKey: "speaker_1",
        defaultAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80&fm=webp",
        text: "Hợp tác cùng SKTQ cho chuỗi Roadshow 10 tỉnh thành, tôi ấn tượng nhất với khả năng điều phối nhân sự và thiết bị linh hoạt. Mọi thứ diễn ra đúng tiến độ dù thời tiết không thuận lợi.",
        rating: 5,
    },
    {
        name: "Trần Bảo Ngọc",
        role: "Phó Giám đốc điều hành",
        company: "Cam Ranh Bay Resort",
        avatar: "",
        avatarKey: "speaker_2",
        defaultAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80&fm=webp",
        text: "Sự kiện Year End Party vừa qua khách mời rất hài lòng. Hệ thống âm thanh ánh sáng chuẩn quốc tế và kịch bản sáng tạo đã làm nên một buổi tối bùng nổ cảm xúc. Cảm ơn National Events!",
        rating: 5,
    },
    {
        name: "Lê Hoàng Phúc",
        role: "CEO",
        company: "NAI New World",
        avatar: "",
        avatarKey: "speaker_3",
        defaultAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80&fm=webp",
        text: "Quy trình làm việc chuyên nghiệp, báo giá minh bạch và không phát sinh phí ngoài. Đây là đơn vị tổ chức sự kiện uy tín nhất mà doanh nghiệp chúng tôi từng hợp tác.",
        rating: 5,
    },
];

const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const QuoteIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" opacity="0.15">
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" />
    </svg>
);

export default function Speakers({ images = {} }: SpeakersProps) {
    const { ref: headerRef, isVisible: headerVisible } = useReveal();
    const { ref: logosRef, isVisible: logosVisible } = useReveal(0.1);
    const { ref: testRef, isVisible: testVisible } = useReveal(0.1);

    return (
        <section className={styles.section} id="speakers">
            <div className={styles.container}>
                <div
                    ref={headerRef as React.RefObject<HTMLDivElement>}
                    className={`${styles.header} reveal ${headerVisible ? "visible" : ""}`}
                >
                    <span className="section-label section-label--dark">ĐỐI TÁC</span>
                    <h2 className={styles.title}>
                        ĐỐI TÁC ĐÃ
                        <br />
                        <span className={styles.highlight}>TIN TƯỞNG CHÚNG TÔI</span>
                    </h2>
                    <p className={styles.headerDesc}>
                        Hơn 800+ doanh nghiệp lớn nhỏ trên cả nước đã chọn Sự Kiện Toàn Quốc
                    </p>
                </div>

                <div
                    ref={logosRef as React.RefObject<HTMLDivElement>}
                    className={`${styles.logoGrid} reveal-stagger ${logosVisible ? "visible" : ""}`}
                >
                    {clientLogos.map((c) => (
                        <div key={c.name} className={styles.logoCard}>
                            <span className={styles.logoText} style={{ color: c.color }}>{c.name}</span>
                        </div>
                    ))}
                </div>

                <div
                    ref={testRef as React.RefObject<HTMLDivElement>}
                    className={`${styles.testimonials} reveal-scale ${testVisible ? "visible" : ""}`}
                >
                    <div className={styles.testHeader}>
                        <span className={styles.testLabel}>ĐÁNH GIÁ</span>
                        <h3 className={styles.testTitle}>
                            KHÁCH HÀNG NÓI GÌ
                            <br />
                            <span className={styles.testTitleGlow}>VỀ CHÚNG TÔI?</span>
                        </h3>
                    </div>

                    <div className={styles.testGrid}>
                        {testimonials.map((t, i) => (
                            <div key={t.name} className={styles.testCard} style={{ animationDelay: `${i * 0.15}s` }}>
                                <div className={styles.testQuote}>
                                    <QuoteIcon />
                                </div>

                                <div className={styles.testStars}>
                                    {[...Array(t.rating)].map((_, j) => (
                                        <StarIcon key={j} />
                                    ))}
                                </div>

                                <p className={styles.testText}>&ldquo;{t.text}&rdquo;</p>

                                <div className={styles.testAuthor}>
                                    <div className={styles.testAvatar}>
                                        <Image src={images[t.avatarKey] || t.defaultAvatar} alt={t.name} fill sizes="48px" />
                                    </div>
                                    <div className={styles.testInfo}>
                                        <span className={styles.testName}>{t.name}</span>
                                        <span className={styles.testRole}>{t.role}</span>
                                        <span className={styles.testCompany}>{t.company}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
