import axios from 'axios';

import { getToken } from '../utils/token';

const api = axios.create({
  //baseURL: "http://localhost:3333",
  baseURL: "https://f5bd-168-228-86-127.sa.ngrok.io",
});

api.interceptors.request.use(
  (config) => {
    return getToken()
      .then((token) => {
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return Promise.resolve(config);
      })
      .catch((error) => {
        return Promise.resolve(config);
      });
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
