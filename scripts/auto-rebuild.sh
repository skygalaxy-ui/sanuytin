#!/bin/bash
# auto-rebuild.sh - Tự động rebuild sanuytin khi có bài viết mới
# Chạy bởi cron job mỗi 30 phút

PROJ_DIR="$HOME/sanuytin"
LOG_FILE="$PROJ_DIR/rebuild.log"
LOCK_FILE="/tmp/sanuytin-rebuild.lock"

# Tránh chạy trùng lặp
if [ -f "$LOCK_FILE" ]; then
    echo "$(date): Rebuild đang chạy, bỏ qua." >> "$LOG_FILE"
    exit 0
fi

touch "$LOCK_FILE"

cd "$PROJ_DIR" || exit 1

echo "$(date): Bắt đầu rebuild..." >> "$LOG_FILE"

# Pull code mới từ GitHub (nếu có)
git pull origin main >> "$LOG_FILE" 2>&1

# Rebuild static site
npm run build >> "$LOG_FILE" 2>&1
BUILD_EXIT=$?

if [ $BUILD_EXIT -eq 0 ]; then
    echo "$(date): ✅ Rebuild thành công!" >> "$LOG_FILE"
else
    echo "$(date): ❌ Rebuild thất bại (exit code: $BUILD_EXIT)" >> "$LOG_FILE"
fi

# Xóa lock file
rm -f "$LOCK_FILE"
