"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith("/admin");

    if (isAdminRoute) {
        // Admin pages: no header/footer
        return <>{children}</>;
    }

    // Public pages: include header/footer
    return (
        <>
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </>
    );
}
