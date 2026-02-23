import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ecipdcojedkbrlggaqja.supabase.co";
const supabaseAnonKey = "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// All broken Unsplash photo IDs mapped to working Pexels images (free, stable URLs)
const brokenToNew = {
    "photo-1611974789855-9c2a0a7236a3": "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",   // stock trading chart
    "photo-1590283603385-17ffb3a7f29f": "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",   // financial trading
    "photo-1460925895917-afdab827c52f": "https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=800",   // data analytics
    "photo-1642790106117-e829e14a795f": "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=800",   // crypto/trading indicators
    "photo-1551288049-bebda4e38f71": "https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=800",   // financial dashboard
    "photo-1526304640581-d334cdbbf45e": "https://images.pexels.com/photos/4386373/pexels-photo-4386373.jpeg?auto=compress&cs=tinysrgb&w=800",   // money/currency
    "photo-1535320903710-d993d3d77d29": "https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=800",   // calculator finance
    "photo-1642790551116-18e150f248e5": "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=800",   // market analysis
    "photo-1563986768609-322da13575f2": "https://images.pexels.com/photos/6770774/pexels-photo-6770774.jpeg?auto=compress&cs=tinysrgb&w=800",   // business laptop
    "photo-1504607798333-52a30db54a5d": "https://images.pexels.com/photos/5849569/pexels-photo-5849569.jpeg?auto=compress&cs=tinysrgb&w=800",   // alert/warning
    "photo-1553729459-uj1c1b1a7f9b": "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",  // security
    "photo-1454165804606-c3d57bc86b40": "https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=800",   // stress/work
    "photo-1504868584819-f8e8b4b6d7e3": "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800",   // data screen
};

// First verify all new URLs work
async function verifyUrls() {
    console.log("Verifying new image URLs...\n");
    let allOk = true;
    for (const [oldId, newUrl] of Object.entries(brokenToNew)) {
        try {
            const res = await fetch(newUrl, { method: 'HEAD', signal: AbortSignal.timeout(8000) });
            if (res.ok) {
                console.log(`  ✅ ${oldId} → OK (${res.status})`);
            } else {
                console.log(`  ❌ ${oldId} → FAILED (${res.status})`);
                allOk = false;
            }
        } catch (err) {
            console.log(`  ❌ ${oldId} → ERROR: ${err.message}`);
            allOk = false;
        }
    }
    return allOk;
}

async function fixPosts() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, featured_image, content')
        .order('id');

    if (error || !posts) { console.error("Fetch error:", error); return; }

    let totalFixed = 0;

    for (const post of posts) {
        const updates = {};
        let changed = false;

        // Fix featured image
        if (post.featured_image) {
            let newFeatured = post.featured_image;
            for (const [oldId, newUrl] of Object.entries(brokenToNew)) {
                if (newFeatured.includes(oldId)) {
                    newFeatured = newUrl;
                    changed = true;
                    break;
                }
            }
            if (changed) updates.featured_image = newFeatured;
        }

        // Fix content images
        if (post.content) {
            let newContent = post.content;
            for (const [oldId, newUrl] of Object.entries(brokenToNew)) {
                // Replace any img src containing the old Unsplash ID
                const regex = new RegExp(`https://images\\.unsplash\\.com/${oldId}[^"'\\s]*`, 'g');
                if (regex.test(newContent)) {
                    newContent = newContent.replace(regex, newUrl);
                    changed = true;
                }
            }
            if (newContent !== post.content) updates.content = newContent;
        }

        if (changed && Object.keys(updates).length > 0) {
            const { error: err } = await supabase.from('posts').update(updates).eq('id', post.id);
            if (err) {
                console.log(`  ❌ Post #${post.id}: ${err.message}`);
            } else {
                totalFixed++;
                console.log(`  ✅ Post #${post.id}: ${post.title}`);
            }
        }
    }

    console.log(`\n========== DONE ==========`);
    console.log(`Fixed ${totalFixed} posts`);
}

async function main() {
    const urlsOk = await verifyUrls();
    if (!urlsOk) {
        console.log("\n⚠ Some URLs failed verification. Proceeding anyway with working ones...\n");
    }
    console.log("\nFixing posts in database...\n");
    await fixPosts();
}

main();
