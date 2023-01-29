import { Box, Button, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DragDropUpload from '@/components/main/DragDropUpload/DragDropUpload';
import RecentImgs from '@/components/main/RecentImgs';

import IconButton from '@/components/common/ButtonIcon';
import { theme } from '@/utils/mui/breakpoints';
import RankModal from '@/components/main/rankModal';
import ButtonIcon from '@/components/common/ButtonIcon';
import getRecentImgs from '@/apis/getRecentImgs';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

type CardsType = {
  id: number;
  link: string;
};

const Main = () => {
  const MainBox = styled('div')(({ theme }) => ({
    width: '100vw',
    overflow: 'hidden',
    height: '100vh',
    // TODO: 배경 바꿔야함
    background:
      'linear-gradient(180deg, rgba(197,232,255,1) 0%, rgba(198,233,255,1) 34%, rgba(204,236,255,1) 66%, rgba(222,242,255,1) 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 0,
    [theme.breakpoints.down('tablet')]: {},
    [theme.breakpoints.between('tablet', 'desktop')]: {},
    [theme.breakpoints.between('desktop', 'bigDesktop')]: {},
    [theme.breakpoints.up('bigDesktop')]: {},
  }));

  const TopBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIdenx: 1,

    [theme.breakpoints.down('tablet')]: {
      marginBottom: '185px',
      fontSize: '70px',
    },
    [theme.breakpoints.between('tablet', 'desktop')]: {
      marginBottom: '390px',
      fontSize: '140px',
    },
    [theme.breakpoints.between('desktop', 'bigDesktop')]: {
      marginBottom: '310px',
      fontSize: '125px',
    },
    [theme.breakpoints.up('bigDesktop')]: {
      marginBottom: '310px',
      fontSize: '125px',
    },
  }));

  const BottomBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.breakpoints.down('tablet')]: {
      width: 182,
      height: 125,
    },
    [theme.breakpoints.between('tablet', 'desktop')]: {
      width: 372,
      height: 261,
    },
    [theme.breakpoints.between('desktop', 'bigDesktop')]: {
      width: 325,
      height: 222,
    },
    [theme.breakpoints.up('bigDesktop')]: {
      width: 325,
      height: 222,
    },
  }));

  const Img = styled('img')(({ theme }) => ({
    position: 'absolute',
    zIndex: -4,
    width: 500,
    bottom: -10,
    left: -240,
    [theme.breakpoints.down('desktop')]: {},
    [theme.breakpoints.between('mobile', 'tablet')]: {},
    [theme.breakpoints.up('desktop')]: {},
  }));

  const [open, setOpen] = useState(false);
  // const [cards, setCards] = useState<CardsType[]>([]);
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    data: cards,
  } = useQuery(['recentPage', page], async () => await getRecentImgs(page), {
    staleTime: 1000 * 60 ** 60,
    refetchOnWindowFocus: false,
  });

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (data) setCards([...data]);
  // }, [data]);

  return (
    <>
      <MainBox theme={theme}>
        <TopBox theme={theme}>
          <Box sx={{ marginBottom: 1, color: 'white', fontWeight: 400 }}>
            심슨필름
          </Box>
          <Box sx={{ fontSize: '50%', color: 'white', fontWeight: 400 }}>
            D’oh film
          </Box>
          <RankModal open={open} setOpen={setOpen}></RankModal>
        </TopBox>
        <RecentImgs cards={cards}></RecentImgs>
        <BottomBox theme={theme}>
          <Box
            sx={{
              width: '100%',
              height: '43%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <ButtonIcon
              setPage={setPage}
              setOpen={setOpen}
              title="refresh"
            ></ButtonIcon>
            <ButtonIcon
              title="rank"
              setPage={setPage}
              setOpen={setOpen}
            ></ButtonIcon>
          </Box>
          <Button
            onClick={() => {
              navigate('/upload');
            }}
            variant="contained"
            color="inherit"
            sx={{
              width: '100%',
              height: '45%',
              boxShadow: '3px 3px 0px 0px #C7C7C7',
              padding: 2,
              borderRadius: '50px',
              backgroundColor: '#FFFFFF',
            }}
          >
            <Typography sx={{ opacity: 0.5 }} variant="h3">
              찍으러 가기
            </Typography>
          </Button>
        </BottomBox>
        <Img src="/assets/pages/main/middle.svg"></Img>
      </MainBox>
      {/* 슬라이드 그림 오는 자리 */}

      {/* 업로드 버튼 오는 자리 */}
      {/* <DragDropUpload></DragDropUpload> */}
      {/* 랭킹 보여주는 자리 */}
      {/* <RankingImgs /> */}
    </>
  );
};

export default Main;
