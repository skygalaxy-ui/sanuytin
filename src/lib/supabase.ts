import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ecipdcojedkbrlggaqja.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for database tables
export interface Broker {
    id: number;
    rank: number;
    name: string;
    slug: string;
    logo: string;
    score: number;
    avg_spread: string;
    max_lev: string;
    min_dep: string;
    license: string;
    register_link: string;
    pros: string[];
    cons: string[];
    features: string[];
    year_founded: number;
    headquarters: string;
    platforms: string[];
    is_active: boolean;
    created_at: string;
    updated_at: string;
}

export interface HomepageContent {
    id: number;
    section: string;
    title: string;
    subtitle: string | null;
    content: any;
    is_active: boolean;
}

export interface SiteSettings {
    id: number;
    key: string;
    value: any;
}

export interface ScheduledContent {
    id: number;
    title: string;
    type: 'article' | 'update' | 'promotion' | 'review';
    status: 'draft' | 'scheduled' | 'published' | 'overdue';
    scheduled_date: string;
    author: string;
    category: string;
    notes: string | null;
    created_at: string;
    updated_at: string;
}

// Fetch functions with caching
export async function getBrokers() {
    const { data, error } = await supabase
        .from('brokers')
        .select('*')
        .eq('is_active', true)
        .order('rank', { ascending: true });

    if (error) {
        console.error('Error fetching brokers:', error);
        return [];
    }

    return data as Broker[];
}

export async function getBrokerBySlug(slug: string) {
    const { data, error } = await supabase
        .from('brokers')
        .select('*')
        .eq('slug', slug)
        .eq('is_active', true)
        .single();

    if (error) {
        console.error('Error fetching broker:', error);
        return null;
    }

    return data as Broker;
}

export async function getHomepageContent() {
    const { data, error } = await supabase
        .from('homepage_content')
        .select('*')
        .eq('is_active', true);

    if (error) {
        console.error('Error fetching homepage content:', error);
        return [];
    }

    return data as HomepageContent[];
}

export async function getSiteSettings() {
    const { data, error } = await supabase
        .from('site_settings')
        .select('*');

    if (error) {
        console.error('Error fetching site settings:', error);
        return {};
    }

    // Convert to key-value object
    return data.reduce((acc: Record<string, any>, item) => {
        acc[item.key] = item.value;
        return acc;
    }, {});
}

// ==================== SCHEDULED CONTENT (Content Calendar) ====================

export async function getScheduledContent() {
    const { data, error } = await supabase
        .from('scheduled_content')
        .select('*')
        .order('scheduled_date', { ascending: true });

    if (error) {
        console.error('Error fetching scheduled content:', error);
        return [];
    }

    return data as ScheduledContent[];
}

export async function createScheduledContent(content: Omit<ScheduledContent, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
        .from('scheduled_content')
        .insert([content])
        .select()
        .single();

    if (error) {
        console.error('Error creating scheduled content:', error);
        return null;
    }

    return data as ScheduledContent;
}

export async function updateScheduledContent(id: number, updates: Partial<ScheduledContent>) {
    const { data, error } = await supabase
        .from('scheduled_content')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.error('Error updating scheduled content:', error);
        return null;
    }

    return data as ScheduledContent;
}

export async function deleteScheduledContent(id: number) {
    const { error } = await supabase
        .from('scheduled_content')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting scheduled content:', error);
        return false;
    }

    return true;
}

// ==================== BROKERS CRUD ====================

export async function createBroker(broker: Omit<Broker, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
        .from('brokers')
        .insert([broker])
        .select()
        .single();

    if (error) {
        console.error('Error creating broker:', error);
        return null;
    }

    return data as Broker;
}

export async function updateBroker(id: number, updates: Partial<Broker>) {
    const { data, error } = await supabase
        .from('brokers')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.error('Error updating broker:', error);
        return null;
    }

    return data as Broker;
}

export async function deleteBroker(id: number) {
    const { error } = await supabase
        .from('brokers')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting broker:', error);
        return false;
    }

    return true;
}

// ==================== IMAGE UPLOAD ====================

