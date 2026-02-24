import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Home, Wrench } from "lucide-react";
import ToolsClient from "@/components/ToolsClient";

export const metadata: Metadata = {
    title: "Công Cụ Giao Dịch Forex - Tính Pip, Margin | Sàn Uy Tín",
    description: "Bộ công cụ hỗ trợ giao dịch Forex miễn phí: Tính giá trị Pip, Tính Margin, Đổi tiền tệ, Tính lợi nhuận.",
};

export default function ToolsPage() {
    return (
        <main className="min-h-screen bg-background pt-[120px] relative">
            {/* Background effects spanning full page top */}
            <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5 pointer-events-none" />
            <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="container-custom py-16 md:py-24">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-base text-muted-foreground mb-8">
                        <Link href="/" className="hover:text-primary flex items-center gap-1.5 transition-colors">
                            <Home size={16} /> Trang chủ
                        </Link>
                        <ChevronRight size={16} />
                        <span className="text-foreground font-medium">Công Cụ</span>
                    </div>

                    <div className="flex items-center gap-3 mb-5">
                        <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                            <Wrench size={26} />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-wider text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                            Miễn Phí
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 tracking-tight leading-tight">
                        Công Cụ <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Giao Dịch</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/70 max-w-4xl leading-relaxed">
                        Các tiện ích hỗ trợ miễn phí giúp bạn quản lý vốn, tính toán rủi ro và tối ưu hóa chiến lược giao dịch.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom py-16 md:py-20">
                <ToolsClient />

                {/* SEO Content Section */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 text-muted-foreground leading-relaxed">
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Tại sao cần sử dụng máy tính Pip và Margin?</h2>
                            <p>
                                Trong giao dịch Forex, việc tính toán chính xác giá trị Pip và số ký quỹ (Margin) là yếu tố sống còn để quản lý rủi ro.
                                <strong>Máy tính Pip</strong> giúp bạn biết chính xác mình sẽ mất hoặc được bao nhiêu tiền trên mỗi đơn vị biến động của giá,
                                từ đó đặt Stop Loss phù hợp với số dư tài khoản.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Cách tính Margin (Ký quỹ) nhanh chóng</h2>
                            <p>
                                Công cụ <strong>tính Margin</strong> của chúng tôi cho phép bạn dự đoán số tiền tạm khóa khi mở một vị thế mới.
                                Với các mức đòn bẩy từ 1:100 đến 1:2000, bạn có thể dễ dàng tối ưu hóa khối lượng giao dịch mà không lo ngại về Margin Call.
                            </p>
                        </section>
                    </div>
                    <div className="space-y-6">
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Chuyển đổi tiền tệ thời gian thực</h2>
                            <p>
                                Việc theo dõi tỷ giá giữa các đồng tiền chính như USD, EUR, GBP hay VND là cực kỳ quan trọng.
                                Công cụ <strong>chuyển đổi tiền tệ</strong> của Sàn Uy Tín cập nhật dữ liệu tỷ giá mới nhất, giúp trader tính toán chi phí nạp rút
                                và quy đổi lợi nhuận một cách minh bạch nhất.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Lập kế hoạch với máy tính lợi nhuận</h2>
                            <p>
                                Đừng vào lệnh dựa trên cảm giác! Sử dụng <strong>máy tính lợi nhuận</strong> để biết mục tiêu Take Profit của bạn trị giá bao nhiêu USD.
                                Công cụ này hỗ trợ cả hai chiều MUA (Buy) và BÁN (Sell) cho hầu hết các cặp tiền tệ phổ biến.
                            </p>
                        </section>
                    </div>
                </div>

                <div className="mt-20 bg-primary/5 border border-primary/20 rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 relative z-10">Bạn chưa biết cách sử dụng?</h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
                        Xem hướng dẫn chi tiết cách sử dụng các công cụ tính toán trong bộ bí kíp quản lý vốn Forex của chúng tôi.
                    </p>
                    <Link href="/kien-thuc-forex" className="bg-primary text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/25 inline-block relative z-10">
                        Xem Hướng Dẫn Chi Tiết
                    </Link>
                </div>
            </div>
        </main>
    );
}
