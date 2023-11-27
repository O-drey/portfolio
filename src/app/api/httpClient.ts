import axios from "axios";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
  timeout: 2000,
  withCredentials: true,
  env: import.meta.env.VITE_BASE_URL,
});

httpClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }
  return config;
});
