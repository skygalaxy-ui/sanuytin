const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ 
            headless: "new",
            args: ['--no-sandbox'] 
        });
        const page = await browser.newPage();
        
        page.on('console', msg => {
            console.log(`[C] ${msg.text()}`);
        });

        page.on('pageerror', err => {
            console.log('[E]', err.message);
        });

        console.log("Loading page...");
        await page.goto('http://localhost:3001', { waitUntil: 'networkidle2' });
        console.log("Loaded. Waiting 2s...");
        await new Promise(r => setTimeout(r, 2000));

        console.log("Clicking the first article link under Tin Tức...");
        const linkHref = await page.evaluate(() => {
            const l = document.querySelector('#blog a[href^="/tin-tuc/"]');
            if(l) {
                l.click();
                return l.href;
            }
            return null;
        });

        console.log("Clicked:", linkHref);

        // Wait to see what happens
        await new Promise(r => setTimeout(r, 4000));
        console.log("Final URL:", page.url());

        // Check window logic
        const isReloaded = await page.evaluate(() => {
            return performance.navigation.type === performance.navigation.TYPE_RELOAD ||
                   performance.getEntriesByType("navigation")[0].type === "navigate"; // check if it was a hard navigation
        });
        console.log("Did it trigger hard navigation?", isReloaded);

        await browser.close();
    } catch (e) {
        console.error("Script Error:", e);
    }
})();
