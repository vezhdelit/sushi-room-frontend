import axios from 'axios';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;
console.log(SERVER_URL);

const instance = axios.create({
  baseURL: 'https://sushi-room-backend.herokuapp.com/',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');

  return config;
});

export default instance;
