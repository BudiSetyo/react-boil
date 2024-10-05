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

axios.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.status === 401) {
      message.warning("Your session is expired please relogin!!");

      localStorage.clear();

      setTimeout(() => {
        window.location.href = "/auth";
      }, 1000);
    }

    message.error(error.response?.data.message);

    return Promise.reject(error);
  }
);

export default axiosInstance;
