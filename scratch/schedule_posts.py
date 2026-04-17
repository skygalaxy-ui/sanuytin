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
        "title": "Top 10 Sàn Forex Uy Tín Nhất Việt Nam 2026",
        "slug": "top-10-san-forex-uy-tin-viet-nam-2026",
        "excerpt": "Bảng xếp hạng 10 sàn giao dịch Forex uy tín nhất tại thị trường Việt Nam năm 2026 dựa trên giấy phép, trải nghiệm nạp rút và hỗ trợ tiếng Việt.",
        "category": "kien-thuc-forex",
        "meta_title": "Top 10 Sàn Forex Uy Tín Nhất Việt Nam 2026 | Cập Nhật Mới Nhất",
        "meta_description": "Khám phá danh sách Top 10 sàn Forex uy tín tại Việt Nam 2026. Đánh giá khách quan về phí spread, đòn bẩy và tốc độ nạp rút tiền cho trader Việt.",
        "tags": ["top 10", "sàn uy tín", "forex việt nam"],
        "content_template": "Pillar content about Top 10 Reputable Brokers in VN..."
    },
    {
        "title": "Top 10 Sàn Forex Có Phí Spread Thấp Nhất 2026",
        "slug": "top-10-san-forex-spread-thap-nhat-2026",
        "excerpt": "Tổng hợp danh sách các sàn Forex có mức chênh lệch (Spread) cạnh tranh nhất 2026, lý tưởng cho các trader lướt sóng (Scalper).",
        "category": "kien-thuc-forex",
        "meta_title": "Top 10 Sàn Forex Có Phí Spread Thấp Nhất 2026 | Tiết Kiệm Chi Phí",
        "meta_description": "Giao dịch tối ưu lợi nhuận với Top 10 sàn Forex có phí spread thấp nhất năm 2026. So sánh chi tiết spread của EUR/USD, Vàng và các cặp tiền chính.",
        "tags": ["spread thấp", "scalping", "tiết kiệm phí"],
        "content_template": "Content about Low Spread Brokers..."
    },
    {
        "title": "Top 10 Sàn Forex Nạp Rút Nhanh Nhất & Hỗ Trợ Ngân Hàng Nội Địa",
        "slug": "top-10-san-forex-nap-rut-nhanh-2026",
        "excerpt": "Đừng để việc nạp rút làm gián đoạn kế hoạch giao dịch. Xem ngay Top 10 sàn Forex hỗ trợ nạp rút siêu tốc qua ngân hàng Việt.",
        "category": "kien-thuc-forex",
        "meta_title": "Top 10 Sàn Forex Nạp Rút Nhanh Nhất 2026 | Hỗ Trợ Bank Việt",
        "meta_description": "Danh sách sàn Forex nạp rút tiền nhanh nhất 2026 qua Internet Banking, ví điện tử. Tốc độ xử lý chỉ từ 5-15 phút.",
        "tags": ["nạp rút nhanh", "bank việt nam", "an toàn vốn"],
        "content_template": "Content about Fast Withdrawal Brokers..."
    },
    {
        "title": "Top 10 Sàn Trading Vàng (XAU/USD) Uy Tín & Spread Cạnh Tranh",
        "slug": "top-10-san-trading-vang-xau-usd-uy-tin-2026",
        "excerpt": "Trading vàng đòi hỏi sàn có spread ổn định và không trượt giá. Đây là Top 10 lựa chọn tốt nhất cho các nhà đầu tư vàng 2026.",
        "category": "kien-thuc-forex",
        "meta_title": "Top 10 Sàn Trading Vàng (XAU/USD) Uy Tín 2026 | Phí Thấp Nhất",
        "meta_description": "So sánh Top 10 sàn giao dịch vàng trực tuyến uy tín nhất 2026. Spread vàng cực thấp, đòn bẩy linh hoạt và thanh khoản cao.",
        "tags": ["trading vàng", "XAUUSD", "đầu tư vàng"],
        "content_template": "Content about Gold Trading Brokers..."
    },
    {
        "title": "Top 10 Sàn Forex Tặng Bonus Không Ký Quỹ (No Deposit Bonus) 2026",
        "slug": "top-10-san-forex-bonus-khong-ky-quy-2026",
        "excerpt": "Trải nghiệm giao dịch thật mà không cần nạp tiền. Tổng hợp các chương trình Bonus nạp tiền tốt nhất từ các sàn uy tín 2026.",
        "category": "kien-thuc-forex",
        "meta_title": "Top 10 Sàn Forex Tặng Bonus Không Ký Quỹ 2026 | Bắt Đầu 0đ",
        "meta_description": "Nhận ngay vốn giao dịch miễn phí với Top 10 sàn Forex tặng Bonus không ký quỹ 2026. Hướng dẫn cách nhận và rút tiền thưởng.",
        "tags": ["bonus forex", "không ký quỹ", "vốn miễn phí"],
        "content_template": "Content about No Deposit Bonus..."
    }
]

