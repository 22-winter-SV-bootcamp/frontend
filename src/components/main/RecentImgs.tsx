import getRecentImgs from '@/apis/getRecentImgs';
import { convertLength } from '@mui/material/styles/cssUtils';
import { breakpoints, maxWidth, styled } from '@mui/system';
import { Box } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Transform } from 'stream';
import tryNow from '/assets/pages/main/tryNow.png';
import doh from '/assets/pages/common/doh.png';
import { useQuery } from '@tanstack/react-query';
import { transferableAbortController } from 'util';
import { red } from '@mui/material/colors';
import { relative } from 'path';
import { theme } from '@/utils/mui/breakpoints';

const RecentImgs = ({ cards }: any) => {
  const p = [
    { left: '70%', top: '10%', transform: `rotateX(45deg) rotateZ(-35deg)` },
    { left: '20%', top: '30%', transform: `rotateX(45deg) rotateZ(25deg)` },
    { left: '60%', top: '40%', transform: `rotateX(45deg) rotateZ(-15deg)` },
    { left: '10%', top: '60%', transform: `rotateX(45deg) rotateZ(25deg)` },
    { left: '65%', top: '75%', transform: `rotateX(45deg) rotateZ(-25deg)` },
  ];

  const Box1 = styled('div')(({ theme }) => ({
    position: 'absolute',
    zIndex: -1,
    overflow: 'hidden',
    height: '100vh',
    width: 760,
    background: `linear-gradient(165deg, #a6c7dd 50%, rgba(179,139,99,1) 50%)`,
    [theme.breakpoints.down('tablet')]: {},
    [theme.breakpoints.between('tablet', 'desktop')]: {},
    [theme.breakpoints.between('desktop', 'bigDesktop')]: {},
    [theme.breakpoints.up('bigDesktop')]: {},
  }));

  const Triangle = styled('div')(({ theme }) => ({}));

  return (
    <Box1 theme={theme}>
      {cards?.map((card: any, i: number) => (
        <Box
          key={i}
          sx={{
            ...p[i],
            position: 'absolute',
          }}
          width="200px"
          height="350px"
          component="img"
          src={card.link}
        ></Box>
      ))}
    </Box1>
  );
};

export default RecentImgs;
