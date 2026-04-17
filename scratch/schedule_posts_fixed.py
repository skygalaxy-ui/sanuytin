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

posts_data = [
    {
        "title": "Top 10 Sàn Forex Uy Tín Việt Nam 2026",
        "slug": "top-10-san-forex-uy-tin-viet-nam-2026",
        "excerpt": "Bảng xếp hạng 10 sàn giao dịch Forex uy tín nhất tại thị trường Việt Nam năm 2026 dựa trên giấy phép và hỗ trợ tiếng Việt.",
        "category": "kien-thuc-forex",
        "meta_title": "Top 10 Sàn Forex Uy Tín Việt Nam 2026 mới nhất",
        "meta_description": "Khám phá danh sách Top 10 sàn Forex uy tín tại Việt Nam 2026. Đánh giá khách quan về phí spread và hỗ trợ nạp rút cho trader.",
        "tags": ["top 10", "sàn uy tín", "forex việt nam"]
    },
    {
        "title": "Top 10 Sàn Forex Phí Spread Thấp Nhất 2026",
        "slug": "top-10-san-forex-spread-thap-2026",
        "excerpt": "Tổng hợp danh sách các sàn Forex có mức chênh lệch (Spread) cạnh tranh nhất 2026 cho nhà đầu tư lướt sóng.",
        "category": "kien-thuc-forex",
        "meta_title": "Top 10 Sàn Forex Phí Spread Thấp Nhất 2026 cực Hot",
        "meta_description": "Giao dịch tối ưu lợi nhuận với Top 10 sàn Forex phí spread thấp nhất năm 2026. So sánh spread EUR/USD và Vàng.",
        "tags": ["spread thấp", "scalping", "tiết kiệm phí"]
    },
    {
        "title": "Top 10 Sàn Forex Nạp Rút Nhanh & Hỗ Trợ Bank Việt",
        "slug": "top-10-san-forex-nap-rut-nhanh-2026-v2",
        "excerpt": "Đừng để nạp rút làm gián đoạn trading. Xem ngay Top 10 sàn Forex hỗ trợ nạp rút siêu tốc qua ngân hàng Việt.",
        "category": "kien-thuc-forex",
        "meta_title": "Top 10 Sàn Forex Nạp Rút Nhanh nhất Việt Nam 2026",
        "meta_description": "Danh sách sàn Forex nạp rút tiền nhanh nhất 2026 qua Internet Banking, ví điện tử. Tốc độ xử lý chỉ 5-15 phút.",
        "tags": ["nạp rút nhanh", "bank việt nam", "an toàn vốn"]
    },
    {
        "title": "Top 10 Sàn Trading Vàng XAU/USD Uy Tín 2026",
        "slug": "top-10-san-trading-vang-xau-usd-uy-tin-2026-v2",
        "excerpt": "Trading vàng đòi hỏi sàn có spread ổn định. Đây là Top 10 lựa chọn tốt nhất cho nhà đầu tư vàng 2026.",
        "category": "kien-thuc-forex",
        "meta_title": "Top 10 Sàn Trading Vàng XAU/USD Uy Tín 2026",
        "meta_description": "So sánh Top 10 sàn giao dịch vàng trực tuyến uy tín nhất 2026. Spread vàng cực thấp, đòn bẩy linh hoạt nhất.",
        "tags": ["trading vàng", "XAUUSD", "đầu tư vàng"]
    },
    {
        "title": "Top 10 Sàn Forex Bonus Không Ký Quỹ 2026",
        "slug": "top-10-san-forex-bonus-khong-ky-quy-2026-v2",
        "excerpt": "Trải nghiệm trading thực không cần nạp tiền. Tổng hợp Bonus nạp tiền tốt nhất từ các sàn uy tín 2026.",
        "category": "kien-thuc-forex",
        "meta_title": "Top 10 Sàn Forex Bonus Không Ký Quỹ 2026 từ 0đ",
        "meta_description": "Nhận ngay vốn giao dịch miễn phí với Top 10 sàn Forex tặng Bonus không ký quỹ 2026. Hướng dẫn cách rút tiền thưởng.",
        "tags": ["bonus forex", "không ký quỹ", "vốn miễn phí"]
    }
]

