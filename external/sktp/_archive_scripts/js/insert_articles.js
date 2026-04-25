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
    console.error("Could not read .env.local");
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
    for(const file of files) {
        const posts = JSON.parse(fs.readFileSync(file, 'utf8'));
        for(const post of posts) {
            post.slug = slugify(post.title);
            post.is_published = false; 
            post.published_at = new Date().toISOString();
            
            console.log(`Đang đẩy lên Admin bài: ${post.title}`);
            const res = await fetch(`${supabaseUrl}/rest/v1/posts`, {
                method: 'POST',
                headers: {
                    'apikey': supabaseKey,
                    'Authorization': `Bearer ${supabaseKey}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=representation'
                },
                body: JSON.stringify(post)
            });
            const data = await res.json();
            if(!res.ok) {
                console.error("Lỗi khi thêm bài:", data);
            } else {
                console.log("-> Đã lưu thành công:", data[0]?.slug || post.slug);
            }
        }
    }
}
run();
