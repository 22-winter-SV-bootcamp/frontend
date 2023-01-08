import axios from 'axios';

export default async function getRecentImgs(page: number) {
  return await axios.get(`api/v1/images`, { params: { page: page } });
}
