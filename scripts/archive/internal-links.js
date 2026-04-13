const { createClient } = require('@supabase/supabase-js');

const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBieHBqbWtscmtrd2F0ZHZhY2FwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDE0MDY1NywiZXhwIjoyMDg1NzE2NjU3fQ.HciQ-p_okdgtxAOdV47JKQhsHCshvWQpDzy1vToYXO4');

const keywordMap = [
    { keyword: 'Exness', url: '/exness' },
    { keyword: 'XTB', url: '/xtb' },
    { keyword: 'Pepperstone', url: '/pepperstone' },
    { keyword: 'IC Markets', url: '/ic-markets' },
    { keyword: 'XM', url: '/xm' },
    { keyword: 'Tickmill', url: '/tickmill' },
    { keyword: 'HFM', url: '/hfm' },
    { keyword: 'so sánh sàn', url: '/so-sanh' },
];

async function updateInternalLinks() {
    console.log('Fetching posts...');
    const { data: posts, error } = await supabase.from('posts').select('id, content, slug');

    if (error) {
        console.error('Error fetching posts:', error);
        return;
    }

    console.log(`Found ${posts.length} posts. Processing...`);

    for (const post of posts) {
        let content = post.content || '';
        let updated = false;

        for (const item of keywordMap) {
            // Check if already linked or if the post itself is about this keyword
            if (content.includes(`href="${item.url}"`) || post.slug.includes(item.url.substring(1))) {
                continue;
            }

            // Simple regex to find keyword NOT inside an <a> tag
            // This is a naive implementation, but safe for basic HTML content
            const regex = new RegExp(`(?<!<a[^>]*>)\\b${item.keyword}\\b(?!<\\/a>)`, 'i');

            if (regex.test(content)) {
                content = content.replace(regex, `<a href="${item.url}" class="text-primary hover:underline font-medium">${item.keyword}</a>`);
                updated = true;
            }
        }

        if (updated) {
            const { error: updateError } = await supabase
                .from('posts')
                .update({ content: content })
                .eq('id', post.id);

            if (updateError) {
                console.error(`Error updating post ${post.id}:`, updateError);
            } else {
                console.log(`Updated internal links for: ${post.slug}`);
            }
        }
    }

    console.log('Finished updating internal links.');
}

updateInternalLinks();
