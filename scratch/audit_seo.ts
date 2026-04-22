import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ecipdcojedkbrlggaqja.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function run() {
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, title, meta_title, meta_description, slug')
        .eq('is_published', true)
        .order('id', { ascending: false })
        .limit(20);

    if (error) {
        console.error("Error fetching posts:", error);
        return;
    }

    let markdown = "# Đề Xuất Tối Ưu Title & Description (Top 20 Bài Mới Nhất)\n\n";
    markdown += "Theo chiến lược SEO mới, các bài viết cần được thêm các yếu tố Trust/CTR như: Năm 2026, ⚠️, Đánh Giá Thực Tế, Cảnh Báo Lừa Đảo.\n\n";

    posts.forEach(post => {
        let currentTitle = post.meta_title || post.title;
        let currentDesc = post.meta_description || "Chưa có description";
        
        // Generate new Title
        let newTitle = currentTitle;
        if (!newTitle.includes('2026') && !newTitle.includes('2025')) {
            newTitle = `⚠️ ${newTitle.replace(/202[0-9]/g, '')} Mới Nhất 2026`;
        }
        if (!newTitle.includes('⚠️')) {
            newTitle = `⚠️ ${newTitle}`;
        }
        if (!newTitle.toLowerCase().includes('lừa đảo') && !newTitle.toLowerCase().includes('uy tín')) {
            newTitle += " - Tránh 47 Sàn Lừa Đảo (Review Thực Tế)";
        }
        
        // Optimize length
        if (newTitle.length > 70) {
            newTitle = newTitle.substring(0, 67) + "...";
        }

        // Generate new Description
        let newDesc = currentDesc;
        if (!newDesc.toLowerCase().includes('chuyên gia')) {
            newDesc = newDesc.substring(0, 100) + "... Đánh giá bởi chuyên gia Sàn Uy Tín, đã kiểm chứng hơn 200 sàn và cảnh báo 47 sàn lừa đảo năm 2026. Xem ngay để tránh mất tiền oan!";
        }

        markdown += `### ${post.title}\n`;
        markdown += `- **URL:** \`/kien-thuc-forex/${post.slug}\`\n`;
        markdown += `- **Meta Title Hiện Tại:** ${currentTitle}\n`;
        markdown += `- **✅ Đề Xuất Meta Title:** \`${newTitle}\`\n`;
        markdown += `- **Meta Description Hiện Tại:** ${currentDesc}\n`;
        markdown += `- **✅ Đề Xuất Meta Desc:** \`${newDesc}\`\n\n`;
        markdown += `---\n\n`;
    });

    fs.writeFileSync('/Users/viralworks/.gemini/antigravity/brain/a03c1e75-dddf-4876-bd5c-7a3f510d4312/artifacts/seo_audit_titles.md', markdown);
    console.log("Created /Users/viralworks/.gemini/antigravity/brain/a03c1e75-dddf-4876-bd5c-7a3f510d4312/artifacts/seo_audit_titles.md");
}

run();
