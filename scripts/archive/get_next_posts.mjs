import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getNextPosts() {
    // Get the top 4 newest established posts
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, slug, content')
        .eq('is_published', true)
        .order('created_at', {ascending: false})
        .limit(4);
    
    if (error) {
        console.error("Fetch error:", error);
        return;
    }

    // Skip the first one if it's the one we already did (ID 141)
    const pendingPosts = posts.filter(p => !p.content.includes('sanuytin-ai-image') && p.id !== 141).slice(0, 3);
    
    fs.writeFileSync('pending_posts.json', JSON.stringify(pendingPosts.map(p => ({id: p.id, title: p.title, slug: p.slug})), null, 2));
    console.log("Saved the next posts to pending_posts.json");
}

getNextPosts();
