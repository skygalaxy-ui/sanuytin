const https = require('https');

const PURLS_TO_TEST = [
    'https://sanuytin.net/',
    'https://sanuytin.net/tin-tuc/',
    'https://sanuytin.net/kien-thuc-forex/',
    'https://sanuytin.net/so-sanh/',
    'https://sanuytin.net/danh-gia-san/',
    'https://sanuytin.net/review-san-exness-chi-tiet-2026/', // Top 1 rank broker
];

async function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            let redirect = res.statusCode >= 300 && res.statusCode < 400 ? res.headers['location'] : null;
            resolve({ url, status: res.statusCode, redirect });
        }).on('error', (e) => {
            resolve({ url, status: 'ERROR', error: e.message });
        });
    });
}

(async () => {
    console.log("Đang kiểm tra trạng thái các trang chính trên sanuytin.net...");
    for (const link of PURLS_TO_TEST) {
        const result = await checkUrl(link);
        if (result.status === 200) {
            console.log(`[OK]   ${result.url}`);
        } else if (result.redirect) {
            console.log(`[30x]  ${result.url} -> Redirects to: ${result.redirect}`);
        } else {
            console.log(`[FAIL] ${result.url} - Status: ${result.status} ${result.error || ''}`);
        }
    }
})();
