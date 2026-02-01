import Link from "next/link";
import { BookOpen, TrendingUp, BarChart2, Shield, GraduationCap, ChevronRight, FileText, PlayCircle, Home } from "lucide-react";
import KnowledgeArticles from "@/components/KnowledgeArticles";

export const metadata = {
    title: "Kiến thức Forex: Hướng dẫn đầu tư từ A-Z cho người mới | Sàn Uy Tín",
    description: "Tổng hợp kiến thức Forex từ cơ bản đến nâng cao. Học cách đọc biểu đồ, quản lý vốn và xây dựng chiến lược giao dịch hiệu quả.",
};

export default function KnowledgeHubPage() {
    return (
        <main className="bg-background min-h-screen pt-[160px]">
            {/* Hero Section */}
            <div className="bg-secondary/30 border-b border-border">
                <div className="container-custom max-w-7xl py-12 md:py-20">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                            <Home size={14} /> Trang chủ
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-foreground font-medium">Kiến Thức Forex</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <GraduationCap size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                            Học viện Forex
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
                        Kiến thức Forex <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Từ A Đến Z</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                        Lộ trình học đầu tư Forex bài bản, miễn phí. Trang bị tư duy và kỹ năng để tự tin giao dịch trên thị trường tài chính toàn cầu.
                    </p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="container-custom max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* Left Column: Categories */}
                <div className="lg:col-span-8 space-y-16">

                    {/* Category 1: Nhập Môn Forex (Beginner) */}
                    <section id="beginner">
                        <div className="flex items-center gap-3 mb-6 border-b border-border/50 pb-4">
                            <div className="p-2 bg-green-500/10 rounded-lg text-green-600">
                                <BookOpen size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground">1. Nhập Môn Forex (Beginner)</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <ArticleCard
                                category="Cơ bản"
                                title="Forex là gì? Hướng dẫn nhập môn toàn tập"
                                desc="Khái niệm thị trường ngoại hối, cơ chế hoạt động và cách kiếm tiền từ chênh lệch tỷ giá."
                                href="/kien-thuc-forex/forex-la-gi"
                            />
                            <ArticleCard
                                category="Kiến thức"
                                title="Các Cặp Tiền Chéo & Cách chọn cặp tiền"
                                desc="Hiểu về cặp tiền chính (Majors), cặp tiền chéo (Crosses) và cặp tiền lạ (Exotics)."
                                href="#"
                            />
                            <ArticleCard
                                category="Kinh nghiệm"
                                title="Chọn Khung Thời Gian Giao Dịch (Timeframe)"
                                desc="Nên trade H1, H4 hay D1? Cách chọn timeframe phù hợp với tính cách của bạn."
                                href="#"
                            />
                            <ArticleCard
                                category="Quản lý vốn"
                                title="Kinh nghiệm chọn Đòn Bẩy (Leverage) an toàn"
                                desc="Đòn bẩy là dao hai lưỡi. Hướng dẫn chọn tỷ lệ đòn bẩy 1:100 hay 1:500 để tối ưu."
                                href="#"
                            />
                        </div>
                    </section>

                    {/* Category 2: Công Cụ & Nền Tảng (Tools) */}
                    <section id="tools">
                        <div className="flex items-center gap-3 mb-6 border-b border-border/50 pb-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600">
                                <BarChart2 size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground">2. Công Cụ & Nền Tảng</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <ArticleCard
                                category="Phần mềm"
                                title="Hướng dẫn sử dụng MT4 (MetaTrader 4) Chi Tiết"
                                desc="Cầm tay chỉ việc sử dụng phần mềm giao dịch huyền thoại: Đặt lệnh, thêm chỉ báo, cài template."
                                href="#"
                            />
                            <ArticleCard
                                category="Tin tức"
                                title="Cách xem tin tức trên Forex Factory hiệu quả"
                                desc="Đọc hiểu lịch kinh tế, các chỉ số Non-Farm, CPI và cách tránh bão tin tức."
                                href="#"
                            />
                        </div>
                    </section>

                    {/* Category 3: Phân Tích Cơ Bản (Fundamental) */}
                    <section id="fundamental">
                        <div className="flex items-center gap-3 mb-6 border-b border-border/50 pb-4">
                            <div className="p-2 bg-purple-500/10 rounded-lg text-purple-600">
                                <TrendingUp size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground">3. Phân Tích Cơ Bản & Kinh Tế</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <ArticleCard
                                category="Vĩ mô"
                                title="Tác động của Lãi Suất tới thị trường Forex"
                                desc="Tại sao quyết định lãi suất của FED lại khiến thị trường chao đảo? Mối quan hệ giữa Lãi suất và Giá trị tiền tệ."
                                href="#"
                            />
                            <ArticleCard
                                category="Kinh tế"
                                title="Các Yếu Tố Kinh Tế ảnh hưởng đến tỷ giá"
                                desc="Lạm phát (Inflation), GDP, và Tỷ lệ thất nghiệp tác động thế nào đến xu hướng dài hạn?"
                                href="#"
                            />
                        </div>
                    </section>

                    {/* Category 4: Chiến Lược Thực Chiến (Strategies) */}
                    <section id="strategies">
                        <div className="flex items-center gap-3 mb-6 border-b border-border/50 pb-4">
                            <div className="p-2 bg-orange-500/10 rounded-lg text-orange-600">
                                <Shield size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-foreground">4. Chiến Lược Giao Dịch Thực Chiến</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <ArticleCard
                                category="Phương pháp"
                                title="Scalping vs Swing Trading: Bạn thuộc hệ nào?"
                                desc="So sánh chi tiết hai trường phái giao dịch phổ biến nhất. Ưu nhược điểm và cách chọn."
                                href="#"
                            />
                            <ArticleCard
                                category="Nâng cao"
                                title="Chiến lược giao dịch của Trader chuyên nghiệp"
                                desc="Tổng hợp các setup xác suất thắng cao (High Winrate Setup) được quỹ đầu tư áp dụng."
                                href="#"
                            />
                        </div>
                    </section>

                    {/* Dynamic Articles from Supabase */}
                    <KnowledgeArticles />

                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    {/* Quick Nav */}
                    <div className="bg-card dark:bg-card/40 border border-border rounded-2xl p-6 shadow-sm sticky top-28">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <BookOpen size={20} className="text-primary" /> Mục lục
                        </h3>
                        <nav className="space-y-2 text-sm">
                            <a href="#beginner" className="block p-2 rounded hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">1. Nhập môn Forex</a>
                            <a href="#tools" className="block p-2 rounded hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">2. Công cụ & Nền tảng</a>
                            <a href="#fundamental" className="block p-2 rounded hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">3. Phân tích cơ bản</a>
                            <a href="#strategies" className="block p-2 rounded hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">4. Chiến lược thực chiến</a>
                        </nav>

                        <div className="mt-8 pt-6 border-t border-border">
                            <h3 className="font-bold text-lg mb-4">Các sàn hỗ trợ tốt</h3>
                            <div className="space-y-4">
                                <Link href="/xm" className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-lg bg-white p-1 border border-border flex items-center justify-center">
                                        <img src="https://sanuytin.net/wp-content/uploads/2025/10/xm-sanuytin.jpg" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-foreground text-sm group-hover:text-primary">XM</div>
                                        <div className="text-xs text-muted-foreground">Bonus cho Newbie</div>
                                    </div>
                                </Link>
                                <Link href="/exness" className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-lg bg-white p-1 border border-border flex items-center justify-center">
                                        <img src="https://sanuytin.net/wp-content/uploads/2025/10/exness-sanuytin.jpg" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-foreground text-sm group-hover:text-primary">Exness</div>
                                        <div className="text-xs text-muted-foreground">Phù hợp Scalping</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

function ArticleCard({ category, title, desc, href }: { category: string, title: string, desc: string, href: string }) {
    return (
        <a href={href} className="group flex flex-col bg-card dark:bg-card/40 border border-border rounded-2xl p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
            <div className="mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-md">
                    {category}
                </span>
            </div>
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                {title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                {desc}
            </p>
            <div className="flex items-center text-xs font-bold text-primary gap-1 group-hover:gap-2 transition-all">
                Đọc tiếp <ChevronRight size={14} />
            </div>
        </a>
    );
}
