# Hướng dẫn Setup Auto-Rebuild trên VPS

## Mục đích
Cron job tự động rebuild website mỗi 30 phút → bài viết mới từ Supabase sẽ hiển thị trên website mà **không cần deploy thủ công**.

## Các bước thực hiện

### Bước 1: SSH vào VPS
```bash
ssh haidang_designer27@34.142.182.73
```

### Bước 2: Kiểm tra thư mục project
```bash
ls ~/sanuytin/
# Nếu thấy package.json, next.config.ts → OK
```

### Bước 3: Tạo script auto-rebuild
```bash
cat > ~/sanuytin/auto-rebuild.sh << 'EOF'
#!/bin/bash
PROJ_DIR="$HOME/sanuytin"
LOG_FILE="$PROJ_DIR/rebuild.log"
LOCK_FILE="/tmp/sanuytin-rebuild.lock"

# Tránh chạy trùng
if [ -f "$LOCK_FILE" ]; then
    echo "$(date): Đang rebuild, bỏ qua." >> "$LOG_FILE"
    exit 0
fi
touch "$LOCK_FILE"

cd "$PROJ_DIR" || exit 1
echo "$(date): Bắt đầu rebuild..." >> "$LOG_FILE"

# Pull code mới
git pull origin main >> "$LOG_FILE" 2>&1

# Rebuild
npm run build >> "$LOG_FILE" 2>&1
BUILD_EXIT=$?

if [ $BUILD_EXIT -eq 0 ]; then
    echo "$(date): ✅ Rebuild OK!" >> "$LOG_FILE"
else
    echo "$(date): ❌ Rebuild FAIL (exit: $BUILD_EXIT)" >> "$LOG_FILE"
fi

rm -f "$LOCK_FILE"
EOF

chmod +x ~/sanuytin/auto-rebuild.sh
```

### Bước 4: Test chạy thử
```bash
~/sanuytin/auto-rebuild.sh
cat ~/sanuytin/rebuild.log
# Kiểm tra xem rebuild thành công không
```

### Bước 5: Setup Cron Job (chạy mỗi 30 phút)
```bash
crontab -e
```

Thêm dòng sau vào cuối file:
```
*/30 * * * * /bin/bash $HOME/sanuytin/auto-rebuild.sh
```

Lưu và thoát (trong nano: Ctrl+X → Y → Enter)

### Bước 6: Xác nhận cron đã hoạt động
```bash
crontab -l
# Phải thấy dòng: */30 * * * * /bin/bash $HOME/sanuytin/auto-rebuild.sh
```

## Kiểm tra
- Xem log rebuild: `cat ~/sanuytin/rebuild.log`
- Xem log gần nhất: `tail -5 ~/sanuytin/rebuild.log`

## Gỡ bỏ (nếu cần)
```bash
crontab -e
# Xóa dòng cron → Lưu
```
