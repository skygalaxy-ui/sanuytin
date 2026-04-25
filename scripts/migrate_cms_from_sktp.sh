#!/usr/bin/env bash
# -------------------------------------------------
# migrate_cms_from_sktp.sh
# -------------------------------------------------
# 1. Create a backup of the current home-ux project (code + DB dump)
# -------------------------------------------------
set -e

# ==== CONFIGURATION ====
# Adjust these paths if necessary
SOURCE_CMS_DIR="/Users/viralworks/Documents/code/sktp"   # <-- will fallback to sktq if not exist
HOME_UX_DIR="/Users/viralworks/Documents/code/home-ux"
BACKUP_DIR="${HOME_UX_DIR}/backup_$(date +%Y%m%d_%H%M%S)"
CMS_TARGET_SUBDIR="external/sktp"   # where we will place the copied CMS

# ---- Detect actual source folder ----
if [ ! -d "${SOURCE_CMS_DIR}" ]; then
  echo "⚠️ Source folder ${SOURCE_CMS_DIR} not found, trying alternative 'sktq'..."
  SOURCE_CMS_DIR="/Users/viralworks/Documents/code/sktq"
  if [ ! -d "${SOURCE_CMS_DIR}" ]; then
    echo "❌ Neither /sktp nor /sktq exists. Abort."
    exit 1
  fi
fi

# -------------------------------------------------
# 2. Create backup of current home‑ux code (tar.gz)
# -------------------------------------------------
mkdir -p "${BACKUP_DIR}"
cd "${HOME_UX_DIR}"
git archive --format=tar.gz -o "${BACKUP_DIR}/home-ux-code-backup.tar.gz" HEAD
echo "✅ Code backup saved to ${BACKUP_DIR}/home-ux-code-backup.tar.gz"

# -------------------------------------------------
# 3. (Optional) Backup DB – assumes PostgreSQL and a DB name stored in .env
# -------------------------------------------------
if grep -q "DATABASE_URL" .env; then
  DB_URL=$(grep "DATABASE_URL" .env | cut -d= -f2-)
  # Extract DB name from URL (postgres://user:pass@host:port/dbname)
  DB_NAME=$(echo "$DB_URL" | sed -E 's~.*\/([^\?]*).*~\1~')
  if [ -n "$DB_NAME" ]; then
    echo "📦 Dumping PostgreSQL DB $DB_NAME..."
    pg_dump -Fc -f "${BACKUP_DIR}/${DB_NAME}_backup.dump" "$DB_NAME"
    echo "✅ DB backup saved to ${BACKUP_DIR}/${DB_NAME}_backup.dump"
  else
    echo "⚠️ Could not parse DB name from DATABASE_URL – skipping DB backup"
  fi
else
  echo "⚠️ No DATABASE_URL found in .env – skipping DB backup"
fi

# -------------------------------------------------
# 4. Copy CMS source into home‑ux under a sub‑folder (clean copy)
# -------------------------------------------------
TARGET_PATH="${HOME_UX_DIR}/${CMS_TARGET_SUBDIR}"
mkdir -p "${TARGET_PATH}"
# rsync, exclude node_modules, .git and any build folders
rsync -av --exclude="node_modules" --exclude=".git" --exclude=".next" --exclude="out" "${SOURCE_CMS_DIR}/" "${TARGET_PATH}/"
echo "✅ CMS copied to ${TARGET_PATH}"

# -------------------------------------------------
# 5. Merge dependencies from source package.json into home‑ux package.json
# -------------------------------------------------
# Use jq (ensure it is installed)
if command -v jq >/dev/null 2>&1; then
  echo "🔧 Merging npm dependencies..."
  # Extract deps and devDeps from source
  SRC_DEPS=$(jq -r '.dependencies // {}' "${SOURCE_CMS_DIR}/package.json")
  SRC_DEVDEPS=$(jq -r '.devDependencies // {}' "${SOURCE_CMS_DIR}/package.json")
  # Merge into home‑ux package.json (deep merge, source wins on conflicts)
  jq ".dependencies += $SRC_DEPS | .devDependencies += $SRC_DEVDEPS" \
    "${HOME_UX_DIR}/package.json" > "${HOME_UX_DIR}/package.json.tmp"
  mv "${HOME_UX_DIR}/package.json.tmp" "${HOME_UX_DIR}/package.json"
  echo "✅ Dependencies merged. Running npm install..."
  npm install --silent
else
  echo "⚠️ jq not installed – you must merge dependencies manually."
fi

# -------------------------------------------------
# 6. Add a rewrite rule so CMS routes are reachable under /sktp/*
# -------------------------------------------------
NEXT_CONFIG="${HOME_UX_DIR}/next.config.mjs"
if [ -f "$NEXT_CONFIG" ]; then
  if ! grep -q "rewrites" "$NEXT_CONFIG"; then
    echo "Adding rewrites block to next.config.mjs..."
    cat <<'EOF' >> "$NEXT_CONFIG"
export async function rewrites() {
  return [
    { source: '/sktp/:path*', destination: '/external/sktp/:path*' },
  ];
}
EOF
    echo "✅ Rewrites added."
  else
    echo "⚠️ Rewrites block already exists – you may need to adjust it manually."
  fi
else
  echo "⚠️ next.config.mjs not found – skipping route rewrite."
fi

# -------------------------------------------------
# 7. Create a new git branch for the migration and commit changes
# -------------------------------------------------
git checkout -b migrate-cms-sktp
git add .
git commit -m "Migrate CMS from sktp (source) into external/sktp – backup created"

# -------------------------------------------------
# 8. Finished – run dev server to verify
# -------------------------------------------------
echo "🚀 Migration script completed. You can now run:\n  cd ${HOME_UX_DIR}\n  npm run dev\nand verify the CMS under http://localhost:3000/sktp/"

# End of script
