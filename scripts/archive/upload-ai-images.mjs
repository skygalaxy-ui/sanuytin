import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const images = [
    { id: 176, file: "fed_rate_cut_gold_1775729977597.png" },
    { id: 177, file: "wti_crude_oil_geopolitics_1775729993376.png" },
    { id: 178, file: "boj_yen_recovery_1775730132736.png" },
    { id: 179, file: "bitcoin_halving_80k_1775730149676.png" },
    { id: 180, file: "powell_hawkish_dxy_1775730009920.png" },
    { id: 181, file: "nfp_employment_data_risk_1775730025753.png" },
    { id: 182, file: "ecb_euro_decline_1775730041631.png" },
    { id: 183, file: "tech_stocks_ath_sp500_1775730056756.png" }
];

const basePath = "/Users/viralworks/.gemini/antigravity/brain/836b721c-ae07-48bd-a4e1-4e8d67fbed1c";
const publicUrlBase = process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/post-images/';

async function uploadAndPatch() {
    for (let item of images) {
        const localPath = path.join(basePath, item.file);
        if (!fs.existsSync(localPath)) {
            console.log(`Loi: Khong tim thay ${localPath}`);
            continue;
        }

        console.log(`Đang tải lên AI Image cho Bài ${item.id}...`);
        const fileBuffer = fs.readFileSync(localPath);
        const { error: uploadErr } = await sb.storage.from('post-images').upload(item.file, fileBuffer, {
            contentType: 'image/png',
            upsert: true
        });

        if (uploadErr && !uploadErr.message.includes("Duplicate")) {
            console.error(`Lỗi upload ${item.file}:`, uploadErr);
            continue;
        }

        const newImageUrl = publicUrlBase + item.file;
        
        // Fetch current content
        const { data: post } = await sb.from('posts').select('content').eq('id', item.id).single();
        if (post) {
            let newContent = post.content;
            // Thay thế link Unsplash đầu tiên bằng link mới
            newContent = newContent.replace(/<img src="https:\/\/images\.unsplash\.com[^"]+"/i, `<img src="${newImageUrl}"`);
            
            await sb.from('posts').update({ 
                featured_image: newImageUrl,
                content: newContent
            }).eq('id', item.id);
            
            console.log(`✅ Đã cập nhật xong ảnh cho bài ${item.id}`);
        }
    }
}

uploadAndPatch();
