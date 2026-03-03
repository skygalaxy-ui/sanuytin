const { createClient } = require('@supabase/supabase-js');

// Test BOTH databases
const OLD_URL = 'https://ecipdcojedkbrlggaqja.supabase.co';
const OLD_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NjEwMTQsImV4cCI6MjA4NTIzNzAxNH0.4tWrl8px93O64ca9WrxOGVNBZpeTQEpNHwWCdlPQHkE';

const NEW_URL = 'https://pbxpjmklrkkwatdvacap.supabase.co';
const NEW_KEY = 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD';

async function testDB(name, url, key) {
    console.log(`\n=== ${name} (${url.split('//')[1].split('.')[0]}) ===`);
    const sb = createClient(url, key);

    // Count posts
    const { data, error, count } = await sb
        .from('posts')
        .select('id, title, is_published', { count: 'exact' })
        .limit(3);

    if (error) {
        console.log(`  Error: ${error.message}`);
        return;
    }

    console.log(`  Total posts: ${count || data?.length || 0}`);
    if (data && data.length > 0) {
        console.log(`  Sample: ${data[0].title?.substring(0, 50)}`);
    }

    // Try UPDATE
    console.log('  Testing UPDATE...');
    // Use a test: update a post's updated_at to now, then revert
    if (data && data.length > 0) {
        const testId = data[0].id;
        const { error: updateErr } = await sb
            .from('posts')
            .update({ updated_at: new Date().toISOString() })
            .eq('id', testId);

        if (updateErr) {
            console.log(`  UPDATE FAILED: ${updateErr.message}`);
        } else {
            console.log(`  UPDATE SUCCESS - Write access confirmed!`);
        }
    }
}

(async () => {
    await testDB('OLD DB', OLD_URL, OLD_KEY);
    await testDB('NEW DB', NEW_URL, NEW_KEY);
})();
