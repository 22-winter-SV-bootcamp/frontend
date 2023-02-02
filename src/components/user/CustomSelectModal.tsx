import { Button, Hidden, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { prependListener } from 'process';
import React, { SetStateAction, useEffect, useState } from 'react';
import CheckColorList from './common/CheckColorList';

import CheckItemList from './common/CheckItemList';

function CustomSelectModal({
  select,
  setInfo,
  setTitleIconBtn,
  setCheck,
  setIsColorChange,
  info,
  isColorChange
}: any) {
  const colorArr:Record<string,string> = {
    white: '#FFFFFF',
    melangeGrey: '#D4D4D4',
    grey: '#A6A6A6',
    coolGrey: '#4B5053',
    charcoal: '#444444',
    black: '#2B2929',
    realBlack: '#171717',
    ivory: '#F5EFEF',
    lightBeige: '#DED3AA',
    beige: '#D6BB87',
    peachBeige: '#DBBC97',
    deepBeige: '#BEA78C',
    darkBeige: '#A3907B',
    beigeBrown: '#7B6146',
    deepBrown: '#4A3A2A',
    darkBrown: '#362710',
    blond: '#FFECAE',
    lightBrown: '#A36B3E',
    brickBrown: '#854809',
    brown: '#54310A',
    khaki: '#3C492A',
    dustyGreen: '#779C74',
    lightBlue: '#CCE7FF',
    middleBlue: '#417797',
    deepBlue: '#165690',
    indigoBlue: '#1A2B47',
    burgundy: '#640013',
    orange: '#E88100',
    yellow: '#FFCB00',
    navy: '#002A58',
    purple: '#78009C',
    skyBlue: '#9CB0FF',
    vintageBlue: '#324C7E',
    blue: '#0088D4',
    pink: '#FFB6B6',
    magentaPink: '#EF5A7D',
    red: '#B50300',
    pastelGreen: '#87B24A',
    lightGreen: '#629021',
    green: '#0A7C00',
    neonBlue: '#02ABCF',
    coral: '#DF5353',
    skin: '#FFD521',
  };

  useEffect(() => {
    console.log('CustomSelectModal');
  }, []);

  return (
    <Box
      sx={{
        // padding: '20px',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        overflowY: 'scroll',
      }}
    >
      {select !== 'gender' && select !=="backgroundColor" && (
        <div>
          <CheckItemList
            info={info}
            select={select}
            setInfo={setInfo}
            isColorChange={isColorChange}
            setCheck={setCheck}
            setIsColorChange={setIsColorChange}
            setTitleIconBtn={setTitleIconBtn}
          ></CheckItemList>

          {/* <CheckColorList
              select={select}
              setInfo={setInfo}
            ></CheckColorList>
       */}
        </div>
      )
      }
    { select === "background" && (
        <Box>
          {Object.keys(colorArr).map((v)=>{
            return <Tooltip title={v}>
              <Button
                sx={{ width: "32px", height:"32px", borderRadius:"32px" , margin: '10px', bgcolor:colorArr[v] }}
                key={v}
                onClick={() => {
                  setInfo((pre: any) => ({ ...pre, backgroundColor: v }));
                }}
              >
              </Button>
            </Tooltip>
          })}
        </Box>
      )}
      { select === "gender" && (
        <Box>
          <Box
            onClick={() => {
              setInfo((pre: any) => ({ ...pre, gender: 'female' }));
            }}
            sx={{ width: 50, height: 50 }}
            component="img"
            src={`/assets/pages/result/female.png`}
            alt="female"
          ></Box>
          <Box
            onClick={() => {
              setInfo((pre: any) => ({ ...pre, gender: 'male' }));
            }}
            sx={{ width: 50, height: 50 }}
            component="img"
            src={`/assets/pages/result/male.png`}
            alt="male"
          ></Box>
        </Box>
      )}
    </Box>
  );
}

export default CustomSelectModal;
