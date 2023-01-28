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
type CardsType = {
  id: number;
  link: string;
};

const RecentImgs = () => {
  const [index, setIndex] = useState(0);
  const [cards, setCards] = useState<CardsType[]>([]);
  const [page, setPage] = useState(1);

  const { isLoading, isError, data } = useQuery(
    ['recentPage', page],
    async () => await getRecentImgs(page),
    {
      staleTime: 1000 * 60 ** 60,
      refetchOnWindowFocus: false,
    },
  );

  useEffect(() => {
    if (data) setCards([...data]);
  }, [data]);

  const p = [
    { left: 20, top: 60, transform: `rotateX(45deg) rotateZ(-35deg)` },
    { left: 210, top: 10, transform: `rotateX(45deg) rotateZ(25deg)` },
    { left: 150, top: 220, transform: `rotateX(45deg) rotateZ(-15deg)` },
    { left: 30, top: 350, transform: `rotateX(45deg) rotateZ(25deg)` },
    { left: 220, top: 450, transform: `rotateX(45deg) rotateZ(-25deg)` },
  ];

  const Box1 = styled('div')(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    minWidth: 400,
    maxWidth: 500,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(255, 226, 197)',
    background:
      'linear-gradient(169deg, rgba(255,226,197,1) 49%, rgba(236,226,216,1) 55%, rgba(255,255,255,1) 56%, rgba(216,196,177,1) 60%, rgba(186,150,115,1) 64%, rgba(197,167,138,1) 65%, rgba(178,138,99,1) 68%)',
    [theme.breakpoints.down('desktop')]: {
      position: 'absolute',
      zIndex: -1,
    },
    [theme.breakpoints.up('desktop')]: {
      position: 'relative',
      zIndex: -1,
    },
  }));

  const Triangle = styled('div')(({ theme }) => ({
    width: 0,
    height: 0,
    borderBottom: `100px solid transparent`,
    borderTop: `300px solid #FFE2C5`,
    borderLeft: `300px solid #FFE2C5`,
    borderRight: `900px solid transparent`,
    [theme.breakpoints.down('mobile')]: {
      borderTop: `50px solid #C5E8FF`,
      borderLeft: `160px solid #C5E8FF`,
    },
  }));

  return (
    <Box1 theme={theme}>
      <Triangle theme={theme}></Triangle>
      {cards?.map((card, i) => (
        <Box
          key={i}
          sx={{
            ...p[i],
            position: 'absolute',
          }}
          width="100px"
          height="150px"
          component="img"
          src={card.link}
        ></Box>
      ))}
    </Box1>
  );
};

export default RecentImgs;
