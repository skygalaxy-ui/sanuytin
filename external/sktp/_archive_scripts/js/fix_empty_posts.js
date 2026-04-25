const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');
const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

(async () => {
    const titles = [
        'Mẫu Checklist Phiếu Tổ Chức Sự Kiện Tỉ Mỉ Dành Cho HR',
        'Báo Giá Trọn Gói Xin Giấy Phép Tổ Chức Sự Kiện Nhanh Cấp Tốc',
        'Quy Chuẩn Chạy Lễ Tổ Chức Sự Kiện Khánh Thành Chuẩn Mẽo'
    ];
    
    for (const title of titles) {
        const { data: post } = await supabaseAdmin.from('posts').select('id, title, slug').eq('title', title).single();
        if(post) {
            const genericContent = `
                <h2>Đại cương về ${post.title}</h2>
                <p>Trong thời đại công nghiệp tổ chức sự kiện phát triển vũ bão hiện nay, việc chuẩn bị kỹ lưỡng và lên phương án chi tiết là tối quan trọng. Chủ đề <strong>${post.title}</strong> đang trở thành tâm điểm chú ý của đông đảo các bộ phận nhân sự, bộ phận tổ chức sự kiện và ban lãnh đạo các doanh nghiệp lớn. Chúng ta không thể phủ nhận tầm quan trọng của một quy trình được chuẩn hóa nhằm tối ưu chi phí và bứt phá doanh thu.</p>
                <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&auto=format&fit=crop" alt="${post.title}" />
                
                <h3>Tại sao chủ đề này lại cấp thiết đến vậy?</h3>
                <p>Mỗi một sự kiện thành công đều để lại tiếng vang lớn, góp phần khẳng định vị thế thương hiệu trên thị trường. Mọi rủi ro trong quá trình chạy chương trình luôn được giảm thiểu nếu chúng ta chuẩn bị từ sớm. Dưới đây là những lợi ích cốt lõi:</p>
                <ul>
                    <li>Giảm thiểu tối đa 90% các chi phí phát sinh không đáng có trong quá trình thi công.</li>
                    <li>Đảm bảo nhân sự trong ekip hiểu rõ trách nhiệm và vai trò của mình trong hệ thống.</li>
                    <li>Mang đến trải nghiệm mượt mà, đẳng cấp tuyệt đối cho khách mời tham dự chương trình.</li>
                    <li>Khẳng định tên tuổi và uy tín của công ty cung cấp dịch vụ trên thị trường cạnh tranh.</li>
                </ul>
                <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&auto=format&fit=crop" alt="Quy trình chuyên nghiệp" />

                <h3>Các bước triển khai và vận hành chuyên nghiệp</h3>
                <p>Để hoàn thiện được dự án <strong>${post.title}</strong>, đội ngũ sự kiện chuyên nghiệp cần phối hợp nhịp nhàng các bước sau đây. Lưu ý rằng mọi thứ đều phải tuân thủ chuẩn mực cao nhất để không bao giờ xảy ra các sự cố ngoài ý muốn.</p>
                <ol>
                    <li><strong>Hoạch định nguồn lực:</strong> Phân bổ ngân sách một cách khôn ngoan, quản trị thời gian và đội ngũ hậu cần chặt chẽ.</li>
                    <li><strong>Xin phép và Pháp lý:</strong> Hoàn thành toàn bộ các thủ tục giấy tờ, thỏa thuận với chính quyền và đơn vị cho thuê địa điểm.</li>
                    <li><strong>Chạy thử chương trình (Rehearsal):</strong> Rà soát thiết bị, âm thanh, ánh sáng và chạy Rehearsal ít nhất từ 2 đến 3 lần.</li>
                    <li><strong>Nghiệm thu báo cáo:</strong> Đánh giá mức độ hoàn thành KPIs và sự hài lòng tuyệt đối của khách mời sau khi kết thúc sự kiện.</li>
                </ol>

                <h3>Tạm kết</h3>
                <p>Quản lý và nắm bắt trọn vẹn <strong>${post.title}</strong> sẽ giúp cho doanh nghiệp tiết kiệm hàng vạn giờ đồng hồ căng thẳng tột độ. Để nhận được trọn bộ kế hoạch chi tiết từ <strong>Sự Kiện Toàn Quốc</strong>, vui lòng liên hệ ngay đội ngũ chuyên gia tư vấn qua hotline để nhận ngay báo giá sỉ tiết kiệm đến kinh ngạc.</p>
            `;
            await supabaseAdmin.from('posts').update({ content: genericContent }).eq('id', post.id);
            console.log('Fixed content for: ' + post.title);
        }
    }
    process.exit(0);
})();
