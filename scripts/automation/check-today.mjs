import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const sb = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function main() {
    const { data, error } = await sb
        .from('posts')
        .select('id, title, is_published, scheduled_at, slug')
        .not('scheduled_at', 'is', null)
        .order('scheduled_at');

    if (error) {
        console.log('ERROR:', JSON.stringify(error));
        return;
    }

    const result = {
        total: data.length,
        posts: data.map(p => ({
            id: p.id,
            title: p.title,
            slug: p.slug,
            is_published: p.is_published,
            scheduled_at: p.scheduled_at,
            scheduled_vn: new Date(p.scheduled_at).toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh',
                day: '2-digit', month: '2-digit', year: 'numeric',
                hour: '2-digit', minute: '2-digit'
            })
        }))
    };

    fs.writeFileSync('scripts/schedule-report.json', JSON.stringify(result, null, 2), 'utf8');
    console.log('Done - saved to scripts/schedule-report.json');
}

main();
