import { Shield, Zap, MessagesSquare, BadgePercent } from "lucide-react";

interface BenefitsProps {
    content?: Record<string, string>;
}

export default function Benefits({ content }: BenefitsProps) {
    const sectionTitle = content?.title || "Tại Sao Nên Chọn Sàn Uy Tín Do Chúng Tôi Đề Xuất?";

    const benefits = [
        {
            icon: <Shield size={32} className="text-blue-600" />,
            title: content?.feature1Title || "Bảo Vệ Vốn An Toàn",
            description: content?.feature1Desc || "Chỉ đề xuất các sàn có giấy phép uy tín (FCA, ASIC, CySEC) và cơ chế bảo hiểm vốn cho nhà đầu tư."
        },
        {
            icon: <BadgePercent size={32} className="text-green-600" />,
            title: content?.feature2Title || "Chi Phí Giao Dịch Thấp",
            description: content?.feature2Desc || "So sánh spread và comission minh bạch. Tìm kiếm các sàn có phí thấp nhất để tối ưu lợi nhuận."
        },
        {
            icon: <MessagesSquare size={32} className="text-orange-600" />,
            title: content?.feature3Title || "Hỗ Trợ Tiếng Việt",
            description: content?.feature3Desc || "Ưu tiên các sàn có đội ngũ support người Việt 24/7, giải quyết sự cố nhanh chóng."
        },
        {
            icon: <Zap size={32} className="text-yellow-500" />,
            title: "Nạp Rút Siêu Tốc",
            description: "Đánh giá tốc độ nạp rút qua Internet Banking, ví điện tử. Tiền về tài khoản trong 5-15 phút."
        }
    ];

    return (
        <section id="compare" className="py-20 md:py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="container-custom relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="inline-block text-blue-600 dark:text-blue-400 font-bold tracking-widest uppercase text-xs sm:text-sm bg-blue-100 dark:bg-blue-900/30 px-4 py-1.5 rounded-full mb-4 ring-1 ring-blue-500/20">
                        Giá Trị Nhận Được
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-[1.2] tracking-tight">
                        {sectionTitle}
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {benefits.map((item, index) => (
                        <div key={index} className="group p-6 lg:p-8 rounded-3xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
                            {/* Card Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            
                            <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900/50 rounded-2xl shadow-inner flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-all duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-[18px] md:text-[20px] font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-[15px] md:text-[16px] text-slate-600 dark:text-slate-400 leading-[1.6]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
