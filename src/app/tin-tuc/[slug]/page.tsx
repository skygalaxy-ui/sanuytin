"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { getPosts, getPostBySlug, Post } from "@/lib/supabase";
import {
    Home, ChevronRight, Calendar, Clock, Eye, User, Share2, Facebook, Twitter,
    Bookmark, ChevronUp, MessageCircle, ArrowLeft, ArrowRight, Tag,
    List, Heart, Copy, Check, Printer
} from "lucide-react";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

// Helper function to process HTML and add IDs to headings
function processContentWithToc(html: string): { processedHtml: string; tocItems: TocItem[] } {
    const tocItems: TocItem[] = [];
    let index = 0;

    const processedHtml = html.replace(/<(h[23])([^>]*)>(.*?)<\/\1>/gi, (match, tag, attrs, content) => {
        const id = `section-${index}`;
        const text = content.replace(/<[^>]*>/g, '').trim(); // Strip HTML tags from text
        tocItems.push({
            id,
            text,
            level: tag.toLowerCase() === 'h2' ? 2 : 3
        });
        index++;
        return `<${tag}${attrs} id="${id}">${content}</${tag}>`;
    });

    return { processedHtml, tocItems };
}

export default function ArticlePage() {
    const { slug } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState("");
    const [copied, setCopied] = useState(false);
    const [readProgress, setReadProgress] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    // Process content and generate TOC
    const { processedContent, toc } = useMemo(() => {
        if (!post?.content) return { processedContent: '', toc: [] };
        const result = processContentWithToc(post.content);
        return { processedContent: result.processedHtml, toc: result.tocItems };
    }, [post?.content]);

    // Fallback data khi chưa có bài viết trong database
    const fallbackPosts = [
        {
            id: 1,
            slug: "gia-vang-pha-dinh-2026",
            title: "Giá Vàng (XAU/USD) tiếp tục phá đỉnh lịch sử 2026",
            excerpt: "Căng thẳng địa chính trị leo thang khiến nhu cầu trú ẩn an toàn vào vàng tăng mạnh. Giá vàng đã tăng hơn 15% trong quý đầu năm 2026.",
            published_at: "2026-01-27",
            category: "tin-tuc",
            featured_image: "https://sanuytin.net/wp-content/uploads/2025/11/gia-vang-tang-manh.jpg",
            content: `
                <h2>Tổng quan thị trường Vàng</h2>
                <p>Giá vàng thế giới tiếp tục xu hướng tăng mạnh trong những ngày đầu năm 2026, phá vỡ mọi kỷ lục lịch sử trước đó. Hiện tại, giá XAU/USD đang giao dịch quanh mức $2,150/ounce.</p>
                <p>Sự leo thang căng thẳng địa chính trị tại nhiều khu vực trên thế giới đã thúc đẩy nhu cầu tìm kiếm tài sản trú ẩn an toàn, trong đó vàng luôn là lựa chọn hàng đầu của các nhà đầu tư.</p>
                
                <h2>Các yếu tố hỗ trợ giá vàng</h2>
                <h3>1. Chính sách tiền tệ của Fed</h3>
                <p>Cục Dự trữ Liên bang Mỹ (Fed) được kỳ vọng sẽ bắt đầu chu kỳ cắt giảm lãi suất trong năm 2026, điều này làm giảm chi phí cơ hội của việc nắm giữ vàng - một tài sản không sinh lời.</p>
                
                <h3>2. Đồng USD suy yếu</h3>
                <p>Chỉ số Dollar Index (DXY) đã giảm khoảng 3% so với đầu năm, tạo điều kiện thuận lợi cho giá vàng tăng do mối quan hệ nghịch đảo giữa hai loại tài sản này.</p>
                
                <h3>3. Nhu cầu từ các ngân hàng trung ương</h3>
                <p>Theo báo cáo của Hội đồng Vàng Thế giới (WGC), các ngân hàng trung ương toàn cầu tiếp tục mua ròng vàng với khối lượng lớn, đặc biệt là Trung Quốc và Nga.</p>
                
                <h2>Dự báo xu hướng</h2>
                <p>Các chuyên gia phân tích dự báo giá vàng có thể đạt mức $2,300/ounce vào cuối năm 2026 nếu các yếu tố hỗ trợ tiếp tục được duy trì.</p>
                
                <blockquote>
                    <p>"Vàng vẫn là một trong những tài sản đầu tư an toàn nhất trong bối cảnh bất ổn kinh tế toàn cầu. Chúng tôi khuyến nghị nhà đầu tư nên duy trì tỷ trọng vàng từ 5-10% trong danh mục đầu tư." - Chuyên gia phân tích Goldman Sachs</p>
                </blockquote>
                
                <h2>Khuyến nghị giao dịch</h2>
                <p>Với những nhà giao dịch Forex, cặp XAU/USD vẫn là một trong những công cụ hấp dẫn nhất với thanh khoản cao và biến động mạnh. Tuy nhiên, cần lưu ý quản lý rủi ro chặt chẽ do tính chất biến động cao của thị trường vàng.</p>
            `
        },
        {
            id: 2,
            slug: "fed-giu-nguyen-lai-suat",
            title: "FED giữ nguyên lãi suất trong kỳ họp tháng 1",
            excerpt: "Cục dự trữ liên bang Mỹ quyết định giữ nguyên lãi suất, gây áp lực lên đồng USD và tạo cơ hội cho các cặp tiền tệ khác.",
            published_at: "2026-01-26",
            category: "tin-tuc",
            featured_image: "https://sanuytin.net/wp-content/uploads/2025/11/fed-lai-suat.jpg",
            content: `
                <h2>Cuộc họp FOMC tháng 1/2026</h2>
                <p>Ủy ban Thị trường Mở Liên bang (FOMC) vừa kết thúc cuộc họp chính sách tiền tệ định kỳ và quyết định giữ nguyên lãi suất điều hành ở mức 4.25-4.50%.</p>
                
                <h2>Phản ứng thị trường</h2>
                <p>Đồng USD đã suy yếu ngay sau thông báo, với chỉ số DXY giảm 0.5%. Các cặp tiền như EUR/USD, GBP/USD đều tăng điểm.</p>
                
                <h2>Triển vọng chính sách tiền tệ</h2>
                <p>Thị trường đang định giá khoảng 3 lần cắt giảm lãi suất trong năm 2026, với lần đầu tiên có thể diễn ra vào tháng 3 hoặc tháng 5.</p>
            `
        },
        {
            id: 3,
            slug: "top-3-cap-tien-bien-dong",
            title: "Top 3 cặp tiền tệ biến động mạnh nhất tuần qua",
            excerpt: "GBP/JPY, EUR/USD và USD/CHF là những cặp tiền có biên độ dao động lớn nhất, tạo nhiều cơ hội giao dịch cho trader.",
            published_at: "2026-01-25",
            category: "tin-tuc",
            featured_image: "https://sanuytin.net/wp-content/uploads/2025/11/forex-market-news.jpg",
            content: `
                <h2>Tổng quan thị trường Forex tuần qua</h2>
                <p>Tuần giao dịch vừa qua chứng kiến nhiều biến động mạnh trên thị trường ngoại hối, với các cặp tiền chính dao động trong biên độ lớn.</p>
                
                <h2>1. GBP/JPY - Biến động 350 pips</h2>
                <p>Cặp tiền này đã tăng mạnh từ 183.50 lên 187.00 nhờ kỳ vọng BoE giữ lãi suất cao trong khi BoJ tiếp tục chính sách nới lỏng.</p>
                
                <h2>2. EUR/USD - Biến động 200 pips</h2>
                <p>Euro đã tăng giá so với USD sau các dữ liệu kinh tế tích cực từ khu vực đồng tiền chung.</p>
                
                <h2>3. USD/CHF - Biến động 150 pips</h2>
                <p>Franc Thụy Sĩ mạnh lên do dòng tiền trú ẩn an toàn.</p>
            `
        }
    ];

    useEffect(() => {
        async function fetchData() {
            if (!slug || typeof slug !== "string") return;

            // Try to fetch from Supabase first
            const postData = await getPostBySlug(slug);

            if (postData) {
                setPost(postData);

                // Fetch related posts
                const allPosts = await getPosts(true);
                const related = allPosts
                    .filter(p => p.id !== postData.id && p.category === postData.category)
                    .slice(0, 4);
                setRelatedPosts(related);
            } else {
                // Use fallback data if not found in database
                const fallbackPost = fallbackPosts.find(p => p.slug === slug);
                if (fallbackPost) {
                    setPost(fallbackPost as unknown as Post);
                    const related = fallbackPosts.filter(p => p.slug !== slug).slice(0, 4);
                    setRelatedPosts(related as unknown as Post[]);
                }
            }
            setLoading(false);
        }
        fetchData();
    }, [slug]);

    // Track reading progress
    useEffect(() => {
        const handleScroll = () => {
            if (!contentRef.current) return;

            const element = contentRef.current;
            const rect = element.getBoundingClientRect();
            const scrollTop = window.scrollY;
            const docHeight = element.offsetHeight;
            const winHeight = window.innerHeight;
            const scrollPercent = Math.min(100, Math.max(0,
                ((scrollTop - element.offsetTop + winHeight) / (docHeight + winHeight)) * 100
            ));
            setReadProgress(scrollPercent);

            // Update active section
            const sections = element.querySelectorAll("h2, h3");
            sections.forEach((section) => {
                const sectionRect = section.getBoundingClientRect();
                if (sectionRect.top <= 150 && sectionRect.bottom >= 0) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [post]);

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return "";
        return new Date(dateStr).toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
    };

    const calculateReadTime = (content: string) => {
        const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
        return Math.ceil(words / 200);
    };

    if (loading) {
        return (
            <main className="min-h-screen bg-background pt-[160px]">
                <div className="container-custom max-w-7xl py-12">
                    <div className="grid lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8 space-y-6">
                            <div className="h-8 bg-slate-800 rounded w-1/2 animate-pulse" />
                            <div className="h-12 bg-slate-800 rounded animate-pulse" />
                            <div className="h-6 bg-slate-800 rounded w-3/4 animate-pulse" />
                            <div className="aspect-video bg-slate-800 rounded-2xl animate-pulse" />
                            <div className="space-y-4">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <div key={i} className="h-4 bg-slate-800 rounded animate-pulse" />
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-4">
                            <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" />
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    if (!post) {
        return (
            <main className="min-h-screen bg-background pt-[160px] flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-2xl font-bold text-foreground">Bài viết không tồn tại</h1>
                    <Link href="/tin-tuc" className="text-primary hover:underline">
                        ← Quay lại danh sách tin tức
                    </Link>
                </div>
            </main>
        );
    }

    const readTime = calculateReadTime(post.content || "");

    return (
        <main className="min-h-screen bg-background pt-[160px]">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
                <div
                    className="h-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-150"
                    style={{ width: `${readProgress}%` }}
                />
            </div>

            {/* Breadcrumb */}
            <div className="bg-secondary/30 border-b border-border">
                <div className="container-custom max-w-7xl py-3">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                            <Home size={14} /> Trang chủ
                        </Link>
                        <ChevronRight size={14} />
                        <Link href="/tin-tuc" className="hover:text-primary transition-colors">
                            Tin Tức
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-foreground font-medium truncate max-w-[200px]">
                            {post.title}
                        </span>
                    </div>
                </div>
            </div>

            <div className="container-custom max-w-7xl py-8 md:py-12">
                <div className="grid lg:grid-cols-12 gap-8 xl:gap-12">

                    {/* Main Content */}
                    <article className="lg:col-span-8">
                        {/* Article Header */}
                        <header className="mb-8">
                            {/* Category Badge */}
                            <Link
                                href={`/tin-tuc?category=${post.category}`}
                                className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 hover:bg-primary/20 transition-colors"
                            >
                                <Tag size={12} />
                                {post.category || "Tin tức"}
                            </Link>

                            {/* Title */}
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
                                {post.title}
                            </h1>

                            {/* Excerpt */}
                            {post.excerpt && (
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>
                            )}

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground pb-6 border-b border-border">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold">
                                        SUT
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Sàn Uy Tín</p>
                                        <p className="text-xs text-muted-foreground">Biên tập viên</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 flex-wrap">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={14} className="text-primary" />
                                        {formatDate(post.published_at)}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={14} className="text-primary" />
                                        {readTime} phút đọc
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Eye size={14} className="text-primary" />
                                        1.2K lượt xem
                                    </span>
                                </div>
                            </div>
                        </header>

                        {/* Featured Image */}
                        {post.featured_image && (
                            <div className="aspect-video rounded-2xl overflow-hidden mb-8 bg-secondary/50 shadow-lg">
                                <img
                                    src={post.featured_image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Social Share Bar (Mobile) */}
                        <div className="flex items-center justify-between py-4 border-y border-border mb-8 lg:hidden">
                            <div className="flex items-center gap-2">
                                <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                                    <Facebook size={18} />
                                </button>
                                <button className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                                    <Twitter size={18} />
                                </button>
                                <button
                                    onClick={copyLink}
                                    className="p-2 rounded-full bg-slate-700 text-white hover:bg-slate-600 transition-colors"
                                >
                                    {copied ? <Check size={18} /> : <Copy size={18} />}
                                </button>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                                <Bookmark size={16} />
                                <span className="text-sm font-medium">Lưu bài</span>
                            </button>
                        </div>

                        {/* Article Content */}
                        <div
                            ref={contentRef}
                            className="prose prose-lg dark:prose-invert max-w-none
                                prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
                                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border/40
                                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-primary
                                prose-p:text-muted-foreground prose-p:leading-8 prose-p:mb-5
                                prose-li:text-muted-foreground prose-li:marker:text-primary
                                prose-strong:text-foreground prose-strong:font-semibold
                                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-secondary/30 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic
                                prose-img:rounded-xl prose-img:shadow-md
                                prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-primary
                                prose-pre:bg-slate-900 prose-pre:border prose-pre:border-border"
                            dangerouslySetInnerHTML={{ __html: processedContent }}
                        />

                        {/* Tags */}
                        <div className="mt-10 pt-6 border-t border-border">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                                {["Forex", "Thị trường", "Phân tích"].map(tag => (
                                    <Link
                                        key={tag}
                                        href={`/tin-tuc?tag=${tag}`}
                                        className="px-3 py-1 bg-secondary/50 hover:bg-secondary text-sm text-muted-foreground hover:text-foreground rounded-full transition-colors"
                                    >
                                        #{tag}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Author Box */}
                        <div className="mt-10 p-6 bg-card border border-border rounded-2xl">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-2xl font-bold shrink-0">
                                    SUT
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-foreground mb-1">Sàn Uy Tín</h4>
                                    <p className="text-primary text-sm font-medium mb-3">Đội ngũ biên tập</p>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Chúng tôi là đội ngũ chuyên gia tài chính với hơn 10 năm kinh nghiệm trong thị trường Forex.
                                        Sứ mệnh của chúng tôi là cung cấp thông tin chính xác, khách quan giúp nhà đầu tư đưa ra quyết định sáng suốt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Between Posts */}
                        <div className="mt-10 grid md:grid-cols-2 gap-4">
                            <Link
                                href="/tin-tuc"
                                className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                            >
                                <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                                    <ArrowLeft size={20} className="text-muted-foreground group-hover:text-primary" />
                                </div>
                                <div>
                                    <span className="text-xs text-muted-foreground">Bài trước</span>
                                    <p className="text-foreground font-medium line-clamp-1 group-hover:text-primary transition-colors">
                                        Xem tất cả bài viết
                                    </p>
                                </div>
                            </Link>
                            <Link
                                href="/tin-tuc"
                                className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors text-right md:justify-end"
                            >
                                <div className="md:order-2 p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                                    <ArrowRight size={20} className="text-muted-foreground group-hover:text-primary" />
                                </div>
                                <div className="md:order-1">
                                    <span className="text-xs text-muted-foreground">Bài tiếp</span>
                                    <p className="text-foreground font-medium line-clamp-1 group-hover:text-primary transition-colors">
                                        Xem thêm bài viết
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-28 space-y-6">

                            {/* Table of Contents */}
                            {toc.length > 0 && (
                                <div className="bg-card border border-border rounded-2xl p-5 hidden lg:block">
                                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                                        <List size={18} className="text-primary" />
                                        Mục lục bài viết
                                    </h4>
                                    <nav className="space-y-2 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
                                        {toc.map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                className={`block text-sm py-1.5 px-3 rounded-lg transition-all ${item.level === 3 ? "pl-6" : ""
                                                    } ${activeSection === item.id
                                                        ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                                                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                                    }`}
                                            >
                                                {item.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            )}

                            {/* Share Widget */}
                            <div className="bg-card border border-border rounded-2xl p-5 hidden lg:block">
                                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                                    <Share2 size={18} className="text-primary" />
                                    Chia sẻ bài viết
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
                                        <Facebook size={18} />
                                        Facebook
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-medium transition-colors">
                                        <Twitter size={18} />
                                        Twitter
                                    </button>
                                </div>
                                <div className="flex gap-2 mt-3">
                                    <button
                                        onClick={copyLink}
                                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary hover:bg-slate-700 text-foreground font-medium transition-colors"
                                    >
                                        {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                        {copied ? "Đã sao chép!" : "Sao chép link"}
                                    </button>
                                    <button
                                        onClick={() => window.print()}
                                        className="p-2.5 rounded-xl bg-secondary hover:bg-slate-700 text-foreground transition-colors"
                                    >
                                        <Printer size={18} />
                                    </button>
                                </div>
                            </div>

                            {/* Related Posts */}
                            {relatedPosts.length > 0 && (
                                <div className="bg-card border border-border rounded-2xl p-5">
                                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                                        <MessageCircle size={18} className="text-primary" />
                                        Bài viết liên quan
                                    </h4>
                                    <div className="space-y-4">
                                        {relatedPosts.map(rPost => (
                                            <Link
                                                key={rPost.id}
                                                href={`/tin-tuc/${rPost.slug}`}
                                                className="group flex gap-3"
                                            >
                                                <div className="w-20 h-14 rounded-lg overflow-hidden bg-secondary shrink-0">
                                                    <img
                                                        src={rPost.featured_image || "https://placehold.co/80x56/1e293b/ffffff?text=News"}
                                                        alt={rPost.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h5 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                                                        {rPost.title}
                                                    </h5>
                                                    <span className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                                                        <Calendar size={10} />
                                                        {formatDate(rPost.published_at)}
                                                    </span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Newsletter CTA */}
                            <div className="bg-gradient-to-br from-primary/20 to-blue-600/20 border border-primary/30 rounded-2xl p-6">
                                <h4 className="font-bold text-foreground mb-2">
                                    📬 Đăng ký nhận tin
                                </h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Nhận thông tin thị trường và phân tích mới nhất mỗi ngày.
                                </p>
                                <div className="space-y-2">
                                    <input
                                        type="email"
                                        placeholder="Email của bạn..."
                                        className="w-full px-4 py-2.5 bg-background/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                                    />
                                    <button className="w-full py-2.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-colors">
                                        Đăng ký miễn phí
                                    </button>
                                </div>
                            </div>

                            {/* Back to Top */}
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="w-full flex items-center justify-center gap-2 py-3 bg-secondary hover:bg-slate-700 text-foreground font-medium rounded-xl transition-colors"
                            >
                                <ChevronUp size={18} />
                                Lên đầu trang
                            </button>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
