// @flow
import React from 'react';
import { theme } from '@/utils/mui/breakpoints';
import { Box, Button, IconButton, styled } from '@mui/material';
import closeIcon from '/assets/pages/result/closeIcon.png';
import genderIcon from '/assets/pages/result/genderIcon.png';

type Props = {
  onChangeCustom: () => void;
};
export const CustomBox = ({ onChangeCustom }: Props) => {
  const StyleDescibe = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center',
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

  const HeaderLayout = {
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

  const mainLayout = {
    height: '85%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const subLayout = {
    height: '50%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  };

  const styleBtn = {
    p: '6px',
    // pr: ratioBtn ? '6px' : 0,
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

  return (
    <StyleDescibe theme={theme}>
      <Box className="HeaderLayout" sx={HeaderLayout}>
        <Button sx={okBtn} onClick={onChangeCustom}>
          <Box component="img" src={closeIcon} sx={styleOkIcon} />
        </Button>
      </Box>
      <Box className="mainLayout" sx={mainLayout}>
        <Box className="firstLayout" sx={subLayout}>
          <IconButton
            sx={styleBtn}
            onClick={() => {
              console.log('기능을 넣으시요');
            }}
          >
            <Box
              component="img"
              alt="ratioControl"
              src={genderIcon}
              sx={{ height: '50%' }}
            />
          </IconButton>
        </Box>
        <Box className="secondLayout" sx={subLayout}></Box>
      </Box>
    </StyleDescibe>
  );
};
