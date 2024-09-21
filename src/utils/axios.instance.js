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

// Add a response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(
  (response) => {
    // Log successful response
    // console.log(`Response received: ${response.status} ${response.statusText}`);
    return response;
  },
  (error) => {
    // Check if the error response is a 401 Unauthorized
    if (error.response && error.response.status === 401) {
      // console.error("401 Unauthorized. Redirecting to login.");
      message.warning("401 Unauthorized. Redirecting to login.");

      // Remove token and state from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("state");

      // Redirect to the auth page (assuming you're using react-router-dom)
      window.location.href = "/auth"; // Navigate to login page
    } else {
      // Log other errors
      // console.error(`Error occurred: ${error.message}`);
      message.error(error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
