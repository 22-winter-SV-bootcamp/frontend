import React, { useEffect } from 'react';
import Simpson from '../../assets/Simpson.png';
import Simpson2 from '../../assets/Simpson2.png';
import Simpson3 from '../../assets/Simpson3.png';

import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container, padding } from '@mui/system';
import { createTheme, styled } from '@mui/material/styles';
import { red, green, blue } from '@mui/material/colors';

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80vw' /* 16x32= 500px(default값 16) */,
  height: '90vh' /* 16x25= 400px(default값 16) */,
  bgcolor: 'background.paper',
  border: '2px solid #2196f3',
  borderRadius: 5,
  boxShadow: 24 /* 그림자 효과 */,
  p: 3 /* padding */,
  display: 'flex' /* 레이아웃 */,
  flexDirection: 'column' /* 세로 방향 */,
  justifyContent: 'space-between' /* 양 끝으로 이동 */,
};

const styleRow = {
  display: 'flex' /* 레이아웃 */,
  flexDirection: 'row' /* 가로 방향 */,
  justifyContent: 'center' /* 중앙으로 이동 */,
};

const styleImg = {
  width: '46vw' /* 16x8.5= 136px(default값 16) */,
  height: '64vh' /* 16x19.5= 312px(default값 16) */,
  alignSelf: 'center',
  objectFit: 'contain' /* 비율유지한채, 이미지 잘리지 않게, 남는공간 비워둠 */,
  content: {
    laptop: `url(${Simpson})`, //img src from 0 up to mobile
    mobile: `url(${Simpson})`, //img src from mobile up to tablet
    tablet: `url(${Simpson2})`, //img src from tablet up to desktop
    desktop: `url(${Simpson3})`, //img src from desktop up to ~
  },
  alt: 'Loading...',
};

const styleIcon = { position: 'absolute', right: 1, top: 1 };

const Box2 = styled('div')(({ theme }) => ({
  height: '100vh',
  padding: theme.spacing(1),
  [theme.breakpoints.up('desktop')]: {
    height: '50rem',
    width: '64rem',
  },
  // [theme.breakpoints.up('tablet')]: {},
  // [theme.breakpoints.up('desktop')]: {},
}));

const Box3 = styled('div')(({ theme }) => ({
  height: '100vh',
  padding: theme.spacing(1),
  // [theme.breakpoints.between('tablet', 'desktop')]: {
  //   height: '70vh',
  //   width: '55vw',
  // },     /* 필요시 사용, 크기 조정*/

  [theme.breakpoints.up('desktop')]: {
    height: '420px',
    width: '400px',
  },

  // [theme.breakpoints.up('desktop')]: {},
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

export function EasterEgg() {
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(styleModal);
  useEffect(() => {
    console.log(open); /* 모달창 상태 확인 */
  }, [open]);

  return (
    // <Container fixed>
    <Modal
      open={open} /* true 이면 모달창 open */
      onClose={handleClose} /* 빈 창 누르면 모달창 close */
      aria-labelledby="modal-title" /* 모달 제목 */
      aria-describedby="modal-description" /* 모달 설명 */
    >
      <Box2 sx={styleModal} theme={theme}>
        <Box sx={styleRow}>
          <Typography
            id="modal-title"
            variant="h2"
            component="h2"
            style={{
              textAlign: 'center' /* 텍스트(컴포넌트) 가운데 정렬 */,
              fontWeight: 'medium' /* font 두꼐 */,
              fontSize: 45 /* font 사이즈 */,
            }}
          >
            Are you Homer Simpson?
          </Typography>
          <IconButton color="primary" onClick={handleClose} sx={styleIcon}>
            <CancelPresentationIcon fontSize="large" />
          </IconButton>
        </Box>
        {/* 자체 정렬 */}
        <Box3 sx={styleImg} theme={theme}>
          <Box component="img" id="modal-description" sx={styleImg}></Box>
        </Box3>
      </Box2>
    </Modal>
    //</Container>
  );
}
