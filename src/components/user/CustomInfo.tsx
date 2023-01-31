import { Check } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { height } from '@mui/system';
import { Box } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import CheckItem from './common/CheckItem';
import CustomSelectModal from './CustomSelectModal';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router-dom';
import domToImg from '@/utils/method/domToImg';
import axiosCustom from '@/apis/createAxios';
import postCustomStyleInfo from '@/apis/postCustomStyleInfo';
import { styled } from '@mui/material';
import { theme } from '@/utils/mui/breakpoints';
import html2canvasToBlob from '@/utils/method/html2canvasToBlob';

const CustomInfo = ({ info, setInfo, svgRef }: any) => {
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState('hair');
  const navigate = useNavigate();

  let {
    gender,
    hair,
    hairColor,
    top,
    topColor,
    bottom,
    bottomColor,
    background,
    inner,
    innerColor,
  } = info;
  console.log('info가 바뀌었나?', info);

  const changeGender = (gender: string) => {
    setInfo((pre: any) => ({ ...pre, gender: gender }));
  };

  const Box1 = styled('div')(({ theme }) => ({
    width: 300,
    height: 300,
    color: '#FFCE00',
    maxWidth: 500,
    maxHeight: 500,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('mobile')]: {
      width: 300,
      height: 300,
    },
    [theme.breakpoints.between('mobile', 'tablet')]: {
      width: 350,
      height: 350,
    },
    [theme.breakpoints.between('tablet', 'desktop')]: {
      width: 400,
      height: 400,
    },
    [theme.breakpoints.up('desktop')]: {
      width: 500,
      height: 500,
    },
  }));

  const Box2 = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    background: '#95989b',
    maxWidth: 500,
    maxHeight: 500,
    margin: 'auto',
    display: modal ? 'none' : 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    alignItems: 'center',
    [theme.breakpoints.down('mobile')]: {
      padding: theme.spacing(1, 1),
    },
    [theme.breakpoints.between('mobile', 'tablet')]: {
      padding: theme.spacing(2, 2),
    },
    [theme.breakpoints.between('tablet', 'desktop')]: {
      padding: theme.spacing(3, 3),
    },
    [theme.breakpoints.up('desktop')]: {
      padding: theme.spacing(5, 5),
    },
  }));

  const Box3 = styled('div')(({ theme }) => ({
    width: '100%',
    height: '15%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    [theme.breakpoints.down('mobile')]: {},
    [theme.breakpoints.between('mobile', 'tablet')]: {},
    [theme.breakpoints.between('tablet', 'desktop')]: {},
    [theme.breakpoints.up('desktop')]: {},
  }));

  const IconBox = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('mobile')]: {
      width: 35,
      heigth: 35,
    },
    [theme.breakpoints.between('mobile', 'tablet')]: {
      width: 40,
      heigth: 40,
    },
    [theme.breakpoints.between('tablet', 'desktop')]: {
      width: 45,
      heigth: 45,
    },
    [theme.breakpoints.up('desktop')]: {
      width: 50,
      heigth: 50,
    },
  }));

  return (
    <Box1 theme={theme}>
      <Box2 theme={theme}>
        <Box3 theme={theme}>
          <Typography variant="h4">gender</Typography>
          <Box>
            <Button
              onClick={() => {
                changeGender('female');
              }}
            >
              <IconBox>
                <img
                  width={35}
                  height={35}
                  src={`/assets/pages/user/female.png`}
                ></img>
              </IconBox>
            </Button>
            <Button
              onClick={() => {
                changeGender('male');
              }}
            >
              <IconBox>
                <img
                  width={35}
                  height={35}
                  src={`/assets/pages/user/male.png`}
                ></img>
              </IconBox>
            </Button>
          </Box>
        </Box3>
        {['hair', 'inner', 'top', 'bottom', 'background'].map((title) => (
          <CheckItem
            key={title}
            info={info}
            title={title}
            setModal={setModal}
            setSelect={setSelect}
          ></CheckItem>
        ))}
        <Button
          variant="contained"
          sx={{ alignSelf: 'end', background: '#D9D9D9', color: 'black' }}
          onClick={async (e: any) => {
            e.preventDefault();
            // alert(1);
            let formData = new FormData();

            let blob = await domToImg(svgRef.current);
            // let blob = await html2canvasToBlob(svgRef.current);
            console.log('blob', blob);
            saveAs(blob);

            // blob.toBlob((b: any) => formData.append('file', b));
            formData.append('file', blob);
            formData.append('gender', gender);
            formData.append('top', top);
            formData.append('top_color', topColor);
            formData.append('bottom', bottom);
            formData.append('bottom_color', bottomColor);

            // 모바일에서 안먹힘..?
            // let link = postCustomStyleInfo(formData);
            // console.log(link);
            // alert('hi');
            // navigate('/result', { state: link });

            let link = await postCustomStyleInfo(formData);
            navigate('/result', { state: link });
          }}
        >
          <Typography variant="h4">Done</Typography>
        </Button>
      </Box2>
      {modal && (
        <CustomSelectModal
          info={info}
          gender={info.gender}
          select={select}
          setInfo={setInfo}
          modal={modal}
          setModal={setModal}
        ></CustomSelectModal>
      )}
    </Box1>
  );
};

export default CustomInfo;
