import axios from "axios";

export default axios.create({
  baseURL: "https://artisanapi-48408c1be722.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    withCredentials: false,
  },
});

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log(token);

  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
});
