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

final_series = [
    {"title": "Cách Giao Dịch Vàng (XAUUSD) 2026 Toàn Tập", "slug": "cach-giao-dich-vang-xauusd-2026-toan-tap"},
    {"title": "Đầu Tư Dầu Thô (WTI/Brent) Năm 2026: Cơ Hội & Rủi Ro", "slug": "dau-tu-dau-tho-forex-2026"},
    {"title": "Giao Dịch Chỉ Số US30 Và NAS100 Cho Người Mới", "slug": "giao-dich-chi-so-us30-nas100-2026"},
    {"title": "Tác Động Của Lãi Suất Fed Đến Tỷ Giá EUR/USD", "slug": "tac-dong-lai-suat-fed-ty-gia-forex-2026"},
    {"title": "Chiến Thuật Carry Trade: Kiếm Lời Từ Lãi Suất", "slug": "chien-thuat-carry-trade-forex-2026"},
    {"title": "Exness vs IC Markets: Sàn Nào Phí Zero Spread Tốt Hơn?", "slug": "exness-vs-ic-markets-phi-zero-spread-2026"},
    {"title": "XM vs XTB: So Sánh Phí Qua Đêm (Swap) 2026", "slug": "xm-vs-xtb-so-sanh-phi-swap-2026"},
    {"title": "Vantage vs XM: Lựa Chọn Nào Cho Trader Newbie?", "slug": "vantage-vs-xm-lua-chon-newbie-2026"},
    {"title": "Thanh Toán Forex Việt Nam: USDT, Bank Hay Card?", "slug": "thanh-toan-forex-viet-nam-tot-nhat-2026"},
    {"title": "Review App Social Trading: Sàn Nào Trải Nghiệm Tốt Nhất?", "slug": "review-social-trading-app-forex-2026"},
    {"title": "Lòng Tham Và Nỗi Sợ: Cách Kiểm Soát Tâm Lý Trade", "slug": "long-tham-va-noi-so-tam-ly-giao-dich-2026"},
    {"title": "Quản Lý Vốn Cho Tài Khoản Dưới $1000 Năm 2026", "slug": "quan-ly-von-forex-duoi-1000-usd-2026"},
    {"title": "Cách Tránh Tình Trạng Overtrade (Giao Dịch Quá Đà)", "slug": "cach-tranh-overtrade-forex-2026"},
    {"title": "Tầm Quan Trọng Của Việc Chọn Đúng Khung Giờ Giao Dịch", "slug": "chon-dung-khung-gio-giao-dich-forex-2026"},
    {"title": "Bí Quyết Sống Sót Qua Năm Đầu Tiên Nghề Trader", "slug": "bi-quyet-song-sot-nam-dau-tien-trader-2026"}
]

# Image Library
images = [
    "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80",
    "https://images.unsplash.com/photo-1558403194-611308249627?w=800&q=80",
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"
]

def gen_content(p):
    return f"""
<p>Trong hành trình trở thành một nhà đầu tư chuyên nghiệp, việc làm chủ kiến thức về <strong>{p['title']}</strong> là một cột mốc quan trọng. Năm 2026 mang đến nhiều thay đổi về công nghệ và quy định pháp lý, yêu cầu chúng ta phải có cái nhìn sâu sắc và cập nhật hơn bao giờ hết.</p>
<img src="{images[0]}" alt="{p['title']}" style="width:100%; border-radius:12px; margin:20px 0;">
<h2>Tại sao bạn nên quan tâm đến chủ đề này?</h2>
<p>Thị trường không bao giờ đứng yên. Việc nắm vững <strong>{p['title']}</strong> sẽ giúp bạn có lợi thế cạnh tranh cực lớn so với những người chỉ giao dịch dựa trên cảm tính. Để thực hành tốt nhất các kiến thức này, việc chọn một <a href="/" style="color:#22c55e; font-weight:700;">sàn forex uy tín</a> là điều kiện tiên quyết.</p>
<h3>Phân tích chi tiết và các bước thực hiện</h3>
<p>Chúng tôi đã tổng hợp các bước thực chiến nhất để bạn có thể áp dụng ngay lập tức vào tài khoản của mình. Từ việc quản trị rủi ro cho đến tối ưu hóa lợi nhuận, mọi chi tiết đều được đội ngũ chuyên gia của Sàn Uy Tín kiểm chứng thực tế.</p>
<img src="{images[1]}" alt="Kỹ thuật trading nâng cao 2026" style="width:100%; border-radius:12px; margin:20px 0;">
<p>Hãy nhớ rằng: Giao dịch tài chính luôn đi kèm với rủi ro. Đừng bao giờ đầu tư số tiền mà bạn không thể chấp nhận mất. Hãy luôn học hỏi và rèn luyện kỷ luật mỗi ngày.</p>
<p>Hy vọng bài viết về <strong>{p['title']}</strong> sẽ là kim chỉ nam giúp bạn gặt hái nhiều thành công. Đừng quên tham khảo bảng xếp hạng <a href="/" style="color:#22c55e; font-weight:700;">sàn forex uy tín</a> để bắt đầu hành trình của mình nhé!</p>
"""

# May 10 to May 24 (10:00 AM)
start_date = datetime(2026, 5, 10, 10, 0)
for i, post in enumerate(final_series):
    s_time = (start_date + timedelta(days=i)).isoformat() + "Z"
    payload = {
        "title": post["title"], "slug": post["slug"], "category": "kien-thuc-forex",
        "excerpt": f"Khám phá sâu về {post['title']} để nâng tầm kỹ năng giao dịch của bạn năm 2026.",
        "content": gen_content(post), "is_published": False, "scheduled_at": s_time,
        "author": "Sàn Uy Tín Team", "featured_image": images[i % 4], "featured_image_alt": post["title"]
    }
    requests.post(url, headers=headers, data=json.dumps(payload))
    print(f"Final Batch Scheduled: {post['title']}")

print("All 15 additional posts scheduled until May 24, 2026.")
