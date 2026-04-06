import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function main() {
    const { data } = await sb.from('posts').select('id, title, is_published, scheduled_at').eq('is_published', false).not('scheduled_at', 'is', null).order('scheduled_at');
    if (!data || data.length === 0) { console.log('Không có bài nào đang chờ'); return; }
    console.log('📋 ' + data.length + ' bài đang chờ publish:\n');
    data.forEach(p => console.log('  [ID:' + p.id + '] ' + p.scheduled_at.split('T')[0] + ' → ' + p.title));
}
main();
