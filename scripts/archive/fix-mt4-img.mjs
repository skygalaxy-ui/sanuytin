import { createClient } from '@supabase/supabase-js';
const s = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K');

const { error } = await s.from('posts')
    .update({
        featured_image: 'https://images.pexels.com/photos/5980743/pexels-photo-5980743.jpeg?auto=compress&cs=tinysrgb&w=800',
        featured_image_alt: 'Hướng dẫn sử dụng MetaTrader 4 chi tiết cho người mới'
    })
    .eq('slug', 'huong-dan-su-dung-mt4-chi-tiet');

console.log(error ? 'Error: ' + error.message : '✅ Unique featured image set!');
process.exit(0);
