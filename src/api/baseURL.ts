import axios from "axios";

const axiosBaseUrl = process.env.REACT_APP_BACKEND_URL;
axios.defaults.baseURL = axiosBaseUrl; 

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;
