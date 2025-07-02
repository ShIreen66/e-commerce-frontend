import axios from "axios";

const instance = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,  // ✅ Uncomment this if you later want to use environment variables
  baseURL: "http://localhost:3000/api",      // ✅ Right now this matches your Node.js backend
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Automatically attach Bearer Token for protected routes
instance.interceptors.request.use((config) => {
  const user = localStorage.getItem("user");
  if (user) {
    const token = JSON.parse(user).token;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
