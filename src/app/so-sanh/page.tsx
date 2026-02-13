import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import ComparisonTable from "@/components/ComparisonTable";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
    title: "So Sánh Sàn Forex Uy Tín 2026 - Bảng Xếp Hạng Chi Tiết",
    description: "Công cụ so sánh sàn Forex trực quan nhất. So sánh Spread, Hoa Hồng, Giấy Phép và Nạp Rút của top 10 sàn uy tín nhất hiện nay.",
};

export default function ComparisonPage() {
    return (
        <main className="min-h-screen bg-background pt-[120px]">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

                <div className="container-custom relative py-12 md:py-20">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-8">
                        <Link href="/" className="hover:text-primary transition-colors">Trang chủ</Link>
                        <span>»</span>
                        <span className="text-foreground">So Sánh</span>
                    </div>

                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary mb-6">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                            Cập nhật tháng 02/2026
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5 leading-[1.2]">
                            So sánh sàn Forex<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-cyan-400">chi tiết & minh bạch</span>
                        </h1>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                            Đừng chọn sàn vì quảng cáo. Hãy chọn vì dữ liệu thực tế — so sánh phí giao dịch, điều kiện nạp rút và giấy phép pháp lý.
                        </p>
                    </div>

                    {/* Stats row */}
                    <div className="flex flex-wrap gap-6 md:gap-10 mt-10 pt-8 border-t border-border/50">
                        <div>
                            <p className="text-2xl md:text-3xl font-bold text-foreground">10+</p>
                            <p className="text-xs text-muted-foreground mt-0.5">Sàn được đánh giá</p>
                        </div>
                        <div>
                            <p className="text-2xl md:text-3xl font-bold text-foreground">5</p>
                            <p className="text-xs text-muted-foreground mt-0.5">Tiêu chí so sánh</p>
                        </div>
                        <div>
                            <p className="text-2xl md:text-3xl font-bold text-foreground">Tier-1</p>
                            <p className="text-xs text-muted-foreground mt-0.5">Giấy phép hàng đầu</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Comparison Table Section */}
            <div className="container-custom py-16 md:py-20">
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
