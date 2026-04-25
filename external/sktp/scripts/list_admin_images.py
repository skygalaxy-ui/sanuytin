import requests
import os
import json

supabase_url = "https://njchsjhdkcfaouqwyutc.supabase.co"
supabase_key = None

# Try to read from .env files
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
    print("Error: SUPABASE_SERVICE_ROLE_KEY not found")
    exit(1)

headers = {
    "apikey": supabase_key,
    "Authorization": f"Bearer {supabase_key}"
}

url = f"{supabase_url}/rest/v1/posts?select=title,featured_image,featured_image_alt&featured_image=not.is.null&order=created_at.desc&limit=100&apikey={supabase_key}"

res = requests.get(url, headers=headers)

if res.status_code == 200:
    data = res.json()
    print("--- LATEST IMAGES FROM ADMIN LIBRARY ---")
    for post in data:
        if post.get('featured_image'):
            print(f"Title: {post['title']}")
            print(f"Alt: {post.get('featured_image_alt', '')}")
            print(f"URL: {post['featured_image']}")
            print("----------------------------------------")
else:
    print(f"Error: {res.status_code}")
    print(res.text)
