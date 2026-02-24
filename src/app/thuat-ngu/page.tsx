"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Book, Search, ChevronRight, Home, BookOpen, Calculator, BarChart3, ArrowRight } from "lucide-react";

const terms = [
    { term: "Ask Price", def: "Giá mà tại đó thị trường sẵn sàng bán một cặp tiền tệ cho bạn. Còn gọi là giá Offer." },
    { term: "Bid Price", def: "Giá mà tại đó thị trường sẵn sàng mua một cặp tiền tệ từ bạn." },
    { term: "Base Currency", def: "Đồng tiền đứng đầu trong một cặp tiền tệ. Ví dụ: EUR trong EUR/USD." },
    { term: "Quote Currency", def: "Đồng tiền đứng sau trong một cặp tiền tệ. Ví dụ: USD trong EUR/USD." },
    { term: "Broker", def: "Sàn môi giới - trung gian giữa trader và thị trường, cung cấp nền tảng giao dịch." },
    { term: "Breakout", def: "Phá vỡ - giá vượt qua một mức hỗ trợ hoặc kháng cự quan trọng, thường đi kèm khối lượng lớn." },
    { term: "Bull Market", def: "Thị trường tăng giá, xu hướng giá đi lên trong thời gian dài." },
    { term: "Bear Market", def: "Thị trường giảm giá, xu hướng giá đi xuống trong thời gian dài." },
    { term: "Candlestick", def: "Biểu đồ nến Nhật - phương pháp biểu diễn biến động giá phổ biến nhất." },
    { term: "CFD", def: "Contract for Difference - Hợp đồng chênh lệch, cho phép giao dịch mà không sở hữu tài sản thực." },
    { term: "Commission", def: "Hoa hồng - phí mà broker thu trên mỗi giao dịch." },
    { term: "CPI", def: "Consumer Price Index - Chỉ số giá tiêu dùng, đo lường lạm phát và ảnh hưởng trực tiếp đến quyết định lãi suất." },
    { term: "Copy Trading", def: "Sao chép giao dịch - tính năng cho phép tự động sao chép lệnh từ trader chuyên nghiệp." },
    { term: "Cross Currency", def: "Cặp tiền chéo - cặp tiền không chứa đồng USD. Ví dụ: EUR/GBP." },
    { term: "Day Trading", def: "Giao dịch trong ngày - mở và đóng lệnh trong cùng một ngày." },
    { term: "Demo Account", def: "Tài khoản demo - tài khoản giao dịch với tiền ảo để tập luyện." },
    { term: "Divergence", def: "Phân kỳ - sự sai lệch giữa hướng giá và chỉ báo kỹ thuật, thường báo hiệu đảo chiều." },
    { term: "Drawdown", def: "Mức sụt giảm vốn từ đỉnh cao nhất đến đáy thấp nhất." },
    { term: "ECN", def: "Electronic Communication Network - mạng lưới kết nối trực tiếp với ngân hàng và nhà cung cấp thanh khoản." },
    { term: "EA (Expert Advisor)", def: "Robot giao dịch tự động chạy trên nền tảng MetaTrader, thực hiện lệnh theo thuật toán lập trình sẵn." },
    { term: "Entry Point", def: "Điểm vào lệnh - mức giá mà trader quyết định mở vị thế giao dịch." },
    { term: "Exit Point", def: "Điểm thoát lệnh - mức giá mà trader đóng vị thế giao dịch." },
    { term: "Fibonacci", def: "Công cụ phân tích kỹ thuật dựa trên dãy số Fibonacci để xác định mức hỗ trợ/kháng cự." },
    { term: "Gap", def: "Khoảng trống giá - khi giá mở cửa khác biệt đáng kể so với giá đóng cửa phiên trước." },
    { term: "GDP", def: "Gross Domestic Product - Tổng sản phẩm quốc nội, chỉ số kinh tế vĩ mô quan trọng nhất." },
    { term: "Hedge", def: "Phòng hộ rủi ro - mở các vị thế đối lập để giảm thiểu thua lỗ." },
    { term: "Leverage (Đòn bẩy)", def: "Công cụ cho phép trader giao dịch khối lượng lớn hơn số vốn thực có. Ví dụ: 1:100 nghĩa là $100 có thể giao dịch $10,000." },
    { term: "Liquidity", def: "Thanh khoản - khả năng mua bán một tài sản mà không ảnh hưởng đáng kể đến giá." },
    { term: "Long Position", def: "Vị thế mua - đặt cược giá sẽ tăng." },
    { term: "Short Position", def: "Vị thế bán - đặt cược giá sẽ giảm." },
    { term: "Lot", def: "Đơn vị tiêu chuẩn để đo khối lượng giao dịch. 1 Lot chuẩn = 100,000 đơn vị tiền tệ." },
    { term: "Mini Lot", def: "Khối lượng giao dịch bằng 0.1 Lot chuẩn = 10,000 đơn vị tiền tệ." },
    { term: "Micro Lot", def: "Khối lượng giao dịch bằng 0.01 Lot chuẩn = 1,000 đơn vị tiền tệ." },
    { term: "Margin (Ký quỹ)", def: "Số tiền cần thiết trong tài khoản để mở và duy trì một vị thế giao dịch." },
    { term: "Margin Call", def: "Cảnh báo ký quỹ - thông báo khi vốn trong tài khoản xuống dưới mức yêu cầu." },
    { term: "Martingale", def: "Chiến lược gấp đôi khối lượng sau mỗi lần thua lỗ. Rủi ro rất cao, không khuyến khích cho người mới." },
    { term: "Market Order", def: "Lệnh thị trường - mua/bán ngay lập tức ở mức giá hiện tại." },
    { term: "MetaTrader 4 (MT4)", def: "Nền tảng giao dịch phổ biến nhất thế giới, hỗ trợ phân tích kỹ thuật, EA và giao dịch tự động." },
    { term: "MetaTrader 5 (MT5)", def: "Phiên bản nâng cấp của MT4 với nhiều khung thời gian hơn, thêm loại lệnh và hỗ trợ đa tài sản." },
    { term: "NFP", def: "Non-Farm Payrolls - Báo cáo việc làm phi nông nghiệp của Mỹ, một trong những tin tức tác động mạnh nhất đến USD." },
    { term: "Pending Order", def: "Lệnh chờ - đặt lệnh ở mức giá trong tương lai." },
    { term: "Pip", def: "Đơn vị biến động giá nhỏ nhất của một cặp tiền tệ (thường là chữ số thập phân thứ 4)." },
    { term: "Pipette", def: "1/10 của một pip, thường là chữ số thập phân thứ 5." },
    { term: "Position", def: "Vị thế - lệnh giao dịch đang mở trong thị trường." },
    { term: "Price Action", def: "Hành động giá - phương pháp phân tích dựa trên biến động giá thuần túy." },
    { term: "Pullback", def: "Điều chỉnh - giá tạm thời đi ngược xu hướng chính trước khi tiếp tục." },
    { term: "Resistance", def: "Ngưỡng kháng cự - mức giá mà tại đó áp lực bán mạnh hơn áp lực mua." },
    { term: "Risk/Reward Ratio", def: "Tỷ lệ rủi ro/lợi nhuận - so sánh mức lỗ tiềm năng với lãi kỳ vọng. Tỷ lệ lý tưởng là 1:2 trở lên." },
    { term: "RSI", def: "Relative Strength Index - Chỉ số sức mạnh tương đối, dao động 0-100, giúp xác định vùng quá mua/quá bán." },
    { term: "Support", def: "Ngưỡng hỗ trợ - mức giá mà tại đó áp lực mua mạnh hơn áp lực bán." },
    { term: "Scalping", def: "Chiến lược giao dịch siêu ngắn hạn, mở/đóng lệnh trong vài phút." },
    { term: "Slippage", def: "Trượt giá - khi lệnh được thực hiện ở mức giá khác với mức giá yêu cầu." },
    { term: "Spread", def: "Chênh lệch giữa giá Bid và giá Ask. Đây là chi phí giao dịch mà trader phải trả." },
    { term: "STP", def: "Straight Through Processing - mô hình xử lý lệnh chuyển thẳng ra thị trường, không qua bàn giao dịch." },
    { term: "Stop Loss", def: "Lệnh cắt lỗ - đóng lệnh tự động khi giá đi ngược hướng dự đoán." },
    { term: "Stop Out", def: "Tự động đóng lệnh khi margin level xuống dưới ngưỡng quy định của broker." },
    { term: "Swap (Phí qua đêm)", def: "Lãi suất được trả hoặc bị trừ khi giữ một vị thế qua đêm." },
    { term: "Swing Trading", def: "Chiến lược giao dịch trung hạn, giữ lệnh từ vài ngày đến vài tuần." },
    { term: "Take Profit", def: "Lệnh chốt lời - đóng lệnh tự động khi đạt mục tiêu lợi nhuận." },
    { term: "Technical Analysis", def: "Phân tích kỹ thuật - dự đoán giá dựa trên biểu đồ và các chỉ báo." },
    { term: "Fundamental Analysis", def: "Phân tích cơ bản - dự đoán giá dựa trên tin tức và dữ liệu kinh tế." },
    { term: "Timeframe", def: "Khung thời gian của biểu đồ. Ví dụ: M1 (1 phút), H1 (1 giờ), D1 (1 ngày)." },
    { term: "Trailing Stop", def: "Lệnh dừng lỗ di động - tự động dịch chuyển theo hướng có lợi khi giá di chuyển thuận chiều." },
    { term: "Trend", def: "Xu hướng - hướng di chuyển chủ đạo của giá (tăng, giảm, hoặc đi ngang)." },
    { term: "Volatility", def: "Biến động - mức độ dao động giá trong một khoảng thời gian." },
    { term: "Volume", def: "Khối lượng giao dịch - số lượng đơn vị được giao dịch trong một khoảng thời gian." },
    { term: "VPS", def: "Virtual Private Server - máy chủ ảo cho phép chạy EA 24/7 mà không cần bật máy tính cá nhân." },
];

