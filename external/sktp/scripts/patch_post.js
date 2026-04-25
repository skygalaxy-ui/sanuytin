import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://njchsjhdkcfaouqwyutc.supabase.co";
const SUPABASE_SERVICE_ROLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5qY2hzamhka2NmYW91cXd5dXRjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDA0OTY5MCwiZXhwIjoyMDg1NjI1NjkwfQ.IlMHefuzwH2DZ_2srbE2N4vyDoZVk36vMr060wNlagE";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const postId = "34dca5aa-69eb-468e-bbeb-d83c25aed76a";

async function main() {
    // 1. Fetch current content
    const { data: post, error: fetchErr } = await supabase
        .from('posts')
        .select('*')
        .eq('id', postId)
        .single();
        
    if (fetchErr) {
        console.error("Fetch error:", fetchErr);
        return;
    }
    
    let content = post.content;
    const meta_description = post.excerpt || "Sự kiện toàn quốc hướng dẫn chuyên sâu từ A-Z về quá trình điều phối Quy Trình Hoàn Chỉnh Xin Giấy Phép Tổ Chức Sự Kiện Thể Thao.";
    const featured_image_alt = post.title;
    
    // Check if table already exists
    if (!content.includes('<table')) {
        const tableHtml = `
<h3>Bảng Ngân Quỹ & Lệ Phí Tham Khảo (Dự Kiến)</h3>
<table>
  <thead>
    <tr>
      <th>Hạng Mục Cấp Phép</th>
      <th>Cơ Quan Tiếp Nhận</th>
      <th>Thời Gian Phê Duyệt</th>
      <th>Chi Phí/Lệ Phí Ước Tính</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Xin phép tổ chức giải đấu</td>
      <td>Sở Văn hóa Thể thao</td>
      <td>15 - 30 ngày</td>
      <td>Từ 2.000.000 VNĐ</td>
    </tr>
    <tr>
      <td>Phương án an ninh, trật tự</td>
      <td>Công an địa phương</td>
      <td>07 - 10 ngày</td>
      <td>Tùy quy mô sự kiện</td>
    </tr>
    <tr>
      <td>Phân luồng giao thông</td>
      <td>Sở GTVT & CSGT</td>
      <td>10 - 15 ngày</td>
      <td>Theo tuyến đường cấp phép</td>
    </tr>
    <tr>
      <td>Cam kết y tế, sơ cứu</td>
      <td>Bệnh viện Đa khoa/Sở Y tế/TTC Cấp cứu 115</td>
      <td>03 - 05 ngày</td>
      <td>Từ 3.000.000 VNĐ/Chuyến xe</td>
    </tr>
  </tbody>
</table>
`;
        // Insert before "<h2>5. Lời Kêu Gọi Từ Sự Kiện Toàn Quốc</h2>"
        content = content.replace('<h2>5. Lời Kêu Gọi Từ Sự Kiện Toàn Quốc</h2>', tableHtml + '\n<h2>5. Lời Kêu Gọi Từ Sự Kiện Toàn Quốc</h2>');
    }
    
    const { error: updateErr } = await supabase
        .from('posts')
        .update({
            meta_description,
            featured_image_alt,
            content
        })
        .eq('id', postId);
        
    if (updateErr) {
        console.error("Update error:", updateErr);
    } else {
        console.log("Audit complete and post updated successfully.");
    }
}

main();
