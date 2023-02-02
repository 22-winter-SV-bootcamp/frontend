// @flow
import React, { useState } from 'react';
import { Box, Button, IconButton, styled } from '@mui/material';
import { theme } from '@/utils/mui/breakpoints';
import closeIcon from '/assets/pages/result/closeIcon.png';
import kakaotalkIcon from '/assets/pages/result/kakaotalkIcon.png';
import linkIcon from '/assets/pages/result/linkIcon.png';
import { sendKakao } from '../kakaotalk/sendKakao';
import { CustomTooltip } from './CustomTooltip';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

type Props = {
  url: string;
};

const ModalComponent = ({ url }: Props) => {
  const [copy, setCopy] = useState(false);
  const [open, setOpen] = useState(false);

  // const closeModal = () => {
  //   changeModal();
  // };

  const onCopyClick = async () => {
    setCopy((pre) => !pre);
    setOpen(true);
    clipboard(url);
    setTimeout(() => {
      setCopy((pre) => !pre);
      setOpen(false);
    }, 5000);
  };

  const clipboard = (url: string) => {
    navigator.clipboard.writeText(url);
  };

  const handleOpen = async () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const ModalLayout = styled('div')(({ theme }) => ({
    // position: 'relative',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'bottom',
    // width: '160px',
    // height: '160px',
    width: '5em',
    height: '3em',
    // minheight: '185px',
    // background: '#FFFFFF',
    // borderRadius: '10% 10% 10% 10%/ 12% 12% 12% 12%',

    position: 'absolute',
    bottom: '70px',
    zIndex: 10,
    // boxShadow: '4px 4px rgba(0, 0, 0, 0.25)',
    // alignSelf: 'end',
    [theme.breakpoints.down('tablet')]: {
      right: '15.5%',
      maxWidth: '300px',
    },
    [theme.breakpoints.between('tablet', 'desktop')]: {
      bottom: '115px',
      right: '9.5%',
      maxWidth: '557px',
    },
    [theme.breakpoints.up('desktop')]: {
      right: '8%',
      bottom: '110px',
      maxWidth: '477px',
    },
  }));

  const mainLayout = {
    position: 'relative',
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const styleBtn = {
    p: '6px',
    '&:hover': {
      transform: 'scale(1.2)',
    },
    height: '2em',
    width: '2em',
    boxShadow: '3px 3px rgba(0, 0, 0, 0.25)',
    background: 'linear-gradient(135deg, #FFFFFF, #F1F1F1, #FFFFFF)',
    fontSize: 'inherit',
  };

  const styleIcon = {
    height: '70%',
    filter: 'opacity(0.5) drop-shadow(0 0 0 #606060)',
  };

  return (
    <ModalLayout className="modalLayout" theme={theme}>
      <Box sx={mainLayout}>
        <CustomTooltip
          arrow
          placement="top-end"
          title={
            <>
              <CheckCircleOutlineIcon
                fontSize="inherit"
                sx={{
                  mr: '10px',
                }}
              />
              <Box sx={{ display: 'inline' }}>copyed</Box>
            </>
          }
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          disableInteractive
          TransitionProps={{ timeout: 2200 }}
        >
          <IconButton sx={styleBtn} onClick={onCopyClick}>
            <Box component="img" src={linkIcon} sx={styleIcon} />
          </IconButton>
        </CustomTooltip>
        <IconButton
          sx={[
            styleBtn,
            {
              background: 'linear-gradient(135deg, #FFFFFF, #FFD521, #FAFAFA)',
            },
          ]}
          onClick={() => sendKakao(url)}
        >
          <Box component="img" src={kakaotalkIcon} sx={styleIcon} />
        </IconButton>
      </Box>
    </ModalLayout>
  );
};

export default ModalComponent;
