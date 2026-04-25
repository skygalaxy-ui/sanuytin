const fs = require('fs');

const pillars = [
    "Tổ chức sự kiện",
    "Tổ chức teambuilding",
    "Year End Party",
    "Gala Dinner",
    "Hội nghị khách hàng",
    "Lễ khai trương",
    "Ra mắt sản phẩm",
    "Lễ kỷ niệm thành lập",
    "Company trip",
    "Roadshow",
    "Cho thuê âm thanh ánh sáng",
    "Cho thuê màn hình LED",
    "Cung cấp MC ca sĩ",
    "Vũ đoàn múa sự kiện",
    "Thiết kế thi công backdrop"
];

const modifiers = [
    "chuyên nghiệp",
    "trọn gói",
    "uy tín",
    "giá tốt",
    "kịch bản",
    "chi phí",
    "báo giá",
    "ý tưởng",
    "kế hoạch",
    "quy trình",
    "xu hướng 2026",
    "độc lạ",
    "mới nhất"
];

const locations = [
    "TP HCM",
    "Khách sạn 5 sao",
    "Đà Nẵng",
    "Nha Trang",
    "Phú Quốc",
    "Vũng Tàu",
    "Long Hải",
    "Mũi Né",
    "Phan Thiết",
    "Đà Lạt",
    "Hạ Long",
    "Resort"
];

const teambuildingExtras = [
    "trò chơi team building bãi biển",
    "trò chơi team building trí tuệ",
    "kịch bản team building amazing race",
    "mc quản trò teambuilding",
    "đồ chơi phao team building",
    "địa điểm tổ chức team building gần sài gòn"
];

let generatedKeywords = [];

// 1. Pillar + Modifiers (15 * 13 = 195)
for (let p of pillars) {
    for (let m of modifiers) {
        if (m === "kịch bản" || m === "chi phí" || m === "báo giá" || m === "ý tưởng" || m === "kế hoạch" || m === "quy trình") {
            generatedKeywords.push(`${m} ${p.toLowerCase()}`);
        } else {
            generatedKeywords.push(`${p.toLowerCase()} ${m}`);
        }
    }
}

// 2. Pillar + Locations (15 * 12 = 180)
for (let p of pillars) {
    for (let l of locations) {
        if(p.includes("Cho thuê") || p.includes("Cung cấp")) {
            generatedKeywords.push(`${p.toLowerCase()} tại ${l.toLowerCase()}`);
        } else {
            generatedKeywords.push(`${p.toLowerCase()} trọn gói ${l.toLowerCase()}`);
        }
    }
}

// 3. Modifier + Pillar + Location (Pick combinations to hit exactly 550)
for (let i = 0; i < 300; i++) {
    const p = pillars[i % pillars.length];
    const l = locations[i % locations.length];
    const m = modifiers[i % modifiers.length];
    
    // Mix and match logically
    let kw = "";
    if (i % 3 === 0) kw = `báo giá ${p.toLowerCase()} tại ${l.toLowerCase()}`;
    else if (i % 3 === 1) kw = `công ty ${p.toLowerCase()} ${m} ${l.toLowerCase()}`;
    else kw = `dịch vụ ${p.toLowerCase()} ${l.toLowerCase()}`;
    
    // Deduplicate
    if(!generatedKeywords.includes(kw)) {
        generatedKeywords.push(kw);
    }
}

// 4. Teambuilding Extras
for (let tb of teambuildingExtras) {
    generatedKeywords.push(tb);
    generatedKeywords.push(tb + " 2026");
}

// Deduplicate all
let uniqueKeywords = [...new Set(generatedKeywords)];
if(uniqueKeywords.length > 550) {
    uniqueKeywords = uniqueKeywords.slice(0, 550);
}

// Format properly as TSV with header
const tsvContent = "Từ khóa SEO dài hạn (550 bài)\n" + uniqueKeywords.join("\n");

fs.writeFileSync('550_tu_khoa_den_het_nam.tsv', tsvContent, 'utf8');
console.log(`Generated ${uniqueKeywords.length} keywords.`);
