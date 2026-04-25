import requests
import os
import json
import re

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

headers = {
    "apikey": supabase_key,
    "Authorization": f"Bearer {supabase_key}",
    "Content-Type": "application/json",
    "Prefer": "return=minimal"
}

SERVICES = [
    {"name": "Tổ chức Teambuilding", "url": "/dich-vu/to-chuc-teambuilding"},
    {"name": "Company Trip", "url": "/dich-vu/to-chuc-company-trip"},
    {"name": "Year End Party", "url": "/dich-vu/to-chuc-year-end-party"},
    {"name": "Sports Day", "url": "/dich-vu/to-chuc-sports-day"},
    {"name": "Family Day", "url": "/dich-vu/to-chuc-family-day"},
    {"name": "Khai Trương", "url": "/dich-vu/to-chuc-khai-truong"}
]

def fix_seo_structure(content):
    modified = False
    
    # 1. Structure Check: Missing H3 headers
    # If no h3 or h4, try to promote bold lines
    if "<h3>" not in content and "<h4>" not in content:
        # Pattern: <p><strong>Keyword...</strong></p>
        pattern = r'<p><strong>([^<]{10,80})</strong></p>'
        if re.search(pattern, content):
            content = re.sub(pattern, r'<h3>\1</h3>', content, count=3)
            modified = True
            
    # 2. Internal Link Check: If no links, add a Service Box
    internal_links = re.findall(r'href=["\'](/[a-zA-Z0-9\-_/]+|https?://sukientoanquoc\.com/[a-zA-Z0-9\-_/]+)["\']', content)
    if len(internal_links) < 2:
        service_links = " • ".join([f'<a href="{s["url"]}" style="color: #F97316; font-weight: 600;">{s["name"]}</a>' for s in SERVICES])
        services_block = f"""
        <div style="margin: 30px 0; padding: 20px; border: 1px dashed #F97316; border-radius: 12px; background: #FFFBF7; text-align: center;">
            <p style="margin-bottom: 12px; font-weight: 700; color: #7C2D12;">DỊCH VỤ SỰ KIỆN TRỌN GÓI:</p>
            <p style="line-height: 2;">{service_links}</p>
        </div>
        """
        # Inject after the first H2 or at the third paragraph
        if "</h2>" in content:
            content = content.replace("</h2>", "</h2>" + services_block, 1)
        else:
            paragraphs = content.split("</p>")
            if len(paragraphs) > 3:
                paragraphs[2] = paragraphs[2] + services_block
                content = "</p>".join(paragraphs)
            else:
                content = services_block + content
        modified = True
        
    return content, modified

def run_fix_v2():
    url_get = f"{supabase_url}/rest/v1/posts?select=id,title,content&is_published=eq.true&apikey={supabase_key}"
    res = requests.get(url_get, headers=headers)
    posts = res.json()
    
    updated_count = 0
    print(f"Applying SEO Structure Fix (V2) to {len(posts)} posts...")
    
    for post in posts:
        new_content, is_modified = fix_seo_structure(post['content'])
        if is_modified:
            url_update = f"{supabase_url}/rest/v1/posts?id=eq.{post['id']}&apikey={supabase_key}"
            payload = {"content": new_content}
            res_update = requests.patch(url_update, headers=headers, json=payload)
            if res_update.status_code in [200, 204]:
                updated_count += 1
                if updated_count % 10 == 0:
                    print(f"Updated {updated_count} posts...")
                
    print(f"\nFinished SEO Fix V2! Total posts updated: {updated_count}")

run_fix_v2()
