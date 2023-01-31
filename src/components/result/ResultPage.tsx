// @flow
import { Box, Button, Typography, styled, IconButton } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import downloadIcon from '/assets/pages/result/downloadIcon.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { imageDownload } from './download/imageDownload';

import { theme } from '@/utils/mui/breakpoints';
import customBtn from '/assets/pages/result/customBtn.png';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ratio_1_1 from '/assets/pages/result/1_1.png';
import ratio_2_3 from '/assets/pages/result/2_3.png';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import ModalComponent from './modal/ModalComponent';
import CustomSVG from '../user/CustomSVG';
import domToImg from '@/utils/method/domToImg';
import { saveAs } from 'file-saver';
import { CustomBox } from './custom/CustomBox';
import resultFilter from '@/utils/method/resultFilter';

type Props = {};
export const ResultPage = (props: Props) => {
  const [url, setUrl] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [change, setChange] = useState(false);
  const [ratioBtn, setRatioBtn] = useState(false);
  const [modal, setModal] = useState(false);
  const [custom, setCustom] = useState(false);
  const svgRef: any = useRef();

  const [info, setInfo] = useState({
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
  });

  useEffect(() => {
    let result = resultFilter(location.state.result);

    setInfo((pre: any) => ({ ...pre, ...result }));
  }, []);
  // useEffect(() => {
  //   /* Link로 결과 페이지로 넘어갈떄 props에 state값을 주면 결과 페이지 에서 사용 가능, 나는 이걸 url 상태값에 저장 */
  //   setUrl(location.state.link);
  // });

  const goFirstPage = () => {
    navigate('/', { replace: true });
  };

  const ratioChange = () => {
    /* 비율 수정 */
    setRatioBtn((pre) => !pre);
  };

  const changeBtn = () => {
    /* 하단 아이콘 버튼 3개 상태 변환 */
    setChange(true);
  };

  const openModal = () => {
    /* 모달창 상태 변환 */
    setModal((pre) => !pre);
  };

  const onChangeCustom = () => {
    /* 하단 버튼 3개 커스텀 상태 창으로 변환 */
    setCustom((pre) => !pre);
    ratioBtn && setRatioBtn((pre) => !pre);
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
    alignItems: 'center',
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

  const StyleDescibe = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '10%',
    height: '30%',
    width: '77%',
    maxWidth: '450px' /* 화면에 따라 수정 예정 */,
    borderRadius: '10%',
    background: '#FFBA75',
    whiteSpace: 'pre-line',
    boxShadow: '3px 3px rgba(0, 0, 0, 0.25)',
    marginBottom: '3px',
    [theme.breakpoints.down('desktop')]: {
      maxWidth: '557px',
    },
    [theme.breakpoints.up('desktop')]: {
      maxWidth: '477px',
    },
  }));

  const firstLayout = {
    height: '15%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'bottom',
    paddingRight: '10px',
    paddingTop: '10px',
  };

  const okBtn = {
    minWidth: '23px',
    minHeight: '50px',
    height: '90%',
    position: 'relative',
  };

  const styleOkIcon = {
    width: '100%',
    height: '70%',
    color: '#FFFFFF',
    filter: 'drop-shadow(4px 2px rgba(0, 0, 0, 0.25))',
  };

  return (
    <Box sx={styleContainer}>
      <FilmLayout theme={theme}>
        <Box ref={svgRef} sx={{ width: '100%' }}>
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
              custom={custom}
            ></CustomSVG>
            {!custom ? null : (
              <Box sx={{ height: 100, width: '100%', bgcolor: 'white' }}></Box>
            )}
          </Box>
        </Box>
        {!custom ? (
          <CustomBox
            info={info}
            setInfo={setInfo}
            onChangeCustom={onChangeCustom}
          />
        ) : (
          <Box
            /* footerlayout 제일 하단에 고정 */
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
                onClick={change ? goFirstPage : onChangeCustom}
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
        )}
      </FilmLayout>
    </Box>
  );
};
