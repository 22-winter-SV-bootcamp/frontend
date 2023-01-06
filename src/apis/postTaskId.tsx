import axios from 'axios';

export const postTaskId = async (file: FormData) => {
  return await axios.post('/api/v1/tasks', file);
};
