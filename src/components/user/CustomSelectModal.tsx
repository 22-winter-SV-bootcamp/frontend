import { Button, Hidden, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { prependListener } from 'process';
import React, { SetStateAction, useEffect, useState } from 'react';
import CheckColorList from './common/CheckColorList';

import CheckItemList from './common/CheckItemList';

function CustomSelectModal({
  select,
  setInfo,
  setTitleIconBtn,
  setCheck,
}: any) {
  const colorArr = {
    white: '#f9f6f6',
    coolGray: '#d4d4d4',
    gray: '#a6a6a6',
    darkGray: '#4b5053',
    charcoal: '#444444',
    red: '#900000',
    orange: '#d98200',
    yellow: '#ffcb00',
    navy: '#2c376f',
    purple: '#8a00ac',
    green: '#0a7c00',
    black: '#000000',
    neonBlue: '#02abcf',
    peach: '#DF5353',
    darkBrown: '#362710',
    brown: '#4A3A2A',
    darkBagie: '#A3907B',
    bagie: '#A3907B',
    ligthBegie: '#A3907B',
    ivory: '#DED3AA',
    kaki: '#3C492A',
    ligthBlue: '#CCE7FF',
    middleBlue: '#417797',
    darkBlue: '#165690',
    denim: '#1A2B47',
    sora: '#5C71C9',
    skyBlue: '#9CB0FF',
    pink: '#FFB6B6',
  };

  useEffect(() => {
    console.log('CustomSelectModal');
  }, []);

  return (
    <Box
      sx={{
        // padding: '20px',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        overflowY: 'scroll',
      }}
    >
      {select !== 'gender' ? (
        <div>
          <CheckItemList
            select={select}
            setInfo={setInfo}
            setCheck={setCheck}
            setTitleIconBtn={setTitleIconBtn}
          ></CheckItemList>

          {/* <CheckColorList
              select={select}
              setInfo={setInfo}
            ></CheckColorList>
       */}
        </div>
      ) : (
        <Box>
          <Box
            onClick={() => {
              setInfo((pre: any) => ({ ...pre, gender: 'female' }));
            }}
            sx={{ width: 50, height: 50 }}
            component="img"
            src={`/assets/pages/result/female.png`}
            alt="female"
          ></Box>
          <Box
            onClick={() => {
              setInfo((pre: any) => ({ ...pre, gender: 'male' }));
            }}
            sx={{ width: 50, height: 50 }}
            component="img"
            src={`/assets/pages/result/male.png`}
            alt="male"
          ></Box>
        </Box>
      )}
    </Box>
  );
}

export default CustomSelectModal;
