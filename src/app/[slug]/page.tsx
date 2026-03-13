import { brokers } from "@/data/brokers";
import AffiliateButton from "@/components/AffiliateButton";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import {
    CheckCircle2, XCircle, ShieldCheck, Globe, Calendar, CreditCard, Monitor,
    ChevronRight, Home, Star, Zap, Award, BookOpen, AlertCircle, Trophy, Wallet, Gauge, MapPin, Layers,
    HelpCircle, ArrowRight, Users, Clock, Landmark, BadgeCheck, TrendingUp, MessageCircle,
    Sparkles, Rocket, Shield, Gift, Smartphone, ArrowDown, ExternalLink
} from "lucide-react";
import UserRating from "@/components/UserRating";
import { getPosts } from "@/lib/supabase";

const _now = new Date();
const updateLabel = `${String(_now.getMonth() + 1).padStart(2, '0')}/${_now.getFullYear()}`;

export const dynamicParams = false;

export async function generateStaticParams() {
    return brokers.map((b) => ({
        slug: b.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const broker = brokers.find((b) => b.slug === slug);

    if (!broker) {
        return { title: "Không tìm thấy sàn - SanUyTin.net" };
    }

    const title = `Sàn ${broker.name} Có Uy Tín Không? Review Chi Tiết ${broker.score}/10 [Update 2026]`;
    const description = `✅ Đánh giá sàn ${broker.name} mới nhất 2026: Giấy phép ${broker.license} | Spread từ ${broker.avgSpread} | Nạp tối thiểu ${broker.minDep} | Đòn bẩy ${broker.maxLev}. Xem ngay ưu nhược điểm thực tế từ chuyên gia 10 năm kinh nghiệm.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `https://sanuytin.net/${broker.slug}/`,
            siteName: "Sàn Uy Tín",
            images: [{ url: broker.logo, width: 200, height: 200, alt: broker.name }],
            type: "article",
        },
        twitter: { card: "summary_large_image", title, description },
        alternates: { canonical: `https://sanuytin.net/${broker.slug}/` },
    };
}

// Generate FAQ for each broker
function generateFAQ(broker: typeof brokers[0]) {
    if (broker.faq && broker.faq.length > 0) return broker.faq;
    return [
        {
            question: `Sàn ${broker.name} có lừa đảo không?`,
            answer: `${broker.name} được cấp phép bởi ${broker.license}, hoạt động từ năm ${broker.foundedYear}. Sàn được đánh giá ${broker.score}/10 trên SanUyTin.net. Đây là sàn hoạt động hợp pháp với giấy phép quốc tế.`
        },
        {
            question: `Nạp tiền vào ${broker.name} tối thiểu bao nhiêu?`,
            answer: `Nạp tối thiểu tại ${broker.name} là ${broker.minDep}. Hỗ trợ ${broker.depositMethods?.join(', ') || 'Bank Transfer, Visa'}.`
        },
        {
            question: `Spread của ${broker.name} bao nhiêu?`,
            answer: `Spread trung bình từ ${broker.avgSpread}. Hoa hồng: ${broker.commission}. Đòn bẩy ${broker.maxLev}.`
        },
        {
            question: `${broker.name} hỗ trợ giao dịch trên nền tảng nào?`,
            answer: `${broker.name} hỗ trợ: ${broker.platforms?.join(', ') || 'MT4, MT5'}. Giao dịch trên web, desktop và mobile.`
        },
        {
            question: `Có nên giao dịch tại ${broker.name}?`,
            answer: `Với ${broker.score}/10 điểm uy tín, giấy phép ${broker.license}, ${broker.name} là lựa chọn ${broker.score >= 9.0 ? 'hàng đầu' : broker.score >= 8.0 ? 'tốt' : 'đáng cân nhắc'} cho trader Việt Nam.`
        }
    ];
}

export default async function BrokerLandingPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const broker = brokers.find((b) => b.slug === slug);

    if (!broker) return notFound();

    const faqItems = generateFAQ(broker);
    const relatedBrokers = brokers.filter(b => b.slug !== broker.slug).slice(0, 4);
    const licenseParts = broker.license.split(', ');

    // Fetch related blog posts
    let brokerPosts: any[] = [];
    try {
        const allPosts = await getPosts(true);
        brokerPosts = allPosts
            .filter((p: any) => {
                const lowerTitle = (p.title || '').toLowerCase();
                const lowerSlug = (p.slug || '').toLowerCase();
                const brokerLower = broker.name.toLowerCase();
                return lowerTitle.includes(brokerLower) || lowerSlug.includes(brokerLower);
            })
            .slice(0, 6);
    } catch (e) {
        console.error('Error fetching posts for broker page:', e);
    }

    // Schema.org
    const faqSchema = {
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question", "name": item.question,
            "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
    };
    const reviewSchema = {
        "@context": "https://schema.org", "@type": "Review",
        "itemReviewed": { "@type": "Organization", "name": broker.name, "url": broker.registerLink },
        "reviewRating": { "@type": "Rating", "ratingValue": broker.score, "bestRating": "10" },
        "author": { "@type": "Organization", "name": "SanUyTin.net" },
        "publisher": { "@type": "Organization", "name": "SanUyTin.net" }
    };
    const breadcrumbJsonLd = {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://sanuytin.net/" },
            { "@type": "ListItem", position: 2, name: `${broker.name}` },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <main className="min-h-screen bg-background relative overflow-hidden">

                {/* ==================== HERO SECTION ==================== */}
                <section className="relative pt-[100px] pb-16 md:pt-[120px] md:pb-24 overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(41,98,255,0.3),rgba(0,0,0,0))]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'30\' height=\'30\' viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 30L30 0H15L0 15M30 30V15L15 30\' fill=\'%23fff\' fill-opacity=\'1\'/%3E%3C/svg%3E")' }} />

                    <div className="container-custom max-w-6xl relative z-10">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-xs text-blue-300/60 mb-8">
                            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1"><Home size={12} /> Trang chủ</Link>
                            <ChevronRight size={12} />
                            <span className="text-blue-200">{broker.name}</span>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            {/* Left: Content */}
                            <div className="space-y-6 text-center lg:text-left">
                                {/* Badges */}
                                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                    <span className="px-3 py-1.5 bg-green-500/15 text-green-400 border border-green-500/25 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-sm">
                                        <CheckCircle2 size={12} /> Xác Minh 2026
                                    </span>
                                    <span className="px-3 py-1.5 bg-yellow-500/15 text-yellow-400 border border-yellow-500/25 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-sm">
                                        <Trophy size={12} /> Top #{broker.rank}
                                    </span>
                                    <span className="px-3 py-1.5 bg-blue-500/15 text-blue-300 border border-blue-500/25 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-sm">
                                        <Shield size={12} /> {licenseParts[0]}
                                    </span>
                                </div>

                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
                                    Giao Dịch Cùng{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                                        {broker.name}
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-blue-200/70 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                    {broker.score}/10 điểm uy tín · Giấy phép {broker.license} · Spread từ {broker.avgSpread} · Hơn {2026 - parseInt(broker.foundedYear)} năm hoạt động
                                </p>

                                {/* Hero Stats */}
                                <div className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
                                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-center">
                                        <div className="text-xl md:text-2xl font-black text-white">{broker.score}</div>
                                        <div className="text-[10px] text-blue-300/60 uppercase font-bold tracking-wider mt-1">Điểm Uy Tín</div>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-center">
                                        <div className="text-xl md:text-2xl font-black text-cyan-400">{broker.minDep}</div>
                                        <div className="text-[10px] text-blue-300/60 uppercase font-bold tracking-wider mt-1">Nạp Tối Thiểu</div>
                                    </div>
                                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 text-center">
                                        <div className="text-xl md:text-2xl font-black text-teal-400">{broker.maxLev}</div>
                                        <div className="text-[10px] text-blue-300/60 uppercase font-bold tracking-wider mt-1">Đòn Bẩy Max</div>
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
                                    <AffiliateButton slug={broker.slug} fallbackLink={broker.registerLink} />
                                    <a href="#overview" className="px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white font-bold text-center hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                                        <BookOpen size={18} /> Xem Đánh Giá
                                    </a>
                                </div>

                                <p className="text-xs text-blue-300/40 flex items-center gap-1 justify-center lg:justify-start">
                                    <ShieldCheck size={12} /> Đăng ký 2 phút · Không yêu cầu nạp tiền ngay
                                </p>
                            </div>

                            {/* Right: Logo + Visual */}
                            <div className="hidden lg:flex justify-center items-center relative">
                                <div className="relative w-80 h-80">
                                    {/* Glow ring */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-[40px] animate-pulse" />
                                    {/* Main logo container */}
                                    <div className="absolute inset-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl">
                                        <Image
                                            src={broker.logo}
                                            alt={broker.name}
                                            width={160}
                                            height={160}
                                            className="object-contain drop-shadow-2xl"
                                            priority
                                        />
                                    </div>
                                    {/* Floating badges */}
                                    <div className="absolute -top-2 -right-2 bg-green-500/90 text-white px-3 py-1.5 rounded-full text-xs font-black shadow-lg flex items-center gap-1 animate-bounce" style={{ animationDuration: '3s' }}>
                                        <Star size={12} fill="white" /> {broker.score}/10
                                    </div>
                                    <div className="absolute -bottom-2 -left-2 bg-blue-500/90 text-white px-3 py-1.5 rounded-full text-xs font-black shadow-lg flex items-center gap-1">
                                        <Shield size={12} /> {licenseParts[0]}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scroll indicator */}
                        <div className="flex justify-center mt-12 animate-bounce">
                            <ArrowDown size={20} className="text-blue-300/40" />
                        </div>
                    </div>
                </section>

                {/* ==================== TRUST INDICATORS BAR ==================== */}
                <section className="bg-card border-y border-border relative z-10">
                    <div className="container-custom max-w-6xl py-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-green-500/10 rounded-xl text-green-600 dark:text-green-400"><ShieldCheck size={22} /></div>
                                <div>
                                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Giấy phép</div>
                                    <div className="font-bold text-foreground text-sm">{licenseParts.slice(0, 2).join(', ')}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400"><Calendar size={22} /></div>
                                <div>
                                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Thành lập</div>
                                    <div className="font-bold text-foreground text-sm">{broker.foundedYear} ({2026 - parseInt(broker.foundedYear)} năm)</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-600 dark:text-purple-400"><Monitor size={22} /></div>
                                <div>
                                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Nền tảng</div>
                                    <div className="font-bold text-foreground text-sm">{broker.platforms?.slice(0, 3).join(', ')}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 bg-yellow-500/10 rounded-xl text-yellow-600 dark:text-yellow-400"><MapPin size={22} /></div>
                                <div>
                                    <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Trụ sở</div>
                                    <div className="font-bold text-foreground text-sm">{broker.headquarters}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container-custom max-w-6xl py-16 space-y-16 relative z-10">

                    {/* ==================== WHY CHOOSE + PROS/CONS ==================== */}
                    <section id="overview" className="scroll-mt-28">
                        <div className="text-center mb-10">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">TẠI SAO CHỌN {broker.name.toUpperCase()}</span>
                            <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3">
                                Đánh Giá <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">{broker.name}</span> Có Uy Tín Không?
                            </h2>
                            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                                Phân tích ưu nhược điểm chi tiết dựa trên dữ liệu thực tế, giúp bạn đưa ra quyết định đúng đắn.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Pros */}
                            <div className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border border-green-500/20 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                                <div className="absolute top-4 right-4 opacity-5"><CheckCircle2 size={100} /></div>
                                <h3 className="text-lg font-black flex items-center gap-2 text-green-600 dark:text-green-400 mb-5 uppercase tracking-wider">
                                    <CheckCircle2 size={20} /> Điểm Mạnh
                                </h3>
                                <ul className="space-y-4">
                                    {broker.pros?.map((pro, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-0.5 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                                                <CheckCircle2 size={14} className="text-green-500" />
                                            </div>
                                            <span className="text-sm font-medium text-foreground/90 leading-relaxed">{pro}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* Cons */}
                            <div className="bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                                <div className="absolute top-4 right-4 opacity-5"><XCircle size={100} /></div>
                                <h3 className="text-lg font-black flex items-center gap-2 text-red-600 dark:text-red-400 mb-5 uppercase tracking-wider">
                                    <XCircle size={20} /> Điểm Yếu
                                </h3>
                                <ul className="space-y-4">
                                    {broker.cons?.map((con, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-0.5 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                                                <XCircle size={14} className="text-red-500" />
                                            </div>
                                            <span className="text-sm font-medium text-foreground/90 leading-relaxed">{con}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* ==================== KEY FEATURES / HIGHLIGHTS ==================== */}
                    <section className="scroll-mt-28">
                        <div className="text-center mb-10">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">ĐIỂM NỔI BẬT</span>
                            <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3">Vì Sao Trader Chọn {broker.name}?</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {broker.features.map((feature, i) => {
                                const icons = [<Zap key="z" size={24} />, <Shield key="s" size={24} />, <Rocket key="r" size={24} />, <Award key="a" size={24} />, <Users key="u" size={24} />, <Globe key="g" size={24} />];
                                const colors = ['from-blue-500/10 to-cyan-500/10 border-blue-500/20', 'from-green-500/10 to-emerald-500/10 border-green-500/20', 'from-purple-500/10 to-pink-500/10 border-purple-500/20', 'from-yellow-500/10 to-orange-500/10 border-yellow-500/20', 'from-cyan-500/10 to-teal-500/10 border-cyan-500/20', 'from-indigo-500/10 to-blue-500/10 border-indigo-500/20'];
                                const textColors = ['text-blue-500', 'text-green-500', 'text-purple-500', 'text-yellow-500', 'text-cyan-500', 'text-indigo-500'];
                                return (
                                    <div key={i} className={`bg-gradient-to-br ${colors[i % 6]} border rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300`}>
                                        <div className={`${textColors[i % 6]} mb-3`}>{icons[i % 6]}</div>
                                        <h3 className="font-bold text-foreground text-lg">{feature}</h3>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* ==================== FEE TABLE ==================== */}
                    <section id="fees" className="scroll-mt-28">
                        <div className="text-center mb-10">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">PHÍ GIAO DỊCH</span>
                            <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3">Chi Phí Giao Dịch {broker.name}</h2>
                        </div>
                        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-primary/10 to-cyan-500/10 border-b border-border">
                                            <th className="p-4 text-left font-bold text-foreground">Loại phí</th>
                                            <th className="p-4 text-left font-bold text-foreground">Chi Tiết</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border/50">
                                        <tr className="hover:bg-secondary/20 transition-colors">
                                            <td className="p-4 font-medium text-muted-foreground flex items-center gap-2"><TrendingUp size={14} className="text-primary" /> Spread trung bình</td>
                                            <td className="p-4 font-black text-primary text-lg">{broker.avgSpread}</td>
                                        </tr>
                                        <tr className="hover:bg-secondary/20 transition-colors">
                                            <td className="p-4 font-medium text-muted-foreground flex items-center gap-2"><Wallet size={14} className="text-primary" /> Hoa hồng</td>
                                            <td className={`p-4 font-bold text-lg ${broker.commission === 'Không phí' ? 'text-green-500' : 'text-foreground'}`}>{broker.commission}</td>
                                        </tr>
                                        <tr className="hover:bg-secondary/20 transition-colors">
                                            <td className="p-4 font-medium text-muted-foreground flex items-center gap-2"><CreditCard size={14} className="text-primary" /> Nạp tối thiểu</td>
                                            <td className="p-4 font-bold text-lg text-foreground">{broker.minDep}</td>
                                        </tr>
                                        <tr className="hover:bg-secondary/20 transition-colors">
                                            <td className="p-4 font-medium text-muted-foreground flex items-center gap-2"><Gauge size={14} className="text-primary" /> Đòn bẩy tối đa</td>
                                            <td className="p-4 font-bold text-lg text-foreground">{broker.maxLev}</td>
                                        </tr>
                                        <tr className="hover:bg-secondary/20 transition-colors">
                                            <td className="p-4 font-medium text-muted-foreground flex items-center gap-2"><Layers size={14} className="text-primary" /> Nền tảng</td>
                                            <td className="p-4 font-bold text-foreground">{broker.platforms?.join(', ')}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* ==================== HOW TO OPEN ACCOUNT ==================== */}
                    <section id="open-account" className="scroll-mt-28">
                        <div className="text-center mb-10">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">HƯỚNG DẪN</span>
                            <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3">Mở Tài Khoản {broker.name} Chỉ 3 Bước</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { step: '01', title: 'Đăng Ký', desc: `Truy cập ${broker.name} → Nhấn "Mở tài khoản". Điền họ tên, email, số điện thoại. Chỉ mất 2 phút.`, icon: <Rocket size={28} />, color: 'from-blue-500 to-cyan-500' },
                                { step: '02', title: 'Xác Minh', desc: 'Upload CMND/CCCD + ảnh selfie. Hệ thống tự động phê duyệt trong 1-2 giờ.', icon: <ShieldCheck size={28} />, color: 'from-green-500 to-emerald-500' },
                                { step: '03', title: 'Nạp & Giao Dịch', desc: `Nạp từ ${broker.minDep} qua Internet Banking. Tải MT4/MT5, đăng nhập và bắt đầu giao dịch!`, icon: <TrendingUp size={28} />, color: 'from-purple-500 to-pink-500' },
                            ].map((item, i) => (
                                <div key={i} className="relative group">
                                    <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/5 h-full">
                                        {/* Step number */}
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} text-white mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                                            {item.icon}
                                        </div>
                                        <div className="text-xs font-black text-muted-foreground mb-1 uppercase tracking-widest">Bước {item.step}</div>
                                        <h3 className="text-xl font-black text-foreground mb-3">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                    {/* Arrow connector */}
                                    {i < 2 && (
                                        <div className="hidden md:block absolute top-1/2 -right-3 z-10 text-muted-foreground/30">
                                            <ArrowRight size={24} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        {/* CTA after steps */}
                        <div className="mt-8 text-center">
                            <div className="inline-block w-full max-w-md">
                                <AffiliateButton slug={broker.slug} fallbackLink={broker.registerLink} />
                            </div>
                            <p className="text-xs text-muted-foreground mt-3">Miễn phí đăng ký · Có tài khoản Demo để tập luyện</p>
                        </div>
                    </section>

                    {/* ==================== DEPOSIT METHODS ==================== */}
                    <section className="scroll-mt-28">
                        <div className="text-center mb-10">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">NẠP & RÚT TIỀN</span>
                            <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3">Phương Thức Thanh Toán</h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {(broker.depositMethods || ['Bank Transfer', 'Visa']).map((method, i) => (
                                <div key={i} className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/50 hover:shadow-lg transition-all group">
                                    <div className="p-3 bg-primary/5 rounded-xl inline-flex mb-3 group-hover:bg-primary/10 transition-colors">
                                        <CreditCard size={24} className="text-primary" />
                                    </div>
                                    <div className="font-bold text-foreground text-sm">{method}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* ==================== RELATED BLOG POSTS ==================== */}
                    {brokerPosts.length > 0 && (
                        <section className="scroll-mt-28">
                            <div className="text-center mb-10">
                                <span className="text-xs font-bold text-primary uppercase tracking-widest">TÌM HIỂU THÊM</span>
                                <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3">Bài Viết Về {broker.name}</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {brokerPosts.map((post) => (
                                    <Link
                                        key={post.id}
                                        href={`/tin-tuc/${post.slug}/`}
                                        className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all group"
                                    >
                                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm leading-relaxed line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
                                        <span className="text-xs text-primary font-bold mt-3 inline-flex items-center gap-1">
                                            Đọc thêm <ChevronRight size={12} />
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* ==================== FAQ ==================== */}
                    <section id="faq" className="scroll-mt-28">
                        <div className="text-center mb-10">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">CÂU HỎI THƯỜNG GẶP</span>
                            <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3">FAQ về {broker.name}</h2>
                        </div>
                        <div className="max-w-3xl mx-auto space-y-3">
                            {faqItems.map((item, i) => (
                                <details
                                    key={i}
                                    className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
                                    {...(i === 0 ? { open: true } : {})}
                                >
                                    <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer hover:bg-secondary/30 transition-colors font-bold text-foreground">
                                        <span className="flex items-center gap-3">
                                            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-black text-xs shrink-0">Q{i + 1}</span>
                                            <span className="text-sm md:text-base">{item.question}</span>
                                        </span>
                                        <ChevronRight size={16} className="transition-transform group-open:rotate-90 shrink-0 text-muted-foreground" />
                                    </summary>
                                    <div className="px-5 pb-5 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-border/50">
                                        <p className="pt-4 pl-11">{item.answer}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* ==================== USER RATING ==================== */}
                    <UserRating targetSlug={broker.slug} title={`Đánh giá sàn ${broker.name}`} />

                    {/* ==================== RELATED BROKERS ==================== */}
                    <section id="related" className="scroll-mt-28">
                        <div className="text-center mb-10">
                            <span className="text-xs font-bold text-primary uppercase tracking-widest">CÁC SÀN KHÁC</span>
                            <h2 className="text-3xl md:text-4xl font-black text-foreground mt-3">Sàn Forex Tương Tự</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {relatedBrokers.map((b) => (
                                <Link
                                    key={b.id}
                                    href={`/${b.slug}/`}
                                    className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all group text-center"
                                >
                                    <img src={b.logo} alt={b.name} className="w-16 h-16 object-contain rounded-xl bg-white border border-border/50 mx-auto mb-3" loading="lazy" />
                                    <div className="font-bold text-foreground group-hover:text-primary transition-colors">{b.name}</div>
                                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-2">
                                        <span className="flex items-center gap-1"><Star size={10} fill="currentColor" className="text-yellow-500" /> {b.score}</span>
                                        <span>·</span>
                                        <span>{b.minDep}</span>
                                    </div>
                                    <span className="text-xs text-primary font-bold mt-3 inline-flex items-center gap-1">
                                        Xem chi tiết <ChevronRight size={12} />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>

                {/* ==================== FINAL CTA BANNER ==================== */}
                <section className="relative py-20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(41,98,255,0.15),rgba(0,0,0,0))]" />
                    <div className="container-custom max-w-3xl relative z-10 text-center space-y-6">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-bold text-white">
                            <Sparkles size={16} className="text-yellow-400" /> Bắt đầu giao dịch cùng {broker.name}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                            Sẵn Sàng Mở Tài Khoản?
                        </h2>
                        <p className="text-blue-200/70 text-lg max-w-xl mx-auto">
                            Đăng ký miễn phí trong 2 phút. Nạp chỉ từ {broker.minDep}. Bắt đầu với tài khoản Demo để tập luyện!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-4">
                            <AffiliateButton slug={broker.slug} fallbackLink={broker.registerLink} />
                        </div>
                        <p className="text-xs text-blue-300/40 pt-2">
                            ⚠️ Giao dịch Forex có rủi ro cao. Chỉ đầu tư số tiền bạn chấp nhận mất. Cập nhật {updateLabel}.
                        </p>
                    </div>
                </section>

            </main>
        </>
    );
}
