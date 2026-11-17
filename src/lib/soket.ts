import { io } from 'socket.io-client';

const SOCKET_URL = import.meta.env.VITE_BASE_URL;

export const socket = io(SOCKET_URL, {
  autoConnect: false,

  transports: ['websocket'],

  auth: (callback) => {
    callback({
      token: localStorage.getItem('token'),
    });
  },

});

socket.on("connect", () => {
  console.log("🟢 Customer Socket Connected:", socket.id);
});

socket.on("disconnect", (reason) => {
  console.log("🔴 Customer Socket Disconnected:", reason);
});

socket.on("connect_error", (error) => {
  console.error("❌ Socket Connection Error:", error.message);
});