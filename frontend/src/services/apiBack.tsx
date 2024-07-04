import axios from "axios";

const url = import.meta.env.VITE_URL_DEV;

const apiBack = axios.create({
  baseURL: url,
  headers: { Accept: "application/json" },
});

apiBack.defaults.headers.common["Content-Type"] = "application/json";

const token = localStorage.getItem("token");

if (token) {
  apiBack.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default apiBack;
