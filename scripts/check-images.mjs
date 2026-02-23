import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { writeFileSync } from 'fs';
config({ path: '.env.local' });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const { data, error } = await supabase.from('posts').select('slug,featured_image').order('id');
if (error) { console.log('ERR:', error.message); process.exit(1); }

let output = '';
data.forEach(p => {
    output += `${p.slug}\n  → ${p.featured_image || '(none)'}\n\n`;
});
writeFileSync('scripts/post-images.txt', output);
console.log(`Written ${data.length} posts to scripts/post-images.txt`);
