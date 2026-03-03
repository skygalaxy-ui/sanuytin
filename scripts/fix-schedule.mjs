import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K');

const schedule = [
    { id: 102, time: '2026-02-24T18:00:00+07:00' },
    { id: 103, time: '2026-02-25T09:00:00+07:00' },
    { id: 104, time: '2026-02-25T17:00:00+07:00' },
    { id: 105, time: '2026-02-26T09:00:00+07:00' },
    { id: 106, time: '2026-02-26T17:00:00+07:00' },
    { id: 107, time: '2026-02-27T09:00:00+07:00' },
];

async function main() {
    for (const item of schedule) {
        const { error } = await supabase
            .from('posts')
            .update({
                is_published: false,
                scheduled_at: item.time
            })
            .eq('id', item.id);

        if (error) console.error(`❌ ID ${item.id}:`, error.message);
        else console.log(`✅ ID ${item.id} → Lên lịch ${item.time}`);
    }
    process.exit(0);
}
main();
