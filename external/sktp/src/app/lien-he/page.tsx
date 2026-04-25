import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FloatingContact from "@/components/FloatingContact/FloatingContact";
import ContactForm from "@/components/ContactForm/ContactForm";
import { getPageContent } from "@/lib/page-content";
import { Metadata } from "next";
import styles from "./ContactPage.module.css";

export const metadata: Metadata = {
    title: "Liên Hệ | Sự Kiện Toàn Quốc",
    description: "Nhận tư vấn miễn phí và báo giá tổ chức sự kiện chuyên nghiệp trong 24h từ Sự Kiện Toàn Quốc.",
};

export default async function ContactPage() {
    const content = await getPageContent();

    return (
        <div className={styles.pageWrapper}>
            <Header />
            
            {/* Background Map / Abstract Shapes for Premium Look */}
            <div className={styles.backgroundBlobs}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
            </div>

            <main className={styles.mainContent}>
                <ContactForm />
            </main>

            <div className={styles.footerWrapper}>
                <Footer content={content} />
            </div>
            <FloatingContact />
        </div>
    );
}
