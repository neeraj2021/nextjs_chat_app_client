import axios from "axios";

const baseURL = "http://localhost:3001/";
const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
