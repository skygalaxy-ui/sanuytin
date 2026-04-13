const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch({ 
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox'] 
        });
        const page = await browser.newPage();
        
        page.on('console', msg => {
            console.log(`[Browser Console ${msg.type().toUpperCase()}] ${msg.text()}`);
        });

        page.on('pageerror', err => {
            console.log('[Browser Page Error]', err.message);
        });

        // Load the local dev server
        await page.goto('http://localhost:3001', { waitUntil: 'networkidle2', timeout: 30000 });
        console.log("Page loaded.");

        // Wait a few seconds
        await new Promise(r => setTimeout(r, 2000));

        // Let's click on the first link in LatestPosts
        console.log("Attempting to click first article in LatestPosts...");
        
        const linkHref = await page.evaluate(() => {
            // Find the LatestPosts section
            const section = document.querySelector('#blog');
            if (section) {
                const links = section.querySelectorAll('a[href^="/tin-tuc/"]');
                if (links.length > 0) {
                    // Click the first one via JS click to see if it redirects
                    links[0].click();
                    return links[0].href;
                }
            }
            return null;
        });

        console.log("Clicked link:", linkHref);

        // Wait a few seconds to see if it navigated or threw error
        await new Promise(r => setTimeout(r, 5000));
        console.log("Current URL after click:", page.url());

        await browser.close();
    } catch (e) {
        console.error("Script Error:", e);
    }
})();
