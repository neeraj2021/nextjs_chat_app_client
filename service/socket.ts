import { io } from "socket.io-client";

// const SOCKET_URL = "http://localhost:3001/";
const SOCKET_URL = String(process.env.NEXT_PUBLIC_API_BASE_URL);
console.log("Socket url = ", SOCKET_URL);
const socket = io(SOCKET_URL);
export default socket;
