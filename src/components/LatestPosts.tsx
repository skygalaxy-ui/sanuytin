"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Bookmark, Newspaper } from "lucide-react";
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

    // Fallback data khi chưa có bài viết
    const fallbackPosts = [
        {
            id: 1,
            slug: "gia-vang-pha-dinh-2026",
            title: "Giá Vàng (XAU/USD) tiếp tục phá đỉnh lịch sử 2026",
            excerpt: "Căng thẳng địa chính trị leo thang khiến nhu cầu trú ẩn an toàn vào vàng tăng mạnh.",
            published_at: "2026-01-27",
            category: "Thị Trường",
            featured_image: "https://sanuytin.net/wp-content/uploads/2025/11/gia-vang-tang-manh.jpg"
        },
        {
            id: 2,
            slug: "fed-giu-nguyen-lai-suat",
            title: "FED giữ nguyên lãi suất trong kỳ họp tháng 1",
            excerpt: "Cục dự trữ liên bang Mỹ quyết định giữ nguyên lãi suất, gây áp lực lên đồng USD.",
            published_at: "2026-01-26",
            category: "Kinh Tế",
            featured_image: "https://sanuytin.net/wp-content/uploads/2025/11/fed-lai-suat.jpg"
        },
        {
            id: 3,
            slug: "top-3-cap-tien-bien-dong",
            title: "Top 3 cặp tiền tệ biến động mạnh nhất tuần qua",
            excerpt: "GBP/JPY, EUR/USD và USD/CHF là những cặp tiền có biên độ dao động lớn nhất.",
            published_at: "2026-01-25",
            category: "Phân Tích",
            featured_image: "https://sanuytin.net/wp-content/uploads/2025/11/forex-market-news.jpg"
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

    if (loading) {
        return (
            <section id="blog" className="py-16 bg-slate-50 dark:bg-slate-950/50">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-3">
                        <div>
                            <h2 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Tin Tức Mới Nhất</h2>
                            <p className="text-muted-foreground">Cập nhật thị trường Forex, vàng, tiền điện tử mới nhất.</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 animate-pulse">
                                <div className="aspect-video bg-slate-200 dark:bg-slate-800" />
                                <div className="p-4 space-y-3">
                                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/3" />
                                    <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded" />
                                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="blog" className="py-16 bg-slate-50 dark:bg-slate-950/50">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-3">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                            <Newspaper size={28} />
                        </div>
                        <div>
                            <h2 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1">Tin Tức Mới Nhất</h2>
                            <p className="text-muted-foreground">Cập nhật thị trường Forex, vàng, tiền điện tử.</p>
                        </div>
                    </div>
                    <Link href="/tin-tuc" className="text-primary dark:text-blue-400 font-bold hover:underline flex items-center gap-1">
                        Xem tất cả tin tức <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {displayPosts.map((post: any) => (
                        <article key={post.id} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-800 flex flex-col h-full group">
                            <Link href={`/tin-tuc/${post.slug}`}>
                                <div className="aspect-video relative overflow-hidden bg-slate-200 dark:bg-slate-800">
                                    <img
                                        src={post.featured_image || "https://placehold.co/600x400/1e293b/ffffff?text=News"}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://placehold.co/600x400/1e293b/ffffff?text=News";
                                        }}
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-slate-800 dark:text-slate-200 flex items-center gap-1">
                                        <Bookmark size={12} className="text-primary dark:text-blue-400 fill-current" />
                                        {post.category || "Tin tức"}
                                    </div>
                                </div>
                            </Link>

                            <div className="p-4 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                    <Calendar size={14} />
                                    {formatDate(post.published_at)}
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 line-clamp-2 hover:text-primary dark:hover:text-blue-400 transition-colors">
                                    <Link href={`/tin-tuc/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/tin-tuc/${post.slug}`}
                                    className="inline-flex items-center text-primary dark:text-blue-400 font-semibold text-sm hover:gap-2 transition-all"
                                >
                                    Đọc tiếp <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
