const fs = require('fs');
const envFile = fs.readFileSync('.env.local', 'utf8');
const envVars = envFile.split('\n').reduce((acc, line) => {
    const [key, ...values] = line.split('=');
    if (key && values.length > 0) acc[key.trim()] = values.join('=').trim();
    return acc;
}, {});
const { createClient } = require('@supabase/supabase-js');
const supabaseAdmin = createClient(envVars['NEXT_PUBLIC_SUPABASE_URL'], envVars['SUPABASE_SERVICE_ROLE_KEY']);

(async () => {
    const { data: posts, error } = await supabaseAdmin.from('posts').select('title, is_published, content').ilike('title', '%roadshow%');
    console.log('Total roadshow posts:', posts.length);
    posts.forEach(p => {
        console.log('[' + (p.is_published ? 'PUB' : 'DRAFT') + '] ' + p.title + ' (Length: ' + (p.content ? p.content.length : 0) + ')');
    });
    process.exit(0);
})();
