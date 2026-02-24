import Link from "next/link";
import { BookOpen, TrendingUp, BarChart2, Shield, GraduationCap, ChevronRight, FileText, PlayCircle, Home } from "lucide-react";
import KnowledgeArticles from "@/components/KnowledgeArticles";

export const metadata = {
    title: "Sàn Forex Kiếm Tiền Từ Đâu? Kiến Thức Forex A-Z Cho Người Mới 2026",
    description: "📚 Sàn Forex kiếm tiền từ đâu? Tìm hiểu cơ chế hoạt động, cách kiếm lợi nhuận từ giao dịch Forex. Hướng dẫn từ A-Z cho người mới bắt đầu, hoàn toàn miễn phí.",
    keywords: ["sàn forex kiếm tiền từ đâu", "sàn giao dịch forex kiếm tiền từ đâu", "kiến thức forex", "học forex", "forex là gì", "cách kiếm tiền forex", "hướng dẫn forex cho người mới"],
};

export default function KnowledgeHubPage() {
    return (
        <main className="bg-background min-h-screen pt-[120px] relative">
            {/* Background effects spanning full page top */}
            <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-primary/5 via-transparent to-green-600/5 pointer-events-none" />
            <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            {/* Hero Section */}
            <div className="relative overflow-hidden border-b border-border">
                <div className="container-custom max-w-7xl py-16 md:py-24">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-base text-muted-foreground mb-8">
                        <Link href="/" className="hover:text-primary flex items-center gap-1.5 transition-colors">
                            <Home size={16} /> Trang chủ
                        </Link>
                        <ChevronRight size={16} />
                        <span className="text-foreground font-medium">Kiến Thức Forex</span>
                    </div>

                    <div className="flex items-center gap-3 mb-5">
                        <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                            <GraduationCap size={26} />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-wider text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                            Học viện Forex
                        </span>
                    </div>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 tracking-tight leading-tight">
                        Kiến thức Forex <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Từ A Đến Z</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/70 max-w-4xl leading-relaxed">
                        Lộ trình học đầu tư Forex bài bản, miễn phí. Trang bị tư duy và kỹ năng để tự tin giao dịch trên thị trường tài chính toàn cầu.
                    </p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="container-custom max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 md:py-20">

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
                                category="Hướng dẫn"
                                title="Cách mở tài khoản Forex & Xác minh (KYC) thành công"
                                desc="Bước đầu tiên để trading: Hướng dẫn chuẩn bị giấy tờ, đăng ký và bảo mật tài khoản 2FA."
                                href="/kien-thuc-forex/huong-dan-mo-tai-khoan-forex"
                            />
                            <ArticleCard
                                category="Kiến thức"
                                title="Các Cặp Tiền Chéo & Cách chọn cặp tiền tiềm năng"
                                desc="Hiểu về cặp tiền chính (Majors), cặp tiền chéo (Crosses) để tìm ra phong cách trade riêng."
                                href="/kien-thuc-forex/cac-cap-tien-forex"
                            />
                            <ArticleCard
                                category="Quản lý vốn"
                                title="Cách quản lý vốn Forex hiệu quả: Quy tắc 2%"
                                desc="Bí kíp để không bao giờ cháy tài khoản. Cách tính volume lệnh (lot) và quản trị rủi ro."
                                href="/kien-thuc-forex/cach-quan-ly-von-forex-hieu-qua"
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
                                title="Hướng dẫn sử dụng MT4 (MetaTrader 4) Toàn Tập"
                                desc="Cầm tay chỉ việc sử dụng phần mềm giao dịch: Đặt lệnh, thêm chỉ báo, cài template từ A-Z."
                                href="/kien-thuc-forex/huong-dan-su-dung-mt4-chi-tiet"
                            />
                            <ArticleCard
                                category="Tin tức"
                                title="Đọc lịch kinh tế trên Forex Factory như chuyên gia"
                                desc="Cách xem tin Non-Farm, CPI và nhận diện những tin tức làm thị trường 'biến động mạnh'."
                                href="/kien-thuc-forex/cach-xem-tin-forex-factory"
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
                                href="/kien-thuc-forex/scalping-vs-swing-trading"
                            />
                            <ArticleCard
                                category="Nâng cao"
                                title="Chiến lược giao dịch Price Action chuyên nghiệp"
                                desc="Tổng hợp các setup xác suất thắng cao (High Winrate) dựa trên hành động giá thực tế."
                                href="/kien-thuc-forex/chien-luoc-price-action"
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
                                        <img src="https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770111263958-7q1b49yrbll.jpg" alt="XM" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-foreground text-sm group-hover:text-primary">XM</div>
                                        <div className="text-xs text-muted-foreground">Bonus cho Newbie</div>
                                    </div>
                                </Link>
                                <Link href="/exness" className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 rounded-lg bg-white p-1 border border-border flex items-center justify-center">
                                        <img src="https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770112121651-fh714o034v6.jpg" alt="Exness" className="w-full h-full object-contain" />
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
        <Link href={href} className="group flex flex-col bg-card dark:bg-card/40 border border-border rounded-2xl p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
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
        </Link>
    );
}
