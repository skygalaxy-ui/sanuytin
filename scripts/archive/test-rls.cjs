const { createClient } = require('@supabase/supabase-js');

// Test with returning to see if RLS silently blocks
const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

(async () => {
    const testId = '45a99d63-b20b-4d82-bf29-0e38c33df757';

    // Try update with .select() to get returned rows
    const { data, error, count } = await supabase
        .from('posts')
        .update({ scheduled_at: '2026-03-03T08:00:00Z' })
        .eq('id', testId)
        .select('id, scheduled_at');

    console.log('Update result:');
    console.log('  Error:', error?.message || 'none');
    console.log('  Returned rows:', data?.length || 0);
    if (data && data.length > 0) {
        console.log('  Data:', JSON.stringify(data[0]));
    } else {
        console.log('  NO ROWS RETURNED = RLS is blocking writes!');
    }

    // Also try insert to test write
    console.log('\nTest RLS on read:');
    const { data: readData, error: readErr } = await supabase
        .from('posts')
        .select('id, scheduled_at, is_published')
        .eq('id', testId)
        .single();

    console.log('  Read result:', readErr?.message || JSON.stringify(readData));
})();
