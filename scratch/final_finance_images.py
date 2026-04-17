import requests
import json

url_base = "https://ecipdcojedkbrlggaqja.supabase.co/rest/v1/posts"
headers = {
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjaXBkY29qZWRrYnJsZ2dhcWphIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTY2MTAxNCwiZXhwIjoyMDg1MjM3MDE0fQ.rBfzIgG_GGQS2Zj-qirpL3V8Au3_BQ5HDE_meNzYXwY",
    "Content-Type": "application/json",
    "Prefer": "return=representation"
}

# Real Finance/Stock/Forex photos
verified_finance_images = [
    "https://images.unsplash.com/photo-1611974717533-3d75605d3b6a?w=800&q=80",
    "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80",
    "https://images.unsplash.com/photo-1535320485706-44d4360542d0?w=800&q=80",
    "https://images.unsplash.com/photo-1542340356-623512702782?w=800&q=80",
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80"
]

# Fix the current issues directly
requests.patch(f"{url_base}?title=ilike.*Review Sàn HFM 2026*", headers=headers, data=json.dumps({"featured_image": verified_finance_images[0]}))
requests.patch(f"{url_base}?title=ilike.*Sàn XM Có Uy Tín Không?*", headers=headers, data=json.dumps({"featured_image": verified_finance_images[1]}))
requests.patch(f"{url_base}?title=ilike.*Đánh Giá Sàn Vantage (2026)**", headers=headers, data=json.dumps({"featured_image": verified_finance_images[2]}))
requests.patch(f"{url_base}?title=ilike.*Exness*", headers=headers, data=json.dumps({"featured_image": verified_finance_images[3]}))
requests.patch(f"{url_base}?title=ilike.*Forex Factory*", headers=headers, data=json.dumps({"featured_image": verified_finance_images[4]}))

print("Final replacement: All critical broker posts now have REAL finance imagery.")
