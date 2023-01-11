import React, { useEffect } from 'react';
import Simpson from '../assets/Simpson.png';

import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Container } from '@mui/system';

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '32rem' /* 16x32= 500px(default값 16) */,
  height: '25rem' /* 16x25= 400px(default값 16) */,
  bgcolor: 'background.paper',
  border: '2px solid #2196f3',
  borderRadius: 2,
  boxShadow: 24 /* 그림자 효과 */,
  p: 4 /* padding */,
  display: 'flex' /* 레이아웃 */,
  flexDirection: 'column' /* 세로 방향 */,
  justifyContent: 'space-between' /* 양 끝으로 이동 */,
};

const styleRow = {
  display: 'flex' /* 레이아웃 */,
  flexDirection: 'row' /* 세로 방향 */,
  justifyContent: 'center' /* 양 끝으로 이동 */,
};

const styleImg = {
  width: '8.5rem' /* 16x8.5= 136px(default값 16) */,
  height: '19.5rem' /* 16x19.5= 312px(default값 16) */,
  alignSelf: 'center',
  // object-fit:'cover',
};

export function EasterEgg() {
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    console.log(open); /* 모달창 상태 확인 */
  }, [open]);

  return (
    <Container fixed>
      <Modal
        open={open} /* true 이면 모달창 open */
        onClose={handleClose} /* 빈 창 누르면 모달창 close */
        aria-labelledby="modal-title" /* 모달 제목 */
        aria-describedby="modal-description" /* 모달 설명 */
      >
        <Box sx={styleModal}>
          <Box sx={styleRow}>
            <Typography id="modal-title" variant="h4" component="h2">
              Are you Homer Simpson?
            </Typography>
            <IconButton
              color="primary"
              onClick={handleClose}
              style={{ position: 'absolute', right: 0, top: 0 }}
            >
              <CancelPresentationIcon />
            </IconButton>
          </Box>
          {/* 자체 정렬 */}

          <Box
            component="img"
            id="modal-description"
            src={Simpson}
            sx={styleImg}
          ></Box>
        </Box>
      </Modal>
    </Container>
  );
}
