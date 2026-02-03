"use client";

import { usePathname } from "next/navigation";
import { AuthProvider } from "@/contexts/AuthContext";
import AdminGuard from "@/components/admin/AdminGuard";
import AdminLayoutComponent from "@/components/admin/AdminLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isLoginPage = pathname === "/admin/login" || pathname === "/admin/login/";

    // Login page - only wrap with AuthProvider, no layout
    if (isLoginPage) {
        return (
            <AuthProvider>
                {children}
            </AuthProvider>
        );
    }

    // Other admin pages - full auth guard and layout
    return (
        <AuthProvider>
            <AdminGuard>
                <AdminLayoutComponent>{children}</AdminLayoutComponent>
            </AdminGuard>
        </AuthProvider>
    );
}
