import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
dotenv.config({ path: '.env.local' });

const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const { data, error } = await sb
  .from('posts')
  .select('id, title, slug, content, excerpt, meta_title, meta_description, category, tags, featured_image, is_published, scheduled_at, created_at')
  .order('created_at', { ascending: false })
  .limit(10);

if (error) { console.error('ERROR:', error.message); process.exit(1); }

console.log('═══════════════════════════════════════════════════════════════');
console.log('  📊 ĐÁNH GIÁ CHẤT LƯỢNG 10 BÀI VIẾT GẦN NHẤT');
console.log('═══════════════════════════════════════════════════════════════\n');

let totalScore = 0;

data.forEach((post, i) => {
  const content = post.content || '';
  const textOnly = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  const wordCount = textOnly.split(/\s+/).filter(w => w.length > 0).length;
  
  // Heading analysis
  const h2Count = (content.match(/<h2/gi) || []).length;
  const h3Count = (content.match(/<h3/gi) || []).length;
  
  // Image analysis
  const imgCount = (content.match(/<img/gi) || []).length;
  
  // Link analysis
  const linkCount = (content.match(/<a /gi) || []).length;
  
  // Meta analysis
  const metaTitleLen = (post.meta_title || '').length;
  const metaDescLen = (post.meta_description || '').length;
  const excerptLen = (post.excerpt || '').length;
  const hasFeaturedImage = !!post.featured_image;
  const hasTags = post.tags && post.tags.length > 0;
  
  // Scoring (100 points max)
  let score = 0;
  let issues = [];
  let strengths = [];
  
  // Word count (30 pts)
  if (wordCount >= 1500) { score += 30; strengths.push('Nội dung dài, chi tiết'); }
  else if (wordCount >= 800) { score += 25; strengths.push('Nội dung đủ chiều sâu'); }
  else if (wordCount >= 300) { score += 15; issues.push(`⚠️ Nội dung hơi ngắn (${wordCount} từ, nên >= 800)`); }
  else { score += 5; issues.push(`🔴 NỘI DUNG QUÁ MỎNG (${wordCount} từ, cần >= 300)`); }
  
  // Structure H2/H3 (15 pts)
  if (h2Count >= 3) { score += 15; strengths.push(`Cấu trúc tốt (${h2Count} H2, ${h3Count} H3)`); }
  else if (h2Count >= 1) { score += 10; issues.push(`⚠️ Ít heading (${h2Count} H2, nên >= 3)`); }
  else { score += 0; issues.push('🔴 Không có heading H2 nào'); }
  
  // Meta Title (10 pts)
  if (metaTitleLen >= 30 && metaTitleLen <= 70) { score += 10; strengths.push('Meta Title chuẩn SEO'); }
  else if (metaTitleLen > 0) { score += 5; issues.push(`⚠️ Meta Title ${metaTitleLen > 70 ? 'quá dài' : 'quá ngắn'} (${metaTitleLen} ký tự)`); }
  else { issues.push('🔴 Thiếu Meta Title'); }
  
  // Meta Description (10 pts)
  if (metaDescLen >= 70 && metaDescLen <= 160) { score += 10; strengths.push('Meta Description chuẩn'); }
  else if (metaDescLen > 0) { score += 5; issues.push(`⚠️ Meta Desc ${metaDescLen > 160 ? 'quá dài' : 'quá ngắn'} (${metaDescLen} ký tự)`); }
  else { issues.push('🔴 Thiếu Meta Description'); }
  
  // Excerpt (10 pts)
  if (excerptLen >= 50) { score += 10; strengths.push('Có Excerpt tốt'); }
  else if (excerptLen > 0) { score += 5; issues.push('⚠️ Excerpt quá ngắn'); }
  else { issues.push('🔴 Thiếu Excerpt'); }
  
  // Featured Image (10 pts)
  if (hasFeaturedImage) { score += 10; strengths.push('Có ảnh đại diện'); }
  else { issues.push('⚠️ Thiếu ảnh đại diện'); }
  
  // Tags (5 pts)
  if (hasTags) { score += 5; strengths.push(`${post.tags.length} tags`); }
  else { issues.push('⚠️ Thiếu tags'); }
  
  // Internal links (5 pts)
  if (linkCount >= 2) { score += 5; strengths.push(`${linkCount} liên kết`); }
  else if (linkCount >= 1) { score += 3; }
  else { issues.push('⚠️ Không có Internal Link'); }
  
  // Images in content (5 pts)  
  if (imgCount >= 1) { score += 5; strengths.push(`${imgCount} ảnh minh họa`); }
  else { issues.push('⚠️ Không có ảnh minh họa trong bài'); }
  
  totalScore += score;
  
  // Grade
  let grade = 'F';
  if (score >= 90) grade = 'A+';
  else if (score >= 80) grade = 'A';
  else if (score >= 70) grade = 'B';
  else if (score >= 60) grade = 'C';
  else if (score >= 40) grade = 'D';
  
  const status = post.is_published ? '🟢 Published' : (post.scheduled_at ? '🟡 Scheduled' : '⚪ Draft');
  const date = new Date(post.created_at).toLocaleDateString('vi-VN');
  
  console.log(`${i + 1}. [${grade}] ${score}/100 │ "${post.title}"`);
  console.log(`   ${status} │ ${date} │ ${wordCount} từ │ ${post.category}`);
  if (strengths.length) console.log(`   ✅ ${strengths.join(' • ')}`);
  if (issues.length) console.log(`   ❌ ${issues.join(' • ')}`);
  console.log('');
});

const avgScore = Math.round(totalScore / data.length);
console.log('═══════════════════════════════════════════════════════════════');
console.log(`  📈 ĐIỂM TRUNG BÌNH: ${avgScore}/100`);
console.log(`  📊 Grade tổng: ${avgScore >= 90 ? 'A+' : avgScore >= 80 ? 'A' : avgScore >= 70 ? 'B' : avgScore >= 60 ? 'C' : 'D'}`);
console.log('═══════════════════════════════════════════════════════════════');
