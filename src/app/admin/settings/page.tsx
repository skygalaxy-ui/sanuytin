"use client";

import { Settings, Save, Globe, Mail, Share2 } from "lucide-react";
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

    const handleSave = () => {
        // TODO: Save to Supabase
        alert("Đã lưu cài đặt! (Demo mode - chưa kết nối Supabase)");
    };

    return (
        <div className="space-y-6 max-w-3xl">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-white">Cài đặt Website</h1>
                <p className="text-slate-400 text-sm mt-1">Quản lý thông tin chung của website</p>
            </div>

            {/* General Settings */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Globe size={20} className="text-primary" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white">Thông tin chung</h2>
                        <p className="text-slate-500 text-sm">Cài đặt cơ bản của website</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Tên website</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary"
                            value={settings.siteName}
                            onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Mô tả website (SEO)</label>
                        <textarea
                            rows={3}
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary resize-none"
                            value={settings.siteDescription}
                            onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            {/* Contact Settings */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <Mail size={20} className="text-green-500" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white">Thông tin liên hệ</h2>
                        <p className="text-slate-500 text-sm">Email và thông tin liên lạc</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Email liên hệ</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary"
                            value={settings.contactEmail}
                            onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            {/* Social Media */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <Share2 size={20} className="text-purple-500" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white">Mạng xã hội</h2>
                        <p className="text-slate-500 text-sm">Liên kết đến các trang social</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Twitter / X</label>
                        <input
                            type="url"
                            placeholder="https://x.com/..."
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary"
                            value={settings.twitterUrl}
                            onChange={(e) => setSettings({ ...settings, twitterUrl: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Pinterest</label>
                        <input
                            type="url"
                            placeholder="https://pinterest.com/..."
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary"
                            value={settings.pinterestUrl}
                            onChange={(e) => setSettings({ ...settings, pinterestUrl: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Facebook</label>
                        <input
                            type="url"
                            placeholder="https://facebook.com/..."
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary"
                            value={settings.facebookUrl}
                            onChange={(e) => setSettings({ ...settings, facebookUrl: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-slate-400 mb-1">Telegram</label>
                        <input
                            type="url"
                            placeholder="https://t.me/..."
                            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white outline-none focus:border-primary"
                            value={settings.telegramUrl}
                            onChange={(e) => setSettings({ ...settings, telegramUrl: e.target.value })}
                        />
                    </div>
                </div>
            </div>

            {/* Supabase Connection */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                        <Settings size={20} className="text-emerald-500" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white">Kết nối Supabase</h2>
                        <p className="text-slate-500 text-sm">Cấu hình database</p>
                    </div>
                </div>

                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                        <span className="text-yellow-500 font-medium">Chưa kết nối</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-4">
                        Để kích hoạt CMS, thêm các biến môi trường sau vào file <code className="px-1 py-0.5 bg-slate-700 rounded">.env.local</code>:
                    </p>
                    <pre className="p-3 bg-slate-950 rounded text-sm text-slate-300 overflow-x-auto">
                        {`NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key`}
                    </pre>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors"
                >
                    <Save size={18} />
                    Lưu cài đặt
                </button>
            </div>
        </div>
    );
}
