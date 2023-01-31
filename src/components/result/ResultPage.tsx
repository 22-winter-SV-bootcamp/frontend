// @flow
import { Box, Button, Typography, styled, IconButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import testSimpson from '/assets/pages/user/Simpson.png';
import downloadIcon from '/assets/pages/result/downloadIcon.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { imageDownload } from './imageDownload';

import { theme } from '@/utils/mui/breakpoints';
import customBtn from '/assets/pages/result/customBtn.png';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ratio_1_1 from '/assets/pages/result/1_1.png';
import ratio_2_3 from '/assets/pages/result/2_3.png';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SVGMaleMiddle from '@/svgComponents/male/hair/SVGMaleMiddle';
import ModalComponent from './modal/ModalComponent';
import CustomSVG from '../user/CustomSVG';
import { borderBottom } from '@mui/system';
import domToImg from '@/utils/method/domToImg';
import { saveAs } from 'file-saver';

type Props = {};
export const ResultPage = (props: Props) => {
  const [url, setUrl] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [change, setChange] = useState(false);
  const [ratioBtn, setRatioBtn] = useState(false);
  const [modal, setModal] = useState(false);
  console.log(location.state);
  // useEffect(() => {
  //   /* Link로 결과 페이지로 넘어갈떄 props에 state값을 주면 결과 페이지 에서 사용 가능, 나는 이걸 url 상태값에 저장 */
  //   setUrl(location.state.link);
  // });

  const goFirstPage = () => {
    navigate('/', { replace: true });
  };
  const goCustomPage = () => {
    navigate('/custom', { replace: true });
  };

  const ratioChange = () => {
    /* 비율 수정 */
    setRatioBtn((pre) => !pre);
  };

  const changeBtn = () => {
    setChange(true);
  };

  const openModal = () => {
    setModal((pre) => !pre);
  };

  const download = async () => {
    /* location의 state값이 undefined이 아니라는 걸 알려주기 위해 사용 */

    console.log(svgRef.current);
    const blob = await domToImg(svgRef.current);
    saveAs(blob);

    url &&
      imageDownload({
        href: url,
      });
  };

  const styleContainer = {
    height: '100%',
    background: 'linear-gradient(to bottom, #FFE3C5, #FFF3E5 90%)',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  };

  const FilmLayout = styled('div')(({ theme }) => ({
    height: '100%',
    width: '100%',
    maxWidth: '760px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    background: '#FFFFFF',
    justifyContent: 'space-between',
    [theme.breakpoints.down('desktop')]: {
      maxWidth: '760px',
      fontSize: '15px',
    },
    [theme.breakpoints.down('tablet')]: {
      fontSize: '10px',
    },
    [theme.breakpoints.up('desktop')]: {
      maxWidth: '652px',
      fontSize: '13px',
    },
  }));

  const headerLayout = {
    marginTop: 1,
    marginBottom: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const styleTitle = {
    fontWeight: 'medium',
    fontFamily: 'Monospace',
  };

  const mainLayout = {
    // height: '70%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  // const StyleMainImg = styled('div')(({ theme }) => ({
  //   position: 'relative',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'bottom',
  //   width: '77%',
  //   background: '#FFAEAE',
  //   aspectRatio: ratioBtn ? '2/3' : '1/1',
  //   overflow: 'hidden',
  //   // filter: 'opacity(0.5) drop-shadow(0 0 0 #CCE7FF)',
  //   [theme.breakpoints.down('desktop')]: {
  //     maxWidth: '557px',
  //   },
  //   [theme.breakpoints.up('desktop')]: {
  //     maxWidth: '477px',
  //   },
  // }));

  // const styletriangle = {
  //   position: 'absolute',
  //   bottom: '0',
  //   height: ratioBtn ? '130%' : '140%',
  //   width: ratioBtn ? '90%' : '130%',
  //   objectFit: 'fill',
  // };

  const footerLayout = {
    height: '21%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  };

  const styleLeftBtn = {
    p: '6px',
    '&:hover': {
      height: '6.5em',
      width: '6.5em',
    },
    height: '5.8em',
    width: '5.8em',
    minWidth: '58px',
    background: change
      ? 'linear-gradient(135deg, #E9E9E9, #FFFFFF)'
      : 'linear-gradient(135deg, #FFE2C5, #FFF2E4)',
    boxShadow: '3px 3px rgba(0, 0, 0, 0.25)',
    fontSize: 'inherit',
  };

  const styleRightBtn = {
    p: '6px',
    pr: ratioBtn ? '6px' : 0,
    '&:hover': {
      height: '6.5em',
      width: '6.5em',
    },
    height: '5.8em',
    width: '5.8em',
    minWidth: '58px',
    boxShadow: '3px 3px rgba(0, 0, 0, 0.25)',
    background: 'linear-gradient(135deg, #E9E9E9, #FFFFFF)',
    fontSize: 'inherit',
  };

  const styleCenterBtn = {
    p: '6px',
    '&:hover': {
      height: '7.6em',
      width: '9.2em',
    },
    height: '6.6em',
    width: '8.2em',
    minWidth: '82px',
    minHeight: '66px',
    background: 'linear-gradient(135deg, #E9E9E9, #FFFFFF)',
    boxShadow: '3px 3px rgba(0, 0, 0, 0.25)',
    fontSize: 'inherit',
    borderRadius: '40%',
  };

  const styleCameraIcon = {
    color: '#989898',
    fontSize: 'inherit',
    height: '4em',
    width: '4em',
  };

  const styleCustomIcon = {
    height: '70%',
  };

  const styleDownloadBtn = {
    p: 0,
    '&:hover': {
      height: '9em',
      width: '9em',
    },
    height: '8em',
    width: '8em',
    minWidth: '82px',
    minHeight: '66px',
    fontSize: 'inherit',
    filter: 'drop-shadow(3px 3px rgba(0, 0, 0, 0.25))',
  };

  const svgRef: any = useRef();

  return (
    <Box sx={styleContainer}>
      <FilmLayout theme={theme}>
        <Box ref={svgRef} sx={{ heigth: 'auto', backgroundColor: 'white' }}>
          <Box className="headerLayout" sx={headerLayout}>
            <Typography
              variant="h3"
              align="center"
              sx={[styleTitle, { color: '#7E7E7E' }]}
            >
              심슨필름
            </Typography>
          </Box>
          <Box className="mainLayout" sx={mainLayout}>
            {modal && <ModalComponent url={url} changeModal={openModal} />}

            <CustomSVG
              info={{
                gender: 'female',
                hair: 'long',
                hairColor: 'white',
                top: 'blazer',
                topColor: 'white',
                bottom: 'jeans',
                bottomColor: 'white',
                background: 'background1',
                inner: 'basic_t_shirts',
                innerColor: 'white',
              }}
              ratioBtn={ratioBtn}
            ></CustomSVG>
            <Box sx={{ height: 100, width: '100%', bgcolor: 'white' }}></Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: '100%',
            position: 'absolute',
            bottom: 50,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Box className="footerLayout" sx={footerLayout}>
            <IconButton
              sx={[styleLeftBtn, { paddingRight: 0 }]}
              onClick={change ? goFirstPage : goCustomPage}
            >
              {change ? (
                <HomeOutlinedIcon sx={styleCameraIcon} />
              ) : (
                <Box
                  component="img"
                  alt="goCustomPage"
                  src={customBtn}
                  sx={styleCustomIcon}
                />
              )}
            </IconButton>
            {change ? (
              <Button sx={styleDownloadBtn} onClick={download}>
                <Box
                  component="img"
                  alt="downloadImage"
                  src={downloadIcon}
                  sx={{
                    height: '110%',
                    textShadow: '3px 3px rgba(0, 0, 0, 0.25)',
                  }}
                />
              </Button>
            ) : (
              <Button sx={styleCenterBtn} onClick={changeBtn}>
                <PhotoCameraIcon sx={styleCameraIcon} />
              </Button>
            )}
            <IconButton
              sx={styleRightBtn}
              onClick={change ? openModal : ratioChange}
            >
              {change ? (
                <ShareOutlinedIcon sx={styleCameraIcon} />
              ) : (
                <Box
                  component="img"
                  alt="ratioControl"
                  src={ratioBtn ? ratio_1_1 : ratio_2_3}
                  sx={{ height: ratioBtn ? '50%' : '40%' }}
                />
              )}
            </IconButton>
          </Box>
        </Box>
      </FilmLayout>
    </Box>
  );
};
