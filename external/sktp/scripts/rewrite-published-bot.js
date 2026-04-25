const { createClient } = require('@supabase/supabase-js');
const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const html1 = `
<p>Công tác tổ chức sự kiện chuyên nghiệp luôn đòi hỏi sự chuẩn bị kĩ càng đến từng chi tiết nhỏ nhất. Nếu bạn là một thành viên của phòng Hành chính Nhân sự (HR), chắc hẳn bạn đã trải qua cảm giác quá tải khi phải chạy đua với hàng trăm đầu việc không tên để tạo nên một sự kiện nội bộ trọn vẹn. Để giải quyết triệt để vấn đề này, việc sở hữu một <strong>Mẫu Checklist Phiếu Tổ Chức Sự Kiện Tỉ Mỉ</strong> là một chiếc "phao cứu sinh" không thể thiếu, giúp tối ưu chi phí và bứt phá doanh thu cho doanh nghiệp.</p>

<h2>Quy trình Tiền sự kiện (Pre-event)</h2>
<p>Khu vực tiền sự kiện thường chiếm từ 60-70% yếu tố quyết định sự sống còn của toàn bộ chương trình. Việc thiết lập hệ thống từ những ngày đầu sẽ tạo ra bộ khung vững chắc.</p>
<ul>
    <li><strong>Xác định Mục tiêu và Ngân sách:</strong> Cần thống nhất rõ số lượng khách mời, định mức chi tiêu trên từng người (cost per head) và <strong>Mẫu Checklist Truyền Thông</strong>.</li>
    <li><strong>Khảo sát địa điểm:</strong> Chọn lựa không gian đáp ứng đủ các yếu tố như sức chứa, bãi đậu xe, và phương án dự phòng thời tiết.</li>
    <li><strong>Lên Kịch bản chi tiết:</strong> Chuẩn bị Timeline rõ ràng từng phút, kịch bản MC, kịch bản âm thanh, ánh sáng.</li>
</ul>

<img src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1200&auto=format&fit=crop" alt="Pre-event chuẩn bị sự kiện cho HR" />

<h2>Giai đoạn Chạy sự kiện (In-event)</h2>
<p>Đây là lúc toàn bộ <strong>Checklist Phiếu Tổ Chức Sự Kiện</strong> bước vào thực chiến. Để mọi thứ diễn ra trơn tru, người quản lý nhân sự (HR) cần bao quát và sát sao tới từng nhân sự phụ trách từng bộ phận.</p>
<ul>
    <li><strong>Đón khách (Check-in):</strong> Có đầy đủ danh sách, bảng tên, máy quét barcode QR, và đội ngũ PG nhiệt tình.</li>
    <li><strong>Kiểm soát sân khấu:</strong> Theo dõi tín hiệu cùng đạo diễn sân khấu để điều phối MC và tiết mục chính.</li>
    <li><strong>Tiệc tùng (F&B):</strong> Kiểm tra sát sao thời gian lên món ăn, chất lượng đồ uống để đảm bảo khách mời được phục vụ chu đáo nhất.</li>
</ul>

<img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop" alt="In-event dành cho sự kiện nhân sự" />

<h2>Hậu kỳ và Đánh giá (Post-event)</h2>
<p>Rất nhiều HR bỏ quên giai đoạn hậu sự kiện dù nó mang tới giá trị dữ liệu và uy tín thương hiệu vô cùng to lớn. Hãy đánh giá lại hiệu suất và rút kinh nghiệm cho sự kiện sau.</p>
<ul>
    <li><strong>Quyết toán và Thanh lý hợp đồng:</strong> Rà soát toàn bộ chi phí thực tế so với ngân sách dự kiến, chốt công nợ với các đối tác cung cấp dịch vụ sự kiện.</li>
    <li><strong>Khảo sát mức độ hài lòng:</strong> Gửi form đánh giá (Survey) trực tuyến qua email đến toàn bộ khách mời để thấu hiểu chất lượng thực tế.</li>
    <li><strong>Báo cáo tổng kết:</strong> Tổ chức cuộc họp nội bộ Review lại các rủi ro đã gặp, vinh danh những cá nhân làm xuất sắc.</li>
</ul>

<img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Đánh giá sau sự kiện doanh nghiệp" />

<h2>Giải Pháp Tối Ưu Tới Từ Sự Kiện Toàn Quốc</h2>
<p>Đừng tự ôm rủi ro khi tổ chức sự kiện nếu bạn gặp giới hạn về nhân lực. Hãy liên hệ ngay với <strong>Sự Kiện Toàn Quốc</strong> qua Hotline để nhận kịch bản miễn phí và Báo giá sỉ thiết bị, thi công tiết kiệm đến kinh ngạc! Chúng tôi sẽ mang đến giải pháp trọn gói, chuyên nghiệp và tận tâm nhất.</p>
`;

