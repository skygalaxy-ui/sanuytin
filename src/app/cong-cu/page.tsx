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
        <main className="min-h-screen bg-background pt-[120px]">
            {/* Hero Section */}
            <div className="bg-secondary/30 border-b border-border">
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

                <div className="mt-20 bg-primary/5 border border-primary/20 rounded-3xl p-10 md:p-14 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">Bạn chưa biết cách sử dụng?</h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Xem hướng dẫn chi tiết cách sử dụng các công cụ tính toán trong quản lý vốn Forex.
                    </p>
                    <Link href="/kien-thuc-forex" className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors inline-block">
                        Xem Hướng Dẫn
                    </Link>
                </div>
            </div>
        </main>
    );
}
