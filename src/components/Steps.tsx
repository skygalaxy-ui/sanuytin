import { UserPlus, Search, Scale, BadgeCheck } from "lucide-react";

export default function Steps() {
    const steps = [
        {
            icon: <Search size={24} />,
            title: "Xác Định Mục Tiêu",
            desc: "Bạn là Scalper, Day Trader hay Swing Trader? Vốn bao nhiêu?"
        },
        {
            icon: <ShieldCheck size={24} />, // Placeholder for correct icon import
            title: "Kiểm Tra Giấy Phép",
            desc: "Chỉ chọn sàn có giấy phép Tier 1, Tier 2 uy tín."
        },
        {
            icon: <Scale size={24} />,
            title: "So Sánh Chi Phí",
            desc: "Spread, Comission và phí qua đêm (Swap) phù hợp."
        },
        {
            icon: <BadgeCheck size={24} />,
            title: "Test Demo & Mở Tài Khoản",
            desc: "Trải nghiệm khớp lệnh trước khi nạp tiền thật."
        }
    ];

    // Fix for the ShieldCheck import which wasn't in the top import
    // Using UserPlus as placeholder for first icon logic if needed, but array uses specific icons.
    // Let's fix the imports.

    return (
        <section id="guide" className="py-16 bg-slate-900 text-white overflow-hidden relative">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
                <div className="absolute top-40 right-0 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/3">
                        <h2 className="text-xl md:text-3xl font-bold mb-4 leading-tight">
                            Quy Trình 4 Bước <br />
                            <span className="text-primary">Chọn Sàn Chuẩn</span>
                        </h2>
                        <p className="text-slate-400 text-base mb-6 leading-relaxed">
                            Đừng để mất tiền oan vì chọn nhầm sàn lừa đảo. Hãy tuân thủ quy trình 4 bước đơn giản nhưng hiệu quả này của chuyên gia.
                        </p>
                        <button className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-2.5 rounded-lg font-bold transition-colors text-sm">
                            Xem hướng dẫn chi tiết
                        </button>
                    </div>

                    <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl relative hover:border-primary/50 transition-colors">
                                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-blue-900/50 text-sm">
                                    {index + 1}
                                </div>
                                <div className="mb-3 text-blue-400">
                                    {index === 1 ? <ShieldCheck /> : step.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-slate-400 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Helper import for icons used inside the component not declared in top level
import { ShieldCheck } from "lucide-react";