const categories = ["Tất cả", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

export default function GlossaryPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("Tất cả");

    const filteredTerms = useMemo(() => {
        let result = [...terms];

        if (searchTerm) {
            const lowerSearch = searchTerm.toLowerCase();
            result = result.filter(t =>
                t.term.toLowerCase().includes(lowerSearch) ||
                t.def.toLowerCase().includes(lowerSearch)
            );
        }

        if (activeCategory !== "Tất cả") {
            result = result.filter(t =>
                t.term[0].toUpperCase() === activeCategory
            );
        }

        return result.sort((a, b) => a.term.localeCompare(b.term));
    }, [searchTerm, activeCategory]);

    const glossarySchema = {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        "name": "Từ Điển Thuật Ngữ Forex",
        "description": "Bộ thuật ngữ chuyên ngành Forex từ A-Z cho trader Việt Nam",
        "url": "https://sanuytin.net/thuat-ngu/",
        "hasDefinedTerm": terms.map(t => ({
            "@type": "DefinedTerm",
            "name": t.term,
            "description": t.def
        }))
    };

    return (
        <main className="min-h-screen bg-background pt-[120px] relative">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(glossarySchema) }}
            />

            <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-primary/5 via-transparent to-purple-600/5 pointer-events-none" />
            <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="container-custom py-16 md:py-24">
                    <div className="flex items-center gap-2 text-base text-muted-foreground mb-8">
                        <Link href="/" className="hover:text-primary flex items-center gap-1.5 transition-colors">
                            <Home size={16} /> Trang chủ
                        </Link>
                        <ChevronRight size={16} />
                        <span className="text-foreground font-medium">Thuật Ngữ</span>
                    </div>

                    <div className="flex items-center gap-3 mb-5">
                        <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                            <BookOpen size={26} />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-wider text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                            {terms.length}+ Thuật ngữ
                        </span>
                    </div>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 tracking-tight leading-tight">
                        Từ Điển <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Forex</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/70 max-w-4xl leading-relaxed">
                        Tra cứu nhanh ý nghĩa của các thuật ngữ chuyên ngành trong giao dịch. Từ căn bản đến chuyên sâu, giúp bạn tự tin hơn khi đọc phân tích và đặt lệnh.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom py-16 md:py-20">
                {/* Search & Filter */}
                <div className="bg-card border border-border p-6 rounded-2xl shadow-sm mb-12">
                    <div className="relative mb-6">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                        <input
                            type="text"
                            placeholder="Tìm kiếm thuật ngữ (VD: Spread, Margin, Pip...)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-secondary/50 border border-transparent focus:border-primary focus:bg-background outline-none text-lg transition-all placeholder:text-muted-foreground"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${activeCategory === cat
                                    ? "bg-primary text-white"
                                    : "bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-primary"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-muted-foreground">
                        Hiển thị <span className="font-bold text-foreground">{filteredTerms.length}</span> thuật ngữ
                        {searchTerm && <span className="text-primary"> cho &quot;{searchTerm}&quot;</span>}
                    </p>
                </div>

                {/* Terms Grid */}
                {filteredTerms.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-6">
                        {filteredTerms.map((item, index) => (
                            <div key={index} className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group">
                                <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
                                    <Book size={18} />
                                    {item.term}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {item.def}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-card rounded-xl border border-border">
                        <BookOpen size={48} className="text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground mb-4">Không tìm thấy thuật ngữ phù hợp.</p>
                        <button
                            onClick={() => { setSearchTerm(""); setActiveCategory("Tất cả"); }}
                            className="text-primary font-medium hover:underline"
                        >
                            Xóa bộ lọc
                        </button>
                    </div>
                )}

                {/* Internal Linking Section */}
                <div className="mt-16 grid md:grid-cols-3 gap-6">
                    <Link href="/cong-cu" className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
                        <div className="p-3 bg-emerald-500/10 rounded-xl w-fit mb-4">
                            <Calculator size={24} className="text-emerald-500" />
                        </div>
                        <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Công cụ tính toán</h3>
                        <p className="text-sm text-muted-foreground mb-4">Tính Pip, Margin, Lợi nhuận ngay trên trình duyệt. Không cần cài đặt.</p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                            Dùng ngay <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    <Link href="/kien-thuc-forex" className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
                        <div className="p-3 bg-blue-500/10 rounded-xl w-fit mb-4">
                            <BookOpen size={24} className="text-blue-500" />
                        </div>
                        <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Kiến thức Forex A-Z</h3>
                        <p className="text-sm text-muted-foreground mb-4">Hướng dẫn chi tiết từ cơ bản đến nâng cao cho người mới bắt đầu.</p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                            Xem ngay <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    <Link href="/so-sanh" className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5">
                        <div className="p-3 bg-purple-500/10 rounded-xl w-fit mb-4">
                            <BarChart3 size={24} className="text-purple-500" />
                        </div>
                        <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">So sánh sàn Forex</h3>
                        <p className="text-sm text-muted-foreground mb-4">Bảng so sánh chi tiết Spread, phí và giấy phép của các sàn hàng đầu.</p>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                            So sánh ngay <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </div>

                {/* CTA */}
                <div className="mt-16 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Muốn hiểu sâu hơn?</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Đọc các bài viết kiến thức Forex từ cơ bản đến nâng cao để trở thành trader chuyên nghiệp.
                    </p>
                    <Link href="/kien-thuc-forex" className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors inline-block">
                        Xem Kiến Thức Forex
                    </Link>
                </div>
            </div>
        </main>
    );
}
