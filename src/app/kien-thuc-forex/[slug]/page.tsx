"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getPosts, getPostBySlug, Post } from "@/lib/supabase";
import {
    Home, ChevronRight, Calendar, Clock, Eye, Share2, Facebook, Twitter,
    BookOpen, ChevronUp, MessageCircle, ArrowLeft, ArrowRight, Tag,
    List, Copy, Check, Printer, GraduationCap, Sparkles
} from "lucide-react";
import { brokers } from "@/data/brokers";


interface TocItem {
    id: string;
    text: string;
    level: number;
}

// Helper function để tạo URL đúng dựa trên category
function getPostUrl(post: { slug: string; category?: string }) {
    const category = post.category || '';
    if (['tin-tuc', 'phan-tich', 'review'].includes(category)) {
        return `/tin-tuc/${post.slug}`;
    }
    if (['kien-thuc', 'kien-thuc-forex', 'huong-dan'].includes(category)) {
        return `/kien-thuc-forex/${post.slug}`;
    }
    return `/kien-thuc-forex/${post.slug}`;
}

// Process HTML and add IDs to headings
function processContentWithToc(html: string): { processedHtml: string; tocItems: TocItem[] } {
    const tocItems: TocItem[] = [];
    let index = 0;

    const processedHtml = html.replace(/<(h[23])([^>]*)>(.*?)<\/\1>/gi, (match, tag, attrs, content) => {
        const id = `section-${index}`;
        const text = content.replace(/<[^>]*>/g, '').trim();
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

// Fallback knowledge articles
const fallbackArticles = [
    {
        id: 101,
        slug: "forex-la-gi",
        title: "Forex là gì? Hướng dẫn đầu tư Forex toàn tập cho người mới",
        excerpt: "Khái niệm Forex là gì? Tìm hiểu về thị trường ngoại hối, cách thức hoạt động, các phiên giao dịch và cơ hội kiếm tiền từ Forex.",
        published_at: "2026-01-27",
        category: "kien-thuc",
        featured_image: "/images/placeholder-article.png",
        content: `
            <h2>1. Forex là gì?</h2>
            <p><strong>Forex</strong> (viết tắt của <em>Foreign Exchange</em>), hay còn gọi là thị trường ngoại hối, là nơi diễn ra việc trao đổi các loại tiền tệ của các quốc gia khác nhau.</p>
            <p>Ví dụ đơn giản: Khi bạn đi du lịch từ Việt Nam sang Mỹ, bạn đổi tiền VND lấy USD. Hành động đó chính là bạn đã tham gia vào thị trường Forex.</p>
            <p>Tuy nhiên, trong đầu tư Forex, mục tiêu của bạn không phải là đổi tiền để tiêu xài, mà là <strong>kiếm lợi nhuận từ sự chênh lệch tỷ giá</strong> giữa các cặp tiền tệ.</p>
            
            <h2>2. Thị trường Forex hoạt động như thế nào?</h2>
            <p>Khác với chứng khoán nơi bạn mua cổ phiếu của một công ty, trong Forex, hàng hóa chính là <strong>Tiền</strong>. Giao dịch Forex luôn diễn ra theo từng <strong>cặp tiền tệ</strong>.</p>
            <p>Ví dụ cặp tiền phổ biến nhất: <strong>EUR/USD</strong></p>
            <ul>
                <li>Đồng tiền đứng trước (EUR) gọi là <strong>Đồng tiền cơ sở (Base Currency)</strong>.</li>
                <li>Đồng tiền đứng sau (USD) gọi là <strong>Đồng tiền định giá (Quote Currency)</strong>.</li>
            </ul>
            
            <h2>3. Ai tham gia vào thị trường này?</h2>
            <p>Thị trường Forex là sân chơi của nhiều "tay to" lớn:</p>
            <ul>
                <li><strong>Ngân hàng trung ương:</strong> Như Fed (Mỹ), ECB (Châu Âu) can thiệp để ổn định tiền tệ quốc gia.</li>
                <li><strong>Các ngân hàng thương mại lớn:</strong> Deutsche Bank, Citi, JP Morgan... chiếm phần lớn volume giao dịch.</li>
                <li><strong>Quỹ đầu tư & Công ty đa quốc gia:</strong> Giao dịch để phòng ngừa rủi ro tỷ giá.</li>
                <li><strong>Trader nhỏ lẻ (Retail Traders):</strong> Chính là chúng ta, những người giao dịch thông qua các Sàn môi giới (Brokers).</li>
            </ul>
            
            <h2>4. Thời gian giao dịch Forex</h2>
            <p>Một điểm cộng lớn của Forex là thị trường hoạt động <strong>24/5</strong> (từ thứ 2 đến thứ 6). Do các trung tâm tài chính toàn cầu mở cửa nối tiếp nhau:</p>
            <ul>
                <li><strong>Phiên Úc (Sydney):</strong> Mở cửa sáng sớm (5h00 - 14h00 VN).</li>
                <li><strong>Phiên Á (Tokyo):</strong> Sôi động với các đồng JPY, AUD (6h00 - 15h00 VN).</li>
                <li><strong>Phiên Âu (London):</strong> Phiên giao dịch nhộn nhịp nhất (14h00 - 23h00 VN).</li>
                <li><strong>Phiên Mỹ (New York):</strong> Biến động mạnh nhất (19h00 - 4h00 sáng hôm sau VN).</li>
            </ul>
            
            <h2>5. Làm thế nào để bắt đầu kiếm tiền từ Forex?</h2>
            <p>Để bắt đầu, bạn không cần hàng tỷ đồng như các ngân hàng. Nhờ cơ chế <strong>Đòn bẩy (Leverage)</strong>, bạn có thể bắt đầu giao dịch chỉ với số vốn rất nhỏ ($50 - $100).</p>
            <h3>Quy trình cơ bản cho người mới:</h3>
            <ol>
                <li><strong>Tìm hiểu kiến thức:</strong> Đọc các bài viết về Nến Nhật, Quản lý vốn.</li>
                <li><strong>Chọn sàn uy tín:</strong> Mở tài khoản tại các sàn được cấp phép (như Exness, Vantage, XM...).</li>
                <li><strong>Giao dịch Demo:</strong> Tập luyện với tiền ảo để làm quen thị trường.</li>
                <li><strong>Nạp vốn & Giao dịch thật:</strong> Bắt đầu với số vốn nhỏ và tuân thủ kỷ luật.</li>
            </ol>
        `
    },
    {
        id: 102,
        slug: "cach-doc-bieu-do-nen-nhat",
        title: "Cách đọc biểu đồ nến Nhật - Hướng dẫn cho người mới",
        excerpt: "Học cách đọc và phân tích biểu đồ nến Nhật (Japanese Candlestick) - công cụ không thể thiếu của mọi trader.",
        published_at: "2026-01-26",
        category: "kien-thuc",
        featured_image: "/images/placeholder-article.png",
        content: `
            <h2>1. Nến Nhật là gì?</h2>
            <p>Nến Nhật (Japanese Candlestick) là một phương pháp biểu diễn biến động giá được phát triển bởi các thương nhân gạo Nhật Bản từ thế kỷ 18.</p>
            
            <h2>2. Cấu tạo của một cây nến</h2>
            <p>Mỗi cây nến có 4 thành phần chính:</p>
            <ul>
                <li><strong>Giá mở cửa (Open):</strong> Giá tại thời điểm bắt đầu phiên giao dịch</li>
                <li><strong>Giá đóng cửa (Close):</strong> Giá tại thời điểm kết thúc phiên</li>
                <li><strong>Giá cao nhất (High):</strong> Mức giá cao nhất trong phiên</li>
                <li><strong>Giá thấp nhất (Low):</strong> Mức giá thấp nhất trong phiên</li>
            </ul>
            
            <h2>3. Phân loại nến</h2>
            <h3>Nến tăng (Bullish Candle)</h3>
            <p>Khi giá đóng cửa cao hơn giá mở cửa, nến có màu xanh lá hoặc trắng.</p>
            
            <h3>Nến giảm (Bearish Candle)</h3>
            <p>Khi giá đóng cửa thấp hơn giá mở cửa, nến có màu đỏ hoặc đen.</p>
        `
    },
    {
        id: 103,
        slug: "quan-ly-von-trading",
        title: "Quản lý vốn trong Trading - Bí quyết sống sót",
        excerpt: "Quản lý vốn (Money Management) là kỹ năng quan trọng nhất quyết định sự thành bại trong trading.",
        published_at: "2026-01-25",
        category: "kien-thuc",
        featured_image: "/images/placeholder-article.png",
        content: `
            <h2>1. Tại sao quản lý vốn quan trọng?</h2>
            <p>90% trader thua lỗ không phải vì không biết phân tích, mà vì quản lý vốn kém. Một chiến lược có tỷ lệ thắng 60% vẫn có thể cháy tài khoản nếu bạn không kiểm soát được rủi ro.</p>
            
            <h2>2. Quy tắc 1-2%</h2>
            <p>Quy tắc vàng: Không bao giờ rủi ro quá 1-2% tài khoản cho một giao dịch.</p>
            
            <h2>3. Risk/Reward Ratio</h2>
            <p>Luôn đảm bảo tỷ lệ Risk/Reward tối thiểu 1:2. Nghĩa là nếu bạn sẵn sàng thua $100, mục tiêu lợi nhuận phải là $200.</p>
        `
    }
];

export default function KnowledgeArticlePage() {
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

    useEffect(() => {
        async function fetchData() {
            if (!slug || typeof slug !== "string") return;

            const postData = await getPostBySlug(slug);

            if (postData) {
                setPost(postData);
                const allPosts = await getPosts(true);
                const related = allPosts
                    .filter(p => p.id !== postData.id && p.category === postData.category)
                    .slice(0, 4);
                setRelatedPosts(related);
            } else {
                const fallbackPost = fallbackArticles.find(p => p.slug === slug);
                if (fallbackPost) {
                    setPost(fallbackPost as unknown as Post);
                    const related = fallbackArticles.filter(p => p.slug !== slug).slice(0, 4);
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
            <main className="min-h-screen bg-background pt-[120px]">
                <div className="container-custom max-w-7xl py-12">
                    <div className="grid lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8 space-y-6">
                            <div className="h-8 bg-slate-800 rounded w-1/2 animate-pulse" />
                            <div className="h-12 bg-slate-800 rounded animate-pulse" />
                            <div className="aspect-video bg-slate-800 rounded-2xl animate-pulse" />
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
            <main className="min-h-screen bg-background pt-[120px] flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-2xl font-bold text-foreground">Bài viết không tồn tại</h1>
                    <Link href="/kien-thuc-forex" className="text-primary hover:underline">
                        ← Quay lại Kiến thức Forex
                    </Link>
                </div>
            </main>
        );
    }

    const readTime = calculateReadTime(post.content || "");

    return (
        <main className="min-h-screen bg-background pt-[120px]">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
                <div
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-150"
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
                        <Link href="/kien-thuc-forex" className="hover:text-primary transition-colors">
                            Kiến thức Forex
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
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                                    <GraduationCap size={20} />
                                </div>
                                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded-full">
                                    Kiến thức Forex
                                </span>
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight tracking-tight">
                                {post.title}
                            </h1>

                            {post.excerpt && (
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>
                            )}

                            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-muted-foreground pb-6 border-b border-border">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                                        SUT
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground">Sàn Uy Tín</p>
                                        <p className="text-xs text-muted-foreground">Chuyên gia Forex</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 flex-wrap">
                                    <span className="flex items-center gap-1.5">
                                        <Calendar size={14} className="text-green-500" />
                                        {formatDate(post.published_at)}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={14} className="text-green-500" />
                                        {readTime} phút đọc
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Eye size={14} className="text-green-500" />
                                        2.5K lượt xem
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

                        {/* Article Content */}
                        <div
                            ref={contentRef}
                            className="prose prose-lg dark:prose-invert max-w-none
                                prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
                                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border/40
                                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-green-500
                                prose-p:text-muted-foreground prose-p:leading-8 prose-p:mb-5
                                prose-li:text-muted-foreground prose-li:marker:text-green-500
                                prose-strong:text-foreground prose-strong:font-semibold
                                prose-a:text-green-500 prose-a:no-underline hover:prose-a:underline
                                prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:bg-secondary/30 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic
                                prose-img:rounded-xl prose-img:shadow-md
                                prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-green-500"
                            dangerouslySetInnerHTML={{ __html: processedContent }}
                        />

                        {/* CTA Box */}
                        <div className="mt-12 p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl text-center">
                            <Sparkles className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold text-foreground mb-4">Sẵn sàng bắt đầu?</h3>
                            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                                Thị trường Forex mang lại cơ hội lợi nhuận không giới hạn. Hãy chọn một sàn uy tín để bắt đầu hành trình của bạn.
                            </p>
                            <Link
                                href="/#ranking"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all hover:-translate-y-1"
                            >
                                Xem Top Sàn Uy Tín <ChevronRight size={18} />
                            </Link>
                        </div>

                        {/* Navigation */}
                        <div className="mt-10 grid md:grid-cols-2 gap-4">
                            <Link
                                href="/kien-thuc-forex"
                                className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-green-500/50 transition-colors"
                            >
                                <div className="p-2 bg-secondary rounded-lg group-hover:bg-green-500/10 transition-colors">
                                    <ArrowLeft size={20} className="text-muted-foreground group-hover:text-green-500" />
                                </div>
                                <div>
                                    <span className="text-xs text-muted-foreground">Quay lại</span>
                                    <p className="text-foreground font-medium group-hover:text-green-500 transition-colors">
                                        Tất cả bài học
                                    </p>
                                </div>
                            </Link>
                            {relatedPosts[0] && (
                                <Link
                                    href={getPostUrl(relatedPosts[0])}
                                    className="group flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-green-500/50 transition-colors text-right md:justify-end"
                                >
                                    <div className="md:order-2 p-2 bg-secondary rounded-lg group-hover:bg-green-500/10 transition-colors">
                                        <ArrowRight size={20} className="text-muted-foreground group-hover:text-green-500" />
                                    </div>
                                    <div className="md:order-1">
                                        <span className="text-xs text-muted-foreground">Bài tiếp theo</span>
                                        <p className="text-foreground font-medium line-clamp-1 group-hover:text-green-500 transition-colors">
                                            {relatedPosts[0].title}
                                        </p>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-28 space-y-6">

                            {/* Table of Contents */}
                            {toc.length > 0 && (
                                <div className="bg-card border border-border rounded-2xl p-5 hidden lg:block">
                                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                                        <List size={18} className="text-green-500" />
                                        Mục lục bài viết
                                    </h4>
                                    <nav className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                                        {toc.map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                className={`block text-sm py-1.5 px-3 rounded-lg transition-all ${item.level === 3 ? "pl-6" : ""
                                                    } ${activeSection === item.id
                                                        ? "bg-green-500/10 text-green-500 font-medium border-l-2 border-green-500"
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
                                    <Share2 size={18} className="text-green-500" />
                                    Chia sẻ kiến thức
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
                                <button
                                    onClick={copyLink}
                                    className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-secondary hover:bg-slate-700 text-foreground font-medium transition-colors"
                                >
                                    {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                                    {copied ? "Đã sao chép!" : "Sao chép link"}
                                </button>
                            </div>

                            {/* Top Brokers Widget */}
                            <div className="bg-card border border-border rounded-2xl p-5">
                                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                                    <BookOpen size={16} className="text-green-500" />
                                    Sàn Forex Uy Tín
                                </h4>
                                <div className="space-y-3">
                                    {brokers.slice(0, 4).map((b, i) => (
                                        <Link
                                            key={b.id}
                                            href={`/${b.slug}`}
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
                                                <div className="font-bold text-sm text-foreground group-hover:text-green-500 truncate">{b.name}</div>
                                                <div className="text-xs text-muted-foreground">{b.score.toFixed(1)}/10</div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Related Articles */}
                            {relatedPosts.length > 0 && (
                                <div className="bg-card border border-border rounded-2xl p-5">
                                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                                        <MessageCircle size={18} className="text-green-500" />
                                        Bài học liên quan
                                    </h4>
                                    <div className="space-y-4">
                                        {relatedPosts.map(rPost => (
                                            <Link
                                                key={rPost.id}
                                                href={getPostUrl(rPost)}
                                                className="group flex gap-3"
                                            >
                                                <div className="w-20 h-14 rounded-lg overflow-hidden bg-secondary shrink-0">
                                                    <img
                                                        src={rPost.featured_image || "https://placehold.co/80x56/1e293b/ffffff?text=Learn"}
                                                        alt={rPost.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h5 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-green-500 transition-colors">
                                                        {rPost.title}
                                                    </h5>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

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
