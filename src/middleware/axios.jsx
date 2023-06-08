import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const instance = axios.create({
  baseURL: `${SERVER_URL}`,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');

  return config;
});

export default instance;
