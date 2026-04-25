const { createClient } = require('@supabase/supabase-js');
const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const unsplashImages = [
    'https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1563605274-125032549226?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1533100652684-2a6d713c7739?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1601732598501-c88be2db8b69?q=80&w=1200&auto=format&fit=crop'
];

(async () => {
    const { data: posts } = await supabaseAdmin.from('posts').select('id, title').is('featured_image', null);
    
    if(!posts || posts.length === 0) {
        console.log('Tất cả các bài đều đã có ảnh đại diện.');
        process.exit(0);
    }
    
    console.log('Tìm thấy', posts.length, 'bài chưa có ảnh đại diện.');
    
    for (const post of posts) {
        const randomImage = unsplashImages[Math.floor(Math.random() * unsplashImages.length)];
        await supabaseAdmin.from('posts').update({ featured_image: randomImage }).eq('id', post.id);
        console.log('Updated image for:', post.title);
    }
    
    console.log('Hoàn tất bổ sung Ảnh Đại Diện!');
})();
