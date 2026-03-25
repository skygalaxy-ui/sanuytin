import { createClient } from '@supabase/supabase-js';
import * as readline from 'readline';

const sb = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

// Prompt for admin password
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function ask(q) { return new Promise(r => rl.question(q, r)); }

const email = 'admin@sanuytin.net';
const password = await ask('Nhap mat khau admin: ');
rl.close();

console.log('');
console.log('Dang dang nhap...');
const { data: authData, error: authErr } = await sb.auth.signInWithPassword({ email, password });

if (authErr) {
    console.log('LOI DANG NHAP: ' + authErr.message);
    process.exit(1);
}
console.log('Dang nhap thanh cong: ' + authData.user.email);
console.log('');

// Test update first
console.log('Testing update...');
const { data: testResult, error: testErr } = await sb
    .from('posts')
    .update({ meta_title: 'Cách theo dõi NAV và hiệu suất quỹ ETF chính xác nhất' })
    .eq('id', '35ef6ff5-c485-4994-952c-017c7f24dd92')
    .select('id, meta_title');

if (testErr) {
    console.log('Update error: ' + testErr.message);
} else {
    console.log('Update OK: ' + JSON.stringify(testResult));
}
