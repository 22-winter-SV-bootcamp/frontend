import { Button, ButtonGroup, Typography } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';
import Tooltip from '@mui/material/Tooltip';
type ColorArrType = {
  [key: string]: string;
};

const CheckColorList = ({ setInfo, select }: any) => {
  const colorArr: ColorArrType = {
    white: '#FFFFFF',
    melangeGrey: '#D4D4D4',
    grey: '#A6A6A6',
    coolGrey: '#4B5053',
    charcoal: '#444444',
    black: '#2B2929',
    ivory: '#F5EFEF',
    lightBeige: '#DED3AA',
    beige: '#D6BB87',
    peachBeige: '#DBBC97',
    deepBeige: '#BEA78C',
    darkBeige: '#A3907B',
    beigeBrown: '#7B6146',
    deepbrown: '#4A3A2A',
    darkBrown: '#362710',
    blond: '#FFECAE',
    lightBrown: '#A36B3E',
    brickBrown: '#854809',
    brown: '#54310A',
    khaki: '#3C492A',
    dustyGreen: '#76A973',
    lightBlue: '#CCE7FF',
    middleBlue: '#417797',
    deepBlue: '#165690',
    indigoBlue: '#1A2B47',
    burgundy: '#740E21',
    orange: '#D98200',
    yellow: '#FFCB00',
    navy: '#2C376F',
    purple: '#8A00AC',
    skyBlue: '#9CB0FF',
    sora: '#5C71C9',
    blue: '#0088D4',
    pink: '#FFB6B6',
    magentaPink: '#EE6989',
    red: '#A40707',
    pastelGreen: '#87B24A',
    lightGreen: '#629021',
    green: '#0A7C00',
    neonBlue: '#02ABCF',
    coral: '#DF5353',
    skin: '#FFD521',
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: 70,
          overflow: 'auto',
          overflowY: 'hidden',
        }}
      >
        {Object.keys(colorArr).map((color: string) => (
          <Button>
            <Tooltip
              title={color}
              arrow
              placement="top"
              sx={{ width: 60 }}
              onClick={() => {
                setInfo((pre: any) => ({ ...pre, [select]: color }));
              }}
            >
              <Box
                sx={{
                  borderRadius: '100%',
                  width: 40,
                  height: 40,
                  backgroundColor: colorArr[color],
                }}
              ></Box>
            </Tooltip>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default CheckColorList;
