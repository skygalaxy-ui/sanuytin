import Link from "next/link";
import { Metadata } from "next";
import NewsList from "@/components/NewsList";
import { ChevronRight, Home, Newspaper } from "lucide-react";

export const metadata: Metadata = {
    title: "Tin Tức Thị Trường Forex 24/7 - Giá Vàng, Dầu, Bitcoin | Sàn Uy Tín",
    description: "Cập nhật tin tức thị trường tài chính, lịch kinh tế, phân tích kỹ thuật và xu hướng giá Vàng, Forex, Bitcoin mới nhất hôm nay.",
};

export default function NewsPage() {
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
                        <span className="text-foreground font-medium">Tin Tức</span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Newspaper size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                            Cập nhật 24/7
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
                        Tin Tức <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Thị Trường</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                        Cập nhật thông tin nhanh chóng, chính xác về Forex, Vàng, Bitcoin và thị trường tài chính toàn cầu để không bỏ lỡ cơ hội giao dịch.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom py-12">
                <NewsList />
            </div>
        </main>
    );
}
