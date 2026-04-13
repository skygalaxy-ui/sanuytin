import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

async function checkTaxonomy() {
    const { data: posts, error } = await supabase.from('posts').select('id, category, category_name, title, tags');
    if (error) { console.error(error); return; }
    const categories = new Set();
    const categoriesMap = {};
    const tags = new Set();
    
    posts.forEach(p => {
        if(p.category) {
           categories.add(p.category);
           categoriesMap[p.category] = p.category_name;
        }
        if(p.tags && Array.isArray(p.tags)) {
           p.tags.forEach(t => tags.add(t));
        }
    });

    console.log("=== CURRENT CATEGORIES ===");
    for (const cat of categories) {
        console.log(`- ${cat} : ${categoriesMap[cat]}`);
    }

    console.log("\n=== CURRENT TAGS ===");
    console.log(Array.from(tags).join(', '));
}

checkTaxonomy();
