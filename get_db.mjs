import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
const { data } = await sb.from('posts').select('id, title, slug, featured_image').ilike('title', '%Bao Nhiêu%');
console.log('Bao Nhiêu:', data);

const { data: data2 } = await sb.from('posts').select('id, title, slug, featured_image').ilike('title', '%Top 3%');
console.log('Top 3:', data2);

const { data: data3 } = await sb.from('posts').select('id, title, slug, featured_image').ilike('title', '%Tiêu Chí Đánh Giá%');
console.log('5 Tiêu Chí:', data3);

const { data: data4 } = await sb.from('posts').select('id, title, slug, featured_image').ilike('title', '%Hướng Dẫn Đầu Tư%');
console.log('Hướng Dẫn:', data4);
