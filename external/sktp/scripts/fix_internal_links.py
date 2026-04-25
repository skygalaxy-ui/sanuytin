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

# Core Services Mapping
LINK_MAP = {
    r"(?i)teambuilding": "/dich-vu/to-chuc-teambuilding",
    r"(?i)tổ chức teambuilding": "/dich-vu/to-chuc-teambuilding",
    r"(?i)year end party": "/dich-vu/to-chuc-year-end-party",
    r"(?i)tất niên": "/dich-vu/to-chuc-year-end-party",
    r"(?i)company trip": "/dich-vu/to-chuc-company-trip",
    r"(?i)sports day": "/dich-vu/to-chuc-sports-day",
    r"(?i)ngày hội thể thao": "/dich-vu/to-chuc-sports-day",
    r"(?i)family day": "/dich-vu/to-chuc-family-day",
    r"(?i)ngày hội gia đình": "/dich-vu/to-chuc-family-day",
    r"(?i)khai trương": "/dich-vu/to-chuc-khai-truong",
    r"(?i)sự kiện (nha trang|đà nẵng|phú quốc|vũng tàu|đà lạt)": "/dich-vu/to-chuc-su-kien",
    r"(?i)Sự Kiện Toàn Quốc": "/"
}

def linkify_content(content):
    # Check if already has links
    if 'href="' in content:
        # Check if it has at least 2 internal links
        internal_links = re.findall(r'href=["\'](/[a-zA-Z0-9\-_/]+|https?://sukientoanquoc\.com/[a-zA-Z0-9\-_/]+)["\']', content)
        if len(internal_links) >= 3:
            return content, False # Enough links
            
    modified = False
    
    # Inject links to keywords
    for pattern, root_relative_url in LINK_MAP.items():
        # Only inject if not already linked and only once per post
        if root_relative_url not in content:
            # Match the first occurrence that is NOT inside an existing tag
            # This is a bit complex with regex, so we use a simple approach:
            # Replace the first match of the keyword that is and surround it with a link
            match = re.search(pattern, content)
            if match:
                start, end = match.span()
                # Check if it is already inside a tag (basic check: looking backward for < and forward for >)
                # This is not perfect but works for simple HTML
                prefix = content[:start]
                if '<a' not in prefix or '</a>' in prefix:
                    content = content[:start] + f'<a href="{root_relative_url}" style="color: #F97316; font-weight: 600;">{match.group(0)}</a>' + content[end:]
                    modified = True

    # Check for CTA at the end
    if "liên hệ" not in content.lower()[-500:]:
        cta_block = """
        <div style="margin-top: 40px; padding: 30px; background: #FFF7ED; border-left: 5px solid #F97316; border-radius: 8px;">
            <p style="font-weight: 700; font-size: 1.2rem; color: #7C2D12; margin-bottom: 10px;">Bạn đang có nhu cầu tổ chức sự kiện chuyên nghiệp?</p>
            <p style="color: #9A3412; margin-bottom: 20px;">Hãy để <strong>Sự Kiện Toàn Quốc</strong> đồng hành cùng bạn kiến tạo những khoảnh khắc đáng nhớ và đẳng cấp nhất.</p>
            <a href="/lien-he" style="display: inline-block; padding: 12px 24px; background: #F97316; color: white; border-radius: 50px; font-weight: 700; text-decoration: none;">Nhận tư vấn & Báo giá ngay</a>
        </div>
        """
        content += cta_block
        modified = True
        
    return content, modified

# Update posts in Supabase
def update_posts():
    url_get = f"{supabase_url}/rest/v1/posts?select=id,title,content&is_published=eq.true&apikey={supabase_key}"
    res = requests.get(url_get, headers=headers)
    posts = res.json()
    
    updated_count = 0
    print(f"Checking {len(posts)} posts for linkification...")
    
    for post in posts:
        new_content, is_modified = linkify_content(post['content'])
        if is_modified:
            # Update in Supabase
            url_update = f"{supabase_url}/rest/v1/posts?id=eq.{post['id']}&apikey={supabase_key}"
            payload = {"content": new_content}
            res_update = requests.patch(url_update, headers=headers, json=payload)
            if res_update.status_code in [200, 204]:
                updated_count += 1
                if updated_count % 10 == 0:
                    print(f"Updated {updated_count} posts...")
            else:
                print(f"Failed to update {post['title']}: {res_update.status_code}")
                
    print(f"\nFinished! Total posts updated: {updated_count}")

update_posts()
