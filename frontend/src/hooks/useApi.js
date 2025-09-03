"use client";

import axios from "axios";
import toast from "react-hot-toast";

function useApi() {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_ADMIN_API,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Response interceptor
  const responseInterceptor = (error) => {
    if (error.response) {
      const status = error.response.status;
      const msg =
        error.response.data?.error ||
        error.response.data?.message ||
        "An error occurred";

      if (status === 403) {
        localStorage.removeItem("token");
        toast.error("Session expired. Please log in again.");
        window.location.href = "/login";
      } else if (status === 400) {
        toast.error(msg);
      } else if (status === 401) {
        toast.error("Unauthorized. Please log in.");
      } else {
        toast.error(msg);
      }
    } else {
      toast.error("Network error. Please try again.");
    }
    return Promise.reject(error);
  };

  instance.interceptors.response.use((res) => res.data, responseInterceptor);

  // Request interceptor to add token
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }
    return config;
  });

  // Example endpoints
  const auth = {
    login: (data) => instance.post("/login/", data),
    getProfile: () => instance.get("/token/"),
  };

  return { instance, auth };
}

export default useApi;
