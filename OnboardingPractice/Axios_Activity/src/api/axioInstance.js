import axios from "axios";


const axiosInstance = axios.create({
 baseURL: "https://jsonplaceholder.typicode.com",
 timeout: 5000,
 headers: {
    Accept:"*/*",
 }
});

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

export function createCancelableRequest() {
    const controller = new AbortController();

    return {
        controller,
        signal: controller.signal,
    };
}
export default axiosInstance;