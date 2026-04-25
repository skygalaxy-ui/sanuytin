import fs from 'fs';

const SUPABASE_URL = 'https://njchsjhdkcfaouqwyutc.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qY2hzamhka2NmYW91cXd5dXRjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDA0OTY5MCwiZXhwIjoyMDg1NjI1NjkwfQ.IlMHefuzwH2DZ_2srbE2N4vyDoZVk36vMr060wNlagE';

const imagePool = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop"
];

const postIdsToUpdate = [
  "4a9f5ce9-cbbd-4131-9c6c-b7b3da3c8e05", // 15 Mẫu
  "bd68d445-7cbd-4f3d-828d-e38350e75991",
  "d8941951-f571-45bc-a363-e87fbbbdc5fb",
  "e1d7cb33-d5a3-44e6-8fae-3a7327887c2d",
  "6c07510f-fd84-4df0-8186-22a14fb694c2",
  "27ae0450-9b44-41cc-9cb2-8ce047d6cfa8",
  "412cf259-6038-4db9-aaaa-031b26b06cf0"
];

function getRandomImages(count) {
  const shuffled = [...imagePool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function injectImagesIntoHTML(html, images, title) {
  // Loại bỏ các thẻ img đã cũ (nếu có) để không bị trùng lặp khi chạy lại
  let cleanHtml = html.replace(/<img[^>]*>/g, '');

  let parts = cleanHtml.split(/(<h2[^>]*>.*?<\/h2>)/i);
  
  if (parts.length < 5) {
     // Nếu không đủ thẻ H2, chèn image vào sau các thẻ </p>
     parts = cleanHtml.split(/(<\/p>)/i);
  }

  // Lọc ra các thẻ chia cắt
  let result = parts[0];
  let imgIndex = 0;
  
  for (let i = 1; i < parts.length; i++) {
    result += parts[i];
    // Chèn ảnh vào ngay trước các thẻ H2 (nhưng bỏ qua phần tử đầu tiên)
    // hoặc sau các thẻ P nếu rơi vào trường hợp không có H2
    if (imgIndex < images.length && parts[i].match(/(<h2|<\/p>)/i)) {
       // Tỷ lệ chèn khoảng 30% để hình ảnh rải đều
       if (Math.random() > 0.4 || parts.length - i <= (images.length - imgIndex)*2) {
           result += `\n<img src="${images[imgIndex]}" alt="Hình ảnh minh họa cho ${title.replace(/"/g, '')} - ảnh phần ${imgIndex+1}" loading="lazy" style="width: 100%; border-radius: 12px; margin: 20px 0;" />\n`;
           imgIndex++;
       }
    }
  }

  // Dự phòng nếu vòng lặp kết thúc mà chưa chèn đủ 3 ảnh
  while (imgIndex < images.length) {
      result += `\n<img src="${images[imgIndex]}" alt="Hình ảnh minh họa cho ${title.replace(/"/g, '')} - ảnh phần ${imgIndex+1}" loading="lazy" style="width: 100%; border-radius: 12px; margin: 20px 0;" />\n`;
      imgIndex++;
  }

  return result;
}

async function processPost(postId) {
  const url = `${SUPABASE_URL}/rest/v1/posts?id=eq.${postId}&select=id,title,content,featured_image`;
  
  const res = await fetch(url, { headers: { 'apikey': SERVICE_KEY, 'Authorization': `Bearer ${SERVICE_KEY}` } });
  const data = await res.json();
  if(!data.length) return;
  
  const post = data[0];
  const images = getRandomImages(4); // 1 featured + 3 nội dung
  
  const featured_image = post.featured_image || images[0];
  const contentImages = images.slice(1, 4);
  
  const newContent = injectImagesIntoHTML(post.content || '', contentImages, post.title);

  const updateUrl = `${SUPABASE_URL}/rest/v1/posts?id=eq.${post.id}`;
  const updateRes = await fetch(updateUrl, {
    method: 'PATCH',
    headers: {
      'apikey': SERVICE_KEY,
      'Authorization': `Bearer ${SERVICE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({
      featured_image: featured_image,
      content: newContent
    })
  });
  
  if (updateRes.ok) {
     console.log(`✅ Đã chèn 3 ảnh vào bài: ${post.title}`);
  } else {
     console.error(`❌ Lỗi bài: ${post.title}`);
  }
}

async function main() {
  console.log('🚀 Bắt đầu dàn 3 ảnh vào giữa nội dung...');
  for (const id of postIdsToUpdate) {
     await processPost(id);
  }
  console.log('\\n🎉 Cập nhật hoàn tất!');
}

main().catch(console.error);
