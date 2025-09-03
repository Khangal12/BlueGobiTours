"use client";

import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-b px-6 py-3 bg-white">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
