import axios from "axios";

const api = axios.create({
  baseURL: "https://vgu-ieee-student-branch.onrender.com/api",
  withCredentials: true,
});

export default api;
