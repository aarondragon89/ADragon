'use client';

import { useRouter } from 'next/navigation';
import { Providers } from "@/app/providers";
import { Header, Sidebar, Footer } from "@/components/admin/layout";
import { useState, useEffect } from "react";
import { registerUnauthorizedHandler } from "@adragon-web/api";
import { clearAuthSession } from '@/lib/api/authApi';

interface AdminLayoutProps {
    children: React.ReactNode;
    title: string;
}

export default function AdminLayout({
    children,
    title,
}: AdminLayoutProps) {
    const router = useRouter();

    useEffect(() => {
        registerUnauthorizedHandler(() => {
            clearAuthSession();
            router.push('/admin/auth/login');
        });
    }, []);

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

            {/* Main area */}
            <div
                className={`flex-1 flex flex-col min-h-screen transition-all duration-300 ${collapsed ? "ml-16" : "ml-64"}`}
            >
                {/* Header */}
                <Header
                    sidebarCollapsed={collapsed}
                    onSidebarToggle={() => setCollapsed(!collapsed)}
                    title={title}
                />

                {/* Page content */}
                <main className="flex-1 mt-16 p-6 overflow-auto">
                    <Providers>
                        {children}
                    </Providers>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}
