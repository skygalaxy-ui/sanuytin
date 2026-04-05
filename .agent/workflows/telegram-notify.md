---
description: Gửi thông báo Telegram sau khi fix hoặc deploy
---

# Gửi thông báo Telegram

## Khi nào gửi
- Sau khi fix bug hoặc update quan trọng
- Sau khi publish bài viết mới
- Khi có lỗi cần báo admin

## Cách dùng

### Gửi tin nhanh từ terminal:
```bash
node lib/telegram.mjs "Nội dung tin nhắn"
```

### Import trong script:
```javascript
import { notifyFixComplete, notifyPublish, notifyError } from '../lib/telegram.mjs';

// Sau khi fix xong
await notifyFixComplete('Đã sửa lỗi hiển thị bài viết', [
  'Fix filter published_at',
  'Update 90 bài SEO',
]);

// Sau khi publish bài
await notifyPublish([
  { title: 'Tên bài viết', url: 'https://sanuytin.net/...', excerpt: 'Mô tả ngắn' }
]);

// Khi có lỗi
await notifyError('Build thất bại', error.message);
```

## Lưu ý quan trọng
- **KHÔNG chỉnh sửa** file `lib/telegram.mjs` trừ khi user yêu cầu bổ sung tính năng
- File này là module đóng gói hoàn chỉnh, các script khác chỉ cần import và gọi
- Env vars: `TELEGRAM_BOT_TOKEN` + `TELEGRAM_CHAT_ID` (đã config trong .env.local + GitHub Secrets)