def generate_full_content(post):
    body = f"""
<p>Chào mừng bạn đến với chuyên mục đánh giá sàn của Sàn Uy Tín. Trong năm 2026, thị trường ngoại hối đã có nhiều biến chuyển mạnh mẽ. Tìm ra người đồng hành đáng tin cậy là bước đầu tiên để thành công. Dưới đây là <strong>{post['title']}</strong> đã được kiểm chứng.</p>

<h2>Tiêu chí lựa chọn sàn hàng đầu 2026</h2>
<ul>
    <li><strong>Pháp lý:</strong> Giấy phép chuẩn Tier-1 (FCA, ASIC).</li>
    <li><strong>Chi phí:</strong> Spread và Commission cực thấp.</li>
    <li><strong>Tốc độ:</strong> Khớp lệnh nhanh, nạp rút trong ngày.</li>
    <li><strong>Hỗ trợ:</strong> Đội ngũ support người Việt 24/5.</li>
</ul>

<h2>Chi tiết danh sách {post['title']}</h2>
<h3>1. Exness - Vị thế số 1 tại Việt Nam</h3>
<p>Dẫn đầu về khối lượng giao dịch và tốc độ nạp rút tự động. Đây là sàn được yêu thích nhất cho trader Việt.</p>

<h3>2. XTB - An toàn tuyệt đối</h3>
<p>Niêm yết trên sàn chứng khoán, mang lại sự yên tâm tuyệt đối về dòng vốn. Nền tảng xStation mượt mà.</p>

<h3>3. XM - Ưu đãi tốt nhất cho Newbie</h3>
<p>Tặng bonus đăng ký và hỗ trợ rất tốt cho người mới bắt đầu bước chân vào thị trường.</p>

<h2>Bảng so sánh tổng hợp các sàn</h2>
<table>
<thead><tr><th>Sàn</th><th>Phí Spread</th><th>Nạp Tối Thiểu</th><th>Đòn Bẩy</th></tr></thead>
<tbody>
<tr><td>Exness</td><td>Từ 0.0 pip</td><td>$1</td><td>1:Unlimit</td></tr>
<tr><td>XTB</td><td>Từ 0.1 pip</td><td>$0</td><td>1:500</td></tr>
<tr><td>XM</td><td>Từ 0.6 pip</td><td>$5</td><td>1:1000</td></tr>
</tbody>
</table>

<h2>FAQ - Giải đáp nhanh</h2>
<h3>Tôi có thể bắt đầu với số vốn nhỏ được không?</h3>
<p>Có, các sàn như Exness hay XM cho phép nạp chỉ từ $1 - $5.</p>

<p><strong>Kết luận:</strong> Hy vọng danh sách <strong>{post['title']}</strong> giúp bạn chọn được sàn ưng ý. Chúc bạn thành công!</p>
"""
    return body.strip()

start_date = datetime(2026, 4, 18, 9, 0)
for i, post in enumerate(posts_data):
    scheduled_time = (start_date + timedelta(days=i*2)).isoformat() + "Z"
    payload = {
        "title": post["title"],
        "slug": post["slug"],
        "excerpt": post["excerpt"],
        "content": generate_full_content(post),
        "category": post["category"],
        "meta_title": post["meta_title"],
        "meta_description": post["meta_description"],
        "is_published": False,
        "scheduled_at": scheduled_time,
        "tags": post["tags"],
        "author": "Sàn Uy Tín Team",
        "featured_image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
        "featured_image_alt": post["title"]
    }
    res = requests.post(url, headers=headers, data=json.dumps(payload))
    print(f"{post['title']}: {res.status_code}")
