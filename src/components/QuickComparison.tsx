"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Trophy, ArrowRight, ExternalLink, CheckCircle2, Shield, DollarSign, TrendingUp, Zap, Loader2 } from "lucide-react";
import { getBrokers, Broker } from "@/lib/supabase";
import { getBrokerLink } from "@/lib/categories";


export default function QuickComparison() {
    const [brokers, setBrokers] = useState<Broker[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            try {
                const data = await getBrokers();
                setBrokers(data.slice(0, 5));
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    if (loading) {
        return (
            <section className="py-12 md:py-16 bg-slate-950 relative overflow-hidden">
                <div className="container-custom">
                    <div className="flex items-center justify-center h-48">
                        <Loader2 className="animate-spin text-primary" size={40} />
                    </div>
                </div>
            </section>
        );
    }

    if (brokers.length === 0) return null;

    const metrics = [
        { key: "min_dep", label: "Nạp tối thiểu", icon: DollarSign, color: "text-emerald-400" },
        { key: "max_lev", label: "Đòn bẩy tối đa", icon: TrendingUp, color: "text-blue-400" },
        { key: "license", label: "Giấy phép", icon: Shield, color: "text-amber-400" },
        { key: "score", label: "Điểm đánh giá", icon: Trophy, color: "text-purple-400" },
    ];

    return (
        <section id="quick-compare" className="py-12 md:py-16 bg-slate-950 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                        <Zap size={14} className="text-purple-400" />
                        <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">So sánh nhanh</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
                        Bảng So Sánh <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Top 5 Sàn Forex</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Nhìn nhanh các chỉ số quan trọng nhất để chọn sàn phù hợp. Dữ liệu được cập nhật liên tục.
                    </p>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block">
                    <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
                        {/* Table Header */}
                        <div className="grid grid-cols-6 bg-slate-800/50 border-b border-slate-700">
                            <div className="p-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Tiêu chí</div>
                            {brokers.map((broker, i) => (
                                <div key={broker.id} className={`p-4 text-center border-l border-slate-700 ${i === 0 ? 'bg-gradient-to-b from-blue-500/10 to-transparent' : ''}`}>
                                    <div className="flex flex-col items-center gap-2">
                                        {i === 0 && (
                                            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 rounded-full">#1 Khuyên dùng</span>
                                        )}
                                        <span className="font-bold text-white text-sm">{broker.name}</span>
                                        <span className="text-[10px] text-slate-500">Top #{i + 1}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Rows */}
                        {metrics.map((metric, rowIdx) => {
                            const Icon = metric.icon;
                            return (
                                <div key={metric.key} className={`grid grid-cols-6 border-b border-slate-800/50 ${rowIdx % 2 === 0 ? 'bg-slate-900/30' : 'bg-slate-900/60'} hover:bg-slate-800/30 transition-colors`}>
                                    <div className="p-4 flex items-center gap-2">
                                        <Icon size={16} className={metric.color} />
                                        <span className="text-sm font-semibold text-slate-300">{metric.label}</span>
                                    </div>
                                    {brokers.map((broker: any, i) => (
                                        <div key={broker.id} className={`p-4 text-center border-l border-slate-800/50 flex items-center justify-center ${i === 0 ? 'bg-blue-500/5' : ''}`}>
                                            <span className={`text-sm font-bold ${metric.key === 'score' ? 'text-yellow-400' : 'text-white'}`}>
                                                {metric.key === 'score' ? `${broker[metric.key]}/10` : broker[metric.key]}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            );
                        })}

                        {/* Action Row */}
                        <div className="grid grid-cols-6 bg-slate-800/30">
                            <div className="p-4 flex items-center">
                                <span className="text-sm font-semibold text-slate-400">Hành động</span>
                            </div>
                            {brokers.map((broker, i) => (
                                <div key={broker.id} className={`p-4 text-center border-l border-slate-800/50 ${i === 0 ? 'bg-blue-500/5' : ''}`}>
                                    <div className="flex flex-col gap-2">
                                        <a
                                            href={broker.register_link}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            className={`inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-xs font-bold transition-all hover:scale-105 ${i === 0
                                                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20'
                                                : 'bg-white/10 text-white hover:bg-white/20'
                                                }`}
                                        >
                                            Mở TK <ExternalLink size={12} />
                                        </a>
                                        <Link href={getBrokerLink(broker.slug)} className="text-[11px] text-blue-400 hover:underline">
                                            Xem đánh giá →
                                        </Link>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                    {brokers.map((broker: any, i) => (
                        <div key={broker.id} className={`bg-slate-900/80 border rounded-xl p-5 ${i === 0 ? 'border-blue-500/40 ring-1 ring-blue-500/20' : 'border-slate-800'}`}>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span className={`text-xs font-bold px-2 py-1 rounded-md ${i === 0 ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'}`}>#{i + 1}</span>
                                    <span className="font-bold text-white">{broker.name}</span>
                                </div>
                                <span className="text-yellow-400 font-bold text-sm">{broker.score}/10</span>
                            </div>
                            <div className="grid grid-cols-3 gap-3 mb-4">
                                <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Nạp min</p>
                                    <p className="text-sm font-bold text-emerald-400">{broker.min_dep}</p>
                                </div>
                                <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Đòn bẩy</p>
                                    <p className="text-sm font-bold text-blue-400">{broker.max_lev}</p>
                                </div>
                                <div className="text-center p-3 bg-slate-800/50 rounded-lg">
                                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">License</p>
                                    <p className="text-[11px] font-bold text-amber-400 truncate">{broker.license}</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <a
                                    href={broker.register_link}
                                    target="_blank"
                                    rel="nofollow noreferrer"
                                    className={`flex-1 text-center py-2.5 rounded-lg text-sm font-bold transition-all ${i === 0
                                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                                        : 'bg-white/10 text-white'
                                        }`}
                                >
                                    Mở Tài Khoản
                                </a>
                                <Link href={getBrokerLink(broker.slug)} className="px-4 py-2.5 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors">
                                    Đánh giá
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-10">
                    <Link
                        href="/so-sanh"
                        className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold transition-all"
                    >
                        Xem bảng so sánh đầy đủ tất cả các sàn
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
