import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

async function checkBrokers() {
    const { data: brokers, error } = await supabase
        .from('brokers')
        .select('id, name, rank, score, is_active')
        .order('rank', { ascending: true });

    if (error) {
        console.error("Error fetching brokers:", error);
    } else {
        console.log("=== BẢNG XẾP HẠNG SÀN HIỆN TẠI ===");
        brokers.forEach(b => {
            console.log(`Rank ${b.rank} | ${b.name} (Điểm: ${b.score}) | Trạng thái: ${b.is_active ? 'Active' : 'Hidden'}`);
        });
    }
}

checkBrokers();
