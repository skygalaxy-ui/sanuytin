import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
config({ path: '.env.local' });

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Map slug → internal link data
const postLinks = {
    'forex-la-gi-huong-dan-toan-dien': {
        relatedLinks: [
            { anchor: 'top sàn Forex uy tín nhất', href: '/tin-tuc/top-san-forex-uy-tin-viet-nam' },
            { anchor: 'phân tích kỹ thuật cơ bản', href: '/tin-tuc/phan-tich-ky-thuat-forex-chi-bao-quan-trong' },
        ],
        faq: `<h2>Câu Hỏi Thường Gặp (FAQ)</h2>
<h3>Forex có hợp pháp tại Việt Nam không?</h3>
<p>Hiện tại, Forex chưa được quản lý chính thức tại Việt Nam. Tuy nhiên, pháp luật không cấm cá nhân tham gia giao dịch qua các sàn quốc tế uy tín. Điều quan trọng là chọn sàn có giấy phép từ các cơ quan quản lý lớn như FCA, ASIC, CySEC để đảm bảo an toàn vốn.</p>
<h3>Cần bao nhiêu vốn để bắt đầu giao dịch Forex?</h3>
<p>Bạn có thể bắt đầu với số vốn rất nhỏ — nhiều sàn cho phép mở tài khoản từ $1-$10. Tuy nhiên, để giao dịch có kỷ luật và quản lý vốn tốt, nên bắt đầu với ít nhất $100-$500 và sử dụng lot nhỏ (micro lot).</p>
<h3>Forex có thể kiếm được bao nhiêu tiền?</h3>
<p>Lợi nhuận từ Forex không cố định và phụ thuộc vào nhiều yếu tố: vốn, chiến lược, kỷ luật giao dịch và kinh nghiệm. Trader chuyên nghiệp thường đặt mục tiêu 5-15% lợi nhuận mỗi tháng. Cẩn thận với ai cam kết lợi nhuận cố định cao — đó thường là dấu hiệu lừa đảo.</p>
<h3>Nên chọn tài khoản demo hay tài khoản thật khi mới bắt đầu?</h3>
<p>Luôn bắt đầu bằng <a href="/tin-tuc/tai-khoan-demo-forex-huong-dan-thuc-hanh">tài khoản demo</a>. Thực hành ít nhất 2-3 tháng trên demo trước khi chuyển sang tài khoản thật với số vốn nhỏ. Đây là cách an toàn nhất để học hỏi mà không mất tiền.</p>`
    },
    'top-san-forex-uy-tin-viet-nam': {
        relatedLinks: [
            { anchor: 'kiến thức Forex cơ bản cho người mới', href: '/tin-tuc/forex-la-gi-huong-dan-toan-dien' },
            { anchor: 'cách quản lý vốn hiệu quả khi giao dịch', href: '/tin-tuc/quan-ly-von-forex-nguyen-tac-vang' },
        ],
        faq: `<h2>Câu Hỏi Thường Gặp (FAQ)</h2>
<h3>Sàn Forex nào phù hợp với người mới?</h3>
<p>XM và Exness là hai lựa chọn tốt nhất cho người mới vì vốn mở tài khoản thấp ($1-$5), hỗ trợ tiếng Việt 24/7, và có tài khoản demo không giới hạn. Cả hai đều cung cấp tài liệu giáo dục phong phú bằng tiếng Việt.</p>
<h3>Nạp rút tiền sàn Forex mất bao lâu?</h3>
<p>Thời gian phụ thuộc vào từng sàn và phương thức thanh toán. Với các sàn hàng đầu như Exness, rút tiền qua ngân hàng nội địa mất 15 phút - 24 giờ. IC Markets và Pepperstone thường mất 1-3 ngày làm việc qua chuyển khoản ngân hàng.</p>
<h3>Có bị mất tiền khi sàn Forex đóng cửa không?</h3>
<p>Nếu chọn sàn có giấy phép của FCA (Anh) hoặc ASIC (Úc), tiền của bạn được bảo vệ theo chương trình bồi thường nhà đầu tư. Ví dụ, FCA bảo hiểm lên đến £85,000 cho mỗi khách hàng. Đây là lý do vì sao giấy phép là tiêu chí số 1 khi chọn sàn.</p>
<h3>Spread thấp nghĩa là gì? Tại sao quan trọng?</h3>
<p>Spread là chênh lệch giữa giá mua và giá bán — đây là chi phí giao dịch chính bạn phải trả. Spread càng thấp, chi phí càng ít, đặc biệt quan trọng với trader <a href="/tin-tuc/scalping-forex-chien-luoc-giao-dich-ngan-han">giao dịch ngắn hạn (scalping)</a> do tần suất vào lệnh cao.</p>`
    },
    'phan-tich-ky-thuat-forex-chi-bao-quan-trong': {
        relatedLinks: [
            { anchor: 'mô hình nến Nhật và Price Action', href: '/tin-tuc/doc-bieu-do-nen-nhat-mo-hinh-price-action' },
            { anchor: 'quản lý vốn khi áp dụng phân tích kỹ thuật', href: '/tin-tuc/quan-ly-von-forex-nguyen-tac-vang' },
        ],
        faq: `<h2>Câu Hỏi Thường Gặp (FAQ)</h2>
<h3>Phân tích kỹ thuật và phân tích cơ bản, nên dùng cái nào?</h3>
<p>Cả hai đều quan trọng nhưng phục vụ mục đích khác nhau. Phân tích kỹ thuật giúp xác định thời điểm vào/thoát lệnh chính xác, còn <a href="/tin-tuc/phan-tich-co-ban-forex-yeu-to-kinh-te">phân tích cơ bản</a> giúp hiểu xu hướng dài hạn. Trader chuyên nghiệp thường kết hợp cả hai.</p>
<h3>Nên chọn khung thời gian nào để phân tích?</h3>
<p>Phụ thuộc vào phong cách giao dịch: Scalper dùng M5-M15, day trader dùng H1-H4, swing trader dùng H4-D1. Nguyên tắc: phân tích trên khung lớn hơn để xác định xu hướng, rồi zoom vào khung nhỏ để tìm điểm vào lệnh.</p>
<h3>Chỉ báo nào quan trọng nhất cho người mới?</h3>
<p>Bắt đầu với Moving Average (MA) và RSI — đây là 2 chỉ báo đơn giản nhất nhưng hiệu quả cao. MA giúp xác định xu hướng, RSI giúp phát hiện vùng quá mua/quá bán. Sau khi thành thạo, bạn có thể thêm MACD và Bollinger Bands.</p>`
    },
    'quan-ly-von-forex-nguyen-tac-vang': {
        relatedLinks: [
            { anchor: 'tâm lý giao dịch và cách kiểm soát cảm xúc', href: '/tin-tuc/tam-ly-giao-dich-forex-kiem-soat-cam-xuc' },
            { anchor: 'mở tài khoản demo để thực hành', href: '/tin-tuc/tai-khoan-demo-forex-huong-dan-thuc-hanh' },
        ],
        faq: `<h2>Câu Hỏi Thường Gặp (FAQ)</h2>
<h3>Quy tắc 2% có áp dụng cho mọi cặp tiền không?</h3>
<p>Có, quy tắc 2% áp dụng cho MỌI giao dịch bất kể cặp tiền nào. Tuy nhiên, với các cặp tiền biến động mạnh như GBP/JPY, bạn có thể giảm xuống 1% để bù đắp rủi ro cao hơn.</p>
<h3>Đòn bẩy cao có tốt không?</h3>
<p>Đòn bẩy cao là con dao hai lưỡi. Đòn bẩy 1:500 nghĩa là $100 kiểm soát $50,000 — lợi nhuận khuếch đại nhưng thua lỗ cũng vậy. Người mới nên dùng đòn bẩy tối đa 1:100, sau đó tăng dần khi đã có kinh nghiệm.</p>
<h3>Cháy tài khoản là gì? Làm sao tránh?</h3>
<p>Cháy tài khoản (margin call) xảy ra khi vốn giảm xuống dưới mức ký quỹ tối thiểu, sàn tự động đóng tất cả lệnh. Cách tránh: luôn áp dụng quy tắc 2%, đặt stop loss mỗi lệnh, và không mở quá nhiều lệnh cùng lúc (tổng rủi ro <6% vốn).</p>`
    },
    'doc-bieu-do-nen-nhat-mo-hinh-price-action': {
        relatedLinks: [
            { anchor: '7 chỉ báo phân tích kỹ thuật quan trọng', href: '/tin-tuc/phan-tich-ky-thuat-forex-chi-bao-quan-trong' },
            { anchor: 'chiến lược scalping với mô hình nến', href: '/tin-tuc/scalping-forex-chien-luoc-giao-dich-ngan-han' },
        ],
        faq: `<h2>Câu Hỏi Thường Gặp (FAQ)</h2>
<h3>Mô hình nến Nhật có chính xác 100% không?</h3>
<p>Không có mô hình nào chính xác 100%. Mô hình nến là xác suất, không phải chắc chắn. Engulfing có tỷ lệ đúng khoảng 63-68%, Hammer khoảng 60%. Luôn kết hợp với vùng hỗ trợ/kháng cự và các chỉ báo khác để tăng xác suất.</p>
<h3>Khung thời gian nào phù hợp nhất cho Price Action?</h3>
<p>Price Action hoạt động tốt nhất trên khung H4 và D1 vì các mô hình nến trên khung lớn đáng tin cậy hơn. Trên khung M5, M15 có quá nhiều nhiễu (noise) khiến mô hình nến kém chính xác.</p>
<h3>Nên học bao nhiêu mô hình nến?</h3>
<p>Nắm vững 5-7 mô hình chính là đủ: Hammer, Engulfing, Doji, Morning/Evening Star, Pin Bar. Đừng cố nhớ tất cả 40+ mô hình — tập trung vào ít nhưng thành thạo tốt hơn nhiều so với biết nhiều nhưng hời hợt.</p>`
    },
    'scalping-forex-chien-luoc-giao-dich-ngan-han': {
        relatedLinks: [
            { anchor: 'quản lý vốn hiệu quả cho scalper', href: '/tin-tuc/quan-ly-von-forex-nguyen-tac-vang' },
            { anchor: 'hướng dẫn sử dụng MetaTrader 4 cho scalping', href: '/tin-tuc/metatrader-4-huong-dan-su-dung' },
        ],
        faq: `<h2>Câu Hỏi Thường Gặp (FAQ)</h2>
<h3>Scalping có phù hợp với người mới không?</h3>
<p>Không khuyến khích người mới scalp ngay. Scalping đòi hỏi phản xạ nhanh, kỷ luật cao và hiểu biết sâu về thị trường. Nên bắt đầu với swing trading (giữ lệnh vài ngày) trước, sau 6-12 tháng kinh nghiệm mới chuyển sang scalping.</p>
<h3>Sàn nào tốt nhất cho scalping?</h3>
<p>IC Markets và Pepperstone là hai sàn tốt nhất cho scalping nhờ spread raw từ 0.0 pip, tốc độ khớp lệnh dưới 40ms, và không có requote. Xem thêm <a href="/tin-tuc/top-san-forex-uy-tin-viet-nam">so sánh chi tiết các sàn</a>.</p>
<h3>Scalping một ngày kiếm được bao nhiêu?</h3>
<p>Một scalper kỷ luật thường nhắm 10-30 pip/ngày. Với tài khoản $1,000 giao dịch 0.1 lot, 20 pip ≈ $20/ngày ≈ $400/tháng (20 ngày). Tuy nhiên đây là kịch bản lý tưởng — thực tế có ngày lãi, có ngày lỗ.</p>`
    },
    'tam-ly-giao-dich-forex-kiem-soat-cam-xuc': {
        relatedLinks: [
            { anchor: 'quy tắc quản lý vốn giúp giảm căng thẳng', href: '/tin-tuc/quan-ly-von-forex-nguyen-tac-vang' },
            { anchor: 'thực hành trên tài khoản demo trước', href: '/tin-tuc/tai-khoan-demo-forex-huong-dan-thuc-hanh' },
        ],
        faq: `<h2>Câu Hỏi Thường Gặp (FAQ)</h2>
<h3>Tại sao trader thua tiền dù biết chiến lược đúng?</h3>
<p>80% lý do là tâm lý: sợ thua nên cắt lãi sớm, tham nên giữ lệnh lỗ quá lâu, revenge trading sau khi thua, và overtrading khi đang thắng. Giải pháp: luôn tuân thủ trading plan đã viết sẵn, không quyết định trong lúc thị trường đang biến động mạnh.</p>
<h3>Làm sao kiểm soát FOMO trong giao dịch?</h3>
<p>FOMO (Fear Of Missing Out) là kẻ thù số 1 của trader. Cách khắc phục: nhớ rằng thị trường luôn có cơ hội mới, đặt alert giá thay vì ngồi canh chart liên tục, và tuân thủ checklist vào lệnh — nếu không đủ điều kiện thì KHÔNG vào lệnh.</p>
<h3>Nên giao dịch bao nhiêu giờ mỗi ngày?</h3>
<p>Chất lượng quan trọng hơn số lượng. 2-4 giờ tập trung cao độ tốt hơn 12 giờ ngồi canh chart mệt mỏi. Chọn 1-2 phiên giao dịch phù hợp (ví dụ: phiên London 14:00-18:00), phân tích trước khi phiên bắt đầu, và nghỉ ngơi đúng giờ.</p>`
    },
    'metatrader-4-huong-dan-su-dung': {
        relatedLinks: [
            { anchor: 'chọn sàn Forex hỗ trợ MT4 tốt nhất', href: '/tin-tuc/top-san-forex-uy-tin-viet-nam' },
            { anchor: 'thiết lập chỉ báo kỹ thuật trên MT4', href: '/tin-tuc/phan-tich-ky-thuat-forex-chi-bao-quan-trong' },
        ],
        faq: `<h2>Câu Hỏi Thường Gặp (FAQ)</h2>
<h3>MT4 và MT5, nên dùng cái nào?</h3>
<p>MT4 vẫn phổ biến nhất với cộng đồng EA lớn, indicator phong phú và giao diện quen thuộc. MT5 có thêm khung thời gian, lịch kinh tế tích hợp và hỗ trợ hedging. Người mới nên bắt đầu với MT4, chuyển sang MT5 khi cần tính năng nâng cao.</p>
<h3>MT4 trên điện thoại có đầy đủ tính năng không?</h3>
<p>MT4 Mobile có đầy đủ tính năng cơ bản: đặt lệnh, xem biểu đồ, thêm chỉ báo, quản lý lệnh. Tuy nhiên thiếu EA (robot giao dịch) và một số công cụ vẽ nâng cao. Nên dùng MT4 Desktop để phân tích, MT4 Mobile để theo dõi và quản lý lệnh khi di chuyển.</p>
<h3>EA trên MT4 có kiếm tiền tự động được không?</h3>
<p>EA có thể giao dịch tự động theo chiến lược đã lập trình, nhưng không có EA nào kiếm tiền 100% — thị trường luôn thay đổi. Nên kiểm tra EA trên back-test ít nhất 2 năm dữ liệu và forward-test trên demo 3 tháng trước khi dùng tiền thật.</p>`
    },
    'phan-tich-co-ban-forex-yeu-to-kinh-te': {
        relatedLinks: [
            { anchor: 'kết hợp với phân tích kỹ thuật để giao dịch', href: '/tin-tuc/phan-tich-ky-thuat-forex-chi-bao-quan-trong' },
            { anchor: 'lịch kinh tế và cách đọc tin tức Forex', href: '/tin-tuc/forex-la-gi-huong-dan-toan-dien' },
        ],
        faq: `<h2>Câu Hỏi Thường Gặp (FAQ)</h2>
<h3>Tin tức nào ảnh hưởng lớn nhất đến Forex?</h3>
<p>Lãi suất của ngân hàng trung ương (Fed, ECB, BoE) có tác động mạnh nhất. Tiếp theo là Non-Farm Payrolls (NFP) công bố vào thứ Sáu đầu tháng, GDP, CPI (lạm phát), và các quyết định chính sách tiền tệ. Theo dõi lịch kinh tế để biết thời điểm công bố.</p>
<h3>Có nên giao dịch khi có tin tức lớn?</h3>
<p>Trader mới KHÔNG nên giao dịch trong 15 phút trước và sau khi tin lớn được công bố. Biến động có thể rất mạnh và không dự đoán được, spread thường giãn rộng. Trader kinh nghiệm có thể giao dịch tin tức nhưng cần <a href="/tin-tuc/quan-ly-von-forex-nguyen-tac-vang">quản lý vốn cực kỳ chặt chẽ</a>.</p>
<h3>Phân tích cơ bản hay kỹ thuật quan trọng hơn?</h3>
<p>Phân tích cơ bản trả lời "WHAT" (nên mua hay bán), phân tích kỹ thuật trả lời "WHEN" (khi nào vào lệnh). Kết hợp cả hai cho kết quả tốt nhất: dùng cơ bản để xác định xu hướng lớn, dùng kỹ thuật để tìm điểm vào tối ưu.</p>`
    },
    'tai-khoan-demo-forex-huong-dan-thuc-hanh': {
        relatedLinks: [
            { anchor: 'chọn sàn Forex uy tín để mở demo', href: '/tin-tuc/top-san-forex-uy-tin-viet-nam' },
            { anchor: 'áp dụng quản lý vốn khi chuyển sang tài khoản thật', href: '/tin-tuc/quan-ly-von-forex-nguyen-tac-vang' },
        ],
        faq: `<h2>Câu Hỏi Thường Gặp (FAQ)</h2>
<h3>Tài khoản demo có giống hệt tài khoản thật không?</h3>
<p>Về mặt kỹ thuật, demo gần giống thật: cùng nền tảng, cùng biểu đồ, cùng chỉ báo. Tuy nhiên, sự khác biệt lớn nhất nằm ở TÂM LÝ — giao dịch tiền ảo không tạo áp lực cảm xúc như tiền thật. Đây là lý do trader demo thắng nhưng chuyển thật lại thua.</p>
<h3>Nên dùng demo bao lâu trước khi chuyển sang thật?</h3>
<p>Tối thiểu 2-3 tháng, đảm bảo: có chiến lược nhất quán, quản lý vốn kỷ luật, và lợi nhuận dương trong ít nhất 2 tháng liên tiếp. Khi chuyển sang thật, bắt đầu với vốn nhỏ ($50-$100) và lot nhỏ nhất có thể.</p>
<h3>Demo có hết hạn không?</h3>
<p>Phụ thuộc vào sàn. XM và Exness cung cấp tài khoản demo không giới hạn thời gian. IC Markets demo hết hạn sau 30 ngày nhưng có thể mở lại dễ dàng. Luôn kiểm tra chính sách demo của sàn trước khi đăng ký.</p>`
    }
};

