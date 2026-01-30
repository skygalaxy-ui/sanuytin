import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import ComparisonTable from "@/components/ComparisonTable";
import { CheckCircle, HelpCircle, ChevronRight, Home, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
    title: "So Sánh Sàn Forex Uy Tín 2026 - Bảng Xếp Hạng Chi Tiết",
    description: "Công cụ so sánh sàn Forex trực quan nhất. So sánh Spread, Hoa Hồng, Giấy Phép và Nạp Rút của top 10 sàn uy tín nhất hiện nay.",
};

export default function ComparisonPage() {
    return (
        <main className="min-h-screen bg-background pt-[160px]">
            {/* Hero Section */}
            <div className="bg-secondary/30 border-b border-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl -z-10" />

                <div className="container-custom py-12 md:py-20">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                            <Home size={14} /> Trang chủ
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-foreground font-medium">So Sánh</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <BarChart3 size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                            Dữ liệu cập nhật tháng 01/2026
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
                        So Sánh Sàn Forex <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Chi Tiết & Minh Bạch</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                        Đừng chọn sàn vì quảng cáo. Hãy chọn vì dữ liệu thực tế. So sánh phí giao dịch (Spread), điều kiện nạp rút và giấy phép pháp lý ngay tại đây.
                    </p>
                </div>
            </div>

            {/* Comparison Table Section */}
            <div className="container-custom py-12">
                <div className="bg-card dark:bg-card/50 border border-border rounded-2xl shadow-xl overflow-hidden p-1 md:p-2">
                    <ComparisonTable />
                </div>

                <p className="mt-6 text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <HelpCircle size={14} />
                    Vuốt ngang bảng để xem thêm các sàn khác (trên điện thoại)
                </p>
            </div>

            {/* SEO Text Content */}
            <section className="py-20 bg-secondary/20">
                <div className="container-custom max-w-[1000px] space-y-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Tiêu Chí So Sánh Của Chúng Tôi</h2>
                        <p className="text-muted-foreground">Chúng tôi không chỉ liệt kê, chúng tôi phân tích dựa trên dữ liệu thực tế của Trader.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-card dark:bg-card/40 p-8 rounded-2xl border border-border shadow-sm">
                            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                                <span className="bg-green-500/10 text-green-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm">$$</span>
                                Spread & Chi Phí
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Chúng tôi so sánh Spread trung bình trên cặp EURUSD và Gold (XAUUSD) trong phiên Âu.
                                Sàn có spread thấp (Raw ECN) luôn được ưu tiên xếp hạng cao hơn.
                            </p>
                        </div>
                        <div className="bg-card dark:bg-card/40 p-8 rounded-2xl border border-border shadow-sm">
                            <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                                <span className="bg-blue-500/10 text-blue-600 w-8 h-8 rounded-lg flex items-center justify-center text-sm">UK</span>
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
    );
}
