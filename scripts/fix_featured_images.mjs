import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const uploads = [
  { slug: 'bao-nhieu-tien-de-bat-dau-trade-forex', filepath: 'public/images/bao-nhieu-tien-de-bat-dau-trade-forex_featured.png' },
  { slug: 'top-san-forex-nap-rut-tien-nhanh-nhat', filepath: 'public/images/superhero_fast_withdrawal_1775207252393.png' },
  { slug: 'tieu-chi-danh-gia-san-giao-dich-forex', filepath: 'public/images/broker_behind_desk_1775207154206.png' }
];

async function run() {
  for (const item of uploads) {
    if (!fs.existsSync(item.filepath)) {
      console.log(`Loi: khong tim thay file ${item.filepath}`);
      continue;
    }
    
    const fileExt = path.extname(item.filepath);
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}${fileExt}`;
    const fileBuffer = fs.readFileSync(item.filepath);
    
    const { data: uploadData, error: uploadError } = await sb.storage
      .from('post-images')
      .upload(fileName, fileBuffer, {
        contentType: 'image/png',
        upsert: false
      });
      
    if (uploadError) {
      console.error(`Upload error cho ${item.slug}:`, uploadError);
      continue;
    }
    
    const publicUrl = sb.storage.from('post-images').getPublicUrl(fileName).data.publicUrl;
    
    const { error: updateError } = await sb.from('posts').update({ featured_image: publicUrl }).eq('slug', item.slug);
    if (updateError) {
      console.error(`Update error cho ${item.slug}:`, updateError);
    } else {
      console.log(`Da fix anh cho bai: ${item.slug} -> ${publicUrl}`);
    }
  }
}

run();
