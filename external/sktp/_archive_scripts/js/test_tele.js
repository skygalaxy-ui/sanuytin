const token = '8792118053:AAHCY2Z55ktLWXs3NzJgL1fpE9JBArXQThQ';
const chatId = '7693132516';
const post3Url = 'https://sukientoanquoc.com/blog/quy-chuan-chay-le-to-chuc-su-kien-khanh-thanh-chuan-meo';
const msg3 = `✅ <b>Vừa đăng bài TỰ ĐỘNG THÀNH CÔNG:</b>\n\n📌 <b>Tiêu đề:</b> Quy Chuẩn Chạy Lễ Tổ Chức Sự Kiện Khánh Thành Chuẩn Mẽo\n🕒 <b>Thời gian:</b> ${new Date().toLocaleString('vi-VN')}\n🔗 <b>Link:</b> <a href="${post3Url}">${post3Url}</a>`;

fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ chat_id: chatId, text: msg3, parse_mode: 'HTML' })
}).then(r => r.json()).then(console.log).catch(console.error);
