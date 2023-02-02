import { Box, Button, styled, Typography, useMediaQuery } from '@mui/material';
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
import { Translate } from '@mui/icons-material';

type CardsType = {
  id: number;
  link: string;
};

const Main = () => {
  const [animation, setAnimaion] = useState(false);
  const MainBox = styled('div')(({ theme }) => ({
    width: '100vw',
    overflow: 'hidden',
    height: '100vh',
    // TODO: 배경 바꿔야함
    background: 'linear-gradient(to bottom, #C5E8FF 80%, #FFFFFF 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 0,
    [theme.breakpoints.down('tablet')]: {},
    [theme.breakpoints.between('tablet', 'desktop')]: {},
    [theme.breakpoints.up('desktop')]: {
      flexDirection: 'row',
    },
  }));

  const TopBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIdenx: 1,
    position: 'relative',

    [theme.breakpoints.down('tablet')]: {
      marginBottom: '185px',
      fontSize: '70px',
    },
    [theme.breakpoints.between('tablet', 'desktop')]: {
      marginBottom: '390px',
      fontSize: '140px',
    },

    [theme.breakpoints.up('desktop')]: {
      margin: '0 auto',
      marginTop: 100,
      alignSelf: 'start',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '100px',
    },
  }));

  const BottomBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    justifyContent: 'space-between',

    [theme.breakpoints.down('tablet')]: {
      width: 182,
      height: 125,
    },
    [theme.breakpoints.between('tablet', 'desktop')]: {
      width: 372,
      height: 261,
      fontSize: '20px',
    },

    [theme.breakpoints.up('desktop')]: {
      alignSelf: 'end',
      margin: '0 auto',
      marginBottom: 100,
      width: 270,
      height: 200,
      fontSize: '15px',
    },
  }));

  const Img = styled('img')(({ theme }) => ({
    position: 'absolute',
    zIndex: -4,
    width: 700,
    bottom: -120,
    left: -200,
    [theme.breakpoints.down('desktop')]: {},
    [theme.breakpoints.between('mobile', 'tablet')]: {},
    [theme.breakpoints.up('desktop')]: {},
  }));

  const [open, setOpen] = useState(false);
  // const [cards, setCards] = useState<CardsType[]>([]);
  const [page, setPage] = useState(1);

  // TODO: 페이지 없을 때 처리!!
  const {
    isLoading,
    isError,
    data: cards,
  } = useQuery(['recentPage', page], async () => await getRecentImgs(page), {
    staleTime: 1000 * 60 ** 60,
    refetchOnWindowFocus: false,
    retry: 0,
    onError: () => {
      setPage((pre) => pre - 1);
    },
  });

  const navigate = useNavigate();

  const matches = useMediaQuery(theme.breakpoints.up('desktop'));

  // useEffect(() => {
  //   if (data) setCards([...data]);
  // }, [data]);
  console.log(page);

  const TitleBox = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('tablet')]: {
      height: '80px',
    },
    [theme.breakpoints.between('tablet', 'desktop')]: {
      marginBottom: 0,
      height: '160px',
      // fontSize: '100px',
    },
    [theme.breakpoints.up('desktop')]: {},
  }));
  return (
    <>
      <MainBox className="mainBox" theme={theme}>
        <RankModal open={open} setOpen={setOpen}></RankModal>
        {open ? (
          <Box
            onClick={() => {
              setOpen(false);
            }}
            sx={{
              position: 'absolute',
              background: '#000000',
              width: '100vw',
              height: '100vh',
              top: 0,
              left: 0,
              opacity: 0.5,
              zIndex: 1,
            }}
          ></Box>
        ) : null}
        <TopBox className="topBox" theme={theme}>
          <TitleBox sx={{ marginBottom: 1 }} theme={theme}>
            <Typography
              sx={{
                marginBottom: 1,
                color: 'white',
                fontSize: '1em',
                fontWeight: 400,
                textShadow: '3px 3px #ACACAC',
                // WebkitTextStroke: '2px #000000',
              }}
            >
              심슨필름
            </Typography>
          </TitleBox>
          <Typography sx={{ fontSize: '50%', color: 'white', fontWeight: 400 }}>
            Simpson film
          </Typography>
        </TopBox>
        {/* <Box1 theme={theme}> */}
        <RecentImgs cards={cards} animation={animation}></RecentImgs>
        {/* </Box1> */}

        <BottomBox theme={theme}>
          {/* {matches ? (
            <RankModal open={open} setOpen={setOpen}></RankModal>
          ) : null} */}
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
              setAnimaion={setAnimaion}
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
              paddingTop: 3,
              borderRadius: '50px',
              backgroundColor: '#FFFFFF',
              fontSize: 'inherit',
            }}
          >
            <Typography
              sx={{
                opacity: 0.5,
                fontSize: '3em',
              }}
              variant="h2"
            >
              찍으러 가기
            </Typography>
          </Button>
        </BottomBox>

        <Img src="/assets/pages/main/middle.svg"></Img>
      </MainBox>
    </>
  );
};

export default Main;
