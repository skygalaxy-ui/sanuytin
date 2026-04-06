import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function purgeTrash() {
  const badIds = [140, 116, 123, 146]; // Known bonus related ones that might be Llama-3 trash
  for (let id of badIds) {
    const { data } = await sb.from('posts').select('title, content').eq('id', id).single();
    if (data && (data.content.includes('Danh Giá') || data.content.includes('Họ Phá Nạp') || data.title.includes('XM')|| data.title.includes('HFM'))) {
        await sb.from('posts').update({ is_published: false }).eq('id', id);
        console.log(`Unpublished legacy AI trash: ${data.title}`);
    }
  }
}
purgeTrash();
