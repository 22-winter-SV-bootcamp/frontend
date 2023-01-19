import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { CirclePicker } from 'react-color';
const CheckColorList = ({ title, setInfo, color, select }: any) => {
  const colorClick = (e: any) => {
    const c = Object.keys(color).find((key) => color[key] === e.hex);
    console.log(c, e.hex);
    setInfo((pre: any) => ({ ...pre, [select]: c }));
  };

  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
      <Box
        sx={{
          display: 'flex',

          overflow: 'auto',
          overflowY: 'hidden',
        }}
      >
        <CirclePicker
          onChange={colorClick}
          colors={[
            '#F9F6F6',
            '#292121',
            '#32454C',
            '#B8BFDA',
            '#E4007F',
            '#FF0000',
            '#FE8B10',
            '#FFF174',
            '#60906D',
            '#0809FF',
            '#3E4982',
            '#E179E3',
            '#886024',
            '#CEB37D',
          ]}
        ></CirclePicker>
      </Box>
    </Box>
  );
};

export default CheckColorList;
