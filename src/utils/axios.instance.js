import axios from "axios";

const axiosInstance = axios.create({
  // Base URL for API requests
  baseURL: "https://api.olakses.com/v1",

  // Custom headers
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
    "Content-Type": "application/json",
  },

  // Timeout settings
  timeout: 50000, // 50 seconds

  // Interceptors for logging and error handling
  interceptors: [
    {
      request: (config) => {
        console.log(`Request sent: ${config.method} ${config.url}`);
        return config;
      },
      response: (response) => {
        console.log(
          `Response received: ${response.status} ${response.statusText}`
        );
        return response;
      },
      error: (error) => {
        console.error(`Error occurred: ${error.message}`);
        return Promise.reject(error);
      },
    },
  ],
});

export default axiosInstance;
