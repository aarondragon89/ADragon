"use client";

import { usePathname, useRouter } from "next/navigation";
import { Search, Bell, User, Settings, LogOut, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const breadcrumbMap: Record<string, string> = {
    "/admin": "Dashboard",
    "/admin/analytics": "Analytics",
    "/admin/users": "Users",
    "/admin/notifications": "Notifications",
    "/admin/settings": "Settings",
};

export function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const pageTitle = breadcrumbMap[pathname] ?? "Page";

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/admin/auth/login');
    };

    return (
        <header className="h-14 flex items-center gap-4 px-6 bg-white border-b border-gray-100 shrink-0">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 flex-1 text-sm text-gray-400">
                <span>Home</span>
                <span>/</span>
                <span className="text-gray-900 font-medium">{pageTitle}</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-1">
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition-colors">
                    <Search className="w-4 h-4" />
                </button>

                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-700 transition-colors relative">
                    <Bell className="w-4 h-4" />
                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
                </button>

                {/* Profile dropdown */}
                <div className="relative ml-1" ref={dropdownRef}>
                    <button
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        className="flex items-center gap-1.5 pl-1 pr-2 py-1 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center text-xs font-medium text-amber-600">
                            AT
                        </div>
                        <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {dropdownOpen && (
                        <div className="absolute right-0 top-full mt-1.5 w-52 bg-white rounded-xl border border-gray-100 shadow-lg shadow-gray-100/60 py-1 z-50">
                            {/* User info */}
                            <div className="px-3 py-2.5 border-b border-gray-100">
                                <p className="text-sm font-medium text-gray-900">Aaron Dragon</p>
                                <p className="text-xs text-gray-400 mt-0.5">aaron@example.com</p>
                            </div>

                            {/* Menu items */}
                            <div className="py-1">
                                <button
                                    onClick={() => { router.push("/admin/profile"); setDropdownOpen(false); }}
                                    className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                >
                                    <User className="w-4 h-4" />
                                    Profile
                                </button>
                                <button
                                    onClick={() => { router.push("/admin/settings"); setDropdownOpen(false); }}
                                    className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                >
                                    <Settings className="w-4 h-4" />
                                    Setting
                                </button>
                            </div>

                            {/* Logout */}
                            <div className="border-t border-gray-100 py-1">
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Log out
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
