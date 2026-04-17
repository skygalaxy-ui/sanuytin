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

vantage_series = [
    {
        "title": "Hướng Dẫn Sử Dụng Vantage 2026 Toàn Tập",
        "slug": "huong-dan-su-dung-vantage-2026-toan-tap",
        "excerpt": "Làm chủ sàn Vantage chỉ trong 10 phút. Hướng dẫn mở tài khoản, xác minh KYC và nạp rút tiền an toàn.",
        "category": "huong-dan",
        "meta_title": "Hướng Dẫn Sử Dụng Vantage 2026 chi tiết",
        "meta_description": "Học cách sử dụng sàn Vantage từ A-Z. Hướng dẫn đăng ký, nạp tiền qua ngân hàng Việt Nam và giao dịch trên App Vantage."
    },
    {
        "title": "Kiếm Tiền Với Vantage Social Trading 2026",
        "slug": "kiem-tien-voi-vantage-social-trading-2026",
        "excerpt": "Khám phá sức mạnh của việc Copy Trade tại Vantage. Cách chọn Master Pro và tối ưu lợi nhuận thụ động.",
        "category": "kinh-nghiem",
        "meta_title": "Vantage Social Trading 2026: Kinh nghiệm Copy Trade",
        "meta_description": "Hướng dẫn sử dụng tính năng Copy Trade trên sàn Vantage. Bí quyết chọn chuyên gia và quản lý rủi ro khi đầu tư thụ động."
    },
    {
        "title": "So Sánh Vantage vs Exness 2026: Ai Tốt Hơn?",
        "slug": "so-sanh-vantage-vs-exness-2026",
        "excerpt": "Trận chiến giữa hai ông lớn về tốc độ khớp lệnh. So sánh spread, commission và chất lượng hỗ trợ người Việt.",
        "category": "kien-thuc-forex",
        "meta_title": "So Sánh Vantage vs Exness 2026 chi tiết",
        "meta_description": "Nên chọn Vantage hay Exness? So sánh chi phí giao dịch, tốc độ nạp rút và nền tảng công nghệ giữa 2 sàn Forex hàng đầu."
    },
    {
        "title": "Tài Khoản Vantage STP vs ECN: Lựa Chọn Nào?",
        "slug": "tai-khoan-vantage-stp-vs-ecn-lua-chon-nao",
        "excerpt": "Bạn đang phân vân giữa tài khoản Standard STP hay Raw ECN? Phân tích chi tiết giúp bạn tối ưu chi phí giao dịch.",
        "category": "kien-thuc-forex",
        "meta_title": "Vantage STP vs ECN: So sánh các loại tài khoản",
        "meta_description": "Sự khác biệt giữa tài khoản STP và ECN tại sàn Vantage. Loại tài khoản nào phù hợp với phong cách giao dịch của bạn?"
    },
    {
        "title": "Phí Swap Sàn Vantage 2026: Có Nên Giữ Lệnh?",
        "slug": "phi-swap-san-vantage-2026-giu-lenh-qua-dem",
        "excerpt": "Kinh nghiệm giữ lệnh dài hạn tại Vantage. Cách tận dụng chính sách Free Swap cho một số sản phẩm chiến lược.",
        "category": "kinh-nghiem",
        "meta_title": "Phí Swap Sàn Vantage 2026 & Chính sách Free Swap",
        "meta_description": "Đánh giá phí qua đêm tại sàn Vantage năm 2026. Cách tối ưu lợi nhuận khi giao dịch Swing Trade dài hạn."
    }
]

# Image IDs
featured_id = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80"
legal_id = "https://images.unsplash.com/photo-1634490321752-11dc28544c8f?w=800&q=80"
tech_id = "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80"
success_id = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"

