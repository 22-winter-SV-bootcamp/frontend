// @flow
import React, { useEffect, useMemo, useState } from 'react';
import { theme } from '@/utils/mui/breakpoints';
import { Box, Button, IconButton, styled } from '@mui/material';
import closeIcon from '/assets/pages/result/closeIcon.png';
import CustomSelectModal from '@/components/user/CustomSelectModal';
import { width } from '@mui/system';
import { useLocation } from 'react-router-dom';
import resultFilter from '@/utils/method/resultFilter';
import CheckColorList from '@/components/user/common/CheckColorList';
import { CloseOutlined } from '@mui/icons-material';

type Props = {
  onChangeCustom: () => void;
  setTitle: any;
  title: string;
  setInfo: any;
  setIsColorChange: any;
  info: any;
  isColorChange: any;
};
const CustomBox = ({
  onChangeCustom,
  setInfo,
  setTitle,
  title,
  setIsColorChange,
  isColorChange,
  info,
}: Props) => {
  const StyleDescibe = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',

    // justifyContent: 'center',
    // paddingLeft: '10%',

    height: '40%',
    width: '100%',
    padding: '16px',
    margin: '0px',
    // maxWidth: '450px' /* 화면에 따라 수정 예정 */,

    // borderTopLeftRadius:"5%",
    // borderTopRightRadius:"5%",

    background: '#FAE3C8',

    whiteSpace: 'pre-line',

    [theme.breakpoints.down('desktop')]: {},
    [theme.breakpoints.up('desktop')]: {},
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
    minWidth: '40px',
    minHeight: '40px',
    position: 'absolute',
    right: 16,
    zIndex: 20,
  };

  const styleOkIcon = {
    width: '100%',
    height: '70%',
    color: '#FFFFFF',
    filter: 'drop-shadow(4px 2px rgba(0, 0, 0, 0.25))',
  };

  const mainLayout = {
    height: '100%',
    position: 'relative',
    display: 'flex',
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const subLayout = {
    // height: '100%',
    position: 'relative',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    gap: '50px',
    gridTemplateColumns: `1fr 1fr 1fr`,
  };

  const styleBtn = {
    // p: '6px',
    // pr: ratioBtn ? '6px' : 0,

    height: '100px',

    // minWidth: '58px',
    boxShadow: '3px 3px rgba(0, 0, 0, 0.25)',
    background: 'linear-gradient(135deg, #E9E9E9, #FFFFFF)',
    fontSize: 'inherit',
  };

  const [titleIconBtn, setTitleIconBtn] = useState(false);
  const [check, setCheck] = useState(true);

  // const memoSetInfo = useMemo(setInfo,[]);
  // const memoSetInfo = useMemo(,[]);
  // const memoSetInfo = useMemo(setCheck,[]);
  // const memoSetInfo = useMemo(setInfo,[]);

  return (
    <StyleDescibe theme={theme}>
      {/* <Button sx={okBtn}>
        {titleIconBtn ? (
          <Box
            onClick={() => {
              setTitleIconBtn(false);
            }}
            component="img"
            src={'/assets/pages/result/1_1.png'}
            sx={styleOkIcon}
          />
        ) : (
          <Box
            onClick={onChangeCustom}
            component="img"
            src={closeIcon}
            sx={styleOkIcon}
          />
        )}
      </Button> */}
      <Box
        sx={{
          height: '15%',
          minHeight: '48px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent:"space-around"
        }}
      >
        {['gender', 'hair', 'top', 'inner', 'bottom', 'background'].map(
          (tmpTitle) => (
            <IconButton
              sx={{
                height: '100%',
                width: 0.136,
                p: 0,
                bgcolor: title === tmpTitle ? '#DCC5AF' : 'inherit',
                borderRadius: '100%',
              }}
              onClick={() => {
                if (isColorChange !== '') {
                  setIsColorChange('');
                }
                setTitle(tmpTitle);
                // setTitleIconBtn(true);
              }}
            >
                 <Box
                  component="img"
                  alt={tmpTitle}
                  src={`/assets/pages/result/${tmpTitle}Icon.png`}
                  sx={{  
                    width:0.5
                  }}
                />
            </IconButton>
          ),
        )}
        <IconButton onClick={onChangeCustom} sx={{ p: 0, width: 0.136, }}>
          <CloseOutlined sx={{width:0.3,height:0.3}}/>
        </IconButton>
      </Box>
      <Box
        className="mainLayout"
        sx={{
          display: 'flex',
          height: 1,
          overflow: 'auto',
        }}
      >
        <CustomSelectModal
          info={info}
          setInfo={setInfo}
          select={title}
          setCheck={setCheck}
          isColorChange={isColorChange}
          setIsColorChange={setIsColorChange}
          setTitleIconBtn={setTitleIconBtn}
        ></CustomSelectModal>

        {/* <CheckColorList setInfo={setInfo} select={title}></CheckColorList> */}
      </Box>
    </StyleDescibe>
  );
};

export default React.memo(CustomBox);
