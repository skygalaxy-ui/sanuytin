"use client";

import { brokers } from "@/data/brokers";
import { Check, X, Shield, Landmark, Globe, Smartphone, CreditCard, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function ComparisonTable() {
    // Only show top 10 brokers in comparison
    const topBrokers = brokers.slice(0, 10);
    // State to track scroll position for shadow effects
    const [scrolledLeft, setScrolledLeft] = useState(false);
    const [scrolledRight, setScrolledRight] = useState(true);
    const [failedLogos, setFailedLogos] = useState<Set<number>>(new Set());
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setScrolledLeft(scrollLeft > 0);
            setScrolledRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const metrics = [
        { label: "Điểm Đánh Giá", key: "score", icon: null },
        { label: "Giấy Phép", key: "license", icon: <Shield size={16} className="text-primary" /> },
        { label: "Năm Thành Lập", key: "foundedYear", icon: <Landmark size={16} className="text-blue-500" /> },
        { label: "Trụ Sở Chính", key: "headquarters", icon: <Globe size={16} className="text-green-500" /> },
        { label: "Nạp Tối Thiểu", key: "minDep", icon: null },
        { label: "Đòn Bẩy Tối Đa", key: "maxLev", icon: null },
        { label: "Spread Trung Bình", key: "avgSpread", icon: null },
        { label: "Hoa Hồng", key: "commission", icon: null },
        { label: "Nền Tảng", key: "platforms", icon: <Smartphone size={16} className="text-purple-500" /> },
        { label: "Nạp Rút", key: "depositMethods", icon: <CreditCard size={16} className="text-orange-500" /> },
    ];

    return (
        <div className="relative border border-border rounded-xl bg-card shadow-sm overflow-hidden">
            {/* Scroll Indicators */}
            <div className={`absolute top-0 bottom-0 left-[140px] md:left-[200px] w-8 bg-gradient-to-r from-background/50 to-transparent z-20 pointer-events-none transition-opacity ${scrolledLeft ? "opacity-100" : "opacity-0"}`} />
            <div className={`absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-background/50 to-transparent z-20 pointer-events-none transition-opacity ${scrolledRight ? "opacity-100" : "opacity-0"}`} />

            <div
                ref={scrollContainerRef}
                className="overflow-x-auto scrollbar-hide pb-2"
                onScroll={checkScroll}
            >
                <div className="min-w-max">
                    {/* Header Row: Broker Logos & Names */}
                    <div className="flex sticky top-0 z-30">
                        {/* Empty Top-Left Check */}
                        <div className="sticky left-0 bg-secondary/80 backdrop-blur-md border-b border-r border-border min-w-[140px] md:min-w-[200px] p-4 flex items-center font-bold text-foreground">
                            Tiêu Chí So Sánh
                        </div>

                        {/* Broker Headers */}
                        {topBrokers.map((broker) => (
                            <div key={broker.id} className="min-w-[160px] md:min-w-[200px] border-b border-r border-border bg-card p-4 flex flex-col items-center gap-3 text-center transition-colors hover:bg-secondary/20">
                                <div className="w-16 h-16 bg-white rounded-lg border border-border/50 p-1 shadow-sm flex items-center justify-center overflow-hidden">
                                    {failedLogos.has(broker.id) ? (
                                        <div className="w-full h-full bg-gradient-to-br from-primary to-blue-600 rounded-md flex items-center justify-center text-white text-xl font-bold">
                                            {broker.name.charAt(0)}
                                        </div>
                                    ) : (
                                        <img
                                            src={broker.logo}
                                            alt={broker.name}
                                            className="w-full h-full object-contain"
                                            onError={() => setFailedLogos(prev => new Set(prev).add(broker.id))}
                                        />
                                    )}
                                </div>
                                <div>
                                    <div className="font-bold text-base md:text-lg">{broker.name}</div>
                                    <div className="text-xs text-muted-foreground font-semibold flex items-center justify-center gap-1">
                                        <span className="text-primary">{broker.score}</span>/10
                                    </div>
                                </div>
                                <a
                                    href={broker.registerLink}
                                    target="_blank"
                                    rel="nofollow noreferrer"
                                    className="text-xs font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400 text-white py-1.5 px-3 rounded-full transition-all w-full flex items-center justify-center gap-1"
                                >
                                    Mở Tài Khoản <ExternalLink size={10} />
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Metric Rows */}
                    <div className="divide-y divide-border">
                        {metrics.map((metric, idx) => (
                            <div key={metric.key} className={`flex transition-colors hover:bg-secondary/10 ${idx % 2 === 0 ? "bg-background" : "bg-card"}`}>
                                {/* Sticky Label Column */}
                                <div className="sticky left-0 bg-background/95 backdrop-blur-sm border-r border-border min-w-[140px] md:min-w-[200px] p-3 md:p-4 text-sm font-semibold text-muted-foreground flex items-center gap-2 z-10">
                                    {metric.icon}
                                    <span className="truncate">{metric.label}</span>
                                </div>

                                {/* Data Cells */}
                                {topBrokers.map((broker) => {
                                    const value = (broker as any)[metric.key];
                                    let content;

                                    if (Array.isArray(value)) {
                                        // For depositMethods and platforms, show shorter text
                                        if (metric.key === 'depositMethods') {
                                            const methods = value.slice(0, 2);
                                            content = methods.map(m => {
                                                // Shorten long method names
                                                if (m.includes('Internet Banking')) return 'Bank Transfer';
                                                if (m.includes('Visa') || m.includes('Master')) return 'Card';
                                                if (m.includes('MoMo') || m.includes('VietQR')) return 'E-Wallet';
                                                if (m.includes('Ngan')) return 'E-Wallet';
                                                return m.length > 12 ? m.substring(0, 10) + '...' : m;
                                            }).join(', ');
                                            if (value.length > 2) content += '...';
                                        } else if (metric.key === 'platforms') {
                                            content = value.slice(0, 2).join(', ') + (value.length > 2 ? '...' : '');
                                        } else {
                                            content = value.slice(0, 2).join(', ') + (value.length > 2 ? '...' : '');
                                        }
                                    } else {
                                        content = value;
                                    }

                                    // Styling for specific keys
                                    let cellClass = 'text-sm text-foreground';
                                    if (metric.key === 'score') cellClass = 'font-bold text-primary text-base';
                                    if (metric.key === 'avgSpread' && parseFloat(String(value)) === 0) cellClass = 'font-bold text-green-600 bg-green-500/10 px-2 py-0.5 rounded';
                                    if (metric.key === 'avgSpread' && parseFloat(String(value)) > 0) cellClass = 'font-bold text-foreground';
                                    if (metric.key === 'depositMethods' || metric.key === 'platforms') cellClass = 'text-xs text-foreground leading-relaxed';

                                    return (
                                        <div key={`${broker.id}-${metric.key}`} className="min-w-[160px] md:min-w-[200px] border-r border-border p-3 md:p-4 flex items-center justify-center text-center">
                                            <span className={cellClass} title={Array.isArray(value) ? value.join(', ') : String(value)}>
                                                {content}
                                                {metric.key === 'avgSpread' && value === '0.0 pips' && <span className="block text-[10px] font-normal text-muted-foreground">(Raw)</span>}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        ))}

                        {/* More Info Row */}
                        <div className="flex bg-secondary/5">
                            <div className="sticky left-0 bg-secondary/80 backdrop-blur-sm border-r border-border min-w-[140px] md:min-w-[200px] p-4 font-semibold text-muted-foreground flex items-center z-10">
                                Chi Tiết
                            </div>
                            {topBrokers.map((broker) => (
                                <div key={`link-${broker.id}`} className="min-w-[160px] md:min-w-[200px] border-r border-border p-4 flex items-center justify-center">
                                    <Link
                                        href={`/${broker.slug}`}
                                        className="text-primary hover:underline text-sm font-medium flex items-center gap-1"
                                    >
                                        Xem Review <ChevronRight size={14} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
