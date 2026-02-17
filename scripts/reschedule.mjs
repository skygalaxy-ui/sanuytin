import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

// Lịch mới: 2 bài/ngày, bắt đầu 17/2
// 17/2: ID 67,68 (publish ngay)
// 18/2: ID 69,70
// 19/2: ID 71,72
// 20/2: ID 73,74
// 21/2: ID 75,76

const schedule = [
    { id: 67, day: 0, publish: true },  // 17/2 - publish ngay
    { id: 68, day: 0, publish: true },  // 17/2 - publish ngay
    { id: 69, day: 1, publish: false }, // 18/2
    { id: 70, day: 1, publish: false }, // 18/2
    { id: 71, day: 2, publish: false }, // 19/2
    { id: 72, day: 2, publish: false }, // 19/2
    { id: 73, day: 3, publish: false }, // 20/2
    { id: 74, day: 3, publish: false }, // 20/2
    { id: 75, day: 4, publish: false }, // 21/2
    { id: 76, day: 4, publish: false }, // 21/2
];

const baseDate = new Date('2026-02-17T09:00:00Z'); // 16:00 VN time

async function main() {
    console.log('📅 Dời lịch: 2 bài/ngày, bắt đầu 17/2\n');
    for (const s of schedule) {
        const pubDate = new Date(baseDate.getTime() + s.day * 24 * 60 * 60 * 1000);
        const update = {
            scheduled_at: s.publish ? null : pubDate.toISOString(),
            published_at: pubDate.toISOString(),
            is_published: s.publish,
            updated_at: new Date().toISOString(),
        };
        const { error } = await sb.from('posts').update(update).eq('id', s.id);
        const { data } = await sb.from('posts').select('title').eq('id', s.id).single();
        const status = s.publish ? '🟢 LIVE' : '⏰ Lên lịch';
        console.log(status + ' ' + pubDate.toISOString().split('T')[0] + ' → ' + (data?.title || 'ID:' + s.id));
        if (error) console.log('  ❌ ' + error.message);
    }
    console.log('\n✅ Xong! 2 bài đã publish, 8 bài lên lịch.');
}
main();
