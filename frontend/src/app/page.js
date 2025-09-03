"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function HomePage() {
  const router = useRouter();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.push("/dashboard"); // logged in
      } else {
        router.push("/login"); // not logged in
      }
    }
  }, [loading, user, router]);

  return <p>Redirecting...</p>;
}
