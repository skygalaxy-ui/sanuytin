const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    try {
        const browser = await puppeteer.launch({ 
            headless: "new",
            args: ['--no-sandbox'] 
        });
        const page = await browser.newPage();
        
        let logs = [];
        page.on('console', msg => {
            logs.push(`[C] ${msg.text()}`);
        });

        page.on('pageerror', err => {
            logs.push(`[E] ${err.message}`);
        });

        console.log("Loading page...");
        await page.goto('http://localhost:3001'); // don't wait for networkidle
        
        // wait for hydration
        await new Promise(r => setTimeout(r, 5000));
        
        fs.writeFileSync('scripts/hydration-logs.txt', logs.join('\n'));
        console.log("Logs written to hydration-logs.txt");

        await browser.close();
    } catch (e) {
        console.error("Script Error:", e);
    }
})();
