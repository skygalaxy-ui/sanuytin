import { brokers } from "@/data/brokers";
import AffiliateButton from "@/components/AffiliateButton";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
    CheckCircle2, XCircle, ShieldCheck, Globe, Calendar, CreditCard, Monitor,
    ChevronRight, Home, Star, Zap, Award, BookOpen, AlertCircle, Trophy, Wallet, Gauge, MapPin, Layers,
    HelpCircle, ArrowRight, Users, Clock, Landmark, CpuIcon, BadgeCheck, TrendingUp, MessageCircle
} from "lucide-react";
import ReadingProgress from "@/components/ReadingProgress";

export async function generateStaticParams() {
    return brokers.map((b) => ({
        slug: b.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const broker = brokers.find((b) => b.slug === slug);

    if (!broker) {
        return { title: "Không tìm thấy sàn - SanUyTin.net" };
    }

    const title = `Đánh giá sàn ${broker.name} 2026: Uy tín hay Lừa đảo? Review chi tiết | Sàn Uy Tín`;
    const description = `Review chi tiết sàn ${broker.name} 2026: pháp lý ${broker.license}, spread từ ${broker.avgSpread}, nạp tối thiểu ${broker.minDep}, đòn bẩy ${broker.maxLev}. Đánh giá ưu nhược điểm, hướng dẫn mở tài khoản.`;

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
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
        alternates: {
            canonical: `https://sanuytin.net/${broker.slug}/`,
        },
    };
}

// Generate rich content sections for brokers with minimal longDescription
function generateRichContent(broker: typeof brokers[0]) {
    // If broker already has rich content (>500 chars), use it as-is
    if (broker.longDescription && broker.longDescription.length > 500) {
        return broker.longDescription;
    }

    const licenseParts = broker.license.split(', ');
    const platformList = broker.platforms?.join(', ') || 'MT4, MT5';
    const depositList = broker.depositMethods?.join(', ') || 'Bank Transfer, Visa';

    return `
        <div class="space-y-8">
            <div>
                <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                    <span class="text-primary">01.</span> Tại Sao Chọn ${broker.name}?
                </h3>
                <p class="mb-3 text-muted-foreground leading-relaxed">
                    <strong>${broker.name}</strong> là sàn giao dịch Forex được thành lập năm ${broker.foundedYear} tại ${broker.headquarters}. 
                    Với giấy phép từ ${broker.license}, sàn này được đánh giá <strong>${broker.score}/10</strong> điểm uy tín 
                    trên SanUyTin.net. ${broker.name} nổi bật nhờ ${broker.features.join(', ').toLowerCase()}.
                </p>
                <div class="bg-card p-4 rounded-xl border border-border shadow-sm">
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div class="text-center">
                            <div class="text-2xl font-black text-primary">${broker.score}</div>
                            <div class="text-xs text-muted-foreground mt-1">Điểm Uy Tín</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-black text-foreground">${broker.foundedYear}</div>
                            <div class="text-xs text-muted-foreground mt-1">Năm Thành Lập</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-black text-foreground">${broker.maxLev}</div>
                            <div class="text-xs text-muted-foreground mt-1">Đòn Bẩy Tối Đa</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-black text-green-500">${broker.minDep}</div>
                            <div class="text-xs text-muted-foreground mt-1">Nạp Tối Thiểu</div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                    <span class="text-primary">02.</span> Pháp Lý & Giấy Phép
                </h3>
                <p class="mb-3 text-muted-foreground leading-relaxed">
                    ${broker.name} hoạt động dưới sự quản lý của ${licenseParts.length} cơ quan tài chính quốc tế: <strong>${broker.license}</strong>. 
                    Đây là các giấy phép uy tín trong ngành Forex, đảm bảo quyền lợi của trader được bảo vệ theo quy định pháp luật quốc tế.
                </p>
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse text-sm rounded-lg overflow-hidden border border-border/50">
                        <thead class="bg-secondary/50 text-foreground">
                            <tr>
                                <th class="p-3 text-left">Giấy Phép</th>
                                <th class="p-3 text-left">Loại</th>
                                <th class="p-3 text-left">Đánh giá</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border/50">
                            ${licenseParts.map(l => `
                                <tr>
                                    <td class="p-3 font-bold">${l.trim()}</td>
                                    <td class="p-3">Quốc tế</td>
                                    <td class="p-3 text-green-500 font-bold">✓ Uy tín</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                    <span class="text-primary">03.</span> Phí Giao Dịch
                </h3>
                <p class="mb-3 text-muted-foreground leading-relaxed">
                    ${broker.name} cung cấp mức spread trung bình từ <strong>${broker.avgSpread}</strong> và phí hoa hồng 
                    <strong>${broker.commission}</strong>. So với các sàn cùng phân khúc, mức phí này ${parseFloat(broker.avgSpread) <= 1.0 ? 'khá cạnh tranh' : 'ở mức trung bình'}.
                </p>
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse text-sm rounded-lg overflow-hidden border border-border/50">
                        <thead class="bg-secondary/50 text-foreground">
                            <tr>
                                <th class="p-3 text-left">Loại Phí</th>
                                <th class="p-3 text-left">Chi Tiết</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-border/50">
                            <tr>
                                <td class="p-3 font-medium">Spread trung bình</td>
                                <td class="p-3 font-bold text-primary">${broker.avgSpread}</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-medium">Hoa hồng</td>
                                <td class="p-3 font-bold ${broker.commission === 'Không phí' ? 'text-green-500' : 'text-foreground'}">${broker.commission}</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-medium">Nạp tối thiểu</td>
                                <td class="p-3 font-bold">${broker.minDep}</td>
                            </tr>
                            <tr>
                                <td class="p-3 font-medium">Đòn bẩy tối đa</td>
                                <td class="p-3 font-bold">${broker.maxLev}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                    <span class="text-primary">04.</span> Nền Tảng Giao Dịch
                </h3>
                <p class="mb-3 text-muted-foreground leading-relaxed">
                    ${broker.name} hỗ trợ các nền tảng giao dịch: <strong>${platformList}</strong>. 
                    Trader có thể trải nghiệm giao dịch trên cả web, desktop và ứng dụng di động.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-${Math.min(broker.platforms?.length || 2, 3)} gap-3">
                    ${(broker.platforms || ['MT4', 'MT5']).map(p => `
                        <div class="bg-card p-4 rounded-xl border border-border text-center hover:border-primary/50 transition-colors">
                            <div class="text-primary mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-auto"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
                            </div>
                            <div class="font-bold text-sm text-foreground">${p}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div>
                <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                    <span class="text-primary">05.</span> Nạp & Rút Tiền
                </h3>
                <p class="mb-3 text-muted-foreground leading-relaxed">
                    ${broker.name} hỗ trợ nhiều phương thức nạp/rút tiền phổ biến tại Việt Nam bao gồm: <strong>${depositList}</strong>. 
                    Yêu cầu nạp tối thiểu chỉ <strong>${broker.minDep}</strong>, phù hợp cho cả trader mới.
                </p>
                <ul class="space-y-2">
                    ${(broker.depositMethods || ['Bank Transfer', 'Visa']).map(m => `
                        <li class="flex items-start gap-2">
                            <span class="text-primary font-bold mt-0.5">✓</span>
                            <span class="text-muted-foreground">${m}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div>
                <h3 class="text-xl font-bold text-foreground flex items-center gap-2 mb-3">
                    <span class="text-primary">06.</span> Kết Luận
                </h3>
                <p class="mb-3 text-muted-foreground leading-relaxed">
                    Với điểm uy tín <strong>${broker.score}/10</strong>, ${broker.name} là sàn giao dịch đáng tin cậy 
                    cho trader Việt Nam. Sàn được quản lý bởi ${broker.license} và hoạt động từ năm ${broker.foundedYear}. 
                    ${broker.score >= 9.0 ? 'Đây là lựa chọn hàng đầu mà SanUyTin.net khuyên dùng.' :
            broker.score >= 8.0 ? 'Đây là lựa chọn tốt cho trader đã có kinh nghiệm.' :
                'Trader nên cân nhắc kỹ trước khi đầu tư.'}
                </p>
                <div class="bg-card p-4 rounded-xl border border-primary/30">
                    <div class="flex items-center gap-3">
                        <div class="bg-primary/10 p-3 rounded-full text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        </div>
                        <div>
                            <div class="font-bold text-foreground">Đánh giá: ${broker.score >= 9.0 ? 'Rất Tốt' : broker.score >= 8.0 ? 'Tốt' : 'Trung bình'}</div>
                            <div class="text-sm text-muted-foreground">Xếp hạng #${broker.rank} trên SanUyTin.net</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Generate FAQ for brokers
function generateFAQ(broker: typeof brokers[0]) {
    if (broker.faq && broker.faq.length > 0) {
        return broker.faq;
    }
    // Auto-generate FAQ
    return [
        {
            question: `Sàn ${broker.name} có lừa đảo không?`,
            answer: `${broker.name} là sàn giao dịch được cấp phép bởi ${broker.license}, hoạt động từ năm ${broker.foundedYear}. Sàn được đánh giá ${broker.score}/10 điểm uy tín trên SanUyTin.net. Đây là sàn hoạt động hợp pháp và được quản lý chặt chẽ.`
        },
        {
            question: `Nạp tiền vào ${broker.name} tối thiểu bao nhiêu?`,
            answer: `Yêu cầu nạp tối thiểu tại ${broker.name} là ${broker.minDep}. Sàn hỗ trợ nhiều phương thức thanh toán phổ biến tại Việt Nam bao gồm ${broker.depositMethods?.join(', ') || 'Bank Transfer, Visa'}.`
        },
        {
            question: `Spread của sàn ${broker.name} là bao nhiêu?`,
            answer: `Spread trung bình tại ${broker.name} từ ${broker.avgSpread}. Phí hoa hồng: ${broker.commission}. Đòn bẩy tối đa ${broker.maxLev}.`
        },
        {
            question: `${broker.name} hỗ trợ nền tảng giao dịch nào?`,
            answer: `${broker.name} hỗ trợ các nền tảng: ${broker.platforms?.join(', ') || 'MT4, MT5'}. Trader có thể giao dịch trên cả web, desktop và ứng dụng di động.`
        },
        {
            question: `Có nên giao dịch tại sàn ${broker.name}?`,
            answer: `Với điểm uy tín ${broker.score}/10, giấy phép ${broker.license}, và hoạt động từ ${broker.foundedYear}, ${broker.name} là lựa chọn ${broker.score >= 9.0 ? 'rất tốt' : broker.score >= 8.0 ? 'tốt' : 'đáng cân nhắc'} cho trader Việt Nam. Tuy nhiên, bạn nên tự nghiên cứu kỹ trước khi quyết định.`
        }
    ];
}

export default async function BrokerReviewPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const broker = brokers.find((b) => b.slug === slug);

    if (!broker) {
        return notFound();
    }

    const richContent = generateRichContent(broker);
    const faqItems = generateFAQ(broker);
    const relatedBrokers = brokers.filter(b => b.slug !== broker.slug).slice(0, 4);

    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    // Review Schema
    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Review",
        "itemReviewed": {
            "@type": "Organization",
            "name": broker.name,
            "url": broker.registerLink
        },
        "reviewRating": {
            "@type": "Rating",
            "ratingValue": broker.score,
            "bestRating": "10"
        },
        "author": {
            "@type": "Organization",
            "name": "SanUyTin.net"
        },
        "publisher": {
            "@type": "Organization",
            "name": "SanUyTin.net"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />

            <ReadingProgress />

            <main className="min-h-screen bg-background pt-[120px] relative">
                {/* Background gradient - eliminate dark gap */}
                <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-blue-600/5 via-transparent to-primary/5 pointer-events-none" />
                <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                {/* Breadcrumb */}
                <div className="relative z-10">
                    <div className="container-custom max-w-7xl py-3">
                        <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground flex-wrap">
                            <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors shrink-0">
                                <Home size={14} /> Trang chủ
                            </Link>
                            <ChevronRight size={14} className="shrink-0" />
                            <Link href="/danh-gia-san" className="hover:text-primary transition-colors shrink-0">
                                Review Sàn
                            </Link>
                            <ChevronRight size={14} className="shrink-0" />
                            <span className="text-foreground font-medium line-clamp-1">Đánh giá {broker.name}</span>
                        </div>
                    </div>
                </div>

                {/* Premium Hero Section */}
                <section className="relative border-b border-border/50 pt-4 pb-12 overflow-hidden">
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
                                    Đánh giá sàn <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">{broker.name}</span>
                                </h1>
                                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                                    Review chi tiết pháp lý, phí giao dịch, nạp rút và độ uy tín của sàn {broker.name}. Cập nhật mới nhất tháng 02/2026.
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

                <div className="container-custom max-w-7xl py-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                        {/* Left Content Column */}
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
                                        Dưới đây là phân tích chi tiết các khía cạnh quan trọng nhất để bạn quyết định có nên &quot;xuống tiền&quot; hay không.
                                    </p>
                                </div>
                            </div>

                            {/* Pros & Cons */}
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

                            {/* Inline CTA #1 */}
                            <div className="bg-gradient-to-r from-blue-600/10 via-primary/10 to-cyan-500/10 border border-primary/20 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6">
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-foreground mb-2">
                                        🎯 Mở tài khoản {broker.name} ngay
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Đăng ký chỉ trong 2 phút. {broker.minDep === '$0' || broker.minDep === '$1' ? 'Không yêu cầu nạp tiền ngay.' : `Nạp tối thiểu chỉ ${broker.minDep}.`}
                                    </p>
                                </div>
                                <div className="shrink-0 w-full sm:w-auto">
                                    <AffiliateButton slug={broker.slug} fallbackLink={broker.registerLink} />
                                </div>
                            </div>

                            {/* Detailed Content */}
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
                                    <div dangerouslySetInnerHTML={{ __html: richContent }} />
                                </article>
                            </div>

                            {/* Inline CTA #2 */}
                            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px]" />
                                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <BadgeCheck className="text-primary" size={20} />
                                            <span className="text-xs font-bold text-primary uppercase tracking-wider">Đối tác chính thức</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-white mb-2">
                                            Sẵn sàng giao dịch với {broker.name}?
                                        </h3>
                                        <p className="text-sm text-slate-400">
                                            Tham gia cùng hàng triệu trader trên toàn thế giới. Đăng ký nhanh, nạp dễ, rút tiền linh hoạt.
                                        </p>
                                    </div>
                                    <div className="shrink-0 w-full sm:w-auto">
                                        <AffiliateButton slug={broker.slug} fallbackLink={broker.registerLink} />
                                    </div>
                                </div>
                            </div>

                            {/* FAQ Section */}
                            <div id="faq" className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                                    <HelpCircle className="text-primary" /> Câu hỏi thường gặp về {broker.name}
                                </h2>
                                <div className="space-y-4">
                                    {faqItems.map((item, i) => (
                                        <details
                                            key={i}
                                            className="group bg-card border border-border rounded-xl overflow-hidden"
                                            {...(i === 0 ? { open: true } : {})}
                                        >
                                            <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer hover:bg-secondary/30 transition-colors font-bold text-foreground">
                                                <span className="flex items-center gap-3">
                                                    <span className="text-primary font-black text-sm">Q{i + 1}</span>
                                                    {item.question}
                                                </span>
                                                <ChevronRight size={16} className="transition-transform group-open:rotate-90 shrink-0 text-muted-foreground" />
                                            </summary>
                                            <div className="px-5 pb-5 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-border/50">
                                                <p className="pt-4">{item.answer}</p>
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>

                            {/* Related Brokers */}
                            <div id="related" className="space-y-6">
                                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                                    <TrendingUp className="text-primary" /> Sàn Forex tương tự
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {relatedBrokers.map((b) => (
                                        <Link
                                            key={b.id}
                                            href={`/${b.slug}/`}
                                            className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all group"
                                        >
                                            <img src={b.logo} alt={b.name} className="w-12 h-12 object-contain rounded-lg bg-white border border-border/50 shrink-0" />
                                            <div className="flex-1 min-w-0">
                                                <div className="font-bold text-foreground group-hover:text-primary truncate">{b.name}</div>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                                    <span className="flex items-center gap-1"><Star size={10} fill="currentColor" className="text-yellow-500" /> {b.score}</span>
                                                    <span>•</span>
                                                    <span>{b.minDep}</span>
                                                    <span>•</span>
                                                    <span>{b.maxLev}</span>
                                                </div>
                                            </div>
                                            <ChevronRight size={16} className="text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1 shrink-0" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar (Sticky) */}
                        <div className="lg:col-span-4 relative">
                            <div className="sticky top-28 space-y-6">

                                {/* TOC - Moved to TOP of sidebar */}
                                <div className="hidden lg:block bg-card dark:bg-card/40 backdrop-blur-md rounded-2xl border border-border p-5">
                                    <h4 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <BookOpen size={14} className="text-primary" /> Mục lục
                                    </h4>
                                    <nav className="flex flex-col gap-2.5 text-sm">
                                        <a href="#overview" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                                            <span className="w-1 h-1 rounded-full bg-primary/50" /> Tổng quan
                                        </a>
                                        <a href="#pros-cons" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                                            <span className="w-1 h-1 rounded-full bg-primary/50" /> Ưu & Nhược điểm
                                        </a>
                                        <a href="#detailed-review" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                                            <span className="w-1 h-1 rounded-full bg-primary/50" /> Đánh giá chi tiết
                                        </a>
                                        <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                                            <span className="w-1 h-1 rounded-full bg-primary/50" /> FAQ
                                        </a>
                                        <a href="#related" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 duration-200">
                                            <span className="w-1 h-1 rounded-full bg-primary/50" /> Sàn tương tự
                                        </a>
                                    </nav>
                                </div>

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
                                        <AffiliateButton slug={broker.slug} fallbackLink={broker.registerLink} />
                                        <p className="text-xs text-muted-foreground">
                                            Đăng ký trong 2 phút. Không yêu cầu nạp tiền ngay.
                                        </p>
                                    </div>
                                </div>

                                {/* Info Table */}
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
                                        <div className="flex justify-between items-center pb-2 border-b border-border/50">
                                            <span className="text-muted-foreground flex items-center gap-2">
                                                <TrendingUp size={14} className="text-primary" /> Spread TB
                                            </span>
                                            <span className="font-bold text-foreground">{broker.avgSpread}</span>
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

                                {/* Top Rated Brokers Widget */}
                                <div className="bg-card dark:bg-card/40 backdrop-blur-md rounded-2xl border border-border p-5">
                                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                                        <Trophy size={16} className="text-yellow-500" /> Sàn Forex Uy Tín
                                    </h4>
                                    <div className="space-y-4">
                                        {brokers.slice(0, 5).map((b, i) => (
                                            <a
                                                key={b.id}
                                                href={`/${b.slug}/`}
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
                                        <Link href="/danh-gia-san" className="text-xs font-bold text-primary hover:underline flex items-center justify-center">
                                            Xem bảng xếp hạng đầy đủ <ChevronRight size={12} />
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
