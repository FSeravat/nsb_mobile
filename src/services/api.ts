import axios from 'axios';

const api = axios.create({
  //baseURL: "http://localhost:3333",
  baseURL: "https://27d5-200-143-115-26.ngrok.io",
});

export default api;
