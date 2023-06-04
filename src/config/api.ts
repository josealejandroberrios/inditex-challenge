import { create } from 'apisauce';

export const BASE_URL = 'https://itunes.apple.com';

const API = create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default API;
