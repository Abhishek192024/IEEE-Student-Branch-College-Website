import axios from "axios";

const api = axios.create({
  baseURL: "https://vguieee-student-branch-college-1.onrender.com/api", // ✅ baseURL set
});

export default api;
