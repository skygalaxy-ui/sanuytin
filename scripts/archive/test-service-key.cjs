const { createClient } = require('@supabase/supabase-js');

// Token user vua gui
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY';

const OLD_URL = 'https://ecipdcojedkbrlggaqja.supabase.co';
const NEW_URL = 'https://pbxpjmklrkkwatdvacap.supabase.co';

async function test(name, url, token) {
    console.log(`\nTesting ${name}...`);
    const sb = createClient(url, token);
    const { data, error } = await sb.from('posts').select('id').limit(1);

    if (error) {
        console.log(`  ❌ FAIL: ${error.message}`);
    } else {
        console.log(`  ✅ SUCCESS! Key nay hop le cho ${name}.`);
        // Test write access (since it's service role)
        const { error: updateErr } = await sb.from('posts').update({ updated_at: new Date().toISOString() }).eq('id', data[0].id);
        console.log(`  📝 Quyen Ghi: ${updateErr ? 'Bi chan' : 'CO QUYEN GHI'}`);
    }
}

(async () => {
    await test('OLD DB (ecipd...)', OLD_URL, TOKEN);
    await test('NEW DB (pbxpj...)', NEW_URL, TOKEN);
})();
