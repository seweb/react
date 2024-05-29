import axios from 'axios';
import { toast } from 'react-toastify';
import { getItem, setItem, formatServerErrors } from '@/utils';
import { setIsAuthorized } from '@/store/auth.store';

export const Api = axios.create({
  baseURL: 'https://api.realworld.io/api',
  //baseURL: 'https://real-world-server.vercel.app/api/',
});

Api.interceptors.response.use(
  (response) => {
    const token = response.data?.user?.token;
    if (token) {
      setItem('token', token);
      setIsAuthorized(true);
    }
    return response.data;
  },
  (error) => {
    if (error.response.status === 500) {
      toast('Something went wrong!', { type: 'error' });
      return Promise.reject([error.message]);
    } else {
      return Promise.reject(formatServerErrors(error.response.data));
    }
  },
);

Api.interceptors.request.use((config) => {
  const token = getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
