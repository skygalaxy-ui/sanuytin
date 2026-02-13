/**
 * Script tạo admin user cho Supabase Auth
 * Chạy: npx ts-node scripts/create-admin.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as readline from 'readline';

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Cần service role key

if (!supabaseUrl) {
    console.error('❌ Thiếu NEXT_PUBLIC_SUPABASE_URL trong .env.local');
    process.exit(1);
}

// Nếu không có service key, hướng dẫn tạo qua dashboard
if (!supabaseServiceKey) {
    console.log('\n=================================================');
    console.log('🔐 HƯỚNG DẪN TẠO ADMIN USER');
    console.log('=================================================\n');
    console.log('Do không có Service Role Key, hãy tạo user qua Supabase Dashboard:\n');
    console.log('1. Truy cập: https://supabase.com/dashboard');
    console.log('2. Chọn project của bạn');
    console.log('3. Vào: Authentication → Users');
    console.log('4. Click: "Add user" → "Create new user"');
    console.log('5. Nhập thông tin:');
    console.log('   - Email: admin@sanuytin.net');
    console.log('   - Password: [Mật khẩu mạnh của bạn]');
    console.log('6. Click: "Create user"\n');
    console.log('─────────────────────────────────────────────────');
    console.log('📧 Các email được phép làm admin:');
    console.log('   • admin@sanuytin.net');
    console.log('   • sanuytin.net@gmail.com');
    console.log('─────────────────────────────────────────────────\n');
    console.log('Sau khi tạo xong, bạn có thể đăng nhập tại:');
    console.log('   http://34.142.182.73/admin/login');
    console.log('\n=================================================\n');
    process.exit(0);
}

// Nếu có service key, cho phép tạo user
const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(prompt: string): Promise<string> {
    return new Promise(resolve => rl.question(prompt, resolve));
}

async function createAdmin() {
    console.log('\n=================================================');
    console.log('🔐 TẠO ADMIN USER CHO SÀN UY TÍN');
    console.log('=================================================\n');

    const email = await question('Email (mặc định: admin@sanuytin.net): ') || 'admin@sanuytin.net';
    const password = await question('Mật khẩu: ');

    if (!password || password.length < 6) {
        console.error('❌ Mật khẩu phải có ít nhất 6 ký tự');
        rl.close();
        process.exit(1);
    }

    console.log('\nĐang tạo user...');

    const { data, error } = await supabase.auth.admin.createUser({
        email,
        password,
        email_confirm: true // Tự động xác nhận email
    });

    if (error) {
        console.error('❌ Lỗi:', error.message);
        rl.close();
        process.exit(1);
    }

    console.log('\n✅ Tạo admin thành công!');
    console.log('─────────────────────────────────────────────────');
    console.log(`   Email: ${data.user?.email}`);
    console.log(`   ID: ${data.user?.id}`);
    console.log('─────────────────────────────────────────────────');
    console.log('\n🔗 Đăng nhập tại: http://34.142.182.73/admin/login\n');

    rl.close();
}

createAdmin();
