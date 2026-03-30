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
            <div className="relative overflow-hidden">
                <div className="container-custom max-w-7xl py-10 md:py-14">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Link href="/" className="hover:text-primary flex items-center gap-1.5 transition-colors">
                            <Home size={14} /> Trang chủ
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-foreground font-medium">Kiến Thức Forex</span>
                    </div>

                    <div className="flex items-center gap-2.5 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <GraduationCap size={22} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                            Học viện Forex
                        </span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground mb-4 tracking-tight leading-tight">
                        Kiến thức Forex <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Từ A Đến Z</span>
                    </h1>
                    <p className="text-base md:text-lg text-foreground/70 max-w-3xl leading-relaxed">
                        Lộ trình học đầu tư Forex bài bản, miễn phí. Trang bị tư duy và kỹ năng để tự tin giao dịch trên thị trường tài chính toàn cầu.
                    </p>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="container-custom max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 md:py-12">

                {/* Left Column: Categories */}
                <div className="lg:col-span-8 space-y-10">

                    {/* Category 1: Nhập Môn Forex (Beginner) */}
                    <section id="beginner">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="p-1.5 bg-green-500/10 rounded-lg text-green-500">
                                <BookOpen size={20} />
                            </div>
                            <h2 className="text-xl font-bold text-foreground">1. Nhập Môn Forex (Beginner)</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            <ArticleCard
                                category="Cơ bản"
                                title="Forex là gì? Hướng dẫn nhập môn toàn tập"
                                desc="Khái niệm thị trường ngoại hối, cơ chế hoạt động và cách kiếm tiền từ chênh lệch tỷ giá."
                                href="/kien-thuc-forex/forex-la-gi"
                                image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=340&fit=crop"
                            />
                            <ArticleCard
                                category="Hướng dẫn"
                                title="Cách mở tài khoản Forex & Xác minh (KYC) thành công"
                                desc="Bước đầu tiên để trading: Hướng dẫn chuẩn bị giấy tờ, đăng ký và bảo mật tài khoản 2FA."
                                href="/kien-thuc-forex/huong-dan-mo-tai-khoan-forex"
                                image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=340&fit=crop"
                            />
                            <ArticleCard
                                category="Kiến thức"
                                title="Các Cặp Tiền Chéo & Cách chọn cặp tiền tiềm năng"
                                desc="Hiểu về cặp tiền chính (Majors), cặp tiền chéo (Crosses) để tìm ra phong cách trade riêng."
                                href="/kien-thuc-forex/cac-cap-tien-forex"
                                image="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=600&h=340&fit=crop"
                            />
                            <ArticleCard
                                category="Quản lý vốn"
                                title="Cách quản lý vốn Forex hiệu quả: Quy tắc 2%"
                                desc="Bí kíp để không bao giờ cháy tài khoản. Cách tính volume lệnh (lot) và quản trị rủi ro."
                                href="/kien-thuc-forex/cach-quan-ly-von-forex-hieu-qua"
                                image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=340&fit=crop"
                            />
                        </div>
                    </section>

                    {/* Category 2: Công Cụ & Nền Tảng (Tools) */}
                    <section id="tools">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="p-1.5 bg-blue-500/10 rounded-lg text-blue-500">
                                <BarChart2 size={20} />
                            </div>
                            <h2 className="text-xl font-bold text-foreground">2. Công Cụ & Nền Tảng</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            <ArticleCard
                                category="Phần mềm"
                                title="Hướng dẫn sử dụng MT4 (MetaTrader 4) Toàn Tập"
                                desc="Cầm tay chỉ việc sử dụng phần mềm giao dịch: Đặt lệnh, thêm chỉ báo, cài template từ A-Z."
                                href="/kien-thuc-forex/huong-dan-su-dung-mt4-chi-tiet"
                                image="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=340&fit=crop"
                            />
                            <ArticleCard
                                category="Tin tức"
                                title="Đọc lịch kinh tế trên Forex Factory như chuyên gia"
                                desc="Cách xem tin Non-Farm, CPI và nhận diện những tin tức làm thị trường 'biến động mạnh'."
                                href="/kien-thuc-forex/cach-xem-tin-forex-factory"
                                image="https://images.unsplash.com/photo-1504711434969-e33886168d5c?w=600&h=340&fit=crop"
                            />
                        </div>
                    </section>

                    {/* Category 3: Phân Tích Cơ Bản (Fundamental) */}
                    <section id="fundamental">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="p-1.5 bg-purple-500/10 rounded-lg text-purple-500">
                                <TrendingUp size={20} />
                            </div>
                            <h2 className="text-xl font-bold text-foreground">3. Phân Tích Cơ Bản & Kinh Tế</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            <ArticleCard
                                category="Vĩ mô"
                                title="Tác động của Lãi Suất tới thị trường Forex"
                                desc="Tại sao quyết định lãi suất của FED lại khiến thị trường chao đảo? Mối quan hệ giữa Lãi suất và Giá trị tiền tệ."
                                href="/kien-thuc-forex"
                                image="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=340&fit=crop"
                            />
                            <ArticleCard
                                category="Kinh tế"
                                title="Các Yếu Tố Kinh Tế ảnh hưởng đến tỷ giá"
                                desc="Lạm phát (Inflation), GDP, và Tỷ lệ thất nghiệp tác động thế nào đến xu hướng dài hạn?"
                                href="/kien-thuc-forex"
                                image="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=340&fit=crop"
                            />
                        </div>
                    </section>

                    {/* Category 4: Chiến Lược Thực Chiến (Strategies) */}
                    <section id="strategies">
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="p-1.5 bg-orange-500/10 rounded-lg text-orange-500">
                                <Shield size={20} />
                            </div>
                            <h2 className="text-xl font-bold text-foreground">4. Chiến Lược Giao Dịch Thực Chiến</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                            <ArticleCard
                                category="Phương pháp"
                                title="Scalping vs Swing Trading: Bạn thuộc hệ nào?"
                                desc="So sánh chi tiết hai trường phái giao dịch phổ biến nhất. Ưu nhược điểm và cách chọn."
                                href="/kien-thuc-forex/scalping-vs-swing-trading"
                                image="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?w=600&h=340&fit=crop"
                            />
                            <ArticleCard
                                category="Nâng cao"
                                title="Chiến lược giao dịch Price Action chuyên nghiệp"
                                desc="Tổng hợp các setup xác suất thắng cao (High Winrate) dựa trên hành động giá thực tế."
                                href="/kien-thuc-forex/chien-luoc-price-action"
                                image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=340&fit=crop"
                            />
                        </div>
                    </section>

                    {/* Dynamic Articles from Supabase */}
                    <KnowledgeArticles />

                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    {/* Quick Nav */}
                    <div className="bg-card dark:bg-card/40 border border-border rounded-xl p-5 shadow-sm sticky top-28">
                        <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                            <BookOpen size={18} className="text-primary" /> Mục lục
                        </h3>
                        <nav className="space-y-1 text-sm">
                            <a href="#beginner" className="block px-2.5 py-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">1. Nhập môn Forex</a>
                            <a href="#tools" className="block px-2.5 py-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">2. Công cụ & Nền tảng</a>
                            <a href="#fundamental" className="block px-2.5 py-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">3. Phân tích cơ bản</a>
                            <a href="#strategies" className="block px-2.5 py-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">4. Chiến lược thực chiến</a>
                        </nav>

                        <div className="mt-5 pt-4 border-t border-border">
                            <h3 className="font-bold text-base mb-3">Các sàn hỗ trợ tốt</h3>
                            <div className="space-y-3">
                                <Link href="/xm" className="flex items-center gap-2.5 group">
                                    <div className="w-9 h-9 rounded-lg bg-white p-0.5 border border-border flex items-center justify-center flex-shrink-0">
                                        <img src="https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770111263958-7q1b49yrbll.jpg" alt="XM" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground text-sm group-hover:text-primary">XM</div>
                                        <div className="text-xs text-muted-foreground">Bonus cho Newbie</div>
                                    </div>
                                </Link>
                                <Link href="/exness" className="flex items-center gap-2.5 group">
                                    <div className="w-9 h-9 rounded-lg bg-white p-0.5 border border-border flex items-center justify-center flex-shrink-0">
                                        <img src="https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770112121651-fh714o034v6.jpg" alt="Exness" className="w-full h-full object-contain" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground text-sm group-hover:text-primary">Exness</div>
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

function ArticleCard({ category, title, desc, href, image }: { category: string, title: string, desc: string, href: string, image?: string }) {
    return (
        <Link href={href} className="group flex flex-col bg-card dark:bg-card/40 border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all">
            {image && (
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-2.5 left-2.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-primary/90 backdrop-blur-sm px-2 py-0.5 rounded shadow-sm">
                            {category}
                        </span>
                    </div>
                </div>
            )}
            <div className="px-4 py-3.5 flex flex-col flex-1">
                {!image && (
                    <div className="mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                            {category}
                        </span>
                    </div>
                )}
                <h3 className="text-[15px] font-bold text-foreground group-hover:text-primary transition-colors mb-1.5 line-clamp-2 leading-snug">
                    {title}
                </h3>
                <p className="text-[13px] text-muted-foreground line-clamp-2 mb-3 flex-1 leading-relaxed">
                    {desc}
                </p>
                <div className="flex items-center text-xs font-semibold text-primary gap-1 group-hover:gap-2 transition-all">
                    Đọc tiếp <ChevronRight size={13} />
                </div>
            </div>
        </Link>
    );
}
