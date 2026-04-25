"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FloatingContact from "@/components/FloatingContact/FloatingContact";
import styles from "@/app/LandingPage.module.css";

export default function NotFound() {
    return (
        <div className={styles.page} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />

            {/* Main Content */}
            <main style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden', padding: '120px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div className={styles.heroBgWrapper}>
                    <Image
                        src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=40"
                        alt="Background Error Sân Khấu Trống"
                        fill
                        className={styles.heroBgImage}
                        priority
                    />
                    <div className={styles.heroGradient} />
                </div>

                <div className={styles.heroContent} style={{ zIndex: 10, maxWidth: '800px', width: '100%' }}>
                    <h1 style={{ fontSize: 'clamp(80px, 15vw, 160px)', fontWeight: 900, lineHeight: 1, opacity: 0.8, background: 'linear-gradient(to bottom, #f97316, #000)', WebkitBackgroundClip: 'text', color: 'transparent', margin: 0 }}>
                        404
                    </h1>
                    <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '40px', marginTop: '-40px', position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                        
                        <div style={{ width: '64px', height: '64px', background: 'rgba(249, 115, 22, 0.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="12"></line>
                                <line x1="12" y1="16" x2="12.01" y2="16"></line>
                            </svg>
                        </div>
                        <h2 className={styles.title} style={{ fontSize: '24px', textTransform: 'none', marginBottom: '16px' }}>
                            Ánh đèn sân khấu chưa được chiếu tới <br/> (Lỗi 404)
                        </h2>
                        <p className={styles.description} style={{ color: '#9ca3af', marginBottom: '32px' }}>
                            Có vẻ như trang bạn đang tìm kiếm đã được đạo diễn chuyển sang một màn kịch bản khác, hoặc đường dẫn đã bị sai lệch trong quá trình tổng duyệt.
                        </p>
                        
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                            <Link 
                                href="/" 
                                className={styles.ctaBtn}
                                style={{ textAlign: 'center' }}
                            >
                                TRỞ VỀ TRANG CHỦ
                            </Link>
                            <Link 
                                href="/#services" 
                                className={styles.ctaBtn}
                                style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', textAlign: 'center' }}
                            >
                                XEM CÁC DỊCH VỤ CỦA CHÚNG TÔI
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            <FloatingContact />
        </div>
    );
}
