import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.log('⚠️ Missing Supabase credentials, skipping auto-publish');
    process.exit(0);
}

const sb = createClient(supabaseUrl, supabaseKey);
const now = new Date().toISOString();

console.log(`🕐 Checking for scheduled posts at ${now}`);

const { data, error } = await sb
    .from('posts')
    .select('id, title, scheduled_at')
    .eq('is_published', false)
    .not('scheduled_at', 'is', null)
    .lte('scheduled_at', now);

if (error) {
    console.error('❌ Error fetching scheduled posts:', error.message);
    process.exit(1);
}

if (!data || data.length === 0) {
    console.log('✅ No posts to publish');
    process.exit(0);
}

console.log(`📝 ${data.length} post(s) to publish:`);

for (const post of data) {
    const { error: updateError } = await sb
        .from('posts')
        .update({
            is_published: true,
            scheduled_at: null,
            updated_at: now
        })
        .eq('id', post.id);

    if (updateError) {
        console.error(`  ❌ Failed: ${post.title} - ${updateError.message}`);
    } else {
        console.log(`  ✅ Published: ${post.title}`);
    }
}

console.log('🎉 Auto-publish complete!');
