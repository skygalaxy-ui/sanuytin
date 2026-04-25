const fs = require('fs');
const path = require('path');

const targetDirs = [
    'bao-gia-to-chuc-teambuilding',
    'checklist-to-chuc-su-kien',
    'to-chuc-chay-roadshow',
    'to-chuc-le-ra-mat-san-pham',
    'to-chuc-tiec-tat-nien'
];

targetDirs.forEach(dir => {
    const filePath = path.join(__dirname, 'src', 'app', dir, 'page.tsx');
    if (!fs.existsSync(filePath)) {
        console.log('Skipping', filePath);
        return;
    }

    let content = fs.readFileSync(filePath, 'utf8');

    // Mappings object -> find/replace
    const mappings = [
        { find: 'className="min-h-screen bg-black text-white selection:bg-purple-500/30"', replace: 'className={styles.page}' },
        { find: 'className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/10"', replace: 'className={styles.hero}' },
        { find: 'className="absolute inset-0 z-0"', replace: 'className={styles.heroBgWrapper}' },
        { find: 'className="object-cover opacity-30"', replace: 'className={styles.heroBgImage}' },
        { find: 'className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"', replace: 'className={styles.heroGradient}' },
        { find: 'className="container relative z-10 px-6 mx-auto max-w-5xl text-center"', replace: 'className={styles.heroContent}' },
        { find: 'className="inline-block py-1 px-3 rounded-full bg-purple-500/20 text-purple-400 text-sm font-semibold tracking-wider mb-6 border border-purple-500/30"', replace: 'className={styles.badge}' },
        { find: 'className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight mb-8 leading-tight"', replace: 'className={styles.title}' },
        { find: 'className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"', replace: 'className={styles.gradientText}' },
        { find: 'className="text-xl text-gray-400 max-w-3xl mx-auto mb-12"', replace: 'className={styles.description}' },
        
        { find: 'className="py-24 bg-black"', replace: 'className={styles.mainContent}' },
        { find: 'className="container px-6 mx-auto max-w-4xl prose prose-invert prose-lg prose-purple"', replace: 'className={styles.proseContainer}' },
        
        { find: 'className="overflow-x-auto my-8"', replace: 'className={styles.tableWrapper}' },
        { find: 'className="min-w-full text-left border-collapse border border-gray-800"', replace: '""' },
        { find: 'className="bg-gray-900 uppercase text-sm font-semibold text-gray-300"', replace: '""' },
        { find: 'className="p-4 border border-gray-800"', replace: '""' },
        { find: 'className="text-gray-300"', replace: '""' },
        { find: 'className="hover:bg-gray-800 transition-colors"', replace: '""' },
        { find: 'className="p-4 border border-gray-800 font-medium whitespace-nowrap"', replace: 'className={styles.tableHighlight}' },
        
        { find: 'className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 mt-12 text-center"', replace: 'className={styles.ctaBox}' },
        { find: 'className="text-2xl font-bold mb-4 mt-0 text-white"', replace: '""' },
        { find: 'className="text-gray-400 mb-8"', replace: '""' },
        { find: 'className="inline-block px-8 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition hover:-translate-y-1"', replace: 'className={styles.ctaBtn}' },
        { find: 'className="rounded-2xl"', replace: '""' }
    ];

    mappings.forEach(m => {
        // use regex to replace all instances globally
        const escapedFind = m.find.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escapedFind, 'g');
        content = content.replace(regex, m.replace);
    });

    // Strip out empty classNames (the ones we replaced with '""')
    content = content.replace(/\s*className=""/g, '');

    // Add import statement for styles
    if (!content.includes('import styles')) {
        content = content.replace("import Footer from '@/components/Footer/Footer';", "import Footer from '@/components/Footer/Footer';\nimport styles from '@/app/LandingPage.module.css';");
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed', filePath);
});

console.log('Done!');
