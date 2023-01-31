import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import BacktoTop from '/assets/pages/result/BacktoTop.png';
import doh from '/assets/pages/common/doh.png';
import SpraySimpson from '/assets/pages/result/SpraySimpson.png';
import Download from '/assets/pages/result/Download.png';
import Kakaotalk from '/assets/pages/result/Kakaotalk.png';
import { useLocation, useNavigate } from 'react-router-dom';
import { imageDownload } from './imageDownload';
import { Copyelement } from './modal/Copyelement';
import { sendKakao } from './kakaotalk/sendKakao';
import { theme } from '@/utils/mui/breakpoints';
import { styled } from '@mui/material';

export function ResultImg() {
  const [url, setUrl] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    /* Link로 결과 페이지로 넘어갈떄 props에 state값을 주면 결과 페이지 에서 사용 가능, 나는 이걸 url 상태값에 저장 */
    setUrl(location.state.link);
  });

  const goFirstPage = () => {
    /* 첫 페이지 */
    navigate('/', { replace: true });
  };

  const download = async () => {
    /* location의 state값이 undefined이 아니라는 걸 알려주기 위해 사용 */
    url &&
      imageDownload({
        href: url,
      });
  };

  const styleCommonFlex = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const styleCommonIconWidth = {
    width: '15%',
    maxWidth: '3rem',
    p: '4px',
  };

  const styleDoh = {
    width: '30vw',
    maxWidth: '160px',
    minWidth: '120px',
    position: 'absolute',
    top: '3vh',
    left: '5vw',
  };

  const styleBacktotop = { width: '100%', pb: '4rem' };

  const styleBacktotopButton = {
    width: '60vw',
    maxWidth: '270px',
    minWidth: '260px',
  };

  const styleContainer = {
    position: 'relative',
    height: '100vh',
    bgcolor: 'black',
    overflow: 'hidden',
    display: 'flex' /* 레이아웃 */,
    flexDirection: 'column',
  };

  const styleHeaderLayout = {
    height: '14%',
    position: 'relative',
  };

  const styleIconLayout = {
    display: 'flex',
    position: 'relative',
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
  };

  const styleSprayLayout = {
    position: 'absolute',
    display: 'none',
    bottom: '-200px',
    right: '-290px',
  };

  const BoxSprayLayout = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('desktop')]: {
      display: 'inLine',
    },
  }));

  return (
    <Box sx={styleContainer}>
      <Box sx={styleHeaderLayout}>
        <Box component="img" sx={styleDoh} src={doh} onClick={goFirstPage} />
      </Box>
      <Box
        sx={[
          styleCommonFlex,
          {
            height: '64%',
            flexDirection: 'column',
          },
        ]}
      >
        <Box sx={styleIconLayout}>
          <IconButton sx={styleCommonIconWidth} onClick={() => sendKakao(url)}>
            <Box
              component="img"
              sx={{
                width: '100%',
              }}
              src={Kakaotalk}
            />
          </IconButton>
          <Box
            sx={[
              styleCommonIconWidth,
              {
                maxHeight: '30px',
                p: '0px',
              },
            ]}
          >
            <Copyelement resultImg={url} />
          </Box>
        </Box>
        <Box sx={styleImageLayout}>
          <Box
            component="img"
            sx={{ width: '100%', height: '100%' }}
            src={url}
          />
          <IconButton /* 기본 패딩이 8 인듯 */
            sx={[
              styleCommonIconWidth,
              {
                position: 'absolute',
                left: '0.5rem',
                bottom: '0.5rem',
              },
            ]}
            onClick={download}
          >
            <Box
              component="img"
              sx={{
                '&:hover': {
                  width: '130%',
                },
                width: '100%',
              }}
              src={Download}
            />
          </IconButton>
          <BoxSprayLayout sx={styleSprayLayout} theme={theme}>
            <Box component="img" sx={{ width: '400px' }} src={SpraySimpson} />
          </BoxSprayLayout>
        </Box>
      </Box>
      <Box
        sx={[
          styleCommonFlex,
          {
            height: '22%',
          },
        ]}
      >
        <IconButton sx={styleBacktotopButton} onClick={goFirstPage}>
          <Box component="img" sx={styleBacktotop} src={BacktoTop} />
        </IconButton>
      </Box>
    </Box>
  );
}
