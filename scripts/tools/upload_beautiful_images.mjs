import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const BRAIN_DIR = "/Users/viralworks/.gemini/antigravity/brain/b63d57f4-a8a1-40d8-a004-6aea86240ef7";

const UPLOADS = [
    {
        postId: 184,
        filename: "capital_management_1776052902313.png",
    },
    {
        postId: 185,
        filename: "candlestick_patterns_1776052671391.png"
    },
    {
        postId: 186,
        filename: "trading_psychology_1776052920582.png"
    },
    {
        postId: 187,
        filename: "scalping_strategy_1776052823682.png"
    },
    {
        postId: 188,
        filename: "nfp_news_1776052842330.png"
    },
    {
        postId: 189,
        filename: "fundamental_technical_1776052856948.png"
    },
    {
        postId: 190,
        filename: "capital_management_1776052902313.png" // Reuse for pillar
    }
];

async function run() {
    console.log("🚀 Bắt đầu upload Ảnh Bản Quyền 100% cực kỳ Premium lên Supabase...");

    for (const item of UPLOADS) {
        try {
            const filePath = `${BRAIN_DIR}/${item.filename}`;
            if (!fs.existsSync(filePath)) {
                console.log(`Bỏ qua: không tìm thấy file ${item.filename}`);
                continue;
            }

            const buffer = fs.readFileSync(filePath);
            const storagePath = `premium_${item.filename}`;

            // 1. Upload to Supabase Storage
            const { error: uploadErr } = await supabase.storage
                .from('post-images')
                .upload(storagePath, buffer, {
                    contentType: 'image/png',
                    upsert: true
                });

            if (uploadErr) {
                console.error(`❌ Upload lỗi ${item.filename}:`, uploadErr.message);
                continue;
            }

            // 2. Get Public URL
            const { data: publicUrlData } = supabase.storage
                .from('post-images')
                .getPublicUrl(storagePath);
            
            const finalImageUrl = publicUrlData.publicUrl;

            // 3. Update the post's featured_image AND HTML content internal images
            const { data: postData } = await supabase
                .from('posts').select('content').eq('id', item.postId).single();

            if (postData) {
                let newContent = postData.content;
                newContent = newContent.replace(/<img[^>]+src="([^"]+)"[^>]*>/g, (match, p1) => {
                    return match.replace(p1, finalImageUrl);
                });

                await supabase.from('posts').update({
                    featured_image: finalImageUrl,
                    content: newContent
                }).eq('id', item.postId);
                
                console.log(`✅ Đã đính kèm ảnh siêu xịn cho bài viết ID: ${item.postId}`);
            }

        } catch (e) {
            console.error(`Fatal error on ${item.filename}:`, e);
        }
    }
    
    console.log("🎉 HOÀN TẤT! Web bạn giờ đã khoác lên mình bộ cánh siêu cấp vô địch Premium!");
}

run();
