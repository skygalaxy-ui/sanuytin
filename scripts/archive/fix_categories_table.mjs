import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: '.env.local' });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

const newCategories = [
    { slug: 'phan-tich-ky-thuat', name: 'Phân Tích Kỹ Thuật' },
    { slug: 'quan-ly-von', name: 'Quản Lý Vốn' },
    { slug: 'cong-cu-trading', name: 'Công Cụ Trading' },
    { slug: 'dau-tu-quy', name: 'Đầu Tư Quỹ' },
    { slug: 'kien-thuc-nguoi-moi', name: 'Kiến Thức Người Mới' },
    { slug: 'canh-bao-scam', name: 'Cảnh Báo Scam' },
    { slug: 'so-sanh-san', name: 'So Sánh Sàn' },
    { slug: 'danh-gia-san', name: 'Đánh Giá Sàn' },
    { slug: 'khuyen-mai', name: 'Khuyến Mãi' },
    { slug: 'tin-thi-truong', name: 'Tin Thị Trường' }
];

async function fixCategoriesTable() {
    for (const cat of newCategories) {
        // Upsert category based on slug
        const { error } = await supabase.from('categories')
            .upsert({ slug: cat.slug, name: cat.name, created_at: new Date().toISOString() }, { onConflict: 'slug' });
            
        if (error) {
            console.log(`Failed for ${cat.slug}:`, error.message);
        } else {
            console.log(`Upserted: ${cat.name} (${cat.slug})`);
        }
    }
    console.log("DONE updating categories table!");
}

fixCategoriesTable();
