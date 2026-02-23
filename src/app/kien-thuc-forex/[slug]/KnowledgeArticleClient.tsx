"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Link from "next/link";
import { Post } from "@/lib/supabase";
import {
    ChevronRight, ChevronUp, Calendar, Clock,
    ArrowLeft, ArrowRight, List,
    GraduationCap, Sparkles, BookOpen
} from "lucide-react";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

function getPostUrl(post: { slug: string; category?: string }) {
    const category = post.category || '';
    if (['tin-tuc', 'phan-tich', 'review'].includes(category)) {
        return `/tin-tuc/${post.slug}`;
    }
    return `/kien-thuc-forex/${post.slug}`;
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

interface SidebarBroker {
    id: number;
    name: string;
    slug: string;
    logo: string;
    score: number;
}

interface KnowledgeArticleClientProps {
    post: Post;
    relatedPosts: Post[];
    slug: string;
    topBrokers: SidebarBroker[];
}

export default function KnowledgeArticleClient({ post, relatedPosts, slug, topBrokers }: KnowledgeArticleClientProps) {
    const [activeSection, setActiveSection] = useState("");
    const [readProgress, setReadProgress] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    const { processedContent, toc } = useMemo(() => {
        if (!post?.content) return { processedContent: '', toc: [] };
        const result = processContentWithToc(post.content);
        return { processedContent: result.processedHtml, toc: result.tocItems };
    }, [post?.content]);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                if (!contentRef.current) { ticking = false; return; }
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
                    const sectionRect = section.getBoundingClientRect();
                    if (sectionRect.top <= 150 && sectionRect.bottom >= 0) {
                        setActiveSection(section.id);
                    }
                });
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
                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground flex-wrap">
                        <Link href="/" className="hover:text-primary transition-colors shrink-0">
                            Trang chủ
                        </Link>
                        <ChevronRight size={14} className="shrink-0" />
                        <Link href="/kien-thuc-forex" className="hover:text-primary transition-colors shrink-0">
                            Kiến thức Forex
                        </Link>
                        <ChevronRight size={14} className="shrink-0" />
                        <span className="text-foreground font-medium line-clamp-1">
                            {post.title}
                        </span>
                    </div>
                </div>
            </div>

            <div className="container-custom max-w-7xl py-6 md:py-12">
                <div className="grid lg:grid-cols-12 gap-8 xl:gap-12">

                    {/* Main Content */}
                    <article className="lg:col-span-8">
                        <header className="mb-4 md:mb-8">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                                    <GraduationCap size={20} />
                                </div>
                                <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-bold rounded-full">
                                    Kiến thức Forex
                                </span>
                            </div>

                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 md:mb-6 leading-tight tracking-tight">
                                {post.title}
                            </h1>

                            {post.excerpt && (
                                <p className="text-base md:text-xl text-muted-foreground leading-relaxed mb-4 md:mb-6">
                                    {post.excerpt}
                                </p>
                            )}

                            <div className="flex flex-wrap items-center gap-3 md:gap-6 text-xs md:text-sm text-muted-foreground pb-4 md:pb-6 border-b border-border">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xs md:text-sm">
                                        SUT
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground text-xs md:text-sm">Sàn Uy Tín</p>
                                        <p className="text-[10px] md:text-xs text-muted-foreground">Chuyên gia Forex</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                                    <span className="flex items-center gap-1">
                                        <Calendar size={12} className="text-green-500" />
                                        {formatDate(post.published_at)}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={12} className="text-green-500" />
                                        {readTime} phút đọc
                                    </span>
                                </div>
                            </div>
                        </header>

                        {/* Featured Image */}
                        {post.featured_image && (
                            <div className="aspect-video rounded-xl md:rounded-2xl overflow-hidden mb-4 md:mb-8 bg-secondary/50 shadow-lg">
                                <img
                                    src={post.featured_image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                    onError={e => { e.currentTarget.style.display = 'none'; }}
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
                            {/* TOC */}
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

                            {/* Top Brokers */}
                            <div className="bg-card border border-border rounded-2xl p-5">
                                <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                                    <BookOpen size={16} className="text-green-500" />
                                    Sàn Forex Uy Tín
                                </h4>
                                <div className="space-y-3">
                                    {topBrokers.map((b, i) => (
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
                                            <img src={b.logo} alt={b.name} className="w-8 h-8 object-contain rounded-md bg-white border border-border/50" loading="lazy" />
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
                                    <h4 className="font-bold text-foreground mb-4">Bài học liên quan</h4>
                                    <div className="space-y-4">
                                        {relatedPosts.map(rPost => (
                                            <Link
                                                key={rPost.id}
                                                href={getPostUrl(rPost)}
                                                className="group flex gap-3"
                                            >
                                                <div className="w-20 h-14 rounded-lg overflow-hidden bg-secondary shrink-0">
                                                    {rPost.featured_image ? (
                                                        <img src={rPost.featured_image} alt={rPost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" loading="lazy" />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500/20 to-green-500/5 text-green-500/40 font-bold">
                                                            {rPost.title?.charAt(0)}
                                                        </div>
                                                    )}
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
