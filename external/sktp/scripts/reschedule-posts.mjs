/**
 * Script: Phân bổ lại lịch đăng bài - 4 bài/ngày
 * Bắt đầu từ NGAY BÂY GIỜ (khung giờ gần nhất)
 * Khung giờ (VN): 06:00, 11:00, 17:00, 21:00
 */

const SUPABASE_URL = 'https://njchsjhdkcfaouqwyutc.supabase.co';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qY2hzamhka2NmYW91cXd5dXRjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDA0OTY5MCwiZXhwIjoyMDg1NjI1NjkwfQ.IlMHefuzwH2DZ_2srbE2N4vyDoZVk36vMr060wNlagE';

// Khung giờ đăng bài (giờ VN, UTC+7)
const TIME_SLOTS_VN = [6, 11, 17, 21];

async function fetchScheduledPosts() {
  let allPosts = [];
  let offset = 0;
  const limit = 500;
  while (true) {
    const url = `${SUPABASE_URL}/rest/v1/posts?select=id,title,scheduled_at&is_published=eq.false&scheduled_at=not.is.null&order=scheduled_at.asc&offset=${offset}&limit=${limit}`;
    const res = await fetch(url, {
      headers: { 'apikey': SERVICE_KEY, 'Authorization': `Bearer ${SERVICE_KEY}` }
    });
    const data = await res.json();
    if (!data.length) break;
    allPosts = allPosts.concat(data);
    offset += limit;
    if (data.length < limit) break;
  }
  return allPosts;
}

async function updatePostSchedule(postId, newScheduledAt) {
  const url = `${SUPABASE_URL}/rest/v1/posts?id=eq.${postId}`;
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      'apikey': SERVICE_KEY,
      'Authorization': `Bearer ${SERVICE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal',
    },
    body: JSON.stringify({ scheduled_at: newScheduledAt }),
  });
  return res.ok;
}

function generateSchedule(totalPosts) {
  // Giờ hiện tại theo VN
  const nowVN = new Date(Date.now() + 7 * 60 * 60 * 1000);
  const currentHourVN = nowVN.getUTCHours();
  const currentDateVN = new Date(nowVN);
  currentDateVN.setUTCHours(0, 0, 0, 0);

  const schedule = [];
  let dayOffset = 0;

  // Tìm slot đầu tiên khả dụng hôm nay
  let startSlotIndex = TIME_SLOTS_VN.findIndex(h => h > currentHourVN);
  if (startSlotIndex === -1) {
    // Hết slot hôm nay, bắt đầu từ ngày mai
    startSlotIndex = 0;
    dayOffset = 1;
  }

  let slotIdx = startSlotIndex;
  
  for (let i = 0; i < totalPosts; i++) {
    const date = new Date(currentDateVN);
    date.setUTCDate(date.getUTCDate() + dayOffset);
    
    // Chuyển giờ VN sang UTC (trừ 7)
    const hourUTC = TIME_SLOTS_VN[slotIdx] - 7;
    if (hourUTC < 0) {
      // Giờ VN 06:00 = UTC 23:00 ngày trước
      date.setUTCDate(date.getUTCDate() - 1);
      date.setUTCHours(hourUTC + 24, 0, 0, 0);
    } else {
      date.setUTCHours(hourUTC, 0, 0, 0);
    }

    schedule.push(date.toISOString());

    slotIdx++;
    if (slotIdx >= TIME_SLOTS_VN.length) {
      slotIdx = 0;
      dayOffset++;
    }
  }

  return schedule;
}

async function main() {
  console.log('📋 Đang lấy danh sách bài viết...');
  const posts = await fetchScheduledPosts();
  console.log(`✅ Tìm thấy ${posts.length} bài viết.\n`);

  if (!posts.length) {
    console.log('Không có bài nào cần cập nhật.');
    return;
  }

  const schedule = generateSchedule(posts.length);

  // Hiển thị xem trước
  console.log('--- XEM TRƯỚC LỊCH ĐĂNG ---');
  for (let i = 0; i < Math.min(20, posts.length); i++) {
    const vnTime = new Date(new Date(schedule[i]).getTime() + 7 * 60 * 60 * 1000);
    const vnStr = vnTime.toISOString().replace('T', ' ').substring(0, 16);
    console.log(`  ${(i + 1).toString().padStart(3)}. [${vnStr}] ${posts[i].title.substring(0, 55)}...`);
  }
  console.log('---\n');

  const firstVN = new Date(new Date(schedule[0]).getTime() + 7 * 60 * 60 * 1000);
  const lastVN = new Date(new Date(schedule[schedule.length - 1]).getTime() + 7 * 60 * 60 * 1000);
  console.log(`📅 Bài đầu: ${firstVN.toISOString().replace('T', ' ').substring(0, 16)} (VN)`);
  console.log(`📅 Bài cuối: ${lastVN.toISOString().replace('T', ' ').substring(0, 16)} (VN)`);
  console.log(`📊 Tổng: ${posts.length} bài → ${Math.ceil(posts.length / 4)} ngày\n`);

  console.log('🚀 Bắt đầu cập nhật...\n');

  let updated = 0, failed = 0;
  for (let i = 0; i < posts.length; i++) {
    const ok = await updatePostSchedule(posts[i].id, schedule[i]);
    if (ok) updated++;
    else { failed++; console.error(`❌ Lỗi: ${posts[i].title}`); }
    if ((i + 1) % 50 === 0) console.log(`  ⏳ ${i + 1}/${posts.length}...`);
  }

  console.log(`\n✅ HOÀN TẤT!`);
  console.log(`  📊 Thành công: ${updated}/${posts.length} | Lỗi: ${failed}`);
  console.log(`  ⏰ 4 bài/ngày: 06:00 | 11:00 | 17:00 | 21:00 (VN)`);
}

main().catch(console.error);
