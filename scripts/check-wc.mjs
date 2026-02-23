import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { writeFileSync } from 'fs';
config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function run() {
    const { data } = await supabase.from('posts').select('slug,content,meta_title').order('id');
    let out = '';
    let under1000 = 0;
    for (const p of data) {
        const text = p.content ? p.content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() : '';
        const wc = text ? text.split(' ').length : 0;
        const status = wc >= 1000 ? '✅' : '❌';
        if (wc < 1000) under1000++;
        out += `${status} ${String(wc).padStart(5)} words | ${p.slug}\n`;
    }
    out += `\nTotal: ${data.length} posts, ${under1000} under 1000 words\n`;
    writeFileSync('scripts/all-wc.txt', out, 'utf8');
    console.log('Written to scripts/all-wc.txt');
}
run();
