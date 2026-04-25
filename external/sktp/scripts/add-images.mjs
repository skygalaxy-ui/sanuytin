import fs from 'fs';

const SUPABASE_URL = 'https://njchsjhdkcfaouqwyutc.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qY2hzamhka2NmYW91cXd5dXRjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDA0OTY5MCwiZXhwIjoyMDg1NjI1NjkwfQ.IlMHefuzwH2DZ_2srbE2N4vyDoZVk36vMr060wNlagE';

const imageUpdates = [
  {
    id: "4a9f5ce9-cbbd-4131-9c6c-b7b3da3c8e05",
    title: "15 Mẫu thiết kế backdrop teambuilding",
    featured_image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "bd68d445-7cbd-4f3d-828d-e38350e75991",
    title: "Cho thuê đồ game teambuilding khổng lồ phao bơm hơi",
    featured_image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "d8941951-f571-45bc-a363-e87fbbbdc5fb",
    title: "Dịch vụ set-up sân khấu teambuilding bãi biển trọn gói",
    featured_image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "e1d7cb33-d5a3-44e6-8fae-3a7327887c2d",
    title: "Top 20 game teambuilding bãi biển vui nhộn",
    featured_image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "6c07510f-fd84-4df0-8186-22a14fb694c2",
    title: "Kịch bản game teambuilding trí tuệ trong nhà (Indoor)",
    featured_image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "27ae0450-9b44-41cc-9cb2-8ce047d6cfa8",
    title: "Tổ chức sự kiện teambuilding Trại Huấn Luyện Quân Đội Thép",
    featured_image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "412cf259-6038-4db9-aaaa-031b26b06cf0",
    title: "Mẫu kịch bản MC quản trò teambuilding chuyên nghiệp",
    featured_image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop"
  }
];

async function updatePostImage(post) {
  const url = `${SUPABASE_URL}/rest/v1/posts?id=eq.${post.id}`;
  
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      'apikey': SERVICE_KEY,
      'Authorization': `Bearer ${SERVICE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({
      featured_image: post.featured_image
    })
  });
  
  if (res.ok) {
     console.log(`✅ Cập nhật ảnh thành công: ${post.title}`);
  } else {
     const text = await res.text();
     console.error(`❌ Lỗi cập nhật "${post.title}":`, text);
  }
}

async function main() {
  console.log('🚀 Đang thêm ảnh Featured Image cho các bài viết...');
  for (const post of imageUpdates) {
     await updatePostImage(post);
  }
  
  // Update randomly the remaining posts so they don't look broken if they appear
  // in latest posts or related posts. We just grab 10 null image posts.
  const fetchUrl = `${SUPABASE_URL}/rest/v1/posts?select=id,title&featured_image=is.null&limit=20`;
  const fetchRes = await fetch(fetchUrl, {
    headers: { 'apikey': SERVICE_KEY, 'Authorization': `Bearer ${SERVICE_KEY}` }
  });
  const data = await fetchRes.json();
  
  const randomImages = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1200&auto=format&fit=crop"
  ];
  
  for(let i=0; i<data.length; i++) {
    const post = data[i];
    const img = randomImages[Math.floor(Math.random() * randomImages.length)];
    await updatePostImage({ id: post.id, title: post.title, featured_image: img });
  }

  console.log(`\n🎉 Hoàn thành cập nhật ảnh!`);
}

main().catch(console.error);
