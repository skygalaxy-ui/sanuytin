import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K');

const sb = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE');

const reschedules = [
    { slug: "supply-demand-zone-giao-dich-theo-ngan-hang", newDate: "2026-03-22T00:30:00.000Z" },
    { slug: "khuyen-mai-va-bonus-vantage-moi-nhat-2026", newDate: "2026-03-23T00:30:00.000Z" },
    { slug: "risk-reward-1-3-chi-can-thang-30-lenh-van-co-lai", newDate: "2026-03-24T00:30:00.000Z" },
    { slug: "so-sanh-vantage-vs-fbs", newDate: "2026-03-25T00:30:00.000Z" },
    { slug: "fomo-va-revenge-trade", newDate: "2026-03-26T00:30:00.000Z" },
    { slug: "review-san-exness-2026", newDate: "2026-03-27T00:30:00.000Z" },
    { slug: "review-san-xm-co-uy-tin-khong", newDate: "2026-03-28T00:30:00.000Z" },
    { slug: "danh-gia-san-ic-markets-2026", newDate: "2026-03-29T00:30:00.000Z" },
];

async function main() {
    console.log("🔄 Bắt đầu dàn đều lịch đăng bài...\n");
    for (const r of reschedules) {
        const { error } = await sb.from("posts").update({ scheduled_at: r.newDate }).eq("slug", r.slug);
        if (error) {
            console.error(`❌ Lỗi dời bài ${r.slug}: ${error.message}`);
        } else {
            console.log(`✅ Dời: ${r.slug} → ${r.newDate.split("T")[0]}`);
        }
    }
    console.log("\n✅ Hoàn tất! Mỗi ngày giờ chỉ có tối đa 1 bài.");
}

main();
