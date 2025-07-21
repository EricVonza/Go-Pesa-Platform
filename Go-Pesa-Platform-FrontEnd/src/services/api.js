// filepath: Go-Pesa-Platform-FrontEnd/src/services/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'https://go-pesa-platform-backend.onrender.com:5001/api/auth' });

export const signup = (userData) => API.post('/signup', userData);
export const login = (userData) => API.post('/login', userData);