"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useApi from "@/hooks/useApi";
import toast from "react-hot-toast";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const api = useApi();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    api.auth
      .getProfile()
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        toast.error("Session expired. Please log in again.");
        router.push("/login");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!user) return null;

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
