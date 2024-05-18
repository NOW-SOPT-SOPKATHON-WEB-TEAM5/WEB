import axios from 'axios';

const baseURL = import.meta.env.VITE_DEV_BASE_URL;

export const client = axios.create({
  baseURL: `${baseURL}`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});
