'use client';

import { Sidebar } from "@/components/admin/layout/Sidebar";
import { Header } from "@/components/admin/layout/Header";
import { Footer } from "@/components/admin/layout/Footer";
import { ThemeProvider } from "@adragon-web/context";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1 min-w-0">
                <Header />
                <main className="flex-1 overflow-y-auto p-6">
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </main>
                <Footer />
            </div>
        </div>
    );
}
