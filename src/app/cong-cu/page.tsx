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
        <main className="min-h-screen bg-background pt-[160px]">
            {/* Hero Section */}
            <div className="bg-secondary/30 border-b border-border">
                <div className="container-custom py-12 md:py-20">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Link href="/" className="hover:text-primary flex items-center gap-1 transition-colors">
                            <Home size={14} /> Trang chủ
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-foreground font-medium">Công Cụ</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Wrench size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                            Miễn Phí
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
                        Công Cụ <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Giao Dịch</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                        Các tiện ích hỗ trợ miễn phí giúp bạn quản lý vốn, tính toán rủi ro và tối ưu hóa chiến lược giao dịch.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom py-12">
                <ToolsClient />

                <div className="mt-16 bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Bạn chưa biết cách sử dụng?</h2>
                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Xem hướng dẫn chi tiết cách sử dụng các công cụ tính toán trong quản lý vốn Forex.
                    </p>
                    <Link href="/kien-thuc-forex" className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors inline-block">
                        Xem Hướng Dẫn
                    </Link>
                </div>
            </div>
        </main>
    );
}
