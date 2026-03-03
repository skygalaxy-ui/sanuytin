import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://pbxpjmklrkkwatdvacap.supabase.co";
const supabaseAnonKey = "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Gán featured image cho các bài viết thiếu
const imageUpdates = [
    {
        id: 97,
        slug: "huong-dan-mo-tai-khoan-forex",
        featured_image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=800",
        featured_image_alt: "Hướng dẫn mở tài khoản Forex"
    },
    {
        id: 98,
        slug: "cach-quan-ly-von-forex-hieu-qua",
        featured_image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800",
        featured_image_alt: "Quản lý vốn Forex hiệu quả"
    },
    {
        id: 99,
        slug: "so-sanh-exness-va-xtb",
        featured_image: "https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=800",
        featured_image_alt: "So sánh sàn Exness và XTB"
    },
    {
        id: 100,
        slug: "huong-dan-nap-rut-tien-exness",
        featured_image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800",
        featured_image_alt: "Hướng dẫn nạp rút tiền Exness"
    }
];

async function main() {
    for (const item of imageUpdates) {
        const { error } = await supabase
            .from('posts')
            .update({
                featured_image: item.featured_image,
                featured_image_alt: item.featured_image_alt
            })
            .eq('id', item.id);

        if (error) {
            console.error(`❌ Error updating ID ${item.id}: ${error.message}`);
        } else {
            console.log(`✅ Updated ID ${item.id} (${item.slug})`);
        }
    }
    console.log('\nDone!');
}

main();