const html2 = `
<p>Xin giấy phép tổ chức sự kiện thường là chướng ngại vật lớn nhất khiến nhiều ban tổ chức và chủ doanh nghiệp đau đầu vì các thủ tục hành chính phức tạp, tốn kém thời gian chờ đợi. Bài viết này sẽ phân tích lý do tại sao một dịch vụ <strong>Báo Giá Trọn Gói Xin Giấy Phép Tổ Chức Sự Kiện Nhanh Cấp Tốc</strong> lại trở thành "chìa khóa vàng" bảo chứng cho tiến độ thi công và hạn chế triệt để các án phạt tài chính nặng nề.</p>

<h2>Quy trình thủ tục hành chính phức tạp như thế nào?</h2>
<p>Tùy từng tính chất của chương trình như văn hóa, ca nhạc, hội chợ hay thể thao mà quy trình và thủ tục xin phép sẽ được thẩm định bởi các cơ quan quản lý khác nhau: Sở Văn hóa - Thể thao, Sở Công Thương hay UBND Địa phương.</p>
<ul>
    <li><strong>Chuẩn bị hồ sơ rườm rà:</strong> Đơn xin phép, bản sao công chứng hợp đồng thuê mặt bằng, kịch bản chi tiết có đóng dấu, hồ sơ phòng cháy chữa cháy an ninh trật tự (PCCC).</li>
    <li><strong>Thời gian thẩm định lâu:</strong> Thông thường từ 7 đến 15 ngày làm việc nếu hồ sơ gặp trục trặc sẽ bị đình trệ vô thời hạn.</li>
</ul>

<img src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1200&auto=format&fit=crop" alt="Quy trình xin giấy phép sự kiện" />

<h2>Dịch vụ Xin Giấy Phép Cấp Tốc Mang Lại Lợi Ích Gì?</h2>
<p>Thay vì phải cắt cử từ 2 đến 3 nhân sự HR/Hành chính liên tục chầu chực tại cơ quan ban ngành, một dịch vụ báo giá xin phép trọn gói mang sự khác biệt lớn lao.</p>
<ul>
    <li><strong>Tốc độ xử lý trong 24h - 48h:</strong> Giải quyết nhanh gọn các biên bản, gỡ vướng những chương trình có yếu tố nhạy cảm, nước ngoài bằng năng lực đối ngoại.</li>
    <li><strong>Chi phí minh bạch, tiết kiệm 90% lỗi phát sinh:</strong> Chỉ báo giá một lần duy nhất, không chi phí lót tay ngầm, có xuất hóa đơn đỏ hợp lệ.</li>
    <li><strong>An toàn tuyệt đối:</strong> Bảo chứng 100% không bị dừng, cắt điện, hủy chương trình do thiếu bất cứ loại giấy phép hành lang nào.</li>
</ul>

<img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop" alt="Báo giá xin phép tổ chức nhanh gọn" />

<h2>Các loại sự kiện buộc phải có xin phép</h2>
<p>Đừng để chương trình diễn ra trong sự phấp phỏng lo âu vì cơ quan công an kiểm tra. Dưới đây là những phạm trù chắc chắn bạn phải xin <strong>Giấy phép sự kiện Nhanh Cấp Tốc</strong> :</p>
<ul>
    <li>Biểu diễn nghệ thuật, fashion show, âm nhạc ngoài trời.</li>
    <li>Triển lãm, hội chợ thương mại và sự kiện quảng cáo khai trương (Roadshow).</li>
    <li>Lễ hội, giải đấu thể thao, cuộc thi sắc đẹp.</li>
</ul>

<img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Sự kiện âm nhạc thể thao cần pháp lý vững" />

<h2>Giải Pháp Trọn Gói Từ Sự Kiện Toàn Quốc</h2>
<p>Hãy dẹp bỏ mọi mệt mỏi về giấy tờ pháp lý! Liên hệ ngay với <strong>Sự Kiện Toàn Quốc</strong> qua Hotline để nhận kịch bản miễn phí và nhận bộ hồ sơ Báo giá sỉ thủ tục xin phép sự kiện tiết kiệm đến kinh ngạc, đảm bảo tiến độ "chuẩn giờ G" cho mọi chương trình!</p>
`;

