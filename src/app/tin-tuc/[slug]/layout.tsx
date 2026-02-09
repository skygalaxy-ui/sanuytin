import { getPosts } from '@/lib/supabase';

// Generate static params for export - fetch all posts from Supabase
export async function generateStaticParams() {
    try {
        const posts = await getPosts(true);
        const supabaseSlugs = posts.map(post => ({ slug: post.slug }));

        // Also include fallback slugs in case Supabase is down during build
        const fallbackSlugs = [
            { slug: 'gia-vang-pha-dinh-2026' },
            { slug: 'fed-giu-nguyen-lai-suat' },
            { slug: 'top-3-cap-tien-bien-dong' },
            { slug: 'bitcoin-vuot-100000-usd' },
            { slug: 'lich-kinh-te-tuan-nay' },
            { slug: 'exness-giam-spread-eurusd' },
        ];

        // Merge and deduplicate
        const allSlugs = [...supabaseSlugs];
        for (const fb of fallbackSlugs) {
            if (!allSlugs.some(s => s.slug === fb.slug)) {
                allSlugs.push(fb);
            }
        }

        console.log(`[generateStaticParams] tin-tuc: Generated ${allSlugs.length} pages`);
        return allSlugs;
    } catch (error) {
        console.error('[generateStaticParams] Error fetching posts:', error);
        // Fallback to hardcoded slugs
        return [
            { slug: 'gia-vang-pha-dinh-2026' },
            { slug: 'fed-giu-nguyen-lai-suat' },
            { slug: 'top-3-cap-tien-bien-dong' },
        ];
    }
}

export default function TinTucSlugLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
