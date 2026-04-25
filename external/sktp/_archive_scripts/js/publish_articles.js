const fs = require('fs');

let supabaseUrl = '';
let supabaseKey = '';

try {
    const envData = fs.readFileSync('.env.local', 'utf8');
    const uMatch = envData.match(/SUPABASE_URL=(.*)/);
    const kMatch = envData.match(/SUPABASE_ANON_KEY=(.*)/);
    if(uMatch) supabaseUrl = uMatch[1].trim();
    if(kMatch) supabaseKey = kMatch[1].trim();
} catch (e) {
    console.error("Could not read .env.local", e);
}

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, "a")
        .replace(/[èéẹẻẽêềếệểễ]/g, "e")
        .replace(/[ìíịỉĩ]/g, "i")
        .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, "o")
        .replace(/[ùúụủũưừứựửữ]/g, "u")
        .replace(/[ỳýỵỷỹ]/g, "y")
        .replace(/đ/g, "d")
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

async function run() {
    const files = fs.readdirSync(__dirname).filter(f => f.startsWith('articles_') && f.endsWith('.json'));
    const slugsToPublish = [];
    
    for(const file of files) {
        const posts = JSON.parse(fs.readFileSync(file, 'utf8'));
        for(const post of posts) {
            slugsToPublish.push(slugify(post.title));
        }
    }
    
    console.log("Danh sách các bài sẽ Public:", slugsToPublish);
    
    for(const slug of slugsToPublish) {
        // Build the update query
        // Supabase REST API update format: PATCH /rest/v1/posts?slug=eq.{slug}
        const res = await fetch(`${supabaseUrl}/rest/v1/posts?slug=eq.${slug}`, {
            method: 'PATCH',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({ is_published: true, published_at: new Date().toISOString() })
        });
        
        if(!res.ok) {
            console.error("Lỗi khi Public bài:", slug);
        } else {
            console.log("-> Đã Public (Live) thành công:", slug);
        }
    }
}
run();
