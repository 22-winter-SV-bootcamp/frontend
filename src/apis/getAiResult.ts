<<<<<<< HEAD
import axios from 'axios';

type AiResultType = {
  task_status: string;
  task_result: [] | string;
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
  return await axios.get(`api/v1/images/task/${task_id}`).then((res) => {
    console.log('getAiResult axios');
    console.log(res.data);
    return res.data;
  });
}
=======
import axios from 'axios';

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
  return await axios.get(`api/v1/images/task/${task_id}`).then((res) => {
    console.log('getAiResult axios');
    console.log(res.data);
    return res.data;
  });
}
>>>>>>> e3403ce9cef98f556be1c94cb0800098dd6ea5fb
