import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K'
);

const now = new Date();
let report = `Giờ hiện tại: ${now.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}\n\n`;

const { data, error } = await s.from('posts')
    .select('id, title, scheduled_at')
    .eq('is_published', false)
    .not('scheduled_at', 'is', null)
    .order('scheduled_at', { ascending: true });

if (error) { console.log('ERROR:', error); process.exit(1); }

// New schedule: 2 posts/day, 9:00 and 16:00 Vietnam time
// Start from Feb 26
const startDate = new Date('2026-02-26T02:00:00Z'); // 9:00 AM Vietnam
const times = [
    { h: 2, m: 0 },   // 9:00 sáng Vietnam = 02:00 UTC
    { h: 9, m: 0 },   // 16:00 chiều Vietnam = 09:00 UTC
];

let dayIndex = 0;
let timeIndex = 0;

report += `=== LỊCH MỚI (${data.length} bài) ===\n\n`;

const updates = [];
for (const post of data) {
    const oldDate = new Date(post.scheduled_at);
    const oldStr = oldDate.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    const newDate = new Date(startDate);
    newDate.setUTCDate(newDate.getUTCDate() + dayIndex);
    newDate.setUTCHours(times[timeIndex].h, times[timeIndex].m, 0, 0);

    const newStr = newDate.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

    report += `[ID:${post.id}] ${oldStr} → ${newStr}\n`;
    report += `  ${post.title}\n\n`;

    updates.push({ id: post.id, newScheduledAt: newDate.toISOString() });

    timeIndex++;
    if (timeIndex >= times.length) {
        timeIndex = 0;
        dayIndex++;
    }
}

// Execute updates
let updated = 0;
for (const u of updates) {
    const { error } = await s.from('posts')
        .update({ scheduled_at: u.newScheduledAt })
        .eq('id', u.id);
    if (!error) updated++;
    else report += `ERROR ID:${u.id}: ${error.message}\n`;
}

report += `\n✅ Đã dời ${updated}/${updates.length} bài. Lịch: 2 bài/ngày (9h + 16h), từ 26/02\n`;

writeFileSync('scripts/reschedule-report.txt', report, 'utf-8');
console.log('Done! See scripts/reschedule-report.txt');
