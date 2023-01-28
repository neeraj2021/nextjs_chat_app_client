import axios from "axios";

// const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
const baseURL = 'https://nestjs-chat-server.cyclic.app/'
const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
