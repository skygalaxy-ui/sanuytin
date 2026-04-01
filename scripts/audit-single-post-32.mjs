import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../.env.local') });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const POST_ID = 32;

async function auditAndPropose() {
    const { data: post, error } = await supabase
        .from('posts')
        .select('id, title, content')
        .eq('id', POST_ID)
        .single();

    if (error) {
        console.error("Lỗi:", error.message);
        return;
    }

    console.log(`\n=== ĐÁNH GIÁ BÀI VIẾT ID: ${post.id} ===`);
    console.log(`Tiêu đề: ${post.title}`);

    let content = post.content || '';
    
    // Create conclusion specifically for this post
    let proposedConclusion = `
<h2>Kết luận</h2>
<p>Kiểm soát <strong>Tâm lý Trading</strong> chính là chiếc chìa khóa quyết định bạn thuộc nhóm 90% thất bại hay 10% chiến thắng trên thị trường Forex. Bằng cách nhận diện các cạm bẫy tâm lý phổ biến như FOMO, quá tự tin hay cay cú phục thù, và tuân thủ chặt chẽ kỷ luật lập kỷ kịch bản, bạn sẽ rèn luyện được một tinh thần thép - cốt lõi của mọi sự thành công dài hạn.</p>
    `;

    // Try to find if conclusion exists
    let hasConclusion = /h[23][^>]*>.*Kết\s*luận.*<\/h[23]/i.test(content) || /Kết\s*luận/i.test(content.substring(content.length - 1000));
    
    // Inject Images - Trading psychology related
    const contentImages = [
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80", // Money/Stress Concept
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80", // Candlestick Graph Down
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80"  // Deep work/Screen Concept
    ];

    let newHtml = content;
    
    // Add images
    const currentImages = (newHtml.match(/<img/g) || []).length;
    if (currentImages < 3) {
      const parts = newHtml.split(/<h2/i);
      let finalHtml = parts[0];
      let added = 0;
      for (let i = 1; i < parts.length; i++) {
          if (added < (3 - currentImages)) {
              finalHtml += `<img src="${contentImages[added]}" alt="${post.title} minh họa phần ${i}" style="margin:20px auto;border-radius:10px;width:100%;object-fit:cover;" />\n<h2` + parts[i];
              added++;
          } else {
              finalHtml += "<h2" + parts[i];
          }
      }
      newHtml = finalHtml;
    }

    // Add conclusion
    if (!hasConclusion) {
        newHtml += proposedConclusion;
    }

    // Save proposed text for review
    fs.writeFileSync('proposed_post_32.html', newHtml);
    console.log(`\nCác thay đổi đề xuất:`);
    console.log(`1. Chèn thêm ${3 - currentImages} ảnh minh hoạ có chủ đề (Tiền, Market áp lực).`);
    console.log(`2. Viết thêm đoạn Kết luận tóm tắt riêng cho bài này.`);
    console.log(`\nĐã lưu bản nháp: proposed_post_32.html`);
}

auditAndPropose();
