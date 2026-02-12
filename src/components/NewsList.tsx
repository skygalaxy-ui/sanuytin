"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag, Search, TrendingUp, Filter, ChevronRight, Flame } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { getPosts, Post } from "@/lib/supabase";

interface NewsListProps {
    limit?: number;
    category?: string;
}

const CATEGORY_MAP: Record<string, { label: string; color: string }> = {
    "tin-tuc": { label: "Tin Tức", color: "bg-blue-500" },
    "kien-thuc": { label: "Kiến Thức", color: "bg-emerald-500" },
    "huong-dan": { label: "Hướng Dẫn", color: "bg-amber-500" },
    "phan-tich": { label: "Phân Tích", color: "bg-purple-500" },
    "review": { label: "Review Sàn", color: "bg-rose-500" },
};

export default function NewsList({ limit = 40, category }: NewsListProps) {
    const [allPosts, setAllPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState<string>(category || "all");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        async function fetchPosts() {
            const data = await getPosts(true);
            setAllPosts(data);
            setLoading(false);
        }
        fetchPosts();
    }, []);

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
        return filtered.slice(0, limit);
    }, [allPosts, activeCategory, searchQuery, limit]);

    const featuredPost = filteredPosts[0];
    const remainingPosts = filteredPosts.slice(1);

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
            month: "long",
            year: "numeric"
        });
    };

    const getReadTime = (content?: string) => {
        if (!content) return 3;
        const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
        return Math.max(2, Math.ceil(words / 200));
    };

    const getCategoryInfo = (cat: string) => CATEGORY_MAP[cat] || { label: cat, color: "bg-slate-500" };

    if (loading) {
        return (
            <div className="space-y-8">
                {/* Skeleton featured */}
                <div className="rounded-2xl overflow-hidden bg-card border border-border animate-pulse">
                    <div className="grid lg:grid-cols-2">
                        <div className="aspect-[16/10] lg:aspect-auto bg-slate-800" />
                        <div className="p-8 space-y-4">
                            <div className="h-4 bg-slate-800 rounded w-1/4" />
                            <div className="h-8 bg-slate-800 rounded" />
                            <div className="h-8 bg-slate-800 rounded w-3/4" />
                            <div className="h-4 bg-slate-800 rounded w-2/3" />
                            <div className="h-4 bg-slate-800 rounded w-1/2" />
                        </div>
                    </div>
                </div>
                {/* Skeleton grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden animate-pulse">
                            <div className="aspect-video bg-slate-800" />
                            <div className="p-5 space-y-3">
                                <div className="h-3 bg-slate-800 rounded w-1/3" />
                                <div className="h-5 bg-slate-800 rounded" />
                                <div className="h-3 bg-slate-800 rounded w-2/3" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Search & Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                {/* Category Tabs */}
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setActiveCategory("all")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === "all"
                                ? "bg-primary text-white shadow-lg shadow-primary/25"
                                : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                            }`}
                    >
                        Tất cả ({categoryCounts.all || 0})
                    </button>
                    {Object.entries(CATEGORY_MAP).map(([key, { label }]) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === key
                                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                                }`}
                        >
                            {label} ({categoryCounts[key] || 0})
                        </button>
                    ))}
                </div>
                {/* Search */}
                <div className="relative w-full md:w-72">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Tìm bài viết..."
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 bg-secondary/60 border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="grid lg:grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-8">
                    {filteredPosts.length === 0 && (
                        <div className="text-center py-16 bg-card rounded-2xl border border-border">
                            <Search size={48} className="mx-auto text-muted-foreground mb-4" />
                            <h3 className="text-xl font-bold text-foreground mb-2">Không tìm thấy bài viết</h3>
                            <p className="text-muted-foreground">Thử thay đổi từ khóa hoặc danh mục khác</p>
                        </div>
                    )}

                    {/* Featured Post */}
                    {featuredPost && (
                        <Link href={`/tin-tuc/${featuredPost.slug}`} className="block group">
                            <article className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                                <div className="grid md:grid-cols-2">
                                    <div className="aspect-[16/10] md:aspect-auto md:min-h-[320px] bg-secondary/50 overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10" />
                                        <img
                                            src={featuredPost.featured_image || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"}
                                            alt={featuredPost.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            onError={e => { e.currentTarget.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"; }}
                                        />
                                        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                                            <span className={`${getCategoryInfo(featuredPost.category || '').color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                                                {getCategoryInfo(featuredPost.category || '').label}
                                            </span>
                                            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                                                <Flame size={12} /> Nổi bật
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={14} className="text-primary" />
                                                {formatDate(featuredPost.published_at)}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <Clock size={14} className="text-primary" />
                                                {getReadTime(featuredPost.content)} phút đọc
                                            </span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                        <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                                            {featuredPost.excerpt}
                                        </p>
                                        <span className="inline-flex items-center text-primary font-bold group-hover:gap-3 transition-all">
                                            Đọc chi tiết <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    )}

                    {/* Post Grid */}
                    {remainingPosts.length > 0 && (
                        <div className="grid sm:grid-cols-2 gap-6">
                            {remainingPosts.map((post: any) => {
                                const catInfo = getCategoryInfo(post.category || '');
                                return (
                                    <Link key={post.id} href={`/tin-tuc/${post.slug}`} className="block group">
                                        <article className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col">
                                            <div className="aspect-[16/10] bg-secondary/50 overflow-hidden relative">
                                                <img
                                                    src={post.featured_image || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    onError={e => { e.currentTarget.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"; }}
                                                />
                                                <span className={`absolute top-3 left-3 ${catInfo.color} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                                                    {catInfo.label}
                                                </span>
                                            </div>
                                            <div className="p-5 flex-1 flex flex-col">
                                                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar size={12} />
                                                        {formatDate(post.published_at)}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock size={12} />
                                                        {getReadTime(post.content)} phút
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-snug flex-grow-0">
                                                    {post.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed flex-1">
                                                    {post.excerpt}
                                                </p>
                                                <span className="inline-flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all mt-auto">
                                                    Đọc thêm <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </div>
                                        </article>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-6">
                    <div className="sticky top-28 space-y-6">
                        {/* Popular Posts */}
                        <div className="bg-card border border-border rounded-2xl p-5">
                            <h4 className="font-bold text-foreground mb-5 flex items-center gap-2 text-base">
                                <TrendingUp size={18} className="text-primary" />
                                Bài viết phổ biến
                            </h4>
                            <div className="space-y-4">
                                {popularPosts.map((post, idx) => (
                                    <Link key={post.id} href={`/tin-tuc/${post.slug}`} className="group flex gap-3">
                                        <div className="relative w-20 h-16 rounded-xl overflow-hidden bg-secondary shrink-0">
                                            <img
                                                src={post.featured_image || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&q=60"}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                                                onError={e => { e.currentTarget.src = "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&q=60"; }}
                                            />
                                            <span className="absolute top-1 left-1 w-5 h-5 bg-primary text-white text-[10px] font-bold rounded-md flex items-center justify-center">
                                                {idx + 1}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h5 className="text-sm font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                                {post.title}
                                            </h5>
                                            <span className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                                                <Calendar size={10} />
                                                {formatDate(post.published_at)}
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Categories Widget */}
                        <div className="bg-card border border-border rounded-2xl p-5">
                            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-base">
                                <Filter size={18} className="text-primary" />
                                Danh mục
                            </h4>
                            <div className="space-y-1">
                                {Object.entries(CATEGORY_MAP).map(([key, { label, color }]) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveCategory(key)}
                                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all ${activeCategory === key
                                                ? "bg-primary/10 text-primary font-medium"
                                                : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                                            }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
                                            {label}
                                        </span>
                                        <span className="text-xs bg-secondary/80 px-2 py-0.5 rounded-full">
                                            {categoryCounts[key] || 0}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* CTA Widget */}
                        <div className="bg-gradient-to-br from-primary/15 via-blue-600/10 to-purple-600/15 border border-primary/20 rounded-2xl p-6">
                            <h4 className="font-bold text-foreground mb-2 text-base">🚀 Bắt đầu giao dịch</h4>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                So sánh các sàn Forex uy tín và chọn sàn phù hợp nhất cho bạn.
                            </p>
                            <Link
                                href="/so-sanh"
                                className="block w-full py-2.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl text-center text-sm transition-colors"
                            >
                                So sánh sàn ngay
                            </Link>
                        </div>

                        {/* Tags Cloud */}
                        <div className="bg-card border border-border rounded-2xl p-5">
                            <h4 className="font-bold text-foreground mb-4 flex items-center gap-2 text-base">
                                <Tag size={18} className="text-primary" />
                                Tags phổ biến
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {["Forex", "Vàng", "Bitcoin", "Fed", "EUR/USD", "Exness", "XM", "RSI", "Quản lý vốn", "Nến Nhật", "Scalping", "MT4"].map(tag => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-secondary/50 hover:bg-secondary text-xs text-muted-foreground hover:text-foreground rounded-full cursor-pointer transition-colors"
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
