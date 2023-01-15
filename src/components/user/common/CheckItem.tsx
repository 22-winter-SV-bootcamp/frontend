import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import React from 'react';

const CheckItem = (props: any) => {
  return (
    <Box>
      <Typography>{props.title}</Typography>
      <Box component="img" src={''} alt={props.info[props.title]}></Box>
    </Box>
  );
};

export default CheckItem;
