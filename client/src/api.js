import axios from "axios";

// 🔥 Ye line sabse zaroori hai images aur pdf dikhane ke liye
export const BASE_URL = "http://localhost:5000";

const api = axios.create({
  baseURL: `${BASE_URL}/api`, // ✅ baseURL set
  withCredentials: true, // 🔥 Ye admin authentication (login) ke liye zaroori hota hai
});

export default api;