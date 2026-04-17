import requests
import json
import os

url = "https://ecipdcojedkbrlggaqja.supabase.co/rest/v1/posts"
headers = {
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Content-Type": "application/json",
    "Prefer": "return=representation"
}

from datetime import datetime
now = datetime.utcnow().isoformat() + "Z"

content_html = """
<p>Kinh doanh ngoại hối (Forex) trong năm 2026 đòi hỏi nhà đầu tư phải cực kỳ cẩn trọng trong việc lựa chọn nền tảng giao dịch. Với sự thay đổi không ngừng của các quy định pháp lý quốc tế và sự xuất hiện của nhiều công nghệ mới, câu hỏi <strong>"sàn forex uy tín nào 2026"</strong> là mối quan tâm hàng đầu. Bài viết này sẽ giúp bạn lọc ra những cái tên xứng đáng nhất để gửi gắm dòng vốn.</p>

<h2>Thế nào là một sàn Forex uy tín trong năm 2026?</h2>
<p>Không còn đơn thuần là chọn sàn có spread thấp, một sàn Forex uy tín năm 2026 cần đáp ứng các tiêu chuẩn khắt khe hơn:</p>
<ul>
    <li><strong>Tiêu chuẩn pháp lý tối thượng:</strong> Phải sở hữu giấy phép từ các cơ quan quản lý hàng đầu thế giới như FCA (Anh), ASIC (Úc) hoặc CySEC (Síp). Các sàn hoạt động dưới mô hình ECN/STP minh bạch sẽ được ưu tiên.</li>
    <li><strong>Công nghệ giao dịch đột phá:</strong> Sự tích hợp của AI giúp phân tích xu hướng và các nền tảng copy trading chuyên nghiệp trở thành tiêu chuẩn mới.</li>
    <li><strong>Nạp rút siêu tốc:</strong> Hỗ trợ các cổng thanh toán nội địa Việt Nam và các loại tiền điện tử ổn định (Stablecoin) là một lợi thế lớn.</li>
</ul>

<h2>Danh sách các sàn Forex uy tín nhất 2026</h2>

<h3>1. Exness - Sàn Forex có khối lượng giao dịch lớn nhất</h3>
<p>Vẫn giữ vững ngôi vương, Exness nổi tiếng với cơ chế nạp rút tiền tức thì (Instant Withdrawal), ngay cả trong ngày nghỉ. Spread cực thấp và đòn bẩy không giới hạn vẫn là điểm thu hút chính cho các nhà đầu tư tại Việt Nam.</p>

<h3>2. XM - Nền tảng thân thiện cho người mới bắt đầu</h3>
<p>XM liên tục cải tiến hệ thống đào tạo và các chương trình khuyến mãi không ký quỹ (No deposit bonus). Với đội ngũ hỗ trợ nhiệt tình, XM là lựa chọn an toàn cho những ai vừa đặt chân vào thị trường.</p>

<h3>3. XTB - Chốt lời với phí giao dịch tiệm cận 0</h3>
<p>Là sàn môi giới niêm yết trên sàn chứng khoán, XTB mang lại độ tin cậy tuyệt đối về mặt tài chính. Phí giao dịch (spread) cạnh tranh và nền tảng xStation 5 độc quyền giúp tối ưu hóa hiệu suất giao dịch.</p>

<h3>4. IC Markets - Lựa chọn số 1 cho Scalping</h3>
<p>Nếu bạn là một trader theo trường phái lướt sóng, IC Markets với máy chủ đặt gần các trung tâm tài chính lớn sẽ đảm bảo tốc độ khớp lệnh nhanh nhất, giảm thiểu tối đa tình trạng trượt giá (Slippage).</p>

<h2>Kinh nghiệm chọn sàn Forex cho nhà đầu tư Việt Nam</h2>
<p>Để trả lời trọn vẹn câu hỏi "sàn forex uy tín nào 2026", nhà đầu tư cần lưu ý:</p>
<ol>
    <li>Thực hiện nạp và rút một khoản tiền nhỏ để kiểm tra tốc độ xử lý của sàn.</li>
    <li>Liên hệ trực tiếp với đội ngũ hỗ trợ bằng tiếng Việt để xem họ có phản hồi nhanh chóng và chuyên nghiệp hay không.</li>
    <li>Tham gia các cộng đồng trader uy tín để xem các đánh giá khách quan nhất từ những người đi trước.</li>
</ol>

<h2>FAQ - Giải đáp thắc mắc về sàn Forex 2026</h2>
<p><strong>Q1: Sàn Forex có lừa đảo không?</strong><br>Thị trường Forex không lừa đảo, nhưng có những cá nhân/tổ chức giả danh sàn uy tín để chiếm đoạt tiền. Hãy luôn kiểm tra giấy phép trước khi nạp tiền.</p>
<p><strong>Q2: Vốn ít có bắt đầu chơi Forex được không?</strong><br>Hoàn toàn được. Nhiều sàn hiện nay cho phép mở tài khoản Cent hoặc tài khoản Micro với số vốn chỉ từ 10-50 USD.</p>

<p><strong>Kết luận:</strong> Việc chọn đúng sàn Forex chiếm hơn 50% thành công của bạn trên hành trình giao dịch. Hãy cân nhắc kỹ dựa trên nhu cầu cá nhân và danh sách uy tín trên. Chúc bạn một năm 2026 giao dịch thành công và thuận lợi!</p>

<h2>So sánh nhanh Top sàn Forex uy tín 2026</h2>
<table>
<thead><tr><th>Sàn</th><th>Giấy phép</th><th>Spread EUR/USD</th><th>Rút tiền</th><th>Nạp tối thiểu</th></tr></thead>
<tbody>
<tr><td>Exness</td><td>FCA, CySEC</td><td>Từ 0.0 pip</td><td>Tức thì</td><td>$1</td></tr>
<tr><td>XM</td><td>CySEC, ASIC</td><td>Từ 0.1 pip</td><td>24h</td><td>$5</td></tr>
<tr><td>IC Markets</td><td>ASIC, CySEC</td><td>Từ 0.0 pip</td><td>1-3 ngày</td><td>$200</td></tr>
</tbody>
</table>
"""

