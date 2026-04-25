const fs = require('fs');
const files = [
  'src/app/checklist-to-chuc-su-kien/page.tsx',
  'src/app/bao-gia-to-chuc-teambuilding/page.tsx'
];

for(let file of files) {
  if (fs.existsSync(file)) {
      let data = fs.readFileSync(file, 'utf8');
      data = data.replace('className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-purple-600 rounded-xl hover:bg-purple-700 hover:scale-105 shadow-lg shadow-purple-500/30"', 'className={styles.ctaBtn}');
      fs.writeFileSync(file, data, 'utf8');
  }
}
