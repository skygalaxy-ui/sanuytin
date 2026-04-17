import os
import json
import urllib.request
import random
from datetime import datetime, timedelta

url = os.environ.get('NEXT_PUBLIC_SUPABASE_URL')
key = os.environ.get('NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY', os.environ.get('NEXT_PUBLIC_SUPABASE_ANON_KEY', ''))

with open('.env.local') as f:
    for line in f:
        line = line.strip()
        if line.startswith('NEXT_PUBLIC_SUPABASE_URL='):
            url = line.split('=', 1)[1].strip().strip('"')
        if line.startswith('NEXT_PUBLIC_SUPABASE_ANON_KEY='):
            if not key: key = line.split('=', 1)[1].strip().strip('"')
        if line.startswith('SUPABASE_SERVICE_ROLE_KEY='):
            key = line.split('=', 1)[1].strip().strip('"')

UNSPLASH_IMAGES = [
    "1611974789855-9c2a0a7236a3", "1590283625485-1f91d3dc50eb", "1642337775960-9dc4901fdb09",
    "1518186285570-55e4ea88f486", "1605792657660-596af9009e82", "1624996379697-f01d168b1a52"
]

def get_random_image(width=1200, height=600):
    img_id = random.choice(UNSPLASH_IMAGES)
    return f"https://images.unsplash.com/photo-{img_id}?auto=format&fit=crop&w={width}&h={height}&q=80"

TOPICS = [
    {
        "title": "Bí Kíp Quản Lý Vốn 2026: Tránh Cháy Tài Khoản Khi Vàng Lên Đỉnh",
        "slug": "bi-kip-quan-ly-von-khi-vang-lap-dinh-2026",
        "category": "quan-ly-von",
        "tags": ["Quản lý vốn", "Tâm lý giao dịch", "Vàng"]
    },
    {
        "title": "Cách Đọc Mô Hình Nến Đảo Chiều Xác Suất Thắng Cao (Cập Nhật 2026)",
        "slug": "cach-doc-mo-hinh-nen-dao-chieu-chuan-xac-thang-lon-2026",
        "category": "phan-tich-ky-thuat",
        "tags": ["Nến Nhật", "Price Action", "Phân tích kỹ thuật"]
    },
    {
        "title": "Kiểm Soát Tâm Lý Giao Dịch: Làm Sao Thoát Khỏi Bẫy FOMO Đầu Tư?",
        "slug": "kiem-soat-tam-ly-giao-dich-tranh-fomo-2026",
        "category": "kinh-nghiem",
        "tags": ["Tâm lý giao dịch", "FOMO", "Kinh nghiệm trade"]
    },
    {
        "title": "Chiến Lược Đánh Scalping Nâng Cao: Tối Ưu Lợi Nhuận Thời Điểm Ra Tin",
        "slug": "chien-luoc-danh-scalping-nang-cao-toi-uu-thoi-diem-ra-tin",
        "category": "kien-thuc-nguoi-moi",
        "tags": ["Scalping", "Kinh nghiệm trade", "Tin tức"]
    }
]

def generate_local_content(topic):
    keyword = topic["tags"][0]
    content = f"""# {topic['title']}
Thị trường tài chính năm 2026 đang chứng kiến những pha xoay chiều chóng mặt...
"""
    return content

print("🚀 Bắt đầu Push...")

for i, topic in enumerate(TOPICS):
    content = generate_local_content(topic)
    excerpt = "Thị trường tài chính năm 2026..."
    
    schedule_date = datetime.utcnow()
    
    # In order to debug the 400 error, I'm going to just insert the basic fields that are known to be in the schema
    # from previous interactions I know posts has id, title, slug, content, excerpt, category, tags(jsonb?),
    # meta_title, meta_description, is_published, published_at, scheduled_at, featured_image
    
    post_data = {
        "title": topic["title"][:100],
        "slug": topic["slug"][:60],
        "category": topic["category"],
        "tags": topic["tags"],
        "excerpt": excerpt,
        "content": content,
        "featured_image": get_random_image(1200, 800),
        "featured_image_alt": topic["title"][:60],
        "meta_title": topic["title"][:60],
        "meta_description": excerpt[:160],
        "is_published": True,
        "scheduled_at": schedule_date.isoformat() + "Z"
    }
    
    req = urllib.request.Request(f"{url}/rest/v1/posts?on_conflict=slug", method="POST", data=json.dumps([post_data]).encode('utf-8'))
    req.add_header("apikey", key)
    req.add_header("Authorization", f"Bearer {key}")
    req.add_header("Content-Type", "application/json")
    req.add_header("Prefer", "resolution=merge-duplicates")

    try:
        resp = urllib.request.urlopen(req)
        print(f"✅ Success")
    except Exception as e:
        import urllib.error
        if isinstance(e, urllib.error.HTTPError):
            print(f"❌ Error HTTP {e.code}: {e.read().decode()}")
        else:
            print(f"❌ Exception: {e}")
