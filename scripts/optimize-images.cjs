const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

async function convertToWebp(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            await convertToWebp(filePath);
        } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
            const outputFilePath = filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

            console.log(`Converting ${file} to WebP...`);
            await sharp(filePath)
                .webp({ quality: 80 })
                .toFile(outputFilePath);

            console.log(`Saved to ${path.basename(outputFilePath)}`);
        }
    }
}

convertToWebp(publicDir)
    .then(() => console.log('Optimization complete!'))
    .catch(err => console.error('Error during optimization:', err));
