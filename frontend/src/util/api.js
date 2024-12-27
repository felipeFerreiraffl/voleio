const { default: axios } = require("axios");

const api = axios.create({
  baseURL: "http://192.168.2.17:8080",
});

export default api;
