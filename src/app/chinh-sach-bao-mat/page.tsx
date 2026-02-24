import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Chính sách bảo mật | SanUyTin.net",
    description: "Chính sách bảo mật của SanUyTin.net. Tìm hiểu cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="container-custom max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Chính sách bảo mật
                </h1>
                <p className="text-muted-foreground mb-10 text-sm">
                    Cập nhật lần cuối: Tháng 2, 2026
                </p>

                <div className="prose dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-sky-400 prose-a:underline prose-a:decoration-sky-400/40 hover:prose-a:decoration-sky-400">
                    <h2>1. Thông tin chúng tôi thu thập</h2>
                    <p>
                        Khi bạn truy cập <strong>SanUyTin.net</strong>, chúng tôi có thể thu thập một số thông tin sau:
                    </p>
                    <ul>
                        <li><strong>Thông tin tự động:</strong> Địa chỉ IP, loại trình duyệt, hệ điều hành, thời gian truy cập, trang web giới thiệu và các trang bạn xem trên website.</li>
                        <li><strong>Cookie và công nghệ theo dõi:</strong> Chúng tôi sử dụng cookie để ghi nhớ tùy chọn của bạn, phân tích lưu lượng truy cập và cải thiện trải nghiệm người dùng.</li>
                        <li><strong>Thông tin bạn cung cấp:</strong> Nếu bạn liên hệ qua email hoặc form, chúng tôi thu thập tên, email và nội dung tin nhắn.</li>
                    </ul>

                    <h2>2. Cách chúng tôi sử dụng thông tin</h2>
                    <p>Thông tin thu thập được sử dụng cho các mục đích sau:</p>
                    <ul>
                        <li>Cải thiện nội dung và trải nghiệm người dùng trên website</li>
                        <li>Phân tích xu hướng truy cập để tối ưu hóa hiệu suất</li>
                        <li>Phản hồi yêu cầu và câu hỏi từ người dùng</li>
                        <li>Phát hiện và ngăn chặn hoạt động gian lận hoặc trái phép</li>
                        <li>Tuân thủ nghĩa vụ pháp lý khi cần thiết</li>
                    </ul>

                    <h2>3. Cookie</h2>
                    <p>
                        Cookie là các tệp nhỏ được lưu trữ trên thiết bị của bạn khi truy cập website. Chúng tôi sử dụng các loại cookie sau:
                    </p>
                    <ul>
                        <li><strong>Cookie cần thiết:</strong> Đảm bảo website hoạt động bình thường, ví dụ như ghi nhớ ngôn ngữ hiển thị.</li>
                        <li><strong>Cookie phân tích (Google Analytics):</strong> Giúp chúng tôi hiểu cách người dùng tương tác với website, từ đó cải thiện nội dung và trải nghiệm.</li>
                        <li><strong>Cookie quảng cáo/đối tác:</strong> Một số đối tác (sàn giao dịch) có thể đặt cookie khi bạn nhấp vào liên kết affiliate để theo dõi đăng ký.</li>
                    </ul>
                    <p>
                        Bạn có thể tắt cookie trong cài đặt trình duyệt. Tuy nhiên, một số tính năng của website có thể không hoạt động đúng nếu cookie bị tắt.
                    </p>

                    <h2>4. Chia sẻ thông tin với bên thứ ba</h2>
                    <p>
                        Chúng tôi <strong>không bán, trao đổi hay cho thuê</strong> thông tin cá nhân của bạn. Tuy nhiên, thông tin có thể được chia sẻ trong các trường hợp sau:
                    </p>
                    <ul>
                        <li><strong>Nhà cung cấp dịch vụ:</strong> Google Analytics (phân tích truy cập), nhà cung cấp hosting (Vercel, Google Cloud).</li>
                        <li><strong>Đối tác liên kết:</strong> Khi bạn nhấp vào liên kết affiliate, sàn giao dịch đối tác có thể thu thập thông tin theo chính sách riêng của họ.</li>
                        <li><strong>Yêu cầu pháp lý:</strong> Khi được yêu cầu bởi cơ quan có thẩm quyền theo quy định pháp luật.</li>
                    </ul>

                    <h2>5. Bảo mật thông tin</h2>
                    <p>
                        Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức hợp lý để bảo vệ thông tin của bạn, bao gồm:
                    </p>
                    <ul>
                        <li>Mã hóa SSL/TLS cho tất cả kết nối</li>
                        <li>Giới hạn quyền truy cập dữ liệu cho nhân viên có thẩm quyền</li>
                        <li>Sử dụng hạ tầng máy chủ bảo mật từ Google Cloud</li>
                    </ul>
                    <p>
                        Tuy nhiên, không có phương thức truyền tải nào qua Internet là an toàn tuyệt đối. Chúng tôi không thể đảm bảo bảo mật 100%.
                    </p>

                    <h2>6. Quyền của bạn</h2>
                    <p>Bạn có các quyền sau liên quan đến thông tin cá nhân:</p>
                    <ul>
                        <li><strong>Quyền truy cập:</strong> Yêu cầu xem thông tin chúng tôi lưu trữ về bạn</li>
                        <li><strong>Quyền chỉnh sửa:</strong> Yêu cầu cập nhật thông tin không chính xác</li>
                        <li><strong>Quyền xóa:</strong> Yêu cầu xóa thông tin cá nhân</li>
                        <li><strong>Quyền từ chối:</strong> Từ chối việc thu thập cookie bằng cài đặt trình duyệt</li>
                    </ul>
                    <p>
                        Để thực hiện các quyền trên, vui lòng liên hệ qua email: <strong>contact@sanuytin.net</strong>
                    </p>

                    <h2>7. Liên kết đến website bên ngoài</h2>
                    <p>
                        Website của chúng tôi chứa liên kết đến các website bên ngoài (sàn giao dịch, công cụ phân tích). Chúng tôi không chịu trách nhiệm về chính sách bảo mật hoặc nội dung của các website này. Bạn nên đọc kỹ chính sách bảo mật của từng website trước khi cung cấp bất kỳ thông tin cá nhân nào.
                    </p>

                    <h2>8. Thay đổi chính sách</h2>
                    <p>
                        Chúng tôi có thể cập nhật Chính sách bảo mật này bất kỳ lúc nào. Mọi thay đổi sẽ được đăng trên trang này kèm ngày cập nhật mới. Việc bạn tiếp tục sử dụng website sau khi thay đổi đồng nghĩa với việc bạn chấp nhận chính sách mới.
                    </p>

                    <h2>9. Liên hệ</h2>
                    <p>
                        Nếu bạn có bất kỳ câu hỏi nào về Chính sách bảo mật, vui lòng liên hệ:
                    </p>
                    <ul>
                        <li><strong>Email:</strong> contact@sanuytin.net</li>
                        <li><strong>Website:</strong> sanuytin.net</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
