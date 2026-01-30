import Link from "next/link";
import { ChevronRight, Star, TrendingUp, Shield, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
            {/* 1. Animated Gradient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen dark:mix-blend-lighten" />
                <div className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen dark:mix-blend-lighten" />
                <div className="absolute -bottom-32 left-[20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen dark:mix-blend-lighten" />

                {/* Grid Pattern */}
                <div
                    className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
                    style={{ backgroundImage: "url('./grid.svg')" }}
                ></div>

                {/* Forex Chart Background Element */}
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-100 800V500C-100 500 150 400 300 600C450 800 600 300 750 500C900 700 1050 200 1200 400C1350 600 1540 500 1540 500V800H-100Z" fill="url(#paint0_linear)" />
                        <defs>
                            <linearGradient id="paint0_linear" x1="720" y1="200" x2="720" y2="800" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3B82F6" />
                                <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    {/* 2. Trust Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-md border border-white/10 shadow-sm mb-8 animate-fade-in-up hover:scale-105 transition-transform cursor-default">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                            Cập nhật dữ liệu tháng 01/2026
                        </span>
                    </div>



                    {/* 3. High Impact Headline - Adjusted Size */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 animate-fade-in-up delay-100 drop-shadow-2xl relative z-10">
                        Top 10 Sàn Forex <br className="hidden md:block" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
                            Uy Tín Nhất 2026
                        </span>
                    </h1>

                    {/* 4. Value Proposition */}
                    <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200 font-medium">
                        Bảng xếp hạng độc lập, minh bạch dựa trên <span className="text-white font-bold decoration-blue-500 underline decoration-2 underline-offset-4">pháp lý</span>,
                        <span className="text-white font-bold decoration-cyan-500 underline decoration-2 underline-offset-4 mx-1.5">phí giao dịch</span>
                        và <span className="text-white font-bold decoration-teal-500 underline decoration-2 underline-offset-4">trải nghiệm thực tế</span>.
                    </p>

                    {/* 5. Primary Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
                        <Link
                            href="#ranking"
                            className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 transition-all hover:scale-105 hover:shadow-blue-500/40 flex items-center justify-center gap-2"
                        >
                            Xem Bảng Xếp Hạng
                            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#guide"
                            className="group bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-md transition-all hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <Shield size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                            Tiêu chí đánh giá
                        </Link>
                    </div>

                    {/* 6. Live Market Ticker / Trust Proof */}
                    <div className="mt-16 pt-8 border-t border-white/5 w-full grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up delay-500">
                        <div className="flex flex-col items-center gap-2 group">
                            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all">
                                <Shield className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">100%</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">Sàn Đã Kiểm Duyệt</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 group">
                            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all">
                                <Zap className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">0.0s</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">Kiểm Tra Độ Trễ</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 group">
                            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-teal-500/10 group-hover:border-teal-500/20 transition-all">
                                <TrendingUp className="w-6 h-6 text-teal-400" />
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">$50M+</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">Khối Lượng Giao Dịch</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2 group">
                            <div className="p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 transition-all">
                                <Star className="w-6 h-6 text-orange-400" />
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-white">4.9/5</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wide font-semibold">Đánh Giá Người Dùng</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
