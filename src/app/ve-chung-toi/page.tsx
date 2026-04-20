import { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, Eye, Scale, Target, Search, BadgeCheck, FileText, Banknote, UserCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Về Chúng Tôi | Đội Ngũ Sàn Uy Tín',
    description: 'Tìm hiểu về sứ mệnh, quy trình đánh giá chuẩn E-E-A-T và đội ngũ chuyên gia tài chính đứng sau Sàn Uy Tín. Chúng tôi cam kết minh bạch hóa thị trường Forex Việt Nam.',
    alternates: {
        canonical: 'https://sanuytin.net/ve-chung-toi',
    },
};

const coreValues = [
    {
        icon: Eye,
        title: 'Minh Bạch',
        description: 'Mọi đánh giá đều dựa trên dữ liệu thực tế, tài khoản live và trải nghiệm nạp/rút thật. Không có sự can thiệp từ các chương trình quảng cáo.',
    },
    {
        icon: Scale,
        title: 'Khách Quan',
        description: 'Chấm điểm dựa trên 6 tiêu chí cốt lõi (Pháp lý, Phí giao dịch, Nạp rút, Nền tảng, Hỗ trợ, và Mức độ uy tín) áp dụng chung cho mọi sàn.',
    },
    {
        icon: ShieldCheck,
        title: 'Bảo Vệ Nhà Đầu Tư',
        description: 'Liên tục cảnh báo sớm các sàn scam, mô hình Ponzi, và các chiêu trò lừa đảo tinh vi núp bóng đầu tư tài chính.',
    },
    {
        icon: Target,
        title: 'Chuyên Môn Sâu',
        description: 'Đội ngũ đánh giá là các trader có trên 5+ năm kinh nghiệm thực chiến trên cả thị trường Forex, Cổ phiếu và Crypto.',
    },
];

const reviewProcess = [
    {
        step: 1,
        icon: UserCheck,
        title: 'Mở Tài Khoản Ẩn Danh',
        description: 'Chúng tôi mở tài khoản Live tại sàn dưới tư cách nhà đầu tư cá nhân bình thường để tránh sự can thiệp từ IB hay bộ phận VIP của sàn.',
    },
    {
        step: 2,
        icon: Banknote,
        title: 'Nạp $100 & Giao Dịch Thật',
        description: 'Nạp tối thiểu $100 để kiểm tra tốc độ xử lý cổng nội địa. Giao dịch trực tiếp để đo lường độ giãn Spread lúc tin tức mạnh (NFP, CPI) hoặc Slippage.',
    },
    {
        step: 3,
        icon: FileText,
        title: 'Thử Thách Rút Tiền',
        description: 'Thực hiện các lệnh rút tiền lợi nhuận. Đánh giá tốc độ duyệt yêu cầu, phí ẩn, và sự minh bạch trong khâu xác minh danh tính (KYC).',
    },
    {
        step: 4,
        icon: Search,
        title: 'Kiểm Tra Pháp Lý',
        description: 'Tra cứu trực tiếp số giấy phép trên các cơ quan tài chính (Toán quản lý FCA, ASIC, CySEC) để xác thực độ tin cậy của pháp nhân.',
    },
];

export default function AboutUsPage() {
    // EEAT Organization schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
            "@type": "Organization",
            "name": "Sàn Uy Tín",
            "url": "https://sanuytin.net",
            "logo": "https://sanuytin.net/logo-san-uy-tin.png",
            "description": "Nền tảng đánh giá sàn Forex khách quan tại Việt Nam.",
            "foundingDate": "2023",
            "knowsAbout": ["Forex Trading", "Broker Review", "Financial Investment", "Trading Platforms"]
        }
    };

    return (
        <main className="min-h-screen bg-background pt-[120px] pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            
            <div className="container-custom">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-sm mb-6">
                        <BadgeCheck size={16} />
                        <span>Sứ Mệnh Của Chúng Tôi</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
                        Kiến tạo môi trường đầu tư <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Minh Bạch</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
                        SanUyTin.net ra đời với một mục tiêu duy nhất: <strong className="text-slate-200">Bảo vệ nhà đầu tư Việt Nam</strong> khỏi những chiêu trò lừa đảo tinh vi, thông qua việc cung cấp các bài đánh giá sàn giao dịch đa chiều, chân thực và hoàn toàn độc lập.
                    </p>
                </div>

                {/* Core Values */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {coreValues.map((value, idx) => {
                        const Icon = value.icon;
                        return (
                            <div key={idx} className="bg-slate-800/40 border border-white/5 rounded-2xl p-6 hover:bg-slate-800/60 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Icon className="text-blue-400" size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Review Process */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">Quy trình Đánh giá 4 Bước</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">Mỗi sàn giao dịch trên SanUyTin.net đều phải trải qua quy trình kiểm định khắc nghiệt bằng tiền thật để đảm bảo tính khách quan tuyệt đối.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 position-relative">
                        {reviewProcess.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <div key={idx} className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 overflow-hidden hover:border-blue-500/30 transition-colors">
                                    {/* Step Number Background */}
                                    <div className="absolute -right-4 -top-6 text-9xl font-black text-white/[0.02] select-none pointer-events-none">
                                        {step.step}
                                    </div>
                                    
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/5 border border-blue-500/20 flex items-center justify-center mb-6 relative z-10">
                                        <Icon className="text-blue-400" size={28} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-3 relative z-10">B{step.step}: {step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed relative z-10">{step.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Meet the "Team" / Experts - EEAT focused */}
                <div className="bg-slate-800/30 border border-white/5 rounded-3xl p-8 md:p-12 mb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                    
                    <div className="flex flex-col lg:flex-row gap-12 items-center relative z-10">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Được dẫn dắt bởi sự <span className="text-blue-400">Chuyên môn</span></h2>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                Chúng tôi không phải là những nhà tiếp thị mạng (marketers). Sàn Uy Tín được thành lập và điều hành bởi các Trader đã từng trải qua mọi thăng trầm của thị trường.
                            </p>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                Đội ngũ chuyên môn của chúng tôi liên tục phân tích và cập nhật các thuật toán của các sàn, những thay đổi về giấy phép, cũng như theo dõi chặt chẽ dòng tiền điện tử và ngoại hối để mang đến thông tin bảo mật và chính xác nhất cho bạn.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/danh-gia-san" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors">
                                    Xem bảng xếp hạng Sàn
                                </Link>
                                <Link href="/lien-he" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors border border-white/10">
                                    Hợp tác
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                                <div className="text-3xl font-black text-white mb-2">10+</div>
                                <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Năm Kinh Nghiệm</div>
                            </div>
                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                                <div className="text-3xl font-black text-white mb-2">43+</div>
                                <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Sàn Đã Kiểm Định</div>
                            </div>
                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                                <div className="text-3xl font-black text-white mb-2">1,500+</div>
                                <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Phản Hồi Từ Trader</div>
                            </div>
                            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                                <div className="text-3xl font-black text-white mb-2">100%</div>
                                <div className="text-sm text-slate-400 font-medium uppercase tracking-wide">Minh Bạch</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
