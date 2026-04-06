import fs from 'fs';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
const { data } = await sb.from('posts').select('id, title, slug, featured_image');
for (const post of data) {
    if (post.featured_image) {
        let cleanPath = post.featured_image.startsWith('/') ? post.featured_image.substring(1) : post.featured_image;
        if (!fs.existsSync('public/' + cleanPath) && !fs.existsSync('public/images/' + cleanPath)) {
            console.log(`[MISSING] ID: ${post.id} | Slug: ${post.slug} | Image: ${post.featured_image}`);
        }
    } else {
        console.log(`[NO_IMG] ID: ${post.id} | Slug: ${post.slug}`);
    }
}
