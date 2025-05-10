import axios from 'axios';

export interface Credentials {
  username: string;
  password: string;
}

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust based on your backend
});

export default API;
