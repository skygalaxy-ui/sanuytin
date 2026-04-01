const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    let isMismatch = false;
    page.on('console', msg => {
        const text = msg.text();
        if (text.includes('Hydration') || text.includes('Warning: Expected server HTML to contain a matching')) {
            console.log('[BROWSER CONSOLE]', text);
            isMismatch = true;
        }
    });

    try {
        await page.goto('http://localhost:3001', { waitUntil: 'load' });
        // Wait a bit fully for hydration to trigger errors
        await new Promise(r => setTimeout(r, 2000));
    } catch (e) {
        console.error("Lỗi:", e);
    }
    
    if (!isMismatch) {
        console.log("Không tìm thấy Hydration Mismatch trong console.");
    }

    await browser.close();
})();
