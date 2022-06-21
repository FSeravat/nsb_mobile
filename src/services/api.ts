import axios from 'axios';

import { getToken } from '../utils/token';

const api = axios.create({
  baseURL: "https://8799-168-228-86-127.sa.ngrok.io",
});

api.interceptors.request.use(
  (config) => {
    return getToken()
      .then((token) => {
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
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
