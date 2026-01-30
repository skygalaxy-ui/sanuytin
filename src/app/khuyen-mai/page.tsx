import { Metadata } from "next";
import Link from "next/link";
import { Gift, CheckCircle, ChevronRight, Home, Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "Khuyến Mãi Forex Hot Nhất 2026 - Bonus, Cashback | Sàn Uy Tín",
    description: "Tổng hợp các chương trình khuyến mãi, bonus tặng tiền, hoàn tiền (cashback) từ các sàn Forex uy tín nhất.",
};

export default function PromoPage() {
    const promos = [
        {
            id: 1,
            broker: "XM",
            title: "Thưởng $30 Không Cần Ký Quỹ",
            type: "No Deposit Bonus",
            value: "$30",
            valid: "31/12/2026",
            logo: "https://sanuytin.net/wp-content/uploads/2025/10/xm-sanuytin.jpg",
            link: "https://clicks.pipaffiliates.com/c?c=860556&l=en&p=1"
        },
        {
            id: 2,
            broker: "Exness",
            title: "Hoàn Tiền Giao Dịch Tới $10/Lot",
            type: "Cashback",
            value: "Up to $10/Lot",
            valid: "Vĩnh viễn",
            logo: "https://sanuytin.net/wp-content/uploads/2025/10/exness-sanuytin.jpg",
            link: "https://one.exness-track.com/a/s4f2724vj1"
        },
        {
            id: 3,
            broker: "Vantage",
            title: "Bonus 50% Khi Nạp Lần Đầu",
            type: "Deposit Bonus",
            value: "50%",
            valid: "28/02/2026",
            logo: "https://sanuytin.net/wp-content/uploads/2025/11/san-giao-dich-forex-vantage-co-uy-tin-khong.png",
            link: "https://www.vantage-markets-apac.com/vn/open-live-account/?affid=MTA4NTAy"
        }
    ];

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
                        <span className="text-foreground font-medium">Khuyến Mãi</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                            <Gift size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-3 py-1 rounded-full">
                            Hot Deals 2026
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
                        Khuyến Mãi & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Bonus</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                        Tận dụng các ưu đãi tốt nhất để gia tăng vốn giao dịch của bạn. Cập nhật liên tục từ các sàn Forex uy tín.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {promos.map((item) => (
                        <div key={item.id} className="bg-card dark:bg-card/40 rounded-3xl p-6 border border-border shadow-lg relative overflow-hidden group hover:border-primary/50 transition-all">

                            {/* Ribbon */}
                            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-20">
                                {item.type}
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-sm border border-border">
                                    <img src={item.logo} alt={item.broker} className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-foreground">{item.broker}</h3>
                                    <p className="text-sm text-muted-foreground">Hết hạn: {item.valid}</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-primary mb-2">{item.value}</h2>
                            <p className="font-medium text-foreground/80 mb-6">{item.title}</p>

                            <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                                <li className="flex gap-2">
                                    <CheckCircle size={16} className="text-green-500 shrink-0" />
                                    <span>Dành cho tài khoản mới</span>
                                </li>
                                <li className="flex gap-2">
                                    <CheckCircle size={16} className="text-green-500 shrink-0" />
                                    <span>Rút lợi nhuận không giới hạn</span>
                                </li>
                            </ul>

                            <Link
                                href={item.link}
                                className="w-full block bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white text-center py-3 rounded-xl font-bold shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1"
                            >
                                Nhận Khuyến Mãi
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
