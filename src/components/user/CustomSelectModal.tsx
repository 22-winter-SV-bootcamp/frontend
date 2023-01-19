import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { SetStateAction, useState } from 'react';
import CheckColorList from './common/CheckColorList';
import CheckItemList from './common/CheckItemList';

const CustomSelectModal = ({
  modal,
  setModal,
  select,
  setInfo,
  gender,
}: {
  setModal: React.Dispatch<SetStateAction<boolean>>;
  select: string;
  setInfo: any;
  gender: string;
  modal: boolean;
}) => {
  const colorArr = {
    white: '#f9f6f6',
    cream: '#292121',
    black: '#32454c',
    gary: '#b8bfda',
    pink: '#e4007f',
    red: '#ff0000',
    orange: '#fe8b10',
    yellow: '#fff174',
    green: '#60906d',
    blue: '#0809ff',
    navy: '#3e4982',
    purple: '#e179e3',
    brown: '#886024',
    beige: '#ceb37d',
  };

  const styles: any = {
    female: {
      hair: ['short', 'middle', 'long'],
      top: [
        'blazer',
        'blouse',
        'cardigan',
        'coat',
        'hoodi',
        'jumper',
        'mustang',
        'onepiece',
        'pkshirts',
        'shirts',
        'sweater',
        'sweatshirts',
        't_shirts',
      ],
      bottom: [
        'denim',
        'half_shortpants',
        'leggings',
        'skirt',
        'slacks',
        'sweatpants',
      ],
      background: ['background1', 'background2', 'background3'],
    },
    male: {
      hair: ['short', 'middle', 'long'],
      top: [
        'blazer',
        'blouse',
        'cardigan',
        'coat',
        'hoodi',
        'jumper',
        'mustang',
        'onepiece',
        'pkshirts',
        'shirts',
        'sweater',
        'sweatshirts',
        't_shirts',
      ],
      bottom: [
        'denim',
        'half_shortpants',
        'leggings',
        'skirt',
        'slacks',
        'sweatpants',
      ],
      background: ['background1', 'background2', 'background3'],
    },
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        color: 'black',
        background: '#FFCE00',
        display: modal ? 'flex' : 'block',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CheckItemList
        select={select}
        setInfo={setInfo}
        title="Style"
        gender={gender}
        arr={styles[gender][select]}
      ></CheckItemList>
      {/* <CheckItemList
        select={select + 'Color'}
        setInfo={setInfo}
        title="Color"
        arr={Object.keys(colorArr)}
      ></CheckItemList> */}
      <CheckColorList
        select={select + 'Color'}
        color={colorArr}
        setInfo={setInfo}
        title="Color"
      ></CheckColorList>
      <Button
        onClick={() => {
          setModal(false);
        }}
      >
        <Box>OK</Box>
      </Button>
    </Box>
  );
};

export default CustomSelectModal;
