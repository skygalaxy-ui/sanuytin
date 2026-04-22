import { UserPlus, Search, Scale, BadgeCheck, ShieldCheck } from "lucide-react";

export default function Steps() {
    const steps = [
        {
            icon: <Search size={28} />,
            title: "Xác Định Mục Tiêu",
            desc: "Bạn là Scalper, Day Trader hay Swing Trader? Số vốn đầu tư dự định là bao nhiêu?"
        },
        {
            icon: <ShieldCheck size={28} />,
            title: "Kiểm Tra Giấy Phép",
            desc: "Chỉ ưu tiên lựa chọn các sàn có giấy phép Tier 1 (FCA, ASIC) để đảm bảo an toàn."
        },
        {
            icon: <Scale size={28} />,
            title: "So Sánh Chi Phí",
            desc: "Đánh giá minh bạch mức Spread, Comission và phí qua đêm (Swap) của từng sàn."
        },
        {
            icon: <BadgeCheck size={28} />,
            title: "Test Demo & Mở Tài Khoản",
            desc: "Trải nghiệm tốc độ khớp lệnh trên tài khoản Demo trước khi nạp tiền thật."
        }
    ];

    return (
        <section id="guide" className="py-20 md:py-24 bg-slate-950 text-white overflow-hidden relative">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    <div className="lg:w-1/3 text-center lg:text-left">
                        <span className="inline-block text-blue-400 font-bold tracking-widest uppercase text-xs sm:text-sm bg-blue-900/30 px-4 py-1.5 rounded-full mb-6 ring-1 ring-blue-500/20">
                            Hướng Dẫn Người Mới
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-[1.2] tracking-tight text-white">
                            Quy Trình 4 Bước <br className="hidden lg:block" />
                            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Chọn Sàn Chuẩn</span>
                        </h2>
                        <p className="text-slate-400 text-[16px] md:text-[18px] leading-[1.6]">
                            Đừng để mất tiền oan vì chọn nhầm sàn lừa đảo. Hãy tuân thủ quy trình 4 bước cực kỳ chặt chẽ này từ chuyên gia để tối đa hoá sự an toàn cho nguồn vốn của bạn.
                        </p>
                    </div>

                    <div className="lg:w-2/3 w-full grid sm:grid-cols-2 gap-6 lg:gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="group bg-slate-900/80 backdrop-blur-md border border-slate-800 p-8 rounded-3xl relative hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center font-black text-white shadow-lg shadow-blue-500/30 text-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                    {index + 1}
                                </div>
                                <div className="mb-6 text-blue-400 bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                                    {step.icon}
                                </div>
                                <h3 className="font-bold text-[20px] mb-3 text-white group-hover:text-blue-400 transition-colors tracking-tight">{step.title}</h3>
                                <p className="text-slate-400 text-[15px] leading-[1.6]">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
