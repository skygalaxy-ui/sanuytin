const { createClient } = require('@supabase/supabase-js');
const s = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4'
);

s.from('posts')
    .select('title,featured_image')
    .eq('is_published', true)
    .order('created_at', { ascending: false })
    .limit(10)
    .then(({ data, error }) => {
        if (error) { console.log('Error:', error.message); return; }
        const lines = data.map(p => {
            const has = p.featured_image ? 'OK' : 'NO';
            return `${has} | ${(p.title || '').substring(0, 45)} | ${(p.featured_image || 'NULL').substring(0, 80)}`;
        });
        console.log(lines.join('\n'));
    });
