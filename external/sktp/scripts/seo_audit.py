import requests
import os
import json
import re
from urllib.parse import urlparse

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

# Fetch all published posts
url = f"{supabase_url}/rest/v1/posts?select=id,title,slug,content,is_published&is_published=eq.true&apikey={supabase_key}"
res = requests.get(url, headers=headers)

if res.status_code != 200:
    print(f"Error fetching posts: {res.status_code}")
    exit(1)

posts = res.json()
audit_results = []

def audit_post(post):
    content = post.get('content', '')
    title = post.get('title', '')
    url_path = f"/blog/{post.get('slug', '')}"
    
    issues = []
    
    # 1. Internal Link Check
    # Look for links starting with / or current domain
    internal_links = re.findall(r'href=["\'](/[a-zA-Z0-9\-_/]+|https?://sukientoanquoc\.com/[a-zA-Z0-9\-_/]+)["\']', content)
    if not internal_links:
        issues.append("MISSING INTERNALLY LINKS")
    
    # 2. SEO Outline Check (H1, H2, H3)
    # H1 check (should be unique or inferred from title)
    h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', content)
    if not h1s:
        # Most Next.js sites use Title as H1, so checking if there is a header structure
        pass
    
    h2s = re.findall(r'<h2[^>]*>(.*?)</h2>', content)
    if len(h2s) < 2:
        issues.append("TOO FEW H2 HEADERS (Need at least 2)")
    
    h3s = re.findall(r'<h3[^>]*>(.*?)</h3>', content)
    if not h3s:
        issues.append("MISSING H3 HEADERS")

    # 3. Content Length
    word_count = len(re.findall(r'\w+', content))
    if word_count < 500:
        issues.append(f"SHORT CONTENT ({word_count} words)")
        
    return {
        "id": post['id'],
        "title": title,
        "url": url_path,
        "internal_links_count": len(internal_links),
        "word_count": word_count,
        "h2_count": len(h2s),
        "h3_count": len(h3s),
        "issues": issues
    }

print(f"Auditing {len(posts)} posts...")
for post in posts:
    audit_results.append(audit_post(post))

# Save results
with open('scripts/seo_audit_results.json', 'w', encoding='utf-8') as f:
    json.dump(audit_results, f, indent=2, ensure_ascii=False)

# Summary
print("\n--- SEO AUDIT SUMMARY ---")
problematic_posts = [r for r in audit_results if r['issues']]
print(f"Total Posts Audited: {len(audit_results)}")
print(f"Posts with Issues: {len(problematic_posts)}")

if problematic_posts:
    print("\nSample of common issues:")
    for p in problematic_posts[:5]:
        print(f"- {p['title']}: {', '.join(p['issues'])}")
else:
    print("No issues found! All posts look solid.")
