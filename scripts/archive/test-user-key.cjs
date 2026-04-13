const { createClient } = require('@supabase/supabase-js');

const URL = 'https://pbxpjmklrkkwatdvacap.supabase.co';
const KEY = 'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K';

async function test() {
    const sb = createClient(URL, KEY);
    const { data, error } = await sb.from('posts').select('id').limit(1);

    if (error) {
        console.log(`❌ Key nay KHONG dung cho DB moi: ${error.message}`);
    } else {
        console.log(`✅ Key nay HOP LE cho DB moi.`);
        // Test write
        const { data: updateData, error: updateErr } = await sb
            .from('posts')
            .update({ updated_at: new Date().toISOString() })
            .eq('id', data[0].id)
            .select();

        if (updateData && updateData.length > 0) {
            console.log(`🚀 THANH CONG! Key nay co quyen ghi (Write).`);
        } else {
            console.log(`⛔ BI CHAN! Key nay chi co quyen doc (Read).`);
        }
    }
}

test();
