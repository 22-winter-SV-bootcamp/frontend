import { Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';

const CheckItemList = (props: any) => {
  return (
    <Box>
      <Box>{props.title}</Box>
      <Stack spacing={1}>
        {props.arr.map((v: any) => (
          <Button
            key={v}
            onClick={() => {
              props.setInfo((pre: any) => ({ ...pre, [props.select]: v }));
            }}
          >
            {v}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default CheckItemList;
