import Link from "next/link";
import { ChevronRight, Calendar, BookOpen } from "lucide-react";
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
        return null;
    }

    return (
        <section className="py-12 border-t border-border">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary ring-1 ring-primary/20">
                    <BookOpen size={24} />
                </div>
                <h2 className="text-2xl font-bold text-foreground tracking-tight">Bài Viết Chuyên Sâu Từ Đội Ngũ</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-7">
                {posts.map((post) => (
                    <Link
                        key={post.id}
                        href={`/kien-thuc-forex/${post.slug}`}
                        className="group flex flex-col bg-card/40 backdrop-blur-sm border border-border/60 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                    >
                        {post.featured_image && (
                            <div className="relative w-full aspect-[16/9] overflow-hidden">
                                <img
                                    src={post.featured_image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                <div className="absolute top-3 left-3">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-primary px-3 py-1 rounded-full shadow-lg">
                                        Premium
                                    </span>
                                </div>
                            </div>
                        )}
                        <div className="p-5 flex flex-col flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                {!post.featured_image && (
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                                        Kiến thức
                                    </span>
                                )}
                                <span className="text-xs text-muted-foreground flex items-center gap-1 border-border">
                                    <Calendar size={12} /> {formatDate(post.published_at)}
                                </span>
                            </div>
                            <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2 leading-snug">
                                {post.title}
                            </h3>
                            <p className="text-[13.5px] text-muted-foreground line-clamp-2 mb-4 flex-1 leading-relaxed">
                                {post.excerpt}
                            </p>
                            <div className="mt-auto pt-1 flex items-center text-sm font-semibold text-primary gap-1 group-hover:gap-2 transition-all">
                                Đọc tiếp <ChevronRight size={14} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
