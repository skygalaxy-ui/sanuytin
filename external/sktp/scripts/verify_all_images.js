const { createClient } = require('@supabase/supabase-js');
const https = require('https');
const fs = require('fs');

// Load environment variables manually
const envFile = fs.readFileSync('.env.local', 'utf8');
const envVars = envFile.split('\n').reduce((acc, line) => {
    const [key, ...values] = line.split('=');
    if (key && values.length > 0) acc[key.trim()] = values.join('=').trim();
    return acc;
}, {});

const supabaseAdmin = createClient(envVars['NEXT_PUBLIC_SUPABASE_URL'], envVars['SUPABASE_SERVICE_ROLE_KEY']);

const checkUrl = (url) => new Promise((resolve) => {
    if (!url.startsWith('http')) return resolve(true); // ignore non-http
    try {
        https.get(url, (res) => {
            resolve(res.statusCode === 200 || res.statusCode === 302 || res.statusCode === 301);
            res.resume();
        }).on('error', () => resolve(false));
    } catch(e) {
        resolve(false);
    }
});

(async () => {
    console.log('Fetching posts...');
    const { data: posts } = await supabaseAdmin.from('posts').select('id, title, featured_image, content');
    
    let totalUrls = 0;
    const urlMap = new Map();

    posts.forEach(p => {
        if (p.featured_image && p.featured_image.startsWith('http')) {
            if (!urlMap.has(p.featured_image)) urlMap.set(p.featured_image, []);
            urlMap.get(p.featured_image).push({id: p.id, type: 'featured', title: p.title});
            totalUrls++;
        }
        
        if (p.content) {
            const matches = p.content.match(/<img[^>]+src=\"(http[^\"]+)\"/g);
            if (matches) {
                matches.forEach(m => {
                    const match = /<img[^>]+src=\"(http[^\"]+)\"/.exec(m);
                    if (match && match[1]) {
                        const u = match[1];
                        if (!urlMap.has(u)) urlMap.set(u, []);
                        urlMap.get(u).push({id: p.id, type: 'content', title: p.title});
                        totalUrls++;
                    }
                });
            }
        }
    });

    console.log('Found', urlMap.size, 'unique URLs to verify from', totalUrls, 'total image references across', posts.length, 'posts.');
    
    const badUrls = [];
    let count = 0;
    
    const entries = Array.from(urlMap.entries());
    const batchSize = 10;
    for (let i = 0; i < entries.length; i += batchSize) {
        const batch = entries.slice(i, i + batchSize);
        await Promise.all(batch.map(async ([url, affected]) => {
            const ok = await checkUrl(url);
            if (!ok) {
                console.log('FAIL:', url);
                badUrls.push({url, affected});
            }
            count++;
        }));
        process.stdout.write(count + '/' + entries.length + '\\r');
    }

    console.log('\\nVerification complete.');
    console.log('Bad URLs:', badUrls.length);
    if (badUrls.length > 0) {
        let replacementMap = [
            'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop'
        ];
        
        for (const bad of badUrls) {
            for (const aff of bad.affected) {
                const fixUrl = replacementMap[Math.floor(Math.random() * replacementMap.length)];
                if (aff.type === 'featured') {
                    console.log('Fixing featured_image for:', aff.id);
                    await supabaseAdmin.from('posts').update({featured_image: fixUrl}).eq('id', aff.id);
                } else if (aff.type === 'content') {
                    console.log('Fixing content image for:', aff.id);
                    const { data: pData } = await supabaseAdmin.from('posts').select('content').eq('id', aff.id).single();
                    if (pData) {
                        const newContent = pData.content.replace(new RegExp(bad.url.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&'), 'g'), fixUrl);
                        await supabaseAdmin.from('posts').update({content: newContent}).eq('id', aff.id);
                    }
                }
            }
        }
        console.log('All bad images fixed automatically!');
    } else {
        console.log('No broken images found.');
    }
    
    process.exit(0);
})();
