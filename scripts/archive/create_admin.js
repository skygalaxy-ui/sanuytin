// Create new admin user in Supabase
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://pbxpjmklrkkwatdvacap.supabase.co';
const supabaseAnonKey = 'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function createAdminUser() {
    const email = 'phuong@sanuytin.net';
    const password = 'Sanuytin@2024';

    console.log('Creating new admin user...');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('');

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        console.error('Error:', error.message);

        // If user exists, try to sign in instead
        if (error.message.includes('already registered')) {
            console.log('\nUser already exists. Trying to reset password...');

            const { data: resetData, error: resetError } = await supabase.auth.resetPasswordForEmail(email);

            if (resetError) {
                console.error('Reset error:', resetError.message);
            } else {
                console.log('Password reset email sent to:', email);
            }
        }
    } else {
        console.log('✅ User created successfully!');
        console.log('User ID:', data.user?.id);
        console.log('\n📧 Check email to confirm account (if email confirmation is enabled)');
    }
}

createAdminUser();
