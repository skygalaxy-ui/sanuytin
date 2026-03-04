const { createClient } = require('@supabase/supabase-js');
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4');

async function main() {
    // Dời 3 bài khỏi 04/03 
    const moves = [
        { match: '%Phân bổ tài sản theo độ tuổi%', to: '2026-03-05T05:00:00Z', label: '05/03 12:00' },
        { match: '%ETF quốc tế%', to: '2026-03-06T02:00:00Z', label: '06/03 09:00' },
    ];
    for (const m of moves) {
        const { error } = await s.from('posts').update({ scheduled_at: m.to }).ilike('title', m.match);
        console.log(error ? 'ERR: ' + error.message : 'MOVED ' + m.match + ' → ' + m.label);
    }
    // Plus500 by slug
    const { error: e3 } = await s.from('posts').update({ scheduled_at: '2026-03-06T05:00:00Z' }).eq('slug', 'phi-giao-dich-san-plus500');
    console.log(e3 ? 'ERR: ' + e3.message : 'MOVED Plus500 → 06/03 12:00');

    // Verify 04/03
    const { data } = await s.from('posts').select('title,scheduled_at').gte('scheduled_at', '2026-03-04T00:00:00Z').lte('scheduled_at', '2026-03-04T23:59:59Z').order('scheduled_at');
    console.log('\n04/03:', data.length, 'bai');
    data.forEach(p => {
        const h = new Date(p.scheduled_at).toLocaleTimeString('en', { timeZone: 'Asia/Ho_Chi_Minh', hour: '2-digit', minute: '2-digit' });
        console.log(' ', h, p.title.substring(0, 50));
    });
}
main();
