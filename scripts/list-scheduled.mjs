import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

async function main() {
    const { data } = await sb.from('posts').select('id, title, is_published, scheduled_at')
        .not('scheduled_at', 'is', null)
        .order('scheduled_at');

    if (!data || data.length === 0) {
        console.log('Không có bài nào đang chờ lịch');
        return;
    }

    console.log('=== BÀI ĐÃ LÊN LỊCH ===\n');
    data.forEach(p => {
        const d = new Date(p.scheduled_at);
        const vn = d.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        const st = p.is_published ? '🟢 Đã đăng' : '⏰ Chờ đăng';
        console.log(`${st} | ${vn} | [${p.id}] ${p.title}`);
    });
    console.log('\nTổng: ' + data.length + ' bài');
}
main();
