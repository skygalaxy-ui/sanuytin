"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2, ShieldAlert } from "lucide-react";

interface AdminGuardProps {
    children: React.ReactNode;
}

export default function AdminGuard({ children }: AdminGuardProps) {
    const { user, loading, isAdmin } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const isLoginPage = pathname === "/admin/login" || pathname === "/admin/login/";

    useEffect(() => {
        // Skip guard for login page
        if (isLoginPage) {
            return;
        }

        // If not loading and no user, redirect to login
        if (!loading && !user) {
            router.push("/admin/login");
        }
    }, [user, loading, router, pathname]);

    // Show loading while checking auth
    if (loading) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
                    <p className="text-slate-400">Đang xác thực...</p>
                </div>
            </div>
        );
    }

    // Login page - no guard needed
    if (isLoginPage) {
        return <>{children}</>;
    }

    // Not authenticated - show nothing (will redirect)
    if (!user) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
                    <p className="text-slate-400">Đang chuyển hướng...</p>
                </div>
            </div>
        );
    }

    // Check if user is admin
    if (!isAdmin) {
        return (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
                <div className="bg-slate-800/50 border border-red-500/30 rounded-2xl p-8 max-w-md text-center">
                    <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldAlert className="w-8 h-8 text-red-500" />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-2">Truy cập bị từ chối</h2>
                    <p className="text-slate-400 mb-6">
                        Email <span className="text-white font-medium">{user.email}</span> không có quyền truy cập Admin.
                    </p>
                    <div className="flex gap-3 justify-center">
                        <button
                            onClick={() => router.push("/")}
                            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                        >
                            Về trang chủ
                        </button>
                        <button
                            onClick={() => {
                                // Sign out and redirect to login
                                window.location.href = "/admin/login";
                            }}
                            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                        >
                            Đăng nhập lại
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Authenticated and is admin - show content
    return <>{children}</>;
}