export async function uploadImage(file: File, bucket: string = 'broker-logo'): Promise<string | null> {
    try {
        // Generate unique filename
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = fileName;

        console.log(`[Upload] Starting upload to bucket: ${bucket}`);
        console.log(`[Upload] File: ${file.name}, Size: ${(file.size / 1024).toFixed(2)}KB, Type: ${file.type}`);

        // Upload file
        const { data, error } = await supabase.storage
            .from(bucket)
            .upload(filePath, file, {
                cacheControl: '3600',
                upsert: false
            });

        if (error) {
            console.error('[Upload] Error details:', {
                message: error.message,
                name: error.name,
                bucket: bucket,
                filePath: filePath
            });

            // Check for specific error types
            if (error.message.includes('Bucket not found') || error.message.includes('bucket')) {
                console.error(`[Upload] Bucket "${bucket}" không tồn tại! Hãy tạo bucket trong Supabase Dashboard > Storage`);
            }
            if (error.message.includes('Policy') || error.message.includes('policy')) {
                console.error('[Upload] Lỗi quyền truy cập! Kiểm tra Storage Policies trong Supabase');
            }

            return null;
        }

        console.log('[Upload] Upload successful:', data);

        // Get public URL
        const { data: urlData } = supabase.storage
            .from(bucket)
            .getPublicUrl(filePath);

        console.log('[Upload] Public URL:', urlData.publicUrl);
        return urlData.publicUrl;
    } catch (error: any) {
        console.error('[Upload] Unexpected error:', error);
        return null;
    }
}


export async function deleteImage(url: string, bucket: string = 'broker-logo'): Promise<boolean> {
    try {
        // Extract filename from URL
        const urlParts = url.split('/');
        const fileName = urlParts[urlParts.length - 1];

        const { error } = await supabase.storage
            .from(bucket)
            .remove([fileName]);

        if (error) {
            console.error('Error deleting image:', error);
            return false;
        }

        return true;
    } catch (error) {
        console.error('Delete image error:', error);
        return false;
    }
}

// ==================== MEDIA LIBRARY ====================

export interface MediaFile {
    name: string;
    url: string;
    size: number;
    created_at: string;
    type: string;
}

export async function listStorageImages(bucket: string = 'post-images'): Promise<MediaFile[]> {
    try {
        const { data, error } = await supabase.storage
            .from(bucket)
            .list('', { limit: 200, sortBy: { column: 'created_at', order: 'desc' } });

        if (error) {
            console.error('Error listing images:', error);
            return [];
        }

        const imageFiles = (data || []).filter(f =>
            f.name && !f.name.startsWith('.') &&
            /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f.name)
        );

        return imageFiles.map(f => {
            const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(f.name);
            return {
                name: f.name,
                url: urlData.publicUrl,
                size: (f.metadata as any)?.size || 0,
                created_at: f.created_at || '',
                type: (f.metadata as any)?.mimetype || 'image/jpeg',
            };
        });
    } catch (error) {
        console.error('List images error:', error);
        return [];
    }
}

export async function deleteStorageImage(fileName: string, bucket: string = 'post-images'): Promise<boolean> {
    try {
        const { error } = await supabase.storage.from(bucket).remove([fileName]);
        if (error) { console.error('Error deleting:', error); return false; }
        return true;
    } catch (error) {
        console.error('Delete error:', error);
        return false;
    }
}

// ==================== POSTS CRUD ====================

export interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featured_image: string | null;
    featured_image_alt: string | null;
    category: string; // slug string from DB
    category_name: string; // populated from category map lookup
    tags: string[];
    meta_title: string | null;
    meta_description: string | null;
    focus_keyword: string | null;
    is_published: boolean;
    published_at: string | null; // Virtual field: computed from updated_at (DB has no published_at column)
    reading_time: string | null;
    scheduled_at: string | null;
    created_at: string;
    updated_at: string;
}

// Category slug -> display name mapping
const CATEGORY_NAME_MAP: Record<string, string> = {};
// Category id (UUID) -> slug mapping
const CATEGORY_ID_TO_SLUG: Record<string, string> = {};
let categoryMapLoaded = false;

async function loadCategoryMap() {
    if (categoryMapLoaded) return;
    const { data } = await supabase.from('categories').select('id, name, slug');
    if (data) {
        data.forEach(c => {
            CATEGORY_NAME_MAP[c.slug] = c.name;
            CATEGORY_ID_TO_SLUG[c.id] = c.slug;
        });
    }
    categoryMapLoaded = true;
}

export async function getPosts(onlyPublished: boolean = false) {
    // Kích hoạt máy quét: Nếu đang lấy danh sách bài đăng công khai thì quét bài cũ lên lịch
    if (onlyPublished) {
        await checkAndPublishScheduledPosts();
    }

    let query = supabase
        .from('posts')
        .select('*')
        .order('id', { ascending: false });

    if (onlyPublished) {
        query = query.eq('is_published', true);
    }

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching posts:', error);
        return [];
    }

    // Load category names for display
    await loadCategoryMap();

    return (data || []).map((p: any) => {
        const categorySlug = p.category || '';
        return {
            ...p,
            category: categorySlug,
            category_name: CATEGORY_NAME_MAP[categorySlug] || categorySlug || '',
            published_at: p.updated_at || p.created_at, // Compute from updated_at since DB has no published_at
        };
    }) as Post[];
}

