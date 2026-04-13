import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

async function moveExness() {
    const { error: err1 } = await supabase.from('posts').update({ category: 'danh-gia-san' }).eq('id', 115);
    if (!err1) console.log("Moved ID 115 (Review Exness) to Danh Giá Sàn");
    
    // Check if any other broker review was miscategorized
    const { data: others } = await supabase.from('posts').select('id, title').ilike('title', 'Review%').neq('category', 'danh-gia-san');
    if (others) {
        for (const p of others) {
            await supabase.from('posts').update({ category: 'danh-gia-san' }).eq('id', p.id);
            console.log(`Moved ID ${p.id} (${p.title}) to Danh Giá Sàn`);
        }
    }
    
    const { data: d2 } = await supabase.from('posts').select('id, title').ilike('title', 'Đánh giá sàn%').neq('category', 'danh-gia-san');
    if (d2) {
        for (const p of d2) {
            await supabase.from('posts').update({ category: 'danh-gia-san' }).eq('id', p.id);
            console.log(`Moved ID ${p.id} (${p.title}) to Danh Giá Sàn`);
        }
    }
}

moveExness();
