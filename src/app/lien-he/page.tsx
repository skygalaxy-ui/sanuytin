import { Mail, Facebook, Twitter, Linkedin, ChevronRight, Home, MessageCircle } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Liên Hệ Sàn Uy Tín - Hỗ Trợ 24/7 | Giải Đáp Thắc Mắc Forex",
    description: "Liên hệ với đội ngũ Sàn Uy Tín để được hỗ trợ về đánh giá sàn, kiến thức trading hoặc hợp tác quảng cáo.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background pt-[160px]">
            {/* Hero Section */}
            <div className="bg-secondary/30 border-b border-border">
                <div className="container-custom py-12 md:py-20">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                            <Home size={14} /> Trang chủ
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-foreground font-medium">Liên Hệ</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <MessageCircle size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                            Hỗ Trợ 24/7
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
                        Liên Hệ <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Với Chúng Tôi</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                        Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn về thị trường Forex.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom py-12">
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-card dark:bg-card/40 p-8 rounded-3xl border border-border">
                            <h3 className="text-2xl font-bold text-foreground mb-6">Thông Tin Liên Hệ</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg text-foreground">Email</h4>
                                        <p className="text-muted-foreground">sanuytin.net@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-border">
                                <h4 className="font-bold text-lg text-foreground mb-4">Mạng Xã Hội</h4>
                                <div className="flex gap-4">
                                    <SocialLink icon={<Facebook size={20} />} href="#" />
                                    <SocialLink icon={<Twitter size={20} />} href="#" />
                                    <SocialLink icon={<Linkedin size={20} />} href="#" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <ContactForm />
                </div>
            </div>
        </main>
    );
}

function SocialLink({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
        <a href={href} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
            {icon}
        </a>
    )
}
