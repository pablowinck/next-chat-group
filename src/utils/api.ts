import axios from 'axios';

const api = axios.create({
   baseURL: process.env.API || 'http://localhost:3000',
   headers: {
      'Content-Type': 'application/json'
   }
});

export default api;
