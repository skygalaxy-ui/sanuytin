import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const KEEP = [
    'forex-la-gi-huong-dan-nguoi-moi',
    'cach-doc-bieu-do-nen-nhat-ban',
    'quan-ly-von-trong-trading',
    'phan-tich-ky-thuat-vs-co-ban',
    'tam-ly-trading-yeu-to-thanh-cong',
    'cac-loai-lenh-trong-forex',
    'cach-dat-stop-loss-take-profit',
    'huong-dan-su-dung-rsi',
    'scalping-forex-chien-luoc-luot-song',
    'cach-mo-tai-khoan-demo-forex',
];

const { data: all } = await supabase.from('posts').select('id, slug, title');
console.log('Total: ' + all.length);
const toDelete = all.filter(p => !KEEP.includes(p.slug));
console.log('Delete ' + toDelete.length + ':');
for (const p of toDelete) console.log('  X ' + p.slug);
console.log('Keep ' + KEEP.length + ':');
for (const p of all.filter(p => KEEP.includes(p.slug))) console.log('  V ' + p.slug);

const ids = toDelete.map(p => p.id);
const { error } = await supabase.from('posts').delete().in('id', ids);
if (error) console.log('ERROR: ' + error.message);
else console.log('DONE. Deleted ' + toDelete.length + ', kept ' + KEEP.length);
