import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import ComparisonTable from "@/components/ComparisonTable";
import { HelpCircle, DollarSign, CircleCheck, ShieldCheck, ChevronRight, Home, BarChart2 } from "lucide-react";

const now = new Date();
const currentMonth = String(now.getMonth() + 1).padStart(2, '0');
const currentYear = now.getFullYear();
const updateLabel = `${currentMonth}/${currentYear}`;

export const metadata: Metadata = {
    title: "So Sánh Sàn Forex 2026: XTB vs Pepperstone vs Exness - Bảng Chi Tiết",
    description: `⚡ So sánh chi tiết sàn Forex: XTB, Pepperstone, Exness, XM, ICMarkets. Bảng so sánh Spread, phí hoa hồng, giấy phép, tốc độ nạp rút. Cập nhật tháng ${updateLabel}.`,
    keywords: ["so sánh sàn xtb và pepperstone", "so sánh sàn pepperstone và xtb", "so sánh sàn xm và fxpro", "so sánh sàn forex", "so sánh sàn forex uy tín"],
};

export default function ComparisonPage() {
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://sanuytin.net/" },
            { "@type": "ListItem", position: 2, name: "So Sánh", item: "https://sanuytin.net/so-sanh/" },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <main className="min-h-screen bg-background pt-[120px] relative">
                {/* Background effects */}
                <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />
                <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                {/* Hero Section */}
                <div className="relative overflow-hidden">
                    <div className="container-custom relative py-12 md:py-16">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                            <Link href="/" className="hover:text-primary flex items-center gap-1.5 transition-colors">
                                <Home size={14} /> Trang chủ
                            </Link>
                            <ChevronRight size={14} />
                            <span className="text-foreground font-medium">So Sánh</span>
                        </div>

                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <BarChart2 size={22} />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                    Cập nhật tháng {updateLabel}
                                </span>
                            </div>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-tight">
                                So sánh sàn Forex <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">chi tiết & minh bạch</span>
                            </h1>
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                Đừng chọn sàn vì quảng cáo. Hãy chọn vì dữ liệu thực tế — so sánh phí giao dịch, điều kiện nạp rút và giấy phép pháp lý.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Comparison Table Section */}
                <div className="container-custom py-10 md:py-14">
                    <div className="bg-card dark:bg-card/50 border border-border rounded-2xl shadow-xl overflow-hidden p-1 md:p-2">
                        <ComparisonTable />
                    </div>

                    <p className="mt-8 text-center text-base text-muted-foreground flex items-center justify-center gap-2">
                        <HelpCircle size={16} />
                        Vuốt ngang bảng để xem thêm các sàn khác (trên điện thoại)
                    </p>
                </div>

                {/* SEO Text Content */}
                <section className="py-20 bg-secondary/20">
                    <div className="container-custom max-w-[1000px] space-y-12">
                        <div className="text-center mb-12">
                            <h2 className="text-xl sm:text-3xl font-bold text-foreground mb-4">Tiêu Chí So Sánh Của Chúng Tôi</h2>
                            <p className="text-muted-foreground">Chúng tôi không chỉ liệt kê, chúng tôi phân tích dựa trên dữ liệu thực tế của Trader.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-card dark:bg-card/40 p-8 rounded-2xl border border-border shadow-sm">
                                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                                    <span className="bg-green-500/10 text-green-500 w-8 h-8 rounded-lg flex items-center justify-center"><DollarSign size={18} /></span>
                                    Sàn Forex nào phí thấp nhất?
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Về tổng chi phí (Spread + Commission), <strong>IC Markets</strong> và <strong>Tickmill</strong> hiện đang dẫn đầu thị trường với tài khoản Raw/Pro.
                                    Spread Vàng trên IC Markets thường dao động quanh 0.0 - 0.1 pips.
                                </p>
                                <ul className="text-sm space-y-2.5 text-muted-foreground">
                                    <li className="flex items-start gap-2.5"><CircleCheck size={16} className="text-green-500 mt-0.5 shrink-0" /> <strong>IC Markets:</strong> Raw Spread từ 0.0, Commission $7.0/lot.</li>
                                    <li className="flex items-start gap-2.5"><CircleCheck size={16} className="text-green-500 mt-0.5 shrink-0" /> <strong>Tickmill:</strong> Pro Account, Commission chỉ $4.0/lot.</li>
                                    <li className="flex items-start gap-2.5"><CircleCheck size={16} className="text-green-500 mt-0.5 shrink-0" /> <strong>Exness:</strong> Zero Account, miễn phí Commission cho nhiều cặp.</li>
                                </ul>
                            </div>
                            <div className="bg-card dark:bg-card/40 p-8 rounded-2xl border border-border shadow-sm">
                                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                                    <span className="bg-blue-500/10 text-blue-500 w-8 h-8 rounded-lg flex items-center justify-center"><ShieldCheck size={18} /></span>
                                    Giấy Phép (License)
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Độ uy tín là số 1. Chỉ các sàn có giấy phép Tier-1 (ASIC, FCA, CySEC) mới được đưa vào bảng so sánh này.
                                    Chúng tôi loại bỏ hoàn toàn các sàn scam, không giấy phép.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
