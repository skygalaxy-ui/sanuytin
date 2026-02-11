import { config } from 'dotenv';
config({ path: '.env.local' });
import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
const { data, error } = await sb.from('posts').select('id, title, is_published').order('id', { ascending: false }).limit(15);
if (error) console.log('ERROR:', error.message);
else {
    writeFileSync('tmp-posts.txt', data.map(p => `${p.id} | ${p.is_published ? 'PUB' : 'DRAFT'} | ${p.title}`).join('\n'));
    console.log('Written', data.length, 'posts');
}
