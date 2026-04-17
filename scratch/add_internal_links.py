import requests
import json
import re

url_base = "https://ecipdcojedkbrlggaqja.supabase.co/rest/v1/posts"
headers = {
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Content-Type": "application/json",
    "Prefer": "return=representation"
}

anchor_block = """
<div style="margin-top: 30px; padding: 20px; background-color: rgba(34, 197, 94, 0.05); border-left: 4px solid #22c55e; border-radius: 0 12px 12px 0;">
    <p style="margin: 0; font-size: 16px; font-weight: 500;">
        ⚡ <strong>Gợi ý:</strong> Bạn đang tìm kiếm môi trường giao dịch an toàn? Xem ngay bảng xếp hạng 
        <a href="/" style="color: #22c55e; font-weight: 700; text-decoration: underline;">sàn forex uy tín</a> 
        mới nhất năm 2026 đã được đội ngũ chuyên gia của chúng tôi kiểm chứng.
    </p>
</div>
"""

# Fetch ALL posts
fetch_url = f"{url_base}?select=id,title,content"
res_fetch = requests.get(fetch_url, headers=headers)
if res_fetch.status_code == 200:
    posts = res_fetch.json()
    count = 0
    for p in posts:
        content = p['content']
        # Check if already has the link to avoid duplication
        if 'href="/"' in content or "sàn forex uy tín" in content.lower() and 'href=' in content:
            # We skip if it already looks like it has been linked or has our anchor
            # But the user wants EVERY article to have it clearly
            pass
        
        # Append the anchor block at the end of the content before any related articles block or just at the end
        # We look for common ending tags
        new_content = content
        if '<div class="author-box"' in content:
            new_content = content.replace('<div class="author-box"', f"{anchor_block}\n<div class=\"author-box\"")
        elif "<h2>Bài Viết Liên Quan" in content:
             new_content = content.replace('<h2>Bài Viết Liên Quan', f"{anchor_block}\n<h2>Bài Viết Liên Quan")
        else:
            new_content = f"{content}\n{anchor_block}"
        
        update_url = f"{url_base}?id=eq.{p['id']}"
        payload = {"content": new_content}
        requests.patch(update_url, headers=headers, data=json.dumps(payload))
        count += 1
    print(f"Successfully updated {count} posts with internal links to Homepage.")
