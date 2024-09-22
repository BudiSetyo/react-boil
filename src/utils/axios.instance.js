import axios from "axios";
import { message } from "antd";

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
  timeout: 50000, // 50 seconds
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      message.warning("401 Unauthorized. Redirecting to login.");

      localStorage.removeItem("token");
      localStorage.removeItem("state");

      window.location.href = "/auth";
    } else {
      message.error(error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
