// Script 1 lần: Lên lịch lại 16 bài quá hạn
// Trải đều từ 03/03 đến 11/03 (2 bài/ngày ở 09:00 và 15:00 VN)
// Xen kẽ với lịch hiện tại (07:00, 12:00, 18:00)

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    'https://pbxpjmklrkkwatdvacap.supabase.co',
    'sb_publishable_difW1C728CGH7Hgr1g9FOg_QdP0NtFD'
);

// 16 bài quá hạn (IDs từ report)
const OVERDUE_IDS = [
    '45a99d63-b20b-4d82-bf29-0e38c33df757',  // Đầu tư chủ động vs bị động
    '258ec912-7346-47e7-87c2-9db03de177fc',  // Phân bổ tài sản theo độ tuổi
    '5250d1f3-0493-4430-97fe-9c6c477dcce1',  // Đầu tư cổ phiếu cổ tức
    '13e3ea7a-77b8-4a28-87aa-17bbd6d379dd',  // Quản lý rủi ro danh mục đầu tư
    '70f19cdb-d058-4391-bc3c-74d6521e09bf',  // Tâm lý đám đông trong đầu tư
    '4f5171e1-16a8-4f15-ad47-f9372372ed47',  // Hướng dẫn mở TK chứng khoán
    'bee6f933-b29a-4173-b484-df425c0b751b',  // Đầu tư xu hướng AI
    '3b9ad3b3-1ed6-4824-bddb-32db63b61bc0',  // Altcoin là gì?
    '6c73d6f9-e909-4cde-94a9-92078c13163a',  // Đầu tư thị trường quốc tế
    'b5e4e09d-7c29-4798-bbc2-6e751c3e73ed',  // Mua nhà hay thuê nhà
    '7d3ea1ef-302e-44dc-b454-afa541816655',  // DeFi là gì?
    'b06b17a7-9980-4956-b7e2-e6e065d49ffe',  // KN đầu tư từ Warren Buffett
    '799d6485-4113-494f-87ef-0b698ac33d14',  // YTM là gì?
    'bfa5efa9-a0f1-4c86-b371-bcb3a28e70ed',  // Hướng dẫn đầu tư ETF
    'df855f93-af4c-4879-a48b-82ff8d527110',  // VN30 ETF là gì?
    '8a45dedd-bed2-49d9-b345-60382a9b37a2',  // VNFIN Lead ETF
];

// Lịch mới: 2 bài/ngày ở 09:00 VN (02:00 UTC) và 15:00 VN (08:00 UTC)
// Xen kẽ với lịch hiện tại (07:00, 12:00, 18:00)
// Bắt đầu: 03/03 15:00 VN (hôm nay, slot gần nhất)
const schedule = [
    // 03/03 - 1 bài (hôm nay, chỉ còn slot 15:00)
    '2026-03-03T08:00:00Z',  // 15:00 VN

    // 04/03 - 2 bài
    '2026-03-04T02:00:00Z',  // 09:00 VN
    '2026-03-04T08:00:00Z',  // 15:00 VN

    // 05/03 - 2 bài
    '2026-03-05T02:00:00Z',  // 09:00 VN
    '2026-03-05T08:00:00Z',  // 15:00 VN

    // 06/03 - 2 bài
    '2026-03-06T02:00:00Z',  // 09:00 VN
    '2026-03-06T08:00:00Z',  // 15:00 VN

    // 07/03 - 2 bài
    '2026-03-07T02:00:00Z',  // 09:00 VN
    '2026-03-07T08:00:00Z',  // 15:00 VN

    // 08/03 - 2 bài
    '2026-03-08T02:00:00Z',  // 09:00 VN
    '2026-03-08T08:00:00Z',  // 15:00 VN

    // 09/03 - 2 bài
    '2026-03-09T02:00:00Z',  // 09:00 VN
    '2026-03-09T08:00:00Z',  // 15:00 VN

    // 10/03 - 2 bài
    '2026-03-10T02:00:00Z',  // 09:00 VN
    '2026-03-10T08:00:00Z',  // 15:00 VN
];

async function reschedule() {
    console.log('\n=== LEN LICH LAI 16 BAI QUA HAN ===\n');

    let ok = 0, fail = 0;

    for (let i = 0; i < OVERDUE_IDS.length; i++) {
        const id = OVERDUE_IDS[i];
        const newTime = schedule[i];
        const vnTime = new Date(newTime).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });

        // Fetch title
        const { data: post } = await supabase
            .from('posts')
            .select('title')
            .eq('id', id)
            .single();

        const title = post?.title || 'Unknown';

        const { error } = await supabase
            .from('posts')
            .update({
                scheduled_at: newTime,
                is_published: false,
                updated_at: new Date().toISOString()
            })
            .eq('id', id);

        if (error) {
            console.log(`  X [${i + 1}] FAIL: ${title} - ${error.message}`);
            fail++;
        } else {
            console.log(`  V [${String(i + 1).padStart(2)}] ${vnTime} | ${title}`);
            ok++;
        }
    }

    console.log(`\nKet qua: ${ok} thanh cong, ${fail} loi`);
    console.log('\nLich moi:');
    console.log('  03/03: 1 bai (15:00)');
    console.log('  04/03 - 10/03: 2 bai/ngay (09:00, 15:00)');
    console.log('  Xen ke voi lich hien tai (07:00, 12:00, 18:00) = 5 bai/ngay');
}

reschedule().catch(console.error);
