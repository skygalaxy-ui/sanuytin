import { Mail, Clock, MessageCircle, ChevronRight, Home, Headphones, Shield, Zap } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
    title: "Liên Hệ Sàn Uy Tín - Hỗ Trợ 24/7 | Giải Đáp Thắc Mắc Forex",
    description: "Liên hệ với đội ngũ Sàn Uy Tín để được hỗ trợ về đánh giá sàn, kiến thức trading hoặc hợp tác quảng cáo.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background pt-[120px] relative">
            {/* Background effects spanning full page top */}
            <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5 pointer-events-none" />
            <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-border">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="container-custom relative py-20 md:py-28">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-base text-muted-foreground/90 mb-8">
                        <Link href="/" className="hover:text-primary flex items-center gap-1.5 transition-colors">
                            <Home size={16} /> Trang chủ
                        </Link>
                        <ChevronRight size={16} />
                        <span className="text-foreground font-medium">Liên hệ</span>
                    </div>

                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                            <Headphones size={16} />
                            Hỗ trợ 24/7
                        </div>

                        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight font-heading">
                            Chúng tôi luôn sẵn sàng
                            <span className="block text-primary">lắng nghe bạn</span>
                        </h1>

                        <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                            Đội ngũ chuyên gia của Sàn Uy Tín sẵn sàng hỗ trợ bạn mọi lúc về thị trường Forex, đánh giá sàn giao dịch và các thắc mắc liên quan.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="bg-secondary/40 border-y border-border py-16 md:py-20">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Zap className="text-primary" size={24} />}
                            title="Phản hồi nhanh"
                            description="Cam kết phản hồi trong vòng 24 giờ làm việc"
                        />
                        <FeatureCard
                            icon={<Shield className="text-accent" size={24} />}
                            title="Bảo mật thông tin"
                            description="Thông tin của bạn được bảo mật tuyệt đối"
                        />
                        <FeatureCard
                            icon={<Headphones className="text-primary" size={24} />}
                            title="Hỗ trợ chuyên nghiệp"
                            description="Đội ngũ chuyên gia giàu kinh nghiệm"
                        />
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="bg-secondary/30 py-20 md:py-28 border-t border-border">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-5 gap-16 max-w-7xl mx-auto">
                        {/* Contact Info - Left Side */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-2 font-heading">Thông tin liên hệ</h2>
                                <p className="text-muted-foreground">Liên hệ với chúng tôi qua các kênh sau</p>
                            </div>

                            <div className="space-y-5">
                                <ContactItem
                                    icon={<Mail size={20} />}
                                    label="Email"
                                    value="sanuytin.net@gmail.com"
                                    href="mailto:sanuytin.net@gmail.com"
                                />
                                <ContactItem
                                    icon={<Clock size={20} />}
                                    label="Giờ làm việc"
                                    value="24/7 - Luôn sẵn sàng"
                                />
                            </div>

                            {/* Social */}
                            <div className="pt-8 border-t border-border">
                                <p className="text-sm font-medium text-foreground mb-4">Theo dõi chúng tôi</p>
                                <div className="flex gap-3">
                                    <SocialButton href="#" label="Facebook">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                    </SocialButton>
                                    <SocialButton href="#" label="Telegram">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                                    </SocialButton>

                                </div>
                            </div>
                        </div>

                        {/* Contact Form - Right Side */}
                        <div className="lg:col-span-3">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Teaser */}
            <section className="bg-secondary py-20 md:py-24 border-t border-border">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <MessageCircle size={48} className="text-primary mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
                            Câu hỏi thường gặp
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Tìm câu trả lời nhanh cho các thắc mắc phổ biến về giao dịch Forex và dịch vụ của chúng tôi
                        </p>
                        <Link
                            href="/kien-thuc-forex"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl transition-colors"
                        >
                            Xem kiến thức Forex
                            <ChevronRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="flex items-start gap-4 p-6 bg-secondary rounded-2xl border border-border hover:border-primary/50 transition-all">
            <div className="p-3 bg-muted rounded-xl shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
    const content = (
        <div className="flex items-center gap-5 group p-5 bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/30 rounded-2xl transition-all">
            <div className="p-4 bg-muted group-hover:bg-primary/20 rounded-xl text-muted-foreground group-hover:text-primary transition-colors shrink-0">
                {icon}
            </div>
            <div>
                <p className="text-sm text-muted-foreground mb-1.5">{label}</p>
                <p className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">{value}</p>
            </div>
        </div>
    );

    if (href) {
        return <a href={href} className="block">{content}</a>;
    }
    return content;
}

function SocialButton({ children, href, label }: { children: React.ReactNode; href: string; label: string }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-muted text-muted-foreground hover:bg-primary hover:text-white transition-all hover:-translate-y-1"
        >
            {children}
        </a>
    );
}
