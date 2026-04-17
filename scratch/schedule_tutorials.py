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

tutorials = [
    {
        "title": "Hướng Dẫn Sử Dụng Exness 2026 Toàn Tập",
        "slug": "huong-dan-su-dung-exness-2026",
        "excerpt": "Cầm tay chỉ việc cách đăng ký, xác minh tài khoản và nạp rút tiền tức thì tại sàn Exness - Sàn Forex số 1 Việt Nam.",
        "category": "huong-dan",
        "meta_title": "Hướng Dẫn Sử Dụng Exness 2026 chi tiết nhất",
        "meta_description": "Học cách sử dụng sàn Exness từ A-Z. Hướng dẫn mở tài khoản, nạp rút tiền và giao dịch trên nền tảng Exness Terminal 2026.",
        "tags": ["exness", "hướng dẫn", "nạp rút"],
        "broker": "Exness"
    },
    {
        "title": "Hướng Dẫn Sử Dụng Sàn XM & Nhận Bonus 2026",
        "slug": "huong-dan-su-dung-san-xm-2026",
        "excerpt": "Hướng dẫn nhận 30$ bonus không ký quỹ và cách giao dịch trên nền tảng XM cho người mới bắt đầu.",
        "category": "huong-dan",
        "meta_title": "Hướng Dẫn Sử Dụng Sàn XM 2026 mới nhất",
        "meta_description": "Cách đăng ký sàn XM và nhận các ưu đãi mới nhất 2026. Hướng dẫn sử dụng nền tảng giao dịch XM chi tiết.",
        "tags": ["xm", "bonus", "hướng dẫn"],
        "broker": "XM"
    },
    {
        "title": "Hướng Dẫn Giao Dịch Sàn XTB Năm 2026",
        "slug": "huong-dan-giao-dich-san-xtb-2026",
        "excerpt": "Tối ưu hóa lợi nhuận với nền tảng xStation 5 của XTB. Hướng dẫn chi tiết cho nhà đầu tư Việt Nam.",
        "category": "huong-dan",
        "meta_title": "Hướng Dẫn Giao Dịch Sàn XTB 2026 từ A-Z",
        "meta_description": "Khám phá cách giao dịch tại sàn XTB 2026. Hướng dẫn sử dụng xStation 5, nạp rút tiền và quản lý lệnh hiệu quả.",
        "tags": ["xtb", "xStation 5", "trading"],
        "broker": "XTB"
    }
]

def generate_tutorial_content(tutorial):
    body = f"""
<p>Bạn đã chọn được sàn giao dịch ưng ý? Bước tiếp theo là làm chủ nền tảng để bắt đầu kiếm lợi nhuận. Bài viết này sẽ hướng dẫn bạn cách <strong>sử dụng sàn {tutorial['broker']}</strong> một cách chuyên nghiệp và an toàn nhất trong năm 2026.</p>

<h2>Bước 1: Đăng ký và Xác minh tài khoản (KYC)</h2>
<p>Việc xác minh danh tính là bắt buộc để đảm bảo an toàn cho dòng vốn của bạn. Hãy chuẩn bị CCCD hoặc Hộ chiếu:</p>
<ol>
    <li>Truy cập trang chủ chính thức của {tutorial['broker']}.</li>
    <li>Điền thông tin cá nhân chính xác theo giấy tờ.</li>
    <li>Tải ảnh mặt trước và mặt sau của giấy tờ tùy thân.</li>
    <li>Chờ hệ thống phê duyệt (thường mất từ 30 phút đến 24 giờ).</li>
</ol>

<h2>Bước 2: Nạp tiền vào tài khoản giao dịch</h2>
<p>Sàn {tutorial['broker']} hỗ trợ rất nhiều phương thức nạp tiền linh hoạt cho trader Việt:</p>
<ul>
    <li><strong>Internet Banking:</strong> Phương thức nhanh nhất và không mất phí.</li>
    <li><strong>Ví điện tử (Momo, ZaloPay):</strong> Tiện lợi trên Mobile.</li>
    <li><strong>Chuyển khoản nội bộ.</strong></li>
</ul>

<h2>Bước 3: Làm quen với nền tảng giao dịch</h2>
<p>Cho dù bạn dùng App di động hay phần mềm máy tính, hãy lưu ý các tác vụ sau:</p>
<ol>
    <li>Cách đặt lệnh Mua (Buy) và Bán (Sell).</li>
    <li>Cách thiết lập Chốt lời (Take Profit) và Cắt lỗ (Stop Loss).</li>
    <li>Cách theo dõi biểu đồ và thêm các chỉ báo kỹ thuật.</li>
</ol>

<h2>Bước 4: Hướng dẫn rút tiền an toàn</h2>
<p>Quy tắc quan trọng nhất: Bạn nạp tiền bằng phương thức nào thì nên rút tiền bằng phương thức đó để tránh gặp lỗi "rửa tiền" theo quy định quốc tế.</p>

<p><strong>Kết luận:</strong> Làm quen với sàn {tutorial['broker']} không khó nếu bạn thực hiện từng bước một. Nếu gặp bất kỳ khó khăn nào, đừng ngần ngại liên hệ với đội ngũ Support tiếng Việt của sàn để được hỗ trợ nhanh nhất.</p>
"""
    return body.strip()

# Scheduling logic (start from 19th with 2-day gaps to alternate with Top 10)
start_date = datetime(2026, 4, 19, 10, 0) # 10:00 AM
for i, tut in enumerate(tutorials):
    scheduled_time = (start_date + timedelta(days=i*2)).isoformat() + "Z"
    payload = {
        "title": tut["title"],
        "slug": tut["slug"],
        "excerpt": tut["excerpt"],
        "content": generate_tutorial_content(tut),
        "category": tut["category"],
        "meta_title": tut["meta_title"],
        "meta_description": tut["meta_description"],
        "is_published": False,
        "scheduled_at": scheduled_time,
        "tags": tut["tags"],
        "author": "Sàn Uy Tín Team",
        "featured_image": "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
        "featured_image_alt": tut["title"]
    }
    res = requests.post(url, headers=headers, data=json.dumps(payload))
    print(f"{tut['title']}: {res.status_code}")
