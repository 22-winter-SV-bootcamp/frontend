// @flow
import { AspectRatio } from '@mui/joy';
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import testSimpson from '/assets/pages/user/Simpson.png';
import downloadIcon from '/assets/pages/result/downloadIcon.png';
import home from '/assets/pages/result/home.png';
import ShareArrow from '/assets/pages/result/ShareArrow.png';
import Kakaotalk from '/assets/pages/result/Kakaotalk.png';
import { imageDownload } from './imageDownload';
import { Copyelement } from './Copyelement';
import { sendKakao } from './kakaotalk/sendKakao';

Kakaotalk;
ShareArrow;
type Props = {};
export const ResultPage = (props: Props) => {
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

  const styleContainer = {
    height: '100%',
    background: 'linear-gradient(to bottom, #C5E8FF, #F8E3CC 90%)',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  };

  const filmLayout = {
    height: '100%',
    width: '100%',
    maxWidth: '590px' /* 화면에 따라 수정 예정 */,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    bgcolor: '#FFFFFF',
    pl: '70px',
    pr: '70px',
  };

  const headerLayout = {
    height: '9%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const styleTitle = {
    fontWeight: 'medium',
    fontFamily: 'Monospace',
  };

  const mainLayout = {
    height: '70%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  };

  const styleMainImg = {
    height: '100%',
    // width: '77%',
    width: '100%',
    maxWidth: '590px' /* 화면에 따라 수정 예정 */,
    objectFit: 'contain',
    border: 2,
  };

  const footerLayout = {
    height: '21%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const styleSideBtn = {
    p: '6px',
    '&:hover': {
      height: '40%',
    },
    height: {
      mobile: '27%', //img src from mobile up to tablet
      tablet: '33%', //img src from tablet up to desktop
      desktop: '33%', //img src from desktop up to ~
    },
  };

  const styleCenterBtn = {
    p: '6px',
    '&:hover': {
      height: '60%',
    },
    height: {
      laptop: '50%', //img src from 0 up to mobile
      mobile: '40%', //img src from mobile up to tablet
      tablet: '50%', //img src from tablet up to desktop
      desktop: '50%', //img src from desktop up to ~
    },
  };

  const styleIconImg = {
    height: '100%',
  };

  return (
    <Box sx={styleContainer}>
      <Box className="filmLayout" sx={filmLayout}>
        <Box className="headerLayout" sx={headerLayout}>
          <Typography variant="h3" align="center" sx={styleTitle}>
            심슨필름
          </Typography>
        </Box>
        <Box className="mainLayout" sx={mainLayout}>
          <Box
            component="img"
            src={testSimpson}
            alt="simpson image"
            sx={styleMainImg}
          />
        </Box>
        <Box className="footerLayout" sx={footerLayout}>
          <Button variant="text" sx={styleSideBtn} onClick={goFirstPage}>
            <Box component="img" src={home} alt="homeBtn" sx={styleIconImg} />
          </Button>
          <Button
            variant="text"
            sx={styleCenterBtn}
            onClick={() => sendKakao(url)}
          >
            <Box
              component="img"
              src={Kakaotalk}
              alt="downloadBtn"
              sx={styleIconImg}
            />
          </Button>
          <Button variant="text" sx={styleCenterBtn}>
            <Box
              component="img"
              src={downloadIcon}
              alt="downloadBtn"
              sx={styleIconImg}
              onClick={download}
            />
          </Button>
          <Button variant="text" sx={styleSideBtn}>
            <Copyelement resultImg={url} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
