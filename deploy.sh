#!/bin/bash

# Script Deploy Website lên VPS (Chạy thủ công)
echo "🚀 Bắt đầu quá trình Deploy thủ công..."

# Bước 1: Build source gốc
echo "1️⃣ Đang chạy npm run build..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Lỗi Build thất bại! Ngừng deploy."
    exit 1
fi

# Bước 2: Đóng gói (Zip)
echo "2️⃣ Nén file Static (thư mục /out)..."
cd out && zip -q -r ../deploy.zip . && cd ..

# Bước 3: Đưa lên Server bằng chuẩn mã hóa SCP
echo "3️⃣ Đang Upload file deploy.zip lên VPS (34.142.182.73)..."
scp deploy.zip hoangphuongle.nt@34.142.182.73:/tmp/
if [ $? -ne 0 ]; then
    echo "❌ Lỗi Upload rớt mạng! Ngừng deploy."
    rm deploy.zip
    exit 1
fi

# Bước 4: Chạy lệnh giải nén trên VPS
echo "4️⃣ Đang cấu hình và giải nén trên VPS..."
ssh hoangphuongle.nt@34.142.182.73 "sudo rm -rf /var/www/html/* && sudo unzip -q -o /tmp/deploy.zip -d /var/www/html/ && sudo chown -R www-data:www-data /var/www/html && rm /tmp/deploy.zip"

# Bước 5: Dọn rác
rm deploy.zip
echo "✅ DEPLOY HOÀN TẤT THÀNH CÔNG VÀO VPS! Website đã cập nhật."
