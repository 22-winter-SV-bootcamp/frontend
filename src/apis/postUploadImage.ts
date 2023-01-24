import axiosCustom from './createAxios';

export const postUploadImage = async (file: FormData) => {
  return await axiosCustom.post('/api/v1/images', file).then((res) => res.data);
};
