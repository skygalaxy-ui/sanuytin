"use client";

import Link from "next/link";
import { Star, CheckCircle2, Trophy, ExternalLink, ShieldCheck, FileText, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { getRelativePath } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { getBrokers, Broker } from "@/lib/supabase";

// Transform Supabase broker to display format
interface DisplayBroker {
    id: number;
    rank: number;
    name: string;
    slug: string;
    logo: string;
    score: number;
    minDep: string;
    maxLev: string;
    license: string;
    features: string[];
    registerLink: string;
}

function transformBroker(broker: Broker): DisplayBroker {
    return {
        id: broker.id,
        rank: broker.rank,
        name: broker.name,
        slug: broker.slug,
        logo: broker.logo || '/images/placeholder-broker.png',
        score: broker.score,
        minDep: broker.min_dep,
        maxLev: broker.max_lev,
        license: broker.license,
        features: broker.pros?.slice(0, 3) || [],
        registerLink: broker.register_link
    };
}

export default function BrokerRanking() {
    const [brokers, setBrokers] = useState<DisplayBroker[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadBrokers() {
            try {
                const data = await getBrokers();
                const transformed = data.map(transformBroker);
                setBrokers(transformed);
            } catch (error) {
                console.error('Error loading brokers:', error);
            } finally {
                setLoading(false);
            }
        }
        loadBrokers();
    }, []);

    if (loading) {
        return (
            <section id="ranking" className="py-14 bg-background dark:bg-background overflow-hidden">
                <div className="container-custom max-w-[1280px] relative">
                    <div className="text-center mb-10 space-y-3">
                        <h2 className="text-xl md:text-3xl font-bold text-foreground dark:text-foreground tracking-tight">
                            Bảng Xếp Hạng Top 10 Sàn Forex <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Uy Tín Nhất 2026</span>
                        </h2>
                    </div>
                    <div className="flex items-center justify-center h-64">
                        <Loader2 className="animate-spin text-primary" size={48} />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="ranking" className="py-14 bg-background dark:bg-background overflow-hidden">
            <div className="container-custom max-w-[1280px] relative">
                {/* Background Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

                <div className="text-center mb-10 space-y-3">
                    <h2 className="text-xl md:text-3xl font-bold text-foreground dark:text-foreground tracking-tight">
                        Bảng Xếp Hạng Top 10 Sàn Forex <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">Uy Tín Nhất 2026</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto font-medium text-base">
                        Đánh giá minh bạch dựa trên Spread, phí nạp rút và chứng chỉ quản lý vốn.
                    </p>
                </div>

                <div className="flex flex-col gap-5">
                    {brokers.slice(0, 10).map((broker, index) => (
                        <BrokerCard key={broker.id} broker={broker} index={index} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/so-sanh"
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 hover:bg-secondary border border-border hover:border-primary/50 rounded-xl font-semibold text-foreground hover:text-primary transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/10"
                    >
                        <span>Xem bảng so sánh chi tiết tất cả các sàn</span>
                        <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

function BrokerCard({ broker, index }: { broker: DisplayBroker, index: number }) {
    const [imgError, setImgError] = useState(false);
    const pathname = usePathname();

    return (
        <div
            className={`
                bg-card dark:bg-card/40 backdrop-blur-sm rounded-[12px] shadow-sm border border-border dark:border-border 
                flex flex-col lg:flex-row items-center gap-4 p-4 lg:py-3
                card-hover relative overflow-hidden group transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5
                ${index === 0 ? 'ring-2 ring-primary/20 dark:bg-gradient-to-r dark:from-secondary/80 dark:to-secondary/40' : ''}
            `}
        >
            {/* Rank Badge */}
            <div className={`
                absolute top-0 left-0 px-3 py-1 rounded-br-[12px] text-xs font-bold border-r border-b border-border dark:border-border/50 z-20 transition-colors
                ${index === 0 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-white'}
            `}>
                #{index + 1}
            </div>

            {(index === 0 || index === 1 || index === 2) && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-bl-[8px] shadow-sm z-20">
                    Recommended
                </div>
            )}

            {/* Top Glow for Rank 1 */}
            {index === 0 && <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />}

            {/* Logo & Score Section */}
            <div className="w-full lg:w-32 flex flex-col items-center gap-1.5 shrink-0 mt-3 lg:mt-0">
                <a href={getRelativePath(pathname, `/${broker.slug}`)} className="w-14 h-14 relative flex items-center justify-center bg-white rounded-[8px] border border-border/50 shadow-sm overflow-hidden shrink-0 p-0 group-hover:scale-105 transition-transform duration-300">
                    {!imgError ? (
                        <img
                            src={broker.logo}
                            alt={broker.name}
                            className="w-full h-full object-contain"
                            onError={() => setImgError(true)}
                            loading="lazy"
                        />
                    ) : (
                        <span className="text-xl font-black text-muted-foreground/50">{broker.name.substring(0, 3)}</span>
                    )}
                </a>

                <a href={getRelativePath(pathname, `/${broker.slug}`)} className="text-sm font-bold text-foreground hover:text-primary transition-colors text-center leading-tight">
                    {broker.name}
                </a>

                <div className="flex items-center gap-1 bg-blue-50 dark:bg-primary/10 px-2.5 py-0.5 rounded-full border border-blue-100 dark:border-primary/20">
                    <span className="font-extrabold text-primary text-base leading-none">{broker.score}</span>
                    <div className="flex text-yellow-500 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                size={12}
                                fill={i < Math.floor(broker.score / 2) ? "currentColor" : "none"}
                                className={i < Math.floor(broker.score / 2) ? "" : "text-gray-300 dark:text-gray-700"}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Info Grid */}
            <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-y-2 gap-x-3 text-sm border-t lg:border-t-0 lg:border-l border-border dark:border-border pt-3 lg:pt-0 lg:pl-4">
                <div className="space-y-1 min-w-0">
                    <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-semibold truncate">Giấy phép</p>
                    <div className="flex items-center gap-1.5 text-foreground dark:text-gray-200 font-bold overflow-hidden">
                        <ShieldCheck size={16} className="text-primary shrink-0" />
                        <span className="truncate text-xs" title={broker.license}>{broker.license}</span>
                    </div>
                </div>
                <div className="space-y-1 min-w-0">
                    <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-semibold truncate">Min Deposit</p>
                    <p className="font-bold text-primary text-sm font-mono tracking-tight truncate">{broker.minDep}</p>
                </div>
                <div className="space-y-1 min-w-0">
                    <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-semibold truncate">Đòn bẩy</p>
                    <p className="font-bold text-white font-mono text-sm tracking-tight truncate">{broker.maxLev}</p>
                </div>
                <div className="col-span-2 md:col-span-1 space-y-1 min-w-0">
                    <p className="text-muted-foreground text-[10px] uppercase tracking-wider font-semibold truncate">Ưu điểm</p>
                    <div className="flex flex-col gap-1 min-w-0">
                        {broker.features.slice(0, 2).map((feature: string, i: number) => (
                            <span key={i} className="flex items-start gap-1.5 text-muted-foreground text-xs font-medium leading-tight overflow-hidden">
                                <CheckCircle2 size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span className="truncate" title={feature}>{feature}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-row gap-2 w-full lg:flex-col lg:min-w-[140px] lg:w-auto">
                <a
                    href={broker.registerLink}
                    target="_blank"
                    rel="nofollow noreferrer"
                    className="flex-1 lg:flex-none bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400 text-white font-semibold py-2.5 px-4 rounded-[8px] shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 text-center flex items-center justify-center gap-1.5 group text-sm"
                >
                    Mở Tài Khoản
                    <ExternalLink size={15} className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                    href={getRelativePath(pathname, `/${broker.slug}`)}
                    className="flex-1 lg:flex-none bg-secondary hover:bg-secondary/80 text-foreground font-medium py-2.5 px-4 rounded-[8px] border border-border/50 hover:border-primary/30 transition-all text-center text-sm flex items-center justify-center gap-1.5"
                >
                    <FileText size={15} className="text-muted-foreground" />
                    Đánh giá
                </a>
            </div>
        </div>
    );
}
