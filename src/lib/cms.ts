import { brokers as localBrokers } from '@/data/brokers';
import { supabase, Broker, getBrokers as getSupabaseBrokers } from './supabase';

// Check if Supabase is configured
const isSupabaseConfigured = () => {
    return !!(
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
        process.env.NEXT_PUBLIC_SUPABASE_URL !== 'your_supabase_project_url'
    );
};

// Transform Supabase broker to match local format
function transformBroker(broker: Broker) {
    return {
        id: broker.id,
        rank: broker.rank,
        name: broker.name,
        slug: broker.slug,
        logo: broker.logo,
        score: broker.score,
        avgSpread: broker.avg_spread,
        maxLev: broker.max_lev,
        minDep: broker.min_dep,
        license: broker.license,
        registerLink: broker.register_link,
        pros: broker.pros || [],
        cons: broker.cons || [],
        features: broker.features || [],
        yearFounded: broker.year_founded,
        headquarters: broker.headquarters,
        platforms: broker.platforms || [],
    };
}

// Unified data fetching - falls back to local data if Supabase not configured
export async function getBrokers() {
    // If Supabase is not configured, use local data
    if (!isSupabaseConfigured()) {
        console.log('[CMS] Using local broker data');
        return localBrokers;
    }

    try {
        console.log('[CMS] Fetching brokers from Supabase');
        const brokers = await getSupabaseBrokers();

        if (brokers.length === 0) {
            console.log('[CMS] No brokers in Supabase, falling back to local data');
            return localBrokers;
        }

        return brokers.map(transformBroker);
    } catch (error) {
        console.error('[CMS] Error fetching from Supabase, using local data:', error);
        return localBrokers;
    }
}

// Get single broker by slug
export async function getBrokerBySlug(slug: string) {
    if (!isSupabaseConfigured()) {
        return localBrokers.find(b => b.slug === slug) || null;
    }

    try {
        const { data, error } = await supabase
            .from('brokers')
            .select('*')
            .eq('slug', slug)
            .eq('is_active', true)
            .single();

        if (error || !data) {
            return localBrokers.find(b => b.slug === slug) || null;
        }

        return transformBroker(data as Broker);
    } catch {
        return localBrokers.find(b => b.slug === slug) || null;
    }
}

// Cache for homepage content
let homepageCache: any = null;
let cacheTime: number = 0;
const CACHE_DURATION = 60 * 1000; // 1 minute

export async function getHomepageContent() {
    // Check cache
    if (homepageCache && Date.now() - cacheTime < CACHE_DURATION) {
        return homepageCache;
    }

    if (!isSupabaseConfigured()) {
        // Return default content
        return getDefaultHomepageContent();
    }

    try {
        const { data, error } = await supabase
            .from('homepage_content')
            .select('*')
            .eq('is_active', true)
            .order('sort_order', { ascending: true });

        if (error || !data || data.length === 0) {
            return getDefaultHomepageContent();
        }

        // Transform to section-based object
        const content = data.reduce((acc: any, item: any) => {
            acc[item.section] = {
                title: item.title,
                subtitle: item.subtitle,
                ...item.content
            };
            return acc;
        }, {});

        homepageCache = content;
        cacheTime = Date.now();
        return content;
    } catch {
        return getDefaultHomepageContent();
    }
}

function getDefaultHomepageContent() {
    return {
        hero: {
            title: 'Top 10 Sàn Forex Uy Tín Nhất 2026',
            subtitle: 'Đánh giá độc lập, minh bạch, cập nhật liên tục',
            cta_text: 'Xem Bảng Xếp Hạng',
            cta_link: '/danh-gia-san'
        },
        stats: {
            items: [
                { value: '50+', label: 'Sàn đã review' },
                { value: '100K+', label: 'Người đọc/tháng' },
                { value: '10+', label: 'Năm kinh nghiệm' }
            ]
        }
    };
}

// Site settings
export async function getSiteSettings() {
    if (!isSupabaseConfigured()) {
        return getDefaultSettings();
    }

    try {
        const { data, error } = await supabase
            .from('site_settings')
            .select('*');

        if (error || !data) {
            return getDefaultSettings();
        }

        return data.reduce((acc: any, item: any) => {
            acc[item.key] = item.value;
            return acc;
        }, {});
    } catch {
        return getDefaultSettings();
    }
}

function getDefaultSettings() {
    return {
        site_name: 'Sàn Uy Tín',
        site_description: 'Cổng thông tin đánh giá sàn Forex uy tín hàng đầu Việt Nam',
        contact_email: 'sanuytin.net@gmail.com',
        social_links: {
            twitter: 'https://x.com/sanuytin',
            pinterest: 'https://www.pinterest.com/sanuytin/'
        }
    };
}
