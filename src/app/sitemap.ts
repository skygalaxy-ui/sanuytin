import type { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://sanuytin.net';

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
        { url: `${baseUrl}/danh-gia-san`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
        { url: `${baseUrl}/kien-thuc-forex`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
        { url: `${baseUrl}/tin-tuc`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
        { url: `${baseUrl}/so-sanh`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/khuyen-mai`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${baseUrl}/thuat-ngu`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/cong-cu`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/lien-he`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
        { url: `${baseUrl}/dieu-khoan-su-dung`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
        { url: `${baseUrl}/chinh-sach-bao-mat`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ];

    // Reviews (Broker pages based on existing routes)
    const brokers = [
        'vantage', 'xm', 'exness', 'xtb', 'fbs', 'hfm', 'fxtm', 'fxpro', 'tickmill',
        'pepperstone', 'ic-markets', 'oanda', 'etoro', 'plus500', 'ig', 'capital-com',
        'octa', 'roboforex', 'admiral', 'saxo-bank', 'iq-option', 'interactive-brokers',
        'cmc-markets', 'fp-markets', 'deriv', 'trading-212', 'topfx', 'fxgt',
        'thinkmarkets', 'atfx', 'nordfx', 'fxcm', 'libertex'
    ];
    
    const brokerPages: MetadataRoute.Sitemap = brokers.map((slug) => ({
        url: `${baseUrl}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Blog posts from Supabase
    let blogPages: MetadataRoute.Sitemap = [];
    const KNOWLEDGE_CATEGORIES = [
        'kien-thuc', 'kien-thuc-forex', 'kien-thuc-dau-tu',
        'huong-dan', 'kinh-nghiem', 'kien-thuc-nguoi-moi',
        'phan-tich-ky-thuat', 'quan-ly-von', 'cong-cu-trading', 'dau-tu-quy'
    ];
    try {
        const { data: posts } = await supabase
            .from('posts')
            .select('slug, category, updated_at, published_at')
            .eq('is_published', true)
            .order('published_at', { ascending: false });

        if (posts) {
            blogPages = posts.map((post) => {
                const folder = KNOWLEDGE_CATEGORIES.includes(post.category)
                    ? 'kien-thuc-forex'
                    : 'tin-tuc';
                return {
                    url: `${baseUrl}/${folder}/${post.slug}`,
                    lastModified: new Date(post.updated_at || post.published_at || new Date()),
                    changeFrequency: 'weekly' as const,
                    priority: 0.7,
                };
            });
        }
    } catch (error) {
        console.error('Sitemap: Error fetching posts:', error);
    }

    return [...staticPages, ...brokerPages, ...blogPages];
}
