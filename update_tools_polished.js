const fs = require('fs');
const path = '/Users/viralworks/Documents/code/home-ux/out/cong-cu/index.html';
// Read with validation
if (!fs.existsSync(path)) { console.error("File not found"); process.exit(1); }
let content = fs.readFileSync(path, 'utf8');

// --- 1. Define Beautiful Forms ---
const formPip = `
<div class="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-5">
    <div class="space-y-2 text-left">
        <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Cặp tiền</label>
        <div class="relative group">
            <select id="pip-pair" class="w-full text-sm pl-4 pr-10 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none cursor-pointer transition-all hover:bg-white dark:hover:bg-slate-700">
                <option value="10">EUR/USD</option>
                <option value="10">GBP/USD</option>
                <option value="10">AUD/USD</option>
                <option value="10">NZD/USD</option>
                <option value="6.5">USD/JPY</option>
                <option value="9.1">USD/CHF</option>
                <option value="7.3">USD/CAD</option>
                <option value="10">XAU/USD (Gold)</option>
            </select>
            <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
        </div>
    </div>
    <div class="space-y-2 text-left">
        <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Số Lot</label>
        <div class="relative group">
            <input type="number" id="pip-lots" value="1.0" min="0.01" step="0.01" class="w-full text-sm font-medium pl-4 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all hover:bg-white dark:hover:bg-slate-700" placeholder="Nhập số lot...">
        </div>
    </div>
    <div class="flex items-center justify-between p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800/30">
        <span class="text-xs font-bold text-blue-600 dark:text-blue-400">GIÁ TRỊ PIP</span>
        <span id="pip-result" class="text-lg font-bold text-primary font-mono tracking-tight">$10.00</span>
    </div>
    <button onclick="calcPip()" class="w-full bg-primary hover:bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all active:scale-95 duration-200">TÍNH NGAY</button>
</div>`;

const formMargin = `
<div class="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-5">
    <div class="space-y-2 text-left">
        <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Đòn bẩy</label>
        <div class="relative group">
            <select id="margin-lev" class="w-full text-sm pl-4 pr-10 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none cursor-pointer transition-all hover:bg-white dark:hover:bg-slate-700">
                <option value="1">1:1</option>
                <option value="50">1:50</option>
                <option value="100" selected>1:100</option>
                <option value="200">1:200</option>
                <option value="500">1:500</option>
                <option value="1000">1:1000</option>
                <option value="2000">1:2000</option>
                <option value="unlimited">1:∞</option>
            </select>
            <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-hover:text-purple-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
        </div>
    </div>
    <div class="space-y-2 text-left">
        <label class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Số Lot</label>
        <div class="relative group">
            <input type="number" id="margin-lots" value="1.0" min="0.01" step="0.01" class="w-full text-sm font-medium pl-4 pr-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all hover:bg-white dark:hover:bg-slate-700" placeholder="Nhập số lot...">
        </div>
    </div>
    <div class="flex items-center justify-between p-4 bg-purple-50/50 dark:bg-purple-900/10 rounded-xl border border-purple-100 dark:border-purple-800/30">
        <span class="text-xs font-bold text-purple-600 dark:text-purple-400">KÝ QUỸ YÊU CẦU</span>
        <span id="margin-result" class="text-lg font-bold text-purple-600 dark:text-purple-400 font-mono tracking-tight">$1,000.00</span>
    </div>
    <button onclick="calcMargin()" class="w-full bg-primary hover:bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all active:scale-95 duration-200">TÍNH NGAY</button>
</div>`;

// --- 2. Replacement Logic ---
const btnHtml = '<button class="bg-primary/10 text-primary px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-colors w-full">Sử dụng ngay</button>';
const oldFormPrefix = '<div class="mt-4';

function replaceInSection(fullText, startMarker, endMarker, replacement) {
    let parts = fullText.split(startMarker);
    if (parts.length < 2) return fullText; // Marker not found

    // Process the part AFTER the marker
    let section = parts[1];
    let nextSection = "";

    // Find boundary of this section (start of next card or end file)
    let splitIndex = -1;
    if (endMarker && section.includes(endMarker)) {
        let sections = section.split(endMarker);
        section = sections[0];
        nextSection = endMarker + sections.slice(1).join(endMarker);
    }

    // Now 'section' is just the card content.
    // Check for BUTTON first (Original State)
    if (section.includes(btnHtml)) {
        section = section.replace(btnHtml, replacement);
    }
    // Check for Previous FORM (Already Updated State) - Greedy match div
    else if (section.includes('id="pip-pair"') || section.includes('id="margin-lev"')) {
        // Regex to replace existing form div including all its content ending at </div></div> or similar?
        // This is risky with regex. simpler: Find the FIRST <div class="mt-4... and replace until </button></div>
        // Or just replace the whole card content if I can match it?
        // Wait, 'section' starts after Title. It contains <p>desc</p><FORM/BUTTON></div>
        // I can ensure I replace everything AFTER </p>
        const pEnd = '</p>';
        if (section.includes(pEnd)) {
            let pParts = section.split(pEnd);
            // pParts[0] is description. pParts[1] is form + closing div of card.
            // The card closing div is </div>.
            // replacement ends with </div>.
            // So I replace pParts[1] (form+closing) with replacement + '</div>'.
            // Wait, replacement IS the form. It ADDS to the card.
            // Original: ...</p><button...></button></div>
            // Current: ...</p><div...form...</div></div>
            // I want: ...</p> + replacement + </div>

            // So simply strip everything after </p> except the last 6 chars (</div>)?
            // Safe approach: Split by </p>. Take part 0. Append </p> + replacement + </div> (if closing div was part of search).
            // Actually, `parts[1]` (section) contains the whole rest of file if I didn't split by endMarker.
            // With endMarker, `section` is bounded.

            // Let's use simpler "Marker + Button" replacement if Button exists.
            // If Form exists, try to locate it via ID.
            let searchId = startMarker.includes('Pip') ? 'id="pip-pair"' : 'id="margin-lev"';
            let formRegex = new RegExp('<div class="mt-4[^]*?Tính Ngay</button></div>');
            if (formRegex.test(section)) {
                section = section.replace(formRegex, replacement);
            }
        }
    }

    return parts[0] + startMarker + section + nextSection;
}

// Apply to Pip
content = replaceInSection(content, 'Máy Tính Pip', 'Máy Tính Margin', formPip);
// Apply to Margin
content = replaceInSection(content, 'Máy Tính Margin', 'Chuyển Đổi Tiền Tệ', formMargin);

// --- 3. Script Injection ---
const logic = `<script>
function calcPip() {
  var l=parseFloat(document.getElementById("pip-lots").value)||0;
  var pairVal=parseFloat(document.getElementById("pip-pair").value)||10;
  var v=l*pairVal;
  document.getElementById("pip-result").innerText="$"+v.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});
}
function calcMargin() {
  var l=parseFloat(document.getElementById("margin-lots").value)||0;
  var levStr=document.getElementById("margin-lev").value;
  var m=0;
  if(levStr==='unlimited') m=0;
  else { var lev=parseFloat(levStr)||100; m=(l*100000)/lev; }
  document.getElementById("margin-result").innerText="$"+m.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});
}
</script>`;

// Remove old script if exists to avoid duplication
content = content.replace(/<script>\s*function calcPip[^]*?<\/script>/, '');
content = content.replace('</body>', logic + '</body>');

fs.writeFileSync(path, content);
console.log("Updated tools page.");