async function updatePosts() {
    console.log('📝 Bắt đầu cập nhật 10 bài viết...\n');

    // Get all posts
    const { data: posts, error } = await supabase
        .from('posts')
        .select('id, slug, content')
        .order('created_at', { ascending: true });

    if (error) { console.error('Lỗi:', error.message); return; }

    let updated = 0;
    for (const post of posts) {
        const linkData = postLinks[post.slug];
        if (!linkData) {
            console.log(`⏭ Bỏ qua: ${post.slug} (không có dữ liệu update)`);
            continue;
        }

        let newContent = post.content;

        // 1. Replace generic cachdautu.com links with specific cross-links
        const links = linkData.relatedLinks;
        // Replace first generic link
        newContent = newContent.replace(
            /<a href="https:\/\/cachdautu\.com\/">[^<]+<\/a>/i,
            `<a href="${links[0].href}">${links[0].anchor}</a>`
        );
        // Replace second generic link
        if (links[1]) {
            newContent = newContent.replace(
                /<a href="https:\/\/cachdautu\.com\/">[^<]+<\/a>/i,
                `<a href="${links[1].href}">${links[1].anchor}</a>`
            );
        }

        // 2. Add FAQ section at the end (if not already present)
        if (!newContent.includes('Câu Hỏi Thường Gặp') && linkData.faq) {
            newContent += '\n' + linkData.faq;
        }

        // 3. Update in database
        const { error: updateError } = await supabase
            .from('posts')
            .update({ content: newContent })
            .eq('id', post.id);

        if (updateError) {
            console.error(`❌ ${post.slug}:`, updateError.message);
        } else {
            console.log(`✅ ${post.slug} — links + FAQ updated`);
            updated++;
        }
    }

    console.log(`\n🎉 Hoàn thành! Cập nhật ${updated}/${Object.keys(postLinks).length} bài viết.`);
}

updatePosts();
