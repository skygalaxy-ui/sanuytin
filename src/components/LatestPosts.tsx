"use client";

import Link from "next/link";
import { ArrowRight, Calendar, TrendingUp, BarChart3, Globe2, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { getPostsByCategory, Post } from "@/lib/supabase";

export default function LatestPosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            const data = await getPostsByCategory("tin-tuc");
            setPosts(data.slice(0, 3)); // Lấy 3 bài mới nhất
            setLoading(false);
        }
        fetchPosts();
    }, []);

    // Fallback data với icon thay vì hình ảnh
    const fallbackPosts = [
        {
            id: 1,
            slug: "gia-vang-pha-dinh-2026",
            title: "Giá Vàng (XAU/USD) tiếp tục phá đỉnh lịch sử 2026",
            excerpt: "Căng thẳng địa chính trị leo thang khiến nhu cầu trú ẩn an toàn vào vàng tăng mạnh, đẩy giá vàng lên mức cao kỷ lục.",
            published_at: "2026-02-02",
            category: "Thị Trường",
            icon: TrendingUp,
            gradient: "from-amber-500 to-orange-600"
        },
        {
            id: 2,
            slug: "fed-giu-nguyen-lai-suat",
            title: "FED giữ nguyên lãi suất trong kỳ họp tháng 1",
            excerpt: "Cục dự trữ liên bang Mỹ quyết định giữ nguyên lãi suất, gây áp lực lên đồng USD và tác động đến thị trường forex.",
            published_at: "2026-02-01",
            category: "Kinh Tế",
            icon: BarChart3,
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            id: 3,
            slug: "top-3-cap-tien-bien-dong",
            title: "Top 3 cặp tiền tệ biến động mạnh nhất tuần qua",
            excerpt: "GBP/JPY, EUR/USD và USD/CHF là những cặp tiền có biên độ dao động lớn nhất, mang lại cơ hội giao dịch hấp dẫn.",
            published_at: "2026-01-31",
            category: "Phân Tích",
            icon: Globe2,
            gradient: "from-emerald-500 to-teal-600"
        }
    ];

    const displayPosts = posts.length > 0 ? posts : fallbackPosts;

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        return date.toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    };

    // Category colors
    const getCategoryStyle = (category: string) => {
        switch (category) {
            case "Thị Trường":
                return "bg-amber-500/10 text-amber-400 border-amber-500/20";
            case "Kinh Tế":
                return "bg-blue-500/10 text-blue-400 border-blue-500/20";
            case "Phân Tích":
                return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
            default:
                return "bg-slate-500/10 text-slate-400 border-slate-500/20";
        }
    };

    const defaultGradients = [
        "from-amber-500 to-orange-600",
        "from-blue-500 to-indigo-600",
        "from-emerald-500 to-teal-600"
    ];

    if (loading) {
        return (
            <section id="blog" className="py-20 md:py-28 bg-slate-950">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                                <Sparkles size={14} className="text-blue-400" />
                                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Cập nhật mới</span>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Tin Tức Thị Trường</h2>
                            <p className="text-slate-400">Cập nhật nhanh chóng về Forex, vàng và thị trường tài chính.</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 animate-pulse">
                                <div className="aspect-[16/10] bg-slate-800" />
                                <div className="p-5 space-y-3">
                                    <div className="h-4 bg-slate-700 rounded w-1/4" />
                                    <div className="h-6 bg-slate-700 rounded" />
                                    <div className="h-4 bg-slate-700 rounded w-3/4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="blog" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                            <Sparkles size={14} className="text-blue-400" />
                            <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Cập nhật mới</span>
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Tin Tức Thị Trường</h2>
                        <p className="text-slate-400 max-w-xl">Cập nhật nhanh chóng về Forex, vàng và thị trường tài chính toàn cầu.</p>
                    </div>
                    <Link
                        href="/tin-tuc"
                        className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold transition-all"
                    >
                        Xem tất cả
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {displayPosts.map((post: any, index: number) => {
                        const IconComponent = (post as any).icon || TrendingUp;
                        const gradient = (post as any).gradient || defaultGradients[index % 3];
                        const category = post.category || "Tin tức";

                        return (
                            <article
                                key={post.id}
                                className="group bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-black/20 flex flex-col h-full"
                            >
                                <Link href={`/tin-tuc/${post.slug}`}>
                                    <div className={`aspect-[16/10] relative overflow-hidden ${!post.featured_image ? `bg-gradient-to-br ${gradient}` : 'bg-slate-800'}`}>
                                        {post.featured_image ? (
                                            <img
                                                src={post.featured_image}
                                                alt={post.featured_image_alt || post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                        ) : (
                                            <>
                                                {/* Gradient overlay with icon */}
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="relative">
                                                        <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl scale-150" />
                                                        <IconComponent size={48} className="text-white/90 relative z-10" strokeWidth={1.5} />
                                                    </div>
                                                </div>

                                                {/* Pattern overlay */}
                                                <div className="absolute inset-0 opacity-10" style={{
                                                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                                    backgroundSize: '24px 24px'
                                                }} />
                                            </>
                                        )}

                                        {/* Hover effect */}
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />

                                        {/* Category badge */}
                                        <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold border backdrop-blur-sm ${getCategoryStyle(category)}`}>
                                            {category}
                                        </div>
                                    </div>
                                </Link>

                                <div className="p-5 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                                        <Calendar size={14} />
                                        {formatDate(post.published_at)}
                                    </div>

                                    <h3 className="font-bold text-lg text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                                        <Link href={`/tin-tuc/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h3>

                                    <p className="text-slate-400 text-sm line-clamp-3 mb-4 flex-1 leading-relaxed">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        href={`/tin-tuc/${post.slug}`}
                                        className="inline-flex items-center text-blue-400 font-semibold text-sm group/link"
                                    >
                                        Đọc tiếp
                                        <ArrowRight size={16} className="ml-1 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
