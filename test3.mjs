import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const KNOWLEDGE_CATEGORY_SLUGS = [
    'kien-thuc',
    'kien-thuc-forex',
    'kien-thuc-dau-tu',
    'huong-dan',
    'kinh-nghiem',
    'kien-thuc-nguoi-moi',
    'phan-tich-ky-thuat',
    'quan-ly-von',
    'cong-cu-trading',
    'dau-tu-quy'
];

export function isKnowledgeCategory(categorySlug) {
    return KNOWLEDGE_CATEGORY_SLUGS.includes(categorySlug);
}

async function run() {
    const { data: posts, error } = await supabase.from('posts').select('*').eq('is_published', true).order('id', { ascending: false });
    const newsPosts = posts.filter(p => !isKnowledgeCategory(p.category || ''));
    console.log("Total published:", posts.length);
    console.log("newsPosts:", newsPosts.length);
    
    const thePost = newsPosts.find(p => p.slug === 'danh-gia-san-vantage-tong-hop-2026');
    console.log("Is the post in generateStaticParams list?:", !!thePost);
}
run();
