import { getPosts } from '@/lib/supabase';

// Generate static params for export - fetch all posts from Supabase
export async function generateStaticParams() {
    try {
        const posts = await getPosts(true);
        // Include posts from kien-thuc and kien-thuc-forex categories
        const relevantPosts = posts.filter(p =>
            p.category === 'kien-thuc' || p.category === 'kien-thuc-forex'
        );
        const supabaseSlugs = relevantPosts.map(post => ({ slug: post.slug }));

        // Also include fallback slugs
        const fallbackSlugs = [
            { slug: 'forex-la-gi' },
            { slug: 'cach-doc-bieu-do-nen-nhat' },
            { slug: 'quan-ly-von-trading' },
        ];

        // Merge and deduplicate
        const allSlugs = [...supabaseSlugs];
        for (const fb of fallbackSlugs) {
            if (!allSlugs.some(s => s.slug === fb.slug)) {
                allSlugs.push(fb);
            }
        }

        console.log(`[generateStaticParams] kien-thuc-forex: Generated ${allSlugs.length} pages`);
        return allSlugs;
    } catch (error) {
        console.error('[generateStaticParams] Error:', error);
        return [
            { slug: 'forex-la-gi' },
            { slug: 'cach-doc-bieu-do-nen-nhat' },
            { slug: 'quan-ly-von-trading' },
        ];
    }
}

export default function KienThucSlugLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
