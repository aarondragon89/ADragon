"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BarChart2,
  Users,
  Bell,
  Settings,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navGroups = [
  {
    label: "Overview",
    items: [
      { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
      { href: "/admin/analytics", icon: BarChart2, label: "Analytics" },
    ],
  },
  {
    label: "Management",
    items: [
      { href: "/admin/users", icon: Users, label: "Users" },
      { href: "/admin/notifications", icon: Bell, label: "Notifications", badge: 3 },
    ],
  },
  {
    label: "System",
    items: [
      { href: "/admin/settings", icon: Settings, label: "Settings" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-55 flex flex-col bg-white border-r border-gray-100 shrink-0">
      {/* Logo */}
      <div className="h-14 flex items-center gap-2.5 px-4 border-b border-gray-100">
        <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
          <Zap className="w-4 h-4 text-blue-600" />
        </div>
        <span className="text-sm font-medium text-gray-900">AdminPanel</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-2 px-2">
        {navGroups.map((group) => (
          <div key={group.label} className="mb-2">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 px-2 py-2">
              {group.label}
            </p>
            {group.items.map((item) => {
              const active =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm mb-0.5 transition-colors",
                    active
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="text-[11px] font-medium bg-red-50 text-red-500 rounded-full px-1.5 py-0.5">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* User */}
      <div className="flex items-center gap-2.5 px-3 py-3 border-t border-gray-100">
        <div className="w-7 h-7 rounded-full bg-amber-50 flex items-center justify-center text-xs font-medium text-amber-600 shrink-0">
          AT
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">Aaron Dragon</p>
          <p className="text-xs text-gray-400">Administrator</p>
        </div>
      </div>
    </aside>
  );
}
