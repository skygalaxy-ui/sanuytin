import Link from "next/link";
import { ChevronRight, Calendar, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { getPostsByCategory, Post } from "@/lib/supabase";
import { KNOWLEDGE_CATEGORY_SLUGS } from "@/lib/categories";

export default async function KnowledgeArticles() {
    // Fetch from all knowledge-related categories
    const results = await Promise.all(KNOWLEDGE_CATEGORY_SLUGS.map(slug => getPostsByCategory(slug)));
    const posts = results.flat()
        .sort((a, b) => new Date(b.published_at || b.created_at).getTime() - new Date(a.published_at || a.created_at).getTime())
        .slice(0, 8);

    const formatDate = (dateStr: string | null) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        return date.toLocaleDateString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    };

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
                        className="group flex flex-col bg-card dark:bg-card/40 border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
                    >
                        {post.featured_image && (
                            <div className="relative w-full aspect-[16/9] overflow-hidden">
                                <img
                                    src={post.featured_image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                <div className="absolute top-2.5 left-2.5">
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-primary/90 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm">
                                        Kiến thức
                                    </span>
                                </div>
                            </div>
                        )}
                        <div className="px-4 py-3.5 flex flex-col flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                {!post.featured_image && (
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                                        Kiến thức
                                    </span>
                                )}
                                <span className="text-xs text-muted-foreground flex items-center gap-1 border-border">
                                    <Calendar size={12} /> {formatDate(post.published_at)}
                                </span>
                            </div>
                            <h3 className="text-[15px] font-bold text-foreground group-hover:text-primary transition-colors mb-1.5 line-clamp-2 leading-snug">
                                {post.title}
                            </h3>
                            <p className="text-[13px] text-muted-foreground line-clamp-2 mb-3 flex-1 leading-relaxed">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center text-xs font-semibold text-primary gap-1 group-hover:gap-2 transition-all">
                                Đọc tiếp <ChevronRight size={13} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
