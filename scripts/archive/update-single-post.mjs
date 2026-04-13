import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../.env.local') });

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

const POST_ID = process.argv[2];
const HTML_FILE = process.argv[3];

async function run() {
    if (!POST_ID || !HTML_FILE) {
        console.error("Thiếu tham số! Dùng: node update-single-post.mjs <ID> <FILE_HTML>");
        return;
    }

    const htmlContent = fs.readFileSync(HTML_FILE, 'utf8');

    const { error } = await supabase
        .from('posts')
        .update({ content: htmlContent, updated_at: new Date().toISOString() })
        .eq('id', parseInt(POST_ID));

    if (error) {
        console.error("Lỗi:", error.message);
    } else {
        console.log(`Đã lưu thành công bản cập nhật cho bài viết ID: ${POST_ID}`);
    }
}

run();
