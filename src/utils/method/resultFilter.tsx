const resultFilter = (result: any) => {
  let { top, bottom } = result.result;
  let { gender } = result;

  if (top === '-blazer') top = 'blazer';
  if (top === 't-shirts') top = 't_shirts';
  if (bottom === 'Half-shortpants') top = 'half_shortpants';

  return { top: top, bottom: bottom, gender: gender };
};

export default resultFilter;
