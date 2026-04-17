import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function run() {
    const { data: allPosts } = await supabase.from('posts').select('slug, is_published, category');
    console.log("Tìm bài vantage:", allPosts.find(p => p.slug.includes('vantage')));
    
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', 'danh-gia-san-vantage-tong-hop-2026')
        .eq('is_published', true)
        .maybeSingle();
    
    console.log('Result directly:', data ? data.title : "NULL", error);
}
run();
