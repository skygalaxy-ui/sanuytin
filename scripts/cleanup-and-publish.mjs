import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K'
);

// ============================================================
// STEP 1: Xóa bài test "gfggf"
// ============================================================
async function deleteTestPosts() {
    console.log('\n🧹 STEP 1: Xóa bài test...');

    const { data, error } = await supabase
        .from('posts')
        .select('id, title, slug')
        .eq('slug', 'gfggf');

    if (error) { console.error('❌ Error:', error); return; }
    if (!data || data.length === 0) { console.log('  Không tìm thấy bài test.'); return; }

    for (const post of data) {
        const { error: delError } = await supabase.from('posts').delete().eq('id', post.id);
        if (delError) {
            console.error(`  ❌ Không xóa được "${post.title}":`, delError);
        } else {
            console.log(`  ✅ Đã xóa: "${post.title}" (id: ${post.id})`);
        }
    }
}

// ============================================================
// STEP 2: Xóa bài trùng lặp (giữ bài mới hơn / chi tiết hơn)
// ============================================================
async function deleteDuplicates() {
    console.log('\n🔄 STEP 2: Xóa bài viết trùng lặp...');

    // Các slug trùng lặp cần xóa (batch cũ hơn từ 2026-02-03)
    // Giữ lại batch mới hơn từ 2026-02-04 (có nội dung chi tiết hơn)
    const slugsToDelete = [
        // tin-tuc duplicates (giữ bản mới hơn)
        'bitcoin-60000-usd-2026',           // trùng với bitcoin-vuot-60000-usd-2026
        'usd-vnd-dieu-chinh-nhnn',          // trùng với usd-vnd-tang-nhe-thang-2-2026
        'gia-vang-2100-usd',               // trùng với gia-vang-vuot-moc-2100-usd
        'fed-giu-lsuat-t2-2026',           // trùng với fed-giu-nguyen-lai-suat-thang-2-2026
        'ecb-can-nhac-cat-giam-lai-suat',  // trùng với ecb-can-nhac-cat-giam-lai-suat-q2

        // phan-tich duplicates
        'dau-tho-xu-huong-giam',           // trùng với dau-tho-xu-huong-giam-ngan-han
        'usdjpy-nhat-ban-can-thiep',       // trùng với usdjpy-boj-can-thiep
        'gbpusd-co-the-but-pha',           // trùng với gbpusd-but-pha-du-lieu-viec-lam
        'eurusd-xu-huong-tang',            // trùng với phan-tich-eurusd-xu-huong-tang

        // huong-dan duplicates
        'cai-dat-mt4-nguoi-moi',           // trùng với cach-cai-dat-metatrader-4
        'huong-dan-su-dung-indicator-rsi', // trùng với huong-dan-su-dung-rsi

        // kien-thuc-forex duplicates (trùng với kien-thuc category)
        'tam-ly-trading-80-phan-tram',     // trùng với tam-ly-trading-yeu-to-thanh-cong
        'ky-thuat-vs-co-ban',             // trùng với phan-tich-ky-thuat-vs-co-ban
        'quan-ly-von-bi-quyet',           // trùng với quan-ly-von-trong-trading
        'bieu-do-nen-nhat-co-ban',        // trùng với cach-doc-bieu-do-nen-nhat-ban
        'forex-la-gi-cam-nang',           // trùng với forex-la-gi-huong-dan-nguoi-moi
    ];

    let deletedCount = 0;
    for (const slug of slugsToDelete) {
        const { data, error: fetchErr } = await supabase
            .from('posts')
            .select('id, title')
            .eq('slug', slug)
            .single();

        if (fetchErr || !data) {
            console.log(`  ⏭️ Không tìm thấy: ${slug}`);
            continue;
        }

        const { error: delErr } = await supabase.from('posts').delete().eq('id', data.id);
        if (delErr) {
            console.error(`  ❌ Lỗi xóa "${data.title}":`, delErr);
        } else {
            console.log(`  ✅ Xóa: "${data.title}" (slug: ${slug})`);
            deletedCount++;
        }
    }

    console.log(`\n  📊 Đã xóa ${deletedCount}/${slugsToDelete.length} bài trùng lặp`);
}

