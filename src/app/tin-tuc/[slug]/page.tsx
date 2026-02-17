"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getPosts, getPostBySlug, Post } from "@/lib/supabase";
import {
    ChevronRight, Calendar, Clock,
    ArrowLeft, ArrowRight,
    List
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

    // Track active TOC section (throttled)
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                if (!contentRef.current) { ticking = false; return; }
                const sections = contentRef.current.querySelectorAll("h2, h3");
                let current = "";
                sections.forEach((section) => {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 0) {
                        current = section.id;
                    }
                });
                if (current) setActiveSection(current);
                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
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
        <main className="min-h-screen bg-background pt-[100px] md:pt-[120px]">
            {/* JSON-LD */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

            {/* Breadcrumb — minimal */}
            <div className="border-b border-border/50">
                <div className="container-custom max-w-6xl py-3">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
                        <Link href="/" className="hover:text-primary transition-colors shrink-0">Trang chủ</Link>
                        <span className="shrink-0">»</span>
                        <Link href="/tin-tuc" className="hover:text-primary transition-colors shrink-0">Tin Tức</Link>
                        <span className="shrink-0">»</span>
                        <span className="text-foreground/70 line-clamp-1">{post.title}</span>
                    </div>
                </div>
            </div>

            <div className="container-custom max-w-6xl py-6 md:py-12">
                <div className="grid lg:grid-cols-12 gap-8 xl:gap-12">

                    {/* ===== Main Content ===== */}
                    <article className="lg:col-span-8 min-w-0">
                        {/* Header — clean */}
                        <header className="mb-4 md:mb-8">
                            <h1 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-foreground mb-4 md:mb-5 leading-[1.3]">
                                {post.title}
                            </h1>

                            {/* Meta — one line, minimal */}
                            <div className="flex items-center flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <Calendar size={12} />
                                    {formatDate(post.published_at)}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock size={12} />
                                    {readTime} phút đọc
                                </span>
                                {post.category && (
                                    <Link
                                        href={`/tin-tuc?category=${post.category}`}
                                        className="text-primary hover:underline"
                                    >
                                        {post.category}
                                    </Link>
                                )}
                            </div>
                        </header>

                        {/* Featured Image */}
                        {post.featured_image && (
                            <div className="rounded-lg overflow-hidden mb-4 md:mb-8 bg-secondary/30">
                                <img
                                    src={post.featured_image}
                                    alt={post.title}
                                    className="w-full h-auto"
                                    onError={e => { e.currentTarget.style.display = 'none'; }}
                                />
                            </div>
                        )}

                        {/* Mobile TOC */}
                        {toc.length > 0 && (
                            <div className="lg:hidden mb-6">
                                <button
                                    onClick={() => setShowMobileToc(!showMobileToc)}
                                    className="w-full flex items-center justify-between px-4 py-3 bg-card border border-border rounded-lg text-sm font-medium text-foreground"
                                >
                                    <span className="flex items-center gap-2">
                                        <List size={15} />
                                        Mục lục ({toc.length})
                                    </span>
                                    <ChevronRight size={15} className={`transition-transform ${showMobileToc ? 'rotate-90' : ''}`} />
                                </button>
                                {showMobileToc && (
                                    <nav className="mt-2 p-3 bg-card border border-border rounded-lg space-y-1">
                                        {toc.map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                onClick={() => setShowMobileToc(false)}
                                                className={`block text-sm py-1.5 px-3 rounded transition-colors ${item.level === 3 ? "pl-6 text-xs" : ""
                                                    } ${activeSection === item.id
                                                        ? "text-primary font-medium"
                                                        : "text-muted-foreground hover:text-foreground"
                                                    }`}
                                            >
                                                {item.text}
                                            </a>
                                        ))}
                                    </nav>
                                )}
                            </div>
                        )}

                        {/* ===== Article Body ===== */}
                        <div
                            ref={contentRef}
                            className="prose prose-lg dark:prose-invert max-w-none
                                prose-headings:font-bold prose-headings:text-foreground
                                prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:mt-10 prose-h2:mb-4
                                prose-h3:text-lg prose-h3:sm:text-xl prose-h3:mt-7 prose-h3:mb-3
                                prose-p:text-muted-foreground prose-p:leading-[1.85] prose-p:mb-5
                                prose-li:text-muted-foreground
                                prose-strong:text-foreground prose-strong:font-semibold
                                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                                prose-blockquote:border-l-4 prose-blockquote:border-primary/50 prose-blockquote:bg-secondary/20 prose-blockquote:rounded-r-lg prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:not-italic prose-blockquote:text-muted-foreground
                                prose-img:rounded-lg prose-img:my-6 prose-img:mx-auto
                                prose-table:border-collapse prose-table:w-full
                                prose-th:bg-secondary/50 prose-th:px-4 prose-th:py-2.5 prose-th:text-left prose-th:text-foreground prose-th:text-sm prose-th:font-semibold prose-th:border prose-th:border-border
                                prose-td:px-4 prose-td:py-2.5 prose-td:text-sm prose-td:border prose-td:border-border prose-td:text-muted-foreground"
                            dangerouslySetInnerHTML={{ __html: processedContent }}
                        />

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="mt-10 pt-6 border-t border-border/50">
                                <div className="flex flex-wrap items-center gap-2">
                                    {post.tags.map(tag => (
                                        <Link
                                            key={tag}
                                            href={`/tin-tuc?tag=${tag}`}
                                            className="px-3 py-1 bg-secondary/50 hover:bg-secondary text-xs text-muted-foreground hover:text-foreground rounded transition-colors"
                                        >
                                            #{tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Post Navigation */}
                        <div className="mt-10 pt-6 border-t border-border/50 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <Link
                                href="/tin-tuc"
                                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                            >
                                <ArrowLeft size={16} className="text-muted-foreground group-hover:text-primary shrink-0" />
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
                                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors sm:justify-end sm:text-right"
                                >
                                    <div className="min-w-0 sm:order-1">
                                        <span className="text-xs text-muted-foreground">Bài tiếp</span>
                                        <p className="text-foreground text-sm font-medium truncate group-hover:text-primary transition-colors">
                                            {relatedPosts[0].title}
                                        </p>
                                    </div>
                                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary shrink-0 sm:order-2" />
                                </Link>
                            )}
                        </div>
                    </article>

                    {/* ===== Sidebar ===== */}
                    <aside className="lg:col-span-4 hidden lg:block">
                        <div className="sticky top-28 space-y-6">
                            {/* TOC */}
                            {toc.length > 0 && (
                                <div className="border border-border/50 rounded-lg p-5">
                                    <h4 className="font-semibold text-foreground mb-4 text-sm">Mục lục</h4>
                                    <nav className="space-y-0.5 max-h-[320px] overflow-y-auto">
                                        {toc.map((item) => (
                                            <a
                                                key={item.id}
                                                href={`#${item.id}`}
                                                className={`block text-[13px] py-1.5 px-3 rounded transition-colors leading-snug ${item.level === 3 ? "pl-6 text-xs" : ""
                                                    } ${activeSection === item.id
                                                        ? "text-primary font-medium bg-primary/5"
                                                        : "text-muted-foreground hover:text-foreground"
                                                    }`}
                                            >
                                                {item.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>
                            )}

                            {/* Related Posts */}
                            {relatedPosts.length > 0 && (
                                <div className="border border-border/50 rounded-lg p-5">
                                    <h4 className="font-semibold text-foreground mb-4 text-sm">Bài viết liên quan</h4>
                                    <div className="space-y-4">
                                        {relatedPosts.map(rPost => (
                                            <Link key={rPost.id} href={`/tin-tuc/${rPost.slug}`} className="group block">
                                                <h5 className="text-sm text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                                                    {rPost.title}
                                                </h5>
                                                <span className="text-xs text-muted-foreground">
                                                    {formatDate(rPost.published_at)}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTA */}
                            <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
                                <h4 className="font-semibold text-foreground mb-2 text-sm">So sánh sàn Forex</h4>
                                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                                    Tìm sàn giao dịch phù hợp nhất cho bạn.
                                </p>
                                <Link
                                    href="/so-sanh"
                                    className="block w-full py-2 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg text-center transition-colors"
                                >
                                    So sánh ngay →
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Mobile Related Posts */}
            {relatedPosts.length > 0 && (
                <div className="lg:hidden border-t border-border/50 py-8">
                    <div className="container-custom">
                        <h3 className="font-semibold text-foreground mb-4">Bài viết liên quan</h3>
                        <div className="space-y-4">
                            {relatedPosts.slice(0, 4).map(rPost => (
                                <Link key={rPost.id} href={`/tin-tuc/${rPost.slug}`} className="group block">
                                    <h5 className="text-sm text-foreground group-hover:text-primary transition-colors leading-snug mb-1">
                                        {rPost.title}
                                    </h5>
                                    <span className="text-xs text-muted-foreground">
                                        {formatDate(rPost.published_at)}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
