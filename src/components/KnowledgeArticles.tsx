"use client";

import Link from "next/link";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { getPostsByCategory, Post } from "@/lib/supabase";

export default function KnowledgeArticles() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            const data = await getPostsByCategory("kien-thuc");
            setPosts(data);
            setLoading(false);
        }
        fetchPosts();
    }, []);

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
            <section className="py-12 border-t border-border">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <BookOpen size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Bài Viết Mới Nhất</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-card dark:bg-card/40 border border-border rounded-2xl p-5 animate-pulse">
                            <div className="h-4 bg-slate-700 rounded w-1/4 mb-3" />
                            <div className="h-6 bg-slate-700 rounded mb-2" />
                            <div className="h-4 bg-slate-700 rounded w-3/4" />
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    if (posts.length === 0) {
        return null; // Không hiển thị section nếu chưa có bài
    }

    return (
        <section className="py-12 border-t border-border">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <BookOpen size={24} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Bài Viết Mới Từ Đội Ngũ</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post) => (
                    <Link
                        key={post.id}
                        href={`/kien-thuc-forex/${post.slug}`}
                        className="group flex flex-col bg-card dark:bg-card/40 border border-border rounded-2xl p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md">
                                Kiến thức
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Calendar size={12} /> {formatDate(post.published_at)}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                            {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center text-xs font-bold text-primary gap-1 group-hover:gap-2 transition-all">
                            Đọc tiếp <ArrowRight size={14} />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
