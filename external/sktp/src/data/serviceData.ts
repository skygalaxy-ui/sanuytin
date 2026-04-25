interface ServiceProcess {
    step: string;
    name: string;
    desc: string;
}

interface ServiceDetail {
    title: string;
    description: string;
    heroImage: string;
    benefits: string[];
    process: ServiceProcess[];
    htmlDetail?: string; // Bổ sung nội dung HTML SEO giàu định dạng cho trang đích
}

export const serviceDetails: Record<string, ServiceDetail> = {
    "to-chuc-teambuilding": {
        title: "Tổ Chức Teambuilding Đột Phá — Kết Nối Đội Ngũ Toàn Diện",
        description: "Đơn vị tổ chức Teambuilding chuyên nghiệp hằng đầu. Chúng tôi không chỉ tổ chức trò chơi, chúng tôi kiến tạo văn hóa và gắn kết con người thông qua những trải nghiệm đột phá.",
        heroImage: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/rescue/1775755121814-ad5df164.jpg",
        benefits: [
            "Hệ thống kịch bản Amazing Race & Survival độc quyền",
            "Đội ngũ điều phối viên (Facilitator) am hiểu tâm lý tổ chức",
            "Đạo cụ Teambuilding quy mô Pro-Max, nhập khẩu 100%",
            "Quản trị rủi ro tuyệt đối với gói bảo hiểm sự kiện trọn gói",
            "Truyền thông sau sự kiện: Highlight Video 4K & Ảnh nghệ thuật"
        ],
        process: [
            { step: "01", name: "Deep Briefing", desc: "Phân tích văn hóa doanh nghiệp và mục tiêu cốt lõi của chuyến đi." },
            { step: "02", name: "Concept Creative", desc: "Xây dựng kịch bản độc bản (Tailor-made) dựa trên 'Pain points' của đội ngũ." },
            { step: "03", name: "Live Execution", desc: "Vận hành chuyên nghiệp với dàn MC truyền lửa và hệ thống âm thanh Pro Audio." },
            { step: "04", name: "Insight Report", desc: "Báo cáo chỉ số gắn kết và lưu trữ khoảnh khắc qua thước phim tư liệu." }
        ],
        htmlDetail: `<div class="service-rich-content">
                <section style="margin-bottom: 60px;">
                    <h2 style="font-size: 32px; color: var(--text-heading); margin-bottom: 24px; text-align: center;">Tầm Nhìn Teambuilding Thế Hệ Mới</h2>
                    <p style="text-align: center; max-width: 800px; margin: 0 auto 40px; color: var(--text-secondary);">Chúng tôi định nghĩa lại Teambuilding là một khoản đầu tư chiến lược vào nhân sự, giúp khơi thông điểm nghẽn giao tiếp và thổi bùng ngọn lửa nhiệt huyết.</p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
                        <div style="background: white; padding: 32px; border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); border: 1px solid var(--border);">
                            <div style="width: 50px; height: 50px; background: rgba(249, 115, 22, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; color: var(--orange);">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                            </div>
                            <h4 style="margin-bottom: 12px; font-size: 20px;">Gắn Kết Đa Chiều</h4>
                            <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6;">Xóa bỏ khoảng cách giữa lãnh đạo và nhân viên, giữa các phòng ban chức năng thông qua các thử thách đòi hỏi sự phối hợp tuyệt đối.</p>
                        </div>
                        <div style="background: white; padding: 32px; border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); border: 1px solid var(--border);">
                            <div style="width: 50px; height: 50px; background: rgba(34, 197, 94, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; color: var(--green);">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                            </div>
                            <h4 style="margin-bottom: 12px; font-size: 20px;">Đánh Thức Tiềm Năng</h4>
                            <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.6;">Khám phá những tố chất lãnh đạo ẩn giấu của nhân sự trong những tình huống kịch tính và cần sự quyết đoán.</p>
                        </div>
                    </div>
                </section>

                <section style="margin-bottom: 60px;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80" style="width: 100%; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);" alt="Teambuilding 1" />
                        <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80" style="width: 100%; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);" alt="Teambuilding 2" />
                    </div>
                </section>

                <section style="background: rgba(249, 115, 22, 0.05); padding: 48px; border-radius: 32px; margin-bottom: 60px;">
                    <h3 style="margin-bottom: 24px;">Các Loại Hình Teambuilding Chủ Chốt</h3>
                    <div style="display: flex; flex-direction: column; gap: 20px;">
                        <div style="padding-left: 20px; border-left: 3px solid var(--orange);">
                            <strong style="font-size: 18px; display: block; margin-bottom: 6px;">Amazing Race (Cuộc đua kỳ thú)</strong>
                            <p style="margin: 0; color: var(--text-secondary);">Giải mã mật thư, vượt qua các trạm thử thách tại các điểm danh thắng nổi tiếng.</p>
                        </div>
                        <div style="padding-left: 20px; border-left: 3px solid var(--orange);">
                            <strong style="font-size: 18px; display: block; margin-bottom: 6px;">Big-Game (Huấn luyện quân trường)</strong>
                            <p style="margin: 0; color: var(--text-secondary);">Xây dựng doanh trại, hành quân và tác chiến giả định với đạo cụ phao khổng lồ.</p>
                        </div>
                    </div>
                </section>
            </div>`
    },
    "to-chuc-company-trip": {
        title: "Tổ Chức Company Trip & MICE — Hành Trình Tái Tạo Năng Lượng",
        description: "Dịch vụ du lịch doanh nghiệp kết hợp teambuilding trọn gói. Chúng tôi mang đến những chuyến đi không chỉ để nghỉ dưỡng, mà còn để gắn kết và đánh thức tiềm năng đội ngũ.",
        heroImage: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841385999-fcj900bwtw.webp",
        benefits: [
            "Lịch trình thiết kế riêng (Tailor-made) theo văn hóa doanh nghiệp",
            "Mạng lưới đối tác Resort 4-5 sao toàn quốc với giá ưu đãi",
            "Kết hợp Teambuilding bãi biển và Gala Dinner nghệ thuật",
            "Quản trị Logistics chuyên nghiệp: Xe đời mới, HDV tận tâm",
            "Gói quà tặng lưu niệm và truyền thông (Photo/Video) trọn gói"
        ],
        process: [
            { step: "01", name: "Strategic Planning", desc: "Xác định mục tiêu chuyến đi và tư vấn điểm đến tối ưu ngân sách." },
            { step: "02", name: "Creative Itinerary", desc: "Thiết kế lịch trình kết hợp hài hòa giữa nghỉ dưỡng và gắn kết." },
            { step: "03", name: "Seamless Logistics", desc: "Vận hành trọn gói từ lưu trú, vận chuyển đến các hoạt động sự kiện." },
            { step: "04", name: "Moment Capture", desc: "Tổng kết chuyến đi với kho tư liệu hình ảnh và báo cáo hài lòng khách hàng." }
        ],
        htmlDetail: `<div class="service-rich-content">
                <section style="margin-bottom: 60px; text-align: center;">
                    <h2 style="font-size: 32px; margin-bottom: 20px;">Hành Trình Gắn Kết & Nghỉ Dưỡng</h2>
                    <p style="color: var(--text-secondary); max-width: 700px; margin: 0 auto;">Vượt xa một chuyến du lịch thông thường, Company Trip là dịp để mỗi thành viên cảm nhận được sự trân trọng từ doanh nghiệp.</p>
                </section>

                <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 24px; margin-bottom: 60px;">
                    <img src="https://images.unsplash.com/photo-1583037740263-ed3435e7ff2b?w=1000&q=80" style="width: 100%; height: 400px; object-fit: cover; border-radius: 24px;" alt="Resort" />
                    <div style="display: flex; flex-direction: column; gap: 24px;">
                        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" style="width: 100%; height: 188px; object-fit: cover; border-radius: 24px;" alt="Beach" />
                        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" style="width: 100%; height: 188px; object-fit: cover; border-radius: 24px;" alt="Meeting" />
                    </div>
                </div>
            </div>`
    },
    "to-chuc-year-end-party": {
        title: "Tổ Chức Year End Party Đẳng Cấp — Đêm Tiệc Tri Ân Bùng Nổ",
        description: "Dịch vụ tổ chức tiệc tất niên trọn gói với ý tưởng độc bản. Chúng tôi biến đêm tiệc của doanh nghiệp thành một 'Bản giao hưởng' của cảm xúc, ánh sáng và sự tự hào.",
        heroImage: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841468860-py4m4f8y5kl.webp",
        benefits: [
            "100+ Concept chủ đề độc đáo (Oscar Night, Metaverse, Retro...)",
            "Kịch bản vinh danh nhân sự cảm động và truyền cảm hứng",
            "Hệ thống sân khấu, màn hình LED, âm thanh chuẩn concert",
            "Sắp xếp nhân sự chuyên nghiệp: MC, Ca sỹ, DJ, Nhóm nhảy nổi tiếng",
            "Quản trị tiệc Premium: Menu Âu-Á cao cấp từ các đầu bếp 5 sao"
        ],
        process: [
            { step: "01", name: "Concept Ideation", desc: "Xây dựng chủ đề xuyên suốt dựa trên câu chuyện riêng của doanh nghiệp." },
            { step: "02", name: "Production Design", desc: "Thiết kế sân khấu 3D, lập trình ánh sáng và dàn dựng tiết mục nghệ thuật." },
            { step: "03", name: "Backstage Management", desc: "Điều phối hậu cần, tổng duyệt kỹ thuật và quản lý nhân sự biểu diễn." },
            { step: "04", name: "Grand Showdown", desc: "Vận hành đêm tiệc suôn sẻ, bùng nổ và ghi lại những thước phim tư liệu." }
        ],
        htmlDetail: `<div class="service-rich-content">
                <section style="margin-bottom: 60px;">
                    <h2 style="font-size: 32px; color: var(--text-heading); margin-bottom: 24px; text-align: center;">Đêm Tiệc Tỏa Sáng - Kết Năm Rực Rỡ</h2>
                    
                    <div style="position: relative; border-radius: 32px; overflow: hidden; margin-bottom: 40px;">
                        <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80" style="width: 100%; height: 450px; object-fit: cover;" alt="YEP Night" />
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
                        <div style="padding: 24px; background: #fff; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.05);">
                            <h5 style="color: var(--orange); margin-bottom: 10px; font-size: 16px;">Vinh Danh & Tri Ân</h5>
                            <p style="font-size: 14px; color: var(--text-secondary);">Thiết kế nghi thức trao giải trang trọng, kết hợp visual 3D và âm thanh bùng nổ để tôn vinh những thành tựu.</p>
                        </div>
                        <div style="padding: 24px; background: #fff; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.05);">
                            <h5 style="color: var(--orange); margin-bottom: 10px; font-size: 16px;">Giải Trí Đỉnh Cao</h5>
                            <p style="font-size: 14px; color: var(--text-secondary);">Booking nghệ sĩ hạng A, dàn dựng tiết mục chuyên nghiệp từ chính nhân viên.</p>
                        </div>
                    </div>
                </section>
            </div>`
    },
    "to-chuc-workshop": {
        title: "Tổ Chức Workshop & Đào Tạo Trải Nghiệm — Khơi Nguồn Sáng Tạo",
        description: "Dịch vụ tổ chức Workshop nghệ thuật và đào tạo kỹ năng chuyên sâu. Chúng tôi biến không gian làm việc thành những 'Studio' đầy cảm hứng, giúp đội ngũ khai phóng tư duy và tái tạo năng lượng.",
        heroImage: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841552125-d6rsss2mtnr.webp",
        benefits: [
            "Mô hình Workshop đa dạng: Craft, Art, Skill-up, Tasting (Coffee/Wine)",
            "Đội ngũ Master Trainer và Nghệ nhân hàng đầu trực tiếp đứng lớp",
            "Thiết kế không gian Workshop đa giác quan (Hương thơm, Ánh sáng, Âm nhạc)",
            "Cung cấp quầy Tiệc trà (Premium Tea-break) tiêu chuẩn khách sạn 5 sao",
            "Trọn gói bộ dụng cụ (Kit) cao cấp và quà tặng lưu niệm cho từng thành viên"
        ],
        process: [
            { step: "01", name: "Topic Discovery", desc: "Tìm hiểu khoảng trống kỹ năng và văn hóa nhân sự để đề xuất chủ đề phù hợp." },
            { step: "02", name: "Curated Content", desc: "Biên soạn giáo trình hoặc kịch bản trải nghiệm nghệ thuật cá nhân hóa." },
            { step: "03", name: "Inspirational Setup", desc: "Sắp đặt không gian, chuẩn bị học liệu và điều phối nhân sự hướng dẫn." },
            { step: "04", name: "Impact Report", desc: "Đánh giá mức độ hài lòng và tổng kết khoảnh khắc sáng tạo của đội ngũ." }
        ],
        htmlDetail: `<div class="service-rich-content">
                <section style="margin-bottom: 60px;">
                    <h2 style="font-size: 32px; color: var(--text-heading); margin-bottom: 24px; text-align: center;">Định Nghĩa Lại Workshop Doanh Nghiệp</h2>
                    
                    <div style="position: relative; border-radius: 32px; overflow: hidden; margin-bottom: 40px;">
                        <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=1200&q=80" style="width: 100%; height: 450px; object-fit: cover;" alt="Workshop Space" />
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
                        <div style="padding: 24px; background: #fff; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.05);">
                            <h5 style="color: var(--orange); margin-bottom: 10px; font-size: 16px;">Nghệ Thuật & Thử Thách</h5>
                            <p style="font-size: 14px; color: var(--text-secondary);">Thực hành làm gốm, cắm hoa, đổ nến thơm hay hội họa canvas. Chăm sóc đời sống tinh thần VIP.</p>
                        </div>
                        <div style="padding: 24px; background: #fff; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.05);">
                            <h5 style="color: var(--orange); margin-bottom: 10px; font-size: 16px;">Tasting Đẳng Cấp</h5>
                            <p style="font-size: 14px; color: var(--text-secondary);">Workshop pha chế Specialty Coffee và thử nếm Rượu vang dưới sự dẫn dắt của các Master chuyên nghiệp.</p>
                        </div>
                    </div>
                </section>
            </div>`
    },
    "to-chuc-sports-day": {
        title: "Tổ Chức Sports Day — Ngày Hội Thể Thao Bùng Nổ Năng Lượng",
        description: "Dịch vụ tổ chức ngày hội thể thao doanh nghiệp chuyên nghiệp. Gắn kết đội ngũ bằng tinh thần thi đấu máu lửa, từ các giải đấu Mini Olympic đến ngày hội vận động quy mô lớn.",
        heroImage: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841648627-yz74vcs8xm.webp",
        benefits: [
            "Hệ thống 30+ bộ môn thi đấu đa dạng",
            "Đội ngũ trọng tài có bằng cấp chuyên nghiệp",
            "Cung cấp trọn gói: Đồng phục, cúp, huy chương",
            "Hệ thống y tế và bảo hiểm sự kiện túc trực",
            "Truyền thông bùng nổ: Livestream thi đấu"
        ],
        process: [
            { step: "01", name: "Roster Logic", desc: "Phân chia đội hình và thiết kế nhận diện cho từng team." },
            { step: "02", name: "Olympic Protocol", desc: "Xây dựng thể lệ thi đấu và hệ thống tính điểm minh bạch." },
            { step: "03", name: "Fair Play Spirit", desc: "Điều hành giải đấu với đội ngũ trọng tài uy tín." },
            { step: "04", name: "Podium Moment", desc: "Lễ vinh danh đội chiến thắng với bục nhận giải rực rỡ." }
        ],
        htmlDetail: `<div class="service-rich-content">
                <section style="margin-bottom: 60px;">
                    <h2 style="font-size: 32px; margin-bottom: 24px; text-align: center;">Vượt Qua Giới Hạn - Gắn Kết Đỉnh Cao</h2>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; margin-bottom: 40px;">
                        <div>
                            <h4 style="margin-bottom: 20px;">Olympic Doanh Nghiệp</h4>
                            <p style="color: var(--text-secondary); line-height: 1.8;">Tổ chức các bộ môn vận động chuyên nghiệp, từ chạy tiếp sức đến bóng đá mini.</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1461896756985-2cd86adb9474?w=800&q=80" style="width: 100%; border-radius: 24px; box-shadow: 0 10px 40px rgba(0,0,0,0.1);" alt="Sports" />
                    </div>
                </section>
            </div>`
    },
    "to-chuc-family-day": {
        title: "Tổ Chức Family Day — Ngày Hội Gia Đình Doanh Nghiệp Ý Nghĩa",
        description: "Dịch vụ tổ chức ngày hội gia đình trọn gói, nơi gắn kết hậu phương vững chắc với văn hóa doanh nghiệp.",
        heroImage: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774841704194-h5zu7tms3bk.webp",
        benefits: [
            "Trò chơi tương tác liên thế hệ",
            "Khu vực Kids Zone đa dạng & an toàn",
            "Dịch vụ ẩm thực BBQ đa dạng khẩu vị",
            "Nhân sự bảo mẫu hỗ trợ tận tâm",
            "Tặng kèm video highlight kỷ niệm"
        ],
        process: [
            { step: "01", name: "Family Insight", desc: "Tìm hiểu cơ cấu độ tuổi để thiết kế hoạt động phù hợp." },
            { step: "02", name: "Wonderland Design", desc: "Lên layout không gian sự kiện như một công viên thu nhỏ." },
            { step: "03", name: "Safe Execution", desc: "Vận hành trò chơi với tiêu chuẩn an toàn cao nhất." },
            { step: "04", name: "Memory Keepers", desc: "Tổng kết và gửi tặng những thước phim ý nghĩa." }
        ],
        htmlDetail: `<div class="service-rich-content">
                <section style="margin-bottom: 60px;">
                    <h2 style="font-size: 32px; margin-bottom: 32px; text-align: center;">Gắn Kết Hậu Phương - Vững Vàng Sự Nghiệp</h2>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
                        <img src="https://images.unsplash.com/photo-1472586662442-3eec04b9dbda?w=500&q=80" style="width: 100%; height: 250px; object-fit: cover; border-radius: 20px;" alt="Kids" />
                        <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&q=80" style="width: 100%; height: 250px; object-fit: cover; border-radius: 20px;" alt="Family" />
                    </div>
                </section>
            </div>`
    },
    "to-chuc-khai-truong": {
        title: "Tổ Chức Lễ Khai Trương — Khởi Đầu Hồng Phát",
        description: "Dịch vụ tổ chức khai trương trọn gói, tập trung vào yếu tố nhận diện thương hiệu độc đáo.",
        heroImage: "https://njchsjhdkcfaouqwyutc.supabase.co/storage/v1/object/public/post-images/1774842323006-w8rswfc8loo.webp",
        benefits: [
            "Tư vấn kịch bản phong thủy chọn giờ lành",
            "Đoàn múa Lân Sư Rồng chuyên nghiệp",
            "Hệ thống thiết bị âm thanh ánh sáng rực rỡ",
            "Đội ngũ PG/PB phong cách phục vụ chu đáo",
            "Hỗ trợ truyền thông & quay phim báo chí"
        ],
        process: [
            { step: "01", name: "Site Survey", desc: "Khảo sát mặt bằng và bài trí sân khấu đón khách." },
            { step: "02", name: "Concept Development", desc: "Thiết kế nhận diện sự kiện đồng nhất với thương hiệu." },
            { step: "03", name: "Production & Setup", desc: "Thi công lắp đặt thiết bị nhanh chóng và thẩm mỹ." },
            { step: "04", name: "Grand Launch", desc: "Điều phối buổi lễ suôn sẻ với nghi thức cắt băng hoành tráng." }
        ],
        htmlDetail: `<div class="service-rich-content">
                <section style="margin-bottom: 60px;">
                    <h2 style="font-size: 32px; margin-bottom: 32px; text-align: center;">Lễ Khai Trương Hồng Phát</h2>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 40px; align-items: center;">
                        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" style="width: 100%; border-radius: 20px;" alt="Opening" />
                        <div>
                            <h4 style="margin-bottom: 20px;">Nghi Thức Cắt Băng & Múa Lân</h4>
                            <p style="color: var(--text-secondary); line-height: 1.8;">Điểm nhấn của buổi lễ với đoàn Lân Sư Rồng chuyên nghiệp, kết hợp âm nhạc hào hùng và nghi thức cắt băng rực rỡ.</p>
                        </div>
                    </div>
                </section>
            </div>`
    },
    "to-chuc-hoi-nghi": {
        title: "Tổ Chức Hội Nghị & Hội Thảo",
        description: "Giải pháp tổ chức sự kiện doanh nghiệp đẳng cấp, tối ưu hóa trải nghiệm khách mời và truyền tải thông điệp chuyên nghiệp.",
        heroImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=90&fm=webp",
        benefits: [
            "Setup phòng họp tiêu chuẩn quốc tế", 
            "Hệ thống trình chiếu, màn hình LED chất lượng cao", 
            "Cung cấp tea-break, tiệc trưa cao cấp", 
            "Quản lý khách mời bằng công nghệ Check-in"
        ],
        process: [
            { step: "01", name: "Tư vấn địa điểm", desc: "Lựa chọn không gian phù hợp với quy mô và tính chất hội nghị." },
            { step: "02", name: "Thiết kế nhận diện", desc: "Làm backdrop, standee, tài liệu hội thảo đồng bộ." },
            { step: "03", name: "Quản lý kỹ thuật", desc: "Kiểm soát âm thanh, ánh sáng, dịch thuật cabin nếu cần." },
            { step: "04", name: "Hậu cần & Tea-break", desc: "Đảm bảo dịch vụ ăn uống và phục vụ khách mời chu đáo." }
        ],
        htmlDetail: `<div class="service-rich-content">
                <section style="margin-bottom: 60px;">
                    <h2 style="font-size: 32px; color: var(--text-heading); margin-bottom: 24px;">Nâng Tầm Hình Ảnh Doanh Nghiệp Cấp Quốc Tế</h2>
                    <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 20px;">Một kỳ <strong>Hội Nghị Khách Hàng / Hội Thảo Cổ Đông</strong> sai sót sẽ làm mất đi niềm tin của nhà đầu tư. Chúng tôi sử dụng quy chuẩn đón tiếp khắt khe bằng mã QR Code, thẻ VIP check-in tự động nhanh gọn. Không gian sảnh chờ đón tiếp đầy quyền lực cùng dàn PG/PB phiên dịch đa ngôn ngữ ngoại hình chuẩn.</p>
                    <p style="color: var(--text-secondary); line-height: 1.8;">Từ việc căng một tấm Backdrop thẳng tắp không nếp nhăn, đến khâu chạy Visual Màn LED mượt mà từng giây lúc Giám Đốc phát biểu, sự chi li tỉ mỉ sẽ thể hiện uy tín ngàn tỷ của Tập đoàn bạn trong mắt khách hàng.</p>
                </section>
            </div>`
    }
};
