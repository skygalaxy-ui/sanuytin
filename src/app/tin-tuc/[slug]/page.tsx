"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getPosts, getPostBySlug, Post } from "@/lib/supabase";
import {
    Home, ChevronRight, Calendar, Clock, Eye, Share2, Facebook, Twitter,
    Bookmark, ChevronUp, ArrowLeft, ArrowRight, Tag,
    List, Copy, Check, Printer
} from "lucide-react";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

function processContentWithToc(html: string): { processedHtml: string; tocItems: TocItem[] } {
    const tocItems: TocItem[] = [];
    let index = 0;

    const processedHtml = html.replace(/<(h[23])([^>]*)>(.*?)<\/\1>/gi, (match, tag, attrs, content) => {
        const id = `section-${index}`;
        const text = content.replace(/<[^>]*>/g, '').trim();
        tocItems.push({ id, text, level: tag.toLowerCase() === 'h2' ? 2 : 3 });
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
    const [showMobileToc, setShowMobileToc] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

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

            const sections = element.querySelectorAll("h2, h3");
            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 150 && rect.bottom >= 0) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [post]);

    // Dynamic meta
    useEffect(() => {
        if (post) {
            document.title = (post.meta_title || post.title) + " | Sàn Uy Tín";
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', post.meta_description || post.excerpt || '');
            } else {
                const meta = document.createElement('meta');
                meta.name = 'description';
                meta.content = post.meta_description || post.excerpt || '';
                document.head.appendChild(meta);
            }
        }
    }, [post]);

    const copyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return "";
        return new Date(dateStr).toLocaleDateString("vi-VN", {
            day: "2-digit", month: "long", year: "numeric"
        });
    };

    const readTime = post?.content
        ? Math.ceil(post.content.replace(/<[^>]*>/g, "").split(/\s+/).length / 200)
        : 3;

    if (loading) {
        return (
            <main className="min-h-screen bg-background pt-[120px]">
                <div className="container-custom max-w-7xl py-8 md:py-12">
                    <div className="grid lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-8 space-y-4">
                            <div className="h-6 bg-secondary rounded w-1/4 animate-pulse" />
                            <div className="h-10 bg-secondary rounded animate-pulse" />
                            <div className="h-10 bg-secondary rounded w-3/4 animate-pulse" />
                            <div className="h-5 bg-secondary rounded w-1/2 animate-pulse" />
                            <div className="aspect-video bg-secondary rounded-2xl animate-pulse mt-4" />
                            <div className="space-y-3 mt-6">
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <div key={i} className="h-4 bg-secondary rounded animate-pulse" style={{ width: `${90 - i * 5}%` }} />
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-4 hidden lg:block">
                            <div className="h-64 bg-secondary rounded-2xl animate-pulse" />
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    if (!post) {
        return (
            <main className="min-h-screen bg-background pt-[120px] flex items-center justify-center">
                <div className="text-center space-y-4 px-4">
                    <h1 className="text-2xl font-bold text-foreground">Bài viết không tồn tại</h1>
                    <Link href="/tin-tuc" className="text-primary hover:underline">
                        ← Quay lại danh sách tin tức
                    </Link>
                </div>
            </main>
        );
    }

    // JSON-LD
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.meta_description || post.excerpt || '',
        "image": post.featured_image || undefined,
        "datePublished": post.published_at || post.created_at || '',
        "dateModified": post.updated_at || post.published_at || '',
        "author": { "@type": "Organization", "name": "Sàn Uy Tín", "url": "https://sanuytin.com" },
        "publisher": {
            "@type": "Organization", "name": "Sàn Uy Tín", "url": "https://sanuytin.com",
            "logo": { "@type": "ImageObject", "url": "https://sanuytin.com/logo.png" }
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://sanuytin.com/tin-tuc/${slug}` },
        "articleSection": post.category || "Tin tức",
        "wordCount": post.content ? post.content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0,
        ...(post.tags && post.tags.length > 0 && { "keywords": post.tags.join(', ') })
    };

    // FAQ Schema
    const faqItems: { question: string; answer: string }[] = [];
    if (post?.content) {
        const faqRegex = /<h3[^>]*>(.*?)<\/h3>\s*<p[^>]*>(.*?)<\/p>/gi;
        const faqSection = post.content.indexOf('Câu Hỏi Thường Gặp');
        if (faqSection !== -1) {
            const faqContent = post.content.substring(faqSection);
            let match;
            while ((match = faqRegex.exec(faqContent)) !== null) {
                faqItems.push({
                    question: match[1].replace(/<[^>]*>/g, '').trim(),
                    answer: match[2].replace(/<[^>]*>/g, '').trim()
                });
            }
        }
    }
    const faqJsonLd = faqItems.length > 0 ? {
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question", "name": item.question,
            "acceptedAnswer": { "@type": "Answer", "text": item.answer }
        }))
    } : null;

    return (
        <main className="min-h-screen bg-background pt-[120px]">
            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

            {/* Reading Progress */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-secondary z-50">
                <div className="h-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-150" style={{ width: `${readProgress}%` }} />
            </div>

            {/* Breadcrumb */}
            <div className="bg-secondary/30 border-b border-border">
                <div className="container-custom max-w-7xl py-3">
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground overflow-x-auto">
                        <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors shrink-0">
                            <Home size={13} /> Trang chủ
                        </Link>
                        <ChevronRight size={13} className="shrink-0" />
                        <Link href="/tin-tuc" className="hover:text-primary transition-colors shrink-0">Tin Tức</Link>
                        <ChevronRight size={13} className="shrink-0" />
                        <span className="text-foreground font-medium truncate max-w-[180px] sm:max-w-[300px]">{post.title}</span>
                    </div>
                </div>
            </div>

            <div className="container-custom max-w-7xl py-6 md:py-10">
                <div className="grid lg:grid-cols-12 gap-6 xl:gap-10">

                    {/* ===== Main Content ===== */}
                    <article className="lg:col-span-8 min-w-0">
                        {/* Header */}
                        <header className="mb-6">
                            <Link
                                href={`/tin-tuc?category=${post.category}`}
                                className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 hover:bg-primary/20 transition-colors"
                            >
                                <Tag size={11} />
                                {post.category || "Tin tức"}
                            </Link>

                            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight tracking-tight">
                                {post.title}
                            </h1>

                            {post.excerpt && (
                                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4">
                                    {post.excerpt}
                                </p>
                            )}

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-sm text-muted-foreground pb-5 border-b border-border">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                                        SUT
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground text-sm">Sàn Uy Tín</p>
                                    </div>
                                </div>
                                <span className="flex items-center gap-1.5 text-xs sm:text-sm">
                                    <Calendar size={13} className="text-primary" />
                                    {formatDate(post.published_at)}
                                </span>
                                <span className="flex items-center gap-1.5 text-xs sm:text-sm">
                                    <Clock size={13} className="text-primary" />
                                    {readTime} phút đọc
                                </span>
                            </div>
                        </header>

                        {/* Featured Image */}
                        {post.featured_image && (
                            <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-6 bg-secondary/50">
                                <img
                                    src={post.featured_image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                    onError={e => { e.currentTarget.style.display = 'none'; }}
                                />
                            </div>
                        )}

                        {/* Mobile TOC Toggle */}
                        {toc.length > 0 && (
                            <div className="lg:hidden mb-6">
                                <button
                                    onClick={() => setShowMobileToc(!showMobileToc)}
                                    className="w-full flex items-center justify-between px-4 py-3 bg-card border border-border rounded-xl text-sm font-medium text-foreground"
                                >
                                    <span className="flex items-center gap-2">
                                        <List size={16} className="text-primary" />
                                        Mục lục bài viết ({toc.length} mục)
                                    </span>
                                    <ChevronRight size={16} className={`transition-transform ${showMobileToc ? 'rotate-90' : ''}`} />
                                </button>
                                {showMobileToc && (
                                    <nav className="mt-2 p-4 bg-card border border-border rounded-xl space-y-1.5">
                                        {toc.map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                onClick={() => setShowMobileToc(false)}
                                                className={`block text-sm py-1.5 px-3 rounded-lg transition-all ${item.level === 3 ? "pl-6 text-xs" : "font-medium"
                                                    } ${activeSection === item.id
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                                                    }`}
                                            >
                                                {item.text}
                                            </a>
                                        ))}
                                    </nav>
                                )}
                            </div>
                        )}

                        {/* Social Share (Mobile) */}
                        <div className="flex items-center justify-between py-3 border-y border-border mb-6 lg:hidden">
                            <div className="flex items-center gap-2">
                                <button className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                                    <Facebook size={16} />
                                </button>
                                <button className="p-2 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                                    <Twitter size={16} />
                                </button>
                                <button onClick={copyLink} className="p-2 rounded-full bg-secondary text-foreground hover:bg-muted transition-colors">
                                    {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                                </button>
                            </div>
                            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm hover:bg-muted transition-colors">
                                <Bookmark size={14} /> Lưu
                            </button>
                        </div>

                        {/* ===== Article Body ===== */}
                        <div
                            ref={contentRef}
                            className="prose prose-lg dark:prose-invert max-w-none
                                prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
                                prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border/40
                                prose-h3:text-lg prose-h3:sm:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-primary
                                prose-p:text-muted-foreground prose-p:leading-7 prose-p:sm:leading-8 prose-p:mb-4
                                prose-li:text-muted-foreground prose-li:marker:text-primary
                                prose-strong:text-foreground prose-strong:font-semibold
                                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-secondary/30 prose-blockquote:rounded-r-lg prose-blockquote:py-3 prose-blockquote:px-4 prose-blockquote:sm:px-6 prose-blockquote:not-italic
                                prose-img:rounded-xl prose-img:shadow-md prose-img:mx-auto
                                prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-primary prose-code:text-sm
                                prose-pre:bg-slate-900 prose-pre:border prose-pre:border-border prose-pre:overflow-x-auto
                                prose-table:border-collapse prose-table:w-full prose-table:overflow-x-auto"
                            dangerouslySetInnerHTML={{ __html: processedContent }}
                        />

                        {/* Tags */}
                        <div className="mt-8 pt-5 border-t border-border">
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="text-sm font-medium text-muted-foreground">Tags:</span>
                                {(post.tags && post.tags.length > 0 ? post.tags : ["Forex", "Thị trường", "Phân tích"]).map(tag => (
                                    <Link
                                        key={tag}
                                        href={`/tin-tuc?tag=${tag}`}
                                        className="px-3 py-1 bg-secondary/50 hover:bg-secondary text-xs text-muted-foreground hover:text-foreground rounded-full transition-colors"
                                    >
                                        #{tag}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Author Box */}
                        <div className="mt-8 p-4 sm:p-6 bg-card border border-border rounded-xl sm:rounded-2xl">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white text-lg sm:text-xl font-bold shrink-0">
                                    SUT
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-base sm:text-lg font-bold text-foreground mb-1">Sàn Uy Tín</h4>
                                    <p className="text-primary text-sm font-medium mb-2">Đội ngũ biên tập</p>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Đội ngũ chuyên gia tài chính với hơn 10 năm kinh nghiệm trong thị trường Forex.
                                        Sứ mệnh cung cấp thông tin chính xác, khách quan giúp nhà đầu tư đưa ra quyết định sáng suốt.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Post Navigation */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <Link
                                href="/tin-tuc"
                                className="group flex items-center gap-3 p-3 sm:p-4 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors"
                            >
                                <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors shrink-0">
                                    <ArrowLeft size={18} className="text-muted-foreground group-hover:text-primary" />
                                </div>
                                <div className="min-w-0">
                                    <span className="text-xs text-muted-foreground">Quay lại</span>
                                    <p className="text-foreground text-sm font-medium truncate group-hover:text-primary transition-colors">
                                        Tất cả bài viết
                                    </p>
                                </div>
                            </Link>
                            {relatedPosts[0] && (
                                <Link
                                    href={`/tin-tuc/${relatedPosts[0].slug}`}
                                    className="group flex items-center gap-3 p-3 sm:p-4 bg-card border border-border rounded-xl hover:border-primary/40 transition-colors sm:justify-end sm:text-right"
                                >
                                    <div className="min-w-0 sm:order-1">
                                        <span className="text-xs text-muted-foreground">Bài tiếp</span>
                                        <p className="text-foreground text-sm font-medium truncate group-hover:text-primary transition-colors">
                                            {relatedPosts[0].title}
                                        </p>
                                    </div>
                                    <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors shrink-0 sm:order-2">
                                        <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary" />
                                    </div>
                                </Link>
                            )}
                        </div>
                    </article>

                    {/* ===== Sidebar (Desktop) ===== */}
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-28 space-y-5">
                            {/* TOC */}
                            {toc.length > 0 && (
                                <div className="bg-card border border-border rounded-2xl p-5">
                                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-sm">
                                        <List size={16} className="text-primary" />
                                        Mục lục bài viết
                                    </h4>
                                    <nav className="space-y-1 max-h-[280px] overflow-y-auto pr-2 scrollbar-thin">
                                        {toc.map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                className={`block text-sm py-1.5 px-3 rounded-lg transition-all leading-snug ${item.level === 3 ? "pl-6 text-xs" : ""
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

                            {/* Share */}
                            <div className="bg-card border border-border rounded-2xl p-5">
                                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2 text-sm">
                                    <Share2 size={16} className="text-primary" />
                                    Chia sẻ bài viết
                                </h4>
                                <div className="flex gap-2">
                                    <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">
                                        <Facebook size={15} /> Facebook
                                    </button>
                                    <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium transition-colors">
                                        <Twitter size={15} /> Twitter
                                    </button>
                                </div>
                                <div className="flex gap-2 mt-2">
                                    <button
                                        onClick={copyLink}
                                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-secondary hover:bg-muted text-foreground text-sm font-medium transition-colors"
                                    >
                                        {copied ? <Check size={15} className="text-green-500" /> : <Copy size={15} />}
                                        {copied ? "Đã sao chép!" : "Sao chép"}
                                    </button>
                                    <button
                                        onClick={() => window.print()}
                                        className="p-2 rounded-xl bg-secondary hover:bg-muted text-foreground transition-colors"
                                    >
                                        <Printer size={15} />
                                    </button>
                                </div>
                            </div>

                            {/* Related Posts */}
                            {relatedPosts.length > 0 && (
                                <div className="bg-card border border-border rounded-2xl p-5">
                                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-sm">
                                        <ArrowRight size={16} className="text-primary" />
                                        Bài viết liên quan
                                    </h4>
                                    <div className="space-y-3">
                                        {relatedPosts.map(rPost => (
                                            <Link key={rPost.id} href={`/tin-tuc/${rPost.slug}`} className="group flex gap-3">
                                                <div className="w-16 h-12 rounded-lg overflow-hidden bg-secondary shrink-0">
                                                    <img
                                                        src={rPost.featured_image || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&q=60"}
                                                        alt={rPost.title}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                                        onError={e => { e.currentTarget.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&q=60"; }}
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h5 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug">
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

                            {/* CTA */}
                            <div className="bg-gradient-to-br from-primary/15 via-blue-600/10 to-purple-600/15 border border-primary/20 rounded-2xl p-5">
                                <h4 className="font-bold text-foreground mb-2 text-sm">So sánh sàn Forex</h4>
                                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                    Tìm sàn giao dịch phù hợp nhất cho bạn với bảng so sánh chi tiết.
                                </p>
                                <Link
                                    href="/so-sanh"
                                    className="block w-full py-2 bg-primary hover:bg-primary/90 text-white text-sm font-bold rounded-xl text-center transition-colors"
                                >
                                    So sánh ngay →
                                </Link>
                            </div>

                            {/* Back to Top */}
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="w-full flex items-center justify-center gap-2 py-2.5 bg-secondary hover:bg-muted text-foreground text-sm font-medium rounded-xl transition-colors"
                            >
                                <ChevronUp size={16} /> Lên đầu trang
                            </button>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Mobile Related Posts */}
            {relatedPosts.length > 0 && (
                <div className="lg:hidden bg-secondary/30 border-t border-border py-8">
                    <div className="container-custom">
                        <h3 className="text-lg font-bold text-foreground mb-4">Bài viết liên quan</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {relatedPosts.slice(0, 4).map(rPost => (
                                <Link key={rPost.id} href={`/tin-tuc/${rPost.slug}`} className="group flex gap-3 bg-card border border-border rounded-xl p-3">
                                    <div className="w-20 h-16 rounded-lg overflow-hidden bg-secondary shrink-0">
                                        <img
                                            src={rPost.featured_image || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&q=60"}
                                            alt={rPost.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                            onError={e => { e.currentTarget.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&q=60"; }}
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h5 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                            {rPost.title}
                                        </h5>
                                        <span className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                                            <Calendar size={10} /> {formatDate(rPost.published_at)}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
