import { Box } from '@mui/system';
import { relative } from 'path';
import React from 'react';

const CustomSVG = ({ info }: any) => {
  let {
    gender,
    hair,
    hairColor,
    top,
    topColor,
    bottom,
    bottomColor,
    background,
  } = info;
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      <Box
        sx={{ position: 'absolute', objectFit: 'cover' }}
        component="img"
        width="100%"
        height="100%"
        src={`src/assets/custom/background/${background}.png`}
      ></Box>

      <Box
        sx={{ position: 'absolute', objectFit: 'cover' }}
        component="img"
        width="100%"
        height="100%"
        src={`src/assets/custom/${gender}/hair/${hair}.svg`}
      ></Box>
      <Box
        sx={{ position: 'absolute', objectFit: 'cover' }}
        component="img"
        width="100%"
        height="100%"
        src={`src/assets/custom/${gender}/top/basic_t_shirts.svg`}
      ></Box>
      <Box
        sx={{ position: 'absolute', objectFit: 'cover' }}
        component="img"
        width="100%"
        height="100%"
        src={`src/assets/custom/${gender}/bottom/${bottom}.svg`}
      ></Box>
      <Box
        sx={{ position: 'absolute', objectFit: 'cover' }}
        component="img"
        width="100%"
        height="100%"
        src={`src/assets/custom/${gender}/top/${top}.svg`}
      ></Box>
    </Box>
  );
};

export default CustomSVG;
