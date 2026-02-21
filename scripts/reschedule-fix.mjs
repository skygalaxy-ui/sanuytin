import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

// Chia lịch: 8:00, 12:00, 16:00 VN = 1:00, 5:00, 9:00 UTC
const schedule = [
    // 22/02
    { id: 79, time: '2026-02-22T01:00:00Z' }, // 8:00 VN
    { id: 80, time: '2026-02-22T05:00:00Z' }, // 12:00 VN
    { id: 81, time: '2026-02-22T09:00:00Z' }, // 16:00 VN
    // 23/02
    { id: 82, time: '2026-02-23T01:00:00Z' }, // 8:00 VN
    { id: 83, time: '2026-02-23T05:00:00Z' }, // 12:00 VN
    { id: 84, time: '2026-02-23T09:00:00Z' }, // 16:00 VN
    // 24/02
    { id: 85, time: '2026-02-24T03:00:00Z' }, // 10:00 VN
];

async function main() {
    console.log('📅 Cập nhật lịch đăng...\n');
    for (const s of schedule) {
        const d = new Date(s.time);
        const vn = d.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
        await sb.from('posts').update({
            scheduled_at: s.time,
            published_at: s.time,
            updated_at: new Date().toISOString()
        }).eq('id', s.id);
        const { data } = await sb.from('posts').select('title').eq('id', s.id).single();
        console.log(`⏰ ${vn} | [${s.id}] ${data.title}`);
    }
    console.log('\n✅ Done!');
}
main();
