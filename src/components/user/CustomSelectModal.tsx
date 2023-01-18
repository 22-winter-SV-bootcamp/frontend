import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { SetStateAction } from 'react';
import CheckItemList from './common/CheckItemList';

const CustomSelectModal = ({
  setModal,
  select,
  setInfo,
  gender,
}: {
  setModal: React.Dispatch<SetStateAction<boolean>>;
  select: string;
  setInfo: any;
  gender: string;
}) => {
  const colorArr = {
    white: '#F9F6F6',
    cream: '#292121',
    black: '#32454C',
    gary: '#B8BFDA',
    pink: '#E4007F',
    red: '#FF0000',
    orange: '#FE8B10',
    yellow: '#FFF174',
    green: '#60906D',
    blue: '#0809FF',
    navy: '#3E4982',
    purple: '#E179E3',
    brown: '#886024',
    beige: '#CEB37D',
  };
  // const styles: any = {
  //   hair: {
  //     short: 'a',
  //     long: 'b',
  //     middle: 'c',
  //   },
  //   top: {
  //     // TODO: -blazer 원래는 이거임
  //     blazer: '@/assets/custom/bart.png',
  //     blouse: '@/assets/custom/bart.png',
  //     cardigan: '@/assets/custom/bart.png',
  //     coat: '@/assets/custom/bart.png',
  //     denim: '@/assets/custom/bart.png',
  //     hoodi: '@/assets/custom/bart.png',
  //     jumper: '@/assets/custom/bart.png',
  //     mustang: '@/assets/custom/bart.png',
  //     riders: '@/assets/custom/bart.png',
  //     shirts: '@/assets/custom/bart.png',
  //     pkshirts: '@/assets/custom/bart.png',

  //     sweatshirts: '@/assets/custom/bart.png',
  //   },
  //   bottom: {
  //     leggings: '@/assets/custom/bart.png',
  //     sweatpants: '@/assets/custom/bart.png',
  //     slacks: '@/assets/custom/bart.png',
  //     skirt: '@/assets/custom/bart.png',
  //     sweater: '@/assets/custom/bart.png',
  //     // TODO: Half-shortpants 원래는 이거임
  //     HalfShortpants: '@/assets/custom/bart.png',
  //   },
  //   background: {
  //     type1: 'd',
  //     type2: 'e',
  //     type3: 'f',
  //   },
  // };

  const styles: any = {
    female: {
      hair: ['short', 'middle', 'long'],
      top: ['a', 'b', 'c', 'd'],
      bottom: ['e', 'f'],
      background: ['g', 'h', 'i'],
    },
    male: {
      hair: ['short', 'middle', 'long'],
      top: ['g', 'h', 'i'],
      bottom: ['a', 'b', 'c', 'd'],
      background: ['e', 'f'],
    },
  };

  return (
    <Box>
      <CheckItemList
        select={select}
        setInfo={setInfo}
        title="Style"
        arr={styles[gender][select]}
      ></CheckItemList>
      <CheckItemList
        select={select + 'Color'}
        setInfo={setInfo}
        title="Color"
        arr={Object.keys(colorArr)}
      ></CheckItemList>
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
