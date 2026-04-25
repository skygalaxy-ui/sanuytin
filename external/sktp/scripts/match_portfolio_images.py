import json
import re

with open('scripts/posts_dump.json', 'r', encoding='utf-8') as f:
    posts = json.load(f)

targets = [
    {"key": "portfolio_1", "keywords": ["Teambuilding", "Đà Nẵng", "Biển"]},
    {"key": "portfolio_2", "keywords": ["Year End", "Gala", "Tiệc tất niên"]},
    {"key": "portfolio_3", "keywords": ["Company Trip", "Du lịch", "Phú Quốc"]},
    {"key": "portfolio_4", "keywords": ["Sports Day", "Thể thao", "Vận động"]},
    {"key": "portfolio_5", "keywords": ["Workshop", "Đào tạo", "Leadership"]},
    {"key": "portfolio_6", "keywords": ["Family Day", "Gia đình", "Trẻ em"]}
]

matches = {}

for target in targets:
    best_match = None
    for post in posts:
        title = post.get('title', '')
        image = post.get('featured_image')
        if not image: continue
        
        # Count how many keywords match the title
        match_count = sum(1 for kw in target["keywords"] if re.search(kw, title, re.IGNORECASE))
        
        if match_count > 0:
            if not best_match or match_count > best_match["count"]:
                best_match = {
                    "url": image,
                    "title": title,
                    "alt": post.get('featured_image_alt', ''),
                    "count": match_count
                }
    
    if best_match:
        matches[target["key"]] = best_match

print(json.dumps(matches, indent=2, ensure_ascii=False))
