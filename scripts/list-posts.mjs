import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

async function main() {
    const { data } = await sb.from('posts').select('id, title, slug, category, is_published, scheduled_at').order('id');
    if (data) {
        console.log('=== TẤT CẢ BÀI VIẾT ===\n');
        data.forEach(p => {
            const status = p.is_published ? 'PUB' : 'DRF';
            const sched = p.scheduled_at ? p.scheduled_at.substring(0, 10) : '-';
            console.log(`[${p.id}] ${status} | ${sched} | ${p.title}`);
        });
        console.log('\nTổng: ' + data.length + ' bài');
        console.log('Published: ' + data.filter(p => p.is_published).length);
        console.log('Draft: ' + data.filter(p => !p.is_published).length);
    }
}
main();
