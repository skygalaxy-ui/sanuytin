/**
 * TEMPLATE: Publish a new blog post to Supabase
 * 
 * Usage: Edit the POST object below, then run:
 *   node scripts/publish-post.mjs
 * 
 * The post will appear immediately on the website and in admin.
 */
import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// ================ EDIT THIS POST DATA ================
const POST = {
    title: '',              // Required: Tiêu đề bài viết
    slug: '',               // Required: URL slug (vd: 'bai-viet-moi')
    excerpt: '',            // Required: Mô tả ngắn (150-160 chars)
    content: '',            // Required: Nội dung HTML đầy đủ (>1000 words)
    featured_image: '',     // Optional: URL hình ảnh (Unsplash hoặc direct link)
    featured_image_alt: '', // Optional: Alt text hình ảnh
    category: '',           // Required: huong-dan | phan-tich | kien-thuc | tin-tuc | danh-gia
    tags: [],               // Required: Array of tags
    author: 'Sàn Uy Tín Team',
    meta_title: '',         // Required: <=60 chars, SEO title
    meta_description: '',   // Required: <=160 chars, same as excerpt
    is_published: true,
    published_at: new Date().toISOString(),
};
// ======================================================

async function run() {
    // Validation
    if (!POST.title || !POST.slug || !POST.content) {
        console.log('❌ Missing required fields: title, slug, content');
        return;
    }
    if (POST.meta_title && POST.meta_title.length > 60) {
        console.log(`⚠️  meta_title too long (${POST.meta_title.length}/60 chars) — truncating`);
        POST.meta_title = POST.meta_title.substring(0, 57) + '...';
    }

    // Check if slug already exists
    const { data: existing } = await supabase.from('posts').select('id').eq('slug', POST.slug).single();
    if (existing) {
        console.log(`⚠️  Slug "${POST.slug}" already exists (id: ${existing.id}). Updating...`);
        const { error } = await supabase.from('posts').update(POST).eq('slug', POST.slug);
        if (error) { console.log(`❌ Update failed: ${error.message}`); return; }
        console.log(`✅ Updated post: ${POST.title}`);
    } else {
        const { error } = await supabase.from('posts').insert(POST);
        if (error) { console.log(`❌ Insert failed: ${error.message}`); return; }
        console.log(`✅ Published new post: ${POST.title}`);
    }

    // Word count check
    const wc = POST.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length;
    console.log(`📊 Word count: ${wc} ${wc >= 1000 ? '✅' : '❌ (target: 1000+)'}`);
    console.log(`🔗 URL: /tin-tuc/${POST.slug}`);
}
run();
