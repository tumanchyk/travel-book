import axios from "axios";
import { store } from "../store/store";

const axiosBaseUrl = process.env.REACT_APP_BACKEND_URL;
axios.defaults.baseURL = axiosBaseUrl; 

axios.interceptors.request.use(
  function (config) {
    const token = store.getState().auth.token;
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
