import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

import React from 'react';

const CheckItem = (props: any) => {
  let { setModal } = props;

  return (
    <Box>
      <Typography>{props.title}</Typography>
      <Button
        onClick={() => {
          setModal(true);
          props.setSelect(props.title);
        }}
      >
        <Box
          component="img"
          src={`@/assets/custom/${props.title}/${props.info[props.title]}.png`}
          alt={props.info[props.title]}
        ></Box>
      </Button>
    </Box>
  );
};

export default CheckItem;
