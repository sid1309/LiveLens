import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust the base URL as needed
});

//ading jwt to each req
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;