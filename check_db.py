import os
import json
import urllib.request

url = os.environ.get('NEXT_PUBLIC_SUPABASE_URL')
key = os.environ.get('NEXT_PUBLIC_SUPABASE_ANON_KEY')

with open('.env.local') as f:
    for line in f:
        if line.startswith('NEXT_PUBLIC_SUPABASE_URL='):
            url = line.split('=')[1].strip().strip('"')
        if line.startswith('NEXT_PUBLIC_SUPABASE_ANON_KEY='):
            key = line.split('=')[1].strip().strip('"')

req = urllib.request.Request(f"{url}/rest/v1/posts?select=id,title,scheduled_at,is_published&order=created_at.desc&limit=10")
req.add_header("apikey", key)
req.add_header("Authorization", f"Bearer {key}")

resp = urllib.request.urlopen(req)
data = json.loads(resp.read().decode('utf-8'))
for row in data:
    print(f"[{row['id']}] {row['title']} - Pub: {row['is_published']} - Sched: {row['scheduled_at']}")
