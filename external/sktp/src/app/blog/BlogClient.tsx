"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Post, Category } from "@/lib/types";
import styles from "./Blog.module.css";

interface Props {
    posts: Post[];
    categories: Category[];
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });
}

function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, "").substring(0, 160);
}

function readingTime(content: string): number {
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
}

export default function BlogClient({ posts, categories }: Props) {
    const [activeCategory, setActiveCategory] = useState<string>("all");

    const categoryMap = useMemo(
        () => categories.reduce((acc, cat) => ({ ...acc, [cat.id]: cat }), {} as Record<string, Category>),
        [categories]
    );

    const filtered = useMemo(
        () => activeCategory === "all"
            ? posts
            : posts.filter((p) => p.category_id === activeCategory),
        [posts, activeCategory]
    );

    const featured = filtered[0] ?? null;
    const rest = filtered.slice(1);

    return (
        <main className={styles.main}>

            {/* ─── HERO ─── */}
            <section className={styles.hero}>
                <Image
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
                    alt="Blog Sự Kiện Toàn Quốc"
                    fill
                    className={styles.heroBgImg}
                    priority
                />
                <div className={styles.heroOverlay} />
                <div className={styles.heroInner}>
                    <p className={styles.heroLabel}>Kiến thức chuyên sâu</p>
                    <h1 className={styles.heroTitle}>
                        Blog{" "}
                        <span className={styles.heroAccent}>Sự Kiện</span>
                    </h1>
                    <p className={styles.heroDesc}>
                        Chia sẻ bí quyết tổ chức sự kiện, xu hướng Teambuilding, Company Trip và những câu chuyện
                        truyền cảm hứng từ hơn 500 dự án thực tế.
                    </p>
                    <div className={styles.heroStats}>
                        <div className={styles.stat}>
                            <span className={styles.statNum}>{posts.length}+</span>
                            <span className={styles.statLabel}>Bài viết</span>
                        </div>
                        <div className={styles.statDiv} />
                        <div className={styles.stat}>
                            <span className={styles.statNum}>{categories.length}</span>
                            <span className={styles.statLabel}>Chủ đề</span>
                        </div>
                        <div className={styles.statDiv} />
                        <div className={styles.stat}>
                            <span className={styles.statNum}>10+</span>
                            <span className={styles.statLabel}>Năm kinh nghiệm</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── FILTER ─── */}
            <section className={styles.filterSection}>
                <div className={styles.container}>
                    <div className={styles.filterRow}>
                        <button
                            className={`${styles.filterBtn} ${activeCategory === "all" ? styles.filterActive : ""}`}
                            onClick={() => setActiveCategory("all")}
                        >
                            Tất cả
                            <span className={styles.filterCount}>{posts.length}</span>
                        </button>
                        {categories.map((cat) => {
                            const count = posts.filter((p) => p.category_id === cat.id).length;
                            return (
                                <button
                                    key={cat.id}
                                    className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.filterActive : ""}`}
                                    onClick={() => setActiveCategory(cat.id)}
                                >
                                    {cat.name}
                                    <span className={styles.filterCount}>{count}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ─── POSTS ─── */}
            <section className={styles.postsSection}>
                <div className={styles.container}>

                    {filtered.length === 0 ? (
                        <div className={styles.emptyState}>
                            <span className={styles.emptyIcon}>📭</span>
                            <h2 className={styles.emptyTitle}>Chưa có bài viết</h2>
                            <p className={styles.emptyDesc}>Chủ đề này chưa có nội dung. Hãy thử chủ đề khác hoặc quay lại sau.</p>
                            <button className={styles.emptyBtn} onClick={() => setActiveCategory("all")}>
                                Xem tất cả bài viết
                            </button>
                        </div>
                    ) : (
                        <>
                            {/* Featured post */}
                            {featured && (
                                <Link href={`/blog/${featured.slug}`} className={styles.featuredCard}>
                                    <div className={styles.featuredImage}>
                                        {featured.featured_image ? (
                                            <img src={featured.featured_image} alt={featured.featured_image_alt || featured.title} className={styles.featuredImg} />
                                        ) : (
                                            <div className={styles.featuredPlaceholder} />
                                        )}
                                        <div className={styles.featuredOverlay} />
                                        {featured.category_id && categoryMap[featured.category_id] && (
                                            <span className={styles.cardCategoryBadge}>
                                                {categoryMap[featured.category_id].name}
                                            </span>
                                        )}
                                        <span className={styles.featuredBadge}>Bài viết nổi bật</span>
                                    </div>
                                    <div className={styles.featuredBody}>
                                        <div className={styles.cardMeta}>
                                            <span>{featured.published_at ? formatDate(featured.published_at) : formatDate(featured.created_at)}</span>
                                            <span className={styles.metaDot} />
                                            <span>{readingTime(featured.content || "")} phút đọc</span>
                                        </div>
                                        <h2 className={styles.featuredTitle}>{featured.title}</h2>
                                        <p className={styles.featuredExcerpt}>
                                            {featured.excerpt || stripHtml(featured.content || "")}
                                        </p>
                                        <span className={styles.readMore}>
                                            Đọc bài viết
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14M12 5l7 7-7 7"/>
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            )}

                            {/* Rest of posts grid */}
                            {rest.length > 0 && (
                                <div className={styles.postsGrid}>
                                    {rest.map((post) => (
                                        <Link key={post.id} href={`/blog/${post.slug}`} className={styles.postCard}>
                                            <div className={styles.cardThumb}>
                                                {post.featured_image ? (
                                                    <img src={post.featured_image} alt={post.featured_image_alt || post.title} className={styles.cardThumbImg} />
                                                ) : (
                                                    <div className={styles.cardThumbPlaceholder} />
                                                )}
                                                {post.category_id && categoryMap[post.category_id] && (
                                                    <span className={styles.cardCategoryBadge}>
                                                        {categoryMap[post.category_id].name}
                                                    </span>
                                                )}
                                            </div>
                                            <div className={styles.cardBody}>
                                                <div className={styles.cardMeta}>
                                                    <span>{post.published_at ? formatDate(post.published_at) : formatDate(post.created_at)}</span>
                                                    <span className={styles.metaDot} />
                                                    <span>{readingTime(post.content || "")} phút đọc</span>
                                                </div>
                                                <h3 className={styles.cardTitle}>{post.title}</h3>
                                                <p className={styles.cardExcerpt}>
                                                    {post.excerpt || stripHtml(post.content || "")}
                                                </p>
                                                <span className={styles.readMore}>
                                                    Đọc thêm
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14M12 5l7 7-7 7"/>
                                                    </svg>
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </main>
    );
}
