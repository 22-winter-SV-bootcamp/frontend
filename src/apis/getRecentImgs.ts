import axiosCustom from './createAxios';

type CardsType = {
  id: number;
  link: string;
};

export default async function getRecentImgs(
  page: number,
): Promise<CardsType[]> {
  return await axiosCustom.get(`/api/v1/images?page=${page}`).then((res) => {
    return res.data;
  });
}
