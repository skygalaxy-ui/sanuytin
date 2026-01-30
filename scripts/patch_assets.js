const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '../out');

function getAllHtmlFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllHtmlFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.endsWith('.html')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });

    return arrayOfFiles;
}

function getRelativePrefix(filePath) {
    // Get relative path from OUT_DIR to file folder
    const relativePath = path.relative(OUT_DIR, path.dirname(filePath));
    if (relativePath === '') return './';

    const depth = relativePath.split(path.sep).length;
    return '../'.repeat(depth);
}

try {
    if (!fs.existsSync(OUT_DIR)) {
        console.error(`Output directory ${OUT_DIR} does not exist. Run 'npm run build' first.`);
        process.exit(1);
    }

    const htmlFiles = getAllHtmlFiles(OUT_DIR);
    console.log(`Found ${htmlFiles.length} HTML files to patch...`);

    htmlFiles.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        const relativePrefix = getRelativePrefix(file);

        // 1. Replace absolute /home/_next/ asset paths with relative paths
        // Regex targets: href="/home/_next/... or src="/home/_next/...
        const assetRegex = /(href|src)=["']\/home\/_next\/([^"']+)["']/g;

        let patchedContent = content.replace(assetRegex, (match, attr, resourcePath) => {
            return `${attr}="${relativePrefix}_next/${resourcePath}"`;
        });

        // 2. Strip index.html from links to ensure clean URLs (Brute force fix)
        // Case A: href=".../slug/index.html" -> href=".../slug/"
        patchedContent = patchedContent.replace(/href=(["'])(.*?)\/index\.html\1/g, 'href=$1$2/$1');

        // Case B: href="index.html" -> href="./"
        patchedContent = patchedContent.replace(/href=(["'])index\.html\1/g, 'href=$1./$1');

        // Case C: href="./index.html" -> href="./"
        patchedContent = patchedContent.replace(/href=(["'])\.\/index\.html\1/g, 'href=$1./$1');

        if (content !== patchedContent) {
            fs.writeFileSync(file, patchedContent, 'utf8');
            console.log(`Patched: ${path.relative(OUT_DIR, file)}`);
        }
    });

    console.log('HTML patching complete. CSS and JS links are now relative.');

} catch (e) {
    console.error('Error patching HTML:', e);
    process.exit(1);
}
