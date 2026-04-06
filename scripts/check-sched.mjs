import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function checkSched() {
  const { data } = await sb.from('scheduled_content').select('title, content_body').limit(50);
  if (!data) return;
  for (const item of data) {
    if (item.title?.includes('Vén') || item.content_body?.includes('Danh Giá')) {
      console.log('FOUND IN SCHEDULED_CONTENT:', item.title);
    }
  }
  console.log('Checked scheduled_content.');
}
checkSched();
