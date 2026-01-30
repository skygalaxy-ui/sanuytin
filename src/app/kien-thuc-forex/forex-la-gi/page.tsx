import Link from "next/link";
import { BookOpen, ChevronRight, Clock, User, Calendar, Home } from "lucide-react";

export const metadata = {
    title: "Forex là gì? Hướng dẫn đầu tư Forex toàn tập cho người mới | Sàn Uy Tín",
    description: "Khái niệm Forex là gì? Tìm hiểu về thị trường ngoại hối, cách thức hoạt động, các phiên giao dịch và cơ hội kiếm tiền từ Forex.",
};

export default function ForexBasicsPage() {
    return (
        <main className="bg-background min-h-screen pt-[160px]">
            {/* Hero Section */}
            <div className="bg-secondary/30 border-b border-border">
                <div className="container-custom max-w-4xl py-12 md:py-16">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
                        <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                            <Home size={14} /> Trang chủ
                        </Link>
                        <ChevronRight size={14} />
                        <Link href="/kien-thuc-forex" className="hover:text-primary transition-colors">Kiến thức Forex</Link>
                        <ChevronRight size={14} />
                        <span className="text-foreground font-medium">Forex là gì?</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-green-500/10 rounded-lg text-green-600">
                            <BookOpen size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-green-600 bg-green-500/10 px-3 py-1 rounded-full">
                            Kiến thức Cơ bản
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight leading-tight">
                        Forex là gì? Hướng dẫn nhập môn <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">toàn tập cho người mới</span>
                    </h1>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground flex-wrap">
                        <div className="flex items-center gap-2">
                            <User size={16} /> Admin
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={16} /> 27/01/2026
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} /> 10 phút đọc
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="container-custom max-w-4xl py-12">
                <article className="prose dark:prose-invert prose-lg max-w-none 
                    prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-6 prose-h2:border-b prose-h2:border-border/40 prose-h2:pb-2
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-primary
                    prose-p:text-muted-foreground prose-p:leading-8 prose-p:mb-6
                    prose-li:text-muted-foreground prose-li:marker:text-primary
                    prose-strong:text-foreground prose-strong:font-bold
                    prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8">

                    <p className="lead text-xl md:text-2xl font-medium text-foreground/80 mb-8">
                        Bạn nghe nói nhiều về đầu tư Forex nhưng chưa thực sự hiểu nó là gì? Bài viết này sẽ giải thích mọi thứ bạn cần biết về thị trường tài chính lớn nhất thế giới này một cách đơn giản và dễ hiểu nhất.
                    </p>

                    <h2>1. Forex là gì?</h2>
                    <p>
                        <strong>Forex</strong> (viết tắt của <em>Foreign Exchange</em>), hay còn gọi là thị trường ngoại hối, là nơi diễn ra việc trao đổi các loại tiền tệ của các quốc gia khác nhau.
                        Ví dụ đơn giản: Khi bạn đi du lịch từ Việt Nam sang Mỹ, bạn đổi tiền VND lấy USD. Hành động đó chính là bạn đã tham gia vào thị trường Forex.
                    </p>
                    <p>
                        Tuy nhiên, trong đầu tư Forex, mục tiêu của bạn không phải là đổi tiền để tiêu xài, mà là <strong>kiếm lợi nhuận từ sự chênh lệch tỷ giá</strong> giữa các cặp tiền tệ.
                    </p>

                    <div className="bg-secondary/30 border-l-4 border-primary p-6 rounded-r-xl my-8">
                        <h4 className="text-lg font-bold text-foreground mb-2">Con số ấn tượng:</h4>
                        <p className="mb-0 text-sm">
                            Thị trường Forex có khối lượng giao dịch trung bình mỗi ngày lên tới <strong>6.600 tỷ USD</strong> (theo báo cáo của BIS năm 2019), lớn hơn gấp nhiều lần so với thị trường chứng khoán Mỹ.
                        </p>
                    </div>

                    <h2>2. Thị trường Forex hoạt động như thế nào?</h2>
                    <p>
                        Khác với chứng khoán nơi bạn mua cổ phiếu của một công ty, trong Forex, hàng hóa chính là <strong>Tiền</strong>. Giao dịch Forex luôn diễn ra theo từng <strong>cặp tiền tệ</strong>.
                    </p>
                    <p>Ví dụ cặp tiền phổ biến nhất: <strong>EUR/USD</strong></p>
                    <ul>
                        <li>Đồng tiền đứng trước (EUR) gọi là <strong>Đồng tiền cơ sở (Base Currency)</strong>.</li>
                        <li>Đồng tiền đứng sau (USD) gọi là <strong>Đồng tiền định giá (Quote Currency)</strong>.</li>
                    </ul>
                    <p>
                        Khi bạn đặt lệnh <strong>MUA (Buy)</strong> EUR/USD, nghĩa là bạn kỳ vọng giá trị của đồng Euro sẽ tăng lên so với đồng Đô la Mỹ. Ngược lại, khi bạn đặt lệnh <strong>BÁN (Sell)</strong>, bạn kỳ vọng đồng Euro sẽ giảm giá.
                    </p>

                    <h2>3. Ai tham gia vào thị trường này?</h2>
                    <p>Thị trường Forex là sân chơi của nhiều "tay to" lớn:</p>
                    <ul>
                        <li><strong>Ngân hàng trung ương:</strong> Như Fed (Mỹ), ECB (Châu Âu) can thiệp để ổn định tiền tệ quốc gia.</li>
                        <li><strong>Các ngân hàng thương mại lớn:</strong> Deutsche Bank, Citi, JP Morgan... chiếm phần lớn volume giao dịch.</li>
                        <li><strong>Quỹ đầu tư & Công ty đa quốc gia:</strong> Giao dịch để phòng ngừa rủi ro tỷ giá.</li>
                        <li><strong>Trader nhỏ lẻ (Retail Traders):</strong> Chính là chúng ta, những người giao dịch thông qua các Sàn môi giới (Brokers) để kiếm lợi nhuận.</li>
                    </ul>

                    <h2>4. Thời gian giao dịch Forex</h2>
                    <p>
                        Một điểm cộng lớn của Forex là thị trường hoạt động <strong>24/5</strong> (từ thứ 2 đến thứ 6). Do các trung tâm tài chính toàn cầu mở cửa nối tiếp nhau:
                    </p>
                    <ul>
                        <li><strong>Phiên Úc (Sydney):</strong> Mở cửa sáng sớm (5h00 - 14h00 VN).</li>
                        <li><strong>Phiên Á (Tokyo):</strong> Sôi động với các đồng JPY, AUD (6h00 - 15h00 VN).</li>
                        <li><strong>Phiên Âu (London):</strong> Phiên giao dịch nhộn nhịp nhất (14h00 - 23h00 VN).</li>
                        <li><strong>Phiên Mỹ (New York):</strong> Biến động mạnh nhất, thường trùng với tin tức kinh tế Mỹ (19h00 - 4h00 sáng hôm sau VN).</li>
                    </ul>

                    <h2>5. Làm thế nào để bắt đầu kiếm tiền từ Forex?</h2>
                    <p>Để bắt đầu, bạn không cần hàng tỷ đồng như các ngân hàng. Nhờ cơ chế <strong>Đòn bẩy (Leverage)</strong>, bạn có thể bắt đầu giao dịch chỉ với số vốn rất nhỏ ($50 - $100).</p>
                    <p>Quy trình cơ bản cho người mới:</p>
                    <ol>
                        <li><strong>Tìm hiểu kiến thức:</strong> Đọc các bài viết về Nến Nhật, Quản lý vốn (bạn đang làm bước này!).</li>
                        <li><strong>Chọn sàn uy tín:</strong> Mở tài khoản tại các sàn được cấp phép (như Exness, Vantage, XM...).</li>
                        <li><strong>Giao dịch Demo:</strong> Tập luyện với tiền ảo để làm quen thị trường.</li>
                        <li><strong>Nạp vốn & Giao dịch thật:</strong> Bắt đầu với số vốn nhỏ và tuân thủ kỷ luật.</li>
                    </ol>

                    <div className="mt-12 p-8 bg-card border border-border rounded-2xl text-center">
                        <h3 className="text-2xl font-bold text-foreground mb-4">Sẵn sàng thử thách?</h3>
                        <p className="text-muted-foreground mb-6">
                            Thị trường Forex mang lại cơ hội lợi nhuận không giới hạn nhưng cũng đi kèm rủi ro. Hãy trang bị kiến thức thật kỹ trước khi bước vào.
                        </p>
                        <Link href="/#ranking" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-primary/30 hover:bg-blue-700 transition-all hover:-translate-y-1">
                            Xem Top Sàn Uy Tín Để Bắt Đầu
                        </Link>
                    </div>

                </article>
            </div>
        </main>
    );
}
