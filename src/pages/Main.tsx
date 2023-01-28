import { Box, Button, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import DragDropUpload from '@/components/main/DragDropUpload/DragDropUpload';
import RecentImgs from '@/components/main/RecentImgs';

import IconButton from '@/components/common/ButtonIcon';
import { theme } from '@/utils/mui/breakpoints';
import RankModal from '@/components/main/rankModal';
import ButtonIcon from '@/components/common/ButtonIcon';

const Main = () => {
  const MainBox = styled('div')(({ theme }) => ({
    width: '100%',
    overflow: 'hidden',
    height: '100%',
    background: 'linear-gradient(to bottom, #abdeff 50.29%, #F8E3CC 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 0,
    [theme.breakpoints.down('mobile')]: {},
    [theme.breakpoints.between('mobile', 'tablet')]: {},
    [theme.breakpoints.up('desktop')]: {
      flexDirection: 'row',
    },
  }));

  const TopBox = styled('div')(({ theme }) => ({
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'center',
    zIdenx: 1,
    [theme.breakpoints.down('desktop')]: {
      marginBottom: 'auto',
      paddingTop: 10,
      paddingRight: 160,
      alignSelf: 'center',
    },
    [theme.breakpoints.between('mobile', 'tablet')]: {},
    [theme.breakpoints.up('desktop')]: {
      alignSelf: 'start',
    },
  }));

  const BottomBox = styled('div')(({ theme }) => ({
    width: 400,
    display: 'flex',
    paddingTop: 40,
    paddingBottom: 40,
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('desktop')]: {
      alignSelf: 'center',
    },
    [theme.breakpoints.between('mobile', 'tablet')]: {},
    [theme.breakpoints.up('desktop')]: {
      alignSelf: 'end',
      zIdenx: 1,
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
  return (
    <>
      <MainBox theme={theme}>
        <TopBox theme={theme}>
          <Typography sx={{ color: 'white', fontWeight: 400 }} variant="h1">
            심슨필름
          </Typography>
          <Typography sx={{ color: 'white', fontWeight: 400 }} variant="h4">
            D’oh film
          </Typography>
        </TopBox>
        <RecentImgs></RecentImgs>
        <BottomBox theme={theme}>
          <RankModal open={open} setOpen={setOpen}></RankModal>
          <ButtonIcon title="refresh"></ButtonIcon>
          <ButtonIcon title="photo"></ButtonIcon>
          <ButtonIcon title="rank" setOpen={setOpen}></ButtonIcon>
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
