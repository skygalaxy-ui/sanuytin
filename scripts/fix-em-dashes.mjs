import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://ecipdcojedkbrlggaqja.supabase.co', 'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K');

async function main() {
    // Fetch all posts with em dashes in content
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, content')
        .like('content', '%—%');

    if (error) {
        console.error('❌ Error fetching:', error.message);
        process.exit(1);
    }

    console.log(`📝 Found ${posts.length} posts with em dashes (—)\n`);

    let updated = 0;
    for (const post of posts) {
        // Replace em dashes with " - " (spaced hyphen) for cleaner Vietnamese text
        const newContent = post.content.replaceAll('—', ' - ');

        const { error: updateError } = await supabase
            .from('posts')
            .update({ content: newContent })
            .eq('id', post.id);

        if (updateError) {
            console.error(`❌ Error updating ID ${post.id}: ${updateError.message}`);
        } else {
            const count = (post.content.match(/—/g) || []).length;
            console.log(`✅ ID ${post.id}: "${post.title}" - replaced ${count} em dashes`);
            updated++;
        }
    }

    console.log(`\n🎉 Done! Updated ${updated}/${posts.length} posts`);
    process.exit(0);
}
main();
