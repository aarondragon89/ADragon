'use client';

import { Header, Sidebar, Footer } from "@/components/admin/layout";
import { ThemeProvider } from "@adragon-web/context";
import { useState } from "react";

interface AdminLayoutProps {
    children: React.ReactNode;
    title: string;
}

export default function AdminLayout({
    children,
    title,
}: AdminLayoutProps) {
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
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
}
