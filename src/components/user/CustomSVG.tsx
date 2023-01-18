import { Box } from '@mui/system';
import { relative } from 'path';
import React from 'react';

const CustomSVG = ({ info }: any) => {
  return (
    <Box sx={{ position: 'relative', width: 100, height: 100 }}>
      <Box
        sx={{ position: 'absolute' }}
        component="img"
        width={100}
        height={100}
        src="src/assets/custom/background/type1.png"
      ></Box>
      <Box
        sx={{ position: 'absolute' }}
        component="img"
        width={100}
        height={100}
        src="src/assets/custom/female/hair/short.svg"
      ></Box>
      <Box
        sx={{ position: 'absolute' }}
        component="img"
        width={100}
        height={100}
        src="src/assets/custom/female/bottom/jogger.svg"
      ></Box>
      <Box
        sx={{ position: 'absolute' }}
        component="img"
        width={100}
        height={100}
        src="src/assets/custom/female/top/coat.svg"
      ></Box>
    </Box>
  );
};

export default CustomSVG;
