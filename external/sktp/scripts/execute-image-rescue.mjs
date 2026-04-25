import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Vui lòng set biến môi trường: NEXT_PUBLIC_SUPABASE_URL và SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);
const BUCKET_NAME = 'post-images';

async function downloadAndUploadImage(url) {
  try {
    // Prevent query params from breaking extension or download
    const cleanUrl = url.replace(/&amp;/g, '&');
    const response = await fetch(cleanUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    
    // Convert to ArrayBuffer then Buffer
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    // Guess extension
    let ext = 'jpg';
    const contentType = response.headers.get('content-type');
    if (contentType?.includes('png')) ext = 'png';
    else if (contentType?.includes('webp')) ext = 'webp';
    else if (contentType?.includes('gif')) ext = 'gif';

    const filename = `rescue/${Date.now()}-${crypto.randomBytes(4).toString('hex')}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filename, buffer, {
        contentType: contentType || 'image/jpeg',
        upsert: false
      });

    if (uploadError) throw uploadError;

    const { data: publicUrlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filename);

    return publicUrlData.publicUrl;
  } catch (err) {
    console.error(`  ❌ Lỗi tải ảnh: ${url.substring(0,60)}... - ${err.message}`);
    return null;
  }
}

async function runRescue() {
  console.log("🚀 BẮT ĐẦU CHIẾN DỊCH GIẢI CỨU HÌNH ẢNH TOÀN DIỆN...");
  
  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title, featured_image, content')
    .or('featured_image.ilike.%unsplash.com%,content.ilike.%unsplash.com%')
    .is('deleted_at', null);

  if (error || !posts) {
    console.error("Lỗi:", error);
    return;
  }

  console.log(`📌 Tìm thấy ${posts.length} bài viết cần đưa vào diện cách ly và phẫu thuật.\n`);

  let successCount = 0;
  
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    let needsUpdate = false;
    let newFeatured = post.featured_image;
    let newContent = post.content || '';

    // Handle File 1: Featured Image
    if (newFeatured?.includes('unsplash.com')) {
      console.log(`[${i+1}/${posts.length}] 📷 Đang tải Ảnh đại diện bài: ${post.title.substring(0,30)}...`);
      const newUrl = await downloadAndUploadImage(newFeatured);
      if (newUrl) {
        newFeatured = newUrl;
        needsUpdate = true;
      }
    }

    // Handle Content Images using regex mapping HTTP/HTTPS
    const urlRegex = /https?:\/\/[a-zA-Z0-9.\-]*unsplash\.com\/[^\s"'>)]+/g;
    const matches = newContent.match(urlRegex);
    
    if (matches && matches.length > 0) {
      // Deduplicate matches to avoid unnecessary downloads
      const uniqueUrls = [...new Set(matches)];
      console.log(`[${i+1}/${posts.length}] 📄 Đang xử lý ${uniqueUrls.length} ảnh nội dung bài: ${post.title.substring(0,30)}...`);
      
      for (const oldUrl of uniqueUrls) {
        const newUrl = await downloadAndUploadImage(oldUrl);
        if (newUrl) {
          // Global replace for that exact oldUrl
          // using split & join is safer than global string replace with regex for exact urls
          newContent = newContent.split(oldUrl).join(newUrl);
          needsUpdate = true;
        }
      }
    }

    // Save if touched
    if (needsUpdate) {
      const { error: updateError } = await supabase
        .from('posts')
        .update({ 
          featured_image: newFeatured, 
          content: newContent,
          updated_at: new Date().toISOString()
        })
        .eq('id', post.id);

      if (updateError) {
         console.error(`  ❌ Lỗi lưu dữ liệu bài ${post.id}:`, updateError.message);
      } else {
         console.log(`  ✅ Đóng gói xong bài: ${post.title.substring(0,30)}...`);
         successCount++;
      }
    } else {
         console.log(`  ⏩ Bỏ qua (không tải được ảnh gốc): ${post.title.substring(0,30)}...`);
    }
  }

  console.log(`\n🎉 HOÀN TẤT CHIẾN DỊCH: Thành công cứu vãn ${successCount}/${posts.length} bài viết!`);
}

runRescue();
