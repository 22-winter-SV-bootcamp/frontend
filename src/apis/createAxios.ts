import { ImportExport } from '@mui/icons-material';
import axios from 'axios';

const axiosCustom = axios.create({
  // baseURL: 'https://api.simpsonfilm.com',
  baseURL: 'http://localhost',
});

export default axiosCustom;
