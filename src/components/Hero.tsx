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
        <section className="relative pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-950">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/4 animate-pulse" style={{ animationDuration: '8s' }} />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-lg mb-6 animate-fade-in-up">
                            <div className="flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                </span>
                                <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Live</span>
                            </div>
                            <div className="w-px h-3 bg-white/20" />
                            <span className="text-xs font-medium text-slate-300">
                                Cập nhật: <span className="text-white font-bold">{getCurrentMonth()}</span>
                            </span>
                        </div>

                        {/* High Impact Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] mb-6 animate-fade-in-up delay-100">
                            {titleLine1} <br className="hidden lg:block" />
                            {titleLine2 ? (
                                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                    {titleLine2}
                                </span>
                            ) : (
                                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                    Uy Tín Nhất 2026
                                </span>
                            )}
                        </h1>

                        {/* Value Proposition */}
                        <p className="text-[16px] md:text-[18px] text-slate-400 mb-8 leading-[1.6] animate-fade-in-up delay-200">
                            {subtitle}
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10 animate-fade-in-up delay-250">
                            {[
                                { icon: CheckCircle2, text: "Xác minh pháp lý" },
                                { icon: Shield, text: "Bảo vệ vốn 100%" },
                                { icon: Zap, value: "Khớp lệnh <0.1s" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-slate-300">
                                    <CheckCircle2 size={14} className="text-emerald-400" />
                                    <span>{item.text || item.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Primary Action (Single CTA Rule) */}
                        <div className="animate-fade-in-up delay-300 w-full sm:w-auto">
                            <Link
                                href={ctaLink}
                                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-[18px] shadow-2xl shadow-blue-500/30 transition-all hover:scale-[1.02] hover:shadow-blue-500/50 flex items-center justify-center gap-2 w-full sm:w-auto"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative z-10">{ctaText}</span>
                                <ChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        
                        {/* Social Proof Text */}
                        <div className="mt-6 flex items-center gap-4 animate-fade-in-up delay-500">
                            <div className="flex -space-x-2">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-slate-400">
                                        {['VN', 'SG', 'AU', 'UK'][i]}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-slate-400">
                                Dựa trên <span className="text-white font-bold">50,000+</span> lượt đánh giá
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Hero Shot (Image) */}
                    <div className="relative animate-fade-in-up delay-300 lg:ml-auto w-full max-w-[600px] mx-auto lg:mx-0">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group aspect-[4/3] md:aspect-video lg:aspect-square">
                            <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
                            <img 
                                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200" 
                                alt="Giao dịch Forex chuyên nghiệp" 
                                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                                fetchPriority="high"
                                decoding="async"
                            />
                            
                            {/* Floating UI Elements over Image (Social Proof/Value) */}
                            <div className="absolute bottom-6 left-6 right-6 z-20 flex gap-4">
                                <div className="bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-white/10 flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Star className="text-amber-400 fill-amber-400" size={16} />
                                        <span className="text-white font-bold text-sm">4.9/5 Điểm</span>
                                    </div>
                                    <p className="text-[12px] text-slate-400">Đánh giá trung bình</p>
                                </div>
                                <div className="bg-slate-950/80 backdrop-blur-md p-4 rounded-xl border border-white/10 flex-1 hidden sm:block">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Shield className="text-emerald-400" size={16} />
                                        <span className="text-white font-bold text-sm">Bảo vệ rủi ro</span>
                                    </div>
                                    <p className="text-[12px] text-slate-400">Cam kết quỹ bồi thường</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Decorative background behind image */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 rounded-[2rem] blur-2xl -z-10 opacity-50" />
                    </div>
                </div>
            </div>
        </section>
    );
}
