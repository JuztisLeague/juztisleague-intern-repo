import axios from "axios";
import axiosRetry from "axios-retry";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
  headers: {
    Accept: "*/*",
  },
});

// Retry failed requests up to 3 times
axiosRetry(axiosInstance, {
  retries: 3,
  retryDelay: (retryCount) => {
    console.log(`Retrying request... attempt ${retryCount}`);
    return retryCount * 1000;
  },
  retryCondition: (error) => {
    return axiosRetry.isNetworkOrIdempotentRequestError(error);
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("Request headers:", config.headers);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`Response received from: ${response.config.url}`);
    return response;
  },
  (error) => {
    if (error.response) {
      console.log(`Server error: ${error.response.status}`);
    } else if (error.request) {
      console.log("Network error - no response received");
    } else {
      console.log("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;