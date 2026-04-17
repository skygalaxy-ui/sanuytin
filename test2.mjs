import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function run() {
    const { data, error } = await supabase
        .from('posts')
        .select('id, title, slug, is_published')
        .eq('slug', 'danh-gia-san-vantage-tong-hop-2026');
    console.log('COUNT:', data ? data.length : 0);
    console.log('DATA:', data);
    console.log('ERROR:', error);
}
run();
