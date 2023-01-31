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
  changeModal: () => void;
};

const ModalComponent = ({ url, changeModal }: Props) => {
  const [copy, setCopy] = useState(false);
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    changeModal();
  };

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
    width: '77%',
    height: '40%',
    minheight: '185px',
    background: '#FFE2C5',
    borderRadius: '15%',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    boxShadow: '4px 4px rgba(0, 0, 0, 0.25)',
    [theme.breakpoints.down('desktop')]: {
      maxWidth: '557px',
    },
    [theme.breakpoints.up('desktop')]: {
      maxWidth: '477px',
    },
  }));

  const headerLayout = {
    height: '30%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'bottom',
    paddingRight: '10px',
    paddingTop: '10px',
  };

  const closeBtn = {
    minWidth: '23px',
    minHeight: '50px',
    height: '90%',
    position: 'relative',
  };

  const stylecloseIcon = {
    width: '100%',
    height: '70%',
    color: '#FFFFFF',
    filter: 'drop-shadow(4px 2px rgba(0, 0, 0, 0.25))',
  };

  const mainLayout = {
    height: '70%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const styleShareBox = {
    width: '90%',
    height: '85%',
    minWidth: '249px',
    minHeight: '117px',
    background: '#FFFFFF',
    borderRadius: '15%',
    boxShadow: '4px 4px rgba(0, 0, 0, 0.25)',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: '15px',
  };

  const styleBtn = {
    p: '6px',
    pr: 0,
    '&:hover': {
      height: '6.5em',
      width: '6.5em',
    },
    height: '5.8em',
    width: '5.8em',
    minWidth: '58px',
    boxShadow: '3px 3px rgba(0, 0, 0, 0.25)',
    background: copy
      ? 'linear-gradient(135deg, #FFFFFF, #FFD521, #FAFAFA)'
      : 'linear-gradient(135deg, #FFFFFF, #F1F1F1, #FFFFFF)',
    fontSize: 'inherit',
  };

  const styleIcon = {
    height: '70%',
    filter: 'opacity(0.5) drop-shadow(0 0 0 #606060)',
  };

  return (
    <ModalLayout theme={theme}>
      <Box className="headerLayout" sx={headerLayout}>
        <Button sx={closeBtn} onClick={closeModal}>
          <Box component="img" src={closeIcon} sx={stylecloseIcon} />
        </Button>
      </Box>
      <Box className="mainLayout" sx={mainLayout}>
        <Box sx={styleShareBox}>
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
                background:
                  'linear-gradient(135deg, #FFFFFF, #FFD521, #FAFAFA)',
              },
            ]}
            onClick={() => sendKakao(url)}
          >
            <Box component="img" src={kakaotalkIcon} sx={styleIcon} />
          </IconButton>
        </Box>
      </Box>
    </ModalLayout>
  );
};

export default ModalComponent;
