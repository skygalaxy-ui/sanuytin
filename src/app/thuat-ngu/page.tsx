import { Metadata } from "next";
import Link from "next/link";
import { Book, Search, ChevronRight, Home, BookOpen } from "lucide-react";

export const metadata: Metadata = {
    title: "Thuật Ngữ Forex - Từ Điển Trading A-Z | Sàn Uy Tín",
    description: "Giải thích chi tiết hơn 1000 thuật ngữ Forex: Pip, Lot, Swap, Leverage, Margin Call, Stop Out...",
};

export default function GlossaryPage() {
    const terms = [
        { term: "Ask Price", def: "Giá mà tại đó thị trường sẵn sàng bán một cặp tiền tệ cho bạn." },
        { term: "Bid Price", def: "Giá mà tại đó thị trường sẵn sàng mua một cặp tiền tệ từ bạn." },
        { term: "Leverage (Đòn bẩy)", def: "Công cụ cho phép trader giao dịch khối lượng lớn hơn số vốn thực có." },
        { term: "Lot", def: "Đơn vị tiêu chuẩn để đo khối lượng giao dịch trong Forex. 1 Lot chuẩn = 100,000 đơn vị tiền tệ." },
        { term: "Margin (Ký quỹ)", def: "Số tiền cần thiết trong tài khoản để mở và duy trì một vị thế giao dịch." },
        { term: "Pip", def: "Đơn vị biến động giá nhỏ nhất của một cặp tiền tệ (thường là chữ số thập phân thứ 4)." },
        { term: "Spread", def: "Chênh lệch giữa giá Bid và giá Ask. Đây là chi phí giao dịch mà trader phải trả." },
        { term: "Swap (Phí qua đêm)", def: "Lãi suất được trả hoặc bị trừ khi giữ một vị thế qua đêm." },
    ];

    const categories = ["A-C", "D-F", "G-I", "J-L", "M-O", "P-R", "S-U", "V-Z"];

    return (
        <main className="min-h-screen bg-background pt-[160px]">
            {/* Hero Section */}
            <div className="bg-secondary/30 border-b border-border">
                <div className="container-custom py-12 md:py-20">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                            <Home size={14} /> Trang chủ
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-foreground font-medium">Thuật Ngữ</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <BookOpen size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                            Từ Điển A-Z
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
                        Thuật Ngữ <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Forex</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                        Tra cứu nhanh ý nghĩa của các thuật ngữ chuyên ngành trong giao dịch. Từ căn bản đến chuyên sâu.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom py-12">
                {/* Search & Filter */}
                <div className="bg-card dark:bg-card/40 p-6 rounded-2xl border border-border shadow-sm mb-12">
                    <div className="relative mb-8">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                        <input
                            type="text"
                            placeholder="Tìm kiếm thuật ngữ (VD: Spread, Margin...)"
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-secondary/50 border border-transparent focus:border-primary focus:bg-background outline-none text-lg transition-all"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button key={cat} className="px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:bg-primary hover:text-white transition-colors font-bold text-sm">
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Terms Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {terms.map((item, index) => (
                        <div key={index} className="p-6 rounded-xl bg-card dark:bg-card/40 border border-border hover:border-primary/30 transition-colors">
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
            </div>
        </main>
    );
}
