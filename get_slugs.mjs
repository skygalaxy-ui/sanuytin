import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
const { data } = await sb.from('posts').select('slug, featured_image').in('slug', ['bao-nhieu-tien-de-bat-dau-trade-forex-an-toan', 'top-3-san-forex-uy-tin-ho-tro-rut-tien-nhanh-nhat', '5-tieu-chi-danh-gia-san-giao-dich-forex-chuan-xac', 'huong-dan-dau-tu-forex-cho-nguoi-moi-bat-dau-tu-a-z']);
console.log(data);
