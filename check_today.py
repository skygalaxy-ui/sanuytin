import os
import json
import urllib.request
from datetime import datetime, timedelta

url = os.environ.get('NEXT_PUBLIC_SUPABASE_URL')
key = os.environ.get('NEXT_PUBLIC_SUPABASE_ANON_KEY')

with open('.env.local') as f:
    for line in f:
        if line.startswith('NEXT_PUBLIC_SUPABASE_URL='):
            url = line.split('=')[1].strip().strip('"')
        if line.startswith('NEXT_PUBLIC_SUPABASE_ANON_KEY='):
            key = line.split('=')[1].strip().strip('"')

# Fetch last 5 created posts
req = urllib.request.Request(f"{url}/rest/v1/posts?select=id,title,scheduled_at,is_published,created_at&order=created_at.desc&limit=5")
req.add_header("apikey", key)
req.add_header("Authorization", f"Bearer {key}")

resp = urllib.request.urlopen(req)
data = json.loads(resp.read().decode('utf-8'))
print("=== CÁC BÀI VIẾT MỚI TẠO ===")
for row in data:
    print(f"[{row['id']}] {row['title']} - Tạo lúc: {row['created_at']} - Đăng: {row['is_published']}")
