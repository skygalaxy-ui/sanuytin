import Link from "next/link";
import { ArrowRight, Calendar, Bookmark } from "lucide-react";
import { posts } from "@/data/posts";

export default function LatestPosts() {
    return (
        <section id="blog" className="py-16 bg-slate-50 dark:bg-slate-950/50">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-3">
                    <div>
                        <h2 className="text-xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">Kiến Thức Forex Mới Nhất</h2>
                        <p className="text-muted-foreground">Cập nhật chiến lược, nhận định thị trường và hướng dẫn giao dịch.</p>
                    </div>
                    <Link href="/kien-thuc-forex" className="text-primary dark:text-blue-400 font-bold hover:underline flex items-center gap-1">
                        Xem tất cả bài viết <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <article key={post.id} className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-800 flex flex-col h-full group">
                            <div className="aspect-video relative overflow-hidden bg-slate-200 dark:bg-slate-800">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-slate-800 dark:text-slate-200 flex items-center gap-1">
                                    <Bookmark size={12} className="text-primary dark:text-blue-400 fill-current" />
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-4 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                                    <Calendar size={14} />
                                    {post.date}
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 line-clamp-2 hover:text-primary dark:hover:text-blue-400 transition-colors">
                                    <Link href={`/kien-thuc-forex/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                                    {post.excerpt}
                                </p>

                                <Link
                                    href={`/kien-thuc-forex/${post.slug}`}
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
