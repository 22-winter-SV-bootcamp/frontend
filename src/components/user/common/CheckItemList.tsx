import { Box, Stack } from '@mui/system';
import React from 'react';

const CheckItemList = (props: any) => {
  return (
    <Box>
      <Box>Style</Box>
      <Stack>
        {[1, 2, 3].map((v) => (
          <Box>이미지 {v}</Box>
        ))}
      </Stack>
    </Box>
  );
};

export default CheckItemList;
