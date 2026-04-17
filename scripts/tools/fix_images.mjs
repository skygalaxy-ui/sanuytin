import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const VALID_IMAGES = [
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&h=800&q=80",
    "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/post-images/tech_stocks_ath_sp500_1775730056756.png",
    "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/post-images/ecb_euro_decline_1775730041631.png",
    "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/post-images/nfp_employment_data_risk_1775730025753.png"
];

function getRandomValidImage() {
    return VALID_IMAGES[Math.floor(Math.random() * VALID_IMAGES.length)];
}

async function run() {
    console.log("🚀 Bắt đầu fix toàn bộ ảnh lỗi (404) của 7 bài mới đăng...");

    const { data: posts, error: fetchErr } = await supabase
        .from('posts')
        .select('id, content, featured_image')
        .gte('id', 184)
        .lte('id', 190);

    if (fetchErr) {
        console.error("Lỗi fetch:", fetchErr);
        return;
    }

    const regex = new RegExp('src="https://images\\\\.unsplash\\\\.com/photo-[^"]+"', 'g');

    for (const post of posts) {
        const newFeatured = getRandomValidImage();
        let newContent = post.content;
        
        newContent = newContent.replace(regex, () => {
            return 'src="' + getRandomValidImage() + '"';
        });

        const { error: updateErr } = await supabase
            .from('posts')
            .update({
                featured_image: newFeatured,
                content: newContent
            })
            .eq('id', post.id);

        if (updateErr) {
            console.error("❌ Fix thất bại bài ID " + post.id);
        } else {
            console.log("✅ Đã đắp xong ảnh mới xịn cho bài ID " + post.id);
        }
    }
    
    console.log("🎉 Xong! Toàn bộ bài đã được khôi phục hiển thị ảnh sắc nét.");
}

run();
