const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create folders
const logosDir = path.join(__dirname, '..', 'public', 'logos');
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// Read brokers data
const brokersPath = path.join(__dirname, '..', 'src', 'data', 'brokers.ts');
const content = fs.readFileSync(brokersPath, 'utf8');

// Extract logo URLs
const logoRegex = /logo:\s*"(https?:\/\/[^"]+)"/g;
let match;
const logos = [];
while ((match = logoRegex.exec(content)) !== null) {
  logos.push(match[1]);
}

console.log(`Found ${logos.length} logos to download\n`);

// Download function
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', reject);
  });
}

// Download all logos
async function downloadAll() {
  const mapping = [];
  
  for (let i = 0; i < logos.length; i++) {
    const url = logos[i];
    const filename = url.split('/').pop();
    const dest = path.join(logosDir, filename);
    
    try {
      console.log(`[${i + 1}/${logos.length}] Downloading: ${filename}`);
      await downloadFile(url, dest);
      mapping.push({ old: url, new: `/logos/${filename}` });
      console.log(`  ✓ Success`);
    } catch (err) {
      console.log(`  ✗ Failed: ${err.message}`);
    }
  }
  
  // Save mapping
  const mappingPath = path.join(__dirname, 'logo_mapping.json');
  fs.writeFileSync(mappingPath, JSON.stringify(mapping, null, 2));
  console.log(`\nDone! Mapping saved to: ${mappingPath}`);
}

downloadAll();