def generate_full_content(post):
    # Standard SEO Template for Top 10
    body = f"""
<p>Chào mừng bạn đến với chuyên mục đánh giá sàn của Sàn Uy Tín. Trong năm 2026, thị trường ngoại hối đã có nhiều biến chuyển mạnh mẽ về mặt công nghệ và quy định. Để thành công, bước đầu tiên và quan trọng nhất chính là tìm ra một người đồng hành đáng tin cậy. Dưới đây là danh sách <strong>{post['title']}</strong> đã được đội ngũ chuyên gia của chúng tôi kiểm chứng khắt khe.</p>

<h2>Tiêu chí lựa chọn sàn Forex hàng đầu năm 2026</h2>
<p>Để lọt vào danh sách này, các sàn môi giới phải vượt qua 5 bài kiểm tra:</p>
<ul>
    <li><strong>Pháp lý:</strong> Có giấy phép chuẩn (Tier-1) như FCA, ASIC.</li>
    <li><strong>Chi phí:</strong> Spread và Commission phải cạnh tranh.</li>
    <li><strong>Tốc độ:</strong> Khớp lệnh dưới 30ms và nạp rút trong ngày.</li>
    <li><strong>Hỗ trợ:</strong> Có đội ngũ người Việt xử lý sự cố 24/5.</li>
    <li><strong>Công nghệ:</strong> Nền tảng ổn định trên cả Mobile và Desktop.</li>
</ul>

<h2>Chi tiết danh sách {post['title']}</h2>
<p>Dưới đây là các cái tên nổi bật nhất hiện nay:</p>

<h3>1. Exness - Vị thế số 1 toàn cầu</h3>
<p>Exness tiếp tục dẫn đầu danh sách nhờ sự minh bạch và công nghệ xử lý nạp rút tiền tự động. Đây là lựa chọn tối ưu cho cả người mới và chuyên gia.</p>

<h3>2. XTB - An toàn tuyệt đối cho dòng vốn lứa</h3>
<p>Niêm yết trên sàn chứng khoán, XTB mang lại sự yên tâm tuyệt đối. Nền tảng xStation độc quyền cực kỳ mượt mà.</p>

<h3>3. XM - Chương trình chăm sóc khách hàng tốt nhất</h3>
<p>Với các sự kiện offline thường xuyên tại Việt Nam và đội ngũ hỗ trợ nhiệt tình, XM tạo ra một cộng đồng trader gắn kết.</p>

<p><em>(Danh sách đang được cập nhật chi tiết từ 4-10 dựa trên điều kiện thị trường thực tế...)</em></p>

<h2>Bảng so sánh nhanh các sàn hàng đầu</h2>
<table>
<thead><tr><th>Sàn</th><th>Phí Spread</th><th>Nạp Tối Thiểu</th><th>Đòn Bẩy</th><th>Ưu Điểm Chính</th></tr></thead>
<tbody>
<tr><td>Exness</td><td>Từ 0.0 pip</td><td>$1</td><td>1:Unlimit</td><td>Nạp rút tự động</td></tr>
<tr><td>XTB</td><td>Từ 0.1 pip</td><td>$0</td><td>1:500</td><td>Uy tín tài chính</td></tr>
<tr><td>XM</td><td>Từ 0.6 pip</td><td>$5</td><td>1:1000</td><td>Thân thiện Newbie</td></tr>
</tbody>
</table>

<h2>FAQ - Những câu hỏi thường gặp</h2>
<h3>Có nên tin vào các danh sách Top 10 trên mạng?</h3>
<p>Bạn chỉ nên tin vào các danh sách có dẫn chứng số liệu thực tế và Review từ người dùng thật. Sàn Uy Tín cam kết tính khách quan 100%.</p>

<h3>Làm sao để kiểm tra một sàn có lừa đảo không?</h3>
<p>Luôn yêu cầu xem giấy phép và thử rút tiền một khoản nhỏ trước khi đầu tư lớn.</p>

<p><strong>Kết luận:</strong> Hy vọng danh sách <strong>{post['title']}</strong> sẽ giúp bạn có cái nhìn tổng quan và chọn được sàn giao dịch ưng ý nhất. Chúc bạn thịnh vượng trong năm 2026!</p>
"""
    return body.strip()

start_date = datetime(2026, 4, 18, 9, 0) # 9:00 AM
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
    if res.status_code in [201, 200]:
        print(f"Scheduled: {post['title']} at {scheduled_time}")
    else:
        print(f"Failed: {post['title']} - {res.status_code}")
        print(res.text)
