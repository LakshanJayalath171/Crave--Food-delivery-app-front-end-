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

export default axiosInstance;