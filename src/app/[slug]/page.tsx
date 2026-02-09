import { brokers } from "@/data/brokers";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
    CheckCircle2, XCircle, ShieldCheck, Globe, Calendar, CreditCard, Monitor,
    ChevronRight, Home, Star, Zap, Award, BookOpen, AlertCircle, Trophy, Wallet, Gauge, MapPin, Layers
} from "lucide-react";

export async function generateStaticParams() {
    return brokers.map((broker) => ({
        slug: broker.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const broker = brokers.find((b) => b.slug === slug);

    if (!broker) {
        return {
            title: "Broker Not Found",
        };
    }

    const title = `Đánh giá sàn ${broker.name} 2026: Uy tín hay Lừa đảo? Review chi tiết`;
    const description = `Review chi tiết sàn ${broker.name} mới nhất 2026. Phân tích giấy phép ${broker.license}, spread ${broker.avgSpread}, nạp rút và nền tảng giao dịch. Có nên đầu tư tại ${broker.name}?`;

    return {
        title,
        description,
        keywords: [
            `${broker.name} có uy tín không`,
            `đánh giá ${broker.name}`,
            `review ${broker.name}`,
            `${broker.name} lừa đảo`,
            `${broker.name} việt nam`,
            "sàn forex uy tín",
        ],
        openGraph: {
            title,
            description,
            type: "article",
            locale: "vi_VN",
            url: `https://sanuytin.net/${broker.slug}`,
            siteName: "Sàn Uy Tín",
            images: [
                {
                    url: broker.logo,
                    width: 400,
                    height: 400,
                    alt: `Logo ${broker.name}`,
                },
            ],
        },
        twitter: {
            card: "summary",
            title,
            description,
            images: [broker.logo],
        },
        alternates: {
            canonical: `https://sanuytin.net/${broker.slug}`,
        },
    };
}

export default async function BrokerReviewPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const broker = brokers.find((b) => b.slug === slug);

    if (!broker) {
        return notFound();
    }

    return (
        <div className="bg-background min-h-screen pb-20 pt-[120px] md:pt-[220px]" style={{ paddingTop: '160px' }}>
            {/* 1. Breadcrumb - Clean & Simple */}
            <div className="bg-secondary/30">
                <div className="container-custom max-w-7xl py-3">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground overflow-x-auto whitespace-nowrap scrollbar-hide">
                        <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                            <Home size={14} /> Trang chủ
                        </Link>
                        <ChevronRight size={14} className="shrink-0" />
                        <Link href="/danh-gia-san" className="hover:text-primary transition-colors">
                            Review Sàn
                        </Link>
                        <ChevronRight size={14} className="shrink-0" />
                        <span className="text-foreground font-medium truncate">Đánh giá {broker.name}</span>
                    </div>
                </div>
            </div>

            {/* 2. Premium Hero Section */}
            <section className="relative bg-gradient-to-b from-background to-secondary/30 border-b border-border/50 pt-8 pb-12 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -mr-32 -mt-32" />

                <div className="container-custom max-w-7xl relative z-10">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
                        {/* Logo Card */}
                        <div className="relative shrink-0">
                            <div className="w-28 h-28 md:w-40 md:h-40 flex items-center justify-center z-20 relative">
                                <img src={broker.logo} alt={broker.name} className="w-full h-full object-contain drop-shadow-xl rounded-2xl" />
                            </div>
                        </div>

                        {/* Hero Content */}
                        <div className="flex-1 space-y-4">
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1.5">
                                    <CheckCircle2 size={12} /> Verified 2026
                                </span>
                                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1.5">
                                    <Award size={12} /> Top {broker.rank} Ranking
                                </span>
                            </div>

                            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
                                Đánh giá sàn {broker.name}
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                                Review chi tiết pháp lý, phí giao dịch, nạp rút và độ uy tín của sàn {broker.name}. Cập nhật mới nhất tháng 01/2026.
                            </p>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap gap-4 md:gap-8 pt-2">
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-green-500/10 rounded-lg text-green-600 dark:text-green-500"><ShieldCheck size={20} /></div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase text-muted-foreground font-bold">Giấy phép</span>
                                        <span className="text-sm font-bold text-foreground">{broker.license.split(',')[0]}...</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500"><Star size={20} /></div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase text-muted-foreground font-bold">Điểm tín nhiệm</span>
                                        <span className="text-sm font-bold text-foreground">{broker.score}/10</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500"><Calendar size={20} /></div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase text-muted-foreground font-bold">Thành lập</span>
                                        <span className="text-sm font-bold text-foreground">{broker.foundedYear}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-custom max-w-7xl py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* 3. Left Content Column (Main Review) */}
                    <div className="lg:col-span-8 space-y-10">
                        {/* Summary Box */}
                        <div id="overview" className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-5">
                                <BookOpen size={120} />
                            </div>
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <AlertCircle className="text-primary" /> Tổng quan nhanh
                            </h2>
                            <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                                <p>
                                    <strong>{broker.name}</strong> là một trong những sàn giao dịch được cộng đồng trader Việt Nam quan tâm nhất hiện nay.
                                    Với điểm số tín nhiệm <strong>{broker.score}/10</strong>, sàn này nổi bật nhờ {broker.features.join(", ").toLowerCase()}.
                                    Dưới đây là phân tích chi tiết các khía cạnh quan trọng nhất để bạn quyết định có nên "xuống tiền" hay không.
                                </p>
                            </div>
                        </div>

                        {/* Pros & Cons - Modernized */}
                        <div id="pros-cons" className="grid md:grid-cols-2 gap-6">
                            <div className="bg-accent/5 dark:bg-accent/10 border border-accent/20 rounded-2xl p-6">
                                <h3 className="text-lg font-bold flex items-center gap-2 text-accent dark:text-accent mb-4 uppercase tracking-wider">
                                    <CheckCircle2 size={20} /> Điểm Cộng
                                </h3>
                                <ul className="space-y-3">
                                    {broker.pros?.map((pro, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                            <span className="text-sm font-medium text-foreground/90">{pro}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-destructive/5 dark:bg-destructive/10 border border-destructive/20 rounded-2xl p-6">
                                <h3 className="text-lg font-bold flex items-center gap-2 text-destructive dark:text-destructive mb-4 uppercase tracking-wider">
                                    <XCircle size={20} /> Điểm Trừ
                                </h3>
                                <ul className="space-y-3">
                                    {broker.cons?.map((con, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-destructive shrink-0" />
                                            <span className="text-sm font-medium text-foreground/90">{con}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Detailed Content Render */}
                        <div id="detailed-review" className="bg-background rounded-2xl">
                            <article className="prose dark:prose-invert prose-lg max-w-none 
                                prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
                                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border/40 prose-h2:pb-2
                                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-primary
                                prose-p:text-muted-foreground prose-p:leading-8 prose-p:mb-6
                                prose-li:text-muted-foreground prose-li:marker:text-primary
                                prose-strong:text-foreground prose-strong:font-bold
                                prose-table:border prose-table:border-border/50 prose-table:rounded-lg prose-table:overflow-hidden
                                prose-th:bg-secondary/30 prose-th:p-3 prose-th:text-foreground
                                prose-td:p-3 prose-td:border-b prose-td:border-border/50
                                prose-img:rounded-xl prose-img:shadow-md">
                                <div dangerouslySetInnerHTML={{ __html: broker.longDescription || "" }} />
                            </article>
                        </div>
                    </div>

                    {/* 4. Right Sidebar (Sticky) */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-28 space-y-6">

                            {/* Score Card */}
                            <div className="bg-card dark:bg-card/40 backdrop-blur-md rounded-2xl border border-border shadow-lg p-6 text-center space-y-6">
                                <div className="space-y-2">
                                    <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Điểm uy tín</div>
                                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-[6px] border-primary/20 bg-background relative">
                                        <span className="text-3xl font-black text-primary">{broker.score}</span>
                                        <div className="absolute inset-0 rounded-full border-[6px] border-transparent border-t-primary border-r-primary rotate-45" />
                                    </div>
                                    <div className="flex justify-center text-yellow-400 gap-1 pt-2">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                                    </div>
                                </div>

                                <div className="space-y-3 pt-4 border-t border-border">
                                    <a
                                        href={broker.registerLink}
                                        target="_blank"
                                        rel="nofollow noreferrer"
                                        className="w-full py-4 text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 flex items-center justify-center gap-2 rounded-xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400 text-white transition-all"
                                    >
                                        Mở Tài Khoản <ChevronRight size={18} />
                                    </a>
                                    <p className="text-xs text-muted-foreground">
                                        Đăng ký trong 2 phút. Không yêu cầu nạp tiền ngay.
                                    </p>
                                </div>
                            </div>

                            {/* Info Table in Sidebar */}
                            <div className="bg-secondary/30 rounded-2xl border border-border p-5">
                                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Zap size={16} className="text-yellow-500" /> Thông tin sàn
                                </h4>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between items-center pb-2 border-b border-border/50">
                                        <span className="text-muted-foreground flex items-center gap-2">
                                            <Wallet size={14} className="text-primary" /> Nạp tối thiểu
                                        </span>
                                        <span className="font-bold text-foreground">{broker.minDep}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b border-border/50">
                                        <span className="text-muted-foreground flex items-center gap-2">
                                            <Gauge size={14} className="text-primary" /> Đòn bẩy
                                        </span>
                                        <span className="font-bold text-foreground">{broker.maxLev}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-2 border-b border-border/50">
                                        <span className="text-muted-foreground flex items-center gap-2">
                                            <MapPin size={14} className="text-primary" /> Trụ sở
                                        </span>
                                        <span className="font-bold text-foreground text-right max-w-[150px] truncate">{broker.headquarters}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-muted-foreground flex items-center gap-2">
                                            <Layers size={14} className="text-primary" /> Nền tảng
                                        </span>
                                        <span className="font-bold text-foreground overflow-hidden text-right max-w-[150px] truncate">
                                            {broker.platforms?.join(", ")}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Top Rated Brokers Widget (Internal Linking) */}
                            <div className="bg-card dark:bg-card/40 backdrop-blur-md rounded-2xl border border-border p-5">
                                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                                    <Trophy size={16} className="text-yellow-500" /> Sàn Forex Uy Tín
                                </h4>
                                <div className="space-y-4">
                                    {brokers.slice(0, 5).map((b, i) => (
                                        <a
                                            key={b.id}
                                            href={`../${b.slug}/`}
                                            className="flex items-center gap-3 group hover:bg-secondary/50 p-2 -mx-2 rounded-lg transition-colors"
                                        >
                                            <div className={`
                                                w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                                                ${i === 0 ? 'bg-yellow-500 text-white' :
                                                    i === 1 ? 'bg-gray-300 text-gray-700' :
                                                        i === 2 ? 'bg-orange-400 text-white' : 'bg-secondary text-muted-foreground'}
                                           `}>
                                                {i + 1}
                                            </div>
                                            <img src={b.logo} alt={b.name} className="w-8 h-8 object-contain rounded-md bg-white border border-border/50" />
                                            <div className="flex-1 min-w-0">
                                                <div className="font-bold text-sm text-foreground group-hover:text-primary truncate">{b.name}</div>
                                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                    <Star size={10} fill="currentColor" className="text-yellow-500" /> {b.score.toFixed(1)}
                                                </div>
                                            </div>
                                            <ChevronRight size={14} className="text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                                        </a>
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t border-border">
                                    <Link href="/" className="text-xs font-bold text-primary hover:underline flex items-center justify-center">
                                        Xem bảng xếp hạng đầy đủ <ChevronRight size={12} />
                                    </Link>
                                </div>
                            </div>

                            {/* Toc (Table of Contents) */}
                            <div className="hidden lg:block p-4 border-l-2 border-border/50 pl-6">
                                <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">Nội dung chính</h4>
                                <nav className="flex flex-col gap-3 text-sm">
                                    <a href="#overview" className="text-muted-foreground hover:text-primary transition-colors">Tổng quan</a>
                                    <a href="#pros-cons" className="text-muted-foreground hover:text-primary transition-colors">Ưu điểm & Nhược điểm</a>
                                    <a href="#detailed-review" className="text-muted-foreground hover:text-primary transition-colors">Đánh giá chi tiết</a>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
