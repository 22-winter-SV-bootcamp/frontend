import axiosCustom from './createAxios';

export const getBestStyle = async (gender: string) => {
  return await axiosCustom
    .get(`/api/v1/styles?gender=${gender}`)
    .then((res) => {
      console.log('show', res.data);
      return res.data;
    });
};
