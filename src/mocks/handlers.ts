import { rest } from 'msw';

const base = 'http://localhost';

const dummy =
  'https://simsontest.s3.ap-northeast-2.amazonaws.com/83b17690-8e22-471b-ad3c-c8ffba67066d.jpg';

const dummyTaskId = { task_id: '1' };
const recentImgs = [
  {
    id: 1,
    link: '/assets/test.png',
  },
  {
    id: 2,
    link: 'https://images.justwatch.com/poster/263557090/s718/simseun-gajog.%7Bformat%7D',
  },
  {
    id: 3,
    link: 'https://img.insight.co.kr/static/2021/10/14/700/img_20211014164002_12fnlr61.webp',
  },
  {
    id: 4,
    link: 'https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2021%2F07%2Fdisney-plus-loki-the-simpsons-crossover-short-tw.jpg?w=960&cbr=1&q=90&fit=max',
  },
  {
    id: 5,
    link: 'https://www.themoviedb.org/t/p/original/ARIEA8fMTk8HLy8AyLbKyUjsqC.jpg',
  },
];

const recentImgs1 = [
  {
    id: 1,
    link: '/assets/test.png',
  },
  {
    id: 2,
    link: '/assets/test.png',
  },
  {
    id: 3,
    link: '/assets/test.png',
  },
  {
    id: 4,
    link: '/assets/test.png',
  },
];

export const handlers = [
  rest.post(base + '/api/v1/styles', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        link: 'https://simsontest.s3.ap-northeast-2.amazonaws.com/83b17690-8e22-471b-ad3c-c8ffba67066d.jpg',
      }),
    );
  }),

  rest.get(base + '/api/v1/styles', (req, res, ctx) => {
    let male = {
      gender: 'male',
      top: 'shirts',
      top_color: 'white',
      bottom: 'slacks',
      bottom_color: 'black',
      count: '333',
    };

    let female = {
      gender: 'female',
      top: 'shirts',
      top_color: 'red',
      bottom: 'skirt',
      bottom_color: 'blue',
      count: '333',
    };

    let gender = req.url.searchParams.get('gender') === 'male' ? male : female;

    return res(ctx.status(200), ctx.json(gender));
  }),

  // ai task id 반환 api
  rest.post(base + '/api/v1/images', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyTaskId));
  }),

  rest.get(base + `/api/v1/images`, (req, res, ctx) => {
    let page: any = req.url.searchParams.get('page');

    if (page > 3) return res(ctx.status(404));

    return res(ctx.status(200), ctx.json(recentImgs1));
  }),

  //AI task 완료되었는지 반환
  rest.get(base + '/api/v1/images/tasks/1', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 'done',
        result: {
          top: 't-shirts',
          bottom: 'slacks',
        },
      }),
    );
  }),
];
