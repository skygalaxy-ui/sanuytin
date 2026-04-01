import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const args = process.argv.slice(2);
const postId = parseInt(args[0], 10);
const imagePaths = args.slice(1);

if (!postId || imagePaths.length === 0) {
    console.error("Usage: node update_post_by_id.mjs <postId> <imagePath1> <imagePath2>...");
    process.exit(1);
}

async function updatePost() {
    console.log(`Fetching post ID ${postId}...`);
    const { data: posts, error: fetchError } = await supabase
        .from('posts')
        .select('id, title, content')
        .eq('id', postId)
        .limit(1);
    
    if (fetchError || !posts.length) return console.error("Could not fetch", fetchError);
    const post = posts[0];
    
    console.log(`Working on post ID ${post.id}: ${post.title}`);
    
    let publicUrls = [];
    for(let i = 0; i < imagePaths.length; i++) {
        const fullPath = imagePaths[i];
        if(!fs.existsSync(fullPath)) {
            console.error("Not found: " + fullPath);
            continue;
        }
        
        const fileData = fs.readFileSync(fullPath);
        const fileName = `sanuytin-ai-image-${post.id}-${Date.now()}-${i}.png`;
        
        console.log(`Uploading ${fileName}...`);
        const { error } = await supabase.storage
            .from('post-images')
            .upload(fileName, fileData, {
                contentType: 'image/png',
                cacheControl: '3600'
            });
            
        if(error) {
            console.error("Upload failed", error);
        } else {
            const { data: urlData } = supabase.storage.from('post-images').getPublicUrl(fileName);
            publicUrls.push(urlData.publicUrl);
            console.log(`Success -> ${urlData.publicUrl}`);
        }
    }
    
    if(publicUrls.length === 0) return console.log("No images uploaded, aborting update.");
    
    let content = post.content || '';
    
    if (content.includes("sanuytin-ai-image")) {
        console.log("Images were already injected previously.");
        return;
    }
    
    let newContent = "";
    let injectIndex = 0;
    
    const parts = content.split('</h2');
    if (parts.length > publicUrls.length) {
        for(let i=0; i<parts.length; i++) {
            newContent += parts[i];
            if (i < parts.length - 1) {
                if (i > 0 && injectIndex < publicUrls.length) {
                    const url = publicUrls[injectIndex];
                    const altText = `${post.title} - Ảnh minh họa thực tế phần ${injectIndex + 1}`;
                    newContent += `\n<figure class="my-8 text-center"><img src="${url}" alt="${altText}" class="w-full h-auto rounded-xl shadow-lg border border-border" /><figcaption class="text-xs text-muted-foreground mt-2 italic">Ảnh minh họa - Nguồn: Sanuytin AI</figcaption></figure>\n`;
                    injectIndex++;
                }
                newContent += '</h2';
            }
        }
    } else {
        const pParts = content.split('</p>');
        const interval = Math.max(1, Math.floor(pParts.length / (publicUrls.length + 1)));
        for(let i=0; i<pParts.length; i++) {
            newContent += pParts[i];
            if (i < pParts.length - 1) {
                if ((i + 1) % interval === 0 && injectIndex < publicUrls.length) {
                    const url = publicUrls[injectIndex];
                    const altText = `${post.title} - Ảnh minh họa thực tế phần ${injectIndex + 1}`;
                    newContent += `\n</p><figure class="my-8 text-center"><img src="${url}" alt="${altText}" class="w-full h-auto rounded-xl shadow-lg border border-border" /><figcaption class="text-xs text-muted-foreground mt-2 italic">Ảnh minh họa - Nguồn: Sanuytin AI</figcaption></figure><p>\n`;
                    injectIndex++;
                } else {
                    newContent += '</p>';
                }
            }
        }
    }
    
    console.log("Updating post database record...");
    const { error: updateError } = await supabase.from('posts').update({ content: newContent }).eq('id', post.id);
    if(updateError) console.error("Fail to update", updateError);
    else console.log(`Successfully updated post ${post.id} with realistic AI images!`);
}

updatePost();
