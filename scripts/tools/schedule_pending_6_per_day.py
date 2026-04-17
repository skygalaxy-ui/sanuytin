import json
import urllib.request
import os
import datetime

# Read .env.local
env = {}
with open('.env.local', 'r') as f:
    for line in f:
        if '=' in line and not line.startswith('#'):
            k, v = line.strip().split('=', 1)
            env[k] = v.strip('"')

supabase_url = env.get('NEXT_PUBLIC_SUPABASE_URL')
supabase_key = env.get('SUPABASE_SERVICE_ROLE_KEY') or env.get('NEXT_PUBLIC_SUPABASE_ANON_KEY')

url = f"{supabase_url}/rest/v1/posts?is_published=eq.false&select=id,title"
req = urllib.request.Request(url, headers={
    'apikey': supabase_key,
    'Authorization': f'Bearer {supabase_key}'
})

res = urllib.request.urlopen(req)
posts = json.loads(res.read())

print(f"Bắt đầu xếp lịch cho {len(posts)} bài...")

start_time = datetime.datetime.now()
start_time = start_time.replace(hour=8, minute=0, second=0, microsecond=0)

posts_in_day = 0
for post in posts:
    if posts_in_day >= 6:
        start_time += datetime.timedelta(days=1)
        start_time = start_time.replace(hour=8, minute=0, second=0, microsecond=0)
        posts_in_day = 0
    
    scheduled = start_time + datetime.timedelta(hours=posts_in_day*2)
    
    # Convert to UTC zero offset string compatible with postgres ISO
    iso_time = scheduled.strftime('%Y-%m-%dT%H:%M:%S.000Z')

    post_id = post['id']
    title = post['title'][:40]
    
    print(f"- Lên lịch: {title}... -> {scheduled.strftime('%d/%m/%Y %H:%M')}")
    
    # Update post - set scheduled_at for the auto-publish.mjs to pick up, and published_at for SEO date
    update_url = f"{supabase_url}/rest/v1/posts?id=eq.{post_id}"
    data = json.dumps({'scheduled_at': iso_time, 'published_at': iso_time, 'is_published': False}).encode('utf-8')
    update_req = urllib.request.Request(update_url, data=data, headers={
        'apikey': supabase_key,
        'Authorization': f'Bearer {supabase_key}',
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
    }, method='PATCH')
    urllib.request.urlopen(update_req)
    
    posts_in_day += 1

print("✅ Đã hoàn tất cài đặt lịch 6 bài / ngày cho toàn bộ bài Nháp!")
