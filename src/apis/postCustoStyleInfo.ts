import axiosCustom from './createAxios';

export default function postCustomStyleInfo(formData: FormData) {
  return axiosCustom.post('/api/v1/styles', formData).then((res) => res.data);
}
