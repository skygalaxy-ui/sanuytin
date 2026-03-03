require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-client');

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function checkLinks() {
    const { data: posts, error } = await supabase.from('posts').select('title, content').limit(5).order('created_at', { ascending: false });

    if (error) {
        console.error(error);
        return;
    }

    posts.forEach(post => {
        console.log(`\n--- Post: ${post.title} ---`);
        const links = post.content.match(/<a href=".*?">.*?<\/a>/g);
        if (links) {
            console.log(`Found ${links.length} links:`);
            links.forEach(l => console.log(`  ${l}`));
        } else {
            console.log('No links found.');
        }
    });
}

checkLinks();
