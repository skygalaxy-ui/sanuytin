const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

(async () => {
    const { data, error } = await supabase
        .from('posts')
        .select('*')
        .limit(1);

    if (error) { console.log('Error:', error.message); return; }
    if (data && data.length > 0) {
        const cols = Object.keys(data[0]);
        console.log('Total columns:', cols.length);
        cols.forEach(c => {
            const val = data[0][c];
            const type = val === null ? 'null' : typeof val;
            const preview = typeof val === 'string' ? val.substring(0, 50) : val;
            console.log(`  ${c} (${type}): ${preview}`);
        });
    }
})();
