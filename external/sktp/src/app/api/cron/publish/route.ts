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
        const currentTime = new Date().toISOString();
        const { data: scheduledPosts, error } = await supabaseAdmin
            .from('posts')
            .select('id, title, slug')
            .eq('is_published', false)
            .not('scheduled_at', 'is', null)
            .lte('scheduled_at', currentTime);

        if (error || !scheduledPosts || scheduledPosts.length === 0) {
            return NextResponse.json({ success: true, published: 0, posts: [] });
        }

        // Fetch upcoming scheduled posts for TODAY (Vietnam time)
        const vnDateNow = new Date(new Date().getTime() + 7 * 3600 * 1000);
        const vnDateStr = vnDateNow.toISOString().split('T')[0];
        
        let endOfDay = new Date(vnDateStr + 'T23:59:59.999+07:00');
        
        const { data: upcomingPosts } = await supabaseAdmin
            .from('posts')
            .select('title, scheduled_at')
            .eq('is_published', false)
            .not('scheduled_at', 'is', null)
            .lte('scheduled_at', endOfDay.toISOString())
            .order('scheduled_at', { ascending: true });

        let upcomingText = '\n\n📅 <b>Lịch đăng bài còn lại trong ngày hôm nay:</b>';
        if (upcomingPosts && upcomingPosts.length > 0) {
            upcomingPosts.forEach((up, idx) => {
                const dateObj = new Date(up.scheduled_at);
                const timeStr = dateObj.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false, hour: '2-digit', minute:'2-digit' });
                upcomingText += `\n- <b>${timeStr}</b>: <i>${up.title}</i>`;
            });
        } else {
            upcomingText += '\n<i>(Đã hoàn thành toàn bộ chỉ tiêu bài đăng trong ngày hôm nay)</i>';
        }

        for (const post of scheduledPosts) {
            await supabaseAdmin.from('posts').update({
                is_published: true,
                published_at: currentTime,
                scheduled_at: null,
                updated_at: currentTime
            }).eq('id', post.id);

            // Gửi tin nhắn Tele thông báo đăng thành công
            const postUrl = `https://sukientoanquoc.com/blog/${post.slug || post.id}`;
            const publishTime = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false });
            const teleMsg = `🚀 <b>XUẤT BẢN THÀNH CÔNG</b>\n\n📌 <b>Tiêu đề:</b> ${post.title}\n🕒 <b>Thời gian:</b> ${publishTime}\n🔗 <b>Đường dẫn:</b> <a href="${postUrl}">${postUrl}</a>${upcomingText}`;
            await sendTelegramMessage(teleMsg);
        }

        return NextResponse.json({
            success: true,
            published: scheduledPosts.length,
            posts: scheduledPosts,
            timestamp: currentTime,
        });
    } catch (error) {
        console.error('Cron publish error:', error);
        return NextResponse.json({ error: 'Internal error' }, { status: 500 });
    }
}
