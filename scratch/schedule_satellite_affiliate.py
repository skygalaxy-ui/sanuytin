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

satellites = [
    {"title": "Cách Mở Tài Khoản Forex Cho Người Mới (2026)", "slug": "cach-mo-tai-khoan-forex-nguoi-moi-2026", "target_broker_url": "/kien-thuc-forex/huong-dan-su-dung-exness-2026", "target_name": "Exness"},
    {"title": "Top 5 Ngân Hàng Nạp Rút Tiền Forex Nhanh Nhất", "slug": "ngan-hang-nap-rut-forex-nhanh-nhat-2026", "target_broker_url": "/kien-thuc-forex/top-10-san-forex-nap-rut-nhanh-2026-v2", "target_name": "Top sàn nạp rút nhanh"},
    {"title": "Hướng Dẫn Nhận $30 Miễn Phí Từ Sàn XM", "slug": "nhan-30-usd-mien-phi-san-xm-2026", "target_broker_url": "/kien-thuc-forex/huong-dan-su-dung-san-xm-2026", "target_name": "XM"},
    {"title": "Cách Dùng Đòn Bẩy 1:2000 Hiệu Quả Nhất", "slug": "dung-don-bay-1-2000-forex-hieu-qua", "target_broker_url": "/kien-thuc-forex/huong-dan-su-dung-exness-2026", "target_name": "Exness"},
    {"title": "So Sánh Phí Spread Các Sàn Forex Hàng Đầu 2026", "slug": "so-sanh-phi-spread-san-forex-2026", "target_broker_url": "/kien-thuc-forex/top-10-san-forex-spread-thap-2026", "target_name": "Top sàn spread thấp"},
    {"title": "Xác Minh Tài Khoản Forex Thành Công Trong 5 Phút", "slug": "xac-minh-tai-khoan-forex-kyc-nhanh", "target_broker_url": "/kien-thuc-forex/huong-dan-su-dung-exness-2026", "target_name": "Exness"},
    {"title": "Sử Dụng xStation 5 Của XTB Hiệu Quả Nhất", "slug": "su-dung-xstation-5-xtb-hieu-qua-2026", "target_broker_url": "/kien-thuc-forex/huong-dan-giao-dich-san-xtb-2026", "target_name": "XTB"},
    {"title": "Cách Chọn Tài Khoản Zero Spread / Raw ECN", "slug": "chon-tai-khoan-zero-spread-raw-ecn-2026", "target_broker_url": "/kien-thuc-forex/top-10-san-forex-uy-tin-viet-nam-2026", "target_name": "Top sàn uy tín"}
]

# Image IDs
featured_id = "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80"
legal_id = "https://images.unsplash.com/photo-1634490321752-11dc28544c8f?w=800&q=80"
tech_id = "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80"
success_id = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"

def generate_satellite_content(post):
    content = f"""
<p>Bước vào thế giới giao dịch ngoại hối đầy cơ hội nhưng cũng không ít rủi ro, việc trang bị những kiến thức thực tế như <strong>{post['title']}</strong> là cực kỳ cần thiết. Một khởi đầu đúng đắn sẽ giúp bạn tiết kiệm được hàng nghìn USD "học phí" không đáng có.</p>

<img src="{featured_id}" alt="{post['title']}" style="width:100%; border-radius:15px; margin: 25px 0;">

<h2>Tại sao nhà đầu tư chuyên nghiệp luôn quan tâm đến {post['title']}?</h2>
<p>Trong trading, sự khác biệt giữa người thắng và người thua thường nằm ở những chi tiết nhỏ nhất. Việc lựa chọn một <a href="/" style="color: #22c55e; font-weight: 700;">sàn forex uy tín</a> có hỗ trợ các tính năng như trong bài <strong>{post['title']}</strong> là nền tảng vững chắc nhất để bạn yên tâm giao dịch.</p>

<img src="{tech_id}" alt="Hướng dẫn chi tiết Forex 2026" style="width:100%; border-radius:15px; margin: 25px 0;">

<h2>Hướng dẫn thực hiện {post['title']} chi tiết</h2>
<p>Dưới đây là các bước quan trọng nhất mà bạn cần lưu ý:</p>
<ol>
    <li> Tìm kiếm thông tin chính thống từ các nguồn tin cậy. </li>
    <li> Chuẩn bị đầy đủ các công cụ và giấy tờ cần thiết. </li>
    <li> Thực hành trên tài khoản Demo để tránh sai sót. </li>
    <li> Áp dụng vào thực tế với số vốn nhỏ. </li>
</ol>
<p>Một trong những gợi ý hàng đầu của chúng tôi để thực hiện quy trình này chính là <a href="{post['target_broker_url']}" style="color: #22c55e; font-weight: 700;">Sàn {post['target_name']}</a>, nơi có hạ tầng công nghệ cực kỳ ổn định.</p>

<img src="{legal_id}" alt="Bảo mật và An toàn trong Forex" style="width:100%; border-radius:15px; margin: 25px 0;">

<h2>Các lưu ý quan trọng để tối ưu hóa hiệu quả</h2>
<p>Đừng bao giờ bỏ qua yếu tố quản lý rủi ro. Cho dù bạn đang học bài <strong>{post['title']}</strong>, thì việc bảo vệ vốn vẫn là ưu tiên số 1. Hãy luôn sử dụng các sàn có cơ chế bảo hiểm tiền gửi và Separated Accounts (tài khoản riêng biệt).</p>

<img src="{success_id}" alt="Thành công cùng trading" style="width:100%; border-radius:15px; margin: 25px 0;">

<h2>FAQ - Những thắc mắc về {post['title']}</h2>
<p><strong>Tôi có thể thực hiện việc này trên điện thoại không?</strong> Hoàn toàn được, hiện nay hầu hết các sàn lớn đều hỗ trợ đầy đủ tính năng trên App di động.</p>
<p><strong>Lợi khuyên cuối cùng dành cho bạn:</strong> Hãy luôn kiên nhẫn và tuân thủ kỷ luật giao dịch.</p>

<p><strong>Kết luận:</strong> Hy vọng bài viết về <strong>{post['title']}</strong> đã cung cấp cho bạn những giá trị thực sự hữu ích. Nếu bạn cần tìm kiếm một nền tảng tốt để bắt đầu, hãy xem ngay bảng xếp hạng <a href="/" style="color: #22c55e; font-weight: 700;">sàn forex uy tín</a> của chúng tôi.</p>
"""
    return content.strip()

# Scheduling for May 2 onwards (9:00 AM)
start_date = datetime(2026, 5, 2, 9, 0)
for i, post in enumerate(satellites):
    scheduled_time = (start_date + timedelta(days=i)).isoformat() + "Z"
    payload = {
        "title": post["title"],
        "slug": post["slug"],
        "excerpt": f"Hướng dẫn chi tiết về {post['title']} cho nhà đầu tư Forex 2026.",
        "content": generate_satellite_content(post),
        "category": "kien-thuc-forex",
        "is_published": False,
        "scheduled_at": scheduled_time,
        "author": "Sàn Uy Tín Team",
        "featured_image": featured_id,
        "featured_image_alt": post["title"]
    }
    res = requests.post(url, headers=headers, data=json.dumps(payload))
    print(f"Satellite Post Scheduled: {post['title']} - Status: {res.status_code}")
