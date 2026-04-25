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
        
        // Cùng ngày (từ giờ hiện tại đến cuối ngày theo giờ VN)
        let endOfDay = new Date(vnDateStr + 'T23:59:59.999+07:00');
        let startOfDay = new Date(vnDateStr + 'T00:00:00.000+07:00');
        
        const { data: upcomingPosts, error } = await supabaseAdmin
            .from('posts')
            .select('title, scheduled_at')
            .eq('is_published', false)
            .not('scheduled_at', 'is', null)
            .lte('scheduled_at', endOfDay.toISOString())
            .gte('scheduled_at', startOfDay.toISOString())
            .order('scheduled_at', { ascending: true });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        let teleMsg = `🌅 <b>KẾ HOẠCH BÀI ĐĂNG HÔM NAY</b>\n\n`;
        if (!upcomingPosts || upcomingPosts.length === 0) {
            teleMsg += `Hôm nay (<b>${vnDateStr}</b>) không có bài đăng nào được xếp lịch xuất bản.`;
        } else {
            teleMsg += `Hôm nay (<b>${vnDateStr}</b>) hệ thống tự động đã lên lịch xuất bản <b>${upcomingPosts.length} Bài Viết</b> lên website.\n\n📅 <b>Khung giờ dự kiến chi tiết:</b>`;
            upcomingPosts.forEach((up, idx) => {
                const dateObj = new Date(up.scheduled_at);
                const timeStr = dateObj.toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh', hour12: false, hour: '2-digit', minute:'2-digit' });
                teleMsg += `\n- <b>${timeStr}</b>: <i>${up.title}</i>`;
            });
            teleMsg += `\n\n<i>*Hệ thống sẽ gửi thông báo đến nhóm ngay khi bài viết được xuất bản thành công!</i>`;
        }

        await sendTelegramMessage(teleMsg);

        return NextResponse.json({
            success: true,
            posts: upcomingPosts
        });
    } catch (error) {
        console.error('Morning digest error:', error);
        return NextResponse.json({ error: 'Internal error' }, { status: 500 });
    }
}
