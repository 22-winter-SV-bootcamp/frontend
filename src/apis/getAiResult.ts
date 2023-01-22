import axiosCustom from './createAxios';

type AiResultType = {
  status: string;
  result?: [] | string;
};

type TaskResultType = {
  top: string;
  top_color: string;
  bottom: string;
  bottom_color: string;
};

export default async function getAiResult(
  task_id: string,
): Promise<AiResultType> {
  return await axiosCustom
    .get(`/api/v1/images/tasks?task_id=${task_id}`)
    .then((res) => {
      return res.data;
    });
}