export async function getPostsByCategory(categorySlug: string) {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('category', categorySlug)
        .eq('is_published', true)
        .order('id', { ascending: false });

    if (error) {
        console.error('Error fetching posts by category:', error);
        return [];
    }

    await loadCategoryMap();

    return (data || []).map((p: any) => ({
        ...p,
        category: categorySlug,
        category_name: CATEGORY_NAME_MAP[categorySlug] || categorySlug || '',
        published_at: p.updated_at || p.created_at,
    })) as Post[];
}

export async function getPostBySlug(slug: string) {
    // Kích hoạt máy quét bài lên lịch
    await checkAndPublishScheduledPosts();

    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();

    if (error) {
        console.error('Error fetching post:', error);
        return null;
    }

    return data as Post | null;
}

export async function createPost(post: Omit<Post, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
        .from('posts')
        .insert([post])
        .select()
        .single();

    if (error) {
        console.error('Error creating post:', error);
        return null;
    }

    return data as Post;
}

export async function updatePost(id: number, updates: Partial<Post>) {
    const { data, error } = await supabase
        .from('posts')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.error('Error updating post:', error);
        return null;
    }

    return data as Post;
}

export async function deletePost(id: number) {
    const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting post:', error);
        return false;
    }

    return true;
}

// ==================== CATEGORIES CRUD ====================

export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    created_at: string;
}

export async function getCategories() {
    const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name', { ascending: true });

    if (error) {
        console.error('Error fetching categories:', error);
        return [];
    }

    return data as Category[];
}

export async function createCategory(category: Omit<Category, 'id' | 'created_at'>) {
    const { data, error } = await supabase
        .from('categories')
        .insert([category])
        .select()
        .single();

    if (error) {
        console.error('Error creating category:', error);
        return null;
    }

    return data as Category;
}

export async function updateCategory(id: number, updates: Partial<Category>) {
    const { data, error } = await supabase
        .from('categories')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.error('Error updating category:', error);
        return null;
    }

    return data as Category;
}

export async function deleteCategory(id: number) {
    const { error } = await supabase
        .from('categories')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting category:', error);
        return false;
    }

    return true;
}

// ==================== TAGS CRUD ====================

export interface Tag {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    created_at: string;
}

export async function getTags() {
    const { data, error } = await supabase
        .from('tags')
        .select('*')
        .order('name', { ascending: true });

    if (error) {
        console.error('Error fetching tags:', error);
        return [];
    }

    return data as Tag[];
}

export async function createTag(tag: Omit<Tag, 'id' | 'created_at'>) {
    const { data, error } = await supabase
        .from('tags')
        .insert([tag])
        .select()
        .single();

    if (error) {
        console.error('Error creating tag:', error);
        return null;
    }

    return data as Tag;
}

export async function updateTag(id: number, updates: Partial<Tag>) {
    const { data, error } = await supabase
        .from('tags')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

    if (error) {
        console.error('Error updating tag:', error);
        return null;
    }

    return data as Tag;
}

export async function deleteTag(id: number) {
    const { error } = await supabase
        .from('tags')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting tag:', error);
        return false;
    }

    return true;
}

// ==================== AUTO-PUBLISH SCHEDULED POSTS ====================

let lastAutoPublishCheck = 0;
const AUTO_PUBLISH_INTERVAL = 60000; // Check every 60 seconds

export async function checkAndPublishScheduledPosts(): Promise<number> {
    const now = Date.now();

    // Throttle: only check once per minute
    if (now - lastAutoPublishCheck < AUTO_PUBLISH_INTERVAL) {
        return 0;
    }
    lastAutoPublishCheck = now;

    try {
        const currentTime = new Date().toISOString();

        // Find posts that should be published
        const { data: scheduledPosts, error: fetchError } = await supabase
            .from('posts')
            .select('id, title')
            .eq('is_published', false)
            .not('scheduled_at', 'is', null)
            .lte('scheduled_at', currentTime);

        if (fetchError || !scheduledPosts || scheduledPosts.length === 0) {
            return 0;
        }

        // Update each post
        for (const post of scheduledPosts) {
            await supabase
                .from('posts')
                .update({
                    is_published: true,
                    // Keep scheduled_at so the cron job can send Telegram notification
                    updated_at: currentTime
                })
                .eq('id', post.id);

            console.log(`[Auto-Publish] Published: ${post.title}`);
        }

        return scheduledPosts.length;
    } catch (error) {
        console.error('Auto-publish check error:', error);
        return 0;
    }
}

// ==================== PAGE CONTENT ====================

