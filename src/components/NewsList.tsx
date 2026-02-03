"use client";

import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { getPosts, Post } from "@/lib/supabase";

interface NewsListProps {
    limit?: number;
    category?: string;
}

export default function NewsList({ limit = 3, category }: NewsListProps) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            const data = await getPosts(true); // only published
            let filtered = data;

            if (category) {
                filtered = data.filter(p => p.category === category);
            }

            setPosts(filtered.slice(0, limit));
            setLoading(false);
        }
        fetchPosts();
    }, [limit, category]);

    // Fallback data khi chưa có bài viết trong database
    const fallbackNews = [
        {
            id: 1,
            slug: "gia-vang-pha-dinh-2026",
            title: "Giá Vàng (XAU/USD) tiếp tục phá đỉnh lịch sử 2026",
            excerpt: "Căng thẳng địa chính trị leo thang khiến nhu cầu trú ẩn an toàn vào vàng tăng mạnh. Giá vàng đã tăng hơn 15% trong quý đầu năm 2026.",
            published_at: "2026-02-02",
            category: "Thị Trường",
            featured_image: "https://sanuytin.net/wp-content/uploads/2025/11/gia-vang-tang-manh.jpg"
        },
        {
            id: 2,
            slug: "fed-giu-nguyen-lai-suat",
            title: "FED giữ nguyên lãi suất trong kỳ họp tháng 1",
            excerpt: "Cục dự trữ liên bang Mỹ quyết định giữ nguyên lãi suất, gây áp lực lên đồng USD và tạo cơ hội cho các cặp tiền khác.",
            published_at: "2026-02-01",
            category: "Kinh Tế",
            featured_image: "https://sanuytin.net/wp-content/uploads/2025/11/fed-lai-suat.jpg"
        },
        {
            id: 3,
            slug: "top-3-cap-tien-bien-dong",
            title: "Top 3 cặp tiền tệ biến động mạnh nhất tuần qua",
            excerpt: "GBP/JPY, EUR/USD và USD/CHF là những cặp tiền có biên độ dao động lớn nhất, tạo nhiều cơ hội giao dịch cho trader.",
            published_at: "2026-01-31",
            category: "Phân Tích",
            featured_image: "https://sanuytin.net/wp-content/uploads/2025/11/forex-market-news.jpg"
        },
        {
            id: 4,
            slug: "bitcoin-vuot-100000-usd",
            title: "Bitcoin vượt mốc $100,000 lần đầu tiên trong lịch sử",
            excerpt: "Đồng tiền điện tử lớn nhất thế giới đạt mức cao kỷ lục mới giữa làn sóng đầu tư từ các tổ chức lớn.",
            published_at: "2026-01-30",
            category: "Crypto",
            featured_image: "https://sanuytin.net/wp-content/uploads/2025/11/bitcoin-news.jpg"
        },
        {
            id: 5,
            slug: "lich-kinh-te-tuan-nay",
            title: "Lịch kinh tế tuần này: Non-Farm Payrolls và CPI Mỹ",
            excerpt: "Tuần giao dịch sôi động với các sự kiện kinh tế quan trọng có thể tác động mạnh đến thị trường ngoại hối.",
            published_at: "2026-01-29",
            category: "Sự Kiện",
            featured_image: "https://sanuytin.net/wp-content/uploads/2025/11/economic-calendar.jpg"
        },
        {
            id: 6,
            slug: "exness-giam-spread-eurusd",
            title: "Exness công bố giảm spread cho cặp EUR/USD",
            excerpt: "Sàn giao dịch hàng đầu thông báo cắt giảm chi phí giao dịch để thu hút nhà đầu tư mới.",
            published_at: "2026-01-28",
            category: "Tin Sàn",
            featured_image: "https://sanuytin.net/wp-content/uploads/2025/10/exness-sanuytin.jpg"
        }
    ];

    const displayPosts = posts.length > 0 ? posts : fallbackNews.slice(0, limit);

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
            <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-card dark:bg-card/40 rounded-2xl border border-border overflow-hidden animate-pulse">
                        <div className="aspect-video bg-slate-700" />
                        <div className="p-6 space-y-3">
                            <div className="h-4 bg-slate-700 rounded w-1/3" />
                            <div className="h-6 bg-slate-700 rounded" />
                            <div className="h-4 bg-slate-700 rounded w-2/3" />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayPosts.map((item: any) => (
                <article key={item.id} className="bg-card dark:bg-card/40 rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all group">
                    <Link href={`/tin-tuc/${item.slug}`}>
                        <div className="aspect-[16/10] bg-secondary/50 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60" />
                            <img
                                src={item.featured_image || "https://placehold.co/600x400/1e293b/ffffff?text=News"}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/600x400/1e293b/ffffff?text=News";
                                }}
                            />
                            <span className="absolute bottom-4 left-4 z-20 bg-primary text-white text-sm font-bold px-4 py-1.5 rounded-full">
                                {item.category}
                            </span>
                        </div>
                        <div className="p-7">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                <Calendar size={15} />
                                {formatDate(item.published_at)}
                            </div>
                            <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground mb-5 line-clamp-3 text-base leading-relaxed">
                                {item.excerpt}
                            </p>
                            <span className="inline-flex items-center text-primary font-bold text-base group-hover:gap-2 transition-all">
                                Đọc chi tiết <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    </Link>
                </article>
            ))}
        </div>
    );
}
