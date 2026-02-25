import { createClient } from '@supabase/supabase-js';
import { writeFileSync } from 'fs';

const s = createClient(
    'https://ecipdcojedkbrlggaqja.supabase.co',
    'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K'
);

const { data, error } = await s.from('posts')
    .select('id, title, is_published, scheduled_at, published_at, created_at')
    .order('created_at', { ascending: false });

if (error) {
    writeFileSync('scripts/posts-report.txt', 'ERROR: ' + JSON.stringify(error));
    process.exit(1);
}

const pub = data.filter(p => p.is_published);
const sched = data.filter(p => !p.is_published && p.scheduled_at);
const draft = data.filter(p => !p.is_published && !p.scheduled_at);

let report = `=== BÁO CÁO BÀI VIẾT (${new Date().toLocaleString('vi-VN')}) ===\n`;
report += `Tổng: ${data.length} | Published: ${pub.length} | Scheduled: ${sched.length} | Draft: ${draft.length}\n\n`;

report += `--- SCHEDULED POSTS (${sched.length}) ---\n`;
sched.sort((a, b) => new Date(a.scheduled_at).getTime() - new Date(b.scheduled_at).getTime());
sched.forEach(p => {
    const d = new Date(p.scheduled_at);
    report += `  [ID:${p.id}] ${d.toLocaleString('vi-VN')} | ${p.title}\n`;
});

report += `\n--- DRAFT POSTS (${draft.length}) ---\n`;
draft.forEach(p => {
    report += `  [ID:${p.id}] ${p.title}\n`;
});

report += `\n--- RECENTLY PUBLISHED (last 10) ---\n`;
pub.slice(0, 10).forEach(p => {
    report += `  [ID:${p.id}] ${p.published_at?.slice(0, 10)} | ${p.title}\n`;
});

writeFileSync('scripts/posts-report.txt', report, 'utf-8');
console.log('Report saved to scripts/posts-report.txt');
