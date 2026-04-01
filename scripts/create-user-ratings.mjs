// Script to create user_ratings table via Supabase REST API
// Uses fetch to the PostgREST endpoint with service role key

import { createClient } from '@supabase/supabase-js';

// SanUyTin production DB (ecipdcojedkbrlggaqja)
const SUPABASE_URL = 'https://ecipdcojedkbrlggaqja.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY';

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

const SQL = `
CREATE TABLE IF NOT EXISTS public.user_ratings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    target_slug TEXT NOT NULL,
    user_name TEXT NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT DEFAULT '',
    is_approved BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_user_ratings_target_slug ON public.user_ratings(target_slug);

ALTER TABLE public.user_ratings ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Anyone can read approved ratings' AND tablename = 'user_ratings') THEN
        CREATE POLICY "Anyone can read approved ratings"
            ON public.user_ratings FOR SELECT USING (is_approved = true);
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Anyone can insert ratings' AND tablename = 'user_ratings') THEN
        CREATE POLICY "Anyone can insert ratings"
            ON public.user_ratings FOR INSERT WITH CHECK (true);
    END IF;
END $$;
`;

async function createTable() {
    console.log('🔄 Attempting to create user_ratings table...');
    console.log(`📍 Target DB: ${SUPABASE_URL}`);
    
    // Try using the SQL endpoint (Supabase v2+)
    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/`, {
            method: 'POST',
            headers: {
                'apikey': SERVICE_ROLE_KEY,
                'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        });
        console.log('RPC endpoint status:', response.status);
    } catch (e) {
        // Expected to fail
    }

    // Method 1: Try direct pg query endpoint
    try {
        const pgResponse = await fetch(`${SUPABASE_URL}/pg/query`, {
            method: 'POST',
            headers: {
                'apikey': SERVICE_ROLE_KEY,
                'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: SQL })
        });
        
        if (pgResponse.ok) {
            const result = await pgResponse.json();
            console.log('✅ Table created successfully via pg/query!');
            console.log(result);
            return;
        } else {
            console.log(`⚠️ pg/query endpoint returned ${pgResponse.status}`);
        }
    } catch (e) {
        console.log('⚠️ pg/query method not available');
    }

    // Method 2: Try the SQL API endpoint
    try {
        const sqlResponse = await fetch(`${SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
            method: 'POST',
            headers: {
                'apikey': SERVICE_ROLE_KEY,
                'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
                'Content-Type': 'application/json',
                'Prefer': 'return=representation'
            },
            body: JSON.stringify({ sql: SQL })
        });
        
        if (sqlResponse.ok) {
            console.log('✅ Table created successfully via exec_sql!');
            return;
        } else {
            console.log(`⚠️ exec_sql returned ${sqlResponse.status}`);
        }
    } catch (e) {
        console.log('⚠️ exec_sql method not available');
    }

    // Method 3: Check if table already exists
    console.log('\n📋 Checking if table already exists...');
    const { data, error } = await supabase.from('user_ratings').select('id').limit(1);
    
    if (error) {
        if (error.code === 'PGRST205') {
            console.log('❌ Table does NOT exist yet.');
            console.log('\n📌 Please create the table manually:');
            console.log('   1. Go to: https://supabase.com/dashboard/project/ecipdcojedkbrlggaqja/sql/new');
            console.log('   2. Paste the SQL from: supabase/create_user_ratings.sql');
            console.log('   3. Click "Run"');
        } else {
            console.log('Error:', error.message);
        }
    } else {
        console.log('✅ Table already exists! Rows found:', data?.length ?? 0);
    }
}

createTable().catch(console.error);
