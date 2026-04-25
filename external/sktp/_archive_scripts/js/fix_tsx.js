const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            walk(filepath, fileList);
        } else if (file.endsWith('.tsx')) {
            fileList.push(filepath);
        }
    }
    return fileList;
}

const files = walk('src/app');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    // Remove sequence ` ""` from JSX elements
    content = content.replace(/ \x22\x22/g, '');
    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed:', file);
    }
});
console.log('Done');
