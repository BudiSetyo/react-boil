import axios from "axios";
import { message } from "antd";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
    "Content-Type": "application/json",
  },
  timeout: 50000, // 50 seconds
});

axios.interceptors.request.use((config) => {
  const newConfig = {
    ...config,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  return newConfig;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response.status === 401 &&
      error.response?.data.message !== "Unauthorized"
    ) {
      localStorage.clear();

      message.warning("Your session is expired please relogin!!");

      setTimeout(() => (window.location.href = "/auth"), 1000);
    } else {
      message.error(error.response?.data.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
