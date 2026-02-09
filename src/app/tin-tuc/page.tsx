import Link from "next/link";
import { Metadata } from "next";
import NewsList from "@/components/NewsList";
import { ChevronRight, Home, Newspaper } from "lucide-react";
import { checkAndPublishScheduledPosts } from "@/lib/supabase";

export const metadata: Metadata = {
    title: "Tin Tức Thị Trường Forex 24/7 - Giá Vàng, Dầu, Bitcoin | Sàn Uy Tín",
    description: "Cập nhật tin tức thị trường tài chính, lịch kinh tế, phân tích kỹ thuật và xu hướng giá Vàng, Forex, Bitcoin mới nhất hôm nay.",
};

export default async function NewsPage() {
    // Auto-publish scheduled posts when page is loaded
    await checkAndPublishScheduledPosts();
    return (
        <main className="min-h-screen bg-background pt-[120px]">
            {/* Hero Section */}
            <div className="bg-secondary/30">
                <div className="container-custom pt-16 pb-20 md:pt-24 md:pb-28">
                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 text-base text-muted-foreground/90 mb-8">
                        <Link href="/" className="hover:text-primary flex items-center gap-1.5 transition-colors">
                            <Home size={16} /> Trang chủ
                        </Link>
                        <ChevronRight size={16} />
                        <span className="text-foreground font-medium">Tin Tức</span>
                    </div>

                    <div className="flex items-center gap-3 mb-5">
                        <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                            <Newspaper size={26} />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-wider text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                            Cập nhật 24/7
                        </span>
                    </div>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-8 tracking-tight leading-tight">
                        Tin Tức <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Thị Trường</span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/70 max-w-4xl leading-relaxed mb-4">
                        Cập nhật thông tin nhanh chóng, chính xác về Forex, Vàng, Bitcoin và thị trường tài chính toàn cầu để không bỏ lỡ cơ hội giao dịch.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom pt-24 pb-16 md:pt-28 md:pb-20">
                <NewsList category="tin-tuc" limit={20} />
            </div>
        </main>
    );
}
