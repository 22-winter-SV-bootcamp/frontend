import { ImportExport } from '@mui/icons-material';
import axios from 'axios';

const axiosCustom = axios.create({
  baseURL: 'http://localhost',
});

export default axiosCustom;
