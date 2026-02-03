import ReviewList from "@/components/ReviewList";
import LatestPosts from "@/components/LatestPosts";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import { ChevronRight, Home, ShieldCheck, UsersRound, Trophy, RefreshCcw, Sparkles, Target, TrendingUp, Zap } from "lucide-react";

export const metadata = {
    title: "Đánh Giá Sàn Forex Uy Tín - Review Chi Tiết Mới Nhất 2026",
    description: "Tổng hợp đánh giá chi tiết các sàn Forex uy tín nhất hiện nay. Phân tích ưu nhược điểm, phí giao dịch, giấy phép và độ tin cậy giúp bạn chọn sàn tốt nhất.",
};

export default function ReviewPage() {
    return (
        <main className="min-h-screen bg-background pt-[120px]">
            {/* Minimal Hero */}
            <div className="bg-secondary/30 border-b border-border">
                <div className="container-custom py-14 md:py-20">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-base text-muted-foreground mb-8">
                        <Link href="/" className="hover:text-primary flex items-center gap-1.5 transition-colors">
                            <Home size={16} /> Trang chủ
                        </Link>
                        <ChevronRight size={16} />
                        <span className="text-foreground font-medium">Đánh giá sàn Forex</span>
                    </div>

                    {/* Title Section */}
                    <div className="max-w-4xl mb-14">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            Top 10 Sàn Forex Uy Tín Nhất <span className="text-primary">2026</span>
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8">
                            Danh sách được đánh giá bởi đội ngũ chuyên gia với hơn 10 năm kinh nghiệm.
                            Chúng tôi kiểm tra thực tế giấy phép, phí giao dịch, tốc độ nạp rút và hỗ trợ khách hàng.
                        </p>
                    </div>

                    {/* Trust Stats - Premium Modern Design */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 mb-12">
                        <div className="group flex items-center gap-4 p-5 bg-gradient-to-br from-card to-secondary/30 rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                                <ShieldCheck size={24} strokeWidth={2} />
                            </div>
                            <div>
                                <p className="text-2xl font-black text-foreground">50+</p>
                                <p className="text-xs text-muted-foreground font-medium">Sàn đã review</p>
                            </div>
                        </div>
                        <div className="group flex items-center gap-4 p-5 bg-gradient-to-br from-card to-secondary/30 rounded-2xl border border-border/50 hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                                <UsersRound size={24} strokeWidth={2} />
                            </div>
                            <div>
                                <p className="text-2xl font-black text-foreground">100K+</p>
                                <p className="text-xs text-muted-foreground font-medium">Người đọc/tháng</p>
                            </div>
                        </div>
                        <div className="group flex items-center gap-4 p-5 bg-gradient-to-br from-card to-secondary/30 rounded-2xl border border-border/50 hover:border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/5 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-yellow-500/30 group-hover:scale-110 transition-transform">
                                <Trophy size={24} strokeWidth={2} />
                            </div>
                            <div>
                                <p className="text-2xl font-black text-foreground">10+</p>
                                <p className="text-xs text-muted-foreground font-medium">Năm kinh nghiệm</p>
                            </div>
                        </div>
                        <div className="group flex items-center gap-4 p-5 bg-gradient-to-br from-card to-secondary/30 rounded-2xl border border-border/50 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                                <RefreshCcw size={24} strokeWidth={2} />
                            </div>
                            <div>
                                <p className="text-2xl font-black text-foreground">24h</p>
                                <p className="text-xs text-muted-foreground font-medium">Cập nhật liên tục</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Broker List */}
            <div className="bg-secondary/20 border-y border-border">
                <div className="container-custom py-8 md:py-12">
                    <ReviewList />
                </div>
            </div>

            {/* Additional Content */}
            <div className="container-custom py-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Tiêu chí đánh giá của chúng tôi</h2>
                    <div className="prose dark:prose-invert max-w-none">
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Mỗi sàn giao dịch được đánh giá dựa trên 5 tiêu chí quan trọng:
                            <strong> Giấy phép pháp lý</strong>, <strong>Chi phí giao dịch</strong>,
                            <strong> Tốc độ nạp rút</strong>, <strong>Nền tảng giao dịch</strong> và
                            <strong> Hỗ trợ khách hàng</strong>. Đội ngũ chuyên gia của chúng tôi
                            thực hiện kiểm tra thực tế và cập nhật đánh giá định kỳ.
                        </p>
                    </div>
                </div>
            </div>

            <LatestPosts />

            <div className="bg-secondary/20">
                <FAQ />
            </div>
        </main>
    );
}
