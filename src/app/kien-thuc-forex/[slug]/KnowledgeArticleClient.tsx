"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Post } from "@/lib/supabase";
import {
    ChevronRight, ChevronUp, Calendar, Clock,
    ArrowLeft, ArrowRight, List,
    GraduationCap, Sparkles, BookOpen
} from "lucide-react";
import { getArticleRoute } from "@/lib/categories";


interface TocItem {
    id: string;
    text: string;
    level: number;
}



function processContentWithToc(html: string): { processedHtml: string; tocItems: TocItem[] } {
    const tocItems: TocItem[] = [];
    let index = 0;

    let processedHtml = html.replace(/<(h[23])([^>]*)>(.*?)<\/\1>/gi, (match, tag, attrs, content) => {
        const id = `section-${index}`;
        const text = content.replace(/<[^>]*>/g, '').trim();
        tocItems.push({ id, text, level: tag.toLowerCase() === 'h2' ? 2 : 3 });
        index++;
        return `<${tag}${attrs} id="${id}">${content}</${tag}>`;
    });

    // Add lazy loading to all images inside the content for performance
    processedHtml = processedHtml.replace(/<img([^>]*)>/gi, (match, attrs) => {
        if (!attrs.includes('loading=')) {
            return `<img${attrs} loading="lazy" decoding="async">`;
        }
        return match;
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

export default function KnowledgeArticleClient({ post: initialPost, relatedPosts: initialRelated, slug, topBrokers }: KnowledgeArticleClientProps) {
    const [post, setPost] = useState<Post>(initialPost);
    const [relatedPosts, setRelatedPosts] = useState<Post[]>(initialRelated);
    const [activeSection, setActiveSection] = useState("");
    const [readProgress, setReadProgress] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);

    // Client-side fetch: always load fresh data from Supabase (like WordPress)
    useEffect(() => {
        async function fetchFreshData() {
            try {
                const { getPostBySlug, getPosts } = await import("@/lib/supabase");
                const freshPost = await getPostBySlug(slug);
                if (freshPost) {
                    setPost(freshPost);
                    const allPosts = await getPosts(true);
                    const related = allPosts
                        .filter(p => p.id !== freshPost.id && p.category === freshPost.category)
                        .slice(0, 5);
                    setRelatedPosts(related);
                }
            } catch (err) {
                console.error('Client fetch error:', err);
            }
        }
        fetchFreshData();
    }, [slug]);

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
                    <article className="lg:col-span-8 flex flex-col items-center lg:items-start w-full">
                        <header className="mb-6 md:mb-8 relative z-10 w-full max-w-[720px]">
                            {/* Premium Mesh Glow Background */}
                            <div className="absolute -top-20 -left-10 w-[120%] h-64 bg-green-500/10 blur-[120px] -z-10 rounded-full pointer-events-none" />
                            
                            {/* Category Badge */}
                            <div className="flex items-center gap-2 mb-4 md:mb-5">
                                <div className="p-1.5 bg-green-500/10 rounded-md text-green-500">
                                    <GraduationCap size={16} />
                                </div>
                                <span className="text-green-500 text-xs md:text-sm font-bold uppercase tracking-wider">
                                    Kiến thức Forex
                                </span>
                            </div>

                            {/* Title */}
                            {/* Title */}
                            <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-black text-foreground mb-4 leading-[1.3] tracking-tight">
                                {post.title}
                            </h1>

                            {/* Excerpt */}
                            {post.excerpt && (
                                <p className="text-[16px] md:text-[18px] text-muted-foreground/90 leading-[1.6] mb-6 font-medium">
                                    {post.excerpt}
                                </p>
                            )}

                            {/* Meta Info */}
                            <div className="flex items-center gap-3 pb-5 md:pb-6 border-b border-border">
                                <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xs md:text-sm shrink-0 shadow-inner">
                                    SUT
                                </div>
                                <div className="flex flex-col gap-1 md:gap-1.5">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <p className="font-bold text-foreground text-sm md:text-base leading-none">Sàn Uy Tín</p>
                                        <span className="text-[10px] md:text-xs text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full font-semibold leading-none">
                                            Chuyên gia Forex
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                                        <span className="flex items-center gap-1.5">
                                            <Calendar size={13} className="text-green-500/80" />
                                            {formatDate(post.published_at)}
                                        </span>
                                        <span className="hidden md:flex items-center gap-1.5">
                                            <Clock size={13} className="text-green-500/80" />
                                            {readTime} phút đọc
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </header>

                        {/* Featured Image */}
                        {post.featured_image && (
                            <div className="group relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden mb-8 md:mb-12 shadow-xl ring-1 ring-border/50 w-full max-w-[800px]">
                                <img
                                    src={post.featured_image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    fetchPriority="high"
                                    decoding="async"
                                    onError={e => {
                                        const target = e.currentTarget;
                                        target.src = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200';
                                        target.className = 'w-full h-full object-cover grayscale opacity-50';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        )}

                        {/* Post Content */}
                        <div
                            ref={contentRef}
                            className="prose prose-base md:prose-lg w-full max-w-[720px] 
                                prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
                                prose-h2:text-[24px] md:prose-h2:text-[32px] prose-h2:font-extrabold prose-h2:mt-10 md:prose-h2:mt-14 prose-h2:mb-4 md:prose-h2:mb-6
                                prose-h3:text-[18px] md:prose-h3:text-[24px] prose-h3:font-bold prose-h3:mt-8 md:prose-h3:mt-10 prose-h3:mb-3 md:prose-h3:mb-4
                                prose-p:text-[16px] md:prose-p:text-[18px] prose-p:text-muted-foreground prose-p:leading-[1.6] prose-p:mb-5 md:prose-p:mb-6
                                prose-li:text-[16px] md:prose-li:text-[18px] prose-li:text-muted-foreground prose-li:marker:text-green-500 prose-li:leading-[1.6]
                                prose-strong:text-foreground prose-strong:font-semibold
                                prose-a:text-sky-400 prose-a:underline prose-a:underline-offset-4 prose-a:decoration-sky-400/40 hover:prose-a:decoration-sky-400
                                prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:bg-secondary/30 prose-blockquote:rounded-r-xl prose-blockquote:py-3 prose-blockquote:px-5 md:prose-blockquote:py-4 md:prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-foreground/90
                                prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8 md:prose-img:my-10 prose-img:w-full prose-img:ring-1 prose-img:ring-border/50
                                prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded md:prose-code:rounded-md prose-code:text-green-500
                                mx-auto lg:mx-0"
                            dangerouslySetInnerHTML={{ __html: processedContent }}
                        />

                        {/* Premium CTA Box */}
                        <div className="mt-12 mb-6 p-6 md:p-8 bg-secondary border border-border rounded-2xl md:rounded-[24px] text-center relative overflow-hidden shadow-sm w-full max-w-[720px] mx-auto lg:mx-0">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/20 blur-[80px] pointer-events-none rounded-full" />
                            <div className="relative z-10 max-w-xl mx-auto">
                                <h3 className="text-xl md:text-2xl font-extrabold text-foreground mb-3 tracking-tight">Bắt đầu hành trình Forex an toàn</h3>
                                <p className="text-muted-foreground mb-6 text-sm md:text-base leading-relaxed">
                                    Lợi nhuận bền vững luôn bắt đầu từ nền tảng an toàn. Khám phá ngay bảng xếp hạng các sàn giao dịch uy tín và minh bạch nhất dành cho nhà đầu tư Việt Nam năm 2026.
                                </p>
                                <Link
                                    href="/#ranking"
                                    className="no-style !text-white inline-flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 font-bold py-3 px-6 rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary/25 text-sm"
                                >
                                    Xem Top 10 Sàn Uy Tín Nhất <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        {/* E-E-A-T Author Credibility Box */}
                        <div className="mb-10 p-6 md:p-8 bg-green-500/5 border border-green-500/20 rounded-2xl md:rounded-[24px] w-full max-w-[720px] mx-auto lg:mx-0 flex flex-col md:flex-row gap-5 items-start md:items-center shadow-sm">
                            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg md:text-xl shrink-0 shadow-lg shadow-green-500/20">
                                SUT
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground text-base md:text-lg flex items-center gap-2">
                                    Đánh giá bởi chuyên gia Sàn Uy Tín
                                    <Sparkles size={16} className="text-green-500" />
                                </h4>
                                <p className="text-sm md:text-base text-muted-foreground mt-2 leading-relaxed">
                                    Nội dung được nghiên cứu và kiểm duyệt chặt chẽ. Đội ngũ chuyên gia của chúng tôi đã <strong>kiểm chứng hơn 200 sàn giao dịch</strong> và <strong>cảnh báo 47 sàn lừa đảo</strong> để bảo vệ nhà đầu tư Việt Nam năm 2026.
                                </p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="grid md:grid-cols-2 gap-4">
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
                                    href={getArticleRoute(relatedPosts[0].category || '', relatedPosts[0].slug)}
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
                                                href={getArticleRoute(rPost.category || '', rPost.slug)}
                                                className="group flex gap-3"
                                            >
                                                <div className="w-20 h-14 rounded-lg overflow-hidden bg-secondary shrink-0">
                                                    {rPost.featured_image ? (
                                                        <img 
                                                            src={rPost.featured_image} 
                                                            alt={rPost.title} 
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform" 
                                                            loading="lazy" 
                                                            onError={(e) => {
                                                                e.currentTarget.src = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80';
                                                            }}
                                                        />
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

                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
