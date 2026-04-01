import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSEO() {
  const { data: posts, error } = await supabase
    .from('posts')
    .select('title, slug, meta_title, meta_description, tags, featured_image, featured_image_alt, content')
    .eq('is_published', true);

  if (error) {
    console.error('Lỗi khi lấy dữ liệu:', error.message);
    return;
  }
  
  let stats = {
    total: posts.length,
    missingMetaTitle: 0,
    missingMetaDesc: 0,
    missingFocusKeyword: 0,
    missingImage: 0,
    missingImageAlt: 0,
    contentTooShort: 0,
    perfectSEO: 0
  };

  const issues = []; 

  posts.forEach(p => {
    let perfect = true;
    const postIssues = [];

    // Meta Title
    if (!p.meta_title || p.meta_title.trim() === '') {
      stats.missingMetaTitle++;
      perfect = false;
      postIssues.push('Thiếu Meta Title');
    } else if (p.meta_title.length > 70) {
      perfect = false;
      postIssues.push('Meta Title quá dài (> 70 ký tự)');
    }

    // Meta Desc
    if (!p.meta_description || p.meta_description.trim() === '') {
      stats.missingMetaDesc++;
      perfect = false;
      postIssues.push('Thiếu Meta Descripton');
    } else if (p.meta_description.length < 100 || p.meta_description.length > 160) {
      perfect = false;
      postIssues.push(`Meta Description độ dài chưa chuẩn (${p.meta_description.length} ký tự, chuẩn là 100-160)`);
    }

    // Keyword (Tags)
    if (!p.tags || p.tags.length === 0) {
      stats.missingFocusKeyword++;
      perfect = false;
      postIssues.push('Thiếu Keywords/Tags');
    }

    // Image
    if (!p.featured_image) {
      stats.missingImage++;
      perfect = false;
      postIssues.push('Thiếu Ảnh đại diện');
    }
    if (!p.featured_image_alt || p.featured_image_alt.trim() === '') {
      stats.missingImageAlt++;
      perfect = false;
      postIssues.push('Thiếu Alt Tag cho ảnh');
    }
    
    // Content length
    const content = p.content || '';
    const wordCount = content.replace(/<[^>]+>/g, '').split(/\s+/).filter(w => w.length > 0).length;
    if (wordCount < 800) {
      stats.contentTooShort++;
      perfect = false;
      postIssues.push(`Nội dung quá ngắn (${wordCount} từ, chuẩn > 800)`);
    }

    if (perfect) {
      stats.perfectSEO++;
    } else {
      issues.push({ slug: p.slug, title: p.title, errors: postIssues });
    }
  });

  console.log(`\n================ BÁO CÁO SEO (${stats.total} bài) ================`);
  console.log(`✅ Số bài ĐẠT CHUẨN SEO HOÀN HẢO: ${stats.perfectSEO} bài`);
  console.log(`❌ Số bài CẦN CẢI THIỆN THÊM: ${stats.total - stats.perfectSEO} bài`);
  console.log(`\nCHI TIẾT MỨC ĐỘ LỖI:`);
  console.log(`- Thiếu Meta Title: ${stats.missingMetaTitle} bài`);
  console.log(`- Thiếu Meta Description: ${stats.missingMetaDesc} bài`);
  console.log(`- Thiếu Focus Keyword: ${stats.missingFocusKeyword} bài`);
  console.log(`- Thiếu Ảnh đại diện: ${stats.missingImage} bài`);
  console.log(`- Thiếu Thẻ Alt (Mo ta cho anh): ${stats.missingImageAlt} bài`);
  console.log(`- Noi dung qua ngan hoac Sơ sài (< 800 tu): ${stats.contentTooShort} bài`);
  console.log('====================================================\n');

  if (issues.length > 0) {
    let log = "DANH SÁCH BÀI VIẾT CẦN DỌN DẸP SEO:\n\n";
    issues.forEach(i => {
      log += `- [${i.title}] (/kien-thuc-forex/${i.slug})\n  => Các lỗi: ${i.errors.join(' | ')}\n\n`;
    });
    fs.writeFileSync('seo_audit_report.txt', log, 'utf8');
    console.log('Đã xuất danh sách chi tiết từng lỗi ra file seo_audit_report.txt');
  }
}

checkSEO();
