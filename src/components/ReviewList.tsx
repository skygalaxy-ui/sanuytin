"use client";

import Link from "next/link";
import { Star, CircleCheck, ExternalLink, Search, ChevronDown, ChevronUp, ShieldCheck, FileText, TrendingUp, Wallet, Gauge, Sparkles, BadgeCheck, ArrowUpRight } from "lucide-react";
import { brokers } from "@/data/brokers";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getRelativePath } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function ReviewList() {
    const pathname = usePathname();
    const [searchTerm, setSearchTerm] = useState("");

    const filteredBrokers = useMemo(() => {
        let result = [...brokers];
        if (searchTerm) {
            const lowerTerm = searchTerm.toLowerCase();
            result = result.filter(b =>
                b.name.toLowerCase().includes(lowerTerm) ||
                b.license.toLowerCase().includes(lowerTerm)
            );
        }
        return result.sort((a, b) => a.rank - b.rank);
    }, [searchTerm]);

    return (
        <div className="space-y-6">
            {/* Search */}
            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Tìm sàn giao dịch..."
                        className="w-full pl-11 pr-4 py-3 bg-card border border-border rounded-xl outline-none focus:border-primary transition-colors text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <p className="text-sm text-muted-foreground hidden md:block">
                    Hiển thị <strong className="text-foreground">{filteredBrokers.length}</strong> sàn giao dịch
                </p>
            </div>

            {/* Broker Cards */}
            <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                    {filteredBrokers.map((broker, index) => (
                        <motion.div
                            key={broker.id}
                            layout
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15, delay: index * 0.02 }}
                        >
                            <BrokerCard broker={broker} pathname={pathname} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {filteredBrokers.length === 0 && (
                <div className="text-center py-16 bg-card rounded-xl border border-border">
                    <p className="text-muted-foreground mb-2">Không tìm thấy sàn phù hợp.</p>
                    <button onClick={() => setSearchTerm("")} className="text-primary font-medium hover:underline">
                        Xóa tìm kiếm
                    </button>
                </div>
            )}
        </div>
    );
}

function BrokerCard({ broker, pathname }: { broker: any; pathname: string }) {
    const [imgError, setImgError] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const getRankBadge = (rank: number) => {
        if (rank === 1) return { bg: "bg-gradient-to-r from-yellow-400 to-amber-500", text: "text-white", label: "🥇" };
        if (rank === 2) return { bg: "bg-gradient-to-r from-slate-300 to-slate-400", text: "text-slate-800", label: "🥈" };
        if (rank === 3) return { bg: "bg-gradient-to-r from-amber-600 to-amber-700", text: "text-white", label: "🥉" };
        return { bg: "bg-primary/10", text: "text-primary", label: `#${rank}` };
    };

    const rankStyle = getRankBadge(broker.rank);

    return (
        <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-lg transition-all">
            {/* Main Content */}
            <div className="p-5 md:p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-5">

                    {/* Left: Rank + Logo + Basic Info */}
                    <div className="flex items-start gap-4 lg:w-64 shrink-0">
                        {/* Rank */}
                        <div className={`w-10 h-10 rounded-xl ${rankStyle.bg} ${rankStyle.text} flex items-center justify-center text-sm font-bold shrink-0 shadow-sm`}>
                            {broker.rank}
                        </div>

                        {/* Logo */}
                        <div className="w-14 h-14 shrink-0">
                            {!imgError ? (
                                <img src={broker.logo} alt={broker.name} className="w-full h-full object-contain" onError={() => setImgError(true)} />
                            ) : (
                                <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center text-sm font-bold text-muted-foreground">{broker.name.substring(0, 2)}</div>
                            )}
                        </div>

                        {/* Name & Score */}
                        <div className="min-w-0 flex-1">
                            <a href={getRelativePath(pathname, `/${broker.slug}`)} className="text-lg font-bold text-foreground hover:text-primary transition-colors block">
                                {broker.name}
                            </a>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-0.5 rounded">
                                    <Star size={12} className="text-yellow-500 fill-yellow-500" />
                                    <span className="text-sm font-bold text-yellow-600">{broker.score}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle: Stats + License + Pros */}
                    <div className="flex-1 space-y-4">
                        {/* Stats Row - Premium Design */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl p-3 text-center group hover:border-blue-500/40 transition-colors">
                                <div className="flex items-center justify-center gap-1 mb-1">
                                    <TrendingUp size={12} className="text-blue-500" />
                                    <p className="text-[10px] text-muted-foreground uppercase font-semibold">Spread</p>
                                </div>
                                <p className="font-black text-blue-600 dark:text-blue-400">{broker.avgSpread}</p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-xl p-3 text-center group hover:border-purple-500/40 transition-colors">
                                <div className="flex items-center justify-center gap-1 mb-1">
                                    <Gauge size={12} className="text-purple-500" />
                                    <p className="text-[10px] text-muted-foreground uppercase font-semibold">Đòn bẩy</p>
                                </div>
                                <p className="font-black text-purple-600 dark:text-purple-400">{broker.maxLev}</p>
                            </div>
                            <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-3 text-center group hover:border-green-500/40 transition-colors">
                                <div className="flex items-center justify-center gap-1 mb-1">
                                    <Wallet size={12} className="text-green-500" />
                                    <p className="text-[10px] text-muted-foreground uppercase font-semibold">Min Nạp</p>
                                </div>
                                <p className="font-black text-green-600 dark:text-green-400">{broker.minDep}</p>
                            </div>
                        </div>

                        {/* License - Premium Badge */}
                        <div className="flex items-center gap-2 text-sm bg-gradient-to-r from-green-500/5 to-transparent px-3 py-2 rounded-lg border-l-2 border-green-500">
                            <BadgeCheck size={16} className="text-green-500 shrink-0" />
                            <span className="text-muted-foreground">Giấy phép:</span>
                            <span className="font-semibold text-foreground">{broker.license}</span>
                        </div>

                        {/* Desktop Pros - Enhanced */}
                        <div className="hidden md:grid md:grid-cols-2 gap-2">
                            {broker.pros.slice(0, 4).map((pro: string, i: number) => (
                                <div key={i} className="flex items-center gap-2 text-sm group">
                                    <CircleCheck size={14} className="text-emerald-500 shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-muted-foreground group-hover:text-foreground truncate transition-colors">{pro}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Action Buttons - Premium Style */}
                    <div className="flex flex-row lg:flex-col gap-3 lg:w-48 shrink-0">
                        <a
                            href={broker.registerLink}
                            target="_blank"
                            rel="noreferrer nofollow"
                            className="flex-1 lg:w-full py-3 px-4 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400 text-white text-sm font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 group"
                        >
                            Mở Tài Khoản
                            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                        <a
                            href={getRelativePath(pathname, `/${broker.slug}`)}
                            className="flex-1 lg:w-full py-3 px-4 bg-secondary/50 hover:bg-secondary text-foreground text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 border border-border hover:border-primary/40 group"
                        >
                            <Sparkles size={14} className="text-primary group-hover:rotate-12 transition-transform" />
                            Xem Đánh Giá
                        </a>
                    </div>
                </div>

                {/* Mobile Expand Button */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="md:hidden w-full mt-4 pt-3 border-t border-border flex items-center justify-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    {expanded ? "Thu gọn" : "Xem thêm ưu điểm"}
                    {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
            </div>

            {/* Mobile Expanded Content */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden"
                    >
                        <div className="px-5 pb-5 space-y-3">
                            {broker.pros.slice(0, 4).map((pro: string, i: number) => (
                                <div key={i} className="flex items-start gap-2 text-sm">
                                    <CircleCheck size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                    <span className="text-foreground">{pro}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
