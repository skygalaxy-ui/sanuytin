import requests
import json
import random
from datetime import datetime, timedelta

def slugify(text):
    text = text.lower()
    chars = {
        'a': 'áàảãạăắằẳẵặâấầẩẫậ', 'e': 'éèẻẽẹêếềểễệ', 'i': 'íìỉĩị', 
        'o': 'óòỏõọôốồổỗộơớờởỡợ', 'u': 'úùủũụưứừửữự', 'y': 'ýỳỷỹỵ', 'd': 'đ'
    }
    for r, s in chars.items():
        for char in s: text = text.replace(char, r)
    return text.replace(" ", "-").replace("?", "").replace(":", "").replace(",", "").replace(".", "").replace("(", "").replace(")", "")

url = "https://ecipdcojedkbrlggaqja.supabase.co/rest/v1/posts"
headers = {
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Content-Type": "application/json",
    "Prefer": "return=representation"
}

topics = [
    "Kinh nghiệm giao dịch {asset} 2026 cho người bận rộn",
    "Tại sao {broker} vẫn là lựa chọn số 1 về {feature}?",
    "So sánh phí spread {asset} giữa các sàn Forex hàng đầu",
    "Hướng dẫn phân tích {method} trong thị trường {market} 2026",
    "Bí quyết quản lý vốn khi giao dịch {asset} tài khoản nhỏ",
    "Review chi tiết hệ thống Copy Trade của các sàn uy tín",
    "Tác động của tin tức kinh tế đến tỷ giá {asset} năm 2026",
    "Cách nhận diện bẫy tâm lý khi thị trường {asset} biến động mạnh",
    "Top 5 chiến thuật Scalping hiệu quả trên sàn {broker}",
    "Hướng dẫn sử dụng công cụ {tool} để tối ưu hóa lợi nhuận giao dịch"
]

assets = ["Vàng", "EUR/USD", "GBP/JPY", "Bitcoin", "Dầu thô", "Chứng khoán Mỹ", "Chỉ số US30", "Bạc", "Ethereum"]
brokers = ["Exness", "XM", "XTB", "Vantage", "IC Markets", "Admiral Markets", "FBS"]
features = ["nạp rút tiền", "phí spread thấp", "hỗ trợ khách hàng", "nền tảng công nghệ", "đòn bẩy cao"]
methods = ["kỹ thuật", "cơ bản", "tâm lý", "dòng tiền", "Price Action", "SMC"]
markets = ["Forex", "Crypto", "Hàng hóa", "Chỉ số"]
tools = ["RSI", "MACD", "Fibonacci", "Bollinger Bands", "Ichimoku"]

images = [
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80",
    "https://images.unsplash.com/photo-1634490321752-11dc28544c8f?w=800&q=80",
    "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80",
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80"
]

def gen_mega_content(title):
    return f"""
<p>Chào mừng bạn quay lại với Sàn Uy Tín. Hôm nay chúng ta sẽ cùng mổ xẻ chủ đề cực hot: <strong>{title}</strong>. Trong bối cảnh kinh tế toàn cầu năm 2026 có nhiều biến số, việc sở hữu những kiến thức chuẩn xác là chìa khóa để bảo vệ tài sản của bạn.</p>
<img src="{random.choice(images)}" alt="{title}" style="width:100%; border-radius:12px; margin:20px 0;">
<h2>Tầm quan trọng của {title}</h2>
<p>Dù bạn là một trader mới hay đã có kinh nghiệm, việc hiểu rõ bản chất của thị trường và các công cụ bổ trợ là vô cùng quan trọng. Để bắt đầu áp dụng ngay kiến thức trong bài <strong>{title}</strong>, lời khuyên đầu tiên là hãy luôn chọn một <a href="/" style="color:#22c55e; font-weight:700;">sàn forex uy tín</a> để mở tài khoản.</p>
<h3>Các quy tắc cốt lõi bạn cần nắm vững</h3>
<p>Mọi hệ thống giao dịch thành công đều dựa trên 3 trụ cột: Phương pháp đúng, Quản lý vốn chặt chẽ và Tâm lý vững vàng. Chúng tôi đã phân tích hàng nghìn lệnh giao dịch để đúc kết ra những kinh nghiệm quý báu nhất về chủ đề này.</p>
<img src="{random.choice(images)}" alt="Kinh nghiệm đầu tư 2026" style="width:100%; border-radius:12px; margin:20px 0;">
<p><strong>Lưu ý:</strong> Trading là một nghề đòi hỏi sự kiên nhẫn. Đừng vội vàng, hãy dành thời gian để thẩm thấu kiến thức trên tài khoản Demo trước khi nạp tiền thật.</p>
<p>Hy vọng nội dung hôm nay mang lại giá trị lớn cho hành trình của bạn. Đừng quên xem qua bảng xếp hạng <a href="/" style="color:#22c55e; font-weight:700;">sàn forex uy tín</a> mới nhất của chúng tôi để nhận những ưu đãi độc quyền!</p>
"""

# START: May 25, 2026
# END: Dec 31, 2026 (approx 220 days)
# Frequency: Every 2 days => ~110 posts
start_date = datetime(2026, 5, 25, 10, 0)
count = 0
for i in range(110):
    topic_t = topics[i % len(topics)]
    title = topic_t.format(
        asset=assets[i % len(assets)], broker=brokers[i % len(brokers)],
        feature=features[i % len(features)], method=methods[i % len(methods)],
        market=markets[i % len(markets)], tool=tools[i % len(tools)]
    )
    s_time = (start_date + timedelta(days=i*2)).isoformat() + "Z"
    slug = slugify(title) + f"-{i}"
    
    payload = {
        "title": title, "slug": slug, "category": "kien-thuc-forex",
        "excerpt": f"Phân tích chuyên sâu về {title} dành cho nhà đầu tư năm 2026.",
        "content": gen_mega_content(title), "is_published": False, "scheduled_at": s_time,
        "author": "Sàn Uy Tín Team", "featured_image": images[i % 4], "featured_image_alt": title
    }
    res = requests.post(url, headers=headers, data=json.dumps(payload))
    if res.status_code == 201: count += 1

print(f"Successfully scheduled {count} mega posts until December 31, 2026.")
