"use client";

import { brokers } from "@/data/brokers";
import { Check, X, Shield, Landmark, Globe, Smartphone, CreditCard, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect, useMemo } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

export default function ComparisonTable() {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterCategory, setFilterCategory] = useState("all");
    const [failedLogos, setFailedLogos] = useState<Set<number>>(new Set());
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [scrolledLeft, setScrolledLeft] = useState(false);
    const [scrolledRight, setScrolledRight] = useState(true);

    const filteredBrokers = useMemo(() => {
        return brokers.filter(broker => {
            const matchesSearch = broker.name.toLowerCase().includes(searchQuery.toLowerCase());
            if (filterCategory === "all") return matchesSearch;
            if (filterCategory === "raw") return matchesSearch && broker.avgSpread.includes("0.0");
            if (filterCategory === "high-score") return matchesSearch && broker.score >= 8.5;
            if (filterCategory === "crypto") return matchesSearch && broker.platforms.some(p => p.toLowerCase().includes("crypto") || broker.name.toLowerCase() === "xtb");
            return matchesSearch;
        });
    }, [searchQuery, filterCategory]);

    // Show filtered brokers, limit to 10 for performance if many matches
    const displayBrokers = filteredBrokers.slice(0, 10);

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
        <div className="space-y-4">
            {/* Filter Section */}
            <div className="flex flex-col md:flex-row gap-4 p-4 bg-secondary/20 rounded-xl border border-border/50">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                    <input
                        type="search"
                        placeholder="Tìm tên sàn (ví dụ: Exness, XTB...)"
                        className="w-full bg-background border border-border rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-2">
                    <select
                        className="bg-background border border-border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                    >
                        <option value="all">Tất cả sàn</option>
                        <option value="raw">Spread từ 0.0 (Raw)</option>
                        <option value="high-score">Điểm cao (&gt;8.5)</option>
                        <option value="crypto">Hỗ trợ Crypto</option>
                    </select>
                </div>
            </div>

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
                            {displayBrokers.map((broker) => (
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
                                    {displayBrokers.map((broker) => {
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
                                {displayBrokers.map((broker) => (
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
        </div>
    );
}
