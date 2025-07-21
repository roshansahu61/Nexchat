import axios from "axios";

// Use VITE_API_URL from environment variables in production
const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
