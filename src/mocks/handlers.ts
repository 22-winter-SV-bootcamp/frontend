import { rest } from 'msw';

const dummy = '테스트입니다.';

const recentImgs = [
  {
    id: 1,
    link: 'https://w.namu.la/s/e33686f9d81f80bd310578b4373046f36841b7b419186077446bbcc3079f420bf6bbf5e2c8c996eba38defad7112d2bea8e8d443ca63dd067e97052ac70432163bb041fd54e014845928b66e6722f3157d47823fcd53e944353b2d640f7365d5053118970cb2c7391a842b27316c26d1',
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

export const handlers = [
  // 테스트 mock api
  rest.get('api/v1/test', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummy));
  }),

  rest.get(`api/v1/images?`, (req, res, ctx) => {
    console.log('images');
    console.log(req.url.searchParams.get('page'));
    return res(ctx.status(200), ctx.json(recentImgs));
  }),
];
