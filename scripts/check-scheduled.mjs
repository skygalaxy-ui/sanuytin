import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

async function main() {
    const { data } = await sb.from('posts').select('id, title, is_published, scheduled_at').eq('is_published', false).not('scheduled_at', 'is', null).order('scheduled_at');
    if (!data || data.length === 0) { console.log('Không có bài nào đang chờ'); return; }
    console.log('📋 ' + data.length + ' bài đang chờ publish:\n');
    data.forEach(p => console.log('  [ID:' + p.id + '] ' + p.scheduled_at.split('T')[0] + ' → ' + p.title));
}
main();
