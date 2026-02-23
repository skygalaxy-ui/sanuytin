import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { writeFileSync } from 'fs';
config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const { data, error } = await supabase.from('posts').select('id,slug,title,excerpt,content,meta_title,meta_description').order('id');
if (error) { console.log('ERR:', error.message); process.exit(1); }

function wordCount(html) {
    if (!html) return 0;
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').filter(w => w.length > 0).length;
}

let output = `AUDIT: ${data.length} posts\n${'='.repeat(80)}\n\n`;
let under1000 = 0;

for (const p of data) {
    const wc = wordCount(p.content);
    const excerptLen = (p.excerpt || '').length;
    const flag = wc < 1000 ? '⚠️ SHORT' : '✅';
    if (wc < 1000) under1000++;

    output += `${flag} ${p.slug}\n`;
    output += `  Words: ${wc} | Excerpt: ${excerptLen} chars\n`;
    output += `  Title: ${p.title}\n`;
    output += `  Meta Title: ${p.meta_title || '(none)'}\n`;
    output += `  Meta Desc: ${(p.meta_description || p.excerpt || '(none)').substring(0, 80)}...\n\n`;
}

output += `\n${'='.repeat(80)}\nSUMMARY: ${under1000}/${data.length} posts under 1000 words\n`;
writeFileSync('scripts/seo-audit.txt', output);
console.log(`Audit written. ${under1000}/${data.length} posts under 1000 words.`);
