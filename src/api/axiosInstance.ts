import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

if (!baseURL) {
  throw new Error(
    "VITE_BASE_URL is not configured. Add it to the client .env file.",
  );
}

const axiosInstance = axios.create({
  baseURL,
});

// Automatically attach JWT to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default axiosInstance;