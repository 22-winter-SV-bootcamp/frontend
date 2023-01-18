import React, { useEffect, useState } from 'react';
import { Box, createTheme, IconButton, styled } from '@mui/material';
import BacktoTop from '../../assets/BacktoTop.png';
import doh from '../../assets/doh.png';
import SpraySimpson from '../../assets/SpraySimpson.png';
import Download from '../../assets/Download.png';
import Instagram from '../../assets/Instagram.png';
import Kakaotalk from '../../assets/Kakaotalk.png';
import ShareArrow from '../../assets/ShareArrow.png';
import { ReactComponent as Home } from '../../assets/home.svg';
import { Navigate, useNavigate } from 'react-router-dom';
//import './style.css'; /* svg파일 스타일 적용 */
import { imageDownload } from './imageDownload';

type Image = {
  /* 프롭스로 받을 이미지의 타입? */
};

const styleContainer = {
  position: 'relative',
  height: '100vh',
  bgcolor: 'black',
  overflow: 'hidden',
  display: 'flex' /* 레이아웃 */,
  flexDirection: 'column',
};

const styleIconLayout = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  width: '75%',
  maxWidth: '55vmin',
  minWidth: '285px',
  mb: '10px',
};

const styleImageLayout = {
  position: 'relative',
  width: '75%',
  maxWidth: '55vmin',
  minWidth: '285px',
  // display: 'block',
  // pb: '100%',
};

const styleSprayLayout = {
  position: 'absolute',
  display: 'none',
  bottom: '-200px',
  right: '-290px',
};

const BoxSprayLayout = styled('div')(({ theme }) => ({
  // [theme.breakpoints.between('laptop', 'desktop')]: {} /* 필요시 사용, 크기 조정*/,
  [theme.breakpoints.up('desktop')]: {
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
  const [url, setUrl] = useState('');
  const navigate = useNavigate();
  const goFirstPage = (): void => {
    /* 첫 페이지 */
    navigate('/');
  };

  const download = async () => {
    imageDownload({
      href: url,
    });
  };

  useEffect(() => {
    const downloadApi = async () => {
      const response = await fetch('api/v1/test').then((res) => res.json());
      console.log(response);
      setUrl(response);
    };
    downloadApi();
  }, []);

  return (
    <Box className="container" sx={styleContainer}>
      <Box className="firstLayout" sx={{ height: '14%', position: 'relative' }}>
        <Box
          className="doh"
          component="img"
          sx={{
            width: '30vw',
            maxWidth: '160px',
            minWidth: '120px',
            position: 'absolute',
            top: '3vh',
            left: '5vw',
          }}
          src={doh}
        />
      </Box>
      <Box
        className="secondLayout"
        sx={{
          height: '64%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box className="iconLayout" sx={styleIconLayout}>
          <IconButton
            className="instagramButton"
            sx={{
              width: '15%',
              maxWidth: '3rem',
              p: '4px',
            }}
          >
            <Box
              className="instagram"
              component="img"
              sx={{ width: '100%' }}
              src={Instagram}
            />
          </IconButton>
          <IconButton
            className="kakaotalkButton"
            sx={{
              width: '15%',
              maxWidth: '3rem',
              p: '4px',
            }}
          >
            <Box
              className="kakaotalk"
              component="img"
              sx={{ width: '100%' }}
              src={Kakaotalk}
            />
          </IconButton>

          <IconButton
            className="shareArrowButton"
            sx={{
              width: '15%',
              maxWidth: '3rem',
              p: '4px',
            }}
          >
            <Box
              className="shareArrow"
              component="img"
              sx={{ width: '100%' }}
              src={ShareArrow}
            />
          </IconButton>
        </Box>
        <Box className="imageLayout" sx={styleImageLayout}>
          <Home className="resultImg" width="100%" height="100%" fill="grey" />
          <IconButton /* 기본 패딩이 8 인듯 */
            className="downloadButton"
            sx={{
              position: 'absolute',
              width: '15%',
              maxWidth: '3rem',
              p: '4px',
              left: '0.5rem',
              bottom: '0.5rem',
            }}
            onClick={download}
          >
            <Box
              className="download"
              component="img"
              sx={{
                width: '100%',
              }}
              src={Download}
            />
          </IconButton>
          <BoxSprayLayout
            className="sprayLayout"
            sx={styleSprayLayout}
            theme={theme}
          >
            <Box
              className="spraySimpson"
              component="img"
              sx={{ width: '400px' }}
              src={SpraySimpson}
            />
          </BoxSprayLayout>
        </Box>
      </Box>
      <Box
        className="thirdLayout"
        sx={{
          height: '22%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton
          className="backtotopButton"
          sx={{ width: '60vw', maxWidth: '270px', minWidth: '260px' }}
          onClick={goFirstPage}
        >
          <Box
            className="backtotop"
            component="img"
            sx={{ width: '100%', pb: '4rem' }}
            src={BacktoTop}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
