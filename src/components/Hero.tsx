import Link from "next/link";
import { ChevronRight, Star, TrendingUp, Shield, Zap, Award, CheckCircle2 } from "lucide-react";

const getCurrentMonth = () => {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `Tháng ${month}/${year}`;
};

interface HeroProps {
    content?: Record<string, string>;
}

export default function Hero({ content }: HeroProps) {
    // Use Supabase content or fallback to defaults
    const title = content?.title || "Top 10 Sàn Forex Uy Tín Nhất 2026";
    const subtitle = content?.subtitle || "Bảng xếp hạng độc lập & minh bạch dựa trên đánh giá chuyên sâu về pháp lý, phí giao dịch và trải nghiệm thực tế từ hàng nghìn trader Việt Nam";
    const ctaText = content?.ctaText || "Xem Bảng Xếp Hạng";
    const ctaLink = content?.ctaLink || "#ranking";

    // Split title into two lines if it contains line break indicator
    const titleParts = title.split("|");
    const titleLine1 = titleParts[0]?.trim() || title;
    const titleLine2 = titleParts[1]?.trim() || "";

    return (
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Main gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

                {/* Animated Gradient Orbs - More subtle and premium */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[200px]" />

                {/* Grid Pattern - Subtle */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }}
                />

                {/* Top gradient fade */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent" />
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

                    {/* Trust Badge - Premium Design */}
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 shadow-lg shadow-blue-500/5 mb-8 animate-fade-in-up">
                        <div className="flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Live</span>
                        </div>
                        <div className="w-px h-4 bg-white/20" />
                        <span className="text-sm font-medium text-slate-300">
                            Cập nhật dữ liệu <span className="text-white font-bold">{getCurrentMonth()}</span>
                        </span>
                    </div>

                    {/* High Impact Headline — editable from admin */}
                    <h1 className="flex flex-col items-center justify-center gap-3 md:gap-5 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-8 animate-fade-in-up delay-100">
                        <span className="text-center">{titleLine1}</span>
                        {titleLine2 ? (
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent pb-2">
                                    {titleLine2}
                                </span>
                                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                                    <path d="M2 8C50 3 100 3 150 8C200 13 250 4 298 8" stroke="url(#underline-gradient)" strokeWidth="3" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient id="underline-gradient" x1="0" y1="0" x2="300" y2="0">
                                            <stop stopColor="#3B82F6" />
                                            <stop offset="0.5" stopColor="#06B6D4" />
                                            <stop offset="1" stopColor="#14B8A6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        ) : (
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent pb-2">
                                    Uy Tín Nhất 2026
                                </span>
                                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                                    <path d="M2 8C50 3 100 3 150 8C200 13 250 4 298 8" stroke="url(#underline-gradient2)" strokeWidth="3" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient id="underline-gradient2" x1="0" y1="0" x2="300" y2="0">
                                            <stop stopColor="#3B82F6" />
                                            <stop offset="0.5" stopColor="#06B6D4" />
                                            <stop offset="1" stopColor="#14B8A6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        )}
                    </h1>

                    {/* Value Proposition — editable from admin */}
                    <p className="text-base md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                        {subtitle}
                    </p>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up delay-250">
                        {[
                            { icon: CheckCircle2, text: "Đã xác minh giấy phép" },
                            { icon: Shield, text: "Bảo vệ số dư âm" },
                            { icon: Award, text: "Hỗ trợ tiếng Việt 24/7" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
                                <item.icon size={16} className="text-blue-400" />
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Primary Actions — CTA editable from admin */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
                        <Link
                            href={ctaLink}
                            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/30 transition-all hover:scale-[1.02] hover:shadow-blue-500/40 flex items-center justify-center gap-2"
                        >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <span className="relative">{ctaText}</span>
                            <ChevronRight className="relative group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#guide"
                            className="group bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                        >
                            <Shield size={20} className="text-slate-400 group-hover:text-blue-400 transition-colors" />
                            Tiêu chí đánh giá
                        </Link>
                    </div>

                    {/* Stats Grid - Modern Cards */}
                    <div className="mt-10 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-up delay-500">
                        {[
                            { icon: Shield, value: "100%", label: "Sàn Đã Xác Minh", color: "blue" },
                            { icon: Zap, value: "<0.1s", label: "Tốc Độ Khớp Lệnh", color: "cyan" },
                            { icon: TrendingUp, value: "$50M+", label: "Khối Lượng GD/Ngày", color: "teal" },
                            { icon: Star, value: "4.9/5", label: "Đánh Giá Trung Bình", color: "amber" },
                        ].map((stat, i) => {
                            const Icon = stat.icon;
                            const colorClasses = {
                                blue: "from-blue-500/20 to-blue-600/10 border-blue-500/20 group-hover:border-blue-500/40",
                                cyan: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/20 group-hover:border-cyan-500/40",
                                teal: "from-teal-500/20 to-teal-600/10 border-teal-500/20 group-hover:border-teal-500/40",
                                amber: "from-amber-500/20 to-amber-600/10 border-amber-500/20 group-hover:border-amber-500/40",
                            }[stat.color];
                            const iconColor = {
                                blue: "text-blue-400",
                                cyan: "text-cyan-400",
                                teal: "text-teal-400",
                                amber: "text-amber-400",
                            }[stat.color];

                            return (
                                <div
                                    key={i}
                                    className={`group relative overflow-hidden p-5 rounded-2xl bg-gradient-to-br ${colorClasses} border backdrop-blur-sm transition-all hover:scale-[1.02] cursor-default`}
                                >
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="p-2.5 rounded-xl bg-white/5">
                                            <Icon className={`w-5 h-5 ${iconColor}`} />
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xl sm:text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                                            <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">{stat.label}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Social Proof - Floating badges */}
                    <div className="mt-6 flex flex-wrap justify-center items-center gap-6 animate-fade-in-up delay-700">
                        <div className="flex items-center gap-2 text-sm text-slate-500">
                            <div className="flex -space-x-2">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-white">
                                        {['VN', 'UK', 'SG', 'AU'][i]}
                                    </div>
                                ))}
                            </div>
                            <span className="text-slate-400">50,000+ trader tin tưởng</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
        </section>
    );
}
