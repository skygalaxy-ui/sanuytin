import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.join(process.cwd(), 'raw-images');
const outputDir = path.join(process.cwd(), 'public', 'images', 'optimized');

// Lấy tham số (prefix) từ dòng lệnh: "npm run minify-images -- ten-chu-de"
const userPrefix = process.argv[2];

async function processImages() {
  try {
    await fs.mkdir(outputDir, { recursive: true });

    const files = await fs.readdir(inputDir);
    const imageFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });

    if (imageFiles.length === 0) {
      console.log('📦 Thư mục [raw-images] đang trống. Bạn hãy chép ảnh vào đây nhé!');
      return;
    }

    console.log(`🚀 Tìm thấy ${imageFiles.length} hình ảnh.`);
    if (userPrefix) {
        console.log(`🏷️  Sẽ tự động đổi tên thành: ${userPrefix}-01.webp, ${userPrefix}-02.webp...`);
    } else {
        console.log(`⚠️  Bạn KHÔNG nhập tiền tố. Ảnh sẽ CHỈ nén và GIỮ NGUYÊN tên gốc.`);
    }

    let successCount = 0;

    for (let i = 0; i < imageFiles.length; i++) {
      const file = imageFiles[i];
      const inputPath = path.join(inputDir, file);
      
      // Nếu có prefix thì gán số thự tự (01, 02..), nếu không thì dùng tên cũ
      let finalName = "";
      if (userPrefix) {
          const paddedNum = String(i + 1).padStart(2, '0');
          finalName = `${userPrefix}-${paddedNum}`;
      } else {
          finalName = path.parse(file).name;
      }
      
      const outputPath = path.join(outputDir, `${finalName}.webp`);

      console.log(`⏳ Đang ép xung: ${file} ➡️ ${finalName}.webp`);

      try {
        await sharp(inputPath)
          .resize({ width: 1920, withoutEnlargement: true })
          .webp({ quality: 80, effort: 6 }) 
          .toFile(outputPath);

        const originalStats = await fs.stat(inputPath);
        const newStats = await fs.stat(outputPath);
        
        const oldMb = (originalStats.size / 1024 / 1024).toFixed(2);
        const newMb = (newStats.size / 1024 / 1024).toFixed(2);
        
        console.log(`   ✅ Thành công! \t(${oldMb}MB  ➡️  ${newMb}MB)`);
        successCount++;
        
        // Đoạn này là Bùa Phép Hút sạch File Cũ sau khi ép xong
        await fs.unlink(inputPath);
        
      } catch (err) {
        console.error(`   ❌ Lỗi khi xử lý file ${file}:`, err.message);
      }
    }

    console.log(`\\n🎉 Hoàn tất: Đã dập nén ${successCount}/${imageFiles.length} hình ảnh.`);
  } catch (error) {
    console.error('❌ Có rắc rối xảy ra khi đọc thư mục:', error.message);
  }
}

processImages();
