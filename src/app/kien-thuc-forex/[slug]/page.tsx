import { getPosts, getPostBySlug } from "@/lib/supabase";
import { Metadata } from "next";
import KnowledgeArticleClient from "./KnowledgeArticleClient";
import Link from "next/link";
import { brokers } from "@/data/brokers";
import { KNOWLEDGE_CATEGORY_SLUGS } from "@/lib/categories";

export const dynamicParams = false;

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const posts = await getPosts(true);
    const knowledgePosts = posts.filter(p =>
        KNOWLEDGE_CATEGORY_SLUGS.includes(p.category || '')
    );
    return knowledgePosts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    if (!post) return { title: "Bài viết không tồn tại | Sàn Uy Tín" };

    const title = `${post.meta_title || post.title} | Kiến Thức Forex | Sàn Uy Tín`;
    const description = post.meta_description || post.excerpt || '';

    return {
        title,
        description,
        openGraph: {
            title: post.meta_title || post.title,
            description,
            url: `https://sanuytin.net/kien-thuc-forex/${slug}/`,
            type: 'article',
            publishedTime: post.published_at || undefined,
            modifiedTime: post.updated_at || undefined,
            images: post.featured_image ? [{ url: post.featured_image, alt: post.title }] : [],
            section: 'Kiến thức Forex',
            tags: post.tags || [],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.meta_title || post.title,
            description,
            images: post.featured_image ? [post.featured_image] : [],
        },
        alternates: {
            canonical: `https://sanuytin.net/kien-thuc-forex/${slug}/`,
        },
    };
}

export default async function KnowledgeArticlePage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return (
            <main className="min-h-screen bg-background pt-[120px] flex items-center justify-center">
                <div className="text-center space-y-4 px-4">
                    <h1 className="text-2xl font-bold text-foreground">Bài viết không tồn tại</h1>
                    <Link href="/kien-thuc-forex" className="text-primary hover:underline">
                        ← Quay lại Kiến thức Forex
                    </Link>
                </div>
            </main>
        );
    }

    const allPosts = await getPosts(true);
    const relatedPosts = allPosts
        .filter(p => p.id !== post.id && p.category === post.category)
        .slice(0, 4);

    // JSON-LD
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.meta_description || post.excerpt || '',
        image: post.featured_image || undefined,
        datePublished: post.published_at || post.created_at || '',
        dateModified: post.updated_at || post.published_at || '',
        author: { "@type": "Organization", name: "Sàn Uy Tín", url: "https://sanuytin.net" },
        publisher: {
            "@type": "Organization", name: "Sàn Uy Tín", url: "https://sanuytin.net",
            logo: { "@type": "ImageObject", url: "https://sanuytin.net/logo-khong-nen-san-uy-tin.png" }
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `https://sanuytin.net/kien-thuc-forex/${slug}/` },
        articleSection: "Kiến thức Forex",
        wordCount: post.content ? post.content.replace(/<[^>]*>/g, '').split(/\s+/).length : 0,
        ...(post.tags && post.tags.length > 0 && { keywords: post.tags.join(', ') })
    };

    // FAQ Schema
    const faqItems: { question: string; answer: string }[] = [];
    if (post.content) {
        const faqRegex = /<h3[^>]*>(.*?)<\/h3>\s*<p[^>]*>(.*?)<\/p>/gi;
        const faqSection = post.content.indexOf('Câu Hỏi Thường Gặp');
        if (faqSection !== -1) {
            const faqContent = post.content.substring(faqSection);
            let match;
            while ((match = faqRegex.exec(faqContent)) !== null) {
                faqItems.push({
                    question: match[1].replace(/<[^>]*>/g, '').trim(),
                    answer: match[2].replace(/<[^>]*>/g, '').trim()
                });
            }
        }
    }
    const faqJsonLd = faqItems.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map(item => ({
            "@type": "Question", name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer }
        }))
    } : null;
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://sanuytin.net/" },
            { "@type": "ListItem", position: 2, name: "Kiến Thức Forex", item: "https://sanuytin.net/kien-thuc-forex/" },
            { "@type": "ListItem", position: 3, name: post.title },
        ],
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
            {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
            <KnowledgeArticleClient
                post={post}
                relatedPosts={relatedPosts}
                slug={slug}
                topBrokers={brokers.slice(0, 4).map(({ longDescription, faq, ...b }) => b)}
            />
        </>
    );
}
