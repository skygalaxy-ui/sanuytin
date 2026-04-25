const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Load environment variables manually
const envFile = fs.readFileSync('.env.local', 'utf8');
const envVars = envFile.split('\n').reduce((acc, line) => {
    const [key, ...values] = line.split('=');
    if (key && values.length > 0) acc[key.trim()] = values.join('=').trim();
    return acc;
}, {});

const supabaseAdmin = createClient(envVars['NEXT_PUBLIC_SUPABASE_URL'], envVars['SUPABASE_SERVICE_ROLE_KEY']);

(async () => {
    // 1. Get all images from post-images bucket
    const { data: imgList } = await supabaseAdmin.storage.from('post-images').list();
    if (!imgList || imgList.length === 0) { console.log('No local images found!'); process.exit(0); }
    
    // Filter out .emptyFolderPlaceholder
    const validImages = imgList.filter(f => f.name !== '.emptyFolderPlaceholder');
    
    const localUrls = validImages.map(f => supabaseAdmin.storage.from('post-images').getPublicUrl(f.name).data.publicUrl);
    
    // 2. Fetch all posts
    console.log('Fetching posts...');
    const { data: posts } = await supabaseAdmin.from('posts').select('id, title, featured_image, content');
    
    let updatedPosts = 0;
    
    for (const p of posts) {
        let isUpdated = false;
        let updateObj = {};
        
        // Check featured image
        if (p.featured_image && p.featured_image.includes('unsplash.com')) {
            updateObj.featured_image = localUrls[Math.floor(Math.random() * localUrls.length)];
            isUpdated = true;
        }
        
        // Check content
        if (p.content && p.content.includes('unsplash.com')) {
            let newContent = p.content;
            const matches = newContent.match(/<img[^>]+src=\"(https:\/\/images\.unsplash\.com[^\"]+)\"/g);
            if (matches) {
                for (const m of matches) {
                    const match = /<img[^>]+src=\"(https:\/\/images\.unsplash\.com[^\"]+)\"/.exec(m);
                    if (match && match[1]) {
                        const matchUrl = match[1];
                        const repUrl = localUrls[Math.floor(Math.random() * localUrls.length)];
                        newContent = newContent.replace(new RegExp(matchUrl.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'), 'g'), repUrl);
                    }
                }
                updateObj.content = newContent;
                isUpdated = true;
            }
        }
        
        if (isUpdated) {
            await supabaseAdmin.from('posts').update(updateObj).eq('id', p.id);
            updatedPosts++;
            process.stdout.write('Updated: ' + updatedPosts + '\\r');
        }
    }
    
    console.log('\\nAll unsplash images replaced with Admin Library Images. Total records affected:', updatedPosts);
    process.exit(0);
})();
