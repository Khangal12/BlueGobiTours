"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useApi from "@/hooks/useApi";
import toast from "react-hot-toast";

export function useAuth() {
  const router = useRouter();
  const api = useApi();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      // Not logged in
      router.push("/login");
      setLoading(false);
      return;
    }

    // Optionally, verify token with backend
    api.auth
      .getProfile()
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
        toast.error("Session expired. Please log in again.");
        router.push("/login");
      })
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
}
