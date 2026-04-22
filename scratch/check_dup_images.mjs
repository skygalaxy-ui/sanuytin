import fs from 'fs';
import path from 'path';

// Load .env.local manually
const envPath = path.resolve('.env.local');
let envFile = '';
try {
  envFile = fs.readFileSync(envPath, 'utf8');
} catch (e) {
  console.error("Could not read .env.local");
  process.exit(1);
}

const envVars = {};
envFile.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    envVars[match[1].trim()] = match[2].trim();
  }
});

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || envVars['NEXT_PUBLIC_SUPABASE_URL'];
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || envVars['NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY'];

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("Missing Supabase credentials");
  process.exit(1);
}

async function checkDuplicates() {
  const url = `${SUPABASE_URL}/rest/v1/posts?select=id,title,featured_image`;
  
  console.log("Fetching posts from Supabase...");
  const res = await fetch(url, {
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`
    }
  });
  
  if (!res.ok) {
    console.error("Error fetching posts:", await res.text());
    process.exit(1);
  }
  
  const posts = await res.json();
  console.log(`Found ${posts.length} total posts.`);
  
  const imageMap = {};
  for (const post of posts) {
    if (post.featured_image) {
      if (!imageMap[post.featured_image]) {
        imageMap[post.featured_image] = [];
      }
      imageMap[post.featured_image].push(post);
    }
  }
  
  const duplicates = Object.entries(imageMap).filter(([img, pList]) => pList.length > 1);
  
  console.log("\n" + "=".repeat(50));
  console.log("BÁO CÁO THỐNG KÊ ẢNH TRÙNG LẶP");
  console.log("=".repeat(50));
  
  if (duplicates.length === 0) {
    console.log("Tuyệt vời! Không có ảnh đại diện nào bị trùng lặp.");
  } else {
    console.log(`CẢNH BÁO: Phát hiện ${duplicates.length} ảnh đang được dùng chung cho nhiều bài viết!\n`);
    
    duplicates.forEach(([img, pList], index) => {
      console.log(`🔥 Ảnh trùng lặp thứ #${index + 1}:`);
      console.log(`URL: ${img}`);
      console.log(`Số lượng sử dụng: ${pList.length} bài viết`);
      console.log("Các bài viết đang dùng:");
      pList.forEach(p => {
        console.log(`  - [${p.id}] ${p.title}`);
      });
      console.log("-".repeat(30));
    });
  }
}

checkDuplicates();
