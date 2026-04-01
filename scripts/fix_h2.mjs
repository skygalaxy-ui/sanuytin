import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function fixPosts() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, content')
        .in('id', [136, 137, 138, 141]);

    if (error) return console.error(error);

    for (let p of posts) {
        // Find any <figure> tags stuck inside <h2> tags and pull them OUT (after </h2>)
        // Previous script injected <figure> BEFORE the </h2
        let newContent = p.content;
        
        // Use a simple split-join approach if regex is tricky, but Regex is safer if written properly in JS.
        // It matches the optional newline, the <figure> tag fully up to </figure>, optional newline, followed by </h2
        const pattern = /(\n?<figure class="my-8 text-center">[\s\S]*?<\/figure>\n?)<\/h2>/g;
        
        // Since my injection was:
        // `\n<figure...><img src="..." alt="..." class="..." /><figcaption...>...</figcaption></figure>\n</h2`
        // Wait, the update script appended `</h2` back, which means the DB stored `... </figure>\n</h2` WITHOUT the `>`.
        // Wait, if it stored `</h2`, and didn't close with `>`, then `</h2` is malformed entirely!
        // No, wait... my script appended `</h2` and then the NEXT split piece had `>`.
        // Let's look at my script:
        // const parts = content.split('</h2');
        // newContent += parts[i]; ... newContent += '</h2';
        // Remember parts[i+1] starts with `>`.
        // So the actual stored tag is `</h2` + `>`.
        
        const fixedContent = newContent.replace(pattern, '</h2>$1');
        
        if (fixedContent !== newContent) {
           await supabase.from('posts').update({ content: fixedContent }).eq('id', p.id);
           console.log(`Fixed post ID ${p.id}`);
        } else {
           console.log(`Post ID ${p.id} did not match pattern or already fixed.`);
        }
    }
}
fixPosts();
