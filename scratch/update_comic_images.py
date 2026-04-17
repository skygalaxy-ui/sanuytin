import requests
import json

url_base = "https://ecipdcojedkbrlggaqja.supabase.co/rest/v1/posts"
headers = {
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Content-Type": "application/json",
    "Prefer": "return=representation"
}

# High-quality Illustration IDs that look like Cartoon/Comic
featured_id = "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80"
legal_id = "https://images.unsplash.com/photo-1634490321752-11dc28544c8f?w=800&q=80"
tech_id = "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80"
success_id = "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"

slugs = [
    "top-10-san-forex-uy-tin-viet-nam-2026",
    "top-10-san-forex-spread-thap-2026",
    "top-10-san-forex-nap-rut-nhanh-2026-v2",
    "top-10-san-trading-vang-xau-usd-uy-tin-2026-v2",
    "top-10-san-forex-bonus-khong-ky-quy-2026-v2",
    "huong-dan-su-dung-exness-2026",
    "huong-dan-su-dung-san-xm-2026",
    "huong-dan-giao-dich-san-xtb-2026"
]

for slug in slugs:
    fetch_url = f"{url_base}?slug=eq.{slug}&select=title,content"
    res_fetch = requests.get(fetch_url, headers=headers)
    if res_fetch.status_code == 200 and len(res_fetch.json()) > 0:
        post = res_fetch.json()[0]
        title = post['title']
        content = post['content']
        
        # Inject images into content at logical points if they aren't there
        # This is a simplified replacement for demo purposes
        # We replace the placeholders or add them
        new_content = content
        if "img src" not in content: # Only if images aren't present
             new_content = f"""
{content.split('</h2>')[0]}</h2>
<img src="{legal_id}" alt="Pháp lý và Bảo mật" style="width:100%; border-radius:15px; margin: 25px 0;">
{content.split('</h2>')[1]}</h2>
<img src="{tech_id}" alt="Công nghệ giao dịch" style="width:100%; border-radius:15px; margin: 25px 0;">
{content.split('</h2>', 2)[2] if len(content.split('</h2>')) > 2 else ""}
<img src="{success_id}" alt="Thành công rực rỡ" style="width:100%; border-radius:15px; margin: 25px 0;">
"""
        
        update_url = f"{url_base}?slug=eq.{slug}"
        payload = {
            "featured_image": featured_id,
            "featured_image_alt": f"Comic style {title}",
            "content": new_content.strip()
        }
        res_update = requests.patch(update_url, headers=headers, data=json.dumps(payload))
        print(f"Comic Images Updated: {title} - Status: {res_update.status_code}")

