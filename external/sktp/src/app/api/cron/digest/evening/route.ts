import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase-admin';
import { sendTelegramMessage } from '@/lib/telegram';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');

    const cronSecret = process.env.CRON_SECRET || process.env.NEXT_PUBLIC_CRON_SECRET;
    if (!cronSecret || key !== cronSecret) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const vnDateNow = new Date(new Date().getTime() + 7 * 3600 * 1000);
        const vnDateStr = vnDateNow.toISOString().split('T')[0];
        
        let endOfDay = new Date(vnDateStr + 'T23:59:59.999+07:00');
        let startOfDay = new Date(vnDateStr + 'T00:00:00.000+07:00');
        
        const { data: publishedPosts, error } = await supabaseAdmin
            .from('posts')
            .select('title, published_at, slug, id')
            .eq('is_published', true)
            .not('published_at', 'is', null)
            .lte('published_at', endOfDay.toISOString())
            .gte('published_at', startOfDay.toISOString())
            .order('published_at', { ascending: true });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        let teleMsg = `🌃 <b>BÁO CÁO TỔNG KẾT XUẤT BẢN (${vnDateStr})</b>\n\n`;
        if (!publishedPosts || publishedPosts.length === 0) {
            teleMsg += `Hôm nay không có bài viết nào được xuất bản lên website.`;
        } else {
            teleMsg += `Hôm nay hệ thống đã xuất bản thành công <b>${publishedPosts.length} Bài Viết</b>.\n\n🏆 <b>Danh sách bài đã lên trang:</b>`;
            publishedPosts.forEach((up, idx) => {
                const dateObj = new Date(up.published_at);
                const timeStr = dateObj.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false, hour: '2-digit', minute:'2-digit' });
                const postUrl = `https://sukientoanquoc.com/blog/${up.slug || up.id}`;
                teleMsg += `\n- <b>${timeStr}</b>: <a href="${postUrl}">${up.title}</a>`;
            });
            teleMsg += `\n\n<i>*Quy trình tự động hóa xuất bản vẫn đang hoạt động ổn định cho lịch đăng của ngày mai.</i>`;
        }

        await sendTelegramMessage(teleMsg);

        return NextResponse.json({
            success: true,
            posts: publishedPosts
        });
    } catch (error) {
        console.error('Evening digest error:', error);
        return NextResponse.json({ error: 'Internal error' }, { status: 500 });
    }
}