export interface PageContent {
    id: number;
    section_id: string;
    page_path: string;
    data: Record<string, string>;
    updated_at: string;
}

// Get all page content
export async function getAllPageContent(): Promise<PageContent[]> {
    const { data, error } = await supabase
        .from('page_content')
        .select('*')
        .order('id');

    if (error) {
        console.error('Error fetching page content:', error);
        return [];
    }
    return data || [];
}

// Get content for a specific section
export async function getPageContent(sectionId: string): Promise<Record<string, string> | null> {
    const { data, error } = await supabase
        .from('page_content')
        .select('data')
        .eq('section_id', sectionId)
        .single();

    if (error) return null;
    return data?.data || null;
}

// Get content for a specific page path (multiple sections)
export async function getPageContentByPath(pagePath: string): Promise<Record<string, Record<string, string>>> {
    const { data, error } = await supabase
        .from('page_content')
        .select('section_id, data')
        .eq('page_path', pagePath);

    if (error) {
        console.error('Error fetching page content by path:', error);
        return {};
    }

    const result: Record<string, Record<string, string>> = {};
    data?.forEach(item => {
        result[item.section_id] = item.data;
    });
    return result;
}

// Save content for a section
export async function savePageContent(sectionId: string, pagePath: string, data: Record<string, string>): Promise<boolean> {
    const { error } = await supabase
        .from('page_content')
        .upsert({
            section_id: sectionId,
            page_path: pagePath,
            data,
            updated_at: new Date().toISOString(),
        }, { onConflict: 'section_id' });

    if (error) {
        console.error('Error saving page content:', error);
        return false;
    }
    return true;
}

// Save multiple sections at once
export async function saveAllPageContent(sections: Array<{ section_id: string; page_path: string; data: Record<string, string> }>): Promise<boolean> {
    const updates = sections.map(s => ({
        ...s,
        updated_at: new Date().toISOString(),
    }));

    const { error } = await supabase
        .from('page_content')
        .upsert(updates, { onConflict: 'section_id' });

    if (error) {
        console.error('Error saving all page content:', error);
        return false;
    }
    return true;
}

// ==================== PROMOTIONS CRUD ====================

export interface Promotion {
    id: number;
    broker_id: number | null;
    title: string;
    description: string | null;
    promo_code: string | null;
    discount_value: string | null;
    start_date: string | null;
    end_date: string | null;
    terms: string | null;
    is_active: boolean;
    created_at: string;
}

export async function getPromotions() {
    const { data, error } = await supabase
        .from('promotions')
        .select('*, brokers(name)')
        .order('is_active', { ascending: false })
        .order('end_date', { ascending: false });

    if (error) {
        console.error('Error fetching promotions:', error);
        return [];
    }

    return data as (Promotion & { brokers: { name: string } | null })[];
}

export async function createPromotion(promotion: Omit<Promotion, 'id' | 'created_at'>) {
    const { data, error } = await supabase
        .from('promotions')
        .insert([promotion])
        .select('*, brokers(name)')
        .single();

    if (error) {
        console.error('Error creating promotion:', error);
        return null;
    }

    return data as Promotion & { brokers: { name: string } | null };
}

export async function updatePromotion(id: number, updates: Partial<Promotion>) {
    const { data, error } = await supabase
        .from('promotions')
        .update(updates)
        .eq('id', id)
        .select('*, brokers(name)')
        .single();

    if (error) {
        console.error('Error updating promotion:', error);
        return null;
    }

    return data as Promotion & { brokers: { name: string } | null };
}

export async function deletePromotion(id: number) {
    const { error } = await supabase
        .from('promotions')
        .delete()
        .eq('id', id);

    if (error) {
        console.error('Error deleting promotion:', error);
        return false;
    }

    return true;
}

// ==================== SITE SETTINGS CRUD ====================

export async function updateSiteSetting(key: string, value: any, description?: string) {
    const { data, error } = await supabase
        .from('site_settings')
        .upsert({
            key,
            value,
            description: description || null,
            updated_at: new Date().toISOString(),
        }, { onConflict: 'key' })
        .select()
        .single();

    if (error) {
        console.error('Error updating site setting:', error);
        return null;
    }

    return data;
}

export async function updateAllSiteSettings(settings: Record<string, { value: any; description?: string }>) {
    const updates = Object.entries(settings).map(([key, { value, description }]) => ({
        key,
        value,
        description: description || null,
        updated_at: new Date().toISOString(),
    }));

    const { error } = await supabase
        .from('site_settings')
        .upsert(updates, { onConflict: 'key' });

    if (error) {
        console.error('Error updating all site settings:', error);
        return false;
    }

    return true;
}
