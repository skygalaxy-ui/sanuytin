import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

async function main() {
    const now = new Date().toISOString();

    // 1. Publish Copy Trade (ID 75) ngay bây giờ
    await sb.from('posts').update({
        is_published: true, scheduled_at: null, published_at: now, updated_at: now
    }).eq('id', 75);
    console.log('🟢 LIVE ngay: Copy Trade là gì? (ID:75)');

    // 2. Vantage vs Exness (ID 76) → lên lịch 15:00 VN = 08:00 UTC
    const at15 = '2026-02-21T08:00:00Z';
    await sb.from('posts').update({
        scheduled_at: at15, published_at: at15, updated_at: now
    }).eq('id', 76);
    console.log('⏰ 15:00 VN: So sánh Vantage vs Exness (ID:76)');

    console.log('\n✅ Done!');
}
main();
