import axios from "axios";

const api = axios.create({
  baseURL: "/api", // ✅ Render deploy + same domain
  withCredentials: true,
});

export default api;
