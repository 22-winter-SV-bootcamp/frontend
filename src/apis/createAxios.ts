import axios from 'axios';

const axiosCustom = axios.create({
  baseURL: 'http://localhost:8080',
  // baseURL: '',
});

export default axiosCustom;
