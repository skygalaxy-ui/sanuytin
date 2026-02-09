"use client";

import { useState } from "react";
import { ShieldCheck, Lightbulb, TrendingUp, ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

// Broker images from Supabase Storage
const adviceBrokers = [
    { name: "Vantage", logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770111202536-xylxa3m03pi.png" },
    { name: "Exness", logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770111263958-7q1b49yrbll.jpg" },
    { name: "XM", logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770112121651-fh714o034v6.jpg" },
    { name: "FxPro", logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770114342264-78hoiquogtv.jpg" },
    { name: "FBS", logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770114307443-oc7s00765xt.jpg" },
    { name: "Pepperstone", logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770112317691-rsgvniyati9.png" },
];

const protectBrokers = [
    { name: "FxPro", logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770114342264-78hoiquogtv.jpg" },
    { name: "FBS", logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770114307443-oc7s00765xt.jpg" },
    { name: "Pepperstone", logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770112317691-rsgvniyati9.png" },
    { name: "Vantage", logo: "https://ecipdcojedkbrlggaqja.supabase.co/storage/v1/object/public/broker-logo/1770111202536-xylxa3m03pi.png" },
];

function BrokerImage({ src, alt }: { src: string; alt: string }) {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground gap-1">
                <ImageOff size={20} className="opacity-50" />
                <span className="text-xs font-medium">{alt}</span>
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain"
            loading="lazy"
            onError={() => setError(true)}
        />
    );
}

export default function BrokerAdvice() {
    const [activeTab, setActiveTab] = useState<"advice" | "protect">("advice");

    return (
        <section className="py-16 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] opacity-50" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] opacity-30" />
            </div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-foreground mb-3 leading-snug">
                        Kinh nghiệm giao dịch trên sàn Forex uy tín thế giới
                    </h2>
                    <p className="max-w-3xl mx-auto text-muted-foreground leading-relaxed">
                        Khi đánh giá các sàn Forex uy tín ở Việt Nam, ta thấy rõ: không có sàn nào là tuyệt đối.
                        Mỗi nền tảng đều có ưu điểm nổi trội và nhược điểm cần lưu ý. Quyết định cuối cùng luôn phải
                        dựa trên việc sàn đó đáp ứng tốt nhất nhu cầu và chiến lược giao dịch cụ thể của nhà đầu tư.
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex flex-col sm:flex-row bg-secondary/50 p-1.5 rounded-2xl border border-border/50 backdrop-blur-sm w-full sm:w-auto">
                        <button
                            onClick={() => setActiveTab("advice")}
                            className={cn(
                                "px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2",
                                activeTab === "advice"
                                    ? "bg-background text-primary shadow-sm ring-1 ring-border"
                                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                            )}
                        >
                            <Lightbulb size={18} />
                            Lời khuyên khi chọn sàn Forex
                        </button>
                        <button
                            onClick={() => setActiveTab("protect")}
                            className={cn(
                                "px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2",
                                activeTab === "protect"
                                    ? "bg-background text-primary shadow-sm ring-1 ring-border"
                                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                            )}
                        >
                            <ShieldCheck size={18} />
                            Cách bảo vệ vốn giao dịch
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="bg-card/50 border border-border/60 rounded-2xl p-5 md:p-8 backdrop-blur-md shadow-sm min-h-[360px]">
                    {activeTab === "advice" && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    <p className="text-muted-foreground">
                                        Khi chọn top sàn forex uy tín, cần xem xét kỹ các yếu tố như minh bạch, quy định, phí giao dịch, đòn bẩy, nền tảng giao dịch và dịch vụ hỗ trợ khách hàng.
                                    </p>

                                    <ul className="space-y-4">
                                        <li className="flex gap-4 group">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                            </div>
                                            <div>
                                                <strong className="text-foreground block mb-1">Giấy phép và quy định</strong>
                                                <span className="text-muted-foreground text-sm leading-relaxed">Đảm bảo rằng sàn bạn chọn được quản lý và cấp phép bởi các cơ quan uy tín. Điều này giúp bảo vệ quyền lợi của trader và giảm thiểu rủi ro từ những hoạt động không minh bạch.</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 group">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                            </div>
                                            <div>
                                                <strong className="text-foreground block mb-1">Phí giao dịch</strong>
                                                <span className="text-muted-foreground text-sm leading-relaxed">Xem xét chi phí như spread, commission và các chi phí ẩn khác.</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 group">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                            </div>
                                            <div>
                                                <strong className="text-foreground block mb-1">Nền tảng giao dịch</strong>
                                                <span className="text-muted-foreground text-sm leading-relaxed">Chọn sàn cung cấp nền tảng giao dịch thân thiện, hỗ trợ nhiều công cụ phân tích kỹ thuật và chỉ báo hữu ích.</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 group">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                            </div>
                                            <div>
                                                <strong className="text-foreground block mb-1">Hỗ trợ khách hàng</strong>
                                                <span className="text-muted-foreground text-sm leading-relaxed">Sàn nên cung cấp dịch vụ hỗ trợ khách hàng hiệu quả, với nhiều kênh liên lạc khác nhau và đặc biệt là hỗ trợ tiếng Việt.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    {/* Row 1 - Top Right */}
                                    <div className="col-start-3">
                                        <div className="aspect-square rounded-2xl bg-white dark:bg-secondary/50 p-4 border border-border/50 shadow-lg flex items-center justify-center transform hover:-translate-y-1 transition-all duration-300">
                                            <BrokerImage src={adviceBrokers[0]?.logo} alt={adviceBrokers[0]?.name} />
                                        </div>
                                    </div>

                                    {/* Row 2 - Middle Right pair */}
                                    <div className="col-start-2">
                                        <div className="aspect-square rounded-2xl bg-white dark:bg-secondary/50 p-4 border border-border/50 shadow-lg flex items-center justify-center transform hover:-translate-y-1 transition-all duration-300 delay-75">
                                            <BrokerImage src={adviceBrokers[1]?.logo} alt={adviceBrokers[1]?.name} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="aspect-square rounded-2xl bg-white dark:bg-secondary/50 p-4 border border-border/50 shadow-lg flex items-center justify-center transform hover:-translate-y-1 transition-all duration-300 delay-100">
                                            <BrokerImage src={adviceBrokers[2]?.logo} alt={adviceBrokers[2]?.name} />
                                        </div>
                                    </div>

                                    {/* Row 3 - Full bottom row */}
                                    <div className="col-start-1">
                                        <div className="aspect-square rounded-2xl bg-white dark:bg-secondary/50 p-4 border border-border/50 shadow-lg flex items-center justify-center transform hover:-translate-y-1 transition-all duration-300 delay-150">
                                            <BrokerImage src={adviceBrokers[3]?.logo} alt={adviceBrokers[3]?.name} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="aspect-square rounded-2xl bg-white dark:bg-secondary/50 p-4 border border-border/50 shadow-lg flex items-center justify-center transform hover:-translate-y-1 transition-all duration-300 delay-200">
                                            <BrokerImage src={adviceBrokers[4]?.logo} alt={adviceBrokers[4]?.name} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="aspect-square rounded-2xl bg-white dark:bg-secondary/50 p-4 border border-border/50 shadow-lg flex items-center justify-center transform hover:-translate-y-1 transition-all duration-300 delay-300">
                                            <BrokerImage src={adviceBrokers[5]?.logo} alt={adviceBrokers[5]?.name} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "protect" && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    <p className="text-muted-foreground">
                                        Quản lý vốn là kỹ năng quan trọng giúp trader bảo vệ tài sản của mình. Dưới đây là một số cách bảo vệ vốn giao dịch:
                                    </p>

                                    <ul className="space-y-4">
                                        <li className="flex gap-4 group">
                                            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                                                <ShieldCheck size={16} className="text-green-500" />
                                            </div>
                                            <div>
                                                <strong className="text-foreground block mb-1">Quản lý rủi ro</strong>
                                                <span className="text-muted-foreground text-sm leading-relaxed">Chỉ nên giao dịch một phần nhỏ (thường là 1-2%) vốn trong mỗi giao dịch. Điều này giúp giảm thiểu thiệt hại khi thị trường không diễn ra như mong muốn.</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 group">
                                            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                                                <ShieldCheck size={16} className="text-green-500" />
                                            </div>
                                            <div>
                                                <strong className="text-foreground block mb-1">Sử dụng lệnh dừng lỗ (Stop-loss)</strong>
                                                <span className="text-muted-foreground text-sm leading-relaxed">Đặt lệnh dừng lỗ giúp bảo vệ tài khoản khỏi các tổn thất lớn.</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 group">
                                            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                                                <ShieldCheck size={16} className="text-green-500" />
                                            </div>
                                            <div>
                                                <strong className="text-foreground block mb-1">Lên kế hoạch giao dịch</strong>
                                                <span className="text-muted-foreground text-sm leading-relaxed">Xác định mục tiêu lợi nhuận, điều kiện ra vào giao dịch và cách xử lý các kịch bản thị trường.</span>
                                            </div>
                                        </li>
                                        <li className="flex gap-4 group">
                                            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors">
                                                <ShieldCheck size={16} className="text-green-500" />
                                            </div>
                                            <div>
                                                <strong className="text-foreground block mb-1">Phân tích thị trường</strong>
                                                <span className="text-muted-foreground text-sm leading-relaxed">Luôn cập nhật và phân tích thông tin thị trường, từ xu hướng đến tin tức kinh tế có thể ảnh hưởng đến giá trị của các cặp tiền tệ.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {protectBrokers.map((broker, index) => (
                                        <div key={broker.name + index} className={`aspect-square rounded-2xl bg-white dark:bg-secondary/50 p-4 border border-border/50 shadow-lg flex items-center justify-center transform hover:-translate-y-1 transition-transform duration-300 delay-${index * 75}`}>
                                            <BrokerImage src={broker.logo} alt={broker.name} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Trend Section */}
                <div className="mt-12">
                    <div className="relative overflow-hidden flex flex-col md:flex-row gap-6 items-center bg-gradient-to-r from-secondary to-background rounded-2xl p-6 md:p-8 border border-border/50 shadow-2xl">
                        {/* Accents */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                        <div className="flex-1 relative z-10">
                            <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-3 flex items-center gap-3 text-white">
                                <span className="p-2 bg-primary/20 rounded-lg text-primary">
                                    <TrendingUp size={24} />
                                </span>
                                Xu hướng phát triển sàn Forex 2026
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-base">
                                Thị trường Forex đang phát triển mạnh mẽ với xu hướng tập trung vào <span className="text-white font-semibold">minh bạch</span> và <span className="text-white font-semibold">công nghệ AI</span>.
                                Các sàn uy tín ngày càng chú trọng vào bảo mật blockchain và trải nghiệm người dùng trên thiết bị di động.
                            </p>
                        </div>
                        <div className="shrink-0 relative z-10">
                            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-primary/25 transition-all transform hover:scale-105 active:scale-95 text-sm">
                                Khám phá ngay
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
