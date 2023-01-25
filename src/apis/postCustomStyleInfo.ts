import axiosCustom from './createAxios';

export default async function postCustomStyleInfo(formData: FormData) {
  return await axiosCustom
    .post('/api/v1/styles', formData)
    .then((res) => res.data);
}
