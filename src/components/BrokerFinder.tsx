"use client";

import { useState } from "react";
import { brokers } from "@/data/brokers";
import { Search, Shield, Zap, Info, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function BrokerFinder() {
    const [step, setStep] = useState(1);
    const [preferences, setPreferences] = useState({
        experience: "",
        priority: "",
        capital: ""
    });

    const reset = () => {
        setStep(1);
        setPreferences({ experience: "", priority: "", capital: "" });
    };

    const getRecommendedBroker = () => {
        // Simple logic based on data
        if (preferences.experience === "beginner") {
            return brokers.find(b => b.name === "Exness") || brokers[0];
        }
        if (preferences.priority === "license") {
            return brokers.find(b => b.name === "XTB" || b.name === "Pepperstone") || brokers[0];
        }
        if (preferences.priority === "cost") {
            return brokers.find(b => b.avgSpread.includes("0.0")) || brokers[0];
        }
        return brokers[0];
    };

    const recommended = getRecommendedBroker();

    return (
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="p-5 bg-secondary/30 border-b border-border">
                <h3 className="font-bold flex items-center gap-2">
                    <Search size={18} className="text-primary" /> 30 Giây Tìm Sàn Phù Hợp
                </h3>
            </div>

            <div className="p-6">
                {step === 1 && (
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Bước 1: Kinh nghiệm của bạn?</p>
                        <div className="grid grid-cols-1 gap-2">
                            <button
                                onClick={() => { setPreferences({ ...preferences, experience: "beginner" }); setStep(2); }}
                                className="text-left p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-between group"
                            >
                                <span>Mới bắt đầu (Dưới 1 năm)</span>
                                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                            </button>
                            <button
                                onClick={() => { setPreferences({ ...preferences, experience: "pro" }); setStep(2); }}
                                className="text-left p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all flex items-center justify-between group"
                            >
                                <span>Đã có kinh nghiệm</span>
                                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Bước 2: Bạn ưu tiên điều gì nhất?</p>
                        <div className="grid grid-cols-1 gap-2">
                            <button
                                onClick={() => { setPreferences({ ...preferences, priority: "license" }); setStep(3); }}
                                className="text-left p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-3"
                            >
                                <Shield size={18} className="text-blue-500" />
                                <div>
                                    <div className="font-bold text-sm">Pháp lý & An toàn</div>
                                    <div className="text-xs text-muted-foreground">Giấy phép FCA, ASIC...</div>
                                </div>
                            </button>
                            <button
                                onClick={() => { setPreferences({ ...preferences, priority: "cost" }); setStep(3); }}
                                className="text-left p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-3"
                            >
                                <Zap size={18} className="text-yellow-500" />
                                <div>
                                    <div className="font-bold text-sm">Phí giao dịch cực rẻ</div>
                                    <div className="text-xs text-muted-foreground">Spread thấp, 0 hoa hồng</div>
                                </div>
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-6 text-center animate-in fade-in zoom-in duration-300">
                        <div className="space-y-2">
                            <div className="inline-flex p-3 bg-green-500/10 rounded-full text-green-500 mb-2">
                                <CheckCircle2 size={32} />
                            </div>
                            <h4 className="font-bold text-lg">Gợi ý tốt nhất cho bạn</h4>
                        </div>

                        <div className="bg-secondary/20 p-4 rounded-xl border border-border flex items-center gap-4 text-left">
                            <img src={recommended.logo} alt={recommended.name} className="w-16 h-16 object-contain bg-white rounded-lg border border-border p-1" />
                            <div className="flex-1 min-w-0">
                                <div className="font-bold text-lg">{recommended.name}</div>
                                <div className="text-xs text-muted-foreground line-clamp-1">{recommended.features.slice(0, 2).join(" • ")}</div>
                                <div className="text-sm font-bold text-primary mt-1">Điểm: {recommended.score}/10</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <button onClick={reset} className="p-2.5 text-xs text-muted-foreground hover:text-foreground transition-colors border border-border rounded-lg">
                                Thử lại
                            </button>
                            <Link
                                href={`/${recommended.slug}`}
                                className="p-2.5 text-xs font-bold bg-primary text-white rounded-lg flex items-center justify-center gap-1"
                            >
                                Xem Review <ArrowRight size={12} />
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            <div className="p-4 bg-primary/5 text-[10px] text-muted-foreground leading-relaxed italic text-center border-t border-border/50">
                <Info size={10} className="inline mr-1" /> Lựa chọn dựa trên dữ liệu so sánh 2026. Hãy cân nhắc rủi ro trước khi giao dịch.
            </div>
        </div>
    );
}
