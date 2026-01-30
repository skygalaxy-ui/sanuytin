
const fs = require('fs');
const content = fs.readFileSync('out/index.html', 'utf8');
const index = content.indexOf('Forex');
if (index !== -1) {
    console.log('Found match at index:', index);
    const snippet = content.substring(index - 100, index + 300);
    fs.writeFileSync('debug_faq.txt', snippet);
    console.log('Snippet saved to debug_faq.txt');
} else {
    console.log('String "Forex" not found.');
}