// ============================================================
// STEP 3: Publish 10 bài nháp với thời gian chia đều
// Từ 23:00 ngày 11/02 đến 07:30 ngày 12/02 (giờ Việt Nam)
// ============================================================
async function publishDrafts() {
    console.log('\n📢 STEP 3: Publish bài nháp...');

    // Lấy tất cả bài nháp
    const { data: drafts, error } = await supabase
        .from('posts')
        .select('id, title, slug, category')
        .eq('is_published', false)
        .order('id', { ascending: true });

    if (error) { console.error('❌ Error:', error); return; }
    if (!drafts || drafts.length === 0) {
        console.log('  Không còn bài nháp nào.');
        return;
    }

    console.log(`  Tìm thấy ${drafts.length} bài nháp`);

    // Thời gian: 23:00 ngày 11/02/2026 (VN) = 16:00 UTC ngày 11/02/2026
    // đến 07:30 ngày 12/02/2026 (VN) = 00:30 UTC ngày 12/02/2026
    const startTime = new Date('2026-02-11T16:00:00.000Z'); // 23:00 VN
    const endTime = new Date('2026-02-12T00:30:00.000Z');   // 07:30 VN

    const totalMs = endTime.getTime() - startTime.getTime();
    const intervalMs = drafts.length > 1 ? totalMs / (drafts.length - 1) : 0;

    console.log(`  ⏰ Khoảng cách: ~${Math.round(intervalMs / 60000)} phút/bài`);
    console.log('');

    for (let i = 0; i < drafts.length; i++) {
        const draft = drafts[i];
        const publishTime = new Date(startTime.getTime() + intervalMs * i);

        const { error: updateErr } = await supabase
            .from('posts')
            .update({
                is_published: true,
                published_at: publishTime.toISOString(),
                updated_at: new Date().toISOString()
            })
            .eq('id', draft.id);

        const vnTime = publishTime.toLocaleString('vi-VN', {
            timeZone: 'Asia/Ho_Chi_Minh',
            hour: '2-digit',
            minute: '2-digit',
            day: '2-digit',
            month: '2-digit'
        });

        if (updateErr) {
            console.error(`  ❌ Lỗi publish "${draft.title}":`, updateErr);
        } else {
            console.log(`  ✅ [${vnTime}] ${draft.title}`);
            console.log(`     → /${draft.category}/${draft.slug}`);
        }
    }
}

// ============================================================
// STEP 4: Kiểm tra tổng kết
// ============================================================
async function showSummary() {
    console.log('\n📊 TỔNG KẾT:');

    const { data: all } = await supabase
        .from('posts')
        .select('id, is_published, category')
        .order('id');

    if (!all) return;

    const published = all.filter(p => p.is_published);
    const drafts = all.filter(p => !p.is_published);

    const categories = {};
    for (const p of published) {
        categories[p.category] = (categories[p.category] || 0) + 1;
    }

    console.log(`  Tổng bài viết: ${all.length}`);
    console.log(`  ✅ Đã publish: ${published.length}`);
    console.log(`  ⏸️ Còn nháp: ${drafts.length}`);
    console.log('  📂 Theo category:');
    for (const [cat, count] of Object.entries(categories)) {
        console.log(`     - ${cat}: ${count} bài`);
    }
}

// ============================================================
// RUN ALL
// ============================================================
async function main() {
    console.log('🚀 SanUyTin.net - Cleanup & Publish Script');
    console.log('==========================================');

    await deleteTestPosts();
    await deleteDuplicates();
    await publishDrafts();
    await showSummary();

    console.log('\n✨ Hoàn tất! Sẵn sàng deploy.');
}

main().catch(console.error);
