"use client";

import Link from "next/link";
import { Home, Users, Settings } from "lucide-react";

const menu = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <h2 className="text-xl font-bold mb-6">Admin</h2>
      <nav className="space-y-2">
        {menu.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100"
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