payload = {
    "title": "Sàn Forex Uy Tín Nào Năm 2026? Top 10 Sàn Giao Dịch Tốt Nhất",
    "slug": "san-forex-uy-tin-nao-2026",
    "excerpt": "Khám phá danh sách các sàn Forex uy tín nhất năm 2026. Đánh giá chi tiết về phí giao dịch, độ an toàn và hỗ trợ khách hàng dành cho nhà đầu tư Việt Nam.",
    "content": content_html.strip(),
    "category": "kien-thuc-forex",
    "meta_title": "Sàn Forex Uy Tín Nào Năm 2026? Top 10 Sàn Giao Dịch Tốt Nhất",
    "meta_description": "Tìm hiểu sàn forex uy tín nào 2026 qua bài viết đánh giá chi tiết của chuyên gia. Top 10 sàn Forex tốt nhất hiện nay cho người mới và nhà đầu tư chuyên nghiệp.",
    "is_published": True,
    "tags": ["forex", "sàn uy tín", "đầu tư 2026"],
    "author": "Sàn Uy Tín Team",
    "featured_image": "https://images.unsplash.com/photo-1611974714851-48206138d731?w=1200&q=80",
    "featured_image_alt": "Sàn Forex uy tín 2026",
    "published_at": now
}

try:
    response = requests.post(url, headers=headers, data=json.dumps(payload))
    if response.status_code in [201, 200]:
        print("Successfully added post!")
        print(json.dumps(response.json(), indent=2))
    else:
        print(f"Failed to add post. Status code: {response.status_code}")
        print(response.text)
except Exception as e:
    print(f"An error occurred: {e}")
