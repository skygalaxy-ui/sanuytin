import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

// Check word count of all recent posts
async function main() {
    const { data } = await sb.from('posts').select('id, title, content').order('id');
    if (!data) return;
    console.log('=== WORD COUNT & IMAGE COUNT ===\n');
    for (const p of data) {
        const text = (p.content || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const words = text.split(' ').filter(w => w.length > 0).length;
        const imgCount = ((p.content || '').match(/<img /g) || []).length;
        const status = words < 900 ? '⚠️' : '✅';
        const imgStatus = imgCount < 3 ? '📷' : '✅';
        console.log(`${status} [${p.id}] ${words} từ ${imgStatus} ${imgCount} ảnh | ${p.title}`);
    }
}
main();
