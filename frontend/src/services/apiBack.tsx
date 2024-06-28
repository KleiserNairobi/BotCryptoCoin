import axios from "axios";

const url = process.env.REACT_APP_BACK_URL;

const apiBack = axios.create({
  baseURL: url,
  headers: { Accept: "application/json" },
});

apiBack.defaults.headers.common["Content-Type"] = "application/json";

export default apiBack;
