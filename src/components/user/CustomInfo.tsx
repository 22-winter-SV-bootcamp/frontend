import { Check } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';
import CheckItem from './common/CheckItem';
import CustomSelectModal from './CustomSelectModal';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router-dom';
const CustomInfo = ({ info, setInfo, svgRef }: any) => {
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState('hair');
  const navigate = useNavigate();
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

  // const postStyles = async () => {
  //   const svg = svgRef.current;
  //   console.log(svg);
  //   let d = new FormData();
  //   domtoimage.toBlob(svg).then((blob) => {
  //     d.append('file', blob);
  //     console.log(d);
  //   });
  // };

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
            sx={{ width: 30, height: 30 }}
            component="img"
            src="src/assets/custom/gender/male.png"
            alt="male"
          ></Box>
        </Button>
        <Button
          onClick={() => {
            changeGender('male');
          }}
        >
          <Box
            sx={{ width: 30, height: 30 }}
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
      <Button
        onClick={async () => {
          const svg = svgRef.current;
          console.log(svg);
          let d = new FormData();

          await domtoimage
            .toBlob(svg, {
              width: svg.clientWidth * 4,
              height: svg.clientHeight * 4,
              style: {
                transform: 'scale(' + 4 + ')',
                transformOrigin: 'top left',
              },
            })
            .then((blob) => {
              d.append('file', blob);
              console.log(d);
              saveAs(blob, 'card.png');
              for (const i of d) {
                console.log(i);
              }
            });
          await axios
            .post('api/v1/styles', {
              file: d,
              gender: 'female',
              top: 'coat',
              top_color: 'yellow',
              bottom: 'leggings',
              bottom_color: 'red',
            })
            .then((res) => {
              console.log(res.data);
              navigate('/result', { state: res.data });
            });
        }}
      >
        Done
      </Button>
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
