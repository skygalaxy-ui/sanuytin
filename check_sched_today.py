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

# Fetch posts scheduled for today
req = urllib.request.Request(f"{url}/rest/v1/posts?select=id,title,scheduled_at,is_published&scheduled_at=gte.2026-04-17T00:00:00Z&scheduled_at=lte.2026-04-17T23:59:59Z")
req.add_header("apikey", key)
req.add_header("Authorization", f"Bearer {key}")

resp = urllib.request.urlopen(req)
data = json.loads(resp.read().decode('utf-8'))
print(f"=== BÀI LÊN LỊCH CHO NGÀY 17/04/2026 ({len(data)} bài) ===")
for row in data:
    print(f"[{row['id']}] {row['title']} - Đăng: {row['is_published']} - Sched: {row['scheduled_at']}")
