import { ImportExport } from '@mui/icons-material';
import axios from 'axios';

const axiosCustom = axios.create({
  baseURL: import.meta.env.DEV
    ? 'http://localhost'
    : 'https://api.simpsonfilm.com',
});

export default axiosCustom;
