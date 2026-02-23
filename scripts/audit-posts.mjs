import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://ecipdcojedkbrlggaqja.supabase.co";
const supabaseAnonKey = "sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function auditPosts() {
    console.log("========================================");
    console.log("  KIỂM TRA TOÀN DIỆN BÀI VIẾT - SÀN UY TÍN");
    console.log("========================================\n");

    // Fetch ALL posts (published + draft)
    const { data: posts, error } = await supabase
        .from('posts')
        .select('*')
        .order('published_at', { ascending: false, nullsFirst: false });

    if (error) {
        console.error("Lỗi fetch posts:", error);
        return;
    }

    console.log(`📊 TỔNG QUAN: ${posts.length} bài viết\n`);

    // Categories
    const { data: categories } = await supabase.from('categories').select('*');
    console.log(`📁 Categories: ${categories?.length || 0} danh mục`);
    if (categories) {
        categories.forEach(c => console.log(`   - ${c.name} (${c.slug})`));
    }
    console.log();

    // Stats
    const published = posts.filter(p => p.is_published);
    const drafts = posts.filter(p => !p.is_published);
    console.log(`✅ Đã xuất bản: ${published.length}`);
    console.log(`📝 Bản nháp: ${drafts.length}\n`);

    // Category distribution
    const catCounts = {};
    posts.forEach(p => {
        const cat = p.category || 'Chưa phân loại';
        catCounts[cat] = (catCounts[cat] || 0) + 1;
    });
    console.log("📂 PHÂN BỐ THEO DANH MỤC:");
    Object.entries(catCounts).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
        console.log(`   ${cat}: ${count} bài`);
    });
    console.log();

    // Detailed audit per post
    const issues = {
        noMetaTitle: [],
        noMetaDesc: [],
        shortMetaTitle: [],
        longMetaTitle: [],
        shortMetaDesc: [],
        longMetaDesc: [],
        noFeaturedImage: [],
        noExcerpt: [],
        shortContent: [],
        mediumContent: [],
        noTags: [],
        fewTags: [],
        noCategory: [],
        noAuthor: [],
        noH2: [],
        noInternalLinks: [],
        noExternalLinks: [],
        noImages: [],
        hasBrokenImageUrls: [],
        noFaq: [],
        duplicateTitles: [],
        shortExcerpt: [],
        noAltText: [],
    };

    const titleSet = new Map();
    const slugSet = new Map();

    posts.forEach(post => {
        const content = post.content || '';
        const textOnly = content.replace(/<[^>]*>/g, '').trim();
        const wordCount = textOnly.split(/\s+/).filter(w => w).length;

        // Check duplicates
        if (titleSet.has(post.title)) {
            issues.duplicateTitles.push({ id: post.id, title: post.title, otherIds: titleSet.get(post.title) });
        } else {
            titleSet.set(post.title, [post.id]);
        }

        // Meta title
        if (!post.meta_title) {
            issues.noMetaTitle.push({ id: post.id, title: post.title });
        } else if (post.meta_title.length < 30) {
            issues.shortMetaTitle.push({ id: post.id, title: post.title, len: post.meta_title.length });
        } else if (post.meta_title.length > 60) {
            issues.longMetaTitle.push({ id: post.id, title: post.title, len: post.meta_title.length });
        }

        // Meta description
        if (!post.meta_description) {
            issues.noMetaDesc.push({ id: post.id, title: post.title });
        } else if (post.meta_description.length < 70) {
            issues.shortMetaDesc.push({ id: post.id, title: post.title, len: post.meta_description.length });
        } else if (post.meta_description.length > 160) {
            issues.longMetaDesc.push({ id: post.id, title: post.title, len: post.meta_description.length });
        }

        // Featured image
        if (!post.featured_image) {
            issues.noFeaturedImage.push({ id: post.id, title: post.title });
        }

        // Excerpt
        if (!post.excerpt) {
            issues.noExcerpt.push({ id: post.id, title: post.title });
        } else if (post.excerpt.length < 50) {
            issues.shortExcerpt.push({ id: post.id, title: post.title, len: post.excerpt.length });
        }

        // Content length
        if (wordCount < 300) {
            issues.shortContent.push({ id: post.id, title: post.title, words: wordCount });
        } else if (wordCount < 800) {
            issues.mediumContent.push({ id: post.id, title: post.title, words: wordCount });
        }

        // Tags
        if (!post.tags || post.tags.length === 0) {
            issues.noTags.push({ id: post.id, title: post.title });
        } else if (post.tags.length < 3) {
            issues.fewTags.push({ id: post.id, title: post.title, count: post.tags.length });
        }

        // Category
        if (!post.category) {
            issues.noCategory.push({ id: post.id, title: post.title });
        }

        // Author
        if (!post.author) {
            issues.noAuthor.push({ id: post.id, title: post.title });
        }

        // H2 headings in content
        const h2Count = (content.match(/<h2/gi) || []).length;
        if (h2Count === 0 && wordCount > 200) {
            issues.noH2.push({ id: post.id, title: post.title });
        }

        // Internal links
        const internalLinks = (content.match(/href=["'][^"']*sanuytin|href=["']\//gi) || []).length;
        if (internalLinks === 0 && wordCount > 300) {
            issues.noInternalLinks.push({ id: post.id, title: post.title });
        }

        // External links
        const allLinks = (content.match(/href=["']https?:\/\//gi) || []).length;
        const externalLinks = allLinks - internalLinks;

        // Images in content
        const imgCount = (content.match(/<img/gi) || []).length;
        if (imgCount === 0 && wordCount > 500) {
            issues.noImages.push({ id: post.id, title: post.title });
        }

        // Check for images with missing alt text
        const imgsWithoutAlt = (content.match(/<img(?![^>]*alt=["'][^"']+["'])[^>]*>/gi) || []).length;
        if (imgsWithoutAlt > 0) {
            issues.noAltText.push({ id: post.id, title: post.title, count: imgsWithoutAlt });
        }

        // FAQ section
        const hasFaq = content.toLowerCase().includes('câu hỏi thường gặp') || content.toLowerCase().includes('faq');
        if (!hasFaq && wordCount > 800) {
            issues.noFaq.push({ id: post.id, title: post.title });
        }

        // Check broken image URLs (placeholder or missing domain)
        const imgSrcs = [...content.matchAll(/src=["']([^"']+)["']/gi)].map(m => m[1]);
        const brokenUrls = imgSrcs.filter(url =>
            url.includes('placeholder') ||
            url === '' ||
            url === '#'
        );
        if (brokenUrls.length > 0) {
            issues.hasBrokenImageUrls.push({ id: post.id, title: post.title, urls: brokenUrls });
        }
    });

    // ====================== QUALITY REPORT ======================
    console.log("=".repeat(60));
    console.log("  📋 BÁO CÁO CHẤT LƯỢNG CHI TIẾT");
    console.log("=".repeat(60));

    // Word count stats
    const wordCounts = posts.map(p => {
        const text = (p.content || '').replace(/<[^>]*>/g, '').trim();
        return text.split(/\s+/).filter(w => w).length;
    });
    const avgWords = Math.round(wordCounts.reduce((a, b) => a + b, 0) / wordCounts.length);
    const maxWords = Math.max(...wordCounts);
    const minWords = Math.min(...wordCounts);

    console.log(`\n📝 THỐNG KÊ NỘI DUNG:`);
    console.log(`   Trung bình: ${avgWords} từ/bài`);
    console.log(`   Dài nhất:   ${maxWords} từ`);
    console.log(`   Ngắn nhất:  ${minWords} từ`);

    // Distribution
    const ranges = { '< 300 từ': 0, '300-800 từ': 0, '800-1500 từ': 0, '1500-2500 từ': 0, '> 2500 từ': 0 };
    wordCounts.forEach(w => {
        if (w < 300) ranges['< 300 từ']++;
        else if (w < 800) ranges['300-800 từ']++;
        else if (w < 1500) ranges['800-1500 từ']++;
        else if (w < 2500) ranges['1500-2500 từ']++;
        else ranges['> 2500 từ']++;
    });
    console.log(`\n📊 PHÂN BỐ ĐỘ DÀI:`);
    Object.entries(ranges).forEach(([range, count]) => {
        const bar = '█'.repeat(Math.ceil(count / posts.length * 40));
        console.log(`   ${range.padEnd(15)} ${bar} ${count} bài (${Math.round(count / posts.length * 100)}%)`);
    });

    // Report issues
    const reportSection = (title, items, emoji, detail = null) => {
        if (items.length === 0) {
            console.log(`\n${emoji} ${title}: ✅ Không có vấn đề`);
            return;
        }
        console.log(`\n${emoji} ${title}: ⚠️ ${items.length} bài`);
        items.slice(0, 8).forEach(item => {
            let extra = '';
            if (item.len) extra = ` (${item.len} ký tự)`;
            if (item.words) extra = ` (${item.words} từ)`;
            if (item.count) extra = ` (${item.count})`;
            if (item.urls) extra = ` → ${item.urls.slice(0, 2).join(', ')}`;
            console.log(`   - [ID:${item.id}] ${item.title.substring(0, 65)}${item.title.length > 65 ? '...' : ''}${extra}`);
        });
        if (items.length > 8) console.log(`   ... và ${items.length - 8} bài nữa`);
    };

    console.log("\n" + "=".repeat(60));
    console.log("  🔍 VẤN ĐỀ CẦN SỬA");
    console.log("=".repeat(60));

    // Critical
    console.log("\n🔴 VẤN ĐỀ NGHIÊM TRỌNG:");
    reportSection("Thiếu Meta Title", issues.noMetaTitle, "  🏷️");
    reportSection("Thiếu Meta Description", issues.noMetaDesc, "  📝");
    reportSection("Thiếu Featured Image", issues.noFeaturedImage, "  🖼️");
    reportSection("Nội dung quá ngắn (< 300 từ)", issues.shortContent, "  📏");
    reportSection("URL ảnh bị lỗi (placeholder/trống)", issues.hasBrokenImageUrls, "  🔗");
    reportSection("Tiêu đề trùng lặp", issues.duplicateTitles, "  🔄");

    // Warning
    console.log("\n\n🟡 CẦN CẢI THIỆN:");
    reportSection("Meta Title quá ngắn (< 30 ký tự)", issues.shortMetaTitle, "  📐");
    reportSection("Meta Title quá dài (> 60 ký tự)", issues.longMetaTitle, "  📐");
    reportSection("Meta Description quá ngắn (< 70 ký tự)", issues.shortMetaDesc, "  📐");
    reportSection("Meta Description quá dài (> 160 ký tự)", issues.longMetaDesc, "  📐");
    reportSection("Nội dung trung bình (300-800 từ)", issues.mediumContent, "  📏");
    reportSection("Thiếu Tags", issues.noTags, "  🏷️");
    reportSection("Ít Tags (< 3)", issues.fewTags, "  🏷️");
    reportSection("Không có heading H2", issues.noH2, "  📌");
    reportSection("Thiếu internal links", issues.noInternalLinks, "  🔗");
    reportSection("Thiếu hình ảnh trong bài", issues.noImages, "  🖼️");
    reportSection("Ảnh thiếu alt text", issues.noAltText, "  ♿");
    reportSection("Thiếu phần FAQ", issues.noFaq, "  ❓");
    reportSection("Excerpt quá ngắn (< 50 ký tự)", issues.shortExcerpt, "  ✂️");
    reportSection("Thiếu tác giả", issues.noAuthor, "  👤");
    reportSection("Thiếu danh mục", issues.noCategory, "  📁");

    // DETAIL: List all posts with scores
    console.log("\n\n" + "=".repeat(60));
    console.log("  📋 BẢNG XẾP HẠNG CHẤT LƯỢNG BÀI VIẾT");
    console.log("=".repeat(60));

    const scoredPosts = posts.map(post => {
        let score = 100;
        const content = post.content || '';
        const textOnly = content.replace(/<[^>]*>/g, '').trim();
        const wordCount = textOnly.split(/\s+/).filter(w => w).length;

        // Deductions
        if (!post.meta_title) score -= 15;
        else if (post.meta_title.length < 30 || post.meta_title.length > 60) score -= 5;

        if (!post.meta_description) score -= 15;
        else if (post.meta_description.length < 70 || post.meta_description.length > 160) score -= 5;

        if (!post.featured_image) score -= 10;
        if (!post.excerpt) score -= 5;
        if (wordCount < 300) score -= 20;
        else if (wordCount < 800) score -= 10;
        if (!post.tags || post.tags.length === 0) score -= 5;
        if (!post.category) score -= 5;
        if (!post.author) score -= 3;

        const h2Count = (content.match(/<h2/gi) || []).length;
        if (h2Count === 0 && wordCount > 200) score -= 10;

        const internalLinks = (content.match(/href=["'][^"']*sanuytin|href=["']\//gi) || []).length;
        if (internalLinks === 0 && wordCount > 300) score -= 5;

        const imgCount = (content.match(/<img/gi) || []).length;
        if (imgCount === 0 && wordCount > 500) score -= 5;

        const hasFaq = content.toLowerCase().includes('câu hỏi thường gặp') || content.toLowerCase().includes('faq');
        if (!hasFaq && wordCount > 800) score -= 5;

        return {
            id: post.id,
            title: post.title.substring(0, 60),
            words: wordCount,
            score: Math.max(0, score),
            status: post.is_published ? '✅' : '📝',
            category: (post.category || '—').substring(0, 12),
        };
    });

    scoredPosts.sort((a, b) => a.score - b.score);

    console.log(`\n${'ID'.padEnd(5)} ${'Điểm'.padEnd(6)} ${'Trạng thái'.padEnd(5)} ${'Từ'.padEnd(7)} ${'Danh mục'.padEnd(14)} Tiêu đề`);
    console.log('-'.repeat(110));
    scoredPosts.forEach(p => {
        const scoreColor = p.score >= 80 ? '🟢' : p.score >= 60 ? '🟡' : '🔴';
        console.log(`${String(p.id).padEnd(5)} ${scoreColor}${String(p.score).padEnd(4)} ${p.status.padEnd(5)}  ${String(p.words).padEnd(7)} ${p.category.padEnd(14)} ${p.title}`);
    });

    // Summary score
    const avgScore = Math.round(scoredPosts.reduce((a, b) => a + b.score, 0) / scoredPosts.length);
    const goodPosts = scoredPosts.filter(p => p.score >= 80).length;
    const okPosts = scoredPosts.filter(p => p.score >= 60 && p.score < 80).length;
    const badPosts = scoredPosts.filter(p => p.score < 60).length;

    console.log(`\n\n${"=".repeat(60)}`);
    console.log("  📊 TÓM TẮT ĐIỂM CHẤT LƯỢNG TỔNG THỂ");
    console.log("=".repeat(60));
    console.log(`   🎯 Điểm trung bình: ${avgScore}/100`);
    console.log(`   🟢 Tốt (≥80):    ${goodPosts} bài (${Math.round(goodPosts / posts.length * 100)}%)`);
    console.log(`   🟡 Trung bình (60-79): ${okPosts} bài (${Math.round(okPosts / posts.length * 100)}%)`);
    console.log(`   🔴 Cần cải thiện (<60): ${badPosts} bài (${Math.round(badPosts / posts.length * 100)}%)\n`);
}

auditPosts().catch(console.error);
