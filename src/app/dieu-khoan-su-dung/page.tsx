import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Điều khoản sử dụng | SanUyTin.net",
    description: "Điều khoản sử dụng website SanUyTin.net. Bằng việc truy cập và sử dụng website, bạn đồng ý tuân thủ các điều khoản được nêu tại đây.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="container-custom max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Điều khoản sử dụng
                </h1>
                <p className="text-muted-foreground mb-10 text-sm">
                    Cập nhật lần cuối: Tháng 2, 2026
                </p>

                <div className="prose dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-sky-400 prose-a:underline prose-a:decoration-sky-400/40 hover:prose-a:decoration-sky-400">
                    <h2>1. Giới thiệu</h2>
                    <p>
                        Chào mừng bạn đến với <strong>SanUyTin.net</strong>. Khi truy cập và sử dụng website này, bạn đồng ý tuân thủ và chịu ràng buộc bởi các điều khoản được nêu dưới đây. Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng không tiếp tục sử dụng website.
                    </p>

                    <h2>2. Mục đích của website</h2>
                    <p>
                        SanUyTin.net cung cấp thông tin đánh giá, so sánh và hướng dẫn về các sàn giao dịch Forex và CFD. Nội dung trên website chỉ mang tính chất <strong>tham khảo và giáo dục</strong>, không cấu thành lời khuyên đầu tư, khuyến nghị tài chính hay lời mời mua bán bất kỳ sản phẩm tài chính nào.
                    </p>

                    <h2>3. Miễn trừ trách nhiệm</h2>
                    <p>
                        Giao dịch Forex và CFD là sản phẩm tài chính có đòn bẩy, tiềm ẩn rủi ro cao và có thể không phù hợp với tất cả nhà đầu tư. Bạn có thể mất toàn bộ số vốn đầu tư. Trước khi quyết định giao dịch, hãy cân nhắc kỹ mục tiêu đầu tư, mức độ kinh nghiệm và khả năng chịu rủi ro của bản thân.
                    </p>
                    <p>
                        SanUyTin.net <strong>không chịu trách nhiệm</strong> về bất kỳ tổn thất tài chính nào phát sinh từ việc sử dụng thông tin trên website hoặc từ việc giao dịch với bất kỳ sàn giao dịch nào được đề cập.
                    </p>

                    <h2>4. Tính chính xác của thông tin</h2>
                    <p>
                        Chúng tôi nỗ lực cung cấp thông tin chính xác và cập nhật nhất có thể. Tuy nhiên, chúng tôi không đảm bảo tính chính xác, đầy đủ hay kịp thời của tất cả thông tin. Điều kiện giao dịch, phí, giấy phép và chính sách của các sàn có thể thay đổi mà không cần thông báo trước. Bạn nên xác minh trực tiếp với sàn giao dịch trước khi đưa ra quyết định.
                    </p>

                    <h2>5. Liên kết đối tác (Affiliate)</h2>
                    <p>
                        Website có thể chứa các liên kết đối tác (affiliate links) đến các sàn giao dịch. Khi bạn đăng ký tài khoản thông qua các liên kết này, chúng tôi có thể nhận được hoa hồng từ sàn giao dịch. Điều này <strong>không ảnh hưởng</strong> đến đánh giá hay xếp hạng của chúng tôi — mọi nhận xét đều dựa trên tiêu chí khách quan.
                    </p>

                    <h2>6. Quyền sở hữu trí tuệ</h2>
                    <p>
                        Tất cả nội dung trên SanUyTin.net bao gồm văn bản, hình ảnh, thiết kế, logo và mã nguồn đều thuộc quyền sở hữu của chúng tôi hoặc được cấp phép hợp lệ. Bạn không được sao chép, phân phối, sửa đổi hoặc sử dụng lại nội dung cho mục đích thương mại mà không có sự đồng ý bằng văn bản.
                    </p>

                    <h2>7. Hành vi người dùng</h2>
                    <p>Khi sử dụng website, bạn cam kết:</p>
                    <ul>
                        <li>Không sử dụng website cho mục đích bất hợp pháp</li>
                        <li>Không cố gắng truy cập trái phép vào hệ thống</li>
                        <li>Không phát tán mã độc, spam hoặc nội dung có hại</li>
                        <li>Không sao chép nội dung hàng loạt bằng công cụ tự động</li>
                    </ul>

                    <h2>8. Giới hạn trách nhiệm</h2>
                    <p>
                        Trong phạm vi tối đa được pháp luật cho phép, SanUyTin.net và các thành viên, nhân viên, đối tác không chịu trách nhiệm về bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên, đặc biệt hay hậu quả nào phát sinh từ việc sử dụng hoặc không thể sử dụng website.
                    </p>

                    <h2>9. Thay đổi điều khoản</h2>
                    <p>
                        Chúng tôi có quyền cập nhật hoặc sửa đổi các điều khoản này bất kỳ lúc nào mà không cần thông báo trước. Việc bạn tiếp tục sử dụng website sau khi thay đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới.
                    </p>

                    <h2>10. Liên hệ</h2>
                    <p>
                        Nếu bạn có câu hỏi về điều khoản sử dụng, vui lòng liên hệ qua email: <strong>contact@sanuytin.net</strong>
                    </p>
                </div>
            </div>
        </main>
    );
}
