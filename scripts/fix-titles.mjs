import { createClient } from '@supabase/supabase-js';
const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const fixes = {
    32: { title: 'Tâm Lý Trading: Lý Do 90% Trader Thất Bại', meta_title: 'Tâm Lý Trading: Vì Sao 90% Trader Thất Bại?' },
    68: { title: 'Margin Call: Cú Sốc Đáng Sợ Nhất Của Trader', meta_title: 'Margin Call & Stop Out: Cách Tránh Mất Vốn' },
    76: { title: 'Vantage vs Exness 2026: Phí Rẻ Hay Rút Nhanh?', meta_title: 'Vantage vs Exness 2026: So Sánh Chi Tiết' },
    86: { title: 'Head & Shoulders, Double Top: 3 Mô Hình Chuẩn', meta_title: '3 Mô Hình Đảo Chiều Chính Xác Nhất Forex' },
};

async function main() {
    for (const [id, u] of Object.entries(fixes)) {
        console.log(`[${id}] "${u.title}" (${u.title.length} chars)`);
        const { error } = await sb.from('posts').update({
            title: u.title, meta_title: u.meta_title,
            updated_at: new Date().toISOString()
        }).eq('id', Number(id));
        if (error) console.log('  ❌', error.message);
        else console.log('  ✅ OK');
    }
}
main();
