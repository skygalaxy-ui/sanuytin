import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../.env.local') });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const REMAINING_IDS = [33, 37, 10, 57, 62, 63, 64, 65];

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
  "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
  "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80",
  "https://images.unsplash.com/photo-1614028674482-15f1a9a81177?w=800&q=80",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  "https://images.unsplash.com/photo-1611977717467-ce10b5b11166?w=800&q=80",
  "https://images.unsplash.com/photo-1604594849809-fd38dc9ee484?w=800&q=80",
  "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=800&q=80"
];

const CONCLUSIONS = {
    33: "Nắm vững sự khác biệt giữa Market order, Limit và Stop order không chỉ giúp bạn mua bán ở mức giá mong muốn mà còn bảo vệ tài khoản khỏi những biến động bất ngờ. Đừng vội vã bấm nút khi chưa hiểu rõ loại lệnh mình đang sử dụng. Hãy rèn luyện kỹ năng này trên tài khoản Demo trước khi bước vào thực chiến.",
    37: "Chỉ báo RSI là một công cụ mạnh mẽ nhưng không phải là \"chén thánh\". Chìa khóa để sử dụng hiệu quả RSI nằm ở việc kết hợp nó với hành động giá (Price Action) và các chỉ báo khác, kết hợp với các mức quá mua/quá bán và phân kỳ. Hãy luôn đặt mức dừng lỗ an toàn để quản lý rủi ro tốt nhất trong mọi tình huống.",
    10: "Nguyên tắc sống còn trong giao dịch Forex không phải là kiếm bao nhiêu lợi nhuận, mà là làm sao không để mất quá nhiều tiền. Tránh 5 sai lầm đặt Stop loss kể trên chính là những bước cơ bản để bảo vệ vốn. Hãy coi Stop loss như tiền trích ra để \"bảo hiểm\" cho sự nghiệp Trading dài lâu của bạn.",
    57: "Scalping là một trường phái hấp dẫn nhờ lợi nhuận tức thì nhưng lại đòi hỏi phản xạ nhạy bén, tâm lý vững vàng và phí Spread thấp cực độ. Bạn có thể kiếm được lợi nhuận tốt bằng Scalping nếu tuân thủ chặt chẽ kỷ luật, áp dụng phiên Á - Âu và quan trọng nhất là chọn được một sàn giao dịch hỗ trợ khớp lệnh siêu nhanh.",
    62: "Đòn bẩy tài chính thực chất là một đặc quyền tuyệt vời giúp nhà giao dịch cá nhân tiếp cận thị trường toàn cầu với số vốn nhỏ. Tuy nhiên, lòng tham thường khiến đòn bẩy biến thành con dao hai lưỡi chí mạng. Bằng cách hiểu rõ quy tắc mức ký quỹ và quản lý vốn đúng chừng mực, bạn sẽ biến đòn bẩy trở thành vũ khí đắc lực thay vì tự tổn thương mình.",
    63: "Dù giãn Spread đôi khi khó nhận thấy bằng mắt thường, về dài hạn, nó vẫn là thủ phạm chính cắn xén đi lợi nhuận tiềm năng của bạn mỗi ngày. Chính vì thế, luôn ưu tiên chọn những sàn giao dịch ECN Raw Spread uy tín và theo dõi sát sao biểu đồ Bid/Ask. Một Pip bạn tiết kiệm được cũng chính là tiền bạn bỏ túi thêm.",
    64: "Pip chính là đơn vị tiền tệ chung của các nhà giao dịch ngoại hối. Nắm vững bí quyết nhẩm nhanh giá trị của số Pip mà không cần phụ thuộc mù quáng vào phần mềm tính toán là năng lực tiên quyết để bạn thiết lập Lot/Volume và Stop loss lý tưởng. Đó là cốt lõi của tính toán và quản trị rủi ro chuyên nghiệp.",
    65: "Tiền kiếm được trong thị trường đã khó, nhưng để giữ được nó trong tay giữa vô vàn cạm bẫy Forex scam lại càng khó hơn. Để không trở thành nạn nhân, hãy tuân thủ nguyên tắc cốt lõi: Chỉ mở tài khoản tại các Broker được chứng nhận FCA, ASIC hoặc CySEC và chạy trốn các mô hình cam kết lợi nhuận hay bao lời."
};

async function fixPosts() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, content')
        .in('id', REMAINING_IDS);

    let report = "\\n=== BÁO CÁO CÁC BÀI ĐÃ SỬA ===\\n";

    for (const post of posts) {
        let content = post.content || '';
        let newHtml = content;
        
        // Add Images
        let currentImages = (newHtml.match(/<img/g) || []).length;
        if (currentImages < 3) {
            const parts = newHtml.split(/<h2/i);
            let finalHtml = parts[0];
            let added = 0;
            for (let i = 1; i < parts.length; i++) {
                if (added < (3 - currentImages)) {
                    // Pick random image
                    const imgUrl = DEFAULT_IMAGES[Math.floor(Math.random() * DEFAULT_IMAGES.length)];
                    finalHtml += `<img src="${imgUrl}" alt="${post.title} minh họa ${i}" style="margin:20px auto;border-radius:10px;width:100%;object-fit:cover;" />\n<h2` + parts[i];
                    added++;
                } else {
                    finalHtml += "<h2" + parts[i];
                }
            }
            newHtml = finalHtml;
        }

        // Add Conclusion
        let hasConclusion = /h[23][^>]*>.*Kết\s*luận.*<\/h[23]/i.test(newHtml) || /Kết\s*luận/i.test(newHtml.substring(newHtml.length - 1000));
        let concContent = CONCLUSIONS[post.id];
        if (!hasConclusion && concContent) {
            newHtml += `\n<h2>Kết luận</h2>\n<p>${concContent}</p>`;
        }

        // Run update query
        const { error: upErr } = await supabase
            .from('posts')
            .update({ content: newHtml, updated_at: new Date().toISOString() })
            .eq('id', post.id);

        if (!upErr) {
            report += `- [ID: ${post.id}] ${post.title} -> Đã bơm ${3 - currentImages} ảnh, thêm Kết luận.\n`;
        }
    }

    console.log(report);
}

fixPosts();
