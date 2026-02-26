"use client";

import { useState, useEffect } from "react";
import {
    Settings, Save, Globe, Mail, Share2, Database, CheckCircle,
    ExternalLink, Shield, Palette, Loader2, RefreshCw, AlertCircle
} from "lucide-react";
import { getSiteSettings, updateAllSiteSettings, supabase } from "@/lib/supabase";

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        siteName: "",
        siteDescription: "",
        contactEmail: "",
        twitterUrl: "",
        pinterestUrl: "",
        facebookUrl: "",
        telegramUrl: "",
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);
    const [error, setError] = useState("");
    const [connectionStatus, setConnectionStatus] = useState<'loading' | 'connected' | 'error'>('loading');

    // Load settings from Supabase
    const loadSettings = async () => {
        setLoading(true);
        setError("");
        try {
            const { data, error: fetchError } = await supabase
                .from('site_settings')
                .select('*');

            if (fetchError) {
                console.error('Error fetching settings:', fetchError);
                setConnectionStatus('error');
                setError("Không thể tải cài đặt từ database");
                // Use defaults
                setSettings({
                    siteName: "Sàn Uy Tín",
                    siteDescription: "Cổng thông tin đánh giá sàn Forex uy tín hàng đầu Việt Nam",
                    contactEmail: "sanuytin.net@gmail.com",
                    twitterUrl: "https://x.com/sanuytin",
                    pinterestUrl: "https://www.pinterest.com/sanuytin/",
                    facebookUrl: "",
                    telegramUrl: "",
                });
                setLoading(false);
                return;
            }

            setConnectionStatus('connected');

            // Parse settings from key-value pairs
            const settingsMap: Record<string, any> = {};
            (data || []).forEach((item: any) => {
                settingsMap[item.key] = item.value;
            });

            const socialLinks = settingsMap.social_links || {};

            setSettings({
                siteName: typeof settingsMap.site_name === 'string'
                    ? settingsMap.site_name
                    : (settingsMap.site_name || "Sàn Uy Tín"),
                siteDescription: typeof settingsMap.site_description === 'string'
                    ? settingsMap.site_description
                    : (settingsMap.site_description || ""),
                contactEmail: typeof settingsMap.contact_email === 'string'
                    ? settingsMap.contact_email
                    : (settingsMap.contact_email || ""),
                twitterUrl: socialLinks.twitter || "",
                pinterestUrl: socialLinks.pinterest || "",
                facebookUrl: socialLinks.facebook || "",
                telegramUrl: socialLinks.telegram || "",
            });
        } catch (err) {
            console.error('Load settings error:', err);
            setConnectionStatus('error');
            setError("Lỗi kết nối database");
        }
        setLoading(false);
    };

    useEffect(() => {
        loadSettings();
    }, []);

    const handleSave = async () => {
        setSaving(true);
        setError("");
        setSaved(false);

        try {
            const success = await updateAllSiteSettings({
                site_name: {
                    value: settings.siteName,
                    description: "Website name"
                },
                site_description: {
                    value: settings.siteDescription,
                    description: "Site meta description"
                },
                contact_email: {
                    value: settings.contactEmail,
                    description: "Contact email"
                },
                social_links: {
                    value: {
                        twitter: settings.twitterUrl || undefined,
                        pinterest: settings.pinterestUrl || undefined,
                        facebook: settings.facebookUrl || undefined,
                        telegram: settings.telegramUrl || undefined,
                    },
                    description: "Social media links"
                },
            });

            if (success) {
                setSaved(true);
                setTimeout(() => setSaved(false), 3000);
            } else {
                setError("Lỗi lưu cài đặt! Kiểm tra quyền truy cập database.");
            }
        } catch (err) {
            console.error('Save error:', err);
            setError("Có lỗi xảy ra khi lưu!");
        }
        setSaving(false);
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
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-colors shadow-sm">
            <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center`}>
                    <Icon size={22} className={iconColor} />
                </div>
                <div>
                    <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                    <p className="text-gray-400 text-sm">{description}</p>
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
            <label className="block text-sm text-gray-600 mb-2 font-medium">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-500/10 transition-all"
                value={value}
                onChange={onChange}
            />
        </div>
    );

    if (loading) {
        return (
            <div className="flex items-center justify-center py-32">
                <Loader2 size={32} className="animate-spin text-orange-500" />
                <span className="ml-3 text-gray-500">Đang tải cài đặt...</span>
            </div>
        );
    }

    return (
        <div className="space-y-6 max-w-4xl">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                        <Settings className="text-orange-500" size={28} />
                        Cài đặt Website
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">Quản lý thông tin chung của website</p>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={loadSettings}
                        className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl transition-all shadow-sm"
                    >
                        <RefreshCw size={16} />
                        <span className="text-sm font-medium hidden sm:inline">Tải lại</span>
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all hover:shadow-lg hover:shadow-orange-500/25 disabled:opacity-50"
                    >
                        {saving ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
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
            </div>

            {/* Error Message */}
            {error && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                    <AlertCircle size={16} className="shrink-0" />
                    {error}
                </div>
            )}

            {/* Success Message */}
            {saved && (
                <div className="flex items-center gap-2 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-600 text-sm">
                    <CheckCircle size={16} className="shrink-0" />
                    Cài đặt đã được lưu thành công vào database!
                </div>
            )}

            {/* General Settings */}
            <SettingsCard
                icon={Globe}
                iconColor="text-orange-500"
                iconBg="bg-orange-50"
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
                        <label className="block text-sm text-gray-600 mb-2 font-medium">Mô tả website (SEO)</label>
                        <textarea
                            rows={3}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-500/10 transition-all resize-none"
                            value={settings.siteDescription}
                            onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                        />
                        <p className="text-gray-400 text-xs mt-1">{settings.siteDescription.length}/160 ký tự</p>
                    </div>
                </div>
            </SettingsCard>

            {/* Contact Settings */}
            <SettingsCard
                icon={Mail}
                iconColor="text-emerald-500"
                iconBg="bg-emerald-50"
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
                iconColor="text-purple-500"
                iconBg="bg-purple-50"
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
                iconColor="text-cyan-500"
                iconBg="bg-cyan-50"
                title="Kết nối Database"
                description="Trạng thái Supabase"
            >
                <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                        <div className={`w-3 h-3 rounded-full ${connectionStatus === 'connected' ? 'bg-emerald-500 animate-pulse' :
                                connectionStatus === 'error' ? 'bg-red-500' :
                                    'bg-gray-400 animate-pulse'
                            }`} />
                        <span className={`font-medium ${connectionStatus === 'connected' ? 'text-emerald-600' :
                                connectionStatus === 'error' ? 'text-red-500' :
                                    'text-gray-500'
                            }`}>
                            {connectionStatus === 'connected' ? 'Đã kết nối' :
                                connectionStatus === 'error' ? 'Lỗi kết nối' :
                                    'Đang kiểm tra...'}
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-gray-400 mb-1">Project URL</p>
                            <p className="text-gray-700 font-mono text-xs truncate">
                                {process.env.NEXT_PUBLIC_SUPABASE_URL ? '✓ Đã cấu hình' : '✗ Chưa cấu hình'}
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-400 mb-1">Status</p>
                            <span className={`inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium rounded-lg ${connectionStatus === 'connected'
                                    ? 'bg-emerald-50 text-emerald-600'
                                    : 'bg-red-50 text-red-500'
                                }`}>
                                {connectionStatus === 'connected' ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
                                {connectionStatus === 'connected' ? 'Active' : 'Error'}
                            </span>
                        </div>
                    </div>
                </div>
            </SettingsCard>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="/admin/seo-audit" className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-orange-300 hover:bg-orange-50/30 transition-all group shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                            <Shield size={20} className="text-amber-500" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-gray-900 font-medium group-hover:text-orange-600 transition-colors">SEO Audit</h3>
                            <p className="text-gray-400 text-xs">Kiểm tra SEO</p>
                        </div>
                        <ExternalLink size={16} className="text-gray-400 group-hover:text-orange-500 transition-colors" />
                    </div>
                </a>
                <a href="/admin/sitemap" className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-orange-300 hover:bg-orange-50/30 transition-all group shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center">
                            <Globe size={20} className="text-sky-500" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-gray-900 font-medium group-hover:text-orange-600 transition-colors">Sitemap</h3>
                            <p className="text-gray-400 text-xs">Quản lý sitemap</p>
                        </div>
                        <ExternalLink size={16} className="text-gray-400 group-hover:text-orange-500 transition-colors" />
                    </div>
                </a>
                <a href="/admin/analytics" className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-orange-300 hover:bg-orange-50/30 transition-all group shadow-sm">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center">
                            <Palette size={20} className="text-pink-500" />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-gray-900 font-medium group-hover:text-orange-600 transition-colors">Analytics</h3>
                            <p className="text-gray-400 text-xs">Thống kê</p>
                        </div>
                        <ExternalLink size={16} className="text-gray-400 group-hover:text-orange-500 transition-colors" />
                    </div>
                </a>
            </div>
        </div>
    );
}
