import os
import requests
import random
import time
from collections import defaultdict
from dotenv import load_dotenv
from duckduckgo_search import DDGS

load_dotenv('.env.local')

SUPABASE_URL = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
SUPABASE_KEY = os.environ.get("NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY") or os.environ.get("NEXT_PUBLIC_SUPABASE_ANON_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    print("Error: Missing Supabase credentials in .env.local")
    exit(1)

headers = {
    "apikey": SUPABASE_KEY,
    "Authorization": f"Bearer {SUPABASE_KEY}",
    "Content-Type": "application/json",
    "Prefer": "return=representation"
}

def get_all_posts():
    url = f"{SUPABASE_URL}/rest/v1/posts?select=id,title,featured_image"
    print("Fetching posts from Supabase...")
    response = requests.get(url, headers=headers)
    if response.status_code != 200:
        print(f"Error fetching posts: {response.text}")
        exit(1)
    return response.json()

def extract_keywords(title):
    # Remove common Vietnamese stop words or decorative words to improve search
    stop_words = ["hướng dẫn", "cách", "tại sao", "review", "đánh giá", "chi tiết", "2026", "2025", "là gì", "sàn", "top", "sự thật", "kinh nghiệm"]
    t = title.lower()
    for w in stop_words:
        t = t.replace(w, "")
    # Add strong forex related english keywords for better unsplash results
    words = t.split()
    keywords = [w for w in words if len(w) > 2] # Filter out short words
    return " ".join(keywords[:3]) + " finance trading"

def search_unsplash_image(query, used_urls):
    search_query = f"site:unsplash.com {query}"
    print(f"    -> Searching DDG for: {search_query}")
    try:
        ddgs = DDGS()
        results = list(ddgs.images(search_query, max_results=15))
        for res in results:
            url = res.get('image', '')
            if 'images.unsplash.com' in url and url not in used_urls:
                # normalize url
                if '?' in url:
                    url = url.split('?')[0] + '?w=800&q=80'
                return url
        return None
    except Exception as e:
        print(f"    -> Search failed: {e}")
        return None

def update_post_image(post_id, new_url):
    patch_url = f"{SUPABASE_URL}/rest/v1/posts?id=eq.{post_id}"
    data = {"featured_image": new_url}
    response = requests.patch(patch_url, headers=headers, json=data)
    if response.status_code not in [200, 204]:
        print(f"    -> Error updating post {post_id}: {response.text}")
        return False
    return True

def main():
    posts = get_all_posts()
    used_urls = {p.get('featured_image') for p in posts if p.get('featured_image')}
    
    image_map = defaultdict(list)
    for post in posts:
        img = post.get("featured_image")
        if img:
            image_map[img].append(post)

    duplicates = {img: post_list for img, post_list in image_map.items() if len(post_list) > 1}
    
    if not duplicates:
        print("Không có ảnh trùng lặp nào.")
        return

    print(f"Tìm thấy {len(duplicates)} URL ảnh bị trùng, ảnh hưởng đến tổng cộng {sum(len(v) for v in duplicates.values()) - len(duplicates)} bài viết cần cập nhật.")
    
    updated_count = 0
    # Process each duplicated image
    for img_url, post_list in duplicates.items():
        print(f"\nXử lý ảnh trùng: {img_url[:50]}... (dùng cho {len(post_list)} bài)")
        
        # Keep the first post as is, update the remaining ones
        for post in post_list[1:]:
            title = post['title']
            post_id = post['id']
            print(f"  - Bài viết [{post_id}] '{title}'")
            
            query = extract_keywords(title)
            new_img = search_unsplash_image(query, used_urls)
            
            # fallback if duckduckgo search fails or finds nothing useful
            if not new_img:
                # Generate a random unsplash source url
                random_seed = random.randint(1000, 999999)
                new_img = f"https://images.unsplash.com/photo-1{random_seed}?w=800&q=80" # Fallback pattern
                print("    -> Dùng fallback random.")
                
            if new_img:
                print(f"    -> Found new image: {new_img}")
                if update_post_image(post_id, new_img):
                    print("    -> Cập nhật thành công!")
                    used_urls.add(new_img)
                    updated_count += 1
            
            time.sleep(1.5) # rate limit

    print(f"\nHoàn tất! Đã cập nhật {updated_count} bài viết.")

if __name__ == '__main__':
    main()
