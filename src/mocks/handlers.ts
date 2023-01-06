import { rest } from 'msw';

const dummy = '테스트입니다.';

const dummyTaskId = { task_id: '1' };

export const handlers = [
  // 테스트 mock api
  rest.get('api/v1/test', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummy));
  }),

  // ai task id 반환 api
  rest.post('api/v1/tasks', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyTaskId));
  }),
];
