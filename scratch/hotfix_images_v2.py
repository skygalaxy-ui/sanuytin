import requests
import json

url_base = "https://ecipdcojedkbrlggaqja.supabase.co/rest/v1/posts"
headers = {
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Content-Type": "application/json",
    "Prefer": "return=representation"
}

# 1. Fix HFM (Broken)
payload_hfm = {"featured_image": "https://images.unsplash.com/photo-1634490321752-11dc28544c8f?w=800&q=80"}
requests.patch(f"{url_base}?title=ilike.*Review Sàn HFM 2026*", headers=headers, data=json.dumps(payload_hfm))

# 2. Fix XM (Programming Image)
payload_xm = {"featured_image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80"}
requests.patch(f"{url_base}?title=ilike.*Sàn XM Có Uy Tín Không?*", headers=headers, data=json.dumps(payload_xm))

# 3. Check for any other "coding" images and replace with generic finance
bad_images = ["photo-1633356122544", "photo-1550751827"] # Tech/React/Code
for bad in bad_images:
    payload_fix = {"featured_image": "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80"}
    requests.patch(f"{url_base}?featured_image.ilike.*{bad}*", headers=headers, data=json.dumps(payload_fix))

print("Hotfix completed: HFM image restored, XM programming image replaced.")
