import axios from 'axios';

const api = axios.create({
  baseURL: "https://97a4-168-228-86-127.sa.ngrok.io",
});

export default api;
