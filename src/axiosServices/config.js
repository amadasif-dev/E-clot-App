// axiosConfig.js

// axiosConfig.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dummyjson.com/products/category',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
instance.interceptors.request.use(
  config => {
    // Modify config, add headers, token, etc.
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Response Interceptor
instance.interceptors.response.use(
  response => {
    // Handle response data
    return response;
  },
  error => {
    // Handle response errors
    return Promise.reject(error);
  },
);

export default instance;
