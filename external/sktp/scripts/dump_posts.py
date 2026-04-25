import requests
import os
import json

supabase_url = "https://njchsjhdkcfaouqwyutc.supabase.co"
supabase_key = None

for env_file in [".env", ".env.local"]:
    try:
        with open(env_file, "r") as f:
            for line in f:
                if line.startswith("SUPABASE_SERVICE_ROLE_KEY="):
                    supabase_key = line.split("=", 1)[1].strip()
                    break
        if supabase_key:
            break
    except:
        pass

if not supabase_key:
    exit(1)

headers = {
    "apikey": supabase_key,
    "Authorization": f"Bearer {supabase_key}"
}

# Try to list from media buckets or a specific table if it exists.
# Usually media is in a 'storage' bucket, but let's check if there's a 'media' or 'files' table.
# Actually, the user might mean the images in the site_settings 'page_images' too.

url = f"{supabase_url}/rest/v1/posts?select=title,featured_image,featured_image_alt&order=created_at.desc&limit=100&apikey={supabase_key}"
res = requests.get(url, headers=headers)
if res.status_code == 200:
    data = res.json()
    print(json.dumps(data, indent=2, ensure_ascii=False))
