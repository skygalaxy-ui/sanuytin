"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Link from "next/link";
import { Post } from "@/lib/supabase";
import {
    ChevronRight, ChevronDown, Calendar, Clock,
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

    let processed = html.replace(/<h[23][^>]*>\s*(?:\d+[\.)\-]\s*)?(?:Kết\s*[Ll]uận|KẾT\s*LUẬN)\s*<\/h[23]>/gi, '');

    const processedHtml = processed.replace(/<(h[23])([^>]*)>(.*?)<\/\1>/gi, (match, tag, attrs, content) => {
        const id = `section-${index}`;
        const cleanContent = content.replace(/^\s*\d+[\.)\-]\s*/, '');
        const text = cleanContent.replace(/<[^>]*>/g, '').trim();
        tocItems.push({ id, text, level: tag.toLowerCase() === 'h2' ? 2 : 3 });
        index++;
        return `<${tag}${attrs} id="${id}">${cleanContent}</${tag}>`;
    });

    return { processedHtml, tocItems };
}

function SidebarToc({ toc, activeSection }: { toc: TocItem[]; activeSection: string }) {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="pb-5 mb-0 border-b border-border/40">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between mb-0 group"
            >
                <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-foreground">
                    MỤC LỤC BÀI VIẾT
                </h4>
                <ChevronDown
                    size={16}
                    className={`text-muted-foreground group-hover:text-foreground transition-transform duration-200 ${isOpen ? '' : '-rotate-90'}`}
                />
            </button>
            {isOpen && (
                <nav className="mt-3 space-y-0.5 max-h-[360px] overflow-y-auto">
                    {toc.filter(item => item.level === 2).map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`flex items-start gap-2.5 text-[13px] py-1.5 transition-colors leading-snug ${activeSection === item.id
                                ? "text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-current flex-shrink-0 opacity-60" />
                            <span className="line-clamp-2">{item.text}</span>
                        </a>
                    ))}
                </nav>
            )}
        </div>
    );
}

interface ArticleClientProps {
    post: Post;
    relatedPosts: Post[];
    slug: string;
}

export default function ArticleClient({ post, relatedPosts, slug }: ArticleClientProps) {
    const [activeSection, setActiveSection] = useState("");
    const [showMobileToc, setShowMobileToc] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const { processedContent, toc } = useMemo(() => {
        if (!post?.content) return { processedContent: '', toc: [] };
        const result = processContentWithToc(post.content);
        return { processedContent: result.processedHtml, toc: result.tocItems };
    }, [post?.content]);

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
    }, []);

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return "";
        return new Date(dateStr).toLocaleDateString("vi-VN", {
            day: "2-digit", month: "long", year: "numeric"
        });
    };

    const readTime = post?.content
        ? Math.ceil(post.content.replace(/<[^>]*>/g, "").split(/\s+/).length / 200)
        : 3;

    return (
        <main className="min-h-screen bg-background pt-[100px] md:pt-[120px]">
            {/* Breadcrumb */}
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
                        {/* Header */}
                        <header className="mb-4 md:mb-8">
                            <h1 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-foreground mb-4 md:mb-5 leading-[1.3]">
                                {post.title}
                            </h1>

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
                            <div className="rounded-2xl overflow-hidden mb-6 md:mb-10 bg-secondary/30 shadow-xl shadow-primary/5">
                                <img
                                    src={post.featured_image}
                                    alt={post.featured_image_alt || post.title}
                                    className="w-full h-auto transition-transform hover:scale-[1.02] duration-700"
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
                            className="prose dark:prose-invert max-w-none
                                prose-headings:text-foreground
                                prose-h2:border-l-4 prose-h2:border-primary prose-h2:pl-4
                                prose-p:text-muted-foreground prose-p:leading-[1.85] prose-p:mb-5
                                prose-li:text-muted-foreground
                                prose-strong:text-foreground prose-strong:font-semibold
                                prose-a:text-sky-400 prose-a:underline prose-a:decoration-sky-400/40 hover:prose-a:decoration-sky-400
                                prose-blockquote:border-l-4 prose-blockquote:border-primary/50 prose-blockquote:bg-secondary/20 prose-blockquote:rounded-r-lg prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:not-italic prose-blockquote:text-muted-foreground
                                prose-img:rounded-lg prose-img:my-6 prose-img:mx-auto
                                prose-table:border-collapse prose-table:w-full
                                prose-th:bg-secondary/50 prose-th:px-4 prose-th:py-2.5 prose-th:text-left prose-th:text-foreground prose-th:text-sm prose-th:font-semibold prose-th:border prose-th:border-border
                                prose-td:px-4 prose-td:py-2.5 prose-td:text-sm prose-td:border prose-td:border-border prose-td:text-muted-foreground"
                            dangerouslySetInnerHTML={{ __html: processedContent }}
                        />

                        {/* ===== Footer Links ===== */}
                        <div className="mt-10 pt-6 border-t border-border/50">
                            <div className="space-y-3">
                                {relatedPosts.length > 0 && (
                                    <>
                                        <p className="text-[15px] font-semibold text-foreground">Bài viết liên quan:</p>
                                        <div className="flex flex-col gap-2">
                                            {relatedPosts.slice(0, 3).map(rPost => (
                                                <Link
                                                    key={rPost.id}
                                                    href={`/tin-tuc/${rPost.slug}`}
                                                    className="text-primary hover:underline text-[15px] transition-colors"
                                                >
                                                    {rPost.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                )}
                                <p className="text-[16px] text-muted-foreground leading-[1.85] mt-4">
                                    Khám phá thêm nhiều bài viết hữu ích về đầu tư và giao dịch tại{" "}
                                    <Link href="/" className="text-primary hover:underline font-medium">
                                        Sàn Uy Tín
                                    </Link>
                                    {" "} — nơi giúp bạn giao dịch thông minh và an toàn hơn mỗi ngày.
                                </p>
                            </div>
                        </div>

                        {/* Share & Tags */}
                        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            {/* Tags */}
                            <div className="flex flex-wrap items-center gap-2">
                                {post.tags && post.tags.length > 0 ? post.tags.map(tag => (
                                    <Link
                                        key={tag}
                                        href={`/tin-tuc?tag=${tag}`}
                                        className="px-3 py-1.5 bg-secondary/50 hover:bg-primary/10 hover:text-primary text-[11px] font-bold uppercase tracking-wider text-muted-foreground rounded-lg transition-all"
                                    >
                                        #{tag}
                                    </Link>
                                )) : (
                                    <span className="text-xs text-muted-foreground italic">Không có tag</span>
                                )}
                            </div>

                            {/* Share Buttons */}
                            <div className="flex items-center gap-3">
                                <span className="text-[13px] font-bold text-foreground">Chia sẻ:</span>
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=https://sanuytin.net/tin-tuc/${slug}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg shadow-blue-600/20"
                                    title="Chia sẻ lên Facebook"
                                >
                                    <svg width={18} height={18} fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                </a>
                                <a
                                    href={`https://t.me/share/url?url=https://sanuytin.net/tin-tuc/${slug}&text=${encodeURIComponent(post.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg shadow-sky-500/20"
                                    title="Chia sẻ qua Telegram"
                                >
                                    <svg width={18} height={18} fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 ml-0.5"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.62 4.498-.908 5.718-.122.518-.311.691-.497.708-.403.038-.711-.266-1.102-.522-.611-.401-1.012-.662-1.606-1.054-.686-.454-.242-.703.15-.11.102.155 1.874 1.718 1.908 1.861.004.018.009.085-.04.129-.05.044-.122.029-.174.018-.074-.015-1.253-.78-3.522-2.31-.334-.23-.635-.343-.905-.337-.297.006-.87.168-1.294.306-.52.17-1.042.261-1.117.266-.056 0-.317-.033-.443-.172-.126-.138-.032-.303.003-.338.307-.323 2.112-1.242 2.112-1.242s1.428-.596 2.144-.897c.717-.3 1.258-.23 1.547.01.29.24.364.568.364.568s.074.437.04.836c-.033.4-.17 1.4-.29 2.067z" /></svg>
                                </a>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert("Đã copy đường dẫn bài viết!");
                                    }}
                                    className="px-4 h-10 rounded-full bg-secondary text-foreground text-[13px] font-bold flex items-center gap-2 hover:bg-primary/20 hover:text-primary transition-all active:scale-95"
                                >
                                    Copy Link
                                </button>
                            </div>
                        </div>

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
                        <div className="sticky top-28 space-y-0">

                            {/* Related Posts — on top */}
                            {relatedPosts.length > 0 && (
                                <div className="pb-5 mb-5 border-b border-border/40">
                                    <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-foreground mb-4">
                                        BÀI VIẾT LIÊN QUAN
                                    </h4>
                                    <div className="space-y-3">
                                        {relatedPosts.slice(0, 5).map(rPost => (
                                            <Link
                                                key={rPost.id}
                                                href={`/tin-tuc/${rPost.slug}`}
                                                className="group flex gap-3 items-center"
                                            >
                                                <div className="w-[72px] h-[52px] rounded-md overflow-hidden flex-shrink-0 bg-secondary/50">
                                                    {rPost.featured_image ? (
                                                        <img
                                                            src={rPost.featured_image}
                                                            alt={rPost.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                            loading="lazy"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 text-primary/40 text-lg font-bold">
                                                            {rPost.title?.charAt(0)}
                                                        </div>
                                                    )}
                                                </div>
                                                <h5 className="flex-1 min-w-0 text-[13px] leading-[1.4] text-primary group-hover:text-primary/80 transition-colors line-clamp-2 font-medium">
                                                    {rPost.title}
                                                </h5>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* IN THIS ARTICLE — collapsible TOC */}
                            {toc.length > 0 && (
                                <SidebarToc toc={toc} activeSection={activeSection} />
                            )}

                            {/* CTA */}
                            <div className="mt-5 bg-primary/5 border border-primary/20 rounded-lg p-5">
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
                        <div className="space-y-3">
                            {relatedPosts.slice(0, 4).map(rPost => (
                                <Link key={rPost.id} href={`/tin-tuc/${rPost.slug}`} className="group flex gap-3 items-start">
                                    <div className="w-20 h-[60px] rounded-md overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/20 to-primary/5">
                                        {rPost.featured_image ? (
                                            <img src={rPost.featured_image} alt={rPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-primary/40 text-xl font-bold">
                                                {rPost.title?.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h5 className="text-sm text-foreground group-hover:text-primary transition-colors leading-snug mb-1 line-clamp-2">
                                            {rPost.title}
                                        </h5>
                                        <span className="text-xs text-muted-foreground">
                                            {formatDate(rPost.published_at)}
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
