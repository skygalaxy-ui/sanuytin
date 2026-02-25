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
        <section id="compare" className="py-16 bg-white dark:bg-slate-900">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <span className="text-primary dark:text-blue-400 font-bold tracking-wider uppercase text-sm bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">Giá trị cốt lõi</span>
                    <h2 className="text-lg sm:text-xl md:text-3xl font-bold text-slate-900 dark:text-white mt-3 leading-snug">
                        {sectionTitle}
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item, index) => (
                        <div key={index} className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