def generate_vantage_content(post):
    content = f"""
<p>Nếu bạn đang tìm kiếm một môi trường giao dịch chuyên nghiệp với tốc độ khớp lệnh miligiây, sàn Vantage chắc chắn là cái tên không thể bỏ qua. Trong bài viết <strong>{post['title']}</strong> này, chúng tôi sẽ đi sâu vào những khía cạnh thực tế nhất để bạn có thể tận dụng tối đa thế mạnh của sàn môi giới hàng đầu thế giới này.</p>

<img src="{featured_id}" alt="{post['title']}" style="width:100%; border-radius:15px; margin: 25px 0;">

<h2>Tại sao Vantage lại thu hút cộng đồng Trader Việt năm 2026?</h2>
<p>Vantage (trước đây là Vantage FX) đã có một bước chuyển mình mạnh mẽ trong năm 2026 khi tập trung đầu tư vào hạ tầng máy chủ tại khu vực Đông Nam Á. Điều này giúp loại bỏ hoàn toàn tình trạng "treo lệnh" hoặc báo giá lại thường thấy ở các sàn quy mô nhỏ hơn.</p>
<p>Bên cạnh đó, việc sở hữu các giấy phép uy tín như ASIC, FCA và VFSC giúp đảm bảo rằng mọi giao dịch của bạn tại Vantage đều nằm trong tầm kiểm soát của các cơ quan quản lý tài chính hàng đầu.</p>

<img src="{legal_id}" alt="Uy tín và pháp lý Vantage" style="width:100%; border-radius:15px; margin: 25px 0;">

<h2>Chi tiết nội dung về {post['title']}</h2>
<p>Hãy cùng phân tích 3 ưu điểm vượt trội mà chúng tôi đã ghi nhận được:</p>
<h3>1. Hệ sinh thái Copy Trading (Social Trading) bùng nổ</h3>
<p>Không chỉ là một sàn giao dịch, Vantage đã xây dựng một mạng lưới Social Trading cực kỳ thông minh. Bạn có thể theo dõi và sao chép lệnh của các Master Trader từ khắp nơi trên thế giới chỉ với một vài cú click chuột trên mobile app.</p>

<h3>2. Nền tảng giao dịch đa dạng và mượt mà</h3>
<p>Ngoài MT4 và MT5 truyền thống, Vantage còn cung cấp ứng dụng Vantage App độc quyền với giao diện trực quan, cho phép bạn quản lý tài khoản, nạp rút tiền và giao dịch ngay trên cùng một ứng dụng duy nhất.</p>

<img src="{tech_id}" alt="Công nghệ giao dịch sàn Vantage" style="width:100%; border-radius:15px; margin: 25px 0;">

<h3>3. Chi phí giao dịch cạnh tranh và trong sạch</h3>
<p>Với tài khoản Raw ECN, trader có thể tiếp cận mức spread từ 0.0 pip với mức phí hoa hồng (commission) rất thấp. Đây là điều kiện lý tưởng cho những ai theo đuổi phong cách giao dịch Scalping hoặc Day Trading.</p>

<h2>Bảng tổng kết thông tin về Vantage 2026</h2>
<table>
<thead><tr><th>Thông số</th><th>Chi tiết</th><th>Đánh giá</th></tr></thead>
<tbody>
<tr><td>Tốc độ nạp rút</td><td>30 phút - 2 giờ</td><td>Rất nhanh</td></tr>
<tr><td>Khớp lệnh</td><td>No Re-quotes</td><td>Chuyên nghiệp</td></tr>
<tr><td>Support Việt</td><td>Hỗ trợ 24/5</td><td>Nhiệt tình</td></tr>
</tbody>
</table>

<img src="{success_id}" alt="Thành công cùng Vantage" style="width:100%; border-radius:15px; margin: 25px 0;">

<h2>FAQ - Giải đáp nhanh về sàn Vantage</h2>
<h3>Sàn Vantage có nạp rút qua ngân hàng Việt Nam không?</h3>
<p>Có, sàn hỗ trợ Internet Banking của tất cả các ngân hàng lớn tại Việt Nam như Vietcombank, Techcombank, BIDV... hoàn toàn không mất phí.</p>

<h3>Mở tài khoản tại Vantage mất bao lâu?</h3>
<p>Quá trình đăng ký chỉ mất khoảng 3 phút và việc xác minh danh tính thường được hoàn tất tự động trong vòng 1-2 giờ.</p>

<p><strong>Lời kết:</strong> Sàn giao dịch này đang chứng minh được vị thế vững chắc của mình thông qua chất lượng dịch vụ và nền tảng công nghệ. Hy vọng bài viết <strong>{post['title']}</strong> đã đem lại cho bạn những thông tin thực sự giá trị.</p>
"""
    return content.strip()

start_date = datetime(2026, 4, 18, 16, 0) # 4:00 PM
for i, post in enumerate(vantage_series):
    scheduled_time = (start_date + timedelta(days=i)).isoformat() + "Z"
    payload = {
        "title": post["title"],
        "slug": post["slug"],
        "excerpt": post["excerpt"],
        "content": generate_vantage_content(post),
        "category": "kien-thuc-forex",
        "meta_title": post["meta_title"],
        "meta_description": post["meta_description"],
        "is_published": False,
        "scheduled_at": scheduled_time,
        "tags": ["Vantage", "đánh giá", "hướng dẫn", "vantage trading"],
        "author": "Sàn Uy Tín Team",
        "featured_image": featured_id,
        "featured_image_alt": post["title"]
    }
    res = requests.post(url, headers=headers, data=json.dumps(payload))
    print(f"Vantage Series Scheduled: {post['title']} - Status: {res.status_code}")
