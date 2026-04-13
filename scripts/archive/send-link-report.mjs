import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { execSync } from 'child_process';
import { formatInTimeZone } from 'date-fns-tz';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseKey);
const VN_TIMEZONE = 'Asia/Ho_Chi_Minh';

async function sendLinks() {
    const { data: posts } = await supabase.from('posts').select('id, title, slug, scheduled_at, category').in('id', [176, 177, 178, 179, 180, 181, 182, 183]).order('id', {ascending: true});
    
    let msg = '🔥 <b>ĐÃ ĐẠP MÁY BƠM ĐẦY ĐỦ RUỘT (OUTLINE SEO) VÀO 8 BÀI TIN TỨC MỚI</b>\n\n';
    msg += 'Sếp kiểm tra bài viết (đã đính kèm link) xem lên màu Bảng biểu và FAQ có mượt không nhé:\n\n';

    const KNOWLEDGE_CATEGORIES = ['kien-thuc', 'kien-thuc-forex', 'kien-thuc-dau-tu', 'huong-dan', 'kinh-nghiem', 'kien-thuc-nguoi-moi', 'phan-tich-ky-thuat', 'quan-ly-von', 'cong-cu-trading', 'dau-tu-quy'];
    
    posts.forEach((p, index) => {
        const timeStr = formatInTimeZone(new Date(p.scheduled_at), VN_TIMEZONE, 'HH:mm');
        const folder = KNOWLEDGE_CATEGORIES.includes(p.category) ? 'kien-thuc-forex' : 'tin-tuc';
        const url = `https://sanuytin.net/${folder}/${p.slug}`;
        msg += `⏱ ${timeStr} - <a href="${url}">${p.title}</a>\n`;
    });

    const T = process.env.TELEGRAM_BOT_TOKEN;
    const C = process.env.TELEGRAM_CHAT_ID;

    // Send via CURL to bypass node fetch issues
    try {
        execSync(`curl -s -X POST https://api.telegram.org/bot${T}/sendMessage -d chat_id=${C} -d parse_mode=HTML -d disable_web_page_preview=true --data-urlencode text="${msg}"`);
        console.log("Đã gửi Tele kèm link thành công!");
    } catch(err) {
         console.error("Lỗi gửi curl:", err.message);
    }
}
sendLinks();
