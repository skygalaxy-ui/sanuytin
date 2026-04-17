import requests
import json

url_base = "https://ecipdcojedkbrlggaqja.supabase.co/rest/v1/posts"
headers = {
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Content-Type": "application/json",
    "Prefer": "return=representation"
}

# 5 High-quality Illustration/Graphic images that look like Comic/Flat style
comic_style_images = [
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80", # Blockchain/Graph Illustration
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80", # Purple Wave Illustration
    "https://images.unsplash.com/photo-1634490321752-11dc28544c8f?w=800&q=80", # Legal/Scale Illustration
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80", # People/Social Illustration
    "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80"  # Abstract Shapes Illustration
]

titles = [
    "Đánh Giá Sàn Vantage (2026)",
    "Review Sàn Exness 2026",
    "Review Sàn HFM 2026",
    "Sàn XM Có Uy Tín Không?",
    "Review Sàn FXTM 2026"
]

for i, title in enumerate(titles):
    f_url = f"{url_base}?title=ilike.*{title}*&select=id"
    res = requests.get(f_url, headers=headers).json()
    if res:
        post_id = res[0]['id']
        payload = {"featured_image": comic_style_images[i]}
        requests.patch(f"{url_base}?id=eq.{post_id}", headers=headers, data=json.dumps(payload))
        print(f"Comic Style Applied: {title}")

