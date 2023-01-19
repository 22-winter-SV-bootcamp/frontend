import { Button, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';

const CheckItemList = ({ gender, title, setInfo, arr, select }: any) => {
  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
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
            <Box
              component="img"
              alt={v}
              src={`src/assets/custom/${gender}/${select}/${v}.svg`}
            ></Box>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default CheckItemList;
