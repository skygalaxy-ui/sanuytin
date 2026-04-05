import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

// Unsplash images by topic keyword
const imagePool = {
  forex: [
    'photo-1611974789855-9c2a0a7236a3', 'photo-1642790106117-e829e14a795f', 'photo-1640340434855-6084b1f4901c',
  ],
  chart: [
    'photo-1551288049-bebda4e38f71', 'photo-1543286386-713bdd548da4', 'photo-1460925895917-afdab827c52f',
  ],
  money: [
    'photo-1553729459-afe8f2e2e8d6', 'photo-1565514020179-026b92b84bb6', 'photo-1556742393-d75f468bfcb0',
  ],
  security: [
    'photo-1633158829585-23ba8f7c8caf', 'photo-1614028674026-a65e31bfd27c', 'photo-1555949963-ff9fe0c870eb',
  ],
  platform: [
    'photo-1517694712202-14dd9538aa97', 'photo-1518770660439-4636190af475', 'photo-1611162617474-5b21e879e113',
  ],
  comparison: [
    'photo-1559526324-4b87b5e36e44', 'photo-1553877522-43269d4ea984', 'photo-1454165804606-c3d57bc86b40',
  ],
  strategy: [
    'photo-1504607798333-52a30db54a5d', 'photo-1533750349088-cd871a92f312', 'photo-1516321497487-e288fb19713f',
  ],
  emotion: [
    'photo-1573497019940-1c28c88b4f3e', 'photo-1534438327276-14e5300c3a48', 'photo-1507003211169-0a1dd7228f2d',
  ],
  broker: [
    'photo-1486406146926-c627a92ad1ab', 'photo-1541354329998-f4d9a9f9297f', 'photo-1560472354-b33ff0c44a43',
  ],
};

// Map article keywords to image topics
function getTopics(title) {
  const t = title.toLowerCase();
  if (/mt4|mt5|metatrader|tradingview|ctrader|vps|nền tảng/.test(t)) return ['platform', 'chart', 'forex'];
  if (/lừa đảo|bảo mật|hack|an toàn|cảnh báo/.test(t)) return ['security', 'broker', 'forex'];
  if (/so sánh|vs|đối chiếu/.test(t)) return ['comparison', 'chart', 'broker'];
  if (/review|đánh giá|thông tin sàn/.test(t)) return ['broker', 'comparison', 'platform'];
  if (/nạp|rút|tiền|bonus|khuyến mãi|phí|spread|swap|commission/.test(t)) return ['money', 'broker', 'chart'];
  if (/chiến lược|price action|scalping|breakout|trend|supply|demand/.test(t)) return ['strategy', 'chart', 'forex'];
  if (/tâm lý|fomo|revenge|cảm xúc|sai lầm|bài học/.test(t)) return ['emotion', 'strategy', 'forex'];
  if (/chỉ báo|rsi|macd|bollinger|moving|fibonacci|kỹ thuật/.test(t)) return ['chart', 'strategy', 'forex'];
  if (/mở tài khoản|đăng ký|kyc|hướng dẫn|cho người mới/.test(t)) return ['platform', 'money', 'broker'];
  if (/top|xếp hạng|uy tín|tiêu chí/.test(t)) return ['broker', 'comparison', 'forex'];
  return ['forex', 'chart', 'money'];
}

// Get 3 unique images for a post
let globalIdx = 0;
function getImages(title) {
  const topics = getTopics(title);
  const imgs = [];
  for (let i = 0; i < 3; i++) {
    const pool = imagePool[topics[i]] || imagePool.forex;
    const idx = (globalIdx + i) % pool.length;
    imgs.push('https://images.unsplash.com/' + pool[idx] + '?w=800&q=75');
  }
  globalIdx++;
  return imgs;
}

// Caption templates
const captions = [
  'Minh họa: Giao dịch Forex trên thị trường tài chính',
  'Phân tích biểu đồ — công cụ quan trọng của trader',
  'Quản lý rủi ro là chìa khóa thành công trong Forex',
];

const { data, error } = await sb.from('posts').select('id, title, content')
  .eq('is_published', true).order('id');
if (error) { console.error(error.message); process.exit(1); }

let updated = 0;
for (const post of data) {
  const c = post.content || '';
  const imgCount = (c.match(/<img/gi) || []).length;
  if (imgCount >= 3) continue; // Already has enough images

  const images = getImages(post.title);
  const h2Matches = [...c.matchAll(/<h2[^>]*>/gi)];
  
  if (h2Matches.length < 3) continue;

  let newContent = c;
  // Insert images after 2nd, 4th, and 6th H2 (or last available)
  const insertPositions = [
    Math.min(1, h2Matches.length - 1),
    Math.min(3, h2Matches.length - 1),
    Math.min(5, h2Matches.length - 1),
  ];

  // Deduplicate positions
  const uniquePos = [...new Set(insertPositions)];
  
  // Insert from end to start so positions don't shift
  for (let i = uniquePos.length - 1; i >= 0; i--) {
    const h2Idx = uniquePos[i];
    const h2 = h2Matches[h2Idx];
    const imgIdx = Math.min(i, images.length - 1);
    const imgHtml = `\n<figure style="margin:24px 0;text-align:center"><img src="${images[imgIdx]}" alt="${post.title}" style="width:100%;max-width:720px;border-radius:12px" loading="lazy"/><figcaption style="font-size:14px;color:#999;margin-top:8px">${captions[imgIdx]}</figcaption></figure>\n`;
    
    // Insert image BEFORE this H2
    const pos = h2.index;
    newContent = newContent.slice(0, pos) + imgHtml + newContent.slice(pos);
  }

  const { error: updateErr } = await sb.from('posts').update({
    content: newContent,
    updated_at: new Date().toISOString()
  }).eq('id', post.id);

  if (updateErr) console.error(`❌ ${post.id}:`, updateErr.message);
  else { updated++; console.log(`✅ ${post.id} | +${uniquePos.length} imgs | ${post.title.slice(0, 45)}`); }
}

console.log(`\n🎉 Done! Added images to ${updated} articles`);
process.exit(0);
