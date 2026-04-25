"use client";

import { usePathname } from "next/navigation";
import { AuthProvider } from "@/contexts/AuthContext";
import AdminGuard from "@/components/admin/AdminGuard";
import Sidebar from "@/components/admin/Sidebar";
import { MessageCircle } from "lucide-react";
import Script from "next/script";

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/admin/login" || pathname === "/admin/login/";
    const isThemeEditor = pathname?.includes('/admin/theme-editor');

    // Login page - only wrap with AuthProvider, no layout
    if (isLoginPage) {
        return (
            <AuthProvider>
                {children}
            </AuthProvider>
        );
    }

    // Other admin pages - full auth guard and layout matching SKTQ
    return (
        <AuthProvider>
            <AdminGuard>
                <Script src="https://cdn.tailwindcss.com?plugins=typography,forms" strategy="beforeInteractive" />
                <div className="min-h-screen bg-gray-50/80 flex flex-col font-sans">
                    {!isThemeEditor && <Sidebar />}
                    <main className={`transition-all duration-300 flex-1 flex flex-col ${!isThemeEditor ? 'ml-[260px]' : ''}`}>
                        <div className={`${!isThemeEditor ? 'max-w-[1400px] mx-auto p-6 lg:p-8' : ''} w-full h-full flex-1 flex flex-col`}>
                            {children}
                        </div>
                    </main>

                    {/* Support Button (Optional) */}
                    <a
                        href="https://t.me/viralworks"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fixed bottom-5 right-5 z-50 group"
                        title="Hỗ trợ kỹ thuật"
                    >
                        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full pl-3 pr-3 py-2 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 opacity-60 hover:opacity-100">
                            <MessageCircle size={14} className="text-gray-400 group-hover:text-blue-500 transition-colors shrink-0" />
                            <span className="text-[11px] text-gray-400 group-hover:text-gray-600 font-medium transition-colors hidden sm:inline">
                                Hỗ trợ
                            </span>
                        </div>
                    </a>
                </div>
            </AdminGuard>
        </AuthProvider>
    );
}
