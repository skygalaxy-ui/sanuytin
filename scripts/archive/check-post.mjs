import { createClient } from '@supabase/supabase-js';

const sb = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

// Check post 1
const { data: p1, error: e1 } = await sb
    .from('posts')
    .select('content')
    .eq('id', '35ef6ff5-c485-4994-952c-017c7f24dd92')
    .single();

const plain1 = (p1?.content || '').replace(/<[^>]*>/g, '').trim();
const wc1 = plain1.split(/\s+/).filter(w => w.length > 0).length;
console.log('Post 1 (NAV ETF): ' + wc1 + ' words');
if (e1) console.log('  Error: ' + e1.message);

// Check post 2
const { data: p2, error: e2 } = await sb
    .from('posts')
    .select('content')
    .eq('id', '75b06b63-a704-41b2-b8d1-5718c3e36517')
    .single();

const plain2 = (p2?.content || '').replace(/<[^>]*>/g, '').trim();
const wc2 = plain2.split(/\s+/).filter(w => w.length > 0).length;
console.log('Post 2 (Top 10 App): ' + wc2 + ' words');
if (e2) console.log('  Error: ' + e2.message);

// Try a test update  
console.log('');
console.log('Testing update on post 1...');
const { data: updateResult, error: updateErr } = await sb
    .from('posts')
    .update({ meta_title: 'Cach theo doi NAV va hieu suat quy ETF chinh xac nhat' })
    .eq('id', '35ef6ff5-c485-4994-952c-017c7f24dd92')
    .select('meta_title');

if (updateErr) {
    console.log('Update error: ' + updateErr.message);
    console.log('Update status: ' + updateErr.code);
} else {
    console.log('Update result: ' + JSON.stringify(updateResult));
}
