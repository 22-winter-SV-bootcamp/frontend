import { Check } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Box, height } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import CheckItem from './common/CheckItem';
import CustomSelectModal from './CustomSelectModal';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router-dom';
import domToImg from '@/components/utils/domToImg';
import axiosCustom from '@/apis/createAxios';
import postCustomStyleInfo from '@/apis/postCustoStyleInfo';
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

  return (
    <Box
      sx={{
        color: '#FFCE00',
        width: '100%',
        maxWidth: '400px',
        height: '400px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          padding: 2,
          background: '#95989b',
          width: '90%',
          margin: 'auto',
          height: '100%',

          display: modal ? 'none' : 'flex',
          flexDirection: 'column',

          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: 50,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4">gender</Typography>
          <Box>
            <Button
              onClick={() => {
                changeGender('female');
              }}
            >
              <Box
                sx={{ width: 50, height: 50 }}
                component="img"
                src={`src/assets/custom/gender/female.png`}
                alt="male"
              ></Box>
            </Button>
            <Button
              onClick={() => {
                changeGender('male');
              }}
            >
              <Box
                sx={{ width: 50, height: 50 }}
                component="img"
                src="src/assets/custom/gender/male.png"
                alt="female"
              ></Box>
            </Button>
          </Box>
        </Box>
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
          onClick={async () => {
            let formData = new FormData();

            let blob = await domToImg(svgRef.current);

            formData.append('file', blob);
            formData.append('gender', gender);
            formData.append('top', top);
            formData.append('top_color', topColor);
            formData.append('bottom', bottom);
            formData.append('bottom_color', bottomColor);

            let link = await postCustomStyleInfo(formData);
            navigate('/result', { state: link });
          }}
        >
          <Typography variant="h4">Done</Typography>
        </Button>
      </Box>
      {modal && (
        <CustomSelectModal
          gender={info.gender}
          select={select}
          setInfo={setInfo}
          modal={modal}
          setModal={setModal}
        ></CustomSelectModal>
      )}
    </Box>
  );
};

export default CustomInfo;
