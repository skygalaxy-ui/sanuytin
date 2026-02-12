import Link from "next/link";
import { Metadata } from "next";
import NewsList from "@/components/NewsList";
import { ChevronRight, Home, Newspaper, Sparkles } from "lucide-react";
import { checkAndPublishScheduledPosts } from "@/lib/supabase";

export const metadata: Metadata = {
    title: "Tin Tức Thị Trường Forex 24/7 - Giá Vàng, Dầu, Bitcoin | Sàn Uy Tín",
    description: "Cập nhật tin tức thị trường tài chính, lịch kinh tế, phân tích kỹ thuật và xu hướng giá Vàng, Forex, Bitcoin mới nhất hôm nay.",
};

export default async function NewsPage() {
    await checkAndPublishScheduledPosts();
    return (
        <main className="min-h-screen bg-background pt-[120px]">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="container-custom relative py-12 md:py-16">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                        <Link href="/" className="hover:text-primary flex items-center gap-1.5 transition-colors">
                            <Home size={14} /> Trang chủ
                        </Link>
                        <ChevronRight size={14} />
                        <span className="text-foreground font-medium">Tin Tức</span>
                    </div>

                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Newspaper size={22} />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                                <Sparkles size={12} /> Cập nhật 24/7
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight leading-tight">
                            Tin Tức <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Thị Trường</span>
                        </h1>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            Cập nhật nhanh chóng, chính xác về Forex, Vàng, Bitcoin và thị trường tài chính toàn cầu — Không bỏ lỡ cơ hội giao dịch.
                        </p>
                    </div>
                </div>
            </div>



            {/* Main Content */}
            <div className="container-custom py-10 md:py-14">
                <NewsList limit={40} />
            </div>
        </main>
    );
}
