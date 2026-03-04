const { createClient } = require('@supabase/supabase-js');
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4');

// Schedule: Vantage → XM → Exness → General forex
// All at 12:00 PM VN (05:00 UTC), 1 per day starting 13/03
const schedule = [
    // --- VANTAGE (13-17/03) ---
    { slug: 'san-vantage-co-uy-tin-khong', date: '2026-03-13T05:00:00Z' },
    { slug: 'so-sanh-vantage-vs-exness', date: '2026-03-14T05:00:00Z' },
    { slug: 'huong-dan-mo-tai-khoan-vantage', date: '2026-03-15T05:00:00Z' },
    { slug: 'phi-giao-dich-vantage', date: '2026-03-16T05:00:00Z' },
    { slug: 'cach-nap-rut-tien-vantage-viet-nam', date: '2026-03-17T05:00:00Z' },

    // --- XM (18-23/03) ---
    { slug: 'huong-dan-copy-trade-xm', date: '2026-03-18T05:00:00Z' },
    { slug: 'san-xm-la-gi-danh-gia', date: '2026-03-19T05:00:00Z' },
    { slug: 'san-xm-co-hop-phap-khong', date: '2026-03-20T05:00:00Z' },
    { slug: 'san-xm-co-tai-khoan-cent-khong', date: '2026-03-21T05:00:00Z' },
    { slug: 'san-xm-khuyen-mai', date: '2026-03-22T05:00:00Z' },

    // --- EXNESS (23-31/03) ---
    { slug: 'huong-dan-copy-trade-exness', date: '2026-03-23T05:00:00Z' },
    { slug: 'san-exness-co-lua-dao-khong', date: '2026-03-24T05:00:00Z' },
    { slug: 'san-exness-co-bi-cam-o-viet-nam-khong', date: '2026-03-25T05:00:00Z' },
    { slug: 'san-exness-giao-dich-nhung-gi', date: '2026-03-26T05:00:00Z' },
    { slug: 'san-exness-dung-thu-may-the-gioi', date: '2026-03-27T05:00:00Z' },
    { slug: 'san-exness-co-om-lenh-khong', date: '2026-03-28T05:00:00Z' },
    { slug: 'san-exness-nen-dung-tai-khoan-nao', date: '2026-03-29T05:00:00Z' },
    { slug: 'exness-khong-dang-nhap-duoc', date: '2026-03-30T05:00:00Z' },
    { slug: 'san-exness-co-mien-phi-qua-dem-khong', date: '2026-03-31T05:00:00Z' },

    // --- GENERAL FOREX (01-06/04) ---
    { slug: 'danh-forex-la-gi-cach-choi', date: '2026-04-01T05:00:00Z' },
    { slug: 'danh-forex-san-nao-uy-tin', date: '2026-04-02T05:00:00Z' },
    { slug: 'choi-forex-co-pham-phap-khong', date: '2026-04-03T05:00:00Z' },
    { slug: 'danh-forex-vang-xau-usd', date: '2026-04-04T05:00:00Z' },
    { slug: 'choi-forex-thua-lo-nguyen-nhan', date: '2026-04-05T05:00:00Z' },
    { slug: 'giay-phep-san-forex-cach-check', date: '2026-04-06T05:00:00Z' },
];

async function main() {
    let ok = 0, err = 0;
    for (const item of schedule) {
        const { error } = await s.from('posts').update({ scheduled_at: item.date }).eq('slug', item.slug);
        if (error) { console.log('ERR:', item.slug, error.message); err++; }
        else { ok++; }
    }
    console.log(`Updated: ${ok} OK, ${err} errors\n`);

    // Verify by group
    const groups = [
        { label: 'VANTAGE', from: '2026-03-13', to: '2026-03-17' },
        { label: 'XM', from: '2026-03-18', to: '2026-03-22' },
        { label: 'EXNESS', from: '2026-03-23', to: '2026-03-31' },
        { label: 'GENERAL', from: '2026-04-01', to: '2026-04-06' },
    ];
    for (const g of groups) {
        const { data } = await s.from('posts').select('title,scheduled_at')
            .gte('scheduled_at', g.from + 'T00:00:00Z').lte('scheduled_at', g.to + 'T23:59:59Z')
            .in('slug', schedule.map(x => x.slug))
            .order('scheduled_at');
        console.log(`--- ${g.label} ---`);
        data.forEach(p => {
            const d = new Date(p.scheduled_at).toLocaleDateString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh', weekday: 'short', day: '2-digit', month: '2-digit'
            });
            console.log(` ${d} | ${p.title.substring(0, 55)}`);
        });
    }
}
main();
