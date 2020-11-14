import axios from 'axios';
import { IP } from '../constants/ip';

const baseURL = IP;

const api = axios.create({
  baseURL,
});

export default api;