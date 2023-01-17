import { Check } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import CheckItem from './common/CheckItem';
import CustomSelectModal from './CustomSelectModal';

const CustomInfo = () => {
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState('hair');
  const [info, setInfo] = useState({
    gender: 'female',
    hair: 'short',
    hairColor: 'red',
    top: 'blaser',
    topColor: 'blue',
    bottom: 'jeans',
    bottomColor: 'green',
    background: 'type1',
  });

  console.log('info가 바뀌었나?', info);

  const changeGender = (gender: string) => {
    let init =
      gender === 'male'
        ? {
            gender: 'male',
            hair: 'short',
            hairColor: 'white',
            top: 't-shirts',
            topColor: 'white',
            bottom: 'slacks',
            bottomColor: 'white',
            background: 'type1',
          }
        : {
            gender: 'female',
            hair: 'short',
            hairColor: 'white',
            top: 't-shirts',
            topColor: 'white',
            bottom: 'slacks',
            bottomColor: 'white',
            background: 'type1',
          };

    setInfo(init);
  };

  return (
    <Box>
      <Box>
        <Typography>gender</Typography>
        <Button
          onClick={() => {
            changeGender('female');
          }}
        >
          <Box
            component="img"
            src="src/assets/custom/gender/male.png"
            alt="male"
          ></Box>
        </Button>
        <Button>
          <Box
            onClick={() => {
              changeGender('male');
            }}
            component="img"
            src="src/assets/custom/gender/female.png"
            alt="female"
          ></Box>
        </Button>
      </Box>
      {['hair', 'top', 'bottom', 'background'].map((title) => (
        <CheckItem
          key={title}
          info={info}
          title={title}
          setModal={setModal}
          setSelect={setSelect}
        ></CheckItem>
      ))}

      {modal && (
        <CustomSelectModal
          gender={info.gender}
          select={select}
          setInfo={setInfo}
          setModal={setModal}
        ></CustomSelectModal>
      )}
    </Box>
  );
};

export default CustomInfo;
