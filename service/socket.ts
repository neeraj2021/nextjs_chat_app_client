import { io } from "socket.io-client";

// const SOCKET_URL = "http://localhost:3001/";
const SOCKET_URL = 'https://nestjs-chat-server.cyclic.app/';

const socket = io(SOCKET_URL);
export default socket;
