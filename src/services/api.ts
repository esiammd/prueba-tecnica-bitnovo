import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'X-Device-Id': `${process.env.API_KEY}`,
  },
});

export default api;
