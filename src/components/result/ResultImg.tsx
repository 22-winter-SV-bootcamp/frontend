import React from 'react';
import { Box, Container, createTheme, styled } from '@mui/material';
import { display, margin } from '@mui/system';
import BacktoTop from '../../assets/BacktoTop.png';
import doh from '../../assets/doh.png';
import SpraySimpson from '../../assets/SpraySimpson.png';
import Download from '../../assets/Download.png';
import Instagram from '../../assets/Instagram.png';
import Kakaotalk from '../../assets/Kakaotalk.png';
import ShareArrow from '../../assets/ShareArrow.png';
import SimpsonHouse from '../../assets/SimpsonHouse.jpg';

type Image = {
  /* 프롭스로 받을 이미지의 타입? */
};

const styleContainer = {
  // position: 'relative',
  // width: '100vw',
  height: '100vh',
  p: 5,
  bgcolor: 'black',
  //display: 'flex' /* 레이아웃 */,
  // /* 가로 방향 */,
};

const styleLayout = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  //width: '80vw' /* 480기준 384px */,
  width: '33.6em',
  // height: '100vh',
  mt: '5rem',
  display: 'flex',
  flexDirection: 'column',
};

const styleIconLayout = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
};

const styleImageLayout = {
  position: 'relative',
  m: '0 auto',
};

const styleSprayLayout = {
  position: 'absolute',
  // visibility: 'hidden',
  display: 'none',
  bottom: '0px',
  right: '-290px',
};

const styleImgDoh = {
  /* 절대 위치 (좌 상단)*/
  width: '14.4em',
  height: '7em',
  objectFit: 'contain' /* 비율유지한채, 이미지 잘리지 않게, 남는공간 비워둠 */,
  position: 'absolute',
  top: '3vh',
  left: '5vw',
};

const styleImgSpray = {
  width: '400px',
  heigh: '400px',
  display: 'inline',
  objectFit: 'contain' /* 비율유지한채, 이미지 잘리지 않게, 남는공간 비워둠 */,
  // display: { xs: 'none', lg: 'inline' },
  // position: 'absolute',
  // bottom: '-200px',
  // right: '-300px',
  // visibility: 'hidden',
};

const styleImgResult = {
  position: 'relative',
  //width: '80vw',
  width: '33.6em',
  height: '33.6em',
  objectFit: 'cover',
  m: '0 auto' /* 위 아래 m:0 좌우 가운데 정렬 */,
  mt: '1rem',
};

const BoxContainer = styled('div')(({ theme }) => ({
  // [theme.breakpoints.between('laptop', 'desktop')]: {} /* 필요시 사용, 크기 조정*/,
  // [theme.breakpoints.between('mobile', 'tablet')]: {
  //   fontSize: '10px',
  // },
  // [theme.breakpoints.between('tablet', 'desktop')]: {
  //   fontSize: '14px',
  // },
  // [theme.breakpoints.up('desktop')]: {
  //   fontSize: '17px',
  // },
}));

const BoxLayout = styled('div')(({ theme }) => ({
  // [theme.breakpoints.between('tablet', 'desktop')]: {},     /* 필요시 사용, 크기 조정*/

  [theme.breakpoints.between('tablet', 'desktop')]: {
    fontSize: '14px',
  },
  [theme.breakpoints.up('desktop')]: {
    width: '33.6em',
    // paddingTop: '4em',
    // mt: '20vh',
    fontSize: '17px',
  },
}));

const BoxSprayLayout = styled('div')(({ theme }) => ({
  // [theme.breakpoints.between('laptop', 'desktop')]: {} /* 필요시 사용, 크기 조정*/,

  [theme.breakpoints.up('desktop')]: {
    // visibility: 'visible',
    display: 'inLine',
  },
}));

const theme = createTheme({
  /* custom MediaQuery */
  breakpoints: {
    values: {
      mobile: 480,
      tablet: 768,
      laptop: 0,
      desktop: 1024,
    },
  },
});

declare module '@mui/material/styles' {
  /* 타입 스크립트때문에 사용 */
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export function ResultImg() {
  return (
    <BoxContainer className="container" sx={styleContainer} theme={theme}>
      <Box className="doh" component="img" sx={styleImgDoh} src={doh} />
      <BoxLayout className="layout" sx={styleLayout} theme={theme}>
        <Box className="iconLayout" sx={styleIconLayout}>
          <Box
            className="instagram"
            component="img"
            sx={{
              width: '3.5rem' /* (3.5rem) * 10 = 35px */,
              heigh: '3.5rem',
              objectFit: 'contain',
              mr: '10px',
            }}
            src={Instagram}
          />
          <Box
            className="kakaotalk"
            component="img"
            sx={{
              width: '3.5rem',
              heigh: '3.5rem',
              objectFit: 'contain',
              mr: '10px',
            }}
            src={Kakaotalk}
          />
          <Box
            className="shareArrow"
            component="img"
            sx={{
              width: '3.5rem',
              heigh: '3.5rem',
              objectFit: 'contain',
            }}
            src={ShareArrow}
          />
        </Box>
        <Box className="imageLayout" sx={styleImageLayout}>
          <Box
            className="resultImg"
            component="img"
            sx={styleImgResult}
            src={SimpsonHouse}
          />
          <Box
            className="download"
            component="img"
            sx={{
              position: 'absolute',
              right: '0.5rem',
              bottom: '0.5rem',
              width: '3.5rem',
              heigh: '3.5rem',
            }}
            src={Download}
          />
          {/* <BoxSprayLayout
            className="sprayLayout"
            sx={styleSprayLayout}
            theme={theme}
          >
            <Box
              className="spraySimpson"
              component="img"
              sx={styleImgSpray}
              src={SpraySimpson}
            />
          </BoxSprayLayout> */}
        </Box>

        <Box
          className="backtotop"
          component="img"
          sx={{
            width: '27rem',
            m: '0 auto',
            mt: '8vh',
          }}
          src={BacktoTop}
        />
        <BoxSprayLayout
          className="sprayLayout"
          sx={styleSprayLayout}
          theme={theme}
        >
          <Box
            className="spraySimpson"
            component="img"
            sx={styleImgSpray}
            src={SpraySimpson}
          />
        </BoxSprayLayout>
      </BoxLayout>
    </BoxContainer>
  );
}
