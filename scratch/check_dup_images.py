import os
import requests
from collections import defaultdict
from dotenv import load_dotenv

# Load env variables from .env.local
load_dotenv('.env.local')

SUPABASE_URL = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
SUPABASE_KEY = os.environ.get("NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY") or os.environ.get("NEXT_PUBLIC_SUPABASE_ANON_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    print("Error: Missing Supabase credentials in .env.local")
    exit(1)

# Fetch all posts with a featured_image
url = f"{SUPABASE_URL}/rest/v1/posts?select=id,title,featured_image"
headers = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}"
}

print("Fetching posts from Supabase...")
response = requests.get(url, headers=headers)

if response.status_code != 200:
    print(f"Error fetching posts: {response.text}")
    exit(1)

posts = response.json()
print(f"Found {len(posts)} total posts.")

# Group posts by their featured_image
image_map = defaultdict(list)
for post in posts:
    img = post.get("featured_image")
    if img:
        # Normalize URL to catch duplicates with identical paths but different query params if necessary (optional)
        # Using exact string match for now
        image_map[img].append(post)

# Find duplicates
duplicates = {img: post_list for img, post_list in image_map.items() if len(post_list) > 1}

print("\n" + "="*50)
print(f"BÁO CÁO THỐNG KÊ ẢNH TRÙNG LẶP")
print("="*50)

if not duplicates:
    print("Tuyệt vời! Không có ảnh đại diện nào bị trùng lặp giữa các bài viết.")
else:
    print(f"CẢNH BÁO: Phát hiện {len(duplicates)} ảnh đang được dùng chung cho nhiều bài viết!\n")
    
    for i, (img_url, dup_posts) in enumerate(duplicates.items(), 1):
        print(f"🔥 Ảnh trùng lặp thứ #{i}:")
        print(f"URL: {img_url}")
        print(f"Số lượng sử dụng: {len(dup_posts)} bài viết")
        print("Các bài viết đang dùng:")
        for p in dup_posts:
            print(f"  - [{p['id']}] {p['title']}")
        print("-" * 30)
