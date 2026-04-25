import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "../legal.module.css";
import Link from "next/link";
import { getPageContent } from "@/lib/page-content";

export const metadata: Metadata = {
    title: "Sơ đồ trang web — Sự Kiện Toàn Quốc",
    description: "Sơ đồ tổng thể toàn bộ trang web và dịch vụ của Sự Kiện Toàn Quốc.",
    robots: { index: true, follow: true },
};

export default async function SitemapPage() {
    const content = await getPageContent();
    return (
        <>
            <Header />
            <main className={styles.policyPage}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Sơ đồ trang web</h1>
                    <p className={styles.lastUpdated}>Khám phá toàn bộ cấu trúc website của chúng tôi</p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">Các trang chính</h2>
                            <ul className="space-y-3">
                                <li><Link href="/" className="text-gray-300 hover:text-orange-500 transition-colors">Trang chủ</Link></li>
                                <li><Link href="/blog" className="text-gray-300 hover:text-orange-500 transition-colors">Blog & Tin tức</Link></li>
                                <li><Link href="/lien-he" className="text-gray-300 hover:text-orange-500 transition-colors">Liên hệ tư vấn</Link></li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">Dịch vụ Cốt lõi</h2>
                            <ul className="space-y-3">
                                <li><Link href="/dich-vu/to-chuc-teambuilding" className="text-gray-300 hover:text-orange-500 transition-colors">Tổ chức Teambuilding</Link></li>
                                <li><Link href="/dich-vu/to-chuc-company-trip" className="text-gray-300 hover:text-orange-500 transition-colors">Company Trip Dã ngoại</Link></li>
                                <li><Link href="/dich-vu/to-chuc-year-end-party" className="text-gray-300 hover:text-orange-500 transition-colors">Tiệc Khai xuân & Year End Party</Link></li>
                                <li><Link href="/to-chuc-le-ra-mat-san-pham" className="text-gray-300 hover:text-orange-500 transition-colors">Lễ Ra mắt Sản phẩm</Link></li>
                                <li><Link href="/to-chuc-tiec-tat-nien" className="text-gray-300 hover:text-orange-500 transition-colors">Tổ chức Tiệc Tất Niên</Link></li>
                                <li><Link href="/to-chuc-chay-roadshow" className="text-gray-300 hover:text-orange-500 transition-colors">Roadshow Quảng bá thương hiệu</Link></li>
                                <li><Link href="/bao-gia-to-chuc-teambuilding" className="text-gray-300 hover:text-orange-500 transition-colors">Báo giá tổ chức sự kiện</Link></li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-white/10">Pháp lý & Hệ thống</h2>
                            <ul className="space-y-3">
                                <li><Link href="/chinh-sach-bao-mat" className="text-gray-300 hover:text-orange-500 transition-colors">Chính sách bảo mật</Link></li>
                                <li><Link href="/dieu-khoan-dich-vu" className="text-gray-300 hover:text-orange-500 transition-colors">Điều khoản dịch vụ</Link></li>
                                <li><a href="/sitemap.xml" target="_blank" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">XML Sitemap (dùng cho bot)</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
            <Footer content={content} />
        </>
    );
}
