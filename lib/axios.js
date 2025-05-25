import axios from "axios";

const api = axios.create({
  baseURL: "https://nihonkai-backend.onrender.com/api/querys",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
