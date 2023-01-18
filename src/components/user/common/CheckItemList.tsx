import { Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';

const CheckItemList = ({ title, setInfo, arr, select }: any) => {
  return (
    <Box>
      <Box>{title}</Box>
      <Box
        sx={{
          display: 'flex',
          width: 300,
          overflow: 'auto',
          overflowY: 'hidden',
        }}
      >
        {arr.map((v: any) => (
          <Button
            sx={{ width: 60 }}
            key={v}
            onClick={() => {
              setInfo((pre: any) => ({ ...pre, [select]: v }));
            }}
          >
            {v}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default CheckItemList;
