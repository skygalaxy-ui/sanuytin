import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ecipdcojedkbrlggaqja.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K";

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

export async function uploadImage(file: File, bucket: string = 'broker-logos'): Promise<string | null> {
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


export async function deleteImage(url: string, bucket: string = 'broker-logos'): Promise<boolean> {
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
    category: string;
    tags: string[];
    author: string | null;
    meta_title: string | null;
    meta_description: string | null;
    is_published: boolean;
    published_at: string | null;
    created_at: string;
    updated_at: string;
}

export async function getPosts(onlyPublished: boolean = false) {
    let query = supabase
        .from('posts')
        .select('*')
        .order('published_at', { ascending: false, nullsFirst: false });

    if (onlyPublished) {
        query = query.eq('is_published', true);
    }

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching posts:', error);
        return [];
    }

    return data as Post[];
}

export async function getPostsByCategory(categorySlug: string) {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('category', categorySlug)
        .eq('is_published', true)
        .order('published_at', { ascending: false, nullsFirst: false });

    if (error) {
        console.error('Error fetching posts by category:', error);
        return [];
    }

    return data as Post[];
}

export async function getPostBySlug(slug: string) {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

    if (error) {
        console.error('Error fetching post:', error);
        return null;
    }

    return data as Post;
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
                    published_at: currentTime,
                    scheduled_at: null,
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