const html3 = `
<p>Lễ khánh thành không đơn thuần chỉ là khoảnh khắc cắt băng mở cửa một dự án mới, mà đó là điểm khởi đầu kiến tạo nên uy tín và vị thế của các siêu dự án thương mại, nhà máy quốc tế. Sự chuẩn bị dựa trên bộ <strong>Quy Chuẩn Chạy Lễ Tổ Chức Sự Kiện Khánh Thành Chuẩn Mẽo (Chuẩn Mỹ)</strong> mang một thông điệp quyền lực, chuyên nghiệp giúp thu hút hàng nghìn nhà đầu tư từ khắp nơi trên thế giới.</p>

<h2>Quy chuẩn Setup không gian Khánh Thành</h2>
<p>Sự đẳng cấp của bộ chuẩn Mỹ luôn yêu cầu tính tiện dụng, an toàn tuyệt đối và yếu tố "Wow" (mãn nhãn) phải được đề cao trong mọi không gian trang trí trắc địa.</p>
<ul>
    <li><strong>Hệ thống nhà bạt không gian (Truss nhôm cao cấp):</strong> Cam kết cách nhiệt, sàn trải thảm sang trọng chống trơn trượt cùng hệ lam tản nhiệt.</li>
    <li><strong>Âm thanh, ánh sáng và màn hình LED 4K:</strong> Được tính toán bằng hệ thống delay tinh vi, góc phóng hình chuẩn không điểm mù.</li>
    <li><strong>Khu vực đại biểu (VIP):</strong> Thiết lập khu vực tiếp tân đạt chuẩn nguyên thủ, trang bị hàng rào an ninh mềm và barrier kiểm soát bằng QRCode hiện đại.</li>
</ul>

<img src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?q=80&w=1200&auto=format&fit=crop" alt="Quy chuẩn lễ khánh thành nhà máy" />

<h2>Các mốc quan trọng trong Kịch bản Chuẩn Mẽo</h2>
<p>Kịch bản dành cho lễ khánh thành không bao giờ được lê thê, dài dòng. Tính **thực tế** định hình thương hiệu phải diễn ra súc tích nhưng không kém phần trang trọng.</p>
<ul>
    <li><strong>First Impression (Ấn tượng đầu tiên):</strong> Sử dụng band nhạc giao hưởng ngoài trời, đội ngũ lễ tân PG chuyên nghiệp, biết tới 2-3 ngoại ngữ đón VIP từ thảm đỏ.</li>
    <li><strong>Nghi thức cắt băng/Kích hoạt ảo:</strong> Thay vì cắt băng ruy băng đỏ truyền thống, công nghệ "Bấm nút lazer", "Kích hoạt thả bóng" hay "Màn hình tương tác" sẽ tạo ra ấn tượng khổng lồ.</li>
    <li><strong>Keynote Speech (Bài phát biểu ngắn):</strong> Người lãnh đạo doanh nghiệp truyền tải thông điệp ngắn gọn dưới 5 phút, sau đó tổ chức tiệc Champagne thượng lưu.</li>
</ul>

<img src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop" alt="Kịch bản cắt băng khánh thành cấp quốc tế" />

<h2>Quản trị rủi ro cấp cao (Risk Management)</h2>
<p><strong>Cơ chế quản trị rủi ro tổ chức khánh thành</strong> theo quy chuẩn này luôn khắt khe. Các đơn vị thi công phải lên phương án từ dự phòng bão lũ tới cấp cứu tại chỗ.</p>
<ul>
    <li>Cung cấp ít nhất 2 máy phát điện dự phòng tự động chuyển mạch trong 5 giây.</li>
    <li>Thiết lập trạm Y tế lưu động ngay sát khu khánh thành phòng sự cố bất ngờ.</li>
    <li>Biến thiên thời tiết: Gấp đôi hệ thống bạt chê, gia cố cọc trụ chịu bão cấp 8.</li>
</ul>

<img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Quản trị rủi ro an ninh trong sự kiện" />

<h2>Lời Kêu Gọi Từ Sự Kiện Toàn Quốc</h2>
<p>Đừng tự ôm rủi ro khi tổ chức sự kiện quy mô lớn tốn kém cả tỷ đồng với nhân sự tay ngang. Hãy liên hệ ngay với <strong>Sự Kiện Toàn Quốc</strong> qua Hotline để nhận kịch bản tư vấn miễn phí và thụ hưởng Báo giá thiết bị, vận hành chuyên nghiệp tiết kiệm đến kinh ngạc! Chúng tôi sẽ kiến tạo sự kiện đẳng cấp dành riêng cho bạn!</p>
`;

(async () => {
    const data = [
        { title: 'Mẫu Checklist Phiếu Tổ Chức Sự Kiện Tỉ Mỉ Dành Cho HR', content: html1 },
        { title: 'Báo Giá Trọn Gói Xin Giấy Phép Tổ Chức Sự Kiện Nhanh Cấp Tốc', content: html2 },
        { title: 'Quy Chuẩn Chạy Lễ Tổ Chức Sự Kiện Khánh Thành Chuẩn Mẽo', content: html3 },
    ];
    
    for (const item of data) {
        await supabaseAdmin.from('posts').update({ content: item.content }).eq('title', item.title);
        console.log('Fully rewritten:', item.title);
    }
})();
