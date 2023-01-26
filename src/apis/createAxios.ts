import axios from 'axios';

const axiosCustom = axios.create({
  // baseURL: 'http://localhost:8080',
  // baseURL: '',
  baseURL: 'http://localhost:8080',
});

export default axiosCustom;
