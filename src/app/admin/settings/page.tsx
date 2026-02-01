"use client";

import { Settings, Save, Globe, Mail, Share2, Database, CheckCircle, ExternalLink, Shield, Palette } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        siteName: "Sàn Uy Tín",
        siteDescription: "Cổng thông tin đánh giá sàn Forex uy tín hàng đầu Việt Nam",
        contactEmail: "sanuytin.net@gmail.com",
        twitterUrl: "https://x.com/sanuytin",
        pinterestUrl: "https://www.pinterest.com/sanuytin/",
        facebookUrl: "",
        telegramUrl: "",
    });

    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleSave = async () => {
        setSaving(true);
        // Simulate save
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSaving(false);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const SettingsCard = ({
        icon: Icon,
        iconColor,
        iconBg,
        title,
        description,
        children
    }: {
        icon: typeof Globe;
        iconColor: string;
        iconBg: string;
        title: string;
        description: string;
        children: React.ReactNode
    }) => (
        <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center`}>
                    <Icon size={22} className={iconColor} />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-white">{title}</h2>
                    <p className="text-slate-500 text-sm">{description}</p>
                </div>
            </div>
            {children}
        </div>
    );

    const InputField = ({
        label,
        type = "text",
        placeholder,
        value,
        onChange
    }: {
        label: string;
        type?: string;
        placeholder?: string;
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    }) => (
        <div>
            <label className="block text-sm text-slate-400 mb-2 font-medium">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                value={value}
                onChange={onChange}
            />
        </div>
    );

    return (
        <div className="space-y-6 max-w-4xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Settings className="text-primary" size={28} />
                        Cài đặt Website
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">Quản lý thông tin chung của website</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-bold rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:hover:scale-100"
                >
                    {saving ? (
                        <>
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Đang lưu...
                        </>
                    ) : saved ? (
                        <>
                            <CheckCircle size={18} />
                            Đã lưu!
                        </>
                    ) : (
                        <>
                            <Save size={18} />
                            Lưu cài đặt
                        </>
                    )}
                </button>
            </div>

            {/* General Settings */}
            <SettingsCard
                icon={Globe}
                iconColor="text-primary"
                iconBg="bg-primary/20"
                title="Thông tin chung"
                description="Cài đặt cơ bản của website"
            >
                <div className="space-y-4">
                    <InputField
                        label="Tên website"
                        value={settings.siteName}
                        onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                    />
                    <div>
                        <label className="block text-sm text-slate-400 mb-2 font-medium">Mô tả website (SEO)</label>
                        <textarea
                            rows={3}
                            className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-xl text-white outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                            value={settings.siteDescription}
                            onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                        />
                        <p className="text-slate-500 text-xs mt-1">{settings.siteDescription.length}/160 ký tự</p>
                    </div>
                </div>
            </SettingsCard>

            {/* Contact Settings */}
            <SettingsCard
                icon={Mail}
                iconColor="text-emerald-400"
                iconBg="bg-emerald-500/20"
                title="Thông tin liên hệ"
                description="Email và thông tin liên lạc"
            >
                <div className="space-y-4">
                    <InputField
                        label="Email liên hệ"
                        type="email"
                        value={settings.contactEmail}
                        onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                    />
                </div>
            </SettingsCard>

            {/* Social Media */}
            <SettingsCard
                icon={Share2}
                iconColor="text-purple-400"
                iconBg="bg-purple-500/20"
                title="Mạng xã hội"
                description="Liên kết đến các trang social"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField
                        label="Twitter / X"
                        placeholder="https://x.com/..."
                        value={settings.twitterUrl}
                        onChange={(e) => setSettings({ ...settings, twitterUrl: e.target.value })}
                    />
                    <InputField
                        label="Pinterest"
                        placeholder="https://pinterest.com/..."
                        value={settings.pinterestUrl}
                        onChange={(e) => setSettings({ ...settings, pinterestUrl: e.target.value })}
                    />
                    <InputField
                        label="Facebook"
                        placeholder="https://facebook.com/..."
                        value={settings.facebookUrl}
                        onChange={(e) => setSettings({ ...settings, facebookUrl: e.target.value })}
                    />
                    <InputField
                        label="Telegram"
                        placeholder="https://t.me/..."
                        value={settings.telegramUrl}
                        onChange={(e) => setSettings({ ...settings, telegramUrl: e.target.value })}
                    />
                </div>
            </SettingsCard>

            {/* Supabase Connection Status */}
            <SettingsCard
                icon={Database}
                iconColor="text-cyan-400"
                iconBg="bg-cyan-500/20"
                title="Kết nối Database"
                description="Trạng thái Supabase"
            >
                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-emerald-400 font-medium">Đã kết nối</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-slate-500 mb-1">Project URL</p>
                            <p className="text-slate-300 font-mono text-xs truncate">supabase.co/project/...</p>
                        </div>
                        <div>
                            <p className="text-slate-500 mb-1">Status</p>
                            <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-lg">
                                <CheckCircle size={12} />
                                Active
                            </span>
                        </div>
                    </div>
                </div>
            </SettingsCard>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="/admin/seo-audit" className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-primary/50 hover:bg-slate-800/50 transition-all group">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                            <Shield size={20} className="text-amber-400" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-white font-medium group-hover:text-primary transition-colors">SEO Audit</h3>
                            <p className="text-slate-500 text-xs">Kiểm tra SEO</p>
                        </div>
                        <ExternalLink size={16} className="text-slate-500 group-hover:text-primary transition-colors" />
                    </div>
                </a>
                <a href="/admin/sitemap" className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-primary/50 hover:bg-slate-800/50 transition-all group">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-sky-500/20 rounded-xl flex items-center justify-center">
                            <Globe size={20} className="text-sky-400" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-white font-medium group-hover:text-primary transition-colors">Sitemap</h3>
                            <p className="text-slate-500 text-xs">Quản lý sitemap</p>
                        </div>
                        <ExternalLink size={16} className="text-slate-500 group-hover:text-primary transition-colors" />
                    </div>
                </a>
                <a href="/admin/analytics" className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 hover:border-primary/50 hover:bg-slate-800/50 transition-all group">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-pink-500/20 rounded-xl flex items-center justify-center">
                            <Palette size={20} className="text-pink-400" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-white font-medium group-hover:text-primary transition-colors">Analytics</h3>
                            <p className="text-slate-500 text-xs">Thống kê</p>
                        </div>
                        <ExternalLink size={16} className="text-slate-500 group-hover:text-primary transition-colors" />
                    </div>
                </a>
            </div>
        </div>
    );
}
