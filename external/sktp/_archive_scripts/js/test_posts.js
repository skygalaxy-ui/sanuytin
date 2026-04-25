const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

(async () => {
    const { data: posts } = await supabaseAdmin.from('posts').select('id, title, content').eq('is_published', true);
    let output = '';
    for(let p of posts) {
        output += `Title: ${p.title}\nContent Length: ${p.content ? p.content.length : 0}\n\n`;
    }
    fs.writeFileSync('C:/Users/PHUONG/AppData/Local/Temp/published_posts.txt', output);
    console.log('Saved');
    process.exit(0);
})();
