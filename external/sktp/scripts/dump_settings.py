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

url = f"{supabase_url}/rest/v1/site_settings?select=key,value&apikey={supabase_key}"
res = requests.get(url, headers=headers)
if res.status_code == 200:
    data = res.json()
    print(json.dumps(data, indent=2, ensure_ascii=False))
