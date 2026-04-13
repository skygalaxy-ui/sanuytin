import { createClient } from '@supabase/supabase-js';
const supabase = createClient('https://pbxpjmklrkkwatdvacap.supabase.co', 'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K');

async function main() {
    // === 1. TÌM VÀ SỬA ẢNH TRÙNG ===
    console.log('\n=== KIỂM TRA ẢNH TRÙNG ===');
    const { data: allPosts } = await supabase
        .from('posts')
        .select('id, slug, featured_image')
        .eq('is_published', true)
        .not('featured_image', 'is', null);

    // Tìm ảnh bị trùng
    const imgMap = {};
    for (const p of allPosts) {
        if (!imgMap[p.featured_image]) imgMap[p.featured_image] = [];
        imgMap[p.featured_image].push(p);
    }

    const dupes = Object.entries(imgMap).filter(([_, posts]) => posts.length > 1);
    console.log(`Tìm thấy ${dupes.length} ảnh bị trùng:\n`);

    // Ảnh Pexels mới, UNIQUE, chưa dùng
    const newImages = [
        'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8370478/pexels-photo-8370478.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5849592/pexels-photo-5849592.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8370648/pexels-photo-8370648.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5849604/pexels-photo-5849604.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6770609/pexels-photo-6770609.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8297478/pexels-photo-8297478.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6771074/pexels-photo-6771074.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8370424/pexels-photo-8370424.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5849539/pexels-photo-5849539.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6770771/pexels-photo-6770771.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8297152/pexels-photo-8297152.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6771185/pexels-photo-6771185.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8370559/pexels-photo-8370559.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/5849563/pexels-photo-5849563.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6770742/pexels-photo-6770742.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8297240/pexels-photo-8297240.jpeg?auto=compress&cs=tinysrgb&w=800',
    ];

    let imgIdx = 0;
    for (const [img, posts] of dupes) {
        console.log(`🔴 Ảnh trùng (${posts.length} bài): ${img.substring(0, 60)}...`);
        // Giữ bài đầu, đổi ảnh cho các bài còn lại
        for (let i = 1; i < posts.length; i++) {
            if (imgIdx >= newImages.length) {
                console.log('  ⚠️ Hết ảnh mới!');
                break;
            }
            const { error } = await supabase
                .from('posts')
                .update({ featured_image: newImages[imgIdx] })
                .eq('id', posts[i].id);
            if (!error) {
                console.log(`  ✅ ID ${posts[i].id} (${posts[i].slug}) → ảnh mới`);
            } else {
                console.log(`  ❌ ID ${posts[i].id}: ${error.message}`);
            }
            imgIdx++;
        }
    }

    // === 2. TÌM VÀ SỬA LINK "CÁCH ĐẦU TƯ" ===
    console.log('\n=== KIỂM TRA LINK CÁCH ĐẦU TƯ ===');
    const { data: cdtPosts } = await supabase
        .from('posts')
        .select('id, slug, content')
        .eq('is_published', true)
        .or('content.ilike.%cachdautu%,content.ilike.%Cách Đầu Tư%,content.ilike.%cach-dau-tu%');

    console.log(`Tìm thấy ${cdtPosts?.length || 0} bài có link "Cách Đầu Tư"`);

    if (cdtPosts && cdtPosts.length > 0) {
        for (const p of cdtPosts) {
            // Thay link cachdautu → sanuytin hoặc xóa
            let newContent = p.content;
            // Xóa tất cả link trỏ đến cachdautu
            newContent = newContent.replace(/<a[^>]*href="[^"]*cachdautu[^"]*"[^>]*>[^<]*<\/a>/gi, (match) => {
                const text = match.replace(/<[^>]*>/g, '');
                return text; // Giữ text, bỏ link
            });
            // Xóa link "Cách Đầu Tư" dạng text
            newContent = newContent.replace(/<a[^>]*>Cách Đầu Tư<\/a>/gi, 'cách đầu tư');
            // Xóa "Sàn Uy Tín" link trỏ sai
            newContent = newContent.replace(/<a[^>]*href="[^"]*cachdautu[^"]*"[^>]*>Sàn Uy Tín<\/a>/gi, 'SanUyTin.net');

            if (newContent !== p.content) {
                const { error } = await supabase
                    .from('posts')
                    .update({ content: newContent })
                    .eq('id', p.id);
                console.log(error ? `  ❌ ID ${p.id}` : `  ✅ ID ${p.id} (${p.slug}) — đã xóa link cachdautu`);
            }
        }
    }

    console.log('\n✅ Hoàn tất!');
    process.exit(0);
}
main();
