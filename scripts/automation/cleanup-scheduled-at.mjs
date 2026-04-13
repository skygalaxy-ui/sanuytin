import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ecipdcojedkbrlggaqja.supabase.co',
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

const now = new Date().toISOString();

console.log('=== CLEANUP: Clear stale scheduled_at on published posts ===');
console.log('Time: ' + now);
console.log('');

// Find published posts that still have scheduled_at set
const { data: stalePosts, error: fetchErr } = await sb
    .from('posts')
    .select('id, title, scheduled_at')
    .eq('is_published', true)
    .not('scheduled_at', 'is', null);

if (fetchErr) {
    console.error('Error fetching:', fetchErr.message);
    process.exit(1);
}

if (!stalePosts || stalePosts.length === 0) {
    console.log('No stale scheduled_at found. All clean!');
    process.exit(0);
}

console.log(`Found ${stalePosts.length} published posts with stale scheduled_at.`);
console.log('');

// Update in batches of 20
let fixed = 0;
for (let i = 0; i < stalePosts.length; i += 20) {
    const batch = stalePosts.slice(i, i + 20);
    const ids = batch.map(p => p.id);
    
    const { error: updateErr } = await sb
        .from('posts')
        .update({ scheduled_at: null })
        .in('id', ids);
    
    if (updateErr) {
        console.error(`Error updating batch ${i / 20 + 1}:`, updateErr.message);
    } else {
        fixed += batch.length;
        for (const p of batch) {
            console.log(`  [OK] ${p.title} (was: ${p.scheduled_at})`);
        }
    }
}

console.log('');
console.log(`Done! Cleared scheduled_at on ${fixed}/${stalePosts.length} posts.`);
