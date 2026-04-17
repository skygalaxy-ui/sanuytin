import requests
import json
from datetime import datetime, timedelta

url = "https://ecipdcojedkbrlggaqja.supabase.co/rest/v1/posts"
headers = {
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Content-Type": "application/json",
    "Prefer": "return=representation"
}

series = [
    {
        "title": "Kinh Nghiệm Quản Lý Vốn Forex 2026",
        "slug": "kinh-nghiem-quan-ly-von-forex-2026",
        "excerpt": "Quản lý vốn là chìa khóa để tồn tại. Học ngay kinh nghiệm quản lý rủi ro từ các chuyên gia 2026.",
        "category": "kinh-nghiem",
        "meta_title": "Kinh Nghiệm Quản Lý Vốn Forex 2026 cực hay",
        "meta_description": "Khám phá các quy tắc quản lý vốn Forex hiệu quả nhất 2026. Cách tránh cháy tài khoản và tối ưu lợi nhuận bền vững."
    },
    {
        "title": "Kinh Nghiệm Giao Dịch Vàng (XAU/USD)",
        "slug": "kinh-nghiem-giao-dich-vang-2026-v2",
        "excerpt": "Vàng là sản phẩm biến động nhất. Xem ngay kinh nghiệm săn sóng vàng từ các Pro Trader.",
        "category": "kinh-nghiem",
        "meta_title": "Kinh Nghiệm Giao Dịch Vàng 2026 chuyên sâu",
        "meta_description": "Bí quyết giao dịch vàng XAU/USD hiệu quả. Cách đọc tin tức vĩ mô và phân tích biểu đồ vàng chuẩn xác 2026."
    },
    {
        "title": "Cách Tránh Bẫy Sàn Forex Lừa Đảo",
        "slug": "cach-tranh-bay-san-forex-lua-dao-2026",
        "excerpt": "Kinh nghiệm xương máu giúp bạn nhận diện sàn rác và bảo vệ dòng vốn an toàn tuyệt đối.",
        "category": "kinh-nghiem",
        "meta_title": "Cách Tránh Bẫy Sàn Forex Lừa Đảo 2026",
        "meta_description": "Nhận diện 5 cạm bẫy sàn Forex lừa đảo tinh vi nhất 2026. Kinh nghiệm kiểm tra giấy phép và uy tín sàn môi giới."
    },
    {
        "title": "Kinh Nghiệm Kiểm Soát Tâm Lý Trading",
        "slug": "kinh-nghiem-kiem-soat-tam-ly-trading-2026",
        "excerpt": "Lòng tham và nỗi sợ là kẻ thù lớn nhất. Học cách làm chủ cảm xúc để giao dịch nhất quán.",
        "category": "kinh-nghiem",
        "meta_title": "Kinh Nghiệm Kiểm Soát Tâm Lý Trading 2026",
        "meta_description": "Làm chủ tâm lý giao dịch Forex giúp bạn thắng 80%. Các kỹ thuật kiểm soát cảm xúc và kỷ luật thép trong đầu tư."
    },
    {
        "title": "Kinh Nghiệm Dùng Đòn Bẩy Forex An Toàn",
        "slug": "kinh-nghiem-dung-don-bay-forex-2026",
        "excerpt": "Đòn bẩy cao là con dao hai lưỡi. Xem ngay kinh nghiệm sử dụng đòn bẩy thông minh từ cao thủ.",
        "category": "kinh-nghiem",
        "meta_title": "Kinh Nghiệm Dùng Đòn Bẩy Forex An Toàn 2026",
        "meta_description": "Cách tận dụng đòn bẩy Forex để nhân tài khoản mà vẫn an toàn. Kinh nghiệm tính Margin và Stop out cho trader."
    }
]

# Image IDs
featured_id = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80"
legal_id = "https://images.unsplash.com/photo-1634490321752-11dc28544c8f?w=800&q=80"
tech_id = "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80"
success_id = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"

