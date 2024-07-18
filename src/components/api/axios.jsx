import axios from "axios";
const token = localStorage.getItem("token");
console.log(token);
export default axios.create({
  baseURL: "https://artisanapi-48408c1be722.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
    withCredentials: false,
    Authorization: `Token ${token}`,
  },
});
/* 
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log(token);

  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  return config;
});
 */
