// Direct REST API call to bypass schema cache
const SUPABASE_URL = 'https://ecipdcojedkbrlggaqja.supabase.co';
const SUPABASE_KEY = 'sb_publishable_B8kWJxP4-o6A5r8e3YbTBg_HwTnFo_K';

async function main() {
    // Test if table exists by direct REST call
    const res = await fetch(`${SUPABASE_URL}/rest/v1/page_content?select=id&limit=1`, {
        headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
        }
    });

    const text = await res.text();
    console.log('Status:', res.status);
    console.log('Response:', text);

    if (res.status === 200) {
        console.log('\n✅ Bảng tồn tại! Bắt đầu seed...\n');

        const seedData = [
            { section_id: 'home-hero', page_path: '/', data: { badge: '🏆 TOP 10 SÀN FOREX UY TÍN 2026', title: 'Chọn sàn giao dịch phù hợp với bạn', subtitle: 'Đánh giá khách quan, minh bạch từ đội ngũ chuyên gia với hơn 10 năm kinh nghiệm trong thị trường Forex.', ctaText: 'Xem bảng xếp hạng', ctaLink: '/danh-gia-san' } },
            { section_id: 'home-features', page_path: '/', data: { title: 'Vì sao chọn Sàn Uy Tín?', description: 'Chúng tôi giúp bạn chọn sàn giao dịch an toàn và phù hợp nhất', feature1Title: 'Đánh giá khách quan', feature1Desc: 'Review chi tiết từ đội ngũ chuyên gia', feature2Title: 'Cập nhật liên tục', feature2Desc: 'Thông tin được kiểm tra và cập nhật định kỳ', feature3Title: 'So sánh minh bạch', feature3Desc: 'Bảng so sánh chi tiết giúp bạn dễ dàng lựa chọn' } },
            { section_id: 'home-faq', page_path: '/', data: { title: 'Câu hỏi thường gặp', q1: 'Sàn Forex nào uy tín nhất 2026?', a1: 'Dựa trên đánh giá, các sàn như Vantage, Exness, XM đều là lựa chọn hàng đầu.', q2: 'Mở tài khoản Forex cần bao nhiêu tiền?', a2: 'Hầu hết các sàn cho phép mở tài khoản từ $5-$10.', q3: 'Làm sao biết sàn Forex có an toàn không?', a3: 'Kiểm tra giấy phép quản lý (FCA, ASIC, CySEC).' } },
            { section_id: 'danh-gia-san', page_path: '/danh-gia-san', data: { metaTitle: 'Top 10 Sàn Forex Uy Tín Nhất 2026', metaDescription: 'Bảng xếp hạng 10 sàn Forex uy tín nhất 2026.', pageTitle: 'Bảng xếp hạng Sàn Forex Uy Tín 2026', pageSubtitle: 'Đánh giá khách quan từ đội ngũ chuyên gia' } },
            { section_id: 'so-sanh', page_path: '/so-sanh', data: { metaTitle: 'So Sánh Sàn Forex', metaDescription: 'So sánh chi tiết các sàn Forex hàng đầu.', pageTitle: 'So sánh chi tiết các sàn Forex', pageSubtitle: 'Chọn 2 sàn để xem bảng so sánh toàn diện' } },
            { section_id: 'kien-thuc-forex', page_path: '/kien-thuc-forex', data: { metaTitle: 'Kiến Thức Forex Từ A-Z', metaDescription: 'Tổng hợp kiến thức Forex.', pageTitle: 'Kiến thức Forex từ A-Z', pageSubtitle: 'Nền tảng kiến thức vững chắc cho mọi trader' } },
            { section_id: 'thuat-ngu', page_path: '/thuat-ngu', data: { metaTitle: 'Thuật Ngữ Forex', metaDescription: 'Giải thích các thuật ngữ Forex phổ biến.', pageTitle: 'Thuật ngữ Forex', pageSubtitle: 'Từ điển thuật ngữ giao dịch dễ hiểu' } },
            { section_id: 'tin-tuc', page_path: '/tin-tuc', data: { metaTitle: 'Tin Tức Forex Mới Nhất', metaDescription: 'Tin tức Forex mới nhất.', pageTitle: 'Tin tức Forex mới nhất', pageSubtitle: 'Cập nhật thông tin thị trường mỗi ngày' } },
            { section_id: 'khuyen-mai', page_path: '/khuyen-mai', data: { metaTitle: 'Khuyến Mãi Forex 2026', metaDescription: 'Tổng hợp khuyến mãi, bonus mới nhất.', pageTitle: 'Khuyến mãi từ các sàn Forex', pageSubtitle: 'Tổng hợp ưu đãi tốt nhất' } },
            { section_id: 'cong-cu', page_path: '/cong-cu', data: { metaTitle: 'Công Cụ Trading Miễn Phí', metaDescription: 'Bộ công cụ trading miễn phí.', pageTitle: 'Công cụ Trading', pageSubtitle: 'Các công cụ hỗ trợ giao dịch miễn phí' } },
            { section_id: 'lien-he', page_path: '/lien-he', data: { metaTitle: 'Liên Hệ | Sàn Uy Tín', metaDescription: 'Liên hệ đội ngũ Sàn Uy Tín.', pageTitle: 'Liên hệ với chúng tôi', pageSubtitle: 'Đội ngũ luôn sẵn sàng hỗ trợ bạn', email: 'sanuytin.net@gmail.com', workingHours: 'T2-T6: 8:00 - 17:00 (GMT+7)' } },
            { section_id: 'footer', page_path: 'global', data: { description: 'Sàn Uy Tín là nền tảng đánh giá và so sánh các sàn giao dịch Forex hàng đầu Việt Nam.', email: 'sanuytin.net@gmail.com', facebook: 'https://facebook.com/sanuytin', telegram: 'https://t.me/sanuytin', disclaimer: 'Giao dịch Forex và CFD có rủi ro cao.', copyright: '© 2026 Sàn Uy Tín. All rights reserved.' } },
        ];

        for (const item of seedData) {
            const upsertRes = await fetch(`${SUPABASE_URL}/rest/v1/page_content`, {
                method: 'POST',
                headers: {
                    'apikey': SUPABASE_KEY,
                    'Authorization': `Bearer ${SUPABASE_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'resolution=merge-duplicates',
                },
                body: JSON.stringify(item),
            });

            const status = upsertRes.status;
            if (status === 201 || status === 200) {
                console.log(`  ✅ ${item.section_id}`);
            } else {
                const errText = await upsertRes.text();
                console.log(`  ❌ ${item.section_id} (${status}): ${errText}`);
            }
        }

        // Verify
        const verifyRes = await fetch(`${SUPABASE_URL}/rest/v1/page_content?select=section_id,page_path&order=id`, {
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`,
            }
        });
        const allData = await verifyRes.json();
        console.log(`\n✅ Hoàn tất! ${allData.length} sections:`);
        allData.forEach(d => console.log(`  • ${d.section_id} (${d.page_path})`));
    } else {
        console.log('\n❌ Bảng chưa tồn tại. Hãy tạo trước.');
    }
}

main();