def generate_1000_word_experience(post):
    content = f"""
<p>Trong hành trình chinh phục thị trường ngoại hối, kiến thức sách vở chỉ là điều kiện cần. Điều kiện đủ để bạn kiếm được lợi nhuận bền vững chính là <strong>{post['title']}</strong> được đúc kết từ hàng nghìn giờ bám biểu đồ. Bài viết này sẽ không nói về lý thuyết suông, mà tập trung vào những bài học thực chiến xương máu nhất.</p>

<img src="{featured_id}" alt="{post['title']}" style="width:100%; border-radius:15px; margin: 25px 0;">

<h2>Tại sao kinh nghiệm thực chiến lại quan trọng hơn chỉ báo kỹ thuật?</h2>
<p>Nhiều trader mới thường dành 90% thời gian để tìm kiếm một "chén thánh" - một chỉ báo kỹ thuật có thể dự báo chính xác tương lai. Tuy nhiên, sự thật là thị trường Forex 2026 biến động dựa trên tâm lý con người và tin tức vĩ mô. Các chỉ báo chỉ là dữ liệu quá khứ được vẽ lại.</p>
<p>Kinh nghiệm giúp bạn biết khi nào nên đứng ngoài thị trường, khi nào nên cắt lỗ quyết đoán và khi nào nên gồng lãi để tối ưu hóa lợi nhuận. Đó chính là sự khác biệt giữa một người chơi bạc và một nhà đầu tư chuyên nghiệp.</p>

<img src="{legal_id}" alt="Bảo vệ vốn an toàn" style="width:100%; border-radius:15px; margin: 25px 0;">

<h2>Phân tích chi tiết về {post['title']}</h2>
<p>Dưới đây là 3 trụ cột quan trọng nhất bạn cần khắc cốt ghi tâm:</p>
<h3>1. Luôn ưu tiên bảo toàn vốn trước khi nghĩ đến lợi nhuận</h3>
<p>Sai lầm lớn nhất là giao dịch với khối lượng quá lớn so với số dư tài khoản. Kinh nghiệm cho thấy, nếu bạn thua lỗ quá 10% tài khoản, tâm lý của bạn sẽ bắt đầu hoảng loạn và dẫn đến những quyết định sai lầm tiếp theo. Hãy giữ mức rủi ro mỗi lệnh ở mức 1-2% tổng vốn.</p>

<h3>2. Hiểu rõ quy luật cung cầu và tâm lý thị trường</h3>
<p>Thị trường Forex không vận động ngẫu nhiên. Nó là cuộc chiến giữa phe bò (mua) và phe gấu (bán). Kinh nghiệm đọc hiểu các vùng Supply/Demand (Cung/Cầu) sẽ giúp bạn tìm được các điểm vào lệnh (Entry) có xác suất thắng cao hơn bất kỳ robot nào.</p>

<img src="{tech_id}" alt="Phân tích kỹ thuật chuyên sâu" style="width:100%; border-radius:15px; margin: 25px 0;">

<h3>3. Kỷ luật thép và kiên nhẫn chờ đợi setup chuẩn</h3>
<p>Thị trường luôn ở đó, cơ hội luôn tồn tại. Đừng nóng vội vào lệnh chỉ vì cảm thấy "ngứa tay". Hãy chỉ bước vào cuộc chơi khi tất cả các điều kiện trong hệ thống của bạn được thỏa mãn. Kinh nghiệm cho thấy, những trader thành công nhất thường là những người kiên nhẫn nhất.</p>

<h2>Bảng tổng hợp các quy tắc vàng cho trader</h2>
<table>
<thead><tr><th>Quy tắc</th><th>Mô tả chi tiết</th><th>Lợi ích mang lại</th></tr></thead>
<tbody>
<tr><td>Quy tắc 2%</td><td>Không bao giờ rủi ro quá 2% vốn/lệnh</td><td>Bảo vệ tài khoản khỏi chuỗi thua</td></tr>
<tr><td>Kế hoạch giao dịch</td><td>Luôn có điểm SL/TP trước khi vào lệnh</td><td>Tránh giao dịch theo cảm xúc</td></tr>
<tr><td>Nhật ký trading</td><td>Ghi lại mọi lý do vào và thoát lệnh</td><td>Học hỏi từ những sai lầm cũ</td></tr>
</tbody>
</table>

<img src="{success_id}" alt="Thành công bền vững" style="width:100%; border-radius:15px; margin: 25px 0;">

<h2>FAQ - Những câu hỏi về kinh nghiệm thực chiến</h2>
<h3>Tôi đã học hết kiến thức nhưng vẫn thua, tôi phải làm sao?</h3>
<p>Hãy dừng giao dịch tài khoản Real, quay lại với Demo và tập trung vào việc ghi chép nhật ký. Bạn cần tìm ra "mẫu số chung" của các lệnh thua để khắc phục.</p>

<h3>Mất bao lâu để có kinh nghiệm giao dịch thành công?</h3>
<p>Thường mất từ 1-3 năm để một trader thực sự hiểu về nhịp điệu thị trường và làm chủ được cảm xúc cá nhân.</p>

<p><strong>Kết luận:</strong> Hy vọng những chia sẻ về <strong>{post['title']}</strong> trên đây sẽ là kim chỉ nam giúp bạn rút ngắn con đường tìm kiếm lợi nhuận. Hãy nhớ rằng: Trong Forex, người tồn tại lâu nhất mới là người chiến thắng cuối cùng!</p>
"""
    return content.strip()

start_date = datetime(2026, 4, 18, 14, 30) # 2:30 PM
for i, post in enumerate(series):
    scheduled_time = (start_date + timedelta(days=i)).isoformat() + "Z"
    payload = {
        "title": post["title"],
        "slug": post["slug"],
        "excerpt": post["excerpt"],
        "content": generate_1000_word_experience(post),
        "category": post["category"],
        "meta_title": post["meta_title"],
        "meta_description": post["meta_description"],
        "is_published": False,
        "scheduled_at": scheduled_time,
        "tags": ["kinh nghiệm", "forex", "trading"],
        "author": "Sàn Uy Tín Team",
        "featured_image": featured_id,
        "featured_image_alt": post["title"]
    }
    res = requests.post(url, headers=headers, data=json.dumps(payload))
    print(f"Experience Post Scheduled: {post['title']} - Status: {res.status_code}")
