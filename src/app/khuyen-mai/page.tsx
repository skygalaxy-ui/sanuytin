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
            logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770111263958-7q1b49yrbll.jpg",
            link: "https://clicks.pipaffiliates.com/c?c=860556&l=en&p=1",
            features: ["Dành cho tài khoản mới", "Rút lợi nhuận không giới hạn", "Xác minh danh tính nhanh"]
        },
        {
            id: 2,
            broker: "Exness",
            title: "Hoàn Tiền Giao Dịch Tới $10/Lot",
            type: "Cashback",
            value: "Up to $10/Lot",
            valid: "Vĩnh viễn",
            logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770112121651-fh714o034v6.jpg",
            link: "https://one.exness-track.com/a/s4f2724vj1",
            features: ["Áp dụng mọi loại tài khoản", "Nhận cashback hàng ngày", "Không giới hạn volume"]
        },
        {
            id: 3,
            broker: "Vantage",
            title: "Bonus 50% Khi Nạp Lần Đầu",
            type: "Deposit Bonus",
            value: "50%",
            valid: "28/02/2026",
            logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770111202536-xylxa3m03pi.png",
            link: "https://www.vantage-markets-apac.com/vn/open-live-account/?affid=MTA4NTAy",
            features: ["Tối đa $500 bonus", "Có thể rút lợi nhuận", "Không yêu cầu volume tối thiểu"]
        },
        {
            id: 4,
            broker: "IC Markets",
            title: "Giảm Spread 30% Cho Trader Mới",
            type: "Spread Discount",
            value: "30% Off",
            valid: "15/03/2026",
            logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770114251216-2i4d673y8lq.png",
            link: "https://www.icmarkets.com/?camp=28420",
            features: ["Áp dụng 30 ngày đầu", "EUR/USD từ 0.0 pip", "Tất cả loại tài khoản"]
        },
        {
            id: 5,
            broker: "FBS",
            title: "Bonus 100% Nạp Tiền",
            type: "Deposit Bonus",
            value: "100%",
            valid: "31/01/2026",
            logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770112317691-rsgvniyati9.png",
            link: "https://fbs.com/promo/bonus-100?partner_id=458979",
            features: ["Tối đa $10,000 bonus", "Yêu cầu volume giao dịch", "Có thể chuyển đổi thành tiền thật"]
        },
        {
            id: 6,
            broker: "XM",
            title: "Tham Gia Cuộc Thi Trading",
            type: "Contest",
            value: "$50,000",
            valid: "Hàng tháng",
            logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770111263958-7q1b49yrbll.jpg",
            link: "https://clicks.pipaffiliates.com/c?c=860556&l=en&p=1",
            features: ["Giải thưởng $50,000", "Tham gia miễn phí", "Giao dịch trên tài khoản Demo"]
        }
    ];

    return (
        <main className="min-h-screen bg-background pt-[120px]">
            {/* Hero Section */}
            <div className="bg-secondary/30 border-b border-border">
                <div className="container-custom py-16 md:py-24">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-base text-muted-foreground mb-8">
                        <Link href="/" className="hover:text-primary flex items-center gap-1.5 transition-colors">
                            <Home size={16} /> Trang chủ
                        </Link>
                        <ChevronRight size={16} />
                        <span className="text-foreground font-medium">Khuyến Mãi</span>
                    </div>

                    <div className="flex items-center gap-3 mb-5">
                        <div className="p-2.5 bg-red-500/10 rounded-lg text-red-500">
                            <Gift size={26} />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-wider text-red-500 bg-red-500/10 px-4 py-1.5 rounded-full">
                            Hot Deals 2026
                        </span>
                    </div>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 tracking-tight leading-tight">
                        Khuyến Mãi & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Bonus</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/70 max-w-4xl leading-relaxed">
                        Tận dụng các ưu đãi tốt nhất để gia tăng vốn giao dịch của bạn. Cập nhật liên tục từ các sàn Forex uy tín.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom py-16 md:py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {promos.map((item) => (
                        <div key={item.id} className="bg-card dark:bg-card/40 rounded-3xl p-6 border border-border shadow-lg relative overflow-hidden group hover:border-primary/50 transition-all">

                            {/* Ribbon */}
                            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl z-20">
                                {item.type}
                            </div>

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-24 h-16 rounded-xl bg-white p-1 shadow-sm overflow-hidden flex items-center justify-center">
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
                                {item.features.map((feature, idx) => (
                                    <li key={idx} className="flex gap-2">
                                        <CheckCircle size={16} className="text-green-500 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
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

                {/* Info Note */}
                <div className="mt-12 p-6 bg-secondary/50 border border-border rounded-2xl">
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Sparkles size={20} className="text-primary" />
                        Lưu ý quan trọng
                    </h3>
                    <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Các chương trình khuyến mãi có thể thay đổi mà không báo trước.</li>
                        <li>• Vui lòng đọc kỹ Điều khoản & Điều kiện của từng sàn trước khi tham gia.</li>
                        <li>• Bonus thường đi kèm yêu cầu về khối lượng giao dịch trước khi rút.</li>
                        <li>• Giao dịch Forex có rủi ro cao, hãy cân nhắc kỹ trước khi tham gia.</li>
                    </ul>
                </div>

                {/* CTA */}
                <div className="mt-12 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Chưa biết chọn sàn nào?</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Xem bảng so sánh chi tiết các sàn Forex uy tín để chọn sàn phù hợp với chiến lược giao dịch của bạn.
                    </p>
                    <Link href="/so-sanh" className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-xl font-bold hover:from-red-600 hover:to-orange-600 transition-all inline-block shadow-lg shadow-orange-500/30">
                        So Sánh Các Sàn Forex
                    </Link>
                </div>
            </div>
        </main>
    );
}
