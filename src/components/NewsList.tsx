"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock, Tag, Search, TrendingUp, Filter, ChevronRight, Flame, Loader2 } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { getPosts, Post } from "@/lib/supabase";
import { isKnowledgeCategory, getArticleRoute } from "@/lib/categories";


interface NewsListProps {
    limit?: number; // Kept for backward compatibility, but we will use internal pagination
    category?: string;
}

// Color palette for dynamic categories
const CATEGORY_COLORS = [
    "bg-blue-500", "bg-emerald-500", "bg-amber-500", "bg-purple-500",
    "bg-rose-500", "bg-cyan-500", "bg-indigo-500", "bg-orange-500",
    "bg-teal-500", "bg-pink-500", "bg-lime-500", "bg-fuchsia-500",
];

const INITIAL_LOAD_COUNT = 15; // Featured (1) + 14 grid items

export default function NewsList({ limit, category }: NewsListProps) {
    const [allPosts, setAllPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState<string>(category || "all");
    const [searchQuery, setSearchQuery] = useState("");
    const [visibleCount, setVisibleCount] = useState(limit || INITIAL_LOAD_COUNT);

    useEffect(() => {
        async function fetchPosts() {
            const data = await getPosts(true);
            setAllPosts(data);
            setLoading(false);
        }
        fetchPosts();
    }, []);

    // Build dynamic category map from actual post data
    const categoryMap = useMemo(() => {
        const map: Record<string, { label: string; color: string }> = {};
        let colorIdx = 0;
        allPosts.forEach(p => {
            if (p.category && !map[p.category]) {
                map[p.category] = {
                    label: p.category_name || p.category,
                    color: CATEGORY_COLORS[colorIdx % CATEGORY_COLORS.length],
                };
                colorIdx++;
            }
        });
        return map;
    }, [allPosts]);

    const filteredPosts = useMemo(() => {
        let filtered = allPosts;
        if (activeCategory !== "all") {
            filtered = filtered.filter(p => p.category === activeCategory);
        }
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            filtered = filtered.filter(p =>
                p.title.toLowerCase().includes(q) ||
                (p.excerpt && p.excerpt.toLowerCase().includes(q))
            );
        }
        return filtered;
    }, [allPosts, activeCategory, searchQuery]);

    const visiblePosts = filteredPosts.slice(0, visibleCount);
    const featuredPost = visiblePosts[0];
    const remainingPosts = visiblePosts.slice(1);
    const hasMorePosts = visibleCount < filteredPosts.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 10);
    };

    // Reset pagination when filter changes
    useEffect(() => {
        setVisibleCount(limit || INITIAL_LOAD_COUNT);
    }, [activeCategory, searchQuery, limit]);

    // Category counts
    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { all: allPosts.length };
        allPosts.forEach(p => {
            if (p.category) counts[p.category] = (counts[p.category] || 0) + 1;
        });
        return counts;
    }, [allPosts]);

    // Popular posts (first 5 for sidebar)
    const popularPosts = allPosts.slice(0, 5);

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return "";
        return new Date(dateStr).toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    };

    const getReadTime = (content?: string) => {
        if (!content) return 3;
        const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
        return Math.max(2, Math.ceil(words / 200));
    };

    const getCategoryInfo = (cat: string) => categoryMap[cat] || { label: cat, color: "bg-slate-500" };

    if (loading) {
        return (
            <div className="space-y-8 animate-pulse">
                {/* Skeleton featured */}
                <div className="rounded-3xl h-[400px] bg-slate-800/80 border border-slate-800" />
                {/* Skeleton grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="bg-slate-900/60 rounded-3xl border border-slate-800 pt-[60%] relative">
                            <div className="absolute inset-0 p-6 flex flex-col justify-end space-y-4">
                                <div className="h-4 bg-slate-800 rounded w-1/3" />
                                <div className="h-6 bg-slate-800 rounded w-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-12">
            {/* Search & Filter Bar */}
            <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between">
                {/* Category Tabs (Mobile Scrollable) */}
                <div className="flex overflow-x-auto w-full lg:w-auto gap-2.5 pb-3 lg:pb-0 scrollbar-hide snap-x items-center">
                    <button
                        onClick={() => setActiveCategory("all")}
                        className={`snap-start whitespace-nowrap px-5 py-2 rounded-full text-[13px] md:text-sm font-bold transition-all duration-300 ${activeCategory === "all"
                            ? "bg-primary text-white shadow-lg shadow-primary/25"
                            : "bg-secondary/80 text-muted-foreground hover:bg-secondary hover:text-foreground"
                            }`}
                    >
                        Tất cả ({categoryCounts.all || 0})
                    </button>
                    {Object.entries(categoryMap).map(([key, { label }]) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`snap-start whitespace-nowrap px-5 py-2 rounded-full text-[13px] md:text-sm font-bold transition-all duration-300 ${activeCategory === key
                                ? "bg-primary text-white shadow-lg shadow-primary/25"
                                : "bg-secondary/80 text-muted-foreground hover:bg-secondary hover:text-foreground"
                                }`}
                        >
                            {label} <span className="opacity-70 ml-1 font-normal">({categoryCounts[key] || 0})</span>
                        </button>
                    ))}
                </div>
                {/* Search Box */}
                <div className="relative w-full lg:w-[320px] shrink-0">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/60" />
                    <input
                        type="text"
                        placeholder="Tìm bài viết, tiêu đề..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full pl-11 pr-5 py-2.5 bg-background border border-border hover:border-primary/50 rounded-full text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium shadow-sm"
                    />
                </div>
            </div>

            {/* Content Layout */}
            <div className="grid lg:grid-cols-12 gap-8">
                {/* Main Article Stream */}
                <div className="lg:col-span-8 space-y-8">
                    {filteredPosts.length === 0 && (
                        <div className="text-center py-20 bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-800/60">
                            <div className="w-20 h-20 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Search size={32} className="text-slate-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Trống không!</h3>
                            <p className="text-slate-400">Rất tiếc, chưa có bài viết nào khớp với tìm kiếm của bạn.</p>
                        </div>
                    )}

                    {/* Featured Super Card */}
                    {featuredPost && (
                        <Link href={getArticleRoute(featuredPost.category || '', featuredPost.slug)} className="block group">
                            <article className="relative w-full h-[400px] md:h-[500px] rounded-[32px] overflow-hidden border border-slate-800/50 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                                {/* Image Background */}
                                <Image
                                    src={featuredPost.featured_image || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80"}
                                    alt={featuredPost.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority
                                    onError={(e: any) => { e.currentTarget.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80"; }}
                                />
                                {/* Glass/Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent z-10" />
                                
                                {/* Content Block */}
                                <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 z-20 flex flex-col justify-end">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg backdrop-blur-md bg-black/40 border border-white/10 flex items-center gap-2`}>
                                            <span className={`w-2 h-2 rounded-full ${getCategoryInfo(featuredPost.category || '').color}`} />
                                            {getCategoryInfo(featuredPost.category || '').label}
                                        </span>
                                        <span className="px-4 py-1.5 rounded-full text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 backdrop-blur-md flex items-center gap-1.5">
                                            <Flame size={14} className="fill-amber-400/50" /> Tin nóng
                                        </span>
                                    </div>
                                    
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-[1.2] group-hover:text-primary transition-colors line-clamp-3">
                                        {featuredPost.title}
                                    </h2>
                                    
                                    <p className="text-slate-300 leading-relaxed mb-6 line-clamp-2 md:line-clamp-3 max-w-3xl text-sm md:text-base">
                                        {featuredPost.excerpt}
                                    </p>
                                    
                                    <div className="flex items-center gap-4 text-xs md:text-sm text-slate-400 font-medium">
                                        <span className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                                            <Calendar size={14} className="text-primary" />
                                            {formatDate(featuredPost.created_at)}
                                        </span>
                                        <span className="flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                                            <Clock size={14} className="text-primary" />
                                            {getReadTime(featuredPost.content)} phút đọc
                                        </span>
                                        <div className="ml-auto flex items-center text-primary font-bold bg-primary/10 hover:bg-primary/20 px-4 py-2 rounded-xl transition-all">
                                            Đọc tiếp <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    )}

                    {/* Secondary Post Grid */}
                    {remainingPosts.length > 0 && (
                        <div className="grid sm:grid-cols-2 gap-6">
                            {remainingPosts.map((post: any) => {
                                const catInfo = getCategoryInfo(post.category || '');
                                return (
                                    <Link key={post.id} href={getArticleRoute(post.category || '', post.slug)} className="block group h-full">
                                        <article className="bg-slate-900/60 backdrop-blur-md border border-slate-800/60 hover:border-slate-700/80 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col">
                                            {/* Image Head */}
                                            <div className="aspect-[16/10] overflow-hidden relative">
                                                <Image
                                                    src={post.featured_image || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"}
                                                    alt={post.title}
                                                    fill
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    onError={(e: any) => { e.currentTarget.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"; }}
                                                    sizes="(max-width: 768px) 100vw, 33vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                                                <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold text-white shadow-md backdrop-blur-md bg-black/40 border border-white/10 flex items-center gap-1.5`}>
                                                    <span className={`w-1.5 h-1.5 rounded-full ${catInfo.color}`} />
                                                    {catInfo.label}
                                                </span>
                                            </div>
                                            
                                            {/* Content Body */}
                                            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                                                <div>
                                                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3 font-medium">
                                                        <span className="flex items-center gap-1.5">
                                                            <Calendar size={12} className="text-primary/70" />
                                                            {formatDate(post.created_at)}
                                                        </span>
                                                        <span className="flex items-center gap-1.5">
                                                            <Clock size={12} className="text-primary/70" />
                                                            {getReadTime(post.content)}p
                                                        </span>
                                                    </div>
                                                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-[1.35]">
                                                        {post.title}
                                                    </h3>
                                                    <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
                                                        {post.excerpt}
                                                    </p>
                                                </div>
                                                <div className="pt-2 border-t border-slate-800/50 mt-auto flex items-center justify-between text-sm">
                                                    <span className="text-primary font-semibold group-hover:text-blue-400 transition-colors">Xem chi tiết</span>
                                                    <div className="w-8 h-8 rounded-full bg-slate-800/80 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-slate-300">
                                                        <ArrowRight size={14} className="group-hover:-rotate-45 transition-transform" />
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                );
                            })}
                        </div>
                    )}

                    {/* Pagination / Load More Button */}
                    {hasMorePosts && (
                        <div className="pt-6 pb-2 text-center">
                            <button
                                onClick={handleLoadMore}
                                className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-primary/50 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:scale-95"
                            >
                                <ChevronRight className="rotate-90 text-primary" size={18} />
                                Hiển thị thêm bài viết
                                <ChevronRight className="rotate-90 text-primary" size={18} />
                            </button>
                        </div>
                    )}
                </div>

                {/* Glass Sidebar */}
                <aside className="lg:col-span-4 space-y-6">
                    <div className="sticky top-28 space-y-6">
                        {/* Popular Posts Widget */}
                        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/60 rounded-[24px] p-6 shadow-2xl shadow-black/40">
                            <h4 className="font-bold text-white mb-6 flex items-center gap-2 text-lg">
                                <TrendingUp size={20} className="text-primary" />
                                Xem nhiều nhất
                            </h4>
                            <div className="space-y-5">
                                {popularPosts.map((post, idx) => (
                                    <Link key={post.id} href={getArticleRoute(post.category || '', post.slug)} className="group flex gap-4 items-center">
                                        <div className="font-black text-3xl text-slate-800 group-hover:text-primary/20 transition-colors shrink-0 w-6">
                                            {idx + 1}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h5 className="text-sm font-semibold text-slate-200 line-clamp-2 group-hover:text-primary transition-colors leading-[1.4]">
                                                {post.title}
                                            </h5>
                                            <span className="text-xs text-slate-500 mt-1.5 flex items-center gap-1.5 font-medium">
                                                {formatDate(post.created_at)}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA Conversion Suite */}
                        <div className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-slate-900 to-blue-600/10 border border-primary/20 hover:border-primary/40 rounded-[24px] p-6 transition-all group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/40 transition-colors" />
                            <h4 className="font-extrabold text-white mb-2 text-xl relative z-10">Vào lệnh hôm nay!</h4>
                            <p className="text-sm text-slate-300 mb-6 leading-relaxed relative z-10">
                                Công cụ dẹp loạn tin đồn, đánh giá khách quan các sàn Forex lớn nhất thị trường.
                            </p>
                            <Link
                                href="/so-sanh"
                                className="relative z-10 flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-blue-500 text-white font-bold rounded-xl text-center text-sm transition-all shadow-xl shadow-primary/25 hover:shadow-blue-500/40"
                            >
                                <Sparkles size={16} /> So sánh sàn ngay
                            </Link>
                        </div>

                        {/* Categories Widget */}
                        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/60 rounded-[24px] p-6">
                            <h4 className="font-bold text-white mb-5 flex items-center gap-2 text-lg">
                                <Filter size={20} className="text-primary" />
                                Chủ đề
                            </h4>
                            <div className="space-y-1.5">
                                {Object.entries(categoryMap).map(([key, { label, color }]) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveCategory(key)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all ${activeCategory === key
                                            ? "bg-primary/10 border border-primary/20 text-primary font-bold shadow-inner"
                                            : "border border-transparent text-slate-400 hover:bg-slate-800/80 hover:text-white"
                                            }`}
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className={`w-2.5 h-2.5 rounded-full ${color} shadow-sm`} />
                                            {label}
                                        </span>
                                        <span className={`text-xs px-2.5 py-1 rounded-lg font-mono ${activeCategory === key ? "bg-primary/20 text-primary" : "bg-slate-800 text-slate-500"}`}>
                                            {categoryCounts[key] || 0}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Tags Widget */}
                        <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/60 rounded-[24px] p-6">
                            <h4 className="font-bold text-white mb-5 flex items-center gap-2 text-lg">
                                <Tag size={20} className="text-primary" />
                                Xu hướng
                            </h4>
                            <div className="flex flex-wrap gap-2.5">
                                {["Forex", "Vàng", "Bitcoin", "Fed", "USD/VND", "SMC", "Price Action", "MT5", "Lot Size", "Lãi suất"].map(tag => (
                                    <span
                                        key={tag}
                                        className="px-3.5 py-1.5 bg-slate-800/80 hover:bg-primary/20 border border-slate-700/50 hover:border-primary/30 text-xs font-semibold text-slate-300 hover:text-primary rounded-xl cursor-pointer transition-all shadow-sm block"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </aside>
            </div>
        </div>
    );
}

function Sparkles(props: any) {
    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
}
