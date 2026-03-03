const { createClient } = require('@supabase/supabase-js');

const s = createClient(
    'https://ecipdcojedkbrlggaqja.supabase.co',
    'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K'
);

const fixes = [
    { id: 10, to: 'kien-thuc', title: '5 sai lầm stop loss' },
    { id: 31, to: 'so-sanh', title: 'PT kỹ thuật vs cơ bản' },
    { id: 65, to: 'kien-thuc', title: '7 dấu hiệu sàn lừa đảo' },
    { id: 72, to: 'so-sanh', title: 'Exness vs XM 2026' },
    { id: 76, to: 'so-sanh', title: 'Vantage vs Exness 2026' },
    { id: 88, to: 'so-sanh', title: 'MT4 vs MT5' },
    { id: 98, to: 'kien-thuc', title: 'Quản lý vốn quy tắc 2%' },
    { id: 105, to: 'review', title: '10 lý do tin tưởng Vantage' },
    { id: 107, to: 'huong-dan', title: 'Phí Spread Vantage' },
    { id: 110, to: 'huong-dan', title: 'Bonus Vantage' },
    { id: 113, to: 'review', title: 'Đánh giá Pepperstone' },
    { id: 115, to: 'review', title: 'Đánh giá Exness' },
    { id: 116, to: 'review', title: 'Đánh giá XM' },
    { id: 117, to: 'review', title: 'Đánh giá IC Markets' },
];

(async () => {
    let ok = 0, fail = 0;
    for (const f of fixes) {
        const { error } = await s.from('posts').update({ category: f.to }).eq('id', f.id);
        if (error) {
            console.log(`  ❌ ID:${f.id} ${f.title}: ${error.message}`);
            fail++;
        } else {
            console.log(`  ✅ ID:${f.id} → ${f.to} (${f.title})`);
            ok++;
        }
    }
    console.log(`\nKết quả: ${ok} thành công, ${fail} lỗi`);
})();
