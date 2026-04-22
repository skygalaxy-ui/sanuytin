import Link from "next/link";
import { Metadata } from "next";
import NewsList from "@/components/NewsList";
import { ChevronRight, Home, Newspaper, Sparkles } from "lucide-react";

export const metadata: Metadata = {
    title: "Tin Tức Forex Hôm Nay - Giá Vàng, Bitcoin, Phân Tích Thị Trường 2026",
    description: "📰 Cập nhật tin tức Forex, giá Vàng (XAU/USD), Bitcoin 24/7. Phân tích kỹ thuật, lịch kinh tế, nhận định xu hướng thị trường mới nhất hôm nay.",
    keywords: ["tin tức forex", "giá vàng hôm nay", "phân tích forex", "tin tức thị trường tài chính", "bitcoin hôm nay"],
};

export default function NewsPage() {
    return (
        <main className="min-h-screen bg-background pt-[120px] relative overflow-x-hidden">
            {/* Background effects spanning full page top */}
            <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />
            <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            {/* Hero Section */}
            <div className="relative border-b border-border/40 bg-background/50 backdrop-blur-sm">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="container-custom relative pt-8 pb-10 md:pt-12 md:pb-12 text-center">
                    {/* Breadcrumb */}
                    <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground mb-8 font-medium">
                        <Link href="/" className="hover:text-primary flex items-center gap-1.5 transition-colors">
                            <Home size={14} /> Trang chủ
                        </Link>
                        <ChevronRight size={14} className="text-border" />
                        <span className="text-foreground">Tin Tức</span>
                    </div>

                    <div className="max-w-3xl mx-auto flex flex-col items-center">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm shadow-primary/5">
                                <Sparkles size={12} /> Cập nhật 24/7
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 tracking-tight leading-[1.1]">
                            Tin Tức <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 inline-block">Thị Trường</span>
                        </h1>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl font-medium">
                            Cập nhật nhanh chóng, chính xác về Forex, Vàng, Bitcoin và thị trường tài chính toàn cầu — Không bỏ lỡ cơ hội giao dịch.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom pt-6 pb-12 md:pt-8 md:pb-16">
                <NewsList limit={40} />
            </div>
        </main>
    );
}
