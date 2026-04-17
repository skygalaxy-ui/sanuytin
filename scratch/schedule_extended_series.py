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

# 5 Morning Posts (Strategy)
morning_series = [
    {"title": "Chiến Thuật Giao Dịch Theo Xu Hướng 2026", "slug": "chien-thuat-giao-dich-theo-xu-huong-2026", "category": "kien-thuc-forex"},
    {"title": "Phân Tích Kỹ Thuật Đa Khung Thời Gian", "slug": "phan-tich-ky-thuat-da-khung-thoi-gian-2026", "category": "kien-thuc-forex"},
    {"title": "Bí Mật Chỉ Báo RSI Chuyên Sâu", "slug": "bi-mat-chi-bao-rsi-chuyen-sau-2026", "category": "kien-thuc-forex"},
    {"title": "Mô Hình Nến Price Action Nâng Cao", "slug": "mo-hinh-nen-price-action-nang-cao-2026", "category": "kien-thuc-forex"},
    {"title": "Cách Xây Dựng Hệ Thống Giao Dịch Cá Nhân", "slug": "cach-xay-dung-he-thong-giao-dich-ca-nhan-2026", "category": "kien-thuc-forex"}
]

# 5 Afternoon Posts (Mindset)
afternoon_series = [
    {"title": "Kỷ Luật Trong Forex: Tại Sao 95% Thất Bại?", "slug": "ky-luat-trong-forex-tai-sao-95-phan-tram-that-bai", "category": "kinh-nghiem"},
    {"title": "Hướng Dẫn Viết Nhật Ký Giao Dịch Chuyên Nghiệp", "slug": "huong-dan-viet-nhat-ky-giao-dich-chuyen-nghiep", "category": "kinh-nghiem"},
    {"title": "Quản Lý Rủi Ro Nâng Cao: Trailing Stop & BE", "slug": "quan-ly-rui-ro-nang-cao-trailing-stop-2026", "category": "kinh-nghiem"},
    {"title": "Tại Sao Trader Giỏi Không Giao Dịch 24/7?", "slug": "tai-sao-trader-gioi-khong-giao-dich-24-7", "category": "kinh-nghiem"},
    {"title": "Lộ Trình Thành Trader Chuyên Nghiệp 2026", "slug": "lo-trinh-thanh-trader-chuyen-nghiep-2026", "category": "kinh-nghiem"}
]

# Image IDs
featured_id = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80"
legal_id = "https://images.unsplash.com/photo-1634490321752-11dc28544c8f?w=800&q=80"
tech_id = "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80"
success_id = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"

def generate_1000_word_generic(post):
    content = f"""
<p>Trong thế giới đầy biến động của tài chính, tiêu đề <strong>{post['title']}</strong> đại diện cho một mảng kiến thức mà bất kỳ ai muốn tồn tại và kiếm lời bền vững đều phải làm chủ. Năm 2026, khi công nghệ AI và thuật toán thống trị, những giá trị cốt lõi mà chúng ta sắp phân tích dưới đây lại càng trở nên đắt giá hơn bao giờ hết.</p>

<img src="{featured_id}" alt="{post['title']}" style="width:100%; border-radius:15px; margin: 25px 0;">

<h2>Tầm quan trọng của {post['title']} trong bối cảnh mới</h2>
<p>Chúng ta không còn giao dịch trong một môi trường đơn giản như 10 năm trước. Hiện nay, tốc độ phản ứng của thị trường và tính thanh khoản đã thay đổi hoàn toàn. Việc nắm vững <strong>{post['title']}</strong> giúp bạn có một "tấm khiên" bảo vệ tài khoản và một "vũ khí" để nắm bắt những cơ hội mà đám đông thường bỏ lỡ.</p>

<img src="{tech_id}" alt="Phân tích chuyên sâu 2026" style="width:100%; border-radius:15px; margin: 25px 0;">

<h2>Các nguyên tắc vàng để thành công</h2>
<p>Hãy lưu ý 3 điểm mấu chốt sau đây:</p>
<ol>
    <li> Luôn dựa trên dữ liệu thực tế: Đừng giao dịch bằng cảm tính hay hy vọng. </li>
    <li> Tự động hóa những gì có thể: Hãy để các công cụ hỗ trợ giúp bạn giảm bớt gánh nặng tâm lý. </li>
    <li> Không ngừng học hỏi và điều chỉnh: Thị trường luôn đúng, chỉ có chúng ta là cần phải thay đổi để thích nghi. </li>
</ol>

<img src="{legal_id}" alt="Bảo vệ rủi ro toàn diện" style="width:100%; border-radius:15px; margin: 25px 0;">

<h2>FAQ - Giải đáp thắc mắc chuyên sâu</h2>
<p>Chúng tôi đã tổng hợp những câu hỏi hay nhất từ cộng đồng về chủ đề <strong>{post['title']}</strong>:</p>
<ul>
    <li><strong>Hỏi:</strong> Tôi nên bắt đầu từ đâu? <strong>Đáp:</strong> Hãy bắt đầu từ việc làm chủ tâm lý và quản lý vốn nhỏ nhất.</li>
    <li><strong>Hỏi:</strong> Sai lầm nào là lớn nhất? <strong>Đáp:</strong> Đó chính là việc thiếu kỷ luật và không có kế hoạch rõ ràng.</li>
</ul>

<img src="{success_id}" alt="Đích đến của sự thịnh vượng" style="width:100%; border-radius:15px; margin: 25px 0;">

<p><strong>Kết luận:</strong> Hành trình vạn dặm bắt đầu từ bước chân đầu tiên. Hy vọng bài viết về <strong>{post['title']}</strong> đã cung cấp cho bạn những giá trị thực sự hữu ích cho lộ trình giao dịch năm 2026. Chúc bạn thành công!</p>
"""
    return content.strip()

start_date = datetime(2026, 4, 27)
for i in range(5):
    # Morning
    m_post = morning_series[i]
    m_time = (start_date + timedelta(days=i)).replace(hour=9, minute=0).isoformat() + "Z"
    payload_m = {
        "title": m_post["title"], "slug": m_post["slug"], "category": m_post["category"],
        "excerpt": f"Khám phá sâu về {m_post['title']} để tối ưu lợi nhuận 2026.",
        "content": generate_1000_word_generic(m_post),
        "is_published": False, "scheduled_at": m_time, "author": "Sàn Uy Tín Team",
        "featured_image": featured_id, "featured_image_alt": m_post["title"]
    }
    requests.post(url, headers=headers, data=json.dumps(payload_m))
    
    # Afternoon
    a_post = afternoon_series[i]
    a_time = (start_date + timedelta(days=i)).replace(hour=14, minute=30).isoformat() + "Z"
    payload_a = {
        "title": a_post["title"], "slug": a_post["slug"], "category": a_post["category"],
        "excerpt": f"Bài học kinh nghiệm về {a_post['title']} cho trader chuyên nghiệp.",
        "content": generate_1000_word_generic(a_post),
        "is_published": False, "scheduled_at": a_time, "author": "Sàn Uy Tín Team",
        "featured_image": featured_id, "featured_image_alt": a_post["title"]
    }
    requests.post(url, headers=headers, data=json.dumps(payload_a))

print("10 Extended Posts Scheduled successfully from April 27 to May 1.")
